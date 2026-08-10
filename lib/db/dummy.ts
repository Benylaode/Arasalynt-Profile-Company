/* ==========================================================================
   DUMMY DATA — Business Pages Seed
   Semua data bisnis Arsalynk untuk di-seed ke SQLite
   ========================================================================== */

import type { BusinessPage } from '@/lib/business.types';
import type { TeamMember } from '@/lib/team.data';
import type { HeroSlide, CaseStudyArticle, LeadershipThoughtArticle } from '@/types';

export const TEAM_MEMBERS_DUMMY_DATA: TeamMember[] = [
  {
    slug: 'rian-destianto',
    name: 'Rian Destianto',
    role: 'Head of Commercial',
    discipline: 'Commercial',
    image: '/images/leadership-thoughts/featured-leader-bw.webp',
    imagePosition: 'center 28%',
    summary:
      'Leading Arsalynk’s commercial direction by connecting market insight, strategic partnerships, and sustainable business growth.',
    biography: [],
    expertise: [],
    principles: [],
    phone: '+62 823 2230 8719',
    email: 'rian@arsalynk.com',
    address:
      'Menara Rajawali Lt.26, Mega Kuningan, South Jakarta, Indonesia 12950',
    company: 'Arsalynk',
  },
];

export const HERO_SLIDES_DUMMY_DATA: HeroSlide[] = [
  {
    id: 'unified-enterprise-ecosystem',
    headline: 'Leading Digital\nEnterprise Solution',
    body:
      'We drive modern transformation through scalable ERP and emerging IoT solutions,\nfully integrating your operations to elevate your enterprise.',
    backgroundImage: '/images/home/hero/slide-01-mobile-38814c.webp',
    mobileBackgroundImage: '/images/home/hero/slide-01-mobile-38814c.webp',
    backgroundPosition: 'center center',
    primaryCta: {
      label: 'OUR SOLUTION',
      href: '/our-solution',
    },
    secondaryCta: {
      label: 'ABOUT US',
      href: '/about-us',
    },
  },
  {
    id: 'uncover-the-potential',
    headline: 'Uncover\nthe Potential',
    body:
      'We dive deep into your unique ecosystem to identify opportunities\nand map out possibilities.',
    backgroundImage: '/images/home/hero/slide-02-mobile-838ce3.webp',
    mobileBackgroundImage: '/images/home/hero/slide-02-mobile-838ce3.webp',
    backgroundPosition: 'center center',
    primaryCta: {
      label: 'EXPLORE SOLUTIONS',
      href: '/our-solution#challenge',
    },
    secondaryCta: {
      label: 'ABOUT US',
      href: '/about-us#our-foundation',
    },
  },
  {
    id: 'architect-the-solution',
    headline: 'Architect\nthe Solution',
    body:
      'We engineer ERP and IoT integration frameworks\ndesigned for maximum impact.',
    backgroundImage: '/images/home/hero/slide-03-mobile-2f3b2e.webp',
    mobileBackgroundImage: '/images/home/hero/slide-03-mobile-2f3b2e.webp',
    backgroundPosition: 'center center',
    primaryCta: {
      label: 'EXPLORE SOLUTIONS',
      href: '/our-solution#solutions',
    },
    secondaryCta: {
      label: 'OUR CAPABILITIES',
      href: '/about-us#our-capabilities',
    },
  },
  {
    id: 'connect-the-future',
    headline: 'Connect\nthe Future',
    body:
      'We deploy seamlessly, bridging current operations\nand future-ready enterprise capabilities.',
    backgroundImage: '/images/home/hero/slide-04-mobile-6f32fe.webp',
    mobileBackgroundImage: '/images/home/hero/slide-04-mobile-6f32fe.webp',
    backgroundPosition: 'center center',
    primaryCta: {
      label: 'EXPLORE SERVICES',
      href: '/our-solution#services',
    },
    secondaryCta: {
      label: 'CONTACT US',
      href: '/contact-us',
    },
  },
];
export const BUSINESS_DUMMY_DATA: BusinessPage[] = [
{
  id: 1,
  slug: 'kaluna-technology',
  name: 'Kaluna Technology',
  shortName: 'Kaluna',
  category: 'IoT & Technology Integration',
  tagline: 'Empowering Smarter Operations',
  logo: '/images/our-business/kaluna-technology/logo.svg',
  brandColor: '#1A3E9E',

  heroImg: '/images/our-business/kaluna-technology/hero.webp',
  aboutDesc:
    'Kaluna Technology delivers IoT and technology integration solutions that connect physical infrastructure with modern digital systems, helping businesses operate more efficiently through real-time monitoring, automation, and intelligent data.',
  aboutImg: '/images/our-business/kaluna-technology/about.webp',

  painPointsLabel: 'THE CHALLENGE',
  painPointsTitle: "What's Slowing Your Business Down?",
  painPoints: [
    {
      icon: 'legacy-hardware',
      title: 'Legacy Hardware',
      desc: 'Outdated systems make expansion, maintenance, and integration increasingly difficult.',
    },
    {
      icon: 'disconnected-software',
      title: 'Disconnected Software',
      desc: 'Separate tools create fragmented workflows and duplicate operational work.',
    },
    {
      icon: 'operational-blind-spots',
      title: 'Operational Blind Spots',
      desc: 'Limited real-time visibility makes it harder to identify issues and act quickly.',
    },
    {
      icon: 'unexpected-downtime',
      title: 'Unexpected Downtime',
      desc: 'Reactive maintenance disrupts productivity and increases operational costs.',
    },
  ],

  servicesLabel: 'OUR SOLUTIONS',
  servicesTitle: 'End-to-End Technology Integration Solutions',
  services: [
    {
      name: 'Website Development',
      img: '/images/our-business/kaluna-technology/services/website-development.webp',
    },
    {
      name: 'Company Profile Website',
      img: '/images/our-business/kaluna-technology/services/company-profile-website.webp',
    },
    {
      name: 'Finance System',
      img: '/images/our-business/kaluna-technology/services/finance-system.webp',
    },
    {
      name: 'Warehouse Management',
      img: '/images/our-business/kaluna-technology/services/warehouse-management.webp',
    },
    {
      name: 'Point of Sales System',
      img: '/images/our-business/kaluna-technology/services/point-of-sales-system.webp',
    },
    {
      name: 'Appointment System',
      img: '/images/our-business/kaluna-technology/services/appointment-system.webp',
    },
    {
      name: 'E-commerce Website',
      img: '/images/our-business/kaluna-technology/services/e-commerce-website.webp',
    },
    {
      name: 'Software Development',
      img: '/images/our-business/kaluna-technology/services/software-development.webp',
    },
  ],

  visionQuote:
    'We believe connected infrastructure is the future—empowering businesses with automation, predictive insights, and operational excellence.',

  works: [
    {
      name: 'Sinau Print Marketplace Website',
      tag: 'MARKETPLACE WEBSITE • ERP SYSTEM',
      img: '/images/our-business/kaluna-technology/works/sinau-print-marketplace.webp',
    },
    {
      name: 'X-1 Tire Company Profile Website',
      tag: 'COMPANY PROFILE • WEBSITE DESIGN',
      img: '/images/our-business/kaluna-technology/works/x1-tire-website.webp',
    },
  ],

  otherBusinesses: [
    {
      slug: 'artic-analytica',
      name: 'Artic Analytica',
      img: '/images/our-business/kaluna-technology/other-business-previews/preview-01.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/kaluna-technology/other-business-previews/loxlive.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/kaluna-technology/other-business-previews/adsvar.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/kaluna-technology/other-business-previews/preview-04.webp',
    },
  ],

  ctaTitle: 'Explore the Kaluna Ecosystem',
  ctaDesc:
    'Transform your operations with connected technology, intelligent systems, and scalable digital solutions designed around your business.',
  ctaPrimaryLabel: 'VISIT WEBSITE',
  ctaPrimaryHref: 'http://www.kalunatechnology.com/',
  ctaSecondaryLabel: 'EXPLORE WORKS',
  ctaSecondaryHref: '#works',
},

 {
  id: 2,
  slug: 'artic-analytica',
  name: 'Artic Analytica',
  shortName: 'Artic Analytica',
  category: 'Data, Survey & Analytics',
  tagline: 'Turning Data into Insights',
  logo: '/images/our-business/artic-analytica/logo.svg',
  brandColor: '#2020D3',

  heroImg: '/images/our-business/artic-analytica/hero.webp',
  heroOverlayImg: '/images/our-business/backgrounds/hero-network-overlay-4600c8.webp',
  aboutDesc:
    'Artic Analytica helps businesses unlock the full value of their data through advanced analytics, predictive modeling, and market research—turning complex information into actionable insights for smarter decision-making.',
  aboutImg: '/images/our-business/artic-analytica/about.webp',

  painPointsLabel: 'THE CHALLENGE',
  painPointsTitle: 'Is This Your Challenge?',
  painPoints: [
    {
      icon: '/images/our-business/artic-analytica/icons/untapped-business-data.svg',
      title: 'Untapped Business Data',
      desc: 'Valuable operational and customer data exists, but is not yet structured into useful intelligence.',
    },
    {
      icon: '/images/our-business/artic-analytica/icons/siloed-information.svg',
      title: 'Siloed Information',
      desc: 'Disconnected sources make it difficult to build one reliable view of business performance.',
    },
    {
      icon: '/images/our-business/artic-analytica/icons/reactive-decision-making.svg',
      title: 'Reactive Decision-Making',
      desc: 'Decisions are made after problems appear instead of being guided by predictive insights.',
    },
    {
      icon: '/images/our-business/artic-analytica/icons/market-uncertainty.svg',
      title: 'Market Uncertainty',
      desc: 'Limited research and fragmented signals make market direction harder to understand.',
    },
  ],

  servicesLabel: 'ARTIC ANALYTICA SERVICE',
  servicesTitle: 'We Do Data-Driven Business Intelligence',
  services: [
    {
      name: 'Artic Research',
      img: '/images/our-business/artic-analytica/services/artic-research.webp',
    },
    {
      name: 'Artic Data',
      img: '/images/our-business/artic-analytica/services/artic-data.webp',
    },
    {
      name: 'Artic Consulting',
      img: '/images/our-business/artic-analytica/services/artic-consulting.webp',
    },
    {
      name: 'Artic Academy',
      img: '/images/our-business/artic-analytica/services/artic-academy.webp',
    },
    {
      name: 'Artic Policy Lab',
      img: '/images/our-business/artic-analytica/services/artic-policy-lab.webp',
    },
    {
      name: 'Artic Insight Hub',
      img: '/images/our-business/artic-analytica/services/artic-insight-hub.webp',
    },
  ],
  servicesBg: '/images/our-business/artic-analytica/services-bg.webp',

  visionLabel: 'OUR VISION',
  visionQuote:
    'We envision a future where every business decision is driven by data, predictive insights, and intelligent research.',
  visionImg: '/images/our-business/backgrounds/hero-network-overlay-4600c8.webp',

  worksLabel: 'OUR PROJECTS',
  featuredWorkIndex: 1,
  works: [
    {
      name: 'Kajian Kelayakan Pengembangan Gedung Industri Kreatif (GIK)',
      tag: 'DATA & RESEARCH • FEASIBILITY STUDY',
      img: '/images/projects/kajian-kelayakan-gik/1.webp',
      slug: 'kajian-kelayakan-gik',
    },
    {
      name: 'Penyusunan Buku Panduan Perubahan Perilaku Stunting',
      tag: 'DATA & RESEARCH • SOCIAL RESEARCH',
      img: '/images/projects/panduan-perubahan-perilaku-stunting/1.webp',
      slug: 'panduan-perubahan-perilaku-stunting',
    },
    {
      name: 'Artic Complex Web Architecture & Portal',
      tag: 'DATA & ANALYTICS • WEB PLATFORM',
      img: '/images/projects/artic-complex-web/1.webp',
      slug: 'artic-complex-web',
    },
  ],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'kaluna-technology',
      name: 'Kaluna Technology',
      img: '/images/our-business/artic-analytica/other-business-previews/kaluna-technology.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/previews/loxlive-69e358.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/artic-analytica/other-business-previews/adsvar.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/artic-analytica/other-business-previews/seveny.webp',
    },
  ],

  ctaTitle: 'See What Artic Analytica Can Do',
  ctaDesc:
    'Discover how research, analytics, and intelligent data can help your organization make clearer decisions and create measurable impact.',
  ctaPrimaryLabel: 'VISIT WEBSITE',
  ctaPrimaryHref: 'https://articanalytica.com/',
  ctaSecondaryLabel: 'EXPLORE WORKS',
  ctaSecondaryHref: '#works',
  ctaImg: '/images/our-business/artic-analytica/cta-bg.webp',
},
{
  id: 3,
  slug: 'loxlive',
  name: 'LoxLive',
  shortName: 'LoxLive',
  category: 'Premium Broadcast & Streaming Service',
  tagline: 'Broadcast Without Limits',
  logo: '/images/our-business/loxlive/logo.svg',
  logoWidth: 60,
  logoMaxHeight: 80,
  brandColor: '#FF2828',

  heroImg: '/images/our-business/previews/loxlive-69e358.webp',
  heroOverlayImg: '/images/our-business/backgrounds/hero-network-overlay-69f0f9.webp',
  heroObjectPosition: 'center top',
  aboutDesc:
    'LoxLive provides premium broadcast and livestreaming solutions that combine studio-grade production, reliable streaming infrastructure, and seamless event execution to deliver exceptional virtual experiences.',
  aboutImg: '/images/our-business/backgrounds/about.webp',
  aboutObjectPosition: 'center',

  painPointsLabel: 'THE CHALLENGE',
  painPointsTitle: 'Is This Your Problem?',
  painPoints: [
    {
      icon: '/images/our-business/loxlive/icons/unreliable-live-streams.svg',
      title: 'Unreliable Live Streams',
      desc: 'Buffering, dropped connections, and unstable delivery can quickly reduce audience confidence.',
    },
    {
      icon: '/images/our-business/loxlive/icons/limited-production-quality.svg',
      title: 'Limited Production Quality',
      desc: 'Basic equipment and fragmented production workflows make virtual events feel less professional.',
    },
    {
      icon: '/images/our-business/loxlive/icons/disconnected-global-audiences.svg',
      title: 'Disconnected Global Audiences',
      desc: 'Participants across locations struggle to receive one consistent and engaging event experience.',
    },
    {
      icon: '/images/our-business/loxlive/icons/high-stakes-events-at-risk.svg',
      title: 'High-Stakes Events at Risk',
      desc: 'Critical launches, conferences, and broadcasts need dependable technical execution from start to finish.',
    },
  ],

  servicesLabel: 'LOXLIVE SERVICE',
  servicesTitle: 'End-to-End Premium Broadcast Services',
  servicesColumns: 4,
  services: [
    {
      name: 'Video & Livestream Production',
      img: '/images/our-business/loxlive/services/livestream-production.webp',
    },
    {
      name: 'Multi-Camera Production',
      img: '/images/our-business/loxlive/services/multi-camera-production.webp',
    },
    {
      name: 'Broadcast Infrastructure',
      img: '/images/our-business/loxlive/services/broadcast-infrastructure.webp',
    },
    {
      name: 'Interactive Event Experience',
      img: '/images/our-business/loxlive/services/interactive-event-experience.webp',
    },
  ],
  servicesBg: '/images/our-business/backgrounds/services-bg.webp',

  visionLabel: 'OUR VISION',
  visionTextSize: 'large',
  visionQuote:
    'We envision a future where virtual events are as immersive, engaging, and impactful as being there in person.',
  visionImg: '/images/our-business/backgrounds/hero-network-overlay-69f0f9.webp',

  worksLabel: 'OUR PROJECTS',
  worksTitle: 'Explore LoxLive’s Work',
  featuredWorkIndex: 0,
  works: [
    {
      name: 'Produksi Konten Video Portret Padel Arena',
      tag: 'VIDEO & LIVESTREAM PRODUCTION • SPORTS CONTENT',
      img: '/images/projects/video-portret-padel-arena/1.webp',
      slug: 'video-portret-padel-arena',
    },
  ],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'personice',
      name: 'Personice',
      img: '/images/our-business/previews/personice.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/previews/loxlive.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/previews/adsvar.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/previews/seveny.webp',
    },
  ],

  ctaTitle: 'Let’s Start Your Quality Streaming Event',
  ctaDesc:
    'Bring your next event to life with reliable broadcast production, professional infrastructure, and a seamless livestream experience from preparation to delivery.',
  ctaImg: '/images/our-business/backgrounds/cta-bg.webp',
  ctaPrimaryLabel: 'GET IN TOUCH',
  ctaPrimaryHref: '/contact-us',
  ctaSecondaryLabel: 'EXPLORE WORKS',
  ctaSecondaryHref: '/our-works',
},
{
  id: 4,
  slug: 'the-drafroom',
  name: 'The Drafroom',
  shortName: 'The Drafroom',
  category: 'Brand Strategy & Design Consultant',
  tagline: 'Elevating Brands Beyond the Ordinary',
  logo: '/images/our-business/the-drafroom/logo.svg',
  logoWidth: 251,
  logoMaxHeight: 80,
  brandColor: '#544D4D',

  heroImg: '/images/our-business/the-drafroom/hero.webp',
  heroOverlayImg: '/images/our-business/backgrounds/hero-network-overlay-69f0f9.webp',
  heroObjectPosition: 'center',
  aboutDesc:
    'The Drafroom helps businesses transform their brand identity into a strategic competitive advantage through research-driven branding, premium design, and compelling visual communication.',
  aboutImg: '/images/our-business/the-drafroom/about.webp',
  aboutObjectPosition: 'center',

  painPointsLabel: 'THE CHALLENGE',
  painPointsTitle: 'Is This Your Challenge?',
  painPoints: [
    {
      icon: '/images/our-business/the-drafroom/icons/generic-brand-presence.svg',
      title: 'Generic Brand Presence',
      desc: 'A brand that looks and sounds like everyone else struggles to create a memorable position.',
    },
    {
      icon: '/images/our-business/the-drafroom/icons/competing-on-price.svg',
      title: 'Competing on Price',
      desc: 'Without clear differentiation, customers compare offers mainly by cost instead of value.',
    },
    {
      icon: '/images/our-business/the-drafroom/icons/inconsistent-brand-experience.svg',
      title: 'Inconsistent Brand Experience',
      desc: 'Disconnected messages and visuals weaken recognition across customer touchpoints.',
    },
    {
      icon: '/images/our-business/the-drafroom/icons/limited-market-recognition.svg',
      title: 'Limited Market Recognition',
      desc: 'A weak strategic presence makes it harder for the right audience to notice and remember the brand.',
    },
  ],

  servicesLabel: 'THE DRAFROOM SERVICE',
  servicesTitle: 'Your Strategic Brand Solutions',
  servicesColumns: 4,
  services: [
    {
      name: 'Brand Strategy & Positioning',
      img: '/images/our-business/the-drafroom/services/brand-strategy-positioning.webp',
    },
    {
      name: 'Corporate Identity Design',
      img: '/images/our-business/the-drafroom/services/corporate-identity-design.webp',
    },
    {
      name: 'Digital Brand Experience',
      img: '/images/our-business/the-drafroom/services/digital-brand-experience.webp',
    },
    {
      name: 'Corporate Communication & Learning Design',
      img: '/images/our-business/the-drafroom/services/corporate-communication.webp',
    },
  ],
  servicesBg: '/images/our-business/backgrounds/services-bg.webp',

  visionLabel: 'OUR VISION',
  visionTextSize: 'large',
  visionQuote:
    'Help ambitious brands build iconic value that inspire trust, create lasting value, and stand the test of time.',
  visionImg: '/images/our-business/backgrounds/hero-network-overlay-69f0f9.webp',

  worksLabel: 'OUR PROJECTS',
  worksTitle: 'Explore The Drafroom’s Work',
  featuredWorkIndex: 1,
  works: [
    {
      name: 'Desain Pelatihan Wasit Kota Semarang',
      tag: 'CORPORATE COMMUNICATION • LEARNING EXPERIENCE DESIGN',
      img: '/images/projects/desain-pelatihan-wasit-semarang/1.webp',
      slug: 'desain-pelatihan-wasit-semarang',
    },
    {
      name: 'Web Media Corporate Profile & Digital Presence',
      tag: 'MEDIA & CREATIVE • DIGITAL BRANDING',
      img: '/images/projects/web-media-profile/1.webp',
      slug: 'web-media-profile',
    },
  ],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'personice',
      name: 'Personice',
      img: '/images/our-business/previews/personice.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/previews/loxlive.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/previews/adsvar.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/previews/seveny.webp',
    },
  ],

  ctaTitle: 'Discover More with The Drafroom',
  ctaDesc:
    'Explore our branding expertise, creative capabilities, and strategic design solutions that help ambitious brands build recognition, relevance, and lasting value.',
  ctaImg: '/images/our-business/backgrounds/cta-bg.webp',
  ctaPrimaryLabel: 'GET IN TOUCH',
  ctaPrimaryHref: '/contact-us',
  ctaSecondaryLabel: 'EXPLORE WORKS',
  ctaSecondaryHref: '/our-works',
},
 {
  id: 5,
  slug: 'ilusia',
  name: 'Ilusia Studio',
  shortName: 'Ilusia Studio',
  category: 'Motion Graphics & Animation Studio',
  tagline: 'Bringing Your Ideas to Reality',
  logo: '/images/our-business/ilusia/logo.svg',
  logoWidth: 178,
  logoMaxHeight: 58,
  brandColor: '#101010',

  heroImg: '/images/our-business/ilusia/hero.webp',
  heroOverlayImg: '/images/our-business/backgrounds/hero-network-overlay-69f0f9.webp',
  heroObjectPosition: 'center',
  aboutDesc:
    'Ilusia transforms complex products, services, and business concepts into engaging motion graphics and cinematic animations that communicate with clarity, impact, and purpose.',
  aboutImg: '/images/our-business/ilusia/about.webp',
  aboutObjectPosition: 'center',

  painPointsLabel: 'THE CHALLENGE',
  painPointsTitle: 'Is This Your Problem?',
  painPoints: [
    {
      icon: '/images/our-business/ilusia/icons/difficult-to-explain-complex-idea.svg',
      title: 'Difficult to Explain Complex Idea',
      desc: 'Technical products and abstract ideas are difficult to understand without a clear visual narrative.',
    },
    {
      icon: '/images/our-business/ilusia/icons/short-attention-spans-audience.svg',
      title: 'Short Attention Spans Audience',
      desc: 'Static presentations struggle to hold attention and communicate the message quickly.',
    },
    {
      icon: '/images/our-business/ilusia/icons/unclear-brand-messaging.svg',
      title: 'Unclear Brand Messaging',
      desc: 'Complex communication makes it harder for audiences to recognize the intended value.',
    },
    {
      icon: '/images/our-business/ilusia/icons/content-that-fails-to-convert.svg',
      title: 'Content That Fails to Convert',
      desc: 'Visual content without a focused story may attract views without inspiring meaningful action.',
    },
  ],

  servicesLabel: 'ILUSIA STUDIO SERVICE',
  servicesTitle: 'Your Visual Storytelling Solutions',
  servicesColumns: 4,
  services: [
    {
      name: 'Motion Graphics',
      img: '/images/our-business/ilusia/services/motion-graphics.webp',
    },
    {
      name: '2D & 3D Animation',
      img: '/images/our-business/ilusia/services/2d-3d-animation.webp',
    },
    {
      name: 'Explainer Videos',
      img: '/images/our-business/ilusia/services/explainer-videos.webp',
    },
    {
      name: 'Product Visualization',
      img: '/images/our-business/ilusia/services/product-visualization.webp',
    },
  ],
  servicesBg: '/images/our-business/ilusia/services-bg.webp',

  visionLabel: 'OUR VISION',
  visionTextSize: 'large',
  visionQuote:
    'Powerful visual storytelling that transforms technical concepts into clear and engaging experiences.',
  visionImg: '/images/our-business/backgrounds/hero-network-overlay-69f0f9.webp',

  worksLabel: 'OUR PROJECTS',
  worksTitle: 'Explore Ilusia Studio’s Work',
  featuredWorkIndex: 0,
  works: [],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'personice',
      name: 'Personice',
      img: '/images/our-business/previews/personice.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/previews/loxlive.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/previews/adsvar.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/previews/seveny.webp',
    },
  ],

  ctaTitle: 'Discover More with Ilusia Studio',
  ctaDesc:
    'Explore our motion expertise, creative capabilities, and visual storytelling solutions that transform complex ideas into clear and engaging experiences.',
  ctaImg: '/images/our-business/backgrounds/cta-bg.webp',
  ctaPrimaryLabel: 'GET IN TOUCH',
  ctaPrimaryHref: '/contact-us',
  ctaSecondaryLabel: 'EXPLORE WORKS',
  ctaSecondaryHref: '/our-works',
}
,
  {
  id: 6,
  slug: 'adsvar',
  name: 'Adsvar',
  shortName: 'Adsvar',
  category: 'Performance Paid Ads & Pipeline Acceleration',
  tagline: 'Turning Ad Spend into Business Growth',
  logo: '/images/our-business/adsvar/logo.svg',
  logoWidth: 147,
  logoMaxHeight: 35,
  brandColor: '#101010',

  heroImg: '/images/our-business/adsvar/hero.webp',
  heroOverlayImg: '/images/our-business/backgrounds/hero-network-overlay-69f0f9.webp',
  heroObjectPosition: 'center top',
  aboutDesc:
    'Adsvar helps businesses maximize advertising performance through data-driven strategies, precision targeting, and measurable campaign optimization that delivers real business outcomes.',
  aboutImg: '/images/our-business/backgrounds/about.webp',
  aboutObjectPosition: 'center',

  painPointsLabel: 'THE CHALLENGE',
  painPointsTitle: 'Is This Your Problem?',
  painPoints: [
    {
      icon: '/images/our-business/adsvar/icons/ads-budget-goes-to-waste.svg',
      title: 'Ads Budget Goes to Waste',
      desc: 'Low-performing spend and broad targeting make it difficult to turn advertising investment into meaningful results.',
    },
    {
      icon: '/images/our-business/icons/limited-production-quality.svg',
      title: 'Limited Production Quality',
      desc: 'Weak campaign assets and inconsistent execution reduce attention, credibility, and conversion potential.',
    },
    {
      icon: '/images/our-business/adsvar/icons/unclear-marketing-performance.svg',
      title: 'Unclear Marketing Performance',
      desc: 'Disconnected reporting makes it hard to understand which channels and campaigns actually drive growth.',
    },
    {
      icon: '/images/our-business/adsvar/icons/growth-that-doesnt-scale.svg',
      title: "Growth That Doesn't Scale",
      desc: 'Marketing may generate short-term activity without building a repeatable acquisition system for long-term growth.',
    },
  ],

  servicesLabel: 'ADSVAR SERVICE',
  servicesTitle: 'Excellence Performance Marketing Solutions',
  servicesColumns: 4,
  services: [
    {
      name: 'Paid Advertising Strategy',
      img: '/images/our-business/adsvar/services/paid-advertising-strategy.webp',
    },
    {
      name: 'Lead Generation & Funnel Optimize',
      img: '/images/our-business/adsvar/services/lead-generation-funnel-optimization.webp',
    },
    {
      name: 'Conversion and Tracking Ads',
      img: '/images/our-business/adsvar/services/conversion-tracking-ads.webp',
    },
    {
      name: 'Campaign Management',
      img: '/images/our-business/adsvar/services/campaign-management.webp',
    },
  ],
  servicesBg: '/images/our-business/backgrounds/services-bg.webp',

  visionLabel: 'OUR VISION',
  visionTextSize: 'large',
  visionQuote:
    'Data-driven advertising that transforms marketing investment into predictable customer acquisition, measurable outcomes, and long-term growth.',
  visionImg: '/images/our-business/backgrounds/hero-network-overlay-69f0f9.webp',

  worksLabel: 'OUR PROJECTS',
  worksTitle: 'Explore Adsvar’s Work',
  featuredWorkIndex: 0,
  works: [],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'personice',
      name: 'Personice',
      img: '/images/our-business/previews/personice.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/previews/loxlive.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/previews/adsvar.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/previews/seveny.webp',
    },
  ],

  ctaTitle: 'Explore More Our Capability with Adsvar',
  ctaDesc:
    'Explore our performance marketing expertise, paid advertising solutions, and data-driven campaign capabilities designed to accelerate measurable business growth.',
  ctaImg: '/images/our-business/backgrounds/cta-bg.webp',
  ctaPrimaryLabel: 'GET IN TOUCH',
  ctaPrimaryHref: '/contact-us',
  ctaSecondaryLabel: 'EXPLORE WORKS',
  ctaSecondaryHref: '/our-works',
},

 {
  id: 7,
  slug: 'personice',
  name: 'Personice',
  shortName: 'Personice',
  category: 'Elite PR & Executive Talent Management',
  tagline: 'Elevating Brands Through Strategic PR',
  logo: '/images/our-business/personice/logo.svg',
  logoWidth: 220,
  logoMaxHeight: 40,
  brandColor: '#0E1534',

  heroImg: '/images/our-business/personice/hero.webp',
  heroOverlayImg: '/images/our-business/backgrounds/hero-network-overlay-62360c.webp',
  heroObjectPosition: 'center 40%',
  aboutDesc:
    'Personice helps organizations strengthen their public image, build executive credibility, and foster meaningful relationships through strategic public relations and talent management.',
  aboutImg: '/images/our-business/personice/about.webp',
  aboutObjectPosition: 'center 42%',

  painPointsLabel: 'THE CHALLENGE',
  painPointsTitle: 'Is This Your Challenge?',
  painPoints: [
    {
      icon: '/images/our-business/personice/icons/limited-brand-visibility.svg',
      title: 'Limited Brand Visibility',
      desc: 'Inconsistent exposure and unclear positioning make it difficult for the brand to earn attention and recognition.',
    },
    {
      icon: '/images/our-business/icons/limited-production-quality.svg',
      title: 'Limited Production Quality',
      desc: 'Weak communication materials and inconsistent execution can reduce credibility across public-facing channels.',
    },
    {
      icon: '/images/our-business/personice/icons/lack-of-executive-presence.svg',
      title: 'Lack of Executive Presence',
      desc: 'Leaders may have limited visibility, authority, or a consistent platform for communicating their expertise.',
    },
    {
      icon: '/images/our-business/personice/icons/disconnected-public-relations.svg',
      title: 'Disconnected Public Relations',
      desc: 'Fragmented media relations and messaging make reputation management reactive rather than strategic.',
    },
  ],

  servicesLabel: 'PERSONICE SERVICE',
  servicesTitle: 'Your Brand Reputation and Communication Solutions',
  servicesColumns: 4,
  services: [
    {
      name: 'Public Relations Strategy',
      img: '/images/our-business/personice/services/public-relations-strategy.webp',
    },
    {
      name: 'Executive Thought Leadership',
      img: '/images/our-business/personice/services/executive-thought-leadership.webp',
    },
    {
      name: 'Talent & Brand Partnerships',
      img: '/images/our-business/personice/services/talent-brand-partnerships.webp',
    },
    {
      name: 'Crisis Management',
      img: '/images/our-business/personice/services/crisis-management.webp',
    },
  ],
  servicesBg: '/images/our-business/backgrounds/services-bg.webp',

  visionLabel: 'OUR VISION',
  visionTextSize: 'large',
  visionQuote:
    'Authentic relationships, credible leadership, and strategic communication that strengthen reputation and create lasting public trust.',
  visionImg: '/images/our-business/backgrounds/hero-network-overlay-62360c.webp',

  worksLabel: 'OUR PROJECTS',
  worksTitle: 'Explore Personice’s Work',
  featuredWorkIndex: 0,
  works: [],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'personice',
      name: 'Personice',
      img: '/images/our-business/previews/personice-a6a6869660.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/previews/loxlive-f0a3422706.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/previews/adsvar-8828f15721.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/previews/seveny-937131ba40.webp',
    },
  ],

  ctaTitle: 'Discover PR & Executive Talent Management with Personice',
  ctaDesc:
    'Explore our public relations expertise, executive branding, and talent management solutions designed to build credibility, strengthen reputation, and create lasting public trust.',
  ctaImg: '/images/our-business/backgrounds/cta-bg-debfb86c03.webp',
  ctaPrimaryLabel: 'GET IN TOUCH',
  ctaPrimaryHref: '/contact-us',
  ctaSecondaryLabel: 'EXPLORE WORKS',
  ctaSecondaryHref: '/our-works',
},
  /* ─────────────────────────────────────────────────────────────────────────
     8. PERSONICE — Strategic PR & Executive Talent
     ───────────────────────────────────────────────────────────────────────── */
{
  id: 8,
  slug: 'seveny',
  name: 'Seveny',
  shortName: 'Seveny',
  category: 'Premium Tech-Inflected Event Management',
  tagline: 'Make Events Leaves a Lasting Impression',
  logo: '/images/our-business/seveny/logo.svg',
  logoWidth: 173,
  logoMaxHeight: 48,
  brandColor: '#101010',

  heroImg: '/images/our-business/seveny/hero.webp',
  heroOverlayImg: '/images/our-business/backgrounds/hero-network-overlay-62360c.webp',
  heroObjectPosition: 'center center',
  aboutDesc:
    'Seveny creates premium corporate events that combine innovative technology, immersive experiences, and seamless event management to deliver meaningful engagement beyond the venue.',
  aboutImg: '/images/our-business/seveny/about.webp',
  aboutObjectPosition: 'center 42%',

  painPointsLabel: 'THE CHALLENGE',
  painPointsTitle: 'Is This Your Problem?',
  painPoints: [
    {
      icon: '/images/our-business/seveny/icons/events-feel-forgettable.svg',
      title: 'Events Feel Forgettable',
      desc: 'Standard formats and predictable execution can make important corporate moments feel ordinary and easy to forget.',
    },
    {
      icon: '/images/our-business/seveny/icons/low-audience-engagement.svg',
      title: 'Low Audience Engagement',
      desc: 'Passive event experiences can reduce participation, emotional connection, and meaningful interaction with the audience.',
    },
    {
      icon: '/images/our-business/seveny/icons/limited-event-insights.svg',
      title: 'Limited Event Insights',
      desc: 'Without reliable measurement, organizers struggle to understand audience behavior, value, and event performance.',
    },
    {
      icon: '/images/our-business/seveny/icons/complex-event-operations.svg',
      title: 'Complex Event Operations',
      desc: 'Multiple vendors, technologies, and production timelines can create avoidable risks and inconsistent execution.',
    },
  ],

  servicesLabel: 'SEVENY SERVICE',
  servicesTitle: 'Modern Experiential Event Solutions',
  servicesColumns: 4,
  services: [
    {
      name: 'Corporate Event Management',
      img: '/images/our-business/seveny/services/corporate-event-management.webp',
    },
    {
      name: 'Interactive Event Technology',
      img: '/images/our-business/seveny/services/interactive-event-technology.webp',
    },
    {
      name: 'Guest Experience Solutions',
      img: '/images/our-business/seveny/services/guest-experience-solutions.webp',
    },
    {
      name: 'Event Analytics & Insights',
      img: '/images/our-business/seveny/services/event-analytics-insights.webp',
    },
  ],
  servicesBg: '/images/our-business/backgrounds/services-bg.webp',

  visionLabel: 'OUR VISION',
  visionTextSize: 'large',
  visionQuote:
    'Corporate events that combine immersive experiences, intelligent technology, and meaningful engagement to create lasting business impact.',
  visionImg: '/images/our-business/backgrounds/hero-network-overlay-62360c.webp',

  worksLabel: 'OUR PROJECTS',
  worksTitle: 'Explore Seveny’s Work',
  featuredWorkIndex: 0,
  works: [],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'personice',
      name: 'Personice',
      img: '/images/our-business/previews/personice-a6a6869660.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/previews/loxlive-f0a3422706.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/previews/adsvar-8828f15721.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/previews/seveny-937131ba40.webp',
    },
  ],

  ctaTitle: "Let's Create Your Next Signature Event",
  ctaDesc:
    'From concept and technology to production and guest experience, Seveny helps organizations create memorable events with clear purpose and lasting business impact.',
  ctaImg: '/images/our-business/backgrounds/cta-bg-debfb86c03.webp',
  ctaPrimaryLabel: 'GET IN TOUCH',
  ctaPrimaryHref: '/contact-us',
  ctaSecondaryLabel: 'EXPLORE WORKS',
  ctaSecondaryHref: '/our-works',
},
];

const LEGACY_TESTIMONIALS_DUMMY_DATA = [
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
    text: "Sangat puas dengan layanan IT Solution dari Arsalynk. Sistem kami sekarang jauh lebih stabil dan cepat. Tim support-nya juga sangat responsif dan professional. Sangat direkomendasikan untuk enterprise!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "BUDI SETIAWAN",
    role: "Chief Technology Officer at GOTO Logistics",
    text: "Arsalynk membantu kami melakukan integrasi sistem logistik nasional secara mulus. Arsitektur cloud mereka sangat tangguh dan andal untuk menangani beban transaksi dengan volume sangat tinggi.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   CASE STUDIES DUMMY DATA
   ───────────────────────────────────────────────────────────────────────── */
const LEGACY_CASE_STUDIES_DUMMY_DATA: CaseStudyArticle[] = [
  {
    id: 1,
    slug: 'delivering-a-seamless-national-badminton-championship-experience',
    title: 'Delivering a Seamless National Badminton Championship Experience',
    category: 'PROJECT STORIES',
    tags: ['PADEL NASIONAL', 'LIVE STREAMING'],
    dateLabel: 'DECEMBER 2025',
    dateValue: '2025-12-20',
    description: 'Organizing a national-scale sporting event requires seamless coordination, high-quality production, and reliable broadcast technology to ensure fans across the country can engage with the tournament.',
    coverImage: '/images/about-us/company-leadership/building-trust.webp',
    coverImageAlt: 'Badminton Match Venue',
    sections: [
      {
        mainTitle: 'Bringing Every Match to Audiences Nationwide',
        paragraphs: [
          'Organizing a national-scale sporting event requires seamless coordination, high-quality production, and reliable broadcast technology to ensure fans across the country can engage with the tournament. We partnered with the organizers to deliver a comprehensive live broadcasting and media production solution.',
          'From ultra-low latency streaming pipelines to high-definition court coverage, our engineered workflow ensured zero interruptions during peak broadcast hours across mobile and desktop viewers.'
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
          alt: 'Broadcast Monitoring'
        }
      },
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Broadcasting Every Match Without Compromise',
        paragraphs: [
          'With multiple courts running simultaneously, our challenge was to ensure that not a single moment of action was missed. We deployed a robust, multi-court streaming architecture with centralized mixing and live graphics integration to provide a premium viewing experience comparable to international sports broadcasts.'
        ]
      },
      {
        eyebrow: 'OUR SOLUTION',
        mainTitle: 'Professional Production From Court to Screen',
        paragraphs: [],
        subsections: [
          {
            subtitle: 'Multi-Camera Production',
            content: 'Each court featured a dedicated multi-camera setup covering wide angles and tight action shots, seamlessly switching to capture player emotions, fast-paced rallies, and crucial referee decisions.'
          },
          {
            subtitle: 'Live Broadcast Direction',
            content: 'Our technical directors and producers worked in real-time to overlay scores, player statistics, and sponsor graphics, ensuring a continuous and highly professional output for the audience watching from home.'
          }
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=1200&auto=format&fit=crop',
          alt: 'Live Broadcast System Monitor'
        }
      },
      {
        eyebrow: 'THE RESULTS',
        mainTitle: 'A Championship Experienced Beyond the Venue',
        paragraphs: [
          'The resulting production achieved record-breaking viewership numbers across online platforms. By delivering a flawless live stream, we helped expand the championship\'s reach far beyond the physical venue, bringing the excitement of national badminton directly to fans\' living rooms.'
        ]
      }
    ]
  },
  {
    id: 2,
    slug: 'how-we-built-an-election-data-tracking-system',
    title: 'How We Built an Election Data Tracking System',
    category: 'INSIGHT',
    tags: ['DATA VISUALIZATION', 'PUBLIC SECTOR', 'REAL-TIME ANALYTICS'],
    dateLabel: 'JANUARY 2024',
    dateValue: '2024-01-15',
    description: 'Discover how real-time data visualization and centralized reporting helped stakeholders monitor election progress with greater accuracy and speed.',
    coverImage: '/images/insight-programs/case-studies/case-election-data.webp',
    coverImageAlt: 'Digital technology and data visualization',
    sections: [
      {
        mainTitle: 'Transforming Public Data Architecture Under High Demand',
        paragraphs: [
          'Elections demand total data integrity, ultra-low latency updates, and total transparency for thousands of simultaneous observers. We engineered a resilient data intake platform capable of parsing millions of incoming tally data points in real time.',
          'By leveraging distributed validation nodes and encrypted sync pipelines, the platform maintained 99.999% uptime during peak transmission windows.'
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
          alt: 'Data analytics dashboard'
        }
      },
      {
        mainTitle: 'Key Architecture & Security Highlights',
        subsections: [
          {
            subtitle: 'Automated Anomaly Detection',
            content: 'Machine-learning routines continuously cross-checked regional vote tallies against historical variances to highlight irregularities for human verification.'
          },
          {
            subtitle: 'Interactive Dashboard Web Client',
            content: 'Media outlets and election officials accessed customizable visualization portals with instant CSV export and live geospatial mapping features.'
          }
        ]
      },
      {
        mainTitle: 'Measurable Impact and Public Trust',
        paragraphs: [
          'The system provided unprecedented visibility, cutting regional reporting delay from days to minutes while securing public confidence through transparent, audit-ready data tracks.'
        ]
      }
    ]
  },
  {
    id: 3,
    slug: 'modernizing-operations-with-enterprise-iot',
    title: 'Modernizing Operations with Enterprise IoT',
    category: 'INSIGHT',
    tags: ['ENTERPRISE IOT', 'SMART INFRASTRUCTURE', 'AUTOMATION'],
    dateLabel: 'DECEMBER 2025',
    dateValue: '2025-12-18',
    description: 'See how connected sensors and system integration transformed fragmented infrastructure into a unified real-time operational ecosystem.',
    coverImage: '/images/insight-programs/case-studies/case-enterprise-iot.webp',
    coverImageAlt: 'Team presenting an enterprise technology solution',
    sections: [
      {
        mainTitle: 'Bridging Legacy Industrial Hardware with Cloud Intelligence',
        paragraphs: [
          'Industrial operations often suffer from operational blind spots caused by disconnected equipment and manual logging. We implemented a unified IoT telemetry network connecting thousands of edge devices to a centralized monitoring system.',
          'Real-time metrics allow facility operators to anticipate equipment degradation, automate energy distribution, and reduce unplanned downtime.'
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
          alt: 'Enterprise IoT system components'
        }
      },
      {
        mainTitle: 'Core Engineering Pillars',
        subsections: [
          {
            subtitle: 'Edge Node Processing',
            content: 'Smart gateway devices process sensor data locally to trigger immediate safety protocols before sending aggregated diagnostics to the cloud.'
          },
          {
            subtitle: 'Predictive Maintenance Models',
            content: 'By analyzing vibration, temperature, and power consumption trends, maintenance teams receive actionable alerts weeks before potential hardware failures.'
          }
        ]
      },
      {
        mainTitle: 'Operational Results',
        paragraphs: [
          'Client facilities achieved a 35% reduction in maintenance costs and eliminated emergency operational shutdowns within six months of deployment.'
        ]
      }
    ]
  },
  {
    id: 4,
    slug: 'how-we-broadcasted-pbpi-sirnas-jawa-tengah',
    title: 'How We Broadcasted PBPI Sirnas Jawa Tengah',
    category: 'PROJECT STORIES',
    tags: ['LIVE STREAMING', 'MULTI-CAMERA', 'SPORTS BROADCAST'],
    dateLabel: 'DECEMBER 2025',
    dateValue: '2025-12-12',
    description: 'A behind-the-scenes look at how LOXLive delivered a seamless multi-camera livestream experience for one of Indonesia’s major badminton events.',
    coverImage: '/images/insight-programs/case-studies/case-live-broadcast.webp',
    coverImageAlt: 'Live multi-camera badminton broadcast monitor',
    sections: [
      {
        mainTitle: 'Delivering Regional Tournament Coverage at Scale',
        paragraphs: [
          'PBPI Sirnas Jawa Tengah brought together top regional athletes across multiple courts. LOXLive delivered continuous live broadcasting across digital channels, ensuring fans didn\'t miss a single set.',
          'Custom graphics packages, automated replay systems, and live commentator audio feeds provided a broadcast quality matching national television standards.'
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1599577180579-2470e8ed3233?q=80&w=1200&auto=format&fit=crop',
          alt: 'Live tournament stream setup'
        }
      },
      {
        mainTitle: 'Key Broadcast Features',
        subsections: [
          {
            subtitle: 'Dynamic Live Scoreboards',
            content: 'Integrated with official referee scoring tablets to update court scores instantly on screen without manual operator delays.'
          },
          {
            subtitle: 'Multi-Platform Distribution',
            content: 'Simulcasted streams to YouTube, Facebook, and custom web portals with adaptive bitrate streaming for low-bandwidth mobile viewers.'
          }
        ]
      }
    ]
  }
];

/* ─────────────────────────────────────────────────────────────────────────
   LEADERSHIP THOUGHTS DUMMY DATA
   ───────────────────────────────────────────────────────────────────────── */
const LEGACY_LEADERSHIP_THOUGHTS_DUMMY_DATA: LeadershipThoughtArticle[] = [
  {
    id: 1,
    slug: 'building-high-performance-teams-starts-with-trust-not-control',
    title: 'Building High-Performance Teams Starts with Trust, Not Control',
    category: 'LEADERSHIP INSIGHTS',
    tags: ['LEADERSHIP', 'CULTURE', 'MANAGEMENT'],
    author: 'Arsalynk Executive Team',
    readTime: '6 min read',
    date: 'July 2026',
    description: 'The most effective leaders don\'t manage from a position of authority — they create environments where trust becomes the operating system of performance.',
    coverImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop',
    coverImageAlt: 'Silhouette of business people',
    sections: [
      {
        mainTitle: 'Trust Begins with Clarity',
        paragraphs: [
          'A high-performance culture is not built on micromanagement or constant surveillance. It is built on trust, which stems from clarity of purpose, alignment of goals, and the empowerment of individuals to make decisions. When leaders focus on defining the "what" and the "why," leaving the "how" to their teams, they unlock unprecedented levels of innovation and ownership.',
          'Trust is not a passive state; it requires active communication, vulnerability from leadership, and a safe environment where taking calculated risks is encouraged rather than penalized.'
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
          alt: 'Team assembling puzzle'
        }
      },
      {
        mainTitle: 'Ownership Over Micromanagement',
        paragraphs: [
          'When individuals are given autonomy, they naturally assume greater responsibility. Leaders must shift their mindset from controlling outcomes to coaching their teams toward them. Providing regular, constructive feedback and removing roadblocks is far more effective than monitoring every step of the process.'
        ]
      },
      {
        mainTitle: 'Mistakes Are Opportunities to Improve',
        subsections: [
          {
            subtitle: 'Psychological Safety',
            content: 'A culture that fears failure is a culture that stagnates. High-performance teams understand that mistakes are an inevitable part of pushing boundaries. By conducting blameless post-mortems and focusing on systemic improvements rather than individual blame, organizations can turn failures into their most valuable learning opportunities.'
          },
          {
            subtitle: 'Building Trust Through Transparency',
            content: 'Transparency in decision-making, financial health, and company strategy eliminates rumors and builds a cohesive unit. When team members understand the broader context of their work, they are better equipped to make autonomous decisions that align with the organization\'s overarching goals.'
          }
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=1200&auto=format&fit=crop',
          alt: 'Leadership strategy session'
        }
      },
      {
        mainTitle: 'Sustaining Excellence Over Time',
        paragraphs: [
          'Ultimately, leadership is about serving those you lead. By cultivating a culture rooted in trust, respect, and continuous learning, leaders can build resilient teams capable of navigating uncertainty and achieving sustained excellence.'
        ]
      }
    ]
  },
  {
    id: 2,
    slug: 'why-we-prioritize-process-before-technology',
    title: 'Why We Prioritize Process Before Technology',
    category: 'STRATEGIC THINKING',
    tags: ['STRATEGY', 'OPERATIONS', 'PROCESS DESIGN'],
    author: 'Arsalynk Executive Team',
    readTime: '5 min read',
    date: 'June 2026',
    description: 'Investing in technology without a solid operational foundation is like building a skyscraper on sand. Here\'s how we help organisations get the order right.',
    coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop',
    coverImageAlt: 'Strategy and workflow meeting',
    sections: [
      {
        mainTitle: 'The Trap of Technological Automation',
        paragraphs: [
          'Organizations frequently fall into the trap of purchasing expensive software tools to solve operational friction. However, automating a flawed process only amplifies inefficiency.',
          'Before writing a single line of code or deploying complex software architectures, leadership must first audit, streamline, and standardize core business workflows.'
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
          alt: 'Business workflow audit'
        }
      },
      {
        mainTitle: 'The Three-Step Operational Framework',
        subsections: [
          {
            subtitle: '1. Map the True Workflow',
            content: 'Document step-by-step how work actually flows through teams, identifying hidden bottlenecks, duplicate approvals, and handoff delays.'
          },
          {
            subtitle: '2. Eliminate Non-Value-Add Steps',
            content: 'Strip away historical procedures that no longer serve a clear customer or business objective.'
          },
          {
            subtitle: '3. Introduce Targeted Automation',
            content: 'Only after the workflow is streamlined do we introduce custom technology solutions to automate repetitive manual tasks.'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    slug: 'lessons-from-scaling-cross-functional-collaboration',
    title: 'Lessons from Scaling Cross-Functional Collaboration',
    category: 'ORGANISATIONAL GROWTH',
    tags: ['GROWTH', 'COLLABORATION', 'SCALING'],
    author: 'Arsalynk Executive Team',
    readTime: '7 min read',
    date: 'June 2026',
    description: 'Scaling a business isn\'t just about hiring more people — it\'s about designing systems that allow teams across disciplines to work as one unified force.',
    coverImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop',
    coverImageAlt: 'Cross functional team collaboration',
    sections: [
      {
        mainTitle: 'Dismantling Departmental Silos',
        paragraphs: [
          'As organizations grow, departments naturally tend to isolate themselves into functional silos. Engineering, design, marketing, and sales start measuring success against isolated KPIs rather than unified outcomes.',
          'True cross-functional alignment requires shared incentives, transparent communication channels, and multidisciplinary project squads.'
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
          alt: 'Team strategy workshop'
        }
      },
      {
        mainTitle: 'Best Practices for Interdisciplinary Teams',
        subsections: [
          {
            subtitle: 'Shared North Star Metrics',
            content: 'Align all team members behind singular business objectives rather than localized departmental goals.'
          },
          {
            subtitle: 'Asynchronous Documentation Culture',
            content: 'Maintain centralized, open-access documentation so information flows freely without requiring endless status meetings.'
          }
        ]
      }
    ]
  }
];

/* Content aligned with the current Arsalynk project portfolio. */
export const CASE_STUDIES_DUMMY_DATA: CaseStudyArticle[] = [
  {
    id: 1,
    slug: 'producing-a-cinematic-portrait-of-padel-arena',
    title: 'Producing a Cinematic Portrait of Padel Arena',
    category: 'MEDIA & CREATIVE',
    tags: ['VIDEO PRODUCTION', 'SPORTS', 'BRAND STORYTELLING'],
    dateLabel: 'JULY 2026',
    dateValue: '2026-07-18',
    description: 'How a focused production system translated the energy, community, and visual identity of Padel Arena into a campaign-ready brand film.',
    coverImage: '/images/projects/video-portret-padel-arena/1.webp',
    coverImageAlt: 'Video portrait production at Padel Arena',
    sections: [
      {
        eyebrow: 'PROJECT CONTEXT',
        mainTitle: 'A Venue with Energy That Static Documentation Could Not Capture',
        paragraphs: [
          'Padel Arena needed a visual asset that could introduce the venue to new audiences while remaining useful across launch communication, social media, and partnership presentations.',
          'The central challenge was balancing the speed of sport with a controlled premium image. Production also had to work around reflective glass, mixed venue lighting, limited reset time, and the natural rhythm of active players.'
        ]
      },
      {
        mainTitle: 'Turning a Sporting Venue into a Brand Story',
        paragraphs: [
          'The brief was not simply to document a venue. The film needed to communicate movement, atmosphere, and the sense of community that makes the arena distinctive.',
          'LoxLive developed a visual treatment that combined athlete portraits, architectural details, and live-action sequences within one consistent narrative.'
        ],
        image: { src: '/images/projects/video-portret-padel-arena/case-study-angle-02.webp', alt: 'Alternate angle of the Padel Arena video production' }
      },
      {
        eyebrow: 'THE APPROACH',
        mainTitle: 'A Production Workflow Built Around Authentic Moments',
        subsections: [
          { subtitle: 'Visual Direction', content: 'Shot composition, lighting, and camera movement were designed to retain the pace of the sport while keeping the brand visible and premium.' },
          { subtitle: 'Campaign-Ready Delivery', content: 'The master footage was structured into adaptable edits for website, social media, and short-form campaign placements.' }
        ]
      },
      {
        eyebrow: 'THE RESULT',
        mainTitle: 'One Visual System Across Multiple Channels',
        paragraphs: ['The final content library gave Padel Arena a coherent visual identity and reusable material for ongoing digital communication.', 'A modular shot library also reduced the need for repeated production: wide venue footage, athlete portraits, equipment details, and short action sequences could be recombined for different campaign lengths and placements.']
      }
    ]
  },
  {
    id: 2,
    slug: 'designing-a-scalable-data-architecture-for-artic-analytica',
    title: 'Designing a Scalable Data Architecture for Artic Analytica',
    category: 'TECHNOLOGY & DATA',
    tags: ['COMPLEX WEB', 'DATA ARCHITECTURE', 'ANALYTICS'],
    dateLabel: 'JUNE 2026',
    dateValue: '2026-06-24',
    description: 'A modular web and data platform that turns complex analytical workflows into a clear, reliable, and extensible digital experience.',
    coverImage: '/images/projects/artic-complex-web/1.webp',
    coverImageAlt: 'Artic Analytica web and data platform',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'One Platform Had to Serve Different Levels of Data Literacy',
        paragraphs: [
          'Prospective clients needed to understand Artic Analytica quickly, while technical stakeholders required enough depth to assess its research and analytical capabilities.',
          'The existing information had different formats, owners, and levels of complexity. Without a structured content model, every new report or service would increase editorial inconsistency and maintenance cost.'
        ]
      },
      {
        mainTitle: 'Making Complex Information Easier to Use',
        paragraphs: ['Artic Analytica required more than a corporate website. Its platform needed to organize research, analytical services, and evolving datasets without creating friction for editors or users.'],
        image: { src: '/images/projects/artic-complex-web/case-study-angle-02.webp', alt: 'Artic analysts reviewing the platform from a collaborative workspace' }
      },
      {
        eyebrow: 'OUR SOLUTION',
        mainTitle: 'A Modular Foundation for Continuous Growth',
        subsections: [
          { subtitle: 'Structured Content Architecture', content: 'Reusable content models keep reports, services, and insights consistent while allowing new formats to be introduced safely.' },
          { subtitle: 'Performance and Governance', content: 'Clear publishing workflows, scalable components, and deliberate data boundaries improve maintainability as the platform grows.' }
        ]
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'A Platform Ready for New Services, Reports, and Audiences',
        paragraphs: ['The modular architecture created a consistent publishing path and made important information easier to find. Artic can now extend the platform without redesigning its foundations for every new analytical offering.', 'The result is a clearer public experience and a more manageable internal system, with content structure, visual components, and governance working as one operating model.']
      }
    ]
  },
  {
    id: 3,
    slug: 'connecting-field-operations-with-myboss-iot',
    title: 'Connecting Field Operations with the MyBoss IoT Control System',
    category: 'TECHNOLOGY',
    tags: ['IOT', 'HARDWARE INTEGRATION', 'OPERATIONS'],
    dateLabel: 'MAY 2026',
    dateValue: '2026-05-30',
    description: 'How integrated hardware, telemetry, and a centralized control layer created clearer operational visibility for MyBoss.',
    coverImage: '/images/projects/myboss-iot-system/1.webp',
    coverImageAlt: 'MyBoss connected IoT system',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Operational Decisions Were Moving Faster Than Field Information',
        paragraphs: ['Location updates, device status, and maintenance information arrived through separate channels. This made it difficult for supervisors to distinguish routine movement from events requiring intervention.', 'The system also needed to remain understandable to daily operators, not only technical administrators, while accommodating unstable connectivity and varied device conditions.']
      },
      {
        mainTitle: 'From Disconnected Devices to Operational Visibility',
        paragraphs: ['Field information had to move reliably from physical devices into one interface. The architecture therefore treated connectivity, device health, and operator clarity as one system rather than separate deliverables.'],
        image: { src: '/images/projects/myboss-iot-system/case-study-angle-02.webp', alt: 'Operations team using the connected tracking system' }
      },
      {
        eyebrow: 'ENGINEERING OUTCOME',
        mainTitle: 'A Control Layer Designed for Real Conditions',
        subsections: [
          { subtitle: 'Resilient Device Communication', content: 'The integration accounts for intermittent connections and preserves the status history needed by operators.' },
          { subtitle: 'Actionable Monitoring', content: 'The dashboard prioritizes alerts and control actions instead of overwhelming users with raw telemetry.' }
        ]
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'A Shared Operational Picture from Field to Control Room',
        paragraphs: ['The connected system consolidated location, status, and exception information into one workflow. Supervisors can identify priority events earlier while field teams receive clearer follow-up instructions.', 'Historical records also support maintenance planning and operational review, turning device telemetry into evidence for continuous improvement.']
      }
    ]
  },
  {
    id: 4,
    slug: 'building-an-integrated-erp-and-marketplace-for-sinau-print',
    title: 'Building an Integrated ERP and Marketplace for Sinau Print',
    category: 'TECHNOLOGY',
    tags: ['ERP', 'MARKETPLACE', 'BUSINESS PROCESS'],
    dateLabel: 'APRIL 2026',
    dateValue: '2026-04-22',
    description: 'A unified platform connecting ordering, production, inventory, and customer transactions across Sinau Print operations.',
    coverImage: '/images/projects/sinau-print-erp/1.webp',
    coverImageAlt: 'Sinau Print ERP and marketplace platform',
    sections: [
      { eyebrow: 'THE CHALLENGE', mainTitle: 'Customer Convenience Had to Connect with Production Reality', paragraphs: ['An online ordering experience could not succeed if pricing, artwork approval, material availability, and production scheduling remained disconnected behind the scenes.', 'The team mapped common products, custom-order exceptions, approval points, and the information required by each role before defining the platform architecture.'] },
      { mainTitle: 'One Workflow from Order to Production', paragraphs: ['The project began by mapping how customer orders moved through pricing, approval, production, and fulfilment. That operational map became the foundation of the platform.'], image: { src: '/images/projects/sinau-print-erp/case-study-angle-02.webp', alt: 'Sinau Print production staff connecting digital orders with printed output' } },
      { eyebrow: 'THE SOLUTION', mainTitle: 'Commerce, ERP, and Production Status in One System', subsections: [{ subtitle: 'Guided Ordering', content: 'Product configuration and upload requirements help customers submit more complete orders before production review.' }, { subtitle: 'Role-Based Operations', content: 'Sales, design, production, and fulfilment teams work from shared records while seeing the controls relevant to their responsibilities.' }] },
      { eyebrow: 'THE RESULT', mainTitle: 'Less Repetition, Better Operational Control', paragraphs: ['Shared records and role-based workflows reduced duplicate entry while giving teams a clearer view of order status, capacity, and inventory.', 'The platform establishes a foundation for measuring turnaround time, recurring exceptions, and product demand as transaction volume grows.'] }
    ]
  },
  {
    id: 5,
    slug: 'turning-operational-data-into-decisions-with-altatic',
    title: 'Turning Operational Data into Decisions with Altatic',
    category: 'DATA & ANALYTICS',
    tags: ['BUSINESS INTELLIGENCE', 'DASHBOARD', 'DECISION SUPPORT'],
    dateLabel: 'MARCH 2026',
    dateValue: '2026-03-19',
    description: 'A decision-support dashboard designed around the questions leaders need answered, not around the volume of data available.',
    coverImage: '/images/projects/altatic-analytic/1.webp',
    coverImageAlt: 'Altatic analytics and intelligence dashboard',
    sections: [
      { eyebrow: 'THE CHALLENGE', mainTitle: 'Different Reports Were Producing Different Versions of Performance', paragraphs: ['Teams had access to data, but definitions, reporting periods, and calculation logic were not always aligned. Leaders spent valuable meeting time reconciling numbers instead of discussing action.', 'The project therefore treated metric governance and decision context as seriously as dashboard design.'] },
      { mainTitle: 'Designing from Decisions Backward', paragraphs: ['The team first identified recurring management decisions and the indicators behind them. Data modelling and interface design were then organized around those practical needs.'], image: { src: '/images/projects/altatic-analytic/case-study-angle-02.webp', alt: 'Leadership team reviewing the Altatic analytical dashboard' } },
      { eyebrow: 'THE SOLUTION', mainTitle: 'Governed Metrics with Progressive Detail', subsections: [{ subtitle: 'Shared Definitions', content: 'Each priority metric has an agreed source, calculation, owner, and refresh cadence.' }, { subtitle: 'From Signal to Detail', content: 'Summary indicators lead users into the relevant operational breakdown without placing every chart on one screen.' }] },
      { eyebrow: 'THE IMPACT', mainTitle: 'A Shared View of Performance', paragraphs: ['Consistent definitions and focused visual hierarchy made the dashboard useful across operational and leadership conversations.', 'Teams can now spend less time validating the report and more time investigating causes, agreeing priorities, and tracking follow-through.'] }
    ]
  },
  {
    id: 6,
    slug: 'reframing-web-media-digital-presence',
    title: 'Reframing Web Media as a Clear and Credible Digital Presence',
    category: 'MEDIA & CREATIVE',
    tags: ['CORPORATE PROFILE', 'CONTENT DESIGN', 'DIGITAL BRAND'],
    dateLabel: 'FEBRUARY 2026',
    dateValue: '2026-02-26',
    description: 'A corporate media platform that balances editorial identity, information clarity, and a maintainable publishing experience.',
    coverImage: '/images/projects/web-media-profile/1.webp',
    coverImageAlt: 'Web Media corporate profile platform',
    sections: [
      { eyebrow: 'THE CHALLENGE', mainTitle: 'Editorial Variety Was Weakening the Overall Identity', paragraphs: ['Different story formats and publishing needs had accumulated without one clear hierarchy. The redesign needed to protect editorial flexibility while giving readers predictable navigation and stronger trust signals.', 'The internal publishing experience was equally important: a visually ambitious front end would not be sustainable if routine updates required technical intervention.'] },
      { mainTitle: 'Clarity Before Decoration', paragraphs: ['The experience was reorganized around audience questions, editorial priorities, and trust signals so visitors could understand the organization quickly.'], image: { src: '/images/projects/web-media-profile/case-study-angle-02.webp', alt: 'Editorial team reviewing responsive Web Media layouts' } },
      { eyebrow: 'THE APPROACH', mainTitle: 'Reusable Patterns for Stories, Profiles, and Updates', subsections: [{ subtitle: 'Responsive Story Hierarchy', content: 'Editorial priority remains clear from large desktop displays to compact mobile screens.' }, { subtitle: 'Maintainable Publishing', content: 'Structured fields and reusable components let editors create varied pages without breaking the design system.' }] },
      { eyebrow: 'DESIGN OUTCOME', mainTitle: 'A Flexible Editorial System', paragraphs: ['Reusable layouts and clear content hierarchy give the internal team room to publish consistently without sacrificing the visual identity.', 'The new system makes the publication feel coherent across story types while keeping future content expansion manageable.'] }
    ]
  },
  {
    id: 7,
    slug: 'evaluating-gik-as-a-semarang-creative-tourism-destination',
    title: 'Evaluating GIK as a Creative Tourism and Local Retail Destination',
    category: 'DATA & RESEARCH',
    tags: ['FEASIBILITY STUDY', 'CREATIVE ECONOMY', 'TOURISM'],
    dateLabel: 'JANUARY 2026',
    dateValue: '2026-01-28',
    description: 'A feasibility study combining market evidence, visitor behaviour, spatial potential, and an operating model for Semarang Creative Industry Building.',
    coverImage: '/images/projects/kajian-kelayakan-gik/1.webp',
    coverImageAlt: 'Creative industry destination feasibility study',
    sections: [
      { eyebrow: 'THE RESEARCH QUESTION', mainTitle: 'Could GIK Become a Destination, Not Only a Building?', paragraphs: ['The study examined whether GIK could attract repeat visits by connecting Semarang creative products, culinary experiences, events, and a distinctive sense of place.', 'A credible answer required more than demand estimation. The team considered visitor segments, tenant readiness, accessibility, surrounding destinations, spatial programming, revenue logic, and institutional capacity.'] },
      { mainTitle: 'Testing the Opportunity from Multiple Angles', paragraphs: ['The study assessed demand, local product potential, visitor journeys, competitive context, and commercial assumptions instead of relying on one headline indicator.'], image: { src: '/images/projects/kajian-kelayakan-gik/case-study-angle-02.webp', alt: 'GIK research team observing visitor flow in Semarang' } },
      { eyebrow: 'METHOD', mainTitle: 'Combining Market, Place, and Operating Evidence', subsections: [{ subtitle: 'Demand and Visitor Behaviour', content: 'Field observation and audience perspectives clarified visit triggers, barriers, expected experiences, and likely spending patterns.' }, { subtitle: 'Operating Scenarios', content: 'Alternative tenant mixes, programming models, and management assumptions were compared against practical implementation requirements.' }] },
      { eyebrow: 'RESEARCH OUTPUT', mainTitle: 'Evidence That Supports the Next Decision', paragraphs: ['The final recommendations translated findings into development priorities, operational scenarios, and measurable considerations for implementation.', 'Instead of presenting one rigid forecast, the study gives decision-makers assumptions to monitor and staged choices that can be adjusted as evidence develops.'] }
    ]
  },
  {
    id: 8,
    slug: 'designing-a-behaviour-change-guide-for-stunting-risk-reduction',
    title: 'Designing a Behaviour Change Guide for Stunting Risk Reduction',
    category: 'DATA & RESEARCH',
    tags: ['SOCIAL RESEARCH', 'BEHAVIOUR CHANGE', 'PUBLIC HEALTH'],
    dateLabel: 'DECEMBER 2025',
    dateValue: '2025-12-16',
    description: 'Turning research and field realities into a practical guide for family assistance at neighbourhood level.',
    coverImage: '/images/projects/panduan-perubahan-perilaku-stunting/1.webp',
    coverImageAlt: 'Behaviour change assistance guide',
    sections: [
      { eyebrow: 'THE CHALLENGE', mainTitle: 'Information Alone Does Not Automatically Change Household Practice', paragraphs: ['Family assistants work with different levels of knowledge, confidence, resources, and support. A useful guide therefore had to help facilitators identify barriers and choose an appropriate conversation, not merely repeat health messages.', 'The content also needed to stay consistent with programme objectives while using examples and language that felt relevant at neighbourhood level.'] },
      { mainTitle: 'From Policy Language to Daily Practice', paragraphs: ['The guide had to remain evidence-based while being understandable and useful during real conversations with families. Content was structured around specific behaviours, barriers, and supporting actions.'], image: { src: '/images/projects/panduan-perubahan-perilaku-stunting/case-study-angle-02.webp', alt: 'Facilitator demonstrating balanced nutrition in a neighbourhood session' } },
      { eyebrow: 'CONTENT DESIGN', mainTitle: 'Guidance Built Around Conversation and Follow-Up', subsections: [{ subtitle: 'Behaviour-Based Modules', content: 'Each module connects a desired practice with common barriers, discussion prompts, examples, and realistic next steps.' }, { subtitle: 'Facilitator Support', content: 'Visual cues and simple sequencing make it easier to prepare a session, record commitments, and revisit progress.' }] },
      { eyebrow: 'THE RESULT', mainTitle: 'A Consistent Tool for Local Assistance', paragraphs: ['Clear prompts, scenarios, and follow-up steps help facilitators communicate consistently while adapting to each family context.', 'The guide creates a shared method for assistance without removing the facilitator judgment needed to respond respectfully to different household conditions.'] }
    ]
  },
  {
    id: 9,
    slug: 'designing-a-practical-referee-training-program-for-semarang',
    title: 'Designing a Practical Referee Training Program for Semarang',
    category: 'MEDIA & CREATIVE',
    tags: ['TRAINING DESIGN', 'SPORTS', 'LEARNING EXPERIENCE'],
    dateLabel: 'NOVEMBER 2025',
    dateValue: '2025-11-21',
    description: 'A structured learning experience that connects regulations, match scenarios, assessment, and confident decision-making.',
    coverImage: '/images/projects/desain-pelatihan-wasit-semarang/1.webp',
    coverImageAlt: 'Referee training design in Semarang',
    sections: [
      { eyebrow: 'THE CHALLENGE', mainTitle: 'Knowing the Rulebook Is Different from Making a Decision in Real Time', paragraphs: ['Referees must interpret movement, positioning, contact, timing, and communication under pressure. A lecture-heavy programme would not reveal whether participants could apply the rules consistently.', 'The training design therefore needed a progressive path from shared interpretation to observed practice and structured feedback.'] },
      { mainTitle: 'Training for Decisions, Not Memorisation', paragraphs: ['The program was designed around realistic match situations so participants could practise interpretation, communication, and judgment under pressure.'], image: { src: '/images/projects/desain-pelatihan-wasit-semarang/case-study-angle-02.webp', alt: 'Referee trainees reviewing match positioning with an instructor' } },
      { eyebrow: 'LEARNING DESIGN', mainTitle: 'A Repeatable Path from Theory to Evaluation', subsections: [{ subtitle: 'Scenario-Based Practice', content: 'Participants analyse realistic incidents, select a decision, explain the rule basis, and practise the correct signal.' }, { subtitle: 'Observable Assessment', content: 'Consistent rubrics cover positioning, accuracy, communication, composure, and post-match reflection.' }] },
      { eyebrow: 'THE OUTCOME', mainTitle: 'More Consistent Decisions and a Reusable Training Format', paragraphs: ['Modular materials, scenario exercises, and consistent assessment criteria created a format that can support future training cohorts.', 'Facilitators can identify specific development needs and give feedback grounded in observable behaviour rather than general impressions.'] }
    ]
  }
];

export const LEADERSHIP_THOUGHTS_DUMMY_DATA: LeadershipThoughtArticle[] = [
  {
    id: 1,
    slug: 'why-transformation-must-start-with-the-real-workflow',
    title: 'Why Transformation Must Start with the Real Workflow',
    category: 'OPERATIONAL LEADERSHIP',
    tags: ['TRANSFORMATION', 'PROCESS DESIGN', 'TECHNOLOGY'],
    author: 'Arsalynk Executive Team',
    readTime: '6 min read',
    date: 'July 2026',
    description: 'Lessons from building integrated platforms: sustainable transformation begins by understanding how work truly moves before selecting the technology.',
    coverImage: '/images/insight-programs/leadership-thoughts/real-workflow.webp',
    coverImageAlt: 'Cross-functional leaders mapping a real operational workflow',
    sections: [
      { eyebrow: 'THE CENTRAL IDEA', mainTitle: 'Technology Cannot Repair an Undefined Process', paragraphs: ['The Sinau Print platform reinforced a recurring lesson: software becomes useful only after teams agree on ownership, handoffs, exceptions, and the meaning of completion.', 'Leaders create momentum by making the real workflow visible, including the informal steps that rarely appear in standard operating procedures. A process map is valuable not because it looks orderly, but because it makes disagreement discussable.'], image: { src: '/images/projects/sinau-print-erp/case-study-angle-02.webp', alt: 'Digital ordering connected with the production workflow' } },
      { eyebrow: 'WHY TRANSFORMATIONS STALL', mainTitle: 'Organisations Often Automate the Version of Work They Say They Have', paragraphs: ['Formal procedures describe the intended path. Daily work also contains workarounds, judgment calls, missing information, and dependencies carried by experienced individuals.', 'When those realities remain hidden, automation hardens ambiguity into the system. Teams then blame the tool for decisions that leadership never clarified.'] },
      { eyebrow: 'A PRACTICAL FRAMEWORK', mainTitle: 'Lead with the Operating Model', subsections: [{ subtitle: 'Observe Before Standardising', content: 'Follow real work across roles and include exceptions, rework, waiting time, and informal coordination.' }, { subtitle: 'Clarify Ownership', content: 'Every critical decision and handoff needs an accountable role, an expected response, and a visible escalation path.' }, { subtitle: 'Simplify Before Automating', content: 'Remove redundant approval and duplicate entry before translating the workflow into software.' }, { subtitle: 'Measure Behaviour, Not Installation', content: 'Success is reflected in adoption, cycle time, error reduction, and decision quality—not merely whether the platform launched.' }] },
      { eyebrow: 'LEADERSHIP QUESTIONS', mainTitle: 'What Leaders Should Ask Before Approving the Build', paragraphs: ['Where does work wait, and what information is usually missing at that point? Which exceptions require judgment rather than automation? Who owns the outcome across departmental boundaries?', 'These questions move transformation from a technology purchase toward an explicit redesign of how the organisation operates.'] }
    ]
  },
  {
    id: 2,
    slug: 'data-leadership-is-the-discipline-of-defining-what-matters',
    title: 'Data Leadership Is the Discipline of Defining What Matters',
    category: 'DATA LEADERSHIP',
    tags: ['DATA STRATEGY', 'DECISION MAKING', 'GOVERNANCE'],
    author: 'Artic Analytica Leadership',
    readTime: '5 min read',
    date: 'June 2026',
    description: 'Dashboards do not create alignment by themselves. Leaders must establish shared definitions and connect every metric to a decision.',
    coverImage: '/images/insight-programs/leadership-thoughts/data-leadership.webp',
    coverImageAlt: 'Leadership team debating the meaning of performance metrics',
    sections: [
      { eyebrow: 'THE CENTRAL IDEA', mainTitle: 'More Data Is Not the Same as More Clarity', paragraphs: ['The Altatic dashboard work showed that the strongest analytical systems begin with management questions. When indicators have no decision attached, they add noise rather than confidence.', 'A dashboard can display precision while hiding uncertainty in definitions, source quality, or timing. Data leadership begins when executives treat those assumptions as part of the decision.'], image: { src: '/images/projects/altatic-analytic/case-study-angle-02.webp', alt: 'Executive team reviewing governed performance indicators' } },
      { eyebrow: 'THE LEADERSHIP RISK', mainTitle: 'Metric Proliferation Can Replace Accountability', paragraphs: ['When every team brings its own measure of success, meetings become negotiations about whose number is correct. The discussion moves away from causes, choices, and ownership.', 'Leaders should resist adding indicators until the organisation agrees what a metric means, which decision it supports, and who is responsible for responding.'] },
      { eyebrow: 'A GOVERNANCE DISCIPLINE', mainTitle: 'Create a Shared Language for Performance', subsections: [{ subtitle: 'Start with Decisions', content: 'Define the recurring decision first, then identify the minimum evidence needed to make it responsibly.' }, { subtitle: 'Assign Metric Owners', content: 'Ownership includes definition, source, quality checks, refresh cadence, and explanation of material changes.' }, { subtitle: 'Show Context and Trade-Offs', content: 'Targets should be read alongside capacity, quality, risk, and customer impact rather than in isolation.' }, { subtitle: 'Review the Metric Itself', content: 'Retire indicators that no longer influence action or that encourage behaviour contrary to the intended outcome.' }] },
      { eyebrow: 'LEADERSHIP QUESTIONS', mainTitle: 'Can the Team Explain What Happens When This Number Changes?', paragraphs: ['If a metric rises or falls, leaders should know which hypotheses to test, which role investigates, and what range justifies intervention.', 'That clarity is the difference between a dashboard that reports the past and a management system that improves decisions.'] }
    ]
  },
  {
    id: 3,
    slug: 'designing-organisations-that-can-operate-through-uncertainty',
    title: 'Designing Organisations That Can Operate Through Uncertainty',
    category: 'RESILIENT LEADERSHIP',
    tags: ['RESILIENCE', 'IOT', 'OPERATIONAL VISIBILITY'],
    author: 'Kaluna Technology Leadership',
    readTime: '7 min read',
    date: 'May 2026',
    description: 'What connected operations teach leaders about visibility, escalation, and building systems that remain dependable when conditions change.',
    coverImage: '/images/insight-programs/leadership-thoughts/resilient-organisation.webp',
    coverImageAlt: 'Operations leader coordinating a calm resilience response',
    sections: [
      { eyebrow: 'THE CENTRAL IDEA', mainTitle: 'Visibility Is a Leadership Capability', paragraphs: ['MyBoss demonstrated that resilience depends on timely signals and clear escalation paths. The same principle applies to organisations: people need to know what changed, what matters, and who can act.', 'Visibility is not constant surveillance. It is a deliberately shared picture of current conditions, emerging risk, and decision ownership.'], image: { src: '/images/projects/myboss-iot-system/case-study-angle-02.webp', alt: 'Connected operational visibility from field to control room' } },
      { eyebrow: 'BEYOND BUSINESS CONTINUITY', mainTitle: 'Resilience Is Built in Ordinary Operating Decisions', paragraphs: ['Organisations often prepare for dramatic incidents while tolerating daily single points of failure: one expert, one spreadsheet, one approval path, or one channel of communication.', 'The strongest resilience work identifies these dependencies before disruption and gives teams a safe way to operate when the preferred process is unavailable.'] },
      { eyebrow: 'DESIGN PRINCIPLES', mainTitle: 'Design for Degraded Conditions', subsections: [{ subtitle: 'Preserve Critical Context', content: 'Teams should retain enough information to make sound decisions when the ideal data flow is interrupted.' }, { subtitle: 'Make Escalation Explicit', content: 'Visible thresholds for intervention prevent both delayed action and unnecessary executive control.' }, { subtitle: 'Distribute Decision Capability', content: 'People closest to the situation need bounded authority, clear priorities, and access to the same operating picture.' }, { subtitle: 'Practise Recovery', content: 'Simulations reveal unclear roles and hidden dependencies more effectively than documents alone.' }] },
      { eyebrow: 'LEADERSHIP QUESTIONS', mainTitle: 'What Stops Working When One Person or System Is Unavailable?', paragraphs: ['A useful resilience review traces the effect of absence across customers, operations, information, and authority.', 'The objective is not to eliminate every disruption. It is to ensure the organisation can recognise change, coordinate action, and recover without losing trust.'] }
    ]
  },
  {
    id: 4,
    slug: 'credible-strategy-requires-evidence-and-a-path-to-action',
    title: 'Credible Strategy Requires Evidence and a Path to Action',
    category: 'STRATEGIC THINKING',
    tags: ['FEASIBILITY', 'RESEARCH', 'STRATEGY'],
    author: 'Artic Analytica Leadership',
    readTime: '6 min read',
    date: 'April 2026',
    description: 'A feasibility study is valuable only when evidence, assumptions, and implementation choices are connected in one decision framework.',
    coverImage: '/images/insight-programs/leadership-thoughts/credible-strategy.webp',
    coverImageAlt: 'Decision makers comparing evidence and development scenarios',
    sections: [
      { eyebrow: 'THE CENTRAL IDEA', mainTitle: 'Move Beyond the Single Forecast', paragraphs: ['The GIK study required market demand, visitor behaviour, spatial opportunity, and operating assumptions to be considered together. Strategy becomes credible when leaders can see how those factors interact.', 'A forecast is one possible expression of assumptions. Leadership responsibility is to understand those assumptions, decide which risks are acceptable, and create a way to learn before committing irreversibly.'], image: { src: '/images/projects/kajian-kelayakan-gik/case-study-angle-02.webp', alt: 'Field evidence supporting a Semarang development strategy' } },
      { eyebrow: 'THE FALSE COMFORT OF CERTAINTY', mainTitle: 'A Precise Number Can Still Be a Weak Decision', paragraphs: ['Long-term initiatives combine demand uncertainty, institutional capacity, financial constraints, and changing public behaviour. Compressing these into one return figure may hide the choices that matter most.', 'A more useful strategy compares scenarios, names critical assumptions, and identifies what evidence should trigger a different path.'] },
      { eyebrow: 'FROM STUDY TO ACTION', mainTitle: 'Recommendations Need Owners and Signals', subsections: [{ subtitle: 'Separate Facts from Assumptions', content: 'Make it clear which claims come from observed evidence and which depend on future behaviour.' }, { subtitle: 'Stage Irreversible Commitments', content: 'Use pilots and phased investment to learn before locking in the most expensive decisions.' }, { subtitle: 'Name Decision Owners', content: 'Every recommendation should identify who acts, who provides input, and who resolves disagreement.' }, { subtitle: 'Define Adjustment Signals', content: 'Agree in advance which changes in demand, cost, capacity, or policy require the strategy to be revisited.' }] },
      { eyebrow: 'LEADERSHIP QUESTIONS', mainTitle: 'What Would Need to Be True for This Strategy to Work?', paragraphs: ['This question exposes dependencies that optimistic plans often leave implicit. It also makes disagreement productive because teams can test assumptions rather than defend preferences.', 'Credible strategy is not a promise that the future will follow the plan. It is a disciplined way to act, learn, and adjust while protecting the intended outcome.'] }
    ]
  },
  {
    id: 5,
    slug: 'communication-design-is-part-of-public-impact',
    title: 'Communication Design Is Part of Public Impact',
    category: 'SOCIAL IMPACT',
    tags: ['BEHAVIOUR CHANGE', 'COMMUNICATION', 'PUBLIC SERVICE'],
    author: 'Artic Analytica Leadership',
    readTime: '5 min read',
    date: 'March 2026',
    description: 'Evidence creates impact only when people can understand it, trust it, and use it within the realities of everyday life.',
    coverImage: '/images/insight-programs/leadership-thoughts/communication-design.webp',
    coverImageAlt: 'Frontline facilitators and families co-designing communication material',
    sections: [
      { eyebrow: 'THE CENTRAL IDEA', mainTitle: 'Accuracy and Accessibility Must Coexist', paragraphs: ['The stunting risk reduction guide showed why public communication cannot be treated as the final formatting step. Language, sequence, examples, and facilitator prompts shape whether knowledge becomes action.', 'Leaders are accountable not only for whether information is correct, but whether it can be understood and used by people facing different constraints.'], image: { src: '/images/projects/panduan-perubahan-perilaku-stunting/case-study-angle-02.webp', alt: 'Practical family nutrition communication in a neighbourhood setting' } },
      { eyebrow: 'THE IMPLEMENTATION GAP', mainTitle: 'Messages Fail When They Ignore the Conditions of Action', paragraphs: ['People may understand a recommendation and still be unable to follow it because of cost, time, household dynamics, confidence, or access to support.', 'Communication that assumes knowledge is the only barrier can unintentionally place responsibility on the audience while leaving structural obstacles untouched.'] },
      { eyebrow: 'A CO-DESIGN PRACTICE', mainTitle: 'Design with the People Who Deliver and Receive the Message', subsections: [{ subtitle: 'Listen for Real Barriers', content: 'Frontline conversations reveal the moments where guidance becomes confusing, impractical, or socially difficult.' }, { subtitle: 'Use Concrete Choices', content: 'Examples, scenarios, and small next steps are easier to apply than abstract instruction.' }, { subtitle: 'Support the Facilitator', content: 'Prompts, visual sequences, and follow-up tools help maintain consistency without scripting every interaction.' }, { subtitle: 'Build Feedback into Delivery', content: 'Leaders need a route for local learning to improve programme content, resources, and policy decisions.' }] },
      { eyebrow: 'LEADERSHIP QUESTIONS', mainTitle: 'Whose Reality Is Missing from the Message?', paragraphs: ['Before approving public communication, leaders should ask who tested it, under what conditions, and what action the audience is realistically expected to take next.', 'Impact improves when communication is treated as part of service design rather than as a final campaign layer.'] }
    ]
  },
  {
    id: 6,
    slug: 'brand-trust-is-built-through-consistent-experience',
    title: 'Brand Trust Is Built Through Consistent Experience',
    category: 'BRAND LEADERSHIP',
    tags: ['BRAND', 'MEDIA', 'EXPERIENCE'],
    author: 'Arsalynk Executive Team',
    readTime: '4 min read',
    date: 'February 2026',
    description: 'From corporate platforms to sports films, trust grows when every audience touchpoint expresses the same promise with clarity.',
    coverImage: '/images/insight-programs/leadership-thoughts/brand-trust.webp',
    coverImageAlt: 'Brand, video, and digital leads reviewing a consistent experience',
    sections: [
      { eyebrow: 'THE CENTRAL IDEA', mainTitle: 'Consistency Is More Than Visual Repetition', paragraphs: ['The Padel Arena and Web Media projects demonstrate that brand consistency is the alignment of story, interface, service expectations, and delivery quality.', 'Audiences do not experience a brand guideline. They experience promises across moments: an article, a proposal, a platform, a support interaction, or a delivered event. Trust grows when those moments reinforce one another.'], image: { src: '/images/projects/web-media-profile/case-study-angle-02.webp', alt: 'Editorial team reviewing a consistent responsive brand experience' } },
      { eyebrow: 'THE LEADERSHIP RESPONSIBILITY', mainTitle: 'Brand Drift Is Often an Operating-System Problem', paragraphs: ['Inconsistency is rarely caused only by poor design judgment. Teams may lack shared priorities, reusable assets, clear approval boundaries, or enough time to interpret abstract guidance.', 'Leadership should make consistency easier to produce by connecting brand principles to everyday tools, roles, and decisions.'] },
      { eyebrow: 'A SUSTAINABLE SYSTEM', mainTitle: 'Build Governance That Supports Good Judgment', subsections: [{ subtitle: 'Define the Promise', content: 'A small number of clear experience principles helps teams evaluate choices beyond visual appearance.' }, { subtitle: 'Provide Reusable Foundations', content: 'Components, templates, voice guidance, and asset libraries reduce unnecessary reinvention.' }, { subtitle: 'Set Decision Boundaries', content: 'Teams need to know what they may adapt independently and what requires broader review.' }, { subtitle: 'Audit the Full Experience', content: 'Review customer journeys and delivery moments, not only campaign outputs, for alignment with the promise.' }] },
      { eyebrow: 'LEADERSHIP QUESTIONS', mainTitle: 'Would the Audience Recognise the Same Organisation at Every Touchpoint?', paragraphs: ['The question is not whether every output looks identical. It is whether tone, clarity, quality, and behaviour express a coherent promise.', 'Strong brand leadership creates enough structure for consistency and enough freedom for teams to respond intelligently to context.'] }
    ]
  }
];

void LEGACY_CASE_STUDIES_DUMMY_DATA;
void LEGACY_LEADERSHIP_THOUGHTS_DUMMY_DATA;
void LEGACY_TESTIMONIALS_DUMMY_DATA;

export const TESTIMONIALS_DUMMY_DATA = [
  {
    id: 1,
    name: 'ENTERPRISE OPERATIONS LEAD',
    role: 'ERP Transformation Program',
    text: 'Arsalynk brought finance, inventory, and operational reporting into one connected ERP workflow. Our teams now work from the same information, approvals move faster, and management has a clearer view of daily performance.',
    avatar: '/images/projects/sinau-print-erp/1.webp',
  },
  {
    id: 2,
    name: 'TECHNOLOGY DIRECTOR',
    role: 'Connected Infrastructure Program',
    text: 'The IoT implementation gave us reliable visibility into field assets and system conditions. Alerts are clearer, operational response is faster, and maintenance decisions are now supported by real-time evidence.',
    avatar: '/images/projects/myboss-iot-system/1.webp',
  },
  {
    id: 3,
    name: 'FINANCE & DATA LEAD',
    role: 'Enterprise Intelligence Program',
    text: 'Automated reconciliation and governed dashboards reduced repetitive reporting work while giving leadership a consistent source of truth for financial and operational decisions.',
    avatar: '/images/projects/altatic-analytic/1.webp',
  },
];
