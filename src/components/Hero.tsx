import React from 'react';
import { ArrowRight } from 'lucide-react';
import { heroImg, FOUNDATION_INFO } from '../data/mockData';

interface HeroProps {
  onOpenDonation?: () => void;
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/70" />
        <div className="absolute inset-0 bg-emerald-950/40 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-24 text-white flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center text-center">
          
          {/* Eyebrow Calligraphy */}
          <div className="inline-flex items-center justify-center gap-2 mb-3.5 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm md:text-base font-serif-bn tracking-wider shadow-xs">
            <span>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif-bn font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.22] mb-4 sm:mb-5 text-center">
            {FOUNDATION_INFO.name}
            <span className="block text-emerald-300 font-solaiman text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-3 font-medium tracking-wide text-center">
              কুরআন-সুন্নাহর আলোকে, উম্মাহর খেদমতে
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 max-w-2xl mx-auto text-slate-100 font-solaiman text-sm sm:text-base md:text-lg leading-relaxed font-normal text-center">
            <p>
              “আমাদের চারপাশের অসহায় মানুষের নীরব হাহাকার মুমিনের অন্তরে গভীর তোলপাড় সৃষ্টি করে। একমাত্র রবের সন্তুষ্টির আশায় তাঁদের মুখে একটু হাসি ফোটানো এবং খাদ্য, চিকিৎসা ও দ্বীনি শিক্ষার পথ সুগম করা দুনিয়াতে সুখময় জীবন এবং আখেরাতে নাজাতের উসীলা হবে, ইনশাআল্লাহ।”
            </p>
            <p className="border-t border-emerald-500/20 pt-2.5 sm:pt-3">
              উম্মাহর এই ক্রান্তিলগ্নে সেবাকে ইবাদত মনে করে এবং মানবিক দায়বদ্ধতা থেকে ১লা জানুয়ারি ২০২৩ ঈসায়ীতে “হাফিজুর রহমান সিদ্দিক (বগুড়া)”-এর উদ্যোগে প্রতিষ্ঠিত হয় ‘জিকরুল্লাহ ফাউন্ডেশন’—যা শিক্ষা, দাওয়াহ ও মানবকল্যাণে নিবেদিত একটি অরাজনৈতিক সেবামূলক প্রতিষ্ঠান।
            </p>
          </div>

          {/* CTAs */}
          <div className="w-full sm:w-auto flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onNavigateToAbout}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-[#087443] hover:bg-[#045332] active:scale-95 text-white font-semibold text-sm sm:text-base transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-emerald-950/40 min-h-[44px]"
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
