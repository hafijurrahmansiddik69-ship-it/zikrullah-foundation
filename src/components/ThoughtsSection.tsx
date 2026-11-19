import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Check,
  Link2,
  BookOpen,
  Send,
  Mail
} from 'lucide-react';
import { ARTICLES_DATA, ArticleEntry } from '../data/articlesData';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.5 22v-8.5h2.85l.43-3.32H13.5V8.06c0-.96.27-1.62 1.65-1.62h1.76V3.47c-.3-.04-1.35-.13-2.57-.13-2.54 0-4.28 1.55-4.28 4.4v2.44H7.2v3.32h2.86V22h3.44z" />
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.77.46 3.5 1.34 5.02L2 22l5.1-1.34a9.97 9.97 0 0 0 4.94 1.3h.01c5.53 0 10.02-4.49 10.02-10.02C22.07 6.49 17.57 2 12.04 2zm5.84 14.23c-.25.7-1.44 1.34-1.99 1.42-.51.08-1.15.11-1.85-.11-.43-.14-.98-.32-1.68-.62-2.96-1.28-4.89-4.26-5.04-4.46-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.6.84 2.06.91 2.21.08.15.13.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.18.3.78 1.29 1.68 2.09 1.15 1.03 2.13 1.35 2.43 1.5.3.15.47.13.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.07.12.07.72-.18 1.42z" />
  </svg>
);

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
}

const EditorialImage: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle
}) => {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#043927] via-[#064E3B] to-[#0F172A] flex flex-col items-center justify-center p-6 text-center text-white/90">
        <BookOpen className="w-8 h-8 text-[#F59E0B] mb-2 opacity-90" />
        <span className="font-serif-bn text-sm font-semibold line-clamp-2 max-w-xs">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

interface ThoughtsSectionProps {
  onOpenDonation?: () => void;
  onOpenVolunteer?: () => void;
}

export const ThoughtsSection: React.FC<ThoughtsSectionProps> = ({
  onOpenDonation,
  onOpenVolunteer
}) => {
  const { isEn } = useLanguage();
  const [viewMode, setViewMode] = useState<'grid' | 'archive' | 'article'>('grid');
  const [previousView, setPreviousView] = useState<'grid' | 'archive'>('grid');
  const [selectedArticle, setSelectedArticle] = useState<ArticleEntry | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const overlayScrollRef = useRef<HTMLDivElement>(null);

  const latestTwoArticles = ARTICLES_DATA.slice(0, 2);

  const categories = [
    { key: 'all', bn: 'সকল লেখা', en: 'All Articles' },
    { key: 'মাঠপর্যায়ের অভিজ্ঞতা', bn: 'মাঠপর্যায়ের অভিজ্ঞতা', en: 'Field Experience' },
    { key: 'আগামী দিনের পরিকল্পনা', bn: 'আগামী দিনের পরিকল্পনা', en: 'Future Roadmap' },
    { key: 'পরিকল্পনা ও ভাবনা', bn: 'পরিকল্পনা ও ভাবনা', en: 'Strategy & Reflections' },
    { key: 'প্রতিষ্ঠানের দর্শন', bn: 'প্রতিষ্ঠানের দর্শন', en: 'Institutional Values' }
  ];

  const filteredArchiveArticles =
    activeCategory === 'all'
      ? ARTICLES_DATA
      : ARTICLES_DATA.filter((item) => item.categoryBn === activeCategory);

  const openArticle = (article: ArticleEntry, from: 'grid' | 'archive') => {
    setPreviousView(from);
    setSelectedArticle(article);
    setViewMode('article');
    setCopiedLink(false);
    setSubscribeEmail('');
  };

  const openArchive = () => {
    setActiveCategory('all');
    setViewMode('archive');
  };

  const handleBack = () => {
    if (viewMode === 'article') {
      if (previousView === 'archive') {
        setViewMode('archive');
        setSelectedArticle(null);
      } else {
        setViewMode('grid');
        setSelectedArticle(null);
      }
    } else {
      setViewMode('grid');
      setSelectedArticle(null);
    }
  };

  const handleCloseToAction = (callback?: () => void) => {
    setViewMode('grid');
    setSelectedArticle(null);
    if (callback) {
      setTimeout(() => callback(), 60);
    }
  };

  useEffect(() => {
    if (viewMode !== 'grid') {
      document.body.style.overflow = 'hidden';
      if (overlayScrollRef.current) {
        overlayScrollRef.current.scrollTop = 0;
      }
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleBack();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [viewMode, selectedArticle]);

  const getArticleShareUrl = (article: ArticleEntry) => {
    if (typeof window === 'undefined') return 'https://zikrullahfoundation.com/#thoughts';
    return `${window.location.origin}/#thoughts-${article.slug}`;
  };

  const handleCopyArticleLink = (article: ArticleEntry) => {
    const shareUrl = getArticleShareUrl(article);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      });
    }
  };

  const handleNewsletterSubmit = () => {
    const cleaned = subscribeEmail.trim();
    if (!cleaned) return;

    try {
      const existingRaw = localStorage.getItem('zikrullah_newsletter_subscribers');
      const existing: string[] = existingRaw ? JSON.parse(existingRaw) : [];
      if (!existing.includes(cleaned)) {
        localStorage.setItem(
          'zikrullah_newsletter_subscribers',
          JSON.stringify([...existing, cleaned])
        );
      }
    } catch {
      // ignore storage errors
    }
  };

  return (
    <section
      id="thoughts"
      className="py-16 sm:py-24 bg-[#f8faf9] border-t border-b border-slate-200/80 overflow-x-clip selection:bg-emerald-100 selection:text-emerald-950"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        {/* Centered Section Header (No Eyebrow Label Above Heading) */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-7 sm:mb-12 px-1">
          <h2 className="font-serif-bn font-bold text-2xl sm:text-4xl lg:text-[42px] text-[#064E3B] leading-tight tracking-tight mb-2 sm:mb-3 text-balance">
            {isEn ? 'Thoughts & Field Notes' : 'ভাবনা ও কর্মকথা'}
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            {isEn
              ? 'Read real field experiences, upcoming roadmaps, and selected reflections.'
              : 'মাঠপর্যায়ের বাস্তব অভিজ্ঞতা, আগামী দিনের পরিকল্পনা ও নির্বাচিত লেখাগুলো পড়ুন।'}
          </p>
        </ScrollReveal>

        {/* Side-by-Side 2-Card Grid Across Mobile, Tablet & Desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-7">
          {latestTwoArticles.map((article, idx) => {
            const title = isEn ? article.titleEn : article.titleBn;
            const excerpt = isEn ? article.excerptEn : article.excerptBn;
            const date = isEn ? article.dateEn : article.dateBn;

            return (
              <ScrollReveal
                key={article.id}
                direction={idx === 0 ? 'left' : 'right'}
                delay={idx === 0 ? 0 : 150}
                className="flex"
              >
                <article
                  onClick={() => openArticle(article, 'grid')}
                  className="w-full h-full bg-white rounded-xl sm:rounded-2xl border border-slate-200/85 overflow-hidden shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-xl hover:border-emerald-900/20 active:scale-[0.985] transition-all duration-200 sm:hover:-translate-y-1 flex flex-col justify-between cursor-pointer group"
                >
                <div>
                  {/* Top Banner Image */}
                  <div className="aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <EditorialImage
                      src={article.bannerImage}
                      alt={isEn ? article.bannerAltEn : article.bannerAltBn}
                      fallbackTitle={title}
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-3 sm:p-5 md:p-6 pb-2 sm:pb-3">
                    {/* Bold Bangla Title (Truncated cleanly at 2 lines) */}
                    <h3 className="font-serif-bn font-bold text-[13.5px] sm:text-lg md:text-[21px] text-[#0F172A] group-hover:text-[#064E3B] transition-colors leading-snug line-clamp-2 mb-1.5 sm:mb-2.5">
                      {title}
                    </h3>

                    {/* Short 3-Line Excerpt */}
                    <p className="text-slate-600 text-[11.5px] sm:text-sm md:text-[15px] leading-relaxed line-clamp-3">
                      {excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Date + Deep Emerald Read Button */}
                <div className="px-3 sm:px-5 md:px-6 pb-3 sm:pb-5 pt-2 sm:pt-3 mt-1 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-[10.5px] sm:text-xs text-slate-500 font-medium truncate">
                    {date}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openArticle(article, 'grid');
                    }}
                    className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#064E3B] hover:bg-[#043927] text-white text-[11px] sm:text-xs font-bold transition-colors cursor-pointer whitespace-nowrap w-full sm:w-auto"
                  >
                    <span>{isEn ? 'Read Details' : 'বিস্তারিত পড়ুন'}</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F59E0B] transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
                  </button>
                </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Prominent "সব লেখা দেখুন →" Archive Button */}
        <ScrollReveal direction="up" delay={150} className="mt-10 sm:mt-12 text-center">
          <button
            type="button"
            onClick={openArchive}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#064E3B] hover:bg-[#043927] active:scale-98 text-white font-bold text-sm sm:text-base shadow-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <span>{isEn ? 'View All Articles' : 'সব লেখা দেখুন'}</span>
            <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
          </button>
        </ScrollReveal>
      </div>

      {/* Full Archive / All Articles View */}
      {viewMode === 'archive' && (
        <div
          ref={overlayScrollRef}
          className="fixed inset-0 z-50 bg-[#f8faf9] overflow-y-auto overscroll-contain animate-in fade-in duration-200"
        >
          {/* Minimal Sticky Top Navigation */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-5xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-3 py-2 min-h-[44px] rounded-lg text-sm font-bold text-[#064E3B] hover:bg-emerald-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{isEn ? 'Back to Home' : 'ফিরে যান'}</span>
              </button>

              <span className="text-xs sm:text-sm font-semibold text-slate-500 truncate">
                {isEn ? 'Zikrullah Foundation · All Articles' : 'জিকরুল্লাহ ফাউন্ডেশন · সকল লেখা'}
              </span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-3 sm:px-6 py-8 sm:py-14">
            {/* Centered Archive Header */}
            <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
              <h2 className="font-serif-bn font-bold text-2xl sm:text-4xl text-[#064E3B] leading-tight mb-2 sm:mb-3">
                {isEn ? 'Thoughts & Field Notes' : 'ভাবনা ও কর্মকথা'}
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                {isEn
                  ? 'Every published field journal, strategic reflection, and community update from Bogura, Joypurhat, and Dinajpur.'
                  : 'মাঠপর্যায়ের বাস্তব অভিজ্ঞতা, আগামী দিনের পরিকল্পনা ও নির্বাচিত লেখাগুলোর সম্পূর্ণ আর্কাইভ।'}
              </p>
            </div>

            {/* Functional Category Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl mb-7 sm:mb-9 overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3 sm:px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    activeCategory === cat.key
                      ? 'bg-[#064E3B] text-white'
                      : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-100'
                  }`}
                >
                  {isEn ? cat.en : cat.bn}
                </button>
              ))}
            </div>

            {/* Archive Side-by-Side 2-Column Grid Across All Screen Sizes */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-7">
              {filteredArchiveArticles.map((article) => {
                const title = isEn ? article.titleEn : article.titleBn;
                const excerpt = isEn ? article.excerptEn : article.excerptBn;
                const date = isEn ? article.dateEn : article.dateBn;

                return (
                  <article
                    key={article.id}
                    onClick={() => openArticle(article, 'archive')}
                    className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/85 overflow-hidden shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-lg hover:border-emerald-900/20 active:scale-[0.985] transition-all duration-200 sm:hover:-translate-y-0.5 flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                        <EditorialImage
                          src={article.bannerImage}
                          alt={isEn ? article.bannerAltEn : article.bannerAltBn}
                          fallbackTitle={title}
                          className={`w-full h-full object-cover ${
                            article.id === 'art-journey-since-jan-2023' ? 'object-top' : 'object-center'
                          } group-hover:scale-103 transition-transform duration-500`}
                        />
                      </div>

                      <div className="p-3 sm:p-5 md:p-6 pb-2 sm:pb-3">
                        <h3 className="font-serif-bn font-bold text-[13.5px] sm:text-lg md:text-xl text-[#0F172A] group-hover:text-[#064E3B] transition-colors leading-snug line-clamp-2 mb-1.5 sm:mb-2.5">
                          {title}
                        </h3>

                        <p className="text-slate-600 text-[11.5px] sm:text-sm leading-relaxed line-clamp-3">
                          {excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-3 sm:px-5 md:px-6 pb-3 sm:pb-5 pt-2 sm:pt-3 mt-1 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-[10.5px] sm:text-xs text-slate-500 font-medium truncate">
                        {date}
                      </span>

                      <span className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#064E3B] text-white text-[11px] sm:text-xs font-bold whitespace-nowrap w-full sm:w-auto">
                        <span>{isEn ? 'Read Details' : 'বিস্তারিত পড়ুন'}</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F59E0B] group-hover:translate-x-0.5 transition-transform shrink-0" />
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Distraction-Free Full-Article Reading View */}
      {viewMode === 'article' && selectedArticle && (
        <div
          ref={overlayScrollRef}
          className="fixed inset-0 z-50 bg-[#fafcfb] overflow-y-auto overscroll-contain animate-in fade-in duration-200"
        >
          {/* Minimal Sticky Reader Bar */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold text-[#064E3B] hover:bg-emerald-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>
                  {previousView === 'archive'
                    ? isEn
                      ? 'Back to All Articles'
                      : 'সব লেখায় ফিরুন'
                    : isEn
                      ? 'Back to Home'
                      : 'ফিরে যান'}
                </span>
              </button>

              <span className="text-xs font-medium text-slate-500 truncate hidden sm:inline">
                {isEn ? 'Thoughts & Field Notes' : 'জিকরুল্লাহ ফাউন্ডেশন · ভাবনা ও কর্মকথা'}
              </span>
            </div>
          </div>

          {/* Reading Canvas */}
          <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            {/* Unboxed Editorial Metadata */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-500 mb-4">
              <span className="font-bold text-[#064E3B]">
                {isEn ? selectedArticle.categoryEn : selectedArticle.categoryBn}
              </span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>{isEn ? selectedArticle.dateEn : selectedArticle.dateBn}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{isEn ? selectedArticle.readTimeEn : selectedArticle.readTimeBn}</span>
              </span>
            </div>

            {/* Bold Bangla Title */}
            <h1 className="font-serif-bn font-bold text-2xl sm:text-4xl text-[#0F172A] leading-[1.3] tracking-tight mb-5 text-balance">
              {isEn ? selectedArticle.titleEn : selectedArticle.titleBn}
            </h1>

            {/* Author & Field Location Line */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-6 mb-7 border-b border-slate-200 text-xs sm:text-sm text-slate-600">
              <span className="font-medium text-slate-700">
                {isEn ? selectedArticle.authorEn : selectedArticle.authorBn}
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>{isEn ? selectedArticle.locationEn : selectedArticle.locationBn}</span>
              </span>
            </div>

            {/* Large Banner Image */}
            <figure className="mb-8 sm:mb-10">
              {selectedArticle.id === 'art-journey-since-jan-2023' ? (
                <div className="w-full rounded-2xl overflow-hidden bg-gradient-to-b from-emerald-50/70 to-slate-100/80 border border-slate-200/80 flex items-center justify-center p-2 sm:p-4">
                  <EditorialImage
                    src={selectedArticle.bannerImage}
                    alt={isEn ? selectedArticle.bannerAltEn : selectedArticle.bannerAltBn}
                    fallbackTitle={isEn ? selectedArticle.titleEn : selectedArticle.titleBn}
                    className="max-h-[460px] sm:max-h-[520px] w-auto max-w-full rounded-xl object-contain shadow-sm"
                  />
                </div>
              ) : (
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80">
                  <EditorialImage
                    src={selectedArticle.bannerImage}
                    alt={isEn ? selectedArticle.bannerAltEn : selectedArticle.bannerAltBn}
                    fallbackTitle={isEn ? selectedArticle.titleEn : selectedArticle.titleBn}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <figcaption className="text-xs text-slate-500 italic mt-2.5 text-center">
                {isEn ? selectedArticle.bannerAltEn : selectedArticle.bannerAltBn}
              </figcaption>
            </figure>

            {/* Structured Article Body */}
            <div className="space-y-6 text-slate-700 text-base sm:text-[17.5px] leading-[1.88]">
              {selectedArticle.blocks.map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <h2
                      key={index}
                      className="font-serif-bn font-bold text-xl sm:text-2xl text-[#064E3B] pt-4 leading-snug"
                    >
                      {isEn ? block.textEn : block.textBn}
                    </h2>
                  );
                }

                if (block.type === 'quote') {
                  return (
                    <blockquote
                      key={index}
                      className="my-8 py-6 px-4 sm:px-8 border-t border-b border-emerald-900/15 text-center"
                    >
                      <p className="font-serif-bn italic text-lg sm:text-xl text-[#0F172A] leading-relaxed font-medium">
                        “{isEn ? block.textEn : block.textBn}”
                      </p>
                      {(block.attributionBn || block.attributionEn) && (
                        <footer className="mt-2.5 text-xs font-semibold text-[#064E3B]">
                          — {isEn ? block.attributionEn : block.attributionBn}
                        </footer>
                      )}
                    </blockquote>
                  );
                }

                if (block.type === 'image') {
                  return (
                    <figure key={index} className="my-8">
                      <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80">
                        <EditorialImage
                          src={block.src}
                          alt={isEn ? block.altEn : block.altBn}
                          fallbackTitle={isEn ? block.altEn : block.altBn}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      {(block.captionBn || block.captionEn) && (
                        <figcaption className="text-xs text-slate-500 italic mt-2.5">
                          {isEn ? block.captionEn : block.captionBn}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                return (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? 'first-letter:text-4xl first-letter:font-serif-bn first-letter:font-bold first-letter:text-[#064E3B] first-letter:mr-1.5 first-letter:leading-none'
                        : ''
                    }
                  >
                    {isEn ? block.textEn : block.textBn}
                  </p>
                );
              })}
            </div>

            {/* Bottom Article Modules */}
            <div className="mt-12 space-y-6">
              {/* 1. Light Green Share Bar ("শেয়ার করুন") */}
              <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-2xl p-4 sm:px-6 sm:py-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif-bn font-bold text-base sm:text-lg text-[#064E3B]">
                    {isEn ? 'Share this article' : 'শেয়ার করুন'}
                  </span>
                  {copiedLink && (
                    <span className="text-xs font-bold text-[#064E3B]">
                      {isEn ? 'Link copied!' : 'লিংক কপি হয়েছে!'}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      getArticleShareUrl(selectedArticle)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={isEn ? 'Share on Facebook' : 'ফেসবুকে শেয়ার করুন'}
                    className="w-10 h-10 rounded-full bg-[#0F172A] hover:bg-[#064E3B] text-white flex items-center justify-center transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `${isEn ? selectedArticle.titleEn : selectedArticle.titleBn}\n${getArticleShareUrl(
                        selectedArticle
                      )}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={isEn ? 'Share on WhatsApp' : 'হোয়াটসঅ্যাপে শেয়ার করুন'}
                    className="w-10 h-10 rounded-full bg-[#0F172A] hover:bg-[#064E3B] text-white flex items-center justify-center transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopyArticleLink(selectedArticle)}
                    aria-label={isEn ? 'Copy article link' : 'লিংক কপি করুন'}
                    className="w-10 h-10 rounded-full bg-[#0F172A] hover:bg-[#064E3B] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    {copiedLink ? (
                      <Check className="w-4 h-4 text-[#F59E0B]" />
                    ) : (
                      <Link2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* 2. Deep Emerald Green "চলুন একসাথে কাজ করি" Card (Matched to Page Theme) */}
              <div className="bg-gradient-to-br from-[#043927] via-[#064E3B] to-[#087443] border border-emerald-700/40 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-md text-center">
                <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl text-white mb-2 leading-snug">
                  {isEn ? 'Let Us Work Together' : 'চলুন একসাথে কাজ করি'}
                </h3>
                <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto mb-5 sm:mb-6">
                  {isEn
                    ? 'Your sincere support and voluntary service help transform lives across Bogura and northern Bangladesh.'
                    : 'আপনার আন্তরিক সহযোগিতা ও স্বেচ্ছাশ্রম অসহায় মানুষের জীবনে স্থায়ী স্বস্তি ও পরিবর্তন আনতে পারে।'}
                </p>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => handleCloseToAction(onOpenDonation)}
                    className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#b45309] hover:from-[#fcd34d] hover:via-[#f59e0b] hover:to-[#92400e] active:scale-[0.99] text-white font-bold text-sm sm:text-base drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] shadow-lg shadow-amber-950/25 border border-amber-300/40 transition-all cursor-pointer text-center"
                  >
                    {isEn ? 'Join the Cause' : 'খেদমতে শরীক হন'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCloseToAction(onOpenVolunteer)}
                    className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-white hover:bg-emerald-50 active:scale-[0.99] text-[#0F172A] font-bold text-sm sm:text-base transition-all cursor-pointer text-center"
                  >
                    {isEn ? 'Be a Volunteer' : 'স্বেচ্ছাসেবক হোন'}
                  </button>
                </div>
              </div>

              {/* 3. Deep Navy Blue Newsletter Subscribe Box (Matches Screenshot 1 Layout) */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#0e1b4d] via-[#0b1742] to-[#081236] text-white rounded-2xl sm:rounded-3xl px-4 py-8 sm:px-8 sm:py-11 shadow-sm text-center">
                <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-amber-300/10 blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-2xl mx-auto">
                  {/* Top Circular Paper-Plane Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 text-[#FACC15]" />
                  </div>

                  {/* Centered Heading */}
                  <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl text-white mb-2.5 leading-snug">
                    {isEn
                      ? 'Stay Connected for Our Latest Updates'
                      : 'আমাদের সর্বশেষ আপডেট পেতে যুক্ত থাকুন'}
                  </h3>

                  {/* Centered Subtitle */}
                  <p className="text-slate-200/90 text-xs sm:text-base leading-relaxed max-w-xl mx-auto mb-6 sm:mb-7">
                    {isEn
                      ? 'Subscribe with your mobile number or email to receive regular updates on our charitable activities, field reports, and public welfare initiatives first.'
                      : 'আমাদের সেবামূলক কার্যক্রম, মাঠপর্যায়ের প্রতিবেদন ও জনকল্যাণমূলক উদ্যোগের নিয়মিত আপডেট সবার আগে পেতে আপনার মোবাইল নাম্বার অথবা ইমেইল দিয়ে সাবস্ক্রাইব করুন।'}
                  </p>

                  <form
                    action="https://formsubmit.co/e683378f5399c9eb0088210959a9ef46"
                    method="POST"
                    onSubmit={handleNewsletterSubmit}
                    className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex items-stretch shadow-xl max-w-2xl mx-auto border border-white/20"
                  >
                    <input
                      type="hidden"
                      name="_subject"
                      value="[নতুন সাবস্ক্রাইবার] জিকরুল্লাহ ফাউন্ডেশন"
                    />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_next"
                      value={
                        typeof window !== 'undefined'
                          ? window.location.href
                          : 'https://zikrullahfoundation.com/'
                      }
                    />
                    <input
                      type="hidden"
                      name="source"
                      value={
                        selectedArticle
                          ? `প্রবন্ধ: ${selectedArticle.titleBn}`
                          : 'ভাবনা ও কর্মকথা'
                      }
                    />

                    <div className="flex-1 flex items-center pl-3 sm:pl-5 min-w-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        name={subscribeEmail.includes('@') ? 'email' : 'contact'}
                        required
                        value={subscribeEmail}
                        onChange={(e) => setSubscribeEmail(e.target.value)}
                        placeholder={
                          isEn
                            ? 'Email or phone number ...'
                            : 'ইমেইল বা ফোন নাম্বার দিন ...'
                        }
                        aria-label={isEn ? 'Email or phone number' : 'ইমেইল বা ফোন নাম্বার'}
                        className="w-full px-2.5 sm:px-3.5 py-3.5 sm:py-4 text-xs sm:text-base text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none min-w-0"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-3.5 sm:py-4 bg-[#FACC15] hover:bg-[#eab308] active:bg-[#ca8a04] text-[#0F172A] font-bold text-xs sm:text-base transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>{isEn ? 'Subscribe' : 'সাবস্ক্রাইব করুন'}</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </form>

                  <p className="mt-4 text-[11px] sm:text-xs text-slate-300/80 text-center">
                    {isEn
                      ? '* We are committed to protecting your privacy.'
                      : '* আমরা আপনার তথ্যের গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ।'}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Back Navigation */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-sm font-bold text-[#0F172A] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-[#064E3B]" />
                <span>
                  {previousView === 'archive'
                    ? isEn
                      ? 'Back to All Articles'
                      : 'সব লেখায় ফিরে যান'
                    : isEn
                      ? 'Back to Homepage'
                      : 'মূল পাতায় ফিরে যান'}
                </span>
              </button>

              {previousView !== 'archive' && (
                <button
                  type="button"
                  onClick={openArchive}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#064E3B] hover:text-[#043927] cursor-pointer"
                >
                  <span>{isEn ? 'All Articles' : 'সব লেখা দেখুন'}</span>
                  <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
                </button>
              )}
            </div>
          </article>
        </div>
      )}
    </section>
  );
};
