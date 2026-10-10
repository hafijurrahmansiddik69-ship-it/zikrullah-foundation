import React from 'react';
import { ArrowRight, MapPin, Users } from 'lucide-react';

interface CoreActivitiesSectionProps {
  onSelectActivity?: (activityTitle: string) => void;
  onOpenDonation?: (category?: string) => void;
}

export interface ActivityCardData {
  id: string;
  categoryTag: string;
  mainTitle: string;
  description: string;
  location: string;
  beneficiaries: string;
  buttonText: string;
  accentColor: {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    iconBg: string;
    glow: string;
    borderHover: string;
    btnHover: string;
  };
}

export const CORE_ACTIVITIES: ActivityCardData[] = [
  {
    id: 'food-nutrition',
    categoryTag: 'খাদ্য ও পুষ্টি সহায়তা',
    mainTitle: 'অসহায় ও বিধবা পরিবারে খাদ্য বিতরণ',
    description: 'সুবিধাবঞ্চিত ও বিধবা পরিবারগুলোর কষ্টের দিনগুলোতে সম্মানজনক উপায়ে পুষ্টিকর খাদ্য ও নিত্যপণ্য পৌঁছে দিয়ে তাদের মুখে একটু স্বস্তির হাসি ফোটানোর বিনীত চেষ্টা করি।',
    location: 'মোকামতলা, বগুড়া',
    beneficiaries: '৩৫০+ পরিবার',
    buttonText: 'বিস্তারিত দেখুন →',
    accentColor: {
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200/90',
      badgeText: 'text-emerald-800',
      badgeBorder: 'border-emerald-200',
      iconBg: 'from-emerald-500/15 via-emerald-500/10 to-transparent border-emerald-200/80 text-emerald-700 shadow-emerald-900/5',
      glow: 'from-emerald-400/10 via-transparent to-transparent',
      borderHover: 'hover:border-emerald-300 hover:shadow-emerald-900/10',
      btnHover: 'hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300',
    }
  },
  {
    id: 'education-talent',
    categoryTag: 'শিক্ষা ও মেধা বিকাশ',
    mainTitle: 'এতিম ও মেধাবী শিক্ষার্থী সহায়তা',
    description: 'আর্থিক সংকটের কারণে যেন কোনো এতিম বা মেধাবী শিশুর শিক্ষার আলো নিভে না যায়, সেজন্য শিক্ষাবৃত্তি ও প্রয়োজনীয় উপকরণ দিয়ে তাদের স্বপ্নপূরণের পথে পাশে থাকার বিনীত প্রয়াস চালাই।',
    location: 'বগুড়া ও পার্শ্ববর্তী এলাকা',
    beneficiaries: '১০০+ শিক্ষার্থী',
    buttonText: 'বিস্তারিত দেখুন →',
    accentColor: {
      badgeBg: 'bg-blue-50 text-blue-800 border-blue-200/90',
      badgeText: 'text-blue-800',
      badgeBorder: 'border-blue-200',
      iconBg: 'from-blue-500/15 via-blue-500/10 to-transparent border-blue-200/80 text-blue-700 shadow-blue-900/5',
      glow: 'from-blue-400/10 via-transparent to-transparent',
      borderHover: 'hover:border-blue-300 hover:shadow-blue-900/10',
      btnHover: 'hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300',
    }
  },
  {
    id: 'health-medical',
    categoryTag: 'স্বাস্থ্য ও চিকিৎসা',
    mainTitle: 'প্রয়োজনগ্রস্ত পরিবারে চিকিৎসা সহায়তা',
    description: 'সন্তান থাকা সত্ত্বেও অবহেলিত ও খোঁজহীন মা-বাবা এবং অসহায় রোগীদের ওষুধপত্র ও জরুরি চিকিৎসার সুব্যবস্থা করে তাদের কষ্ট কিছুটা লাঘব করার নিরন্তর চেষ্টা করি।',
    location: 'মাঠপর্যায়',
    beneficiaries: '২০০+ পরিবার',
    buttonText: 'বিস্তারিত দেখুন →',
    accentColor: {
      badgeBg: 'bg-rose-50 text-rose-800 border-rose-200/90',
      badgeText: 'text-rose-800',
      badgeBorder: 'border-rose-200',
      iconBg: 'from-rose-500/15 via-rose-500/10 to-transparent border-rose-200/80 text-rose-700 shadow-rose-900/5',
      glow: 'from-rose-400/10 via-transparent to-transparent',
      borderHover: 'hover:border-rose-300 hover:shadow-rose-900/10',
      btnHover: 'hover:bg-rose-50 hover:text-rose-800 hover:border-rose-300',
    }
  },
  {
    id: 'self-reliance',
    categoryTag: 'আত্মকর্মসংস্থান',
    mainTitle: 'অসহায় পরিবারের স্বাবলম্বীকরণ ও পুনর্বাসন',
    description: 'অসহায় মা-বোনদের গৃহপালিত পশু ও সেলাই মেশিন, কর্মক্ষম বাবাদের অটোরিকশাসহ আয়ের পথ তৈরি, বেকার যুবকদের কর্মসংস্থান এবং সুপেয় পানির ব্যবস্থার মাধ্যমে পরিবারগুলোকে স্থায়ীভাবে স্বাবলম্বী করে তোলাই আমাদের মূল লক্ষ্য।',
    location: 'পল্লী অঞ্চল',
    beneficiaries: 'বহু পরিবার',
    buttonText: 'বিস্তারিত দেখুন →',
    accentColor: {
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200/90',
      badgeText: 'text-amber-900',
      badgeBorder: 'border-amber-200',
      iconBg: 'from-amber-500/15 via-amber-500/10 to-transparent border-amber-200/80 text-amber-700 shadow-amber-900/5',
      glow: 'from-amber-400/10 via-transparent to-transparent',
      borderHover: 'hover:border-amber-300 hover:shadow-amber-900/10',
      btnHover: 'hover:bg-amber-50 hover:text-amber-900 hover:border-amber-300',
    }
  }
];

export const CoreActivitiesSection: React.FC<CoreActivitiesSectionProps> = ({
  onSelectActivity,
  onOpenDonation
}) => {
  const handleClickAction = (title: string, category: string) => {
    if (onSelectActivity) {
      onSelectActivity(title);
    } else if (onOpenDonation) {
      onOpenDonation(`${title} (${category})`);
    }
  };

  return (
    <section id="core-activities" className="py-20 sm:py-24 bg-gradient-to-b from-white via-[#f7faf8] to-[#f2f7f4] relative overflow-hidden">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-96 bg-gradient-to-r from-emerald-100/40 via-teal-100/30 to-amber-100/30 blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#045332] text-xs sm:text-sm font-semibold mb-3.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="font-sans-bn tracking-wide">আমাদের মূল কর্মপ্রয়াস</span>
          </div>
          <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl lg:text-5xl text-[#045332] tracking-tight leading-tight mb-4">
            জিকরুল্লাহ ফাউন্ডেশনের মূল ৪টি কার্যক্রম
          </h2>
          <p className="text-slate-600 font-solaiman text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            সুন্নাহর আলোয় অনুপ্রাণিত হয়ে আর্তমানবতার দ্বারে দ্বারে খাদ্য, শিক্ষা, চিকিৎসা ও স্থায়ী স্বাবলম্বীকরণের আলো পৌঁছে দেওয়ার সুনির্দিষ্ট রূপরেখা।
          </p>
        </div>

        {/* 4 Core Activity Cards Grid */}
        {/* 1 column on mobile, 2 columns on tablet, 4 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          
          {/* CARD 1: খাদ্য ও পুষ্টি সহায়তা */}
          <article className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Corner Glow on hover */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-emerald-100/60 to-transparent rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-90" />

            <div>
              {/* Top Accent Badge with Minimal Modern SVG Icon */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/70 border border-emerald-200/80 text-emerald-700 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-emerald-300 group-hover:shadow-md transition-all duration-300 shrink-0">
                  {/* Food / Nutrition icon 🍲 */}
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="2" x2="6" y2="5" />
                    <line x1="10" y1="2" x2="10" y2="5" />
                    <line x1="14" y1="2" x2="14" y2="5" />
                  </svg>
                </div>

                {/* Pill-shaped Category Tag */}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-sans-bn tracking-wide">
                  খাদ্য ও পুষ্টি সহায়তা
                </span>
              </div>

              {/* Main Title */}
              <h3 className="font-serif-bn font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#045332] transition-colors leading-snug mb-3 min-h-[56px] flex items-center">
                অসহায় ও বিধবা পরিবারে খাদ্য বিতরণ
              </h3>

              {/* Description */}
              <p className="text-slate-600 font-solaiman text-[14.5px] leading-relaxed mb-6 font-normal">
                সুবিধাবঞ্চিত ও বিধবা পরিবারগুলোর কষ্টের দিনগুলোতে সম্মানজনক উপায়ে পুষ্টিকর খাদ্য ও নিত্যপণ্য পৌঁছে দিয়ে তাদের মুখে একটু স্বস্তির হাসি ফোটানোর বিনীত চেষ্টা করি।
              </p>
            </div>

            {/* Bottom Meta & Action */}
            <div className="pt-4 border-t border-slate-100/90 space-y-4">
              {/* Distinct Badges for Location & Beneficiaries */}
              <div className="flex flex-col gap-2 text-xs font-sans-bn text-slate-700">
                <div className="flex items-center gap-1.5 bg-slate-50/90 px-2.5 py-1.5 rounded-xl border border-slate-200/60">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>স্থান:</strong> মোকামতলা, বগুড়া</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50/90 px-2.5 py-1.5 rounded-xl border border-slate-200/60">
                  <Users className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>উপকারভোগী:</strong> ৩৫০+ পরিবার</span>
                </div>
              </div>

              {/* Sleek Button Link */}
              <button
                type="button"
                onClick={() => handleClickAction('অসহায় ও বিধবা পরিবারে খাদ্য বিতরণ', 'খাদ্য ও পুষ্টি সহায়তা')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-emerald-600 text-slate-800 hover:text-white border border-slate-200/80 hover:border-emerald-600 font-sans-bn font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer group/btn"
              >
                <span>বিস্তারিত দেখুন</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>

          {/* CARD 2: শিক্ষা ও মেধা বিকাশ */}
          <article className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Corner Glow on hover */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-blue-100/60 to-transparent rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-90" />

            <div>
              {/* Top Accent Badge with Minimal Modern SVG Icon */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/70 border border-blue-200/80 text-blue-700 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-blue-300 group-hover:shadow-md transition-all duration-300 shrink-0">
                  {/* Graduation Cap / Book icon 🎓 */}
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>

                {/* Pill-shaped Category Tag */}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/80 font-sans-bn tracking-wide">
                  শিক্ষা ও মেধা বিকাশ
                </span>
              </div>

              {/* Main Title */}
              <h3 className="font-serif-bn font-bold text-lg sm:text-xl text-slate-900 group-hover:text-blue-900 transition-colors leading-snug mb-3 min-h-[56px] flex items-center">
                এতিম ও মেধাবী শিক্ষার্থী সহায়তা
              </h3>

              {/* Description */}
              <p className="text-slate-600 font-solaiman text-[14.5px] leading-relaxed mb-6 font-normal">
                আর্থিক সংকটের কারণে যেন কোনো এতিম বা মেধাবী শিশুর শিক্ষার আলো নিভে না যায়, সেজন্য শিক্ষাবৃত্তি ও প্রয়োজনীয় উপকরণ দিয়ে তাদের স্বপ্নপূরণের পথে পাশে থাকার বিনীত প্রয়াস চালাই।
              </p>
            </div>

            {/* Bottom Meta & Action */}
            <div className="pt-4 border-t border-slate-100/90 space-y-4">
              {/* Distinct Badges for Location & Beneficiaries */}
              <div className="flex flex-col gap-2 text-xs font-sans-bn text-slate-700">
                <div className="flex items-center gap-1.5 bg-slate-50/90 px-2.5 py-1.5 rounded-xl border border-slate-200/60">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span><strong>স্থান:</strong> বগুড়া ও পার্শ্ববর্তী এলাকা</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50/90 px-2.5 py-1.5 rounded-xl border border-slate-200/60">
                  <Users className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span><strong>উপকারভোগী:</strong> ১০০+ শিক্ষার্থী</span>
                </div>
              </div>

              {/* Sleek Button Link */}
              <button
                type="button"
                onClick={() => handleClickAction('এতিম ও মেধাবী শিক্ষার্থী সহায়তা', 'শিক্ষা ও মেধা বিকাশ')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white border border-slate-200/80 hover:border-blue-600 font-sans-bn font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer group/btn"
              >
                <span>বিস্তারিত দেখুন</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>

          {/* CARD 3: স্বাস্থ্য ও চিকিৎসা */}
          <article className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Corner Glow on hover */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-rose-100/60 to-transparent rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-rose-700 opacity-90" />

            <div>
              {/* Top Accent Badge with Minimal Modern SVG Icon */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100/70 border border-rose-200/80 text-rose-700 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-rose-300 group-hover:shadow-md transition-all duration-300 shrink-0">
                  {/* Healthcare / Stethoscope icon 🩺 */}
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                    <circle cx="20" cy="10" r="2" />
                  </svg>
                </div>

                {/* Pill-shaped Category Tag */}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200/80 font-sans-bn tracking-wide">
                  স্বাস্থ্য ও চিকিৎসা
                </span>
              </div>

              {/* Main Title */}
              <h3 className="font-serif-bn font-bold text-lg sm:text-xl text-slate-900 group-hover:text-rose-900 transition-colors leading-snug mb-3 min-h-[56px] flex items-center">
                প্রয়োজনগ্রস্ত পরিবারে চিকিৎসা সহায়তা
              </h3>

              {/* Description */}
              <p className="text-slate-600 font-solaiman text-[14.5px] leading-relaxed mb-6 font-normal">
                সন্তান থাকা সত্ত্বেও অবহেলিত ও খোঁজহীন মা-বাবা এবং অসহায় রোগীদের ওষুধপত্র ও জরুরি চিকিৎসার সুব্যবস্থা করে তাদের কষ্ট কিছুটা লাঘব করার নিরন্তর চেষ্টা করি।
              </p>
            </div>

            {/* Bottom Meta & Action */}
            <div className="pt-4 border-t border-slate-100/90 space-y-4">
              {/* Distinct Badges for Location & Beneficiaries */}
              <div className="flex flex-col gap-2 text-xs font-sans-bn text-slate-700">
                <div className="flex items-center gap-1.5 bg-slate-50/90 px-2.5 py-1.5 rounded-xl border border-slate-200/60">
                  <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span><strong>স্থান:</strong> মাঠপর্যায়</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50/90 px-2.5 py-1.5 rounded-xl border border-slate-200/60">
                  <Users className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span><strong>উপকারভোগী:</strong> ২০০+ পরিবার</span>
                </div>
              </div>

              {/* Sleek Button Link */}
              <button
                type="button"
                onClick={() => handleClickAction('প্রয়োজনগ্রস্ত পরিবারে চিকিৎসা সহায়তা', 'স্বাস্থ্য ও চিকিৎসা')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-rose-600 text-slate-800 hover:text-white border border-slate-200/80 hover:border-rose-600 font-sans-bn font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer group/btn"
              >
                <span>বিস্তারিত দেখুন</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>

          {/* CARD 4: আত্মকর্মসংস্থান */}
          <article className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Corner Glow on hover */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-amber-100/60 to-transparent rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-700 opacity-90" />

            <div>
              {/* Top Accent Badge with Minimal Modern SVG Icon */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/70 border border-amber-200/80 text-amber-700 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-amber-300 group-hover:shadow-md transition-all duration-300 shrink-0">
                  {/* Growth / Empowerment / Tools icon 🛠️ */}
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>

                {/* Pill-shaped Category Tag */}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 font-sans-bn tracking-wide">
                  আত্মকর্মসংস্থান
                </span>
              </div>

              {/* Main Title */}
              <h3 className="font-serif-bn font-bold text-lg sm:text-xl text-slate-900 group-hover:text-amber-900 transition-colors leading-snug mb-3 min-h-[56px] flex items-center">
                অসহায় পরিবারের স্বাবলম্বীকরণ ও পুনর্বাসন
              </h3>

              {/* Description */}
              <p className="text-slate-600 font-solaiman text-[14.5px] leading-relaxed mb-6 font-normal">
                অসহায় মা-বোনদের গৃহপালিত পশু ও সেলাই মেশিন, কর্মক্ষম বাবাদের অটোরিকশাসহ আয়ের পথ তৈরি, বেকার যুবকদের কর্মসংস্থান এবং সুপেয় পানির ব্যবস্থার মাধ্যমে পরিবারগুলোকে স্থায়ীভাবে স্বাবলম্বী করে তোলাই আমাদের মূল লক্ষ্য।
              </p>
            </div>

            {/* Bottom Meta & Action */}
            <div className="pt-4 border-t border-slate-100/90 space-y-4">
              {/* Distinct Badges for Location & Beneficiaries */}
              <div className="flex flex-col gap-2 text-xs font-sans-bn text-slate-700">
                <div className="flex items-center gap-1.5 bg-slate-50/90 px-2.5 py-1.5 rounded-xl border border-slate-200/60">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span><strong>স্থান:</strong> পল্লী অঞ্চল</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50/90 px-2.5 py-1.5 rounded-xl border border-slate-200/60">
                  <Users className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span><strong>উপকারভোগী:</strong> বহু পরিবার</span>
                </div>
              </div>

              {/* Sleek Button Link */}
              <button
                type="button"
                onClick={() => handleClickAction('অসহায় পরিবারের স্বাবলম্বীকরণ ও পুনর্বাসন', 'আত্মকর্মসংস্থান')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-amber-600 text-slate-800 hover:text-white border border-slate-200/80 hover:border-amber-600 font-sans-bn font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer group/btn"
              >
                <span>বিস্তারিত দেখুন</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};
