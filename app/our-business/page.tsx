import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBusinesses } from '@/lib/db/actions';

export const metadata: Metadata = {
  title: 'Our Business — Arsalynt',
  description:
    'Explore the Arsalynt ecosystem — from IT infrastructure and data analytics to media, branding, and beyond.',
};

/* Pure SVG icon */
function IconChevronDown() {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function OurBusinessPage() {
  const allBusinesses = getAllBusinesses();

  const topRow = allBusinesses.filter((b) =>
    ['IT INFRASTRUCTURE', 'DATA & ANALYTICS'].includes(b.category),
  );
  const mediaRow = allBusinesses.filter((b) =>
    ['MEDIA', 'MEDIA / BRANDING'].includes(b.category),
  );

  return (
    <div className="w-full relative bg-[#fafafa] min-h-screen">

      {/* HERO */}
      <section className="relative w-full h-[60vh] min-h-[480px] max-[768px]:h-[50vh] bg-[#020617] overflow-hidden flex items-center justify-center" id="hero" aria-label="Our Business Title">
        <div className="absolute inset-0 z-[1]" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop"
            alt="Neon City Skyline"
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
            WHAT WE FOCUS ON
          </span>
          <h1 className="font-heading font-bold text-[56px] max-[1024px]:text-[44px] max-[768px]:text-[36px] leading-tight tracking-tight text-white mb-5">
            Our Business
          </h1>
          <p className="font-body text-lg leading-relaxed text-[#A0A0A0] max-w-[600px] mx-auto">
            Sinergi teknologi untuk menciptakan ekosistem digital yang tangguh,
            terintegrasi, dan berdampak bagi kemajuan bisnis Anda.
          </p>
          <a 
            href="#divisions-grid" 
            className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[44px] h-[44px] rounded-full bg-white/8 border border-white/15 text-white flex items-center justify-center cursor-pointer z-[5] transition-colors duration-150 hover:bg-white/15 animate-bounce-slow" 
            aria-label="Scroll down"
          >
            <IconChevronDown />
          </a>
        </div>
      </section>

      {/* DIVISIONS GRID */}
      <section
        id="divisions-grid"
        className="bg-[#fafafa] pt-10 pb-[100px] max-[768px]:pt-[20px] max-[768px]:pb-[60px] relative z-[4]"
        aria-label="Business Divisions Grid"
      >
        <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">

          {/* Top Row: IT Infrastructure & Data Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {topRow.map((biz) => (
              <div key={biz.slug} className="flex flex-col">
                <div className="flex items-center gap-[10px] mb-5">
                  <span className="w-[6px] h-[6px] rounded-full bg-blue-600" />
                  <h2 className="font-heading text-[13px] font-extrabold tracking-[0.05em] text-blue-600 uppercase">{biz.category}</h2>
                </div>
                <Link
                  href={`/our-business/${biz.slug}`}
                  className="group relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-end no-underline transition-transform duration-400 hover:-translate-y-1"
                >
                  <img
                    src={biz.heroImg}
                    alt={biz.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent z-[1]" />
                  <div className="relative z-[2] p-8 max-[768px]:p-5">
                    <h3 className="font-heading font-bold text-[26px] max-[768px]:text-[20px] text-white leading-snug tracking-tight">{biz.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Row: Digital Media & Social Impact */}
          {mediaRow.length > 0 && (
            <div className="mt-14">
              <div className="flex items-center gap-[10px] mb-5">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-600" />
                <h2 className="font-heading text-[13px] font-extrabold tracking-[0.05em] text-blue-600 uppercase">
                  Digital Media &amp; Social Impact
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {mediaRow.map((biz) => (
                  <Link
                    key={biz.slug}
                    href={`/our-business/${biz.slug}`}
                    className="group relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-end no-underline transition-transform duration-400 hover:-translate-y-1"
                  >
                    <img
                      src={biz.heroImg}
                      alt={biz.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent z-[1]" />
                    <div className="relative z-[2] p-8 max-[768px]:p-5">
                      <h3 className="font-heading font-bold text-[26px] max-[768px]:text-[20px] text-white leading-snug tracking-tight">{biz.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
