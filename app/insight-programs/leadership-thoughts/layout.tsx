import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Leadership Thoughts',
  description:
    'Executive perspectives and strategic insights from Arsalynk leadership on enterprise transformation, data architecture, and organizational resilience.',
  keywords: [
    'enterprise leadership',
    'strategic business insights',
    'enterprise digital transformation',
    'technology leadership',
    'arsalynk leadership thoughts',
    'evidence-based decision making',
  ],
  alternates: { canonical: '/insight-programs/leadership-thoughts' },
  openGraph: {
    title: `Leadership Thoughts | ${SITE_NAME}`,
    description:
      'Executive leadership perspectives on digital transformation, data strategy, and enterprise resilience.',
    url: '/insight-programs/leadership-thoughts',
    images: [
      {
        url: '/images/leadership-thoughts/hero-leadership-thoughts-v2.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Leadership Thoughts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Leadership Thoughts | ${SITE_NAME}`,
    description: 'Enterprise leadership perspectives from Arsalynk.',
    images: ['/images/leadership-thoughts/hero-leadership-thoughts-v2.webp'],
  },
};

export default function LeadershipThoughtsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
