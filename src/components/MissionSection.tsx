import React from 'react';

export const MissionSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#07090e] border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1.5 rounded-full bg-green-500/15 text-green-400 text-xs font-semibold mb-3 tracking-wide border border-green-500/20">আমাদের প্রোগ্রাম ও সেবা</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">আমাদের লক্ষ্য (Mission)</h2>
          <p className="text-gray-300 opacity-75 mt-4 max-w-xl mx-auto">কুরআন-সুন্নাহর সঠিক নির্দেশনা অনুযায়ী মানবতার নিঃস্বার্থ খেদমত এবং আখিরাতের সঞ্চয় গড়ে তোলার পবিত্র অঙ্গীকার।</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#121824] to-[#0b0f17] border border-white/8 shadow-2xl">
            <p className="text-white text-lg md:text-xl italic text-center leading-relaxed">
              “রাসূলুল্লাহ (ﷺ)-এর অনুকম্পা ও সুন্নাহর চিরায়ত আলোকে পাথেয় করে—অসহায় উম্মাহর মুখে হাসি ফোটানো, ইলমে দীনের আলো ছড়ানো এবং একটি স্থায়ী স্বাবলম্বী সমাজ বিনির্মাণে আমরা মাঠপর্যায়ে নিবেদিত।”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
