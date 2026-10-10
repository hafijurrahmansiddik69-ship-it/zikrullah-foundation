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
      <div className="bg-[#003d27] text-emerald-100 text-xs sm:text-sm py-2 px-4 border-b border-emerald-900/50">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-200">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{FOUNDATION_INFO.address}</span>
            </span>
            <span className="hidden md:inline text-emerald-300/60">•</span>
            <span className="hidden md:inline-flex items-center text-emerald-300 font-solaiman text-xs sm:text-[13px] tracking-wide">
              {FOUNDATION_INFO.slogan}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans">
            <a
              href={`mailto:${FOUNDATION_INFO.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">{FOUNDATION_INFO.email}</span>
            </a>
            <span className="text-emerald-500/50">•</span>
            <a
              href={`tel:${FOUNDATION_INFO.phone.replace(/\s+/g, '')}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{FOUNDATION_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Wordmark (Zone 1) */}
          <button
            onClick={() => {
              if (onNavigateHome) onNavigateHome();
            }}
            className="flex items-center gap-3 group shrink-0 text-left cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-200/90 p-1 flex items-center justify-center shadow-xs overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img
                src={FOUNDATION_INFO.logoUrl}
                alt={FOUNDATION_INFO.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-bn font-bold text-xl sm:text-2xl text-[#045332] leading-tight tracking-tight">
                {FOUNDATION_INFO.name}
              </span>
              <span className="font-armwrestler text-sm sm:text-base font-bold text-emerald-800 uppercase tracking-wider leading-none mt-1">
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
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onOpenDonation()}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-sm font-bold text-white bg-[#087443] hover:bg-[#045332] active:scale-95 rounded-full shadow-md shadow-emerald-800/15 transition-all whitespace-nowrap cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>খেদমতে শরীক হোন</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-700 rounded-lg hover:bg-emerald-50 lg:hidden cursor-pointer"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
