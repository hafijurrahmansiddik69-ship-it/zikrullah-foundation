import React, { useState } from 'react';
import { X, HandHeart, CheckCircle, Loader2, Send, Mail, ExternalLink } from 'lucide-react';
import { adminDataService } from '../services/adminDataService';
import {
  sendNeedyInfoEmail,
  triggerDirectGmailForNeedyInfo,
  getDirectGmailUrlForNeedyInfo,
  getMailtoUrlForNeedyInfo,
} from '../services/emailService';
import { FOUNDATION_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface NeedyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HELP_TYPES = [
  { id: 'medical', bn: 'ফ্রি চিকিৎসা ও ওষুধ', en: 'Free Medical & Medicine' },
  { id: 'food', bn: 'জরুরি খাদ্য সহায়তা', en: 'Emergency Food Aid' },
  { id: 'blood', bn: 'জরুরি রক্তের প্রয়োজন', en: 'Urgent Blood Needed' },
  { id: 'education', bn: 'শিক্ষা সহায়তা', en: 'Education Support' },
  { id: 'self-reliance', bn: 'আত্মকর্মসংস্থান', en: 'Self-Employment' },
  { id: 'others', bn: 'অন্যান্য', en: 'Others' },
];

export const NeedyInfoModal: React.FC<NeedyInfoModalProps> = ({ isOpen, onClose }) => {
  const { isEn } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [informerName, setInformerName] = useState('');
  const [submittedInformerName, setSubmittedInformerName] = useState('');
  const [informerPhone, setInformerPhone] = useState('');
  const [needyName, setNeedyName] = useState('');
  const [needyPhone, setNeedyPhone] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [helpTypeId, setHelpTypeId] = useState(HELP_TYPES[0].id);
  const [description, setDescription] = useState('');
  const [mailtoUrl, setMailtoUrl] = useState('');
  const [gmailUrl, setGmailUrl] = useState('');

  if (!isOpen) return null;

  const selectedHelpType = HELP_TYPES.find((item) => item.id === helpTypeId) || HELP_TYPES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInformerName = informerName.trim();
    const cleanInformerPhone = informerPhone.trim();
    const cleanNeedyName = needyName.trim();
    const cleanAddress = fullAddress.trim();

    if (!cleanInformerName || !cleanInformerPhone || !cleanNeedyName || !cleanAddress) return;

    setSubmittedInformerName(cleanInformerName);
    setIsSubmitting(true);

    const helpTypeLabel = selectedHelpType.bn;

    const submissionPayload = {
      informerName: cleanInformerName,
      informerPhone: cleanInformerPhone,
      needyName: cleanNeedyName,
      needyPhone: needyPhone.trim() || '',
      fullAddress: cleanAddress,
      helpType: isEn ? `${selectedHelpType.en} (${selectedHelpType.bn})` : helpTypeLabel,
      description: description.trim() || '',
    };

    const formattedDetails = [
      `অসহায় ব্যক্তির নাম: ${cleanNeedyName}`,
      `অসহায় ব্যক্তির মোবাইল: ${needyPhone.trim() || 'উল্লেখ করা হয়নি'}`,
      `পূর্ণ ঠিকানা: ${cleanAddress}`,
      `সহযোগিতার ধরন: ${helpTypeLabel}`,
      `সংক্ষিপ্ত বিবরণ: ${description.trim() || 'উল্লেখ করা হয়নি'}`,
    ].join('\n');

    // 1. Save to local admin database
    adminDataService.addContactMessage({
      name: cleanInformerName,
      contactInfo: cleanInformerPhone,
      subject: 'নতুন অসহায় মানুষের তথ্য - জিকরুল্লাহ ফাউন্ডেশন',
      message: formattedDetails,
    });

    // 2. Compute direct Gmail and Mailto URLs
    const directGmail = getDirectGmailUrlForNeedyInfo(submissionPayload);
    const directMailto = getMailtoUrlForNeedyInfo(submissionPayload);
    setGmailUrl(directGmail);
    setMailtoUrl(directMailto);

    // 3. Directly open Gmail compose window pre-filled
    triggerDirectGmailForNeedyInfo(submissionPayload);

    // 4. Background email service notification
    try {
      await sendNeedyInfoEmail(submissionPayload);
    } catch (err) {
      console.warn('Needy info background dispatch notice:', err);
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setInformerName('');
    setSubmittedInformerName('');
    setInformerPhone('');
    setNeedyName('');
    setNeedyPhone('');
    setFullAddress('');
    setHelpTypeId(HELP_TYPES[0].id);
    setDescription('');
    setGmailUrl('');
    setMailtoUrl('');
    onClose();
  };

  const displayName = submittedInformerName || informerName.trim() || (isEn ? 'Respected Well-Wisher' : 'সম্মানিত শুভাকাঙ্ক্ষী');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={resetAndClose}
    >
      {submitted ? (
        <div
          className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full shadow-2xl border border-emerald-100 overflow-hidden relative my-auto sm:my-6 text-slate-800 animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-[#087443] to-teal-500" />

          <button
            type="button"
            onClick={resetAndClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer z-10"
            aria-label={isEn ? 'Close' : 'বন্ধ করুন'}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-5 sm:p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 shadow-sm shadow-emerald-900/5">
              <CheckCircle className="w-9 h-9 sm:w-10 sm:h-10 stroke-[2.2] text-emerald-600" />
            </div>

            <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl text-[#045332] mb-2 tracking-tight leading-snug">
              {isEn ? `Jazakallahu Khairan, ${displayName}!` : `জাযাকাল্লাহু খাইরান, ${displayName}!`}
            </h3>

            <div className="mb-4 inline-flex items-center justify-center px-5 py-1.5 sm:px-6 sm:py-2 rounded-2xl bg-gradient-to-r from-emerald-50/90 via-emerald-100/75 to-emerald-50/90 border border-emerald-200/90 shadow-xs">
              <span
                dir="rtl"
                lang="ar"
                className="font-cairo text-lg sm:text-xl text-[#045332] font-semibold sm:font-bold tracking-normal leading-[1.8] select-text"
                style={{ fontFamily: "'Cairo', 'Amiri', sans-serif" }}
              >
                جَزَاكَ ٱللَّٰهُ خَيْرًا
              </span>
            </div>

            <p className="font-solaiman text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              {isEn
                ? 'We have received the information about the person in need with sincere gratitude. Our field team will verify the details promptly and make every effort to stand beside them, InshaAllah.'
                : 'আপনার প্রদত্ত অসহায় মানুষটির তথ্য আমরা আন্তরিকতার সাথে গ্রহণ করেছি। আমাদের মাঠপর্যায়ের টিম দ্রুত যাচাই-বাছাই করে তাঁর পাশে দাঁড়ানোর সর্বোচ্চ চেষ্টা করবে, ইনশাআল্লাহ।'}
            </p>

            {/* Direct Gmail Notification Box */}
            <div className="w-full space-y-3 font-solaiman text-xs sm:text-sm leading-relaxed mb-5">
              <div className="bg-red-50/80 border border-red-200 rounded-xl p-3 text-left text-slate-700 flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
                  M
                </div>
                <div>
                  <strong className="text-red-900 block text-xs sm:text-sm mb-0.5">
                    {isEn ? 'Your Gmail Draft Has Been Prepared:' : 'আপনার Gmail ওপেন করা হয়েছে:'}
                  </strong>
                  <p className="text-slate-600 text-[11px] sm:text-xs">
                    {isEn ? (
                      <>
                        A Gmail draft addressed to <strong>{FOUNDATION_INFO.email}</strong> has been prepared with the submitted information. Click the red button below to send directly.
                      </>
                    ) : (
                      <>
                        আপনার তথ্য দিয়ে <strong>{FOUNDATION_INFO.email}</strong> ঠিকানায় জিমেইল খসড়া প্রস্তুত হয়েছে। সরাসরি সেন্ড করতে নিচের লাল বাটনে চাপুন।
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5 w-full">
              {gmailUrl && (
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-red-600 hover:bg-red-700 active:scale-98 text-white font-bold text-sm shadow-md shadow-red-600/20 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                  <span>{isEn ? 'Send Directly via Gmail' : 'সরাসরি জিমেইল (Gmail)-এ পাঠান'}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              )}

              <div className="flex items-center gap-2 w-full">
                {mailtoUrl && (
                  <a
                    href={mailtoUrl}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Other Email Apps' : 'অন্যান্য ইমেইল অ্যাপ'}</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="flex-1 inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-sans-bn font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                >
                  {isEn ? 'Done' : 'ঠিক আছে'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full shadow-2xl border border-emerald-100 overflow-hidden relative my-auto sm:my-6 text-slate-800 animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#045332] text-white px-4 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-2">
            <div className="flex items-start gap-2.5 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 mt-0.5">
                <HandHeart className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300" />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif-bn font-bold text-lg sm:text-xl leading-snug">
                  {isEn ? 'Share Info on Needy People in Your Village' : 'আপনার গ্রামের অসহায় মানুষের তথ্য দিন'}
                </h3>
                <p className="text-[11px] sm:text-xs text-emerald-200 font-light leading-relaxed mt-0.5">
                  {isEn
                    ? 'Share the details of a distressed person in your village, neighborhood, or area — with our humble effort, we may bring a smile to their face, InshaAllah.'
                    : 'আপনার গ্রাম, মহল্লা বা এলাকার অসহায় মানুষের ঠিকানা দিন—আমাদের সামান্য চেষ্টায় হয়তো তাঁর মুখে হাসি ফুটবে, ইনশাআল্লাহ।'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={resetAndClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer shrink-0"
              aria-label={isEn ? 'Close' : 'বন্ধ করুন'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6 max-h-[82vh] overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isEn ? 'Informer Name (Your Name)' : 'তথ্যদাতার নাম (আপনার নাম)'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isEn ? 'e.g. Md. Abdullah' : 'উদাঃ মোঃ আব্দুল্লাহ'}
                    value={informerName}
                    onChange={(e) => setInformerName(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isEn ? 'Your Mobile Number' : 'আপনার মোবাইল নম্বর'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    value={informerPhone}
                    onChange={(e) => setInformerPhone(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isEn ? 'Name of the Needy Person' : 'অসহায় ব্যক্তির নাম'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isEn ? 'Full name of the needy person' : 'অসহায় ব্যক্তির পূর্ণ নাম'}
                    value={needyName}
                    onChange={(e) => setNeedyName(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isEn ? "Needy Person's Mobile (If any)" : 'অসহায় ব্যক্তির মোবাইল নম্বর (যদি থাকে)'}
                  </label>
                  <input
                    type="tel"
                    placeholder={isEn ? '01XXXXXXXXX (Optional)' : '01XXXXXXXXX (ঐচ্ছিক)'}
                    value={needyPhone}
                    onChange={(e) => setNeedyPhone(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isEn ? 'Full Address (Village/Area, Upazila, District)' : 'পূর্ণ ঠিকানা (গ্রাম/এলাকা, থানা, জেলা)'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={isEn ? 'e.g. Village: Gujia, Upazila: Shibganj, District: Bogura' : 'উদাঃ গ্রাম: গুজিয়া, থানা: শিবগঞ্জ, জেলা: বগুড়া'}
                  value={fullAddress}
                  onChange={(e) => setFullAddress(e.target.value)}
                  className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isEn ? 'What kind of support is needed?' : 'কী ধরনের সহযোগিতা প্রয়োজন?'} <span className="text-red-500">*</span>
                </label>
                <select
                  value={helpTypeId}
                  onChange={(e) => setHelpTypeId(e.target.value)}
                  className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                >
                  {HELP_TYPES.map((type) => (
                    <option key={type.id} value={type.id}>
                      {isEn ? type.en : type.bn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isEn ? 'Brief Description' : 'সংক্ষিপ্ত বিবরণ'}
                </label>
                <textarea
                  rows={3}
                  placeholder={isEn ? 'Briefly describe their current condition and urgent needs...' : 'তাঁর বর্তমান অবস্থা ও প্রয়োজন সম্পর্কে সংক্ষেপে লিখুন...'}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{isEn ? 'Submitting...' : 'জমা দেওয়া হচ্ছে...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{isEn ? 'Submit Information' : 'তথ্য জমা দিন'}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
