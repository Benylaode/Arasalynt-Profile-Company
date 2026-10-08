import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Works',
  description:
    'Portofolio karya dan proyek Arsalynk di Indonesia: sistem ERP, IoT, data analytics dashboard, platform digital perusahaan, riset kebijakan, dan produksi media.',
  keywords: [
    'portofolio IT indonesia',
    'studi kasus proyek enterprise',
    'implementasi ERP indonesia',
    'proyek IoT indonesia',
    'dashboard data analytics',
    'software house portfolio',
    'karya arsalynk',
  ],
  alternates: { canonical: '/our-works' },
  openGraph: {
    title: `Our Works | ${SITE_NAME}`,
    description:
      'Proyek teknologi enterprise, riset, komunikasi, dan produksi media terpilih oleh ekosistem Arsalynk.',
    url: '/our-works',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Our Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Our Works | ${SITE_NAME}`,
    description: 'Jelajahi proyek teknologi enterprise, riset, dan media produksi terpilih Arsalynk.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function OurWorksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
