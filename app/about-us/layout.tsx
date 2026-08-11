import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tentang Kami & Ekosistem Teknologi Enterprise',
  description:
    'Mengenal Arsalynk: Ekosistem bisnis & software house terintegrasi di Indonesia yang menghubungkan solusi teknologi, data analytics, riset strategis, dan komunikasi bisnis.',
  alternates: { canonical: '/about-us' },
  openGraph: {
    title: 'Tentang Arsalynk — Software House & Ekosistem Teknologi Enterprise | Arsalynk',
    description: 'Teknologi, data, strategi, komunikasi, dan kapabilitas kreatif terhubung melalui satu ekosistem enterprise.',
    url: '/about-us',
    images: ['/images/about-us/hero-infinity-new.webp'],
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
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: canonicalUrl },
    ],
  };

  return (
    <>
      <Script
        id="about-us-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}
