import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { StatsSection } from './components/StatsSection';
import { PrayerTimesBogura } from './components/PrayerTimesBogura';
import { CallToActionBanner } from './components/CallToActionBanner';
import { VolunteerSection } from './components/VolunteerSection';
import { GallerySection } from './components/GallerySection';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { VolunteerModal } from './components/VolunteerModal';
import { AboutPage } from './pages/AboutPage';
import { Project } from './types';
import { Heart } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainApp() {
  const { t, isEn } = useLanguage();
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#about-page') return 'about';
    return 'home';
  });

  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [donationCategory, setDonationCategory] = useState<string>('সাধারণ সদকা ও দান');
  const [donationAmount, setDonationAmount] = useState<number>(1000);

  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#about-page') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        if (window.location.hash === '#projects') {
          setTimeout(() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };
    window.addEventListener('hashchange', handleHash);
    
    // Check initial hash for #projects
    if (window.location.hash === '#projects') {
      setTimeout(() => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: 'home' | 'about', targetHash?: string) => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = 'about-page';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (targetHash) {
        window.location.hash = targetHash;
        setTimeout(() => {
          const el = document.getElementById(targetHash.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenDonation = (category?: string, amount?: number) => {
    if (category) setDonationCategory(category);
    if (amount) setDonationAmount(amount);
    setIsDonationOpen(true);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isEn ? 'font-sans' : 'font-sans-bn'} selection:bg-emerald-100 selection:text-emerald-900`}>
      
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigateHome={(hash) => navigateTo('home', hash)}
        onNavigateToAbout={() => navigateTo('about')}
        onOpenDonation={() => handleOpenDonation()}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      <main className="flex-1">
        {currentPage === 'about' ? (
          <AboutPage
            onBackToHome={() => navigateTo('home')}
            onOpenVolunteer={() => setIsVolunteerOpen(true)}
            onOpenDonation={(cat) => handleOpenDonation(cat)}
          />
        ) : (
          <>
            <Hero
              onNavigateToAbout={() => navigateTo('about')}
              onOpenDonation={() => handleOpenDonation()}
            />

            <AboutSection 
              onNavigateToAbout={() => navigateTo('about')}
              onOpenVolunteer={() => setIsVolunteerOpen(true)} 
              onOpenDonation={() => handleOpenDonation()}
            />

            {/* আমাদের বর্তমান ও চলমান প্রকল্পসমূহ (10 Minute School ক্যাটাগরি বাটন/কার্ড ও বিস্তারিত মডিউল) */}
            <ProjectsSection onOpenDonation={(cat) => handleOpenDonation(cat)} />

            <ServicesSection
              onSelectServiceDonation={(title) => handleOpenDonation(title)}
            />

            <StatsSection />

            <PrayerTimesBogura />

            <CallToActionBanner onOpenDonation={() => handleOpenDonation()} />

            <VolunteerSection onOpenModal={() => setIsVolunteerOpen(true)} />

            <GallerySection />

            <NewsSection />

            <ContactSection />
          </>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigateHome={() => navigateTo('home')}
        onNavigateToAbout={() => navigateTo('about')}
        onOpenDonation={() => handleOpenDonation()}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      {/* Floating Quick Donate Trigger on Mobile/Desktop */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30">
        <button
          onClick={() => handleOpenDonation()}
          className="flex items-center gap-1.5 sm:gap-2 px-3.5 py-2.5 sm:px-5 sm:py-3.5 rounded-full bg-[#087443] hover:bg-[#045332] active:scale-95 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/30 transition-all cursor-pointer border-2 border-white"
          aria-label={t.common.donate}
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white animate-pulse" />
          <span>{t.common.donate}</span>
        </button>
      </div>

      {/* Donation Flow Modal */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
        initialCategory={donationCategory}
        initialAmount={donationAmount}
      />

      {/* Volunteer Registration Modal */}
      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />

    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;
