import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTeamMember, TEAM_MEMBERS } from '@/lib/team.data';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TEAM_MEMBERS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const member = getTeamMember((await params).slug);
  if (!member) return { title: 'Profile Not Found', robots: { index: false, follow: false } };
  return {
    title: member.name,
    description: member.summary,
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function TeamProfilePage({ params }: PageProps) {
  const member = getTeamMember((await params).slug);
  if (!member) notFound();
  const currentIndex = TEAM_MEMBERS.findIndex((item) => item.slug === member.slug);
  const previous = TEAM_MEMBERS[(currentIndex - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length];
  const next = TEAM_MEMBERS[(currentIndex + 1) % TEAM_MEMBERS.length];

  return (
    <main className="overflow-hidden bg-[#F7F7F7] text-[#101010]">
      <section className="px-[6vw] pb-[clamp(60px,6vw,116px)] pt-[clamp(130px,9vw,180px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto grid max-w-[1700px] grid-cols-[minmax(320px,.8fr)_1.2fr] items-end gap-[clamp(34px,6vw,112px)] max-[850px]:grid-cols-1">
          <figure className="relative m-0 aspect-[4/5] overflow-hidden rounded-[28px] bg-[#07152f]">
            <img src={member.image} alt={member.name} className="h-full w-full object-cover" style={{ objectPosition: member.imagePosition }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/65 via-transparent to-transparent" />
          </figure>
          <div className="pb-5">
            <Link href="/profile" className="mb-8 inline-flex items-center gap-2 font-body text-[12px] font-bold uppercase tracking-[.08em] text-[#1A3E9E] hover:underline">← All Profiles</Link>
            <p className="flex items-center gap-3 font-body text-[12px] font-bold uppercase tracking-[.08em] text-[#1A3E9E]"><span className="h-2 w-2 bg-[#1A3E9E]" />{member.discipline}</p>
            <h1 className="mt-5 font-heading text-[clamp(52px,6vw,112px)] font-medium leading-[.92] tracking-[-.045em]">{member.name}</h1>
            <p className="mt-7 font-heading text-[clamp(22px,2vw,38px)] font-medium leading-[1.2] text-[#333]">{member.role}</p>
            <p className="mt-7 max-w-[830px] font-body text-[clamp(16px,1.15vw,22px)] leading-[1.65] text-[#4A4A4A]">{member.summary}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#101010] px-[6vw] py-[clamp(80px,8vw,150px)] text-white max-[1199px]:px-[4vw]">
        <div className="mx-auto grid max-w-[1408px] grid-cols-[.72fr_1.28fr] gap-[clamp(48px,8vw,150px)] max-[800px]:grid-cols-1">
          <div><p className="font-body text-[12px] font-bold uppercase tracking-[.08em] text-[#E6FF2A]">Profile</p><h2 className="mt-5 font-heading text-[clamp(40px,4.3vw,78px)] font-medium leading-[1.02]">Leadership in practice.</h2></div>
          <div className="space-y-6 font-body text-[clamp(16px,1.05vw,20px)] leading-[1.75] text-white/75">{member.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="px-[6vw] py-[clamp(80px,8vw,150px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto grid max-w-[1408px] grid-cols-2 gap-[clamp(48px,7vw,130px)] max-[720px]:grid-cols-1">
          {[['Core Expertise', member.expertise], ['Working Principles', member.principles]].map(([title, items]) => (
            <div key={title as string}><h2 className="font-heading text-[clamp(34px,3.2vw,60px)] font-medium">{title}</h2><div className="mt-8 border-t border-[#BFC5D3]">{(items as string[]).map((item, index) => <div key={item} className="flex items-center gap-6 border-b border-[#BFC5D3] py-6"><span className="font-body text-[11px] font-bold text-[#1A3E9E]">0{index + 1}</span><p className="font-heading text-[clamp(21px,1.7vw,32px)] font-medium">{item}</p></div>)}</div></div>
          ))}
        </div>
      </section>

      {TEAM_MEMBERS.length > 1 ? (
        <nav aria-label="Team profile navigation" className="grid grid-cols-2 border-t border-[#CCD1DD] max-[620px]:grid-cols-1">
          <Link href={`/profile/${previous.slug}`} className="group border-r border-[#CCD1DD] px-[6vw] py-12 max-[620px]:border-b max-[620px]:border-r-0"><span className="font-body text-[11px] font-bold uppercase tracking-[.08em] text-[#1A3E9E]">Previous Profile</span><p className="mt-3 font-heading text-[clamp(25px,2.3vw,44px)] font-medium transition-colors group-hover:text-[#1A3E9E]">← {previous.name}</p></Link>
          <Link href={`/profile/${next.slug}`} className="group px-[6vw] py-12 text-right"><span className="font-body text-[11px] font-bold uppercase tracking-[.08em] text-[#1A3E9E]">Next Profile</span><p className="mt-3 font-heading text-[clamp(25px,2.3vw,44px)] font-medium transition-colors group-hover:text-[#1A3E9E]">{next.name} →</p></Link>
        </nav>
      ) : null}
    </main>
  );
}
