'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { SolutionService } from '@/lib/our-solution.data';

function normalize(value: string) {
  return value.toLocaleLowerCase('en-US').normalize('NFKD').replace(/[^a-z0-9]+/g, ' ').trim();
}

function searchableText(service: SolutionService) {
  return normalize([
    service.title,
    service.shortTitle,
    service.description,
    service.relatedWork?.title ?? '',
    service.articleCategory,
    service.industry,
    ...service.articleTags,
    ...service.keywords,
  ].join(' '));
}

const IconArrow = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19M14 7L19 12L14 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SolutionWorksExplorer({ services }: { services: SolutionService[] }) {
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const normalizedQuery = normalize(appliedQuery);
  const terms = normalizedQuery.split(' ').filter(Boolean);

  const results = useMemo(() => {
    if (!terms.length) return services;
    return services
      .map((service) => {
        const haystack = searchableText(service);
        const matchedTerms = terms.filter((term) => haystack.includes(term)).length;
        const exactTitle = normalize(service.title).includes(normalizedQuery) ? 3 : 0;
        const exactWork = service.relatedWork && normalize(service.relatedWork.title).includes(normalizedQuery) ? 2 : 0;
        return { service, score: matchedTerms + exactTitle + exactWork };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ service }) => service);
  }, [normalizedQuery, services, terms]);

  return (
    <div>
      <div className="mb-[42px] flex w-full flex-wrap items-center justify-end gap-2">
        <div className="relative h-[42px] w-full shrink-0 sm:w-[360px] md:h-[44px]">
          <span aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[15px] text-[#717171] md:left-5">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => { if (event.key === 'Enter') setAppliedQuery(query); }}
            placeholder="Search service or capability"
            aria-label="Search services and capabilities"
            className={`h-full w-full rounded-full border bg-transparent pl-10 pr-5 font-body text-[12px] font-medium tracking-[0.02em] outline-none transition-colors placeholder:text-[#717171] md:pl-11 md:text-[13px] ${appliedQuery ? 'border-[#1A3E9E] bg-[rgba(153,166,231,0.22)] font-semibold text-[#1A3E9E]' : 'border-[#D9D9D9] text-[#717171] hover:border-[#1A3E9E] focus:border-[#1A3E9E] focus:text-[#1A3E9E]'}`}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            if (appliedQuery) { setQuery(''); setAppliedQuery(''); }
            else setAppliedQuery(query);
          }}
          className="flex h-[42px] min-w-[110px] items-center justify-center rounded-full bg-[#1A3E9E] px-5 font-body text-[13px] font-medium tracking-[0.02em] text-white transition-colors hover:bg-[#152571] md:h-[44px] md:px-6 md:text-[14px]"
        >
          {appliedQuery ? 'Reset Filter' : 'Search'}
        </button>
      </div>

      {results.length ? (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[24px] xl:gap-[30px]">
          {results.map((service) => (
            <article key={service.slug} className="min-w-0">
              <Link
                href={`/insight-programs/case-studies/${service.caseStudySlug}`}
                className="group relative isolate block aspect-[835/570] w-full overflow-hidden rounded-[20px] bg-[#101010] no-underline max-[480px]:rounded-[16px]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-transparent to-black" />
                <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-transparent to-black/80" />

                <div className="absolute bottom-[clamp(20px,2.08vw,36px)] left-[clamp(20px,2.03vw,36px)] right-[clamp(20px,2.03vw,36px)] z-10 flex items-end justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="max-w-[702px] font-heading text-[clamp(20px,1.9vw,34px)] font-medium leading-[1.12] tracking-[-0.01em] text-[#F7F7F7]">
                      {service.title}
                    </h3>
                    <div className="mt-[clamp(8px,0.84vw,14px)] flex flex-wrap items-center gap-[10px] font-body text-[clamp(11px,0.85vw,15px)] font-medium uppercase tracking-[0.06em] text-[#E6FF2A]">
                      <span>{service.articleCategory}</span>
                      <span aria-hidden="true" className="h-[3px] w-[3px] shrink-0 bg-[#F7F7F7]" />
                      <span>{service.industry}</span>
                    </div>
                  </div>

                  <span className="flex h-[clamp(38px,2.82vw,54px)] w-[clamp(38px,2.82vw,54px)] shrink-0 items-center justify-center rounded-[6px] border border-[#4C4C4C] text-[#D9D9D9] transition-all duration-300 group-hover:border-[#E6FF2A] group-hover:bg-[#E6FF2A] group-hover:text-[#101010]">
                    <IconArrow size={20} />
                  </span>
                </div>
              </Link>
              {service.relatedWork && (
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1 font-body text-[12px] text-[#424242] sm:text-[13px]">
                  <span>
                    {service.relatedWork.relationship === 'direct' ? 'Implemented in' : 'Supported by'}{' '}
                    <strong>{service.relatedWork.title}</strong>
                  </span>
                  <Link
                    href={`/our-works/${service.relatedWork.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-[#1A3E9E] no-underline hover:underline"
                  >
                    View related work <IconArrow size={16} />
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[24px] border border-[#CAD0DF] bg-white px-6 py-16 text-center">
          <h3 className="font-heading text-[32px] font-medium text-[#1A3E9E]">No matching service found</h3>
          <p className="mt-3 font-body text-[14px] text-[#555]">Try a service name, workflow, industry, or technology such as ERP, POS, IoT, finance, fleet, or warehouse.</p>
        </div>
      )}
    </div>
  );
}
