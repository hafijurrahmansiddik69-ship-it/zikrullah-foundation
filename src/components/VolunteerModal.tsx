import React, { useState } from 'react';
import { X, Users, CheckCircle, HeartHandshake, Loader2, Mail, ExternalLink, Send } from 'lucide-react';
import { adminDataService } from '../services/adminDataService';
import { sendVolunteerRegistrationEmail, triggerDirectGmail, getDirectGmailUrl, getMailtoUrl } from '../services/emailService';
import { FOUNDATION_INFO } from '../data/mockData';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [phone, setPhone] = useState('');
  const [upazila, setUpazila] = useState('গুজিয়া, মোকামতলা, বগুড়া');
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [interest, setInterest] = useState('ত্রাণ ও খাদ্য সহায়তা বিতরণ');
  const [message, setMessage] = useState('');
  const [mailtoUrl, setMailtoUrl] = useState('');
  const [gmailUrl, setGmailUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    if (!cleanName || !cleanPhone) return;

    setSubmittedName(cleanName);
    setIsSubmitting(true);

    const submissionPayload = {
      name: cleanName,
      phone: cleanPhone,
      upazila: upazila || 'বগুড়া',
      bloodGroup: bloodGroup || 'A+',
      interest: interest || 'ত্রাণ ও খাদ্য সহায়তা বিতরণ',
      message: message.trim() || ''
    };

    // 1. Save to local admin database
    adminDataService.addVolunteer({
      name: cleanName || 'সম্মানিত ভাই/বোন',
      phone: cleanPhone || 'অনুল্লেখিত',
      upazila: upazila || 'বগুড়া',
      bloodGroup: bloodGroup || 'A+',
      interest: interest || 'ত্রাণ ও খাদ্য সহায়তা বিতরণ',
      message: message.trim() || '',
      status: 'অপেক্ষমাণ',
      adminNote: 'মডাল আবেদন ফরম থেকে সরাসরি জিমেইলে প্রেরিত'
    });

    // 2. Compute direct Gmail and Mailto URLs
    const directGmail = getDirectGmailUrl(submissionPayload);
    const directMailto = getMailtoUrl(submissionPayload);
    setGmailUrl(directGmail);
    setMailtoUrl(directMailto);

    // 3. ডাইরেক্ট জিমেইল ওপেন করার কল (Directly open their Gmail with compose window pre-filled)
    triggerDirectGmail(submissionPayload);

    // 4. Background email service notification
    try {
      await sendVolunteerRegistrationEmail(submissionPayload);
    } catch (err) {
      console.warn('Background email dispatch log:', err);
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setSubmittedName('');
    setPhone('');
    setMessage('');
    setGmailUrl('');
    setMailtoUrl('');
    onClose();
  };

  const displayName = submittedName || name.trim() || 'সম্মানিত ভাই/বোন';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      {submitted ? (
        /* SUCCESS POPUP (স্বেচ্ছাসেবক নিবন্ধনের সফল পপআপ মডাল) */
        <div
          className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full shadow-2xl border border-emerald-100 overflow-hidden relative my-auto sm:my-6 text-slate-800 animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle Top Accent Bar */}
          <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-[#087443] to-teal-500" />

          {/* Close X Button */}
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer z-10"
            aria-label="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-5 sm:p-8 text-center flex flex-col items-center">
            {/* Green Checkmark Icon at the top */}
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 shadow-sm shadow-emerald-900/5">
              <CheckCircle className="w-9 h-9 sm:w-10 sm:h-10 stroke-[2.2] text-emerald-600" />
            </div>

            {/* 1. Main Title (Dynamic User Name) */}
            <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl text-[#045332] mb-2 tracking-tight leading-snug">
              ধন্যবাদ, {displayName}!
            </h3>

            {/* 2. Arabic Supplication / Blessing Badge */}
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

            {/* 3. Direct Gmail Notification Box */}
            <div className="w-full space-y-3 font-solaiman text-xs sm:text-sm leading-relaxed mb-5">
              <div className="bg-red-50/80 border border-red-200 rounded-xl p-3 text-left text-slate-700 flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
                  M
                </div>
                <div>
                  <strong className="text-red-900 block text-xs sm:text-sm mb-0.5">
                    আপনার Gmail ওপেন করা হয়েছে:
                  </strong>
                  <p className="text-slate-600 text-[11px] sm:text-xs">
                    আপনার তথ্য দিয়ে <strong>{FOUNDATION_INFO.email}</strong> ঠিকানায় জিমেইল খসড়া প্রস্তুত হয়েছে। সরাসরি সেন্ড করতে নিচের লাল বাটনে চাপুন।
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Action Buttons */}
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
                  <span>সরাসরি জিমেইল (Gmail)-এ পাঠান</span>
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
                    <span>অন্যান্য ইমেইল অ্যাপ</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="flex-1 inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-sans-bn font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                >
                  ঠিক আছে
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* REGISTRATION FORM (স্বেচ্ছাসেবক নিবন্ধন ফর্ম) */
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
                  স্বেচ্ছাসেবক নিবন্ধন
                </h3>
                <p className="text-[11px] sm:text-xs text-emerald-200 font-light truncate">
                  মানবতার সেবায় আমাদের সহযাত্রী হোন
                </p>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer shrink-0 ml-2"
              aria-label="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6 max-h-[82vh] overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  আপনার পূর্ণ নাম <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="উদাঃ মোঃ আব্দুল্লাহ"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
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
                    রক্তের গ্রুপ
                  </label>
                  <select
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  >
                    <option value="A+">A+ (পজিটিভ)</option>
                    <option value="A-">A- (নেগেটিভ)</option>
                    <option value="B+">B+ (পজিটিভ)</option>
                    <option value="B-">B- (নেগেটিভ)</option>
                    <option value="O+">O+ (পজিটিভ)</option>
                    <option value="O-">O- (নেগেটিভ)</option>
                    <option value="AB+">AB+ (পজিটিভ)</option>
                    <option value="AB-">AB- (নেগেটিভ)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    উপজেলা / এলাকা
                  </label>
                  <input
                    type="text"
                    value={upazila}
                    onChange={(e) => setUpazila(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    কাজের ক্ষেত্র
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  >
                    <option value="ত্রাণ ও খাদ্য সহায়তা বিতরণ">ত্রাণ ও খাদ্য সহায়তা বিতরণ</option>
                    <option value="ফ্রি মেডিকেল ক্যাম্প পরিচালনা">ফ্রি মেডিকেল ক্যাম্প পরিচালনা</option>
                    <option value="মক্তব ও শিক্ষা কার্যক্রম">মক্তব ও শিক্ষা কার্যক্রম</option>
                    <option value="আইটি, গ্রাফিক্স ও সোশ্যাল মিডিয়া">আইটি, গ্রাফিক্স ও প্রচার</option>
                    <option value="অন্যান্য সামাজিক কাজ">অন্যান্য সামাজিক কাজ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  সংক্ষিপ্ত পরিচয় বা বার্তা (ঐচ্ছিক)
                </label>
                <textarea
                  rows={2}
                  placeholder="আপনার পেশা, পড়াশোনা বা ফাউন্ডেশনে কাজের ইচ্ছা সম্পর্কে লিখুন..."
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
                    <span>ইমেইলে পাঠানো হচ্ছে...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>নিবন্ধন সম্পন্ন করুন</span>
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
