import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton/WhatsAppFloatingButton';
import ArsAIWidget from '@/components/chatbot/ArsAIWidget';
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
    default: 'Arsalynk — Enterprise Technology Solutions Indonesia',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'arsalynk',
    'software house indonesia',
    'enterprise technology',
    'ERP system indonesia',
    'solusi teknologi bisnis',
    'IoT integration indonesia',
    'data analytics',
    'digital transformation',
    'HRMS indonesia',
    'POS retail system',
    'konsultan IT indonesia',
    'custom software development',
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Technology',
  classification: 'Business/Technology',
  // Google Search Console verification — ganti dengan ID verifikasi asli Anda
  // verification: {
  //   google: 'GANTI_DENGAN_GSC_VERIFICATION_TOKEN',
  //   yandex: 'GANTI_DENGAN_YANDEX_TOKEN',
  // },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/images/logos/arsalynk-mark-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    siteName: SITE_NAME,
    url: '/',
    title: `${SITE_NAME} — Enterprise Technology Solutions & Software House Indonesia`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        type: 'image/webp',
        alt: `${SITE_NAME} — Enterprise Technology & Software House Indonesia`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arsalynk',
    creator: '@arsalynk',
    title: `${SITE_NAME} — Enterprise Technology & Software House Indonesia`,
    description: SITE_DESCRIPTION,
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={manrope.variable} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@100,200,300,400,500,600,700,800,900&display=swap"
        />
      </head>
      <body>
        <HashScrollHandler />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
        <ArsAIWidget />
      </body>
    </html>
  );
}
