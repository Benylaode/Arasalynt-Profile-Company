'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* ── Pure SVG Icons ── */
const IconChevronDown = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const IconChevronRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const BUSINESS_COLUMNS = [
  {
    category: "IT INFRASTRUCTURE",
    items: [
      { name: "Kaluna Technology", href: "/our-business/kaluna-technology" },
    ],
  },
  {
    category: "DATA & ANALYTICS",
    items: [
      { name: "Artic Analytica", href: "/our-business/artic-analytica" },
    ],
  },
];

const BUSINESS_MEDIA = {
  category: "MEDIA",
  items: [
    { name: "LOXLive", href: "/our-business/loxlive" },
    { name: "TheDrafroom", href: "/our-business/the-drafroom" },
    { name: "Ilusia", href: "/our-business/ilusia" },
    { name: "Adsvar", href: "/our-business/adsvar" },
    { name: "Seveny", href: "/our-business/seveny" },
    { name: "Personice", href: "/our-business/personice" },
  ],
};

const ABOUT_LINKS = [
  { name: "Company Profile", href: "/about-us/corporate-profile" },
  { name: "Leadership", href: "/about-us/company-leadership" },
  { name: "Ecosystem Philosophy", href: "/about-us/ecosystem-philosophy" },
];

const INSIGHT_LINKS = [
  { name: "Case Studies", href: "/insight-programs" },
  { name: "Leadership Thoughts", href: "/leadership-thoughts" },
  { name: "Operations Metrics", href: "/insight-programs#growth" },
  { name: "Advisory & Consulting", href: "/insight-programs#consulting" },
];

/* Mobile flat list for business */
const BUSINESS_SERVICES_MOBILE = [
  { name: "Kaluna Technology", href: "/our-business/kaluna-technology" },
  { name: "Artic Analytica", href: "/our-business/artic-analytica" },
  { name: "LOXLive", href: "/our-business/loxlive" },
  { name: "TheDrafroom", href: "/our-business/the-drafroom" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsScrolled(window.scrollY > 40);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleScrollTo = (id: string) => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    if (pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const isActive = (path: string) => pathname === path;
  const isLightHeader = isScrolled || pathname !== '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-300 ease-in-out ${
          isLightHeader
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="flex items-center justify-between w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
          
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-[10px] no-underline cursor-pointer" aria-label="Arsalynt home">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center relative shadow-sm transition-transform duration-300 group-hover:scale-105 ${
              isLightHeader ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
            }`}>
              <span className="font-heading font-black text-[20px]">A</span>
              <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#E6FF2A]" />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-black text-[22px] leading-none tracking-tight transition-colors duration-250 ${
                isLightHeader ? 'text-slate-900' : 'text-white'
              }`}>
                Arsa<span className="text-[#E6FF2A]">lynt</span>
              </span>
              <span className={`font-heading text-[8px] font-bold tracking-[0.2em] uppercase mt-0.5 ${
                isLightHeader ? 'text-slate-500' : 'text-slate-400'
              }`}>
                ENTERPRISE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleScrollTo('hero'); }}
              className={`font-body font-semibold text-[13px] no-underline transition-colors duration-250 cursor-pointer ${
                isActive('/')
                  ? isLightHeader ? '!text-blue-600' : '!text-lime-yellow'
                  : isLightHeader ? 'text-slate-700 hover:text-slate-900' : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </a>
            
            {/* About Us Dropdown */}
            <div className="relative group/dropdown">
              <Link
                href="/about-us"
                className={`flex items-center gap-[6px] font-body font-semibold text-[13px] no-underline transition-colors duration-250 cursor-pointer ${
                  isActive('/about-us')
                    ? isLightHeader ? '!text-blue-600' : '!text-lime-yellow'
                    : isLightHeader ? 'text-slate-700 hover:text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
              >
                About Us <IconChevronDown size={10} />
              </Link>
              <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 translate-y-[6px] w-[260px] bg-[#f8f9fa] border border-black/7 rounded-[20px] p-[28px_32px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-200 ease-in-out z-[100]">
                <p className="font-heading font-bold text-[26px] text-slate-800 mb-[20px] leading-tight tracking-tight">About Us</p>
                <div className="flex flex-col border-l-2 border-slate-200 pl-4">
                  {ABOUT_LINKS.map((link, idx) => (
                    <Link key={idx} href={link.href} className="block font-body text-[15px] font-medium text-slate-600 no-underline py-[8px] hover:text-slate-900 transition-colors duration-150">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Dropdown */}
            <div className="relative group/dropdown">
              <Link
                href="/our-business"
                className={`flex items-center gap-[6px] font-body font-semibold text-[13px] no-underline transition-colors duration-250 cursor-pointer ${
                  isActive('/our-business')
                    ? isLightHeader ? '!text-blue-600' : '!text-lime-yellow'
                    : isLightHeader ? 'text-slate-700 hover:text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
              >
                Business <IconChevronDown size={10} />
              </Link>
              <div className="absolute top-[calc(100%+12px)] left-0 -translate-x-[20%] translate-y-[6px] w-[580px] bg-[#f8f9fa] border border-black/7 rounded-[20px] p-[28px_32px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:-translate-x-[20%] group-hover/dropdown:translate-y-0 transition-all duration-200 ease-in-out z-[100]">
                <p className="font-heading font-bold text-[26px] text-slate-800 mb-[20px] leading-tight tracking-tight">Our Business</p>
                <div className="flex items-start">
                  <div className="flex-1 flex flex-col gap-6 border-l-2 border-slate-200 pl-4 pr-6">
                    {BUSINESS_COLUMNS.map((col, cidx) => (
                      <div key={cidx} className="flex flex-col">
                        <span className="block font-body text-[10px] font-bold tracking-[0.12em] uppercase text-slate-400 mb-2">{col.category}</span>
                        {col.items.map((item, idx) => (
                          <Link key={idx} href={item.href} className="block font-body text-[18px] font-bold text-slate-800 no-underline py-[2px] hover:text-blue-600 transition-colors duration-150">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="w-[1px] bg-slate-200 self-stretch mr-6" />
                  <div className="flex-1 flex flex-col">
                    <span className="block font-body text-[10px] font-bold tracking-[0.12em] uppercase text-slate-400 mb-2">{BUSINESS_MEDIA.category}</span>
                    {BUSINESS_MEDIA.items.map((item, idx) => (
                      <Link key={idx} href={item.href} className="block font-body text-[16px] font-semibold text-slate-700 no-underline py-[8px] hover:text-slate-900 transition-colors duration-150">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Insight & Programs Dropdown */}
            <div className="relative group/dropdown">
              <Link
                href="/insight-programs"
                className={`flex items-center gap-[6px] font-body font-semibold text-[13px] no-underline transition-colors duration-250 cursor-pointer ${
                  isActive('/insight-programs')
                    ? isLightHeader ? '!text-blue-600' : '!text-lime-yellow'
                    : isLightHeader ? 'text-slate-700 hover:text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
              >
                Insight & Programs <IconChevronDown size={10} />
              </Link>
              <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 translate-y-[6px] w-[260px] bg-[#f8f9fa] border border-black/7 rounded-[20px] p-[28px_32px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-200 ease-in-out z-[100]">
                <p className="font-heading font-bold text-[26px] text-slate-800 mb-[20px] leading-tight tracking-tight">Insight &amp; Programs</p>
                <div className="flex flex-col border-l-2 border-slate-200 pl-4">
                  {INSIGHT_LINKS.map((link, idx) => (
                    <Link key={idx} href={link.href} className="block font-body text-[15px] font-medium text-slate-600 no-underline py-[8px] hover:text-slate-900 transition-colors duration-150">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Works link */}
            <Link
              href="/our-works"
              className={`font-body font-semibold text-[13px] no-underline transition-colors duration-250 cursor-pointer ${
                isActive('/our-works')
                  ? isLightHeader ? '!text-blue-600' : '!text-lime-yellow'
                  : isLightHeader ? 'text-slate-700 hover:text-slate-900' : 'text-slate-300 hover:text-white'
              }`}
            >
              Our Works
            </Link>
          </nav>

          {/* Far Right Action Button */}
          <button
            onClick={() => handleScrollTo('contact')}
            className={`hidden lg:inline-flex items-center gap-2 font-body font-extrabold text-[11px] tracking-[0.06em] uppercase rounded-full border-none cursor-pointer py-3 px-6 transition-all duration-150 ease-in-out hover:scale-[1.03] ${
              isLightHeader
                ? 'bg-blue-600 text-white !text-white shadow-[0_4px_16px_rgba(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)]'
                : 'bg-lime-yellow text-[#050b18] !text-[#050b18] shadow-[0_4px_16px_rgba(230,255,42,0.15)] hover:shadow-[0_6px_20px_rgba(230,255,42,0.25)]'
            }`}
          >
            CONTACT US <IconChevronRight size={10} />
          </button>

          {/* Mobile Hamburg menu button */}
          <button
            className="flex lg:hidden flex-col justify-center gap-[5px] w-[40px] h-[40px] bg-transparent border-none cursor-pointer p-[8px]"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            <span className={`block w-6 h-[2px] rounded-sm transition-all duration-250 ${isLightHeader ? 'bg-slate-900' : 'bg-white'} ${isMobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-[2px] rounded-sm transition-all duration-250 ${isLightHeader ? 'bg-slate-900' : 'bg-white'} ${isMobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] rounded-sm transition-all duration-250 ${isLightHeader ? 'bg-slate-900' : 'bg-white'} ${isMobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <div className={`fixed top-[80px] left-0 right-0 bottom-0 bg-[#050b18] z-[90] p-[32px] flex flex-col justify-between transition-all duration-250 ease-in-out lg:hidden ${isMobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-[10px] pointer-events-none'}`}>
        <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleScrollTo('hero'); }}
            className={`font-heading font-bold text-[20px] text-slate-300 no-underline py-3 border-b border-white/5 block text-left w-full ${isActive('/') ? '!text-lime-yellow' : ''}`}
          >
            Home
          </a>
          
          {/* Mobile About */}
          <div>
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
              className="flex items-center justify-between font-heading font-bold text-[20px] text-slate-300 no-underline py-3 border-b border-white/5 bg-transparent w-full text-left cursor-pointer"
            >
              About Us <IconChevronDown size={14} />
            </button>
            {activeDropdown === 'about' && (
              <div className="flex flex-col gap-1 py-[10px] pl-4 border-l-2 border-blue-600/30">
                <Link href="/about-us" onClick={() => setIsMobileOpen(false)} className="font-body text-[13px] font-extrabold text-lime-yellow no-underline py-2 block">
                  View All About Us
                </Link>
                {ABOUT_LINKS.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setIsMobileOpen(false)} className="font-body text-[13px] font-semibold text-slate-400 no-underline py-2 block">
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Business */}
          <div>
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'business' ? null : 'business')}
              className="flex items-center justify-between font-heading font-bold text-[20px] text-slate-300 no-underline py-3 border-b border-white/5 bg-transparent w-full text-left cursor-pointer"
            >
              Business <IconChevronDown size={14} />
            </button>
            {activeDropdown === 'business' && (
              <div className="flex flex-col gap-1 py-[10px] pl-4 border-l-2 border-blue-600/30">
                <Link href="/our-business" onClick={() => setIsMobileOpen(false)} className="font-body text-[13px] font-extrabold text-lime-yellow no-underline py-2 block">
                  View All Business
                </Link>
                {BUSINESS_SERVICES_MOBILE.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setIsMobileOpen(false)} className="font-body text-[13px] font-semibold text-slate-400 no-underline py-2 block">
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Insights */}
          <div>
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'insights' ? null : 'insights')}
              className="flex items-center justify-between font-heading font-bold text-[20px] text-slate-300 no-underline py-3 border-b border-white/5 bg-transparent w-full text-left cursor-pointer"
            >
              Insight & Programs <IconChevronDown size={14} />
            </button>
            {activeDropdown === 'insights' && (
              <div className="flex flex-col gap-1 py-[10px] pl-4 border-l-2 border-blue-600/30">
                <Link href="/insight-programs" onClick={() => setIsMobileOpen(false)} className="font-body text-[13px] font-extrabold text-lime-yellow no-underline py-2 block">
                  View All Insight & Programs
                </Link>
                {INSIGHT_LINKS.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setIsMobileOpen(false)} className="font-body text-[13px] font-semibold text-slate-400 no-underline py-2 block">
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Works */}
          <Link
            href="/our-works"
            onClick={() => setIsMobileOpen(false)}
            className={`font-heading font-bold text-[20px] text-slate-300 no-underline py-3 border-b border-white/5 block text-left w-full ${isActive('/our-works') ? '!text-lime-yellow' : ''}`}
          >
            Our Works
          </Link>
        </nav>

        <div className="mt-8">
          <button
            onClick={() => handleScrollTo('contact')}
            className="w-full font-body font-extrabold text-[11px] tracking-[0.06em] uppercase rounded-full border-none cursor-pointer py-3.5 px-6 bg-lime-yellow text-[#050b18] !text-[#050b18]"
          >
            CONTACT US &gt;
          </button>
        </div>
      </div>
    </>
  );
}
