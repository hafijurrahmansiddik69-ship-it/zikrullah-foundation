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
 * 4. আত্মনির্ভরশীলতা (Self-reliance): Hand holding a green sapling with golden coins
 * Style: Clean lines, rich forest greens, and radiant gold
 */
export const SelfRelianceIllustration: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      {/* Forest Greens */}
      <linearGradient id="forestDark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#045332" />
        <stop offset="100%" stopColor="#023e24" />
      </linearGradient>
      <linearGradient id="forestLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="60%" stopColor="#087443" />
        <stop offset="100%" stopColor="#024a2c" />
      </linearGradient>
      <linearGradient id="forestStem" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#045332" />
      </linearGradient>

      {/* Radiant Gold */}
      <linearGradient id="goldCoin1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="40%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="goldCoin2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="50%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#92400e" />
      </linearGradient>
      <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>

    {/* Subtle Golden Blessing Sparkles */}
    <path d="M47 7 L48 9.5 L50.5 10.5 L48 11.5 L47 14 L46 11.5 L43.5 10.5 L46 9.5 Z" fill="#fbbf24" />
    <circle cx="17" cy="18" r="1.3" fill="#fde047" opacity="0.85" />
    <circle cx="48" cy="28" r="1.5" fill="#f59e0b" opacity="0.75" />

    {/* 1. Golden Coins (Stacked & floating beside the green sapling) */}
    {/* Background Secondary Coin */}
    <g transform="rotate(-18 43 21)">
      <ellipse cx="43" cy="21" rx="7.5" ry="9" fill="url(#goldCoin2)" stroke="#b45309" strokeWidth="0.8" />
      <ellipse cx="43" cy="21" rx="5.8" ry="7.2" fill="none" stroke="#fef08a" strokeWidth="0.8" strokeOpacity="0.85" />
      <path d="M41 16 L45 26" stroke="#fef08a" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.75" />
    </g>

    {/* Foreground Dominant Coin with Clean Embossed Details */}
    <g transform="rotate(10 36 15)">
      <ellipse cx="36" cy="15" rx="8.5" ry="10" fill="url(#goldCoin1)" stroke="#b45309" strokeWidth="0.9" />
      <ellipse cx="36" cy="15" rx="6.8" ry="8.2" fill="none" stroke="#fef08a" strokeWidth="1" strokeOpacity="0.95" />
      <circle cx="36" cy="15" r="3.6" fill="#d97706" stroke="#fef08a" strokeWidth="0.8" />
      {/* Coin Symbol: Prosperity Sprout / Star */}
      <path d="M36 12.5 V17.5 M34 14.5 C34.5 13.5 36 13.5 36 13.5 C36 13.5 37.5 13.5 38 14.5" stroke="#fef08a" strokeWidth="0.85" strokeLinecap="round" />
      <circle cx="36" cy="12.2" r="0.6" fill="#ffffff" />
    </g>

    {/* 2. Green Sapling Growing Out of Hand */}
    {/* Organic Central Stem */}
    <path d="M28 47 C28 37 30 28 31 19" stroke="url(#forestStem)" strokeWidth="3.2" strokeLinecap="round" />
    <path d="M28.7 46 C28.7 37 30.5 29 31.3 20" stroke="#34d399" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.7" />

    {/* Top Central Flourishing Leaf */}
    <path d="M31 19 C31 8 22 7 18 10.5 C16 16 22 22 31 19 Z" fill="url(#forestLeaf)" stroke="#023e24" strokeWidth="0.8" />
    <path d="M30 18 C26.5 13 21 12 19 11.5" stroke="url(#goldLine)" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M25 15 C23 14 22 15.5 22 15.5" stroke="#34d399" strokeWidth="0.8" strokeLinecap="round" />

    {/* Right Flourishing Leaf */}
    <path d="M30.5 25 C36.5 20 44 22.5 44 28 C38.5 31.5 32 29.5 30.5 25 Z" fill="url(#forestLeaf)" stroke="#023e24" strokeWidth="0.8" />
    <path d="M31 25.5 C35.5 23.5 41 25.5 42 27" stroke="url(#goldLine)" strokeWidth="1" strokeLinecap="round" />

    {/* Left Sprouting Leaf in Rich Forest Green */}
    <path d="M29 32 C21.5 28.5 16 32 16.5 36.5 C22 39.5 28 36.5 29 32 Z" fill="url(#forestDark)" stroke="#087443" strokeWidth="0.8" />
    <path d="M28.5 32.5 C23 31.5 18.5 33 18 35.5" stroke="url(#goldLine)" strokeWidth="0.9" strokeLinecap="round" />

    {/* Young Gold-Mint Sprout Shoot */}
    <path d="M29.5 36.5 C33 34.5 36.5 36 36 38.5 C33.5 40 30 38.5 29.5 36.5 Z" fill="url(#goldCoin1)" stroke="#b45309" strokeWidth="0.6" />

    {/* 3. Open Hand Holding and Supporting the Sapling */}
    {/* Rich Soil Bed in Palm */}
    <ellipse cx="28" cy="47" rx="6.5" ry="2.4" fill="#023e24" />
    <circle cx="26" cy="46" r="1.2" fill="#fbbf24" />
    <circle cx="30" cy="47" r="1" fill="#f59e0b" />

    {/* Supportive Open Palm & Fingers in Forest Green */}
    <path d="M9 48 C13.5 43.5 19 43.5 23.5 45 L31.5 48 C36.5 49.8 42.5 47.8 47.5 44 C50 42 52.5 43.8 51.5 46.5 C48 53.8 38.5 57.5 28 57.5 C18.5 57.5 12 53.8 7.5 49.5 Z" fill="url(#forestDark)" />

    {/* Clean Golden Contour Lines on the Hand (Fingers, Palm Lifeline, Wrist) */}
    <path d="M12.5 46.8 C16.5 44.5 21 45 25.5 46.5 L34.5 49.5 C39.5 51.2 45.5 49.2 49.5 45.8" stroke="url(#goldLine)" strokeWidth="1.9" strokeLinecap="round" />
    <path d="M21.5 52 C26.5 53.8 32.5 54 38.5 51.8" stroke="url(#goldLine)" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.8" />
    <path d="M15.5 54.5 C19.5 56 24.5 56.5 29.5 56.5" stroke="url(#goldLine)" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.55" />

    {/* Clean Forest Green Crisp Outer Stroke */}
    <path d="M7.5 49.5 C12 53.8 18.5 57.5 28 57.5 C38.5 57.5 48 53.8 51.5 46.5" stroke="#087443" strokeWidth="1.4" strokeLinecap="round" fill="none" />
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
 * 6. আখেরাতের সঞ্চয় (Akhirater Shanchay): High-definition ornate treasure chest overflowing with divine light & stylized coins
 * Style: Exceptionally clear, crisp, high-contrast vector sticker/logo, royal emerald green & brilliant 24K gold, celestial crescent & 8-point star
 */
export const SadaqahJariyahIllustration: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      {/* Rich Royal Emerald Gradients */}
      <linearGradient id="sjEmeraldBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#087443" />
        <stop offset="45%" stopColor="#045332" />
        <stop offset="100%" stopColor="#012e1a" />
      </linearGradient>
      <linearGradient id="sjEmeraldLid" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0a693c" />
        <stop offset="60%" stopColor="#045332" />
        <stop offset="100%" stopColor="#02301c" />
      </linearGradient>
      <linearGradient id="sjLidInnerGlow" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#fde047" stopOpacity="0.85" />
        <stop offset="60%" stopColor="#045332" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#022817" />
      </linearGradient>

      {/* Radiant 24K Polished Gold Gradients */}
      <linearGradient id="sjGoldPure" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="25%" stopColor="#fde047" />
        <stop offset="65%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="sjGoldStrap" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="45%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#92400e" />
      </linearGradient>
      <linearGradient id="sjCoinFace" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="25%" stopColor="#fef08a" />
        <stop offset="65%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#92400e" />
      </linearGradient>
      <linearGradient id="sjCoinRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>

      {/* Divine Radiant Light Beams & Aura */}
      <radialGradient id="sjDivineAura" cx="50%" cy="45%" r="55%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="30%" stopColor="#fde047" stopOpacity="0.75" />
        <stop offset="65%" stopColor="#f59e0b" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="sjRayBeam" x1="50%" y1="100%" x2="50%" y2="0%">
        <stop offset="0%" stopColor="#fef08a" stopOpacity="0.95" />
        <stop offset="45%" stopColor="#fde047" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* 1. Divine Aura & Ascending Light Rays */}
    <circle cx="32" cy="22" r="19" fill="url(#sjDivineAura)" />
    <polygon points="32,24 20,3 25,1 Z" fill="url(#sjRayBeam)" />
    <polygon points="32,24 30,0 34,0 Z" fill="url(#sjRayBeam)" />
    <polygon points="32,24 39,1 44,3 Z" fill="url(#sjRayBeam)" />
    <polygon points="32,25 12,9 16,6 Z" fill="url(#sjRayBeam)" opacity="0.8" />
    <polygon points="32,25 48,6 52,9 Z" fill="url(#sjRayBeam)" opacity="0.8" />

    {/* 2. Celestial Crescent & 8-Point Islamic Star (Bold & High-Contrast) */}
    <g transform="translate(32, 6.5)">
      {/* Golden Crescent Moon */}
      <path
        d="M-1.2 -5.2 C-4.8 -5.2 -7.5 -2.4 -7.5 1 C-7.5 4.5 -4.6 7.2 -1 7.2 C1.2 7.2 3.1 6.1 4.2 4.4 C2.4 5 0.5 4.6 -0.8 3.2 C-2.5 1.4 -2.5 -1.5 -0.8 -3.2 C0.5 -4.4 2.2 -4.8 3.9 -4.2 C2.5 -5 0.3 -5.2 -1.2 -5.2 Z"
        fill="url(#sjGoldPure)"
        stroke="#78350f"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      {/* 8-Point Faceted Radiant Star */}
      <polygon
        points="3.8,-2.2 4.9,-0.6 6.5,-0.6 5.2,0.8 5.7,2.4 4.2,1.5 2.7,2.4 3.2,0.8 1.9,-0.6 3.5,-0.6"
        fill="#ffffff"
        stroke="#d97706"
        strokeWidth="0.6"
      />
      <circle cx="4.1" cy="0.7" r="0.75" fill="#f59e0b" />
    </g>

    {/* Crisp Diamond Sparkle Stars */}
    <path d="M10 13 L11.5 16 L14.5 17.5 L11.5 19 L10 22 L8.5 19 L5.5 17.5 L8.5 16 Z" fill="url(#sjGoldPure)" stroke="#78350f" strokeWidth="0.5" />
    <path d="M54 13 L55.5 16 L58.5 17.5 L55.5 19 L54 22 L52.5 19 L49.5 17.5 L52.5 16 Z" fill="url(#sjGoldPure)" stroke="#78350f" strokeWidth="0.5" />
    <circle cx="18" cy="10" r="1.4" fill="#ffffff" stroke="#f59e0b" strokeWidth="0.5" />
    <circle cx="46" cy="10" r="1.4" fill="#ffffff" stroke="#f59e0b" strokeWidth="0.5" />

    {/* 3. Open Ornate Chest Lid (Arched Open in Perspective) */}
    {/* Inner Arched Glow behind Lid Rim */}
    <path d="M12 24 C12 14.5 20.5 10.5 32 10.5 C43.5 10.5 52 14.5 52 24 L48 26.5 C44.5 18 38.5 14 32 14 C25.5 14 19.5 18 16 26.5 Z" fill="url(#sjLidInnerGlow)" />
    {/* Outer Curved Lid Shell */}
    <path
      d="M10 23 C10 13 19 8.5 32 8.5 C45 8.5 54 13 54 23 L49.5 26.2 C45.5 17.2 39 12.8 32 12.8 C25 12.8 18.5 17.2 14.5 26.2 Z"
      fill="url(#sjEmeraldLid)"
      stroke="url(#sjGoldPure)"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    {/* Gold Filigree Ribs on Lid */}
    <path d="M30.5 8.8 V13 H33.5 V8.8 Z" fill="url(#sjGoldPure)" stroke="#78350f" strokeWidth="0.4" />
    <path d="M20.5 11.2 L22.5 17.2 H24.2 L22.2 11.2 Z" fill="url(#sjGoldPure)" stroke="#78350f" strokeWidth="0.4" />
    <path d="M43.5 11.2 L41.5 17.2 H39.8 L41.8 11.2 Z" fill="url(#sjGoldPure)" stroke="#78350f" strokeWidth="0.4" />

    {/* 4. Overflowing Golden Coins (Bold, High Contrast, Distinct Edges) */}
    {/* Left Overflowing Coin */}
    <g transform="rotate(-20 17 28)">
      <ellipse cx="17" cy="28" rx="6.8" ry="5" fill="url(#sjCoinFace)" stroke="#78350f" strokeWidth="1.1" />
      <ellipse cx="17" cy="28" rx="5" ry="3.4" fill="none" stroke="#fffbeb" strokeWidth="0.8" />
      <circle cx="17" cy="28" r="1.5" fill="#d97706" />
    </g>
    {/* Right Overflowing Coin */}
    <g transform="rotate(20 47 28)">
      <ellipse cx="47" cy="28" rx="6.8" ry="5" fill="url(#sjCoinFace)" stroke="#78350f" strokeWidth="1.1" />
      <ellipse cx="47" cy="28" rx="5" ry="3.4" fill="none" stroke="#fffbeb" strokeWidth="0.8" />
      <circle cx="47" cy="28" r="1.5" fill="#d97706" />
    </g>
    {/* Background Stack Coins */}
    <ellipse cx="25" cy="25.5" rx="7.2" ry="5" fill="url(#sjCoinFace)" stroke="#78350f" strokeWidth="1.1" />
    <ellipse cx="25" cy="25.5" rx="5.4" ry="3.4" fill="none" stroke="#ffffff" strokeWidth="0.85" />
    <circle cx="25" cy="25.5" r="1.6" fill="#d97706" />

    <ellipse cx="39" cy="25" rx="7.2" ry="5" fill="url(#sjCoinFace)" stroke="#78350f" strokeWidth="1.1" />
    <ellipse cx="39" cy="25" rx="5.4" ry="3.4" fill="none" stroke="#ffffff" strokeWidth="0.85" />
    <circle cx="39" cy="25" r="1.6" fill="#d97706" />

    {/* Hero Center Coin (Tilted with 8-Point Islamic Star Stamp) */}
    <g transform="rotate(-3 32 29)">
      <ellipse cx="32" cy="29" rx="8.8" ry="6.2" fill="url(#sjCoinFace)" stroke="#78350f" strokeWidth="1.3" />
      <ellipse cx="32" cy="29" rx="7" ry="4.6" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="14 1.5" />
      <polygon points="32,26.4 32.9,27.8 34.4,27.8 33.2,28.8 33.6,30.3 32,29.4 30.4,30.3 30.8,28.8 29.6,27.8 31.1,27.8" fill="#ffffff" stroke="#b45309" strokeWidth="0.45" />
      <circle cx="32" cy="28.8" r="1.2" fill="#d97706" />
    </g>

    {/* Spill Coins over the chest rim */}
    <ellipse cx="20" cy="31.5" rx="5.5" ry="3.8" fill="url(#sjCoinFace)" stroke="#78350f" strokeWidth="1" />
    <ellipse cx="44" cy="31" rx="5.5" ry="3.8" fill="url(#sjCoinFace)" stroke="#78350f" strokeWidth="1" />

    {/* 5. Main Chest Body (Deep Royal Emerald with Heavy Solid Gold Reinforcements) */}
    {/* Body Shape */}
    <path
      d="M9.5 32 L13 54.5 C13.5 56.5 15.5 58 18 58 H46 C48.5 58 50.5 56.5 51 54.5 L54.5 32 Z"
      fill="url(#sjEmeraldBody)"
      stroke="url(#sjGoldPure)"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />

    {/* Heavy Solid Gold Upper Rim Band */}
    <rect x="8" y="30" width="48" height="4.2" rx="2" fill="url(#sjGoldPure)" stroke="#78350f" strokeWidth="1.1" />
    <line x1="10" y1="31.4" x2="54" y2="31.4" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />

    {/* Two Vertical Heavy Gold Straps with Rivets */}
    {/* Left Strap */}
    <rect x="19.5" y="34.2" width="5.4" height="23" fill="url(#sjGoldStrap)" stroke="#78350f" strokeWidth="0.8" />
    <circle cx="22.2" cy="37.5" r="1.3" fill="#fffbeb" stroke="#78350f" strokeWidth="0.5" />
    <circle cx="22.2" cy="46" r="1.3" fill="#fffbeb" stroke="#78350f" strokeWidth="0.5" />
    <circle cx="22.2" cy="54" r="1.3" fill="#fffbeb" stroke="#78350f" strokeWidth="0.5" />

    {/* Right Strap */}
    <rect x="39.1" y="34.2" width="5.4" height="23" fill="url(#sjGoldStrap)" stroke="#78350f" strokeWidth="0.8" />
    <circle cx="41.8" cy="37.5" r="1.3" fill="#fffbeb" stroke="#78350f" strokeWidth="0.5" />
    <circle cx="41.8" cy="46" r="1.3" fill="#fffbeb" stroke="#78350f" strokeWidth="0.5" />
    <circle cx="41.8" cy="54" r="1.3" fill="#fffbeb" stroke="#78350f" strokeWidth="0.5" />

    {/* Islamic Mihrab Arch Emboss on Center Face */}
    <path
      d="M25.5 56 V43 C25.5 38.5 28.5 36.5 32 36.5 C35.5 36.5 38.5 38.5 38.5 43 V56"
      stroke="#fde047"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      strokeOpacity="0.9"
    />
    <circle cx="32" cy="41.5" r="1.4" fill="#fde047" />

    {/* Heavy Gold Corner Braces */}
    {/* Bottom Left Corner Brace */}
    <path d="M12.8 49 L14 56.5 H20.5 L18.8 49 Z" fill="url(#sjGoldPure)" stroke="#78350f" strokeWidth="0.8" />
    <circle cx="16.2" cy="53" r="1.1" fill="#ffffff" stroke="#78350f" strokeWidth="0.45" />
    {/* Bottom Right Corner Brace */}
    <path d="M51.2 49 L50 56.5 H43.5 L45.2 49 Z" fill="url(#sjGoldPure)" stroke="#78350f" strokeWidth="0.8" />
    <circle cx="47.8" cy="53" r="1.1" fill="#ffffff" stroke="#78350f" strokeWidth="0.45" />

    {/* 6. Center Ornate Mihrab Lock Plate (Prominent, Elegant & Crisp) */}
    <path
      d="M27.2 32 H36.8 V38.5 C36.8 43.5 32 46.5 32 46.5 C32 46.5 27.2 43.5 27.2 38.5 Z"
      fill="url(#sjGoldPure)"
      stroke="#78350f"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    {/* Latch Hinge Studs */}
    <circle cx="29.2" cy="34" r="0.9" fill="#78350f" />
    <circle cx="34.8" cy="34" r="0.9" fill="#78350f" />
    {/* Emerald Jewel Gem in Center of Lock */}
    <polygon points="32,36 34.6,38.5 32,41 29.4,38.5" fill="#024a2c" stroke="#fde047" strokeWidth="0.8" />
    {/* Golden Keyhole underneath Gem */}
    <circle cx="32" cy="38.5" r="1.2" fill="#ffffff" />
    <polygon points="31.2,39.5 32.8,39.5 32.5,43.2 31.5,43.2" fill="#78350f" />

    {/* 7. Solid Gold Pedestal Feet (Support Base) */}
    <path
      d="M14.5 57.5 H49.5 C51 57.5 52 58.5 51.5 60.2 C51 61.2 49.5 61.8 47.5 61.8 H16.5 C14.5 61.8 13 61.2 12.5 60.2 C12 58.5 13 57.5 14.5 57.5 Z"
      fill="url(#sjGoldPure)"
      stroke="#78350f"
      strokeWidth="1.1"
    />
    <line x1="16.5" y1="59.4" x2="47.5" y2="59.4" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/**
 * 7. ভিশন / আমাদের উদ্দেশ্য (Vision):
 * Mosque dome and minaret outline combined with a stylized archery target in a dark green rounded square frame.
 * Colors: Deep forest green & polished gold.
 */
export const VisionIllustration: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      {/* Deep Forest Green Gradients */}
      <linearGradient id="visBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#034827" />
        <stop offset="50%" stopColor="#02331b" />
        <stop offset="100%" stopColor="#011f10" />
      </linearGradient>
      <linearGradient id="visInnerRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#047857" stopOpacity="0.1" />
      </linearGradient>

      {/* Polished Gold Gradients */}
      <linearGradient id="visGoldPure" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="25%" stopColor="#fde047" />
        <stop offset="65%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="visGoldShine" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <radialGradient id="visCenterGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#fde047" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* 1. Dark Green Rounded Square (Squircle) Frame */}
    <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#visBgGrad)" stroke="url(#visGoldPure)" strokeWidth="1.6" />
    <rect x="5.5" y="5.5" width="53" height="53" rx="13" fill="none" stroke="url(#visInnerRing)" strokeWidth="1" />
    
    {/* Spiritual Radiance at Target Center */}
    <circle cx="34" cy="28" r="14" fill="url(#visCenterGlow)" />

    {/* 2. Stylized Archery Target (Concentric Aiming Rings toward divine pleasure) */}
    {/* Outer Target Ring (Gold Dash) */}
    <circle cx="34" cy="28" r="16" stroke="url(#visGoldShine)" strokeWidth="1.4" strokeDasharray="3 2" opacity="0.65" />
    {/* Middle Target Ring (Solid Polished Gold) */}
    <circle cx="34" cy="28" r="10.5" stroke="url(#visGoldPure)" strokeWidth="1.6" />
    {/* Inner Target Ring */}
    <circle cx="34" cy="28" r="6" stroke="url(#visGoldPure)" strokeWidth="1.4" fill="#02331b" />
    {/* Sacred Bullseye Center */}
    <circle cx="34" cy="28" r="2.5" fill="url(#visGoldPure)" stroke="#ffffff" strokeWidth="0.6" />
    
    {/* Target Alignment Crosshairs */}
    <line x1="34" y1="9" x2="34" y2="15" stroke="url(#visGoldPure)" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="47" y1="28" x2="53" y2="28" stroke="url(#visGoldPure)" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="15" y1="28" x2="21" y2="28" stroke="url(#visGoldPure)" strokeWidth="1.2" strokeLinecap="round" />

    {/* 3. Mosque Dome & Tall Minaret Outline / Silhouette */}
    {/* Left Side: Elegant Tall Minaret */}
    <rect x="13.5" y="24" width="4" height="25" fill="#012b16" stroke="url(#visGoldPure)" strokeWidth="1.2" rx="0.5" />
    {/* Minaret Balcony (Sharifa) */}
    <path d="M12 24 H19 L18 22.5 H13 Z" fill="url(#visGoldPure)" stroke="#78350f" strokeWidth="0.5" />
    <rect x="13" y="22.5" width="5" height="1" fill="#ffffff" />
    {/* Upper Lantern Chamber */}
    <rect x="14" y="17.5" width="3" height="5" fill="#012b16" stroke="url(#visGoldPure)" strokeWidth="1" />
    {/* Minaret Conical Cap & Spire */}
    <path d="M13.5 17.5 L15.5 10.5 L17.5 17.5 Z" fill="url(#visGoldPure)" stroke="#78350f" strokeWidth="0.5" />
    {/* Minaret Finial Crescent */}
    <circle cx="15.5" cy="9.2" r="1" fill="#ffffff" />
    <path d="M15.5 8.2 C15.8 7.6 16.5 7.4 17 7.7 C16.4 8.6 15.6 9 14.8 8.6 C14.9 8.3 15.2 8.2 15.5 8.2 Z" fill="url(#visGoldPure)" />

    {/* Center Mosque Dome (Majestic Ogee / Onion Dome Profile) */}
    <path d="M22 49 V38 C22 38 22 27 34 22 C46 27 46 38 46 38 V49 Z" fill="#023b20" stroke="url(#visGoldPure)" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Dome Arch / Mihrab Gateway */}
    <path d="M28 49 V41 C28 37.5 30.5 35 34 35 C37.5 35 40 37.5 40 41 V49" fill="url(#visBgGrad)" stroke="url(#visGoldPure)" strokeWidth="1.4" />
    <circle cx="34" cy="40.5" r="1.5" fill="url(#visGoldPure)" />

    {/* Polished Gold Finial & Crescent on Top of Main Dome */}
    <line x1="34" y1="22" x2="34" y2="16.5" stroke="url(#visGoldPure)" strokeWidth="1.6" strokeLinecap="round" />
    {/* Crescent Moon at Dome Apex */}
    <path d="M33.5 16 C32 16 30.8 14.8 30.8 13.3 C30.8 11.8 32 10.6 33.5 10.6 C34.4 10.6 35.2 11.1 35.7 11.9 C34.9 11.6 34 11.9 33.5 12.6 C32.9 13.4 33.1 14.5 33.9 15.1 C34.2 15.3 34.6 15.4 35 15.4 C34.6 15.8 34.1 16 33.5 16 Z" fill="url(#visGoldPure)" stroke="#78350f" strokeWidth="0.4" />
    <circle cx="35.5" cy="12.2" r="0.6" fill="#ffffff" />

    {/* 4. Dynamic Ascending Trajectory Arrow Aiming toward High Goal */}
    <path d="M49 46 L37 31" stroke="url(#visGoldPure)" strokeWidth="2" strokeLinecap="round" />
    <polygon points="35.5,29.5 39.5,31 37.5,33" fill="url(#visGoldPure)" stroke="#78350f" strokeWidth="0.5" />
    <path d="M46.5 43.5 L49.5 42 M48.5 45.5 L51.5 44 M47.5 47.5 L50.5 46" stroke="url(#visGoldPure)" strokeWidth="1.2" strokeLinecap="round" />

    {/* Sparkling Star at Top Right Corner */}
    <polygon points="50,13 50.8,14.8 52.8,15.5 50.8,16.2 50,18 49.2,16.2 47.2,15.5 49.2,14.8" fill="url(#visGoldPure)" />
    <circle cx="23" cy="14" r="1.2" fill="#ffffff" />
  </svg>
);

/**
 * 8. মিশন / আমাদের লক্ষ্য (Mission):
 * Caring humanitarian hand embracing interconnected gears on ascending steps with subtle crescent moon in a dark green rounded square frame.
 * Colors: Deep forest green & polished gold.
 */
export const MissionIllustration: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      {/* Deep Forest Green Gradients */}
      <linearGradient id="misBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#034827" />
        <stop offset="50%" stopColor="#02331b" />
        <stop offset="100%" stopColor="#011f10" />
      </linearGradient>
      <linearGradient id="misInnerRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#047857" stopOpacity="0.1" />
      </linearGradient>

      {/* Polished Gold Gradients */}
      <linearGradient id="misGoldPure" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="25%" stopColor="#fde047" />
        <stop offset="65%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="misGoldShine" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <radialGradient id="misGlow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#fde047" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#045332" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* 1. Dark Green Rounded Square (Squircle) Frame */}
    <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#misBgGrad)" stroke="url(#misGoldPure)" strokeWidth="1.6" />
    <rect x="5.5" y="5.5" width="53" height="53" rx="13" fill="none" stroke="url(#misInnerRing)" strokeWidth="1" />

    {/* Ambient Glow */}
    <circle cx="36" cy="28" r="16" fill="url(#misGlow)" />

    {/* 2. Delicate Celestial Crescent Moon (হালকা চন্দ্র উপাদান) */}
    <g transform="translate(14, 11)">
      <path
        d="M0 -4 C-2.2 -4 -4 -2.2 -4 0 C-4 2.2 -2.2 4 0 4 C1.3 4 2.4 3.4 3.1 2.4 C1.8 2.7 0.5 2.2 -0.3 1.2 C-1.1 0.2 -1 -1.2 -0.1 -2.1 C0.6 -2.8 1.6 -3.1 2.5 -2.8 C1.8 -3.5 0.9 -4 0 -4 Z"
        fill="url(#misGoldPure)"
        stroke="#78350f"
        strokeWidth="0.4"
      />
      <circle cx="2.5" cy="-0.5" r="0.8" fill="#ffffff" />
    </g>

    {/* 3. Ascending Stair Steps Path (আরোহী পদক্ষেপগুলি - লক্ষ্যের দিকে এগিয়ে যাওয়ার ধাপ) */}
    <path
      d="M19 41 H27 V33 H37 V24 H47"
      stroke="url(#misGoldPure)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="4 2"
      opacity="0.75"
    />

    {/* 4. Interconnected Gears (সুসংগঠিত পদক্ষেপ ও অগ্রগতির প্রতীক) Ascending on the Steps */}
    {/* Gear 1: Base / Foundation Gear (Lower step, x=22, y=36) */}
    <g transform="translate(22, 36)">
      <circle cx="0" cy="0" r="6" fill="#012b16" stroke="url(#misGoldPure)" strokeWidth="1.4" />
      <path d="M0 -7.5 V-6 M0 6 V7.5 M-7.5 0 H-6 M6 0 H7.5 M-5.2 -5.2 L-4.2 -4.2 M4.2 4.2 L5.2 5.2 M-5.2 5.2 L-4.2 4.2 M4.2 -4.2 L5.2 -5.2" stroke="url(#misGoldPure)" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="0" cy="0" r="2.2" fill="url(#misGoldPure)" />
    </g>

    {/* Gear 2: Middle Interlocking Coordination Gear (Middle step, x=31, y=28) */}
    <g transform="translate(31, 28)">
      <circle cx="0" cy="0" r="7.5" fill="#023b20" stroke="url(#misGoldPure)" strokeWidth="1.6" />
      <path d="M0 -9.2 V-7.5 M0 7.5 V9.2 M-9.2 0 H-7.5 M7.5 0 H9.2 M-6.5 -6.5 L-5.2 -5.2 M5.2 5.2 L6.5 6.5 M-6.5 6.5 L-5.2 5.2 M5.2 -5.2 L6.5 -6.5" stroke="url(#misGoldPure)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="0" cy="0" r="3" fill="#012b16" stroke="url(#misGoldPure)" strokeWidth="1" />
      <circle cx="0" cy="0" r="1.3" fill="#ffffff" />
    </g>

    {/* Gear 3: Peak Ascending Gear (Highest step, x=42, y=20) */}
    <g transform="translate(42, 20)">
      <circle cx="0" cy="0" r="6" fill="url(#misGoldPure)" stroke="#78350f" strokeWidth="1" />
      <path d="M0 -7.5 V-6 M0 6 V7.5 M-7.5 0 H-6 M6 0 H7.5 M-5.2 -5.2 L-4.2 -4.2 M4.2 4.2 L5.2 5.2 M-5.2 5.2 L-4.2 4.2 M4.2 -4.2 L5.2 -5.2" stroke="#78350f" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="0" cy="0" r="2.2" fill="#02331b" stroke="#ffffff" strokeWidth="0.6" />
      <polygon points="6,-6 7,-4.5 8.5,-4.5 7.2,-3.5 7.7,-2 6.2,-2.8 4.7,-2 5.2,-3.5 4,-4.5 5.5,-4.5" fill="#ffffff" />
    </g>

    {/* 5. Humanitarian Caring Hand (মানবিক হাত) Embracing and Cradling the Mechanism */}
    <path
      d="M10 52 C14 47 18 46 22 47 L30 49.5 C36 51 43 49 48 45.5 C50.5 43.8 52.5 45.2 51.5 47.8 C48 54 39 57.5 29 57.5 C19 57.5 13 54.5 9 52 Z"
      fill="#02381e"
      stroke="url(#misGoldPure)"
      strokeWidth="1.4"
    />
    <path
      d="M12 50 C16 46 20 44.5 24 45.5 L34 48 C39 49.5 45 47.5 48.5 44"
      stroke="url(#misGoldPure)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M18 43 C20 40 23.5 40 25.5 42 L28 44.5"
      stroke="url(#misGoldPure)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M20 52 C26 54 33 54 39 51.5"
      stroke="url(#misGoldShine)"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.8"
    />

    {/* Upward Progress Leading Arrow at Apex */}
    <path d="M47 15 L52 10 M52 10 H47.5 M52 10 V14.5" stroke="url(#misGoldPure)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
