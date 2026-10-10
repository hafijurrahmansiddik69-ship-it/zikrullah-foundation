import React from 'react';
import { Users, ArrowUpRight, Award, Compass, ArrowRight } from 'lucide-react';
import { heroImg, FOUNDATION_INFO } from '../data/mockData';

interface AboutSectionProps {
  onOpenVolunteer: () => void;
  onNavigateToAbout?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onOpenVolunteer,
  onNavigateToAbout 
}) => {
  return (
    <section id="about" className="py-20 bg-[#fafcfb] border-b border-emerald-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (5 columns on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-100 shadow-xl shadow-emerald-950/5 aspect-4/5 bg-slate-100">
              <img
                src={FOUNDATION_INFO.aboutImageUrl || heroImg}
                alt="জিকরুল্লাহ ফাউন্ডেশন কার্যক্রম"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />
              
              {/* Islamic Quote Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md sm:shadow-lg text-slate-800">
                <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 tracking-wider uppercase block mb-1">
                  কুরআনের নির্দেশনা
                </span>
                <p className="font-serif-bn text-xs sm:text-base text-slate-900 leading-snug font-medium mb-1">
                  “তোমরা যা ভালোবাস তা থেকে ব্যয় না করা পর্যন্ত কখনো প্রকৃত পুণ্য লাভ করতে পারবে না।”
                </p>
                <span className="text-[11px] sm:text-xs text-slate-500 font-sans">
                  — সূরা আলে ইমরান: ৯২
                </span>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute top-3 right-3 sm:-top-4 sm:-right-4 bg-[#045332] text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border-2 border-white flex items-center gap-2.5 sm:gap-3 max-w-[170px] sm:max-w-[200px] z-10">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300 shrink-0" />
              <div>
                <span className="block font-bold text-[10px] sm:text-xs uppercase tracking-wider text-emerald-200">
                  নিবেদিত প্রাণ
                </span>
                <span className="font-bold text-xs sm:text-sm leading-tight block">
                  মানবতার কল্যাণে নিরলস
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content (7 columns on desktop) */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 tracking-wider uppercase mb-2.5 sm:mb-3">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>আমাদের লক্ষ্য, দর্শন ও পরিচিতি</span>
            </div>

            <h2 className="font-serif-bn font-bold text-2xl sm:text-4xl text-[#045332] leading-tight mb-4 sm:mb-5">
              মানবতার সেবায় নিবেদিত ‘জিকরুল্লাহ ফাউন্ডেশন’
            </h2>

            {/* User exact primary statement in two paragraphs */}
            <div className="bg-emerald-50/70 p-4 sm:p-6 rounded-2xl border-l-4 border-[#087443] mb-5 sm:mb-6 space-y-3 sm:space-y-4">
              <div className="text-center pb-2 border-b border-emerald-200/60">
                <h3 className="font-fiona text-xl sm:text-3xl text-[#045332] font-bold tracking-normal inline-block">
                  আমাদের প্রেরণা
                </h3>
              </div>
              <p className="font-solaiman text-slate-800 text-sm sm:text-lg lg:text-xl leading-relaxed font-normal">
                “আমাদের চারপাশের অসহায় মানুষের নীরব হাহাকার মুমিনের অন্তরে গভীর তোলপাড় সৃষ্টি করে। একমাত্র রবের সন্তুষ্টির আশায় তাঁদের মুখে একটু হাসি ফোটানো এবং খাদ্য, চিকিৎসা ও দ্বীনি শিক্ষার পথ সুগম করা দুনিয়াতে সুখময় জীবন এবং আখেরাতে নাজাতের উসীলা হবে, ইনশাআল্লাহ।”
              </p>
              <p className="font-solaiman text-slate-800 text-sm sm:text-lg lg:text-xl leading-relaxed font-normal border-t border-emerald-200/60 pt-2.5 sm:pt-3">
                উম্মাহর এই ক্রান্তিলগ্নে সেবাকে ইবাদত মনে করে এবং মানবিক দায়বদ্ধতা থেকে ১লা জানুয়ারি ২০২৩ ঈসায়ীতে “হাফিজুর রহমান সিদ্দিক (বগুড়া)”-এর উদ্যোগে প্রতিষ্ঠিত হয় ‘জিকরুল্লাহ ফাউন্ডেশন’—যা শিক্ষা, দাওয়াহ ও মানবকল্যাণে নিবেদিত একটি অরাজনৈতিক সেবামূলক প্রতিষ্ঠান।
              </p>
            </div>

            {/* Founder & Institution Badge */}
            <div className="bg-[#fafcfb] border border-emerald-200/80 rounded-2xl p-3.5 sm:p-4 mb-6 sm:mb-7 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-2.5 sm:gap-4 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span><strong>উদ্যোগ ও প্রতিষ্ঠাতা:</strong> হাফিজুর রহমান সিদ্দিক (বগুড়া)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span><strong>প্রতিষ্ঠাকাল:</strong> ১লা জানুয়ারি ২০২৩</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span><strong>কর্মক্ষেত্র:</strong> শিক্ষা, দাওয়াহ ও মানবকল্যাণ</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <button
                onClick={onNavigateToAbout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#087443] hover:bg-[#045332] active:scale-95 text-white font-bold text-sm shadow-md shadow-emerald-800/20 transition-all cursor-pointer min-h-[44px]"
              >
                <span>আমাদের লক্ষ্য ও উদ্দেশ্য জানুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVolunteer}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 font-semibold text-sm transition-all cursor-pointer min-h-[44px]"
              >
                <Users className="w-4 h-4" />
                <span>স্বেচ্ছাসেবক হিসেবে যোগ দিন</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-slate-600 hover:text-emerald-800 font-semibold text-sm transition-colors cursor-pointer text-center"
              >
                <span>যোগাযোগ</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
