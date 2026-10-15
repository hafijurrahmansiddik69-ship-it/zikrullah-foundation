import React from 'react';
import { Heart, Sparkles, ArrowRight, PhoneCall } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';

interface CallToActionBannerProps {
  onOpenDonation: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onOpenDonation }) => {
  return (
    <section className="py-16 bg-[#fafcfb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#003d27] via-[#045332] to-[#087443] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-emerald-700/50 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Text Content */}
          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold mb-2.5 sm:mb-3 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>সদকায়ে জারিয়া ও মানবকল্যাণ</span>
            </div>

            <h2 className="font-serif-bn font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-2.5 sm:mb-3">
              আসুন, একসাথে ভালো কাজ করি
            </h2>

            <p className="text-emerald-100 text-xs sm:text-base leading-relaxed font-light mb-6">
              আপনার সামান্য সহযোগিতা ও আন্তরিক অনুদানও গুজিয়া ও মোকামতলার প্রত্যন্ত অঞ্চলে একজন অসহায় বিধবা, এতিম শিশু কিংবা অসুস্থ বৃদ্ধের মুখে অনাবিল হাসি ফোটাতে পারে।
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
              <button
                onClick={onOpenDonation}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-emerald-50 active:scale-95 text-[#045332] font-bold text-sm sm:text-base shadow-xl transition-all cursor-pointer whitespace-nowrap min-h-[44px]"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-[#087443] text-[#087443]" />
                <span>খেদমতে শরীক হোন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${FOUNDATION_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-emerald-900/60 hover:bg-emerald-900/90 border border-emerald-400/30 text-emerald-200 hover:text-white font-semibold text-sm transition-all cursor-pointer min-h-[44px]"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span>যোগাযোগ: {FOUNDATION_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right badge / quick info card */}
          <div className="relative z-10 shrink-0 text-center md:text-right bg-white/10 backdrop-blur-xs border border-white/15 p-6 rounded-2xl max-w-xs w-full">
            <span className="text-amber-300 font-serif-bn font-bold text-lg block mb-1">
              {FOUNDATION_INFO.slogan}
            </span>
            <p className="text-emerald-100 text-xs leading-relaxed font-light">
              মানবতার সেবায় নিবেদিত এক বিশ্বস্ত মানবিক কাফেলা
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-emerald-200/90 flex items-center justify-center md:justify-end gap-1.5 font-mono">
              <span>EST. {FOUNDATION_INFO.established}</span>
            </div>
          </div>

          {/* Background subtle watermark/glow */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 bg-radial from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
