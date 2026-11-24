import React, { useState } from 'react';
import {
  Compass,
  HeartHandshake,
  ArrowRight,
  HandHeart,
  Stethoscope,
  HeartPulse,
  BookOpen,
  Sprout,
  Trees,
  Scale,
  Sun,
  Landmark,
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { QuickEngagementBar } from './QuickEngagementBar';

interface ServicesSectionProps {
  onSelectServiceDonation?: (serviceTitle: string) => void;
  onOpenVolunteer?: () => void;
  onOpenNeedyInfo?: () => void;
  onOpenContactModal?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceDonation,
  onOpenVolunteer,
  onOpenNeedyInfo,
  onOpenContactModal
}) => {
  const { isEn } = useLanguage();
  const [openMissionIndex, setOpenMissionIndex] = useState<number | null>(null);
  const [openVisionIndex, setOpenVisionIndex] = useState<number | null>(null);

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
    <section id="services" className="py-12 sm:py-16 bg-gradient-to-b from-[#f8faf9] via-white to-[#f4f8f6] relative overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* 2 Main Columns: Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Column 1: আমাদের লক্ষ্য (Mission) - বাম থেকে */}
          <ScrollReveal direction="left" className="flex">
            <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-emerald-100 shadow-xl shadow-emerald-950/5 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-300 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-900/15 shrink-0">
                    <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    {isEn && (
                      <span className="text-[11px] font-bold text-emerald-700 tracking-wider uppercase block font-sans">
                        Our Mission
                      </span>
                    )}
                    <h3 className="font-serif-bn font-bold text-xl sm:text-3xl text-slate-900 leading-tight">
                      {isEn ? 'Our Mission' : 'আমাদের লক্ষ্য'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Mission Main Statement */}
              <div className="bg-[#f6faf8] border-l-4 border-emerald-600 rounded-r-2xl p-3.5 sm:p-5 mb-5 sm:mb-6">
                <p className="font-solaiman text-slate-900 text-sm sm:text-[17px] leading-relaxed font-medium">
                  {isEn
                    ? '“Guided by the compassion of Rasulullah (ﷺ) and the timeless light of the Sunnah—we are dedicated at the grassroots level to bringing smiles to the faces of the distressed Ummah, spreading Islamic knowledge, and building a permanently self-reliant society.”'
                    : '“রাসূলুল্লাহ (ﷺ)-এর অনুকম্পা ও সুন্নাহর চিরায়ত আলোকে পাথেয় করে—অসহায় উম্মাহর মুখে হাসি ফোটানো, ইলমে দ্বীনের আলো ছড়ানো এবং একটি স্থায়ী স্বাবলম্বী সমাজ বিনির্মাণে আমরা মাঠপর্যায়ে নিবেদিত।”'}
                </p>
              </div>

              {/* 7 Mission Points - Matching AboutPage Compact Accordion */}
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
                        className="w-full flex items-center justify-between gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3.5 text-left cursor-pointer select-none group/btn"
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs font-serif-bn ring-2 ring-emerald-50 shrink-0">
                            {item.num}
                          </span>
                          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center shrink-0 group-hover/btn:bg-emerald-100/70 transition-colors">
                            <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-emerald-700" strokeWidth={1.8} />
                          </span>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg font-serif-bn tracking-tight leading-snug">
                            {item.title}
                          </h4>
                        </div>

                        <span
                          className={`relative shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                            isOpen
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-slate-50 text-slate-600 group-hover/btn:bg-emerald-50 group-hover/btn:text-emerald-700'
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

            {onSelectServiceDonation && (
              <div className="mt-8 pt-6 border-t border-emerald-100/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {isEn
                    ? 'You can also partner with us to implement these grassroots initiatives'
                    : 'মাঠপর্যায়ে এই কাজগুলো বাস্তবায়নে আপনিও শরিক হতে পারেন'}
                </span>
                <button
                  onClick={() => onSelectServiceDonation('সাধারণ দান ও সেবা ফান্ড')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-900 hover:underline cursor-pointer shrink-0 ml-2"
                >
                  <span>{isEn ? 'Join Khidmat' : 'খেদমতে শরীক হোন'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
            </div>
          </ScrollReveal>

          {/* Column 2: আমাদের উদ্দেশ্য (Vision) - ডান দিক থেকে */}
          <ScrollReveal direction="right" delay={150} className="flex">
            <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-emerald-100 shadow-xl shadow-emerald-950/5 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-300 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-900/15 shrink-0">
                    <Compass className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    {isEn && (
                      <span className="text-[11px] font-bold text-amber-700 tracking-wider uppercase block font-sans">
                        Our Vision
                      </span>
                    )}
                    <h3 className="font-serif-bn font-bold text-xl sm:text-3xl text-slate-900 leading-tight">
                      {isEn ? 'Our Vision' : 'আমাদের উদ্দেশ্য'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Vision Main Statement */}
              <div className="bg-gradient-to-r from-emerald-50/80 to-amber-50/50 border-l-4 border-amber-600 rounded-r-2xl p-3.5 sm:p-5 mb-5 sm:mb-6">
                <p className="font-solaiman text-slate-900 text-sm sm:text-[17px] leading-relaxed font-medium">
                  {isEn
                    ? '“Embracing the timeless life ideal of Rasulullah (ﷺ) to earn the pleasure of the Almighty through selfless service to humanity, and building an ethical, justice-based society illuminated by the light of Iman.”'
                    : '“রাসূলুল্লাহ (ﷺ)-এর চিরন্তন জীবনাদর্শকে বুকে ধারণ করে নিঃস্বার্থ মানবসেবার মাধ্যমে মহান রবের সন্তুষ্টি অর্জন করা; এবং একটি নৈতিক, ইনসাফভিত্তিক ও ঈমানী আলোয় আলোকিত সমাজ বিনির্মাণ করা।”'}
                </p>
              </div>

              {/* 2 Vision Points - Matching AboutPage Compact Accordion */}
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
                        className="w-full flex items-center justify-between gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3.5 text-left cursor-pointer select-none group/btn"
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
                          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center shrink-0 group-hover/btn:bg-emerald-100/70 transition-colors">
                            <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-emerald-700" strokeWidth={1.8} />
                          </span>
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 min-w-0">
                            <h4 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg font-serif-bn tracking-tight leading-snug">
                              {item.title}
                            </h4>
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
                              : 'bg-slate-50 text-slate-600 group-hover/btn:bg-emerald-50 group-hover/btn:text-emerald-700'
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
            </div>
          </ScrollReveal>

        </div>

        {/* High-Visibility Action Bar underneath Mission & Vision */}
        <ScrollReveal direction="up" delay={150} className="mt-8 sm:mt-12">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-950 via-[#045332] to-emerald-900 px-4 py-6 sm:px-8 sm:py-8 text-center shadow-lg border border-emerald-700/40">
            <h4 className="font-serif-bn font-bold text-lg sm:text-2xl text-white mb-1.5">
              {isEn ? 'Be a Part of This Noble Journey' : 'মানবতার এই খেদমতে আপনিও যুক্ত হোন'}
            </h4>
            <p className="text-emerald-100/90 text-xs sm:text-sm max-w-2xl mx-auto mb-5 font-solaiman">
              {isEn
                ? 'Join as a volunteer, inform us about any needy person in your village, or reach out to us directly.'
                : 'স্বেচ্ছাসেবক হিসেবে যোগ দিন, আপনার গ্রামের কোনো অসহায় মানুষের তথ্য দিন অথবা আমাদের সাথে সরাসরি যোগাযোগ করুন।'}
            </p>
            <QuickEngagementBar
              onOpenVolunteer={onOpenVolunteer}
              onOpenNeedyInfo={onOpenNeedyInfo}
              onOpenContactModal={onOpenContactModal}
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

