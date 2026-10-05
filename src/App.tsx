import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturesRibbon } from './components/FeaturesRibbon';
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
import { Project } from './types';
import { Heart } from 'lucide-react';

export function App() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [donationCategory, setDonationCategory] = useState<string>('সাধারণ সদকা ও দান');
  const [donationAmount, setDonationAmount] = useState<number>(1000);

  const [isZakatOpen, setIsZakatOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

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
        onOpenDonation={() => handleOpenDonation()}
        onOpenZakat={() => setIsZakatOpen(true)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Banner */}
        <Hero
          onOpenDonation={() => handleOpenDonation()}
          onOpenZakat={() => setIsZakatOpen(true)}
        />

        {/* Feature Highlights Ribbon */}
        <FeaturesRibbon />

        {/* About Organization */}
        <AboutSection onOpenVolunteer={() => setIsVolunteerOpen(true)} />

        {/* Services & Initiatives */}
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
      </main>

      {/* Institutional Footer */}
      <Footer
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
