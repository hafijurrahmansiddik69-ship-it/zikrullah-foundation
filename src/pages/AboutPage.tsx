import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Target, 
  Sparkles, 
  Users, 
  Calendar, 
  Award, 
  MapPin, 
  Mail, 
  Phone,
  BookOpen,
  ArrowRight,
  Heart,
  HeartHandshake,
  Compass,
  HandHeart,
  Stethoscope,
  HeartPulse,
  Sprout,
  Trees,
  Scale,
  Sun,
  Landmark,
  ChevronDown
} from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { ProjectsSection } from '../components/ProjectsSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { LeadershipCommitteeGrid } from '../components/LeadershipSection';
import { QuickEngagementBar } from '../components/QuickEngagementBar';

interface AboutPageProps {
  onBackToHome: () => void;
  onOpenVolunteer: () => void;
  onOpenNeedyInfo?: () => void;
  onOpenContactModal?: () => void;
  onOpenDonation: (category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ 
  onBackToHome, 
  onOpenVolunteer,
  onOpenNeedyInfo,
  onOpenContactModal,
  onOpenDonation
}) => {
  const { t, isEn } = useLanguage();
  const [heroImgError, setHeroImgError] = useState(false);
  const [openMissionIndex, setOpenMissionIndex] = useState<number | null>(null);
  const [openVisionIndex, setOpenVisionIndex] = useState<number | null>(null);
  const [isFounderMessageOpen, setIsFounderMessageOpen] = useState(false);

  const missionPoints = [
    {
      num: isEn ? '1' : '১',
      icon: HandHeart,
      title: isEn ? 'Food & Clothing Aid in Light of the Sunnah' : 'সুন্নাহর অনুসরণে খাদ্য ও বস্ত্র হাদিয়া',
      description: isEn
        ? 'Delivering nourishing food to destitute, orphaned, poor, and widowed families, and gifting new clothes and winter garments to those in need.'
        : 'অসহায়, এতিম, মিসকিন ও বিধবা পরিবারের দ্বারে ভালোবাসার খাবার পৌঁছে দেওয়া এবং শীতার্ত ও বস্ত্রহীন মানুষের মাঝে নতুন পোশাক ও শীতবস্ত্র হাদিয়া প্রদান।',
    },
    {
      num: isEn ? '2' : '২',
      icon: Stethoscope,
      title: isEn ? 'Free Emergency Medical & Healthcare Services' : 'বিনামূল্যে জরুরি চিকিৎসা ও স্বাস্থ্যসেবা',
      description: isEn
        ? 'Providing specialist doctor consultations, essential medicines, and urgent medical care to underprivileged people in remote and neglected areas.'
        : 'দুর্গম ও অবহেলিত অঞ্চলের অসচ্ছল মানুষের কাছে বিশেষজ্ঞ চিকিৎসকের পরামর্শ, প্রয়োজনীয় ওষুধ ও জরুরি সেবা সহজে পৌঁছে দেওয়া।',
    },
    {
      num: isEn ? '3' : '৩',
      icon: HeartPulse,
      title: isEn ? 'Emergency Blood Donation' : 'জরুরি রক্তদান',
      description: isEn
        ? 'Ensuring completely free, timely blood arrangement through voluntary donors for the urgent medical treatment of critical patients.'
        : 'মুমূর্ষু রোগীদের জরুরি চিকিৎসার প্রয়োজনে স্বেচ্ছাসেবী রক্তদাতাদের মাধ্যমে সম্পূর্ণ বিনামূল্যে রক্তের সংস্থান নিশ্চিত করা।',
    },
    {
      num: isEn ? '4' : '৪',
      icon: BookOpen,
      title: isEn ? 'Islamic & Moral Education' : 'দ্বীনি ও আদর্শ শিক্ষা বিস্তার',
      description: isEn
        ? "Establishing sustainable facilities for pure Qur'an recitation, knowledge of Qur'an and Hadith, modern education, study materials, and madrasa uniforms for orphaned and underprivileged meritorious students."
        : 'এতিম ও অসচ্ছল মেধাবী শিক্ষার্থীদের জন্য বিশুদ্ধ কুরআন তিলাওয়াত, কুরআন-হাদীসের ইলম ও যুগোপযোগী শিক্ষার পাশাপাশি নিয়মিত শিক্ষা উপকরণ ও মাদ্রাসার পোশাক প্রদানের স্থায়ী ব্যবস্থা গড়ে তোলা।',
    },
    {
      num: isEn ? '5' : '৫',
      icon: Sprout,
      title: isEn ? 'Sustainable Self-Reliance Project' : 'স্থায়ী আত্মনির্ভরশীলতা প্রকল্প',
      description: isEn
        ? 'Alleviating poverty among distressed families by providing livestock, small business capital, and essential technical tools to help them become permanently self-reliant.'
        : 'অসহায় ও অসচ্ছল পরিবারগুলোর দারিদ্র্য বিমোচনে গবাদিপশু বিতরণ, ক্ষুদ্র ব্যবসা ফান্ড ও প্রয়োজনীয় কারিগরি উপকরণ প্রদানের মাধ্যমে স্থায়ীভাবে স্বাবলম্বী করে তোলা।',
    },
    {
      num: isEn ? '6' : '৬',
      icon: Trees,
      title: isEn ? 'Sadaqah Jariyah & Environmental Care' : 'সদকা-ই-জারিয়াহ ও পরিবেশ সুরক্ষা',
      description: isEn
        ? 'Installing deep tube wells to solve clean drinking water crises and conducting widespread tree plantation programs for a greener environment.'
        : 'বিশুদ্ধ সুপেয় পানির সংকট নিরসনে গভীর নলকূপ স্থাপন এবং সবুজ পরিবেশ বিনির্মাণে ব্যাপক বৃক্ষরোপণ কর্মসূচি বাস্তবায়ন করা।',
    },
    {
      num: isEn ? '7' : '৭',
      icon: Scale,
      title: isEn ? "Shari'ah-Compliant Zakat Distribution" : "শরী'আহ ভিত্তিক যাকাত বণ্টন",
      description: isEn
        ? "Distributing Zakat funds with 100% trustworthiness to rightful recipients through proper verification in accordance with Islamic Shari'ah."
        : "ইসলামী শরী'আহ অনুযায়ী সুষ্ঠু যাচাই-বাছাইয়ের মাধ্যমে প্রকৃত হকদারদের মাঝে শতভাগ আমানতদারিতার সাথে যাকাতের অর্থ বণ্টন করা।",
    },
  ];

  const visionPoints = [
    {
      num: isEn ? '1' : '১',
      icon: Sun,
      title: isEn ? 'Spiritual Awakening of the Youth' : 'তরুণ প্রজন্মের ঈমানী জাগরণ',
      badge: null,
      accentBorder: 'border-l-amber-500',
      description: isEn
        ? "Protecting the youth from digital fitnah and moral decay through wise Da'wah, intellectual discussions, and compassionate guidance to nurture them in the light of the Qur'an and Sunnah."
        : 'প্রজ্ঞাপূর্ণ দাওয়াহ, বুদ্ধিবৃত্তিক আলোচনা ও দরদি দিকনির্দেশনার মাধ্যমে যুবসমাজকে ডিজিটাল ফিতনা ও নৈতিক অবক্ষয় থেকে রক্ষা করে কুরআন-সুন্নাহর দীপ্ত আদর্শে গড়ে তোলা।',
    },
    {
      num: isEn ? '2' : '২',
      icon: Landmark,
      title: isEn ? 'Provision for the Hereafter (Sadaqah Jariyah)' : 'আখেরাতের সঞ্চয়',
      badge: 'صدقة جارية',
      accentBorder: 'border-l-[#087443]',
      description: isEn ? (
        <>
          Participating in <strong className="text-emerald-800 font-semibold">&apos;Sadaqah Jariyah&apos;</strong> with sincerity, free from show-off—bringing inner peace in this world and continuous rewards in the grave, so that Jannah becomes our ultimate destination by the pleasure of Allah, Insha&apos;Allah.
        </>
      ) : (
        <>
          লোক দেখানো মোহ ছেড়ে ইখলাসের সাথে <strong className="text-emerald-800 font-semibold">&apos;সাদাকায়ে জারিয়াহ&apos;</strong>র অংশীদার হওয়া—যা দুনিয়ায় দেবে আত্মিক প্রশান্তি, আর মৃত্যুর পর অন্ধকার কবরে উপহার দেবে অবিরাম সাওয়াব; যেন মহান রবের সন্তুষ্টিতে চূড়ান্ত ঠিকানা হয় জান্নাত। ইনশাআল্লাহ।
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#fcfdfc] min-h-screen py-10 sm:py-14 text-slate-800 overflow-x-clip">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Top Navigation & Breadcrumb */}
        <div className="hero-reveal-up flex items-center justify-between gap-4 mb-8 pb-4 border-b border-emerald-100">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-sm transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-700" />
            <span>{t.common.backToHome}</span>
          </button>

          <div className="text-xs sm:text-sm text-slate-500 font-medium">
            <span className="text-emerald-700 cursor-pointer hover:underline" onClick={onBackToHome}>
              {t.nav.home}
            </span>
            <span className="mx-2">/</span>
            <span className="text-slate-800 font-bold">{t.nav.about}</span>
          </div>
        </div>

        {/* Hero Banner Header of About Page */}
        <div className="hero-reveal-up hero-delay-100 relative overflow-hidden bg-gradient-to-br from-[#022918] via-[#044729] to-[#03361f] text-white rounded-2xl sm:rounded-3xl px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9 mb-6 sm:mb-9 border border-emerald-400/40 shadow-[0_18px_44px_-14px_rgba(2,41,24,0.75)]">
          {/* Background Photo */}
          {!heroImgError && (
            <img
              src="https://res.cloudinary.com/dlklqihg6/image/upload/v1795019097/anhrbuenahvwv92cldza.png"
              alt={isEn ? 'Zikrullah Foundation' : 'জিকরুল্লাহ ফাউন্ডেশন'}
              referrerPolicy="no-referrer"
              onError={() => setHeroImgError(true)}
              className="absolute inset-0 w-full h-full object-cover object-center scale-[1.03] select-none pointer-events-none"
            />
          )}

          {/* Deep Emerald Semi-Transparent Overlay */}
          <div
            className="absolute inset-0 bg-[linear-gradient(155deg,rgba(2,41,24,0.62)_0%,rgba(4,71,41,0.68)_50%,rgba(3,54,31,0.76)_100%)]"
            aria-hidden="true"
          />

          {/* Subtle Deep Emerald Ambient Highlight */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.14),transparent_65%)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Subtle Inner Emerald Hairline Frame */}
          <div
            className="pointer-events-none absolute inset-1.5 sm:inset-2 rounded-[14px] sm:rounded-[20px] border border-emerald-300/20"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]">
            {/* Arabic Bismillah Glass Pill */}
            <div className="inline-flex items-center justify-center mb-3 px-4 py-1 sm:py-1.5 rounded-full bg-[#032618]/65 backdrop-blur-md border border-emerald-300/55 text-emerald-200 text-xs sm:text-sm font-serif-bn font-medium shadow-md [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]">
              <span>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
            </div>

            <h1 className="font-serif-bn font-bold text-2xl sm:text-4xl lg:text-[42px] text-white tracking-tight leading-[1.2] mb-2 text-center text-balance [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]">
              {isEn ? FOUNDATION_INFO.englishName : FOUNDATION_INFO.name}
              <span className="block text-amber-400 font-solaiman text-base sm:text-xl lg:text-2xl mt-1.5 sm:mt-2 font-semibold tracking-wide text-center [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]">
                {t.common.slogan}
              </span>
            </h1>

            <p className="text-white/95 text-xs sm:text-base font-solaiman font-normal leading-relaxed mb-4 sm:mb-5 max-w-2xl text-center [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]">
              {isEn
                ? "A non-political humanitarian and welfare organization dedicated to education, Da'wah, and serving humanity."
                : 'শিক্ষা, দাওয়াহ ও মানবকল্যাণে নিবেদিত একটি অরাজনৈতিক সেবামূলক প্রতিষ্ঠান।'}
            </p>

            {/* Compact Horizontal Metadata Glass Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-solaiman text-xs sm:text-sm font-medium text-white antialiased [text-shadow:0_1px_4px_rgba(0,0,0,0.75)]">
              <span className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#032618]/75 backdrop-blur-md border border-emerald-300/45 shadow-xs text-white">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
                {isEn ? (
                  <span className="text-white"><strong className="font-bold text-white">Founder &amp; Initiative:</strong> Hafizur Rahman Siddik (Bogura)</span>
                ) : (
                  <span className="text-white"><strong className="font-bold text-white">উদ্যোগ ও প্রতিষ্ঠাতা:</strong> হাফিজুর রহমান সিদ্দিক (বগুড়া)</span>
                )}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#032618]/75 backdrop-blur-md border border-emerald-300/45 shadow-xs text-white">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
                {isEn ? (
                  <span className="text-white"><strong className="font-bold text-white">Established:</strong> January 1, 2023</span>
                ) : (
                  <span className="text-white"><strong className="font-bold text-white">প্রতিষ্ঠাকাল:</strong> ১লা জানুয়ারি ২০২৩</span>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Core Heartfelt Statement (আমাদের প্রেরণা) */}
        <ScrollReveal direction="zoom">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#fcfdfb] via-[#f5faf7] to-emerald-50/75 border border-emerald-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 mb-9 shadow-[0_12px_32px_-12px_rgba(4,83,50,0.10)]">
          {/* Subtle Islamic Geometric SVG Watermark Pattern */}
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.04] text-[#083E28]"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern id="islamic-inspiration-geo" width="48" height="48" patternUnits="userSpaceOnUse">
                <path
                  d="M24 2 L29.5 14.5 L42 12 L34 22.5 L46 24 L34 25.5 L42 36 L29.5 33.5 L24 46 L18.5 33.5 L6 36 L14 25.5 L2 24 L14 22.5 L6 12 L18.5 14.5 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle cx="24" cy="24" r="3.5" fill="none" stroke="currentColor" strokeWidth="0.9" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-inspiration-geo)" />
          </svg>

          <div className="relative z-10">
            <div className="text-center mb-4 sm:mb-5">
              <h3 className="font-fiona text-2xl sm:text-3xl text-[#045332] font-bold tracking-normal inline-block">
                {isEn ? 'Our Inspiration' : 'আমাদের প্রেরণা'}
              </h3>
              <div className="mt-1.5 mx-auto w-20 h-0.5 rounded-full bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />
            </div>

            {/* Highlighted Glass Quotation Box with Green-to-Gold Left Border */}
            <div className="relative overflow-hidden bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 pl-5 sm:pl-6 border border-emerald-200/75 shadow-xs">
              <span
                className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#087443] via-emerald-500 to-amber-400"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none select-none absolute top-2 right-3.5 sm:top-2.5 sm:right-5 text-3xl sm:text-4xl leading-none font-serif text-emerald-800/15"
                aria-hidden="true"
              >
                ❝
              </span>
              <p className="relative z-10 font-solaiman text-slate-800 text-base sm:text-lg lg:text-xl leading-relaxed font-normal pr-6 sm:pr-8">
                {t.hero.quote}
              </p>
            </div>

            {/* Refined Islamic Ornamental Divider */}
            <div className="flex items-center justify-center gap-3 my-4 sm:my-5" aria-hidden="true">
              <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-emerald-400/50" />
              <svg className="w-4 h-4 text-amber-600/80 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1l2.8 6.2L21 10l-6.2 2.8L12 19l-2.8-6.2L3 10l6.2-2.8L12 1z" />
              </svg>
              <span className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-emerald-400/50" />
            </div>

            <p className="font-solaiman text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
              {isEn
                ? "Treating compassionate service as sincere worship during this critical hour for the Ummah, and guided by a deep sense of humanitarian duty, 'Zikrullah Foundation' was established on January 1, 2023 CE through the initiative of “Hafizur Rahman Siddik (Bogura)”—a non-political charitable institution dedicated to education, Da'wah, and the welfare of humanity."
                : 'উম্মাহর এই ক্রান্তিলগ্নে সেবাকে ইবাদত মনে করে এবং মানবিক দায়বদ্ধতা থেকে ১লা জানুয়ারি ২০২৩ ঈসায়ীতে “হাফিজুর রহমান সিদ্দিক (বগুড়া)”-এর উদ্যোগে প্রতিষ্ঠিত হয় ‘জিকরুল্লাহ ফাউন্ডেশন’—যা শিক্ষা, দাওয়াহ ও মানবকল্যাণে নিবেদিত একটি অরাজনৈতিক সেবামূলক প্রতিষ্ঠান।'}
            </p>
          </div>
          </div>
        </ScrollReveal>

        {/* Section 1: আমাদের লক্ষ্য (Mission) - Drops gracefully from top */}
        <ScrollReveal direction="down">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-emerald-100 shadow-md mb-7 sm:mb-9">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-900/15 shrink-0">
              <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />
            </div>
            <div>
              {isEn && (
                <span className="text-[11px] sm:text-xs font-bold text-emerald-700 tracking-wider uppercase block font-sans">
                  Our Mission
                </span>
              )}
              <h2 className="font-serif-bn font-bold text-xl sm:text-3xl text-slate-900">
                {isEn ? 'Our Mission' : 'আমাদের লক্ষ্য'}
              </h2>
            </div>
          </div>

          {/* Mission Core Quote */}
          <div className="bg-[#f6faf8] border-l-4 border-emerald-600 rounded-r-2xl p-3.5 sm:p-5 mb-5 sm:mb-6">
            <p className="font-solaiman text-slate-900 text-sm sm:text-lg leading-relaxed font-medium">
              {isEn
                ? '“Guided by the compassion of Rasulullah (ﷺ) and the timeless light of the Sunnah—we are dedicated at the grassroots level to bringing smiles to the faces of the distressed Ummah, spreading Islamic knowledge, and building a permanently self-reliant society.”'
                : '“রাসূলুল্লাহ (ﷺ)-এর অনুকম্পা ও সুন্নাহর চিরায়ত আলোকে পাথেয় করে—অসহায় উম্মাহর মুখে হাসি ফোটানো, ইলমে দ্বীনের আলো ছড়ানো এবং একটি স্থায়ী স্বাবলম্বী সমাজ বিনির্মাণে আমরা মাঠপর্যায়ে নিবেদিত।”'}
            </p>
          </div>

          {/* 7 Points in Compact Interactive Accordion */}
          <div className="space-y-2.5 sm:space-y-3">
            {missionPoints.map((item, idx) => {
              const Icon = item.icon;
              const isOpen = openMissionIndex === idx;
              return (
                <div
                  key={item.num}
                  className={`rounded-xl sm:rounded-2xl border border-l-4 border-l-[#087443] transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-emerald-300 shadow-md shadow-emerald-950/5'
                      : 'bg-white border-slate-200/85 shadow-2xs hover:border-emerald-200 hover:shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMissionIndex((prev) => (prev === idx ? null : idx))}
                    className="w-full flex items-center justify-between gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3.5 text-left cursor-pointer select-none group"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs font-serif-bn ring-2 ring-emerald-50 shrink-0">
                        {item.num}
                      </span>
                      <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center shrink-0 group-hover:bg-emerald-100/70 transition-colors">
                        <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-emerald-700" strokeWidth={1.8} />
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg font-serif-bn tracking-tight leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <span
                      className={`relative shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-50 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                      {!isOpen && (
                        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5" aria-hidden="true">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-85" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.75)]" />
                        </span>
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-4 pt-2 border-t border-emerald-100/80 bg-emerald-50/20">
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-solaiman font-normal pl-0 sm:pl-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </ScrollReveal>

        {/* Section 2: আমাদের উদ্দেশ্য (Vision) - Floats smoothly from bottom */}
        <ScrollReveal direction="up">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-emerald-100 shadow-md mb-10">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-900/15 shrink-0">
              <Compass className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />
            </div>
            <div>
              {isEn && (
                <span className="text-[11px] sm:text-xs font-bold text-amber-700 tracking-wider uppercase block font-sans">
                  Our Vision
                </span>
              )}
              <h2 className="font-serif-bn font-bold text-xl sm:text-3xl text-slate-900">
                {isEn ? 'Our Vision' : 'আমাদের উদ্দেশ্য'}
              </h2>
            </div>
          </div>

          {/* Vision Core Quote */}
          <div className="bg-gradient-to-r from-emerald-50/80 to-amber-50/50 border-l-4 border-amber-600 rounded-r-2xl p-3.5 sm:p-5 mb-5 sm:mb-6">
            <p className="font-solaiman text-slate-900 text-sm sm:text-lg leading-relaxed font-medium">
              {isEn
                ? '“Embracing the timeless life ideal of Rasulullah (ﷺ) to earn the pleasure of the Almighty through selfless service to humanity, and building an ethical, justice-based society illuminated by the light of Iman.”'
                : '“রাসূলুল্লাহ (ﷺ)-এর চিরন্তন জীবনাদর্শকে বুকে ধারণ করে নিঃস্বার্থ মানবসেবার মাধ্যমে মহান রবের সন্তুষ্টি অর্জন করা; এবং একটি নৈতিক, ইনসাফভিত্তিক ও ঈমানী আলোয় আলোকিত সমাজ বিনির্মাণ করা।”'}
            </p>
          </div>

          {/* 2 Points in Compact Interactive Accordion */}
          <div className="space-y-2.5 sm:space-y-3">
            {visionPoints.map((item, idx) => {
              const Icon = item.icon;
              const isOpen = openVisionIndex === idx;
              return (
                <div
                  key={item.num}
                  className={`rounded-xl sm:rounded-2xl border border-l-4 ${item.accentBorder} transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-emerald-300 shadow-md shadow-emerald-950/5'
                      : 'bg-white border-slate-200/85 shadow-2xs hover:border-emerald-200 hover:shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenVisionIndex((prev) => (prev === idx ? null : idx))}
                    className="w-full flex items-center justify-between gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3.5 text-left cursor-pointer select-none group"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs font-serif-bn shrink-0 ${
                          idx === 0
                            ? 'bg-gradient-to-br from-[#d97706] via-[#b45309] to-[#92400e] ring-2 ring-amber-50'
                            : 'bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] ring-2 ring-emerald-50'
                        }`}
                      >
                        {item.num}
                      </span>
                      <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center shrink-0 group-hover:bg-emerald-100/70 transition-colors">
                        <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-emerald-700" strokeWidth={1.8} />
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 min-w-0">
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg font-serif-bn tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-[11px] sm:text-xs font-serif-bn rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200 shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <span
                      className={`relative shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-50 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                      {!isOpen && (
                        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5" aria-hidden="true">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-85" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.75)]" />
                        </span>
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-4 pt-2 border-t border-emerald-100/80 bg-emerald-50/20">
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-solaiman font-normal pl-0 sm:pl-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </ScrollReveal>

        {/* Leadership & Executive Board Section */}
        <div className="mb-14">
          <ScrollReveal direction="down" className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>{isEn ? 'Leadership & Governance' : 'নেতৃত্ব ও পরিচালনা'}</span>
            </div>
            <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl text-slate-900 mb-3 tracking-tight">
              {isEn ? 'Our Executive Team' : 'আমাদের কার্যনির্বাহী টিম'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isEn
                ? 'Our dedicated Executive Team steering the mission of Zikrullah Foundation with integrity, transparency, and excellence.'
                : 'সততা, স্বচ্ছতা ও দক্ষতার সাথে জিকরুল্লাহ ফাউন্ডেশনের কার্যক্রম পরিচালনায় আমাদের নিবেদিত কার্যনির্বাহী টিম।'}
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {/* Single Unified Professional Message Card (Click to reveal full message) */}
            <ScrollReveal direction="zoom">
              <div className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafdfb] to-[#f4f8f5] rounded-2xl sm:rounded-[36px] p-5 sm:p-10 lg:p-12 border border-emerald-100 shadow-xl shadow-emerald-950/5">
              
              {/* Background Watermark Quote Symbol */}
              <div className="absolute top-4 right-14 sm:right-20 text-emerald-900/[0.04] text-7xl sm:text-9xl font-serif select-none pointer-events-none leading-none">
                “
              </div>

              {/* 1. Header: Founder Photo, Identity & Badges + Corner Blinking Indicator Light */}
              <div
                onClick={() => setIsFounderMessageOpen((prev) => !prev)}
                className={`flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 relative z-10 text-center sm:text-left cursor-pointer select-none group ${
                  isFounderMessageOpen ? 'pb-6 sm:pb-8 border-b border-emerald-100/80' : ''
                }`}
              >
                {/* Photo with Emerald Ring & Social Badge */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-emerald-600 shadow-xl ring-4 ring-emerald-100/90 bg-slate-100">
                    <img
                      src="https://res.cloudinary.com/dlklqihg6/image/upload/v1795547568/ipvnrmiwbzwq5oktrwi7.jpg"
                      alt="Hafizur Rahman Siddik (Bogura)"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Facebook Profile"
                    className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1877f2] text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors font-bold text-xs border-2 border-white"
                    title="Facebook"
                  >
                    f
                  </a>
                </div>

                {/* Identity Info */}
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2 font-solaiman">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>{isEn ? "Founder & Chairman's Message" : 'প্রতিষ্ঠাতা ও চেয়ারম্যানের বার্তা'}</span>
                  </div>
                  <h3 className={`font-bold text-slate-900 text-xl sm:text-3xl lg:text-4xl tracking-wide mb-2 ${isEn ? 'font-armwrestler' : 'font-serif-bn'}`}>
                    {isEn ? 'Hafizur Rahman Siddik (Bogura)' : 'হাফিজুর রহমান সিদ্দিক (বগুড়া)'}
                  </h3>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5">
                    <span className="px-3.5 py-1 rounded-full bg-emerald-700 text-white text-xs font-bold tracking-wider uppercase shadow-2xs font-solaiman">
                      {isEn ? 'Founder & Chairman' : 'প্রতিষ্ঠাতা ও চেয়ারম্যান'}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600 font-solaiman font-semibold">
                      {isEn ? 'Zikrullah Foundation' : 'জিকরুল্লাহ ফাউন্ডেশন'}
                    </span>
                  </div>
                </div>

                {/* Top-Right Corner Blinking Emerald Light (Slightly Larger) + Chevron */}
                <button
                  type="button"
                  aria-expanded={isFounderMessageOpen}
                  aria-label={isEn ? "Toggle Chairman's Message" : 'চেয়ারম্যানের বার্তা দেখুন'}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFounderMessageOpen((prev) => !prev);
                  }}
                  className={`absolute top-0 right-0 sm:relative sm:top-auto sm:right-auto shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                    isFounderMessageOpen
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-50 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700'
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-300 ${
                      isFounderMessageOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                  {!isFounderMessageOpen && (
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-emerald-500 shadow-[0_0_10px_2px_rgba(16,185,129,0.8)] ring-2 ring-white" />
                    </span>
                  )}
                </button>
              </div>

              {/* Smooth Accordion Expandable Content (Original Body & Signature Footer) */}
              <div
                className={`grid transition-all duration-300 ease-in-out relative z-10 ${
                  isFounderMessageOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  {/* 2. Message Body */}
                  <div className="py-6 sm:py-8 space-y-5 sm:space-y-6 font-solaiman text-slate-700 text-sm sm:text-[17.5px] leading-[1.8] text-left">
                    {/* Paragraph 1: Founder's Deep Feeling & Inception */}
                    <p className="text-slate-800 font-normal">
                      {isEn ? (
                        <>
                          My heart aches deeply whenever I witness the silent cries and distress of the helpless around us. It was out of that profound sense of compassion that <strong className="text-emerald-900 font-semibold">‘Zikrullah Foundation’</strong> emerged. In this fleeting world, wealth is here today and gone tomorrow—such is the transient reality of worldly possessions. True, lasting success lies in spending it for the welfare of distressed humanity solely to earn the pleasure of Almighty Allah.
                        </>
                      ) : (
                        <>
                          অসহায় মানুষের নীরব কান্না আর হাহাকার দেখলে আমার কলিজায় রক্তক্ষরণ হয়। সেই দরদি তাগিদ থেকেই আত্মপ্রকাশ করেছে <strong className="text-emerald-900 font-semibold">‘জিকরুল্লাহ ফাউন্ডেশন’</strong>। এই ক্ষণস্থায়ী দুনিয়ায় টাকা-পয়সা আজ আছে, কাল নেই—এটাই সম্পদের বাস্তবতা। আসল সফলতা তো লুকিয়ে আছে আল্লাহর সন্তুষ্টির উদ্দেশ্যে অসহায় মানুষের কল্যাণে তা ব্যয় করার মাঝে।
                        </>
                      )}
                    </p>

                    {/* Quranic Verse Box (Soft Emerald Accent) */}
                    <div className="bg-[#f6faf8] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-100 border-l-4 border-l-[#087443] shadow-2xs space-y-2.5 sm:space-y-3">
                      <p className="font-times font-bold text-emerald-950 text-sm sm:text-[15px] lg:text-base leading-[2.05] tracking-normal" dir="rtl">
                        الَّذِينَ يُنفِقُونَ أَمْوَالَهُم بِاللَّيْلِ وَالنَّهَارِ سِرًّا وَعَلَانِيَةً فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ
                      </p>
                      <blockquote className="text-emerald-950 font-normal text-sm sm:text-base leading-relaxed font-solaiman">
                        {isEn
                          ? "“Those who spend their wealth [in Allah's way] by night and by day, secretly and publicly - they will have their reward with their Lord. And no fear will there be concerning them, nor will they grieve.”"
                          : '“যারা নিজেদের ধন-সম্পদ রাতে ও দিনে, গোপনে ও প্রকাশ্যে ব্যয় করে, তাদের জন্য তাদের রবের নিকট রয়েছে পুরষ্কার। আর তাদের কোনো ভয় নেই এবং তারা চিন্তিতও হবে না।”'}
                        <span className="not-italic block mt-1.5 text-xs sm:text-sm text-emerald-800 font-solaiman font-semibold">
                          {isEn ? '— Surah Al-Baqarah : 274' : '— সূরা আল-বাক্বারাহ্ : ২৭৪'}
                        </span>
                      </blockquote>
                    </div>

                    {/* Prophetic Hadith Box: Blessing & Angels' Prayer */}
                    <div className="bg-[#f6faf8] rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-emerald-100 border-l-4 border-l-[#087443] shadow-2xs space-y-4 text-xs sm:text-[16.5px]">
                      <p className="text-slate-800 leading-relaxed font-solaiman">
                        {isEn ? (
                          <>
                            The Messenger of Allah (ﷺ) said— <span className="font-times font-bold text-emerald-950 text-sm sm:text-lg tracking-normal">«مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ»</span> “Charity does not decrease wealth in the slightest” <span className="text-xs sm:text-sm text-emerald-700 font-solaiman font-semibold">(Sahih Muslim: 2588)</span>. Whenever you spend seeking the pleasure of Allah, the angels in the heavens supplicate— <span className="font-times font-bold text-emerald-950 text-sm sm:text-lg tracking-normal">«اللَّهُمَّ أَعْطِ مُنْفِقًا خَلَفًا»</span> “O Allah, grant the one who spends in charity a blessed compensation” <span className="text-xs sm:text-sm text-emerald-700 font-solaiman font-semibold">(Sahih al-Bukhari: 1442)</span>.
                          </>
                        ) : (
                          <>
                            রাসূলুল্লাহ (ﷺ) বলেছেন— <span className="font-times font-bold text-emerald-950 text-sm sm:text-lg tracking-normal">«مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ»</span> ‘দানের কারণে কখনো সম্পদের ঘাটতি হয় না’ <span className="text-xs sm:text-sm text-emerald-700 font-solaiman font-semibold">(সহিহ মুসলিম: ২৫৮৮)</span>। আপনি যখন আল্লাহর সন্তুষ্টিতে ব্যয় করেন, তখন আসমানের ফেরেশতারা দোয়া করেন— <span className="font-times font-bold text-emerald-950 text-sm sm:text-lg tracking-normal">«اللَّهُمَّ أَعْطِ مُنْفِقًا خَلَفًا»</span> ‘হে আল্লাহ! দানকারীকে তার দানের উত্তম প্রতিদান দিন’ <span className="text-xs sm:text-sm text-emerald-700 font-solaiman font-semibold">(সহিহ বুখারী: ১৪৪২)</span>।
                          </>
                        )}
                      </p>

                      <p className="text-slate-800 leading-relaxed border-t border-emerald-100/80 pt-3.5 font-solaiman">
                        {isEn ? (
                          <>
                            Charity brings abundant mercy into a believer&apos;s life. Indeed— <span className="font-times font-bold text-emerald-950 text-sm sm:text-lg tracking-normal">«وَالصَّدَقَةُ بُرْهَانٌ»</span> “Charity is clear proof (of faith)” <span className="text-xs sm:text-sm text-emerald-700 font-solaiman font-semibold">(Sahih Muslim: 223 / 422)</span>, <span className="font-times font-bold text-emerald-950 text-sm sm:text-lg tracking-normal">«وَالصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ»</span> “Charity extinguishes sin just as water extinguishes fire” <span className="text-xs sm:text-sm text-emerald-700 font-solaiman font-semibold">(Jami` at-Tirmidhi: 2616)</span>, and <span className="font-times font-bold text-emerald-950 text-sm sm:text-lg tracking-normal">«إِنَّ الصَّدَقَةَ لَتُطْفِئُ عَنْ أَهْلِهَا حَرَّ الْقُبُورِ»</span> “Verily, charity extinguishes the heat of the grave for those who give it” <span className="text-xs sm:text-sm text-emerald-700 font-solaiman font-semibold">(Al-Silsilah al-Sahihah: 3484)</span>.
                          </>
                        ) : (
                          <>
                            দান হলো মুমিনের জীবনের বহুমুখী রহমত। কারণ— <span className="font-times font-bold text-emerald-950 text-sm sm:text-lg tracking-normal">«وَالصَّدَقَةُ بُرْهَانٌ»</span> ‘সদকা হলো ঈমানের অকাট্য দলিল’ <span className="text-xs sm:text-sm text-emerald-700 font-solaiman font-semibold">(সহিহ মুসলিম: ৪২২)</span>, <span className="font-times font-bold text-emerald-950 text-sm sm:text-lg tracking-normal">«وَالصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ»</span> ‘সদকা গুনাহসমূহকে এভাবে মিটিয়ে দেয়, যেমন পানি আগুনকে নিভিয়ে দেয়’ <span className="text-xs sm:text-sm text-emerald-700 font-solaiman font-semibold">(জামে আত-তিরমিজি: ২৬১৬)</span>, এবং <span className="font-times font-bold text-emerald-950 text-sm sm:text-lg tracking-normal">«إِنَّ الصَّدَقَةَ لَتُطْفِئُ عَنْ أَهْلِهَا حَرَّ الْقُبُورِ»</span> ‘নিশ্চয়ই সদকা দানকারীর কবরের উত্তাপ নিভিয়ে দেয়’ <span className="text-xs sm:text-sm text-emerald-700 font-solaiman font-semibold">(সিলসিলাতুস সহীহাহ: ৩৪৮৪)</span>।
                          </>
                        )}
                      </p>
                    </div>

                    {/* Medical Hadith Inset Box (Amber Accent) */}
                    <div className="bg-[#fffdf7] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-amber-200/80 border-l-4 border-l-amber-500 shadow-2xs">
                      <p className="text-slate-800 text-sm sm:text-[16.5px] leading-relaxed font-solaiman">
                        {isEn ? (
                          <>
                            Our beloved Prophet (ﷺ) even advised— <span className="font-times font-bold text-amber-950 text-sm sm:text-lg tracking-normal">«دَاوُوا مَرْضَاكُمْ بِالصَّدَقَةِ»</span> “Treat your sick ones by giving charity” <span className="text-xs sm:text-sm text-amber-800 font-solaiman font-semibold">(Sahih al-Jami`: 3358)</span>.
                          </>
                        ) : (
                          <>
                            এমনকি প্রিয় নবী (ﷺ) নির্দেশ দিয়েছেন— <span className="font-times font-bold text-amber-950 text-sm sm:text-lg tracking-normal">«دَاوُوا مَرْضَاكُمْ بِالصَّدَقَةِ»</span> ‘তোমরা দান-সদকার মাধ্যমে তোমাদের অসুস্থদের চিকিৎসা করো’ <span className="text-xs sm:text-sm text-amber-800 font-solaiman font-semibold">(সহিহুল জামে: ৩৩৫৮)</span>।
                          </>
                        )}
                      </p>
                    </div>

                    {/* Paragraph 3: Warm Institutional Invitation */}
                    <p className="text-slate-800 font-normal pt-1 font-solaiman">
                      {isEn
                        ? "We never knock on anyone's door seeking personal favors; whenever your heart resonates with our noble mission, you are most welcome to join this compassionate service willingly. Even a small gesture of kindness from you can become the means of bringing a precious smile to someone's face. To earn enduring eternal rewards in the Hereafter—we warmly welcome you to the ‘Zikrullah Foundation’ family."
                        : 'আমরা অনুগ্রহপ্রার্থী হয়ে কারো দ্বারে কিছু চাই না; আমাদের আদর্শের সাথে আপনার মনের টান মিললেই স্বতঃস্ফূর্তভাবে এই খেদমতে যুক্ত হতে পারেন। আপনার সামান্য সহানুভূতিই হতে পারে কারো মুখে এক চিলতে হাসি ফোটানোর উসিলা। পরকালের চিরস্থায়ী কল্যাণ অর্জনে—‘জিকরুল্লাহ ফাউন্ডেশন’ পরিবারে আপনাকে উষ্ণ স্বাগতম।'}
                    </p>
                  </div>

                  {/* 3. Footer: Digital Signature + Action Button */}
                  <div className="pt-6 sm:pt-8 border-t border-emerald-100/90 flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Signature & Identity */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left font-solaiman">
                      <div className="mb-2 flex items-center justify-center sm:justify-start">
                        <img
                          src="https://res.cloudinary.com/dlklqihg6/image/upload/v1791661214/vtbxogwfkuzaajs4ptv2.png"
                          alt={isEn ? 'Signature — Hafizur Rahman Siddik' : 'স্বাক্ষর — হাফিজুর রহমান সিদ্দিক'}
                          className="h-10 sm:h-12 md:h-13 w-auto max-w-[140px] sm:max-w-[160px] object-contain select-none transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="text-base sm:text-lg font-bold text-slate-900 font-solaiman">
                        {isEn ? 'Hafizur Rahman Siddik (Bogura)' : 'হাফিজুর রহমান সিদ্দিক (বগুড়া)'}
                      </div>
                      <div className="text-xs sm:text-sm text-emerald-700 font-semibold font-solaiman mt-0.5">
                        {isEn ? 'Founder & Chairman, Zikrullah Foundation' : 'প্রতিষ্ঠাতা ও চেয়ারম্যান, জিকরুল্লাহ ফাউন্ডেশন'}
                      </div>
                    </div>

                    {/* Attractive Call-to-Action Button */}
                    <div className="w-full sm:w-auto">
                      <button
                        onClick={() => onOpenDonation('general-sadaqah')}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#087443] to-[#034e2c] hover:from-[#0a8c51] hover:to-[#056338] active:scale-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/25 transition-all duration-300 cursor-pointer group min-h-[44px]"
                      >
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white group-hover:scale-110 transition-transform duration-300" />
                        <span>{t.common.donateNow}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              </div>
            </ScrollReveal>

            {/* Main 12-Member Committee Grid + Executive Members & Honorable Members Modals */}
            <LeadershipCommitteeGrid />
          </div>
        </div>

        {/* আমাদের সেবামূলক কার্যক্রম (১০ মিনিট স্কুল হুবহু অ্যাপ-বাটন স্টাইল সেকশন) */}
        <div className="mb-14">
          <ProjectsSection isEmbedded={true} onOpenDonation={onOpenDonation} />
        </div>

        {/* Bottom CTA Box */}
        <ScrollReveal direction="zoom">
          <div className="bg-gradient-to-r from-emerald-900 to-[#045332] text-white rounded-3xl p-8 sm:p-10 text-center shadow-xl">
            <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl mb-3">
              {t.ctaBanner.heading}
            </h3>
            <p className="text-emerald-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-6 font-solaiman">
              {t.ctaBanner.paragraph}
            </p>
            <div className="space-y-4">
              <QuickEngagementBar
                onOpenVolunteer={onOpenVolunteer}
                onOpenNeedyInfo={onOpenNeedyInfo}
                onOpenContactModal={onOpenContactModal}
              />

              <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                <button
                  onClick={() => onOpenDonation('general-sadaqah')}
                  className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  {t.common.donateNow}
                </button>
                <button
                  onClick={onBackToHome}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-emerald-100 font-semibold text-sm transition-all active:scale-95 cursor-pointer"
                >
                  ← {t.common.backToHome}
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>



      </div>
    </div>
  );
};
