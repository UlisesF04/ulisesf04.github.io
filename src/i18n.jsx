import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './locales.js';

const LanguageContext = createContext(null);
const storageKey = 'portfolio-language';

function initialLanguage() {
  try {
    return localStorage.getItem(storageKey) === 'es' ? 'es' : 'en';
  } catch {
    return 'en';
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage);
  const copy = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.meta.title;
    const metadata = {
      'meta[name="description"]': copy.meta.description,
      'meta[property="og:title"]': copy.meta.title,
      'meta[property="og:description"]': copy.meta.socialDescription,
      'meta[property="og:locale"]': copy.meta.locale,
    };
    Object.entries(metadata).forEach(([selector, content]) => {
      document.querySelector(selector)?.setAttribute('content', content);
    });
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // Language switching also works when browser storage is unavailable.
    }
  }, [language, copy]);

  function toggleLanguage() {
    setLanguage((current) => current === 'en' ? 'es' : 'en');
  }

  return (
    <LanguageContext.Provider value={{ language, copy, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
