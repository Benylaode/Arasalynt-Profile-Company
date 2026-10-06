import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Company Leadership',
  description:
    'Meet the Arsalynk leadership team guiding an integrated enterprise ecosystem across technology, strategy, data, and creative capabilities.',
  alternates: { canonical: '/about-us/company-leadership' },
  openGraph: {
    title: 'Company Leadership | Arsalynk',
    description: 'Meet the leaders guiding the Arsalynk enterprise ecosystem.',
    url: '/about-us/company-leadership',
    images: ['/images/about-us/company-leadership-hero.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Leadership | Arsalynk',
    description: 'Meet the leaders guiding the Arsalynk enterprise ecosystem.',
    images: ['/images/about-us/company-leadership-hero.webp'],
  },
};

export default function CompanyLeadershipLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/about-us/company-leadership`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}/about-us` },
          { '@type': 'ListItem', position: 3, name: 'Company Leadership', item: canonicalUrl },
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Company Leadership | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
      },
    ],
  };

  return (
    <>
      <Script
        id="company-leadership-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}
