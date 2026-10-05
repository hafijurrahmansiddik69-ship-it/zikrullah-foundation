import React, { useState, useEffect } from 'react';
import { X, Heart, Check, Copy, Printer, CheckCircle, ArrowRight, ShieldCheck, Building2, Phone } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialAmount?: number;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'সাধারণ সদকা ও দান',
  initialAmount = 1000
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [amount, setAmount] = useState<number>(initialAmount);
  const [customAmountStr, setCustomAmountStr] = useState<string>(initialAmount ? initialAmount.toString() : '');
  const [category, setCategory] = useState<string>(initialCategory);
  const [paymentMethod, setPaymentMethod] = useState<'bkash' | 'nagad' | 'rocket' | 'bank'>('bkash');
  
  // Donor Details
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [trxId, setTrxId] = useState('');
  const [donorMessage, setDonorMessage] = useState('');
  const [copiedText, setCopiedText] = useState('');

  // Generated receipt
  const [receiptNumber, setReceiptNumber] = useState('');
  const [donationDate, setDonationDate] = useState('');

  useEffect(() => {
    if (initialCategory) setCategory(initialCategory);
    if (initialAmount) {
      setAmount(initialAmount);
      setCustomAmountStr(initialAmount.toString());
    }
  }, [initialCategory, initialAmount, isOpen]);

  if (!isOpen) return null;

  const presetAmounts = [500, 1000, 2000, 5000, 10000];

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

  const handleSubmitStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount < 10) return;
    
    // Generate unique receipt
    const randomId = 'ZK-' + Math.floor(100000 + Math.random() * 900000);
    setReceiptNumber(randomId);
    setDonationDate(
      new Date().toLocaleDateString('bn-BD', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    );
    setStep(3);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-emerald-100 overflow-hidden relative my-6 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#045332] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
              <Heart className="w-5 h-5 text-emerald-300 fill-emerald-300" />
            </div>
            <div>
              <h3 className="font-serif-bn font-bold text-xl leading-tight">
                মানবতার সেবায় দান করুন
              </h3>
              <p className="text-xs text-emerald-200 font-light">
                {FOUNDATION_INFO.name} · {FOUNDATION_INFO.slogan}
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
          
          {/* STEP 1: Select Amount & Category */}
          {step === 1 && (
            <div>
              <div className="mb-5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  দানের খাত নির্বাচন করুন
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:border-emerald-600 transition-colors"
                >
                  <option value="সাধারণ সদকা ও দান">সাধারণ সদকা ও দান (General Sadaqah)</option>
                  <option value="যাকাত তহবিল">যাকাত তহবিল (Zakat Fund - Shariah Compliant)</option>
                  <option value="খাদ্য সহায়তা প্রকল্প">হতদরিদ্র পরিবারের খাদ্য সহায়তা (Food Relief)</option>
                  <option value="এতিম ও দরিদ্র শিক্ষা সহায়তা">এতিম ও শিক্ষার্থীদের শিক্ষা উপকরণ (Education)</option>
                  <option value="সুপেয় পানির নলকূপ স্থাপন">সুপেয় পানির গভীর নলকূপ স্থাপন (Clean Water)</option>
                  <option value="ফ্রি চিকিৎসা ও ঔষধ ফান্ড">ফ্রি মেডিকেল ক্যাম্প ও ঔষধ ফান্ড (Healthcare)</option>
                </select>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  দানের পরিমাণ (টাকা)
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
                      ৳ {p.toLocaleString('bn-BD')}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-500 font-bold">৳</span>
                  <input
                    type="number"
                    min="10"
                    placeholder="অন্য পরিমাণ লিখুন..."
                    value={customAmountStr}
                    onChange={handleCustomAmountChange}
                    className="w-full pl-9 pr-4 py-3 bg-[#fafcfb] border border-slate-200 rounded-xl text-slate-900 font-bold text-base focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>

              {/* Summary box */}
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">খাত: <strong className="text-slate-800">{category}</strong></span>
                  <span className="font-bold text-emerald-800 text-lg font-mono tabular-nums">
                    ৳ {amount ? amount.toLocaleString('bn-BD') : '০'}
                  </span>
                </div>
                <p className="text-[11px] text-emerald-800/80 mt-1">
                  * আপনার প্রদানকৃত প্রতিটি অর্থ শতভাগ আমানতদারির সাথে বগুড়ার স্থানীয় দুস্থ ও অসচ্ছল পরিবারে ব্যয় করা হয়।
                </p>
              </div>

              <button
                type="button"
                disabled={!amount || amount < 10}
                onClick={() => setStep(2)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>পরবর্তী ধাপ: পেমেন্ট তথ্য</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Payment Gateway & Details */}
          {step === 2 && (
            <form onSubmit={handleSubmitStep2}>
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  পেমেন্ট মাধ্যম বেছে নিন
                </label>
                <div className="grid grid-cols-4 gap-2">
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
                    <span className="text-[10px]">বিকাশ</span>
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
                    <span className="text-[10px]">নগদ</span>
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
                    <span className="text-[10px]">রকেট</span>
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
                    <span className="text-[10px]">ব্যাংক</span>
                  </button>
                </div>
              </div>

              {/* Payment Instructions Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-5">
                {paymentMethod === 'bkash' && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-slate-600">বিকাশ পার্সোনাল নম্বর:</span>
                      <button
                        type="button"
                        onClick={() => handleCopy('01300389797', 'bkash')}
                        className="text-xs text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedText === 'bkash' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedText === 'bkash' ? 'কপি হয়েছে' : 'কপি করুন'}</span>
                      </button>
                    </div>
                    <div className="font-mono text-base font-bold text-slate-900 bg-white p-2.5 rounded-lg border border-slate-200 tracking-wider text-center mb-2">
                      01300-389797
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      * আপনার বিকাশ অ্যাপ থেকে <strong>Send Money</strong> করুন। রেফারেন্সে আপনার নাম বা <strong>ZF</strong> লিখুন।
                    </p>
                  </div>
                )}

                {paymentMethod === 'nagad' && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-slate-600">নগদ পার্সোনাল নম্বর:</span>
                      <button
                        type="button"
                        onClick={() => handleCopy('01300389797', 'nagad')}
                        className="text-xs text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedText === 'nagad' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedText === 'nagad' ? 'কপি হয়েছে' : 'কপি করুন'}</span>
                      </button>
                    </div>
                    <div className="font-mono text-base font-bold text-slate-900 bg-white p-2.5 rounded-lg border border-slate-200 tracking-wider text-center mb-2">
                      01300-389797
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      * নগদ অ্যাপ বা ইউএসএসডি কোড থেকে <strong>Send Money</strong> করুন।
                    </p>
                  </div>
                )}

                {paymentMethod === 'rocket' && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-slate-600">রকেট নম্বর:</span>
                      <button
                        type="button"
                        onClick={() => handleCopy('013003897972', 'rocket')}
                        className="text-xs text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedText === 'rocket' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedText === 'rocket' ? 'কপি হয়েছে' : 'কপি করুন'}</span>
                      </button>
                    </div>
                    <div className="font-mono text-base font-bold text-slate-900 bg-white p-2.5 rounded-lg border border-slate-200 tracking-wider text-center mb-2">
                      01300-389797-2
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      * রকেট থেকে <strong>Send Money</strong> করুন।
                    </p>
                  </div>
                )}

                {paymentMethod === 'bank' && (
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <p><strong>ব্যাংক:</strong> {FOUNDATION_INFO.bankDetails.bankName}</p>
                    <p><strong>শাখা:</strong> {FOUNDATION_INFO.bankDetails.branch}</p>
                    <p><strong>হিসাবের নাম:</strong> {FOUNDATION_INFO.bankDetails.accountName}</p>
                    <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200 mt-1">
                      <span className="font-mono font-bold text-slate-900">{FOUNDATION_INFO.bankDetails.accountNumber}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(FOUNDATION_INFO.bankDetails.accountNumber, 'bank')}
                        className="text-xs text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedText === 'bank' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedText === 'bank' ? 'কপি হয়েছে' : 'কপি'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Donor Form Inputs */}
              <div className="space-y-3 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    আপনার পূর্ণ নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="উদাঃ মোঃ হাফিজুর রহমান"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      মোবাইল নম্বর <span className="text-red-500">*</span>
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
                      ট্রানজেকশন আইডি (TrxID) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="উদাঃ 9H7B3XK91"
                      value={trxId}
                      onChange={(e) => setTrxId(e.target.value)}
                      className="w-full bg-[#fafcfb] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-mono focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    বিশেষ কোনো দোয়া বা বার্তা (ঐচ্ছিক)
                  </label>
                  <input
                    type="text"
                    placeholder="মৃত পিতামাতার মাগফিরাত কামনা / নেক হায়াত..."
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
                  পূর্ববর্তী
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3 px-6 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>দান সম্পন্ন করুন এবং রসিদ পান</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Generated Receipt */}
          {step === 3 && (
            <div className="text-center py-2">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <h4 className="font-serif-bn font-bold text-2xl text-[#045332] mb-1">
                জাযাকুমুল্লাহু খাইরান!
              </h4>
              <p className="text-xs text-slate-600 mb-6">
                আপনার অনুদান ও সদকা সফলভাবে গ্রহণ করা হয়েছে। মহান আল্লাহ আপনার দানকে কবুল করুন।
              </p>

              {/* Digital Money Receipt */}
              <div className="bg-[#fcfdfa] border-2 border-dashed border-emerald-300 rounded-2xl p-5 text-left mb-6 relative">
                <div className="flex items-center justify-between border-b border-emerald-100 pb-3 mb-3">
                  <div>
                    <strong className="block text-sm font-bold text-emerald-900 font-serif-bn">
                      {FOUNDATION_INFO.name}
                    </strong>
                    <span className="text-[10px] text-slate-500">{FOUNDATION_INFO.address}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 uppercase block">রসিদ নম্বর</span>
                    <span className="text-xs font-mono font-bold text-emerald-800">{receiptNumber}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 mb-3">
                  <div>
                    <span className="text-slate-400 block text-[10px]">দাতা'র নাম:</span>
                    <strong>{donorName || 'সম্মানিত শুভাকাঙ্ক্ষী'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">তারিখ:</span>
                    <strong>{donationDate}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">দানের খাত:</span>
                    <strong>{category}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">পেমেন্ট মাধ্যম / TrxID:</span>
                    <strong className="font-mono">{paymentMethod.toUpperCase()} · {trxId}</strong>
                  </div>
                </div>

                <div className="bg-emerald-50 p-2.5 rounded-xl flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">মোট দানের পরিমাণ:</span>
                  <span className="text-base font-bold text-emerald-800 font-mono tabular-nums">
                    ৳ {amount.toLocaleString('bn-BD')}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>রসিদ প্রিন্ট করুন</span>
                </button>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-[#087443] hover:bg-[#045332] text-white font-bold text-xs shadow-xs cursor-pointer"
                >
                  সমাপ্ত করুন
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
