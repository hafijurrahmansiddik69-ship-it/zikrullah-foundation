import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
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
import { OfficialInvitationModal } from './components/OfficialInvitationModal';
import { EstablishmentContextModal } from './components/EstablishmentContextModal';
import { AboutPage } from './pages/AboutPage';
import { FounderProfilePage } from './pages/FounderProfilePage';
import { QuickEngagementBar } from './components/QuickEngagementBar';
import { Heart, Mic } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainApp() {
  const { isEn } = useLanguage();
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'founder'>(() => {
    if (typeof window !== 'undefined') {
      try {
        const hash = window.location.hash;
        const path = window.location.pathname.toLowerCase();
        if (
          hash === '#founder-profile' ||
          path === '/founder' ||
          path === '/founder/' ||
          path === '/founder-profile'
        ) {
          return 'founder';
        }
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
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
  const [isContextModalOpen, setIsContextModalOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      try {
        const hash = window.location.hash;
        const path = window.location.pathname.toLowerCase();
        if (
          hash === '#founder-profile' ||
          path === '/founder' ||
          path === '/founder/' ||
          path === '/founder-profile'
        ) {
          setCurrentPage('founder');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (
          hash === '#about-page' ||
          path === '/about' ||
          path === '/about/' ||
          path === '/about-page'
        ) {
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
      if (
        window.location.hash &&
        window.location.hash !== '#' &&
        window.location.hash !== '#about-page' &&
        window.location.hash !== '#founder-profile'
      ) {
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

  const navigateTo = (page: 'home' | 'about' | 'founder', targetHash?: string) => {
    setCurrentPage(page);
    if (page === 'founder') {
      window.location.hash = 'founder-profile';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
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
        onNavigateToFounder={() => navigateTo('founder')}
        onOpenDonation={() => handleOpenDonation()}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
        onOpenNeedyInfo={() => setIsNeedyInfoOpen(true)}
        onOpenContactModal={() => setIsDirectContactOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
      />

      <main className="flex-1 overflow-x-clip">
        {currentPage === 'founder' ? (
          <FounderProfilePage
            onBackToHome={() => navigateTo('home')}
            onOpenInvitationModal={() => setIsInvitationModalOpen(true)}
            onNavigateToAbout={() => navigateTo('about')}
          />
        ) : currentPage === 'about' ? (
          <AboutPage
            onBackToHome={() => navigateTo('home')}
            onOpenVolunteer={() => setIsVolunteerOpen(true)}
            onOpenNeedyInfo={() => setIsNeedyInfoOpen(true)}
            onOpenContactModal={() => setIsDirectContactOpen(true)}
            onOpenDonation={(cat) => handleOpenDonation(cat)}
          />
        ) : (
          <>
            <Hero
              onNavigateToAbout={() => navigateTo('about')}
              onNavigateToFounder={() => navigateTo('founder')}
              onOpenEstablishmentContext={() => setIsContextModalOpen(true)}
              onOpenDonation={(cat) => handleOpenDonation(cat)}
              onOpenVolunteer={() => setIsVolunteerOpen(true)}
              onOpenNeedyInfo={() => setIsNeedyInfoOpen(true)}
              onOpenContactModal={() => setIsDirectContactOpen(true)}
            />

            <ServicesSection
              onSelectServiceDonation={(title) => handleOpenDonation(title)}
              onOpenVolunteer={() => setIsVolunteerOpen(true)}
              onOpenNeedyInfo={() => setIsNeedyInfoOpen(true)}
              onOpenContactModal={() => setIsDirectContactOpen(true)}
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

            {/* Bottom Home Pre-Footer Action Band: Easy Access to All 3 Popups */}
            <section className="py-10 sm:py-14 bg-gradient-to-b from-[#f3f8f5] to-[#e6f2ec] border-t border-emerald-100">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200 mb-3">
                  {isEn ? 'Get Involved With Us' : 'সহযোগিতা ও যোগাযোগ'}
                </span>
                <h2 className="font-serif-bn font-bold text-2xl sm:text-3xl text-slate-900 mb-2">
                  {isEn ? 'Connect, Volunteer or Share a Needy Case' : 'আমাদের সাথে যুক্ত হোন বা অসহায় মানুষের তথ্য দিন'}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto mb-6 font-solaiman">
                  {isEn
                    ? 'Your small step can bring hope to a family. Choose any option below to reach our team immediately.'
                    : 'আপনার একটি ছোট্ট উদ্যোগ একটি অসহায় পরিবারের মুখে হাসি ফোটাতে পারে। নিচের যেকোনো মাধ্যমে সরাসরি আমাদের সাথে যুক্ত হোন।'}
                </p>
                <QuickEngagementBar
                  onOpenVolunteer={() => setIsVolunteerOpen(true)}
                  onOpenNeedyInfo={() => setIsNeedyInfoOpen(true)}
                  onOpenContactModal={() => setIsDirectContactOpen(true)}
                />
              </div>
            </section>
          </>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigateHome={(hash) => navigateTo('home', hash)}
        onNavigateToAbout={() => navigateTo('about')}
        onNavigateToFounder={() => navigateTo('founder')}
        onOpenDonation={() => handleOpenDonation()}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
        onOpenNeedyInfo={() => setIsNeedyInfoOpen(true)}
        onOpenContactModal={() => setIsDirectContactOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
      />

      {/* Floating Quick Support / Founder Invitation Corner Trigger */}
      <div className="floating-cta no-print fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30">
        {currentPage === 'founder' ? (
          <button
            type="button"
            onClick={() => setIsInvitationModalOpen(true)}
            className="flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-[#047857] via-[#059669] to-[#10b981] hover:brightness-110 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-900/40 transition-all cursor-pointer border-2 border-white whitespace-nowrap"
            aria-label={isEn ? 'Apply for Invitation' : 'দাওয়াতের জন্য আবেদন'}
          >
            <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span>{isEn ? 'Apply for Invitation' : 'দাওয়াতের জন্য আবেদন'}</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleOpenDonation()}
            className="flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#087443] hover:bg-[#045332] active:scale-95 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/30 transition-all cursor-pointer border-2 border-white whitespace-nowrap"
            aria-label={isEn ? 'Join Khidmat' : 'খেদমতে শরীক হোন'}
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
            <span>{isEn ? 'Join Khidmat' : 'খেদমতে শরীক হোন'}</span>
          </button>
        )}
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

      {/* Founder Official Invitation Popup Modal */}
      <OfficialInvitationModal
        isOpen={isInvitationModalOpen}
        onClose={() => setIsInvitationModalOpen(false)}
      />

      {/* Establishment Context Popup Modal */}
      <EstablishmentContextModal
        isOpen={isContextModalOpen}
        onClose={() => setIsContextModalOpen(false)}
        onOpenDonation={() => {
          setIsContextModalOpen(false);
          handleOpenDonation('general-sadaqah');
        }}
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
