import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Studi Kasus Transformasi Digital & Sistem IT Enterprise',
  description:
    'Kumpulan studi kasus implementasi proyek Arsalynk di Indonesia: Sistem ERP, IoT, otomasi workflow bisnis, data analytics, riset strategis & media sinematik.',
  alternates: { canonical: '/insight-programs/case-studies' },
  openGraph: {
    title: 'Studi Kasus Transformasi Digital & Sistem IT Enterprise | Arsalynk',
    description: 'Cerita nyata implementasi sistem enterprise, teknologi, riset, dan kapabilitas kreatif oleh Arsalynk.',
    url: '/insight-programs/case-studies',
    images: [{ url: '/images/insight-programs/case-studies/hero-case-studies.webp', width: 1200, height: 630, alt: 'Arsalynk Enterprise Case Studies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studi Kasus Transformasi Digital & Sistem IT Enterprise | Arsalynk',
    description: 'Cerita nyata implementasi dari ekosistem Arsalynk.',
    images: ['/images/insight-programs/case-studies/hero-case-studies.webp'],
  },
};

export default function CaseStudiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/insight-programs/case-studies`;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Insight & Programs', item: canonicalUrl },
      { '@type': 'ListItem', position: 3, name: 'Case Studies', item: canonicalUrl },
    ],
  };

  return (
    <>
      <Script
        id="case-studies-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}
