import React, { useState, useRef } from 'react';
import { X, Users, Loader2, Send } from 'lucide-react';
import { adminDataService } from '../services/adminDataService';
import { sendVolunteerRegistrationEmail, triggerDirectGmail, getEmailWebhookUrl } from '../services/emailService';
import { useLanguage } from '../context/LanguageContext';
import { CelebrationConfirmationPopup } from './CelebrationConfirmationPopup';

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

      // 2. Single-email dispatch: use custom HTML webhook if configured, otherwise open Gmail/mailto once
      if (getEmailWebhookUrl()) {
        await sendVolunteerRegistrationEmail(submissionPayload);
      } else {
        triggerDirectGmail(submissionPayload);
      }

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/65 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      {submitted ? (
        <CelebrationConfirmationPopup
          displayName={displayName}
          isEn={isEn}
          onClose={resetAndClose}
        />
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
