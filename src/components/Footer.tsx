import React from 'react';
import { Heart, MapPin, Mail, Phone, Users } from 'lucide-react';
import { FOUNDATION_INFO, heroImg } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

interface FooterProps {
  onOpenDonation: () => void;
  onOpenZakat?: () => void;
  onOpenVolunteer: () => void;
  onNavigateToAbout?: () => void;
  onNavigateHome?: (hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDonation,
  onOpenVolunteer,
  onNavigateToAbout,
  onNavigateHome
}) => {
  const { t, isEn } = useLanguage();

  return (
    <footer
      id="footer"
      className="relative overflow-hidden text-emerald-100/90 pt-12 sm:pt-16 pb-8 border-t border-emerald-950 bg-gradient-to-br from-[#022a1d] via-[#043927] to-[#012217]"
    >
      {/* Background Artwork: Full Uncropped Image Anchored Bottom-Right + 90% Page-Matched Emerald Frosted Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-end justify-end overflow-hidden">
        <img
          src="https://res.cloudinary.com/dlklqihg6/image/upload/v1795071755/vl2d3bdnntcrzykzz27z.png"
          alt={isEn ? 'Zikrullah Foundation Background' : 'জিকরুল্লাহ ফাউন্ডেশন ব্যাকগ্রাউন্ড'}
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FOUNDATION_INFO.homeBackgroundUrl || heroImg;
          }}
          className="block max-w-full max-h-full w-auto h-auto object-contain object-right-bottom select-none blur-[2px]"
          style={{
            WebkitMaskImage:
              'radial-gradient(135% 135% at 100% 100%, #000 72%, rgba(0, 0, 0, 0.5) 88%, transparent 100%)',
            maskImage:
              'radial-gradient(135% 135% at 100% 100%, #000 72%, rgba(0, 0, 0, 0.5) 88%, transparent 100%)',
          }}
        />
        {/* 90% Deep Page-Matched Emerald Blur Veil so the underlying artwork shows softly & seamlessly */}
        <div className="absolute inset-0 backdrop-blur-[4px] bg-gradient-to-br from-[#022a1d]/92 via-[#043927]/88 to-[#012418]/91" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-emerald-400/25">
          
          {/* Brand Col (5 cols): Blooms gently from inside */}
          <ScrollReveal direction="zoom" className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-emerald-500/30 p-1 flex items-center justify-center shadow-inner overflow-hidden">
                <img
                  src={FOUNDATION_INFO.logoUrl}
                  alt={isEn ? FOUNDATION_INFO.englishName : FOUNDATION_INFO.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/logo.jpg';
                  }}
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
          </ScrollReveal>

          {/* Quick Links (2 cols): Drops gently from top */}
          <ScrollReveal direction="down" delay={80} className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-sans mb-3 border-b border-emerald-400/25 pb-2">
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
                    if (onNavigateHome) onNavigateHome('#projects');
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
                    if (onNavigateHome) onNavigateHome('#services');
                  }}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
            </ul>
          </ScrollReveal>

          {/* Special Programs (2 cols): Rises gently from bottom */}
          <ScrollReveal direction="up" delay={150} className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-sans mb-3 border-b border-emerald-400/25 pb-2">
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
                <a
                  href="#ongoing-activities"
                  onClick={() => {
                    if (onNavigateHome) onNavigateHome('#ongoing-activities');
                  }}
                  className="hover:text-white transition-colors block"
                >
                  {isEn ? 'Ongoing Activities' : 'চলমান কার্যক্রম'}
                </a>
              </li>
              <li>
                <a
                  href="#thoughts"
                  onClick={() => {
                    if (onNavigateHome) onNavigateHome('#thoughts');
                  }}
                  className="hover:text-white transition-colors block"
                >
                  {isEn ? 'Thoughts & Notes' : 'ভাবনা ও কর্মকথা'}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenDonation}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  {t.common.donateNow}
                </button>
              </li>
            </ul>
          </ScrollReveal>

          {/* Contact & Banking (3 cols): Expands smoothly from inside */}
          <ScrollReveal direction="zoom" delay={250} className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-sans mb-3 border-b border-emerald-400/25 pb-2">
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

              <div className="pt-2 text-xs bg-[#013219]/55 backdrop-blur-[2px] p-3.5 rounded-xl border border-emerald-400/25 space-y-1.5 shadow-inner">
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
          </ScrollReveal>

        </div>

        {/* Bottom Copyright */}
        <ScrollReveal direction="fade" delay={100} className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-emerald-400/80">
          <div>
            © {new Date().getFullYear()} {isEn ? FOUNDATION_INFO.englishName : FOUNDATION_INFO.name}. {t.footer.copyright}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-emerald-300">
            <span className="font-solaiman tracking-wide">{t.common.slogan}</span>
            <span className="hidden sm:inline">·</span>
            <span>{isEn ? 'Bogura, Bangladesh' : 'বগুড়া, বাংলাদেশ'}</span>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
};
