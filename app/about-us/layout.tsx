import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { buildBreadcrumbJsonLd, SITE_NAVIGATION_ITEMS } from '@/lib/seo';

const PAGE_DEF = SITE_NAVIGATION_ITEMS.find((item) => item.href === '/about-us')!;

export const metadata: Metadata = {
  title: 'About Us',
  description: PAGE_DEF.description,
  keywords: [
    'tentang arsalynk',
    'ekosistem teknologi enterprise indonesia',
    'profil perusahaan IT',
    'software house profile',
    'visi misi arsalynk',
    'tim teknologi indonesia',
  ],
  alternates: { canonical: '/about-us' },
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description: PAGE_DEF.description,
    url: '/about-us',
    images: [
      {
        url: '/images/about-us/hero-infinity-new.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Ekosistem Teknologi Enterprise Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Us | ${SITE_NAME}`,
    description: PAGE_DEF.description,
    images: ['/images/about-us/hero-infinity-new.webp'],
  },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/about-us`;
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@id': `${canonicalUrl}#breadcrumb`,
        ...buildBreadcrumbJsonLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'About Us', url: canonicalUrl },
        ]),
      },
      {
        '@type': ['WebPage', 'AboutPage'],
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `About Us | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description: PAGE_DEF.description,
        inLanguage: 'id-ID',
        mainEntity: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <>
      <JsonLd id="about-us-schema" data={aboutSchema} />
      {children}
    </>
  );
}
