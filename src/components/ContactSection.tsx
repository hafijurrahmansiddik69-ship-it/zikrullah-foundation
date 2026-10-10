import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setContactInfo('');
    setSubject('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase block mb-2">
            যোগাযোগ ও অবস্থান
          </span>
          <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl text-[#045332] leading-tight mb-4">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            ফাউন্ডেশনের যেকোনো কার্যক্রম, সরাসরি অনুদান, ভলান্টিয়ারিং কিংবা পরামর্শের জন্য আমাদের সাথে যেকোনো সময় যোগাযোগ করতে পারেন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#fafcfb] rounded-3xl p-7 sm:p-8 border border-emerald-100 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif-bn font-bold text-2xl text-[#045332] mb-6">
                প্রধান কার্যালয় ও তথ্য
              </h3>

              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 text-sm font-semibold mb-0.5">
                      ঠিকানা
                    </strong>
                    <span className="text-slate-600 text-sm leading-relaxed block">
                      {FOUNDATION_INFO.address}
                    </span>
                    <span className="text-xs text-emerald-700 mt-1 block">
                      (মোকামতলা বাজার সংলগ্ন, গুজিয়া, বগুড়া)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 text-sm font-semibold mb-0.5">
                      অফিসিয়াল ইমেইল
                    </strong>
                    <a
                      href={`mailto:${FOUNDATION_INFO.email}`}
                      className="text-slate-600 hover:text-emerald-800 text-sm transition-colors block font-sans"
                    >
                      {FOUNDATION_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 text-sm font-semibold mb-0.5">
                      মোবাইল ও হোয়াটসঅ্যাপ
                    </strong>
                    <div className="space-y-0.5 font-sans text-sm">
                      <a
                        href={`tel:${FOUNDATION_INFO.phone.replace(/\s+/g, '')}`}
                        className="text-slate-600 hover:text-emerald-800 block"
                      >
                        {FOUNDATION_INFO.phone}
                      </a>
                      <a
                        href={`tel:${FOUNDATION_INFO.altPhone.replace(/\s+/g, '')}`}
                        className="text-slate-600 hover:text-emerald-800 block text-xs"
                      >
                        {FOUNDATION_INFO.altPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 text-sm font-semibold mb-0.5">
                      অফিস সময়সূচি
                    </strong>
                    <span className="text-slate-600 text-sm block">
                      {FOUNDATION_INFO.officeHours}
                    </span>
                    <span className="text-xs text-slate-500 block">
                      (জরুরি ত্রাণ কার্যক্রমে ২৪/৭ সচল)
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 mt-6 border-t border-emerald-100/80 flex items-center gap-3">
              <a
                href={`tel:${FOUNDATION_INFO.phone.replace(/\s+/g, '')}`}
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs text-center shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>সরাসরি কল</span>
              </a>

              <a
                href={`mailto:${FOUNDATION_INFO.email}`}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-50 font-bold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>ইমেইল পাঠান</span>
              </a>
            </div>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#fafcfb] rounded-3xl p-7 sm:p-8 border border-emerald-100 shadow-sm">
            <h3 className="font-serif-bn font-bold text-2xl text-[#045332] mb-2">
              সরাসরি বার্তা পাঠান
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              আপনার মতামত, প্রশ্ন বা অনুসন্ধানের বার্তা লিখুন। আমরা দ্রুত উত্তর দেব ইনশাআল্লাহ।
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-serif-bn font-bold text-xl text-emerald-900 mb-1">
                  আপনার বার্তা সফলভাবে পৌঁছেছে!
                </h4>
                <p className="text-xs text-emerald-700">
                  জিকিরুল্লাহ ফাউন্ডেশনের সাথে যোগাযোগের জন্য ধন্যবাদ। আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      আপনার নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="মোঃ আব্দুল হামিদ"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      মোবাইল বা ইমেইল <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="01XXXXXXXXX বা email@example.com"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    বার্তার বিষয়
                  </label>
                  <input
                    type="text"
                    placeholder="উদাঃ খাদ্য সহায়তা প্রকল্পে সহযোগিতা করতে চাই"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    বিস্তারিত বার্তা <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="আপনার বার্তা বিস্তারিত লিখুন..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>বার্তা পাঠান</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
