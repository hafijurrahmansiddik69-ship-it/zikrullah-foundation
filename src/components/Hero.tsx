import React from 'react';
import { Heart, ArrowRight, ShieldCheck, CheckCircle2, Calculator } from 'lucide-react';
import { heroImg, FOUNDATION_INFO } from '../data/mockData';

interface HeroProps {
  onOpenDonation: () => void;
  onOpenZakat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonation, onOpenZakat }) => {
  return (
    <section id="home" className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Controlled Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="জিকিরুল্লাহ ফাউন্ডেশন মানবিক সেবা কার্যক্রম"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform duration-1000"
        />
        {/* Multilayer contrast scrim ensuring WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-emerald-950/30 mix-blend-multiply" />
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
            <span className="block text-emerald-400 font-sans-bn text-2xl sm:text-3xl lg:text-4xl mt-2 font-semibold">
              মানবতার সেবায়, ইসলামের পথে
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-light">
            আমাদের চারপাশের অসহায় মানুষের নীরব হাহাকার মুমিনের অন্তরে গভীর তোলপাড় সৃষ্টি করে। একমাত্র রবের সন্তুষ্টির আশায় তাঁদের মুখে একটু হাসি ফোটানো এবং খাদ্য, চিকিৎসা ও দ্বীনি শিক্ষার পথ সুগম করা দুনিয়াতে সুখময় জীবন এবং আখেরাতে নাজাতের উসীলা হবে, ইনশাআল্লাহ।
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <button
              onClick={onOpenDonation}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#087443] hover:bg-[#045332] active:scale-95 text-white font-bold text-base shadow-lg shadow-emerald-950/40 transition-all cursor-pointer whitespace-nowrap"
            >
              <Heart className="w-5 h-5 fill-white text-white" />
              <span>সহযোগিতার হাত বাড়ান</span>
            </button>

            <button
              onClick={onOpenZakat}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white font-semibold text-sm backdrop-blur-sm border border-white/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <Calculator className="w-4 h-4 text-emerald-300" />
              <span>যাকাত হিসেব করুন</span>
            </button>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full text-slate-300 hover:text-white font-medium text-sm transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>আমাদের সম্পর্কে</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>১০০% আমানতদারি ও স্বচ্ছতা</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>প্রত্যক্ষ মাঠপর্যায়ে সেবা</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>শরী‘আহসম্মত যাকাত বণ্টন</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
