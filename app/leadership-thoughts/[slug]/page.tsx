import React from 'react';
import Link from 'next/link';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';

const IconArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function LeadershipThoughtDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full bg-[#FAFAFA] text-[#111] min-h-screen pt-[100px]">
      {/* HEADER */}
      <header className="max-w-[1000px] mx-auto px-5 py-[40px] text-left">
        <div className="font-heading text-[0.8rem] font-semibold text-[#0052FF] tracking-[1px] mb-5 uppercase">HOME &gt; LEADERSHIP THOUGHTS &gt; INSIGHTS &gt;</div>
        <h1 className="font-heading text-[2.5rem] font-bold leading-tight mb-6">Building High-Performance Teams Starts with Trust, Not Control</h1>
        <div className="flex gap-3 flex-wrap">
          <span className="bg-[#EBF1FF] text-[#0033A0] px-4 py-1.5 rounded-full text-[0.75rem] font-semibold">LEADERSHIP</span>
          <span className="bg-[#EBF1FF] text-[#0033A0] px-4 py-1.5 rounded-full text-[0.75rem] font-semibold">CULTURE</span>
          <span className="bg-[#EBF1FF] text-[#0033A0] px-4 py-1.5 rounded-full text-[0.75rem] font-semibold">MANAGEMENT</span>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="max-w-[1200px] mx-auto mb-[60px] px-5">
        <img 
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop" 
          alt="Silhouette of business people" 
          className="w-full rounded-[20px] object-cover block shadow-[0_20px_40px_rgba(0,0,0,0.1)] aspect-[21/9]" 
        />
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-[800px] mx-auto px-5 pb-[80px]">
        <h2 className="font-heading text-[1.8rem] font-bold mb-6 leading-snug">Trust Begins with Clarity</h2>
        <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
          A high-performance culture is not built on micromanagement or constant surveillance. It is built on trust, which stems from clarity of purpose, alignment of goals, and the empowerment of individuals to make decisions. When leaders focus on defining the "what" and the "why," leaving the "how" to their teams, they unlock unprecedented levels of innovation and ownership.
        </p>
        <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
          Trust is not a passive state; it requires active communication, vulnerability from leadership, and a safe environment where taking calculated risks is encouraged rather than penalized.
        </p>

        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
          alt="Team assembling puzzle" 
          className="w-full rounded-[16px] mb-[60px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
        />

        <h3 className="font-heading text-[1.4rem] font-bold mb-4">Ownership Over Micromanagement</h3>
        <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
          When individuals are given autonomy, they naturally assume greater responsibility. Leaders must shift their mindset from controlling outcomes to coaching their teams toward them. Providing regular, constructive feedback and removing roadblocks is far more effective than monitoring every step of the process.
        </p>

        <h3 className="font-heading text-[1.4rem] font-bold mb-4">Mistakes Are Opportunities to Improve</h3>
        
        <h4 className="font-heading text-[1.1rem] font-bold mb-2">Multi-Camera Production</h4>
        <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
          A culture that fears failure is a culture that stagnates. High-performance teams understand that mistakes are an inevitable part of pushing boundaries. By conducting blameless post-mortems and focusing on systemic improvements rather than individual blame, organizations can turn failures into their most valuable learning opportunities.
        </p>

        <h4 className="font-heading text-[1.1rem] font-bold mb-2">Building Trust Through Transparency</h4>
        <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
          Transparency in decision-making, financial health, and company strategy eliminates rumors and builds a cohesive unit. When team members understand the broader context of their work, they are better equipped to make autonomous decisions that align with the organization's overarching goals.
        </p>

        <img 
          src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=1200&auto=format&fit=crop" 
          alt="Live Broadcast System Monitor" 
          className="w-full rounded-[16px] mb-[60px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
        />

        <h3 className="font-heading text-[1.4rem] font-bold mb-4">A Championship Experienced Beyond the Venue</h3>
        <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
          Ultimately, leadership is about serving those you lead. By cultivating a culture rooted in trust, respect, and continuous learning, leaders can build resilient teams capable of navigating uncertainty and achieving sustained excellence.
        </p>
      </main>

      {/* OTHER THOUGHTS */}
      <section className="bg-[#F4F6F9] py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-heading text-[2rem] font-bold">Other Thoughts</h2>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full border border-[#DDD] bg-transparent flex items-center justify-center cursor-pointer transition-all hover:bg-white hover:border-[#BBB]" aria-label="Previous">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-[#DDD] bg-transparent flex items-center justify-center cursor-pointer transition-all hover:bg-white hover:border-[#BBB]" aria-label="Next">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/leadership-thoughts" className="group block no-underline bg-transparent transition-transform duration-300 hover:-translate-y-1">
              <div className="relative rounded-[12px] overflow-hidden mb-4 aspect-[16/9]">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop" alt="Leadership" className="w-full h-full object-cover block" />
              </div>
              <span className="font-heading text-[#0052FF] text-[0.75rem] font-bold uppercase mb-2 block">LEADERSHIP</span>
              <h3 className="font-heading text-[1.1rem] font-bold text-[#111] leading-snug mb-2">Building High-Performance Teams Starts with Trust, Not...</h3>
              <p className="font-body text-[0.9rem] text-[#666] leading-relaxed">Trust is the foundation of any successful team. Learn how to cultivate it within your organization.</p>
            </Link>

            <Link href="/leadership-thoughts" className="group block no-underline bg-transparent transition-transform duration-300 hover:-translate-y-1">
              <div className="relative rounded-[12px] overflow-hidden mb-4 aspect-[16/9]">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" alt="Process" className="w-full h-full object-cover block" />
              </div>
              <span className="font-heading text-[#0052FF] text-[0.75rem] font-bold uppercase mb-2 block">MANAGEMENT</span>
              <h3 className="font-heading text-[1.1rem] font-bold text-[#111] leading-snug mb-2">Why We Prioritize Process Before Technology</h3>
              <p className="font-body text-[0.9rem] text-[#666] leading-relaxed">Implementing new tools without fixing broken processes only accelerates inefficiency.</p>
            </Link>

            <Link href="/leadership-thoughts" className="group block no-underline bg-transparent transition-transform duration-300 hover:-translate-y-1">
              <div className="relative rounded-[12px] overflow-hidden mb-4 aspect-[16/9]">
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop" alt="Collaboration" className="w-full h-full object-cover block" />
              </div>
              <span className="font-heading text-[#0052FF] text-[0.75rem] font-bold uppercase mb-2 block">CULTURE</span>
              <h3 className="font-heading text-[1.1rem] font-bold text-[#111] leading-snug mb-2">Lessons from Scaling Cross-Functional Collaboration</h3>
              <p className="font-body text-[0.9rem] text-[#666] leading-relaxed">Breaking down silos and aligning disparate teams towards a unified corporate vision.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION - BEYOND EXPECTATIONS */}
      <BeyondExpectations />
    </div>
  );
}
