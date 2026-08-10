import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadership Thoughts',
  description: 'Perspectives from Arsalynk leaders on enterprise transformation, data leadership, strategy, organisational design, and communication.',
  keywords: ['enterprise leadership insights', 'digital transformation strategy', 'data leadership', 'business strategy Indonesia', 'Arsalynk leadership'],
  alternates: { canonical: '/insight-programs/leadership-thoughts' },
  openGraph: { title: 'Leadership Thoughts | Arsalynk', description: 'Perspectives on transformation, data leadership, strategy, organisational design, and communication.', url: '/insight-programs/leadership-thoughts', images: ['/images/leadership-thoughts/hero-leadership-thoughts-v2.webp'] },
  twitter: { card: 'summary_large_image', title: 'Leadership Thoughts | Arsalynk', description: 'Enterprise perspectives from Arsalynk leaders.', images: ['/images/leadership-thoughts/hero-leadership-thoughts-v2.webp'] },
};

export default function LeadershipThoughtsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
