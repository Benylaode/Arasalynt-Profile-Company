import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Ecosystem Philosophy',
  description:
    'Learn how Arsalynk connects specialised businesses and disciplines into one collaborative ecosystem for long-term enterprise impact.',
  alternates: { canonical: '/about-us/ecosystem-philosophy' },
  openGraph: {
    title: 'Ecosystem Philosophy | Arsalynk',
    description: 'How specialised businesses collaborate through the Arsalynk ecosystem.',
    url: '/about-us/ecosystem-philosophy',
    images: ['/images/about-us/ecosystem-philosophy-hero.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecosystem Philosophy | Arsalynk',
    description: 'How specialised businesses collaborate through the Arsalynk ecosystem.',
    images: ['/images/about-us/ecosystem-philosophy-hero.webp'],
  },
};

export default function EcosystemPhilosophyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/about-us/ecosystem-philosophy`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}/about-us` },
          { '@type': 'ListItem', position: 3, name: 'Ecosystem Philosophy', item: canonicalUrl },
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Ecosystem Philosophy | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
      },
    ],
  };

  return (
    <>
      <Script
        id="ecosystem-philosophy-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}
