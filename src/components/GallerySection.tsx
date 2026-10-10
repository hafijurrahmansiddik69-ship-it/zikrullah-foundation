import React, { useState } from 'react';
import { Maximize2, X, MapPin, Calendar } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('সকল');

  const categories = ['সকল', 'খাদ্য সহায়তা', 'শিক্ষা সহায়তা', 'স্বাস্থ্যসেবা', 'সামাজিক সমাবেশ'];

  const filteredPhotos = activeCategory === 'সকল'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white border-b border-emerald-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase block mb-2">
              মাঠপর্যায়ের স্মৃতি ও চিত্র
            </span>
            <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl text-[#045332] leading-tight">
              কার্যক্রমের ছবির গ্যালারি
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            গুজিয়া, মোকামতলা ও বগুড়ার প্রত্যন্ত অঞ্চলে মানুষের সহযোগিতায় জিকিরুল্লাহ ফাউন্ডেশনের গৃহীত বিভিন্ন উদ্যোগের স্থিরচিত্র।
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 p-1.5 bg-emerald-50/70 border border-emerald-100 rounded-xl max-w-full overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#087443] text-white shadow-xs'
                  : 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-100/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden border border-emerald-100/80 bg-slate-100 aspect-4/3 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold text-emerald-300 block mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif-bn font-bold text-sm leading-snug line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-3 text-[11px] text-slate-300 mt-1">
                  <span>{item.location}</span>
                  <span>·</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-700 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/70 text-white flex items-center justify-center hover:bg-slate-900 transition-colors cursor-pointer"
              aria-label="বন্ধ করুন"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="max-h-[60vh] sm:max-h-[65vh] overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[60vh] sm:max-h-[65vh] object-contain"
              />
            </div>

            <div className="p-4 sm:p-6 bg-white">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-bold text-emerald-700 uppercase">
                  {selectedPhoto.category}
                </span>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedPhoto.location}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedPhoto.date}</span>
                  </span>
                </div>
              </div>

              <h3 className="font-serif-bn font-bold text-xl text-slate-800">
                {selectedPhoto.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
