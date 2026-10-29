import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Business | Private Route',
  description: 'Internal Arsalynk business ecosystem directory.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: { canonical: '/our-business' },
};

export default function OurBusinessLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
