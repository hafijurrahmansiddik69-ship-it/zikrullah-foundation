import { FOUNDATION_INFO } from '../data/mockData';

export const RECIPIENT_EMAIL = FOUNDATION_INFO.email || 'zikrullahfd@gmail.com';

const DEFAULT_EMAIL_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbxm4Os46dImLGBq-UJ_cX2qFJeBb_VEfoAfMsu4VoU8_QujrrrzXC0dLEcBMPdAEWQy8A/exec';

export function getEmailWebhookUrl(): string {
  try {
    const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env;
    const envUrl = (env?.VITE_EMAIL_WEBHOOK_URL || '').trim();
    return envUrl || DEFAULT_EMAIL_WEBHOOK_URL;
  } catch {
    return DEFAULT_EMAIL_WEBHOOK_URL;
  }
}

async function sendViaCustomHtmlWebhook(payload: {
  to: string;
  recipientEmail?: string;
  subject: string;
  htmlBody: string;
  html?: string;
  textBody: string;
  body?: string;
  formType: 'volunteer' | 'needy-info';
  fields?: Record<string, string>;
  data?: Record<string, string>;
  [key: string]: unknown;
}): Promise<boolean> {
  const webhookUrl = getEmailWebhookUrl();
  if (!webhookUrl) return false;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify({
        ...payload,
        recipientEmail: payload.recipientEmail || payload.to,
        html: payload.html || payload.htmlBody,
        body: payload.body || payload.textBody,
      }),
    });
    return true;
  } catch (err) {
    console.warn('Custom HTML email webhook notice:', err);
    return false;
  }
}

/**
 * Checks if current device is a mobile device (Android, iOS, etc.)
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Safely triggers an email link:
 * - On mobile: prefers mailto: to launch installed email app (Gmail app / Mail app)
 * - On desktop: opens Gmail web composer in a new tab
 */
export function triggerSmartEmailOpen(mailtoUrl: string, gmailUrl: string): void {
  try {
    const isMobile = isMobileDevice();
    const targetUrl = isMobile ? mailtoUrl : gmailUrl;

    const link = document.createElement('a');
    link.href = targetUrl;
    if (!isMobile) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 200);
  } catch (error) {
    console.warn('Failed to programmatically open email client:', error);
  }
}

/* ==========================================================================
   1. VOLUNTEER SUBMISSION
   ========================================================================== */

export interface VolunteerSubmissionData {
  name: string;
  phone: string;
  upazila: string;
  bloodGroup: string;
  interest: string;
  message?: string;
}

function formatBengaliDateTimeWithAmPm(date: Date): string {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  const toBnNum = (val: number | string) =>
    String(val).replace(/\d/g, (d) => bnDigits[Number(d)]);
  const bnMonths = [
    'জানুয়ারি',
    'ফেব্রুয়ারি',
    'মার্চ',
    'এপ্রিল',
    'মে',
    'জুন',
    'জুলাই',
    'আগস্ট',
    'সেপ্টেম্বর',
    'অক্টোবর',
    'নভেম্বর',
    'ডিসেম্বর',
  ];

  const day = toBnNum(date.getDate());
  const month = bnMonths[date.getMonth()];
  const year = toBnNum(date.getFullYear());

  const hours24 = date.getHours();
  const ampm = hours24 >= 12 ? 'PM' : 'AM';
  const hours12 = toBnNum(hours24 % 12 || 12);
  const minutes = toBnNum(String(date.getMinutes()).padStart(2, '0'));

  return `${day} ${month}, ${year} — ${hours12}:${minutes} ${ampm}`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildHtmlTableSection(title: string, rows: Array<[string, string]>): string {
  const rowsHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding: 10px 14px; border: 1px solid #94a3b8; background-color: #f8fafc; color: #334155; font-weight: 400; width: 40%; vertical-align: top; word-break: break-word;">${escapeHtml(label)}</td>
          <td style="padding: 10px 14px; border: 1px solid #94a3b8; background-color: #ffffff; color: #0f172a; vertical-align: top; word-break: break-word;"><b>${escapeHtml(value)}</b></td>
        </tr>`
    )
    .join('');

  return `
    <div style="margin: 18px 0; page-break-inside: avoid;">
      <div style="font-size: 14px; font-weight: 700; color: #064e3b; margin-bottom: 8px; border-left: 4px solid #064e3b; padding-left: 8px;">${escapeHtml(title)}</div>
      <table cellpadding="0" cellspacing="0" border="1" style="width: 100%; border-collapse: collapse; border: 1.5px solid #64748b; font-size: 14px; line-height: 1.55;">
        <tbody>${rowsHtml}
        </tbody>
      </table>
    </div>`;
}

export function generateVolunteerEmailHtml(
  data: VolunteerSubmissionData,
  submissionTime?: string
): string {
  const recipientEmail = RECIPIENT_EMAIL;
  const timeText = submissionTime || formatBengaliDateTimeWithAmPm(new Date());
  const addressLabel = data.upazila?.trim() || 'উল্লেখ করা হয়নি';

  const applicantTable = buildHtmlTableSection('[ আবেদনকারীর তথ্য ]', [
    ['আবেদনকারীর নাম', data.name],
    ['মোবাইল নম্বর', data.phone],
    ['রক্তের গ্রুপ', data.bloodGroup || 'অনুল্লেখিত'],
    ['কাজের ক্ষেত্র', data.interest],
    ['পূর্ণ ঠিকানা (গ্রাম/এলাকা, উপজেলা, জেলা)', addressLabel],
    ['পরিচয় / বিশেষ বার্তা', data.message || 'কোনো বিশেষ বার্তা নেই'],
  ]);

  const metaTable = buildHtmlTableSection('[ আবেদনের বিবরণ ]', [
    ['আবেদনের সময়', timeText],
    ['ওয়েবসাইট', 'https://www.zikrullahfoundation.com'],
  ]);

  return `
<div style="font-family: 'Noto Sans Bengali', Arial, sans-serif; max-width: 680px; margin: 0 auto; color: #0f172a; line-height: 1.6; background-color: #ffffff; border: 1.5px solid #94a3b8;">
  <div style="padding: 16px 20px; background-color: #064e3b; color: #ffffff; border-bottom: 3px solid #d97706;">
    <div style="font-size: 19px; font-weight: 700;">জিকরুল্লাহ ফাউন্ডেশন (Zikrullah Foundation)</div>
    <div style="font-size: 13px; color: #d1fae5; margin-top: 3px;">Official Email: ${escapeHtml(recipientEmail)} | স্বেচ্ছাসেবক আবেদন পত্র</div>
  </div>
  <div style="padding: 20px; background-color: #ffffff;">
    <p style="margin: 0 0 14px 0; font-size: 14px;">সম্মানিত ফাউন্ডেশন টিম,<br/>স্বেচ্ছাসেবী হিসেবে ফাউন্ডেশনের মানবিক কার্যক্রমে যুক্ত হতে আগ্রহী হয়ে নিচের তথ্যগুলো পাঠানো হলো:</p>
    ${applicantTable}
    ${metaTable}
    <div style="margin-top: 20px; padding-top: 12px; border-top: 1px dashed #94a3b8; font-size: 13px; color: #475569;">
      আবেদনকারী: <b>${escapeHtml(data.name)}</b> • Website: https://www.zikrullahfoundation.com
    </div>
  </div>
</div>`.trim();
}

export function generateVolunteerEmailContent(data: VolunteerSubmissionData): {
  recipientEmail: string;
  subject: string;
  body: string;
  htmlBody: string;
} {
  const recipientEmail = RECIPIENT_EMAIL;
  const submissionTime = formatBengaliDateTimeWithAmPm(new Date());

  const addressLabel = data.upazila?.trim() || 'উল্লেখ করা হয়নি';
  const subject = `[স্বেচ্ছাসেবক আবেদন] ${data.name} — ${addressLabel}`;

  const body = `জিকরুল্লাহ ফাউন্ডেশন (Zikrullah Foundation)
Official Email: ${recipientEmail}
========================================

সম্মানিত ফাউন্ডেশন টিম,
স্বেচ্ছাসেবী হিসেবে ফাউন্ডেশনের মানবিক কার্যক্রমে যুক্ত হতে আগ্রহী হয়ে নিচের তথ্যগুলো পাঠানো হলো:

[ আবেদনকারীর তথ্য ]
────────────────────────────────────────
১. আবেদনকারীর নাম :
   ${data.name}

২. মোবাইল নম্বর :
   ${data.phone}

৩. রক্তের গ্রুপ :
   ${data.bloodGroup || 'অনুল্লেখিত'}

৪. কাজের ক্ষেত্র :
   ${data.interest}

৫. পূর্ণ ঠিকানা :
   ${addressLabel}

৬. পরিচয় / বিশেষ বার্তা :
   ${data.message || 'কোনো বিশেষ বার্তা নেই'}
────────────────────────────────────────

[ আবেদনের বিবরণ ]
────────────────────────────────────────
১. আবেদনের সময় :
   ${submissionTime}

২. ওয়েবসাইট :
   https://www.zikrullahfoundation.com
────────────────────────────────────────

আবেদনকারী: ${data.name}`;

  const htmlBody = generateVolunteerEmailHtml(data, submissionTime);

  return { recipientEmail, subject, body, htmlBody };
}

export function getDirectGmailUrl(data: VolunteerSubmissionData): string {
  const { recipientEmail, subject, body } = generateVolunteerEmailContent(data);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getMailtoUrl(data: VolunteerSubmissionData): string {
  const { recipientEmail, subject, body } = generateVolunteerEmailContent(data);
  return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function triggerDirectGmail(data: VolunteerSubmissionData): void {
  const gmailUrl = getDirectGmailUrl(data);
  const mailtoUrl = getMailtoUrl(data);
  triggerSmartEmailOpen(mailtoUrl, gmailUrl);
}

export async function sendVolunteerRegistrationEmail(data: VolunteerSubmissionData): Promise<{
  success: boolean;
  message: string;
  mailtoUrl: string;
  gmailUrl: string;
  sentViaWebhook: boolean;
}> {
  const { recipientEmail, subject, body, htmlBody } = generateVolunteerEmailContent(data);
  const gmailUrl = getDirectGmailUrl(data);
  const mailtoUrl = getMailtoUrl(data);
  const addressLabel = data.upazila?.trim() || 'উল্লেখ করা হয়নি';
  const bloodLabel = data.bloodGroup || 'অনুল্লেখিত';
  const messageLabel = data.message?.trim() || 'কোনো বিশেষ বার্তা নেই';
  const submissionTime = formatBengaliDateTimeWithAmPm(new Date());

  const structuredFields: Record<string, string> = {
    'আবেদনকারীর নাম': data.name,
    'মোবাইল নম্বর': data.phone,
    'রক্তের গ্রুপ': bloodLabel,
    'কাজের ক্ষেত্র': data.interest,
    'পূর্ণ ঠিকানা': addressLabel,
    'পরিচয় / বিশেষ বার্তা': messageLabel,
    'আবেদনের সময়': submissionTime,
  };

  const sentViaWebhook = await sendViaCustomHtmlWebhook({
    to: recipientEmail,
    recipientEmail,
    subject,
    htmlBody,
    html: htmlBody,
    textBody: body,
    body,
    formType: 'volunteer',
    name: data.name,
    volunteerName: data.name,
    phone: data.phone,
    bloodGroup: bloodLabel,
    interest: data.interest,
    upazila: addressLabel,
    address: addressLabel,
    fullAddress: addressLabel,
    message: messageLabel,
    submissionTime,
    fields: structuredFields,
    data: {
      name: data.name,
      phone: data.phone,
      bloodGroup: bloodLabel,
      interest: data.interest,
      upazila: addressLabel,
      message: messageLabel,
      submissionTime,
    },
  });

  return {
    success: true,
    message: 'স্বেচ্ছাসেবক নিবন্ধন তথ্য সফলভাবে প্রস্তুত হয়েছে।',
    mailtoUrl,
    gmailUrl,
    sentViaWebhook,
  };
}

/* ==========================================================================
   2. DONATION SUBMISSION (টাকা পাঠানো / অনুদান তথ্য)
   ========================================================================== */

export interface DonationSubmissionData {
  receiptId: string;
  donorName: string;
  phone: string;
  amount: number;
  category: string;
  paymentMethod: string;
  transactionId: string;
  donorMessage?: string;
  date: string;
}

export function generateDonationEmailContent(data: DonationSubmissionData): {
  recipientEmail: string;
  subject: string;
  body: string;
} {
  const recipientEmail = RECIPIENT_EMAIL;
  const submissionTime = new Date().toLocaleString('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const subject = `[অনলাইন অনুদান ও সদকা] - ৳${data.amount.toLocaleString('bn-BD')} (${data.paymentMethod.toUpperCase()}) - ${data.donorName || 'সম্মানিত শুভাকাঙ্ক্ষী'}`;

  const body = `বিসমিল্লাহির রাহমানির রাহীম

জিকরুল্লাহ ফাউন্ডেশন (Zikrullah Foundation)
অফিসিয়াল ইমেইল: ${recipientEmail}

সম্মানিত জিকরুল্লাহ ফাউন্ডেশন টিম,
আমি মানবতার খেদমতে জিকরুল্লাহ ফাউন্ডেশনে অনুদান/সদকা প্রেরণ করেছি। আমার অনুদানের বিস্তারিত বিবরণ নিচে দেওয়া হলো:

১. রসিদ নম্বর: ${data.receiptId}
২. দানকারীর নাম: ${data.donorName || 'সম্মানিত শুভাকাঙ্ক্ষী'}
৩. মোবাইল নম্বর: ${data.phone || 'অনুল্লেখিত'}
৪. দানের খাত / প্রকল্প: ${data.category}
৫. দানের পরিমাণ: ৳ ${data.amount.toLocaleString('bn-BD')} (টাকা)
৬. পেমেন্ট মাধ্যম: ${data.paymentMethod.toUpperCase()}
৭. ট্রানজেকশন আইডি (TrxID): ${data.transactionId}
৮. বিশেষ দোয়া বা বার্তা: ${data.donorMessage || 'কোনো বার্তা নেই'}
৯. জমার তারিখ ও সময়: ${data.date} (${submissionTime})

অনুগ্রহ করে অনুদানটি যাচাই করে আমানতদারির সাথে নির্দিষ্ট খাতের অসহায় মানুষদের মাঝে পৌঁছে দেওয়ার অনুরোধ রইল।

জাজাকাল্লাহু খাইরান।
${data.donorName || 'সম্মানিত শুভাকাঙ্ক্ষী'}
মোবাইল: ${data.phone || 'অনুল্লেখিত'}
ওয়েবসাইট: https://zikrullahfoundation.org`;

  return { recipientEmail, subject, body };
}

export function getDirectGmailUrlForDonation(data: DonationSubmissionData): string {
  const { recipientEmail, subject, body } = generateDonationEmailContent(data);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getMailtoUrlForDonation(data: DonationSubmissionData): string {
  const { recipientEmail, subject, body } = generateDonationEmailContent(data);
  return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function triggerDirectEmailForDonation(data: DonationSubmissionData): void {
  const gmailUrl = getDirectGmailUrlForDonation(data);
  const mailtoUrl = getMailtoUrlForDonation(data);
  triggerSmartEmailOpen(mailtoUrl, gmailUrl);
}

export async function sendDonationEmail(data: DonationSubmissionData): Promise<{
  success: boolean;
  message: string;
  mailtoUrl: string;
  gmailUrl: string;
}> {
  const { recipientEmail, subject } = generateDonationEmailContent(data);
  const gmailUrl = getDirectGmailUrlForDonation(data);
  const mailtoUrl = getMailtoUrlForDonation(data);
  const submissionTime = new Date().toLocaleString('bn-BD');

  try {
    await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
        'রসিদ নম্বর': data.receiptId,
        'দানকারীর নাম': data.donorName || 'অজ্ঞাত দানকারী',
        'মোবাইল নম্বর': data.phone || 'অনুল্লেখিত',
        'দানের খাত': data.category,
        'দানের পরিমাণ (টাকা)': data.amount,
        'পেমেন্ট মাধ্যম': data.paymentMethod.toUpperCase(),
        'ট্রানজেকশন আইডি (TrxID)': data.transactionId,
        'বিশেষ দোয়া বা বার্তা': data.donorMessage || 'নেই',
        'জমার তারিখ ও সময়': `${data.date} (${submissionTime})`
      })
    }).catch(() => null);
  } catch (err) {
    console.warn('Donation background dispatch notice:', err);
  }

  return {
    success: true,
    message: 'অনুদানের তথ্য সফলভাবে প্রস্তুত হয়েছে।',
    mailtoUrl,
    gmailUrl
  };
}

/* ==========================================================================
   3. CONTACT MESSAGE SUBMISSION (বার্তা পাঠান)
   ========================================================================== */

export interface ContactMessageSubmissionData {
  name: string;
  contactInfo: string;
  subject?: string;
  message: string;
}

export function generateContactEmailContent(data: ContactMessageSubmissionData): {
  recipientEmail: string;
  subject: string;
  body: string;
} {
  const recipientEmail = RECIPIENT_EMAIL;
  const submissionTime = new Date().toLocaleString('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const subject = `[ওয়েবসাইট থেকে নতুন বার্তা] - ${data.subject || 'সাধারণ অনুসন্ধান'} (${data.name})`;

  const body = `বিসমিল্লাহির রাহমানির রাহীম

জিকরুল্লাহ ফাউন্ডেশন (Zikrullah Foundation)
অফিসিয়াল ইমেইল: ${recipientEmail}

সম্মানিত জিকরুল্লাহ ফাউন্ডেশন টিম,
জিকরুল্লাহ ফাউন্ডেশনের ওয়েবসাইটে ‘বার্তা পাঠান’ ফরম থেকে নিম্নোক্ত বার্তাটি প্রেরিত হয়েছে:

১. প্রেরকের নাম: ${data.name}
২. মোবাইল বা ইমেইল: ${data.contactInfo}
৩. বার্তার বিষয়: ${data.subject || 'সাধারণ যোগাযোগ'}
৪. বিস্তারিত বার্তা:
--------------------------------------------------
${data.message}
--------------------------------------------------

প্রেরণের সময়: ${submissionTime}
ওয়েবসাইট: https://zikrullahfoundation.org

জাজাকাল্লাহু খাইরান।
${data.name}`;

  return { recipientEmail, subject, body };
}

export function getDirectGmailUrlForContact(data: ContactMessageSubmissionData): string {
  const { recipientEmail, subject, body } = generateContactEmailContent(data);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getMailtoUrlForContact(data: ContactMessageSubmissionData): string {
  const { recipientEmail, subject, body } = generateContactEmailContent(data);
  return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function triggerDirectEmailForContact(data: ContactMessageSubmissionData): void {
  const gmailUrl = getDirectGmailUrlForContact(data);
  const mailtoUrl = getMailtoUrlForContact(data);
  triggerSmartEmailOpen(mailtoUrl, gmailUrl);
}

export async function sendContactMessageEmail(data: ContactMessageSubmissionData): Promise<{
  success: boolean;
  message: string;
  mailtoUrl: string;
  gmailUrl: string;
}> {
  const { recipientEmail, subject } = generateContactEmailContent(data);
  const gmailUrl = getDirectGmailUrlForContact(data);
  const mailtoUrl = getMailtoUrlForContact(data);
  const submissionTime = new Date().toLocaleString('bn-BD');

  try {
    await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
        'প্রেরকের নাম': data.name,
        'যোগাযোগ (মোবাইল/ইমেইল)': data.contactInfo,
        'বার্তার বিষয়': data.subject || 'সাধারণ যোগাযোগ',
        'বিস্তারিত বার্তা': data.message,
        'প্রেরণের সময়': submissionTime
      })
    }).catch(() => null);
  } catch (err) {
    console.warn('Contact message background dispatch notice:', err);
  }

  return {
    success: true,
    message: 'আপনার বার্তাটি সফলভাবে প্রস্তুত হয়েছে।',
    mailtoUrl,
    gmailUrl
  };
}

/* ==========================================================================
   4. NEEDY PERSON INFO SUBMISSION (অসহায় মানুষের তথ্য)
   ========================================================================== */

export interface NeedyInfoSubmissionData {
  informerName: string;
  informerPhone: string;
  needyName: string;
  needyPhone?: string;
  fullAddress: string;
  helpType: string;
  description?: string;
}


export function generateNeedyInfoEmailHtml(
  data: NeedyInfoSubmissionData,
  submissionTime?: string
): string {
  const recipientEmail = RECIPIENT_EMAIL;
  const timeText = submissionTime || formatBengaliDateTimeWithAmPm(new Date());
  const areaLabel = data.fullAddress?.trim() || 'উল্লেখ করা হয়নি';

  const needyTable = buildHtmlTableSection('[ সহায়তা প্রার্থীর তথ্য ]', [
    ['অসহায় ব্যক্তির নাম', data.needyName],
    ['কী ধরনের সহযোগিতা প্রয়োজন', data.helpType],
    ['অসহায় ব্যক্তির মোবাইল নম্বর', data.needyPhone || 'উল্লেখ করা হয়নি'],
    ['পূর্ণ ঠিকানা', areaLabel],
    ['সংক্ষিপ্ত বিবরণ', data.description || 'উল্লেখ করা হয়নি'],
  ]);

  const informerTable = buildHtmlTableSection('[ তথ্যদাতার বিবরণ ]', [
    ['তথ্যদাতার নাম', data.informerName],
    ['মোবাইল নম্বর', data.informerPhone],
    ['তথ্য প্রেরণের সময়', timeText],
  ]);

  return `
<div style="font-family: 'Noto Sans Bengali', Arial, sans-serif; max-width: 680px; margin: 0 auto; color: #0f172a; line-height: 1.6; background-color: #ffffff; border: 1.5px solid #94a3b8;">
  <div style="padding: 16px 20px; background-color: #064e3b; color: #ffffff; border-bottom: 3px solid #d97706;">
    <div style="font-size: 19px; font-weight: 700;">জিকরুল্লাহ ফাউন্ডেশন (Zikrullah Foundation)</div>
    <div style="font-size: 13px; color: #d1fae5; margin-top: 3px;">Official Email: ${escapeHtml(recipientEmail)} | সহায়তার আবেদন তথ্য</div>
  </div>
  <div style="padding: 20px; background-color: #ffffff;">
    <p style="margin: 0 0 14px 0; font-size: 14px;">সম্মানিত জিকরুল্লাহ ফাউন্ডেশন টিম,<br/>আমাদের এলাকার একজন অসহায় মানুষের সহযোগিতার জন্য নিম্নোক্ত তথ্যগুলো প্রেরণ করা হলো:</p>
    ${needyTable}
    ${informerTable}
    <div style="margin-top: 20px; padding-top: 12px; border-top: 1px dashed #94a3b8; font-size: 13px; color: #475569;">
      তথ্যদাতা: <b>${escapeHtml(data.informerName)}</b> • Website: https://www.zikrullahfoundation.com
    </div>
  </div>
</div>`.trim();
}

export function generateNeedyInfoEmailContent(data: NeedyInfoSubmissionData): {
  recipientEmail: string;
  subject: string;
  body: string;
  htmlBody: string;
} {
  const recipientEmail = RECIPIENT_EMAIL;
  const submissionTime = formatBengaliDateTimeWithAmPm(new Date());

  const areaLabel = data.fullAddress?.trim() || 'উল্লেখ করা হয়নি';
  const subject = `[সহযোগিতার আবেদন] অসহায় ব্যক্তির তথ্য — ${areaLabel}`;

  const body = `জিকরুল্লাহ ফাউন্ডেশন (Zikrullah Foundation)
Official Email: ${recipientEmail}
========================================

সম্মানিত জিকরুল্লাহ ফাউন্ডেশন টিম,
আমাদের এলাকার একজন অসহায় মানুষের সহযোগিতার জন্য নিম্নোক্ত তথ্যগুলো প্রেরণ করা হলো:

[ সহায়তা প্রার্থীর তথ্য ]
────────────────────────────────────────
১. অসহায় ব্যক্তির নাম :
   ${data.needyName}

২. কী ধরনের সহযোগিতা প্রয়োজন :
   ${data.helpType}

৩. অসহায় ব্যক্তির মোবাইল নম্বর :
   ${data.needyPhone || 'উল্লেখ করা হয়নি'}

৪. পূর্ণ ঠিকানা :
   ${areaLabel}

৫. সংক্ষিপ্ত বিবরণ :
   ${data.description || 'উল্লেখ করা হয়নি'}
────────────────────────────────────────

[ তথ্যদাতার বিবরণ ]
────────────────────────────────────────
১. তথ্যদাতার নাম :
   ${data.informerName}

২. মোবাইল নম্বর :
   ${data.informerPhone}

৩. তথ্য প্রেরণের সময় :
   ${submissionTime}
────────────────────────────────────────

Website: https://www.zikrullahfoundation.com`;

  const htmlBody = generateNeedyInfoEmailHtml(data, submissionTime);

  return { recipientEmail, subject, body, htmlBody };
}

export function getDirectGmailUrlForNeedyInfo(data: NeedyInfoSubmissionData): string {
  const { recipientEmail, subject, body } = generateNeedyInfoEmailContent(data);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getMailtoUrlForNeedyInfo(data: NeedyInfoSubmissionData): string {
  const { recipientEmail, subject, body } = generateNeedyInfoEmailContent(data);
  return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function triggerDirectGmailForNeedyInfo(data: NeedyInfoSubmissionData): void {
  const gmailUrl = getDirectGmailUrlForNeedyInfo(data);
  const mailtoUrl = getMailtoUrlForNeedyInfo(data);
  triggerSmartEmailOpen(mailtoUrl, gmailUrl);
}

export async function sendNeedyInfoEmail(data: NeedyInfoSubmissionData): Promise<{
  success: boolean;
  message: string;
  mailtoUrl: string;
  gmailUrl: string;
  sentViaWebhook: boolean;
}> {
  const { recipientEmail, subject, body, htmlBody } = generateNeedyInfoEmailContent(data);
  const gmailUrl = getDirectGmailUrlForNeedyInfo(data);
  const mailtoUrl = getMailtoUrlForNeedyInfo(data);
  const areaLabel = data.fullAddress?.trim() || 'উল্লেখ করা হয়নি';
  const needyPhoneLabel = data.needyPhone?.trim() || 'উল্লেখ করা হয়নি';
  const descLabel = data.description?.trim() || 'উল্লেখ করা হয়নি';
  const submissionTime = formatBengaliDateTimeWithAmPm(new Date());

  const structuredFields: Record<string, string> = {
    'অসহায় ব্যক্তির নাম': data.needyName,
    'কী ধরনের সহযোগিতা প্রয়োজন': data.helpType,
    'অসহায় ব্যক্তির মোবাইল নম্বর': needyPhoneLabel,
    'পূর্ণ ঠিকানা': areaLabel,
    'সংক্ষিপ্ত বিবরণ': descLabel,
    'তথ্যদাতার নাম': data.informerName,
    'তথ্যদাতার মোবাইল নম্বর': data.informerPhone,
    'তথ্য প্রেরণের সময়': submissionTime,
  };

  const sentViaWebhook = await sendViaCustomHtmlWebhook({
    to: recipientEmail,
    recipientEmail,
    subject,
    htmlBody,
    html: htmlBody,
    textBody: body,
    body,
    formType: 'needy-info',
    needyName: data.needyName,
    helpType: data.helpType,
    needyPhone: needyPhoneLabel,
    fullAddress: areaLabel,
    address: areaLabel,
    description: descLabel,
    informerName: data.informerName,
    informerPhone: data.informerPhone,
    submissionTime,
    fields: structuredFields,
    data: {
      needyName: data.needyName,
      helpType: data.helpType,
      needyPhone: needyPhoneLabel,
      fullAddress: areaLabel,
      description: descLabel,
      informerName: data.informerName,
      informerPhone: data.informerPhone,
      submissionTime,
    },
  });

  return {
    success: true,
    message: 'অসহায় মানুষের তথ্য সফলভাবে প্রস্তুত হয়েছে।',
    mailtoUrl,
    gmailUrl,
    sentViaWebhook,
  };
}

/* ==========================================================================
   5. NEWSLETTER / THOUGHTS SUBSCRIPTION (ইমেইল সাবস্ক্রিপশন)
   ========================================================================== */

export async function sendNewsletterSubscriptionEmail(
  subscriberEmail: string,
  articleTitle?: string
): Promise<{
  success: boolean;
  message: string;
}> {
  const formSubmitToken = 'e683378f5399c9eb0088210959a9ef46';
  const submissionTime = formatBengaliDateTimeWithAmPm(new Date());
  const cleanedEmail = subscriberEmail.trim();
  const subject = `[নতুন সাবস্ক্রাইবার] ${cleanedEmail} — জিকরুল্লাহ ফাউন্ডেশন`;

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${formSubmitToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: cleanedEmail,
        _replyto: cleanedEmail,
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
        'সাবস্ক্রাইবারের ইমেইল': cleanedEmail,
        'সাবস্ক্রাইবের উৎস': articleTitle ? `প্রবন্ধ: ${articleTitle}` : 'ভাবনা ও কর্মকথা',
        'সাবস্ক্রাইবের সময়': submissionTime,
        'ওয়েবসাইট': 'https://www.zikrullahfoundation.com'
      })
    });

    if (!response.ok) {
      return {
        success: false,
        message: 'সার্ভার থেকে সাড়া পাওয়া যায়নি, অনুগ্রহ করে আবার চেষ্টা করুন।'
      };
    }

    return {
      success: true,
      message: 'আপনার ইমেইল সফলভাবে আমাদের অফিসিয়াল ইমেইলে পাঠানো হয়েছে।'
    };
  } catch (err) {
    console.warn('Newsletter subscription dispatch error:', err);
    return {
      success: false,
      message: 'নেটওয়ার্ক সমস্যার কারণে ইমেইল পাঠানো যায়নি, অনুগ্রহ করে পুনরায় চেষ্টা করুন।'
    };
  }
}
