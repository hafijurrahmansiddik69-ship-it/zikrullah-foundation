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
  ArrowRight
} from 'lucide-react';
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
          
          <div className="relative z-10 max-w-3xl">
            {/* Arabic Bismillah */}
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-200 text-sm font-serif-bn">
              <span>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
            </div>

            <h1 className="font-serif-bn font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.2] mb-4">
              আমাদের সম্পর্কে — {FOUNDATION_INFO.name}
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg lg:text-xl font-solaiman font-medium leading-relaxed mb-6">
              কুরআন-সুন্নাহর আলোকে, উম্মাহর খেদমতে। শিক্ষা, দাওয়াহ ও মানবকল্যাণে নিবেদিত একটি অরাজনৈতিক সেবামূলক প্রতিষ্ঠান।
            </p>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-emerald-100">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-400/20">
                <Users className="w-4 h-4 text-emerald-300" />
                <span><strong>উদ্যোগ ও প্রতিষ্ঠাতৃত্ব:</strong> হাফিজুর রহমান সিদ্দিক (বগুড়া)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-400/20">
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span><strong>প্রতিষ্ঠাকাল:</strong> ১লা জানুয়ারি ২০২৩</span>
              </span>
            </div>
          </div>
        </div>

        {/* Core Heartfelt Statement */}
        <div className="bg-emerald-50/80 border-l-4 border-[#087443] rounded-2xl p-6 sm:p-8 mb-12 shadow-sm">
          <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase block mb-2 font-sans">
            আমাদের অনুপ্রেরণা ও অনুভূতি
          </span>
          <p className="font-solaiman text-slate-800 text-lg sm:text-xl lg:text-2xl leading-relaxed font-normal">
            “আমাদের চারপাশের অসহায় মানুষের নীরব হাহাকার মুমিনের অন্তরে গভীর তোলপাড় সৃষ্টি করে। একমাত্র রবের সন্তুষ্টির আশায় তাঁদের মুখে একটু হাসি ফোটানো এবং খাদ্য, চিকিৎসা ও দ্বীনি শিক্ষার পথ সুগম করা দুনিয়াতে সুখময় জীবন এবং আখেরাতে নাজাতের উসীলা হবে, ইনশাআল্লাহ।”
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

          {/* 4 Points in clear text list */}
          <div className="space-y-6">
            {/* Point 1 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-emerald-100/90 shadow-2xs hover:border-emerald-300 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-base flex items-center justify-center shrink-0 mt-0.5 font-serif-bn">
                ১
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1.5 font-serif-bn">
                  সুন্নাহর অনুসরণে খাদ্য-হাদিয়া:
                </h3>
                <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed">
                  অসহায়, এতিম, মিসকিন, বিধবা ও প্রয়োজনগ্রস্ত পরিবারের দ্বারে ভালোবাসার খাবার পৌঁছে দেওয়া।
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-emerald-100/90 shadow-2xs hover:border-emerald-300 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-base flex items-center justify-center shrink-0 mt-0.5 font-serif-bn">
                ২
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1.5 font-serif-bn">
                  বিনামূল্যে জরুরি চিকিৎসা ও স্বাস্থ্যসেবা:
                </h3>
                <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed">
                  দুর্গম ও অবহেলিত অঞ্চলের অসচ্ছল মানুষের কাছে বিশেষজ্ঞ চিকিৎসকের পরামর্শ, প্রয়োজনীয় ওষুধ ও জরুরি সেবা সহজে পৌঁছে দেওয়া।
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-emerald-100/90 shadow-2xs hover:border-emerald-300 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-base flex items-center justify-center shrink-0 mt-0.5 font-serif-bn">
                ৩
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1.5 font-serif-bn">
                  দ্বীনি ও আদর্শ শিক্ষা বিস্তার:
                </h3>
                <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed">
                  এতিম ও অসচ্ছল মেধাবী শিক্ষার্থীদের জন্য বিশুদ্ধ কুরআন তিলাওয়াত, কুরআন হাদীসের ইলম এবং যুগোপযোগী উচ্চ শিক্ষা ও উন্নত নৈতিকতার স্থায়ী ব্যবস্থা গড়ে তোলা।
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-emerald-100/90 shadow-2xs hover:border-emerald-300 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-base flex items-center justify-center shrink-0 mt-0.5 font-serif-bn">
                ৪
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1.5 font-serif-bn">
                  স্থায়ী আত্মনির্ভরশীলতা প্রকল্প:
                </h3>
                <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed">
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

          {/* 2 Points in clear text list */}
          <div className="space-y-6">
            {/* Point 1 */}
            <div className="p-6 rounded-2xl bg-white border border-emerald-100/90 shadow-2xs hover:border-emerald-300 transition-colors">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 font-bold text-base flex items-center justify-center shrink-0 mt-0.5 font-serif-bn">
                  ১
                </div>
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl font-serif-bn">
                  তরুণ প্রজন্মের ঈমানী জাগরণ:
                </h3>
              </div>
              <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed pl-13">
                প্রজ্ঞাপূর্ণ দাওয়াহ, বুদ্ধিবৃত্তিক আলোচনা ও দরদি দিকনির্দেশনার মাধ্যমে যুবসমাজকে ডিজিটাল ফিতনা ও নৈতিক অবক্ষয় থেকে রক্ষা করে কুরআন-সুন্নাহর দীপ্ত আদর্শে গড়ে তোলা।
              </p>
            </div>

            {/* Point 2 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f8faf8] to-emerald-50/40 border border-emerald-200/90 shadow-2xs hover:border-emerald-300 transition-colors">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white font-bold text-base flex items-center justify-center shrink-0 mt-0.5 font-serif-bn">
                  ২
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-slate-900 text-lg sm:text-xl font-serif-bn">
                      আখেরাতের সঞ্চয়
                    </h3>
                    <span className="px-2.5 py-0.5 text-xs font-serif-bn rounded-md bg-emerald-100 text-emerald-800 font-medium">
                      (صدقة جارية)
                    </span>
                    <span className="font-bold text-slate-900 text-lg sm:text-xl font-serif-bn">:</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-800 text-base sm:text-[17px] leading-relaxed pl-13">
                লোক দেখানো মোহ ছেড়ে ইখলাসের সাথে <strong className="text-emerald-800 font-semibold">'সাদাকায়ে জারিয়াহ'</strong>র অংশীদার হওয়া—যা দুনিয়ায় দেবে আত্মিক প্রশান্তি, আর মৃত্যুর পর অন্ধকার কবরে উপহার দেবে অবিরাম সাওয়াব; যেন মহান রবের সন্তুষ্টিতে চূড়ান্ত ঠিকানা হয় জান্নাত। ইনশাআল্লাহ।
              </p>
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
            {/* Leadership Statement Card (Enlarged photo at top with English name & title) */}
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/80 shadow-md hover:shadow-lg transition-all text-center">
              {/* Large Founder Photo at the Top */}
              <div className="relative mx-auto mb-5 w-32 h-32 sm:w-36 sm:h-36">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-emerald-600 shadow-xl ring-4 ring-emerald-100 bg-slate-100">
                  <img
                    src="https://res.cloudinary.com/dlklqihg6/image/upload/v1791215813/zchzkth66qkenrlqmjmg.jpg"
                    alt="Hafizur Rahman Siddik (Bogra)"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-[#1877f2] text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors font-bold text-sm border-2 border-white"
                  title="Facebook"
                >
                  f
                </a>
              </div>

              {/* Name and Designation in English */}
              <div className="mb-6">
                <h3 className="font-bold text-slate-900 text-2xl sm:text-3xl tracking-tight mb-1.5 font-serif">
                  Hafizur Rahman Siddik (Bogra)
                </h3>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                  Founder Chairman
                </div>
              </div>

              {/* Speech Text with Quote Mark */}
              <div className="relative max-w-3xl mx-auto bg-gradient-to-b from-[#f8faf9] to-emerald-50/30 rounded-2xl p-6 sm:p-8 border border-emerald-100/80">
                <div className="text-[#045332] text-4xl sm:text-5xl font-serif leading-none mb-3 select-none">
                  “
                </div>
                <p className="font-solaiman text-slate-700 text-base sm:text-lg leading-relaxed italic">
                  জিকরুল্লাহ ফাউন্ডেশনের মূল লক্ষ্য হলো রাসূলুল্লাহ (ﷺ)-এর সুন্নাহর সঠিক অনুসরণে সমাজের সুবিধাবঞ্চিত ও অসহায় মানুষের পাশে দাঁড়িয়ে একটি সহমর্মিতাপূর্ণ সমাজ গঠন করা। সততা ও শতভাগ আমানতদারির সাথে প্রতিটি যাকাত ও সদকার সঠিক ব্যবহার নিশ্চিত করা এবং তৃণমূল পর্যায়ে নিঃস্বার্থভাবে সেবা পৌঁছে দেওয়া আমাদের মূল অঙ্গীকার। সুন্নাহর সঠিক অনুসরণে এই মহৎ দ্বীনি ও মানবিক মিশনকে এগিয়ে নিতে এবং সমাজের সামগ্রিক কল্যাণে আমাদের যাঁর যাঁর সামর্থ্য অনুযায়ী ঐক্যবদ্ধভাবে অংশগ্রহণের উদাত্ত আহ্বান জানাচ্ছি।
                </p>
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
              দান ও সহযোগিতা করুন
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
