import React from 'react';
import { Users, ArrowUpRight, Compass, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutSectionProps {
  onOpenVolunteer: () => void;
  onNavigateToAbout?: () => void;
  onOpenDonation?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onOpenVolunteer,
  onNavigateToAbout,
  onOpenDonation
}) => {
  const { t, isEn } = useLanguage();

  return (
    <section id="about" className="py-20 bg-[#fafcfb] border-b border-emerald-100/60">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (5 columns on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-800/20 shadow-2xl shadow-emerald-950/20 aspect-4/5 bg-[#012213] group">
              {/* Rich forest green backdrop and photo with warm lighting */}
              <img
                src="https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg"
                alt="জিকরুল্লাহ ফাউন্ডেশন কার্যক্রম"
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

                {/* Arabic Portion (Chairman speech Hadith font: font-times font-bold, slightly smaller & well balanced) */}
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
          </div>

          {/* Editorial Content (7 columns on desktop) */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 tracking-wider uppercase mb-2.5 sm:mb-3">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>{t.aboutVisual.visionBadge}</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mt-6">
              <button
                onClick={onNavigateToAbout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#087443] hover:bg-[#045332] active:scale-95 text-white font-bold text-sm shadow-md shadow-emerald-800/20 transition-all cursor-pointer min-h-[44px]"
              >
                <span>{t.aboutVisual.btnLearnMission}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVolunteer}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 font-semibold text-sm transition-all cursor-pointer min-h-[44px]"
              >
                <Users className="w-4 h-4" />
                <span>{t.aboutVisual.btnVolunteer}</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-slate-600 hover:text-emerald-800 font-semibold text-sm transition-colors cursor-pointer text-center"
              >
                <span>{t.common.contactUs}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
