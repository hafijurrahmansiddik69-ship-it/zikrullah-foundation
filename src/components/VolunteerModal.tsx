import React, { useState } from 'react';
import { X, Users, CheckCircle, HeartHandshake } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [upazila, setUpazila] = useState('গুজিয়া, মোকামতলা, বগুড়া');
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [interest, setInterest] = useState('ত্রাণ ও খাদ্য সহায়তা বিতরণ');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-emerald-100 overflow-hidden relative my-6 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#045332] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
              <Users className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-serif-bn font-bold text-xl leading-tight">
                স্বেচ্ছাসেবক নিবন্ধন
              </h3>
              <p className="text-xs text-emerald-200 font-light">
                মানবতার সেবায় আমাদের সহযাত্রী হোন
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 stroke-[2.5]" />
              </div>
              <h4 className="font-serif-bn font-bold text-2xl text-[#045332] mb-2">
                ধন্যবাদ, {name || 'ভাই/বোন'}!
              </h4>
              <p className="text-sm text-slate-600 mb-6 max-w-sm mx-auto leading-relaxed">
                আপনার স্বেচ্ছাসেবক আবেদন সফলভাবে জমা হয়েছে। খুব শীঘ্রই আমাদের মোকামতলা সমন্বয় টিম আপনার সাথে যোগাযোগ করবে, ইনশাআল্লাহ।
              </p>
              <button
                type="button"
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-xl bg-[#087443] hover:bg-[#045332] text-white font-bold text-sm shadow-xs cursor-pointer"
              >
                ঠিক আছে
              </button>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};
