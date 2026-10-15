import React, { useState, useEffect } from 'react';
import { 
  Utensils, 
  GraduationCap, 
  HeartPulse, 
  Briefcase, 
  ArrowRight, 
  MapPin, 
  Users, 
  Heart, 
  X, 
  CheckCircle2, 
  Target, 
  Coins, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { PROJECTS } from '../data/mockData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onDonateToProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onDonateToProject }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeProjectId, setActiveProjectId] = useState<string>('p-food');

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const formatBDT = (num: number) => {
    return '৳ ' + num.toLocaleString('bn-BD');
  };

  // Category card icon and styling mapping (10 Minute School category cards inspired)
  const getCategoryConfig = (id: string) => {
    switch (id) {
      case 'p-food':
        return {
          icon: Utensils,
          badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/20',
          hoverBorder: 'hover:border-emerald-500 hover:shadow-emerald-950/10',
          accentColor: '#059669',
          tagText: 'জরুরি খাদ্য সহায়তা'
        };
      case 'p-education':
        return {
          icon: GraduationCap,
          badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
          iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-blue-500/20',
          hoverBorder: 'hover:border-blue-500 hover:shadow-blue-950/10',
          accentColor: '#2563eb',
          tagText: 'শিক্ষা ও নৈতিক পাঠশালা'
        };
      case 'p-health':
        return {
          icon: HeartPulse,
          badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
          iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-rose-500/20',
          hoverBorder: 'hover:border-rose-500 hover:shadow-rose-950/10',
          accentColor: '#e11d48',
          tagText: 'ফ্রি চিকিৎসা ও ওষুধ'
        };
      case 'p-livelihood':
      default:
        return {
          icon: Briefcase,
          badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
          iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-amber-500/20',
          hoverBorder: 'hover:border-amber-500 hover:shadow-amber-950/10',
          accentColor: '#d97706',
          tagText: 'স্বাবলম্বীকরণ ও জীবিকা'
        };
    }
  };

  // Handler for category selection with smooth scroll on mobile
  const handleSelectCategory = (projectId: string) => {
    setActiveProjectId(projectId);
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      const el = document.getElementById('active-project-details');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-20 bg-gradient-to-b from-[#fafcfb] via-white to-[#f4f8f5] border-b border-emerald-100/60 relative overflow-hidden">
      
      {/* Subtle Background Flourish */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/25 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-semibold text-emerald-800 mb-2.5 sm:mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>মাঠপর্যায়ে চলমান কার্যক্রম</span>
          </div>
          <h2 className="font-serif-bn font-bold text-2xl sm:text-4xl text-[#045332] leading-tight">
            আমাদের বর্তমান ও চলমান প্রকল্পসমূহ
          </h2>
        </div>

        {/* 10 Minute School Style 4 Action Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PROJECTS.map((project) => {
            const config = getCategoryConfig(project.id);
            const Icon = config.icon;
            const percentage = Math.min(
              100,
              Math.round((project.raisedAmount / project.targetAmount) * 100)
            );
            const isActive = project.id === activeProjectId;

            return (
              <div
                key={project.id}
                onClick={() => handleSelectCategory(project.id)}
                className={`group relative bg-white rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden active:scale-[0.99] ${
                  isActive
                    ? 'border-emerald-600 ring-2 ring-emerald-500/30 shadow-lg bg-emerald-50/20'
                    : `border-slate-200/80 shadow-xs hover:shadow-xl ${config.hoverBorder}`
                }`}
              >
                {/* Top Subtle Color Accent Bar */}
                <div 
                  className={`absolute top-0 left-0 right-0 transition-all duration-300 ${
                    isActive ? 'h-1.5' : 'h-1 group-hover:h-1.5'
                  }`}
                  style={{ backgroundColor: config.accentColor }}
                />

                <div>
                  {/* Top Row: Icon Container & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 ${config.iconBg}`}>
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full transition-colors ${
                      isActive 
                        ? 'bg-emerald-600 text-white shadow-xs' 
                        : 'bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-800'
                    }`}>
                      {isActive ? '✓ নির্বাচিত' : project.status}
                    </span>
                  </div>

                  {/* Category Title */}
                  <h3 className={`font-serif-bn font-bold text-lg sm:text-xl transition-colors leading-snug mb-2 ${
                    isActive ? 'text-emerald-900 font-extrabold' : 'text-slate-800 group-hover:text-emerald-800'
                  }`}>
                    {project.category}
                  </h3>

                  {/* Subtitle / Brief */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-2 mb-4">
                    {project.subtitle || project.description}
                  </p>
                </div>

                {/* Card Bottom: Progress Indicator & Action Link */}
                <div className="pt-4 border-t border-slate-100 mt-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-mono">
                    <span className="text-emerald-700 font-semibold">{percentage}% তহবিলের অগ্রগতি</span>
                    <span className="text-slate-400 font-sans-bn text-[11px]">{project.beneficiaries}</span>
                  </div>

                  {/* Mini Progress Track */}
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-4">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${percentage}%`,
                        backgroundColor: config.accentColor
                      }}
                    />
                  </div>

                  {/* 10-Minute School Style Interactive Link */}
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProjectId(project.id);
                      setSelectedProject(project);
                    }}
                    className="flex items-center justify-between font-bold text-xs text-slate-700 group-hover:text-emerald-700 transition-colors pt-1"
                  >
                    <span className="flex items-center gap-1 font-serif-bn text-sm">
                      বিস্তারিত বিবরণ দেখুন
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* প্রকল্পের পটভূমি ও তহবিল মডিউল                                 */}
        {/* ========================================================= */}
        {(() => {
          const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];
          const activePercentage = Math.min(
            100,
            Math.round((activeProject.raisedAmount / activeProject.targetAmount) * 100)
          );

          return (
            <div id="active-project-details" className="project-container mt-8 sm:mt-10 scroll-mt-24">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-8">
                
                {/* সংক্ষিপ্ত বিবরণ */}
                <div className="project-description flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                      {activeProject.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      অবস্থান: {activeProject.location}
                    </span>
                  </div>

                  <h3 className="section-title">
                    ✨ প্রকল্পের পটভূমি ও সংক্ষিপ্ত বিবরণ
                  </h3>

                  <p className="description-text">
                    {activeProject.longDescription || activeProject.description}
                  </p>

                  {/* Key Objectives / কার্যক্রমসমূহ */}
                  {activeProject.objectives && activeProject.objectives.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <h4 className="font-serif-bn font-bold text-xs sm:text-sm text-emerald-950 mb-2.5">
                        এই প্রকল্পের প্রধান কার্যক্রমসমূহ:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-600">
                        {activeProject.objectives.map((obj, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* সংক্ষিপ্ত তহবিল সংগ্রহ অগ্রগতি */}
                <div className="lg:w-88 w-full shrink-0 bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white p-5 sm:p-6 rounded-2xl border border-emerald-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h4 className="font-serif-bn font-bold text-sm sm:text-base text-emerald-950 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>সংক্ষিপ্ত তহবিল সংগ্রহ অগ্রগতি</span>
                      </h4>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-mono shadow-xs">
                        {activePercentage}% অর্জিত
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-3 bg-emerald-100 rounded-full overflow-hidden mb-3">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 via-teal-600 to-[#064e3b] rounded-full transition-all duration-700"
                        style={{ width: `${activePercentage}%` }}
                      />
                    </div>

                    {/* Financial stats */}
                    <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white/90 border border-emerald-100/90 mb-4 text-xs font-mono">
                      <div>
                        <span className="block text-[11px] text-slate-500 font-sans-bn mb-0.5">সংগৃহীত তহবিল</span>
                        <span className="font-bold text-emerald-700 text-sm sm:text-base">{formatBDT(activeProject.raisedAmount)}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[11px] text-slate-500 font-sans-bn mb-0.5">লক্ষ্যমাত্রা</span>
                        <span className="font-bold text-slate-800 text-sm sm:text-base">{formatBDT(activeProject.targetAmount)}</span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 flex items-center justify-between mb-5 px-1 font-sans-bn">
                      <span>উপকারভোগী: <strong className="text-slate-700">{activeProject.beneficiaries}</strong></span>
                      <span className="text-emerald-700 font-semibold">{activeProject.status}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={() => onDonateToProject(activeProject)}
                      className="btn-khidmat w-full cursor-pointer"
                    >
                      <span className="icon">💚</span>
                      <span>খেদমতে অংশ নিন / দান করুন</span>
                    </button>

                    <button
                      onClick={() => setSelectedProject(activeProject)}
                      className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-slate-700 hover:text-emerald-900 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>সম্পূর্ণ পটভূমি ও পপ-আপ দেখুন</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

        {/* Supportive Note Under Grid */}
        <div className="mt-8 bg-white/80 backdrop-blur-xs rounded-2xl p-5 border border-emerald-100/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm sm:text-base">
                যেকোনো প্রকল্পে আপনার যাকাত ও সাধারণ সদকা প্রদান করতে পারেন
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                সকল কার্যক্রম সরাসরি স্থানীয় হকদার পরিবার ও শিক্ষার্থীদের মাঝে শতভাগ স্বচ্ছতায় বাস্তবায়িত হয়।
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
            <span>ক্লিক করে বিস্তারিত জেনে দান করুন</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* Detailed Popup Modal (পপ-আপ / মোডাল ফিচার)                */}
      {/* ========================================================= */}
      {selectedProject && (() => {
        const modalConfig = getCategoryConfig(selectedProject.id);
        const ModalIcon = modalConfig.icon;
        const percentage = Math.min(
          100,
          Math.round((selectedProject.raisedAmount / selectedProject.targetAmount) * 100)
        );

        return (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-emerald-100 relative animate-in zoom-in-95 duration-200 my-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button Top-Right */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="পপ-আপ বন্ধ করুন"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-rose-600 flex items-center justify-center shadow-md transition-all cursor-pointer border border-slate-200/80 active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Cover Image */}
              <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category & Status Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20 shadow-sm">
                    <ModalIcon className="w-3.5 h-3.5" />
                    <span>{selectedProject.category}</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-sm">
                    {selectedProject.status}
                  </div>
                </div>

                {/* Image Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif-bn font-bold text-xl sm:text-2xl text-white leading-tight drop-shadow-md">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.subtitle && (
                    <p className="text-emerald-200 text-xs sm:text-sm mt-1 drop-shadow-sm">
                      {selectedProject.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 space-y-6 flex-1">
                
                {/* Meta details bar */}
                <div className="flex flex-wrap items-center gap-4 py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <span className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>অবস্থান: {selectedProject.location}</span>
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <Users className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>উপকারভোগী: {selectedProject.beneficiaries}</span>
                  </span>
                </div>

                {/* সংক্ষিপ্ত বিবরণ */}
                <div className="project-description">
                  <h3 className="section-title">
                    ✨ প্রকল্পের পটভূমি ও সংক্ষিপ্ত বিবরণ
                  </h3>
                  <p className="description-text">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Key Objectives / কার্যক্রমসমূহ */}
                {selectedProject.objectives && selectedProject.objectives.length > 0 && (
                  <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
                    <h5 className="font-serif-bn font-bold text-sm sm:text-base text-emerald-950 mb-3">
                      এই প্রকল্পের আওতাভুক্ত প্রধান কার্যক্রমসমূহ:
                    </h5>
                    <ul className="space-y-2.5">
                      {selectedProject.objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* সংক্ষিপ্ত তহবিল সংগ্রহ অগ্রগতি */}
                <div className="bg-[#f7fbf8] p-5 rounded-2xl border border-emerald-100/90 shadow-xs">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2.5">
                    <h5 className="font-serif-bn font-bold text-emerald-950 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>সংক্ষিপ্ত তহবিল সংগ্রহ অগ্রগতি</span>
                    </h5>
                    <span className="font-bold text-emerald-800 font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-100/80">
                      {percentage}% অর্জিত
                    </span>
                  </div>

                  {/* Progress Track */}
                  <div className="w-full h-3 bg-emerald-100/80 rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-teal-600 to-[#064e3b] rounded-full transition-all duration-700"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Coins className="w-4 h-4 text-emerald-600" />
                      সংগৃহীত: <strong className="text-emerald-700">{formatBDT(selectedProject.raisedAmount)}</strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-slate-400" />
                      লক্ষ্যমাত্রা: <strong className="text-slate-800">{formatBDT(selectedProject.targetAmount)}</strong>
                    </span>
                  </div>
                </div>

                {/* Action Buttons in Modal */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      const proj = selectedProject;
                      setSelectedProject(null);
                      onDonateToProject(proj);
                    }}
                    className="btn-khidmat w-full sm:flex-1 cursor-pointer"
                  >
                    <span className="icon">💚</span>
                    <span>খেদমতে অংশ নিন / দান করুন</span>
                  </button>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
                  >
                    বন্ধ করুন
                  </button>
                </div>

              </div>
            </div>
          </div>
        );
      })()}

    </section>
  );
};
