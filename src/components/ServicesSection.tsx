import React from 'react';
import { Target, Compass, Sparkles, HeartHandshake, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceDonation?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceDonation }) => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-gradient-to-b from-[#f8faf9] via-white to-[#f4f8f6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Column 1: আমাদের লক্ষ্য (Mission) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100/90 shadow-xl shadow-emerald-950/5 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-300 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-900/20">
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
              <div className="bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-2xl p-4 sm:p-5 mb-8">
                <p className="font-solaiman text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
                  “রাসূলুল্লাহ (ﷺ)-এর অনুকম্পা ও সুন্নাহর চিরায়ত আলোকে পাথেয় করে—অসহায় উম্মাহর মুখে হাসি ফোটানো, ইলমে দ্বীনের আলো ছড়ানো এবং একটি স্থায়ী স্বাবলম্বী সমাজ বিনির্মাণে আমরা মাঠপর্যায়ে নিবেদিত।”
                </p>
              </div>

              {/* 4 Mission Points */}
              <div className="space-y-5">
                {/* 1 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fcfdfd] border border-emerald-100/60 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 font-serif-bn">
                    ১
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      সুন্নাহর অনুসরণে খাদ্য-হাদিয়া:
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      অসহায়, এতিম, মিসকিন, বিধবা ও প্রয়োজনগ্রস্ত পরিবারের দ্বারে ভালোবাসার খাবার পৌঁছে দেওয়া।
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fcfdfd] border border-emerald-100/60 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 font-serif-bn">
                    ২
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      বিনামূল্যে জরুরি চিকিৎসা ও স্বাস্থ্যসেবা:
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      দুর্গম ও অবহেলিত অঞ্চলের অসচ্ছল মানুষের কাছে বিশেষজ্ঞ চিকিৎসকের পরামর্শ, প্রয়োজনীয় ওষুধ ও জরুরি সেবা সহজে পৌঁছে দেওয়া।
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fcfdfd] border border-emerald-100/60 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 font-serif-bn">
                    ৩
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      দ্বীনি ও আদর্শ শিক্ষা বিস্তার:
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      এতিম ও অসচ্ছল মেধাবী শিক্ষার্থীদের জন্য বিশুদ্ধ কুরআন তিলাওয়াত, কুরআন হাদীসের ইলম এবং যুগোপযোগী উচ্চ শিক্ষা ও উন্নত নৈতিকতার স্থায়ী ব্যবস্থা গড়ে তোলা।
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fcfdfd] border border-emerald-100/60 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 font-serif-bn">
                    ৪
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      স্থায়ী আত্মনির্ভরশীলতা প্রকল্প:
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
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
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100/90 shadow-xl shadow-emerald-950/5 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-300 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#045332] text-amber-300 flex items-center justify-center shadow-md shadow-emerald-900/20">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-700 tracking-wider uppercase block font-sans">
                      Our Vision
                    </span>
                    <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                      আমাদের উদ্দেশ্য (Vision)
                    </h3>
                  </div>
                </div>
              </div>

              {/* Vision Main Statement */}
              <div className="bg-gradient-to-r from-emerald-50/80 to-amber-50/50 border-l-4 border-amber-600 rounded-r-2xl p-4 sm:p-5 mb-8">
                <p className="font-solaiman text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
                  “রাসূলুল্লাহ (ﷺ)-এর চিরন্তন জীবনাদর্শকে বুকে ধারণ করে নিঃস্বার্থ মানবসেবার মাধ্যমে মহান রবের সন্তুষ্টি অর্জন করা; এবং একটি নৈতিক, ইনসাফভিত্তিক ও ঈমানী আলোয় আলোকিত সমাজ বিনির্মাণ করা।”
                </p>
              </div>

              {/* 2 Vision Points */}
              <div className="space-y-5">
                {/* 1 */}
                <div className="p-5 rounded-2xl bg-[#fcfdfd] border border-emerald-100/70 hover:bg-emerald-50/30 hover:border-emerald-200 transition-all">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 font-serif-bn">
                      ১
                    </div>
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                      তরুণ প্রজন্মের ঈমানী জাগরণ:
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed pl-12">
                    প্রজ্ঞাপূর্ণ দাওয়াহ, বুদ্ধিবৃত্তিক আলোচনা ও দরদি দিকনির্দেশনার মাধ্যমে যুবসমাজকে ডিজিটাল ফিতনা ও নৈতিক অবক্ষয় থেকে রক্ষা করে কুরআন-সুন্নাহর দীপ্ত আদর্শে গড়ে তোলা।
                  </p>
                </div>

                {/* 2 */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#f8faf8] to-emerald-50/30 border border-emerald-200/80 hover:border-emerald-300 transition-all">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 font-serif-bn">
                      ২
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                          আখেরাতের সঞ্চয়
                        </h4>
                        <span className="px-2 py-0.5 text-xs font-serif-bn rounded-md bg-emerald-100 text-emerald-800 font-medium">
                          (صدقة جارية)
                        </span>
                        <span className="font-bold text-slate-900 text-base sm:text-lg">:</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed pl-12">
                    লোক দেখানো মোহ ছেড়ে ইখলাসের সাথে <strong className="text-emerald-800 font-semibold">'সাদাকায়ে জারিয়াহ'</strong>র অংশীদার হওয়া—যা দুনিয়ায় দেবে আত্মিক প্রশান্তি, আর মৃত্যুর পর অন্ধকার কবরে উপহার দেবে অবিরাম সাওয়াব; যেন মহান রবের সন্তুষ্টিতে চূড়ান্ত ঠিকানা হয় জান্নাত। ইনশাআল্লাহ।
                  </p>
                </div>
              </div>

              {/* Bottom Islamic Assurance Ribbon */}
              <div className="mt-8 p-4 rounded-2xl bg-emerald-900 text-emerald-100 text-xs sm:text-sm flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-solaiman leading-snug">
                  “নিশ্চয়ই আল্লাহ তাদের ভালোবাসেন, যারা ইখলাসের সাথে মানুষের উপকার করে।”
                </span>
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
