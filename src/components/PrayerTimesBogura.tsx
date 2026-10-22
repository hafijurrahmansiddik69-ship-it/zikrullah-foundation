import React, { useState, useEffect } from 'react';
import { Moon, Sun, Sunrise, Sunset, Copy, Check, Sparkles } from 'lucide-react';
import { DAILY_HADITH } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const PrayerTimesBogura: React.FC = () => {
  const { t, isEn } = useLanguage();
  const [copiedHadith, setCopiedHadith] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTimeStr(
        now.toLocaleTimeString(isEn ? 'en-US' : 'bn-BD', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [isEn]);

  const prayerSchedule = [
    { nameBn: 'ফজর', nameEn: 'Fajr', time: isEn ? '04:47 AM' : '০৪:৪৭ AM', icon: Moon, statusBn: 'ভোরের সালাত', statusEn: 'Dawn Prayer' },
    { nameBn: 'সূর্যোদয়', nameEn: 'Sunrise', time: isEn ? '05:56 AM' : '০৫:৫৬ AM', icon: Sunrise, statusBn: 'ইশরাক', statusEn: 'Ishraq' },
    { nameBn: 'যোহর', nameEn: 'Dhuhr', time: isEn ? '11:58 AM' : '১১:৫৮ AM', icon: Sun, statusBn: 'দুপুরের সালাত', statusEn: 'Noon Prayer' },
    { nameBn: 'আসর', nameEn: 'Asr', time: isEn ? '04:16 PM' : '০৪:১৬ PM', icon: Sun, statusBn: 'বিকালের সালাত', statusEn: 'Afternoon' },
    { nameBn: 'মাগরিব', nameEn: 'Maghrib', time: isEn ? '05:58 PM' : '০৫:৫৮ PM', icon: Sunset, statusBn: 'সন্ধার সালাত', statusEn: 'Sunset Prayer' },
    { nameBn: 'ইশা', nameEn: 'Isha', time: isEn ? '07:12 PM' : '০৭:১২ PM', icon: Moon, statusBn: 'রাতের সালাত', statusEn: 'Night Prayer' },
  ];

  const hadithText = isEn ? DAILY_HADITH.english : DAILY_HADITH.bengali;
  const hadithSource = isEn ? DAILY_HADITH.sourceEn : DAILY_HADITH.source;
  const hadithContext = isEn ? DAILY_HADITH.contextEn : DAILY_HADITH.context;

  const handleCopyHadith = () => {
    navigator.clipboard.writeText(`${hadithText} — ${hadithSource}`);
    setCopiedHadith(true);
    setTimeout(() => setCopiedHadith(false), 2000);
  };

  return (
    <section id="prayer" className="py-16 bg-white border-b border-emerald-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Prayer Times Card (7 columns) */}
          <div className="lg:col-span-7 bg-[#fafcfb] rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-emerald-100 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5 pb-4 border-b border-emerald-100/80">
              <div>
                <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase block mb-1">
                  {t.prayer.badge}
                </span>
                <h3 className="font-serif-bn font-bold text-lg sm:text-2xl text-[#045332]">
                  {t.prayer.title}
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[10px] sm:text-[11px] text-slate-500 block">
                  {t.prayer.currentTime}
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-800 font-mono">
                  {currentTimeStr || (isEn ? 'Loading...' : 'লোড হচ্ছে...')}
                </span>
              </div>
            </div>

            {/* Prayers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
              {prayerSchedule.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 transition-all text-center flex flex-col items-center justify-center group"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1.5 sm:mb-2 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">
                      {isEn ? p.nameEn : p.nameBn}
                    </span>
                    <span className="text-[10px] text-slate-400 font-sans uppercase mb-1">
                      {isEn ? p.nameBn : p.nameEn}
                    </span>
                    <span className="text-emerald-800 font-bold text-sm sm:text-base font-mono tabular-nums">
                      {p.time}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1">
                      {isEn ? p.statusEn : p.statusBn}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-[11px] sm:text-xs text-slate-500 mt-3 sm:mt-4 text-center">
              {isEn 
                ? '* Timings calibrated accurately based on Islamic Foundation standards for Bogura and surrounding areas.'
                : '* মোকামতলা, গুজিয়া ও বগুড়া জেলার স্থানীয় ওয়াক্ত অনুযায়ী সময় নির্ধারণ করা হয়েছে।'}
            </p>
          </div>

          {/* Daily Inspiring Hadith & Reflection Card (5 columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#045332] to-[#003d27] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg flex flex-col justify-between h-full min-h-[320px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Daily Hadith & Reflection' : 'আজকের বাণী ও প্রেরণা'}</span>
                </div>
                
                <button
                  onClick={handleCopyHadith}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
                  title={isEn ? 'Copy Hadith' : 'বাণীটি কপি করুন'}
                >
                  {copiedHadith ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span className="text-emerald-300">{isEn ? 'Copied' : 'কপি হয়েছে'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Copy' : 'কপি'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Arabic Hadith Calligraphy */}
              <div dir="rtl" className="text-center font-times font-bold text-emerald-200 text-xl sm:text-2xl mb-4 leading-loose tracking-wide">
                {DAILY_HADITH.arabic}
              </div>

              {/* Translation */}
              <blockquote className="font-serif-bn font-semibold text-lg sm:text-xl text-white text-center leading-relaxed mb-4">
                {hadithText}
              </blockquote>

              <p className="text-emerald-200/80 text-xs sm:text-sm text-center leading-relaxed">
                {hadithContext}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-800/60 text-center">
              <span className="text-xs text-emerald-300/80 font-mono">
                {isEn ? 'Source:' : 'সূত্র:'} {hadithSource}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
