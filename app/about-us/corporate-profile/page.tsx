'use client';

import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import Link from 'next/link';

const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const SERVICES = [
  {
    title: "Enterprise Data\n& Intelligence",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Customer\nAcquisition",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Mission-Critical\nBroadcast",
    img: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Integrated\nExecution",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop"
  }
];

export default function CorporateProfilePage() {
  const handleScrollDown = () => {
    const el = document.getElementById("content");
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full relative bg-[#fafafa] min-h-screen">
      
      {/* HERO HEADER SECTION */}
      <section className="relative w-full h-[60vh] min-h-[480px] max-[768px]:h-[50vh] bg-[#020617] overflow-hidden flex items-center justify-center" id="hero" aria-label="Corporate Profile Hero">
        <div className="absolute inset-0 z-[1]" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
            alt="Global Network"
            className="w-full h-full object-cover opacity-45 brightness-70 contrast-110"
          />
        </div>
        <div 
          className="absolute inset-0 z-[2] pointer-events-none" 
          aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-t from-[#fafafa] to-transparent z-[3] pointer-events-none" aria-hidden="true" />

        <div className="relative z-[5] text-center max-w-[720px] px-6 mt-10">
          <span className="inline-block font-heading text-[10px] font-extrabold tracking-[0.25em] text-lime-yellow uppercase mb-4">
            HOME &gt; ABOUT US &gt; CORPORATE PROFILE
          </span>
          <h1 className="font-heading font-bold text-[56px] max-[1024px]:text-[44px] max-[768px]:text-[36px] leading-tight tracking-tight text-white mb-5">
            Corporate Profile
          </h1>
          <button 
            onClick={handleScrollDown} 
            className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[44px] h-[44px] rounded-full bg-white/8 border border-white/15 text-white flex items-center justify-center cursor-pointer z-[5] transition-colors duration-150 hover:bg-white/15 animate-bounce-slow" 
            aria-label="Scroll down"
          >
            <IconChevronDown />
          </button>
        </div>
      </section>

      <div id="content">
        {/* THE BACKBONE SECTION */}
        <section className="py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[60px] bg-[#fafafa]">
          <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
            <div className="text-center max-w-[800px] mx-auto mb-[64px]">
              <span className="font-heading text-[11px] font-extrabold tracking-[0.2em] text-blue-600 uppercase block mb-3">
                &lt; ABOUT ARSALYNT &gt;
              </span>
              <h2 className="font-heading font-bold text-[48px] max-[1280px]:text-[40px] max-[1024px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px] leading-snug tracking-tight text-dark mb-4">
                The Backbone<br />of Modern Enterprise
              </h2>
              <p className="font-body text-lg leading-relaxed text-[#717171] max-w-[640px] mx-auto">
                We provide comprehensive technology solutions designed to modernize, connect, and scale your business operations. 
                From intelligent hardware integration to enterprise software ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 items-center max-w-[1100px] mx-auto">
              <div className="rounded-[20px] overflow-hidden aspect-[4/3] shadow-md">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop" alt="Side image 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[24px] overflow-hidden aspect-[16/10] shadow-xl">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Center team collaboration" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[20px] overflow-hidden aspect-[4/3] shadow-md">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=400&auto=format&fit=crop" alt="Side image 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* VISION MISSION SECTION */}
        <section className="relative py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[72px] bg-[#050b18] overflow-hidden text-center">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" alt="Network" className="w-full h-full object-cover opacity-20" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b18]/80 via-transparent to-[#050b18]/80 z-[1]" />
          
          <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] relative z-[2]">
            <div className="max-w-[840px] mx-auto flex flex-col items-center">
              <span className="font-heading text-[11px] font-extrabold tracking-[0.2em] text-lime-yellow uppercase block mb-4">
                &lt; VISION &gt;
              </span>
              <h2 className="font-heading font-medium text-[36px] max-[1280px]:text-[32px] max-[768px]:text-[24px] leading-snug text-white mb-12">
                We envision a future where enterprises thrive through one unified ecosystem built for growth, resilience, and execution
              </h2>
              
              <div className="p-8 rounded-[24px] bg-white/4 border border-white/8 max-w-[640px] w-full">
                <span className="font-heading text-[11px] font-extrabold tracking-[0.2em] text-lime-yellow uppercase block mb-3">
                  &lt; MISSION &gt;
                </span>
                <p className="font-body text-lg max-[768px]:text-base leading-relaxed text-[#A0A0A0]">
                  Our mission is to make corporate execution flawless, predictable, and immensely capital efficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES SECTION */}
        <section className="py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[60px] bg-white">
          <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
            <div className="text-center max-w-[800px] mx-auto mb-[64px]">
              <span className="font-heading text-[11px] font-extrabold tracking-[0.2em] text-blue-600 uppercase block mb-3">
                &lt; OUR SERVICES &gt;
              </span>
              <h2 className="font-heading font-bold text-[48px] max-[1280px]:text-[40px] max-[1024px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px] leading-snug tracking-tight text-dark">
                Make Sustainable<br />Business Excellence
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
              {SERVICES.map((srv, i) => (
                <div key={i} className="group rounded-[20px] overflow-hidden bg-[#fafafa] border border-[#E5E5E5] p-5 flex flex-col gap-4 shadow-sm transition-transform duration-250 hover:-translate-y-1">
                  <div className="aspect-[4/3] rounded-[14px] overflow-hidden">
                    <img src={srv.img} alt={srv.title.replace('\n', ' ')} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                  </div>
                  <h3 className="font-heading font-bold text-[18px] leading-snug text-dark">
                    {srv.title.split('\n').map((line, idx) => (
                      <span key={idx}>{line}<br/></span>
                    ))}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPLORE OTHER INFORMATION */}
        <section className="py-[96px] max-[768px]:py-[60px] bg-[#fafafa]">
          <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
            <h2 className="font-heading font-bold text-[28px] max-[768px]:text-[22px] text-dark text-center mb-10">
              Explore Other Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
              <Link href="/about-us/company-leadership" className="group relative aspect-[16/9] rounded-[24px] overflow-hidden shadow-md flex items-end p-8 no-underline transition-transform duration-400 hover:-translate-y-1">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" alt="Company Leadership" className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
                <h3 className="relative z-[2] font-heading font-bold text-[24px] text-white">Company Leadership</h3>
              </Link>
              
              <Link href="/about-us/ecosystem-philosophy" className="group relative aspect-[16/9] rounded-[24px] overflow-hidden shadow-md flex items-end p-8 no-underline transition-transform duration-400 hover:-translate-y-1">
                <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop" alt="Ecosystem Philosophy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
                <h3 className="relative z-[2] font-heading font-bold text-[24px] text-white">Ecosystem Philosophy</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* BEYOND EXPECTATIONS */}
      <BeyondExpectations />
    </div>
  );
}
