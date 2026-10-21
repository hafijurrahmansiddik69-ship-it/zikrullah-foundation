import React from 'react';
import { Heart, MapPin, Mail, Phone, Users } from 'lucide-react';
import { FOUNDATION_INFO, heroImg } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenDonation: () => void;
  onOpenZakat?: () => void;
  onOpenVolunteer: () => void;
  onNavigateToAbout?: () => void;
  onNavigateHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDonation,
  onOpenVolunteer,
  onNavigateToAbout,
  onNavigateHome
}) => {
  const { t, isEn } = useLanguage();

  return (
    <footer className="relative overflow-hidden text-emerald-100/90 pt-12 sm:pt-16 pb-8 border-t border-emerald-950 bg-[#002e1d]">
      {/* Background Image with Soft Dark Green Tint Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={FOUNDATION_INFO.homeBackgroundUrl || heroImg}
          alt="জিকরুল্লাহ ফাউন্ডেশন ব্যাকগ্রাউন্ড"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Soft Dark Green Tint Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002818]/93 via-[#013520]/89 to-[#001e12]/95" />
        <div className="absolute inset-0 bg-emerald-950/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial from-transparent via-emerald-950/30 to-emerald-950/75" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-emerald-900/60">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-emerald-500/30 p-1 flex items-center justify-center shadow-inner overflow-hidden">
                <img
                  src={FOUNDATION_INFO.logoUrl}
                  alt={FOUNDATION_INFO.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif-bn font-bold text-2xl text-white tracking-tight leading-tight">
                  {isEn ? FOUNDATION_INFO.englishName : FOUNDATION_INFO.name}
                </h3>
                <span className="font-armwrestler text-base sm:text-lg font-bold text-emerald-300 uppercase tracking-wider block mt-1.5">
                  {FOUNDATION_INFO.englishName}
                </span>
              </div>
            </div>

            <p className="text-sm text-emerald-200/80 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenDonation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#087443] hover:bg-[#045332] text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>{t.common.donateNow}</span>
              </button>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-sans mb-3 border-b border-emerald-800/60 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => {
                    if (onNavigateHome) onNavigateHome();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigateToAbout) onNavigateToAbout();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => {
                    if (onNavigateHome) onNavigateHome();
                  }}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => {
                    if (onNavigateHome) onNavigateHome();
                  }}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#prayer"
                  onClick={() => {
                    if (onNavigateHome) onNavigateHome();
                  }}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.prayer}
                </a>
              </li>
            </ul>
          </div>

          {/* Special Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-sans mb-3 border-b border-emerald-800/60 pb-2">
              {t.services.badge}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenVolunteer}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.volunteer.title}</span>
                </button>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors block">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white transition-colors block">
                  {t.nav.news}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors block">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Banking (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-sans mb-3 border-b border-emerald-800/60 pb-2">
              {t.footer.contactInfo}
            </h4>
            
            <div className="space-y-3 text-xs sm:text-[13px]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span 
                  className="font-semibold text-white leading-relaxed tracking-wide drop-shadow-sm"
                  style={{ color: '#FFFFFF' }}
                >
                  {t.common.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`mailto:${FOUNDATION_INFO.email}`} 
                  className="font-sans font-semibold text-white hover:text-emerald-300 transition-colors tracking-wide drop-shadow-sm"
                  style={{ color: '#FFFFFF' }}
                >
                  {FOUNDATION_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`tel:${FOUNDATION_INFO.phone.replace(/\s+/g, '')}`} 
                  className="font-sans font-bold text-white hover:text-emerald-300 transition-colors tracking-wide drop-shadow-sm"
                  style={{ color: '#FFFFFF' }}
                >
                  {FOUNDATION_INFO.phone}
                </a>
              </div>

              <div className="pt-2 text-xs bg-emerald-950/80 p-3 rounded-xl border border-emerald-800/60 space-y-1.5 shadow-inner">
                <strong 
                  className="block font-serif-bn font-bold text-white text-[13px]"
                  style={{ color: '#FFFFFF' }}
                >
                  {isEn ? 'Donation Account:' : 'ব্যাংক একাউন্ট (অনুদান):'}
                </strong>
                <span 
                  className="block font-mono font-semibold text-white text-xs tracking-wider"
                  style={{ color: '#FFFFFF' }}
                >
                  Coming soon ...
                </span>
                <span 
                  className="block font-bold text-white text-xs tracking-wide"
                  style={{ color: '#FFFFFF' }}
                >
                  {isEn ? 'bKash / Nagad: 016 20 500 920' : 'বিকাশ / নগদ: 016 20 500 920'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-emerald-400/80">
          <div>
            © {new Date().getFullYear()} {isEn ? FOUNDATION_INFO.englishName : FOUNDATION_INFO.name}. {t.footer.copyright}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-emerald-300">
            <span className="font-solaiman tracking-wide">{t.common.slogan}</span>
            <span className="hidden sm:inline">·</span>
            <span>{isEn ? 'Bogura, Bangladesh' : 'বগুড়া, বাংলাদেশ'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
