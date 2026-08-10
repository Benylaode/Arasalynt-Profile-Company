import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecosystem Philosophy',
  description: 'Learn how Arsalynk connects specialised businesses and disciplines into one collaborative ecosystem for long-term enterprise impact.',
  keywords: ['Arsalynk ecosystem philosophy', 'collaborative business ecosystem', 'sustainable digital transformation'],
  alternates: { canonical: '/about-us/ecosystem-philosophy' },
  openGraph: { title: 'Ecosystem Philosophy | Arsalynk', description: 'How specialised businesses collaborate through the Arsalynk ecosystem.', url: '/about-us/ecosystem-philosophy', images: ['/images/about-us/ecosystem-philosophy-hero.webp'] },
  twitter: { card: 'summary_large_image', title: 'Ecosystem Philosophy | Arsalynk', description: 'How specialised businesses collaborate through the Arsalynk ecosystem.', images: ['/images/about-us/ecosystem-philosophy-hero.webp'] },
};

export default function EcosystemPhilosophyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
