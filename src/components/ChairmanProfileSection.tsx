import React from 'react';
import { Mic } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

interface ChairmanProfileSectionProps {
  onOpenInvitationModal: () => void;
  onNavigateToFullProfile?: () => void;
}

const CHAIRMAN_PORTRAIT =
  'https://res.cloudinary.com/dlklqihg6/image/upload/v1795547568/ipvnrmiwbzwq5oktrwi7.jpg';

export const ChairmanProfileSection: React.FC<ChairmanProfileSectionProps> = ({
  onOpenInvitationModal,
}) => {
  const { isEn } = useLanguage();

  return (
    <section
      id="chairman-profile"
      className="py-14 sm:py-20 bg-white border-b border-emerald-100/80 overflow-x-clip"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <ScrollReveal direction="down" className="text-center max-w-2xl mx-auto mb-9 sm:mb-11">
          <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#064E3B] block mb-1">
            {isEn ? 'Leadership & Guidance' : 'পরিচিতি ও নেতৃত্ব'}
          </span>
          <h2 className="font-bornomala font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            {isEn ? 'Chairman Profile' : 'চেয়ারম্যান পরিচিতি'}
          </h2>
          <div className="mt-2.5 mx-auto w-20 h-0.5 bg-[#D4AF37]" />
        </ScrollReveal>

        {/* Clean White Container Matching "আমাদের সম্পর্কে জানুন" / "আমাদের সাথে যোগাযোগ করুন" */}
        <ScrollReveal direction="up">
          <div className="rounded-3xl bg-white border border-emerald-200/80 shadow-sm p-6 sm:p-10 lg:p-12 flex flex-col items-center text-center space-y-6">
            {/* Circular Portrait Photo + Name + Subtitle */}
            <div className="flex flex-col items-center text-center">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white ring-1 ring-slate-200/80 shadow-[0_8px_28px_rgba(15,23,42,0.14)] bg-white">
                <img
                  src={CHAIRMAN_PORTRAIT}
                  alt={
                    isEn
                      ? 'Hafizur Rahman Siddik (Bogura)'
                      : 'হাফিজুর রহমান সিদ্দিক (বগুড়া)'
                  }
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="font-bornomala font-bold text-2xl sm:text-3xl text-[#0F172A] mt-5 leading-snug">
                {isEn ? 'Hafizur Rahman Siddik (Bogura)' : 'হাফিজুর রহমান সিদ্দিক (বগুড়া)'}
              </h3>
              <p className="font-bornomala text-sm sm:text-base font-semibold text-[#064E3B] mt-1 tracking-wide">
                {isEn ? "Talib-e-Ilm • Da'ee Ilallah" : 'তলিবে ইলম • দায়ী ইল্লাল্লাহ'}
              </p>
            </div>

            {/* Clean White/Light Box Directly Below Name & Subtitle with Exact Bio Text */}
            <div className="w-full max-w-3xl rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-7 text-left shadow-2xs">
              <p className="font-bornomala text-sm sm:text-base text-[#0F172A] leading-[1.85]">
                {isEn
                  ? 'Born in Shibganj, Bogura, Hafizur Rahman Siddik (Bogura) has been dedicated to serving helpless and poor people since childhood. Currently, he is studying as a Talib-e-Ilm; alongside his studies, he serves as the Founder & Chairman of Zikrullah Foundation and strives to convey messages of welfare through regular Jumu’ah Khutbahs and Mahfil speeches.'
                  : 'বগুড়ার শিবগঞ্জে জন্ম নেওয়া হাফিজুর রহমান সিদ্দিক (বগুড়া) শৈশব থেকেই অসহায় ও দরিদ্র মানুষের সেবায় নিবেদিত। বর্তমানে তিনি একজন তলিবে ইলম হিসেবে অধ্যয়নরত আছেন; পাশাপাশি জিকরুল্লাহ ফাউন্ডেশন-এর প্রতিষ্ঠাতা ও চেয়ারম্যান হিসেবে দায়িত্ব পালন করছেন এবং নিয়মিত জুমার খুতবা ও মাহফিলে বয়ানের মাধ্যমে সমাজে কল্যাণের বাণী পৌঁছে দেওয়ার সর্বোচ্চ চেষ্টা করছেন।'}
              </p>
              <p className="font-bornomala text-sm sm:text-base font-semibold text-[#064E3B] mt-2.5">
                {isEn
                  ? "Humble request for everyone’s prayers (du'a) for him 🤲"
                  : 'তাঁর জন্য সকলের কাছে দোয়ার আবেদন 🤲'}
              </p>
            </div>

            {/* Deep Emerald Green CTA Button with White Twinkling Microphone Icon */}
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenInvitationModal}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#047857] via-[#059669] to-[#10b981] hover:brightness-110 active:scale-98 text-white font-bold text-sm sm:text-base border border-white/40 shadow-[0_8px_28px_rgba(5,150,105,0.45)] animate-soft-breath-glow transition-all cursor-pointer whitespace-nowrap shrink-0 group"
              >
                <span className="relative inline-flex items-center justify-center w-6 h-6 shrink-0" aria-hidden="true">
                  <span className="absolute inset-0 rounded-full bg-white/35 animate-ping" />
                  <span className="absolute -inset-1 rounded-full bg-white/15 blur-xs animate-pulse" />
                  <Mic className="w-4 h-4 text-white animate-mic-twinkle relative z-10" />
                </span>
                <span>{isEn ? 'Apply for Invitation' : 'দাওয়াতের জন্য আবেদন'}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
