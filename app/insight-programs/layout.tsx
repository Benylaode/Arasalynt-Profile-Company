import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Insight & Programs',
  description:
    'Studi kasus implementasi sistem enterprise dan pemikiran kepemimpinan strategis dari ekosistem Arsalynk di Indonesia.',
  keywords: [
    'insight and programs',
    'studi kasus arsalynk',
    'leadership thoughts',
    'case studies teknologi enterprise',
    'transformasi digital indonesia',
    'artikel teknologi bisnis',
  ],
  alternates: { canonical: '/insight-programs' },
  openGraph: {
    title: `Insight & Programs | ${SITE_NAME}`,
    description:
      'Studi kasus implementasi nyata dan perspektif kepemimpinan dari ekosistem Arsalynk.',
    url: '/insight-programs',
    images: [
      {
        url: '/images/insight-programs/case-studies/hero-case-studies.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Insight & Programs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Insight & Programs | ${SITE_NAME}`,
    description: 'Knowledge, implementasi, dan perspektif dari ekosistem Arsalynk.',
    images: ['/images/insight-programs/case-studies/hero-case-studies.webp'],
  },
};

export default function InsightProgramsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
