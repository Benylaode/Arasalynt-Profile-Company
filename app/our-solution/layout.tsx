import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Solution',
  description:
    'Layanan solusi teknologi enterprise Arsalynk di Indonesia: Pengembangan sistem ERP, integrasi hardware IoT, POS retail, HRMS, data analytics, dan otomasi bisnis terintegrasi.',
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
    description: 'Layanan ERP, IoT, POS, HRMS, data analytics, dan pengembangan software enterprise terintegrasi oleh Arsalynk.',
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
    description: 'ERP, IoT, POS, HRMS, data analytics, dan software development enterprise oleh Arsalynk.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function OurSolutionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
