import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '../i18n/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations['bn'];
  isEn: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('selectedLang');
      if (saved === 'en' || saved === 'bn') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'bn';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('selectedLang', newLang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      if (lang === 'en') {
        document.body.classList.add('lang-en');
        document.body.classList.remove('lang-bn');
      } else {
        document.body.classList.add('lang-bn');
        document.body.classList.remove('lang-en');
      }
    }
  }, [lang]);

  const value: LanguageContextType = {
    lang,
    setLang,
    t: translations[lang],
    isEn: lang === 'en',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
