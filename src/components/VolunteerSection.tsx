import React, { useState } from 'react';
import { Users, HeartHandshake, CheckCircle2, Sparkles, Send, Loader2, Mail, ExternalLink } from 'lucide-react';
import { adminDataService } from '../services/adminDataService';
import { sendVolunteerRegistrationEmail, triggerDirectGmail, getDirectGmailUrl, getMailtoUrl } from '../services/emailService';
import { FOUNDATION_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface VolunteerSectionProps {
  onOpenModal?: () => void;
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = () => {
  const { t, isEn } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    upazila: string;
    bloodGroup: string;
    interest: string;
    mailtoUrl: string;
    gmailUrl: string;
  } | null>(null);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [upazila, setUpazila] = useState(t.volunteer.areaDefault);
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [interest, setInterest] = useState(t.volunteer.interestDefault);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    if (!cleanName || !cleanPhone) return;

    setIsSubmitting(true);

    const submissionPayload = {
      name: cleanName,
      phone: cleanPhone,
      upazila: upazila || (isEn ? 'Bogura' : 'বগুড়া'),
      bloodGroup: bloodGroup || 'A+',
      interest: interest || t.volunteer.interestDefault,
      message: message.trim() || ''
    };

    // 1. Save to local admin database
    adminDataService.addVolunteer({
      name: cleanName,
      phone: cleanPhone,
      upazila: upazila || (isEn ? 'Bogura' : 'বগুড়া'),
      bloodGroup: bloodGroup || 'A+',
      interest: interest || t.volunteer.interestDefault,
      message: message.trim() || '',
      status: 'অপেক্ষমাণ',
      adminNote: 'Web Registration Form'
    });

    // 2. Direct Gmail and Mailto URLs
    const gmailUrl = getDirectGmailUrl(submissionPayload);
    const mailtoUrl = getMailtoUrl(submissionPayload);

    // 3. Directly open their Gmail
    triggerDirectGmail(submissionPayload);

    // 4. Background email service dispatch
    try {
      await sendVolunteerRegistrationEmail(submissionPayload);
    } catch (err) {
      console.warn('Background email log:', err);
    }

    setSubmittedData({
      name: cleanName,
      phone: cleanPhone,
      upazila: upazila || (isEn ? 'Bogura' : 'বগুড়া'),
      bloodGroup: bloodGroup || 'A+',
      interest: interest || t.volunteer.interestDefault,
      mailtoUrl,
      gmailUrl
    });

    setIsSubmitting(false);
    setSubmitted(true);
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-b from-white via-emerald-50/40 to-white border-b border-emerald-100/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2.5 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.volunteer.badge}</span>
            </div>
            <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl text-[#045332] leading-tight">
              {t.volunteer.title}
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            {t.volunteer.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Why Join Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#045332] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="font-serif-bn font-bold text-xl sm:text-2xl text-white">
                  {t.volunteer.cardTitle}
                </h3>
                <p className="text-emerald-100/90 text-sm leading-relaxed font-light">
                  {t.volunteer.cardDesc}
                </p>

                <ul className="space-y-3 pt-2 text-sm text-emerald-100/95">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>{t.volunteer.point1}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>{t.volunteer.point2}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>{t.volunteer.point3}</span>
                  </li>
                </ul>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-emerald-400/20 blur-2xl pointer-events-none" />
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 text-emerald-100" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-solaiman">
                {t.volunteer.note}
              </p>
            </div>
          </div>

          {/* Right Column: In-page Volunteer Registration Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100/90 shadow-lg">
            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="font-serif-bn font-bold text-2xl text-slate-800 mb-1">
                    {t.volunteer.successTitle} {submittedData?.name || ''}
                  </h3>
                  <p className="text-emerald-700 font-semibold text-sm">
                    {t.volunteer.successSub}
                  </p>
                </div>

                {/* Email Delivery Confirmation Card */}
                <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-4 text-left space-y-2.5 max-w-lg mx-auto">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs sm:text-sm">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{t.volunteer.emailConfirmed}</span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {isEn 
                      ? `Your application details have been saved to official email ${FOUNDATION_INFO.email} and our central volunteer portal.` 
                      : `আপনার সকল তথ্য জিকরুল্লাহ ফাউন্ডেশনের অফিশিয়াল ইমেইল ${FOUNDATION_INFO.email}-এ এবং কেন্দ্রীয় অ্যাডমিন প্যানেলে জমা হয়েছে।`}
                  </p>

                  {submittedData && (
                    <div className="pt-2 border-t border-emerald-200/60 grid grid-cols-2 gap-2 text-[11px] sm:text-xs text-slate-700">
                      <div><span className="text-slate-500">{t.volunteer.nameLabel}:</span> {submittedData.name}</div>
                      <div><span className="text-slate-500">{t.volunteer.phoneLabel}:</span> {submittedData.phone}</div>
                      <div><span className="text-slate-500">{t.volunteer.areaLabel}:</span> {submittedData.upazila}</div>
                      <div><span className="text-slate-500">{t.volunteer.bloodLabel}:</span> {submittedData.bloodGroup}</div>
                    </div>
                  )}
                </div>

                <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                  {submittedData?.gmailUrl && (
                    <a
                      href={submittedData.gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 active:scale-98 text-white text-xs font-bold shadow-md shadow-red-600/20 transition-all cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                      </svg>
                      <span>{isEn ? 'Open in Gmail' : 'সরাসরি জিমেইল (Gmail)-এ পাঠান'}</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmittedData(null);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-white text-slate-700 border border-slate-300 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    {t.volunteer.anotherSubmission}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-2">
                  <h4 className="font-serif-bn font-bold text-lg text-slate-800">
                    {t.volunteer.formTitle}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {t.volunteer.formSubtitle}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.volunteer.nameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.volunteer.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.volunteer.phoneLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="017xxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.volunteer.bloodLabel}
                    </label>
                    <select
                      value={bloodGroup}
                      onChange={(e) => setBloodGroup(e.target.value)}
                      className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 cursor-pointer"
                    >
                      <option value="A+">A+ (Positive)</option>
                      <option value="A-">A- (Negative)</option>
                      <option value="B+">B+ (Positive)</option>
                      <option value="B-">B- (Negative)</option>
                      <option value="O+">O+ (Positive)</option>
                      <option value="O-">O- (Negative)</option>
                      <option value="AB+">AB+ (Positive)</option>
                      <option value="AB-">AB- (Negative)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.volunteer.areaLabel}
                    </label>
                    <input
                      type="text"
                      value={upazila}
                      onChange={(e) => setUpazila(e.target.value)}
                      className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.volunteer.interestLabel}
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 cursor-pointer"
                    >
                      <option value={isEn ? "Relief & Emergency Food Aid" : "ত্রাণ ও খাদ্য সহায়তা বিতরণ"}>
                        {isEn ? "Relief & Emergency Food Aid" : "ত্রাণ ও খাদ্য সহায়তা বিতরণ"}
                      </option>
                      <option value={isEn ? "Free Medical Camp & Care" : "ফ্রি মেডিকেল ক্যাম্প পরিচালনা"}>
                        {isEn ? "Free Medical Camp & Care" : "ফ্রি মেডিকেল ক্যাম্প পরিচালনা"}
                      </option>
                      <option value={isEn ? "Maktab & Education Programs" : "মক্তব ও শিক্ষা কার্যক্রম"}>
                        {isEn ? "Maktab & Education Programs" : "মক্তব ও শিক্ষা কার্যক্রম"}
                      </option>
                      <option value={isEn ? "IT, Media & Communications" : "আইটি, গ্রাফিক্স ও সোশ্যাল মিডিয়া"}>
                        {isEn ? "IT, Media & Communications" : "আইটি, গ্রাফিক্স ও প্রচার"}
                      </option>
                      <option value={isEn ? "General Social Welfare" : "অন্যান্য সামাজিক কাজ"}>
                        {isEn ? "General Social Welfare" : "অন্যান্য সামাজিক কাজ"}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.volunteer.messageLabel}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={t.volunteer.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-950/15 transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t.volunteer.submittingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.volunteer.submitBtn}</span>
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
