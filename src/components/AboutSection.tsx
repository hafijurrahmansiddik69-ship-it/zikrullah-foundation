import React from 'react';
import { ArrowRight, Heart, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

interface AboutSectionProps {
  onOpenVolunteer?: () => void;
  onOpenNeedyInfo?: () => void;
  onOpenContactModal?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToFounder?: () => void;
  onOpenEstablishmentModal?: () => void;
  onOpenDonation?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigateToFounder,
  onOpenDonation,
}) => {
  const { t, isEn } = useLanguage();

  return (
    <section
      id="about"
      className="py-12 sm:py-16 bg-white border-b border-emerald-100/70 overflow-x-clip"
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" className="w-full relative">
          <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-700/25 shadow-2xl shadow-emerald-950/15 aspect-4/5 bg-[#042F2E] group">
            <img
              src="https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg"
              alt={
                isEn
                  ? 'Hafizur Rahman Siddik (Bogura) — Zikrullah Foundation'
                  : 'হাফিজুর রহমান সিদ্দিক (বগুড়া) — জিকরুল্লাহ ফাউন্ডেশন'
              }
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.05] group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#042F2E]/85 via-[#064E3B]/25 to-black/20" />

            {/* Top-Right Button: Founder & Chairman Profile */}
            {onNavigateToFounder && (
              <button
                type="button"
                onClick={onNavigateToFounder}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/95 hover:bg-white active:scale-95 text-[#064E3B] font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/25 border border-emerald-400/70 backdrop-blur-md transition-all cursor-pointer font-bornomala group/btn"
              >
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#064E3B] shrink-0" />
                <span>
                  {isEn ? 'Founder & Chairman Profile' : 'প্রতিষ্ঠাতা ও চেয়ারম্যান পরিচিতি'}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#064E3B] shrink-0 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            )}

            {/* Bottom Quranic Ayah Box (Soft Deep Emerald Green + Times Arabic Font matching Chairman's Message) */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 p-3.5 sm:p-5 rounded-2xl bg-[#064E3B]/80 backdrop-blur-md border border-emerald-300/45 shadow-xl text-white z-20">
              <p
                className="font-times font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-[2.05] tracking-normal mb-2 text-center drop-shadow"
                style={{ color: '#FFFFFF' }}
                dir="rtl"
                lang="ar"
              >
                {t.aboutVisual.quranArabic}
              </p>

              <p className="font-bornomala text-[11px] sm:text-xs text-emerald-50 leading-relaxed text-center mb-2.5">
                {t.aboutVisual.quranTranslation}
                <span className="block text-emerald-200 font-bold text-[10px] sm:text-xs mt-1">
                  {t.aboutVisual.surahRef}
                </span>
              </p>

              {onOpenDonation && (
                <div className="flex justify-end pt-1.5 border-t border-white/20">
                  <button
                    type="button"
                    onClick={onOpenDonation}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#042F2E]/90 hover:bg-[#042F2E] text-white font-bold text-xs border border-emerald-300/50 transition-all cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>{t.aboutVisual.btnDonate}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
