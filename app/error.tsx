'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#101010] px-[6vw] pb-20 pt-[140px] text-[#F7F7F7] max-[1199px]:px-[4vw]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(26,62,158,.7),transparent_45%)]" />
      <section className="relative z-10 mx-auto w-full max-w-[1700px]">
        <p className="font-body text-[12px] font-bold uppercase tracking-[.12em] text-[#E6FF2A]">System interruption</p>
        <h1 className="mt-5 max-w-[1050px] font-heading text-[clamp(54px,7vw,132px)] font-medium leading-[.92] tracking-[-.04em]">
          Something went<br />off the link.
        </h1>
        <p className="mt-8 max-w-[620px] font-body text-[clamp(15px,1.1vw,20px)] leading-[1.7] text-white/70">
          A temporary problem interrupted this page. Try reconnecting, or return to the homepage.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <button type="button" onClick={() => unstable_retry()} className="min-h-12 rounded-full bg-[#E6FF2A] px-7 font-body text-[13px] font-bold uppercase tracking-[.04em] text-[#101010] transition hover:bg-white">
            Try Again
          </button>
          <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 font-body text-[13px] font-bold uppercase tracking-[.04em] text-white no-underline transition hover:border-white hover:bg-white/10">
            Return Home
          </Link>
        </div>
        {error.digest && <p className="mt-6 font-body text-[11px] uppercase tracking-[.08em] text-white/35">Reference: {error.digest}</p>}
      </section>
    </main>
  );
}
