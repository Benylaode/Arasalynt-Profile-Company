/* ==========================================================================
   DUMMY DATA — Business Pages Seed
   Semua data bisnis Arsalynt untuk di-seed ke SQLite
   ========================================================================== */

import type { BusinessPage } from '@/lib/business.types';
import type { HeroSlide } from '@/types';

export const HERO_SLIDES_DUMMY_DATA: HeroSlide[] = [
  {
    id: 'unified-enterprise-ecosystem',
    headline: 'The Unified\nEnterprise Ecosystem',
    body:
      'Arsalynk connects technology, data, and media into one synchronized ecosystem\nthat helps enterprises solve complex business challenges.',
    backgroundImage: '/images/hero/slide-01.webp',
    mobileBackgroundImage: '/images/hero/slide-01-mobile.webp',
    backgroundPosition: 'center center',
    primaryCta: {
      label: 'OUR BUSINESS',
      href: '#our-business',
    },
    secondaryCta: {
      label: 'EXPLORE WORKS',
      href: '/our-works',
    },
  },
  {
    id: 'tia-hendi-campaign',
    headline: 'The Road of Tia Hendi, How\nWe Won The Council for Her',
    body:
      "Beginning with Tia Hendi's campaign as a candidate, we joined forces to win the trust of Semarang's citizens to win a seat in the Semarang City Council District.",
    backgroundImage: '/images/hero/slide-02.webp',
    mobileBackgroundImage: '/images/hero/slide-02-mobile.webp',
    backgroundPosition: 'center center',
    primaryCta: {
      label: 'READ MORE',
      href: '/insight-programs',
    },
    secondaryCta: {
      label: 'EXPLORE OTHER WORKS',
      href: '/our-works',
    },
  },
  {
    id: 'intelligent-technology',
    headline: 'Intelligent Technology for\nConnected Businesses',
    body:
      'Build a connected digital ecosystem that links physical devices with business applications.\nStreamline operations, automate workflows, and make faster decisions through real-time data.',
    backgroundImage: '/images/hero/slide-03.webp',
    mobileBackgroundImage: '/images/hero/slide-03-mobile.webp',
    backgroundPosition: 'center center',
    primaryCta: {
      label: 'LEARN MORE',
      href: '#services',
    },
    secondaryCta: {
      label: 'EXPLORE WORKS',
      href: '/our-works',
    },
  },
  {
    id: 'strategic-intelligence',
    headline: 'From Raw Data to\nStrategic Intelligence',
    body:
      'Collect, analyze, and transform continuous business information to uncover trends,\npredict outcomes, and support long-term organizational growth.',
    backgroundImage: '/images/hero/slide-04.webp',
    mobileBackgroundImage: '/images/hero/slide-04-mobile.webp',
    backgroundPosition: 'center center',
    primaryCta: {
      label: 'LEARN MORE',
      href: '#services',
    },
    secondaryCta: {
      label: 'EXPLORE WORKS',
      href: '/our-works',
    },
  },
];

export const BUSINESS_DUMMY_DATA: BusinessPage[] = [
  /* ─────────────────────────────────────────────────────────────────────────
     1. KALUNA TECHNOLOGY — IT Infrastructure
     ───────────────────────────────────────────────────────────────────────── */
  {
    id: 1,
    slug: 'kaluna-technology',
    name: 'Kaluna Technology',
    category: 'IT INFRASTRUCTURE',
    tagline: 'Empowering Smarter Operations',
    heroImg:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    aboutDesc:
      'Kaluna Technology delivers end-to-end IT infrastructure solutions designed to modernise, connect, and scale your business operations. From intelligent hardware integration to enterprise software ecosystems, we build the backbone your business needs to thrive in the digital era — reliably, securely, and efficiently.',
    aboutImg:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    brandColor: '#E6FF2A',
    visionQuote:
      'We believe connected infrastructure is the future — empowering businesses with affordable, predictive insights, and operational excellence.',
    ctaTitle: 'Explore the Kaluna Ecosystem',
    ctaDesc:
      'Build smarter, scale faster, and operate with confidence. Partner with Kaluna Technology to transform your infrastructure into a competitive advantage.',
    painPoints: [
      {
        icon: '🔧',
        title: 'Legacy Infrastructure',
        desc: 'Outdated systems that slow down operations and increase maintenance costs.',
      },
      {
        icon: '🔗',
        title: 'Disconnected Systems',
        desc: 'Siloed tools and platforms that prevent seamless data flow across departments.',
      },
      {
        icon: '⚡',
        title: 'Operational Downtime',
        desc: 'Unplanned outages and inefficiencies that impact productivity and revenue.',
      },
      {
        icon: '📊',
        title: 'Unexpected Complexity',
        desc: 'Integration challenges that escalate scope and delay digital transformation goals.',
      },
    ],
    services: [
      {
        name: 'Data Enhancement',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Complex Data Models',
        img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Process System',
        img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Governance Management',
        img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Point-of-Sale System',
        img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Decentralized System',
        img: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Document System',
        img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Software Development',
        img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop',
      },
    ],
    works: [
      {
        name: 'Sinau Print Marketplace Website',
        img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=700&auto=format&fit=crop',
        tag: 'Web Platform',
      },
      {
        name: 'Connected IoT Dashboard',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=700&auto=format&fit=crop',
        tag: 'IoT System',
      },
      {
        name: 'Smart Inventory System',
        img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=700&auto=format&fit=crop',
        tag: 'ERP Solution',
      },
    ],
    otherBusinesses: [
      {
        slug: 'loxlive',
        name: 'LoxLive',
        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'adsvar',
        name: 'Adsvar',
        img: 'https://images.unsplash.com/photo-1543286386-7a395019efd6?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'artic-analytica',
        name: 'Artic Analytica',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     2. ARTIC ANALYTICA — Data & Analytics
     ───────────────────────────────────────────────────────────────────────── */
  {
    id: 2,
    slug: 'artic-analytica',
    name: 'Artic Analytica',
    category: 'DATA & ANALYTICS',
    tagline: 'Turning Data into Insights',
    heroImg:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    aboutDesc:
      'Artic Analytica transforms raw business data into actionable intelligence. We combine advanced research methodologies, predictive modelling, and market analytics to help organisations make confident, data-driven decisions — from strategy to execution, every step of the way.',
    aboutImg:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    brandColor: '#00C4FF',
    visionQuote:
      'We envision a future where every business decision is driven by data, predictive insights, and intelligent research.',
    ctaTitle: 'See What Artic Analytica Can Do',
    ctaDesc:
      'Let data be your greatest competitive advantage. Work with Artic Analytica to unlock the full potential of your business intelligence and research capabilities.',
    painPoints: [
      {
        icon: '📉',
        title: 'Untrapped Business Data',
        desc: 'Valuable data sits unused in siloed systems, missing opportunities for strategic insight.',
      },
      {
        icon: '🔍',
        title: 'No Clear Information',
        desc: 'Lack of unified dashboards makes it impossible to see the full business picture in real time.',
      },
      {
        icon: '❓',
        title: 'Baseless Decision Making',
        desc: 'Decisions are driven by gut feeling rather than evidence-backed intelligence.',
      },
      {
        icon: '🌫️',
        title: 'Market Uncertainty',
        desc: 'Rapidly shifting market conditions demand adaptive analytics that most businesses lack.',
      },
    ],
    services: [
      {
        name: 'Artic Research',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Artic Data',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Artic Consulting',
        img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Artic Academy',
        img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Artic Policy Lab',
        img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Artic Insight Hub',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
      },
    ],
    works: [
      {
        name: 'Sinau Print Marketplace Website',
        img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=700&auto=format&fit=crop',
        tag: 'Data Platform',
      },
      {
        name: 'Business Intelligence Report',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=700&auto=format&fit=crop',
        tag: 'Analytics',
      },
      {
        name: 'Market Research Dashboard',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=700&auto=format&fit=crop',
        tag: 'Research',
      },
    ],
    otherBusinesses: [
      {
        slug: 'loxlive',
        name: 'LoxLive',
        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'adsvar',
        name: 'Adsvar',
        img: 'https://images.unsplash.com/photo-1543286386-7a395019efd6?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'kaluna-technology',
        name: 'Kaluna Technology',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     3. LOXLIVE — Broadcast & Streaming Media
     ───────────────────────────────────────────────────────────────────────── */
  {
    id: 3,
    slug: 'loxlive',
    name: 'LoxLive',
    category: 'MEDIA',
    tagline: 'Broadcast Without Limits',
    heroImg:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop',
    aboutDesc:
      'LoxLive is a premium end-to-end live streaming and broadcast production company that brings your events to life, anywhere in the world. From corporate conferences to entertainment events, our team delivers cinematic-quality streaming experiences that captivate your audience and elevate your brand.',
    aboutImg:
      'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=800&auto=format&fit=crop',
    brandColor: '#FF4D4D',
    visionQuote:
      'We envision a future where virtual events are as immersive, engaging, and impactful as being there in person.',
    ctaTitle: "Let's Start Your Quality Streaming Event",
    ctaDesc:
      'From concept to broadcast, LoxLive handles every detail so you can focus on what matters most — your audience and your message.',
    painPoints: [
      {
        icon: '📡',
        title: 'Unreliable Live Streaming',
        desc: 'Frequent drops and poor quality streaming that frustrates audiences and damages your brand.',
      },
      {
        icon: '🎬',
        title: 'Limited Production Quality',
        desc: 'Lack of professional-grade production tools that limit the impact of your broadcast content.',
      },
      {
        icon: '🌍',
        title: 'Disconnected Global Audience',
        desc: 'Inability to reach and engage audiences across multiple platforms and geographies simultaneously.',
      },
      {
        icon: '📉',
        title: 'High Production Costs',
        desc: 'Expensive broadcast infrastructure that makes high-quality streaming inaccessible for most organisations.',
      },
    ],
    services: [
      {
        name: 'Livestream Production',
        img: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Multi-Camera Production',
        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Broadcast Infrastructure',
        img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Interactive Event Experiences',
        img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=600&auto=format&fit=crop',
      },
    ],
    works: [
      {
        name: 'Sinau Print Marketplace Website',
        img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=700&auto=format&fit=crop',
        tag: 'Live Event',
      },
      {
        name: 'Corporate Event Streaming',
        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=700&auto=format&fit=crop',
        tag: 'Broadcast',
      },
      {
        name: 'Product Launch Livestream',
        img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=700&auto=format&fit=crop',
        tag: 'Production',
      },
    ],
    otherBusinesses: [
      {
        slug: 'the-drafroom',
        name: 'The Drafroom',
        img: 'https://images.unsplash.com/photo-1503387762-592ded58c454?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'adsvar',
        name: 'Adsvar',
        img: 'https://images.unsplash.com/photo-1543286386-7a395019efd6?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'kaluna-technology',
        name: 'Kaluna Technology',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     4. THE DRAFROOM — Brand Strategy & Design
     ───────────────────────────────────────────────────────────────────────── */
  {
    id: 4,
    slug: 'the-drafroom',
    name: 'The Drafroom',
    category: 'MEDIA / BRANDING',
    tagline: 'Elevating Brands Beyond the Ordinary',
    heroImg:
      'https://images.unsplash.com/photo-1503387762-592ded58c454?q=80&w=1600&auto=format&fit=crop',
    aboutDesc:
      'The Drafroom is a strategic brand studio that crafts bold identities, compelling narratives, and immersive digital experiences. We work with ambitious brands to build distinctive visual languages that resonate deeply with their audiences — from start-ups defining their first look to enterprises transforming their market presence.',
    aboutImg:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    brandColor: '#F5A623',
    visionQuote:
      'Help ambitious brands build iconic value that inspire trust, create lasting value, and stand the test of time.',
    ctaTitle: 'Discover More with TheDraftroom',
    ctaDesc:
      "Ready to build a brand that lasts? Partner with The Drafroom to create a brand identity that truly reflects your vision and resonates with your audience.",
    painPoints: [
      {
        icon: '🎨',
        title: 'Shallow Brand Presence',
        desc: 'Brands that lack consistent identity fail to leave a lasting impression on their audience.',
      },
      {
        icon: '🏷️',
        title: 'Competing in a Noisy Market',
        desc: 'Generic visuals and messaging make it hard to stand out in increasingly crowded industries.',
      },
      {
        icon: '🖥️',
        title: 'Inconsistent Brand Experience',
        desc: 'Disjointed design across platforms erodes trust and dilutes brand equity over time.',
      },
      {
        icon: '📣',
        title: 'Limited Market Recognition',
        desc: 'Weak brand storytelling results in low recall and poor differentiation from competitors.',
      },
    ],
    services: [
      {
        name: 'Brand Strategy & Positioning',
        img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Corporate Identity Design',
        img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Digital Brand Experience',
        img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Corporate Communication',
        img: 'https://images.unsplash.com/photo-1503387762-592ded58c454?q=80&w=600&auto=format&fit=crop',
      },
    ],
    works: [
      {
        name: 'Sinau Print Marketplace Website',
        img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=700&auto=format&fit=crop',
        tag: 'Brand Identity',
      },
      {
        name: 'Corporate Rebranding Campaign',
        img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=700&auto=format&fit=crop',
        tag: 'Rebranding',
      },
      {
        name: 'Digital Experience Design',
        img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=700&auto=format&fit=crop',
        tag: 'UX/UI',
      },
    ],
    otherBusinesses: [
      {
        slug: 'loxlive',
        name: 'LoxLive',
        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'adsvar',
        name: 'Adsvar',
        img: 'https://images.unsplash.com/photo-1543286386-7a395019efd6?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'kaluna-technology',
        name: 'Kaluna Technology',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     5. ADSVAR — Performance Marketing & Digital Advertising
     ───────────────────────────────────────────────────────────────────────── */
  {
    id: 5,
    slug: 'adsvar',
    name: 'Adsvar',
    category: 'PERFORMANCE MARKETING',
    tagline: 'Turning Ad Spend Into Business Growth',
    heroImg:
      'https://images.unsplash.com/photo-1543286386-7a395019efd6?q=80&w=1600&auto=format&fit=crop',
    aboutDesc:
      'Adsvar is a performance-driven digital advertising agency that turns marketing budgets into measurable business results. Through data-backed strategies, creative storytelling, and multi-channel campaign execution, we help brands reach the right audience at the right moment — and convert attention into revenue.',
    aboutImg:
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=800&auto=format&fit=crop',
    brandColor: '#7C3AED',
    visionQuote:
      'Data-driven advertising that transforms marketing investment into predictable customer acquisition, measurable outcomes, and long-term growth.',
    ctaTitle: 'Explore More Our Capability with Adsvar',
    ctaDesc:
      'Stop guessing and start growing. Partner with Adsvar to build campaigns that deliver real ROI and lasting brand impact.',
    painPoints: [
      {
        icon: '💸',
        title: 'Wasted Ad Spend to Waste',
        desc: 'Budgets burned on untargeted campaigns that reach the wrong audiences and deliver zero ROI.',
      },
      {
        icon: '📊',
        title: 'Limited Production Quality',
        desc: 'Inability to produce high-quality ad creatives consistently slows down campaign momentum.',
      },
      {
        icon: '🎯',
        title: 'Bad or Your Marketing Performance',
        desc: 'Generic targeting means your message reaches people who will never convert into customers.',
      },
      {
        icon: '🔄',
        title: "Brand That Doesn't Scale",
        desc: 'Disjointed ad creatives across channels dilute brand messaging and reduce campaign effectiveness.',
      },
    ],
    services: [
      {
        name: 'Paid Advertising Strategy',
        img: 'https://images.unsplash.com/photo-1543286386-7a395019efd6?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Lead Generation & Funnel Optimization',
        img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Conversion & Tracking Ads',
        img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Campaign Management',
        img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop',
      },
    ],
    works: [
      {
        name: 'Sinau Print Marketplace Website',
        img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=700&auto=format&fit=crop',
        tag: 'Paid Media',
      },
      {
        name: 'Company for X',
        img: 'https://images.unsplash.com/photo-1543286386-7a395019efd6?q=80&w=700&auto=format&fit=crop',
        tag: 'Social Ads',
      },
      {
        name: 'Performance Marketing Dashboard',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=700&auto=format&fit=crop',
        tag: 'Analytics',
      },
    ],
    otherBusinesses: [
      {
        slug: 'loxlive',
        name: 'LoxLive',
        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'adsvar',
        name: 'Adsvar',
        img: 'https://images.unsplash.com/photo-1543286386-7a395019efd6?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'ilusia',
        name: 'Ilusia Studio',
        img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     6. ILUSIA — Creative Studio & Visual Storytelling
     ───────────────────────────────────────────────────────────────────────── */
  {
    id: 6,
    slug: 'ilusia',
    name: 'Ilusia Studio',
    category: 'CREATIVE STUDIO',
    tagline: 'Bringing Your Ideas to Reality',
    heroImg:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop',
    aboutDesc:
      'Ilusia Studio is a creative production house specializing in visual storytelling, motion graphics, and digital content creation. We craft compelling narratives that connect brands with their audiences — combining artistic vision with strategic thinking to produce content that inspires action.',
    aboutImg:
      'https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=800&auto=format&fit=crop',
    brandColor: '#EC4899',
    visionQuote:
      'Powerful visual storytelling that transforms technical concepts into clear and engaging experiences.',
    ctaTitle: 'Discover More with Ilusia Studio',
    ctaDesc:
      'Your story deserves to be told brilliantly. Partner with Ilusia Studio to create content that captivates your audience and drives real engagement.',
    painPoints: [
      {
        icon: '🎭',
        title: 'It Feels Wrong When Complex Ideas',
        desc: 'Complex concepts that feel impossible to communicate visually to your target audience.',
      },
      {
        icon: '⏱️',
        title: 'No Attention-Span Messaging',
        desc: 'Content that fails to capture attention in the first seconds, losing your audience immediately.',
      },
      {
        icon: '🔀',
        title: 'Unclear or Your Messaging',
        desc: 'Mismatched visuals across platforms that weaken brand recognition and audience trust.',
      },
      {
        icon: '📱',
        title: 'Struggles to Fail to Connect',
        desc: "Content not adapted for each platform's unique format, algorithms, and audience behavior.",
      },
    ],
    services: [
      {
        name: 'Motion Graphics',
        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: '2D & 3D Animation',
        img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Explainer Videos',
        img: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Product Visualization',
        img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop',
      },
    ],
    works: [
      {
        name: 'Sinau Print Marketplace Website',
        img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=700&auto=format&fit=crop',
        tag: 'Video',
      },
      {
        name: 'Company for X',
        img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=700&auto=format&fit=crop',
        tag: 'Content',
      },
      {
        name: 'Product Photography Series',
        img: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=700&auto=format&fit=crop',
        tag: 'Photography',
      },
    ],
    otherBusinesses: [
      {
        slug: 'loxlive',
        name: 'LoxLive',
        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'adsvar',
        name: 'Adsvar',
        img: 'https://images.unsplash.com/photo-1543286386-7a395019efd6?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'the-drafroom',
        name: 'The Drafroom',
        img: 'https://images.unsplash.com/photo-1503387762-592ded58c454?q=80&w=500&auto=format&fit=crop',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     7. SEVENY — Event & Experiential Marketing
     ───────────────────────────────────────────────────────────────────────── */
  {
    id: 7,
    slug: 'seveny',
    name: 'Seveny',
    category: 'EVENT & EXPERIENTIAL',
    tagline: 'Make Events Leave a Lasting Impression',
    heroImg:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1600&auto=format&fit=crop',
    aboutDesc:
      'Seveny specialises in experiential marketing and event production — creating live brand moments that spark genuine human connection. From intimate product launches to large-scale brand activations, we design experiences that people talk about long after the lights go down.',
    aboutImg:
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800&auto=format&fit=crop',
    brandColor: '#10B981',
    visionQuote:
      'Corporate events that combine immersive experiences, intelligent technology, and meaningful engagement to create lasting business impact.',
    ctaTitle: "Let's Create Your Next Signature Event",
    ctaDesc:
      'From concept to execution, Seveny delivers events that amplify your brand and create memories that drive lasting loyalty.',
    painPoints: [
      {
        icon: '🎪',
        title: 'Ineffective Event Hospitality',
        desc: 'Events that fail to create lasting impressions or drive meaningful action from attendees.',
      },
      {
        icon: '🗓️',
        title: 'Low Audience Engagement',
        desc: 'Passive event formats that fail to activate audiences or create shareable brand moments.',
      },
      {
        icon: '🔇',
        title: 'Lack of Attendee Insights',
        desc: 'No data or analytics to measure event success, attendee behaviour, or ROI.',
      },
      {
        icon: '📈',
        title: 'Suboptimal Event Operations',
        desc: 'Disorganised execution leads to technical failures, poor guest experience, and brand damage.',
      },
    ],
    services: [
      {
        name: 'Corporate Event Management',
        img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Interactive Event Technology',
        img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Guest Experience Solutions',
        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Event Analytics & Integration',
        img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop',
      },
    ],
    works: [
      {
        name: 'Sinau Print Marketplace Website',
        img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=700&auto=format&fit=crop',
        tag: 'Corporate Event',
      },
      {
        name: 'Company for X',
        img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=700&auto=format&fit=crop',
        tag: 'Brand Activation',
      },
      {
        name: 'Retail Pop-Up Experience',
        img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=700&auto=format&fit=crop',
        tag: 'Experiential',
      },
    ],
    otherBusinesses: [
      {
        slug: 'loxlive',
        name: 'LoxLive',
        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'ilusia',
        name: 'Ilusia Studio',
        img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'adsvar',
        name: 'Adsvar',
        img: 'https://images.unsplash.com/photo-1543286386-7a395019efd6?q=80&w=500&auto=format&fit=crop',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     8. PERSONICE — Strategic PR & Executive Talent
     ───────────────────────────────────────────────────────────────────────── */
  {
    id: 8,
    slug: 'personice',
    name: 'Personice',
    category: 'PUBLIC RELATIONS',
    tagline: 'Elevating Brands Through Strategic PR',
    heroImg:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    aboutDesc:
      'Personice is a strategic public relations and executive talent firm that helps organisations build powerful reputations, cultivate authentic thought leadership, and forge meaningful brand partnerships. We elevate brands through credible communication, media relations, and talent-driven storytelling.',
    aboutImg:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
    brandColor: '#F59E0B',
    visionQuote:
      'Authentic relationships, credible leadership, and strategic communication that strengthen reputation and create lasting public trust.',
    ctaTitle: 'Discover PR & Executive Talent Management with Personice',
    ctaDesc:
      'From reputation building to executive positioning, Personice gives you the strategy and relationships to make your brand impossible to ignore.',
    painPoints: [
      {
        icon: '🧩',
        title: 'Limited Brand Visibility',
        desc: 'Brands that struggle to gain media coverage or public recognition miss key growth opportunities.',
      },
      {
        icon: '📋',
        title: 'Limited Production Quality',
        desc: 'Inconsistent messaging and poor content quality undermine credibility and media placement.',
      },
      {
        icon: '🔭',
        title: 'Lack of Executive Presence',
        desc: 'Leadership without a public voice fails to build authority or influence within the industry.',
      },
      {
        icon: '💔',
        title: 'Struggles in Public Relations',
        desc: 'Poorly managed communications during crises can permanently damage brand reputation and trust.',
      },
    ],
    services: [
      {
        name: 'Public Relations Strategy',
        img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Executive Thought Leadership',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Talent & Brand Partnerships',
        img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Crisis Management',
        img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop',
      },
    ],
    works: [
      {
        name: 'Sinau Print Marketplace Website',
        img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=700&auto=format&fit=crop',
        tag: 'PR Campaign',
      },
      {
        name: 'Company for X',
        img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=700&auto=format&fit=crop',
        tag: 'Thought Leadership',
      },
      {
        name: 'Brand Partnership Programme',
        img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=700&auto=format&fit=crop',
        tag: 'Partnerships',
      },
    ],
    otherBusinesses: [
      {
        slug: 'loxlive',
        name: 'LoxLive',
        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'adsvar',
        name: 'Adsvar',
        img: 'https://images.unsplash.com/photo-1543286386-7a395019efd6?q=80&w=500&auto=format&fit=crop',
      },
      {
        slug: 'artic-analytica',
        name: 'Artic Analytica',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop',
      },
    ],
  },
];

export const TESTIMONIALS_DUMMY_DATA = [
  {
    id: 1,
    name: "RIZKI SIAHAAN",
    role: "Chief Executive Operation at Hilden Corp",
    text: "We’re very satisfied with PT. Kaluna Teknologi Digital’s work. They delivered a professional website that makes online ordering much easier for our customers. The process was smooth, and the final result exceeded our expectations.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "NINA PRATIWI",
    role: "IT Director at Sinar Mas",
    text: "Sangat puas dengan layanan IT Solution dari Arsalynt. Sistem kami sekarang jauh lebih stabil dan cepat. Tim support-nya juga sangat responsif dan professional. Sangat direkomendasikan untuk enterprise!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "BUDI SETIAWAN",
    role: "Chief Technology Officer at GOTO Logistics",
    text: "Arsalynt membantu kami melakukan integrasi sistem logistik nasional secara mulus. Arsitektur cloud mereka sangat tangguh dan andal untuk menangani beban transaksi dengan volume sangat tinggi.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  },
];

