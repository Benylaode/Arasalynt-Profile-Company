'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { TeamMember } from '@/lib/team.data';

export default function ProfileDirectory({ members }: { members: TeamMember[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % members.length), 6000);
    return () => window.clearInterval(timer);
  }, [members.length]);

  const member = members[active];

  return (
    <main className="overflow-hidden bg-[#F7F7F7] text-[#101010]">
      <section className="px-[6vw] pb-10 pt-[clamp(112px,8vw,154px)] max-[1199px]:px-[4vw]">
        <div className="relative mx-auto min-h-[clamp(570px,75vh,820px)] max-w-[1700px] overflow-hidden rounded-[32px] bg-[#07152f] text-white max-[640px]:rounded-[22px]">
          {members.map((slide, index) => (
            <img key={slide.slug} src={slide.image} alt="" aria-hidden={index !== active} className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-1000 ease-out ${index === active ? 'scale-100 opacity-100' : 'scale-[1.035] opacity-0'}`} style={{ objectPosition: slide.imagePosition }} />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,24,.94)_0%,rgba(5,10,24,.68)_48%,rgba(5,10,24,.2)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,10,24,.72),transparent_55%)]" />

          <div className="relative z-10 flex min-h-[clamp(570px,75vh,820px)] max-w-[930px] flex-col justify-end p-[clamp(28px,5vw,92px)]">
            <p className="mb-5 flex items-center gap-3 font-body text-[12px] font-bold uppercase tracking-[.08em] text-[#E6FF2A]"><span className="h-2 w-2 bg-[#E6FF2A]" />Our People</p>
            <h1 className="font-heading text-[clamp(48px,6vw,108px)] font-medium leading-[.95] tracking-[-.04em]">Meet the people behind the ecosystem.</h1>
            <div className="mt-8 border-l border-white/35 pl-5">
              <p className="font-heading text-[clamp(25px,2.3vw,44px)] font-medium">{member.name}</p>
              <p className="mt-2 max-w-[720px] font-body text-[clamp(14px,1vw,18px)] leading-[1.65] text-white/75">{member.summary}</p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              {members.map((slide, index) => <button key={slide.slug} type="button" aria-label={`Show ${slide.name}`} onClick={() => setActive(index)} className={`h-2 rounded-full transition-[width,background-color] duration-300 ${index === active ? 'w-14 bg-[#E6FF2A]' : 'w-2 bg-white/45'}`} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-[6vw] py-[clamp(70px,7vw,134px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto max-w-[1700px]">
          <div className="mb-[clamp(38px,4vw,76px)] flex flex-wrap items-end justify-between gap-5">
            <div><p className="mb-4 font-body text-[12px] font-bold uppercase tracking-[.08em] text-[#1A3E9E]">Our Team</p><h2 className="font-heading text-[clamp(42px,5vw,88px)] font-medium leading-none tracking-[-.035em]">All profiles</h2></div>
            <p className="max-w-[520px] font-body text-[15px] leading-[1.7] text-[#4A4A4A]">Explore the disciplines and leadership perspectives that connect Arsalynk&apos;s strategy, technology, intelligence, and creative execution.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-[30px] gap-y-[58px] max-[680px]:grid-cols-1">
            {members.map((item) => (
              <Link key={item.slug} href={`/profile/${item.slug}`} className="group min-w-0 no-underline">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#0A1530]">
                  <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover grayscale transition-[transform,filter] duration-700 group-hover:scale-[1.035] group-hover:grayscale-0" style={{ objectPosition: item.imagePosition }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/55 text-xl text-white transition-[background-color,color] group-hover:bg-[#E6FF2A] group-hover:text-[#101010]">↗</span>
                </div>
                <p className="mt-5 font-body text-[11px] font-bold uppercase tracking-[.08em] text-[#1A3E9E]">{item.discipline}</p>
                <h3 className="mt-2 font-heading text-[clamp(28px,2.7vw,48px)] font-medium leading-[1.08] transition-colors group-hover:text-[#1A3E9E]">{item.name}</h3>
                <p className="mt-2 font-body text-[15px] text-[#5A5A5A]">{item.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
