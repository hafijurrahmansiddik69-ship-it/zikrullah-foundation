import React, { useState } from 'react';
import { Heart, Menu, X, Phone, Mail, MapPin, Users } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenDonation: (category?: string) => void;
  onOpenZakat?: () => void;
  onOpenVolunteer: () => void;
  onNavigateToAbout?: () => void;
  onNavigateHome?: () => void;
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

  const closeMobileMenu = () => setMobileMenuOpen(false);

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
              href="#services"
              onClick={() => {
                if (currentPage !== 'home' && onNavigateHome) onNavigateHome();
              }}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              লক্ষ্য ও উদ্দেশ্য
            </a>
            <a
              href="#projects"
              onClick={() => {
                if (currentPage !== 'home' && onNavigateHome) onNavigateHome();
              }}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              চলমান প্রকল্প
            </a>
            <a
              href="#prayer"
              onClick={() => {
                if (currentPage !== 'home' && onNavigateHome) onNavigateHome();
              }}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              নামাজের সময়
            </a>
            <a
              href="#gallery"
              onClick={() => {
                if (currentPage !== 'home' && onNavigateHome) onNavigateHome();
              }}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              গ্যালারি
            </a>
            <a
              href="#news"
              onClick={() => {
                if (currentPage !== 'home' && onNavigateHome) onNavigateHome();
              }}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              খবর
            </a>
            <a
              href="#contact"
              onClick={() => {
                if (currentPage !== 'home' && onNavigateHome) onNavigateHome();
              }}
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

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-emerald-100 px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
            <nav className="flex flex-col space-y-1 text-base font-medium text-slate-800">
              <button
                onClick={() => {
                  closeMobileMenu();
                  if (onNavigateHome) onNavigateHome();
                }}
                className={`text-left px-3 py-2.5 rounded-lg ${
                  currentPage === 'home'
                    ? 'bg-emerald-50 text-emerald-800 font-bold'
                    : 'hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                হোম
              </button>
              <button
                onClick={() => {
                  closeMobileMenu();
                  if (onNavigateToAbout) onNavigateToAbout();
                }}
                className={`text-left px-3 py-2.5 rounded-lg ${
                  currentPage === 'about'
                    ? 'bg-emerald-50 text-emerald-800 font-bold'
                    : 'hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                আমাদের সম্পর্কে
              </button>
              <a
                href="#services"
                onClick={() => {
                  closeMobileMenu();
                  if (currentPage !== 'home' && onNavigateHome) onNavigateHome();
                }}
                className="px-3 py-2.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
              >
                লক্ষ্য ও উদ্দেশ্য
              </a>
              <a
                href="#projects"
                onClick={() => {
                  closeMobileMenu();
                  if (currentPage !== 'home' && onNavigateHome) onNavigateHome();
                }}
                className="px-3 py-2.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
              >
                চলমান প্রকল্প
              </a>
              <a
                href="#prayer"
                onClick={() => {
                  closeMobileMenu();
                  if (currentPage !== 'home' && onNavigateHome) onNavigateHome();
                }}
                className="px-3 py-2.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
              >
                নামাজের সময়সূচি
              </a>
              <a
                href="#gallery"
                onClick={() => {
                  closeMobileMenu();
                  if (currentPage !== 'home' && onNavigateHome) onNavigateHome();
                }}
                className="px-3 py-2.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
              >
                গ্যালারি
              </a>
              <a
                href="#news"
                onClick={() => {
                  closeMobileMenu();
                  if (currentPage !== 'home' && onNavigateHome) onNavigateHome();
                }}
                className="px-3 py-2.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
              >
                সাম্প্রতিক খবর
              </a>
              <a
                href="#contact"
                onClick={() => {
                  closeMobileMenu();
                  if (currentPage !== 'home' && onNavigateHome) onNavigateHome();
                }}
                className="px-3 py-2.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
              >
                যোগাযোগ
              </a>
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  closeMobileMenu();
                  onOpenVolunteer();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 font-semibold text-sm"
              >
                <Users className="w-4 h-4 text-slate-600" />
                <span>স্বেচ্ছাসেবক হিসেবে যোগ দিন</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
