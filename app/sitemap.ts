import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SOLUTION_SERVICES } from '@/lib/our-solution.data';
import {
  BUSINESS_DUMMY_DATA,
  CASE_STUDIES_DUMMY_DATA,
  LEADERSHIP_THOUGHTS_DUMMY_DATA,
} from '@/lib/db/dummy';

const WORK_DATES: Record<string, string> = {
  'sinau-print-erp': '2026-06-25',
  'artic-complex-web': '2026-06-10',
  'myboss-iot-system': '2026-05-30',
  'altatic-analytic': '2025-11-20',
  'web-media-profile': '2025-12-15',
  'kajian-kelayakan-gik': '2026-04-15',
  'panduan-perubahan-perilaku-stunting': '2026-03-25',
  'desain-pelatihan-wasit-semarang': '2026-02-18',
  'video-portret-padel-arena': '2026-02-12',
};

const SOLUTION_DATES: Record<string, string> = {
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

function entry(
  path: string,
  lastModified?: string | Date
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path}`,
    ...(lastModified
      ? {
          lastModified:
            lastModified instanceof Date ? lastModified : new Date(lastModified),
        }
      : {}),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    // ── Halaman Utama ──────────────────────────────────────────────────────
    entry('/', '2026-10-06'),

    // ── About Us & Sub-Pages ───────────────────────────────────────────────
    entry('/about-us', '2026-10-06'),
    entry('/about-us/corporate-profile', '2026-09-15'),
    entry('/about-us/company-leadership', '2026-09-20'),
    entry('/about-us/ecosystem-philosophy', '2026-09-10'),

    // ── Layanan & Bisnis ───────────────────────────────────────────────────
    entry('/our-business', '2026-08-25'),
    entry('/our-solution', '2026-10-06'),

    // ── Halaman Dinamis: Our Solution Services (200 OK & Indexable) ────────
    ...SOLUTION_SERVICES.map(({ slug }) =>
      entry(`/our-solution/${slug}`, SOLUTION_DATES[slug] ?? '2026-10-06')
    ),

    // ── Portofolio (Supporting Proof Layer) ────────────────────────────────
    entry('/our-works', '2026-09-28'),

    // ── Insight & Programs (Hub & Sub-Sections) ────────────────────────────
    entry('/insight-programs', '2026-10-06'),
    entry('/insight-programs/case-studies', '2026-06-25'),
    entry('/insight-programs/leadership-thoughts', '2026-07-20'),

    // ── Kontak & Legal ─────────────────────────────────────────────────────
    entry('/contact-us', '2026-09-01'),
    entry('/privacy-policy', '2026-01-15'),

    // ── Halaman Dinamis: Business Units ────────────────────────────────────
    ...BUSINESS_DUMMY_DATA.map(({ slug }) =>
      entry(`/our-business/${slug}`, '2026-08-25')
    ),

    // ── Halaman Dinamis: Our Works ─────────────────────────────────────────
    ...Object.entries(WORK_DATES).map(([slug, date]) =>
      entry(`/our-works/${slug}`, date)
    ),

    // ── Halaman Dinamis: Case Studies ──────────────────────────────────────
    ...Array.from(caseStudyDateMap.entries()).map(([slug, date]) =>
      entry(`/insight-programs/case-studies/${slug}`, date)
    ),

    // ── Halaman Dinamis: Leadership Thoughts ───────────────────────────────
    ...LEADERSHIP_THOUGHTS_DUMMY_DATA.map((article) =>
      entry(
        `/insight-programs/leadership-thoughts/${article.slug}`,
        article.datePublished
      )
    ),
  ];

  // Deduplikasi berdasarkan URL canonical
  return Array.from(new Map(entries.map((item) => [item.url, item])).values());
}