import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ClientLogoBar from '@/components/sections/ClientLogoBar/ClientLogoBar';
import ITInfrastructure from '@/components/sections/ITInfrastructure/ITInfrastructure';
import BridgePossibility from '@/components/sections/BridgePossibility/BridgePossibility';
import SpecializedByNature from '@/components/sections/SpecializedByNature/SpecializedByNature';
import GrowthMetrics from '@/components/sections/GrowthMetrics/GrowthMetrics';
import ProjectShowcase from '@/components/sections/ProjectShowcase/ProjectShowcase';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { BRAND } from '@/lib/seo/brand';
import { SOLUTION_SERVICES } from '@/lib/our-solution.data';

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} | Solusi Teknologi Enterprise Indonesia` },
  description:
    'Arsalynk adalah penyedia solusi teknologi enterprise & software house di Indonesia. Menghubungkan sistem ERP, integrasi IoT, data analytics, POS, HRMS & transformasi digital bisnis.',
  keywords: [
    'software house indonesia',
    'enterprise technology indonesia',
    'ERP indonesia',
    'solusi teknologi bisnis',
    'IoT integration',
    'data analytics indonesia',
    'arsalynk',
    'transformasi digital',
    'sistem HRMS',
    'POS sistem retail',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: `${SITE_NAME} | Solusi Teknologi Enterprise Indonesia`,
    description:
      'Penyedia solusi teknologi enterprise, software house, sistem ERP, integrasi IoT, dan data analytics terintegrasi di Indonesia.',
    url: '/',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk enterprise technology ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Solusi Teknologi Enterprise Indonesia`,
    description:
      'Solusi teknologi enterprise terintegrasi: ERP, IoT, Data Intelligence, dan Software Development Indonesia.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'Corporation'],
        '@id': `${SITE_URL}/#organization`,
        name: BRAND.name,
        legalName: BRAND.legalName,
        alternateName: BRAND.alternateNames,
        url: `${SITE_URL}/`,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: BRAND.logo,
          contentUrl: BRAND.logo,
          width: 512,
          height: 512,
          caption: BRAND.name,
        },
        image: {
          '@type': 'ImageObject',
          url: BRAND.heroImage,
          width: 1200,
          height: 630,
        },
        description:
          'Arsalynk adalah ekosistem bisnis teknologi enterprise terintegrasi di Indonesia, menyediakan solusi ERP, IoT, data analytics, software development, HRMS, POS, riset strategis, dan transformasi digital.',
        address: BRAND.addresses.map((addr) => ({
          '@type': 'PostalAddress',
          ...addr,
        })),
        telephone: BRAND.phone,
        email: BRAND.email,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: BRAND.phone,
            contactType: 'customer service',
            areaServed: 'ID',
            availableLanguage: ['Indonesian', 'English'],
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '17:00',
            },
          },
          {
            '@type': 'ContactPoint',
            email: BRAND.email,
            contactType: 'sales',
            areaServed: 'ID',
            availableLanguage: ['Indonesian', 'English'],
          },
        ],
        areaServed: {
          '@type': 'Country',
          name: 'Indonesia',
        },
        knowsAbout: [...BRAND.knowsAbout],
        sameAs: [
          BRAND.social.instagram,
          BRAND.social.linkedin,
          BRAND.social.facebook,
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Arsalynk Enterprise Solutions',
          itemListElement: SOLUTION_SERVICES.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': `${SITE_URL}/our-solution/${service.slug}#service`,
              name: service.title,
              url: `${SITE_URL}/our-solution/${service.slug}`,
              provider: { '@id': `${SITE_URL}/#organization` },
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: BRAND.name,
        alternateName: BRAND.alternateNames,
        description:
          'Arsalynk menyediakan solusi teknologi enterprise terintegrasi di Indonesia, meliputi ERP, IoT, data analytics, POS, HRMS, dan transformasi digital bisnis.',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'id-ID',
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: 'Arsalynk | Solusi Teknologi Enterprise Indonesia',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        description:
          'Arsalynk adalah penyedia solusi teknologi enterprise & software house di Indonesia. Menghubungkan sistem ERP, integrasi IoT, data analytics, POS, HRMS & transformasi digital bisnis.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          '@id': `${SITE_URL}/#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${SITE_URL}/`,
            },
          ],
        },
        inLanguage: 'id-ID',
      },
    ],
  };

  return (
    <main>
      <JsonLd id="home-website-schema" data={homeSchema} />

      <HeroSection />

      <section
        aria-labelledby="arsalynk-brand-overview"
        className="border-b border-black/10 bg-[#F7F7F7] px-[6vw] py-8 max-[1199px]:px-[4vw] md:py-10"
      >
        <div className="mx-auto grid max-w-[1600px] gap-7 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div>
            <p className="mb-2 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-[#1A3E9E]">
              Arsalynk
            </p>
            <h2
              id="arsalynk-brand-overview"
              className="font-heading text-[clamp(26px,2.2vw,38px)] font-medium leading-[1.18] tracking-[-0.02em] text-[#101010]"
            >
              Enterprise technology solutions, connected through one ecosystem.
            </h2>
            <p className="mt-3 max-w-[820px] font-body text-[14px] leading-[1.75] text-[#555] md:text-[15px]">
              Arsalynk adalah ekosistem teknologi enterprise Indonesia yang menghubungkan ERP, IoT,
              data analytics, software development, riset, dan kapabilitas bisnis untuk transformasi digital yang terukur.
            </p>
          </div>

          <nav
            aria-label="Explore Arsalynk"
            className="grid grid-cols-2 gap-2 sm:grid-cols-3"
          >
            {[
              ['About Us', '/about-us'],
              ['Our Business', '/our-business'],
              ['Our Solution', '/our-solution'],
              ['Our Works', '/our-works'],
              ['Insight & Programs', '/insight-programs'],
              ['Contact Us', '/contact-us'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-black/10 bg-white px-4 py-3 font-body text-[13px] font-medium text-[#101010] no-underline transition hover:border-[#1A3E9E] hover:text-[#1A3E9E]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <ClientLogoBar />
      <ITInfrastructure />
      <BridgePossibility />
      <SpecializedByNature />
      <GrowthMetrics />
      <div data-nosnippet>
        <ProjectShowcase />
      </div>
      <Testimonials />
      <BeyondExpectations />
    </main>
  );
}
