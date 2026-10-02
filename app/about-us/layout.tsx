import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tentang Kami & Ekosistem Teknologi Enterprise',
  description:
    'Mengenal Arsalynk: Ekosistem bisnis & software house terintegrasi di Indonesia yang menghubungkan solusi teknologi, data analytics, riset strategis, dan komunikasi bisnis.',
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
    title: 'Tentang Arsalynk — Software House & Ekosistem Teknologi Enterprise | Arsalynk',
    description: 'Teknologi, data, strategi, komunikasi, dan kapabilitas kreatif terhubung melalui satu ekosistem enterprise.',
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
    title: 'Tentang Arsalynk — Software House & Ekosistem Teknologi Enterprise | Arsalynk',
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
          { '@type': 'ListItem', position: 2, name: 'Tentang Kami', item: canonicalUrl },
        ],
      },
      {
        '@type': ['WebPage', 'AboutPage'],
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Tentang Arsalynk — Software House & Ekosistem Teknologi Enterprise | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description:
          'Mengenal Arsalynk: Ekosistem bisnis & software house terintegrasi di Indonesia yang menghubungkan solusi teknologi, data analytics, riset strategis, dan komunikasi bisnis.',
        inLanguage: 'id-ID',
        mainEntity: { '@id': `${SITE_URL}/#organization` },
      },
      {
        // Sub-navigasi About Us → Google Sitelinks Expanded
        '@type': 'ItemList',
        name: 'Halaman Tentang Arsalynk',
        itemListElement: [
          {
            '@type': 'SiteNavigationElement',
            position: 1,
            name: 'Profil Perusahaan',
            description: 'Latar belakang, perjalanan, dan profil lengkap perusahaan Arsalynk.',
            url: `${SITE_URL}/about-us/corporate-profile`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 2,
            name: 'Kepemimpinan Perusahaan',
            description: 'Tim pemimpin dan penggerak ekosistem bisnis Arsalynk.',
            url: `${SITE_URL}/about-us/company-leadership`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'Filosofi Ekosistem',
            description: 'Pendekatan dan filosofi di balik model ekosistem enterprise Arsalynk.',
            url: `${SITE_URL}/about-us/ecosystem-philosophy`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="about-us-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}
