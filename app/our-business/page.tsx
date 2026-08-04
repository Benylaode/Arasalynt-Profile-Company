import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { getAllBusinesses } from '@/lib/db/actions';

export const metadata: Metadata = {
  title: 'Our Business — Arsalynt',
  description:
    'Explore the Arsalynt ecosystem — from IT infrastructure and data analytics to media, branding, and beyond.',
};

type Business = Awaited<ReturnType<typeof getAllBusinesses>>[number];

/*
 * Simpan file hero hasil ekstraksi dari referensi SVG pada:
 * public/images/our-business/hero-business.webp
 */
const HERO_IMAGE = '/images/our-business/hero-business.webp';

const MEDIA_ORDER = [
  'loxlive',
  'personice',
  'adsvar',
  'ilusia',
  'seveny',
  'drafroom',
];

function normalize(value: string | null | undefined) {
  return (value ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function getBusinessSearchKey(business: Business) {
  return normalize(`${business.name} ${business.slug} ${business.category}`);
}

function getMediaOrder(business: Business) {
  const key = getBusinessSearchKey(business);
  const index = MEDIA_ORDER.findIndex((item) => key.includes(item));
  return index === -1 ? MEDIA_ORDER.length : index;
}

function getTopOrder(business: Business) {
  const category = normalize(business.category);
  if (category.includes('iot') || category.includes('it infrastructure')) return 0;
  if (category.includes('data survey') || category.includes('data analytics')) return 1;
  return 2;
}

function getTopLabel(business: Business) {
  const category = normalize(business.category);

  if (category.includes('iot') || category.includes('it infrastructure')) {
    return 'IoT & Technology Integration';
  }

  return 'Data Survey and Analytics';
}

function IconChevronDown() {
  return (
    <svg
      width="32"
      height="21"
      viewBox="0 0 32 21"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2.25L16 16.25L30 2.25"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 3.167C10.258 3.167 3.167 10.258 3.167 19c0 2.794.726 5.418 1.999 7.698L3.167 34.833l8.333-1.949A15.74 15.74 0 0 0 19 34.833c8.742 0 15.833-7.091 15.833-15.833S27.742 3.167 19 3.167Zm0 28.5a12.6 12.6 0 0 1-6.442-1.76l-.457-.272-4.945 1.156 1.19-4.824-.298-.478A12.61 12.61 0 0 1 6.333 19C6.333 12.005 12.005 6.333 19 6.333S31.667 12.005 31.667 19 25.995 31.667 19 31.667Zm7.328-9.479c-.4-.2-2.365-1.166-2.732-1.299-.366-.133-.633-.2-.899.2-.267.4-1.033 1.299-1.266 1.566-.233.266-.466.3-.866.1-.4-.2-1.688-.622-3.215-1.982-1.189-1.06-1.991-2.37-2.224-2.77-.233-.4-.025-.616.175-.815.18-.179.4-.466.6-.7.2-.233.266-.4.399-.666.134-.267.067-.5-.033-.7-.1-.2-.9-2.166-1.233-2.965-.325-.779-.655-.673-.9-.686l-.766-.014c-.267 0-.7.1-1.066.5-.366.4-1.399 1.366-1.399 3.332 0 1.966 1.433 3.865 1.633 4.132.2.266 2.82 4.305 6.832 6.038.954.412 1.699.658 2.279.842.957.304 1.828.261 2.516.158.768-.114 2.365-.966 2.698-1.899.333-.933.333-1.733.233-1.899-.1-.167-.366-.267-.766-.467Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[45px] items-center gap-[10px] py-[11px]">
      <span
        className="h-2 w-2 shrink-0 bg-[#1A3E9E]"
        aria-hidden="true"
      />
      <h2 className="font-body text-[28px] font-semibold leading-[1.6] tracking-[-0.02em] text-[#101010] max-[1280px]:text-[22px] max-[768px]:text-[17px]">
        {children}
      </h2>
    </div>
  );
}

function BusinessCard({
  business,
  media = false,
}: {
  business: Business;
  media?: boolean;
}) {
  return (
    <Link
      href={`/our-business/${business.slug}`}
      aria-label={`Open ${business.name}`}
      className="group relative block aspect-[167/100] w-full overflow-hidden rounded-[24px] bg-[#8C8C8C] no-underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A3E9E]/35 max-[768px]:rounded-[16px]"
    >
      {business.heroImg ? (
        <img
          src={business.heroImg}
          alt={business.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
        />
      ) : null}

      {media ? (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[80%]"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)',
          }}
          aria-hidden="true"
        />
      ) : (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(16,16,16,0) 9.62%, #101010 100%)',
          }}
          aria-hidden="true"
        />
      )}

      <div className="absolute inset-x-0 bottom-[22px] z-[2] px-[49px] max-[1280px]:bottom-[18px] max-[1280px]:px-[34px] max-[768px]:bottom-[14px] max-[768px]:px-[20px]">
        <h3 className="font-heading text-[64px] font-medium leading-[1.2] tracking-[-0.02em] text-[#F7F7F7] max-[1536px]:text-[50px] max-[1280px]:text-[42px] max-[1024px]:text-[34px] max-[768px]:text-[28px] max-[480px]:text-[23px]">
          {business.name}
        </h3>
      </div>
    </Link>
  );
}

export default async function OurBusinessPage() {
  const allBusinesses = await getAllBusinesses();

  const topRow = allBusinesses
    .filter((business) => {
      const category = normalize(business.category);
      return (
        category.includes('iot') ||
        category.includes('it infrastructure') ||
        category.includes('data survey') ||
        category.includes('data analytics')
      );
    })
    .sort((a, b) => getTopOrder(a) - getTopOrder(b));

  const mediaRow = allBusinesses
    .filter((business) => {
      const category = normalize(business.category);
      return (
        category.includes('digital media') ||
        category === 'media' ||
        category.includes('media branding') ||
        category.includes('public relations') ||
        category.includes('performance marketing') ||
        category.includes('creative studio') ||
        category.includes('event')
      );
    })
    .sort((a, b) => getMediaOrder(a) - getMediaOrder(b));

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7]">
      {/* HERO */}
      <section
        id="hero"
        aria-label="Our Business"
        className="relative h-[800px] w-full overflow-hidden rounded-b-[42px] bg-[#132B75] max-[1024px]:h-[680px] max-[768px]:h-[590px] max-[480px]:h-[540px] max-[768px]:rounded-b-[28px]"
      >
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 z-[2] flex items-center justify-center px-6">
          <div className="flex w-full max-w-[766px] flex-col items-center gap-6 text-center max-[768px]:gap-[18px]">
            <div className="flex items-center justify-center gap-2 font-body text-[9px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A] max-[768px]:text-[7px]">
              <span>Home</span>
              <span aria-hidden="true">›</span>
              <span>Our Business</span>
            </div>

            <h1 className="font-heading text-[96px] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7] max-[1280px]:text-[78px] max-[1024px]:text-[68px] max-[768px]:text-[52px] max-[480px]:text-[42px]">
              Our Business
            </h1>

            <p className="max-w-[766px] font-body text-[20px] font-normal leading-[1.6] tracking-[0.02em] text-white max-[1024px]:max-w-[650px] max-[1024px]:text-[18px] max-[768px]:max-w-[520px] max-[768px]:text-[15px] max-[480px]:text-[14px]">
              An integrated ecosystem of capabilities designed to solve complex
              challenges, accelerate growth, and create measurable business
              impact.
            </p>
          </div>
        </div>

        <a
          href="#business-content"
          aria-label="Scroll to business divisions"
          className="absolute bottom-[71px] left-1/2 z-[4] flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(175,175,175,0.25)] text-white backdrop-blur-[4px] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 max-[768px]:bottom-[48px] max-[768px]:h-14 max-[768px]:w-14 max-[768px]:[&_svg]:h-[15px] max-[768px]:[&_svg]:w-[24px]"
          style={{
            background:
              'linear-gradient(230.45deg, rgba(247,247,247,0.21) -7.74%, rgba(247,247,247,0.105) 81.5%)',
          }}
        >
          <IconChevronDown />
        </a>
      </section>

      <div id="business-content" className="scroll-mt-24">
        {/* TOP BUSINESS ROW */}
        <section
          aria-label="Technology and analytics businesses"
          className="w-full bg-[#F7F7F7] pb-8 pt-24 max-[1024px]:pt-16 max-[768px]:pb-6 max-[768px]:pt-12"
        >
          <div className="mx-auto grid w-full max-w-[1920px] grid-cols-2 gap-[30px] px-[110px] max-[1536px]:px-[64px] max-[1024px]:gap-6 max-[1024px]:px-10 max-[768px]:grid-cols-1 max-[768px]:gap-10 max-[768px]:px-6 max-[480px]:px-4">
            {topRow.map((business) => (
              <article key={business.slug} className="flex min-w-0 flex-col gap-4">
                <SectionLabel>{getTopLabel(business)}</SectionLabel>
                <BusinessCard business={business} />
              </article>
            ))}
          </div>
        </section>

        {/* DIGITAL MEDIA & SOCIAL IMPACT */}
        {mediaRow.length > 0 ? (
          <section
            aria-label="Digital Media and Social Impact"
            className="w-full bg-[#F7F7F7] pb-24 pt-8 max-[768px]:pb-16 max-[768px]:pt-6"
          >
            <div className="mx-auto w-full max-w-[1920px] px-[110px] max-[1536px]:px-[64px] max-[1024px]:px-10 max-[768px]:px-6 max-[480px]:px-4">
              <SectionLabel>Digital Media &amp; Social Impact</SectionLabel>

              <div className="mt-[22px] grid grid-cols-2 gap-[30px] max-[1024px]:gap-6 max-[768px]:grid-cols-1">
                {mediaRow.map((business) => (
                  <BusinessCard
                    key={business.slug}
                    business={business}
                    media
                  />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
