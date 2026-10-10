import React, { useState } from 'react';
import { Calendar, ArrowRight, X, Newspaper } from 'lucide-react';
import { NEWS_LIST } from '../data/mockData';
import { NewsItem } from '../types';

export const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section id="news" className="py-20 bg-[#fafcfb] border-b border-emerald-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase block mb-2">
              মাঠপর্যায়ের আপডেট
            </span>
            <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl text-[#045332] leading-tight">
              সাম্প্রতিক খবর ও বিজ্ঞপ্তি
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            জিকিরুল্লাহ ফাউন্ডেশনের সাম্প্রতিক কর্মকাণ্ড, অনুদান বিতরণ এবং ভবিষ্যৎ পরিকল্পনা সম্পর্কে জানুন।
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {NEWS_LIST.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-emerald-100/80 shadow-xs hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <h3 className="font-serif-bn font-bold text-lg sm:text-xl text-slate-800 group-hover:text-[#045332] transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              <button
                onClick={() => setSelectedNews(item)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors pt-3 border-t border-slate-100 cursor-pointer"
              >
                <span>বিস্তারিত পড়ুন</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </article>
          ))}
        </div>

      </div>

      {/* News Reading Modal */}
      {selectedNews && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl max-w-xl w-full p-5 sm:p-8 shadow-2xl border border-emerald-100 relative text-slate-800 my-auto max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              aria-label="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-2">
              <Newspaper className="w-4 h-4" />
              <span>{selectedNews.category}</span>
              <span>·</span>
              <span className="text-slate-400">{selectedNews.date}</span>
            </div>

            <h3 className="font-serif-bn font-bold text-2xl text-[#045332] leading-tight mb-4">
              {selectedNews.title}
            </h3>

            <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 mb-6">
              <p>{selectedNews.content}</p>
              <p className="text-xs text-slate-500 italic">
                * জিকিরুল্লাহ ফাউন্ডেশন মিডিয়া ও প্রচার সেল কর্তৃক প্রকাশিত।
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-semibold text-xs cursor-pointer"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
