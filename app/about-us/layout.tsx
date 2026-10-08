import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Mengenal Arsalynk: ekosistem bisnis dan software house terintegrasi di Indonesia yang menghubungkan teknologi, data analytics, riset strategis, dan komunikasi bisnis.',
  keywords: [
    'tentang arsalynk',
    'ekosistem teknologi enterprise indonesia',
    'profil perusahaan IT',
    'software house profile',
    'visi misi arsalynk',
    'tim teknologi indonesia',
  ],
  alternates: { canonical: '/about-us' },
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description:
      'Teknologi, data, strategi, komunikasi, dan kapabilitas kreatif terhubung melalui satu ekosistem enterprise.',
    url: '/about-us',
    images: [
      {
        url: '/images/about-us/hero-infinity-new.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Ekosistem Teknologi Enterprise Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Us | ${SITE_NAME}`,
    description: 'Temukan tujuan dan kapabilitas di balik ekosistem enterprise Arsalynk.',
    images: ['/images/about-us/hero-infinity-new.webp'],
  },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
