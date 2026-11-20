import React from 'react';
import { UserPlus, HandHeart, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

interface AboutSectionProps {
  onOpenVolunteer: () => void;
  onOpenNeedyInfo?: () => void;
  onOpenContactModal?: () => void;
  onNavigateToAbout?: () => void;
  onOpenDonation?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenVolunteer,
  onOpenNeedyInfo,
  onOpenContactModal,
  onOpenDonation
}) => {
  const { t, isEn } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#fafcfb] border-b border-emerald-100/60 overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Visual Showcase & Quranic Verse Card: 1. বাম থেকে */}
        <ScrollReveal direction="left" className="w-full max-w-md sm:max-w-lg relative">
          <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-800/20 shadow-2xl shadow-emerald-950/20 aspect-4/5 bg-[#012213] group">
            {/* Rich forest green backdrop and photo with warm lighting */}
            <img
              src="https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg"
              alt={isEn ? 'Zikrullah Foundation Humanitarian Work' : 'জিকরুল্লাহ ফাউন্ডেশন কার্যক্রম'}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.05] group-hover:scale-102 transition-transform duration-700"
            />
            {/* Forest green overlay with warm lighting gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#012615] via-[#02381e]/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.15),transparent_60%)]" />

            {/* Bottom Quranic Ayah Box with Semi-Transparent Glass Effect */}
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 p-3.5 sm:p-5 rounded-2xl bg-gradient-to-br from-[#120720]/60 via-[#1e0a3d]/50 to-[#290545]/60 backdrop-blur-md border border-white/25 sm:border-2 sm:border-[#a855f7]/50 shadow-[0_12px_28px_rgba(0,0,0,0.35)] text-white z-20 overflow-hidden">
              {/* Subtle Purple & Amber ambient glow inside frosted glass */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-500/15 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />

              {/* Arabic Portion */}
              <p
                className="font-times font-bold text-white text-[15px] sm:text-[17px] md:text-[19px] leading-[2.05] sm:leading-[2.15] tracking-normal mb-2 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] selection:bg-purple-900 selection:text-white"
                style={{ color: '#FFFFFF' }}
                dir="rtl"
                lang="ar"
              >
                {t.aboutVisual.quranArabic}
              </p>

              {/* Translation & Surah Reference */}
              <p className="font-solaiman text-[11px] sm:text-xs text-purple-100/95 leading-relaxed font-normal text-center mb-2.5">
                {t.aboutVisual.quranTranslation}
                <span className="block text-amber-300 font-bold text-[10px] sm:text-xs mt-1">
                  {t.aboutVisual.surahRef}
                </span>
              </p>

              {/* Prominent Glowing Green 'দান করুন' (Donate) Button */}
              {onOpenDonation && (
                <div className="flex justify-end pt-1 border-t border-white/15">
                  <button
                    onClick={onOpenDonation}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#10b981] hover:bg-[#059669] active:scale-95 text-white font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] border border-emerald-200/40 transition-all duration-300 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 stroke-white fill-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <span>{t.aboutVisual.btnDonate}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Three Action Cards with Glowing & Twinkling Animation Effect */}
        <div className="mt-8 sm:mt-10 w-full flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-stretch md:items-center justify-center gap-3.5 sm:gap-5 font-solaiman">
          
          {/* Card 1: 2. ডান দিক থেকে */}
          <ScrollReveal direction="right" delay={80} className="flex justify-center">
            <button
              type="button"
              onClick={onOpenVolunteer}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#064e3b] text-white rounded-full px-7 py-3.5 text-sm sm:text-base font-semibold shadow-[0_0_20px_rgba(6,78,59,0.45)] hover:shadow-[0_0_30px_rgba(6,78,59,0.7)] border-2 border-emerald-300/80 animate-pulse-glow hover:-translate-y-1 transition-all cursor-pointer whitespace-nowrap"
            >
              <UserPlus className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-white" />
              <span className="text-white">{isEn ? 'Join as a Volunteer' : 'স্বেচ্ছাসেবক হিসেবে যোগ দিন'}</span>
            </button>
          </ScrollReveal>

          {/* Card 2: 3. zoom */}
          <ScrollReveal direction="zoom" delay={150} className="flex justify-center">
            <button
              type="button"
              onClick={onOpenNeedyInfo}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white rounded-full px-7 py-3.5 text-sm sm:text-base font-semibold shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] border-2 border-cyan-400/80 animate-pulse-glow hover:-translate-y-1 transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="relative inline-flex items-center justify-center shrink-0">
                <HandHeart className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
              </span>
              <span className="text-white">{isEn ? 'Share Info on Needy People in Your Village' : 'আপনার গ্রামের অসহায় মানুষের তথ্য দিন'}</span>
            </button>
          </ScrollReveal>

          {/* Card 3: 4. উপর থেকে */}
          <ScrollReveal direction="down" delay={250} className="flex justify-center">
            <button
              type="button"
              onClick={onOpenContactModal}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-slate-900 rounded-full px-7 py-3.5 text-sm sm:text-base font-semibold shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] border-2 border-emerald-500/80 animate-pulse-glow hover:-translate-y-1 transition-all cursor-pointer whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-emerald-700" />
              <span className="text-slate-900">{isEn ? 'Contact Us Directly' : 'সরাসরি যোগাযোগ করুন'}</span>
            </button>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
