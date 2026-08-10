import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Projects & Portfolio',
  description: 'Explore Arsalynk projects across ERP, e-commerce, IoT, analytics, corporate platforms, research, learning design, and media production.',
  keywords: ['Arsalynk portfolio', 'enterprise technology projects', 'ERP case study Indonesia', 'IoT portfolio Indonesia', 'data analytics projects'],
  alternates: { canonical: '/our-works' },
  openGraph: {
    title: 'Enterprise Projects & Portfolio | Arsalynk',
    description: 'Selected enterprise technology, research, communication, and production projects by the Arsalynk ecosystem.',
    url: '/our-works',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
  twitter: { card: 'summary_large_image', title: 'Enterprise Projects & Portfolio | Arsalynk', description: 'Explore selected technology, research, communication, and production projects.', images: ['/images/our-works/our-works-hero-bg.webp'] },
};

export default function OurWorksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
