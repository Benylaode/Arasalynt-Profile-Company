import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: 'Insight, Riset & Program Transformasi Digital',
    template: `%s | Insight & Programs | ${SITE_NAME}`,
  },
  description:
    'Kumpulan wawasan, studi kasus, dan pemikiran kepemimpinan dari ekosistem Arsalynk tentang transformasi digital enterprise di Indonesia.',
  keywords: [
    'insight transformasi digital',
    'program enterprise indonesia',
    'artikel strategi bisnis IT',
    'arsalynk insight programs',
    'riset enterprise indonesia',
  ],
  alternates: { canonical: '/insight-programs' },
  openGraph: {
    title: 'Insight, Riset & Program Transformasi Digital | Arsalynk',
    description: 'Wawasan dan pemikiran kepemimpinan dari ekosistem enterprise Arsalynk tentang transformasi digital Indonesia.',
    url: '/insight-programs',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Insight & Programs Transformasi Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insight, Riset & Program Transformasi Digital | Arsalynk',
    description: 'Wawasan dan pemikiran kepemimpinan dari ekosistem enterprise Arsalynk.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function InsightProgramsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/insight-programs`;
  const insightSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Insight & Programs', item: canonicalUrl },
        ],
      },
      {
        '@type': ['WebPage', 'CollectionPage'],
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Insight, Riset & Program Transformasi Digital | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description:
          'Kumpulan wawasan, studi kasus, dan pemikiran kepemimpinan dari ekosistem Arsalynk tentang transformasi digital enterprise di Indonesia.',
        inLanguage: 'id-ID',
        publisher: { '@id': `${SITE_URL}/#organization` },
        hasPart: [
          {
            '@type': 'WebPage',
            name: 'Studi Kasus',
            url: `${SITE_URL}/insight-programs/case-studies`,
            description: 'Kumpulan studi kasus implementasi proyek IT enterprise Arsalynk di Indonesia.',
          },
          {
            '@type': 'WebPage',
            name: 'Leadership Thoughts',
            url: `${SITE_URL}/insight-programs/leadership-thoughts`,
            description: 'Perspektif dan pemikiran para pemimpin Arsalynk tentang transformasi enterprise.',
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="insight-programs-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insightSchema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}
