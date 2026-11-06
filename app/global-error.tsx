'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './globals.css';
import { detectClientLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    console.error(error);
    setLocale(detectClientLocale());
  }, [error]);

  const dict = getDictionary(locale);

  return (
    <html lang={locale}>
      <body className="m-0 bg-[#101010] text-[#F7F7F7]">
        <title>System Error | Arsalynk</title>
        <main className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-[6vw] py-20 max-[1199px]:px-[4vw]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(26,62,158,.7),transparent_45%)]" />
          <section className="relative z-10 mx-auto w-full max-w-[1700px]">
            <p className="text-[12px] font-bold uppercase tracking-[.12em] text-[#E6FF2A]">{dict.errors.globalErrorEyebrow}</p>
            <h1 className="mt-5 max-w-[1050px] text-[clamp(54px,7vw,132px)] font-medium leading-[.92] tracking-[-.04em]">
              {dict.errors.globalErrorTitleLine1}<br />{dict.errors.globalErrorTitleLine2}
            </h1>
            <p className="mt-8 max-w-[620px] text-[clamp(15px,1.1vw,20px)] leading-[1.7] text-white/70">
              {dict.errors.globalErrorDescription}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <button type="button" onClick={() => unstable_retry()} className="min-h-12 rounded-full bg-[#E6FF2A] px-7 text-[13px] font-bold uppercase tracking-[.04em] text-[#101010]">
                {dict.errors.tryAgainButton}
              </button>
              <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 text-[13px] font-bold uppercase tracking-[.04em] text-white no-underline">
                {dict.errors.returnHomeButton}
              </Link>
            </div>
            {error.digest && <p className="mt-6 text-[11px] uppercase tracking-[.08em] text-white/35">{dict.errors.referencePrefix} {error.digest}</p>}
          </section>
        </main>
      </body>
    </html>
  );
}
