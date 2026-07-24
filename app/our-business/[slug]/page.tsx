import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getBusinessBySlug,
  getAllBusinessSlugs,
} from '@/lib/db/actions';

export async function generateStaticParams() {
  const slugs = getAllBusinessSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const biz = getBusinessBySlug(slug);
  if (!biz) return { title: 'Not Found' };

  return {
    title: `${biz.name} — Arsalynt`,
    description: biz.aboutDesc.slice(0, 155),
    openGraph: {
      title: `${biz.name} | Arsalynt`,
      description: biz.aboutDesc.slice(0, 155),
      images: [{ url: biz.heroImg }],
    },
  };
}

function IconChevronDown() {
  return (
    <svg
      width={22}
      height={22}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg
      width={14}
      height={14}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default async function BusinessSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const biz = getBusinessBySlug(slug);

  if (!biz) notFound();

  return (
    <div className="w-full relative bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={biz.heroImg} alt={biz.name} className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b1c]/30 to-[#050b1c]/75 z-[1]" />
        <div className="relative z-[2] text-center pb-[60px] flex flex-col items-center gap-3">
          <span className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-white/70">{biz.category}</span>
          <h1 className="font-heading font-bold text-[clamp(40px,6vw,80px)] text-white tracking-tight leading-none">{biz.name}</h1>
          <a href="#about" className="mt-4 w-[44px] h-[44px] rounded-full border-[1.5px] border-white/40 bg-transparent text-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:border-white/90 hover:bg-white/10 animate-bounce-slow" aria-label="Scroll to about section">
            <IconChevronDown />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="w-full max-w-[1315px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-4">
              <span className="font-body text-[10px] font-bold tracking-[0.18em] uppercase text-slate-400">{biz.category}</span>
              <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,44px)] text-slate-900 tracking-tight leading-tight">{biz.tagline}</h2>
              <p className="font-body text-[15px] leading-relaxed text-slate-600 max-w-[500px]">{biz.aboutDesc}</p>
              <div className="flex items-center gap-[10px] mt-2 font-body text-[13px] font-semibold text-slate-700">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: biz.brandColor }}
                />
                <span>{biz.name}</span>
              </div>
            </div>
            <div className="rounded-[16px] overflow-hidden aspect-[4/3] shadow-2xl">
              <img src={biz.aboutImg} alt={`${biz.name} team`} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-[72px] bg-slate-50">
        <div className="w-full max-w-[1315px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] flex flex-col gap-8">
          <span className="font-body text-[10px] font-bold tracking-[0.18em] uppercase text-slate-400">PAIN POINT</span>
          <h2 className="font-heading font-bold text-[clamp(24px,3vw,38px)] text-slate-900 tracking-tight leading-snug">
            {biz.painPoints.length === 4 ? 'Is This Your Challenge?' : 'What\'s Slowing Your Business Down?'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {biz.painPoints.map((p, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-[16px] p-[28px_24px] flex flex-col gap-3 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                <span className="text-[28px] leading-none">{p.icon}</span>
                <h3 className="font-heading text-[15px] font-bold text-slate-900">{p.title}</h3>
                <p className="font-body text-[13px] leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="w-full max-w-[1315px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] flex flex-col gap-9">
          <span className="font-body text-[10px] font-bold tracking-[0.18em] uppercase text-white/45">OUR SOLUTIONS</span>
          <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,46px)] text-white tracking-tight leading-tight max-w-[700px]">
            {biz.name === 'Kaluna Technology'
              ? 'End-to-End Technology Integration Solutions'
              : biz.name === 'Artic Analytica'
              ? 'We Do Data-Driven Business Intelligence'
              : biz.name === 'LoxLive'
              ? 'End-to-End Premium Broadcast Services'
              : biz.name === 'The Drafroom'
              ? 'Your Strategic Brand Solutions'
              : `${biz.name}'s Core Services`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {biz.services.map((s, i) => (
              <div key={i} className="group relative rounded-[12px] overflow-hidden aspect-[4/3] cursor-pointer">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-106" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute bottom-[14px] left-[14px] right-[14px] font-body text-[13px] font-semibold text-white leading-snug">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION QUOTE */}
      <section className="relative py-[100px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={biz.heroImg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#050b1c]/82 z-[1]" />
        <div className="relative z-[2] max-w-[1315px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] flex flex-col items-center gap-6 text-center">
          <span className="font-body text-[10px] font-bold tracking-[0.18em] uppercase text-white/45">ARSALYNT</span>
          <p className="font-heading font-semibold text-[clamp(22px,3vw,38px)] text-white tracking-tight leading-snug max-w-[760px]">{biz.visionQuote}</p>
        </div>
      </section>

      {/* OUR WORKS */}
      <section className="py-[72px] bg-white">
        <div className="w-full max-w-[1315px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-bold text-[clamp(24px,3vw,38px)] text-slate-900 tracking-tight leading-snug">
              Explore {biz.name}&apos;s Work
            </h2>
            <Link href="/our-works" className="inline-flex items-center gap-[6px] font-body text-[13px] font-semibold text-slate-600 no-underline hover:text-slate-900 transition-colors duration-150">
              See All <IconArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {biz.works.map((w, i) => (
              <div key={i} className="group relative rounded-[16px] overflow-hidden aspect-[16/10] cursor-pointer">
                <img src={w.img} alt={w.name} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-[6px]">
                  <span className="font-body text-[10px] font-bold tracking-[0.12em] uppercase text-white/60">{w.tag}</span>
                  <h3 className="font-heading text-[16px] font-bold text-white leading-snug">{w.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE OTHER BUSINESSES */}
      {biz.otherBusinesses.length > 0 && (
        <section className="py-[72px] bg-slate-50">
          <div className="w-full max-w-[1315px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-bold text-[clamp(24px,3vw,38px)] text-slate-900 tracking-tight leading-snug">Explore Other Business</h2>
              <Link href="/our-business" className="inline-flex items-center gap-[6px] font-body text-[13px] font-semibold text-slate-600 no-underline hover:text-slate-900 transition-colors duration-150">
                View All <IconArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {biz.otherBusinesses.map((b, i) => (
                <Link
                  key={i}
                  href={`/our-business/${b.slug}`}
                  className="group relative block rounded-[16px] overflow-hidden aspect-[4/3] no-underline"
                >
                  <img
                    src={b.img}
                    alt={b.name}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent transition-all duration-300 group-hover:from-black/85 group-hover:via-black/15" />
                  <span className="absolute bottom-5 left-5 font-heading text-[18px] font-bold text-white">{b.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-[100px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={biz.aboutImg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1946]/92 to-[#1a3e9e]/88 z-[1]" />
        <div className="relative z-[2] max-w-[1315px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] flex flex-col items-center gap-5 text-center">
          <h2 className="font-heading text-[clamp(26px,3.5vw,46px)] font-bold text-white tracking-tight leading-tight max-w-[620px]">{biz.ctaTitle}</h2>
          <p className="font-body text-[15px] leading-relaxed text-white/75 max-w-[520px]">{biz.ctaDesc}</p>
          <div className="flex items-center gap-4 mt-2 flex-wrap justify-center">
            <Link href="/our-works" className="inline-flex items-center px-8 py-3.5 rounded-full bg-lime-yellow text-[#050b18] font-body text-[13px] font-extrabold tracking-wide no-underline transition-all duration-150 hover:scale-[1.04] hover:shadow-[0_6px_24px_rgba(230,255,42,0.3)]">
              Get Started
            </Link>
            <Link href="/about-us" className="inline-flex items-center px-7 py-3 rounded-full border-[1.5px] border-white/50 text-white bg-transparent font-body text-[13px] font-bold tracking-wide no-underline transition-all duration-150 hover:border-white hover:bg-white/8">
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
