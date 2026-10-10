import React, { useState } from 'react';
import { X, Users, CheckCircle, HeartHandshake } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [phone, setPhone] = useState('');
  const [upazila, setUpazila] = useState('গুজিয়া, মোকামতলা, বগুড়া');
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [interest, setInterest] = useState('ত্রাণ ও খাদ্য সহায়তা বিতরণ');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    setSubmittedName(cleanName);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setSubmittedName('');
    setPhone('');
    setMessage('');
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

          <div className="p-5 sm:p-9 text-center flex flex-col items-center">
            {/* Green Checkmark Icon at the top */}
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center mb-5 shadow-sm shadow-emerald-900/5">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.2] text-emerald-600" />
            </div>

            {/* 1. Main Title (Dynamic User Name) */}
            <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl text-[#045332] mb-3.5 tracking-tight leading-snug">
              ধন্যবাদ, {displayName}!
            </h3>

            {/* 2. Arabic Supplication / Blessing Badge */}
            <div className="mb-5 inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2 rounded-2xl bg-gradient-to-r from-emerald-50/90 via-emerald-100/75 to-emerald-50/90 border border-emerald-200/90 shadow-xs">
              <span
                dir="rtl"
                lang="ar"
                className="font-cairo text-xl sm:text-2xl text-[#045332] font-semibold sm:font-bold tracking-normal leading-[1.8] select-text"
                style={{ fontFamily: "'Cairo', 'Amiri', sans-serif" }}
              >
                جَزَاكَ ٱللَّٰهُ خَيْرًا
              </span>
            </div>

            {/* 3. Body Text */}
            <div className="space-y-1.5 text-slate-600 font-solaiman text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-7 font-normal">
              <p>মানুষের কল্যাণে আপনার এই সদিচ্ছা ও শ্রম আল্লাহ কবুল করুন।</p>
              <p>খুব শীঘ্রই আমাদের টিম আপনার সাথে যোগাযোগ করবে, ইনশাআল্লাহ।</p>
            </div>

            {/* 4. Action Button */}
            <button
              type="button"
              onClick={resetAndClose}
              className="w-full sm:w-auto min-w-[150px] inline-flex items-center justify-center px-8 py-3 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-sans-bn font-bold text-sm sm:text-base shadow-md shadow-emerald-900/10 hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              ঠিক আছে
            </button>
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
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>নিবন্ধন জমা দিন</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
