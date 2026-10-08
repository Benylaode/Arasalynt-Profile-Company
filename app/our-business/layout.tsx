import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Business',
  description:
    'Jelajahi ekosistem bisnis Arsalynk di Indonesia: infrastruktur IT, integrasi IoT, survey & data analytics, media digital, komunikasi strategis, dan konsultasi bisnis enterprise.',
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
    description: 'Temukan portofolio unit bisnis dan kapabilitas enterprise Arsalynk yang terintegrasi di Indonesia.',
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
    description: 'Ekosistem bisnis enterprise Arsalynk yang terintegrasi di Indonesia.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function OurBusinessLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
