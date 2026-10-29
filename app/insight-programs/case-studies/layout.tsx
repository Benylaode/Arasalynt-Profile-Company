import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Comprehensive real-world case studies of Arsalynk enterprise deployments: ERP architecture, IoT telemetry, workflow automation, and data analytics.',
  keywords: [
    'enterprise digital transformation',
    'ERP implementation case study',
    'enterprise IoT solutions',
    'business workflow automation',
    'data analytics case study',
    'arsalynk case studies',
  ],
  alternates: { canonical: '/insight-programs/case-studies' },
  openGraph: {
    title: `Case Studies | ${SITE_NAME}`,
    description:
      'Real-world implementation stories of enterprise technology, research, and digital capabilities by Arsalynk.',
    url: '/insight-programs/case-studies',
    images: [
      {
        url: '/images/insight-programs/case-studies/hero-case-studies.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Case Studies | ${SITE_NAME}`,
    description: 'Enterprise implementation stories from the Arsalynk ecosystem.',
    images: ['/images/insight-programs/case-studies/hero-case-studies.webp'],
  },
};

export default function CaseStudiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
