import React, { useState } from 'react';
import { Heart, Users, MapPin, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/mockData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onDonateToProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onDonateToProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('সকল');

  const categories = ['সকল', 'খাদ্য', 'শিক্ষা', 'স্বাস্থ্য', 'পানি'];

  const filteredProjects = activeFilter === 'সকল'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const formatBDT = (num: number) => {
    return '৳ ' + num.toLocaleString('bn-BD');
  };

  return (
    <section id="projects" className="py-20 bg-[#fafcfb] border-b border-emerald-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase block mb-2">
              মাঠপর্যায়ে চলমান কার্যক্রম
            </span>
            <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl text-[#045332] leading-tight">
              আমাদের বর্তমান ও চলমান প্রকল্পসমূহ
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            আপনার সদকা ও যাকাতের সাহায্যে আমরা সরাসরি বগুড়ার গুজিয়া, মোকামতলা ও আশপাশের হতদরিদ্র মানুষের মুখে হাসি ফোটাচ্ছি।
          </p>
        </div>

        {/* Filter Bar (Segmented Controls) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-emerald-50/70 border border-emerald-100 rounded-xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === cat
                  ? 'bg-[#087443] text-white shadow-xs'
                  : 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-100/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const percentage = Math.min(
              100,
              Math.round((project.raisedAmount / project.targetAmount) * 100)
            );

            return (
              <article
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image container with fallback */}
                  <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-900/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs text-emerald-900 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      {project.status}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-7">
                    
                    {/* Metadata line */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-slate-500 mb-2.5 sm:mb-3">
                      <span className="flex items-center gap-1 text-emerald-700 font-medium">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{project.location}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 shrink-0" />
                        <span>উপকারভোগী: {project.beneficiaries}</span>
                      </span>
                    </div>

                    <h3 className="font-serif-bn font-bold text-lg sm:text-2xl text-slate-800 leading-snug mb-2 sm:mb-3">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                      {project.description}
                    </p>

                    {/* Progress Bar & Financials */}
                    <div className="bg-[#f7fbf8] p-4 rounded-2xl border border-emerald-100/70 mb-2">
                      <div className="flex items-center justify-between text-xs font-semibold mb-2">
                        <span className="text-emerald-800 font-mono tabular-nums">
                          সংগৃহীত: {formatBDT(project.raisedAmount)}
                        </span>
                        <span className="text-slate-500 font-mono tabular-nums">
                          লক্ষ্যমাত্রা: {formatBDT(project.targetAmount)}
                        </span>
                      </div>

                      {/* Progress Track */}
                      <div className="w-full h-2.5 bg-emerald-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-[#087443] rounded-full transition-all duration-700"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>

                      <div className="flex justify-between items-center text-[11px] text-slate-500 mt-2">
                        <span>তহবিল সংগৃহীত</span>
                        <span className="font-bold text-emerald-700 font-mono tabular-nums">
                          {percentage}% সম্পন্ন
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-2">
                  <button
                    onClick={() => onDonateToProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer min-h-[44px]"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>এই প্রকল্পে সহায়তা করুন</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
