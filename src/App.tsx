import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { OngoingActivitiesSection } from './components/OngoingActivitiesSection';
import { ThoughtsSection } from './components/ThoughtsSection';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { VolunteerModal } from './components/VolunteerModal';
import { NeedyInfoModal } from './components/NeedyInfoModal';
import { DirectContactModal } from './components/DirectContactModal';
import { MediaGalleryModal } from './components/MediaGalleryModal';
import { AboutPage } from './pages/AboutPage';
import { Heart } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainApp() {
  const { isEn } = useLanguage();
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>(() => {
    if (typeof window !== 'undefined') {
      try {
        const hash = window.location.hash;
        const path = window.location.pathname.toLowerCase();
        if (hash === '#about-page' || path === '/about' || path === '/about/' || path === '/about-page') {
          return 'about';
        }
      } catch {
        // fallback to home
      }
    }
    return 'home';
  });

  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [donationCategory, setDonationCategory] = useState<string>('general-sadaqah');
  const [donationAmount, setDonationAmount] = useState<number>(1000);

  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [isNeedyInfoOpen, setIsNeedyInfoOpen] = useState(false);
  const [isDirectContactOpen, setIsDirectContactOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      try {
        const hash = window.location.hash;
        const path = window.location.pathname.toLowerCase();
        if (hash === '#about-page' || path === '/about' || path === '/about/' || path === '/about-page') {
          setCurrentPage('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          setCurrentPage('home');
          if (hash && hash !== '#' && hash !== '#home') {
            const cleanHash = hash.replace('#', '');
            setTimeout(() => {
              const el = document.getElementById(cleanHash);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
          }
        }
      } catch (err) {
        console.warn('Navigation hash handler error:', err);
      }
    };

    window.addEventListener('hashchange', handleHash);
    
    // Check initial hash on page load
    try {
      if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#about-page') {
        const cleanHash = window.location.hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(cleanHash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    } catch {
      // ignore
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
    <div className={`min-h-screen flex flex-col overflow-x-clip ${isEn ? 'font-sans' : 'font-sans-bn'} selection:bg-emerald-100 selection:text-emerald-900`}>
      
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigateHome={(hash) => navigateTo('home', hash)}
        onNavigateToAbout={() => navigateTo('about')}
        onOpenDonation={() => handleOpenDonation()}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
      />

      <main className="flex-1 overflow-x-clip">
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
              onOpenDonation={(cat) => handleOpenDonation(cat)}
              onOpenVolunteer={() => setIsVolunteerOpen(true)}
              onOpenNeedyInfo={() => setIsNeedyInfoOpen(true)}
              onOpenContactModal={() => setIsDirectContactOpen(true)}
            />

            <AboutSection 
              onNavigateToAbout={() => navigateTo('about')}
              onOpenVolunteer={() => setIsVolunteerOpen(true)}
              onOpenNeedyInfo={() => setIsNeedyInfoOpen(true)}
              onOpenContactModal={() => setIsDirectContactOpen(true)}
              onOpenDonation={() => handleOpenDonation()}
            />

            <ServicesSection
              onSelectServiceDonation={(title) => handleOpenDonation(title)}
            />

            {/* চলমান কার্যক্রমসমূহ (আস-সুন্নাহ ট্রাস্ট ডিজাইনের ৭টি প্রজেক্ট কার্ড) */}
            <OngoingActivitiesSection
              onOpenDonation={(cat, amt) => handleOpenDonation(cat, amt)}
              onOpenVolunteer={() => setIsVolunteerOpen(true)}
            />

            <ThoughtsSection
              onOpenDonation={() => handleOpenDonation()}
              onOpenVolunteer={() => setIsVolunteerOpen(true)}
            />
          </>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigateHome={(hash) => navigateTo('home', hash)}
        onNavigateToAbout={() => navigateTo('about')}
        onOpenDonation={() => handleOpenDonation()}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
      />

      {/* Floating Quick Support Trigger */}
      <div className="floating-cta no-print fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30">
        <button
          onClick={() => handleOpenDonation()}
          className="flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#087443] hover:bg-[#045332] active:scale-95 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/30 transition-all cursor-pointer border-2 border-white whitespace-nowrap"
          aria-label={isEn ? 'Join Khidmat' : 'খেদমতে শরীক হোন'}
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
          <span>{isEn ? 'Join Khidmat' : 'খেদমতে শরীক হোন'}</span>
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

      {/* Needy Info Submission Modal */}
      <NeedyInfoModal
        isOpen={isNeedyInfoOpen}
        onClose={() => setIsNeedyInfoOpen(false)}
      />

      {/* Direct Contact Modal */}
      <DirectContactModal
        isOpen={isDirectContactOpen}
        onClose={() => setIsDirectContactOpen(false)}
      />

      {/* Categorized Photo & Video Gallery Modal */}
      <MediaGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
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
