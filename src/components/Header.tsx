import React, { useState } from 'react';
import { Heart, Menu, X, Phone, Mail, MapPin, Users, Lock, User, Globe, Sparkles, ChevronRight } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';

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
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  const closeMobileMenu = () => setMobileMenuOpen(false);

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
              <span className="truncate">{FOUNDATION_INFO.address}</span>
            </span>
            <span className="hidden md:inline text-emerald-300/60">•</span>
            <span className="hidden md:inline-flex items-center text-emerald-300 font-solaiman text-[12px] tracking-wide">
              {FOUNDATION_INFO.slogan}
            </span>
          </div>

          {/* Contact Details */}
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
                {FOUNDATION_INFO.name}
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
              হোম
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
              আমাদের সম্পর্কে
            </button>
            <a
              href="#projects"
              onClick={(e) => handleNavToSection(e, 'projects')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 font-semibold text-emerald-800 transition-colors"
            >
              চলমান প্রকল্প
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavToSection(e, 'services')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              প্রোগ্রাম ও সেবা
            </a>
            <a
              href="#prayer"
              onClick={(e) => handleNavToSection(e, 'prayer')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              নামাজের সময়
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavToSection(e, 'gallery')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              গ্যালারি
            </a>
            <a
              href="#news"
              onClick={(e) => handleNavToSection(e, 'news')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              খবর
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavToSection(e, 'contact')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              যোগাযোগ
            </a>
          </nav>

          {/* Action Buttons (Zone 3) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              onClick={() => onOpenDonation()}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#087443] hover:bg-[#045332] active:scale-95 rounded-full shadow-md shadow-emerald-800/15 transition-all whitespace-nowrap cursor-pointer shrink-0"
              aria-label="দান করুন"
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
              <span className="hidden min-[400px]:inline">খেদমতে শরীক হোন</span>
              <span className="min-[400px]:hidden">দান করুন</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-700 hover:text-emerald-700 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 lg:hidden cursor-pointer"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-800" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Sidebar */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
              onClick={closeMobileMenu}
            />

            {/* Sidebar Container */}
            <aside className="relative z-10 w-full max-w-[320px] bg-[#0c1017] text-slate-100 h-full flex flex-col justify-between shadow-2xl border-r border-slate-800 animate-in slide-in-from-left duration-300">
              {/* Header inside Sidebar */}
              <div>
                <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white p-0.5 flex items-center justify-center shadow-xs">
                      <img src={FOUNDATION_INFO.logoUrl} alt={FOUNDATION_INFO.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-serif-bn font-bold text-sm text-white leading-tight">
                        {lang === 'bn' ? FOUNDATION_INFO.name : FOUNDATION_INFO.englishName}
                      </h4>
                      <p className="text-[10px] text-emerald-400 font-medium">EST. {FOUNDATION_INFO.established}</p>
                    </div>
                  </div>
                  <button 
                    onClick={closeMobileMenu}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    aria-label="Close Sidebar"
                  >
                    <X className="w-5 h-5" />
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
                        ? 'bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{lang === 'bn' ? 'হোম' : 'Home'}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>

                  {/* 2. About Us */}
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      if (onNavigateToAbout) onNavigateToAbout();
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${
                      currentPage === 'about'
                        ? 'bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>

                  {/* 3. Activities */}
                  <a
                    href="#projects"
                    onClick={(e) => handleNavToSection(e, 'projects')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all cursor-pointer"
                  >
                    <span>{lang === 'bn' ? 'সেবামূলক কার্যক্রম' : 'Activities'}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>

                  {/* 4. Gallery */}
                  <a
                    href="#gallery"
                    onClick={(e) => handleNavToSection(e, 'gallery')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all cursor-pointer"
                  >
                    <span>{lang === 'bn' ? 'ছবি গ্যালারি' : 'Gallery'}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>

                  {/* 5. Get Involved */}
                  <a
                    href="#volunteer"
                    onClick={(e) => {
                      closeMobileMenu();
                      onOpenVolunteer();
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all cursor-pointer"
                  >
                    <span>{lang === 'bn' ? 'স্বেচ্ছাসেবক হোন' : 'Get Involved'}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>

                  {/* 6. Blogs */}
                  <a
                    href="#news"
                    onClick={(e) => handleNavToSection(e, 'news')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all cursor-pointer"
                  >
                    <span>{lang === 'bn' ? 'ব্লগ ও সংবাদ' : 'Blogs'}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>

                  {/* 7. Notice */}
                  <a
                    href="#contact"
                    onClick={(e) => handleNavToSection(e, 'contact')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all cursor-pointer"
                  >
                    <span>{lang === 'bn' ? 'জরুরি নোটিশ' : 'Notice'}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>

                  {/* 8. Contact */}
                  <a
                    href="#contact"
                    onClick={(e) => handleNavToSection(e, 'contact')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all cursor-pointer"
                  >
                    <span>{lang === 'bn' ? 'যোগাযোগ' : 'Contact'}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                </nav>
              </div>

              {/* Bottom Section: Dual-Tone Language Switcher & Action Button */}
              <div className="p-4 border-t border-slate-800/80 bg-[#090d13] space-y-3">
                {/* Creative Two-Tone Language Switcher */}
                <div className="dual-tone-lang-switcher bg-[#121824] p-1.5 rounded-2xl border border-slate-800 flex items-center justify-between gap-2 shadow-inner">
                  {/* Bengali Toggle: Vibrant Emerald Green Accent */}
                  <button
                    type="button"
                    onClick={() => {
                      setLang('bn');
                      if (typeof document !== 'undefined') document.documentElement.lang = 'bn';
                    }}
                    className={`lang-btn-bn flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 ${
                      lang === 'bn'
                        ? 'bg-[#10b981] text-white shadow-[0_0_16px_rgba(16,185,129,0.55)] scale-102 border border-emerald-300/40'
                        : 'text-slate-400 hover:text-slate-200 bg-transparent hover:bg-white/5'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    <span>বাং</span>
                  </button>

                  {/* English Toggle: Deep Royal Purple / Navy Blue Accent */}
                  <button
                    type="button"
                    onClick={() => {
                      setLang('en');
                      if (typeof document !== 'undefined') document.documentElement.lang = 'en';
                    }}
                    className={`lang-btn-en flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 ${
                      lang === 'en'
                        ? 'bg-[#6366f1] text-white shadow-[0_0_16px_rgba(99,102,241,0.55)] scale-102 border border-indigo-300/40'
                        : 'text-slate-400 hover:text-slate-200 bg-transparent hover:bg-white/5'
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
                  className="accent-action-button w-full py-3 px-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[#312e81] via-[#4338ca] to-[#3b82f6] hover:from-[#3730a3] hover:to-[#2563eb] active:scale-98 transition-all duration-300 shadow-[0_4px_18px_rgba(67,56,202,0.4)] hover:shadow-[0_6px_22px_rgba(67,56,202,0.6)] border border-indigo-400/30 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <User className="w-4 h-4 text-indigo-200 group-hover:scale-110 transition-transform" />
                  <span>{lang === 'bn' ? 'আমার অ্যাকাউন্ট / দান করুন' : 'My Account / Donate'}</span>
                </button>
              </div>
            </aside>
          </div>
        )}
      </header>
    </>
  );
};
