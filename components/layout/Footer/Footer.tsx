'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

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
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        
        {/* Top: 4 columns */}
        <div className={styles.top}>
          
          {/* Brand and Description */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoBox}>
                <span className={styles.logoLetter}>A</span>
              </div>
              <div>
                <div className={styles.logoText}>
                  Arsa<span className={styles.logoHighlight}>lynk</span>
                </div>
                <div className={styles.logoSub}>ENTERPRISE</div>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              We design, build, and integrate intelligent software systems that drive operational efficiency and long-term growth.
            </p>
          </div>

          {/* Services Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Our Services</h3>
            <ul className={styles.list}>
              {SERVICES.map((s, idx) => (
                <li key={idx}>
                  <Link href={s.href} className={styles.link}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.list}>
              {COMPANY.map((c, idx) => (
                <li key={idx}>
                  <Link
                    href={c.href}
                    className={`${styles.link} ${c.highlight ? styles.highlightLink : ''}`}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Visit Our Office</h3>
            <p className={styles.officeText}>
              PT Arsalynk Sinergi Enterprise
              <br />
              Menara Rajawali, 26th Floor
              <br />
              Kuningan Business District,
              <br />
              South Jakarta, Indonesia
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
              Open in Google Maps →
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Contacts */}
        <div className={styles.bottom}>
          
          {/* Copyright */}
          <p className={styles.copyright}>
            © {currentYear} PT Arsalynk Sinergi Enterprise. All Rights Reserved.
          </p>

          {/* Contact Support & Social Links */}
          <div className={styles.bottomActions}>
            
            {/* Social Icons */}
            <div className={styles.socials}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <IconInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                <IconYoutube />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <IconLinkedin />
              </a>
            </div>

            {/* Email link */}
            <a href="mailto:corporate@arsalynk.com" className={styles.actionBtn}>
              <IconMail /> corporate@arsalynk.com
            </a>

            {/* Support link */}
            <a href="https://wa.me/628213939569" target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
              <IconPhone /> Chat Support
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}
