import React, { useState } from 'react';
import { ArrowRight, Mail, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sendNewsletterSubscriptionEmail } from '../services/emailService';
import { CelebrationConfirmationPopup } from './CelebrationConfirmationPopup';

interface ModalEngagementBlocksProps {
  sourceLabel: string;
  onDonate: () => void;
  onVolunteer: () => void;
  donateLabelBn?: string;
  donateLabelEn?: string;
  volunteerLabelBn?: string;
  volunteerLabelEn?: string;
}

export const ModalEngagementBlocks: React.FC<ModalEngagementBlocksProps> = ({
  sourceLabel,
  onDonate,
  onVolunteer,
  donateLabelBn = 'খেদমতে শরীক হন',
  donateLabelEn = 'Join Khidmat',
  volunteerLabelBn = 'স্বেচ্ছাসেবক হোন',
  volunteerLabelEn = 'Be a Volunteer',
}) => {
  const { isEn } = useLanguage();
  const [contactInput, setContactInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedContact, setSubmittedContact] = useState<string | null>(null);

  const handleSubscribeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleaned = contactInput.trim();
    if (!cleaned || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const existingRaw = localStorage.getItem('zikrullah_newsletter_subscribers');
      const existing: string[] = existingRaw ? JSON.parse(existingRaw) : [];
      if (!existing.includes(cleaned)) {
        localStorage.setItem(
          'zikrullah_newsletter_subscribers',
          JSON.stringify([...existing, cleaned])
        );
      }
    } catch {
      // ignore storage errors
    }

    try {
      await sendNewsletterSubscriptionEmail(cleaned, sourceLabel);
    } catch {
      // gracefully show confirmation even if offline/cors warning
    } finally {
      setIsSubmitting(false);
      setContactInput('');
      setSubmittedContact(cleaned);
    }
  };

  return (
    <>
      <div className="pt-2 space-y-5 font-sans-bn">
        {/* 1. Deep Emerald Green "চলুন একসাথে কাজ করি" Card */}
        <div className="bg-gradient-to-br from-[#043927] via-[#064E3B] to-[#087443] border border-emerald-700/40 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-md text-center">
          <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl text-white mb-2 leading-snug">
            {isEn ? 'Let Us Work Together' : 'চলুন একসাথে কাজ করি'}
          </h3>
          <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto mb-5 sm:mb-6">
            {isEn
              ? 'Your sincere support and voluntary service help transform lives across Bogura and northern Bangladesh.'
              : 'আপনার আন্তরিক সহযোগিতা ও স্বেচ্ছাশ্রম অসহায় মানুষের জীবনে স্থায়ী স্বস্তি ও পরিবর্তন আনতে পারে।'}
          </p>

          <div className="space-y-3">
            <button
              type="button"
              onClick={onDonate}
              className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#b45309] hover:from-[#fcd34d] hover:via-[#f59e0b] hover:to-[#92400e] active:scale-[0.99] text-white font-bold text-sm sm:text-base drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] shadow-lg shadow-amber-950/25 border border-amber-300/40 transition-all cursor-pointer text-center"
            >
              {isEn ? donateLabelEn : donateLabelBn}
            </button>

            <button
              type="button"
              onClick={onVolunteer}
              className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-white hover:bg-emerald-50 active:scale-[0.99] text-[#0F172A] font-bold text-sm sm:text-base transition-all cursor-pointer text-center"
            >
              {isEn ? volunteerLabelEn : volunteerLabelBn}
            </button>
          </div>
        </div>

        {/* 2. Deep Navy Blue Newsletter Subscribe Box */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0e1b4d] via-[#0b1742] to-[#081236] text-white rounded-2xl sm:rounded-3xl px-4 py-8 sm:px-8 sm:py-10 shadow-sm text-center">
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-amber-300/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Top Circular Paper-Plane Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-4 sm:mb-5">
              <Send className="w-5 h-5 sm:w-6 sm:h-6 text-[#FACC15]" />
            </div>

            {/* Centered Heading */}
            <h3 className="font-serif-bn font-bold text-xl sm:text-3xl text-white mb-2.5 leading-snug">
              {isEn
                ? 'Stay Connected for Our Latest Updates'
                : 'আমাদের সর্বশেষ আপডেট পেতে যুক্ত থাকুন'}
            </h3>

            {/* Centered Subtitle */}
            <p className="text-slate-200/90 text-xs sm:text-base leading-relaxed max-w-xl mx-auto mb-6 sm:mb-7">
              {isEn
                ? 'Subscribe with your mobile number or email to receive regular updates on our charitable activities, field reports, and public welfare initiatives first.'
                : 'আমাদের সেবামূলক কার্যক্রম, মাঠপর্যায়ের প্রতিবেদন ও জনকল্যাণমূলক উদ্যোগের নিয়মিত আপডেট সবার আগে পেতে আপনার মোবাইল নাম্বার অথবা ইমেইল দিয়ে সাবস্ক্রাইব করুন।'}
            </p>

            <form
              onSubmit={handleSubscribeSubmit}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex items-stretch shadow-xl max-w-2xl mx-auto border border-white/20"
            >
              <div className="flex-1 flex items-center pl-3 sm:pl-5 min-w-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  name="contact"
                  required
                  value={contactInput}
                  onChange={(e) => setContactInput(e.target.value)}
                  placeholder={
                    isEn
                      ? 'Email or phone number ...'
                      : 'ইমেইল বা ফোন নাম্বার দিন ...'
                  }
                  aria-label={isEn ? 'Email or phone number' : 'ইমেইল বা ফোন নাম্বার'}
                  className="w-full px-2.5 sm:px-3.5 py-3.5 sm:py-4 text-xs sm:text-base text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none min-w-0"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-7 py-3.5 sm:py-4 bg-[#059669] hover:bg-[#047857] active:bg-[#065f46] disabled:opacity-75 text-white font-bold text-xs sm:text-base transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>
                  {isSubmitting
                    ? isEn
                      ? 'Sending...'
                      : 'পাঠানো হচ্ছে...'
                    : isEn
                      ? 'Subscribe'
                      : 'সাবস্ক্রাইব করুন'}
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </form>

            <p className="mt-4 text-[11px] sm:text-xs text-slate-300/80 text-center">
              {isEn
                ? '* We are committed to protecting your privacy.'
                : '* আমরা আপনার তথ্যের গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ।'}
            </p>
          </div>
        </div>
      </div>

      {/* Joyful Floating Hearts Confirmation Popup on Subscribe */}
      {submittedContact && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto"
          onClick={(e) => {
            e.stopPropagation();
            setSubmittedContact(null);
          }}
        >
          <CelebrationConfirmationPopup
            displayName={submittedContact}
            isEn={isEn}
            onClose={() => setSubmittedContact(null)}
          />
        </div>
      )}
    </>
  );
};
