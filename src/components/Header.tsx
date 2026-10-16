import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Phone, Mail, MapPin, Globe, User, ChevronRight } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenDonation: (category?: string) => void;
  onOpenZakat?: () => void;
  onOpenVolunteer: () => void;
  onNavigateToAbout?: () => void;
  onNavigateHome?: (hash?: string) => void;
  currentPage?: 'home' | 'about';
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDonation,
  onOpenVolunteer,
  onNavigateToAbout,
  onNavigateHome,
  currentPage = 'home'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t, isEn } = useLanguage();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeMobileMenu();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    closeMobileMenu();
    if (currentPage !== 'home' && onNavigateHome) {
      onNavigateHome(`#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${sectionId}`);
      }
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#003d27] text-emerald-100 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-emerald-900/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          {/* Location / Slogan */}
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="flex items-center gap-1 text-emerald-200 truncate">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{t.common.address}</span>
            </span>
            <span className="hidden md:inline text-emerald-300/60">•</span>
            <span className="hidden md:inline-flex items-center text-emerald-300 font-solaiman text-[12px] tracking-wide">
              {t.common.slogan}
            </span>
          </div>

          {/* Contact Details & Desktop Language Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 font-sans">
            <a
              href={`mailto:${FOUNDATION_INFO.email}`}
              className="hover:text-white transition-colors hidden sm:flex items-center gap-1.5 text-emerald-200"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{FOUNDATION_INFO.email}</span>
            </a>
            <span className="hidden sm:inline text-emerald-500/50">•</span>
            <a
              href={`tel:${FOUNDATION_INFO.phone.replace(/\s+/g, '')}`}
              className="hover:text-white transition-colors flex items-center gap-1 text-emerald-200"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
              <span>{FOUNDATION_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs sm:shadow-sm transition-all">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Wordmark (Zone 1) */}
          <button
            onClick={() => {
              if (onNavigateHome) onNavigateHome();
            }}
            className="flex items-center gap-2 sm:gap-3 group min-w-0 max-w-[62%] sm:max-w-none text-left cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-emerald-200/90 p-0.5 sm:p-1 flex items-center justify-center shadow-xs overflow-hidden group-hover:scale-105 transition-all duration-300 shrink-0">
              <img
                src={FOUNDATION_INFO.logoUrl}
                alt={FOUNDATION_INFO.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif-bn font-bold text-base sm:text-2xl text-[#045332] leading-tight tracking-tight truncate">
                {isEn ? FOUNDATION_INFO.englishName : FOUNDATION_INFO.name}
              </span>
              <span className="font-armwrestler text-[11px] sm:text-base font-bold text-emerald-800 uppercase tracking-wider leading-none mt-0.5 sm:mt-1 truncate">
                {FOUNDATION_INFO.englishName}
              </span>
            </div>
          </button>

          {/* Navigation Links (Zone 2) */}
          <nav className="hidden lg:flex items-center gap-1 text-[15px] font-medium text-slate-700">
            <button
              onClick={() => {
                if (onNavigateHome) onNavigateHome();
              }}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-emerald-800 bg-emerald-50/90 font-semibold'
                  : 'hover:text-emerald-700 hover:bg-emerald-50/70'
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => {
                if (onNavigateToAbout) onNavigateToAbout();
              }}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'text-emerald-800 bg-emerald-50/90 font-semibold'
                  : 'hover:text-emerald-700 hover:bg-emerald-50/70'
              }`}
            >
              {t.nav.about}
            </button>
            <a
              href="#projects"
              onClick={(e) => handleNavToSection(e, 'projects')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 font-semibold text-emerald-800 transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavToSection(e, 'services')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#prayer"
              onClick={(e) => handleNavToSection(e, 'prayer')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              {t.nav.prayer}
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavToSection(e, 'gallery')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#news"
              onClick={(e) => handleNavToSection(e, 'news')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              {t.nav.news}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavToSection(e, 'contact')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Action Buttons & Desktop Language Switcher (Zone 3) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Desktop Two-Tone Language Switcher */}
            <div className="hidden sm:flex items-center bg-slate-900 p-1 rounded-full border border-slate-700 shadow-inner">
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1 ${
                  lang === 'bn'
                    ? 'bg-[#10b981] text-white shadow-[0_0_12px_rgba(16,185,129,0.6)] font-extrabold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="বাংলা ভাষায় দেখুন"
              >
                <span>বাং</span>
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1 ${
                  lang === 'en'
                    ? 'bg-[#6366f1] text-white shadow-[0_0_12px_rgba(99,102,241,0.6)] font-extrabold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="View in English"
              >
                <span>EN</span>
              </button>
            </div>

            <button
              onClick={() => onOpenDonation()}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#087443] hover:bg-[#045332] active:scale-95 rounded-full shadow-md shadow-emerald-800/15 transition-all whitespace-nowrap cursor-pointer shrink-0"
              aria-label={t.common.donate}
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
              <span className="hidden min-[400px]:inline">{t.common.donateNow}</span>
              <span className="min-[400px]:hidden">{t.common.donate}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 sm:p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-700 hover:text-emerald-700 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 lg:hidden cursor-pointer"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-800" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* As-Sunnah Foundation Style Background Overlay */}
        <div
          className={`menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
          aria-label="Close menu backdrop"
        />

        {/* As-Sunnah Foundation Style Sidebar Drawer */}
        <aside
          className={`sidebar-drawer ${mobileMenuOpen ? 'active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header inside Sidebar */}
          <div>
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white p-0.5 border border-emerald-200/90 flex items-center justify-center shadow-xs">
                  <img src={FOUNDATION_INFO.logoUrl} alt={FOUNDATION_INFO.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-serif-bn font-bold text-sm text-[#045332] leading-tight">
                    {isEn ? FOUNDATION_INFO.englishName : FOUNDATION_INFO.name}
                  </h4>
                  <p className="text-[10px] text-emerald-700 font-medium">
                    EST. {isEn ? 'Jan 1, 2023' : FOUNDATION_INFO.established}
                  </p>
                </div>
              </div>
              <button 
                onClick={closeMobileMenu}
                className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Close Sidebar"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Navigation Menu Layout */}
            <nav className="p-3 space-y-1 font-sans text-sm">
              {/* 1. Home */}
              <button
                onClick={() => {
                  closeMobileMenu();
                  if (onNavigateHome) onNavigateHome();
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${
                  currentPage === 'home'
                    ? 'bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/80 shadow-xs'
                    : 'text-gray-700 hover:text-emerald-800 hover:bg-emerald-50/70'
                }`}
              >
                <span>{t.nav.home}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>

              {/* 2. About Us */}
              <button
                onClick={() => {
                  closeMobileMenu();
                  if (onNavigateToAbout) onNavigateToAbout();
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${
                  currentPage === 'about'
                    ? 'bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/80 shadow-xs'
                    : 'text-gray-700 hover:text-emerald-800 hover:bg-emerald-50/70'
                }`}
              >
                <span>{t.nav.about}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>

              {/* 3. Activities */}
              <a
                href="#projects"
                onClick={(e) => handleNavToSection(e, 'projects')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-gray-700 hover:text-emerald-800 hover:bg-emerald-50/70 transition-all cursor-pointer"
              >
                <span>{t.nav.activities}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>

              {/* 4. Gallery */}
              <a
                href="#gallery"
                onClick={(e) => handleNavToSection(e, 'gallery')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-gray-700 hover:text-emerald-800 hover:bg-emerald-50/70 transition-all cursor-pointer"
              >
                <span>{t.nav.gallery}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>

              {/* 5. Get Involved */}
              <a
                href="#volunteer"
                onClick={(e) => {
                  closeMobileMenu();
                  onOpenVolunteer();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-gray-700 hover:text-emerald-800 hover:bg-emerald-50/70 transition-all cursor-pointer"
              >
                <span>{t.nav.getInvolved}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>

              {/* 6. Blogs */}
              <a
                href="#news"
                onClick={(e) => handleNavToSection(e, 'news')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-gray-700 hover:text-emerald-800 hover:bg-emerald-50/70 transition-all cursor-pointer"
              >
                <span>{t.nav.blogs}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>

              {/* 7. Notice */}
              <a
                href="#contact"
                onClick={(e) => handleNavToSection(e, 'contact')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-gray-700 hover:text-emerald-800 hover:bg-emerald-50/70 transition-all cursor-pointer"
              >
                <span>{t.nav.notice}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>

              {/* 8. Contact */}
              <a
                href="#contact"
                onClick={(e) => handleNavToSection(e, 'contact')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-gray-700 hover:text-emerald-800 hover:bg-emerald-50/70 transition-all cursor-pointer"
              >
                <span>{t.nav.contact}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
            </nav>
          </div>

          {/* Bottom Section: Dual-Tone Language Switcher & Action Button */}
          <div className="p-4 border-t border-gray-100 bg-gray-50/90 space-y-3">
            {/* Creative Two-Tone Language Switcher */}
            <div className="dual-tone-lang-switcher bg-white p-1.5 rounded-2xl border border-gray-200/80 flex items-center justify-between gap-2 shadow-xs">
              {/* Bengali Toggle: Vibrant Emerald Green Accent */}
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`lang-btn-bn flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 ${
                  lang === 'bn'
                    ? 'bg-[#10b981] text-white shadow-sm scale-102 border border-emerald-300/40'
                    : 'text-gray-600 hover:text-gray-900 bg-transparent hover:bg-gray-100'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-200" />
                <span>বাং</span>
              </button>

              {/* English Toggle: Deep Royal Purple / Navy Blue Accent */}
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`lang-btn-en flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 ${
                  lang === 'en'
                    ? 'bg-[#6366f1] text-white shadow-sm scale-102 border border-indigo-300/40'
                    : 'text-gray-600 hover:text-gray-900 bg-transparent hover:bg-gray-100'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>EN</span>
              </button>
            </div>

            {/* Prominent Action Button: Rich Deep Purple / Royal Navy Blue Gradient */}
            <button
              type="button"
              onClick={() => {
                closeMobileMenu();
                onOpenDonation();
              }}
              className="accent-action-button w-full py-3 px-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[#087443] via-[#065e37] to-[#045332] hover:brightness-105 active:scale-98 transition-all duration-300 shadow-md shadow-emerald-900/20 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <User className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
              <span>{t.common.myAccountOrDonate}</span>
            </button>
          </div>
        </aside>
      </header>
    </>
  );
};
