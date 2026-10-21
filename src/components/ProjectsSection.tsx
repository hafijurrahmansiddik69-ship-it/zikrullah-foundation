import React, { useState } from 'react';
import { HandHelping, HeartPulse, Heart, GraduationCap, Briefcase, Sprout, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CardStyle {
  icon: React.ElementType;
  gradientClass: string;
  cardBorderClass: string;
  cardHoverShadow: string;
}

const CARD_STYLES: CardStyle[] = [
  { icon: HandHelping, gradientClass: 'from-[#ff7e5f] to-[#feb47b]', cardBorderClass: 'border-[#ff7e5f]', cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(255,126,95,0.4)]' },
  { icon: HeartPulse, gradientClass: 'from-[#00c6ff] to-[#0072ff]', cardBorderClass: 'border-[#00c6ff]', cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(0,198,255,0.4)]' },
  { icon: Heart, gradientClass: 'from-[#ff416c] to-[#ff4b2b]', cardBorderClass: 'border-[#ff416c]', cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(255,65,108,0.4)]' },
  { icon: GraduationCap, gradientClass: 'from-[#f6d365] to-[#fda085]', cardBorderClass: 'border-[#f6d365]', cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(246,211,101,0.4)]' },
  { icon: Briefcase, gradientClass: 'from-[#6b21a8] to-[#3b82f6]', cardBorderClass: 'border-[#a855f7]', cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(168,85,247,0.4)]' },
  { icon: Sprout, gradientClass: 'from-[#11998e] to-[#38ef7d]', cardBorderClass: 'border-[#38ef7d]', cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(56,239,125,0.4)]' }
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {t.projects.cards.map((card, idx) => {
            const style = CARD_STYLES[idx] || CARD_STYLES[0];
            const Icon = style.icon;
            return (
              <div
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`w-full max-w-[200px] bg-[#0f131d] border-2 ${style.cardBorderClass} rounded-3xl p-2 shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center hover:-translate-y-2 ${style.cardHoverShadow}`}
              >
                <div className={`w-full rounded-[18px] py-4 px-2 min-h-[100px] flex flex-col justify-center items-center bg-gradient-to-br ${style.gradientClass} shadow-inner`}>
                  <span className="text-white font-extrabold text-sm mb-1 text-center drop-shadow-md">{card.badge}</span>
                  <Icon className="w-7 h-7 text-white drop-shadow-md mt-1" />
                </div>
                <h3 className="font-bold text-[15px] text-white py-3 text-center">{card.title}</h3>
              </div>
            );
          })}
        </div>
      </div>

      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedIndex(null)}>
          <div className="bg-[#111827] rounded-3xl p-8 max-w-sm w-full relative border border-white/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedIndex(null)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer z-10 p-1 rounded-full bg-black/40"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedIndex === 0 && (
              <div className="rounded-2xl overflow-hidden mb-4 -mt-2 aspect-video bg-black/40 border border-white/10 shadow-md">
                <img 
                  src="https://res.cloudinary.com/dlklqihg6/image/upload/v1792177305/udpqc7mfiwsc57x1ougp.jpg" 
                  alt="খাদ্য সহায়তা" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h3 className="text-2xl font-bold text-green-500 mb-3">{selectedCard.title}</h3>
            <p className="text-gray-200 mb-6 leading-relaxed text-sm">{selectedCard.description}</p>
            <div className="flex gap-4">
              <button 
                onClick={() => setSelectedIndex(null)} 
                className="flex-1 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors cursor-pointer text-sm"
              >
                {t.projects.modalClose}
              </button>
              <button 
                type="button"
                onClick={() => {
                  setSelectedIndex(null);
                  if (onOpenDonation) {
                    onOpenDonation(selectedCard.title);
                  } else {
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex-1 py-3 rounded-full bg-green-600 text-white font-semibold text-center hover:bg-green-700 transition-colors text-sm cursor-pointer"
              >
                {t.projects.modalDonate}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
