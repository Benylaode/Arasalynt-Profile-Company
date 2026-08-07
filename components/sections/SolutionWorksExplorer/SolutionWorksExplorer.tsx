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
    service.relatedWorkTitle,
    service.articleCategory,
    service.industry,
    ...service.articleTags,
    ...service.keywords,
  ].join(' '));
}

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
        const exactWork = normalize(service.relatedWorkTitle).includes(normalizedQuery) ? 2 : 0;
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
            placeholder="Search service or project"
            aria-label="Search service works"
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
        <div className="grid grid-cols-3 gap-x-[30px] gap-y-[60px] max-[1024px]:grid-cols-2 max-[680px]:grid-cols-1">
          {results.map((service) => (
            <article key={service.slug} className="min-w-0">
              <Link href={`/insight-programs/Case-Studies/${service.caseStudySlug}`} className="group block">
                <div className="relative flex aspect-[546/400] w-full overflow-hidden rounded-3xl max-[480px]:rounded-[18px]">
                  <img src={service.relatedWorkImage} alt={service.relatedWorkTitle} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex min-w-0 items-center justify-between gap-4 font-body text-[14px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] max-[1200px]:text-[12px] max-[480px]:text-[10px]">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="h-2 w-2 shrink-0 bg-[#1A3E9E]" />
                      <span className="truncate">{service.articleCategory}</span>
                    </div>
                    <time dateTime={service.articleDateValue} className="shrink-0">{service.articleDateLabel}</time>
                  </div>
                  <h3 className="font-heading text-[clamp(27px,2.1875vw,42px)] font-medium leading-[1.1] tracking-[-0.01em] text-[#101010] transition-colors group-hover:text-[#1A3E9E]">
                    {service.title}
                  </h3>
                  <p className="line-clamp-2 font-body text-[16px] font-normal leading-[1.6] text-[#292929] max-[1200px]:text-[14px]">
                    {service.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[24px] border border-[#CAD0DF] bg-white px-6 py-16 text-center">
          <h3 className="font-heading text-[32px] font-medium text-[#1A3E9E]">No matching work found</h3>
          <p className="mt-3 font-body text-[14px] text-[#555]">Try a service name, workflow, industry, or technology such as ERP, POS, IoT, finance, fleet, or warehouse.</p>
        </div>
      )}
    </div>
  );
}
