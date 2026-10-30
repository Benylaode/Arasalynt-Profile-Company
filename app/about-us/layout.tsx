import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';
import { SITE_NAVIGATION_ITEMS } from '@/lib/seo';

const PAGE_DEF = SITE_NAVIGATION_ITEMS.find((item) => item.href === '/about-us')!;

export const metadata: Metadata = {
  title: 'About Us',
  description: PAGE_DEF.description,
  keywords: [
    'about arsalynk',
    'tentang arsalynk',
    'ekosistem teknologi enterprise indonesia',
    'profil perusahaan IT indonesia',
    'enterprise software house profile',
    'visi misi arsalynk',
    'executive leadership team',
    'PT Sinergi Muda Arsa',
    'enterprise technology ecosystem',
  ],
  alternates: { canonical: '/about-us' },
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description: PAGE_DEF.description,
    url: '/about-us',
    images: [
      {
        url: '/images/about-us/hero-infinity-new.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Enterprise Technology Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Us | ${SITE_NAME}`,
    description: PAGE_DEF.description,
    images: ['/images/about-us/hero-infinity-new.webp'],
  },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
