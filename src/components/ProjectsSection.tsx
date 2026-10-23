import React, { useState } from 'react';
import { 
  HandHelping, 
  HeartPulse, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  Sprout, 
  Coins, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Camera
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { eduImg, medImg, selfRelianceImg } from '../data/mockData';

interface CardConfig {
  id: string;
  targetCategoryId: string;
  icon: React.ElementType;
  gradientClass: string;
  cardBorderClass: string;
  cardHoverShadow: string;
  accentText: string;
  bannerImage: string;
}

const CARD_CONFIGS: CardConfig[] = [
  // 1. Food Relief & Shelter
  {
    id: 'food',
    targetCategoryId: 'food-relief',
    icon: HandHelping,
    gradientClass: 'from-[#ff7e5f] to-[#feb47b]',
    cardBorderClass: 'border-[#ff7e5f]',
    cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(255,126,95,0.4)]',
    accentText: 'text-[#ff7e5f]',
    bannerImage: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792177305/udpqc7mfiwsc57x1ougp.jpg'
  },
  // 2. Free Healthcare & Medical Aid
  {
    id: 'medical',
    targetCategoryId: 'healthcare-medical-camp',
    icon: HeartPulse,
    gradientClass: 'from-[#00c6ff] to-[#0072ff]',
    cardBorderClass: 'border-[#00c6ff]',
    cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(0,198,255,0.4)]',
    accentText: 'text-[#00c6ff]',
    bannerImage: medImg
  },
  // 3. Blood Donation
  {
    id: 'blood',
    targetCategoryId: 'healthcare-medical-camp',
    icon: Heart,
    gradientClass: 'from-[#ff416c] to-[#ff4b2b]',
    cardBorderClass: 'border-[#ff416c]',
    cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(255,65,108,0.4)]',
    accentText: 'text-[#ff416c]',
    bannerImage: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80'
  },
  // 4. Education Aid
  {
    id: 'education',
    targetCategoryId: 'education-support',
    icon: GraduationCap,
    gradientClass: 'from-[#f6d365] to-[#fda085]',
    cardBorderClass: 'border-[#f6d365]',
    cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(246,211,101,0.4)]',
    accentText: 'text-[#f6d365]',
    bannerImage: eduImg
  },
  // 5. Self-Reliance & Youth Employment
  {
    id: 'self-reliance',
    targetCategoryId: 'youth-training',
    icon: Briefcase,
    gradientClass: 'from-[#6b21a8] to-[#3b82f6]',
    cardBorderClass: 'border-[#a855f7]',
    cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(168,85,247,0.4)]',
    accentText: 'text-[#a855f7]',
    bannerImage: selfRelianceImg
  },
  // 6. Tube-wells & Tree Plantation (Sadaqah Jariyah)
  {
    id: 'water-trees',
    targetCategoryId: 'tubewell-tree-plantation',
    icon: Sprout,
    gradientClass: 'from-[#11998e] to-[#38ef7d]',
    cardBorderClass: 'border-[#38ef7d]',
    cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(56,239,125,0.4)]',
    accentText: 'text-[#38ef7d]',
    bannerImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80'
  },
  // 7. Zakat Fund (Shariah Compliant)
  {
    id: 'zakat',
    targetCategoryId: 'zakat-fund',
    icon: Coins,
    gradientClass: 'from-[#fbbf24] via-[#f59e0b] to-[#b45309]',
    cardBorderClass: 'border-[#f59e0b]',
    cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(245,158,11,0.45)]',
    accentText: 'text-[#fbbf24]',
    bannerImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80'
  }
];

interface ProjectsSectionProps {
  isEmbedded?: boolean;
  onOpenDonation?: (category?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  isEmbedded = false,
  onOpenDonation
}) => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedCard = selectedIndex !== null ? t.projects.cards[selectedIndex] : null;
  const activeConfig = selectedIndex !== null ? CARD_CONFIGS[selectedIndex] : null;

  const handleDonateFromModal = () => {
    if (!activeConfig) return;
    const targetCategory = activeConfig.targetCategoryId;
    setSelectedIndex(null);
    if (onOpenDonation) {
      onOpenDonation(targetCategory);
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id={isEmbedded ? undefined : "projects"} 
      className={
        isEmbedded 
          ? "py-12 sm:py-16 bg-[#080a0f] rounded-3xl sm:rounded-[36px] border border-slate-800 shadow-2xl overflow-hidden" 
          : "py-16 bg-[#080a0f]"
      }
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1.5 rounded-full bg-green-500/15 text-green-400 text-xs font-semibold mb-2.5 border border-green-500/20 shadow-sm">
            {t.projects.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            {t.projects.subtitle}
          </p>
        </div>
        
        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {t.projects.cards.map((card, idx) => {
            const config = CARD_CONFIGS[idx] || CARD_CONFIGS[0];
            const Icon = config.icon;
            const isLastCard = idx === 6;
            return (
              <div
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`w-full max-w-[200px] bg-[#0f131d] border-2 ${config.cardBorderClass} rounded-3xl p-2 shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center hover:-translate-y-2 ${config.cardHoverShadow} ${
                  isLastCard ? 'col-span-2 md:col-span-1 md:col-start-2 justify-self-center' : ''
                }`}
              >
                <div className={`w-full rounded-[18px] py-4 px-2 min-h-[100px] flex flex-col justify-center items-center bg-gradient-to-br ${config.gradientClass} shadow-inner`}>
                  <span className="text-white font-extrabold text-xs sm:text-sm mb-1 text-center drop-shadow-md leading-tight px-1">
                    {card.badge}
                  </span>
                  <Icon className="w-7 h-7 text-white drop-shadow-md mt-1" />
                </div>
                <div className="py-2.5 px-1 w-full flex flex-col items-center justify-center text-center">
                  <h3 className="font-bold text-[15px] text-white leading-tight">{card.title}</h3>
                  {'subtitle' in card && card.subtitle && (
                    <span className="text-[11px] sm:text-xs text-amber-300/90 font-medium tracking-tight mt-1 leading-snug">
                      {card.subtitle}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Interactive Details View (Modal/Popup) */}
      {selectedCard && activeConfig && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200" 
          onClick={() => setSelectedIndex(null)}
        >
          <div 
            className="bg-[#0f1422] rounded-3xl max-w-lg w-full relative border border-slate-700/80 shadow-2xl overflow-hidden my-auto text-slate-100 animate-in zoom-in-95 duration-200" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Banner with Image / Placeholder Template */}
            <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden group">
              <img 
                src={activeConfig.bannerImage} 
                alt={selectedCard.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback placeholder if image load fails
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1422] via-[#0f1422]/50 to-black/30" />

              {/* Floating Badge (Top Left) */}
              <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
                  {selectedCard.badge}
                </span>
              </div>

              {/* Editable Template Indicator (Bottom Left) */}
              <div className="absolute bottom-3 left-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-xs text-[11px] text-slate-300 border border-white/10">
                <Camera className="w-3 h-3 text-emerald-400" />
                <span>{t.projects.modalImageTemplateTag}</span>
              </div>

              {/* Close Button (Top Right) */}
              <button 
                onClick={() => setSelectedIndex(null)} 
                className="absolute top-3.5 right-3.5 text-slate-300 hover:text-white cursor-pointer z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 transition-all active:scale-95 shadow-md"
                aria-label={t.projects.modalClose}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="p-5 sm:p-7 max-h-[60vh] overflow-y-auto space-y-4">
              {/* Heading & Subtitle */}
              <div>
                <h3 className={`text-2xl sm:text-3xl font-bold font-serif-bn leading-tight ${activeConfig.accentText}`}>
                  {selectedCard.title}
                </h3>
                {'subtitle' in selectedCard && selectedCard.subtitle && (
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    {selectedCard.subtitle}
                  </p>
                )}
              </div>

              {/* Detailed Description */}
              <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed font-solaiman">
                {selectedCard.description}
              </p>

              {/* Key Highlights / Services Bullet List */}
              {'highlights' in selectedCard && Array.isArray(selectedCard.highlights) && selectedCard.highlights.length > 0 && (
                <div className="bg-[#161c2d] border border-slate-700/60 rounded-2xl p-4 sm:p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.projects.modalKeyHighlights}</span>
                  </div>
                  <ul className="space-y-2">
                    {selectedCard.highlights.map((highlight: string, hIdx: number) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-solaiman">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Transparency / Field Delivery Trust Note */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-xs">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{t.projects.modalTrustBadge}</span>
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="p-4 sm:p-6 bg-[#0a0d17] border-t border-slate-800 flex items-center gap-3">
              <button 
                type="button"
                onClick={() => setSelectedIndex(null)} 
                className="py-3 px-4 sm:px-6 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors cursor-pointer text-xs sm:text-sm"
              >
                {t.projects.modalClose}
              </button>

              <button 
                type="button"
                onClick={handleDonateFromModal}
                className="flex-1 py-3 px-4 sm:px-6 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 active:scale-98 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/50 transition-all cursor-pointer flex items-center justify-center gap-2"
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
