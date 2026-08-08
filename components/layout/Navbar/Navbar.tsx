'use client';

import {
  type MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const SCROLL_THRESHOLD = 40;

type NavItem = {
  name: string;
  href: string;
};

const BUSINESS_COLUMNS = [
  {
    category: 'OUR SOLUTION',
    items: [
      {
        name: 'Enterprise Resource Planning',
        href: '/our-solution#enterprise-resource-planning',
      },
    ],
  },
  {
    category: 'CONNECTED ENTERPRISE',
    items: [
      {
        name: 'Internet of Things',
        href: '/our-solution#internet-of-things',
      },
    ],
  },
];

const BUSINESS_MEDIA = {
  category: 'EXPLORE OUR SERVICES',
  items: [
    {
      name: 'POS & Retail Management',
      href: '/our-solution/point-of-sale-pos',
    },
    {
      name: 'HR & Talent Management',
      href: '/our-solution/hr-talent-management-engine',
    },
    {
      name: 'Financial Automation',
      href: '/our-solution/financial-accounting-automation-hub',
    },
    {
      name: 'Supply Chain Control',
      href: '/our-solution/supply-chain-inventory-control',
    },
    {
      name: 'Logistics & Fleet Tracker',
      href: '/our-solution/logistics-fleet-operations-tracker',
    },
    {
      name: 'Warehouse Management',
      href: '/our-solution/warehouse-management-system',
    },
  ],
};

const INSIGHT_LINKS: NavItem[] = [
  {
    name: 'Leadership Thoughts',
    href: '/insight-programs/leadership-thoughts',
  },
  {
    name: 'Case Studies',
    href: '/insight-programs/Case-Studies',
  },
];

const BUSINESS_LINKS_MOBILE: NavItem[] = [
  ...BUSINESS_COLUMNS.flatMap((column) => column.items),
  ...BUSINESS_MEDIA.items,
];

function ChevronDown({
  className = '',
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3.5 6L8 10.5L12.5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ButtonChevron() {
  return (
    <svg
      aria-hidden="true"
      className="h-[10px] w-[6px] shrink-0"
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        d="M1 1L7 7L1 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Logo menggunakan file SVG lengkap yang sudah memuat
 * simbol dan tulisan Arsalynk.
 *
 * logo.svg      → navbar transparan/gelap
 * logo_blue.svg → navbar putih/terang
 */
function BrandLogo({
  overlay,
}: {
  overlay: boolean;
}) {
  return (
    <>
      <span className="hidden h-[46px] w-[170px] shrink-0 items-center gap-[8px] max-[1199px]:flex">
        <img
          src="/images/logos/logo_blue.svg"
          alt=""
          aria-hidden="true"
          className="h-[46px] w-[46px] shrink-0 object-contain"
        />
        <span className="whitespace-nowrap text-[27px] font-semibold leading-none tracking-[-0.045em] text-[#101010]">
          Arsalynk
        </span>
      </span>

      <span className="flex shrink-0 items-center gap-[4.25px] max-[1199px]:hidden">
      {/* Area simbol logo */}
      <span className="relative block h-[34px] w-[34px] shrink-0">
        {/* Simbol lime untuk navbar transparan */}
        <img
          src="/images/logos/logo.svg"
          alt=""
          aria-hidden="true"
          className={`
            absolute inset-0
            h-full w-full
            object-contain
            transition-[opacity,transform]
            duration-300 ease-out
            ${
              overlay
                ? 'scale-100 opacity-100'
                : 'pointer-events-none scale-[0.96] opacity-0'
            }
          `}
        />

        {/* Simbol biru untuk navbar putih */}
        <img
          src="/images/logos/logo_blue.svg"
          alt=""
          aria-hidden="true"
          className={`
            absolute inset-0
            h-full w-full
            object-contain
            transition-[opacity,transform]
            duration-300 ease-out
            ${
              overlay
                ? 'pointer-events-none scale-[0.96] opacity-0'
                : 'scale-100 opacity-100'
            }
          `}
        />
      </span>

      {/* Tulisan wordmark */}
      <span
        className={`
          relative
          -translate-y-[0.5px]
          whitespace-nowrap
          text-[19px]
          font-semibold
          leading-none
          tracking-[-0.035em]
          transition-colors duration-300
          ${
            overlay
              ? 'text-white'
              : 'text-[#3D3D3D]'
          }
        `}
      >
        Arsalynk
      </span>
      </span>
    </>
  );
}

function ActiveIndicator({
  active,
}: {
  active: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`
        absolute bottom-[9px] left-0
        h-px
        bg-current
        transition-all duration-200
        ${
          active
            ? 'w-full opacity-100'
            : 'w-0 opacity-0'
        }
      `}
    />
  );
}

function DesktopNavLink({
  href,
  label,
  overlay,
  active,
}: {
  href: string;
  label: string;
  overlay: boolean;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`
        relative
        flex h-full items-center
        whitespace-nowrap
        text-[13px]
        font-normal
        leading-none
        no-underline
        transition-colors duration-200
        hover:text-[#1A3E9E]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#E6FF2A]
        focus-visible:ring-offset-3
        ${
          overlay
            ? 'text-[#F7F7F7]'
            : 'text-[#101010]'
        }
      `}
    >
      {label}

    </Link>
  );
}

function IconInstagram() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692 1.005 0 1.971.074 1.971.074v2.926z" />
    </svg>
  );
}

function DropdownCardModal({
  title,
  isOpen,
  onClose,
  children,
  titleHref,
  size = 'about',
}: {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  titleHref?: string;
  size?: 'about' | 'insight' | 'business';
}) {
  if (!isOpen) return null;

  const panelPadding = size === 'business' ? '64px 64px 36px' : '80px 64px 28px';
  const footerSpacing = size === 'business' ? 48 : size === 'insight' ? 96 : 132;

  return (
    <>
      {/* Invisible backdrop to capture outside clicks */}
      <div
        className="fixed inset-0 z-[98] bg-transparent"
        onClick={onClose}
      />

      <div
        className="
          fixed top-[90px] z-[99]
          left-1/2 w-full max-w-[1920px] -translate-x-1/2
          px-[clamp(24px,13.333vw,256px)]
          transition-all duration-300 ease-out
          animate-in fade-in zoom-in-95
        "
      >
        <div
          className={`
            relative
            flex h-fit w-full flex-col
            max-h-[calc(100vh-108px)]
            overflow-y-auto
            rounded-[14px]
            border border-black/[0.04]
            bg-[#F7F7F7]
            shadow-[0_20px_65px_rgba(0,0,0,0.14)]
          `}
          style={{ padding: panelPadding }}
        >
          {titleHref ? (
            <Link
              href={titleHref}
              onClick={onClose}
              className="
                group flex w-[80%] items-center justify-between
                font-heading
                text-[clamp(64px,4.167vw,80px)]
                font-medium
                leading-none
                tracking-[-0.02em]
                text-[#4F4F4F]
                transition-colors
                hover:text-[#1A3E9E]
                focus-visible:text-[#1A3E9E]
              "
              style={{ marginBottom: 44 }}
            >
              <span>{title}</span>
              <span className="translate-x-[-8px] scale-[1.35] text-[#1A3E9E] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                <ButtonChevron />
              </span>
            </Link>
          ) : (
            <h2
              className="
                font-heading
                text-[clamp(64px,4.167vw,80px)]
                font-medium
                leading-none
                tracking-[-0.02em]
                text-[#4F4F4F]
              "
              style={{ marginBottom: 44 }}
            >
              {title}
            </h2>
          )}

          {/* Content area with vertical border line */}
          <div className="flex border-l border-[#D6D6D6] pl-[52px]">
            {children}
          </div>

          {/* Footer Area matching Figma */}
          <div className="flex items-center justify-between" style={{ marginTop: footerSpacing }}>
            <span className="font-body text-[15px] font-normal text-[#838383]">
              © 2026 PT Sinergi Muda Arsa
            </span>

            <div className="flex items-center gap-[40px] pr-[32px] text-[#838383] [&_svg]:h-[21px] [&_svg]:w-[21px]">
              <a
                href="https://www.instagram.com/arsalynk?igsh=am8xZ3FpMncweXYz"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-[#1A3E9E]"
              >
                <IconInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/arsalynk-group/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-[#1A3E9E]"
              >
                <IconLinkedin />
              </a>
              <a
                href="https://www.facebook.com/share/1bbYtBuoUd/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-[#1A3E9E]"
              >
                <IconFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SimpleDropdown({
  id,
  label,
  href,
  title,
  links,
  overlay,
  active,
  activeDropdown,
  setActiveDropdown,
}: {
  id: string;
  label: string;
  href: string;
  title: string;
  links: NavItem[];
  overlay: boolean;
  active: boolean;
  activeDropdown: string | null;
  setActiveDropdown: (id: string | null) => void;
}) {
  const isOpen = activeDropdown === id;

  return (
    <div className="relative flex h-full items-center">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setActiveDropdown(isOpen ? null : id);
        }}
        aria-expanded={isOpen}
        className={`
          relative
          flex h-full items-center
          gap-[5px]
          border-0 bg-transparent
          whitespace-nowrap
          text-[13px]
          font-normal
          leading-none
          cursor-pointer
          transition-colors duration-200
          hover:text-[#1A3E9E]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#E6FF2A]
          focus-visible:ring-offset-3
          ${overlay ? 'text-[#F7F7F7]' : 'text-[#101010]'}
        `}
      >
        {label}

        <ChevronDown
          className={`
            shrink-0
            transition-transform duration-200
            ${isOpen ? 'rotate-180' : ''}
          `}
        />

        <ActiveIndicator active={active} />
      </button>

      <DropdownCardModal
        title={title}
        titleHref={href}
        isOpen={isOpen}
        onClose={() => setActiveDropdown(null)}
        size={id === 'insight' ? 'insight' : 'about'}
      >
        <div className="flex w-full flex-col gap-[22px]">
          {links.map((link) => (
            <Link
              key={`${id}-${link.name}-${link.href}`}
              href={link.href}
              onClick={() => setActiveDropdown(null)}
              className="
                group flex w-[80%] items-center justify-between
                font-heading
                text-[32px]
                font-medium
                leading-[1.3]
                text-[#747474]
                no-underline
                transition-all duration-200
                hover:translate-x-1.5
                hover:text-[#1A3E9E]
                focus-visible:outline-none
                focus-visible:text-[#1A3E9E]
              "
            >
              <span>{link.name}</span>
              <span className="translate-x-[-6px] scale-[1.35] text-[#1A3E9E] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                <ButtonChevron />
              </span>
            </Link>
          ))}
        </div>
      </DropdownCardModal>
    </div>
  );
}

function BusinessDropdown({
  overlay,
  active,
  activeDropdown,
  setActiveDropdown,
}: {
  overlay: boolean;
  active: boolean;
  activeDropdown: string | null;
  setActiveDropdown: (id: string | null) => void;
}) {
  const isOpen = activeDropdown === 'business';

  return (
    <div className="relative flex h-full items-center">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setActiveDropdown(isOpen ? null : 'business');
        }}
        aria-expanded={isOpen}
        className={`
          relative
          flex h-full items-center
          gap-[5px]
          border-0 bg-transparent
          whitespace-nowrap
          text-[13px]
          font-normal
          leading-none
          cursor-pointer
          transition-colors duration-200
          hover:text-[#1A3E9E]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#E6FF2A]
          focus-visible:ring-offset-3
          ${overlay ? 'text-[#F7F7F7]' : 'text-[#101010]'}
        `}
      >
        Our Solution

        <ChevronDown
          className={`
            shrink-0
            transition-transform duration-200
            ${isOpen ? 'rotate-180' : ''}
          `}
        />

        <ActiveIndicator active={active} />
      </button>

      <DropdownCardModal
        title="Our Solution"
        titleHref="/our-solution"
        isOpen={isOpen}
        onClose={() => setActiveDropdown(null)}
        size="business"
      >
        <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-x-[56px]">
          <div>
            {BUSINESS_COLUMNS.map((column) => (
              <div key={column.category} className="mb-7 last:mb-0">
                <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A9A9A]">
                  {column.category}
                </p>
                {column.items.map((item) => (
                  <Link
                    key={`${column.category}-${item.name}-${item.href}`}
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className="
                      group flex w-[80%] items-center justify-between py-[6px]
                      font-heading
                      text-[24px]
                      font-medium
                      leading-[1.3]
                      text-[#747474]
                      no-underline
                      transition-all duration-200
                      hover:translate-x-1.5
                      hover:text-[#1A3E9E]
                    "
                  >
                    <span>{item.name}</span>
                    <span className="translate-x-[-6px] scale-[1.35] text-[#1A3E9E] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                      <ButtonChevron />
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A9A9A]">
              {BUSINESS_MEDIA.category}
            </p>

            <div className="flex flex-col gap-1.5">
              {BUSINESS_MEDIA.items.map((item) => (
                <Link
                  key={`${BUSINESS_MEDIA.category}-${item.name}-${item.href}`}
                  href={item.href}
                  onClick={() => setActiveDropdown(null)}
                  className="
                    group flex w-[80%] items-center justify-between py-[6px]
                    font-heading
                    text-[24px]
                    font-medium
                    leading-[1.3]
                    text-[#747474]
                    no-underline
                    transition-all duration-200
                    hover:translate-x-1.5
                    hover:text-[#1A3E9E]
                  "
                >
                  <span>{item.name}</span>
                  <span className="translate-x-[-6px] scale-[1.35] text-[#1A3E9E] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                    <ButtonChevron />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </DropdownCardModal>
    </div>
  );
}

function MobileAccordion({
  id,
  label,
  links,
  activeDropdown,
  setActiveDropdown,
  closeMenu,
}: {
  id: string;
  label: string;
  links: NavItem[];
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
  closeMenu: () => void;
}) {
  const isOpen = activeDropdown === id;

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => {
          setActiveDropdown(isOpen ? null : id);
        }}
        aria-expanded={isOpen}
        aria-controls={`mobile-${id}-content`}
        className="
          flex w-full
          items-center justify-between
          border-0
          bg-transparent
          py-[14px]
          text-left
          text-[17px]
          font-medium
          text-white
        "
      >
        {label}

        <ChevronDown
          className={`
            transition-transform duration-200
            ${isOpen ? 'rotate-180' : ''}
          `}
        />
      </button>

      <div
        id={`mobile-${id}-content`}
        className={`
          grid
          transition-[grid-template-rows,opacity]
          duration-[250ms]
          ${
            isOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              mb-[13px]
              flex flex-col
              border-l-2 border-[#E6FF2A]/50
              pl-[15px]
            "
          >
            {links.map((link) => (
              <Link
                key={`${id}-${link.name}-${link.href}`}
                href={link.href}
                onClick={closeMenu}
                className="
                  py-[8px]
                  text-[13px]
                  font-medium
                  text-white/65
                  no-underline
                  transition-colors
                  hover:text-[#1A3E9E]
                "
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const scrollFrameRef = useRef<number | null>(null);

  /*
   * Homepage pada bagian hero:
   * background transparan dan logo.svg.
   *
   * Setelah scroll atau pada halaman internal:
   * background putih dan logo_blue.svg.
   */
  const overlay = pathname === '/' && !isScrolled && activeDropdown === null;

  const readScrollPosition = useCallback(() => {
    if (scrollFrameRef.current !== null) return;

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const nextScrolled = window.scrollY > SCROLL_THRESHOLD;
      setIsScrolled((current) => current === nextScrolled ? current : nextScrolled);
      scrollFrameRef.current = null;
    });
  }, []);

  useEffect(() => {
    readScrollPosition();

    window.addEventListener('scroll', readScrollPosition, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', readScrollPosition);
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
        scrollFrameRef.current = null;
      }
    };
  }, [readScrollPosition]);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      setIsMobileOpen(false);
      setActiveDropdown(null);
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, []);

  const scrollToSection = useCallback(
    (sectionId: string) => {
      closeMobileMenu();

      if (sectionId === 'contact') {
        router.push('/contact-us');
        return;
      }

      if (pathname === '/') {
        const target = document.getElementById(sectionId);

        target?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        return;
      }

      router.push(`/#${sectionId}`);
    },
    [closeMobileMenu, pathname, router],
  );

  const handleHomeClick = (
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    if (pathname !== '/') return;

    event.preventDefault();
    scrollToSection('hero');
  };

  const routeIsActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <header
        role="banner"
        className={`
          ${inter.className}
          fixed inset-x-0 top-0
          z-50
          h-[64px] max-[1199px]:h-[80px]
        `}
      >
        {/* Background putih */}
        <span
          aria-hidden="true"
          className={`
            absolute inset-0
            bg-[#F7F7F7]
            transition-opacity duration-300
            ${overlay ? 'opacity-0' : 'opacity-100'}
            max-[1199px]:!opacity-100
          `}
        />

        {/* Background navbar pada hero */}
        <span
          aria-hidden="true"
          className={`
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(10,15,25,0.85)_0%,rgba(10,15,25,0.35)_55%,rgba(10,15,25,0)_100%)]
            transition-opacity duration-300
            ${overlay ? 'opacity-100' : 'opacity-0'}
            max-[1199px]:hidden
          `}
        />

        {/* Garis bawah navbar putih */}
        <span
          aria-hidden="true"
          className={`
            absolute inset-x-0 bottom-0
            h-px
            bg-black/[0.05]
            transition-opacity duration-300
            ${
              overlay
                ? 'opacity-0'
                : 'opacity-100'
            }
          `}
        />

        <div
          className="
            site-shell relative z-10
            grid h-full
            grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]
            items-center
            px-0 max-[1199px]:grid-cols-[1fr_auto]
          "
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={handleHomeClick}
            aria-label="Arsalynk home"
            className="
              block
              shrink-0
              justify-self-start
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#E6FF2A]
              focus-visible:ring-offset-3
            "
          >
            <BrandLogo overlay={overlay} />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="
              hidden h-full
              shrink-0
              items-center
              justify-self-center
              gap-[clamp(1.25rem,1.6vw,1.95rem)]
              xl:flex
            "
          >
            <Link
              href="/"
              onClick={handleHomeClick}
              aria-current={
                routeIsActive('/')
                  ? 'page'
                  : undefined
              }
              className={`
                relative
                flex h-full items-center
                whitespace-nowrap
                text-[13px]
                font-normal
                leading-none
                no-underline
                transition-colors duration-200
                hover:text-[#1A3E9E]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#E6FF2A]
                focus-visible:ring-offset-3
                ${
                  overlay
                    ? 'text-[#F7F7F7]'
                    : 'text-[#101010]'
                }
              `}
            >
              Home

              <ActiveIndicator active={routeIsActive('/')} />
            </Link>

            <DesktopNavLink
              href="/about-us"
              label="About Us"
              overlay={overlay}
              active={routeIsActive('/about-us')}
            />

            <BusinessDropdown
              overlay={overlay}
              active={routeIsActive('/our-solution')}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />

            <SimpleDropdown
              id="insight"
              label="Insight & Programs"
              href="/insight-programs/Case-Studies"
              title="Insight & Programs"
              links={INSIGHT_LINKS}
              overlay={overlay}
              active={routeIsActive('/insight-programs')}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />


          </nav>

          {/* Desktop Contact Us */}
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className={`
              hidden
              h-[40px]
              cursor-pointer
              shrink-0
              items-center
              justify-self-end
              gap-[11px]
              rounded-full
              border-0
              px-[20px]
              text-[12px]
              leading-none
              tracking-[0.01em]
              transition-[background-color,color,transform,box-shadow]
              duration-300
              hover:scale-[1.02]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-offset-3
              xl:flex
              ${
                overlay
                  ? `
                    bg-[#E6FF2A]
                    font-semibold
                    text-[#101010]
                    shadow-[0_4px_13px_rgba(230,255,42,0.16)]
                    focus-visible:ring-[#E6FF2A]
                  `
                  : `
                    bg-[#1A3E9E]
                    font-medium
                    text-white
                    shadow-[0_4px_13px_rgba(26,62,158,0.16)]
                    focus-visible:ring-[#1A3E9E]
                  `
              }
            `}
          >
            CONTACT US
            <ButtonChevron />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={
              isMobileOpen
                ? 'Close menu'
                : 'Open menu'
            }
            aria-expanded={isMobileOpen}
            onClick={() => {
              setIsMobileOpen((current) => !current);
              setActiveDropdown(null);
            }}
            className="
              relative
              flex h-[40px] w-[40px]
              items-center justify-center
              justify-self-end
              border-0
              bg-transparent
              xl:hidden
            "
          >
            <span
              className={`
                absolute
                h-[2px] w-[23px] max-[1199px]:w-[32px]
                rounded-full
                transition-all
                duration-[250ms]
                ${
                  overlay
                    ? 'bg-white max-[1199px]:bg-[#101010]'
                    : 'bg-[#101010]'
                }
                ${
                  isMobileOpen
                    ? 'translate-y-0 rotate-45'
                    : '-translate-y-[6px]'
                }
              `}
            />

            <span
              className={`
                absolute
                h-[2px] w-[23px] max-[1199px]:w-[32px]
                rounded-full
                transition-all
                duration-[250ms]
                ${
                  overlay
                    ? 'bg-white max-[1199px]:bg-[#101010]'
                    : 'bg-[#101010]'
                }
                ${
                  isMobileOpen
                    ? 'opacity-0'
                    : 'opacity-100'
                }
              `}
            />

            <span
              className={`
                absolute
                h-[2px] w-[23px] max-[1199px]:w-[32px]
                rounded-full
                transition-all
                duration-[250ms]
                ${
                  overlay
                    ? 'bg-white max-[1199px]:bg-[#101010]'
                    : 'bg-[#101010]'
                }
                ${
                  isMobileOpen
                    ? 'translate-y-0 -rotate-45'
                    : 'translate-y-[6px]'
                }
              `}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`
          ${inter.className}
          fixed inset-x-0 bottom-0
          top-[80px]
          z-40
          overflow-y-auto
          bg-[#101010]
          px-[22px]
          pb-[25px]
          transition-[opacity,transform]
          duration-300
          xl:hidden
          ${
            isMobileOpen
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-[8px] opacity-0'
          }
        `}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto max-w-[720px]"
        >
          <Link
            href="/"
            onClick={handleHomeClick}
            className="
              block
              border-b border-white/10
              py-[14px]
              text-[17px]
              font-medium
              text-white
              no-underline
            "
          >
            Home
          </Link>

          <Link
            href="/about-us"
            onClick={closeMobileMenu}
            className="block border-b border-white/10 py-[14px] text-[17px] font-medium text-white no-underline"
          >
            About Us
          </Link>

          <MobileAccordion
            id="business"
            label="Our Solution"
            links={[
              {
                name: 'View Our Solution',
                href: '/our-solution',
              },
              ...BUSINESS_LINKS_MOBILE,
            ]}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            closeMenu={closeMobileMenu}
          />

          <MobileAccordion
            id="insight"
            label="Insight & Programs"
            links={INSIGHT_LINKS}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            closeMenu={closeMobileMenu}
          />

          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="
              mt-[25px]
              flex h-[44px] w-full
              items-center justify-between
              rounded-full
              border-0
              bg-[#E6FF2A]
              px-[20px]
              text-left
              text-[14px]
              font-semibold
              text-[#101010]
            "
          >
            CONTACT US
            <ButtonChevron />
          </button>
        </nav>
      </div>
    </>
  );
}
