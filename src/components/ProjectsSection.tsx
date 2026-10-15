import React, { useState } from 'react';
import { HandHelping, HeartPulse, Heart, GraduationCap, Briefcase, Sprout, X } from 'lucide-react';

interface CardData {
  badge: string;
  title: string;
  icon: React.ElementType;
  gradientClass: string;
  cardBorderClass: string;
  cardHoverShadow: string;
  description: string;
}

const CARDS: CardData[] = [
  { badge: 'খাদ্য ও আশ্রয়', title: 'মানবিক সহায়তা', icon: HandHelping, gradientClass: 'from-[#ff7e5f] to-[#feb47b]', cardBorderClass: 'border-[#ff7e5f]', cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(255,126,95,0.4)]', description: 'সমাজের সবচেয়ে পিছিয়ে পড়া প্রান্তিক মানুষ, অসহায় বিধবা ও এতিম শিশুদের জন্য খাদ্য, পুষ্টি এবং নিরাপদ আশ্রয়ের সুব্যবস্থা করা।' },
  { badge: 'ফ্রি চিকিৎসা', title: 'স্বাস্থ্যসেবা', icon: HeartPulse, gradientClass: 'from-[#00c6ff] to-[#0072ff]', cardBorderClass: 'border-[#00c6ff]', cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(0,198,255,0.4)]', description: 'চরম দারিদ্র্যের কারণে উন্নত চিকিৎসা ও দামী ওষুধ ক্রয়ে অক্ষম অসহায় রোগী ও প্রতিবন্ধীদের জন্য দেশের শীর্ষস্থানীয় ভালো মানের চিকিৎসকদের পরামর্শ, প্রয়োজনীয় ওষুধ এবং মানসম্মত চিকিৎসা সেবা নিশ্চিত করা।' },
  { badge: 'লাল ভালোবাসা', title: 'রক্তদান', icon: Heart, gradientClass: 'from-[#ff416c] to-[#ff4b2b]', cardBorderClass: 'border-[#ff416c]', cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(255,65,108,0.4)]', description: 'মুমূর্ষু রোগীদের জরুরি মুহূর্তে জীবন বাঁচানোর তাগিদে বিনামূল্যে রক্তের ব্যবস্থা করা এবং রক্তদানে যুবসমাজকে সচেতন ও উদ্বুদ্ধ করা।' },
  { badge: 'দ্বীনি ও সাধারণ', title: 'শিক্ষা সহায়তা', icon: GraduationCap, gradientClass: 'from-[#f6d365] to-[#fda085]', cardBorderClass: 'border-[#f6d365]', cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(246,211,101,0.4)]', description: 'অসচ্ছল মেধাবী শিক্ষার্থী, এতিম ও হাফেজদের পড়াশোনা, কিতাবপত্র, আবাসন এবং সুন্দর ভবিষ্যৎ গঠনের সুব্যবস্থা করা।' },
  { badge: 'স্বাবলম্বিতা', title: 'আত্মকর্মসংস্থান', icon: Briefcase, gradientClass: 'from-[#6b21a8] to-[#3b82f6]', cardBorderClass: 'border-[#a855f7]', cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(168,85,247,0.4)]', description: 'কর্মক্ষম বেকার যুবক ও দুস্থ অসহায় মানুষদের স্বাবলম্বী করে তুলতে ক্ষুদ্র উদ্যোগ, প্রশিক্ষণ ও কর্মসংস্থানের সুযোগ সৃষ্টির মাধ্যমে নিজের পায়ে দাঁড়ানোর ব্যবস্থা করা।' },
  { badge: 'পানি ও বৃক্ষ', title: 'সদকা-ই-জারিয়া', icon: Sprout, gradientClass: 'from-[#11998e] to-[#38ef7d]', cardBorderClass: 'border-[#38ef7d]', cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(56,239,125,0.4)]', description: 'কেয়ামত পর্যন্ত সওয়াব জারি থাকার নিয়তে তীব্র সংকটপূর্ণ এলাকায় সুপেয় পানির জন্য গভীর নলকূপ স্থাপন এবং পরিবেশ রক্ষায় বৃক্ষরোপণ কর্মসূচি বাস্তবায়ন।' }
];

export const ProjectsSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  return (
    <section id="projects" className="py-16 bg-[#080a0f]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1.5 rounded-full bg-green-500/15 text-green-400 text-xs font-semibold mb-3 border border-green-500/20">আমাদের কর্মনীতি ও প্রতিশ্রুতি</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">আমাদের সেবামূলক কার্যক্রম</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {CARDS.map((card, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCard(card)}
              className={`w-full max-w-[200px] bg-[#0f131d] border-2 ${card.cardBorderClass} rounded-3xl p-2 shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center hover:-translate-y-2 ${card.cardHoverShadow}`}
            >
              <div className={`w-full rounded-[18px] py-4 px-2 min-h-[100px] flex flex-col justify-center items-center bg-gradient-to-br ${card.gradientClass} shadow-inner`}>
                  <span className="text-white font-extrabold text-sm mb-1 text-center drop-shadow-md">{card.badge}</span>
                  <card.icon className="w-7 h-7 text-white drop-shadow-md mt-1" />
              </div>
              <h3 className="font-bold text-[15px] text-white py-3">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedCard(null)}>
          <div className="bg-[#111827] rounded-3xl p-8 max-w-sm w-full relative border border-white/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedCard(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X /></button>
            <h3 className="text-2xl font-bold text-green-500 mb-4">{selectedCard.title}</h3>
            <p className="text-gray-200 mb-8 leading-relaxed">{selectedCard.description}</p>
            <div className="flex gap-4">
              <button onClick={() => setSelectedCard(null)} className="flex-1 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors">বন্ধ করুন</button>
              <a href="#donate" className="flex-1 py-3 rounded-full bg-green-600 text-white font-semibold text-center hover:bg-green-700 transition-colors">সহযোগিতা করুন</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
