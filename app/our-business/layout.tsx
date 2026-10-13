import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';
import { SITE_NAVIGATION_ITEMS } from '@/lib/seo';

const PAGE_DEF = SITE_NAVIGATION_ITEMS.find((item) => item.href === '/our-business')!;

export const metadata: Metadata = {
  title: 'Our Business',
  description: PAGE_DEF.description,
  keywords: [
    'ekosistem bisnis IT',
    'arsalynk business ecosystem',
    'unit bisnis teknologi indonesia',
    'konsultasi strategis IT',
    'layanan media digital indonesia',
    'integrasi sistem enterprise',
  ],
  alternates: { canonical: '/our-business' },
  openGraph: {
    title: 'Our Business | Arsalynk',
    description: PAGE_DEF.description,
    url: '/our-business',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Ekosistem Bisnis Enterprise Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Business | Arsalynk',
    description: PAGE_DEF.description,
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function OurBusinessLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
