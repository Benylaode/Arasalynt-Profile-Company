import { NextResponse } from 'next/server';
import { submitToIndexNow } from '@/lib/seo/indexnow';
import { SITE_URL } from '@/lib/constants';
import { SOLUTION_SERVICES } from '@/lib/our-solution.data';
import {
  BUSINESS_DUMMY_DATA,
  CASE_STUDIES_DUMMY_DATA,
  LEADERSHIP_THOUGHTS_DUMMY_DATA,
} from '@/lib/db/dummy';

const WORK_SLUGS = [
  'sinau-print-erp',
  'artic-complex-web',
  'myboss-iot-system',
  'altatic-analytic',
  'web-media-profile',
  'kajian-kelayakan-gik',
  'panduan-perubahan-perilaku-stunting',
  'desain-pelatihan-wasit-semarang',
  'video-portret-padel-arena',
];

function getAllCanonicalUrls(): string[] {
  const urls: string[] = [
    `${SITE_URL}/`,
    `${SITE_URL}/about-us`,
    `${SITE_URL}/about-us/corporate-profile`,
    `${SITE_URL}/about-us/company-leadership`,
    `${SITE_URL}/about-us/ecosystem-philosophy`,
    `${SITE_URL}/our-solution`,
    ...SOLUTION_SERVICES.map((s) => `${SITE_URL}/our-solution/${s.slug}`),
    `${SITE_URL}/our-business`,
    ...BUSINESS_DUMMY_DATA.map((b) => `${SITE_URL}/our-business/${b.slug}`),
    `${SITE_URL}/insight-programs`,
    `${SITE_URL}/insight-programs/case-studies`,
    ...CASE_STUDIES_DUMMY_DATA.map(
      (a) => `${SITE_URL}/insight-programs/case-studies/${a.slug}`
    ),
    `${SITE_URL}/insight-programs/leadership-thoughts`,
    ...LEADERSHIP_THOUGHTS_DUMMY_DATA.map(
      (t) => `${SITE_URL}/insight-programs/leadership-thoughts/${t.slug}`
    ),
    `${SITE_URL}/our-works`,
    ...WORK_SLUGS.map((slug) => `${SITE_URL}/our-works/${slug}`),
    `${SITE_URL}/contact-us`,
    `${SITE_URL}/privacy-policy`,
  ];

  return Array.from(new Set(urls));
}

export async function POST(request: Request) {
  try {
    let urlsToSubmit: string[] = [];

    try {
      const body = await request.json();
      if (Array.isArray(body?.urls) && body.urls.length > 0) {
        urlsToSubmit = body.urls;
      }
    } catch {
      // If empty body or no JSON sent, submit all canonical URLs
      urlsToSubmit = getAllCanonicalUrls();
    }

    if (urlsToSubmit.length === 0) {
      urlsToSubmit = getAllCanonicalUrls();
    }

    const result = await submitToIndexNow(urlsToSubmit);

    return NextResponse.json(
      {
        ...result,
        submittedCount: urlsToSubmit.length,
      },
      { status: result.success ? 200 : result.status || 500 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : 'Unknown IndexNow error',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const allUrls = getAllCanonicalUrls();
  return NextResponse.json({
    status: 'IndexNow endpoint ready',
    siteUrl: SITE_URL,
    totalCanonicals: allUrls.length,
    instructions:
      'Send a POST request to this endpoint to push updated URLs to Bing and participating search engines via IndexNow.',
  });
}
