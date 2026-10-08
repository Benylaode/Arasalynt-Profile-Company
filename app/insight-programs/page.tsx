import SectionPageJsonLd from '@/components/seo/SectionPageJsonLd';
import Link from 'next/link';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { CASE_STUDIES_DUMMY_DATA, LEADERSHIP_THOUGHTS_DUMMY_DATA } from '@/lib/db/dummy';

function IconArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12H19M14 7L19 12L14 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="28" height="20" viewBox="0 0 32 22" fill="none" aria-hidden="true">
      <path
        d="M3 4L16 17L29 4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function InsightProgramsHubPage() {
  const featuredCaseStudies = CASE_STUDIES_DUMMY_DATA.slice(0, 3);
  const featuredThoughts = LEADERSHIP_THOUGHTS_DUMMY_DATA.slice(0, 3);

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <SectionPageJsonLd section="insight-programs" />
      {/* ── HERO SECTION ── */}
      <section
        id="hero"
        aria-label="Insight and Programs Hero"
        className="relative isolate flex h-[clamp(560px,41.666vw,800px)] w-full items-center justify-center overflow-hidden rounded-b-[clamp(24px,2.188vw,42px)] bg-[#020714]"
      >
        <img
          src="/images/insight-programs/case-studies/hero-case-studies.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(16,16,16,0.6) 0%, rgba(16,16,16,0.7) 48%, rgba(16,16,16,0.92) 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(26,62,158,0.3) 0%, #1A3E9E00 65%)',
            mixBlendMode: 'color',
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[960px] flex-col items-center px-6 text-center">
          <nav
            aria-label="Breadcrumb"
            className="font-body text-[11px] font-bold uppercase tracking-[0.08em] text-[#E6FF2A]"
          >
            <Link href="/" className="transition hover:opacity-75">
              Home
            </Link>
            <span className="mx-2 font-normal text-white/50">&gt;</span>
            <span className="text-white/80">Insight &amp; Programs</span>
          </nav>

          <h1 className="mt-5 font-heading text-[clamp(48px,5vw,92px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
            Insight &amp; Programs
          </h1>

          <p className="mt-6 max-w-[700px] font-body text-[clamp(15px,1.1vw,20px)] font-light leading-[1.6] tracking-[0.02em] text-white/95">
            Knowledge, implementation evidence, and strategic perspectives from
            across the Arsalynk enterprise ecosystem.
          </p>
        </div>

        <a
          href="#explore-pillars"
          aria-label="Scroll to explore pillars"
          className="absolute bottom-[clamp(34px,3.698vw,71px)] left-1/2 z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-[4px] transition duration-300 hover:-translate-y-1 hover:bg-white/20"
          style={{
            background:
              'linear-gradient(230.45deg, rgba(247,247,247,0.21) -7.74%, rgba(247,247,247,0.105) 81.5%)',
          }}
        >
          <ChevronDown />
        </a>
      </section>

      {/* ── PILLARS OVERVIEW ── */}
      <section
        id="explore-pillars"
        className="scroll-mt-24 px-[6vw] py-[clamp(80px,7vw,130px)] max-[1199px]:px-[4vw]"
      >
        <div className="mx-auto flex max-w-[1600px] flex-col gap-16">
          {/* Header */}
          <div className="flex max-w-[840px] flex-col gap-4">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>KNOWLEDGE &amp; EXECUTION</span>
            </div>
            <h2 className="font-heading text-[clamp(34px,3.5vw,60px)] font-medium leading-[1.1] text-[#101010]">
              Dua Jalur Pembelajaran &amp; Pembuktian Enterprise
            </h2>
            <p className="font-body text-[clamp(15px,1vw,18px)] leading-[1.7] text-[#555]">
              Kami percaya transformasi digital tidak cukup hanya dibicarakan
              sebagai konsep abstrak. Melalui studi kasus faktual dan refleksi
              kepemimpinan, kami membagikan cara kerja nyata dalam menghubungkan
              proses bisnis, teknologi, dan manusia.
            </p>
          </div>

          {/* Pillars Cards */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* PILLAR 1: Case Studies */}
            <article className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-black/10 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-[#1A3E9E]/40 hover:shadow-xl sm:p-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-black/10 pb-5">
                  <span className="font-body text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#1A3E9E]">
                    01 · IMPLEMENTATION STORIES
                  </span>
                  <span className="rounded-full bg-[#1A3E9E]/10 px-3 py-1 font-body text-[12px] font-bold text-[#1A3E9E]">
                    {CASE_STUDIES_DUMMY_DATA.length} Projects
                  </span>
                </div>

                <h3 className="font-heading text-[clamp(28px,2.2vw,40px)] font-medium leading-[1.15] text-[#101010] transition group-hover:text-[#1A3E9E]">
                  Case Studies
                </h3>

                <p className="font-body text-[15px] leading-[1.7] text-[#555]">
                  Dokumentasi mendalam mengenai implementasi solusi ERP, IoT,
                  manajemen pergudangan, armada logistik, dan HRMS di lapangan.
                  Menunjukkan tantangan awal, pendekatan arsitektur, dan dampak
                  terukur pada operasional klien.
                </p>

                {/* Micro previews */}
                <div className="mt-2 flex flex-col gap-3">
                  <span className="font-body text-[11px] font-bold uppercase tracking-[0.06em] text-[#888]">
                    Featured Stories:
                  </span>
                  {featuredCaseStudies.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/insight-programs/case-studies/${item.slug}`}
                      className="group/item flex items-center justify-between rounded-xl bg-[#F7F7F7] p-3.5 transition hover:bg-[#1A3E9E] hover:text-white"
                    >
                      <span className="truncate pr-3 font-body text-[13px] font-semibold text-[#101010] transition group-hover/item:text-white">
                        {item.title}
                      </span>
                      <span className="shrink-0 text-[#1A3E9E] transition group-hover/item:text-[#E6FF2A]">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-black/10 pt-6">
                <Link
                  href="/insight-programs/case-studies"
                  className="inline-flex items-center gap-3 rounded-full bg-[#1A3E9E] px-6 py-3.5 font-body text-[14px] font-semibold text-white no-underline transition hover:bg-[#13307D]"
                >
                  <span>Explore Case Studies</span>
                  <IconArrowRight />
                </Link>
              </div>
            </article>

            {/* PILLAR 2: Leadership Thoughts */}
            <article className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-black/10 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-[#1A3E9E]/40 hover:shadow-xl sm:p-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-black/10 pb-5">
                  <span className="font-body text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#1A3E9E]">
                    02 · STRATEGIC PERSPECTIVES
                  </span>
                  <span className="rounded-full bg-[#1A3E9E]/10 px-3 py-1 font-body text-[12px] font-bold text-[#1A3E9E]">
                    {LEADERSHIP_THOUGHTS_DUMMY_DATA.length} Articles
                  </span>
                </div>

                <h3 className="font-heading text-[clamp(28px,2.2vw,40px)] font-medium leading-[1.15] text-[#101010] transition group-hover:text-[#1A3E9E]">
                  Leadership Thoughts
                </h3>

                <p className="font-body text-[15px] leading-[1.7] text-[#555]">
                  Perspektif dan gagasan kepemimpinan seputar arsitektur alur kerja,
                  tata kelola data, ketahanan organisasi di tengah ketidakpastian,
                  dan pengambilan keputusan berbasis bukti dari eksekutif
                  Arsalynk.
                </p>

                {/* Micro previews */}
                <div className="mt-2 flex flex-col gap-3">
                  <span className="font-body text-[11px] font-bold uppercase tracking-[0.06em] text-[#888]">
                    Featured Articles:
                  </span>
                  {featuredThoughts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/insight-programs/leadership-thoughts/${item.slug}`}
                      className="group/item flex items-center justify-between rounded-xl bg-[#F7F7F7] p-3.5 transition hover:bg-[#1A3E9E] hover:text-white"
                    >
                      <span className="truncate pr-3 font-body text-[13px] font-semibold text-[#101010] transition group-hover/item:text-white">
                        {item.title}
                      </span>
                      <span className="shrink-0 text-[#1A3E9E] transition group-hover/item:text-[#E6FF2A]">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-black/10 pt-6">
                <Link
                  href="/insight-programs/leadership-thoughts"
                  className="inline-flex items-center gap-3 rounded-full bg-[#1A3E9E] px-6 py-3.5 font-body text-[14px] font-semibold text-white no-underline transition hover:bg-[#13307D]"
                >
                  <span>Explore Leadership Thoughts</span>
                  <IconArrowRight />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <BeyondExpectations />
    </main>
  );
}
