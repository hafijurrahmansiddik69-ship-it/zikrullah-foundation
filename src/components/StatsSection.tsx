import React from 'react';
import { STATS_DATA } from '../data/mockData';

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#003d27] via-[#045332] to-[#087443] text-white py-14 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-8">
          {STATS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="text-center p-3.5 sm:p-4 rounded-2xl bg-white/5 sm:bg-transparent border border-emerald-500/20 sm:border-0 sm:border-r last:sm:border-r-0 sm:border-emerald-600/30 backdrop-blur-2xs sm:backdrop-blur-none"
            >
              <span className="font-serif-bn font-bold text-3xl sm:text-4xl lg:text-5xl text-emerald-200 tracking-tight block mb-1 font-mono tabular-nums">
                {item.value}
              </span>
              <strong className="block text-white text-sm sm:text-base lg:text-lg font-medium leading-snug">
                {item.label}
              </strong>
              <span className="text-[11px] sm:text-xs text-emerald-200/80 mt-1 block">
                {item.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
