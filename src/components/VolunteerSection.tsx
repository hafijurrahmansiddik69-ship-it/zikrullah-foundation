import React, { useState } from 'react';
import { Users, HeartHandshake, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { adminDataService } from '../services/adminDataService';

interface VolunteerSectionProps {
  onOpenModal?: () => void;
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({ onOpenModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [upazila, setUpazila] = useState('গুজিয়া, মোকামতলা, বগুড়া');
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [interest, setInterest] = useState('ত্রাণ ও খাদ্য সহায়তা বিতরণ');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();

    adminDataService.addVolunteer({
      name: cleanName || 'সম্মানিত ভাই/বোন',
      phone: phone.trim() || 'অনুল্লেখিত',
      upazila: upazila || 'বগুড়া',
      bloodGroup: bloodGroup || 'A+',
      interest: interest || 'ত্রাণ ও খাদ্য সহায়তা বিতরণ',
      message: message.trim() || '',
      status: 'অপেক্ষমাণ',
      adminNote: 'ওয়েবসাইট সেকশন ফরম থেকে নিবন্ধিত'
    });

    setSubmitted(true);
    setName('');
    setPhone('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="volunteer-registration" className="py-20 bg-gradient-to-b from-white via-emerald-50/40 to-white border-b border-emerald-100/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2.5 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>মানবতার সেবায় খেদমত</span>
            </div>
            <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl text-[#045332] leading-tight">
              স্বেচ্ছাসেবক নিবন্ধন
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            দ্বীনি ও সামাজিক কাজের খেদমতে সময় ও শ্রম দিয়ে অসহায় মানুষের পাশে দাঁড়াতে আমাদের স্বেচ্ছাসেবক কাফেলায় যুক্ত হোন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Why Join Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#045332] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="font-serif-bn font-bold text-xl sm:text-2xl text-white">
                  কেন যুক্ত হবেন আমাদের সাথে?
                </h3>
                <p className="text-emerald-100/90 text-sm leading-relaxed font-light">
                  জিকরুল্লাহ ফাউন্ডেশনের কার্যক্রম সম্পূর্ণ নিঃস্বার্থ ও আল্লাহকে সন্তুষ্ট করার উদ্দেশ্যে পরিচালিত। আপনার সততা ও সক্রিয় খেদমত একজন অসহায় মানুষের জীবন বদলে দিতে পারে।
                </p>

                <ul className="space-y-3 pt-2 text-sm text-emerald-100/95">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>প্রত্যক্ষ মাঠপর্যায়ে সেবামূলক কাজের সুযোগ</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>জরুরি রক্তদান ও ফ্রি মেডিকেল ক্যাম্প কার্যক্রম</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>দ্বীনি ভ্রাতৃত্ব ও সামাজিক দায়বদ্ধতা পালন</span>
                  </li>
                </ul>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-emerald-400/20 blur-2xl pointer-events-none" />
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 text-emerald-100" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-solaiman">
                আপনার দেওয়া সকল তথ্য আমাদের অ্যাডমিন প্যানেলে সংরক্ষিত থাকবে এবং প্রয়োজন অনুযায়ী আপনার সাথে যোগাযোগ করা হবে।
              </p>
            </div>
          </div>

          {/* Right Column: In-page Volunteer Registration Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100/90 shadow-lg">
            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-serif-bn font-bold text-2xl text-slate-800">
                  জাজাকাল্লাহু খাইরান!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  আপনার স্বেচ্ছাসেবক নিবন্ধন সফলভাবে গ্রহণ করা হয়েছে। জিকরুল্লাহ ফাউন্ডেশনের অ্যাডমিন প্যানেলে আপনার তথ্য নথিভুক্ত হয়েছে।
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 cursor-pointer"
                  >
                    আরেকটি আবেদন জমা দিন
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-2">
                  <h4 className="font-serif-bn font-bold text-lg text-slate-800">
                    স্বেচ্ছাসেবক আবেদন ফরম
                  </h4>
                  <p className="text-xs text-slate-500">
                    নিচের তথ্যগুলো দিয়ে নিবন্ধিত হোন
                  </p>
                </div>

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
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      মোবাইল নম্বর <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="০১৭xxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      রক্তের গ্রুপ
                    </label>
                    <select
                      value={bloodGroup}
                      onChange={(e) => setBloodGroup(e.target.value)}
                      className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 cursor-pointer"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      উপজেলা / এলাকা
                    </label>
                    <input
                      type="text"
                      value={upazila}
                      onChange={(e) => setUpazila(e.target.value)}
                      className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      কাজের ক্ষেত্র
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 cursor-pointer"
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
                    placeholder="আপনার পেশা, পড়াশোনা বা কাজের ইচ্ছা সম্পর্কে..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-950/15 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>নিবন্ধন সম্পন্ন করুন</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
