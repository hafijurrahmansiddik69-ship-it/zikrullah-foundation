import React, { useState, useEffect } from 'react';
import { Clock, Moon, Sun, Sunrise, Sunset, Copy, Check, Sparkles } from 'lucide-react';
import { DAILY_HADITH } from '../data/mockData';

export const PrayerTimesBogura: React.FC = () => {
  const [copiedHadith, setCopiedHadith] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTimeStr(
        now.toLocaleTimeString('bn-BD', {
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
  }, []);

  const prayerSchedule = [
    { nameBn: 'ফজর', nameEn: 'Fajr', time: '০৪:৪৭ AM', icon: Moon, status: 'ভোরের সালাত' },
    { nameBn: 'সূর্যোদয়', nameEn: 'Sunrise', time: '০৫:৫৬ AM', icon: Sunrise, status: 'ইশরাক' },
    { nameBn: 'যোহর', nameEn: 'Dhuhr', time: '১১:৫৮ AM', icon: Sun, status: 'দুপুরের সালাত' },
    { nameBn: 'আসর', nameEn: 'Asr', time: '০৪:১৬ PM', icon: Sun, status: 'বিকালের সালাত' },
    { nameBn: 'মাগরিব', nameEn: 'Maghrib', time: '০৫:৫৮ PM', icon: Sunset, status: 'সন্ধার সালাত' },
    { nameBn: 'ইশা', nameEn: 'Isha', time: '০৭:১২ PM', icon: Moon, status: 'রাতের সালাত' },
  ];

  const handleCopyHadith = () => {
    navigator.clipboard.writeText(`${DAILY_HADITH.bengali} — ${DAILY_HADITH.source}`);
    setCopiedHadith(true);
    setTimeout(() => setCopiedHadith(false), 2000);
  };

  return (
    <section id="prayer" className="py-16 bg-white border-b border-emerald-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Prayer Times Card (7 columns) */}
          <div className="lg:col-span-7 bg-[#fafcfb] rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-emerald-100/80">
              <div>
                <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase block mb-1">
                  দৈনিক ওয়াক্ত
                </span>
                <h3 className="font-serif-bn font-bold text-2xl text-[#045332]">
                  নামাজের সময়সূচি (বগুড়া ও পার্শ্ববর্তী এলাকা)
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-500 block">বর্তমান সময়</span>
                <span className="text-sm font-bold text-emerald-800 font-mono">
                  {currentTimeStr || 'লোড হচ্ছে...'}
                </span>
              </div>
            </div>

            {/* Prayers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {prayerSchedule.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 transition-all text-center flex flex-col items-center justify-center group"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm">{p.nameBn}</span>
                    <span className="text-[10px] text-slate-400 font-sans uppercase mb-1">
                      {p.nameEn}
                    </span>
                    <span className="text-emerald-800 font-bold text-base font-mono tabular-nums">
                      {p.time}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1">
                      {p.status}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-slate-500 mt-4 text-center">
              * মোকামতলা, গুজিয়া ও বগুড়া জেলার স্থানীয় ওয়াক্ত অনুযায়ী সময় নির্ধারণ করা হয়েছে।
            </p>
          </div>

          {/* Daily Inspiring Hadith & Reflection Card (5 columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#045332] to-[#003d27] text-white rounded-3xl p-7 sm:p-8 shadow-lg flex flex-col justify-between h-full min-h-[360px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>আজকের বাণী ও প্রেরণা</span>
                </div>
                
                <button
                  onClick={handleCopyHadith}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
                  title="বাণীটি কপি করুন"
                >
                  {copiedHadith ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span className="text-emerald-300">কপি হয়েছে</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>কপি</span>
                    </>
                  )}
                </button>
              </div>

              {/* Arabic Hadith Calligraphy */}
              <div className="text-center font-serif-bn text-emerald-200 text-xl sm:text-2xl mb-4 leading-loose tracking-wide">
                {DAILY_HADITH.arabic}
              </div>

              {/* Bengali Translation */}
              <blockquote className="font-serif-bn font-semibold text-lg sm:text-xl text-white text-center leading-relaxed mb-4">
                {DAILY_HADITH.bengali}
              </blockquote>

              <p className="text-emerald-200/80 text-xs sm:text-sm text-center leading-relaxed">
                {DAILY_HADITH.context}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-800/60 text-center">
              <span className="text-xs text-emerald-300/80 font-mono">
                সূত্র: {DAILY_HADITH.source}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
