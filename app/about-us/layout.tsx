import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Mengenal Arsalynk: ekosistem bisnis dan software house terintegrasi di Indonesia yang menghubungkan teknologi, data analytics, riset strategis, dan komunikasi bisnis.',
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
    description:
      'Teknologi, data, strategi, komunikasi, dan kapabilitas kreatif terhubung melalui satu ekosistem enterprise.',
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
    description: 'Temukan tujuan dan kapabilitas di balik ekosistem enterprise Arsalynk.',
    images: ['/images/about-us/hero-infinity-new.webp'],
  },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/about-us`;
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: canonicalUrl },
        ],
      },
      {
        '@type': ['WebPage', 'AboutPage'],
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `About Us | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description:
          'Mengenal Arsalynk: ekosistem bisnis dan software house terintegrasi di Indonesia yang menghubungkan teknologi, data analytics, riset strategis, dan komunikasi bisnis.',
        inLanguage: 'id-ID',
        mainEntity: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <>
      <Script
        id="about-us-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  );
}
