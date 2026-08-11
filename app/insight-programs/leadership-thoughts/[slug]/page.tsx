import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { LEADERSHIP_THOUGHTS_DUMMY_DATA } from '@/lib/db/dummy';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export async function generateStaticParams() {
  return LEADERSHIP_THOUGHTS_DUMMY_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = LEADERSHIP_THOUGHTS_DUMMY_DATA.find(
    (item) => item.slug === slug,
  );

  if (!article) {
    return {
      title: 'Thought Not Found',
      robots: { index: false, follow: false },
    };
  }

  const canonical = `/insight-programs/leadership-thoughts/${article.slug}`;

  return {
    title: `${article.title} — Leadership Thought`,
    description: article.description,
    alternates: { canonical },
    openGraph: {
      title: `${article.title} | Arsalynk Leadership Thought`,
      description: article.description,
      type: 'article',
      url: canonical,
      publishedTime: new Date(article.date).toISOString(),
      images: [article.coverImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Arsalynk Leadership Thought`,
      description: article.description,
      images: [article.coverImage],
    },
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-body text-[11px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] sm:text-[13px] xl:text-[16px]">
      <span className="h-2 w-2 shrink-0 bg-[#1A3E9E]" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function ArticleImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="m-0 flex w-full items-center justify-center overflow-hidden rounded-[14px] bg-[#101010] sm:rounded-[18px] xl:rounded-[24px]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-[760px] min-h-[280px] w-full object-contain object-center sm:min-h-[420px]"
      />
    </figure>
  );
}

export default async function LeadershipThoughtDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = LEADERSHIP_THOUGHTS_DUMMY_DATA.find(
    (item) => item.slug === slug,
  );

  if (!article) {
    notFound();
  }

  const displayOtherThoughts = LEADERSHIP_THOUGHTS_DUMMY_DATA.filter(
    (item) => item.slug !== article.slug,
  ).slice(0, 3);

  const headerPills = [
    article.category || 'Leadership Thoughts',
    article.date,
    article.author ? `By ${article.author}` : article.readTime,
  ].filter(Boolean);

  const canonicalUrl = `${SITE_URL}/insight-programs/leadership-thoughts/${article.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        headline: article.title,
        description: article.description,
        image: `${SITE_URL}${article.coverImage}`,
        datePublished: new Date(article.date).toISOString(),
        mainEntityOfPage: canonicalUrl,
        author: {
          '@type': 'Person',
          name: article.author || SITE_NAME,
        },
        publisher: { '@id': `${SITE_URL}/#organization` },
        keywords: article.tags.join(', '),
        articleSection: article.category,
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Insight & Programs', item: `${SITE_URL}/insight-programs/leadership-thoughts` },
          { '@type': 'ListItem', position: 3, name: 'Leadership Thoughts', item: `${SITE_URL}/insight-programs/leadership-thoughts` },
          { '@type': 'ListItem', position: 4, name: article.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <Script
        id={`thought-schema-${article.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />

      {/* HERO */}
      <section className="flex w-full flex-col items-center gap-10 bg-[#F7F7F7] px-[clamp(20px,5.73vw,110px)] pb-10 pt-[clamp(132px,9.69vw,186px)] sm:gap-12 sm:pb-12 xl:gap-16 xl:pb-16">
        <div className="flex w-full max-w-[1700px] flex-col gap-5 sm:gap-7 xl:gap-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-[10px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] sm:text-xs xl:text-sm"
          >
            <Link href="/" className="transition-opacity hover:opacity-65">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/insight-programs/case-studies"
              className="transition-opacity hover:opacity-65"
            >
              Insight &amp; Programs
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/insight-programs/leadership-thoughts"
              className="transition-opacity hover:opacity-65"
            >
              Leadership Thoughts
            </Link>
          </nav>

          <h1 className="max-w-[1700px] font-heading text-[clamp(38px,3.75vw,72px)] font-medium leading-[1.1] tracking-[-0.02em] text-[#101010]">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            {headerPills.map((pill, index) => (
              <span
                key={`${pill}-${index}`}
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-[rgba(153,166,231,0.15)] px-5 py-2.5 font-body text-[13px] font-normal leading-[1.5] tracking-[0.02em] text-[#292929] sm:min-h-[48px] sm:px-6 sm:text-[15px] xl:min-h-[59px] xl:px-8 xl:py-4 xl:text-[18px]"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative aspect-[17/8] w-full max-w-[1700px] overflow-hidden rounded-[18px] bg-[#D9D9D9] sm:rounded-[24px] xl:rounded-[32px]">
          <img
            src={article.coverImage}
            alt={article.coverImageAlt}
            className="h-full w-full object-contain object-center"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black/65"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ARTICLE BODY */}
      <main className="bg-[#F7F7F7] px-[clamp(20px,13.333vw,256px)] pb-[clamp(72px,5.73vw,110px)] pt-[clamp(48px,3.333vw,64px)]">
        <article className="mx-auto flex w-full max-w-[1408px] flex-col gap-[clamp(64px,5vw,96px)]">
          {article.sections.map((section, sectionIndex) => (
            <section
              key={`${section.mainTitle || section.eyebrow || 'section'}-${sectionIndex}`}
              className="flex w-full flex-col gap-[clamp(30px,2.92vw,56px)]"
            >
              <div className="flex w-full flex-col gap-5 xl:gap-6">
                {section.eyebrow && (
                  <SectionLabel>{section.eyebrow}</SectionLabel>
                )}

                {section.mainTitle && (
                  <h2 className="font-heading text-[clamp(32px,3.333vw,64px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#101010]">
                    {section.mainTitle}
                  </h2>
                )}

                {section.paragraphs?.length ? (
                  <div className="flex flex-col gap-4 font-body text-[15px] font-normal leading-[1.7] tracking-[0.01em] text-[#292929] sm:text-[17px] sm:leading-[1.65] xl:text-[20px] xl:leading-[1.6] xl:tracking-[0.02em]">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}

                {section.subsections?.length ? (
                  <div className="flex flex-col gap-[clamp(30px,2.8vw,54px)] pt-1">
                    {section.subsections.map((subsection, subsectionIndex) => (
                      <div
                        key={`${subsection.subtitle}-${subsectionIndex}`}
                        className="flex flex-col gap-4 xl:gap-6"
                      >
                        <h3 className="font-heading text-[clamp(26px,2.188vw,42px)] font-medium leading-[1.1] tracking-[-0.01em] text-[#292929]">
                          {subsection.subtitle}
                        </h3>
                        <p className="font-body text-[15px] font-normal leading-[1.7] tracking-[0.01em] text-[#292929] sm:text-[17px] sm:leading-[1.65] xl:text-[20px] xl:leading-[1.6] xl:tracking-[0.02em]">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              {section.image && (
                <ArticleImage
                  src={section.image.src}
                  alt={section.image.alt}
                />
              )}
            </section>
          ))}
        </article>
      </main>

      {/* OTHER THOUGHTS */}
      <section className="w-full bg-[rgba(153,166,231,0.10)] px-[clamp(20px,5.73vw,110px)] py-[clamp(64px,5.73vw,110px)]">
        <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-8">
          <h2 className="font-heading text-[clamp(42px,4.375vw,84px)] font-medium leading-none tracking-[-0.03em] text-[#101010]">
            Other Thoughts
          </h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-[30px]">
            {displayOtherThoughts.map((other) => (
              <Link
                key={other.id}
                href={`/insight-programs/leadership-thoughts/${other.slug}`}
                className="group flex min-w-0 flex-col gap-5 no-underline xl:gap-6"
              >
                <div className="flex aspect-[546/400] w-full items-center justify-center overflow-hidden rounded-[16px] bg-[#EBECEF] sm:rounded-[20px] xl:rounded-[24px]">
                  <img
                    src={other.coverImage}
                    alt={other.coverImageAlt}
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex min-w-0 flex-col gap-3 xl:gap-4">
                  <div className="flex items-center justify-between gap-4 font-body text-[10px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] sm:text-xs xl:text-sm">
                    <span className="flex min-w-0 items-center gap-2.5">
                      <span
                        className="h-2 w-2 shrink-0 bg-[#1A3E9E]"
                        aria-hidden="true"
                      />
                      <span className="truncate">{other.category}</span>
                    </span>
                    <span className="shrink-0">{other.date}</span>
                  </div>

                  <h3 className="font-heading text-[clamp(27px,2.188vw,42px)] font-medium leading-[1.1] tracking-[-0.01em] text-[#101010] transition-colors group-hover:text-[#1A3E9E]">
                    {other.title}
                  </h3>

                  <p className="line-clamp-2 font-body text-[14px] font-normal leading-[1.65] text-[#292929] sm:text-[15px] xl:text-[16px] xl:leading-[1.6]">
                    {other.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — existing component retained as requested */}
      <BeyondExpectations />
    </div>
  );
}
