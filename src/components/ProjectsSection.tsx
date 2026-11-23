import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  ArrowRight, 
  Camera,
  Heart
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal, RevealDirection, RevealDelay } from './ScrollReveal';
import { CARD_CONFIGS, CardConfig } from '../data/projectConfigs';

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
          : "py-16 bg-[#080a0f] overflow-x-clip"
      }
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* 5. নিচ দিক থেকে */}
        <ScrollReveal direction="up" className="text-center mb-10">
          <span className="inline-block px-3 py-1.5 rounded-full bg-green-500/15 text-green-400 text-xs font-semibold mb-2.5 border border-green-500/20 shadow-sm">
            {t.projects.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            {t.projects.subtitle}
          </p>
        </ScrollReveal>
        
        {/* Responsive Grid of Cards: বাম থেকে -> ডান দিক থেকে -> zoom -> উপর থেকে -> নিচ দিক থেকে */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {t.projects.cards.map((card, idx) => {
            const config = CARD_CONFIGS[idx] || CARD_CONFIGS[0];
            const Icon = config.icon;
            const isLastCard = idx === 6;
            const patterns: RevealDirection[] = ['left', 'right', 'zoom', 'down', 'up'];
            const delays: RevealDelay[] = [0, 80, 150];
            const direction: RevealDirection = patterns[idx % patterns.length];
            const delay: RevealDelay = delays[idx % delays.length];
            return (
              <ScrollReveal
                key={idx}
                direction={direction}
                delay={delay}
                className={`w-full max-w-[200px] flex ${
                  isLastCard ? 'col-span-2 md:col-span-1 md:col-start-2 justify-self-center' : ''
                }`}
              >
                <div
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full h-full bg-[#0f131d] border-2 ${config.cardBorderClass} rounded-3xl p-2 shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center hover:-translate-y-2 ${config.cardHoverShadow}`}
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
              </ScrollReveal>
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
            {/* Top Banner with Image / Placeholder Template (if available) */}
            {activeConfig.bannerImage ? (
              <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden group">
                <img 
                  src={activeConfig.bannerImage} 
                  alt={selectedCard.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback placeholder if image load fails
                    (e.currentTarget as HTMLImageElement).src = 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg';
                  }}
                />
                {/* Gradient Scrim */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0f1422]/55 to-transparent pointer-events-none" />

                {/* Floating Badge (Top Left) */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-black/55 border border-white/20 shadow-md">
                    {selectedCard.badge}
                  </span>
                </div>

                {/* Editable Template Indicator (Bottom Left) */}
                <div className="absolute bottom-2.5 left-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/45 text-[11px] text-slate-200 border border-white/10">
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
            ) : (
              <div className="absolute top-4 right-4 z-30">
                <button 
                  onClick={() => setSelectedIndex(null)} 
                  className="text-slate-400 hover:text-white cursor-pointer p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 backdrop-blur-md border border-slate-600 transition-all active:scale-95 shadow-md"
                  aria-label={t.projects.modalClose}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

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
