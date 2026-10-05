import React from 'react';
import { Check, Users, ArrowUpRight, Award, Compass, HeartHandshake } from 'lucide-react';
import { heroImg, FOUNDATION_INFO } from '../data/mockData';

interface AboutSectionProps {
  onOpenVolunteer: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenVolunteer }) => {
  return (
    <section id="about" className="py-20 bg-[#fafcfb] border-b border-emerald-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (5 columns on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-100 shadow-xl shadow-emerald-950/5 aspect-4/5 bg-slate-100">
              <img
                src={heroImg}
                alt="জিকিরুল্লাহ ফাউন্ডেশন কার্যক্রম"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />
              
              {/* Islamic Quote Card */}
              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg text-slate-800">
                <span className="text-[11px] font-semibold text-emerald-800 tracking-wider uppercase block mb-1">
                  কুরআনের নির্দেশনা
                </span>
                <p className="font-serif-bn text-sm sm:text-base text-slate-900 leading-snug font-medium mb-1">
                  “তোমরা যা ভালোবাস তা থেকে ব্যয় না করা পর্যন্ত কখনো প্রকৃত পুণ্য লাভ করতে পারবে না।”
                </p>
                <span className="text-xs text-slate-500 font-sans">
                  — সূরা আলে ইমরান: ৯২
                </span>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#045332] text-white p-4 rounded-2xl shadow-lg border-2 border-white flex items-center gap-3 max-w-[200px]">
              <Award className="w-8 h-8 text-emerald-300 shrink-0" />
              <div>
                <span className="block font-bold text-xs uppercase tracking-wider text-emerald-200">
                  নিবেদিত প্রাণ
                </span>
                <span className="font-bold text-sm leading-tight block">
                  মানবতার কল্যাণে নিরলস
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content (7 columns on desktop) */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 tracking-wider uppercase mb-3">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>আমাদের লক্ষ্য, দর্শন ও পরিচিতি</span>
            </div>

            <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl text-[#045332] leading-tight mb-5">
              মানবতার সেবায় নিবেদিত ‘জিকরুল্লাহ ফাউন্ডেশন’
            </h2>

            {/* User exact primary statement */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-medium bg-emerald-50/60 p-5 rounded-2xl border-l-4 border-[#087443]">
              “আমাদের চারপাশের অসহায় মানুষের নীরব হাহাকার মুমিনের অন্তরে গভীর তোলপাড় সৃষ্টি করে। একমাত্র রবের সন্তুষ্টির আশায় তাঁদের মুখে একটু হাসি ফোটানো এবং খাদ্য, চিকিৎসা ও দ্বীনি শিক্ষার পথ সুগম করা দুনিয়াতে সুখময় জীবন এবং আখেরাতে নাজাতের উসীলা হবে, ইনশাআল্লাহ।”
            </p>

            {/* Inception and Founder paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              উম্মাহর এই ক্রান্তিলগ্নে সেবাকে ইবাদত মনে করে এবং মানবিক দায়বদ্ধতা থেকে <strong>১লা জানুয়ারি ২০২৩ ঈসায়ীতে “হাফিজুর রহমান সিদ্দিক (বগুড়া)”</strong>-এর উদ্যোগে প্রতিষ্ঠিত হয় <strong>‘জিকরুল্লাহ ফাউন্ডেশন’</strong>—যা শিক্ষা, দাওয়াহ ও মানবকল্যাণে নিবেদিত একটি অরাজনৈতিক সেবামূলক প্রতিষ্ঠান।
            </p>

            {/* Founder & Institution Badge */}
            <div className="bg-[#fafcfb] border border-emerald-200/80 rounded-2xl p-4 mb-7 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span><strong>উদ্যোগ ও প্রতিষ্ঠাতৃত্ব:</strong> হাফিজুর রহমান সিদ্দিক (বগুড়া)</span>
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

            {/* Core Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-100 shadow-2xs">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="block text-slate-800 text-sm font-semibold">ইসলামিক মূল্যবোধ ও আমানত</strong>
                  <span className="text-xs text-slate-500">যাকাত ও সদকার প্রতিটি পয়সার শরী‘আহসম্মত যথাযথ ব্যবহার।</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-100 shadow-2xs">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="block text-slate-800 text-sm font-semibold">শতভাগ স্বচ্ছতা ও উন্মুক্ততা</strong>
                  <span className="text-xs text-slate-500">প্রত্যেকটি প্রকল্পের আর্থিক হিসাব ও বিতরণ তালিকা সংরক্ষিত।</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-100 shadow-2xs">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="block text-slate-800 text-sm font-semibold">মাঠপর্যায়ে প্রত্যক্ষ তত্ত্বাবধান</strong>
                  <span className="text-xs text-slate-500">স্বেচ্ছাসেবীদের সরাসরি উপস্থিতিতে ঘরে ঘরে সাহায্য পৌঁছে দেওয়া।</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-100 shadow-2xs">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="block text-slate-800 text-sm font-semibold">স্থায়ী স্বাবলম্বীকরণ লক্ষ্য</strong>
                  <span className="text-xs text-slate-500">কেবল সাময়িক সহায়তা নয়, বরং আত্মনির্ভরশীল করে তোলা।</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenVolunteer}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#087443] hover:bg-[#045332] active:scale-95 text-white font-bold text-sm shadow-md shadow-emerald-800/20 transition-all cursor-pointer"
              >
                <Users className="w-4 h-4" />
                <span>স্বেচ্ছাসেবক হিসেবে যোগ দিন</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-semibold text-sm transition-colors cursor-pointer"
              >
                <span>যোগাযোগ করুন</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
