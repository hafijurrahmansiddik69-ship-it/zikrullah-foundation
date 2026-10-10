import React from 'react';
import { Target, Compass, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import {
  FoodIllustration,
  MedicalIllustration,
  EducationIllustration,
  SelfRelianceIllustration,
  YouthAwakeningIllustration,
  SadaqahJariyahIllustration
} from './MissionIcons';

interface ServicesSectionProps {
  onSelectServiceDonation?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceDonation }) => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-gradient-to-b from-[#f8faf9] via-white to-[#f4f8f6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-3.5">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>আমাদের মূল দর্শন ও কর্মপরিকল্পনা</span>
          </div>
          <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl lg:text-5xl text-[#045332] tracking-tight leading-tight mb-4">
            আমাদের লক্ষ্য ও উদ্দেশ্য
          </h2>
          <p className="text-slate-600 font-solaiman text-base sm:text-lg leading-relaxed">
            কুরআন-সুন্নাহর সঠিক নির্দেশনা অনুযায়ী মানবতার নিঃস্বার্থ খেদমত এবং আখিরাতের সঞ্চয় গড়ে তোলার পবিত্র অঙ্গীকার।
          </p>
        </div>

        {/* 2 Main Columns: Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Column 1: আমাদের লক্ষ্য (Mission) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-xl shadow-emerald-950/5 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-300 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#087443] to-[#024a2c] text-white flex items-center justify-center shadow-md shadow-emerald-900/20 shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-700 tracking-wider uppercase block font-sans">
                      Our Mission
                    </span>
                    <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                      আমাদের লক্ষ্য (Mission)
                    </h3>
                  </div>
                </div>
              </div>

              {/* Mission Main Statement */}
              <div className="bg-[#f6faf8] border-l-4 border-emerald-600 rounded-r-2xl p-4 sm:p-5 mb-7">
                <p className="font-solaiman text-slate-900 text-base sm:text-[17px] leading-relaxed font-medium">
                  “রাসূলুল্লাহ (ﷺ)-এর অনুকম্পা ও সুন্নাহর চিরায়ত আলোকে পাথেয় করে—অসহায় উম্মাহর মুখে হাসি ফোটানো, ইলমে দ্বীনের আলো ছড়ানো এবং একটি স্থায়ী স্বাবলম্বী সমাজ বিনির্মাণে আমরা মাঠপর্যায়ে নিবেদিত।”
                </p>
              </div>

              {/* 4 Mission Points - Matching AboutPage design */}
              <div className="space-y-4 sm:space-y-5">
                {/* 1. খাদ্য-হাদিয়া */}
                <div className="relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#087443] shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-emerald-200 transition-all duration-300 group/card">
                  {/* Watermark Number */}
                  <span className="absolute right-3 -bottom-3 text-6xl sm:text-7xl font-black text-slate-900/[0.04] font-serif select-none pointer-events-none group-hover/card:text-emerald-950/[0.07] group-hover/card:scale-105 transition-all duration-300 tracking-tighter">
                    01
                  </span>

                  {/* Number Badge + 3D Colorful Vector Icon */}
                  <div className="flex items-center sm:flex-col gap-2.5 shrink-0 z-10">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] text-white font-bold text-base flex items-center justify-center shadow-md shadow-emerald-900/20 font-serif-bn ring-4 ring-emerald-50 group-hover/card:ring-emerald-100 transition-all">
                      ১
                    </div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/60 flex items-center justify-center border border-emerald-200/90 shadow-2xs group-hover/card:scale-105 group-hover/card:border-emerald-300 group-hover/card:shadow-md transition-all duration-300 p-1.5 shrink-0">
                      <FoodIllustration className="w-full h-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-1.5 font-serif-bn tracking-tight flex items-center gap-2">
                      <span>সুন্নাহর অনুসরণে খাদ্য-হাদিয়া</span>
                      <span className="hidden sm:inline-block w-6 h-[2px] bg-emerald-300/80 rounded-full"></span>
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-solaiman font-normal">
                      অসহায়, এতিম, মিসকিন, বিধবা ও প্রয়োজনগ্রস্ত পরিবারের দ্বারে ভালোবাসার খাবার পৌঁছে দেওয়া।
                    </p>
                  </div>
                </div>

                {/* 2. চিকিৎসা */}
                <div className="relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#087443] shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-emerald-200 transition-all duration-300 group/card">
                  {/* Watermark Number */}
                  <span className="absolute right-3 -bottom-3 text-6xl sm:text-7xl font-black text-slate-900/[0.04] font-serif select-none pointer-events-none group-hover/card:text-emerald-950/[0.07] group-hover/card:scale-105 transition-all duration-300 tracking-tighter">
                    02
                  </span>

                  {/* Number Badge + 3D Colorful Vector Icon */}
                  <div className="flex items-center sm:flex-col gap-2.5 shrink-0 z-10">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] text-white font-bold text-base flex items-center justify-center shadow-md shadow-emerald-900/20 font-serif-bn ring-4 ring-emerald-50 group-hover/card:ring-emerald-100 transition-all">
                      ২
                    </div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/60 flex items-center justify-center border border-emerald-200/90 shadow-2xs group-hover/card:scale-105 group-hover/card:border-emerald-300 group-hover/card:shadow-md transition-all duration-300 p-1.5 shrink-0">
                      <MedicalIllustration className="w-full h-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-1.5 font-serif-bn tracking-tight flex items-center gap-2">
                      <span>বিনামূল্যে জরুরি চিকিৎসা ও স্বাস্থ্যসেবা</span>
                      <span className="hidden sm:inline-block w-6 h-[2px] bg-emerald-300/80 rounded-full"></span>
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-solaiman font-normal">
                      দুর্গম ও অবহেলিত অঞ্চলের অসচ্ছল মানুষের কাছে বিশেষজ্ঞ চিকিৎসকের পরামর্শ, প্রয়োজনীয় ওষুধ ও জরুরি সেবা সহজে পৌঁছে দেওয়া।
                    </p>
                  </div>
                </div>

                {/* 3. দ্বীনি শিক্ষা */}
                <div className="relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#087443] shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-emerald-200 transition-all duration-300 group/card">
                  {/* Watermark Number */}
                  <span className="absolute right-3 -bottom-3 text-6xl sm:text-7xl font-black text-slate-900/[0.04] font-serif select-none pointer-events-none group-hover/card:text-emerald-950/[0.07] group-hover/card:scale-105 transition-all duration-300 tracking-tighter">
                    03
                  </span>

                  {/* Number Badge + 3D Colorful Vector Icon */}
                  <div className="flex items-center sm:flex-col gap-2.5 shrink-0 z-10">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] text-white font-bold text-base flex items-center justify-center shadow-md shadow-emerald-900/20 font-serif-bn ring-4 ring-emerald-50 group-hover/card:ring-emerald-100 transition-all">
                      ৩
                    </div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/60 flex items-center justify-center border border-emerald-200/90 shadow-2xs group-hover/card:scale-105 group-hover/card:border-emerald-300 group-hover/card:shadow-md transition-all duration-300 p-1.5 shrink-0">
                      <EducationIllustration className="w-full h-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-1.5 font-serif-bn tracking-tight flex items-center gap-2">
                      <span>দ্বীনি ও আদর্শ শিক্ষা বিস্তার</span>
                      <span className="hidden sm:inline-block w-6 h-[2px] bg-emerald-300/80 rounded-full"></span>
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-solaiman font-normal">
                      এতিম ও অসচ্ছল মেধাবী শিক্ষার্থীদের জন্য বিশুদ্ধ কুরআন তিলাওয়াত, কুরআন হাদীসের ইলম এবং যুগোপযোগী উচ্চ শিক্ষা ও উন্নত নৈতিকতার স্থায়ী ব্যবস্থা গড়ে তোলা।
                    </p>
                  </div>
                </div>

                {/* 4. আত্মনির্ভরশীলতা */}
                <div className="relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#087443] shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-emerald-200 transition-all duration-300 group/card">
                  {/* Watermark Number */}
                  <span className="absolute right-3 -bottom-3 text-6xl sm:text-7xl font-black text-slate-900/[0.04] font-serif select-none pointer-events-none group-hover/card:text-emerald-950/[0.07] group-hover/card:scale-105 transition-all duration-300 tracking-tighter">
                    04
                  </span>

                  {/* Number Badge + 3D Colorful Vector Icon */}
                  <div className="flex items-center sm:flex-col gap-2.5 shrink-0 z-10">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] text-white font-bold text-base flex items-center justify-center shadow-md shadow-emerald-900/20 font-serif-bn ring-4 ring-emerald-50 group-hover/card:ring-emerald-100 transition-all">
                      ৪
                    </div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/60 flex items-center justify-center border border-emerald-200/90 shadow-2xs group-hover/card:scale-105 group-hover/card:border-emerald-300 group-hover/card:shadow-md transition-all duration-300 p-1.5 shrink-0">
                      <SelfRelianceIllustration className="w-full h-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-1.5 font-serif-bn tracking-tight flex items-center gap-2">
                      <span>স্থায়ী আত্মনির্ভরশীলতা প্রকল্প</span>
                      <span className="hidden sm:inline-block w-6 h-[2px] bg-emerald-300/80 rounded-full"></span>
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-solaiman font-normal">
                      অসহায় ও অসচ্ছল পরিবারগুলোর দারিদ্র্য বিমোচনে গবাদিপশু বিতরণ, ক্ষুদ্র ব্যবসা ফান্ড ও প্রয়োজনীয় কারিগরি উপকরণ প্রদানের মাধ্যমে স্থায়ীভাবে স্বাবলম্বী করে তোলা।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {onSelectServiceDonation && (
              <div className="mt-8 pt-6 border-t border-emerald-100/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  মাঠপর্যায়ে এই কাজগুলো বাস্তবায়নে আপনিও শরিক হতে পারেন
                </span>
                <button
                  onClick={() => onSelectServiceDonation('সাধারণ দান ও সেবা ফান্ড')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-900 hover:underline cursor-pointer"
                >
                  <span>সহযোগিতা করুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Column 2: আমাদের উদ্দেশ্য (Vision) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-xl shadow-emerald-950/5 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-300 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d97706] to-[#92400e] text-amber-200 flex items-center justify-center shadow-md shadow-amber-950/20 shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-700 tracking-wider uppercase block font-sans">
                      Our Vision
                    </span>
                    <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                      আমাদের উদ্দেশ্য (Vision)
                    </h3>
                  </div>
                </div>
              </div>

              {/* Vision Main Statement */}
              <div className="bg-gradient-to-r from-emerald-50/80 to-amber-50/50 border-l-4 border-amber-600 rounded-r-2xl p-4 sm:p-5 mb-7">
                <p className="font-solaiman text-slate-900 text-base sm:text-[17px] leading-relaxed font-medium">
                  “রাসূলুল্লাহ (ﷺ)-এর চিরন্তন জীবনাদর্শকে বুকে ধারণ করে নিঃস্বার্থ মানবসেবার মাধ্যমে মহান রবের সন্তুষ্টি অর্জন করা; এবং একটি নৈতিক, ইনসাফভিত্তিক ও ঈমানী আলোয় আলোকিত সমাজ বিনির্মাণ করা।”
                </p>
              </div>

              {/* 2 Vision Points - Matching AboutPage design */}
              <div className="space-y-4 sm:space-y-5">
                {/* 1. তরুণ প্রজন্মের ঈমানী জাগরণ */}
                <div className="relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-amber-500 shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-amber-300 transition-all duration-300 group/card">
                  {/* Large Translucent Watermark Number */}
                  <span className="absolute right-3 -bottom-3 text-6xl sm:text-7xl font-black text-slate-900/[0.04] font-serif select-none pointer-events-none group-hover/card:text-amber-950/[0.07] group-hover/card:scale-105 transition-all duration-300 tracking-tighter">
                    01
                  </span>

                  {/* Number Badge + 3D Colorful Vector Icon */}
                  <div className="flex items-center sm:flex-col gap-2.5 shrink-0 z-10">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#d97706] via-[#b45309] to-[#92400e] text-white font-bold text-base flex items-center justify-center shadow-md shadow-amber-950/20 font-serif-bn ring-4 ring-amber-50 group-hover/card:ring-amber-100 transition-all">
                      ১
                    </div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-amber-50/90 via-white to-emerald-50/60 flex items-center justify-center border border-amber-200/90 shadow-2xs group-hover/card:scale-105 group-hover/card:border-amber-300 group-hover/card:shadow-md transition-all duration-300 p-1.5 shrink-0">
                      <YouthAwakeningIllustration className="w-full h-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-1.5 font-serif-bn tracking-tight flex items-center gap-2">
                      <span>তরুণ প্রজন্মের ঈমানী জাগরণ</span>
                      <span className="hidden sm:inline-block w-6 h-[2px] bg-amber-400/80 rounded-full"></span>
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-solaiman font-normal">
                      প্রজ্ঞাপূর্ণ দাওয়াহ, বুদ্ধিবৃত্তিক আলোচনা ও দরদি দিকনির্দেশনার মাধ্যমে যুবসমাজকে ডিজিটাল ফিতনা ও নৈতিক অবক্ষয় থেকে রক্ষা করে কুরআন-সুন্নাহর দীপ্ত আদর্শে গড়ে তোলা।
                    </p>
                  </div>
                </div>

                {/* 2. আখেরাতের সঞ্চয় (সাদাকায়ে জারিয়াহ) */}
                <div className="relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#087443] shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-emerald-200 transition-all duration-300 group/card">
                  {/* Large Translucent Watermark Number */}
                  <span className="absolute right-3 -bottom-3 text-6xl sm:text-7xl font-black text-slate-900/[0.04] font-serif select-none pointer-events-none group-hover/card:text-emerald-950/[0.07] group-hover/card:scale-105 transition-all duration-300 tracking-tighter">
                    02
                  </span>

                  {/* Number Badge + 3D Colorful Vector Icon */}
                  <div className="flex items-center sm:flex-col gap-2.5 shrink-0 z-10">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] text-white font-bold text-base flex items-center justify-center shadow-md shadow-emerald-900/20 font-serif-bn ring-4 ring-emerald-50 group-hover/card:ring-emerald-100 transition-all">
                      ২
                    </div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/60 flex items-center justify-center border border-emerald-200/90 shadow-2xs group-hover/card:scale-105 group-hover/card:border-emerald-300 group-hover/card:shadow-md transition-all duration-300 p-1.5 shrink-0">
                      <SadaqahJariyahIllustration className="w-full h-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h4 className="font-bold text-slate-900 text-base sm:text-lg font-serif-bn tracking-tight">
                        আখেরাতের সঞ্চয়
                      </h4>
                      <span className="px-2.5 py-0.5 text-xs font-serif-bn rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                        صدقة جارية
                      </span>
                      <span className="hidden sm:inline-block w-6 h-[2px] bg-emerald-400/80 rounded-full"></span>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-solaiman font-normal">
                      লোক দেখানো মোহ ছেড়ে ইখলাসের সাথে <strong className="text-emerald-800 font-semibold">'সাদাকায়ে জারিয়াহ'</strong>র অংশীদার হওয়া—যা দুনিয়ায় দেবে আত্মিক প্রশান্তি, আর মৃত্যুর পর অন্ধকার কবরে উপহার দেবে অবিরাম সাওয়াব; যেন মহান রবের সন্তুষ্টিতে চূড়ান্ত ঠিকানা হয় জান্নাত। ইনশাআল্লাহ।
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quranic Inspiration Ribbon (Surah Al-Baqarah: 274) */}
              <div className="mt-7 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-[#034a2c] to-[#045332] text-white shadow-md border border-emerald-800/40">
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <HeartHandshake className="w-5 h-5 text-amber-300 shrink-0 mt-1" />
                  <div className="space-y-2 flex-1">
                    <p dir="rtl" className="font-serif-bn font-semibold text-white text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose tracking-wide text-right">
                      الَّذِينَ يُنفِقُونَ أَمْوَالَهُم بِاللَّيْلِ وَالنَّهَارِ سِرًّا وَعَلَانِيَةً فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ .
                    </p>
                    <p className="font-solaiman text-emerald-50 text-xs sm:text-[13.5px] leading-relaxed">
                      “যারা নিজেদের ধন-সম্পদ রাতে ও দিনে, গোপনে ও প্রকাশ্যে ব্যয় করে, তাদের জন্য তাদের রবের নিকট রয়েছে পুরষ্কার। আর তাদের কোনো ভয় নেই এবং তারা চিন্তিতও হবে না।”
                    </p>
                    <div className="pt-1 flex items-center justify-between sm:justify-start gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-900/90 text-[11px] sm:text-xs text-amber-300 font-sans-bn font-medium border border-emerald-700/60">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        সূরা আল-বাক্বারাহ্‌ : ২৭৪
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {onSelectServiceDonation && (
              <div className="mt-8 pt-6 border-t border-emerald-100/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  সাদাকায়ে জারিয়াহ ফান্ডে অংশগ্রহণ করুন
                </span>
                <button
                  onClick={() => onSelectServiceDonation('সাদাকায়ে জারিয়াহ তহবিল')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-900 hover:underline cursor-pointer"
                >
                  <span>সাদাকাহ দিন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
