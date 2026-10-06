import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Hubungi tim Arsalynk di Indonesia untuk konsultasi sistem ERP, integrasi IoT, data analytics, software development, riset bisnis, dan produksi media.',
  keywords: [
    'konsultasi IT enterprise',
    'hubungi arsalynk',
    'kontak software house indonesia',
    'konsultan ERP indonesia',
    'project IT consultation',
    'digital transformation consultation',
  ],
  alternates: { canonical: '/contact-us' },
  openGraph: {
    title: `Contact Us | ${SITE_NAME}`,
    description:
      'Diskusikan kebutuhan teknologi enterprise, sistem software, data, atau media produksi Anda bersama tim Arsalynk.',
    url: '/contact-us',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Arsalynk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact Us | ${SITE_NAME}`,
    description: 'Mulai diskusi bersama tim solusi enterprise Arsalynk.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/contact-us`;
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Contact Us', item: canonicalUrl },
        ],
      },
      {
        '@type': ['ContactPage', 'WebPage'],
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Contact Us | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description:
          'Hubungi tim Arsalynk di Indonesia untuk konsultasi sistem ERP, integrasi IoT, data analytics, software development, riset bisnis, dan produksi media.',
        inLanguage: 'id-ID',
        mainEntity: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: SITE_URL,
          telephone: '+62-878-6276-6846',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+62-878-6276-6846',
            contactType: 'customer service',
            areaServed: 'ID',
            availableLanguage: ['Indonesian', 'English'],
          },
        },
      },
    ],
  };

  return (
    <>
      <script
        id="contact-us-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  );
}
