import React, { useState, useEffect } from 'react';
import { X, Heart, Check, Copy, Printer, ArrowRight, Building2, Send, Loader2, Sparkles } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';
import { adminDataService } from '../services/adminDataService';
import { DONATION_CATEGORIES, resolveDonationCategoryId } from '../data/donationCategories';
import { useLanguage } from '../context/LanguageContext';
import { 
  triggerDirectEmailForDonation, 
  sendDonationEmail, 
  DonationSubmissionData 
} from '../services/emailService';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialAmount?: number;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'general-sadaqah',
  initialAmount = 1000
}) => {
  const { lang, isEn, t } = useLanguage();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [amount, setAmount] = useState<number>(initialAmount);
  const [customAmountStr, setCustomAmountStr] = useState<string>(initialAmount ? initialAmount.toString() : '');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(() => resolveDonationCategoryId(initialCategory));
  const [paymentMethod, setPaymentMethod] = useState<'bkash' | 'nagad' | 'rocket' | 'bank'>('bkash');
  
  // Donor Details
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [trxId, setTrxId] = useState('');
  const [donorMessage, setDonorMessage] = useState('');
  const [copiedText, setCopiedText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generated receipt
  const [receiptNumber, setReceiptNumber] = useState('');
  const [donationDate, setDonationDate] = useState('');

  const activeCategory = DONATION_CATEGORIES.find((c) => c.id === selectedCategoryId) || DONATION_CATEGORIES[0];
  const currentCategoryName = isEn ? activeCategory.en : activeCategory.bn;

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategoryId(resolveDonationCategoryId(initialCategory));
    }
    if (initialAmount) {
      setAmount(initialAmount);
      setCustomAmountStr(initialAmount.toString());
    }
  }, [initialCategory, initialAmount, isOpen]);

  if (!isOpen) return null;

  const presetAmounts = [20, 50, 100, 500, 1000];

  const handleSelectPreset = (val: number) => {
    setAmount(val);
    setCustomAmountStr(val.toString());
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmountStr(val);
    const parsed = parseInt(val, 10);
    setAmount(isNaN(parsed) ? 0 : parsed);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const handleSubmitStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount < 10) return;
    
    setIsSubmitting(true);

    // Generate unique receipt
    const randomId = 'ZK-' + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleDateString(isEn ? 'en-US' : 'bn-BD', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    setReceiptNumber(randomId);
    setDonationDate(dateStr);

    const submissionCategory = isEn 
      ? `${activeCategory.en} (${activeCategory.bn})` 
      : `${activeCategory.bn} (${activeCategory.en})`;

    const donationData: DonationSubmissionData = {
      receiptId: randomId,
      donorName: donorName.trim() || (isEn ? 'Respected Well-wisher' : 'সম্মানিত শুভাকাঙ্ক্ষী'),
      phone: donorPhone.trim() || (isEn ? 'Not specified' : 'অনুল্লেখিত'),
      amount: amount,
      category: submissionCategory,
      paymentMethod: paymentMethod,
      transactionId: trxId.trim() || 'N/A',
      donorMessage: donorMessage.trim() || '',
      date: dateStr
    };

    // Save to admin database
    adminDataService.addDonation({
      id: randomId,
      donorName: donationData.donorName,
      phone: donationData.phone,
      amount: amount,
      category: submissionCategory,
      paymentMethod: paymentMethod,
      transactionId: donationData.transactionId,
      donorMessage: donationData.donorMessage,
      date: dateStr,
      status: 'অপেক্ষমাণ',
      adminNote: isEn ? 'Submitted via Online Donation Modal' : 'অনলাইন ডোনেশন মডাল থেকে জমাকৃত'
    });

    // Open mobile mail app or Gmail
    triggerDirectEmailForDonation(donationData);

    // Background delivery to foundation email
    try {
      await sendDonationEmail(donationData);
    } catch (err) {
      console.warn('Background donation email notification:', err);
    }

    setIsSubmitting(false);
    setStep(3);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  const displayDonorName = donorName.trim() || (isEn ? 'Respected Well-wisher' : 'সম্মানিত শুভাকাঙ্ক্ষী');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/65 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={step === 3 ? resetAndClose : undefined}
    >
      {step === 3 ? (
        /* STEP 3: Clean Emerald & Gold Confirmation Popup with Compact Receipt */
        <div
          className="relative bg-white rounded-[28px] w-full max-w-[390px] sm:max-w-[450px] border-2 border-[#087443]/30 ring-4 ring-emerald-500/10 shadow-[0_22px_55px_-12px_rgba(4,83,50,0.34),0_0_28px_rgba(217,119,6,0.18)] overflow-hidden my-auto text-slate-800 animate-celebration-pop"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Emerald & Gold Accent Bar */}
          <div className="h-2 bg-gradient-to-r from-[#045332] via-[#087443] to-[#d97706]" />

          {/* Subtle Ambient Emerald-Gold Top Glow */}
          <div className="absolute top-2 inset-x-0 h-28 bg-gradient-to-b from-emerald-50/75 via-amber-50/25 to-transparent pointer-events-none" />

          {/* Close X Button */}
          <button
            type="button"
            onClick={resetAndClose}
            className="absolute top-4 right-4 p-2 rounded-full text-[#045332]/65 hover:text-[#045332] hover:bg-emerald-50 transition-colors cursor-pointer z-10"
            aria-label={t.donationModal.close}
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>

          <div className="relative z-10 px-5 pt-7 pb-6 sm:px-7 sm:pt-8 sm:pb-7 text-center flex flex-col items-center">
            {/* Emerald Gradient Checkmark Circle with Gold Border & Decorative Sparkles */}
            <div className="relative mb-4 flex items-center justify-center">
              <div className="absolute -inset-2 rounded-full bg-emerald-400/20 blur-md animate-pulse pointer-events-none" />
              <Sparkles className="w-4 h-4 text-[#d97706] absolute -top-1.5 -right-3.5 animate-sparkle-drift pointer-events-none" />
              <Sparkles
                className="w-3.5 h-3.5 text-[#10b981] absolute -bottom-1 -left-3.5 animate-sparkle-drift pointer-events-none"
                style={{ animationDelay: '0.8s' }}
              />
              <div className="relative w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full bg-gradient-to-br from-[#10b981] via-[#087443] to-[#045332] border-2 border-[#e6b84c] text-white flex items-center justify-center shadow-[0_10px_26px_rgba(4,83,50,0.38),0_0_18px_rgba(217,119,6,0.28)]">
                <Check className="w-8 h-8 sm:w-9 sm:h-9 stroke-[3] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
              </div>
            </div>

            {/* Dynamic Thank You Heading */}
            <h4 className="font-serif-bn font-bold text-[22px] sm:text-[26px] text-[#045332] mb-3.5 tracking-tight leading-snug">
              {isEn ? `Thank You, ${displayDonorName}!` : `ধন্যবাদ, ${displayDonorName}!`}
            </h4>

            {/* Soft Gold-Emerald Arabic Blessing Badge */}
            <div className="mb-4 inline-flex items-center justify-center px-6 py-1.5 sm:py-2 rounded-2xl bg-gradient-to-r from-emerald-50/90 via-amber-50/80 to-emerald-50/90 border border-[#d97706]/45 shadow-[0_2px_10px_rgba(217,119,6,0.1)]">
              <span
                dir="rtl"
                lang="ar"
                className="font-cairo text-lg sm:text-xl text-[#045332] font-semibold tracking-normal leading-[1.75] select-text"
                style={{ fontFamily: "'Cairo', 'Amiri', sans-serif" }}
              >
                جَزَاكَ اللَّهُ خَيْرًا
              </span>
            </div>

            {/* Two-Sentence Spacious Gratitude Copy */}
            <div className="font-solaiman text-[#2b3330] text-[15px] sm:text-base leading-[1.68] max-w-[350px] mx-auto space-y-3 mb-5">
              <p>
                {isEn
                  ? 'Heartfelt gratitude for your noble contribution for the welfare of humanity.'
                  : 'মানবতার কল্যাণে আপনার এই মহৎ সহযোগিতার জন্য আন্তরিক কৃতজ্ঞতা।'}
              </p>
              <p>
                {isEn
                  ? 'May Almighty Allah accept your donation and bless you abundantly.'
                  : 'মহান আল্লাহ আপনার দান কবুল করুন ও বরকত দিন।'}
              </p>
            </div>

            {/* Compact Receipt Summary */}
            <div className="w-full bg-[#fafcf9] border border-emerald-200/90 rounded-2xl p-3.5 sm:p-4 text-left mb-5 shadow-2xs">
              <div className="flex items-center justify-between border-b border-emerald-100 pb-2.5 mb-2.5 gap-2">
                <div className="min-w-0">
                  <strong className="block text-xs sm:text-sm font-bold text-[#045332] font-serif-bn truncate">
                    {isEn ? FOUNDATION_INFO.englishName : FOUNDATION_INFO.name}
                  </strong>
                  <span className="text-[10px] text-slate-500 block truncate">
                    {currentCategoryName}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-slate-500 block">{t.donationModal.receiptNo}</span>
                  <span className="text-xs font-mono font-bold text-[#087443]">{receiptNumber}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-700 mb-3">
                <div>
                  <span className="text-slate-400 block text-[10px]">{t.donationModal.date}</span>
                  <strong className="font-semibold text-slate-800">{donationDate}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">{t.donationModal.methodTrx}</span>
                  <strong className="font-mono font-semibold text-slate-800 break-all">
                    {paymentMethod.toUpperCase()} · {trxId || 'N/A'}
                  </strong>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-amber-50/70 border border-emerald-200/70 px-3 py-2 rounded-xl flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">{t.donationModal.totalDonation}</span>
                <span className="text-base font-bold text-[#045332] font-mono tabular-nums">
                  ৳ {isEn ? amount.toLocaleString('en-US') : amount.toLocaleString('bn-BD')}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-2.5 w-full">
              <button
                type="button"
                onClick={() => window.print()}
                className="sm:flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-full border border-emerald-300/90 bg-white hover:bg-emerald-50/70 active:scale-[0.98] text-[#045332] font-sans-bn font-semibold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#087443]" />
                <span>{isEn ? 'Print Receipt' : 'রসিদ প্রিন্ট করুন'}</span>
              </button>

              <button
                type="button"
                onClick={resetAndClose}
                className="sm:flex-1 inline-flex items-center justify-center py-3 px-6 rounded-full bg-gradient-to-r from-[#045332] via-[#087443] to-[#059669] hover:from-[#034227] hover:via-[#045332] hover:to-[#087443] active:scale-[0.98] text-white font-sans-bn font-bold text-sm shadow-md shadow-emerald-900/20 border border-[#d97706]/30 transition-all cursor-pointer"
              >
                {isEn ? 'OK' : 'ঠিক আছে'}
              </button>
            </div>
          </div>
        </div>
      ) : (
      <div
        className="bg-white rounded-2xl sm:rounded-3xl max-w-xl w-full shadow-2xl border border-emerald-100 overflow-hidden relative my-auto sm:my-6 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#045332] text-white px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 fill-emerald-300" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif-bn font-bold text-lg sm:text-xl leading-tight truncate">
                {t.donationModal.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-emerald-200 font-solaiman tracking-wide font-light truncate">
                {isEn ? FOUNDATION_INFO.englishName : FOUNDATION_INFO.name} · {t.donationModal.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer shrink-0 ml-2"
            aria-label={t.donationModal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-7 max-h-[82vh] overflow-y-auto">
          
          {/* STEP 1: Select Amount & Category */}
          {step === 1 && (
            <div>
              <div className="mb-5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {t.donationModal.categoryLabel}
                </label>
                <select
                  value={selectedCategoryId}
                  onChange={(e) => setSelectedCategoryId(e.target.value)}
                  className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:border-emerald-600 transition-colors cursor-pointer"
                >
                  {DONATION_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {isEn ? cat.en : cat.bn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {t.donationModal.amountLabel}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                  {presetAmounts.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => handleSelectPreset(p)}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer font-mono tabular-nums ${
                        amount === p
                          ? 'bg-[#087443] text-white border-[#087443] shadow-xs'
                          : 'bg-[#fafcfb] text-slate-700 border-slate-200 hover:border-emerald-400'
                      }`}
                    >
                      ৳ {isEn ? p.toLocaleString('en-US') : p.toLocaleString('bn-BD')}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-500 font-bold">৳</span>
                  <input
                    type="number"
                    min="10"
                    placeholder={t.donationModal.otherAmount}
                    value={customAmountStr}
                    onChange={handleCustomAmountChange}
                    className="w-full pl-9 pr-4 py-3 bg-[#fafcfb] border border-slate-200 rounded-xl text-slate-900 font-bold text-base focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>

              {/* Summary box */}
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">
                    {t.donationModal.summaryCategory} <strong className="text-slate-800">{currentCategoryName}</strong>
                  </span>
                  <span className="font-bold text-emerald-800 text-lg font-mono tabular-nums">
                    ৳ {amount ? (isEn ? amount.toLocaleString('en-US') : amount.toLocaleString('bn-BD')) : (isEn ? '0' : '০')}
                  </span>
                </div>
                <p className="text-[11px] text-emerald-800/80 mt-1">
                  {t.donationModal.summaryNote}
                </p>
              </div>

              <button
                type="button"
                disabled={!amount || amount < 10}
                onClick={() => setStep(2)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>{t.donationModal.nextBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Payment Gateway & Details */}
          {step === 2 && (
            <form onSubmit={handleSubmitStep2}>
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {t.donationModal.paymentMethodLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bkash')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      paymentMethod === 'bkash'
                        ? 'border-[#D12053] bg-[#D12053]/10 text-[#D12053] ring-2 ring-[#D12053]/30'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-sm font-bold">bKash</span>
                    <span className="text-[10px]">{t.donationModal.bkash}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('nagad')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      paymentMethod === 'nagad'
                        ? 'border-[#F7931E] bg-[#F7931E]/10 text-[#c8700a] ring-2 ring-[#F7931E]/30'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-sm font-bold">Nagad</span>
                    <span className="text-[10px]">{t.donationModal.nagad}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('rocket')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      paymentMethod === 'rocket'
                        ? 'border-[#8B237F] bg-[#8B237F]/10 text-[#8B237F] ring-2 ring-[#8B237F]/30'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-sm font-bold">Rocket</span>
                    <span className="text-[10px]">{t.donationModal.rocket}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      paymentMethod === 'bank'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-600/30'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span className="text-[10px]">{t.donationModal.bank}</span>
                  </button>
                </div>
              </div>

              {/* Payment Instructions Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-5">
                {paymentMethod === 'bkash' && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-slate-600">
                        {isEn ? 'bKash Personal Number:' : 'বিকাশ পার্সোনাল নম্বর:'}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy('01620500920', 'bkash')}
                        className="text-xs text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedText === 'bkash' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedText === 'bkash' ? t.donationModal.copied : t.donationModal.copyNumber}</span>
                      </button>
                    </div>
                    <div className="font-mono text-base font-bold text-slate-900 bg-white p-2.5 rounded-lg border border-slate-200 tracking-wider text-center mb-2">
                      016 20 500 920
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {isEn 
                        ? '* Use "Send Money" from your bKash app. Enter your name or ZF in reference.' 
                        : '* আপনার বিকাশ অ্যাপ থেকে Send Money করুন। রেফারেন্সে আপনার নাম বা ZF লিখুন।'}
                    </p>
                  </div>
                )}

                {paymentMethod === 'nagad' && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-slate-600">
                        {isEn ? 'Nagad Personal Number:' : 'নগদ পার্সোনাল নম্বর:'}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy('01620500920', 'nagad')}
                        className="text-xs text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedText === 'nagad' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedText === 'nagad' ? t.donationModal.copied : t.donationModal.copyNumber}</span>
                      </button>
                    </div>
                    <div className="font-mono text-base font-bold text-slate-900 bg-white p-2.5 rounded-lg border border-slate-200 tracking-wider text-center mb-2">
                      016 20 500 920
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {isEn 
                        ? '* Use "Send Money" from your Nagad app or USSD code.' 
                        : '* নগদ অ্যাপ বা ইউএসএসডি কোড থেকে Send Money করুন।'}
                    </p>
                  </div>
                )}

                {paymentMethod === 'rocket' && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-slate-600">
                        {isEn ? 'Rocket Number:' : 'রকেট নম্বর:'}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy('016205009202', 'rocket')}
                        className="text-xs text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedText === 'rocket' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedText === 'rocket' ? t.donationModal.copied : t.donationModal.copyNumber}</span>
                      </button>
                    </div>
                    <div className="font-mono text-base font-bold text-slate-900 bg-white p-2.5 rounded-lg border border-slate-200 tracking-wider text-center mb-2">
                      016 20 500 920-2
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {isEn 
                        ? '* Use "Send Money" from Rocket.' 
                        : '* রকেট থেকে Send Money করুন।'}
                    </p>
                  </div>
                )}

                {paymentMethod === 'bank' && (
                  <div className="text-center py-6 text-slate-600 bg-white p-4 rounded-xl border border-slate-200">
                    <Building2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <p className="font-bold text-sm text-slate-800">Coming soon ...</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {isEn ? 'Bank transfer option will be available soon.' : 'ব্যাংক ট্রান্সফার সুবিধা খুব শীঘ্রই আসছে।'}
                    </p>
                  </div>
                )}
              </div>

              {/* Donor Form Inputs */}
              <div className="space-y-3 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.donationModal.nameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.donationModal.namePlaceholder}
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.donationModal.phoneLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="017XXXXXXXX"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.donationModal.trxLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.donationModal.trxPlaceholder}
                      value={trxId}
                      onChange={(e) => setTrxId(e.target.value)}
                      className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-mono focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.donationModal.msgLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.donationModal.msgPlaceholder}
                    value={donorMessage}
                    onChange={(e) => setDonorMessage(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  {t.donationModal.prevBtn}
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-3 sm:px-6 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t.donationModal.submittingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.donationModal.submitBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
      )}
    </div>
  );
};
