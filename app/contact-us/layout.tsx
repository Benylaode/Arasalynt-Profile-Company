import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Konsultasi Solusi Teknologi Enterprise',
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
    title: 'Hubungi Arsalynk — Konsultasi Proyek IT & Software House Enterprise | Arsalynk',
    description: 'Diskusikan kebutuhan teknologi enterprise, sistem software, data, atau media produksi Anda bersama tim Arsalynk.',
    url: '/contact-us',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Hubungi Tim Arsalynk — Konsultasi IT Enterprise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hubungi Arsalynk — Konsultasi Proyek IT & Software House Enterprise',
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
          { '@type': 'ListItem', position: 2, name: 'Hubungi Kami', item: canonicalUrl },
        ],
      },
      {
        '@type': ['ContactPage', 'WebPage'],
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Hubungi Arsalynk — Konsultasi Solusi Teknologi Enterprise | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description:
          'Hubungi tim Arsalynk di Indonesia untuk konsultasi sistem ERP, integrasi IoT, data analytics, software development, riset bisnis, dan produksi media.',
        inLanguage: 'id-ID',
        mainEntity: { '@id': `${SITE_URL}/#organization` },
      },
      {
        // LocalBusiness: memperkuat sinyal lokasi fisik untuk Google Maps & GMB
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: 'Arsalynk',
        image: `${SITE_URL}/images/logos/arsalynk-mark-512.png`,
        url: SITE_URL,
        telephone: '+62-878-6276-6846',
        email: 'corporate.arsalynk@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Menara Rajawali 26th Floor, Jl. DR. Ide Anak Agung Gde Agung',
          addressLocality: 'Jakarta Selatan',
          addressRegion: 'DKI Jakarta',
          postalCode: '12950',
          addressCountry: 'ID',
        },
        geo: {
          '@type': 'GeoCoordinates',
          // Koordinat Menara Rajawali, Mega Kuningan, Jakarta Selatan
          latitude: -6.2290,
          longitude: 106.8271,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
        sameAs: [
          'https://www.instagram.com/arsalynk',
          'https://www.linkedin.com/company/arsalynk-group/',
          'https://www.facebook.com/share/1bbYtBuoUd/',
        ],
        priceRange: 'Rp Rp Rp',
        currenciesAccepted: 'IDR',
        paymentAccepted: 'Transfer Bank, Invoice',
        areaServed: { '@type': 'Country', name: 'Indonesia' },
      },
    ],
  };

  return (
    <>
      <Script
        id="contact-us-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}
