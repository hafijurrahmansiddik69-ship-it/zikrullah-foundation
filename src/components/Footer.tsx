import React from 'react';
import { Heart, MapPin, Mail, Phone, Calculator, Users } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';

interface FooterProps {
  onOpenDonation: () => void;
  onOpenZakat: () => void;
  onOpenVolunteer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDonation,
  onOpenZakat,
  onOpenVolunteer
}) => {
  return (
    <footer className="bg-[#002e1d] text-emerald-100/90 pt-16 pb-8 border-t border-emerald-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-800/60 border border-emerald-600/40 flex items-center justify-center text-white text-2xl shadow-inner">
                🕌
              </div>
              <div>
                <h3 className="font-serif-bn font-bold text-2xl text-white tracking-tight leading-tight">
                  {FOUNDATION_INFO.name}
                </h3>
                <span className="text-[10px] tracking-widest text-emerald-400 font-semibold uppercase font-sans">
                  {FOUNDATION_INFO.englishName}
                </span>
              </div>
            </div>

            <p className="text-sm text-emerald-200/80 leading-relaxed max-w-sm">
              মানবতার সেবা, সমাজের সার্বিক কল্যাণ এবং ইসলামের সুন্দর জীবনাদর্শকে পাথেয় করে আমাদের পথচলা। আসুন, আমরা সকলে মিলে অসহায় মানুষের পাশে দাঁড়াই।
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenDonation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#087443] hover:bg-[#045332] text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>মানবসেবায় দান করুন</span>
              </button>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-sans mb-3 border-b border-emerald-800/60 pb-2">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">হোমপেজ</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">আমাদের পরিচয়</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">সেবাসমূহ</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">চলমান প্রকল্প</a>
              </li>
              <li>
                <a href="#prayer" className="hover:text-white transition-colors">নামাজের সময়</a>
              </li>
            </ul>
          </div>

          {/* Special Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-sans mb-3 border-b border-emerald-800/60 pb-2">
              প্রোগ্রাম ও সেবা
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenZakat}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                  <span>যাকাত ক্যালকুলেটর</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenVolunteer}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>স্বেচ্ছাসেবক নিবন্ধন</span>
                </button>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors block">
                  ছবি ও স্থিরচিত্র
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white transition-colors block">
                  বিজ্ঞপ্তি ও রিপোর্ট
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors block">
                  অফিস যোগাযোগ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Banking (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-sans mb-3 border-b border-emerald-800/60 pb-2">
              যোগাযোগ ও ব্যাংক
            </h4>
            
            <div className="space-y-2.5 text-xs text-emerald-200/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{FOUNDATION_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${FOUNDATION_INFO.email}`} className="hover:text-white font-sans">
                  {FOUNDATION_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${FOUNDATION_INFO.phone}`} className="hover:text-white font-sans">
                  {FOUNDATION_INFO.phone}
                </a>
              </div>

              <div className="pt-2 text-[11px] bg-emerald-950/70 p-2.5 rounded-xl border border-emerald-800/40 space-y-1">
                <strong className="text-white block font-serif-bn">ব্যাংক একাউন্ট (অনুদান):</strong>
                <span className="block font-mono text-emerald-300">IBBL: 20501234567890100</span>
                <span className="block text-[10px] text-slate-300">বিকাশ / নগদ: 01300-389797</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/80">
          <div>
            © {new Date().getFullYear()} {FOUNDATION_INFO.name}। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-4 text-emerald-300">
            <span>মানবতার সেবায় • ইসলামের পথে</span>
            <span>·</span>
            <span>বগুড়া, বাংলাদেশ</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
