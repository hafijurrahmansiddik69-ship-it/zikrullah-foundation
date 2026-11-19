import React, { useState, useRef } from 'react';
import { X, Users, CheckCircle, Loader2, Send } from 'lucide-react';
import { adminDataService } from '../services/adminDataService';
import { sendVolunteerRegistrationEmail, triggerDirectGmail } from '../services/emailService';
import { useLanguage } from '../context/LanguageContext';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BLOOD_GROUPS = [
  { value: 'A+', bn: 'A+ (পজিটিভ)', en: 'A+ (Positive)' },
  { value: 'A-', bn: 'A- (নেগেটিভ)', en: 'A- (Negative)' },
  { value: 'B+', bn: 'B+ (পজিটিভ)', en: 'B+ (Positive)' },
  { value: 'B-', bn: 'B- (নেগেটিভ)', en: 'B- (Negative)' },
  { value: 'O+', bn: 'O+ (পজিটিভ)', en: 'O+ (Positive)' },
  { value: 'O-', bn: 'O- (নেগেটিভ)', en: 'O- (Negative)' },
  { value: 'AB+', bn: 'AB+ (পজিটিভ)', en: 'AB+ (Positive)' },
  { value: 'AB-', bn: 'AB- (নেগেটিভ)', en: 'AB- (Negative)' },
];

const INTEREST_OPTIONS = [
  { id: 'medical', bn: 'ফ্রি চিকিৎসা ক্যাম্প', en: 'Free Medical Camp' },
  { id: 'food', bn: 'খাদ্য সহায়তা', en: 'Food Aid' },
  { id: 'winter', bn: 'শীত বস্ত্র বিতরণ', en: 'Winter Clothing Distribution' },
  { id: 'blood', bn: 'জরুরী রক্তদান', en: 'Emergency Blood Donation' },
  { id: 'education', bn: 'শিক্ষা সহায়তা', en: 'Education Aid' },
  { id: 'livelihood', bn: 'আত্মকর্মসংস্থান', en: 'Self-Reliance & Livelihood' },
  { id: 'other', bn: 'অন্যান্য', en: 'Others' },
];

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const { isEn } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [phone, setPhone] = useState('');
  const [upazila, setUpazila] = useState('');
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [interestId, setInterestId] = useState(INTEREST_OPTIONS[0].id);
  const [message, setMessage] = useState('');
  const submitLockRef = useRef(false);

  if (!isOpen) return null;

  const selectedInterestObj = INTEREST_OPTIONS.find((opt) => opt.id === interestId) || INTEREST_OPTIONS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || submitLockRef.current || submitted) return;
    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    if (!cleanName || !cleanPhone) return;

    submitLockRef.current = true;
    setSubmittedName(cleanName);
    setIsSubmitting(true);

    try {
      const interestLabel = isEn ? selectedInterestObj.en : selectedInterestObj.bn;

      const submissionPayload = {
        name: cleanName,
        phone: cleanPhone,
        upazila: upazila.trim() || '',
        bloodGroup: bloodGroup || 'A+',
        interest: interestLabel,
        message: message.trim() || ''
      };

      // 1. Save to local admin database
      adminDataService.addVolunteer({
        name: cleanName || (isEn ? 'Respected Brother/Sister' : 'সম্মানিত ভাই/বোন'),
        phone: cleanPhone || (isEn ? 'Not provided' : 'অনুল্লেখিত'),
        upazila: upazila.trim() || 'উল্লেখ করা হয়নি',
        bloodGroup: bloodGroup || 'A+',
        interest: selectedInterestObj.bn,
        message: message.trim() || '',
        status: 'অপেক্ষমাণ',
        adminNote: 'মডাল আবেদন ফরম থেকে সরাসরি জিমেইলে প্রেরিত'
      });

      // 2. Directly open their Gmail with compose window pre-filled
      triggerDirectGmail(submissionPayload);

      // 3. Prepare email service result (single email flow)
      await sendVolunteerRegistrationEmail(submissionPayload);

      setSubmitted(true);
    } catch (err) {
      console.warn('Volunteer submission log:', err);
    } finally {
      setIsSubmitting(false);
      submitLockRef.current = false;
    }
  };

  const resetAndClose = () => {
    submitLockRef.current = false;
    setIsSubmitting(false);
    setSubmitted(false);
    setName('');
    setSubmittedName('');
    setPhone('');
    setUpazila('');
    setInterestId(INTEREST_OPTIONS[0].id);
    setMessage('');
    onClose();
  };

  const displayName = submittedName || name.trim() || (isEn ? 'Respected Brother/Sister' : 'সম্মানিত ভাই/বোন');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      {submitted ? (
        /* SUCCESS POPUP */
        <div
          className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full shadow-2xl shadow-emerald-950/15 border border-emerald-100 overflow-hidden relative my-auto sm:my-6 text-slate-800 animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Emerald & Gold Accent Bar */}
          <div className="h-1.5 bg-gradient-to-r from-[#045332] via-[#087443] to-[#d97706]" />

          {/* Close X Button */}
          <button
            type="button"
            onClick={resetAndClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer z-10"
            aria-label={isEn ? 'Close' : 'বন্ধ করুন'}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8 text-center flex flex-col items-center">
            {/* Green Checkmark Icon at the top */}
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-emerald-50 border-2 border-amber-300/70 text-emerald-600 flex items-center justify-center mb-4 shadow-sm shadow-emerald-900/10">
              <CheckCircle className="w-9 h-9 sm:w-10 sm:h-10 stroke-[2.2] text-[#087443]" />
            </div>

            {/* 1. Main Title (Dynamic User Name) */}
            <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl text-[#045332] mb-2.5 tracking-tight leading-snug">
              {isEn ? `Thank You, ${displayName}!` : `ধন্যবাদ, ${displayName}!`}
            </h3>

            {/* 2. Arabic Supplication / Blessing Badge */}
            <div className="mb-5 inline-flex items-center justify-center px-5 py-1.5 sm:px-6 sm:py-2 rounded-2xl bg-gradient-to-r from-emerald-50/90 via-amber-50/70 to-emerald-50/90 border border-amber-300/60 shadow-xs">
              <span
                dir="rtl"
                lang="ar"
                className="font-cairo text-lg sm:text-xl text-[#045332] font-semibold sm:font-bold tracking-normal leading-[1.8] select-text"
                style={{ fontFamily: "'Cairo', 'Amiri', sans-serif" }}
              >
                جَزَاكَ اللَّهُ خَيْرًا
              </span>
            </div>

            {/* 3. Heartfelt Gratitude Message */}
            <p className="font-solaiman text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {isEn
                ? 'Heartfelt gratitude from the bottom of our hearts for your kind heart and valuable information in helping people. Our foundation team will contact you soon, InshaAllah.'
                : 'মানুষের উপকারে আপনার এই সুন্দর মন ও মূল্যবান তথ্যের জন্য হৃদয়ের গভীর থেকে আন্তরিক কৃতজ্ঞতা। দ্রুত আমাদের ফাউন্ডেশন টিম আপনার সাথে যোগাযোগ করবে ইনশাআল্লাহ।'}
            </p>

            {/* 4. Single Action Button */}
            <button
              type="button"
              onClick={resetAndClose}
              className="w-full inline-flex items-center justify-center py-3 px-5 rounded-xl bg-gradient-to-r from-[#045332] to-[#087443] hover:from-[#034227] hover:to-[#045332] active:scale-98 text-white font-sans-bn font-bold text-sm sm:text-base shadow-md shadow-emerald-900/15 border border-amber-400/20 transition-all cursor-pointer"
            >
              {isEn ? 'OK' : 'ঠিক আছে'}
            </button>
          </div>
        </div>
      ) : (
        /* REGISTRATION FORM */
        <div
          className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full shadow-2xl border border-emerald-100 overflow-hidden relative my-auto sm:my-6 text-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#045332] text-white px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300" />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif-bn font-bold text-lg sm:text-xl leading-tight truncate">
                  {isEn ? 'Volunteer Registration' : 'স্বেচ্ছাসেবক নিবন্ধন'}
                </h3>
                <p className="text-[11px] sm:text-xs text-emerald-200 font-light truncate">
                  {isEn ? 'Join us in the service of humanity' : 'মানবতার সেবায় আমাদের সহযাত্রী হোন'}
                </p>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer shrink-0 ml-2"
              aria-label={isEn ? 'Close' : 'বন্ধ করুন'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6 max-h-[82vh] overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isEn ? 'Your Full Name' : 'আপনার পূর্ণ নাম'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={isEn ? 'e.g. Md. Abdullah' : 'উদাঃ মোঃ আব্দুল্লাহ'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isEn ? 'Mobile Number' : 'মোবাইল নম্বর'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isEn ? 'Blood Group' : 'রক্তের গ্রুপ'}
                  </label>
                  <select
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  >
                    {BLOOD_GROUPS.map((bg) => (
                      <option key={bg.value} value={bg.value}>
                        {isEn ? bg.en : bg.bn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isEn ? 'Full Address (Village/Area, Upazila, District)' : 'পূর্ণ ঠিকানা (গ্রাম/এলাকা, উপজেলা, জেলা)'}
                  </label>
                  <input
                    type="text"
                    placeholder={isEn ? 'e.g. Village: Gujia, Upazila: Shibganj, District: Bogura' : 'উদাঃ গ্রাম: গুজিয়া, উপজেলা: শিবগঞ্জ, জেলা: বগুড়া'}
                    value={upazila}
                    onChange={(e) => setUpazila(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isEn ? 'Area of Interest' : 'কাজের ক্ষেত্র'}
                  </label>
                  <select
                    value={interestId}
                    onChange={(e) => setInterestId(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  >
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {isEn ? opt.en : opt.bn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isEn ? 'Short Bio or Message (Optional)' : 'সংক্ষিপ্ত পরিচয় বা বার্তা (ঐচ্ছিক)'}
                </label>
                <textarea
                  rows={2}
                  placeholder={isEn ? 'Tell us about your profession, studies, or how you wish to volunteer...' : 'আপনার পেশা, পড়াশোনা বা ফাউন্ডেশনে কাজের ইচ্ছা সম্পর্কে লিখুন...'}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-emerald-600"
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
                    <span>{isEn ? 'Preparing email...' : 'ইমেইলে পাঠানো হচ্ছে...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{isEn ? 'Complete Registration' : 'নিবন্ধন সম্পন্ন করুন'}</span>
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
