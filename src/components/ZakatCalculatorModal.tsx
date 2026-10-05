import React, { useState } from 'react';
import { X, Calculator, HelpCircle, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface ZakatCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToDonate: (zakatAmount: number) => void;
}

export const ZakatCalculatorModal: React.FC<ZakatCalculatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToDonate
}) => {
  const [cash, setCash] = useState<number>(0);
  const [gold, setGold] = useState<number>(0);
  const [silver, setSilver] = useState<number>(0);
  const [businessStock, setBusinessStock] = useState<number>(0);
  const [receivables, setReceivables] = useState<number>(0);
  const [debts, setDebts] = useState<number>(0);

  if (!isOpen) return null;

  // Nisab threshold reference in Bangladesh (approximately 52.5 tola silver ~ approx 90,000 BDT)
  const NISAB_THRESHOLD = 90000;

  const totalAssets = Math.max(0, cash + gold + silver + businessStock + receivables);
  const netZakatable = Math.max(0, totalAssets - debts);
  const isEligible = netZakatable >= NISAB_THRESHOLD;
  const zakatPayable = isEligible ? Math.round(netZakatable * 0.025) : 0;

  const handleDonateZakat = () => {
    onProceedToDonate(zakatPayable > 0 ? zakatPayable : 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-emerald-100 overflow-hidden relative my-6 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#045332] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-serif-bn font-bold text-xl leading-tight">
                শরী‘আহসম্মত যাকাত ক্যালকুলেটর
              </h3>
              <p className="text-xs text-emerald-200 font-light">
                আপনার বার্ষিক যাকাতের সঠিক হিসাব বের করুন (২.৫%)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          
          {/* Nisab Info Callout */}
          <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 mb-5 flex items-start gap-3 text-xs text-emerald-900">
            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong>নেসাব সংক্রান্ত নির্দেশনা:</strong> রূপার নেসাব (৫২.৫ তোলা) অনুযায়ী বর্তমানে প্রায় <strong>৳ ৯০,০০০</strong> বা তদূর্ধ্ব পরিমাণ সম্পদ এক বছর স্থায়ী থাকলে ২.৫% হারে যাকাত প্রদান ফরজ।
            </div>
          </div>

          <div className="space-y-3.5 mb-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ১. নগদ টাকা ও ব্যাংক ব্যালেন্স (হাতে, একাউন্টে বা ডিপিএস)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold text-sm">৳</span>
                <input
                  type="number"
                  min="0"
                  placeholder="০"
                  value={cash || ''}
                  onChange={(e) => setCash(Number(e.target.value))}
                  className="w-full pl-8 pr-3 py-2 bg-[#fafcfb] border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ২. স্বর্ণের বর্তমান মূল্য (টাকায়)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold text-sm">৳</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="০"
                    value={gold || ''}
                    onChange={(e) => setGold(Number(e.target.value))}
                    className="w-full pl-8 pr-3 py-2 bg-[#fafcfb] border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ৩. রূপার বর্তমান মূল্য (টাকায়)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold text-sm">৳</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="০"
                    value={silver || ''}
                    onChange={(e) => setSilver(Number(e.target.value))}
                    className="w-full pl-8 pr-3 py-2 bg-[#fafcfb] border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ৪. ব্যবসায়ী মালামাল ও মজুদ পণ্যের মূল্য
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold text-sm">৳</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="০"
                    value={businessStock || ''}
                    onChange={(e) => setBusinessStock(Number(e.target.value))}
                    className="w-full pl-8 pr-3 py-2 bg-[#fafcfb] border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ৫. পাওনা টাকা (উদ্ধারযোগ্য)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold text-sm">৳</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="০"
                    value={receivables || ''}
                    onChange={(e) => setReceivables(Number(e.target.value))}
                    className="w-full pl-8 pr-3 py-2 bg-[#fafcfb] border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-rose-700 mb-1">
                ৬. বাদ যাবে: তাৎক্ষণিক প্রদেয় ঋণ বা দেনা
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-rose-400 font-bold text-sm">৳</span>
                <input
                  type="number"
                  min="0"
                  placeholder="০"
                  value={debts || ''}
                  onChange={(e) => setDebts(Number(e.target.value))}
                  className="w-full pl-8 pr-3 py-2 bg-rose-50/30 border border-rose-200 rounded-xl text-sm font-mono focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-[#f7fbf8] border border-emerald-200 rounded-2xl p-5 mb-5">
            <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5">
              <span>মোট সম্পদ:</span>
              <span className="font-mono tabular-nums font-semibold">৳ {totalAssets.toLocaleString('bn-BD')}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-600 mb-2 pb-2 border-b border-emerald-100">
              <span>কর্তনযোগ্য ঋণ:</span>
              <span className="font-mono tabular-nums font-semibold text-rose-600">- ৳ {debts.toLocaleString('bn-BD')}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-800 mb-2">
              <span className="font-semibold">যাকাতযোগ্য নিট সম্পদ:</span>
              <span className="font-mono tabular-nums font-bold text-sm">৳ {netZakatable.toLocaleString('bn-BD')}</span>
            </div>

            <div className="pt-2 border-t border-emerald-200 flex items-center justify-between">
              <div>
                <span className="block text-xs font-bold text-[#045332]">
                  ফরজ যাকাতের পরিমাণ (২.৫%):
                </span>
                <span className="text-[11px] text-slate-500">
                  {isEligible ? 'নেসাব পূর্ণ হয়েছে' : 'নেসাব স্পর্শ করেনি'}
                </span>
              </div>
              <span className="font-mono tabular-nums font-bold text-2xl text-[#087443]">
                ৳ {zakatPayable.toLocaleString('bn-BD')}
              </span>
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={handleDonateZakat}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#087443] hover:bg-[#045332] active:scale-98 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <span>এই যাকাত ফাউন্ডেশনে দান করুন</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </div>
  );
};
