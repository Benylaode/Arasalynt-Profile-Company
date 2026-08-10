import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton/WhatsAppFloatingButton';
import HashScrollHandler from '@/components/ui/HashScrollHandler/HashScrollHandler';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — The Unified Enterprise Ecosystem`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/images/logos/logo_blue.webp', type: 'image/webp', sizes: '128x128' }],
    shortcut: '/images/logos/logo_blue.webp',
    apple: [{ url: '/images/logos/logo_blue.webp', type: 'image/webp', sizes: '128x128' }],
  },
  keywords: [
    'Arsalynk',
    'enterprise technology solutions Indonesia',
    'enterprise digital transformation',
    'ERP development Indonesia',
    'IoT integration Indonesia',
    'data analytics and business intelligence',
    'custom enterprise software development',
    'business ecosystem Indonesia',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    url: '/',
    title: `${SITE_NAME} — The Unified Enterprise Ecosystem`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        type: 'image/webp',
        alt: `${SITE_NAME} enterprise ecosystem`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Enterprise Technology & Business Ecosystem`,
    description: SITE_DESCRIPTION,
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/logos/logo_blue.webp`,
          width: 128,
          height: 128,
        },
        description: SITE_DESCRIPTION,
        email: 'hello@arsalynk.com',
        telephone: '+62 821-3939-569',
        sameAs: [
          'https://www.instagram.com/arsalynk',
          'https://www.linkedin.com/company/arsalynk-group/',
          'https://www.facebook.com/share/1bbYtBuoUd/',
        ],
        knowsAbout: [
          'Enterprise Resource Planning',
          'Internet of Things',
          'Enterprise Software Development',
          'Data Analytics',
          'Business Intelligence',
          'Strategic Research',
          'Corporate Communication',
          'Media Production',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Arsalynk Enterprise Solutions',
          itemListElement: [
            'Enterprise Resource Planning',
            'Internet of Things Integration',
            'Data Analytics and Business Intelligence',
            'Enterprise Software Development',
            'Strategic Research and Creative Services',
          ].map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name, provider: { '@id': organizationId } },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { '@id': organizationId },
        inLanguage: 'en',
      },
    ],
  };

  return (
    <html lang="en" className={manrope.variable} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@100,200,300,400,500,600,700,800,900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
      </head>
      <body>
        <HashScrollHandler />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
