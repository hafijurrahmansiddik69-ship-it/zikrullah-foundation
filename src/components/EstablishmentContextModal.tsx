import React, { useEffect } from 'react';
import { X, Heart, BookOpen, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FOUNDATION_INFO } from '../data/mockData';

interface EstablishmentContextModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDonation?: () => void;
}

export const EstablishmentContextModal: React.FC<EstablishmentContextModalProps> = ({
  isOpen,
  onClose,
  onOpenDonation,
}) => {
  const { t, isEn } = useLanguage();

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-gradient-to-b from-[#091522] via-[#060e17] to-[#03070c] rounded-3xl max-w-2xl w-full relative border-2 border-cyan-400/50 shadow-[0_20px_60px_rgba(0,198,255,0.3)] overflow-hidden my-auto text-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Cyan/Blue Top Header Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#00c6ff]" />

        {/* Top Header Section */}
        <div className="relative p-5 sm:p-7 pb-4 border-b border-cyan-900/40">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <span className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
              <BookOpen className="w-5 h-5 text-cyan-300" />
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-cyan-300 font-solaiman">
              {isEn ? 'Foundation Journey & Historical Inception' : 'প্রতিষ্ঠার প্রেক্ষাপট ও আত্মপ্রকাশ'}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-bn text-white leading-tight">
            {isEn ? 'The Sacred Vow to Stand by Distressed Humanity' : 'অসহায় মানুষের নীরব কান্নায় পাশে দাঁড়ানোর পবিত্র অঙ্গীকার'}
          </h2>

          {/* Quick Badges: Founder, Date, Location */}
          <div className="flex flex-wrap items-center gap-2 pt-3 text-xs text-emerald-200 font-solaiman">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/30">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEn ? 'Founder:' : 'উদ্যোগ ও প্রতিষ্ঠাতা:'} <strong>{FOUNDATION_INFO.founder}</strong></span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/30">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEn ? 'Established: Jan 1, 2023' : 'প্রতিষ্ঠা: ১লা জানুয়ারি ২০২৩'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/30">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEn ? 'HQ: Gujia, Bogura' : 'প্রধান কার্যালয়: গুজিয়া, বগুড়া'}</span>
            </span>
          </div>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-5 sm:p-7 max-h-[62vh] overflow-y-auto space-y-5 font-solaiman text-slate-200 text-sm sm:text-base leading-relaxed">
          {/* 1. Founder's Heartfelt Statement (Quote Box) */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c2419] to-[#06170f] p-4 sm:p-6 border border-emerald-500/40 shadow-inner">
            <span className="absolute top-2 right-4 text-emerald-700/20 text-6xl font-serif select-none pointer-events-none">
              “
            </span>
            <div className="relative z-10 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{isEn ? "Founder's Heartfelt Impulse" : 'প্রতিষ্ঠাতার কলিজার অনুভূতি'}</span>
              </div>
              <p className="text-slate-100 font-normal leading-relaxed text-sm sm:text-base">
                {t.hero.quote}
              </p>
            </div>
          </div>

          {/* 2. Official Establishment & Mission History */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 space-y-2.5">
            <h3 className="font-bold text-emerald-300 text-sm sm:text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{isEn ? 'Why Zikrullah Foundation Came Into Being' : 'যে মানবিক দায়বদ্ধতা থেকে জিকরুল্লাহ ফাউন্ডেশনের জন্ম'}</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-[15px]">
              {t.hero.history}
            </p>
          </div>

          {/* 3. Quranic Guidance & Inspiration (Amiri Font) */}
          <div className="rounded-2xl bg-[#03150d] border border-emerald-400/30 p-4 sm:p-5 space-y-3">
            <p className="font-times font-bold text-amber-300 text-sm sm:text-base md:text-lg leading-[2.1] text-center" dir="rtl">
              الَّذِينَ يُنفِقُونَ أَمْوَالَهُم بِاللَّيْلِ وَالنَّهَارِ سِرًّا وَعَلَانِيَةً فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ
            </p>
            <p className="text-emerald-100 text-xs sm:text-sm text-center leading-relaxed">
              {isEn 
                ? '“Those who spend their wealth [in Allah\'s way] by night and by day, secretly and publicly - they will have their reward with their Lord.”'
                : '“যারা নিজেদের ধন-সম্পদ রাতে ও দিনে, গোপনে ও প্রকাশ্যে ব্যয় করে, তাদের জন্য তাদের রবের নিকট রয়েছে পুরষ্কার। আর তাদের কোনো ভয় নেই এবং তারা চিন্তিতও হবে না।”'}
              <span className="block text-amber-400/90 text-xs mt-1">
                {isEn ? '— Surah Al-Baqarah : 274' : '— সূরা আল-বাক্বারাহ্ : ২৭৪'}
              </span>
            </p>
          </div>

          {/* 4. Prophetic Hadith Inspiration */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-200 text-xs sm:text-sm leading-relaxed text-center">
            <p>
              রাসূলুল্লাহ (ﷺ) বলেছেন— <span className="font-times font-bold text-white text-sm sm:text-base">«مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ»</span> ‘সদকার কারণে কখনো সম্পদের ঘাটতি হয় না’ <span className="text-xs text-amber-300">(সহিহ মুসলিম: ২৫৮৮)</span>
            </p>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 bg-[#040806] border-t border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto py-2.5 px-5 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
          >
            {isEn ? 'Close' : 'ঠিক আছে / বন্ধ করুন'}
          </button>

          {onOpenDonation && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenDonation();
              }}
              className="w-full sm:w-auto py-2.5 px-6 rounded-full bg-gradient-to-r from-emerald-600 to-[#045332] hover:from-emerald-500 hover:to-[#056338] text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/50 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 border border-emerald-400/40"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t.common.donateNow}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
