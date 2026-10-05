import React from 'react';
import { FEATURE_LIST } from '../data/mockData';

export const FeaturesRibbon: React.FC = () => {
  return (
    <div className="bg-white border-b border-emerald-100/80 shadow-xs relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-emerald-100/80">
          {FEATURE_LIST.map((feat, idx) => (
            <div
              key={idx}
              className="py-5 px-3 sm:px-4 flex items-center gap-3.5 group hover:bg-emerald-50/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                {feat.icon}
              </div>
              <div className="min-w-0">
                <span className="block font-bold text-slate-800 text-sm sm:text-base group-hover:text-emerald-800 transition-colors truncate">
                  {feat.title}
                </span>
                <span className="block text-[12px] text-slate-500 line-clamp-1 leading-snug">
                  {feat.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
