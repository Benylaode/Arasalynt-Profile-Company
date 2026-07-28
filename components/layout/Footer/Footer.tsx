'use client';

import Link from 'next/link';

/* ── Pure SVG Social Icons ── */
const IconInstagram = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconYoutube = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const IconLinkedin = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const IconX = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const IconFacebook = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ABOUT_LINKS = [
  { name: "Company Profile", href: "/about-us/corporate-profile" },
  { name: "Leadership", href: "/about-us/company-leadership" },
  { name: "Ecosystem Philosophy", href: "/about-us/ecosystem-philosophy" },
];

const INSIGHT_LINKS = [
  { name: "Thought Leadership", href: "/leadership-thoughts" },
  { name: "Case Studies", href: "/insight-programs" },
];

const BUSINESS_COLUMNS = [
  {
    category: "IT INFRASTRUCTURE",
    items: [{ name: "Kaluna Technology", href: "/our-business/kaluna-technology" }],
  },
  {
    category: "DATA & ANALYTICS",
    items: [{ name: "Artic Analytica", href: "/our-business/artic-analytica" }],
  },
  {
    category: "MEDIA",
    items: [
      { name: "LoxLive", href: "/our-business/loxlive" },
      { name: "TheDrafroom", href: "/our-business/the-drafroom" },
      { name: "Ilusia Studio", href: "/our-business/ilusia" },
      { name: "Adsvar", href: "/our-business/adsvar" },
      { name: "Seveny", href: "/our-business/seveny" },
      { name: "Personice", href: "/our-business/personice" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5" role="contentinfo">
      <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
        
        {/* Logo row */}
        <div className="py-[48px] border-b border-white/10">
          <Link href="/" className="inline-flex no-underline cursor-pointer" aria-label="Arsalynk home">
            <img
              src="/images/logos/logo.svg"
              alt="Arsalynk"
              className="h-[56px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* Main grid: 4 columns */}
        <div className="grid grid-cols-[1fr_0.6fr_1fr_1.4fr] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1 gap-12 max-[1024px]:gap-8 py-[48px] border-b border-white/10">
          
          {/* Column 1: About Us + Insight & Programs */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body font-bold text-[11px] tracking-[0.15em] text-[#94A3B8] uppercase mb-1">
              ABOUT US
            </h3>
            <ul className="flex flex-col gap-3">
              {ABOUT_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="font-body text-[14px] text-white/80 no-underline transition-colors duration-150 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-body font-bold text-[11px] tracking-[0.15em] text-[#94A3B8] uppercase mt-6 mb-1">
              INSIGHT &amp; PROGRAMS
            </h3>
            <ul className="flex flex-col gap-3">
              {INSIGHT_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="font-body text-[14px] text-white/80 no-underline transition-colors duration-150 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: spacer (hidden on tablet) */}
          <div className="max-[1024px]:hidden" />

          {/* Column 3: Business units */}
          <div className="flex flex-col gap-6">
            {BUSINESS_COLUMNS.map((col, cidx) => (
              <div key={cidx} className="flex flex-col gap-2">
                <h3 className="font-body font-bold text-[11px] tracking-[0.15em] text-[#94A3B8] uppercase">
                  {col.category}
                </h3>
                <ul className="flex flex-col gap-2">
                  {col.items.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href} className="font-body text-[14px] text-white/80 no-underline transition-colors duration-150 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 4: Office + Contact */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-body font-bold text-[11px] tracking-[0.15em] text-[#94A3B8] uppercase mb-2">
                JAKARTA OFFICE
              </h3>
              <p className="font-body text-[13px] leading-[1.7] text-white/70">
                Menara Rajawali 26th Floor Jl. DR. Ide Anak Agung Gde Agung, Jakarta, Indonesia 12950{' '}
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E6FF2A] no-underline">→</a>
              </p>
            </div>

            <div>
              <h3 className="font-body font-bold text-[11px] tracking-[0.15em] text-[#94A3B8] uppercase mb-2">
                SEMARANG HQ
              </h3>
              <p className="font-body text-[13px] leading-[1.7] text-white/70">
                MG Setos, Jl. Inspeksi, 3rd Floor Kembangsari Subdistrict, Semarang Tengah District, Semarang City, Central Java 50133, Indonesia{' '}
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E6FF2A] no-underline">→</a>
              </p>
            </div>

            <div>
              <h3 className="font-body font-bold text-[11px] tracking-[0.15em] text-[#94A3B8] uppercase mb-2">
                CONTACT
              </h3>
              <div className="flex flex-col gap-2">
                <a href="https://wa.me/628776564107" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-[13px] text-white/70 no-underline hover:text-white transition-colors">
                  <span className="text-[#E6FF2A]">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </span>
                  +62 8776-5647-107
                </a>
                <a href="mailto:corporate.arsalynk@gmail.com" className="inline-flex items-center gap-2 font-body text-[13px] text-white/70 no-underline hover:text-white transition-colors">
                  <span className="text-[#E6FF2A]">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  corporate.arsalynk@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between py-6 max-[768px]:flex-col max-[768px]:gap-4">
          <p className="font-body text-[12px] text-[#64748B]">
            © 2026 PT Sinergi Muda Arsa
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full bg-white/5 border border-white/10 text-[#94A3B8] flex items-center justify-center transition-all duration-150 hover:bg-[#E6FF2A] hover:text-[#0A0A0A] hover:border-[#E6FF2A]" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full bg-white/5 border border-white/10 text-[#94A3B8] flex items-center justify-center transition-all duration-150 hover:bg-[#E6FF2A] hover:text-[#0A0A0A] hover:border-[#E6FF2A]" aria-label="YouTube">
              <IconYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full bg-white/5 border border-white/10 text-[#94A3B8] flex items-center justify-center transition-all duration-150 hover:bg-[#E6FF2A] hover:text-[#0A0A0A] hover:border-[#E6FF2A]" aria-label="LinkedIn">
              <IconLinkedin />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full bg-white/5 border border-white/10 text-[#94A3B8] flex items-center justify-center transition-all duration-150 hover:bg-[#E6FF2A] hover:text-[#0A0A0A] hover:border-[#E6FF2A]" aria-label="X / Twitter">
              <IconX />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full bg-white/5 border border-white/10 text-[#94A3B8] flex items-center justify-center transition-all duration-150 hover:bg-[#E6FF2A] hover:text-[#0A0A0A] hover:border-[#E6FF2A]" aria-label="Facebook">
              <IconFacebook />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

