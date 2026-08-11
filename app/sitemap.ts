import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SOLUTION_SERVICES } from '@/lib/our-solution.data';
import { BUSINESS_DUMMY_DATA, CASE_STUDIES_DUMMY_DATA, LEADERSHIP_THOUGHTS_DUMMY_DATA } from '@/lib/db/dummy';

const WORK_SLUGS = [
  'sinau-print-erp', 'artic-complex-web', 'myboss-iot-system', 'altatic-analytic',
  'web-media-profile', 'kajian-kelayakan-gik', 'panduan-perubahan-perilaku-stunting',
  'desain-pelatihan-wasit-semarang', 'video-portret-padel-arena',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  });

  const entries = [
    entry('/', 1, 'weekly'),
    entry('/about-us', 0.8, 'monthly'),
    entry('/about-us/corporate-profile', 0.7, 'monthly'),
    entry('/about-us/company-leadership', 0.7, 'monthly'),
    entry('/about-us/ecosystem-philosophy', 0.7, 'monthly'),
    entry('/our-business', 0.9, 'weekly'),
    entry('/our-solution', 0.9, 'weekly'),
    entry('/our-works', 0.9, 'weekly'),
    entry('/insight-programs/case-studies', 0.8, 'weekly'),
    entry('/insight-programs/leadership-thoughts', 0.8, 'weekly'),
    entry('/contact-us', 0.7, 'monthly'),
    ...BUSINESS_DUMMY_DATA.map(({ slug }) => entry(`/our-business/${slug}`, 0.8, 'monthly')),
    ...WORK_SLUGS.map((slug) => entry(`/our-works/${slug}`, 0.8, 'monthly')),
    ...SOLUTION_SERVICES.map(({ caseStudySlug }) => entry(`/insight-programs/case-studies/${caseStudySlug}`, 0.75, 'monthly')),
    ...CASE_STUDIES_DUMMY_DATA.map(({ slug }) => entry(`/insight-programs/case-studies/${slug}`, 0.75, 'monthly')),
    ...LEADERSHIP_THOUGHTS_DUMMY_DATA.map(({ slug }) => entry(`/insight-programs/leadership-thoughts/${slug}`, 0.7, 'monthly')),
  ];

  return Array.from(new Map(entries.map((item) => [item.url, item])).values());
}
