import React from 'react';
import { 
  HeartPulse, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  Sprout, 
  Coins 
} from 'lucide-react';

// Food & Clothing Icon: High fidelity image provided by user
export const FoodClothingIcon: React.FC<{ className?: string }> = ({ className }) => {
  return React.createElement('img', {
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795187359/ulgwm2ww3m6rxqjzxyms.png',
    alt: 'খাদ্য ও বস্ত্র',
    className: className || 'w-6 h-6 sm:w-8 sm:h-8 object-contain drop-shadow-md',
    loading: 'lazy'
  });
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
