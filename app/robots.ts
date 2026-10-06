import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

/**
 * Keep public pages and rendering assets crawlable.
 *
 * Do not block /_next/: Googlebot needs Next.js JavaScript, CSS and image
 * resources to render the page the same way a browser does.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
