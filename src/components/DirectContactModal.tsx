import React from 'react';
import { X, PhoneCall, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DirectContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectContactModal: React.FC<DirectContactModalProps> = ({ isOpen, onClose }) => {
  const { isEn } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full shadow-2xl border border-emerald-100 overflow-hidden relative my-auto sm:my-6 text-slate-800 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#045332] text-white px-4 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-2">
          <div className="flex items-start gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 mt-0.5">
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif-bn font-bold text-lg sm:text-xl leading-snug">
                {isEn ? 'Contact Us Directly' : 'আমাদের সাথে সরাসরি যোগাযোগ করুন'}
              </h3>
              <p className="text-[11px] sm:text-xs text-emerald-200 font-light leading-relaxed mt-0.5">
                {isEn
                  ? 'Speak with us directly for any inquiries, consultation, or emergency humanitarian support.'
                  : 'যেকোনো প্রয়োজনে, পরামর্শে বা জরুরি সহায়তায় আমাদের সাথে সরাসরি কথা বলুন।'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer shrink-0"
            aria-label={isEn ? 'Close' : 'বন্ধ করুন'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Contact Cards */}
        <div className="p-4 sm:p-6 space-y-3.5 max-h-[82vh] overflow-y-auto">
          {/* 1. Direct Phone Call */}
          <a
            href="tel:+8801620500920"
            className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-[#fafcfb] hover:bg-emerald-50/80 border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all duration-200 group cursor-pointer"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-emerald-700 block mb-0.5">
                  {isEn ? 'Call Directly' : 'সরাসরি ফোন কল করুন'}
                </span>
                <span className="font-sans font-bold text-base sm:text-lg text-slate-900 tracking-wide block">
                  01620 500 920
                </span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-100/80 group-hover:bg-emerald-600 text-emerald-800 group-hover:text-white text-xs font-bold shrink-0 transition-colors">
              <span>{isEn ? 'Call' : 'কল করুন'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* 2. Email / Gmail */}
          <a
            href="mailto:zikrullahfd@gmail.com"
            className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-[#fafcfb] hover:bg-emerald-50/80 border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all duration-200 group cursor-pointer"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-emerald-700 block mb-0.5">
                  {isEn ? 'Send Email / Gmail' : 'ইমেইল / জিমেইল পাঠান'}
                </span>
                <span className="font-sans font-bold text-sm sm:text-base text-slate-900 truncate block">
                  zikrullahfd@gmail.com
                </span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-100/80 group-hover:bg-emerald-600 text-emerald-800 group-hover:text-white text-xs font-bold shrink-0 transition-colors">
              <span>{isEn ? 'Email' : 'মেইল'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* 3. Head Office */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#fafcfb] border border-slate-200">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-semibold text-emerald-700 block mb-0.5">
                {isEn ? 'Head Office' : 'প্রধান কার্যালয়'}
              </span>
              <span className="font-solaiman font-semibold text-sm sm:text-base text-slate-800 block">
                {isEn ? 'Gujia, Mokamtala, Bogura' : 'গুজিয়া, মোকামতলা, বগুড়া'}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full mt-2 py-2.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors cursor-pointer"
          >
            {isEn ? 'Close' : 'বন্ধ করুন'}
          </button>
        </div>
      </div>
    </div>
  );
};
