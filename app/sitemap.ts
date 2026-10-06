import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SOLUTION_SERVICES } from '@/lib/our-solution.data';
import { BUSINESS_DUMMY_DATA, CASE_STUDIES_DUMMY_DATA, LEADERSHIP_THOUGHTS_DUMMY_DATA } from '@/lib/db/dummy';

const WORK_SLUGS = [
  'sinau-print-erp', 'artic-complex-web', 'myboss-iot-system', 'altatic-analytic',
  'web-media-profile', 'kajian-kelayakan-gik', 'panduan-perubahan-perilaku-stunting',
  'desain-pelatihan-wasit-semarang', 'video-portret-padel-arena',
];

// Timestamp update terakhir situs (perbarui setiap deploy besar)
const LAST_MODIFIED = new Date('2026-10-02');

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
    lastModified?: Date
  ) => ({
    url: `${SITE_URL}${path}`,
    lastModified: lastModified ?? LAST_MODIFIED,
    changeFrequency,
    priority,
  });

  const entries = [
    // ── Halaman Utama ──────────────────────────────────────────────────────
    entry('/', 1.0, 'weekly'),

    // ── About Us ──────────────────────────────────────────────────────────
    entry('/about-us', 0.85, 'monthly'),
    entry('/about-us/corporate-profile', 0.75, 'monthly'),
    entry('/about-us/company-leadership', 0.75, 'monthly'),
    entry('/about-us/ecosystem-philosophy', 0.75, 'monthly'),

    // ── Layanan & Bisnis ───────────────────────────────────────────────────
    entry('/our-business', 0.90, 'weekly'),
    entry('/our-solution', 0.90, 'weekly'),

    // ── Portofolio ─────────────────────────────────────────────────────────
    entry('/our-works', 0.90, 'weekly'),

    // ── Insight Programs ───────────────────────────────────────────────────
    entry('/insight-programs/case-studies', 0.85, 'weekly'),
    entry('/insight-programs/leadership-thoughts', 0.85, 'weekly'),

    // ── Kontak & Legal ─────────────────────────────────────────────────────
    entry('/contact-us', 0.75, 'monthly'),
    entry('/privacy-policy', 0.40, 'yearly'),

    // ── Halaman Dinamis: Business Units ────────────────────────────────────
    ...BUSINESS_DUMMY_DATA.map(({ slug }) => entry(`/our-business/${slug}`, 0.80, 'monthly')),

    // ── Halaman Dinamis: Our Works ─────────────────────────────────────────
    ...WORK_SLUGS.map((slug) => entry(`/our-works/${slug}`, 0.80, 'monthly')),

    // ── Halaman Dinamis: Case Studies dari Solution Services ───────────────
    ...SOLUTION_SERVICES.map(({ caseStudySlug }) =>
      entry(`/insight-programs/case-studies/${caseStudySlug}`, 0.75, 'monthly')
    ),

    // ── Halaman Dinamis: Case Studies dari Dummy Data ──────────────────────
    ...CASE_STUDIES_DUMMY_DATA.map(({ slug }) =>
      entry(`/insight-programs/case-studies/${slug}`, 0.75, 'monthly')
    ),

    // ── Halaman Dinamis: Leadership Thoughts ───────────────────────────────
    ...LEADERSHIP_THOUGHTS_DUMMY_DATA.map(({ slug }) =>
      entry(`/insight-programs/leadership-thoughts/${slug}`, 0.70, 'monthly')
    ),
  ];

  // Deduplikasi: jika ada slug ganda, ambil hanya satu
  return Array.from(new Map(entries.map((item) => [item.url, item])).values());
}
