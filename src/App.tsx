import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { StatsSection } from './components/StatsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PrayerTimesBogura } from './components/PrayerTimesBogura';
import { CallToActionBanner } from './components/CallToActionBanner';
import { GallerySection } from './components/GallerySection';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { ZakatCalculatorModal } from './components/ZakatCalculatorModal';
import { VolunteerModal } from './components/VolunteerModal';
import { AboutPage } from './pages/AboutPage';
import { Project } from './types';
import { Heart } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>(() => {
    return window.location.hash === '#about-page' ? 'about' : 'home';
  });

  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [donationCategory, setDonationCategory] = useState<string>('সাধারণ সদকা ও দান');
  const [donationAmount, setDonationAmount] = useState<number>(1000);

  const [isZakatOpen, setIsZakatOpen] = useState(false);
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
    window.location.hash = page === 'about' ? 'about-page' : '';
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

  const handleProceedFromZakat = (amount: number) => {
    setIsZakatOpen(false);
    setDonationCategory('যাকাত তহবিল');
    setDonationAmount(amount);
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
        onOpenZakat={() => setIsZakatOpen(true)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      <main className="flex-1">
        {currentPage === 'about' ? (
          /* Dedicated Separate About Us Page with Mission & Vision */
          <AboutPage
            onBackToHome={() => navigateTo('home')}
            onOpenVolunteer={() => setIsVolunteerOpen(true)}
            onOpenDonation={(cat) => handleOpenDonation(cat)}
          />
        ) : (
          /* Full Home Page Flow */
          <>
            {/* Hero Banner */}
            <Hero
              onNavigateToAbout={() => navigateTo('about')}
              onOpenDonation={() => handleOpenDonation()}
              onOpenZakat={() => setIsZakatOpen(true)}
            />

            {/* About Organization Summary */}
            <AboutSection 
              onNavigateToAbout={() => navigateTo('about')}
              onOpenVolunteer={() => setIsVolunteerOpen(true)} 
            />

            {/* Services / Mission & Vision Initiatives */}
            <ServicesSection
              onSelectServiceDonation={(title) => handleOpenDonation(title)}
            />

            {/* Key Statistics */}
            <StatsSection />

            {/* Running Projects with Fund Tracking */}
            <ProjectsSection onDonateToProject={handleDonateToProject} />

            {/* Bogura Prayer Times & Hadith */}
            <PrayerTimesBogura />

            {/* Call to Action Banner */}
            <CallToActionBanner onOpenDonation={() => handleOpenDonation()} />

            {/* Photo Gallery & Lightbox */}
            <GallerySection />

            {/* News & Updates */}
            <NewsSection />

            {/* Contact & Map */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigateHome={() => navigateTo('home')}
        onNavigateToAbout={() => navigateTo('about')}
        onOpenDonation={() => handleOpenDonation()}
        onOpenZakat={() => setIsZakatOpen(true)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      {/* Floating Quick Donate Trigger on Mobile/Desktop */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => handleOpenDonation()}
          className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#087443] hover:bg-[#045332] active:scale-95 text-white font-bold text-sm shadow-xl shadow-emerald-950/30 transition-all cursor-pointer border-2 border-white"
          aria-label="দান করুন"
        >
          <Heart className="w-5 h-5 fill-white animate-pulse" />
          <span className="hidden sm:inline">দান করুন</span>
        </button>
      </div>

      {/* Modals */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
        initialCategory={donationCategory}
        initialAmount={donationAmount}
      />

      <ZakatCalculatorModal
        isOpen={isZakatOpen}
        onClose={() => setIsZakatOpen(false)}
        onProceedToDonate={handleProceedFromZakat}
      />

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />

    </div>
  );
}

export default App;
