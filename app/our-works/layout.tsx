import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Portofolio & Studi Kasus Proyek IT Enterprise Indonesia',
  description:
    'Portofolio karya dan proyek IT Arsalynk di Indonesia: Sistem ERP, IoT, data analytics dashboard, platform digital perusahaan, riset kebijakan & produksi media sinematik.',
  alternates: { canonical: '/our-works' },
  openGraph: {
    title: 'Portofolio & Studi Kasus Proyek IT Enterprise Indonesia | Arsalynk',
    description: 'Proyek teknologi enterprise, riset, komunikasi, dan produksi media terpilih oleh ekosistem Arsalynk.',
    url: '/our-works',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portofolio & Studi Kasus Proyek IT Enterprise Indonesia | Arsalynk',
    description: 'Jelajahi proyek teknologi enterprise, riset, dan media produksi terpilih Arsalynk.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function OurWorksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/our-works`;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Our Works', item: canonicalUrl },
    ],
  };

  return (
    <>
      <Script
        id="our-works-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}
