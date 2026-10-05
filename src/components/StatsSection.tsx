import React from 'react';
import { STATS_DATA } from '../data/mockData';

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#003d27] via-[#045332] to-[#087443] text-white py-14 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-emerald-600/30">
          {STATS_DATA.map((item, idx) => (
            <div key={idx} className="text-center px-4 pt-4 sm:pt-0">
              <span className="font-serif-bn font-bold text-4xl sm:text-5xl text-emerald-200 tracking-tight block mb-1 font-mono tabular-nums">
                {item.value}
              </span>
              <strong className="block text-white text-base sm:text-lg font-medium leading-snug">
                {item.label}
              </strong>
              <span className="text-xs text-emerald-200/80 mt-1 block">
                {item.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
