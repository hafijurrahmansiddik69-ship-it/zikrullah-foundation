import React from 'react';
import { 
  HeartPulse, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  Sprout, 
  Coins 
} from 'lucide-react';

// Bespoke Food & Clothing Vector Icon combining warm winter clothing and nourishing food
export const FoodClothingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: className || 'w-5 h-5 sm:w-6 sm:h-6',
      ...props
    },
    // Upper part: Warm winter shirt / clothing with collar
    React.createElement('path', {
      d: 'M16.5 3.5 13.5 2a3 3 0 0 0-3 0L7.5 3.5a1.5 1.5 0 0 0-.9 1.5l.3 2.2a1 1 0 0 0 .9.8h1.2v2h6v-2h1.2a1 1 0 0 0 .9-.8l.3-2.2a1.5 1.5 0 0 0-.9-1.5z'
    }),
    // Lower part: Nourishing food bowl
    React.createElement('path', {
      d: 'M4.5 13.5h15a1 1 0 0 1 1 1c0 3.87-3.36 6.5-7.5 6.5s-7.5-2.63-7.5-6.5a1 1 0 0 1 1-1z'
    }),
    // Warm rising nourishment vapor lines
    React.createElement('path', { d: 'M8.5 11v1' }),
    React.createElement('path', { d: 'M12 10.5v1.5' }),
    React.createElement('path', { d: 'M15.5 11v1' })
  );
};

export interface CardConfig {
  id: string;
  targetCategoryId: string;
  icon: React.ElementType;
  gradientClass: string;
  cardBorderClass: string;
  cardHoverShadow: string;
  accentText: string;
  bannerImage: string;
}

export const CARD_CONFIGS: CardConfig[] = [
  // 1. Food Relief, Winter Clothes & Shelter (Rich Navy Blue & Food/Clothing Icon)
  {
    id: 'food',
    targetCategoryId: 'food-relief',
    icon: FoodClothingIcon,
    gradientClass: 'from-[#0a1c3d] via-[#103163] to-[#1b4e8c]',
    cardBorderClass: 'border-[#38bdf8]',
    cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(16,49,99,0.55)]',
    accentText: 'text-[#38bdf8]',
    bannerImage: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763626/ylatsvcdpurnpitu1hnt.jpg'
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
    bannerImage: ''
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
    bannerImage: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795061470/lq8bbafdfnyk7pffhy2e.jpg'
  },
  // 4. Education Aid (Color matched to water-trees emerald green as requested)
  {
    id: 'education',
    targetCategoryId: 'education-support',
    icon: GraduationCap,
    gradientClass: 'from-[#11998e] to-[#38ef7d]',
    cardBorderClass: 'border-[#38ef7d]',
    cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(56,239,125,0.4)]',
    accentText: 'text-[#38ef7d]',
    bannerImage: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763851/uhoy2dhdewkxkbqpf6hs.jpg'
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
    bannerImage: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763774/zwnrunrscvxecmhnm1zk.jpg'
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
    bannerImage: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792764025/zlscwxoft986d0ud4wi7.jpg'
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
    bannerImage: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792177305/udpqc7mfiwsc57x1ougp.jpg'
  }
];
