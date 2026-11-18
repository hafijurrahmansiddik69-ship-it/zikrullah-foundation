import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, ExternalLink, Loader2, RotateCcw } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';
import { adminDataService } from '../services/adminDataService';
import { useLanguage } from '../context/LanguageContext';
import { 
  triggerDirectEmailForContact, 
  sendContactMessageEmail, 
  getDirectGmailUrlForContact, 
  getMailtoUrlForContact,
  ContactMessageSubmissionData 
} from '../services/emailService';

export const ContactSection: React.FC = () => {
  const { isEn } = useLanguage();
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailLinks, setEmailLinks] = useState<{ gmailUrl: string; mailtoUrl: string } | null>(null);

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<{ subject?: string }>;
      if (customEvent.detail?.subject) {
        setSubject(customEvent.detail.subject);
        setSubmitted(false);
      }
    };
    window.addEventListener('zikrullah_prefill_contact', handlePrefill);
    return () => window.removeEventListener('zikrullah_prefill_contact', handlePrefill);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contactInfo.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const contactData: ContactMessageSubmissionData = {
      name: name.trim(),
      contactInfo: contactInfo.trim(),
      subject: subject.trim() || (isEn ? 'General Inquiry' : 'সাধারণ অনুসন্ধান'),
      message: message.trim()
    };

    // Save to admin database
    adminDataService.addContactMessage({
      name: contactData.name,
      contactInfo: contactData.contactInfo,
      subject: contactData.subject || (isEn ? 'General Contact' : 'সাধারণ যোগাযোগ'),
      message: contactData.message
    });

    // Compute direct URLs
    const gmailUrl = getDirectGmailUrlForContact(contactData);
    const mailtoUrl = getMailtoUrlForContact(contactData);
    setEmailLinks({ gmailUrl, mailtoUrl });

    // Open mobile mail app or Gmail
    triggerDirectEmailForContact(contactData);

    // Background delivery to foundation email
    await sendContactMessageEmail(contactData);

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setName('');
    setContactInfo('');
    setSubject('');
    setMessage('');
    setSubmitted(false);
    setEmailLinks(null);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase block mb-2">
            {isEn ? 'Contact & Location' : 'যোগাযোগ ও অবস্থান'}
          </span>
          <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl text-[#045332] leading-tight mb-4">
            {isEn ? 'Get In Touch With Us' : 'আমাদের সাথে যোগাযোগ করুন'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isEn
              ? 'Feel free to contact us anytime regarding any foundation activity, direct donations, volunteering, or valuable suggestions.'
              : 'ফাউন্ডেশনের যেকোনো কার্যক্রম, সরাসরি অনুদান, ভলান্টিয়ারিং কিংবা পরামর্শের জন্য আমাদের সাথে যেকোনো সময় যোগাযোগ করতে পারেন।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#fafcfb] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-emerald-100 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif-bn font-bold text-xl sm:text-2xl text-[#045332] mb-5 sm:mb-6">
                {isEn ? 'Head Office & Details' : 'প্রধান কার্যালয় ও তথ্য'}
              </h3>

              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 text-sm font-semibold mb-0.5">
                      {isEn ? 'Address' : 'ঠিকানা'}
                    </strong>
                    <span className="text-slate-600 text-sm leading-relaxed block">
                      {isEn ? FOUNDATION_INFO.addressEn : FOUNDATION_INFO.address}
                    </span>
                    <span className="text-xs text-emerald-700 mt-1 block">
                      {isEn ? '(Adjacent to Mokamtala Bazar, Gujia, Bogura)' : '(মোকামতলা বাজার সংলগ্ন, গুজিয়া, বগুড়া)'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 text-sm font-semibold mb-0.5">
                      {isEn ? 'Official Email' : 'অফিসিয়াল ইমেইল'}
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
                      {isEn ? 'Mobile & WhatsApp' : 'মোবাইল ও হোয়াটসঅ্যাপ'}
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
                      {isEn ? 'Office Hours' : 'অফিস সময়সূচি'}
                    </strong>
                    <span className="text-slate-600 text-sm block">
                      {isEn ? FOUNDATION_INFO.officeHoursEn : FOUNDATION_INFO.officeHours}
                    </span>
                    <span className="text-xs text-slate-500 block">
                      {isEn ? '(Active 24/7 during emergency relief operations)' : '(জরুরি ত্রাণ কার্যক্রমে ২৪/৭ সচল)'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-emerald-100/80 flex items-center gap-2.5 sm:gap-3">
              <a
                href={`tel:${FOUNDATION_INFO.phone.replace(/\s+/g, '')}`}
                className="flex-1 py-3 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs text-center shadow-xs transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{isEn ? 'Direct Call' : 'সরাসরি কল'}</span>
              </a>

              <a
                href={`mailto:${FOUNDATION_INFO.email}`}
                className="flex-1 py-3 px-3 rounded-xl bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-50 font-bold text-xs text-center transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{isEn ? 'Send Email' : 'ইমেইল পাঠান'}</span>
              </a>
            </div>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#fafcfb] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-emerald-100 shadow-sm">
            <h3 className="font-serif-bn font-bold text-xl sm:text-2xl text-[#045332] mb-1.5 sm:mb-2">
              {isEn ? 'Send Us a Direct Message' : 'সরাসরি বার্তা পাঠান'}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {isEn
                ? "Write your feedback, questions, or inquiries below. We will reply promptly, Insha'Allah."
                : 'আপনার মতামত, প্রশ্ন বা অনুসন্ধানের বার্তা লিখুন। আমরা দ্রুত উত্তর দেব ইনশাআল্লাহ।'}
            </p>

            {submitted ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-center animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2.5" />
                <h4 className="font-serif-bn font-bold text-xl sm:text-2xl text-emerald-900 mb-1.5">
                  {isEn ? 'Your Message Is Ready!' : 'আপনার বার্তা সফলভাবে প্রস্তুত হয়েছে!'}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto mb-5 leading-relaxed">
                  {isEn
                    ? 'Your email app or Gmail has been opened automatically. Use either option below to dispatch your message directly to our team:'
                    : 'আপনার মোবাইল অ্যাপ বা জিমেইল স্বয়ংক্রিয়ভাবে ওপেন করা হয়েছে। সরাসরি আমাদের কাছে পৌঁছাতে নিচের যেকোনো মাধ্যমে এখনই সেন্ড করুন:'}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
                  {emailLinks?.gmailUrl && (
                    <a
                      href={emailLinks.gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{isEn ? '🔴 Send via Web Gmail' : '🔴 সরাসরি Gmail দিয়ে পাঠান'}</span>
                    </a>
                  )}

                  {emailLinks?.mailtoUrl && (
                    <a
                      href={emailLinks.mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#045332] hover:bg-[#087443] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{isEn ? '📱 Send via Email App' : '📱 মোবাইলের ইমেইল অ্যাপ দিয়ে পাঠান'}</span>
                    </a>
                  )}
                </div>

                <div className="pt-2 border-t border-emerald-200/60">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-800 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Send Another Message' : 'আরেকটি নতুন বার্তা পাঠান'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isEn ? 'Your Name' : 'আপনার নাম'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isEn ? 'e.g. Md. Abdul Hamid' : 'মোঃ আব্দুল হামিদ'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isEn ? 'Mobile Number or Email' : 'মোবাইল বা ইমেইল'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isEn ? '01XXXXXXXXX or email@example.com' : '01XXXXXXXXX বা email@example.com'}
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isEn ? 'Message Subject' : 'বার্তার বিষয়'}
                  </label>
                  <input
                    type="text"
                    placeholder={isEn ? 'e.g. Want to contribute to the food relief project' : 'উদাঃ খাদ্য সহায়তা প্রকল্পে সহযোগিতা করতে চাই'}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isEn ? 'Detailed Message' : 'বিস্তারিত বার্তা'} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={isEn ? 'Write your message in detail...' : 'আপনার বার্তা বিস্তারিত লিখুন...'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{isEn ? 'Preparing message...' : 'বার্তা প্রস্তুত হচ্ছে...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{isEn ? 'Send Message (Email System)' : 'বার্তা পাঠান (ইমেইল সিস্টেম)'}</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
