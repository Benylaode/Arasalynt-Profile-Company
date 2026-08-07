import type { Metadata } from 'next';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { CORE_SOLUTIONS, OUR_SOLUTION_CHALLENGE, OUR_SOLUTION_CHALLENGES, SOLUTION_SERVICES } from '@/lib/our-solution.data';
import SolutionWorksExplorer from '@/components/sections/SolutionWorksExplorer/SolutionWorksExplorer';

export const metadata: Metadata = {
  title: 'Our Solution — Arsalynk',
  description: 'IT solution to optimize your enterprise workflow.',
};

export default function OurSolutionPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <section className="relative isolate h-[clamp(520px,41.667vw,800px)] overflow-hidden rounded-b-[42px] bg-[#101010] max-[640px]:rounded-b-[24px]">
        <img src="/images/our-works/our-works-hero-bg.webp" alt="" className="absolute left-1/2 top-1/2 z-0 h-auto min-h-[166%] w-[104%] min-w-[1100px] max-w-none object-cover" style={{ transform: 'translate(-50%, calc(-50% + clamp(90px, 9.74vw, 187px)))' }} />
        <img src="/images/specialized/specialized-network.webp" alt="" className="pointer-events-none absolute bottom-[-90px] left-1/2 z-[1] w-[134.8vw] min-w-[1450px] max-w-none -translate-x-1/2 scale-y-[-1] md:bottom-[-140px] xl:bottom-[-204px]" style={{ mixBlendMode: 'plus-lighter' }} />
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,#1A3E9E_0%,rgba(26,62,158,0)_71.94%)] mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 z-[3] h-[87%] bg-[linear-gradient(180deg,rgba(16,16,16,0)_9.62%,#101010_100%)]" />
        <div className="absolute left-1/2 top-1/2 z-10 flex w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 px-5 text-center">
          <p className="font-body text-[clamp(10px,.75vw,14px)] font-bold uppercase tracking-[.08em] text-[#E6FF2A]">HOME · OUR SOLUTION</p>
          <h1 className="font-heading text-[clamp(52px,5vw,96px)] font-medium leading-none text-[#F7F7F7]">Our Solution</h1>
          <p className="max-w-[780px] font-body text-[clamp(17px,1.35vw,26px)] leading-[1.5] text-white/90">IT solution to optimize your enterprise workflow</p>
        </div>
        <a href="#challenge" aria-label="Go to The Challenge" className="absolute bottom-[46px] left-1/2 z-20 flex h-[58px] w-[58px] -translate-x-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-2xl text-white backdrop-blur-[4px] transition-transform hover:scale-105 md:h-[70px] md:w-[70px] xl:bottom-[71px] xl:h-[80px] xl:w-[80px]">↓</a>
      </section>

      <section id="challenge" className="relative isolate scroll-mt-24 overflow-hidden bg-[#EEF0F6] px-[6vw] py-[clamp(100px,8.125vw,156px)] max-[1199px]:px-[4vw]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[clamp(420px,52vw,700px)] w-[88%] max-w-[1759px] -translate-x-1/2 -translate-y-1/2 bg-cover bg-center opacity-[.14]" style={{ backgroundImage: "url('/images/our-business/pain-points-radial.png')" }} />
        <div className="relative z-10 mx-auto flex max-w-[1700px] flex-col items-center gap-[clamp(48px,4.167vw,80px)]">
          <div className="flex flex-col items-center gap-6 text-center"><p className="font-body text-[13px] font-bold tracking-[.08em] text-[#1A3E9E]">▪ THE CHALLENGE</p><h2 className="max-w-[900px] font-heading text-[clamp(48px,4.375vw,84px)] font-medium leading-[1.08]">{OUR_SOLUTION_CHALLENGE.title}</h2></div>
          <div className="grid w-full grid-cols-4 gap-[clamp(16px,1.56vw,30px)] max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
            {OUR_SOLUTION_CHALLENGES.map((challenge, index) => (
              <article key={challenge.title} className="group flex min-h-[290px] flex-col rounded-[16px] border border-transparent bg-[linear-gradient(79deg,rgba(26,62,158,.05),rgba(133,166,255,.12))] p-[clamp(20px,1.6vw,30px)] backdrop-blur-[8px] transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#7F9CFF] hover:shadow-[0_12px_42px_rgba(26,62,158,.2)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#99A6E7] bg-[#99A6E7]/35 font-body text-[13px] font-bold text-[#1A3E9E]">0{index + 1}</div>
                <h3 className="mt-7 font-heading text-[clamp(25px,2vw,38px)] font-medium leading-[1.08]">{challenge.title}</h3>
                <p className="mt-4 font-body text-[clamp(13px,.85vw,16px)] leading-[1.6] text-[#424242]">{challenge.description}</p>
              </article>
            ))}
          </div>
          <article className="hidden">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-[#99A6E7] bg-[#99A6E7]/35 text-[30px]">⌁</div>
            <div><h3 className="font-heading text-[clamp(28px,3vw,54px)] font-medium leading-tight">Disconnected Enterprise Workflow</h3><p className="mt-4 max-w-[820px] font-body text-[clamp(14px,1vw,18px)] leading-[1.65] text-[#424242]">{OUR_SOLUTION_CHALLENGE.description}</p></div>
          </article>
        </div>
      </section>

      <section id="solutions" className="relative overflow-hidden bg-[#101010] px-[6vw] py-[clamp(100px,8.125vw,156px)] text-white max-[1199px]:px-[4vw]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(26,62,158,.45),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-[1700px]"><div className="mb-12 text-center"><p className="font-body text-[13px] font-bold tracking-[.08em] text-[#E6FF2A]">▪ OUR SOLUTION</p><h2 className="mt-5 font-heading text-[clamp(48px,4.375vw,84px)] font-medium">Integrated Enterprise Solutions</h2></div>
          <div className="grid grid-cols-2 gap-[30px] max-[800px]:grid-cols-1">{CORE_SOLUTIONS.map((solution) => <article id={solution.slug} key={solution.slug} className="group scroll-mt-24 overflow-hidden rounded-[18px] border border-white/20 bg-white/[.04] p-4 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[#E6FF2A]/60 hover:bg-white/[.09]"><div className="aspect-[16/9] overflow-hidden rounded-[12px]"><img src={solution.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div><div className="px-2 pb-5 pt-8"><h3 className="font-heading text-[clamp(32px,3vw,56px)] font-medium leading-[1.05] text-[#E6FF2A]">{solution.title}</h3><p className="mt-5 max-w-[650px] font-body text-[15px] leading-[1.65] text-white/75">{solution.description}</p></div></article>)}</div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-[#99A6E7]/10 px-[6vw] py-[clamp(80px,7vw,130px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto max-w-[1700px]"><div className="mb-12 flex items-end justify-between gap-8 max-[700px]:flex-col max-[700px]:items-start"><h2 className="font-heading text-[clamp(44px,4.375vw,84px)] font-medium leading-[1.04]">Explore<br />Our Services
</h2><p className="max-w-[430px] font-body text-[15px] leading-[1.65] text-[#424242]">Enterprise systems designed around the workflows that matter most to your operations.</p></div>
          <SolutionWorksExplorer services={SOLUTION_SERVICES} />
        </div>
      </section>
      <BeyondExpectations />
    </main>
  );
}
