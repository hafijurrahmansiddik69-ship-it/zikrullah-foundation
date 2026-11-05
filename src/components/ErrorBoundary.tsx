import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RotateCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  private handleReload = () => {
    try {
      if ('caches' in window) {
        caches.keys().then((names) => {
          for (const name of names) caches.delete(name);
        });
      }
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const registration of registrations) {
            registration.unregister();
          }
        });
      }
    } catch {
      // ignore
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#fafcfb] flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-xl text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
              <AlertTriangle className="w-8 h-8 text-emerald-600" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif-bn font-bold text-xl sm:text-2xl text-[#045332]">
                জিকরুল্লাহ ফাউন্ডেশন
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-solaiman">
                পৃষ্ঠাটি লোড হতে কিছুটা সমস্যা হয়েছে। অনুগ্রহ করে পেজটি রিফ্রেশ বা রিলোড করুন।
              </p>
            </div>

            <button
              onClick={this.handleReload}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#087443] hover:bg-[#045332] active:scale-95 text-white font-bold text-sm shadow-md transition-all cursor-pointer w-full"
            >
              <RotateCw className="w-4 h-4" />
              <span>পেজ রিলোড করুন (Reload)</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
