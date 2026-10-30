import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arsalynk - Enterprise Technology & Business Ecosystem',
    short_name: 'Arsalynk',
    description:
      'Arsalynk provides integrated enterprise technology solutions: custom ERP architecture, deep learning AI, smart IoT telemetry, and web development.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    lang: 'en',
    dir: 'ltr',
    orientation: 'any',
    categories: ['business', 'productivity', 'utilities'],
    icons: [
      { src: '/favicon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/favicon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      { src: '/icon.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/images/logos/arsalynk-mark-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
    shortcuts: [
      {
        name: 'Project Case Studies',
        url: '/insight-programs/case-studies',
        description: 'Explore Arsalynk enterprise project implementation case studies',
        icons: [{ src: '/favicon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Our Solutions',
        url: '/our-solution',
        description: 'ERP architecture, IoT, AI, and enterprise development solutions',
        icons: [{ src: '/favicon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Contact Us',
        url: '/contact-us',
        description: 'Consult your enterprise technology requirements with our engineering team',
        icons: [{ src: '/favicon-192x192.png', sizes: '192x192' }],
      },
    ],
    related_applications: [
      {
        platform: 'web',
        url: SITE_URL,
      },
    ],
  };
}
