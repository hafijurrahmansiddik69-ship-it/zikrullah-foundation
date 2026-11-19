import React from 'react';
import { Calendar, MapPin, Layers, ArrowRight } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenDonation?: () => void;
  onNavigateToAbout?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToAbout }) => {
  const { t, isEn } = useLanguage();

  return (
    <section id="home" className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image: Left side heavily dark & blurred with black, Right side softly visible */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dlklqihg6/image/upload/v1792118844/hk3ytqebhh3unwlwsb3m.jpg"
          alt={isEn ? 'Zikrullah Foundation Humanitarian Work' : 'জিকরুল্লাহ ফাউন্ডেশন কার্যক্রম'}
          className="w-full h-full object-cover object-right sm:object-[75%_center] filter brightness-[0.95] contrast-[1.05]"
        />

        {/* Left Side Deep Black & Blur Overlay */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 bg-gradient-to-r from-black via-black/95 via-50% to-transparent backdrop-blur-md z-[1]" />

        {/* Smooth Dark Transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 via-40% via-black/50 to-black/20 z-[2]" />

        {/* Top & bottom subtle black shadows */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-black/95 z-[2]" />

        {/* Subtle Islamic Geometric Pattern Texture */}
        <div 
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-[3]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 15-15 15-15-15L30 0zm0 30l15 15-15 15-15-15 15-15zM0 30l15-15 15 15-15 15L0 30zm30 0l15-15 15 15-15 15-15-15z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Warm Ambient Glow in the Center */}
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none z-[3]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center text-white flex flex-col items-center">
        {/* Foundation Name: Drops smoothly from above */}
        <h1 className="hero-reveal-down font-serif-bn font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.2] mb-6 sm:mb-8 drop-shadow-md">
          {isEn ? FOUNDATION_INFO.englishName : FOUNDATION_INFO.name}
          <span className="block text-amber-300 font-solaiman text-lg sm:text-2xl md:text-3xl mt-2 sm:mt-3 font-semibold tracking-wide drop-shadow-sm">
            {t.common.slogan}
          </span>
        </h1>

        {/* Foundation Inspiring Statement & Establishment Text with Vibrant Blue & Green Accents */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4 font-solaiman text-base sm:text-lg md:text-xl leading-relaxed font-normal">
          {/* First Box: Expands gently from inside */}
          <div className="hero-reveal-zoom hero-delay-150 relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/50 via-[#0a1b38]/65 to-[#020b1a]/75 backdrop-blur-md p-5 sm:p-6 border-2 border-blue-400 shadow-[0_8px_30px_rgba(37,99,235,0.3)] text-justify sm:text-center">
            {/* Subtle Blue ambient glow inside frosted glass */}
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-blue-500/20 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-sky-400/15 rounded-full blur-xl pointer-events-none" />
            <p className="relative z-10 text-white leading-relaxed drop-shadow-xs">
              {t.hero.quote}
            </p>
          </div>

          {/* Second Box: Floats up gently */}
          <div className="hero-reveal-up hero-delay-250 relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950/80 via-[#045332]/75 to-[#087443]/65 backdrop-blur-md px-5 sm:px-6 py-4 sm:py-4.5 border-2 border-emerald-400 shadow-[0_8px_28px_rgba(16,185,129,0.25)] text-center">
            {/* Subtle Emerald ambient glow inside frosted glass */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-400/15 rounded-full blur-xl pointer-events-none" />
            <p className="relative z-10 text-sm sm:text-base md:text-lg text-emerald-50 font-solaiman font-medium leading-relaxed drop-shadow-xs">
              {t.hero.history}
            </p>
          </div>
        </div>

        {/* Informational Highlights: Top, Zoom, Up */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-4xl pt-6 border-t border-emerald-500/20 text-xs sm:text-sm text-emerald-50 font-solaiman">
          <div className="hero-reveal-down hero-delay-350 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-sm">
            <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{isEn ? 'Established: January 1, 2023' : 'প্রতিষ্ঠা: ১লা জানুয়ারি ২০২৩'}</span>
          </div>
          <div className="hero-reveal-zoom hero-delay-450 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-sm">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{isEn ? 'Headquarters: Gujia, Mokamtala, Bogura' : 'প্রধান কার্যালয়: গুজিয়া, মোকামতলা, বগুড়া'}</span>
          </div>
          <div className="hero-reveal-up hero-delay-550 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-sm">
            <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{isEn ? '7 Permanent Welfare Projects' : '৭টি স্থায়ী সেবামূলক প্রকল্প'}</span>
          </div>
        </div>

        {/* Sleek Amber/Gold Glassmorphism Pill Action Button -> About Page */}
        <div className="hero-reveal-zoom hero-delay-600 mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => onNavigateToAbout?.()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-amber-400/10 backdrop-blur-md active:scale-95 text-amber-300 hover:text-amber-200 font-sans-bn font-bold text-xs sm:text-sm border border-amber-400/50 hover:border-amber-300/80 shadow-md shadow-black/30 hover:shadow-[0_0_24px_rgba(251,191,36,0.28)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>{isEn ? 'Learn About Us' : 'আমাদের সম্পর্কে জানুন'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
