import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Izinkan Googlebot mengindeks semua konten publik
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        // Izinkan Bingbot untuk indexing Microsoft Bing
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        // Izinkan GPTBot (ChatGPT) untuk brand awareness
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        // Batasi AdsBot agar tidak crawl halaman non-iklan
        userAgent: 'AdsBot-Google',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        // Aturan default untuk semua crawler lainnya
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

