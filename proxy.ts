import { NextResponse, type NextRequest } from 'next/server';
import {
  DEFAULT_LOCALE,
  extractLocaleFromPathname,
  isValidLocale,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  parseAcceptLanguage,
  type Locale,
} from './lib/i18n/config';

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Skip internal Next.js routes, API routes, and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 1. Check URL prefix (/en/... or /id/...)
  const { locale: pathLocale, cleanPathname } = extractLocaleFromPathname(pathname);

  if (pathLocale) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = cleanPathname;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(LOCALE_HEADER, pathLocale);

    const response = NextResponse.rewrite(rewriteUrl, {
      request: {
        headers: requestHeaders,
      },
    });

    response.cookies.set(LOCALE_COOKIE, pathLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });

    return response;
  }

  // Determine locale for unprefixed URLs using the 5-step priority:
  let detectedLocale: Locale = DEFAULT_LOCALE;
  let shouldPersistCookie = false;

  // Priority 1: Manual query parameter (?lang=en|id)
  const queryLang = searchParams.get('lang')?.toLowerCase();
  if (isValidLocale(queryLang)) {
    detectedLocale = queryLang;
    shouldPersistCookie = true;
  } else {
    // Priority 2: Saved language preference cookie
    const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
    if (isValidLocale(cookieLocale)) {
      detectedLocale = cookieLocale;
    } else {
      // Priority 3: Browser Language (Accept-Language)
      const browserLocale = parseAcceptLanguage(request.headers.get('accept-language'));
      if (browserLocale) {
        detectedLocale = browserLocale;
      } else {
        // Priority 4: Geolocation / Region header fallback
        const country =
          request.headers.get('x-vercel-ip-country') ||
          request.headers.get('cf-ipcountry') ||
          request.headers.get('x-country-code');
        if (country && country.toUpperCase() === 'ID') {
          detectedLocale = 'id';
        } else {
          // Priority 5: Default English
          detectedLocale = DEFAULT_LOCALE;
        }
      }
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, detectedLocale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (shouldPersistCookie) {
    response.cookies.set(LOCALE_COOKIE, detectedLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};

