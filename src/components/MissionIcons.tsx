import React from 'react';

/**
 * 1. খাদ্য (Food): Two-tone hands presenting a warm food bowl & blessing warmth
 * Vibrant Two-Tone: Deep Emerald Green + Radiant Golden Amber
 */
export const FoodIllustration: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="foodEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#087443" />
        <stop offset="100%" stopColor="#024a2c" />
      </linearGradient>
      <linearGradient id="foodGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    
    {/* Golden Steam & Blessing Aroma */}
    <path d="M24 5 C24 5 22.5 7.5 24 9.5 C25.5 11.5 24 14 24 14" stroke="url(#foodGold)" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M19 7 C19 7 17.5 9 19 10.5 C20.5 12 19 13.5 19 13.5" stroke="url(#foodGold)" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.85" />
    <path d="M29 7 C29 7 30.5 9 29 10.5 C27.5 12 29 13.5 29 13.5" stroke="url(#foodGold)" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.85" />
    
    {/* Golden Food Surface */}
    <ellipse cx="24" cy="18" rx="14" ry="3.5" fill="url(#foodGold)" />
    
    {/* Deep Emerald Food Bowl */}
    <path d="M10 18 C10 27.5 15.5 31.5 24 31.5 C32.5 31.5 38 27.5 38 18 Z" fill="url(#foodEmerald)" />
    
    {/* Inner Luster & Center Motif */}
    <path d="M12 20 C15 25.5 33 25.5 36 20" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.35" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2.5" fill="url(#foodGold)" />
    
    {/* Caring Hands Extending Sustenance (No faces) */}
    <path d="M6 28 C8.5 26 12 27 15 29.5 L18 32 C19.5 33.5 19 35.5 17 36 C14 36.5 10 34.5 6 31 Z" fill="url(#foodGold)" />
    <path d="M42 28 C39.5 26 36 27 33 29.5 L30 32 C28.5 33.5 29 35.5 31 36 C34 36.5 38 34.5 42 31 Z" fill="url(#foodGold)" />
    <path d="M14 33 L24 41 L34 33" stroke="url(#foodEmerald)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * 2. চিকিৎসা (Healthcare): First Aid Kit & Loving Compassionate Care Badge
 * Vibrant Two-Tone: Deep Emerald Green + Radiant Golden Amber & Mint
 */
export const MedicalIllustration: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="medEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#087443" />
        <stop offset="100%" stopColor="#024a2c" />
      </linearGradient>
      <linearGradient id="medGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    
    {/* Medical Kit Handle in Gold */}
    <path d="M19 13 V9.5 C19 8 20.5 6.5 22 6.5 H26 C27.5 6.5 29 8 29 9.5 V13" stroke="url(#medGold)" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* First Aid Box Body */}
    <rect x="7" y="13" width="34" height="26" rx="6" fill="url(#medEmerald)" />
    <rect x="9" y="15" width="30" height="22" rx="4" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.25" fill="none" />
    
    {/* Golden Metallic Latches */}
    <circle cx="11.5" cy="17" r="1.5" fill="url(#medGold)" />
    <circle cx="36.5" cy="17" r="1.5" fill="url(#medGold)" />
    <rect x="22" y="12" width="4" height="3" rx="1" fill="url(#medGold)" />
    
    {/* White Central Compassion Disc */}
    <circle cx="24" cy="26" r="8.5" fill="#ffffff" />
    
    {/* Emerald Medical Plus Symbol */}
    <path d="M24 21 V31 M19 26 H29" stroke="url(#medEmerald)" strokeWidth="3" strokeLinecap="round" />
    
    {/* Caring Heart Accent Badge on Top-Right */}
    <path d="M37 7 C35.5 7 34.3 7.8 33.8 8.8 C33.3 7.8 32.1 7 30.6 7 C28.6 7 27 8.6 27 10.6 C27 13.8 32 17 33.8 18 C35.6 17 40.6 13.8 40.6 10.6 C40.6 8.6 39 7 37 7 Z" fill="url(#medGold)" transform="scale(0.85) translate(3, 1)" />
  </svg>
);

/**
 * 3. দ্বীনি শিক্ষা (Education): Open Quran/Book + Golden Radiance & Lamp of Light
 * Vibrant Two-Tone: Deep Emerald Green + Luminous Golden Amber
 */
export const EducationIllustration: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="eduEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#087443" />
        <stop offset="100%" stopColor="#024a2c" />
      </linearGradient>
      <linearGradient id="eduGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="eduPages" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="100%" stopColor="#fde68a" />
      </linearGradient>
    </defs>
    
    {/* Golden Rays of Knowledge */}
    <line x1="24" y1="3" x2="24" y2="7.5" stroke="url(#eduGold)" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="14" y1="6" x2="17" y2="10" stroke="url(#eduGold)" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="6" x2="31" y2="10" stroke="url(#eduGold)" strokeWidth="2" strokeLinecap="round" />
    
    {/* Glowing Light Flame / Torch of Guidance */}
    <path d="M24 8 C22 11 21 13 22 15 C23 16.5 25 16.5 26 15 C27 13 26 11 24 8 Z" fill="url(#eduGold)" />
    <circle cx="24" cy="13.5" r="1.2" fill="#ffffff" />
    
    {/* Open Holy Scripture (Deep Emerald Binding) */}
    <path d="M7 32 C13 29 20 30 24 33 C28 30 35 29 41 32 L39.5 19 C34 16 27 17 24 20 C21 17 14 16 8.5 19 Z" fill="url(#eduEmerald)" />
    
    {/* Luminous Inner Book Pages */}
    <path d="M8 30.5 C13.5 27.5 20 28.5 24 31.5 C28 28.5 34.5 27.5 40 30.5 L39 18.5 C34 15.5 27 16.5 24 19.5 C21 16.5 14 15.5 9 18.5 Z" fill="url(#eduPages)" />
    
    {/* Spine & Script Lines */}
    <path d="M24 19.5 V32" stroke="url(#eduEmerald)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 22.5 C15 21.5 18 22 20 23.5" stroke="url(#eduEmerald)" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M11.5 25.5 C15 24.5 18 25 20 26.5" stroke="url(#eduEmerald)" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M28 23.5 C30 22 33 21.5 36 22.5" stroke="url(#eduEmerald)" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M28 26.5 C30 25 33 24.5 36.5 25.5" stroke="url(#eduEmerald)" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
    
    {/* Traditional Rehal / Book Stand Base */}
    <path d="M11 35 L24 43 L37 35 M16 38.5 L11 42.5 M32 38.5 L37 42.5" stroke="url(#eduGold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * 4. আত্মনির্ভরশীলতা (Self-reliance): Supporting Open Hand + Flourishing Green Sprout & Golden Empowerment Coin
 * Vibrant Two-Tone: Deep Emerald Green + Radiant Golden Amber & Mint
 */
export const SelfRelianceIllustration: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="relEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#087443" />
        <stop offset="100%" stopColor="#024a2c" />
      </linearGradient>
      <linearGradient id="relLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="relGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    
    {/* Golden Empowerment Coin above Sprout */}
    <circle cx="24" cy="8" r="4.5" fill="url(#relGold)" />
    <circle cx="24" cy="8" r="3.2" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" fill="none" />
    <path d="M24 5.5 V10.5 M22.5 7.2 H25.5" stroke="#ffffff" strokeWidth="0.9" strokeLinecap="round" />
    
    {/* Growing Sapling Stem */}
    <path d="M24 31 V14" stroke="url(#relEmerald)" strokeWidth="2.4" strokeLinecap="round" />
    
    {/* Left Sprouting Leaf in Vibrant Mint Green */}
    <path d="M24 21 C17 19 15 13 21 13 C24 15 24 19 24 21 Z" fill="url(#relLeaf)" />
    
    {/* Right Flourishing Leaf in Golden Amber */}
    <path d="M24 17 C30 15 32 9 26 9 C24 11 24 15 24 17 Z" fill="url(#relGold)" />
    <path d="M24 24 C29 22 31 18 27 17 C25 18 24 22 24 24 Z" fill="url(#relLeaf)" />
    
    {/* Supporting Generous Hand (Without human face, purely action of uplifting) */}
    <path d="M7 34 C9.5 31 14 30.5 18 32.5 L24 34.5 L30 32.5 C34 30.5 38.5 31 41 34 L43 37 C39 42 32 43.5 24 43.5 C16 43.5 9 42 5 37 Z" fill="url(#relEmerald)" />
    
    {/* Golden Hand Contours */}
    <path d="M11 35.5 C15 33.5 19 34.5 24 36.5 C29 34.5 33 33.5 37 35.5" stroke="url(#relGold)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M19 39.5 C22 40.5 26 40.5 29 39.5" stroke="url(#relGold)" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/**
 * 5. তরুণ প্রজন্মের ঈমানী জাগরণ (Youth Awakening): Compassionate Guidance Beacon & Heart of Faith
 * Vibrant Two-Tone: Deep Emerald Green + Radiant Golden Amber
 */
export const YouthAwakeningIllustration: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="youthEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#087443" />
        <stop offset="100%" stopColor="#024a2c" />
      </linearGradient>
      <linearGradient id="youthGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    
    {/* Celestial Crescent & Guiding Star at Top */}
    <path d="M26 4 C24.5 4 23.2 4.6 22.2 5.5 C24 6.8 24.5 9.2 23.2 11 C22.5 12 21.2 12.8 20 12.8 C21 13.5 22.2 14 23.5 14 C26.3 14 28.5 11.8 28.5 9 C28.5 6.2 26.3 4 23.5 4" fill="url(#youthGold)" />
    <circle cx="28" cy="6" r="1.2" fill="#ffffff" />
    
    {/* Guiding Light Beams radiating outward */}
    <line x1="12" y1="14" x2="7" y2="11" stroke="url(#youthGold)" strokeWidth="2" strokeLinecap="round" />
    <line x1="36" y1="14" x2="41" y2="11" stroke="url(#youthGold)" strokeWidth="2" strokeLinecap="round" />
    <line x1="10" y1="23" x2="5" y2="23" stroke="url(#youthGold)" strokeWidth="2" strokeLinecap="round" />
    <line x1="38" y1="23" x2="43" y2="23" stroke="url(#youthGold)" strokeWidth="2" strokeLinecap="round" />
    
    {/* Central Minaret Dome / Beacon of Guidance */}
    <path d="M24 10 L28 15 H20 Z" fill="url(#youthGold)" />
    <rect x="21" y="15" width="6" height="5" fill="url(#youthGold)" />
    <path d="M16 20 C16 16 32 16 32 20 L30 34 H18 Z" fill="url(#youthEmerald)" />
    <circle cx="24" cy="24" r="3.5" fill="#ffffff" />
    <circle cx="24" cy="24" r="2" fill="url(#youthGold)" />
    
    {/* Compass Base Ring with Navigation Ticks */}
    <circle cx="24" cy="33" r="11" stroke="url(#youthGold)" strokeWidth="2" fill="none" />
    <path d="M13 33 H35 M24 22 V44" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />
    
    {/* Uplifting Protective Base Shield */}
    <path d="M14 36 C14 42 24 45 24 45 C24 45 34 42 34 36" stroke="url(#youthEmerald)" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

/**
 * 6. আখেরাতের সঞ্চয় / সাদাকায়ে জারিয়াহ (Sadaqah Jariyah): Perpetual Flowing Blessings & Everlasting Charity
 * Vibrant Two-Tone: Deep Emerald Green + Radiant Golden Amber
 */
export const SadaqahJariyahIllustration: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="sadEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#087443" />
        <stop offset="100%" stopColor="#024a2c" />
      </linearGradient>
      <linearGradient id="sadGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="sadTeal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    
    {/* Endless Perpetual Reward Waves / Infinity Stream at Top */}
    <path d="M17 12 C14 8 20 6 24 10 C28 6 34 8 31 12 C28 16 20 16 17 12 Z" stroke="url(#sadGold)" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="24" cy="10" r="2.2" fill="url(#sadGold)" />
    
    {/* Continuous Droplets of Perpetual Blessing (Sadaqah Jariyah) */}
    <circle cx="24" cy="18" r="2" fill="url(#sadGold)" />
    <circle cx="19" cy="22" r="1.5" fill="url(#sadGold)" opacity="0.8" />
    <circle cx="29" cy="22" r="1.5" fill="url(#sadGold)" opacity="0.8" />
    
    {/* Heavenly Sprouting Palms / Oasis of Jannat in Emerald */}
    <path d="M24 29 V22" stroke="url(#sadEmerald)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M24 23 C21 19 16 20 18 24 C20 25 23 24 24 23 Z" fill="url(#sadTeal)" />
    <path d="M24 23 C27 19 32 20 30 24 C28 25 25 24 24 23 Z" fill="url(#sadTeal)" />
    
    {/* Two Open Giving Hands (Receiving divine barakah & gifting to eternity) */}
    <path d="M8 33 C11 30 15 31 18 33 L24 35 L30 33 C33 31 37 30 40 33 L42 36 C38 41 32 43 24 43 C16 43 10 41 6 36 Z" fill="url(#sadEmerald)" />
    
    {/* Radiant Golden Rings around Palm of Charity */}
    <path d="M12 34 C16 32 20 33 24 35 C28 33 32 32 36 34" stroke="url(#sadGold)" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 38 C21 40 27 40 30 38" stroke="url(#sadGold)" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
