import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';
import { SITE_NAVIGATION_ITEMS } from '@/lib/seo';

const PAGE_DEF = SITE_NAVIGATION_ITEMS.find((item) => item.href === '/our-solution')!;

export const metadata: Metadata = {
  title: 'Our Solution',
  description: PAGE_DEF.description,
  keywords: [
    'enterprise ERP solutions',
    'layanan ERP enterprise indonesia',
    'sistem ERP custom',
    'enterprise system management',
    'IoT hardware integration',
    'integrasi IoT industri',
    'deep learning data engineering',
    'POS retail systems',
    'enterprise HRMS',
    'custom software development',
    'arsalynk solutions',
  ],
  alternates: { canonical: '/our-solution' },
  openGraph: {
    title: 'Our Solution | Arsalynk',
    description: PAGE_DEF.description,
    url: '/our-solution',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Enterprise Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Solution | Arsalynk',
    description: PAGE_DEF.description,
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function OurSolutionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
