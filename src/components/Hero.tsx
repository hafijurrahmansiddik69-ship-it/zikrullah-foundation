import React from 'react';
import { ArrowRight } from 'lucide-react';
import { heroImg, FOUNDATION_INFO } from '../data/mockData';

interface HeroProps {
  onOpenDonation?: () => void;
  onOpenZakat?: () => void;
  onNavigateToAbout?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToAbout }) => {
  return (
    <section id="home" className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Controlled Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={FOUNDATION_INFO.homeBackgroundUrl || heroImg}
          alt="জিকরুল্লাহ ফাউন্ডেশন কার্যক্রম"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Restored rich dark mood overlay with deep contrast and emerald depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45" />
        <div className="absolute inset-0 bg-emerald-950/35 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-white">
        <div className="max-w-2xl">
          
          {/* Eyebrow Calligraphy */}
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-sm sm:text-base font-serif-bn tracking-wider shadow-sm">
            <span>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif-bn font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.18] mb-5">
            {FOUNDATION_INFO.name}
            <span className="block text-emerald-300 font-solaiman text-base sm:text-xl lg:text-2xl mt-3 font-medium tracking-wide">
              কুরআন-সুন্নাহর আলোকে, উম্মাহর খেদমতে
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="font-solaiman text-slate-100 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl font-normal">
            আমাদের চারপাশের অসহায় মানুষের নীরব হাহাকার মুমিনের অন্তরে গভীর তোলপাড় সৃষ্টি করে। একমাত্র রবের সন্তুষ্টির আশায় তাঁদের মুখে একটু হাসি ফোটানো এবং খাদ্য, চিকিৎসা ও দ্বীনি শিক্ষার পথ সুগম করা দুনিয়াতে সুখময় জীবন এবং আখেরাতে নাজাতের উসীলা হবে, ইনশাআল্লাহ।
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={onNavigateToAbout}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#087443] hover:bg-[#045332] active:scale-95 text-white font-semibold text-sm transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-emerald-950/40"
            >
              <span>আমাদের সম্পর্কে জানুন</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
