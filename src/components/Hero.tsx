import React from 'react';
import { ArrowRight, Sparkles, HeartHandshake, ShieldCheck, Heart, Users } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenDonation?: () => void;
  onNavigateToAbout?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonation, onNavigateToAbout }) => {
  const { t, isEn } = useLanguage();

  return (
    <section id="home" className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image: Left side heavily dark & blurred, Right side softly visible */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dlklqihg6/image/upload/v1792118844/hk3ytqebhh3unwlwsb3m.jpg"
          alt="জিকরুল্লাহ ফাউন্ডেশন কার্যক্রম"
          className="w-full h-full object-cover object-right sm:object-[75%_center] filter brightness-[0.95] contrast-[1.05]"
        />

        {/* Left Side Deep Black & Blur Overlay */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 bg-gradient-to-r from-black via-black/95 via-50% to-transparent backdrop-blur-md z-[1]" />

        {/* Transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#01190e]/90 via-40% via-[#012b18]/50 to-[#023b20]/25 z-[2]" />

        {/* Top & bottom shadows */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-[#011309]/95 z-[2]" />

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
        
        {/* Bismillah Calligraphy Badge */}
        <div className="inline-flex items-center gap-2 mb-5 px-4 sm:px-5 py-1.5 rounded-full bg-[#033b21]/80 backdrop-blur-md border border-amber-400/35 text-amber-300 text-xs sm:text-sm font-serif-bn tracking-wider shadow-lg shadow-emerald-950/40">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 fill-amber-400/20" />
          <span dir="rtl" className="font-serif">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
          <span className="hidden sm:inline text-amber-200/50">|</span>
          <span className="hidden sm:inline font-solaiman text-amber-200 text-xs">{t.hero.bismillahBadge}</span>
        </div>

        {/* Foundation Name */}
        <h1 className="font-serif-bn font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.2] mb-3 sm:mb-4 drop-shadow-md">
          {isEn ? FOUNDATION_INFO.englishName : FOUNDATION_INFO.name}
          <span className="block text-amber-300 font-solaiman text-lg sm:text-2xl md:text-3xl mt-2 sm:mt-3 font-semibold tracking-wide drop-shadow-sm">
            {t.common.slogan}
          </span>
        </h1>

        {/* English Tagline */}
        <p 
          className="mb-6 sm:mb-8 text-center drop-shadow-sm font-armwrestler tracking-[3px] uppercase font-bold text-sm sm:text-base text-white"
        >
          {t.common.estTag}
        </p>

        {/* Foundation Inspiring Statement & Establishment Text with Dark Green Background */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4 text-emerald-50/95 font-solaiman text-base sm:text-lg md:text-xl leading-relaxed font-normal">
          <p className="bg-[#012615]/65 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-emerald-400/30 shadow-2xl text-justify sm:text-center leading-relaxed">
            {t.hero.quote}
          </p>
          <p className="bg-[#012012]/60 backdrop-blur-sm px-5 py-3.5 rounded-xl border border-emerald-400/25 text-sm sm:text-base md:text-lg text-emerald-100/95 font-solaiman font-medium leading-relaxed">
            {t.hero.history}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto mb-10 sm:mb-12">
          {onOpenDonation && (
            <button
              onClick={onOpenDonation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-500 to-[#10b981] hover:from-emerald-600 hover:to-emerald-500 active:scale-95 text-white font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] border border-emerald-300/40 transition-all duration-300 cursor-pointer min-h-[48px] group"
            >
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 stroke-white fill-white/20 group-hover:scale-110 transition-transform duration-300" />
              <span>{t.hero.btnDonate}</span>
            </button>
          )}

          {onNavigateToAbout && (
            <button
              onClick={onNavigateToAbout}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md active:scale-95 text-white font-semibold text-sm sm:text-base border border-white/25 hover:border-white/40 transition-all cursor-pointer min-h-[48px]"
            >
              <span>{t.hero.btnAbout}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Trust Badges / Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl pt-6 border-t border-emerald-500/20 text-xs sm:text-sm text-emerald-100/90 font-solaiman">
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.hero.badgeAmanat}</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
            <Heart className="w-4 h-4 text-emerald-400 shrink-0 fill-emerald-400/20" />
            <span>{isEn ? 'Direct Field Relief & Care' : 'সরাসরি মাঠপর্যায়ে অসহায়দের সেবা'}</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
            <Users className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{isEn ? 'Unity & Welfare of the Ummah' : 'উম্মাহর সার্বিক কল্যাণ ও ঐক্য'}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
