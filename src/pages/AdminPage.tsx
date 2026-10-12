import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  Mail,
  Key,
  Eye,
  EyeOff,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Info,
  UserCheck,
  Database
} from 'lucide-react';
import { AboutAdminPanel } from '../components/AboutAdminPanel';

export const ADMIN_AUTH_CONFIG = {
  email: 'hafijurrahmansiddik69@gmail.com',
  password: 'hafizur@902'
};

const STORAGE_KEY = 'zikrullah_admin_session_auth';

interface AdminPageProps {
  onBackToHome: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onBackToHome }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      const cleanEmail = emailInput.trim().toLowerCase();
      const cleanPass = passwordInput.trim();

      if (
        cleanEmail === ADMIN_AUTH_CONFIG.email.toLowerCase() &&
        cleanPass === ADMIN_AUTH_CONFIG.password
      ) {
        try {
          sessionStorage.setItem(STORAGE_KEY, 'true');
        } catch (err) {
          console.error(err);
        }
        setIsAuthenticated(true);
        setErrorMessage('');
      } else {
        setErrorMessage(
          'ভুল ইমেইল বা পাসওয়ার্ড! অনুগ্রহ করে অনুমোদিত ইমেইল ও পাসওয়ার্ড প্রদান করুন।'
        );
      }
      setIsSubmitting(false);
    }, 200);
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error(err);
    }
    setIsAuthenticated(false);
    setPasswordInput('');
    setErrorMessage('');
  };

  const handleAutofill = () => {
    setEmailInput(ADMIN_AUTH_CONFIG.email);
    setPasswordInput(ADMIN_AUTH_CONFIG.password);
    setErrorMessage('');
  };

  // If already authenticated, show the full Admin Data Panel
  if (isAuthenticated) {
    return (
      <div className="bg-[#f4f7f5] min-h-screen py-6 sm:py-10 text-slate-800 font-sans-bn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Breadcrumb & Status Navigation Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-white p-4 sm:p-5 rounded-2xl border border-emerald-100 shadow-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs sm:text-sm font-semibold border border-slate-200 transition-all cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-4 h-4 text-emerald-700" />
                <span>মূল ওয়েবসাইটে ফিরে যান</span>
              </button>

              <div className="h-5 w-px bg-slate-200 hidden sm:block"></div>

              <div className="text-xs text-slate-500 font-medium">
                <span className="text-emerald-700 cursor-pointer hover:underline" onClick={onBackToHome}>হোম</span>
                <span className="mx-2">/</span>
                <span className="text-slate-800 font-bold">অ্যাডমিন ড্যাশবোর্ড</span>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-sans text-[11px] sm:text-xs truncate max-w-[200px] sm:max-w-none">
                  {ADMIN_AUTH_CONFIG.email}
                </span>
                <span className="text-[10px] bg-emerald-700 text-white px-2 py-0.5 rounded-full">লগইনরত</span>
              </div>
            </div>
          </div>

          {/* Full Admin Data Management Panel */}
          <AboutAdminPanel
            isOpen={true}
            isControlled={true}
            isStandalonePage={true}
            onBackToHome={onBackToHome}
            onLogout={handleLogout}
            adminEmail={ADMIN_AUTH_CONFIG.email}
            badgeText="ইউজার ও ডোনেশন ডেটাবেজ"
            titleText="কেন্দ্রীয় অ্যাডমিন প্যানেল"
          />
        </div>
      </div>
    );
  }

  // If not authenticated, render Login Form
  return (
    <div className="bg-[#f0f4f1] min-h-screen py-10 sm:py-16 text-slate-800 font-sans-bn flex flex-col justify-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 w-full">
        
        {/* Back to Home Button */}
        <div className="mb-6 flex justify-between items-center">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs sm:text-sm font-semibold border border-emerald-200/80 shadow-xs transition-all cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-700" />
            <span>মূল ওয়েবসাইটে ফিরে যান</span>
          </button>

          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full font-medium">
            <Lock className="w-3.5 h-3.5 text-emerald-700" />
            সুরক্ষিত পেইজ
          </span>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl border border-emerald-200/90 shadow-xl overflow-hidden p-6 sm:p-8">
          
          {/* Header Icon & Title */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#087443] to-[#045332] text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-950/20">
              <ShieldCheck className="w-9 h-9 text-emerald-300" />
            </div>
            <h1 className="font-serif-bn font-bold text-2xl text-slate-900 tracking-tight">
              অ্যাডমিন প্রবেশদ্বার
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-solaiman">
              ইউজারদের সংগৃহীত অনুদান ও খেদমতে শরিকদের ডেটাবেজে প্রবেশের জন্য লগইন করুন
            </p>
          </div>

          {/* Credentials Info Helper Card */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-3.5 mb-6 text-xs text-emerald-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed flex-1">
              <p className="font-semibold text-emerald-950">অনুমোদিত অ্যাডমিন তথ্য:</p>
              <p className="font-sans text-[11px] text-emerald-800 mt-0.5">
                ইমেইল: <strong className="select-all">{ADMIN_AUTH_CONFIG.email}</strong>
              </p>
              <p className="font-sans text-[11px] text-emerald-800">
                পাসওয়ার্ড: <strong className="select-all">{ADMIN_AUTH_CONFIG.password}</strong>
              </p>
            </div>
            <button
              type="button"
              onClick={handleAutofill}
              className="px-2.5 py-1 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-semibold transition-all shadow-xs cursor-pointer active:scale-95 shrink-0"
              title="তথ্য স্বয়ংক্রিয়ভাবে ইনপুটে বসান"
            >
              অটো-পূরণ
            </button>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-xl p-3 mb-5 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                অ্যাডমিন ইমেইল
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4 text-emerald-700" />
                </div>
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="hafijurrahmansiddik69@gmail.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-hidden text-sm font-sans transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                পাসওয়ার্ড
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Key className="w-4 h-4 text-emerald-700" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-hidden text-sm font-sans transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  title={showPassword ? 'পাসওয়ার্ড লুকান' : 'পাসওয়ার্ড দেখুন'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#087443] to-[#045332] hover:from-[#065f37] hover:to-[#034428] text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-950/20 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2 border border-emerald-500/30 disabled:opacity-70"
            >
              <Lock className="w-4 h-4 text-emerald-200" />
              <span>{isSubmitting ? 'যাচাই করা হচ্ছে...' : 'লগইন করুন'}</span>
            </button>
          </form>

          {/* Footer Assistance */}
          <div className="mt-6 pt-5 border-t border-slate-100 text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono">
              <Database className="w-3.5 h-3.5 text-amber-500" />
              <span>Firebase: zikrullah-60dfe</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-xs text-slate-500 font-solaiman">
              জিকরুল্লাহ ইসলামিক সমাজকল্যাণ সংস্থা — গোপনীয় প্রশাসনিক কন্ট্রোল
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
