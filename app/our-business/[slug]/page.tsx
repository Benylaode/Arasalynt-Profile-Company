import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import type { ReactNode } from 'react';
import {
  getBusinessBySlug,
  getAllBusinessSlugs,
} from '@/lib/db/actions';
import BusinessWorksCarousel from '@/components/sections/BusinessWorksCarousel/BusinessWorksCarousel';

type PainPoint = {
  icon?: string;
  title: string;
  desc: string;
};

type ServiceItem = {
  name: string;
  img: string;
  href?: string;
};

type WorkItem = {
  name: string;
  tag: string;
  img: string;
  slug?: string;
  href?: string;
};

type OtherBusinessItem = {
  slug: string;
  name: string;
  img: string;
};

type BusinessPageData = {
  id: number;
  slug: string;
  name: string;
  shortName?: string;
  category: string;
  tagline: string;
  logo?: string;
  logoWidth?: number;
  logoMaxHeight?: number;
  brandColor: string;
  heroImg: string;
  heroObjectPosition?: string;
  aboutDesc: string;
  aboutImg: string;
  aboutObjectPosition?: string;
  painPointsTitle: string;
  painPoints: PainPoint[];
  servicesTitle: string;
  services: ServiceItem[];
  servicesColumns?: 3 | 4;
  visionQuote: string;
  visionTextSize?: 'medium' | 'large';
  works: WorkItem[];
  otherBusinesses: OtherBusinessItem[];
  ctaTitle: string;
  ctaDesc: string;

  /** Required labels for the two primary dynamic business sections. */
  painPointsLabel: string;
  servicesLabel: string;

  /** Optional copy controls for the remaining sections. */
  visionLabel?: string;
  worksLabel?: string;
  worksTitle?: string;
  otherBusinessesTitle?: string;

  /** Optional initial carousel positions. */
  featuredWorkIndex?: number;
  featuredOtherBusinessIndex?: number;

  /** Optional. If omitted, the template uses conventional files under the business asset folder. */
  heroOverlayImg?: string;
  challengeBg?: string;
  servicesBg?: string;
  visionImg?: string;
  ctaImg?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
};

const resolveBusiness = async (slug: string) =>
  (await Promise.resolve(getBusinessBySlug(slug))) as unknown as
    | BusinessPageData
    | null
    | undefined;

export async function generateStaticParams() {
  const slugs = await Promise.resolve(getAllBusinessSlugs());
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const biz = await resolveBusiness(slug);

  if (!biz) return { title: 'Not Found' };

  return {
    title: `${biz.name} — Arsalynk`,
    description: biz.aboutDesc.slice(0, 155),
    openGraph: {
      title: `${biz.name} | Arsalynk`,
      description: biz.aboutDesc.slice(0, 155),
      images: [{ url: biz.heroImg }],
    },
  };
}

function ArrowIcon({ direction = 'right' }: { direction?: 'left' | 'right' }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={direction === 'left' ? 'rotate-180' : ''}
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WorkArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={direction === 'left' ? 'rotate-180' : ''}
    >
      <path
        d="M8 4.5 15.5 12 8 19.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownIcon() {
  return (
    <svg width="32" height="22" viewBox="0 0 32 22" fill="none" aria-hidden="true">
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

function PainPointIcon({ icon, index }: { icon?: string; index: number }) {
  if (icon?.startsWith('/')) {
    return <img src={icon} alt="" aria-hidden="true" className="h-[26px] w-[26px] object-contain" />;
  }

  const common = {
    width: 26,
    height: 26,
    viewBox: '0 0 32 32',
    fill: 'none',
    'aria-hidden': true,
  } as const;

  const variants = [
    <svg key="legacy" {...common}>
      <path d="M6 8h20v16H6z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 13h10M11 18h4M21 18h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 5v3M23 5v3M9 24v3M23 24v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>,
    <svg key="disconnected" {...common}>
      <path d="M11.5 20.5 8 24a4 4 0 0 1-5.7-5.6l5-5a4 4 0 0 1 5.7 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m20.5 11.5 3.5-3.5a4 4 0 1 1 5.7 5.6l-5 5a4 4 0 0 1-5.7 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m11 21 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>,
    <svg key="blind-spots" {...common}>
      <path d="M3.5 16s4.5-7 12.5-7 12.5 7 12.5 7-4.5 7-12.5 7S3.5 16 3.5 16Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m6 5 20 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>,
    <svg key="downtime" {...common}>
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M24.5 7.5l-2.8 2.8M10.3 21.7l-2.8 2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 12v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
  ];

  const semanticIconIndex: Record<string, number> = {
    'legacy-hardware': 0,
    'disconnected-software': 1,
    'operational-blind-spots': 2,
    'unexpected-downtime': 3,
  };

  return variants[(icon ? semanticIconIndex[icon] : undefined) ?? index % variants.length];
}

function Label({ children, tone = 'blue' }: { children: ReactNode; tone?: 'blue' | 'lime' }) {
  const color = tone === 'lime' ? 'text-[#E6FF2A]' : 'text-[#1A3E9E]';
  const dot = tone === 'lime' ? 'bg-[#E6FF2A]' : 'bg-[#1A3E9E]';

  return (
    <div className={`flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.06em] md:text-[14px] ${color}`}>
      <span className={`h-2 w-2 shrink-0 ${dot}`} />
      <span>{children}</span>
    </div>
  );
}

function buildSliderCss(slug: string, otherCount: number) {
  const safe = slug.replace(/[^a-z0-9_-]/gi, '-');
  const otherRules = Array.from({ length: otherCount }, (_, index) => {
    const otherShift = Array.from({ length: index }, () => ' - var(--other-card-w) - 30px').join('');
    return `
      #other-slider-${safe}:has(#other-${safe}-${index}:checked) .other-track {
        transform: translate3d(calc(0px${otherShift}), 0, 0);
      }
      #other-slider-${safe}:has(#other-${safe}-${index}:checked) .other-control-${index} {
        display: flex;
      }
    `;
  }).join('\n');

  return `
    #business-works-slider-${safe} .business-work-track {
      transition: transform 900ms cubic-bezier(.22,1,.36,1);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      will-change: transform;
    }

    #business-works-slider-${safe} .business-work-card {
      z-index: 10;
      cursor: pointer;
    }

    #business-works-slider-${safe} .business-work-card[data-active="true"] {
      z-index: 20;
      cursor: default;
    }

    #business-works-slider-${safe} .business-work-link {
      pointer-events: none;
    }

    #business-works-slider-${safe} .business-work-card[data-active="true"] .business-work-link {
      pointer-events: auto;
    }

    #business-works-slider-${safe} .business-work-side-fade {
      opacity: 0;
      transition: opacity 400ms ease;
    }

    #business-works-slider-${safe} .business-work-card[data-side="left"] .business-work-left-fade,
    #business-works-slider-${safe} .business-work-card[data-side="right"] .business-work-right-fade {
      opacity: 1;
    }

    #business-works-slider-${safe} .business-work-progress {
      animation-name: businessWorkProgress;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
      transform-origin: left;
    }

    @keyframes businessWorkProgress {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }

    #other-slider-${safe} {
      --other-card-w: min(835px, 43.489583vw);
      --other-start: max(calc(50vw - 850px), 5.729167vw);
    }
    #other-slider-${safe} .other-track {
      padding-left: var(--other-start);
      padding-right: var(--other-start);
      transition: transform 760ms cubic-bezier(.22,1,.36,1);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    #other-slider-${safe} .other-card { width: var(--other-card-w); }
    #other-slider-${safe} .other-control { display: none; }

    ${otherRules}

    @media (max-width: 767px) {
      #other-slider-${safe} {
        --other-card-w: calc(100vw - 48px);
        --other-start: 24px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #business-works-slider-${safe} .business-work-track {
        transition-duration: 1ms !important;
      }

      #business-works-slider-${safe} .business-work-progress {
        animation: none !important;
      }
    }
  `;
}



export default async function BusinessSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const biz = await resolveBusiness(slug);

  if (!biz) notFound();

  const safeSlug = biz.slug.replace(/[^a-z0-9_-]/gi, '-');
  const assetBase = `/images/our-business/${biz.slug}`;
  const shortName = biz.shortName ?? biz.name;

  const heroOverlayImg = biz.heroOverlayImg ?? `${assetBase}/hero-network-overlay.webp`;
  const servicesBg = biz.servicesBg ?? `${assetBase}/services-bg.webp`;
  const visionImg = biz.visionImg ?? `${assetBase}/vision-bg.webp`;
  const ctaImg = biz.ctaImg ?? `${assetBase}/cta-bg.webp`;

  const sliderCss = buildSliderCss(safeSlug, biz.otherBusinesses.length);
  const serviceColumns = biz.servicesColumns ?? (biz.services.length === 6 ? 3 : 4);
  const threeColumnServices = serviceColumns === 3;
  const featuredWorkIndex = biz.works.length
    ? Math.min(Math.max(biz.featuredWorkIndex ?? Math.min(1, biz.works.length - 1), 0), biz.works.length - 1)
    : 0;


  const featuredOtherBusinessIndex = biz.otherBusinesses.length
    ? Math.min(Math.max(biz.featuredOtherBusinessIndex ?? 0, 0), biz.otherBusinesses.length - 1)
    : 0;

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <style dangerouslySetInnerHTML={{ __html: sliderCss }} />

      {/* HERO */}
      <section className="relative flex h-[clamp(520px,41.667vw,800px)] min-h-[520px] items-center justify-center overflow-hidden rounded-b-[24px] bg-[#101010] md:rounded-b-[42px]">
        <img
          src={biz.heroImg}
          alt={biz.name}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: biz.heroObjectPosition ?? 'center' }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-x-[-17%] bottom-[-45%] top-[31%] bg-cover bg-center opacity-90 mix-blend-plus-lighter"
          style={{ backgroundImage: `url(${heroOverlayImg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3E9E] via-[#1A3E9E]/25 to-transparent mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-[87%] bg-gradient-to-b from-transparent via-[#101010]/20 to-[#101010]" />
        <div className="absolute -right-[9%] -top-[14%] h-[150%] w-[64%] rotate-[7deg] bg-gradient-to-b from-transparent via-white/[0.055] to-transparent" />

        <div className="relative z-10 flex max-w-[1100px] flex-col items-center gap-5 px-5 text-center md:gap-6">
          <div className="font-body text-[10px] font-normal uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A] max-[768px]:text-[7px]">
              Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Our Business&nbsp;&nbsp;&gt;&nbsp;&nbsp;{biz.name}
            </div>
          <h1 className="font-heading text-[clamp(44px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
            {biz.name}
          </h1>
        </div>

        <a
          href="#beyond-expectations"
          aria-label="Scroll to CTA"
          className="absolute bottom-[34px] left-1/2 z-20 flex h-[58px] w-[58px] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-white/[0.12] text-white backdrop-blur-[4px] transition hover:bg-white/20 md:bottom-[71px] md:h-20 md:w-20"
        >
          <DownIcon />
        </a>
      </section>

      {/* INTRODUCTION */}
      <section
        id="about"
        className="w-full bg-[#F7F7F7] px-[clamp(24px,13.333vw,256px)] py-[clamp(80px,6.563vw,110px)]"
      >
        <div className="mx-auto flex w-full max-w-[1408px] items-center justify-between gap-[clamp(48px,5vw,96px)] max-[1024px]:flex-col">
          <div className="flex w-[40%] shrink-0 flex-col justify-center max-[1024px]:w-full">
            <div className="flex flex-col gap-[clamp(24px,2.188vw,42px)]">
              <Label>{biz.category}</Label>
              <h2 className="font-heading text-[clamp(40px,3.333vw,64px)] font-medium leading-[120%] tracking-[-0.02em] text-[#101010]">
                {biz.tagline}
              </h2>
              <p className="font-body text-[clamp(15px,1.042vw,20px)] font-normal leading-[160%] tracking-[0.02em] text-[#292929]">
                {biz.aboutDesc}
              </p>
            </div>

            {biz.logo && (
              <div className="mt-8 md:mt-12">
                <img
                  src={biz.logo}
                  alt={`${biz.name} logo`}
                  className="h-auto max-w-full object-contain object-left"
                  style={{
                    width: `${biz.logoWidth ?? 227}px`,
                    maxHeight: biz.logoMaxHeight ? `${biz.logoMaxHeight}px` : undefined,
                  }}
                />
              </div>
            )}
          </div>

          <div className="relative aspect-[764/670] w-[53%] shrink-0 overflow-hidden rounded-[24px] bg-[#D9D9D9] max-[1024px]:w-full">
            <img
              src={biz.aboutImg}
              alt={`${biz.name} team and operations`}
              className="h-full w-full object-cover"
              style={{ objectPosition: biz.aboutObjectPosition ?? 'center' }}
            />
            <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-black/35 to-transparent" />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY / PAIN POINTS — 100% structure from Leadership Principles */}
      <section className="relative isolate w-full overflow-hidden bg-[#EEF0F6] px-[6vw] py-[clamp(100px,8.125vw,156px)] max-[1199px]:px-[4vw]">
        {/* Shared decorative layer for every Business challenge section. */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[clamp(420px,52vw,700px)] w-[88%] max-w-[1759px] -translate-x-1/2 -translate-y-1/2 bg-cover bg-center bg-no-repeat opacity-[0.14] max-[1199px]:w-[92%]"
          style={{
            backgroundImage: "url('/images/our-business/pain-points-radial.webp')",
          }}
          aria-hidden="true"
        />

        {/* Foreground content */}
        <div className="relative z-20 mx-auto flex w-full max-w-[1700px] flex-col items-center gap-[clamp(48px,4.167vw,80px)]">
          <div className="flex w-full flex-col items-center gap-[clamp(18px,1.25vw,24px)] text-center">
            <div className="flex items-center justify-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.06em] text-[#1A3E9E] md:text-[14px]">
              <span className="h-2 w-2 shrink-0 bg-[#1A3E9E]" />
              <span>{biz.painPointsLabel ?? 'THE CHALLENGE'}</span>
            </div>

            <h2 className="max-w-[750px] font-heading text-[clamp(48px,4.375vw,84px)] font-medium leading-[1.08] tracking-[-0.03em] text-[#101010]">
              {biz.painPointsTitle ?? 'Technology & Business Challenges'}
            </h2>
          </div>

          <div className="grid w-full grid-cols-4 gap-[clamp(20px,1.563vw,30px)] max-[1280px]:grid-cols-2 max-[768px]:grid-cols-1">
            {biz.painPoints.map((point, index) => (
              <article
                key={`${point.title}-${index}`}
                className="group relative flex min-h-[clamp(220px,15vw,290px)] flex-col items-start overflow-hidden rounded-[16px] border border-transparent p-4 backdrop-blur-[8px] transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#7F9CFF] hover:bg-[linear-gradient(135deg,rgba(26,62,158,0.18)_0%,rgba(133,166,255,0.34)_100%)] hover:shadow-[0_12px_42px_rgba(26,62,158,0.20)]"
                style={{
                  background:
                    'linear-gradient(79deg, rgba(26,62,158,.0375) 13.31%, rgba(133,166,255,.075) 132.94%)',
                }}
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#99A6E7] bg-[rgba(153,166,231,.35)] text-[#101010] transition-colors duration-300 group-hover:bg-[rgba(26,62,158,0.35)]">
                  <PainPointIcon icon={point.icon} index={index} />
                </div>

                <div className="relative z-10 mt-auto flex w-full flex-col gap-[clamp(8px,0.625vw,12px)] pt-[clamp(24px,2vw,38px)]">
                  <h3 className="font-heading text-[clamp(23px,2.188vw,41px)] font-medium leading-[1.1] tracking-[-0.01em] text-[#424242]">
                    {point.title}
                  </h3>
                  <p className="font-body text-[clamp(10px,0.75vw,11.5px)] font-normal leading-[1.5] text-[#424242]">
                    {point.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative isolate overflow-hidden bg-[#101010] py-[96px] md:py-[110px] md:pb-[156px]">
        <div className="pointer-events-none absolute -left-[24%] top-[24%] h-[70%] w-[72%] rounded-full bg-[#007EFF]/15 blur-[90px]" />
        <div className="pointer-events-none absolute -right-[24%] -top-[10%] h-[70%] w-[72%] rounded-full bg-[#007EFF]/15 blur-[90px]" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-cover bg-top opacity-70"
          style={{ backgroundImage: `url(${servicesBg})` }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-transparent to-[#101010]" />

        <div className="site-shell relative z-10 flex flex-col gap-16 px-0">
          <div className="mx-auto flex max-w-[841px] flex-col items-center gap-4 text-center">
            <Label tone="lime">{biz.servicesLabel ?? 'OUR SOLUTIONS'}</Label>
            <h2 className="font-heading text-[clamp(46px,4.375vw,84px)] font-medium leading-none tracking-[-0.03em] text-[#F7F7F7]">
              {biz.servicesTitle ?? 'Our Solutions'}
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${
              threeColumnServices ? 'xl:grid-cols-3 xl:gap-[30px]' : 'xl:grid-cols-4 xl:gap-8'
            }`}
          >
            {biz.services.map((service, index) => {
              const serviceHref = service.href ?? '/our-solution';
              return (
                <Link
                  key={`${service.name}-${index}`}
                  href={serviceHref}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#F5F5F5]/15 bg-gradient-to-b from-[#101010]/5 to-white/[0.05] p-5 pb-6 sm:p-6 sm:pb-7 backdrop-blur-[12.5px] transition duration-500 hover:-translate-y-1 hover:border-white/80 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.28))] hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)] no-underline"
                >
                  <div className={`relative w-full overflow-hidden rounded-lg bg-[#0A2951] ${
                      threeColumnServices ? 'aspect-[499/265]' : 'aspect-[353/265]'
                    }`}>
                    <img
                      src={service.img}
                      alt={service.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-black/15" />
                  </div>
                  <h3 className="font-heading text-[clamp(22px,1.8vw,32px)] font-medium leading-[1.2] tracking-[-0.01em] text-[#D9D9D9] transition-colors duration-300 group-hover:text-[#E6FF2A]">
                    {service.name}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION — reduced to 80% of the previous section height */}
      <section className="relative isolate flex min-h-[464px] items-center overflow-hidden bg-gradient-to-b from-[#101010] to-[#1A3E9E] py-[96px] md:min-h-[602px] md:py-[144px]">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[96%] bg-cover bg-bottom opacity-55"
          style={{ backgroundImage: `url(${visionImg})` }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[352px] bg-gradient-to-b from-[#101010] via-[#101010]/80 to-transparent" />

        <div className="site-shell relative z-10 flex flex-col items-center gap-8 px-0 text-center">
          <Label tone="lime">{biz.visionLabel ?? 'OUR VISION'}</Label>
          <p
            className={`w-full max-w-[85%] font-heading font-semibold tracking-[-0.01em] text-[#F7F7F7] max-[1024px]:max-w-[78%] max-[640px]:max-w-full ${
              biz.visionTextSize === 'large'
                ? 'text-[clamp(36px,3.334vw,64px)] leading-[1.2]'
                : 'text-[clamp(34px,2.917vw,56px)] leading-[1.1]'
            }`}
          >
            {biz.visionQuote}
          </p>
        </div>
      </section>

      {/* WORKS — clean React BusinessWorksCarousel component */}
      {biz.works.length > 0 && (
        <BusinessWorksCarousel
          works={biz.works}
          title={biz.worksTitle ?? `Explore ${shortName}’s Work`}
        />
      )}

      {/* OTHER BUSINESSES — Header Title aligned with Navbar Logo + Infinite Slider Track */}
      {biz.otherBusinesses.length > 0 && (
        <section className="overflow-hidden bg-[rgba(153,166,231,0.10)] py-[88px] md:py-[96px] md:pb-[110px]">
          <div id={`other-slider-${safeSlug}`} className="relative w-full">
            {biz.otherBusinesses.map((_, index) => (
              <input
                key={`other-input-${index}`}
                id={`other-${safeSlug}-${index}`}
                type="radio"
                name={`other-slider-${safeSlug}`}
                defaultChecked={index === featuredOtherBusinessIndex}
                className="sr-only"
              />
            ))}

            <div className="site-shell mb-[42px] flex items-end justify-between gap-8 px-0">
              <h2 className="font-heading text-[clamp(42px,4.375vw,84px)] font-medium leading-none tracking-[-0.03em] text-[#101010]">
                {biz.otherBusinessesTitle ?? 'Explore Other Business'}
              </h2>

              <div className="hidden shrink-0 items-center gap-2 md:flex">
                {biz.otherBusinesses.map((_, index) => {
                  const previous = (index - 1 + biz.otherBusinesses.length) % biz.otherBusinesses.length;
                  const next = (index + 1) % biz.otherBusinesses.length;
                  return (
                    <div
                      key={`other-control-header-${index}`}
                      className={`other-control other-control-${index} items-center gap-2`}
                    >
                      <label
                        htmlFor={`other-${safeSlug}-${previous}`}
                        aria-label="Previous business"
                        className="flex h-[59px] w-[59px] cursor-pointer items-center justify-center rounded-xl border border-[#D9D9D9] text-[#717171] transition hover:border-[#1A3E9E] hover:text-[#1A3E9E]"
                      >
                        <ArrowIcon direction="left" />
                      </label>
                      <label
                        htmlFor={`other-${safeSlug}-${next}`}
                        aria-label="Next business"
                        className="flex h-[59px] w-[59px] cursor-pointer items-center justify-center rounded-xl border border-[#D9D9D9] text-[#717171] transition hover:border-[#1A3E9E] hover:text-[#1A3E9E]"
                      >
                        <ArrowIcon />
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative h-[clamp(350px,26.042vw,500px)] w-full overflow-hidden">
              <div className="other-track flex h-full w-max gap-[30px]">
                {biz.otherBusinesses.map((business, index) => (
                  <Link
                    key={`${business.slug}-${index}`}
                    href={`/our-business/${business.slug}`}
                    className="other-card group relative block h-full shrink-0 overflow-hidden rounded-[18px] bg-[#8C8C8C] no-underline md:rounded-[24px]"
                  >
                    <img
                      src={business.img}
                      alt={business.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/95 via-[#101010]/35 to-transparent transition-opacity duration-500 group-hover:from-[#101010] group-hover:via-[#101010]/55" />

                    <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col items-start gap-3.5 transition-transform duration-500 group-hover:-translate-y-2 md:bottom-[32px] md:left-[42px] md:right-[42px]">
                      <h3 className="font-heading text-[clamp(34px,3.334vw,64px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#F7F7F7]">
                        {business.name}
                      </h3>
                      <div className="inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#E6FF2A] px-6 font-body text-[13px] font-semibold uppercase tracking-[0.04em] text-[#101010] shadow-[0_10px_25px_rgba(230,255,42,0.25)] transition-all duration-500 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0">
                        <span>LEARN MORE</span>
                        <ArrowIcon direction="right" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:hidden">
                {biz.otherBusinesses.map((_, index) => (
                  <label
                    key={`other-dot-${index}`}
                    htmlFor={`other-${safeSlug}-${index}`}
                    aria-label={`Show business ${index + 1}`}
                    className="h-2.5 w-2.5 cursor-pointer rounded-full bg-[#1A3E9E]/35"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="relative isolate flex min-h-[clamp(450px,32vw,615px)] items-center justify-center overflow-hidden bg-gradient-to-b from-[#152571] to-[#101010] py-[clamp(80px,6.563vw,126px)]">
        <div
          className="pointer-events-none absolute inset-0 scale-x-[-1] bg-cover bg-center opacity-65 mix-blend-hard-light"
          style={{ backgroundImage: `url(${ctaImg})` }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-[#152571] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#101010] to-transparent" />

        <div className="mv-container relative z-10 flex flex-col items-center text-center">
          <div className="flex w-full flex-col items-center gap-[clamp(18px,1.25vw,24px)]">
            <h2 className="max-w-[880px] font-heading text-[clamp(52px,5.729vw,62px)] font-medium leading-[0.96] tracking-[-0.03em] text-[#F7F7F7] max-[480px]:text-[40px]">
              {biz.ctaTitle}
            </h2>
            <p className="mx-auto max-w-[580px] font-normal text-[clamp(15px,1.042vw,20px)] leading-[1.6] tracking-[0.02em] text-[#D9D9D9]">
              {biz.ctaDesc}
            </p>
          </div>

          <div className="mt-[clamp(24px,1.667vw,32px)] flex w-full flex-wrap items-center justify-center gap-[12px] max-[480px]:flex-col max-[480px]:gap-[10px]">
            <Link
              href={biz.ctaPrimaryHref ?? '/contact-us'}
              target={biz.ctaPrimaryHref?.startsWith('http') ? '_blank' : undefined}
              rel={biz.ctaPrimaryHref?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex h-[clamp(47px,3.125vw,60px)] min-w-[clamp(175px,11.979vw,230px)] items-center justify-center gap-[10px] rounded-full bg-[#E6FF2A] px-[clamp(24px,1.667vw,32px)] font-body text-[clamp(14px,0.833vw,16px)] font-extrabold leading-[1.2] text-[#101010] no-underline transition hover:-translate-y-1 max-[480px]:w-full max-[480px]:max-w-[280px]"
            >
              {biz.ctaPrimaryLabel ?? 'Let’s Work Together'}
            </Link>
            <Link
              href={biz.ctaSecondaryHref ?? (safeSlug === 'kaluna-technology' || safeSlug === 'myboss' ? '/our-works/myboss-iot-system' : safeSlug === 'artic-analytica' ? '/our-works/artic-complex-web' : safeSlug === 'altatic' ? '/our-works/altatic-analytic' : safeSlug === 'web-media' ? '/our-works/web-media-profile' : safeSlug === 'sinau-print' ? '/our-works/sinau-print-erp' : safeSlug === 'loxlive' || safeSlug === 'seveny' ? '/our-works/video-portret-padel-arena' : safeSlug === 'the-drafroom' ? '/our-works/desain-pelatihan-wasit-semarang' : '/our-works')}
              className="inline-flex h-[clamp(47px,3.125vw,60px)] min-w-[clamp(171px,11.719vw,225px)] items-center justify-center rounded-full border border-[#E6FF2A] px-[clamp(24px,1.667vw,32px)] font-body text-[clamp(14px,0.833vw,16px)] font-extrabold leading-[1.2] text-[#F7F7F7] no-underline transition-colors duration-300 hover:bg-[#E6FF2A] hover:text-[#101010] max-[480px]:w-full max-[480px]:max-w-[280px]"
            >
              {biz.ctaSecondaryLabel ?? 'Explore Our Works'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}