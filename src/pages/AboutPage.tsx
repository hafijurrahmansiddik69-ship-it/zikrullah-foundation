import React from 'react';
import { 
  ArrowLeft, 
  Target, 
  Sparkles, 
  HeartHandshake, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Calendar, 
  Award, 
  MapPin, 
  Mail, 
  Phone,
  BookOpen,
  ArrowRight,
  Heart
} from 'lucide-react';
import { 
  FoodIllustration, 
  MedicalIllustration, 
  EducationIllustration, 
  SelfRelianceIllustration,
  YouthAwakeningIllustration,
  SadaqahJariyahIllustration
} from '../components/MissionIcons';
import { FOUNDATION_INFO, heroImg, EXECUTIVE_MEMBERS } from '../data/mockData';

interface AboutPageProps {
  onBackToHome: () => void;
  onOpenVolunteer: () => void;
  onOpenDonation: (category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ 
  onBackToHome, 
  onOpenVolunteer,
  onOpenDonation 
}) => {
  return (
    <div className="bg-[#fcfdfc] min-h-screen py-10 sm:py-14 text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Top Navigation & Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-emerald-100">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-sm transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-700" />
            <span>হোম পেজে ফিরে যান</span>
          </button>

          <div className="text-xs sm:text-sm text-slate-500 font-medium">
            <span className="text-emerald-700 cursor-pointer hover:underline" onClick={onBackToHome}>হোম</span>
            <span className="mx-2">/</span>
            <span className="text-slate-800 font-bold">আমাদের সম্পর্কে</span>
          </div>
        </div>

        {/* Hero Banner Header of About Page */}
        <div className="bg-gradient-to-br from-[#024a2c] via-[#045332] to-[#087443] text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl shadow-emerald-950/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
            {/* Arabic Bismillah */}
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-200 text-sm font-serif-bn">
              <span>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
            </div>

            <h1 className="font-serif-bn font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.2] mb-3 text-center">
              {FOUNDATION_INFO.name}
              <span className="block text-emerald-300 font-solaiman text-lg sm:text-2xl lg:text-3xl mt-2.5 font-medium tracking-wide text-center">
                কুরআন-সুন্নাহর আলোকে, উম্মাহর খেদমতে।
              </span>
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base lg:text-lg font-solaiman font-normal leading-relaxed mb-6 max-w-2xl text-center">
              শিক্ষা, দাওয়াহ ও মানবকল্যাণে নিবেদিত একটি অরাজনৈতিক সেবামূলক প্রতিষ্ঠান।
            </p>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-emerald-100">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-400/20 shadow-xs">
                <Award className="w-4 h-4 text-amber-300" />
                <span><strong>উদ্যোগ ও প্রতিষ্ঠাতা:</strong> হাফিজুর রহমান সিদ্দিক (বগুড়া)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-400/20">
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span><strong>প্রতিষ্ঠাকাল:</strong> ১লা জানুয়ারি ২০২৩</span>
              </span>
            </div>
          </div>
        </div>

        {/* Core Heartfelt Statement */}
        <div className="bg-emerald-50/80 border-l-4 border-[#087443] rounded-2xl p-6 sm:p-8 mb-12 shadow-sm space-y-5">
          <div className="text-center pb-2 border-b border-emerald-200/60">
            <h3 className="font-fiona text-2xl sm:text-3xl lg:text-4xl text-[#045332] font-bold tracking-normal inline-block">
              আমাদের প্রেরণা
            </h3>
          </div>
          <p className="font-solaiman text-slate-800 text-lg sm:text-xl lg:text-2xl leading-relaxed font-normal">
            “আমাদের চারপাশের অসহায় মানুষের নীরব হাহাকার মুমিনের অন্তরে গভীর তোলপাড় সৃষ্টি করে। একমাত্র রবের সন্তুষ্টির আশায় তাঁদের মুখে একটু হাসি ফোটানো এবং খাদ্য, চিকিৎসা ও দ্বীনি শিক্ষার পথ সুগম করা দুনিয়াতে সুখময় জীবন এবং আখেরাতে নাজাতের উসীলা হবে, ইনশাআল্লাহ।”
          </p>
          <p className="font-solaiman text-slate-800 text-lg sm:text-xl lg:text-2xl leading-relaxed font-normal pt-3 border-t border-emerald-200/60">
            উম্মাহর এই ক্রান্তিলগ্নে সেবাকে ইবাদত মনে করে এবং মানবিক দায়বদ্ধতা থেকে ১লা জানুয়ারি ২০২৩ ঈসায়ীতে “হাফিজুর রহমান সিদ্দিক (বগুড়া)”-এর উদ্যোগে প্রতিষ্ঠিত হয় ‘জিকরুল্লাহ ফাউন্ডেশন’—যা শিক্ষা, দাওয়াহ ও মানবকল্যাণে নিবেদিত একটি অরাজনৈতিক সেবামূলক প্রতিষ্ঠান।
          </p>
        </div>

        {/* Section 1: আমাদের লক্ষ্য (Mission) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-md mb-10">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#087443] text-white flex items-center justify-center shadow-md shadow-emerald-900/20 shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase block font-sans">
                Our Mission
              </span>
              <h2 className="font-serif-bn font-bold text-2xl sm:text-3xl text-slate-900">
                আমাদের লক্ষ্য (Mission)
              </h2>
            </div>
          </div>

          {/* Mission Core Quote */}
          <div className="bg-[#f6faf8] border-l-4 border-emerald-600 rounded-r-2xl p-5 mb-8">
            <p className="font-solaiman text-slate-900 text-base sm:text-lg leading-relaxed font-medium">
              “রাসূলুল্লাহ (ﷺ)-এর অনুকম্পা ও সুন্নাহর চিরায়ত আলোকে পাথেয় করে—অসহায় উম্মাহর মুখে হাসি ফোটানো, ইলমে দ্বীনের আলো ছড়ানো এবং একটি স্থায়ী স্বাবলম্বী সমাজ বিনির্মাণে আমরা মাঠপর্যায়ে নিবেদিত।”
            </p>
          </div>

          {/* 4 Points in Modern Redesigned Cards */}
          <div className="space-y-5">
            {/* Point 1 */}
            <div className="relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#087443] shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-emerald-200 transition-all duration-300 group">
              {/* Large Translucent Watermark Number */}
              <span className="absolute right-4 -bottom-4 text-7xl sm:text-8xl font-black text-slate-900/[0.04] font-serif select-none pointer-events-none group-hover:text-emerald-950/[0.07] group-hover:scale-105 transition-all duration-300 tracking-tighter">
                01
              </span>

              {/* Badges: Gradient Circular Badge + Colorful Illustrative Vector Icon */}
              <div className="flex items-center sm:flex-col gap-2.5 shrink-0 z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] text-white font-bold text-base sm:text-lg flex items-center justify-center shadow-md shadow-emerald-900/20 font-serif-bn ring-4 ring-emerald-50 group-hover:ring-emerald-100 transition-all">
                  ১
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/60 flex items-center justify-center border border-emerald-200/90 shadow-2xs group-hover:scale-105 group-hover:border-emerald-300 group-hover:shadow-md transition-all duration-300 p-1.5 shrink-0">
                  <FoodIllustration className="w-full h-full" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2 font-serif-bn tracking-tight flex items-center gap-2">
                  <span>সুন্নাহর অনুসরণে খাদ্য-হাদিয়া</span>
                  <span className="hidden sm:inline-block w-8 h-[2px] bg-emerald-300/80 rounded-full"></span>
                </h3>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed font-solaiman font-normal">
                  অসহায়, এতিম, মিসকিন, বিধবা ও প্রয়োজনগ্রস্ত পরিবারের দ্বারে ভালোবাসার খাবার পৌঁছে দেওয়া।
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#087443] shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-emerald-200 transition-all duration-300 group">
              {/* Large Translucent Watermark Number */}
              <span className="absolute right-4 -bottom-4 text-7xl sm:text-8xl font-black text-slate-900/[0.04] font-serif select-none pointer-events-none group-hover:text-emerald-950/[0.07] group-hover:scale-105 transition-all duration-300 tracking-tighter">
                02
              </span>

              {/* Badges: Gradient Circular Badge + Colorful Illustrative Vector Icon */}
              <div className="flex items-center sm:flex-col gap-2.5 shrink-0 z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] text-white font-bold text-base sm:text-lg flex items-center justify-center shadow-md shadow-emerald-900/20 font-serif-bn ring-4 ring-emerald-50 group-hover:ring-emerald-100 transition-all">
                  ২
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/60 flex items-center justify-center border border-emerald-200/90 shadow-2xs group-hover:scale-105 group-hover:border-emerald-300 group-hover:shadow-md transition-all duration-300 p-1.5 shrink-0">
                  <MedicalIllustration className="w-full h-full" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2 font-serif-bn tracking-tight flex items-center gap-2">
                  <span>বিনামূল্যে জরুরি চিকিৎসা ও স্বাস্থ্যসেবা</span>
                  <span className="hidden sm:inline-block w-8 h-[2px] bg-emerald-300/80 rounded-full"></span>
                </h3>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed font-solaiman font-normal">
                  দুর্গম ও অবহেলিত অঞ্চলের অসচ্ছল মানুষের কাছে বিশেষজ্ঞ চিকিৎসকের পরামর্শ, প্রয়োজনীয় ওষুধ ও জরুরি সেবা সহজে পৌঁছে দেওয়া।
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#087443] shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-emerald-200 transition-all duration-300 group">
              {/* Large Translucent Watermark Number */}
              <span className="absolute right-4 -bottom-4 text-7xl sm:text-8xl font-black text-slate-900/[0.04] font-serif select-none pointer-events-none group-hover:text-emerald-950/[0.07] group-hover:scale-105 transition-all duration-300 tracking-tighter">
                03
              </span>

              {/* Badges: Gradient Circular Badge + Colorful Illustrative Vector Icon */}
              <div className="flex items-center sm:flex-col gap-2.5 shrink-0 z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] text-white font-bold text-base sm:text-lg flex items-center justify-center shadow-md shadow-emerald-900/20 font-serif-bn ring-4 ring-emerald-50 group-hover:ring-emerald-100 transition-all">
                  ৩
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/60 flex items-center justify-center border border-emerald-200/90 shadow-2xs group-hover:scale-105 group-hover:border-emerald-300 group-hover:shadow-md transition-all duration-300 p-1.5 shrink-0">
                  <EducationIllustration className="w-full h-full" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2 font-serif-bn tracking-tight flex items-center gap-2">
                  <span>দ্বীনি ও আদর্শ শিক্ষা বিস্তার</span>
                  <span className="hidden sm:inline-block w-8 h-[2px] bg-emerald-300/80 rounded-full"></span>
                </h3>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed font-solaiman font-normal">
                  এতিম ও অসচ্ছল মেধাবী শিক্ষার্থীদের জন্য বিশুদ্ধ কুরআন তিলাওয়াত, কুরআন হাদীসের ইলম এবং যুগোপযোগী উচ্চ শিক্ষা ও উন্নত নৈতিকতার স্থায়ী ব্যবস্থা গড়ে তোলা।
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#087443] shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-emerald-200 transition-all duration-300 group">
              {/* Large Translucent Watermark Number */}
              <span className="absolute right-4 -bottom-4 text-7xl sm:text-8xl font-black text-slate-900/[0.04] font-serif select-none pointer-events-none group-hover:text-emerald-950/[0.07] group-hover:scale-105 transition-all duration-300 tracking-tighter">
                04
              </span>

              {/* Badges: Gradient Circular Badge + Colorful Illustrative Vector Icon */}
              <div className="flex items-center sm:flex-col gap-2.5 shrink-0 z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] text-white font-bold text-base sm:text-lg flex items-center justify-center shadow-md shadow-emerald-900/20 font-serif-bn ring-4 ring-emerald-50 group-hover:ring-emerald-100 transition-all">
                  ৪
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/60 flex items-center justify-center border border-emerald-200/90 shadow-2xs group-hover:scale-105 group-hover:border-emerald-300 group-hover:shadow-md transition-all duration-300 p-1.5 shrink-0">
                  <SelfRelianceIllustration className="w-full h-full" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2 font-serif-bn tracking-tight flex items-center gap-2">
                  <span>স্থায়ী আত্মনির্ভরশীলতা প্রকল্প</span>
                  <span className="hidden sm:inline-block w-8 h-[2px] bg-emerald-300/80 rounded-full"></span>
                </h3>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed font-solaiman font-normal">
                  অসহায় ও অসচ্ছল পরিবারগুলোর দারিদ্র্য বিমোচনে গবাদিপশু বিতরণ, ক্ষুদ্র ব্যবসা ফান্ড ও প্রয়োজনীয় কারিগরি উপকরণ প্রদানের মাধ্যমে স্থায়ীভাবে স্বাবলম্বী করে তোলা।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: আমাদের উদ্দেশ্য (Vision) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-md mb-12">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#045332] text-amber-300 flex items-center justify-center shadow-md shadow-emerald-900/20 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase block font-sans">
                Our Vision
              </span>
              <h2 className="font-serif-bn font-bold text-2xl sm:text-3xl text-slate-900">
                আমাদের উদ্দেশ্য (Vision)
              </h2>
            </div>
          </div>

          {/* Vision Core Quote */}
          <div className="bg-gradient-to-r from-emerald-50/80 to-amber-50/50 border-l-4 border-amber-600 rounded-r-2xl p-5 mb-8">
            <p className="font-solaiman text-slate-900 text-base sm:text-lg leading-relaxed font-medium">
              “রাসূলুল্লাহ (ﷺ)-এর চিরন্তন জীবনাদর্শকে বুকে ধারণ করে নিঃস্বার্থ মানবসেবার মাধ্যমে মহান রবের সন্তুষ্টি অর্জন করা; এবং একটি নৈতিক, ইনসাফভিত্তিক ও ঈমানী আলোয় আলোকিত সমাজ বিনির্মাণ করা।”
            </p>
          </div>

          {/* 2 Points in Modern Redesigned Cards */}
          <div className="space-y-5">
            {/* Point 1 */}
            <div className="relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-amber-500 shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-amber-300 transition-all duration-300 group">
              {/* Large Translucent Watermark Number */}
              <span className="absolute right-4 -bottom-4 text-7xl sm:text-8xl font-black text-slate-900/[0.04] font-serif select-none pointer-events-none group-hover:text-amber-950/[0.07] group-hover:scale-105 transition-all duration-300 tracking-tighter">
                01
              </span>

              {/* Badges: Gradient Circular Badge + Colorful Illustrative Vector Icon */}
              <div className="flex items-center sm:flex-col gap-2.5 shrink-0 z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#d97706] via-[#b45309] to-[#92400e] text-white font-bold text-base sm:text-lg flex items-center justify-center shadow-md shadow-amber-950/20 font-serif-bn ring-4 ring-amber-50 group-hover:ring-amber-100 transition-all">
                  ১
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-50/90 via-white to-emerald-50/60 flex items-center justify-center border border-amber-200/90 shadow-2xs group-hover:scale-105 group-hover:border-amber-300 group-hover:shadow-md transition-all duration-300 p-1.5 shrink-0">
                  <YouthAwakeningIllustration className="w-full h-full" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2 font-serif-bn tracking-tight flex items-center gap-2">
                  <span>তরুণ প্রজন্মের ঈমানী জাগরণ</span>
                  <span className="hidden sm:inline-block w-8 h-[2px] bg-amber-400/80 rounded-full"></span>
                </h3>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed font-solaiman font-normal">
                  প্রজ্ঞাপূর্ণ দাওয়াহ, বুদ্ধিবৃত্তিক আলোচনা ও দরদি দিকনির্দেশনার মাধ্যমে যুবসমাজকে ডিজিটাল ফিতনা ও নৈতিক অবক্ষয় থেকে রক্ষা করে কুরআন-সুন্নাহর দীপ্ত আদর্শে গড়ে তোলা।
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#087443] shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-emerald-200 transition-all duration-300 group">
              {/* Large Translucent Watermark Number */}
              <span className="absolute right-4 -bottom-4 text-7xl sm:text-8xl font-black text-slate-900/[0.04] font-serif select-none pointer-events-none group-hover:text-emerald-950/[0.07] group-hover:scale-105 transition-all duration-300 tracking-tighter">
                02
              </span>

              {/* Badges: Gradient Circular Badge + Colorful Illustrative Vector Icon */}
              <div className="flex items-center sm:flex-col gap-2.5 shrink-0 z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#087443] via-[#045332] to-[#023e24] text-white font-bold text-base sm:text-lg flex items-center justify-center shadow-md shadow-emerald-900/20 font-serif-bn ring-4 ring-emerald-50 group-hover:ring-emerald-100 transition-all">
                  ২
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/60 flex items-center justify-center border border-emerald-200/90 shadow-2xs group-hover:scale-105 group-hover:border-emerald-300 group-hover:shadow-md transition-all duration-300 p-1.5 shrink-0">
                  <SadaqahJariyahIllustration className="w-full h-full" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-bold text-slate-900 text-lg sm:text-xl font-serif-bn tracking-tight">
                    আখেরাতের সঞ্চয়
                  </h3>
                  <span className="px-2.5 py-0.5 text-xs font-serif-bn rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                    صدقة جارية
                  </span>
                  <span className="hidden sm:inline-block w-8 h-[2px] bg-emerald-400/80 rounded-full"></span>
                </div>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed font-solaiman font-normal">
                  লোক দেখানো মোহ ছেড়ে ইখলাসের সাথে <strong className="text-emerald-800 font-semibold">'সাদাকায়ে জারিয়াহ'</strong>র অংশীদার হওয়া—যা দুনিয়ায় দেবে আত্মিক প্রশান্তি, আর মৃত্যুর পর অন্ধকার কবরে উপহার দেবে অবিরাম সাওয়াব; যেন মহান রবের সন্তুষ্টিতে চূড়ান্ত ঠিকানা হয় জান্নাত। ইনশাআল্লাহ।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Executive Board Section (Matched to requested design) */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>নেতৃত্ব ও পরিচালনা</span>
            </div>
            <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl text-slate-900 mb-3 tracking-tight">
              আমাদের কার্যনির্বাহী পরিষদ
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              সততা, স্বচ্ছতা ও দক্ষতার সাথে জিকরুল্লাহ ফাউন্ডেশনের কার্যক্রম পরিচালনায় আমাদের নিবেদিত কার্যনির্বাহী পরিষদ।
            </p>
          </div>

          <div className="space-y-6">
            {/* Single Unified Professional Message Card */}
            <div className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafdfb] to-[#f4f8f5] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 border border-emerald-100 shadow-xl shadow-emerald-950/5">
              
              {/* Background Watermark Quote Symbol */}
              <div className="absolute top-4 right-8 text-emerald-900/[0.04] text-8xl sm:text-9xl font-serif select-none pointer-events-none leading-none">
                “
              </div>

              {/* 1. Header: Founder Photo, Identity & Badges */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-emerald-100/80 relative z-10 text-center sm:text-left">
                {/* Photo with Emerald Ring & Social Badge */}
                <div className="relative shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-emerald-600 shadow-xl ring-4 ring-emerald-100/90 bg-slate-100">
                    <img
                      src="https://res.cloudinary.com/dlklqihg6/image/upload/v1791215813/zchzkth66qkenrlqmjmg.jpg"
                      alt="Hafizur Rahman Siddik (Bogura)"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile"
                    className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#1877f2] text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors font-bold text-xs border-2 border-white"
                    title="Facebook"
                  >
                    f
                  </a>
                </div>

                {/* Identity Info */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>প্রতিষ্ঠাতা ও চেয়ারম্যানের বার্তা</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-2xl sm:text-3xl lg:text-4xl tracking-wide mb-2 font-armwrestler">
                    Hafizur Rahman Siddik (Bogura)
                  </h3>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                    <span className="px-3.5 py-1 rounded-full bg-emerald-700 text-white text-xs font-bold tracking-wider uppercase shadow-2xs">
                      Founder & Chairman
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-sans-bn">
                      জিকরুল্লাহ ফাউন্ডেশন
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Message Body (Smooth Flow with line-height: 1.8) */}
              <div className="py-8 space-y-6 font-solaiman text-slate-700 text-base sm:text-[17.5px] leading-[1.8] relative z-10 text-left">
                {/* Paragraph 1: Founder's Deep Feeling */}
                <p className="text-slate-800 font-normal">
                  অসহায় মানুষের নীরব কান্না আর হাহাকার দেখলে আমার কলিজায় রক্তক্ষরণ হয়। সেই দরদি তাগিদ থেকেই আত্মপ্রকাশ করেছে <strong className="text-emerald-900 font-semibold">‘জিকরুল্লাহ ফাউন্ডেশন’</strong>। এই ক্ষণস্থায়ী দুনিয়ায় টাকা-পয়সা আজ আছে, কাল নেই—এটাই সম্পদের বাস্তবতা। আসল সফলতা তো লুকিয়ে আছে আল্লাহর সন্তুষ্টির উদ্দেশ্যে অসহায় মানুষের কল্যাণে তা ব্যয় করার মাঝে।
                </p>

                {/* Quran & Primary Hadith Inset Box (Soft Green Side-Border) */}
                <div className="bg-[#f6faf8] rounded-2xl p-5 sm:p-7 border border-emerald-100 border-l-4 border-l-[#087443] shadow-2xs space-y-4">
                  <p className="text-slate-800 font-medium">
                    মহান রব ঘোষণা করেছেন— <span className="italic text-emerald-950 font-normal">‘যারা আল্লাহর সন্তুষ্টির উদ্দেশ্যে গোপনে ও প্রকাশ্যে নিজেদের সম্পদ ব্যয় করে, তাদের জন্য রবের নিকট রয়েছে মহাপুরস্কার। আর আল্লাহর রাস্তায় দেওয়া এই সামান্য দানকে তিনি বহুগুণ বৃদ্ধি করে দেন।’</span> <span className="text-xs sm:text-sm text-emerald-700 font-sans-bn font-semibold">(সূরা আল-বাকারা: ২৬১, ২৭৪)</span>।
                  </p>
                  
                  <div className="border-t border-emerald-100/90 pt-3.5 space-y-3.5">
                    <p>
                      রাসূলুল্লাহ (ﷺ) বলেছেন— <span className="font-serif-bn font-bold text-emerald-900">«مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ»</span> ‘দানের কারণে কখনো সম্পদের ঘাটতি হয় না’ <span className="text-xs sm:text-sm text-emerald-700 font-sans-bn font-semibold">(সহিহ মুসলিম: ২৫৮৮)</span>। আপনি যখন আল্লাহর সন্তুষ্টিতে ব্যয় করেন, তখন আসমানের ফেরেশতারা দোয়া করেন— <span className="font-serif-bn font-bold text-emerald-900">«اللَّهُمَّ أَعْطِ مُنْفِقًا خَلَفًا»</span> ‘হে আল্লাহ! দানকারীকে তার দানের উত্তম প্রতিদান দিন’ <span className="text-xs sm:text-sm text-emerald-700 font-sans-bn font-semibold">(সহিহ বুখারী: ১৪৪২)</span>।
                    </p>
                    <p>
                      দান হলো মুমিনের জীবনের বহুমুখী রহমত। কারণ— <span className="font-serif-bn font-bold text-emerald-900">«وَالصَّدَقَةُ بُرْهَانٌ»</span> ‘সদকা হলো ঈমানের অকাট্য দলিল’ <span className="text-xs sm:text-sm text-emerald-700 font-sans-bn font-semibold">(সহিহ মুসলিম: ৪২২)</span>, <span className="font-serif-bn font-bold text-emerald-900">«وَالصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ»</span> ‘সদকা গুনাহসমূহকে এভাবে মিটিয়ে দেয়, যেমন পানি আগুনকে নিভিয়ে দেয়’ <span className="text-xs sm:text-sm text-emerald-700 font-sans-bn font-semibold">(জামে আত-তিরমিজি: ২৬১৬)</span>, এবং <span className="font-serif-bn font-bold text-emerald-900">«إِنَّ الصَّدَقَةَ لَتُطْفِئُ عَنْ أَهْلِهَا حَرَّ الْقُبُورِ»</span> ‘নিশ্চয়ই সদকা দানকারীর কবরের উত্তাপ নিভিয়ে দেয়’ <span className="text-xs sm:text-sm text-emerald-700 font-sans-bn font-semibold">(সিলসিলাতুস সহীহাহ: ৩৪৮৪)</span>।
                    </p>
                  </div>
                </div>

                {/* Medical Hadith Inset Box (Soft Amber Side-Border) */}
                <div className="bg-[#fffdf7] rounded-2xl p-5 sm:p-6 border border-amber-200/80 border-l-4 border-l-amber-500 shadow-2xs">
                  <p className="text-slate-800">
                    এমনকি প্রিয় নবী (ﷺ) নির্দেশ দিয়েছেন— <span className="font-serif-bn font-bold text-amber-950">«دَاوُوا مَرْضَاكُمْ بِالصَّدَقَةِ»</span> ‘তোমরা দান-সদকার মাধ্যমে তোমাদের অসুস্থদের চিকিৎসা করো’ <span className="text-xs sm:text-sm text-amber-800 font-sans-bn font-semibold">(সহিহুল জামে: ৩৩৫৮)</span>।
                  </p>
                </div>

                {/* Paragraph 3: Warm Invitation */}
                <p className="text-slate-800 font-normal pt-1">
                  আমরা অনুগ্রহপ্রার্থী হয়ে কারো দ্বারে কিছু চাই না; আমাদের আদর্শের সাথে আপনার মনের টান মিললেই স্বতঃস্ফূর্তভাবে এই খেদমতে যুক্ত হতে পারেন। আপনার সামান্য সহানুভূতিই হতে পারে কারো মুখে এক চিলতে হাসি ফোটানোর উসিলা। পরকালের চিরস্থায়ী কল্যাণ অর্জনে—‘জিকরুল্লাহ ফাউন্ডেশন’ পরিবারে আপনাকে উষ্ণ স্বাগতম।
                </p>
              </div>

              {/* 3. Footer: Digital Signature + Action Button */}
              <div className="pt-8 border-t border-emerald-100/90 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                {/* Signature & Identity */}
                <div className="text-center sm:text-left">
                  <span className="text-[11px] text-slate-400 uppercase tracking-widest font-sans block mb-0.5">
                    ডিজিটাল স্বাক্ষর
                  </span>
                  <div className="font-signature text-3xl sm:text-4xl text-emerald-800 leading-tight mb-1 select-none">
                    Hafizur Rahman Siddik
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-serif-bn">
                    হাফিজুর রহমান সিদ্দিক (বগুড়া)
                  </div>
                  <div className="text-xs text-emerald-700 font-medium font-sans-bn">
                    প্রতিষ্ঠাতা ও চেয়ারম্যান, জিকরুল্লাহ ফাউন্ডেশন
                  </div>
                </div>

                {/* Attractive Call-to-Action Button */}
                <div>
                  <button
                    onClick={() => onOpenDonation('সাধারণ সদকা ও দান')}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#087443] to-[#034e2c] hover:from-[#0a8c51] hover:to-[#056338] active:scale-95 text-white font-bold text-base shadow-lg shadow-emerald-900/25 transition-all duration-300 cursor-pointer group"
                  >
                    <Heart className="w-5 h-5 fill-white group-hover:scale-110 transition-transform duration-300" />
                    <span>খেদমতে শরীক হোন</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>

            {/* Executive Committee & Trustee Members Grid (Matched to screenshot ssss.jpg) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {EXECUTIVE_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all text-center flex flex-col items-center justify-center group"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-emerald-100/90 shadow-sm mb-4 bg-slate-100 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="font-serif-bn font-bold text-slate-900 text-base sm:text-lg mb-1 tracking-tight">
                    {member.name}
                  </h3>
                  <span className="text-xs sm:text-[13px] text-slate-500 font-medium font-sans-bn block">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: আমাদের মূল ভিত্তি ও আমানতদারি */}
        <div className="bg-[#fafcfb] rounded-3xl p-6 sm:p-10 border border-emerald-100 mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase block mb-1">
              আমাদের কর্মনীতি ও প্রতিশ্রুতি
            </span>
            <h3 className="font-serif-bn font-bold text-2xl text-slate-900">
              যাঁদের জন্য আমরা কাজ করি
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-2xs">
              <ShieldCheck className="w-6 h-6 text-emerald-600 mb-3" />
              <h4 className="font-bold text-slate-900 text-base mb-1">১০০% আমানতদারি</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                আপনার দেওয়া যাকাত ও সদকার প্রতিটি পয়সা সুনির্দিষ্ট শরীয়তসম্মত খাতে শতভাগ সততার সাথে খরচ করা হয়।
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-2xs">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-3" />
              <h4 className="font-bold text-slate-900 text-base mb-1">মাঠপর্যায়ে যাচাই</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                স্বেচ্ছাসেবকদের সরাসরি যাচাই-বাছাই ও মাঠপর্যায়ের অনুসন্ধানের মাধ্যমে কেবল প্রকৃত হকদারদের মাঝেই সাহায্য বিতরণ করা হয়।
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-2xs">
              <HeartHandshake className="w-6 h-6 text-emerald-600 mb-3" />
              <h4 className="font-bold text-slate-900 text-base mb-1">স্থায়ী পুনর্বাসন</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                এককালীন সাহায্যের পাশাপাশি মানুষকে স্বাবলম্বী করে তোলা যেন তাঁরা ভবিষ্যতে অন্যের সাহায্য ছাড়াই বাঁচতে পারেন।
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-gradient-to-r from-emerald-900 to-[#045332] text-white rounded-3xl p-8 sm:p-10 text-center shadow-xl">
          <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl mb-3">
            আপনিও এই মহতী কাফেলার অংশীদার হোন
          </h3>
          <p className="text-emerald-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-6 font-solaiman">
            দ্বীন প্রচার, অসহায় মানুষের মুখে অন্ন তুলে দেওয়া এবং সদকায়ে জারিয়াহর স্থায়ী সাওয়াব অর্জনে আপনার আন্তরিক দু‘আ ও সহযোগিতা আমাদের একান্ত প্রেরণা।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenDonation('সাধারণ সদকা ও দান')}
              className="px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
            >
              খেদমতে শরীক হোন
            </button>
            <button
              onClick={onOpenVolunteer}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm transition-all active:scale-95 cursor-pointer"
            >
              স্বেচ্ছাসেবক হিসেবে যোগ দিন
            </button>
            <button
              onClick={onBackToHome}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-emerald-100 font-semibold text-sm transition-all active:scale-95 cursor-pointer"
            >
              ← মূল পাতায় ফিরে যান
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
