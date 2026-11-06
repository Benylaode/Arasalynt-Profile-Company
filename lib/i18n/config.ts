export type Locale = 'en' | 'id';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'id'];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_COOKIE = 'NEXT_LOCALE';
export const LOCALE_STORAGE_KEY = 'arsalynk_locale';
export const LOCALE_HEADER = 'x-locale';

const INDONESIAN_TIMEZONES = new Set([
  'Asia/Jakarta',
  'Asia/Pontianak',
  'Asia/Makassar',
  'Asia/Jayapura',
  'Asia/Ujung_Pandang',
]);

export function isValidLocale(value: unknown): value is Locale {
  return value === 'en' || value === 'id';
}

export function extractLocaleFromPathname(pathname: string): {
  locale: Locale | null;
  cleanPathname: string;
} {
  if (!pathname) return { locale: null, cleanPathname: '/' };
  const segments = pathname.split('/');
  const firstSegment = segments[1]?.toLowerCase();

  if (firstSegment === 'en' || firstSegment === 'id') {
    const rest = '/' + segments.slice(2).join('/');
    return {
      locale: firstSegment as Locale,
      cleanPathname: rest === '/' || rest === '' ? '/' : rest.replace(/\/+$/, '') || '/',
    };
  }

  return { locale: null, cleanPathname: pathname };
}

export function parseAcceptLanguage(acceptLanguageHeader: string | null | undefined): Locale | null {
  if (!acceptLanguageHeader) return null;
  const parts = acceptLanguageHeader
    .split(',')
    .map((part) => {
      const [lang, qPart] = part.trim().split(';');
      const q = qPart ? parseFloat(qPart.replace('q=', '')) : 1;
      return { lang: lang.trim().toLowerCase(), q: isNaN(q) ? 1 : q };
    })
    .sort((a, b) => b.q - a.q);

  for (const item of parts) {
    if (item.lang.startsWith('id') || item.lang.startsWith('in')) {
      return 'id';
    }
    if (item.lang.startsWith('en')) {
      return 'en';
    }
  }
  return null;
}

export function detectClientLocale(serverInitialLocale?: Locale): Locale {
  if (typeof window === 'undefined') {
    return serverInitialLocale || DEFAULT_LOCALE;
  }

  // 1. Manual selection via URL prefix (/en or /id) or query param (?lang=en|id)
  const { locale: pathLocale } = extractLocaleFromPathname(window.location.pathname);
  if (pathLocale) {
    return pathLocale;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const queryLang = urlParams.get('lang')?.toLowerCase();
  if (isValidLocale(queryLang)) {
    return queryLang;
  }

  // 2. Saved language preference (localStorage or cookie)
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isValidLocale(stored)) {
      return stored;
    }
  } catch {
    // Ignore storage access errors
  }

  if (typeof document !== 'undefined') {
    const cookieMatch = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`));
    const cookieVal = cookieMatch ? decodeURIComponent(cookieMatch[1]) : null;
    if (isValidLocale(cookieVal)) {
      return cookieVal;
    }
  }

  // 3. Browser language settings
  if (typeof navigator !== 'undefined') {
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const lang of languages) {
      if (!lang) continue;
      const lower = lang.toLowerCase();
      if (lower.startsWith('id') || lower.startsWith('in')) {
        return 'id';
      }
      if (lower.startsWith('en')) {
        return 'en';
      }
    }
  }

  // 4. Geolocation / Region fallback (non-intrusive via IANA timezone)
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && INDONESIAN_TIMEZONES.has(tz)) {
      return 'id';
    }
  } catch {
    // Ignore Intl errors
  }

  // 5. Server initial or default English
  return serverInitialLocale || DEFAULT_LOCALE;
}

export function persistClientLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Ignore storage errors
  }
  if (typeof document !== 'undefined') {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = locale;
  }
}

