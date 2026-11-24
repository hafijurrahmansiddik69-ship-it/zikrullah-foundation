import React, { useState, useRef } from 'react';
import { X, HandHeart, Loader2, Send } from 'lucide-react';
import { adminDataService } from '../services/adminDataService';
import {
  sendNeedyInfoEmail,
  triggerDirectGmailForNeedyInfo,
  getEmailWebhookUrl,
} from '../services/emailService';
import { useLanguage } from '../context/LanguageContext';
import { CelebrationConfirmationPopup } from './CelebrationConfirmationPopup';

interface NeedyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HELP_TYPES = [
  { id: 'medical', bn: 'ফ্রি চিকিৎসা ও ওষুধ', en: 'Free Medical & Medicine' },
  { id: 'food', bn: 'খাদ্য সহায়তা', en: 'Food Aid' },
  { id: 'winter', bn: 'শীত বস্ত্র প্রয়োজন', en: 'Winter Clothing Needed' },
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
  const [submittedNeedyName, setSubmittedNeedyName] = useState('');
  const [submittedAddress, setSubmittedAddress] = useState('');
  const [informerPhone, setInformerPhone] = useState('');
  const [needyName, setNeedyName] = useState('');
  const [needyPhone, setNeedyPhone] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [helpTypeId, setHelpTypeId] = useState(HELP_TYPES[0].id);
  const [description, setDescription] = useState('');
  const submitLockRef = useRef(false);

  if (!isOpen) return null;

  const selectedHelpType = HELP_TYPES.find((item) => item.id === helpTypeId) || HELP_TYPES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || submitLockRef.current || submitted) return;
    const cleanInformerName = informerName.trim();
    const cleanInformerPhone = informerPhone.trim();
    const cleanNeedyName = needyName.trim();
    const cleanAddress = fullAddress.trim();

    if (!cleanInformerName || !cleanInformerPhone || !cleanNeedyName || !cleanAddress) return;

    submitLockRef.current = true;
    setSubmittedInformerName(cleanInformerName);
    setSubmittedNeedyName(cleanNeedyName);
    setSubmittedAddress(cleanAddress);
    setIsSubmitting(true);

    try {
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
        subject: `[সহযোগিতার আবেদন] অসহায় ব্যক্তির তথ্য — ${cleanAddress}`,
        message: formattedDetails,
      });

      // 2. Single-email dispatch: use custom HTML webhook if configured, otherwise open Gmail/mailto once
      if (getEmailWebhookUrl()) {
        await sendNeedyInfoEmail(submissionPayload);
      } else {
        triggerDirectGmailForNeedyInfo(submissionPayload);
      }

      setSubmitted(true);
    } catch (err) {
      console.warn('Needy info submission notice:', err);
    } finally {
      setIsSubmitting(false);
      submitLockRef.current = false;
    }
  };

  const resetAndClose = () => {
    submitLockRef.current = false;
    setIsSubmitting(false);
    setSubmitted(false);
    setInformerName('');
    setSubmittedInformerName('');
    setSubmittedNeedyName('');
    setSubmittedAddress('');
    setInformerPhone('');
    setNeedyName('');
    setNeedyPhone('');
    setFullAddress('');
    setHelpTypeId(HELP_TYPES[0].id);
    setDescription('');
    onClose();
  };

  const displayName = submittedInformerName || informerName.trim() || (isEn ? 'Respected Well-Wisher' : 'সম্মানিত শুভাকাঙ্ক্ষী');
  const displayNeedyName = submittedNeedyName || needyName.trim();
  const displayNeedyAddress = submittedAddress || fullAddress.trim();

  return (
    <div
      className="printable-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/65 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={resetAndClose}
    >
      {submitted ? (
        <CelebrationConfirmationPopup
          displayName={displayName}
          isEn={isEn}
          contextType="needy-info"
          needyName={displayNeedyName}
          needyAddress={displayNeedyAddress}
          onClose={resetAndClose}
        />
      ) : (
        <div
          className="printable-card bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full shadow-2xl border border-emerald-100 overflow-hidden relative my-auto sm:my-6 text-slate-800 animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Centered Official Print Header Banner */}
          <div className="hidden print:block bg-[#064e3b] text-white px-5 py-4 border-b-[3px] border-[#d97706] text-center">
            <div className="font-serif-bn font-bold text-lg text-center">
              জিকরুল্লাহ ফাউন্ডেশন (Zikrullah Foundation)
            </div>
            <div className="text-xs text-emerald-100 mt-1 text-center">
              Official Email: zikrullahfoundation@gmail.com | সহায়তার আবেদন তথ্য
            </div>
          </div>

          {/* Header */}
          <div className="print:hidden bg-[#045332] text-white px-4 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-2">
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
              className="no-print p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer shrink-0"
              aria-label={isEn ? 'Close' : 'বন্ধ করুন'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="printable-card-scroll p-4 sm:p-6 max-h-[82vh] overflow-y-auto">
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
                className="no-print w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
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
