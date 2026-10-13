import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';
import { SITE_NAVIGATION_ITEMS } from '@/lib/seo';

const PAGE_DEF = SITE_NAVIGATION_ITEMS.find((item) => item.href === '/our-solution')!;

export const metadata: Metadata = {
  title: 'Our Solution',
  description: PAGE_DEF.description,
  keywords: [
    'solusi ERP indonesia',
    'sistem enterprise indonesia',
    'integrasi IoT hardware',
    'POS retail system',
    'HRMS indonesia',
    'data analytics enterprise',
    'custom software development indonesia',
    'arsalynk solution',
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
        alt: 'Arsalynk — Solusi Teknologi Enterprise Indonesia',
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
