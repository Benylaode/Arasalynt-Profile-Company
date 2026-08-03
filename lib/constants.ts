import type {
  NavItem,
  HeroSlide,
  ClientLogo,
  FeatureCard,
  StatItem,
  ProjectItem,
  FooterColumn,
} from '@/types';

/* ─── Navigation ─── */

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

import { HERO_SLIDES_DUMMY_DATA } from '@/lib/db/dummy';

export const HERO_SLIDES: HeroSlide[] = HERO_SLIDES_DUMMY_DATA;

/* ─── Contact Info ─── */

export const WHATSAPP_PHONE_DISPLAY = '+62 878-5547-107';
export const WHATSAPP_PHONE_RAW = '6287855471107';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE_RAW}`;


/* ─── Client Logos ─── */
/* Placeholder data — replace src with actual logo paths when provided */

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'BAPPEDA', src: '/images/logos/placeholder.svg', width: 105, height: 45 },
  { name: 'Queen City', src: '/images/logos/placeholder.svg', width: 131, height: 38 },
  { name: 'Client 3', src: '/images/logos/placeholder.svg', width: 64, height: 42 },
  { name: 'BSP', src: '/images/logos/placeholder.svg', width: 94, height: 39 },
  { name: 'SMGen', src: '/images/logos/placeholder.svg', width: 79, height: 53 },
  { name: 'X1 Tire', src: '/images/logos/placeholder.svg', width: 115, height: 56 },
  { name: 'Client 7', src: '/images/logos/placeholder.svg', width: 116, height: 59 },
  { name: 'Client 8', src: '/images/logos/placeholder.svg', width: 124, height: 20 },
  { name: 'Top Toy', src: '/images/logos/placeholder.svg', width: 44, height: 45 },
  { name: 'PBPI', src: '/images/logos/placeholder.svg', width: 53, height: 49 },
  { name: 'BRIDA', src: '/images/logos/placeholder.svg', width: 72, height: 49 },
];

/* ─── Feature Cards (Specialized By Nature) ─── */

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 1,
    title: 'Flexible Resilient Technology Infrastructure',
    description:
      'Build systems that adapt to changing demands while maintaining peak performance and reliability across all operations.',
    imageSrc: '/images/sections/feature-infrastructure.png',
  },
  {
    id: 2,
    title: 'Driven by Strategic Intelligence',
    description:
      'Leverage data-driven insights and strategic analysis to make informed decisions that accelerate business growth.',
    imageSrc: '/images/sections/feature-intelligence.png',
  },
  {
    id: 3,
    title: 'Designed for Long Lasting Impact',
    description:
      'Create sustainable solutions built to evolve with your business, ensuring long-term value and continuous improvement.',
    imageSrc: '/images/sections/feature-impact.png',
  },
];

/* ─── Growth Statistics ─── */

export const GROWTH_STATS: StatItem[] = [
  { value: '50+', label: 'Projects Completed' },
  { value: '10+', label: 'Years of Experience' },
  { value: '7+', label: 'Industries Served' },
  { value: '25+', label: 'Team Members' },
];

/* ─── Project Showcase ─── */

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'Sinar Prio Marketplace Website',
    category: 'Web Development',
    description: 'Full-featured marketplace platform with integrated payment system and real-time inventory management.',
    imageSrc: '/images/projects/project-1.png',
  },
  {
    id: 2,
    title: 'Enterprise Dashboard',
    category: 'Web Application',
    description: 'Comprehensive analytics dashboard for enterprise resource management and business intelligence.',
    imageSrc: '/images/projects/project-2.png',
  },
  {
    id: 3,
    title: 'Mobile Commerce App',
    category: 'Mobile Development',
    description: 'Cross-platform mobile commerce application with seamless user experience and secure transactions.',
    imageSrc: '/images/projects/project-3.png',
  },
  {
    id: 4,
    title: 'Corporate Website Redesign',
    category: 'Web Design',
    description: 'Complete brand overhaul and website redesign delivering modern aesthetics with improved conversion.',
    imageSrc: '/images/projects/project-4.png',
  },
];

/* ─── Footer ─── */

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '#' },
      { label: 'Mobile Development', href: '#' },
      { label: 'UI/UX Design', href: '#' },
      { label: 'IT Consulting', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@arsalynt.com', href: 'mailto:hello@arsalynt.com' },
      { label: '+62 812 3456 7890', href: 'tel:+6281234567890' },
      { label: 'Jakarta, Indonesia', href: '#' },
    ],
  },
];

/* ─── Metadata ─── */

export const SITE_NAME = 'Arsalynk';
export const SITE_DESCRIPTION =
  'Arsalynk builds unified enterprise ecosystems — integrated technology solutions for resilient, scalable, and intelligent business operations.';
export const SITE_URL = 'https://arsalynk.com';

