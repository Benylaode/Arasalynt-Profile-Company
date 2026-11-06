'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import {
  DEFAULT_LOCALE,
  detectClientLocale,
  extractLocaleFromPathname,
  persistClientLocale,
  type Locale,
} from './config';
import { getDictionary, type Dictionary } from './dictionaries';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (newLocale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: getDictionary(DEFAULT_LOCALE),
});

export function LanguageProvider({
  initialLocale = DEFAULT_LOCALE,
  children,
}: {
  initialLocale?: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const pathname = usePathname();

  // Detect and synchronize locale on client mount
  useEffect(() => {
    const detected = detectClientLocale(initialLocale);
    if (detected !== locale) {
      setLocaleState(detected);
    }
    document.documentElement.lang = detected;
  }, [initialLocale]);

  // Synchronize <html lang>, document.title, and meta description whenever locale or route changes
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = locale;

    const dict = getDictionary(locale);
    const { cleanPathname } = extractLocaleFromPathname(
      pathname || window.location.pathname
    );
    const pageMeta =
      dict.seo.pages[cleanPathname as keyof typeof dict.seo.pages];

    if (pageMeta) {
      document.title = pageMeta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', pageMeta.description);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', pageMeta.title);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', pageMeta.description);
      }
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', locale === 'id' ? 'id_ID' : 'en_US');
    }
  }, [locale, pathname]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    persistClientLocale(newLocale);

    // If the user is currently on a locale-prefixed URL (/en/... or /id/...),
    // update the prefix in-place without triggering a full page reload.
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const { locale: pathLocale, cleanPathname } =
        extractLocaleFromPathname(currentPath);

      const url = new URL(window.location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.set('lang', newLocale);
      }

      if (pathLocale) {
        const suffix = cleanPathname === '/' ? '' : cleanPathname;
        url.pathname = `/${newLocale}${suffix}`;
        window.history.replaceState(
          window.history.state,
          '',
          url.pathname + url.search + url.hash
        );
      } else if (url.searchParams.has('lang')) {
        window.history.replaceState(
          window.history.state,
          '',
          url.pathname + url.search + url.hash
        );
      }
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: getDictionary(locale),
    }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}

