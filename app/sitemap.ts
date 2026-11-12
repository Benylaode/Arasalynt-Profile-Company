import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SOLUTION_SERVICES } from '@/lib/our-solution.data';
import {
  CASE_STUDIES_DUMMY_DATA,
  LEADERSHIP_THOUGHTS_DUMMY_DATA,
} from '@/lib/db/dummy';

const SOLUTION_DATES: Record<string, string> = {
  'enterprise-solution': '2026-10-26',
  'data-ai-integration': '2026-10-26',
  'smart-iot-system': '2026-10-26',
  'digital-development': '2026-10-26',
  'enterprise-resource-planning': '2026-10-06',
  'internet-of-things': '2026-10-06',
  'point-of-sale-pos': '2026-10-04',
  'warehouse-management-system': '2026-10-04',
  'hr-talent-management-engine': '2026-10-03',
  'financial-accounting-automation-hub': '2026-10-03',
  'logistics-fleet-operations-tracker': '2026-10-02',
  'supply-chain-inventory-control': '2026-10-02',
};

const caseStudyDateMap = new Map<string, string>(
  CASE_STUDIES_DUMMY_DATA.map((item) => [item.slug, item.dateValue])
);

function buildBilingualEntries(
  path: string,
  lastModified?: string | Date,
  priority?: number,
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
): MetadataRoute.Sitemap {
  const cleanPath = path === '/' ? '' : path;
  const idUrl = `${SITE_URL}/id${cleanPath}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  const alternates = {
    languages: {
      en: canonicalUrl,
      id: idUrl,
      'x-default': canonicalUrl,
    },
  };

  const baseProps = {
    ...(lastModified
      ? {
          lastModified:
            lastModified instanceof Date ? lastModified : new Date(lastModified),
        }
      : {}),
    ...(priority !== undefined ? { priority } : {}),
    ...(changeFrequency ? { changeFrequency } : {}),
    alternates,
  };

  return [
    { url: canonicalUrl, ...baseProps },
    { url: idUrl, ...baseProps },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    // ── Halaman Utama ──────────────────────────────────────────────────────
    ...buildBilingualEntries('/', '2026-10-13', 1.0, 'weekly'),

    // ── Core 6-Pack Sitelinks (Priority 0.9) ────────────────────────────────
    ...buildBilingualEntries('/our-solution', '2026-10-30', 0.9, 'weekly'),
    ...buildBilingualEntries('/about-us', '2026-10-30', 0.9, 'weekly'),
    ...buildBilingualEntries('/insight-programs/case-studies', '2026-10-30', 0.9, 'weekly'),
    ...buildBilingualEntries('/insight-programs/leadership-thoughts', '2026-10-30', 0.9, 'weekly'),
    ...buildBilingualEntries('/contact-us', '2026-10-30', 0.9, 'weekly'),

    // ── Hub & Pillar Pages ──────────────────────────────────────────────────
    ...buildBilingualEntries('/insight-programs', '2026-10-30', 0.85, 'weekly'),

    // ── Sub-Pages About Us ─────────────────────────────────────────────────
    ...buildBilingualEntries('/about-us/corporate-profile', '2026-09-15', 0.8, 'monthly'),
    ...buildBilingualEntries('/about-us/company-leadership', '2026-09-20', 0.8, 'monthly'),
    ...buildBilingualEntries('/about-us/ecosystem-philosophy', '2026-09-10', 0.8, 'monthly'),

    // ── Halaman Dinamis: Our Solution Services (200 OK & Indexable) ────────
    ...SOLUTION_SERVICES.flatMap(({ slug }) =>
      buildBilingualEntries(`/our-solution/${slug}`, SOLUTION_DATES[slug] ?? '2026-10-06', 0.85, 'weekly')
    ),

    // ── Kontak & Legal ─────────────────────────────────────────────────────
    ...buildBilingualEntries('/privacy-policy', '2026-01-15', 0.5, 'yearly'),

    // ── Halaman Dinamis: Case Studies ──────────────────────────────────────
    ...Array.from(caseStudyDateMap.entries()).flatMap(([slug, date]) =>
      buildBilingualEntries(`/insight-programs/case-studies/${slug}`, date)
    ),

    // ── Halaman Dinamis: Leadership Thoughts ───────────────────────────────
    ...LEADERSHIP_THOUGHTS_DUMMY_DATA.flatMap((article) =>
      buildBilingualEntries(
        `/insight-programs/leadership-thoughts/${article.slug}`,
        article.datePublished
      )
    ),
  ];

  // Deduplikasi berdasarkan URL canonical
  return Array.from(new Map(entries.map((item) => [item.url, item])).values());
}
