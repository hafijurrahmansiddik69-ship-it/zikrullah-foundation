import React from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { heroImg } from '../data/mockData';

interface CallToActionBannerProps {
  onOpenDonation: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onOpenDonation }) => {
  return (
    <section className="py-16 bg-[#fafcfb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#003d27] via-[#045332] to-[#087443] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-emerald-700/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold mb-2.5 sm:mb-3 border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>সদকায়ে জারিয়া</span>
            </div>

            <h2 className="font-serif-bn font-bold text-xl sm:text-3xl md:text-4xl text-white leading-tight mb-2.5 sm:mb-3">
              আসুন, একসাথে ভালো কাজ করি
            </h2>

            <p className="text-emerald-100 text-xs sm:text-base leading-relaxed font-light">
              আপনার সামান্য সহযোগিতা ও আন্তরিক অনুদানও গুজিয়া ও মোকামতলার প্রত্যন্ত অঞ্চলে একজন অসহায় বিধবা, এতিম শিশু কিংবা অসুস্থ বৃদ্ধের মুখে অনাবিল হাসি ফোটাতে পারে।
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 relative z-10">
            <button
              onClick={onOpenDonation}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-emerald-50 active:scale-95 text-[#045332] font-bold text-sm sm:text-base shadow-xl transition-all cursor-pointer whitespace-nowrap min-h-[44px]"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-[#087443] text-[#087443]" />
              <span>খেদমতে শরীক হোন</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Background subtle watermark/glow */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 bg-radial from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
