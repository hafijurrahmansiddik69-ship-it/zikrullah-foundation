import React, { useEffect } from 'react';
import { X, Mic, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { WazVideoSection } from './WazVideoSection';

interface ChairmanProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInvitationModal: () => void;
}

const CHAIRMAN_PORTRAIT =
  'https://res.cloudinary.com/dlklqihg6/image/upload/v1795547568/ipvnrmiwbzwq5oktrwi7.jpg';

export const ChairmanProfileModal: React.FC<ChairmanProfileModalProps> = ({
  isOpen,
  onClose,
  onOpenInvitationModal,
}) => {
  const { isEn } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chairman-modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full relative border-2 border-emerald-200 shadow-[0_24px_65px_rgba(6,78,59,0.28)] overflow-hidden my-auto text-[#0F172A] animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header */}
        <div className="px-5 sm:px-7 py-4 bg-white border-b border-emerald-100 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-[#064E3B] flex items-center justify-center shrink-0">
              <User className="w-4 h-4" />
            </span>
            <h2
              id="chairman-modal-title"
              className="font-bornomala font-bold text-lg sm:text-xl text-[#0F172A]"
            >
              {isEn ? 'Founder & Chairman' : 'প্রতিষ্ঠাতা ও চেয়ারম্যান'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-[#064E3B] border border-slate-200 transition-colors cursor-pointer"
            aria-label={isEn ? 'Close' : 'বন্ধ করুন'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Pure White Body */}
        <div className="p-5 sm:p-8 lg:p-10 overflow-y-auto space-y-10 bg-white">
          {/* Chairman Profile Card */}
          <div className="flex flex-col items-center text-center space-y-5">
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white ring-1 ring-slate-200/80 shadow-[0_8px_28px_rgba(15,23,42,0.14)] bg-white">
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
                {isEn
                  ? 'Hafizur Rahman Siddik (Bogura)'
                  : 'হাফিজুর রহমান সিদ্দিক (বগুড়া)'}
              </h3>
              <p className="font-bornomala text-sm sm:text-base font-semibold text-[#064E3B] mt-1 tracking-wide">
                {isEn ? "Talib-e-Ilm • Da'ee Ilallah" : 'তলিবে ইলম • দায়ী ইল্লাল্লাহ'}
              </p>
            </div>

            {/* Clean Light Box with Exact Bio Text */}
            <div className="w-full max-w-3xl rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 text-left shadow-2xs">
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
                onClick={() => {
                  onClose();
                  setTimeout(() => onOpenInvitationModal(), 60);
                }}
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

          {/* Categorized Bayan Videos Inside Chairman Popup */}
          <div className="pt-6 border-t border-emerald-100">
            <WazVideoSection embedded />
          </div>
        </div>

        {/* Bottom Sticky Footer */}
        <div className="px-5 sm:px-7 py-3.5 bg-slate-50 border-t border-emerald-100 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            {isEn ? 'Close' : 'বন্ধ করুন'}
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              setTimeout(() => onOpenInvitationModal(), 60);
            }}
            className="inline-flex items-center justify-center gap-2.5 py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#047857] via-[#059669] to-[#10b981] hover:brightness-110 text-white font-bold text-xs sm:text-sm border border-white/40 shadow-md animate-soft-breath-glow transition-all cursor-pointer"
          >
            <span className="relative inline-flex items-center justify-center w-5 h-5 shrink-0" aria-hidden="true">
              <span className="absolute inset-0 rounded-full bg-white/35 animate-ping" />
              <Mic className="w-4 h-4 text-white animate-mic-twinkle relative z-10" />
            </span>
            <span>{isEn ? 'Apply for Invitation' : 'দাওয়াতের জন্য আবেদন'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
