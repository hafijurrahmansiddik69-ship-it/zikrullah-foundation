import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Mic,
  Compass,
  PenTool,
} from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { WazVideoSection } from '../components/WazVideoSection';

interface FounderProfilePageProps {
  onBackToHome: () => void;
  onOpenInvitationModal: () => void;
  onNavigateToAbout?: () => void;
}

const CHAIRMAN_PORTRAIT =
  'https://res.cloudinary.com/dlklqihg6/image/upload/v1795547568/ipvnrmiwbzwq5oktrwi7.jpg';

export const FounderProfilePage: React.FC<FounderProfilePageProps> = ({
  onBackToHome,
  onOpenInvitationModal,
}) => {
  const { isEn } = useLanguage();

  useEffect(() => {
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    const ogDescEl = document.querySelector('meta[property="og:description"]');

    const prevDesc = descEl?.getAttribute('content') || '';
    const prevOgTitle = ogTitleEl?.getAttribute('content') || '';
    const prevOgDesc = ogDescEl?.getAttribute('content') || '';

    const pageTitle = isEn
      ? 'Chairman Profile — Hafizur Rahman Siddik (Bogura) | Zikrullah Foundation'
      : 'চেয়ারম্যান পরিচিতি — হাফিজুর রহমান সিদ্দিক (বগুড়া) | জিকরুল্লাহ ফাউন্ডেশন';
    const pageDescription = isEn
      ? "Chairman Profile of Hafizur Rahman Siddik (Bogura), Talib-e-Ilm & Da'ee Ilallah — Founder & Chairman of Zikrullah Foundation, Gujia, Mokamtala, Shibganj, Bogura."
      : 'বগুড়া জেলার শিবগঞ্জ উপজেলা নিবাসী তলিবে ইলম ও দায়ী ইল্লাল্লাহ হাফিজুর রহমান সিদ্দিক (বগুড়া) — প্রতিষ্ঠাতা ও চেয়ারম্যান, জিকরুল্লাহ ফাউন্ডেশন, গুজিয়া, মোকামতলা, শিবগঞ্জ, বগুড়া।';

    document.title = pageTitle;
    if (descEl) descEl.setAttribute('content', pageDescription);
    if (ogTitleEl) ogTitleEl.setAttribute('content', pageTitle);
    if (ogDescEl) ogDescEl.setAttribute('content', pageDescription);

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': 'https://www.zikrullahfoundation.com/#hafizur-rahman-siddik-bogura',
          name: 'Hafizur Rahman Siddik (Bogura)',
          alternateName: [
            'হাফিজুর রহমান সিদ্দিক (বগুড়া)',
            'হাফিজুর রহমান সিদ্দিক বগুড়া',
            'Hafizur Rahman Siddik Bogura',
          ],
          jobTitle:
            "Founder & Chairman of Zikrullah Foundation; Talib-e-Ilm & Da'ee Ilallah",
          description:
            "Hafizur Rahman Siddik (Bogura) is a Talib-e-Ilm, Da'ee Ilallah, Jumu'ah Khateeb, and Mahfil speaker born in Shibganj upazila, Bogura, based in Gujia, Mokamtala, Shibganj, Bogura, Bangladesh.",
          image: CHAIRMAN_PORTRAIT,
          url: 'https://www.zikrullahfoundation.com/#founder-profile',
          homeLocation: {
            '@type': 'Place',
            name: 'Gujia, Mokamtala, Shibganj, Bogura',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'গুজিয়া, মোকামতলা',
              addressLocality: 'শিবগঞ্জ, বগুড়া',
              addressRegion: 'Rajshahi Division',
              addressCountry: 'BD',
            },
          },
          worksFor: {
            '@id': 'https://www.zikrullahfoundation.com/#organization',
          },
          founderOf: [
            { '@id': 'https://www.zikrullahfoundation.com/#organization' },
          ],
        },
        {
          '@type': 'NonprofitOrganization',
          '@id': 'https://www.zikrullahfoundation.com/#organization',
          name: 'জিকরুল্লাহ ফাউন্ডেশন (Zikrullah Foundation)',
          foundingDate: '2023-01-01',
          founder: {
            '@id': 'https://www.zikrullahfoundation.com/#hafizur-rahman-siddik-bogura',
          },
          url: 'https://www.zikrullahfoundation.com',
          email: FOUNDATION_INFO.email,
          telephone: '+8801620500920',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'গুজিয়া, মোকামতলা',
            addressLocality: 'শিবগঞ্জ, বগুড়া',
            addressCountry: 'BD',
          },
        },
      ],
    };

    const existingScript = document.getElementById('founder-profile-jsonld');
    if (existingScript) existingScript.remove();

    const scriptEl = document.createElement('script');
    scriptEl.id = 'founder-profile-jsonld';
    scriptEl.type = 'application/ld+json';
    scriptEl.text = JSON.stringify(schemaData);
    document.head.appendChild(scriptEl);

    return () => {
      document.title = prevTitle;
      if (descEl) descEl.setAttribute('content', prevDesc);
      if (ogTitleEl) ogTitleEl.setAttribute('content', prevOgTitle);
      if (ogDescEl) ogDescEl.setAttribute('content', prevOgDesc);
      const cleanupScript = document.getElementById('founder-profile-jsonld');
      if (cleanupScript) cleanupScript.remove();
    };
  }, [isEn]);

  const pillars = [
    {
      icon: Compass,
      titleBn: 'দায়ী ইল্লাল্লাহ ও সমাজ সংস্কার',
      titleEn: "Da'ee Ilallah & Social Reform",
      descBn:
        'কুরআন ও সহীহ সুন্নাহর আলোকে সমাজে মানবিক মূল্যবোধ জাগ্রত করা, কুসংস্কার দূর করা এবং পারস্পরিক ভ্রাতৃত্ব প্রতিষ্ঠায় নিরলস দাওয়াতি তৎপরতা।',
      descEn:
        "Continuous da'wah rooted in the Qur'an and authentic Sunnah to nurture social harmony, integrity, and community welfare.",
    },
    {
      icon: Mic,
      titleBn: 'জুমার খতিব ও মাহফিল আলোচক',
      titleEn: "Jumu'ah Khateeb & Mahfil Speaker",
      descBn:
        'সমকালীন প্রেক্ষাপটে সহজবোধ্য, দলীলভিত্তিক ও হৃদয়স্পর্শী জুমার খুতবা এবং তাফসির-মাহফিলের মাধ্যমে সর্বস্তরের মানুষের মাঝে বিশুদ্ধ দ্বীনি চেতনা পৌঁছে দেওয়া।',
      descEn:
        "Clear, evidence-based Jumu'ah Khutbahs and Keynote Mahfil addresses connecting timeless Islamic principles to contemporary life.",
    },
    {
      icon: PenTool,
      titleBn: 'তরুণ প্রজন্ম, গবেষণা ও লেখালেখি',
      titleEn: 'Youth Guidance, Research & Writing',
      descBn:
        'তরুণ সমাজের নৈতিক অবক্ষয় রোধ, আধুনিক চ্যালেঞ্জের ইসলামী সমাধান অন্বেষণ এবং প্রামাণিক গবেষণা ও চিন্তামূলক রচনার মাধ্যমে আদর্শ প্রজন্ম গড়ে তোলা।',
      descEn:
        'Focused youth moral mentorship, analytical research, and thoughtful writing guiding young minds toward constructive purpose.',
    },
  ];

  return (
    <div className="bg-white text-[#0F172A]">
      {/* 1. Pure White Chairman Profile Header */}
      <section className="bg-white border-b border-emerald-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-12 sm:pb-16">
          {/* Top Breadcrumb Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-emerald-100">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#064E3B] hover:text-[#042F2E] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isEn ? 'Back to Home' : 'মূল পাতায় ফিরে যান'}</span>
            </button>

            <div className="text-xs sm:text-sm font-bold text-[#064E3B] tracking-wide font-bornomala">
              {isEn ? 'Founder & Chairman' : 'প্রতিষ্ঠাতা ও চেয়ারম্যান'}
            </div>
          </div>

          {/* Centered Pure White Card: Circular Portrait + Name + Subtitle + Light Bio Box + Deep Emerald Mic CTA */}
          <div className="rounded-3xl bg-white border border-emerald-200/80 shadow-sm p-6 sm:p-10 lg:p-12 flex flex-col items-center text-center space-y-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white ring-1 ring-slate-200/80 shadow-[0_8px_28px_rgba(15,23,42,0.14)] bg-white">
                <img
                  src={CHAIRMAN_PORTRAIT}
                  alt={
                    isEn
                      ? 'Hafizur Rahman Siddik (Bogura)'
                      : 'হাফিজুর রহমান সিদ্দিক (বগুড়া)'
                  }
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h1 className="font-bornomala font-bold text-3xl sm:text-4xl text-[#0F172A] leading-tight tracking-tight mt-6">
                {isEn ? 'Hafizur Rahman Siddik (Bogura)' : 'হাফিজুর রহমান সিদ্দিক (বগুড়া)'}
              </h1>
              <p className="font-bornomala text-base sm:text-lg font-semibold text-[#064E3B] mt-1.5 tracking-wide">
                {isEn ? "Talib-e-Ilm • Da'ee Ilallah" : 'তলিবে ইলম • দায়ী ইল্লাল্লাহ'}
              </p>
            </div>

            {/* Clean Light Box Directly Below Name & Subtitle with Exact Bio Text */}
            <div className="w-full max-w-3xl rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-7 text-left shadow-2xs">
              <p className="font-bornomala text-sm sm:text-base text-[#0F172A] leading-[1.85]">
                {isEn
                  ? 'Born in Shibganj, Bogura, Hafizur Rahman Siddik (Bogura) has been dedicated to serving helpless and poor people since childhood. Currently, he is studying as a Talib-e-Ilm; alongside his studies, he serves as the Founder & Chairman of Zikrullah Foundation and strives to convey messages of welfare through regular Jumu’ah Khutbahs and Mahfil speeches.'
                  : 'বগুড়ার শিবগঞ্জে জন্ম নেওয়া হাফিজুর রহমান সিদ্দিক (বগুড়া) শৈশব থেকেই অসহায় ও দরিদ্র মানুষের সেবায় নিবেদিত। বর্তমানে তিনি একজন তলিবে ইলম হিসেবে অধ্যয়নরত আছেন; পাশাপাশি জিকরুল্লাহ ফাউন্ডেশন-এর প্রতিষ্ঠাতা ও চেয়ারম্যান হিসেবে দায়িত্ব পালন করছেন এবং নিয়মিত জুমার খুতবা ও মাহফিলে বয়ানের মাধ্যমে সমাজে কল্যাণের বাণী পৌঁছে দেওয়ার সর্বোচ্চ চেষ্টা করছেন।'}
              </p>
              <p className="font-bornomala text-sm sm:text-base font-semibold text-[#064E3B] mt-2.5">
                {isEn
                  ? "Humble request for everyone’s prayers (du'a) for him 🤲"
                  : 'তাঁর জন্য সকলের কাছে দোয়ার আবেদন 🤲'}
              </p>
            </div>

            {/* Deep Emerald Green CTA Button with White Twinkling Microphone Icon */}
            <div className="pt-1 flex justify-center">
              <button
                type="button"
                onClick={onOpenInvitationModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#047857] via-[#059669] to-[#10b981] hover:brightness-110 active:scale-98 text-white font-bold text-sm sm:text-base border border-white/40 shadow-[0_8px_28px_rgba(5,150,105,0.45)] animate-soft-breath-glow transition-all cursor-pointer whitespace-nowrap shrink-0 group"
              >
                <span className="relative inline-flex items-center justify-center w-6 h-6 shrink-0" aria-hidden="true">
                  <span className="absolute inset-0 rounded-full bg-white/35 animate-ping" />
                  <span className="absolute -inset-1 rounded-full bg-white/15 blur-xs animate-pulse" />
                  <Mic className="w-4 h-4 text-white animate-mic-twinkle relative z-10" />
                </span>
                <span>{isEn ? 'Apply for Invitation' : 'দাওয়াতের জন্য আবেদন'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Categorized Waz, Jumu'ah & Seminar Video Section */}
      <WazVideoSection />

      {/* 3. Guidance Pillars */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 space-y-8 bg-white">
        <ScrollReveal direction="up" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#064E3B] mb-1.5">
              {isEn ? 'Chairman Focus & Vision' : 'দাওয়াহ, গবেষণা ও মানবসেবা'}
            </div>
            <h2 className="font-bornomala font-bold text-2xl sm:text-3xl text-[#0F172A] leading-snug">
              {isEn
                ? 'A Dedicated Voice for Authentic Knowledge, Youth Guidance & Social Reform'
                : 'বিশুদ্ধ ইলম, মানবকল্যাণ ও সমাজ সংস্কারের এক নিবেদিত পথচলা'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.titleEn}
                  className="p-5 rounded-2xl bg-white border border-emerald-200/70 shadow-xs space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center border border-emerald-200/70">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bornomala font-bold text-base text-[#0F172A]">
                    {isEn ? pillar.titleEn : pillar.titleBn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isEn ? pillar.descEn : pillar.descBn}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* 4. Invitation CTA Footer Strip */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="rounded-3xl bg-white border border-emerald-200 border-l-4 border-l-[#064E3B] shadow-md p-7 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs uppercase tracking-[0.14em] text-[#064E3B] font-bold">
                {isEn
                  ? "Mahfil & Jumu'ah Invitation"
                  : 'মাহফিল, জুমার খুতবা ও বিশেষ সেমিনারের দাওয়াত'}
              </div>
              <h3 className="font-bornomala font-bold text-2xl sm:text-3xl text-[#0F172A] leading-snug">
                {isEn
                  ? 'Invite Hafizur Rahman Siddik (Bogura) to Your Mosque or Program'
                  : 'আপনার মসজিদ, মাহফিল বা ইসলামী সেমিনারে দাওয়াত দিতে আবেদন করুন'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isEn
                  ? 'Submit your invitation request with venue, travel, and Hadiya details. Selected schedules are confirmed by the Bogura office.'
                  : 'ভেন্যু, যাতায়াত ও হাদিয়ার তথ্যসহ নির্ধারিত ফরমে আবেদন জমা দিন। সময়সূচি সাপেক্ষে কার্যালয় থেকে যোগাযোগ করা হবে।'}
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenInvitationModal}
              className="w-full lg:w-auto shrink-0 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#047857] via-[#059669] to-[#10b981] hover:brightness-110 active:scale-98 text-white font-bold text-sm sm:text-base border border-white/40 shadow-[0_8px_28px_rgba(5,150,105,0.45)] animate-soft-breath-glow transition-all cursor-pointer whitespace-nowrap group"
            >
              <span className="relative inline-flex items-center justify-center w-6 h-6 shrink-0" aria-hidden="true">
                <span className="absolute inset-0 rounded-full bg-white/35 animate-ping" />
                <span className="absolute -inset-1 rounded-full bg-white/15 blur-xs animate-pulse" />
                <Mic className="w-5 h-5 text-white animate-mic-twinkle relative z-10" />
              </span>
              <span>{isEn ? 'Apply for Invitation' : 'দাওয়াতের জন্য আবেদন'}</span>
            </button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
