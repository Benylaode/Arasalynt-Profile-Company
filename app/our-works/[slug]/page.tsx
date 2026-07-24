import React from 'react';
import Link from 'next/link';

const IconCheck = () => (
  <svg width="16" height="16" fill="none" stroke="#0052FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const IconArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const IconDashboard = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="12" width="7" height="9" rx="1" />
    <rect x="3" y="16" width="7" height="5" rx="1" />
  </svg>
);

const IconPriceTag = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const IconLayers = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full bg-[#FAFAFA] text-[#111] min-h-screen pt-[100px]">
      {/* HEADER */}
      <header className="max-w-[1200px] mx-auto px-5 py-[40px] text-left">
        <div className="font-heading text-[0.8rem] font-semibold text-[#0052FF] tracking-[1px] mb-5 uppercase">OUR WORK / MARKETPLACE WEB /</div>
        <h1 className="font-heading text-[2.5rem] font-bold leading-tight mb-6 max-w-[900px]">Manifesting The A-Z Print Solution, Marketplace Website Optimization for Sinau Print Semarang</h1>
        <div className="flex gap-3 flex-wrap">
          <span className="bg-[#EBF1FF] text-[#0033A0] px-4 py-1.5 rounded-full text-[0.75rem] font-semibold">SINAU PRINT</span>
          <span className="bg-[#EBF1FF] text-[#0033A0] px-4 py-1.5 rounded-full text-[0.75rem] font-semibold">WEB SYSTEM</span>
          <span className="bg-[#EBF1FF] text-[#0033A0] px-4 py-1.5 rounded-full text-[0.75rem] font-semibold">UI/UX</span>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="max-w-[1200px] mx-auto mb-[60px] px-5">
        <img 
          src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1200&auto=format&fit=crop" 
          alt="Sinau Print Website Mockup on Laptop" 
          className="w-full rounded-[20px] object-cover block shadow-[0_20px_40px_rgba(0,0,0,0.1)]" 
        />
      </div>

      {/* MAIN CONTENT SPLIT */}
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 min-[900px]:grid-cols-[280px_1fr] gap-[60px]">
        
        {/* SIDEBAR */}
        <aside>
          <div className="sticky top-[120px] h-fit bg-[#F4F6F9] p-8 rounded-[16px]">
            <div className="mb-8">
              <h3 className="font-heading text-[0.85rem] font-bold text-[#0052FF] mb-4 uppercase tracking-[0.5px]">CLIENT GOALS</h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                <li className="text-[0.9rem] text-[#444] flex items-center gap-2"><IconCheck /> Increase brand awareness</li>
                <li className="text-[0.9rem] text-[#444] flex items-center gap-2"><IconCheck /> UI/UX Revamp</li>
                <li className="text-[0.9rem] text-[#444] flex items-center gap-2"><IconCheck /> Brand Guidelines</li>
                <li className="text-[0.9rem] text-[#444] flex items-center gap-2"><IconCheck /> Next.js Tech Stack</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="font-heading text-[0.85rem] font-bold text-[#0052FF] mb-4 uppercase tracking-[0.5px]">TEAM INVOLVED</h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                <li className="text-[0.9rem] text-[#444] flex items-center gap-2"><IconCheck /> UI/UX Designer</li>
                <li className="text-[0.9rem] text-[#444] flex items-center gap-2"><IconCheck /> Frontend Dev</li>
                <li className="text-[0.9rem] text-[#444] flex items-center gap-2"><IconCheck /> Backend Dev</li>
                <li className="text-[0.9rem] text-[#444] flex items-center gap-2"><IconCheck /> Project Manager</li>
              </ul>
            </div>
            <button className="inline-flex items-center justify-center gap-2 w-full bg-[#0044FF] text-white p-[14px_20px] rounded-[8px] font-semibold text-[0.9rem] no-underline transition-all duration-300 border-none cursor-pointer hover:bg-[#0033CC] hover:-translate-y-0.5">
              VISIT WEBSITE <IconArrowRight size={14} />
            </button>
          </div>
        </aside>

        {/* MAIN BODY */}
        <main className="pb-[80px]">
          <h2 className="font-heading text-[1.8rem] font-bold mb-6 leading-snug">Digitizing Printing Services Through a Scalable Marketplace Platform</h2>
          <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
            Sinau Print Semarang is an industry leader in custom printing. As the demand for convenient, at-home printing services skyrocketed, Sinau Print recognized the need to transform their traditional manual ordering system into a robust, scalable digital marketplace. We worked closely with their team to architect a seamless, user-centric e-commerce experience that empowers users to order custom prints from anywhere, while streamlining their internal operations and order management systems.
          </p>

          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
            alt="Website Mockups" 
            className="w-full rounded-[16px] mb-[60px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          />

          <h2 className="font-heading text-[1.8rem] font-bold mb-6 leading-snug">Addressing Operational Bottlenecks in Manual Order Processing</h2>
          <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
            The previous workflow required tedious back-and-forth communication for pricing, file uploads, and status checks. By integrating a dynamic pricing calculator, automated pre-flight checks, and real-time order tracking, we drastically reduced operational bottlenecks and improved customer satisfaction.
          </p>

          {/* KEY FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-[60px]">
            <div className="bg-[#F4F6F9] p-6 rounded-[16px] flex flex-col gap-4">
              <div className="w-10 h-10 bg-[#EBF1FF] text-[#0052FF] rounded-[10px] flex items-center justify-center"><IconDashboard /></div>
              <h4 className="font-heading text-[1.1rem] font-bold leading-snug">Dashboard Admin & Envoy</h4>
              <p className="font-body text-[0.9rem] text-[#666] leading-relaxed">Comprehensive control panel to manage orders, track delivery envoys, and monitor sales analytics in real-time.</p>
            </div>
            <div className="bg-[#F4F6F9] p-6 rounded-[16px] flex flex-col gap-4">
              <div className="w-10 h-10 bg-[#EBF1FF] text-[#0052FF] rounded-[10px] flex items-center justify-center"><IconPriceTag /></div>
              <h4 className="font-heading text-[1.1rem] font-bold leading-snug">Multiple Print Pricing</h4>
              <p className="font-body text-[0.9rem] text-[#666] leading-relaxed">Dynamic pricing calculator that instantly adjusts based on material, size, quantity, and finishing options.</p>
            </div>
            <div className="bg-[#F4F6F9] p-6 rounded-[16px] flex flex-col gap-4">
              <div className="w-10 h-10 bg-[#EBF1FF] text-[#0052FF] rounded-[10px] flex items-center justify-center"><IconLayers /></div>
              <h4 className="font-heading text-[1.1rem] font-bold leading-snug">Multiple Product Variations</h4>
              <p className="font-body text-[0.9rem] text-[#666] leading-relaxed">Extensive catalogue supporting everything from business cards and banners to custom merchandise.</p>
            </div>
          </div>

          <h3 className="font-heading text-[1.4rem] font-bold mb-4">Subheadline 1</h3>
          <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
            Through meticulous user research and iterative prototyping, our UI/UX team crafted an interface that simplifies complex configuration options into an intuitive, step-by-step flow. This ensures that even users with no prior printing knowledge can confidently place complex orders without requiring support.
          </p>

          <h3 className="font-heading text-[1.4rem] font-bold mb-4">Subheadline 2</h3>
          <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
            Built on a modern tech stack utilizing Next.js for lightning-fast performance and a headless CMS architecture, the new platform is highly scalable. It effortlessly handles high traffic volumes during peak promotional seasons while maintaining optimal load times and SEO rankings.
          </p>

          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
            alt="Dashboard View" 
            className="w-full rounded-[16px] mb-[60px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          />

        </main>
      </div>

      {/* OTHER WORKS */}
      <section className="bg-[#F4F6F9] py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-heading text-[2rem] font-bold">Other Works</h2>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full border border-[#DDD] bg-transparent flex items-center justify-center cursor-pointer transition-all hover:bg-white hover:border-[#BBB]" aria-label="Previous">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-[#DDD] bg-transparent flex items-center justify-center cursor-pointer transition-all hover:bg-white hover:border-[#BBB]" aria-label="Next">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/our-works" className="group relative rounded-[16px] overflow-hidden block no-underline aspect-[16/9]">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" alt="X-1 Tire" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                <div>
                  <h3 className="font-heading text-white text-[1.25rem] font-bold mb-2">Company Profile Revamp for X-1 Tire</h3>
                  <span className="font-heading text-[#A3FF00] text-[0.75rem] font-semibold uppercase tracking-[1px]">COMPANY PROFILE / CONTENT REVAMP</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
                  <IconArrowRight size={18} />
                </div>
              </div>
            </Link>
            <Link href="/our-works" className="group relative rounded-[16px] overflow-hidden block no-underline aspect-[16/9]">
              <img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop" alt="Padel 2026" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                <div>
                  <h3 className="font-heading text-white text-[1.25rem] font-bold mb-2">Live Streaming Event for Sirkuit Nasional Padel 2026</h3>
                  <span className="font-heading text-[#A3FF00] text-[0.75rem] font-semibold uppercase tracking-[1px]">PADEL NASIONAL / LIVE STREAMING EVENT</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
                  <IconArrowRight size={18} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0A0F1C] text-white py-[100px] px-5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,82,255,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-[1] max-w-[600px] mx-auto">
          <h2 className="font-heading text-[2.5rem] font-bold mb-10 leading-tight">Build Your Own Digital Marketplace with Us</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#contact" className="bg-[#D3FF24] text-[#111] px-8 py-3.5 rounded-[30px] font-bold no-underline inline-flex items-center gap-2 transition-all duration-300 hover:bg-[#C4F013] hover:-translate-y-0.5">
              GET STARTED <IconArrowRight size={14} />
            </a>
            <a href="/our-works" className="border border-white/20 text-white px-8 py-3.5 rounded-[30px] font-semibold no-underline inline-flex items-center gap-2 transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              OTHER WORKS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
