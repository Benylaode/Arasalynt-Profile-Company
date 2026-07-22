'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

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

/* Mobile flat list for business (used in mobile drawer) */
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

  // Smooth scroll helper
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

  return (
    <>
      <header
        className={`${styles.navbar} ${isScrolled || pathname !== '/' ? styles.scrolled : ''}`}
        role="banner"
      >
        <div className={styles.inner}>
          
          {/* Logo with Green/Lime loop knot icon */}
          <Link href="/" className={styles.logo} aria-label="Arsalynk home">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className={styles.logoIcon}>
              <path d="M35 35 H65 V65 H35 Z" />
              <path d="M35 35 C20 35 20 20 35 20 C50 20 50 35 35 35 Z" />
              <path d="M65 35 C80 35 80 20 65 20 C50 20 50 35 65 35 Z" />
              <path d="M65 65 C80 65 80 80 65 80 C50 80 50 65 65 65 Z" />
              <path d="M35 65 C20 65 20 80 35 80 C50 80 50 65 35 65 Z" />
            </svg>
            <span className={styles.logoText}>Arsalynk</span>
          </Link>

          {/* Desktop Navigation Links matching the mockup */}
          <nav className={styles.nav} aria-label="Main navigation">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleScrollTo('hero'); }}
              className={`${styles.navLink} ${isActive('/') ? styles.activeLink : ''}`}
            >
              Home
            </a>
            
            {/* About Us Dropdown */}
            <div className={styles.dropdown}>
              <Link
                href="/about-us"
                className={`${styles.navLink} ${styles.dropdownTrigger} ${isActive('/about-us') ? styles.activeLink : ''}`}
              >
                About Us <IconChevronDown size={10} />
              </Link>
              <div className={`${styles.dropdownMenu} ${styles.dropdownMenuAbout}`}>
                <p className={styles.megaMenuTitle}>About Us</p>
                <div className={styles.megaMenuSimpleList}>
                  {ABOUT_LINKS.map((link, idx) => (
                    <Link key={idx} href={link.href} className={styles.megaMenuItem}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Dropdown */}
            <div className={styles.dropdown}>
              <Link
                href="/our-business"
                className={`${styles.navLink} ${styles.dropdownTrigger} ${isActive('/our-business') ? styles.activeLink : ''}`}
              >
                Business <IconChevronDown size={10} />
              </Link>
              <div className={`${styles.dropdownMenu} ${styles.dropdownMenuBusiness}`}>
                <p className={styles.megaMenuTitle}>Our Business</p>
                <div className={styles.megaMenuColumns}>
                  {/* Left column: tech categories */}
                  <div className={styles.megaMenuLeftCol}>
                    {BUSINESS_COLUMNS.map((col, cidx) => (
                      <div key={cidx} className={styles.megaMenuGroup}>
                        <span className={styles.megaMenuCategory}>{col.category}</span>
                        {col.items.map((item, idx) => (
                          <Link key={idx} href={item.href} className={styles.megaMenuGroupItem}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* Divider */}
                  <div className={styles.megaMenuDivider} />
                  {/* Right column: media */}
                  <div className={styles.megaMenuRightCol}>
                    <span className={styles.megaMenuCategory}>{BUSINESS_MEDIA.category}</span>
                    {BUSINESS_MEDIA.items.map((item, idx) => (
                      <Link key={idx} href={item.href} className={styles.megaMenuItem}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Insight & Programs Dropdown */}
            <div className={styles.dropdown}>
              <Link
                href="/insight-programs"
                className={`${styles.navLink} ${styles.dropdownTrigger} ${isActive('/insight-programs') ? styles.activeLink : ''}`}
              >
                Insight & Programs <IconChevronDown size={10} />
              </Link>
              <div className={`${styles.dropdownMenu} ${styles.dropdownMenuInsight}`}>
                <p className={styles.megaMenuTitle}>Insight &amp; Programs</p>
                <div className={styles.megaMenuSimpleList}>
                  {INSIGHT_LINKS.map((link, idx) => (
                    <Link key={idx} href={link.href} className={styles.megaMenuItem}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Works link */}
            <Link
              href="/our-works"
              className={`${styles.navLink} ${isActive('/our-works') ? styles.activeLink : ''}`}
            >
              Our Works
            </Link>
          </nav>

          {/* Far Right Action Button: CONTACT US > */}
          <button onClick={() => handleScrollTo('contact')} className={styles.ctaBtn}>
            CONTACT US <IconChevronRight size={10} />
          </button>

          {/* Mobile Hamburg menu button */}
          <button
            className={`${styles.hamburger} ${isMobileOpen ? styles.open : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.visible : ''}`}>
        <nav aria-label="Mobile navigation" className={styles.mobileNav}>
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleScrollTo('hero'); }}
            className={`${styles.mobileNavLink} ${isActive('/') ? styles.activeLink : ''}`}
          >
            Home
          </a>
          
          {/* Mobile About */}
          <div>
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
              className={styles.mobileDropdownTrigger}
            >
              About Us <IconChevronDown size={14} />
            </button>
            {activeDropdown === 'about' && (
              <div className={styles.mobileDropdownMenu}>
                <Link href="/about-us" onClick={() => setIsMobileOpen(false)} className={styles.mobileDropdownItem} style={{ fontWeight: 800, color: 'var(--color-lime-yellow)' }}>
                  View All About Us
                </Link>
                {ABOUT_LINKS.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setIsMobileOpen(false)} className={styles.mobileDropdownItem}>
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
              className={styles.mobileDropdownTrigger}
            >
              Business <IconChevronDown size={14} />
            </button>
            {activeDropdown === 'business' && (
              <div className={styles.mobileDropdownMenu}>
                <Link href="/our-business" onClick={() => setIsMobileOpen(false)} className={styles.mobileDropdownItem} style={{ fontWeight: 800, color: 'var(--color-lime-yellow)' }}>
                  View All Business
                </Link>
                {BUSINESS_SERVICES_MOBILE.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setIsMobileOpen(false)} className={styles.mobileDropdownItem}>
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
              className={styles.mobileDropdownTrigger}
            >
              Insight & Programs <IconChevronDown size={14} />
            </button>
            {activeDropdown === 'insights' && (
              <div className={styles.mobileDropdownMenu}>
                <Link href="/insight-programs" onClick={() => setIsMobileOpen(false)} className={styles.mobileDropdownItem} style={{ fontWeight: 800, color: 'var(--color-lime-yellow)' }}>
                  View All Insight & Programs
                </Link>
                {INSIGHT_LINKS.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setIsMobileOpen(false)} className={styles.mobileDropdownItem}>
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
            className={`${styles.mobileNavLink} ${isActive('/our-works') ? styles.activeLink : ''}`}
          >
            Our Works
          </Link>
        </nav>
        <div className={styles.mobileCta}>
          <button onClick={() => handleScrollTo('contact')} className={styles.ctaBtnMobile}>
            CONTACT US &gt;
          </button>
        </div>
      </div>
    </>
  );
}
