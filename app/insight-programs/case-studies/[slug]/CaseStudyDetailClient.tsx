'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import {
  getLocalizedCaseStudy,
  getLocalizedCaseStudies,
  getLocalizedOurSolutionData,
} from '@/lib/i18n/localized-data';

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-body text-[11px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] sm:text-[13px] xl:text-[16px]">
      <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-[#1A3E9E]" />
      <span>{children}</span>
    </div>
  );
}

function ArticleImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="m-0 flex w-full items-center justify-center overflow-hidden rounded-[16px] bg-[#101010] sm:rounded-[20px] xl:rounded-[24px]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-[760px] min-h-[280px] w-full object-contain object-center sm:min-h-[420px]"
      />
    </figure>
  );
}

export default function CaseStudyDetailClient({ slug }: { slug: string }) {
  const { locale, t } = useLanguage();
  const article = useMemo(() => getLocalizedCaseStudy(slug, locale), [slug, locale]);
  const allCaseStudies = useMemo(() => getLocalizedCaseStudies(locale), [locale]);
  const solutionData = useMemo(() => getLocalizedOurSolutionData(locale), [locale]);

  if (!article) return null;

  const relatedArticles = allCaseStudies
    .filter((item) => item.slug !== article.slug)
    .sort((a, b) => {
      const aMatches = a.category === article.category ? 1 : 0;
      const bMatches = b.category === article.category ? 1 : 0;
      return bMatches - aMatches || b.dateValue.localeCompare(a.dateValue);
    })
    .slice(0, 3);

  const relatedSolution = solutionData.services.find((s) => s.caseStudySlug === article.slug);

  return (
    <>
      <header className="px-[6vw] pb-[clamp(42px,3.333vw,64px)] pt-[clamp(130px,9.688vw,186px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-[clamp(36px,3.333vw,64px)]">
          <div className="flex max-w-[1500px] flex-col gap-[clamp(20px,1.667vw,32px)]">
            <nav aria-label={t.common.breadcrumb} className="flex flex-wrap items-center gap-2 font-body text-[10px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] sm:text-xs xl:text-sm">
              <Link href="/" className="transition-opacity hover:opacity-65">{t.common.home}</Link>
              <span aria-hidden="true">/</span>
              <Link href="/insight-programs" className="transition-opacity hover:opacity-65">{t.insightPrograms.heroTitle}</Link>
              <span aria-hidden="true">/</span>
              <Link href="/insight-programs/case-studies" className="transition-opacity hover:opacity-65">{t.insightPrograms.caseStudiesHeroTitle}</Link>
            </nav>

            <h1 className="font-heading text-[clamp(38px,3.75vw,72px)] font-medium leading-[1.08] tracking-[-0.02em]">
              {article.title}
            </h1>

            <p className="max-w-[1120px] font-body text-[clamp(15px,1.042vw,20px)] leading-[1.65] tracking-[0.01em] text-[#292929]">
              {article.description}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {[article.category, article.dateLabel, ...article.tags].map((pill) => (
                <span key={pill} className="inline-flex min-h-10 items-center rounded-full bg-[rgba(153,166,231,0.15)] px-5 py-2.5 font-body text-[12px] leading-[1.4] text-[#292929] sm:text-[14px] xl:px-6 xl:text-[16px]">
                  {pill}
                </span>
              ))}
            </div>

            {relatedSolution && (
              <div className="mt-2 flex flex-wrap items-center gap-4 rounded-2xl border border-[#1A3E9E]/20 bg-[rgba(26,62,158,0.04)] p-4 text-sm text-[#1A3E9E]">
                <span className="font-bold uppercase tracking-wider">{t.insightPrograms.caseStudyDetailRelatedSolution}</span>
                <Link
                  href={`/our-solution/${relatedSolution.slug}`}
                  className="font-semibold underline hover:opacity-80"
                >
                  {relatedSolution.title} →
                </Link>
              </div>
            )}
          </div>

          <figure className="m-0 flex aspect-[17/8] w-full items-center justify-center overflow-hidden rounded-[18px] bg-[#101010] sm:rounded-[24px] xl:rounded-[32px]">
            <img src={article.coverImage} alt={article.coverImageAlt} className="h-full w-full object-contain object-center" />
          </figure>
        </div>
      </header>

      <main className="px-[clamp(20px,13.333vw,256px)] pb-[clamp(80px,5.729vw,110px)] pt-[clamp(48px,3.333vw,64px)]">
        <article className="mx-auto flex w-full max-w-[1408px] flex-col gap-[clamp(64px,5vw,96px)]">
          {article.sections.map((section, sectionIndex) => (
            <section key={`${section.mainTitle}-${sectionIndex}`} className="flex flex-col gap-[clamp(30px,2.917vw,56px)]">
              <div className="flex flex-col gap-5 xl:gap-6">
                {section.eyebrow ? <SectionLabel>{section.eyebrow}</SectionLabel> : null}

                <h2 className="font-heading text-[clamp(32px,3.333vw,64px)] font-medium leading-[1.15] tracking-[-0.02em]">
                  {section.mainTitle}
                </h2>

                {section.metrics?.length ? (
                  <div className="my-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {section.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col gap-2 rounded-[20px] border border-[#1A3E9E]/20 bg-[rgba(153,166,231,0.08)] p-6 transition-all hover:border-[#1A3E9E]/40 hover:bg-[rgba(153,166,231,0.14)]"
                      >
                        <div className="font-heading text-[clamp(28px,2.5vw,46px)] font-bold tracking-tight text-[#1A3E9E]">
                          {metric.value}
                        </div>
                        <div className="font-body text-[13px] font-bold uppercase tracking-wider text-[#101010] sm:text-[14px]">
                          {metric.label}
                        </div>
                        {metric.detail && (
                          <div className="font-body text-[13px] leading-relaxed text-[#555]">
                            {metric.detail}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.paragraphs?.length ? (
                  <div className="flex flex-col gap-4 font-body text-[15px] leading-[1.7] tracking-[0.01em] text-[#292929] sm:text-[17px] xl:text-[20px] xl:leading-[1.6]">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}

                {section.table ? (
                  <div className="my-3 w-full overflow-hidden rounded-[18px] border border-[#E5E7EB] bg-white shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[620px] text-left font-body text-[14px] sm:text-[15px]">
                        {section.table.caption && (
                          <caption className="border-b border-[#E5E7EB] bg-[#F8F9FD] px-5 py-3 text-left font-body text-[13px] font-semibold text-[#1A3E9E]">
                            {section.table.caption}
                          </caption>
                        )}
                        <thead className="border-b border-[#E5E7EB] bg-[#F3F4F8] text-[12px] font-bold uppercase tracking-wider text-[#101010] sm:text-[13px]">
                          <tr>
                            {section.table.headers.map((h, i) => (
                              <th key={i} className="px-5 py-3.5">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E5E7EB]">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-[#F9FAFC] transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-5 py-3.5 text-[#292929]">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null}

                {section.subsections?.length ? (
                  <div className="grid gap-[clamp(28px,2.8vw,54px)] pt-2 md:grid-cols-2">
                    {section.subsections.map((subsection, subsectionIndex) => (
                      <div key={`${subsection.subtitle}-${subsectionIndex}`} className="flex flex-col gap-4 border-t border-[#1A3E9E]/30 pt-5">
                        <h3 className="font-heading text-[clamp(24px,2.188vw,42px)] font-medium leading-[1.1] tracking-[-0.01em] text-[#292929]">
                          {subsection.subtitle}
                        </h3>
                        <p className="font-body text-[15px] leading-[1.7] text-[#292929] sm:text-[17px] xl:text-[20px] xl:leading-[1.6]">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              {section.image ? <ArticleImage src={section.image.src} alt={section.image.alt} /> : null}
            </section>
          ))}
        </article>
      </main>

      <section className="bg-[rgba(153,166,231,0.10)] px-[6vw] py-[clamp(64px,5.729vw,110px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-[clamp(28px,2.5vw,48px)]">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex flex-col gap-4">
              <SectionLabel>{t.insightPrograms.caseStudyDetailContinueExploring}</SectionLabel>
              <h2 className="font-heading text-[clamp(40px,4.375vw,84px)] font-medium leading-none tracking-[-0.03em]">{t.insightPrograms.caseStudyDetailOtherCaseStudies}</h2>
            </div>
            <Link href="/insight-programs/case-studies" className="inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-[0.04em] text-[#1A3E9E] hover:underline">
              {t.insightPrograms.caseStudyDetailViewAll} <ArrowUpRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-[30px]">
            {relatedArticles.map((related) => (
              <Link key={related.slug} href={`/insight-programs/case-studies/${related.slug}`} className="group flex min-w-0 flex-col gap-5 no-underline">
                <div className="flex aspect-[546/400] w-full items-center justify-center overflow-hidden rounded-[16px] bg-[#EBECEF] sm:rounded-[20px] xl:rounded-[24px]">
                  <img src={related.coverImage} alt={related.coverImageAlt} loading="lazy" className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-4 font-body text-[10px] font-bold uppercase tracking-[0.06em] text-[#1A3E9E] sm:text-xs xl:text-sm">
                    <span className="flex min-w-0 items-center gap-2"><span aria-hidden="true" className="h-2 w-2 shrink-0 bg-[#1A3E9E]" /><span className="truncate">{related.category}</span></span>
                    <span className="shrink-0">{related.dateLabel}</span>
                  </div>
                  <h3 className="line-clamp-2 font-heading text-[clamp(26px,2.188vw,42px)] font-medium leading-[1.1] tracking-[-0.01em] transition-colors group-hover:text-[#1A3E9E]">{related.title}</h3>
                  <p className="line-clamp-2 font-body text-[14px] leading-[1.6] text-[#292929] xl:text-[16px]">{related.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BeyondExpectations />
    </>
  );
}

