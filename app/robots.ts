import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

/**
 * Konfigurasi Robots Next.js
 *
 * Memblokir seluruh route non-publik dan sub-brand / our-business dari perayapan bot
 * agar tidak diindeks di hasil pencarian Google/mesin pencari lainnya.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/our-works',
          '/our-works/',
          '/our-business',
          '/our-business/',
          '/crm',
          '/crm/',
          '/portal',
          '/portal/',
          '/feedback',
          '/feedback/',
          '/profile',
          '/profile/',
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
