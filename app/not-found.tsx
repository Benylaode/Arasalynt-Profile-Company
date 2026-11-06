'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#101010] px-[6vw] pb-20 pt-[140px] text-[#F7F7F7] max-[1199px]:px-[4vw]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(26,62,158,.7),transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[70%] bg-[linear-gradient(180deg,transparent,#101010)]" />
      <div className="pointer-events-none absolute -right-[18vw] top-[8%] h-[70vw] w-[70vw] max-w-[1100px] rounded-full border border-white/10 opacity-70" />

      <section className="relative z-10 mx-auto w-full max-w-[1700px]">
        <p className="font-body text-[12px] font-bold uppercase tracking-[.12em] text-[#E6FF2A]">{t.errors.notFoundEyebrow}</p>
        <h1 className="mt-5 max-w-[1000px] font-heading text-[clamp(58px,8vw,150px)] font-medium leading-[.88] tracking-[-.045em]">
          {t.errors.notFoundTitleLine1}<br />{t.errors.notFoundTitleLine2}
        </h1>
        <p className="mt-8 max-w-[620px] font-body text-[clamp(15px,1.1vw,20px)] leading-[1.7] text-white/70">
          {t.errors.notFoundDescription}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#E6FF2A] px-7 font-body text-[13px] font-bold uppercase tracking-[.04em] text-[#101010] no-underline transition hover:bg-white">
            {t.errors.returnHomeButton}
          </Link>
          <Link href="/our-solution" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 font-body text-[13px] font-bold uppercase tracking-[.04em] text-white no-underline transition hover:border-white hover:bg-white/10">
            {t.errors.exploreSolutionsButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
