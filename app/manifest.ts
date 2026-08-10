import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arsalynk — Enterprise Technology & Business Ecosystem',
    short_name: 'Arsalynk',
    description: 'Integrated enterprise technology, data, strategy, and creative capabilities.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F7F7',
    theme_color: '#1A3E9E',
    icons: [{ src: '/images/logos/logo_blue.webp', sizes: '128x128', type: 'image/webp' }],
  };
}
