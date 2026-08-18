import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arsalynk - Enterprise Technology & Business Ecosystem',
    short_name: 'Arsalynk',
    description: 'Integrated enterprise technology, data, strategy, and creative capabilities.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [
      { src: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/images/logos/arsalynk-mark-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
