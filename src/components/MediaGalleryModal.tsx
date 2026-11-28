import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Images,
  Video,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  GALLERY_CATEGORIES,
  getGalleryMediaItems,
  GalleryCategoryId,
  GalleryMediaItem,
} from '../data/galleryData';
import { FOUNDATION_INFO } from '../data/mockData';

interface MediaGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MediaGalleryModal: React.FC<MediaGalleryModalProps> = ({ isOpen, onClose }) => {
  const { isEn } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryId>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedIds, setFailedIds] = useState<Record<string, boolean>>({});

  const galleryItems = useMemo(() => getGalleryMediaItems(), [isOpen]);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    if (activeCategory === 'videos') {
      return galleryItems.filter((item) => item.mediaType === 'video');
    }
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, galleryItems]);

  const categoryLabelMap = useMemo(() => {
    const map: Record<string, { bn: string; en: string }> = {};
    for (const cat of GALLERY_CATEGORIES) {
      map[cat.id] = { bn: cat.labelBn, en: cat.labelEn };
    }
    return map;
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          onClose();
        }
      } else if (lightboxIndex !== null && filteredItems.length > 0) {
        if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
        } else if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
          );
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, lightboxIndex, filteredItems.length, onClose]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [activeCategory, isOpen]);

  if (!isOpen) return null;

  const activeLightboxItem: GalleryMediaItem | null =
    lightboxIndex !== null && filteredItems[lightboxIndex] ? filteredItems[lightboxIndex] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#f8faf9] rounded-2xl sm:rounded-3xl max-w-5xl w-full shadow-2xl border border-emerald-200/80 overflow-hidden relative my-auto max-h-[92vh] flex flex-col text-slate-800 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#045332] via-[#064e3b] to-[#023821] text-white px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 border-b-2 border-amber-500/80 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-emerald-300/30 flex items-center justify-center shrink-0">
              <Images className="w-5 h-5 text-amber-300" />
            </div>
            <div className="min-w-0">
              <h2 className="font-serif-bn font-bold text-lg sm:text-2xl leading-tight truncate">
                {isEn ? 'Photos & Videos Gallery' : 'ছবি ও ভিডিও গ্যালারি'}
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 font-solaiman truncate">
                {isEn
                  ? 'All field photos & visual archives organized by category'
                  : 'ওয়েবসাইটের সকল কার্যক্রম ও স্মৃতিময় ছবি বিষয়ভিত্তিক আকারে দেখুন'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
            aria-label={isEn ? 'Close gallery' : 'বন্ধ করুন'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="bg-white border-b border-emerald-100 px-3 sm:px-6 py-3 shrink-0 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {GALLERY_CATEGORIES.map((tab) => {
              const isSelected = activeCategory === tab.id;
              const count =
                tab.id === 'all'
                  ? galleryItems.length
                  : tab.id === 'videos'
                    ? galleryItems.filter((i) => i.mediaType === 'video').length
                    : galleryItems.filter((i) => i.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#045332] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                  }`}
                >
                  {tab.id === 'videos' && <Video className="w-3.5 h-3.5 shrink-0" />}
                  <span>{isEn ? tab.labelEn : tab.labelBn}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="p-3.5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {filteredItems.length === 0 ? (
            <div className="bg-white rounded-2xl border border-emerald-100 p-8 sm:p-12 text-center max-w-xl mx-auto my-4 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-3 text-emerald-700">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="font-serif-bn font-bold text-lg sm:text-xl text-slate-900 mb-2">
                {isEn ? 'Field Activity Videos Coming Soon' : 'মাঠপর্যায়ের ভিডিও শীঘ্রই যুক্ত হচ্ছে'}
              </h3>
              <p className="font-solaiman text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isEn
                  ? 'We are preparing video documentaries of our medical camps, winter drives, and educational programs. Meanwhile, explore our full categorized photo archive.'
                  : 'আমাদের ফ্রি মেডিকেল ক্যাম্প, শীতবস্ত্র বিতরণ ও শিক্ষা সহায়তা কার্যক্রমের ভিডিও ডকুমেন্টারি খুব শীঘ্রই এখানে যুক্ত করা হবে। আপাতত বিষয়ভিত্তিক সব ছবি উপভোগ করুন।'}
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#045332] hover:bg-[#064e3b] text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                <Images className="w-4 h-4" />
                <span>{isEn ? 'View All Photos' : 'সবগুলো ছবি দেখুন'}</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredItems.map((item, idx) => {
                const catLabel = categoryLabelMap[item.category];
                const isLogoDisplay =
                  Boolean(item.isLogoFallback) ||
                  Boolean(failedIds[item.id]) ||
                  item.src === FOUNDATION_INFO.logoUrl;
                const displaySrc = failedIds[item.id] ? FOUNDATION_INFO.logoUrl : item.src;

                return (
                  <div
                    key={item.id}
                    onClick={() => setLightboxIndex(idx)}
                    className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-400 shadow-xs hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col group cursor-pointer"
                  >
                    <div
                      className={`relative aspect-[4/3] w-full overflow-hidden ${
                        isLogoDisplay
                          ? 'bg-gradient-to-br from-emerald-50 via-white to-amber-50/70 flex items-center justify-center p-5'
                          : 'bg-slate-100'
                      }`}
                    >
                      <img
                        src={displaySrc}
                        alt={isEn ? item.titleEn : item.titleBn}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const imgEl = e.currentTarget as HTMLImageElement;
                          if (!failedIds[item.id]) {
                            setFailedIds((prev) => ({ ...prev, [item.id]: true }));
                          } else if (!imgEl.src.endsWith('/logo.jpg')) {
                            imgEl.src = '/logo.jpg';
                          }
                        }}
                        className={
                          isLogoDisplay
                            ? 'w-32 h-32 sm:w-36 sm:h-36 object-contain rounded-2xl shadow-sm border border-emerald-200/80 bg-white p-2 group-hover:scale-105 transition-transform duration-500'
                            : `w-full h-full object-cover ${
                                item.category === 'foundation-team' ? 'object-top' : 'object-center'
                              } group-hover:scale-105 transition-transform duration-500`
                        }
                      />
                      {!isLogoDisplay && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 opacity-80 group-hover:opacity-95 transition-opacity" />
                      )}

                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-[#045332]/90 text-white text-[11px] font-semibold backdrop-blur-xs border border-emerald-300/30">
                        {catLabel ? (isEn ? catLabel.en : catLabel.bn) : ''}
                      </span>

                      <span className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-black/55 text-white flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:bg-[#087443] transition-all">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>

                    <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between gap-2">
                      <div>
                        <h3 className="font-serif-bn font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#045332] leading-snug line-clamp-2">
                          {isEn ? item.titleEn : item.titleBn}
                        </h3>
                        {item.highlightCaptionWhite ? (
                          <div className="mt-1.5 inline-block px-2.5 py-1 rounded-lg bg-[#045332] text-white font-solaiman text-xs font-medium leading-snug shadow-xs">
                            {isEn ? item.captionEn : item.captionBn}
                          </div>
                        ) : (
                          <p className="font-solaiman text-xs text-slate-600 mt-1 leading-relaxed">
                            {isEn ? item.captionEn : item.captionBn}
                          </p>
                        )}
                      </div>

                      {(isEn ? item.locationEn : item.locationBn) && (
                        <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium pt-1 border-t border-slate-100">
                          <MapPin className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                          <span className="truncate">{isEn ? item.locationEn : item.locationBn}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Note about videos when viewing 'all' */}
          {activeCategory === 'all' && (
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#045332] text-white flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h4 className="font-serif-bn font-bold text-sm sm:text-base text-[#045332]">
                    {isEn ? 'Video Section' : 'ভিডিও সংগ্রহশালা'}
                  </h4>
                  <p className="font-solaiman text-xs text-slate-600">
                    {isEn
                      ? 'Our field activity video documentaries are being compiled and will be published here soon.'
                      : 'মাঠপর্যায়ের কার্যক্রমের ভিডিও ডকুমেন্টারিগুলো প্রক্রিয়াধীন রয়েছে এবং শীঘ্রই এখানে যুক্ত করা হবে।'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveCategory('videos')}
                className="px-4 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-100 text-xs font-bold transition-colors cursor-pointer shrink-0"
              >
                {isEn ? 'Open Videos Tab' : 'ভিডিও ট্যাব দেখুন'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {activeLightboxItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxIndex(null);
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white cursor-pointer z-20 transition-colors"
            aria-label={isEn ? 'Close preview' : 'প্রিভিউ বন্ধ করুন'}
          >
            <X className="w-6 h-6" />
          </button>

          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
                }}
                className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/30 text-white cursor-pointer z-20 transition-colors"
                aria-label={isEn ? 'Previous photo' : 'আগের ছবি'}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
                }}
                className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/30 text-white cursor-pointer z-20 transition-colors"
                aria-label={isEn ? 'Next photo' : 'পরের ছবি'}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            className="max-w-4xl w-full flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={
                failedIds[activeLightboxItem.id]
                  ? FOUNDATION_INFO.logoUrl
                  : activeLightboxItem.src
              }
              alt={isEn ? activeLightboxItem.titleEn : activeLightboxItem.titleBn}
              referrerPolicy="no-referrer"
              onError={(e) => {
                const imgEl = e.currentTarget as HTMLImageElement;
                if (!imgEl.src.endsWith('/logo.jpg')) {
                  imgEl.src = '/logo.jpg';
                }
              }}
              className={`max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10 ${
                activeLightboxItem.isLogoFallback ||
                failedIds[activeLightboxItem.id] ||
                activeLightboxItem.src === FOUNDATION_INFO.logoUrl
                  ? 'bg-white p-6'
                  : ''
              }`}
            />
            <div className="text-center text-white max-w-2xl px-4">
              <h4 className="font-serif-bn font-bold text-base sm:text-xl text-amber-300">
                {isEn ? activeLightboxItem.titleEn : activeLightboxItem.titleBn}
              </h4>
              <p className="font-solaiman text-xs sm:text-sm text-white mt-1">
                {isEn ? activeLightboxItem.captionEn : activeLightboxItem.captionBn}
              </p>
              <p className="text-[11px] text-slate-400 mt-1.5 font-mono">
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
