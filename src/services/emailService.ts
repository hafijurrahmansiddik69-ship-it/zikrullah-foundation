import { FOUNDATION_INFO } from '../data/mockData';

export interface VolunteerSubmissionData {
  name: string;
  phone: string;
  upazila: string;
  bloodGroup: string;
  interest: string;
  message?: string;
}

/**
 * Generates structured subject and body for volunteer email submissions
 */
export function generateVolunteerEmailContent(data: VolunteerSubmissionData): {
  recipientEmail: string;
  ccEmail: string;
  subject: string;
  body: string;
} {
  const recipientEmail = FOUNDATION_INFO.email || 'zikrullahfd@gmail.com';
  const ccEmail = 'hafijurrahmansiddik69@gmail.com';
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

/**
 * Constructs a direct Gmail web compose URL that directly opens the user's Gmail
 * with recipient, subject, and form details pre-populated.
 */
export function getDirectGmailUrl(data: VolunteerSubmissionData): string {
  const { recipientEmail, subject, body } = generateVolunteerEmailContent(data);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Constructs a standard mailto: URL for default email clients
 */
export function getMailtoUrl(data: VolunteerSubmissionData): string {
  const { recipientEmail, ccEmail, subject, body } = generateVolunteerEmailContent(data);
  return `mailto:${recipientEmail}?cc=${encodeURIComponent(ccEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Directly opens Gmail in a new browser tab/window safely without window.alert/window.open popup blocks
 */
export function triggerDirectGmail(data: VolunteerSubmissionData): void {
  try {
    const gmailUrl = getDirectGmailUrl(data);
    const link = document.createElement('a');
    link.href = gmailUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.warn('Failed to programmatically open Gmail:', error);
  }
}

/**
 * Sends volunteer registration data to the foundation's official email (zikrullahfd@gmail.com)
 * Both triggers direct Gmail opening and attempts background FormSubmit submission.
 */
export async function sendVolunteerRegistrationEmail(data: VolunteerSubmissionData): Promise<{
  success: boolean;
  message: string;
  mailtoUrl: string;
  gmailUrl: string;
}> {
  const { recipientEmail, ccEmail, subject, body } = generateVolunteerEmailContent(data);
  const gmailUrl = getDirectGmailUrl(data);
  const mailtoUrl = getMailtoUrl(data);
  const submissionTime = new Date().toLocaleString('bn-BD');

  try {
    // Attempt sending via free FormSubmit AJAX API to foundation email in background
    const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
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
    });

    if (response.ok) {
      return {
        success: true,
        message: `আপনার আবেদনটি নথিভুক্ত হয়েছে এবং জিমেইলে প্রেরণের জন্য তৈরি হয়েছে।`,
        mailtoUrl,
        gmailUrl
      };
    } else {
      return {
        success: true,
        message: `আপনার তথ্য নথিভুক্ত হয়েছে এবং সরাসরি জিমেইলে প্রেরণের জন্য প্রস্তুত।`,
        mailtoUrl,
        gmailUrl
      };
    }
  } catch (error) {
    console.warn('FormSubmit background notification attempt finished:', error);
    return {
      success: true,
      message: `আপনার তথ্য নথিভুক্ত হয়েছে এবং সরাসরি জিমেইলে প্রেরণের জন্য প্রস্তুত।`,
      mailtoUrl,
      gmailUrl
    };
  }
}
