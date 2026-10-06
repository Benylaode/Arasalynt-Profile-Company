import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SOLUTION_SERVICES } from '@/lib/our-solution.data';
import { BUSINESS_DUMMY_DATA, CASE_STUDIES_DUMMY_DATA, LEADERSHIP_THOUGHTS_DUMMY_DATA } from '@/lib/db/dummy';

const WORK_DATES: Record<string, Date> = {
  'sinau-print-erp': new Date('2026-06-25T00:00:00.000Z'),
  'artic-complex-web': new Date('2026-06-10T00:00:00.000Z'),
  'myboss-iot-system': new Date('2026-05-30T00:00:00.000Z'),
  'altatic-analytic': new Date('2025-11-20T00:00:00.000Z'),
  'web-media-profile': new Date('2025-12-15T00:00:00.000Z'),
  'kajian-kelayakan-gik': new Date('2026-04-15T00:00:00.000Z'),
  'panduan-perubahan-perilaku-stunting': new Date('2026-03-25T00:00:00.000Z'),
  'desain-pelatihan-wasit-semarang': new Date('2026-02-18T00:00:00.000Z'),
  'video-portret-padel-arena': new Date('2026-02-12T00:00:00.000Z'),
};

const SOLUTION_DATES: Record<string, Date> = {
  'enterprise-resource-planning': new Date('2026-10-06T00:00:00.000Z'),
  'internet-of-things': new Date('2026-10-06T00:00:00.000Z'),
  'point-of-sale-pos': new Date('2026-10-04T00:00:00.000Z'),
  'warehouse-management-wms': new Date('2026-10-04T00:00:00.000Z'),
  'hr-management': new Date('2026-10-03T00:00:00.000Z'),
  'financial-management-system': new Date('2026-10-03T00:00:00.000Z'),
  'logistics-fleet-management': new Date('2026-10-02T00:00:00.000Z'),
  'supply-chain-distribution-system': new Date('2026-10-02T00:00:00.000Z'),
};

const parseThoughtDate = (dateStr: string): Date => {
  const monthMap: Record<string, string> = {
    january: '01', february: '02', march: '03', april: '04',
    may: '05', june: '06', july: '07', august: '08',
    september: '09', october: '10', november: '11', december: '12',
  };
  const parts = dateStr.toLowerCase().split(' ');
  const month = parts[0];
  const year = parts[1] ?? '2026';
  const mm = monthMap[month] ?? '06';
  return new Date(`${year}-${mm}-15T00:00:00.000Z`);
};

const caseStudyDateMap = new Map<string, Date>(
  CASE_STUDIES_DUMMY_DATA.map((item) => [
    item.slug,
    new Date(`${item.dateValue}T00:00:00.000Z`),
  ])
);

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
    lastModified: Date
  ) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  const entries: MetadataRoute.Sitemap = [
    // ── Halaman Utama ──────────────────────────────────────────────────────
    entry('/', 1.0, 'weekly', new Date('2026-10-06T00:00:00.000Z')),

    // ── About Us & Sub-Pages ───────────────────────────────────────────────
    entry('/about-us', 0.85, 'monthly', new Date('2026-10-06T00:00:00.000Z')),
    entry('/about-us/corporate-profile', 0.75, 'monthly', new Date('2026-09-15T00:00:00.000Z')),
    entry('/about-us/company-leadership', 0.75, 'monthly', new Date('2026-09-20T00:00:00.000Z')),
    entry('/about-us/ecosystem-philosophy', 0.75, 'monthly', new Date('2026-09-10T00:00:00.000Z')),

    // ── Layanan & Bisnis ───────────────────────────────────────────────────
    entry('/our-business', 0.90, 'weekly', new Date('2026-08-25T00:00:00.000Z')),
    entry('/our-solution', 0.90, 'weekly', new Date('2026-10-06T00:00:00.000Z')),

    // ── Halaman Dinamis: Our Solution Services (200 OK & Indexable) ────────
    ...SOLUTION_SERVICES.map(({ slug }) =>
      entry(
        `/our-solution/${slug}`,
        0.85,
        'monthly',
        SOLUTION_DATES[slug] ?? new Date('2026-10-02T00:00:00.000Z')
      )
    ),

    // ── Portofolio (Supporting Proof Layer) ────────────────────────────────
    entry('/our-works', 0.85, 'weekly', new Date('2026-09-28T00:00:00.000Z')),

    // ── Insight Programs ───────────────────────────────────────────────────
    entry('/insight-programs/case-studies', 0.85, 'weekly', new Date('2026-06-25T00:00:00.000Z')),
    entry('/insight-programs/leadership-thoughts', 0.85, 'weekly', new Date('2026-07-20T00:00:00.000Z')),

    // ── Kontak & Legal ─────────────────────────────────────────────────────
    entry('/contact-us', 0.80, 'monthly', new Date('2026-09-01T00:00:00.000Z')),
    entry('/privacy-policy', 0.40, 'yearly', new Date('2026-01-15T00:00:00.000Z')),

    // ── Halaman Dinamis: Business Units ────────────────────────────────────
    ...BUSINESS_DUMMY_DATA.map(({ slug }) =>
      entry(`/our-business/${slug}`, 0.80, 'monthly', new Date('2026-08-25T00:00:00.000Z'))
    ),

    // ── Halaman Dinamis: Our Works ─────────────────────────────────────────
    ...Object.entries(WORK_DATES).map(([slug, date]) =>
      entry(`/our-works/${slug}`, 0.80, 'monthly', date)
    ),

    // ── Halaman Dinamis: Case Studies dari Solution Services & Dummy Data ──
    ...Array.from(caseStudyDateMap.entries()).map(([slug, date]) =>
      entry(`/insight-programs/case-studies/${slug}`, 0.75, 'monthly', date)
    ),

    // ── Halaman Dinamis: Leadership Thoughts ───────────────────────────────
    ...LEADERSHIP_THOUGHTS_DUMMY_DATA.map((article) =>
      entry(
        `/insight-programs/leadership-thoughts/${article.slug}`,
        0.70,
        'monthly',
        parseThoughtDate(article.date)
      )
    ),
  ];

  // Deduplikasi berdasarkan URL
  return Array.from(new Map(entries.map((item) => [item.url, item])).values());
}