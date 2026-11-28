import React from 'react';
import { BookOpen, ArrowRight, Heart, Landmark, GraduationCap, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { FOUNDATION_INFO } from '../data/mockData';

interface AboutSectionProps {
  onOpenVolunteer?: () => void;
  onOpenNeedyInfo?: () => void;
  onOpenContactModal?: () => void;
  onNavigateToAbout?: () => void;
  onOpenEstablishmentModal?: () => void;
  onOpenDonation?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigateToAbout,
  onOpenEstablishmentModal,
  onOpenDonation,
}) => {
  const { t, isEn } = useLanguage();

  return (
    <>
      {/* Section 1: প্রতিষ্ঠার প্রেক্ষাপট (Deep Emerald Green Harmonized Section) */}
      <section
        id="establishment-context"
        className="relative py-14 sm:py-18 bg-gradient-to-br from-[#042F2E] via-[#064E3B] to-[#042F2E] text-white border-b border-[#D4AF37]/30 overflow-x-clip"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="rounded-3xl bg-white/[0.06] backdrop-blur-sm border border-[#D4AF37]/35 shadow-2xl p-6 sm:p-10 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/15 pb-4">
                <div>
                  <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#D4AF37] block mb-1">
                    {isEn ? 'Background of Establishment' : 'আমাদের শুরুর কথা'}
                  </span>
                  <h2 className="font-bornomala font-bold text-2xl sm:text-3xl text-white">
                    {isEn ? 'Background of Establishment' : 'প্রতিষ্ঠার প্রেক্ষাপট'}
                  </h2>
                </div>
                <span className="font-sans text-xs font-semibold text-[#D4AF37] self-start sm:self-auto">
                  {isEn ? 'Est. January 1, 2023 · Bogura' : 'প্রতিষ্ঠাকাল: ১লা জানুয়ারি ২০২৩ · বগুড়া'}
                </span>
              </div>

              <div className="space-y-4 font-bornomala text-emerald-50/95 text-sm sm:text-base leading-relaxed">
                <p className="text-white font-medium text-base sm:text-lg leading-relaxed">
                  {t.hero.quote}
                </p>
                <p className="text-emerald-100/90">
                  {isEn
                    ? "Treating compassionate service as sincere worship during this critical hour for the Ummah, Zikrullah Foundation was established on January 1, 2023 in Gujia, Mokamtala, Shibganj, Bogura under the initiative of Hafizur Rahman Siddik (Bogura)—a non-political charitable organization dedicated to education, Da'wah, and human welfare."
                    : 'উম্মাহর এই ক্রান্তিলগ্নে সেবাকে ইবাদত মনে করে এবং মানবিক দায়বদ্ধতা থেকে ১লা জানুয়ারি ২০২৩ ঈসায়ীতে গুজিয়া, মোকামতলা, শিবগঞ্জ, বগুড়া থেকে হাফিজুর রহমান সিদ্দিক (বগুড়া)-এর উদ্যোগে প্রতিষ্ঠিত হয় “জিকরুল্লাহ ফাউন্ডেশন”—যা শিক্ষা, দাওয়াহ ও মানবকল্যাণে নিবেদিত একটি অরাজনৈতিক সেবামূলক প্রতিষ্ঠান।'}
                </p>
              </div>

              {onOpenEstablishmentModal && (
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={onOpenEstablishmentModal}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:brightness-105 active:scale-98 text-[#0F172A] font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <BookOpen className="w-4 h-4 shrink-0" />
                    <span>
                      {isEn ? 'Read Complete Inception Story' : 'প্রতিষ্ঠার পূর্ণ প্রেক্ষাপট পড়ুন'}
                    </span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: আমাদের সম্পর্কে জানুন */}
      <section
        id="about"
        className="py-14 sm:py-20 bg-white border-b border-emerald-100/70 overflow-x-clip"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Showcase & Quranic Verse Card (Amiri Arabic font) */}
          <ScrollReveal direction="left" className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl shadow-emerald-950/15 aspect-4/5 bg-[#042F2E] group">
              <img
                src="https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg"
                alt={isEn ? 'Zikrullah Foundation Humanitarian Work' : 'জিকরুল্লাহ ফাউন্ডেশন কার্যক্রম'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.05] group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#042F2E] via-[#064E3B]/40 to-transparent" />

              {/* Bottom Quranic Ayah Box with Amiri Arabic Font */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 p-3.5 sm:p-5 rounded-2xl bg-[#0F172A]/80 backdrop-blur-md border border-[#D4AF37]/50 shadow-xl text-white z-20">
                <p
                  className="font-arabic font-bold text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[2.1] mb-2 text-center drop-shadow"
                  style={{ color: '#FFFFFF' }}
                  dir="rtl"
                  lang="ar"
                >
                  {t.aboutVisual.quranArabic}
                </p>

                <p className="font-bornomala text-[11px] sm:text-xs text-emerald-100 leading-relaxed text-center mb-2.5">
                  {t.aboutVisual.quranTranslation}
                  <span className="block text-[#D4AF37] font-bold text-[10px] sm:text-xs mt-1">
                    {t.aboutVisual.surahRef}
                  </span>
                </p>

                {onOpenDonation && (
                  <div className="flex justify-end pt-1.5 border-t border-white/15">
                    <button
                      type="button"
                      onClick={onOpenDonation}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#064E3B] hover:bg-[#042F2E] text-white font-bold text-xs border border-[#D4AF37]/60 transition-all cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white" />
                      <span>{t.aboutVisual.btnDonate}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Editorial Overview: আমাদের সম্পর্কে জানুন */}
          <ScrollReveal direction="right" className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#064E3B] block mb-1">
                {isEn ? 'Learn About Us' : 'সংগঠন ও শাখা পরিচিতি'}
              </span>
              <h2 className="font-bornomala font-bold text-2xl sm:text-4xl text-[#0F172A] leading-snug">
                {isEn ? 'Learn About Us' : 'আমাদের সম্পর্কে জানুন'}
              </h2>
            </div>

            <p className="font-bornomala text-sm sm:text-base text-slate-700 leading-relaxed">
              {isEn
                ? 'Zikrullah Foundation is a non-political charitable organization operating in Gujia, Mokamtala, Shibganj, Bogura, committed to food relief, healthcare, clean water, and sustainable livelihoods. Alongside welfare initiatives, Darul Haramain Academy operates as our distinct educational wing for balanced academic and Islamic instruction.'
                : 'জিকরুল্লাহ ফাউন্ডেশন গুজিয়া, মোকামতলা, শিবগঞ্জ, বগুড়া অঞ্চলে পরিচালিত একটি অরাজনৈতিক কল্যাণমূলক ও শিক্ষা-সেবা প্রতিষ্ঠান। আমরা খাদ্য ও ত্রাণ সহায়তা, বিনামূল্যে চিকিৎসা ক্যাম্প, সুপেয় পানির নলকূপ এবং স্বাবলম্বীকরণ প্রকল্প পরিচালনা করি—যেখানে যেকোনো শুভাকাঙ্ক্ষী স্বতঃস্ফূর্তভাবে খেদমতে অংশগ্রহণ করতে পারেন।'}
            </p>

            {/* Institutional Structure Cards: Parent Organization & Distinct Educational Wing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#F9FAF9] border border-emerald-200/80 p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-[#064E3B] text-xs font-bold">
                  <Landmark className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{isEn ? 'Parent Organization' : 'মূল কল্যাণমূলক সংস্থা'}</span>
                </div>
                <div className="font-bornomala font-bold text-base text-[#0F172A]">
                  {isEn ? 'Zikrullah Foundation' : 'জিকরুল্লাহ ফাউন্ডেশন'}
                </div>
                <p className="text-xs text-slate-600">
                  {isEn ? FOUNDATION_INFO.addressEn : FOUNDATION_INFO.address}
                </p>
                <a
                  href="tel:+8801620500920"
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#064E3B] hover:underline pt-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>01620500920</span>
                </a>
              </div>

              <div className="rounded-2xl bg-[#F9FAF9] border border-slate-200 p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-[#0F172A] text-xs font-bold">
                  <GraduationCap className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{isEn ? 'Distinct Educational Wing' : 'স্বতন্ত্র শিক্ষাপ্রতিষ্ঠান'}</span>
                </div>
                <div className="font-bornomala font-bold text-base text-[#0F172A]">
                  {isEn ? 'Darul Haramain Academy' : 'দারুল হারামাইন একাডেমী'}
                </div>
                <p className="text-xs text-slate-600">
                  {isEn
                    ? 'Integrated general, Arabic & English studies'
                    : 'সাধারণ শিক্ষা, আরবি ও ইংরেজি ভাষার সমন্বিত পাঠদান'}
                </p>
                <a
                  href="tel:+8801804500509"
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#0F172A] hover:underline pt-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>01804500509</span>
                </a>
              </div>
            </div>

            {onNavigateToAbout && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onNavigateToAbout}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#064E3B] text-white font-bold text-xs sm:text-sm border border-[#D4AF37]/50 transition-all cursor-pointer"
                >
                  <span>
                    {isEn
                      ? 'Explore Full Vision, Mission & Executive Team'
                      : 'বিস্তারিত লক্ষ্য, উদ্দেশ্য ও কার্যনির্বাহী টিম দেখুন'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};
