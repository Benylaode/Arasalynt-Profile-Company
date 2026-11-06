import { cookies, headers } from 'next/headers';
import type { Metadata } from 'next';
import {
  DEFAULT_LOCALE,
  isValidLocale,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  parseAcceptLanguage,
  type Locale,
} from './config';

export async function getServerLocale(): Promise<Locale> {
  try {
    const headerList = await headers();
    const headerLocale = headerList.get(LOCALE_HEADER);
    if (isValidLocale(headerLocale)) {
      return headerLocale;
    }

    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
    if (isValidLocale(cookieLocale)) {
      return cookieLocale;
    }

    const acceptLang = headerList.get('accept-language');
    const browserLocale = parseAcceptLanguage(acceptLang);
    if (browserLocale) {
      return browserLocale;
    }

    const country =
      headerList.get('x-vercel-ip-country') ||
      headerList.get('cf-ipcountry') ||
      headerList.get('x-country-code');
    if (country && country.toUpperCase() === 'ID') {
      return 'id';
    }
  } catch {
    // Fallback during static generation
  }

  return DEFAULT_LOCALE;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://arsalynk.com';

export function buildLocalizedAlternates(pathname: string, activeLocale: Locale): {
  canonical: string;
  languages: {
    en: string;
    id: string;
    'x-default': string;
  };
} {
  const cleanPath = pathname === '/' ? '' : pathname.startsWith('/') ? pathname : `/${pathname}`;
  const canonicalUrl =
    activeLocale === 'id'
      ? `${SITE_URL}/id${cleanPath}`
      : `${SITE_URL}${cleanPath || '/'}`;

  return {
    canonical: canonicalUrl,
    languages: {
      en: `${SITE_URL}/en${cleanPath}`,
      id: `${SITE_URL}/id${cleanPath}`,
      'x-default': `${SITE_URL}${cleanPath || '/'}`,
    },
  };
}

