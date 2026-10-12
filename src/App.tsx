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
import { AdminPage } from './pages/AdminPage';
import { Project } from './types';
import { Heart, ShieldCheck, Lock, ArrowRight } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'admin'>(() => {
    if (window.location.hash === '#about-page') return 'about';
    if (window.location.hash === '#admin-page' || window.location.hash === '#admin') return 'admin';
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
      } else if (window.location.hash === '#admin-page' || window.location.hash === '#admin') {
        setCurrentPage('admin');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: 'home' | 'about' | 'admin') => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = 'about-page';
    } else if (page === 'admin') {
      window.location.hash = 'admin-page';
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
        onNavigateToAdmin={() => navigateTo('admin')}
        onOpenDonation={() => handleOpenDonation()}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      <main className="flex-1">
        {currentPage === 'about' ? (
          /* Dedicated Separate About Us Page with Mission & Vision */
          <AboutPage
            onBackToHome={() => navigateTo('home')}
            onOpenVolunteer={() => setIsVolunteerOpen(true)}
            onOpenDonation={(cat) => handleOpenDonation(cat)}
            onNavigateToAdmin={() => navigateTo('admin')}
          />
        ) : currentPage === 'admin' ? (
          /* Dedicated Separate Admin Portal with Email/Password Protection */
          <AdminPage
            onBackToHome={() => navigateTo('home')}
          />
        ) : (
          /* Full Home Page Flow */
          <>
            {/* Hero Banner */}
            <Hero
              onNavigateToAbout={() => navigateTo('about')}
              onOpenDonation={() => handleOpenDonation()}
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

            {/* 4 Core Activities Cards */}
            <CoreActivitiesSection
              onOpenDonation={(cat) => handleOpenDonation(cat)}
            />

            {/* Key Statistics */}
            <StatsSection />

            {/* Running Projects with Fund Tracking */}
            <ProjectsSection onDonateToProject={handleDonateToProject} />

            {/* Bogura Prayer Times & Hadith */}
            <PrayerTimesBogura />

            {/* Call to Action Banner */}
            <CallToActionBanner onOpenDonation={() => handleOpenDonation()} />

            {/* ১. স্বেচ্ছাসেবক নিবন্ধন */}
            <VolunteerSection onOpenModal={() => setIsVolunteerOpen(true)} />

            {/* ২. ছবি ও স্থিরচিত্র */}
            <GallerySection />

            {/* ৩. বিজ্ঞপ্তি ও রিপোর্ট */}
            <NewsSection />

            {/* ৪. অফিস যোগাযোগ */}
            <ContactSection />

            {/* অফিস যোগাযোগের নিচে শুধুমাত্র অ্যাডমিন বাটন (ক্লিক করলে অ্যাডমিন পেইজে প্রবেশ) */}
            <div id="admin-panel" className="bg-[#f8faf9] py-5 border-t border-slate-200/60 flex justify-center items-center">
              <button
                onClick={() => navigateTo('admin')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-emerald-50 text-slate-600 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 text-xs sm:text-sm font-medium transition-all shadow-2xs hover:shadow-xs cursor-pointer group active:scale-95"
                title="অ্যাডমিন"
              >
                <Lock className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                <span>অ্যাডমিন</span>
              </button>
            </div>
          </>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigateHome={() => navigateTo('home')}
        onNavigateToAbout={() => navigateTo('about')}
        onNavigateToAdmin={() => navigateTo('admin')}
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
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white animate-pulse shrink-0" />
          <span className="hidden sm:inline">খেদমতে শরীক হোন</span>
          <span className="sm:hidden">দান করুন</span>
        </button>
      </div>

      {/* Modals */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
        initialCategory={donationCategory}
        initialAmount={donationAmount}
      />

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />

    </div>
  );
}

export default App;
