import React from 'react';
import { ArrowRight, Sparkles, HeartHandshake, ShieldCheck, Heart, Users } from 'lucide-react';
import { heroImg, FOUNDATION_INFO } from '../data/mockData';

interface HeroProps {
  onOpenDonation?: () => void;
  onNavigateToAbout?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonation, onNavigateToAbout }) => {
  return (
    <section id="home" className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#012817] via-[#024427] to-[#011a0e]">
      {/* Rich Dark Green Background without photo as requested */}
      <div className="absolute inset-0 z-0">
        {/* Deep emerald ambient gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(5,150,105,0.18),transparent_70%)]" />

        {/* Subtle Islamic Geometric Pattern Texture */}
        <div 
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 15-15 15-15-15L30 0zm0 30l15 15-15 15-15-15 15-15zM0 30l15-15 15 15-15 15L0 30zm30 0l15-15 15 15-15 15-15-15z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Warm Ambient Glow in the Center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center text-white flex flex-col items-center">
        
        {/* Bismillah Calligraphy Badge */}
        <div className="inline-flex items-center gap-2 mb-5 px-4 sm:px-5 py-1.5 rounded-full bg-[#033b21]/80 backdrop-blur-md border border-amber-400/35 text-amber-300 text-xs sm:text-sm font-serif-bn tracking-wider shadow-lg shadow-emerald-950/40">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 fill-amber-400/20" />
          <span>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
          <span className="hidden sm:inline text-amber-200/50">|</span>
          <span className="hidden sm:inline font-solaiman text-amber-200 text-xs">মানবতার সেবায় নিবেদিত</span>
        </div>

        {/* Foundation Name */}
        <h1 className="font-serif-bn font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.2] mb-3 sm:mb-4 drop-shadow-md">
          {FOUNDATION_INFO.name}
          <span className="block text-amber-300 font-solaiman text-lg sm:text-2xl md:text-3xl mt-2 sm:mt-3 font-semibold tracking-wide drop-shadow-sm">
            {FOUNDATION_INFO.slogan}
          </span>
        </h1>

        {/* English Tagline */}
        <p className="text-emerald-200/90 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-6 sm:mb-8 font-solaiman">
          {FOUNDATION_INFO.englishName} • EST. {FOUNDATION_INFO.established}
        </p>

        {/* Foundation Inspiring Statement & Establishment Text with Dark Green Background */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4 text-emerald-50/95 font-solaiman text-base sm:text-lg md:text-xl leading-relaxed font-normal">
          <p className="bg-[#02331d]/75 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-emerald-400/25 shadow-2xl text-justify sm:text-center leading-relaxed">
            “আমাদের চারপাশের অসহায় মানুষের নীরব হাহাকার মুমিনের অন্তরে গভীর তোলপাড় সৃষ্টি করে। একমাত্র রবের সন্তুষ্টির আশায় তাঁদের মুখে একটু হাসি ফোটানো এবং খাদ্য, চিকিৎসা ও দ্বীনি শিক্ষার পথ সুগম করা দুনিয়াতে সুখময় জীবন এবং আখেরাতে নাজাতের উসীলা হবে, ইনশাআল্লাহ।”
          </p>
          <p className="bg-[#012615]/70 backdrop-blur-sm px-5 py-3.5 rounded-xl border border-emerald-400/20 text-sm sm:text-base md:text-lg text-emerald-100/95 font-solaiman font-medium leading-relaxed">
            উম্মাহর এই ক্রান্তিলগ্নে সেবাকে ইবাদত মনে করে এবং মানবিক দায়বদ্ধতা থেকে ১লা জানুয়ারি ২০২৩ ঈসায়ীতে “হাফিজুর রহমান সিদ্দিক (বগুড়া)”-এর উদ্যোগে প্রতিষ্ঠিত হয় ‘জিকরুল্লাহ ফাউন্ডেশন’।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto mb-10 sm:mb-12">
          {onOpenDonation && (
            <button
              onClick={onOpenDonation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-500 to-[#10b981] hover:from-emerald-600 hover:to-emerald-500 active:scale-95 text-white font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] border border-emerald-300/40 transition-all duration-300 cursor-pointer min-h-[48px] group"
            >
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 stroke-white fill-white/20 group-hover:scale-110 transition-transform duration-300" />
              <span>দান করুন</span>
            </button>
          )}

          {onNavigateToAbout && (
            <button
              onClick={onNavigateToAbout}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md active:scale-95 text-white font-semibold text-sm sm:text-base border border-white/25 hover:border-white/40 transition-all cursor-pointer min-h-[48px]"
            >
              <span>আমাদের সম্পর্কে জানুন</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Trust Badges / Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl pt-6 border-t border-emerald-500/20 text-xs sm:text-sm text-emerald-100/90 font-solaiman">
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>১০০% আমানতদারিতা ও স্বচ্ছতা</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
            <Heart className="w-4 h-4 text-emerald-400 shrink-0 fill-emerald-400/20" />
            <span>সরাসরি মাঠপর্যায়ে অসহায়দের সেবা</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
            <Users className="w-4 h-4 text-amber-400 shrink-0" />
            <span>উম্মাহর সার্বিক কল্যাণ ও ঐক্য</span>
          </div>
        </div>

      </div>
    </section>
  );
};

