import React, { useState } from 'react';
import { Play, ExternalLink, Mic } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import jumuahPoster from '../assets/images/jumuah_khutbah_poster_1795789286391.jpg';
import mahfilPoster from '../assets/images/mahfil_lecture_poster_1795789286687.jpg';

interface WazVideoItem {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  titleBn: string;
  titleEn: string;
  subtitleBn: string;
  subtitleEn: string;
  fallbackPoster?: string;
}

interface WazCategory {
  numberBn: string;
  numberEn: string;
  titleBn: string;
  titleEn: string;
  videos: WazVideoItem[];
}

const WAZ_CATEGORIES: WazCategory[] = [
  {
    numberBn: '১.',
    numberEn: '1.',
    titleBn: 'ওয়াজ ও তাফসির মাহফিলের বয়ান',
    titleEn: 'Waz & Tafsir Mahfil Lectures',
    videos: [
      {
        id: 'surah-maun-tafsir',
        youtubeId: 'LZijZDFCJR4',
        youtubeUrl: 'https://youtu.be/LZijZDFCJR4?si=vRXNjwmPiLTCqGKJ',
        titleBn: 'সূরা মাউন ও নামাজের তাফসির',
        titleEn: 'Tafsir of Surah Al-Maun & Salah — Hafizur Rahman Siddik (Bogura)',
        subtitleBn: 'ওয়াজ ও তাফসির মাহফিল',
        subtitleEn: 'Waz & Tafsir Mahfil',
        fallbackPoster: jumuahPoster,
      },
      {
        id: 'jahannam-bayan-bogura',
        youtubeId: 'Dd-ls0cL8Wo',
        youtubeUrl: 'https://youtu.be/Dd-ls0cL8Wo?si=EaPgKK8h6kxD-EJ9',
        titleBn: 'বগুড়ার হাফিজুর রহমান সিদ্দিকের জাহান্নামের বয়ান! তাফসির মাহফিল',
        titleEn: 'Tafsir Mahfil: Reminder on Akhirah — Hafizur Rahman Siddik (Bogura)',
        subtitleBn: 'তাফসির মাহফিল · বগুড়া',
        subtitleEn: 'Tafsir Mahfil · Bogura',
        fallbackPoster: mahfilPoster,
      },
    ],
  },
  {
    numberBn: '২.',
    numberEn: '2.',
    titleBn: "জুমু'আর বয়ান",
    titleEn: "Jumu'ah Khutbah & Sermons",
    videos: [
      {
        id: 'jumuah-aladipur-bogura',
        youtubeId: '9KnvgNPZ6YY',
        youtubeUrl: 'https://youtu.be/9KnvgNPZ6YY?si=kv9O047yQi7HhWCl',
        titleBn: '২ বছর পর জুমার বয়ান — আলাদিপুর, শিবগঞ্জ, বগুড়া',
        titleEn: "Jumu'ah Khutbah at Aladipur, Shibganj, Bogura — Hafizur Rahman Siddik",
        subtitleBn: "জুমু'আর বয়ান · শিবগঞ্জ, বগুড়া",
        subtitleEn: "Jumu'ah Khutbah · Shibganj, Bogura",
        fallbackPoster: jumuahPoster,
      },
      {
        id: 'jumuah-youth-crush',
        youtubeId: '_SdugZKq1NM',
        youtubeUrl: 'https://youtu.be/_SdugZKq1NM?si=IhXkKx2mZgWGPmLn',
        titleBn: 'যুবকদের Crush! ধোঁকা থেকে নিজেকে বাঁচানোর ফজিলত',
        titleEn: 'Protecting Youth from Deception — Hafizur Rahman Siddik (Bogura)',
        subtitleBn: "জুমু'আর বয়ান · যুব সমাজ",
        subtitleEn: "Jumu'ah Khutbah · Youth Guidance",
        fallbackPoster: mahfilPoster,
      },
    ],
  },
  {
    numberBn: '৩.',
    numberEn: '3.',
    titleBn: 'সেমিনার আলোচনা',
    titleEn: 'Seminar Discussions',
    videos: [
      {
        id: 'seminar-quran-tilawat',
        youtubeId: 'foulr2oE20Y',
        youtubeUrl: 'https://youtu.be/foulr2oE20Y?si=z61tmH3IZR3oWr_i',
        titleBn: 'কুরআন তেলাওয়াত — হাফিজুর রহমান সিদ্দিক (বগুড়া)',
        titleEn: "Qur'an Recitation — Hafizur Rahman Siddik (Bogura)",
        subtitleBn: 'সেমিনার আলোচনা',
        subtitleEn: 'Seminar Discussion',
        fallbackPoster: jumuahPoster,
      },
    ],
  },
];

interface WazVideoSectionProps {
  embedded?: boolean;
}

export const WazVideoSection: React.FC<WazVideoSectionProps> = ({ embedded = false }) => {
  const { isEn } = useLanguage();
  const [playingIds, setPlayingIds] = useState<Record<string, boolean>>({});

  const startPlaying = (id: string) => {
    setPlayingIds((prev) => ({ ...prev, [id]: true }));
  };

  const content = (
    <div className={embedded ? 'space-y-10' : 'max-w-6xl mx-auto px-4 sm:px-6 space-y-10'}>
      {/* International-Standard Discourse Archive Heading */}
      <ScrollReveal direction="down" className="text-center max-w-3xl mx-auto space-y-2.5">
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-emerald-50 border border-[#064E3B]/25 text-[#064E3B] mx-auto mb-1">
          <Mic className="w-5 h-5" aria-hidden="true" />
        </div>
        <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#064E3B]">
          {isEn ? 'Official Discourse & Media Archive' : 'দাওয়াহ ও লেকচার আর্কাইভ'}
        </span>
        <h2 className="font-bornomala font-bold text-2xl sm:text-3xl md:text-4xl text-[#0F172A] tracking-tight leading-snug">
          {isEn
            ? "Lectures, Jumu'ah Khutbahs & Seminars"
            : "নির্বাচিত তাফসির, জুমু'আর খুতবা ও সেমিনার"}
        </h2>
        <p className="font-bornomala text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {isEn
            ? 'Qur’an and Sunnah-grounded discourses, Friday sermons, and intellectual seminars by Hafizur Rahman Siddik (Bogura).'
            : "কুরআন ও সহীহ সুন্নাহর আলোকে দলীলভিত্তিক তাফসির, জুমু'আর খুতবা এবং সমকালীন সেমিনার আলোচনা — হাফিজুর রহমান সিদ্দিক (বগুড়া)।"}
        </p>
        <div className="mt-2 mx-auto w-20 h-0.5 bg-[#D4AF37]" />
      </ScrollReveal>

      {/* Three Structured Categories */}
      <div className="space-y-10">
        {WAZ_CATEGORIES.map((category) => (
          <div key={category.numberEn} className="space-y-5">
            {/* Category Heading */}
            <div className="flex items-center gap-2.5 border-b border-emerald-200/80 pb-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#064E3B] text-[#D4AF37] font-bornomala font-bold text-sm shrink-0">
                {isEn ? category.numberEn : category.numberBn}
              </span>
              <h3 className="font-bornomala font-bold text-lg sm:text-2xl text-[#0F172A]">
                {isEn ? category.titleEn : category.titleBn}
              </h3>
            </div>

            {/* Video Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {category.videos.map((video, idx) => {
                const isPlaying = Boolean(playingIds[video.id]);

                return (
                  <ScrollReveal key={video.id} direction="up" delay={idx === 0 ? 0 : 100}>
                    <article className="h-full rounded-3xl bg-white border border-emerald-200/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                      <div className="relative aspect-video bg-[#0F172A] overflow-hidden">
                        {isPlaying ? (
                          <iframe
                            className="w-full h-full border-0"
                            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                            title={isEn ? video.titleEn : video.titleBn}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        ) : (
                          <button
                            type="button"
                            onClick={() => startPlaying(video.id)}
                            className="w-full h-full relative group cursor-pointer block text-left focus:outline-none"
                            aria-label={
                              isEn
                                ? `Play ${video.titleEn}`
                                : `বয়ান চালু করুন: ${video.titleBn}`
                            }
                          >
                            <img
                              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                              alt={isEn ? video.titleEn : video.titleBn}
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                if (video.fallbackPoster) {
                                  e.currentTarget.onerror = null;
                                  e.currentTarget.src = video.fallbackPoster;
                                }
                              }}
                              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10 group-hover:via-black/35 transition-colors" />

                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="w-16 h-16 rounded-full bg-[#064E3B]/95 group-hover:bg-[#064E3B] border-2 border-[#D4AF37] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                <Play className="w-7 h-7 fill-current ml-1" />
                              </span>
                            </div>

                            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/95 font-medium">
                              <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs">
                                {isEn ? 'Click to Play' : 'সরাসরি প্লে করুন'}
                              </span>
                            </div>
                          </button>
                        )}
                      </div>

                      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 bg-white">
                        <div className="space-y-1.5">
                          <div className="text-xs font-semibold text-[#064E3B]">
                            {isEn ? video.subtitleEn : video.subtitleBn}
                          </div>
                          <h4 className="font-bornomala font-bold text-base sm:text-lg text-[#0F172A] leading-snug">
                            {isEn ? video.titleEn : video.titleBn}
                          </h4>
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                          <button
                            type="button"
                            onClick={() => startPlaying(video.id)}
                            className="inline-flex items-center gap-1.5 font-bold text-[#064E3B] hover:text-[#042F2E] cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>
                              {isPlaying
                                ? isEn
                                  ? 'Playing Now'
                                  : 'ভিডিও চলছে'
                                : isEn
                                  ? 'Watch Here'
                                  : 'এখানেই দেখুন'}
                            </span>
                          </button>

                          <a
                            href={video.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-slate-500 hover:text-[#064E3B] font-medium transition-colors"
                          >
                            <span>{isEn ? 'Open on YouTube' : 'ইউটিউবে দেখুন'}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <section
      id="waz-videos"
      className="py-14 sm:py-18 bg-white border-b border-emerald-100/80 overflow-x-clip"
    >
      {content}
    </section>
  );
};
