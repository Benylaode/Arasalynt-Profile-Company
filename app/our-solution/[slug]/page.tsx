import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { getSolutionService, SOLUTION_SERVICES } from '@/lib/our-solution.data';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SOLUTION_SERVICES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getSolutionService(slug);
  if (!service) return {};
  return { title: `${service.title} — Arsalynk`, description: service.description };
}

export default async function SolutionServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getSolutionService(slug);
  if (!service) notFound();

  return (
    <main className="overflow-hidden bg-[#F7F7F7] text-[#101010]">
      <section className="relative flex h-[clamp(520px,41.667vw,800px)] items-end overflow-hidden rounded-b-[42px] bg-[#101010] px-[6vw] pb-[clamp(70px,7vw,130px)] text-white max-[1199px]:px-[4vw] max-[640px]:rounded-b-[24px]">
        <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,16,.25),#101010_100%)]" />
        <div className="relative z-10 max-w-[1200px]"><p className="font-body text-[12px] font-bold tracking-[.08em] text-[#E6FF2A]">OUR SOLUTION · SERVICE</p><h1 className="mt-6 font-heading text-[clamp(48px,5vw,96px)] font-medium leading-[.98]">{service.title}</h1><p className="mt-6 max-w-[780px] font-body text-[clamp(15px,1.1vw,20px)] leading-[1.65] text-white/85">{service.description}</p></div>
      </section>

      <section className="px-[6vw] py-[clamp(90px,8vw,150px)] max-[1199px]:px-[4vw]"><div className="mx-auto grid max-w-[1408px] grid-cols-[.8fr_1.2fr] gap-[clamp(50px,8vw,140px)] max-[850px]:grid-cols-1"><div><p className="font-body text-[12px] font-bold tracking-[.08em] text-[#1A3E9E]">THE CHALLENGE</p><h2 className="mt-6 font-heading text-[clamp(36px,3.5vw,64px)] font-medium leading-[1.08]">Built Around the Workflow, Not Around the Software</h2></div><p className="font-body text-[clamp(17px,1.2vw,22px)] leading-[1.75] text-[#424242]">{service.challenge}</p></div></section>

      <section className="bg-[#101010] px-[6vw] py-[clamp(90px,8vw,150px)] text-white max-[1199px]:px-[4vw]"><div className="mx-auto max-w-[1408px]"><p className="font-body text-[12px] font-bold tracking-[.08em] text-[#E6FF2A]">OUR APPROACH</p><h2 className="mt-6 font-heading text-[clamp(42px,4.3vw,78px)] font-medium">A Connected Implementation</h2><div className="mt-12 grid grid-cols-3 gap-[24px] max-[800px]:grid-cols-1">{service.approach.map((item, index) => <article key={item} className="rounded-[16px] border border-white/15 bg-white/[.04] p-[clamp(24px,3vw,44px)]"><span className="font-heading text-[18px] text-[#E6FF2A]">0{index + 1}</span><h3 className="mt-8 font-heading text-[clamp(24px,2.3vw,40px)] font-medium leading-[1.15]">{item}</h3></article>)}</div></div></section>

      <section className="px-[6vw] py-[clamp(90px,8vw,150px)] max-[1199px]:px-[4vw]"><div className="mx-auto max-w-[1408px]"><p className="font-body text-[12px] font-bold tracking-[.08em] text-[#1A3E9E]">EXPECTED OUTCOMES</p><div className="mt-8 divide-y divide-[#CCD1DD] border-y border-[#CCD1DD]">{service.outcomes.map((item, index) => <div key={item} className="flex items-center gap-8 py-7"><span className="font-body text-[12px] font-bold text-[#1A3E9E]">0{index + 1}</span><p className="font-heading text-[clamp(25px,3vw,48px)] font-medium">{item}</p></div>)}</div><Link href="/our-solution#services" className="mt-10 inline-flex rounded-full bg-[#1A3E9E] px-8 py-4 font-body text-[14px] font-medium text-white no-underline">EXPLORE OTHER SERVICES →</Link></div></section>
      <BeyondExpectations />
    </main>
  );
}
