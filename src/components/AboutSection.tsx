import React from 'react';
import { Users, ArrowUpRight, Award, Compass, ArrowRight } from 'lucide-react';
import { heroImg, FOUNDATION_INFO } from '../data/mockData';

interface AboutSectionProps {
  onOpenVolunteer: () => void;
  onNavigateToAbout?: () => void;
  onOpenDonation?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onOpenVolunteer,
  onNavigateToAbout,
  onOpenDonation
}) => {
  return (
    <section id="about" className="py-20 bg-[#fafcfb] border-b border-emerald-100/60">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (5 columns on desktop) - Matching user requested layout & aesthetic */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-800/20 shadow-2xl shadow-emerald-950/20 aspect-4/5 bg-[#012213] group">
              {/* Rich forest green backdrop and photo with warm lighting */}
              <img
                src="https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg"
                alt="জিকরুল্লাহ ফাউন্ডেশন কার্যক্রম"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.05] group-hover:scale-102 transition-transform duration-700"
              />
              {/* Forest green overlay with warm lighting gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#012615] via-[#02381e]/40 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.15),transparent_60%)]" />

              {/* Top-Right Corner Badge: 'মানবতার সেবায় নিবেদিত' with Deep Royal Purple Background & Crisp White Text */}
              <div className="absolute top-3.5 right-3.5 z-20">
                <span 
                  className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide backdrop-blur-md shadow-md border"
                  style={{
                    backgroundColor: 'rgba(30, 16, 53, 0.92)',
                    borderColor: 'rgba(168, 85, 247, 0.65)',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 16px rgba(168, 85, 247, 0.3)'
                  }}
                >
                  মানবতার সেবায় নিবেদিত
                </span>
              </div>
              
              {/* Bottom Quranic Ayah Box (Deep Royal Purple Theme matching Action Button) */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-[#1a0b2e]/90 via-[#2e1065]/85 to-[#3b0764]/90 backdrop-blur-xl border-2 border-[#a855f7]/70 shadow-[0_12px_28px_rgba(168,85,247,0.4)] text-white z-20 overflow-hidden">
                {/* Subtle Purple & Amber ambient glow inside frosted glass */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/25 rounded-full blur-xl pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-400/15 rounded-full blur-xl pointer-events-none" />

                {/* Arabic Portion (Times New Roman / Serif font) */}
                <p 
                  className="font-serif text-white text-xs sm:text-sm md:text-base leading-relaxed tracking-wide mb-1.5 text-center drop-shadow-sm font-['Times_New_Roman',Times,serif]" 
                  dir="rtl"
                >
                  مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ ۗ وَاللَّهُ يُضَاعِفُ لِمَن يَشَاءُ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ
                </p>

                {/* Bengali Translation & Surah Reference */}
                <p className="font-solaiman text-[11px] sm:text-xs text-purple-100/95 leading-relaxed font-normal text-center mb-2.5">
                  “যারা আল্লাহর রাস্তায় নিজেদের ধন-সম্পদ ব্যয় করে, তাদের উপমা একটি শস্যবীজের মতো, যা থেকে সাতটি শীষ জন্মায় এবং প্রতিটি শীষে থাকে একশতটি করে দানা। আর আল্লাহ যাকে ইচ্ছা বহুগুণ বৃদ্ধি করে দেন; আল্লাহ প্রাচুর্যময় ও সর্বজ্ঞ।”
                  <span className="block text-amber-300 font-bold text-[10px] sm:text-xs mt-1">
                    — সূরা আল-বাকারা, আয়াত: ২৬১
                  </span>
                </p>

                {/* Prominent Glowing Green 'দান করুন' (Donate) Button with Heart/Hand Icon */}
                {onOpenDonation && (
                  <div className="flex justify-end pt-1 border-t border-white/15">
                    <button
                      onClick={onOpenDonation}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#10b981] hover:bg-[#059669] active:scale-95 text-white font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] border border-emerald-200/40 transition-all duration-300 cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5 stroke-white fill-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span>দান করুন</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Editorial Content (7 columns on desktop) */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 tracking-wider uppercase mb-2.5 sm:mb-3">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>আমাদের লক্ষ্য, দর্শন ও পরিচিতি</span>
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
