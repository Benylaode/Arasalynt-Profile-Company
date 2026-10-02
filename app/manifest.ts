import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arsalynk - Enterprise Technology & Business Ecosystem',
    short_name: 'Arsalynk',
    description:
      'Arsalynk menyediakan solusi teknologi enterprise terintegrasi di Indonesia: ERP, IoT, data analytics, software development, dan transformasi digital bisnis.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    lang: 'id',
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
        name: 'Portofolio & Karya',
        url: '/our-works',
        description: 'Jelajahi proyek dan karya terbaik Arsalynk',
        icons: [{ src: '/favicon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Solusi Kami',
        url: '/our-solution',
        description: 'Layanan ERP, IoT, dan solusi enterprise Arsalynk',
        icons: [{ src: '/favicon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Hubungi Kami',
        url: '/contact-us',
        description: 'Konsultasikan kebutuhan teknologi Anda',
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
