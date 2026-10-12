import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CoreActivitiesSection } from './components/CoreActivitiesSection';
import { StatsSection } from './components/StatsSection';
import { ProjectsSection } from './components/ProjectsSection';
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

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>(() => {
    if (window.location.hash === '#about-page') return 'about';
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
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: 'home' | 'about') => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = 'about-page';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDonation = (category?: string, amount?: number) => {
    if (category) setDonationCategory(category);
    if (amount) setDonationAmount(amount);
    setIsDonationOpen(true);
  };

  const handleDonateToProject = (project: Project) => {
    setDonationCategory(`${project.title} (${project.category})`);
    setDonationAmount(1000);
    setIsDonationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans-bn selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigateHome={() => navigateTo('home')}
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
            />

            <ServicesSection
              onSelectServiceDonation={(title) => handleOpenDonation(title)}
            />

            <CoreActivitiesSection
              onOpenDonation={(cat) => handleOpenDonation(cat)}
            />

            <StatsSection />

            <ProjectsSection onDonateToProject={handleDonateToProject} />

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
          aria-label="দান করুন"
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white animate-pulse" />
          <span>দান করুন</span>
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

export default App;

