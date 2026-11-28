import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  X, 
  ShieldCheck, 
  Heart,
  UserPlus,
  HandHeart,
  PhoneCall,
  Coins,
  User
} from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { EstablishmentContextModal } from './EstablishmentContextModal';
import { CARD_CONFIGS } from '../data/projectConfigs';
import { ScrollReveal, RevealDirection, RevealDelay } from './ScrollReveal';
import { ModalEngagementBlocks } from './ModalEngagementBlocks';

interface HeroProps {
  onOpenDonation?: (category?: string) => void;
  onNavigateToAbout?: () => void;
  onNavigateToFounder?: () => void;
  onOpenEstablishmentContext?: () => void;
  onOpenVolunteer?: () => void;
  onOpenNeedyInfo?: () => void;
  onOpenContactModal?: () => void;
}

const BANGLADESH_DIVISIONS = [
  { id: 'dhaka', nameBn: 'ঢাকা', nameEn: 'Dhaka', x: 330, y: 355 },
  { id: 'chattogram', nameBn: 'চট্টগ্রাম', nameEn: 'Chattogram', x: 445, y: 485 },
  { id: 'sylhet', nameBn: 'সিলেট', nameEn: 'Sylhet', x: 460, y: 215 },
  { id: 'rajshahi', nameBn: 'রাজশাহী', nameEn: 'Rajshahi', x: 185, y: 280 },
  { id: 'rangpur', nameBn: 'রংপুর', nameEn: 'Rangpur', x: 255, y: 135 },
  { id: 'khulna', nameBn: 'খুলনা', nameEn: 'Khulna', x: 225, y: 465 },
  { id: 'barishal', nameBn: 'বরিশাল', nameEn: 'Barishal', x: 315, y: 505 },
  { id: 'mymensingh', nameBn: 'ময়মনসিংহ', nameEn: 'Mymensingh', x: 345, y: 235 },
];

const BOGURA_HUB = { x: 270, y: 245, nameBn: 'বগুড়া', nameEn: 'Bogura' };

export const Hero: React.FC<HeroProps> = ({ 
  onOpenDonation, 
  onNavigateToAbout,
  onNavigateToFounder,
  onOpenEstablishmentContext,
  onOpenVolunteer,
  onOpenNeedyInfo,
  onOpenContactModal
}) => {
  const { t, isEn } = useLanguage();
  const [isContextModalOpen, setIsContextModalOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  // First 6 core welfare activity cards in 10 Minute School 2x3 grid (3 cards per line)
  const sixCoreCards = t.projects.cards.slice(0, 6);
  const zakatCard = t.projects.cards[6];

  const selectedCard = selectedCardIndex !== null ? t.projects.cards[selectedCardIndex] : null;
  const activeConfig = selectedCardIndex !== null ? CARD_CONFIGS[selectedCardIndex] : null;

  const handleDonateFromModal = () => {
    if (!activeConfig) return;
    const targetCategory = activeConfig.targetCategoryId;
    setSelectedCardIndex(null);
    if (onOpenDonation) {
      onOpenDonation(targetCategory);
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#030805] text-white pt-8 sm:pt-12 pb-16 sm:pb-20"
    >
      {/* 1. Background Layer: User's Cloudinary Image + Bangladesh Map & Bogura Light Rays Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Background Image */}
        <img
          src="https://res.cloudinary.com/dlklqihg6/image/upload/v1795184184/em2z9e9nrdtppmjm5wvm.png"
          alt="Zikrullah Foundation Background"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.06]"
        />
        
        {/* Bangladesh Map & Bogura Light Rays Overlay (Full uncropped responsive framing across all screens) */}
        <div className="absolute inset-0 flex items-start justify-center pt-4 sm:pt-7 pb-4 px-2 pointer-events-none select-none opacity-80 sm:opacity-90 animate-map-opening">
          <svg
            viewBox="15 20 570 635"
            className="w-full h-auto max-w-[94vw] sm:max-w-[580px] md:max-w-[640px] lg:max-w-[680px] max-h-[92%] object-contain mx-auto select-none pointer-events-none drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]"
            preserveAspectRatio="xMidYMin meet"
          >
            <defs>
              <linearGradient id="bdMapFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#064e3b" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#047857" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#022c22" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="bdMapBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.75" />
              </linearGradient>
              <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#34d399" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
              </linearGradient>
              <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Stylized Bangladesh Map Silhouette */}
            <path
              d="M 260 55 
                 C 275 65 295 90 300 115 
                 C 310 140 345 150 365 140 
                 C 395 130 425 145 460 170 
                 C 495 190 525 210 535 245 
                 C 525 275 490 290 470 325 
                 C 460 355 485 390 495 440 
                 C 515 510 520 590 510 650 
                 C 490 630 475 570 445 530 
                 C 420 500 390 515 370 540 
                 C 350 570 320 610 280 610 
                 C 240 610 220 570 200 510 
                 C 180 460 170 410 180 360 
                 C 170 315 150 275 160 235 
                 C 170 195 200 155 220 120 
                 C 235 90 250 65 260 55 Z"
              fill="url(#bdMapFill)"
              stroke="url(#bdMapBorder)"
              strokeWidth="1.8"
              filter="url(#mapGlow)"
            />

            {/* Radiant Light Rays Streaming from Bogura to all 8 Directions */}
            {BANGLADESH_DIVISIONS.map((div) => (
              <g key={div.id}>
                <line
                  x1={BOGURA_HUB.x}
                  y1={BOGURA_HUB.y}
                  x2={div.x}
                  y2={div.y}
                  stroke="url(#rayGrad)"
                  strokeWidth="1.8"
                  strokeDasharray="6 4"
                  className="animate-ray-stream"
                />
              </g>
            ))}

            {/* Bogura Epicenter / Focal Beacon */}
            <g>
              <circle
                cx={BOGURA_HUB.x}
                cy={BOGURA_HUB.y}
                r="20"
                fill="rgba(245, 158, 11, 0.22)"
                className="animate-ping"
              />
              <circle
                cx={BOGURA_HUB.x}
                cy={BOGURA_HUB.y}
                r="32"
                fill="none"
                stroke="rgba(52, 211, 153, 0.4)"
                strokeWidth="1.2"
                className="animate-pulse"
              />
              <circle
                cx={BOGURA_HUB.x}
                cy={BOGURA_HUB.y}
                r="6.5"
                fill="#f59e0b"
                filter="url(#mapGlow)"
              />
              <circle
                cx={BOGURA_HUB.x}
                cy={BOGURA_HUB.y}
                r="3"
                fill="#ffffff"
              />
              {/* Bogura HQ Tag */}
              <rect
                x={BOGURA_HUB.x - 48}
                y={BOGURA_HUB.y - 28}
                width="96"
                height="17"
                rx="8.5"
                fill="rgba(6, 78, 59, 0.9)"
                stroke="#34d399"
                strokeWidth="1"
              />
              <text
                x={BOGURA_HUB.x}
                y={BOGURA_HUB.y - 16}
                textAnchor="middle"
                fill="#fde047"
                fontSize="10"
                fontWeight="bold"
                className="font-solaiman select-none"
              >
                {isEn ? 'Bogura (HQ)' : 'বগুড়া (হেডকোয়ার্টার)'}
              </text>
            </g>
          </svg>
        </div>

        {/* Soft Dark Vignette to keep foreground text razor sharp */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020704]/80 via-black/55 to-[#010503]/92 pointer-events-none" />
      </div>

      {/* Main Foreground Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-6 flex flex-col items-center text-center">
        
        {/* Top Header: Foundation Name & Slogan (Reveals smoothly right after Bogura map & light rays) */}
        <div className="max-w-3xl mx-auto mb-3 sm:mb-4">
          <div className="hero-reveal-fade hero-delay-900 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold mb-2 shadow-[0_0_15px_rgba(16,185,129,0.2)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>{isEn ? 'Humanity • Da\'wah • Education' : 'মানবসেবা • দাওয়াহ • শিক্ষা'}</span>
          </div>

          <h1 className="font-serif-bn font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.2] drop-shadow-md">
            <span className="hero-reveal-left hero-delay-1050 block">
              {isEn ? FOUNDATION_INFO.englishName : FOUNDATION_INFO.name}
            </span>
            {/* Slogan font size made slightly smaller as requested */}
            <span className="hero-reveal-up hero-delay-1200 block text-amber-300 font-solaiman text-xs sm:text-base md:text-xl font-medium tracking-wide drop-shadow-sm mt-1.5 sm:mt-2 opacity-95">
              {t.common.slogan}
            </span>
          </h1>
        </div>

        {/* 2. Exact Section Sequence Buttons: "প্রতিষ্ঠার প্রেক্ষাপট" -> "আমাদের সম্পর্কে জানুন" -> "চেয়ারম্যান পরিচিতি" */}
        <div className="hero-reveal-zoom hero-delay-1350 flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 mb-7 sm:mb-10 px-1 sm:px-2 font-bornomala w-full max-w-full">
          
          {/* Button 1: "প্রতিষ্ঠার প্রেক্ষাপট" */}
          <button
            type="button"
            onClick={() => {
              if (onOpenEstablishmentContext) {
                onOpenEstablishmentContext();
              } else {
                setIsContextModalOpen(true);
              }
            }}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#00b4ea] hover:to-[#005ece] active:scale-95 text-white font-bold text-[11px] sm:text-sm shadow-[0_0_18px_rgba(0,198,255,0.45)] border-2 border-cyan-200 transition-all cursor-pointer whitespace-nowrap group shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:rotate-6 transition-transform shrink-0" />
            <span className="tracking-wide">
              {isEn ? 'Background of Establishment' : 'প্রতিষ্ঠার প্রেক্ষাপট'}
            </span>
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-100 animate-pulse shrink-0" />
          </button>

          {/* Button 2: "আমাদের সম্পর্কে জানুন" */}
          <button
            type="button"
            onClick={onNavigateToAbout}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-100 active:scale-95 text-slate-900 font-bold text-[11px] sm:text-sm shadow-[0_0_18px_rgba(16,185,129,0.25)] border-2 border-emerald-500/80 transition-all cursor-pointer whitespace-nowrap group shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 group-hover:scale-110 transition-transform shrink-0" />
            <span className="tracking-wide">
              {isEn ? 'Learn About Us' : 'আমাদের সম্পর্কে জানুন'}
            </span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          {/* Button 3: "প্রতিষ্ঠাতা ও চেয়ারম্যান" Full Page (Matching "আমাদের সম্পর্কে জানুন" white/emerald colors) */}
          {onNavigateToFounder && (
            <button
              type="button"
              onClick={onNavigateToFounder}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-100 active:scale-95 text-slate-900 font-bold text-[11px] sm:text-sm shadow-[0_0_18px_rgba(16,185,129,0.25)] border-2 border-emerald-500/80 transition-all cursor-pointer whitespace-nowrap group shrink-0"
            >
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 group-hover:scale-110 transition-transform shrink-0" />
              <span className="tracking-wide">
                {isEn ? 'Founder & Chairman' : 'প্রতিষ্ঠাতা ও চেয়ারম্যান'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          )}

        </div>

        {/* 3. আমাদের সেবামূলক কার্যক্রম — ১০ মিনিট স্কুলের হুবহু আদলে মসৃণ গোল আকৃতির ২ লাইনে ৬টি কার্ড */}
        <div id="projects" className="w-full pt-1">
          {/* Section Sub-heading */}
          <div className="hero-reveal-down hero-delay-1500 text-center mb-5 sm:mb-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-serif-bn text-white tracking-tight">
              {t.projects.title}
            </h2>
            <p className="text-slate-300 font-solaiman text-[11px] sm:text-sm mt-1 max-w-xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>

          {/* 10 Minute School Exact Style: Smooth rounded squircles & spacious gaps */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 md:gap-6 justify-items-center max-w-4xl mx-auto w-full">
            {sixCoreCards.map((card, idx) => {
              const config = CARD_CONFIGS[idx] || CARD_CONFIGS[0];
              const Icon = config.icon;
              const patterns: RevealDirection[] = ['left', 'right', 'zoom', 'down', 'up'];
              const delays: RevealDelay[] = [0, 80, 150];
              const direction: RevealDirection = patterns[idx % patterns.length];
              const delay: RevealDelay = delays[idx % delays.length];

              return (
                <ScrollReveal
                  key={idx}
                  direction={direction}
                  delay={delay}
                  className="w-full flex justify-center"
                >
                  <div
                    onClick={() => setSelectedCardIndex(idx)}
                    className={`w-full max-w-[210px] bg-[#0c121d]/90 backdrop-blur-md border-2 ${config.cardBorderClass} rounded-[20px] sm:rounded-[26px] p-2 sm:p-3 shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center hover:-translate-y-2 ${config.cardHoverShadow} active:scale-95 group`}
                  >
                    {/* Inner Colorful Rounded Squircle Box (10 Minute School app icon style) */}
                    <div className={`w-full rounded-xl sm:rounded-2xl py-2.5 sm:py-3.5 px-1 min-h-[64px] sm:min-h-[96px] flex flex-col justify-center items-center bg-gradient-to-br ${config.gradientClass} shadow-inner group-hover:scale-[1.02] transition-transform`}>
                      <span className="text-white font-extrabold text-[10px] sm:text-xs mb-0.5 text-center drop-shadow-md leading-tight px-0.5 font-serif-bn line-clamp-1">
                        {card.badge}
                      </span>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-md mt-0.5" />
                    </div>

                    {/* Card Title & Subtitle Below */}
                    <div className="py-1.5 sm:py-2.5 px-0.5 w-full flex flex-col items-center justify-center text-center">
                      <h3 className="font-bold text-[11px] sm:text-[14px] text-white leading-tight font-serif-bn line-clamp-1">
                        {card.title}
                      </h3>
                      {'subtitle' in card && card.subtitle && (
                        <span className="text-[8.5px] sm:text-xs text-amber-300/90 font-medium tracking-tight mt-0.5 sm:mt-1 leading-snug line-clamp-1 font-solaiman hidden xs:block">
                          {card.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* 7th Project: শরী‘আহ সম্মত যাকাত তহবিল (Pill CTA Button right below 6 cards like 10MS) */}
          {zakatCard && (
            <div className="mt-4 sm:mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setSelectedCardIndex(6)}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#b45309] hover:from-[#f59e0b] hover:to-[#92400e] text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-950/40 border-2 border-amber-300/90 active:scale-95 transition-all cursor-pointer font-serif-bn whitespace-nowrap group"
              >
                <Coins className="w-4 h-4 text-slate-950 shrink-0 group-hover:rotate-12 transition-transform" />
                <span>{isEn ? 'Shariah Compliant Zakat Fund' : 'শরী‘আহ ভিত্তিক যাকাত তহবিল'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950 shrink-0 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* 4. Directly Underneath the 7 Activity Icons: The 3 Action Buttons in their Original Colors */}
          <div className="w-full max-w-4xl mx-auto mt-7 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 font-solaiman">
            
            {/* 1. "স্বেচ্ছাসেবক হিসেবে যোগ দিন" (Rich Emerald Green) */}
            <button
              type="button"
              onClick={onOpenVolunteer}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#064e3b] hover:from-[#086a51] hover:to-[#086a51] text-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold shadow-[0_0_18px_rgba(6,78,59,0.5)] border-2 border-emerald-300/80 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0 group"
            >
              <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-emerald-200 group-hover:scale-110 transition-transform" />
              <span>{isEn ? 'Join as Volunteer' : 'স্বেচ্ছাসেবক হিসেবে যোগ দিন'}</span>
            </button>

            {/* 2. "আপনার গ্রামের অসহায় মানুষের তথ্য দিন" (Deep Navy Blue) */}
            <button
              type="button"
              onClick={onOpenNeedyInfo}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] hover:from-[#1e293b] hover:to-[#0f172a] text-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold shadow-[0_0_18px_rgba(14,165,233,0.4)] border-2 border-cyan-400/80 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0 group"
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
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white hover:bg-slate-100 text-slate-900 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold shadow-[0_0_18px_rgba(16,185,129,0.25)] border-2 border-emerald-500/80 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0 group"
            >
              <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-emerald-700 group-hover:rotate-12 transition-transform" />
              <span>{isEn ? 'Direct Contact' : 'সরাসরি যোগাযোগ করুন'}</span>
            </button>

          </div>

        </div>

      </div>

      {/* "প্রতিষ্ঠার প্রেক্ষাপট" Popup Modal */}
      <EstablishmentContextModal
        isOpen={isContextModalOpen}
        onClose={() => setIsContextModalOpen(false)}
        onOpenDonation={() => {
          setIsContextModalOpen(false);
          if (onOpenDonation) onOpenDonation('general-sadaqah');
        }}
      />

      {/* 4. ১০ মিনিট স্কুল স্টাইল ইন্টারেক্টিভ পপআপ (নামের দিকে ২ লাইন + ডানপাশে ৩ লাইন) */}
      {selectedCard && activeConfig && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200" 
          onClick={() => setSelectedCardIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-[#0f1422] rounded-3xl max-w-2xl w-full relative border border-slate-700/80 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden my-auto text-slate-100 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Banner with Image (full uncropped view for all core service activities) */}
            {activeConfig.bannerImage ? (
              <div className="relative w-full bg-[#090d16] overflow-hidden shrink-0 flex items-center justify-center border-b border-slate-800/80">
                <img 
                  src={activeConfig.bannerImage} 
                  alt={selectedCard.title} 
                  className="w-full h-auto max-h-[48vh] sm:max-h-[58vh] object-contain mx-auto block"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg';
                  }}
                />
                <button 
                  onClick={() => setSelectedCardIndex(null)} 
                  className="absolute top-3 right-3 text-slate-200 hover:text-white cursor-pointer z-20 p-2 rounded-full bg-black/65 hover:bg-black/90 backdrop-blur-md border border-white/25 transition-all active:scale-95 shadow-md"
                  aria-label={t.projects.modalClose}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-800 shrink-0">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-emerald-950/80 border border-emerald-500/30">
                  {selectedCard.badge}
                </span>
                <button 
                  onClick={() => setSelectedCardIndex(null)} 
                  className="text-slate-400 hover:text-white cursor-pointer p-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
                  aria-label={t.projects.modalClose}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Modal Body: 10 Minute School Split (নামের দিকে ২ লাইন + ডানপাশে ৩ লাইন) */}
            <div className="p-5 sm:p-7 flex-1 overflow-y-auto space-y-6">
              
              <div className="space-y-3 text-left">
                {/* Line 1: Badge / Category */}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-white/10 text-cyan-300 border border-white/10 font-solaiman uppercase tracking-wider">
                  {selectedCard.badge}
                </span>

                {/* Line 2: Prominent Project Title */}
                <h3 className={`text-2xl sm:text-3xl font-bold font-serif-bn leading-tight ${activeConfig.accentText}`}>
                  {selectedCard.title}
                </h3>

                {'subtitle' in selectedCard && selectedCard.subtitle && (
                  <p className="text-xs sm:text-sm text-amber-300/90 font-medium font-solaiman">
                    {selectedCard.subtitle}
                  </p>
                )}

                {/* Summary Description */}
                <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed font-solaiman pt-1">
                  {selectedCard.description}
                </p>

                {/* Trust Badge */}
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/25 text-emerald-300 text-xs font-solaiman pt-2.5">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{t.projects.modalTrustBadge}</span>
                </div>
              </div>

              {/* Bottom Matching Action & Update Blocks Across All 7 Activity Popups */}
              <ModalEngagementBlocks
                sourceLabel={`কার্যক্রম: ${selectedCard.title}`}
                onDonate={handleDonateFromModal}
                onVolunteer={() => {
                  setSelectedCardIndex(null);
                  if (onOpenVolunteer) {
                    setTimeout(() => onOpenVolunteer(), 60);
                  }
                }}
              />

            </div>

            {/* Modal Footer with Actions */}
            <div className="p-4 sm:p-6 bg-[#0a0d17] border-t border-slate-800 flex items-center gap-3 shrink-0">
              <button 
                type="button"
                onClick={() => setSelectedCardIndex(null)} 
                className="py-2.5 sm:py-3 px-4 sm:px-6 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer text-xs sm:text-sm font-solaiman"
              >
                {t.projects.modalClose}
              </button>

              <button 
                type="button"
                onClick={handleDonateFromModal}
                className="flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 active:scale-98 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/50 transition-all cursor-pointer flex items-center justify-center gap-2 font-solaiman"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>{t.projects.modalDonate}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
