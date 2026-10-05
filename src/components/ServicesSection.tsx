import React from 'react';
import { Utensils, GraduationCap, HeartPulse, Droplets, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/mockData';

interface ServicesSectionProps {
  onSelectServiceDonation: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceDonation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-emerald-700" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-700" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-emerald-700" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-emerald-700" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-700" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase block mb-2">
              আমাদের উদ্যোগ ও কর্মসূচি
            </span>
            <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl text-[#045332] leading-tight">
              মানুষের কল্যাণে বহুমুখী মানবিক সেবাসমূহ
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            ইসলামিক আদর্শ ও সামাজিক দায়বদ্ধতা থেকে মানুষের সার্বিক কল্যাণ সাধনে আমরা তৃণমূল পর্যায়ে বিভিন্ন কার্যক্রম পরিচালনা করে আসছি।
          </p>
        </div>

        {/* Services Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#fafcfb] hover:bg-white rounded-2xl p-7 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 group flex flex-col justify-between"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <div className="group-hover:brightness-0 group-hover:invert transition-all">
                    {getIcon(srv.iconName)}
                  </div>
                </div>

                <span className="text-[11px] font-bold text-emerald-700 tracking-widest uppercase block mb-1 font-sans">
                  {srv.subtitle}
                </span>

                <h3 className="font-serif-bn font-bold text-xl text-slate-800 group-hover:text-[#045332] transition-colors mb-3">
                  {srv.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-100/60 flex items-center justify-between">
                <button
                  onClick={() => onSelectServiceDonation(srv.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 group-hover:text-emerald-950 transition-colors cursor-pointer"
                >
                  <span>এই খাতে দান করুন</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-xs text-slate-400 font-sans">সদকা / যাকাত</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
