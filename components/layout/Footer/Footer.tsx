'use client';

import Link from 'next/link';

/* ── Pure SVG Icons ── */
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

const IconMail = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconPhone = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 11.8a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
  </svg>
);

const SERVICES = [
  { name: "Web & Application Development", href: "/services/web-application-development" },
  { name: "IoT System Development", href: "/services/iot-system-development" },
  { name: "ERP & System Integration", href: "/services/erp-system-integration" },
  { name: "Industrial & Automation Solutions", href: "/services/industrial-automation-solutions" },
  { name: "Data Dashboard & Analytics", href: "/services/data-dashboard-analytics" },
  { name: "IT Strategy & Consulting", href: "/services/it-strategy-consulting" },
];

const COMPANY = [
  { name: "Our Works", href: "#portfolio" },
  { name: "Who We Are", href: "#growth" },
  { name: "Contact Us", href: "#contact" },
  { name: "Download Profile →", href: "#", highlight: true }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080C14] py-20 pb-10 border-t border-white/10" role="contentinfo">
      <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
        
        {/* Top: 4 columns */}
        <div className="grid grid-cols-[1.2fr_repeat(3,1fr)] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1 gap-12 max-[1024px]:gap-10 max-[768px]:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand and Description */}
          <div className="flex flex-col gap-5 max-[1024px]:col-span-full">
            <Link href="/" className="flex items-center gap-3 no-underline cursor-pointer">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center relative shadow-[0_4px_16px_rgba(37,99,235,0.4)]">
                <span className="font-heading font-black text-[22px] text-white">
                  A
                </span>
                <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#E6FF2A]" />
              </div>
              <div>
                <div className="font-heading font-black text-[22px] text-white leading-none">
                  Arsa<span className="text-[#E6FF2A]">lynt</span>
                </div>
                <div className="font-heading text-[8px] font-extrabold tracking-[0.2em] text-[#94A3B8] uppercase mt-0.5">
                  ENTERPRISE ECOSYSTEM
                </div>
              </div>
            </Link>
            <p className="font-body text-[13px] leading-[1.6] text-[#94A3B8] max-w-[340px]">
              We design, build, and integrate intelligent software systems that drive operational efficiency and long-term growth.
            </p>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-[13px] tracking-[0.08em] text-white uppercase mb-1">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s, idx) => (
                <li key={idx}>
                  <Link href={s.href} className="font-body text-[13px] text-[#94A3B8] no-underline transition-colors duration-150 hover:text-[#E6FF2A]">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-[13px] tracking-[0.08em] text-white uppercase mb-1">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {COMPANY.map((c, idx) => (
                <li key={idx}>
                  <Link
                    href={c.href}
                    className={`font-body text-[13px] no-underline transition-colors duration-150 ${
                      c.highlight ? '!text-[#E6FF2A] font-bold hover:underline' : 'text-[#94A3B8] hover:text-[#E6FF2A]'
                    }`}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-[13px] tracking-[0.08em] text-white uppercase mb-1">
              Visit Our Office
            </h3>
            <p className="font-body text-[13px] leading-[1.6] text-[#94A3B8]">
              PT Arsalynt Sinergi Enterprise
              <br />
              Menara Rajawali, 26th Floor
              <br />
              Kuningan Business District,
              <br />
              South Jakarta, Indonesia
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] font-bold text-[#E6FF2A] no-underline hover:underline">
              Open in Google Maps →
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Contacts */}
        <div className="flex flex-col lg:flex-row gap-6 pt-8 items-center lg:justify-between">
          
          {/* Copyright */}
          <p className="font-body text-[12px] text-[#64748B] font-semibold">
            © {currentYear} PT Arsalynt Sinergi Enterprise. All Rights Reserved.
          </p>

          {/* Contact Support & Social Links */}
          <div className="flex flex-wrap max-[768px]:flex-col gap-3 items-center justify-center max-[768px]:w-full">
            
            {/* Social Icons */}
            <div className="flex gap-2 justify-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full bg-white/5 border border-white/10 text-[#94A3B8] flex items-center justify-center transition-all duration-150 hover:bg-[#E6FF2A] hover:text-[#0B0F19] hover:border-[#E6FF2A]" aria-label="Instagram">
                <IconInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full bg-white/5 border border-white/10 text-[#94A3B8] flex items-center justify-center transition-all duration-150 hover:bg-[#E6FF2A] hover:text-[#0B0F19] hover:border-[#E6FF2A]" aria-label="YouTube">
                <IconYoutube />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full bg-white/5 border border-white/10 text-[#94A3B8] flex items-center justify-center transition-all duration-150 hover:bg-[#E6FF2A] hover:text-[#0B0F19] hover:border-[#E6FF2A]" aria-label="LinkedIn">
                <IconLinkedin />
              </a>
            </div>

            {/* Email link */}
            <a href="mailto:corporate@arsalynt.com" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full font-body text-[12px] font-bold text-white no-underline transition-all duration-150 hover:bg-white/10 hover:border-white/20 max-[768px]:w-full max-[768px]:justify-center">
              <span className="text-[#E6FF2A]"><IconMail /></span> corporate@arsalynt.com
            </a>

            {/* Support link */}
            <a href="https://wa.me/628213939569" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full font-body text-[12px] font-bold text-white no-underline transition-all duration-150 hover:bg-white/10 hover:border-white/20 max-[768px]:w-full max-[768px]:justify-center">
              <span className="text-[#E6FF2A]"><IconPhone /></span> Chat Support
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}
