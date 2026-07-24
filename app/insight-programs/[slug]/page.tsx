import React from 'react';
import Link from 'next/link';

const IconArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full bg-[#FAFAFA] text-[#111] min-h-screen pt-[100px]">
      {/* HEADER */}
      <header className="max-w-[1000px] mx-auto px-5 py-[40px] text-left">
        <div className="font-heading text-[0.8rem] font-semibold text-[#0052FF] tracking-[1px] mb-5 uppercase">HOME &gt; INSIGHT PROGRAMS &gt; CASE STUDIES &gt;</div>
        <h1 className="font-heading text-[2.5rem] font-bold leading-tight mb-6">Delivering a Seamless National Badminton Championship Experience</h1>
        <div className="flex gap-3 flex-wrap">
          <span className="bg-[#EBF1FF] text-[#0033A0] px-4 py-1.5 rounded-full text-[0.75rem] font-semibold">PADEL NASIONAL</span>
          <span className="bg-[#EBF1FF] text-[#0033A0] px-4 py-1.5 rounded-full text-[0.75rem] font-semibold">LIVE STREAMING</span>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="max-w-[1200px] mx-auto mb-[60px] px-5">
        <img 
          src="https://images.unsplash.com/photo-1599577180579-2470e8ed3233?q=80&w=1600&auto=format&fit=crop" 
          alt="Badminton Match Venue" 
          className="w-full rounded-[20px] object-cover block shadow-[0_20px_40px_rgba(0,0,0,0.1)] aspect-[21/9]" 
        />
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-[800px] mx-auto px-5 pb-[80px]">
        <h2 className="font-heading text-[1.8rem] font-bold mb-6 leading-snug">Bringing Every Match to Audiences Nationwide</h2>
        <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
          Organizing a national-scale sporting event requires seamless coordination, high-quality production, and reliable broadcast technology to ensure fans across the country can engage with the tournament. We partnered with the organizers to deliver a comprehensive live broadcasting and media production solution.
        </p>

        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop" 
          alt="Broadcast Monitoring" 
          className="w-full rounded-[16px] mb-[60px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
        />

        <h3 className="font-heading text-[1.4rem] font-bold mb-4">Broadcasting Every Match Without Compromise</h3>
        <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
          With multiple courts running simultaneously, our challenge was to ensure that not a single moment of action was missed. We deployed a robust, multi-court streaming architecture with centralized mixing and live graphics integration to provide a premium viewing experience comparable to international sports broadcasts.
        </p>

        <h3 className="font-heading text-[1.4rem] font-bold mb-4">Professional Production From Court to Screen</h3>
        
        <h4 className="font-heading text-[1.1rem] font-bold mb-2">Multi-Camera Production</h4>
        <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
          Each court featured a dedicated multi-camera setup covering wide angles and tight action shots, seamlessly switching to capture player emotions, fast-paced rallies, and crucial referee decisions.
        </p>

        <h4 className="font-heading text-[1.1rem] font-bold mb-2">Live Broadcast Direction</h4>
        <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
          Our technical directors and producers worked in real-time to overlay scores, player statistics, and sponsor graphics, ensuring a continuous and highly professional output for the audience watching from home.
        </p>

        <img 
          src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=1200&auto=format&fit=crop" 
          alt="Live Broadcast System Monitor" 
          className="w-full rounded-[16px] mb-[60px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
        />

        <h3 className="font-heading text-[1.4rem] font-bold mb-4">A Championship Experienced Beyond the Venue</h3>
        <p className="font-body text-[1.05rem] leading-relaxed text-[#555] mb-[40px]">
          The resulting production achieved record-breaking viewership numbers across online platforms. By delivering a flawless live stream, we helped expand the championship's reach far beyond the physical venue, bringing the excitement of national badminton directly to fans' living rooms.
        </p>
      </main>

      {/* OTHER CASE STUDIES */}
      <section className="bg-[#F4F6F9] py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-heading text-[2rem] font-bold">Other Case Studies</h2>
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
            <Link href="/insight-programs" className="group block no-underline bg-transparent transition-transform duration-300 hover:-translate-y-1">
              <div className="relative rounded-[12px] overflow-hidden mb-4 aspect-[16/9]">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" alt="Data Tracking" className="w-full h-full object-cover block" />
              </div>
              <span className="font-heading text-[#0052FF] text-[0.75rem] font-bold uppercase mb-2 block">DATA</span>
              <h3 className="font-heading text-[1.1rem] font-bold text-[#111] leading-snug mb-2">How We Built an Election Data Tracking System</h3>
              <p className="font-body text-[0.9rem] text-[#666] leading-relaxed">Delivering real-time data visualization and processing architecture for critical public events.</p>
            </Link>

            <Link href="/insight-programs" className="group block no-underline bg-transparent transition-transform duration-300 hover:-translate-y-1">
              <div className="relative rounded-[12px] overflow-hidden mb-4 aspect-[16/9]">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" alt="Enterprise IoT" className="w-full h-full object-cover block" />
              </div>
              <span className="font-heading text-[#0052FF] text-[0.75rem] font-bold uppercase mb-2 block">IOT</span>
              <h3 className="font-heading text-[1.1rem] font-bold text-[#111] leading-snug mb-2">Modernizing Operations with Enterprise IoT</h3>
              <p className="font-body text-[0.9rem] text-[#666] leading-relaxed">Connecting physical assets to cloud infrastructure for predictive maintenance and insights.</p>
            </Link>

            <Link href="/insight-programs" className="group block no-underline bg-transparent transition-transform duration-300 hover:-translate-y-1">
              <div className="relative rounded-[12px] overflow-hidden mb-4 aspect-[16/9]">
                <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop" alt="PBPI Broadcasting" className="w-full h-full object-cover block" />
              </div>
              <span className="font-heading text-[#0052FF] text-[0.75rem] font-bold uppercase mb-2 block">LIVE STREAMING</span>
              <h3 className="font-heading text-[1.1rem] font-bold text-[#111] leading-snug mb-2">How We Broadcasted PBPI Sirnas Jawa Tengah</h3>
              <p className="font-body text-[0.9rem] text-[#666] leading-relaxed">End-to-end event coverage and multi-platform distribution for regional sports tournaments.</p>
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
            <a href="/insight-programs" className="border border-white/20 text-white px-8 py-3.5 rounded-[30px] font-semibold no-underline inline-flex items-center gap-2 transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              OTHER CASE STUDIES
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
