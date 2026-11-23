import React from 'react';
import { X, Check, Sparkles, Users, MapPin } from 'lucide-react';

interface CelebrationConfirmationPopupProps {
  displayName: string;
  isEn: boolean;
  onClose: () => void;
  contextType?: 'volunteer' | 'needy-info' | 'default';
  needyName?: string;
  needyAddress?: string;
}

interface FloatingHeartConfig {
  id: number;
  left: string;
  size: number;
  color: string;
  delay: string;
  duration: string;
  swayX: string;
  rot: string;
}

const FLOATING_HEARTS: FloatingHeartConfig[] = [
  { id: 1, left: '6%', size: 22, color: '#ff2d55', delay: '0s', duration: '3.2s', swayX: '20px', rot: '14deg' },
  { id: 2, left: '13%', size: 16, color: '#00c6ff', delay: '0.25s', duration: '3.6s', swayX: '-18px', rot: '-12deg' },
  { id: 3, left: '20%', size: 26, color: '#f43f5e', delay: '0.1s', duration: '3.4s', swayX: '24px', rot: '16deg' },
  { id: 4, left: '28%', size: 18, color: '#ec4899', delay: '0.45s', duration: '3.9s', swayX: '-22px', rot: '-14deg' },
  { id: 5, left: '35%', size: 24, color: '#3b82f6', delay: '0.15s', duration: '3.5s', swayX: '16px', rot: '10deg' },
  { id: 6, left: '43%', size: 20, color: '#ff2d55', delay: '0.6s', duration: '3.3s', swayX: '-16px', rot: '-16deg' },
  { id: 7, left: '51%', size: 28, color: '#fb7185', delay: '0.05s', duration: '3.7s', swayX: '22px', rot: '12deg' },
  { id: 8, left: '59%', size: 17, color: '#38bdf8', delay: '0.35s', duration: '3.4s', swayX: '-24px', rot: '-10deg' },
  { id: 9, left: '67%', size: 25, color: '#e11d48', delay: '0.2s', duration: '3.8s', swayX: '18px', rot: '15deg' },
  { id: 10, left: '75%', size: 19, color: '#ec4899', delay: '0.5s', duration: '3.5s', swayX: '-20px', rot: '-14deg' },
  { id: 11, left: '83%', size: 26, color: '#ff2d55', delay: '0.12s', duration: '3.3s', swayX: '16px', rot: '12deg' },
  { id: 12, left: '91%', size: 20, color: '#2563eb', delay: '0.4s', duration: '3.9s', swayX: '-18px', rot: '-12deg' },
  { id: 13, left: '10%', size: 18, color: '#fb7185', delay: '1.15s', duration: '4.1s', swayX: '22px', rot: '14deg' },
  { id: 14, left: '24%', size: 22, color: '#38bdf8', delay: '1.45s', duration: '3.8s', swayX: '-16px', rot: '-12deg' },
  { id: 15, left: '38%', size: 16, color: '#f43f5e', delay: '1.75s', duration: '4.0s', swayX: '20px', rot: '10deg' },
  { id: 16, left: '54%', size: 22, color: '#ff2d55', delay: '1.3s', duration: '3.9s', swayX: '-22px', rot: '-15deg' },
  { id: 17, left: '71%', size: 18, color: '#f59e0b', delay: '1.6s', duration: '4.2s', swayX: '18px', rot: '12deg' },
  { id: 18, left: '87%', size: 23, color: '#ec4899', delay: '1.2s', duration: '3.7s', swayX: '-20px', rot: '-14deg' },
  { id: 19, left: '16%', size: 15, color: '#2563eb', delay: '2.1s', duration: '4.3s', swayX: '15px', rot: '10deg' },
  { id: 20, left: '47%', size: 21, color: '#f43f5e', delay: '2.3s', duration: '3.9s', swayX: '-18px', rot: '-12deg' },
  { id: 21, left: '63%', size: 16, color: '#00c6ff', delay: '2.0s', duration: '4.1s', swayX: '20px', rot: '14deg' },
  { id: 22, left: '79%', size: 24, color: '#ff2d55', delay: '2.45s', duration: '3.8s', swayX: '-16px', rot: '-10deg' },
];

export const CelebrationConfirmationPopup: React.FC<CelebrationConfirmationPopupProps> = ({
  displayName,
  isEn,
  onClose,
  contextType = 'default',
  needyName,
  needyAddress,
}) => {
  return (
    <>
      {/* Facebook-Live / Birthday Style Floating Hearts & Celebration Burst */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-[60]"
        aria-hidden="true"
      >
        {FLOATING_HEARTS.map((heart) => (
          <div
            key={heart.id}
            className="absolute bottom-[-36px] animate-float-heart opacity-0"
            style={
              {
                left: heart.left,
                '--delay': heart.delay,
                '--dur': heart.duration,
                '--sway-x': heart.swayX,
                '--rot': heart.rot,
              } as React.CSSProperties
            }
          >
            <svg
              width={heart.size}
              height={heart.size}
              viewBox="0 0 24 24"
              fill={heart.color}
              className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.22)]"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Centered, Responsive International-Grade Confirmation Card */}
      <div
        className="relative z-[61] bg-white rounded-[24px] sm:rounded-[28px] w-full max-w-[370px] sm:max-w-[440px] lg:max-w-[460px] max-h-[92vh] overflow-y-auto border-2 border-[#2563eb] ring-4 ring-[#00c6ff]/15 shadow-[0_22px_55px_-10px_rgba(14,27,77,0.48),0_0_32px_rgba(0,198,255,0.32)] my-auto text-slate-800 animate-celebration-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Royal Blue Gradient Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-[#0e1b4d] via-[#2563eb] to-[#00c6ff]" />

        {/* Subtle Ambient Top Glow inside Card */}
        <div className="absolute top-2 inset-x-0 h-28 bg-gradient-to-b from-blue-50/75 via-sky-50/30 to-transparent pointer-events-none" />

        {/* Clean Close X Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#1e3a8a]/70 hover:text-[#0e1b4d] hover:bg-blue-50 transition-colors cursor-pointer z-10"
          aria-label={isEn ? 'Close' : 'বন্ধ করুন'}
        >
          <X className="w-5 h-5 stroke-[2]" />
        </button>

        <div className="relative z-10 px-6 pt-8 pb-7 sm:px-8 sm:pt-9 sm:pb-8 text-center flex flex-col items-center">
          {/* Deep Royal Blue Checkmark Circle with Crisp White Tick & Joyful Sparkles */}
          <div className="relative mb-5 flex items-center justify-center">
            <div className="absolute -inset-2 rounded-full bg-[#38bdf8]/25 blur-md animate-pulse pointer-events-none" />
            <Sparkles className="w-4 h-4 text-[#00c6ff] absolute -top-1.5 -right-3.5 animate-sparkle-drift pointer-events-none" />
            <Sparkles
              className="w-3.5 h-3.5 text-[#f43f5e] absolute -bottom-1 -left-3.5 animate-sparkle-drift pointer-events-none"
              style={{ animationDelay: '0.8s' }}
            />
            <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-gradient-to-br from-[#1d4ed8] via-[#0e1b4d] to-[#081236] border-2 border-[#38bdf8] text-white flex items-center justify-center shadow-[0_10px_28px_rgba(14,27,77,0.45),0_0_20px_rgba(56,189,248,0.45)]">
              <Check className="w-8 h-8 sm:w-9 sm:h-9 stroke-[3] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]" />
            </div>
          </div>

          {/* Dynamic Thank You Heading */}
          <h3 className="font-serif-bn font-bold text-[21px] sm:text-[26px] text-[#0e1b4d] mb-3.5 tracking-tight leading-snug break-words max-w-full">
            {isEn ? `Thank You, ${displayName}!` : `ধন্যবাদ, ${displayName}!`}
          </h3>

          {/* Context-Specific Highlight: Bold "স্বেচ্ছাসেবক" or Needy Person's Address */}
          {contextType === 'volunteer' && (
            <div className="mb-4 inline-flex items-center justify-center gap-2 px-4 py-1.5 sm:py-2 rounded-full bg-emerald-50 border border-emerald-200/90 text-[#045332] text-xs sm:text-sm font-solaiman shadow-2xs max-w-full">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#059669] shrink-0" />
              <span className="leading-snug">
                {isEn ? (
                  <>
                    Thank you for registering as a{' '}
                    <strong className="font-extrabold text-[#045332]">Volunteer</strong>
                  </>
                ) : (
                  <>
                    <strong className="font-extrabold text-[#045332]">স্বেচ্ছাসেবক</strong> হিসেবে নিবন্ধনের জন্য ধন্যবাদ
                  </>
                )}
              </span>
            </div>
          )}

          {contextType === 'needy-info' && needyAddress && (
            <div className="mb-4 w-full max-w-[330px] sm:max-w-[375px] mx-auto px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-sky-50/90 border border-sky-200 text-left shadow-2xs">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#0e1b4d] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fbbf24]" />
                </div>
                <div className="min-w-0 flex-1 font-solaiman">
                  <div className="text-[11px] sm:text-xs font-bold text-[#1e3a8a] leading-tight mb-0.5">
                    {isEn ? "Needy Person's Address" : 'অসহায় মানুষের ঠিকানা'}
                  </div>
                  {needyName && (
                    <div className="text-xs sm:text-[13px] font-semibold text-slate-700 leading-snug break-words">
                      {needyName}
                    </div>
                  )}
                  <div className="text-xs sm:text-sm font-bold text-[#0e1b4d] leading-snug break-words">
                    {needyAddress}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Soft Sky-Ivory Arabic Blessing Badge */}
          <div className="mb-5 inline-flex items-center justify-center px-6 py-2 rounded-2xl bg-[#f1f6ff] border border-[#bfdbfe] shadow-2xs">
            <span
              dir="rtl"
              lang="ar"
              className="font-cairo text-lg sm:text-xl text-[#0e1b4d] font-semibold tracking-normal leading-[1.75] select-text"
              style={{ fontFamily: "'Cairo', 'Amiri', sans-serif" }}
            >
              جَزَاكَ اللَّهُ خَيْرًا
            </span>
          </div>

          {/* Two-Paragraph Clean Gratitude Copy */}
          <div className="font-solaiman text-[#283142] text-[15px] sm:text-base leading-[1.65] max-w-[330px] sm:max-w-[350px] mx-auto space-y-3.5 mb-7">
            <p>
              {isEn
                ? 'Heartfelt gratitude from the bottom of our hearts for your kind heart and valuable information in helping people.'
                : 'মানুষের উপকারে আপনার এই সুন্দর মন ও মূল্যবান তথ্যের জন্য হৃদয়ের গভীর থেকে আন্তরিক কৃতজ্ঞতা।'}
            </p>
            <p>
              {isEn
                ? 'Our foundation team will contact you promptly, InshaAllah.'
                : 'দ্রুত আমাদের ফাউন্ডেশন টিম আপনার সাথে যোগাযোগ করবে ইনশাআল্লাহ।'}
            </p>
          </div>

          {/* Single Pill-Shaped Royal Blue Action Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full max-w-[310px] inline-flex items-center justify-center py-3 sm:py-3.5 px-6 rounded-full bg-gradient-to-r from-[#0e1b4d] via-[#1d4ed8] to-[#0b1742] hover:from-[#0b1742] hover:via-[#1e40af] hover:to-[#081236] active:scale-[0.98] text-white font-sans-bn font-bold text-[15px] sm:text-base shadow-[0_10px_24px_-6px_rgba(14,27,77,0.55),0_0_14px_rgba(37,99,235,0.28)] border border-[#60a5fa]/30 transition-all cursor-pointer"
          >
            {isEn ? 'OK' : 'ঠিক আছে'}
          </button>
        </div>
      </div>
    </>
  );
};
