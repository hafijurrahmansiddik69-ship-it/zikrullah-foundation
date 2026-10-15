import { FOUNDATION_INFO } from '../data/mockData';

export const RECIPIENT_EMAIL = FOUNDATION_INFO.email || 'zikrullahfd@gmail.com';
export const CC_EMAIL = 'hafijurrahmansiddik69@gmail.com';

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

export function generateVolunteerEmailContent(data: VolunteerSubmissionData): {
  recipientEmail: string;
  ccEmail: string;
  subject: string;
  body: string;
} {
  const recipientEmail = RECIPIENT_EMAIL;
  const ccEmail = CC_EMAIL;
  const submissionTime = new Date().toLocaleString('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const subject = `[নতুন স্বেচ্ছাসেবক নিবন্ধন] - ${data.name} (${data.phone})`;

  const body = `বিসমিল্লাহির রাহমানির রাহীম

জিকরুল্লাহ ফাউন্ডেশন (Zikrullah Foundation)
অফিসিয়াল ইমেইল: ${recipientEmail}

সম্মানিত জিকরুল্লাহ ফাউন্ডেশন টিম,
আমি স্বেচ্ছাসেবী হিসেবে জিকরুল্লাহ ফাউন্ডেশনের মানবিক কার্যক্রমে যুক্ত হতে আগ্রহী। আমার বিস্তারিত তথ্য নিচে প্রদান করা হলো:

১. নাম: ${data.name}
২. মোবাইল নম্বর: ${data.phone}
৩. রক্তের গ্রুপ: ${data.bloodGroup || 'অনুল্লেখিত'}
৪. উপজেলা / এলাকা: ${data.upazila || 'বগুড়া'}
৫. আগ্রহের কাজের ক্ষেত্র: ${data.interest}
৬. পরিচয় / বিশেষ বার্তা: ${data.message || 'কোনো বিশেষ বার্তা নেই'}

আবেদনের সময়: ${submissionTime}
ওয়েবসাইট: https://zikrullahfoundation.org

জাজাকাল্লাহু খাইরান।
${data.name}`;

  return { recipientEmail, ccEmail, subject, body };
}

export function getDirectGmailUrl(data: VolunteerSubmissionData): string {
  const { recipientEmail, subject, body } = generateVolunteerEmailContent(data);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getMailtoUrl(data: VolunteerSubmissionData): string {
  const { recipientEmail, ccEmail, subject, body } = generateVolunteerEmailContent(data);
  return `mailto:${recipientEmail}?cc=${encodeURIComponent(ccEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
}> {
  const { recipientEmail, ccEmail, subject } = generateVolunteerEmailContent(data);
  const gmailUrl = getDirectGmailUrl(data);
  const mailtoUrl = getMailtoUrl(data);
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
        _cc: ccEmail,
        _template: 'table',
        _captcha: 'false',
        'আবেদনকারীর নাম': data.name,
        'মোবাইল নম্বর': data.phone,
        'রক্তের গ্রুপ': data.bloodGroup,
        'উপজেলা / এলাকা': data.upazila,
        'কাজের ক্ষেত্র': data.interest,
        'বার্তা বা পরিচয়': data.message || 'অনুল্লেখিত',
        'জমার সময়': submissionTime
      })
    }).catch(() => null);
  } catch (err) {
    console.warn('Background FormSubmit dispatch notice:', err);
  }

  return {
    success: true,
    message: 'স্বেচ্ছাসেবক নিবন্ধন তথ্য সফলভাবে প্রস্তুত হয়েছে।',
    mailtoUrl,
    gmailUrl
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
  ccEmail: string;
  subject: string;
  body: string;
} {
  const recipientEmail = RECIPIENT_EMAIL;
  const ccEmail = CC_EMAIL;
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

  return { recipientEmail, ccEmail, subject, body };
}

export function getDirectGmailUrlForDonation(data: DonationSubmissionData): string {
  const { recipientEmail, subject, body } = generateDonationEmailContent(data);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getMailtoUrlForDonation(data: DonationSubmissionData): string {
  const { recipientEmail, ccEmail, subject, body } = generateDonationEmailContent(data);
  return `mailto:${recipientEmail}?cc=${encodeURIComponent(ccEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
  const { recipientEmail, ccEmail, subject } = generateDonationEmailContent(data);
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
        _cc: ccEmail,
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
  ccEmail: string;
  subject: string;
  body: string;
} {
  const recipientEmail = RECIPIENT_EMAIL;
  const ccEmail = CC_EMAIL;
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

  return { recipientEmail, ccEmail, subject, body };
}

export function getDirectGmailUrlForContact(data: ContactMessageSubmissionData): string {
  const { recipientEmail, subject, body } = generateContactEmailContent(data);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getMailtoUrlForContact(data: ContactMessageSubmissionData): string {
  const { recipientEmail, ccEmail, subject, body } = generateContactEmailContent(data);
  return `mailto:${recipientEmail}?cc=${encodeURIComponent(ccEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
  const { recipientEmail, ccEmail, subject } = generateContactEmailContent(data);
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
        _cc: ccEmail,
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
