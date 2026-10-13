import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';
import { SITE_NAVIGATION_ITEMS } from '@/lib/seo';

const PAGE_DEF = SITE_NAVIGATION_ITEMS.find((item) => item.href === '/insight-programs')!;

export const metadata: Metadata = {
  title: 'Insight & Programs',
  description: PAGE_DEF.description,
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
    description: PAGE_DEF.description,
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
    description: PAGE_DEF.description,
    images: ['/images/insight-programs/case-studies/hero-case-studies.webp'],
  },
};

export default function InsightProgramsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
