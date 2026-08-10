import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Leadership',
  description: 'Meet the Arsalynk leadership team guiding an integrated enterprise ecosystem across technology, strategy, data, and creative capabilities.',
  keywords: ['Arsalynk leadership', 'enterprise leadership Indonesia', 'technology business leadership'],
  alternates: { canonical: '/about-us/company-leadership' },
  openGraph: { title: 'Company Leadership | Arsalynk', description: 'Meet the leaders guiding the Arsalynk enterprise ecosystem.', url: '/about-us/company-leadership', images: ['/images/about-us/company-leadership-hero.webp'] },
  twitter: { card: 'summary_large_image', title: 'Company Leadership | Arsalynk', description: 'Meet the leaders guiding the Arsalynk enterprise ecosystem.', images: ['/images/about-us/company-leadership-hero.webp'] },
};

export default function CompanyLeadershipLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
