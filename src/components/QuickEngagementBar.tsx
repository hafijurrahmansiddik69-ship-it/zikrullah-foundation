import React from 'react';
import { UserPlus, HandHeart, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface QuickEngagementBarProps {
  onOpenVolunteer?: () => void;
  onOpenNeedyInfo?: () => void;
  onOpenContactModal?: () => void;
  variant?: 'default' | 'compact';
  className?: string;
}

export const QuickEngagementBar: React.FC<QuickEngagementBarProps> = ({
  onOpenVolunteer,
  onOpenNeedyInfo,
  onOpenContactModal,
  variant = 'default',
  className = '',
}) => {
  const { isEn } = useLanguage();

  const btnPadding =
    variant === 'compact'
      ? 'px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm'
      : 'px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm';

  return (
    <div className={`w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 font-solaiman ${className}`}>
      {/* 1. "স্বেচ্ছাসেবক হিসেবে যোগ দিন" (Rich Emerald Green) */}
      <button
        type="button"
        onClick={onOpenVolunteer}
        className={`inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#064e3b] hover:from-[#086a51] hover:to-[#086a51] text-white rounded-full ${btnPadding} font-semibold shadow-[0_4px_14px_rgba(6,78,59,0.28)] border-2 border-emerald-300/80 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0 group`}
      >
        <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-emerald-200 group-hover:scale-110 transition-transform" />
        <span>{isEn ? 'Join as Volunteer' : 'স্বেচ্ছাসেবক হিসেবে যোগ দিন'}</span>
      </button>

      {/* 2. "আপনার গ্রামের অসহায় মানুষের তথ্য দিন" (Deep Navy Blue) */}
      <button
        type="button"
        onClick={onOpenNeedyInfo}
        className={`inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] hover:from-[#1e293b] hover:to-[#0f172a] text-white rounded-full ${btnPadding} font-semibold shadow-[0_4px_14px_rgba(14,165,233,0.26)] border-2 border-cyan-400/80 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0 group`}
      >
        <span className="relative inline-flex items-center justify-center shrink-0">
          <HandHeart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
          </span>
        </span>
        <span>{isEn ? 'Share Needy Info' : 'আপনার গ্রামের অসহায় মানুষের তথ্য দিন'}</span>
      </button>

      {/* 3. "সরাসরি যোগাযোগ করুন" (Clean White Background) */}
      <button
        type="button"
        onClick={onOpenContactModal}
        className={`inline-flex items-center gap-1.5 sm:gap-2 bg-white hover:bg-slate-50 text-slate-900 rounded-full ${btnPadding} font-semibold shadow-[0_4px_14px_rgba(16,185,129,0.2)] border-2 border-emerald-500/80 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0 group`}
      >
        <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-emerald-700 group-hover:rotate-12 transition-transform" />
        <span>{isEn ? 'Direct Contact' : 'সরাসরি যোগাযোগ করুন'}</span>
      </button>
    </div>
  );
};
