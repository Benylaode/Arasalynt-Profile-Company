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
    phone: '+62 878-6276-6846',
    email: 'rian@arsalynk.com',
    address:
      'Menara Rajawali Lt.26, Mega Kuningan, South Jakarta, Indonesia 12950',
    company: 'Arsalynk',
  },
];

export const HERO_SLIDES_DUMMY_DATA: HeroSlide[] = [
  {
    id: 'unified-enterprise-ecosystem',
    headline: 'Arsalynk\nEnterprise Technology',
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
      href: '/our-solution',
    },
    secondaryCta: {
      label: 'ABOUT US',
      href: '/about-us',
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
      label: 'EXPLORE ERP SOLUTION',
      href: '/our-solution/enterprise-solution',
    },
    secondaryCta: {
      label: 'ECOSYSTEM PHILOSOPHY',
      href: '/about-us/ecosystem-philosophy',
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
      label: 'EXPLORE IOT SOLUTION',
      href: '/our-solution/smart-iot-system',
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
  category: 'Web Engineering & System Integration',
  tagline: 'Building Digital Platforms That Scale',
  logo: '/images/our-business/kaluna-technology/logo.svg',
  brandColor: '#1A3E9E',

  heroImg: '/images/our-business/kaluna-technology/hero.webp',
  aboutDesc:
    'Kaluna Technology is the web engineering and digital solutions unit within the Arsalynk ecosystem, building high-performance corporate websites, e-commerce platforms, customer portals, custom web applications, and integrated business systems for modern companies.',
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
  ctaPrimaryHref: 'https://www.kalunatechnology.com/',
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
  ctaSecondaryHref: '/our-solution',
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
  ctaSecondaryHref: '/our-solution',
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
  ctaSecondaryHref: '/our-solution',
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
  ctaSecondaryHref: '/our-solution',
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
  ctaSecondaryHref: '/our-solution',
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
  ctaSecondaryHref: '/our-solution',
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
    text: "Extremely satisfied with Arsalynk's enterprise IT solutions. Our systems are now significantly more stable, faster, and reliable. The engineering and support team is proactive and highly professional. Strongly recommended for enterprise operations!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "BUDI SETIAWAN",
    role: "Chief Technology Officer at GOTO Logistics",
    text: "Arsalynk helped us execute a seamless national logistics system integration. Their cloud and telematics architecture is exceptionally robust, handling immense transaction volumes without downtime.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   CASE STUDIES DUMMY DATA (6 Articles aligned 1-to-1 with Our Solution)
   ───────────────────────────────────────────────────────────────────────── */
export const CASE_STUDIES_DUMMY_DATA: CaseStudyArticle[] = [
  /* ── 1. MyBOS — Fleet Tracking Platform Foundation ── */
  {
    id: 1,
    slug: 'mybos-fondasi-pelacakan-armada',
    title: 'How MyBOS Engineered a Fleet Tracking Foundation Logging Every Access and Rejecting Unauthorized Tokens in ±7 Milliseconds',
    category: 'SMART IOT SYSTEM',
    tags: ['FLEET PLATFORM', 'ACCESS CONTROL', 'AUDIT TRAIL', 'DRIVER API', 'LOGISTICS IOT'],
    dateLabel: 'NOVEMBER 2026',
    dateValue: '2026-11-06',
    description: 'MyBOS case study: fleet tracking platform foundation featuring role-based access, secured field APIs, and verifiable audit trails for every access event.',
    coverImage: '/images/case-studies/mybos/cover.png',
    coverImageAlt: 'MyBOS Admin Log dashboard displaying access history with user identities, timestamps, and platform origin',
    sections: [
      {
        eyebrow: 'EXECUTIVE SUMMARY',
        mainTitle: 'Identity, Access Governance, and Audit Trails Before Fleet Deployment',
        paragraphs: [
          'Client & Scenario: MyBOS (Marka Logistik / BSP Tracking Web), an enterprise fleet tracking platform for logistics operations. This case study focuses on the foundation phase: identity governance, role permissions, field application APIs, and audit trails.',
          'Problem Focus: Before streaming live vehicle telemetry, every stakeholder and field application accessing fleet data must possess an isolated identity, defined permissions, and verifiable access logs.',
          'Product Architecture: Web admin console (Laravel 9, Vue 3, Inertia.js) and JWT-authenticated v1 API for field mobile apps, featuring role-based access control, request rate limiting, and segregated audit logging for admin and API channels.',
          'Implementation Timeline: Foundation phase finalized and recorded in the repository on May 18, 2024. Fleet modules (vehicles, GPS telemetry, route tracking, delivery orders) follow in the subsequent deployment phase.',
        ],
        metrics: [
          {
            value: '±7 ms',
            label: 'Token Rejection',
            detail: 'Requests without tokens (403) or corrupted tokens (401) rejected in ±7 ms (Lab Tested)',
          },
          {
            value: '81 ms',
            label: 'API Login Median',
            detail: 'Remains under 0.6s even under 10 concurrent client authentications (Lab Tested)',
          },
          {
            value: '94%',
            label: 'Trace Time Saved',
            detail: 'Incident lookup reduced from ±47 mins to ±2.6 mins via centralized audit logs (Simulation)',
          },
        ],
      },
      {
        eyebrow: 'THE PROBLEM SCENARIO',
        mainTitle: 'When Fleet Telemetry Is Exposed Before Securing the Gateway',
        paragraphs: [
          'Logistics operations involve dispatchers, office administrators, operations managers, and field drivers. Without telemetry, engine health and fuel efficiency remain difficult to monitor. However, before streaming vehicle location and operational data into the system, an essential question must be answered: who is authorized to access what, and how can every transaction be definitively proven?',
          'Without that structural foundation, newly built tracking systems inherit legacy vulnerabilities: shared credentials across teams, untracked permission modifications, and insecure driver applications where credential leaks expose critical fleet assets indefinitely.',
        ],
        subsections: [
          {
            subtitle: 'Shared Accounts Across Teams',
            content: 'Dispatchers and administrators frequently shared single logins for convenience. Every database mutation was recorded under identical credentials, preventing accountability when erroneous data was entered.',
          },
          {
            subtitle: 'Untracked Permission Changes',
            content: 'Access privileges were modified via informal chat requests. Audit histories were scattered across messaging apps, requiring hours of manual searching during operational disputes.',
          },
          {
            subtitle: 'Insecure Field Applications',
            content: 'Driver mobile apps require dedicated API endpoints separated from the admin panel. Without expiring tokens and rate limits, compromised credentials allowed unrestricted data exfiltration.',
          },
        ],
        image: {
          src: '/images/case-studies/mybos/workflow-comparison.png',
          alt: 'Workflow Comparison Diagram: Shared unlogged access transformed into verified role-based identities with persistent audit trails',
        },
      },
      {
        eyebrow: 'PRODUCT SOLUTION',
        mainTitle: 'Unifying Admin Panels and Field Apps in a Single Audited Access Layer',
        paragraphs: [
          'MyBOS was architected in a deliberate order: the security and audit access layer was completed before building out fleet telemetry modules. Instead of bolting on security after GPS coordinates begin streaming, subsequent tracking features seamlessly inherit existing authentication, role boundaries, and audit logging.',
          'The platform establishes two isolated entry doors: a web admin panel for dispatchers and managers, and an API v1 for driver mobile apps. Both stream telemetry into segregated audit logs.',
        ],
        subsections: [
          {
            subtitle: 'A. Field App API with Expiring JWT & Rate Limiting',
            content: 'When mobile apps authenticate via API, credentials generate a 60-minute JWT token with refresh capabilities up to 14 days. Dedicated JWT middleware rejects unauthenticated requests (HTTP 403) and corrupted tokens (HTTP 401) in ±7 ms, while enforcing a strict 60 requests/minute rate limit per user or IP address.',
          },
          {
            subtitle: 'B. Granular User Roles & Instant Permission Inheritance',
            content: 'Administrators define permissions per role (dashboard viewing, admin logs, API logs, user management). Any adjustment to role permissions immediately updates all associated users and logs an independent audit record.',
          },
          {
            subtitle: 'C. Segregated Audit Trails for Web and API Traffic',
            content: 'Every authentication, logout, and permission change writes an immutable audit record capturing user identity, timestamp, IP address, user agent, URL, platform origin, status code, and request/response payloads across Admin Log and API Log interfaces.',
          },
        ],
        image: {
          src: '/images/case-studies/mybos/token-flow.png',
          alt: 'Field Application Token Lifecycle: Expiring JWT validation, refresh cycle, and rate limiting',
        },
      },
      {
        eyebrow: 'TECHNICAL ARCHITECTURE',
        mainTitle: 'An Isolated, Rate-Limited, and Verifiable Architecture',
        paragraphs: [
          'To ensure subsequent fleet tracking modules can be integrated without refactoring authentication, the MyBOS foundation was engineered on robust enterprise components:',
          'Isolated Web and Mobile Interfaces: Web admin console built on Laravel 9, Vue 3, Inertia.js, and Tailwind CSS using session security. Mobile driver apps consume API v1 authenticated via JWT guards. The codebase incorporates 39 defined routes: 28 admin routes, 6 API routes, and 5 auxiliary handlers.',
          'Enforced Boundaries via Roles & Rate Limiting: Permissions managed via Spatie Laravel-Permission, while API endpoints enforce a 60 requests/minute rate limit per IP or authenticated user.',
          'Comprehensive Access Auditing: Powered by Laravel-Auditing with custom resolvers for platform origin (admin_dashboard vs api), request/response payloads, and HTTP status codes.',
          'Flexible Deployment Portability: Built-in SQLite support and precompiled Vite frontend assets enable local deployment for testing before migration to production server databases.',
        ],
        image: {
          src: '/images/case-studies/mybos/technical-architecture.png',
          alt: 'Technical Architecture & Data Flow Diagram connecting admin console and field driver apps',
        },
      },
      {
        eyebrow: 'IMPLEMENTATION ROADMAP',
        mainTitle: 'Foundation First, Fleet Modules Second',
        paragraphs: [
          'The repository establishes the completed foundation phase committed on May 18, 2024. Fleet modules (vehicles, GPS tracking, dispatch routing, digital proof of delivery) follow in the subsequent deployment stage.',
        ],
        table: {
          caption: 'MyBOS Engineering Roadmap: Foundation Stage vs Fleet Tracking Modules',
          headers: ['Phase', 'Status', 'Deliverables', 'Validation Method'],
          rows: [
            [
              'Platform Foundation',
              'Completed (May 18, 2024)',
              'Web & API auth, password reset, user/role management, Admin Log & API Log, API rate limiting',
              'Local Lab Benchmarking (Nov 6, 2026): response times, token rejection, rate limit, audit trails',
            ],
            [
              'Fleet Operations Module',
              'Next Phase',
              'Vehicle master data, live GPS tracking, delivery orders, driver notifications',
              'Scheduled for upcoming release',
            ],
          ],
        },
      },
      {
        eyebrow: 'BENCHMARK & RESULTS',
        mainTitle: 'Lab Performance Benchmarks and Measurable Operational Impact',
        paragraphs: [
          'Benchmarked on November 6, 2026 (Laravel server with 4 workers, PHP 8.3, SQLite sample dataset) alongside a 10,000-iteration Monte Carlo simulation for access trace time:',
        ],
        table: {
          caption: 'Performance Verification & Operational Impact Matrix',
          headers: ['Indicator', 'Before MyBOS', 'With MyBOS', 'Validation Result', 'Verification Status'],
          rows: [
            ['Missing Token Rejection', '—', 'HTTP 403, median 7.0 ms', '25 of 25 rejected', 'Lab Tested'],
            ['Corrupted Token Rejection', '—', 'HTTP 401, median 6.5 ms', '25 of 25 rejected', 'Lab Tested'],
            ['API Login (Sequential)', '—', 'Median 81 ms, P95 89 ms', '50 of 50 successful', 'Lab Tested'],
            ['API Login (10 Concurrent Clients)', '—', 'Median 396 ms, Max 561 ms', '50 of 50 successful', 'Lab Tested'],
            ['API Rate Limiting', '—', '60 requests/minute', '61st request rejected (HTTP 429)', 'Lab Tested'],
            ['API Login Audit Logging', '—', 'Every login captured', 'Platform "api" populated', 'Lab Tested'],
            ['Access Incident Lookup Time', '±47 mins (chat & history)', '±2.6 mins (Admin/API Log)', '±94% time reduction', 'Simulation'],
          ],
        },
        image: {
          src: '/images/case-studies/mybos/response-times.png',
          alt: 'Response times across request types: Token rejections complete in ±7ms while concurrent logins remain under 0.6s',
        },
        subsections: [
          {
            subtitle: 'Sub-7 Millisecond Rejection Speed',
            content: 'JWT middleware inspects tokens before requests touch business logic or database queries. Unauthorized requests are stopped almost as fast as serving static assets.',
          },
          {
            subtitle: '81 ms Median Login Under Concurrency',
            content: 'Password hashing deliberately consumes compute cycles for brute-force resistance. When 10 clients authenticate simultaneously, requests queue across 4 worker threads, completing under 0.6 seconds with 100% success.',
          },
          {
            subtitle: '94% Time Reduction in Incident Lookups',
            content: 'Replacing informal team chat queries (typically 15 to 60 minutes) with searchable Admin Log and API Log interfaces allows instant verification of who accessed or modified permissions.',
          },
          {
            subtitle: 'Measurement Scope & Limitations',
            content: 'Evaluated on the platform foundation. Live fleet telemetry (GPS hardware, route telematics) belongs to the upcoming release. Lab benchmarks reflect local server performance and will vary on production clusters.',
          },
        ],
      },
      {
        eyebrow: 'TESTING METHODOLOGY',
        mainTitle: 'Benchmarking Environment and Monte Carlo Simulation Model',
        paragraphs: [
          'Benchmark metrics measure total round-trip duration from request transmission to response receipt on the test host (excluding external network latency).',
          'Access Incident Simulation: 10,000 iterations modeled via triangular distribution (min / typical / max in minutes). Manual workflow: asking team in chat (5/15/60 min), checking message history (5/10/30 min), confirming with stakeholder (2/5/15 min) — median 47.4 mins. MyBOS workflow: searching Admin/API Log (0.5/1/3 min), reviewing event modal (0.5/1/2 min) — median 2.6 mins, yielding 94% median time savings.',
        ],
        image: {
          src: '/images/case-studies/mybos/trace-time-simulation.png',
          alt: 'Monte Carlo simulation comparing access lookup duration before and after MyBOS audit implementation',
        },
      },
    ],
  },

  /* ── 2. Marka Plus — Enterprise ERP AI Assistant ── */
  {
    id: 2,
    slug: 'marka-plus-asisten-ai-erp',
    title: 'How Marka Plus Transforms Everyday Questions into ERP Data Insights, Passing 15 of 15 Accuracy and Access Control Test Scenarios',
    category: 'DATA & AI INTEGRATION',
    tags: ['ERP AI ASSISTANT', 'ENTERPRISE AI', 'ERP CHATBOT', 'MARKAPLUS', 'ACCESS CONTROL', 'DATA PIPELINE'],
    dateLabel: 'NOVEMBER 2026',
    dateValue: '2026-11-06',
    description: 'Marka Plus case study: an enterprise AI assistant embedded in MarkaSuite querying ERP data within role permissions, passing 15 of 15 test scenarios.',
    coverImage: '/images/case-studies/markaplus/cover.png',
    coverImageAlt: 'Marka Plus AI Assistant console presenting verified tabular responses directly from ERP project data',
    sections: [
      {
        eyebrow: 'EXECUTIVE SUMMARY',
        mainTitle: 'Verified Enterprise AI Assistant Operating Within ERP Access Boundaries',
        paragraphs: [
          'Client & Scenario: Embedded AI assistant within MarkaSuite (Marka+ ERP), engineered by Arsalynk for internal operations and enterprise clients utilizing MarkaSuite.',
          'Problem Focus: Project status questions and operational software guidance continually backlogged project manager chat channels, while off-the-shelf chatbots carry substantial data leak risks when connected to core enterprise records.',
          'Product Solution: Marka Plus—an enterprise AI assistant that maps conversational language to 202 ERP data sources, queries data strictly within signed user role permissions, and mandates explicit confirmation before executing data mutations.',
          'Implementation Timeline: ±6 weeks (September 15 – October 28, 2026) across four structured phases, each verified by rigorous test suites.',
        ],
        metrics: [
          {
            value: '15 / 15',
            label: 'Test Scenarios Passed',
            detail: 'Accuracy and role-based access control scenarios backed by repeatable execution proofs (Lab Tested)',
          },
          {
            value: '0 / 1',
            label: 'Data Mutation Integrity',
            detail: 'Cancelled action proposals produce 0 writes; approved confirmations execute exactly 1 verified write (Lab Tested)',
          },
          {
            value: '79%',
            label: 'PM Time Saved',
            detail: 'PM operational time per status inquiry: ±13 mins → ±2.8 mins (Monte Carlo Simulation)',
          },
        ],
      },
      {
        eyebrow: 'THE PROBLEM SCENARIO',
        mainTitle: 'When Every Data Inquiry Depends on a Single Individual',
        paragraphs: [
          'Once Arsalynk unified projects, tasks, requests, and financials into MarkaSuite, organizational data became complete. The resulting bottleneck was data accessibility: MarkaSuite expanded rapidly, logging 533 commits in its first three months across 202 data sources and 15 business modules. Not all staff memorized where specific reports resided.',
          'Prior to Marka Plus, obtaining answers required querying key personnel who understood database structures intimately, creating cascading operational delays:',
        ],
        subsections: [
          {
            subtitle: 'Queued Inquiries in PM Chats',
            content: 'Team members asked "how many pending weekly tasks do I have?", while leadership inquired "which projects are actively progressing?". Project managers repeatedly interrupted core work to filter ERP grids, calculate aggregates, and reply manually.',
          },
          {
            subtitle: 'Documentation Outpaced by Rapid Releases',
            content: 'Operating procedures evolved with each release. For example, Weekly Targets required PM sign-off before becoming eligible as Daily Task baselines. Staff following outdated guides faced system rejections, cycling questions back to the PM.',
          },
          {
            subtitle: 'Overconfident AI & Security Concerns',
            content: 'Generic AI chatbots connected to enterprise databases frequently hallucinate numbers or expose cross-departmental records. According to the HSBC Voices of Treasury 2025 survey, 48% of Indonesian corporate respondents cite cybersecurity as their primary barrier to automation and AI adoption.',
          },
        ],
        image: {
          src: '/images/case-studies/markaplus/workflow-comparison.png',
          alt: 'Workflow Comparison Diagram: Transitioning from PM-dependent chat bottlenecks to controlled, role-scoped ERP AI answers',
        },
      },
      {
        eyebrow: 'PRODUCT SOLUTION',
        mainTitle: 'Bridging Natural Language and ERP Data via a Controlled Execution Pipeline',
        paragraphs: [
          'Marka Plus was architected to enable natural language inquiries without granting generative AI arbitrary database access. Instead of letting the language model construct raw SQL, the model solely interprets intent. The ERP platform validates permissions and fetches records via certified application APIs.',
          'Execution Pipeline: User Prompt → Business Intent & Entity Extraction → Module & Data Source Mapping → Tables & Columns → Validated API Read → Grounded Tabular Response.',
        ],
        subsections: [
          {
            subtitle: 'A. Natural Language Mapped to 202 Verified Data Sources',
            content: 'Prompts match against a business glossary to compile a JSON read plan: data source, columns, filters, and row bounds. Backend guards validate against the 202 data source catalog, ensuring follow-up queries retain task and ownership context.',
          },
          {
            subtitle: 'B. 120-Second Signed Authority Snapshots',
            content: 'Conversations initialize a signed 120-second snapshot of tenant, user, active role, module permissions, and project scopes. Read-only database views restrict execution to 100 rows, 30 columns, 256 KiB, and a 5-second timeout.',
          },
          {
            subtitle: 'C. 15-Minute Action Tickets with Readback Verification',
            content: 'Action proposals (e.g., creating Daily Tasks) issue 15-minute action tickets displaying change summaries. Upon confirmation, tickets claim atomically, execute via official ERP APIs, and perform readback validation before assigning a "Verified" label.',
          },
          {
            subtitle: 'D. Knowledge Engine Synchronized to Latest Codebase',
            content: 'The Knowledge Engine crawls Prisma schemas, TypeScript code, and frontend views, scoring documentation confidence 0–1. When guidance is outdated or scores below 0.6, Marka Plus halts answers with transparent disclaimers.',
          },
        ],
        image: {
          src: '/images/case-studies/markaplus/question-to-table.png',
          alt: 'Question to Verified Tabular Response: Natural language translated into bounded, catalog-validated ERP records',
        },
      },
      {
        eyebrow: 'TECHNICAL ARCHITECTURE',
        mainTitle: 'An Isolated, Verified, and Auditable Architecture',
        paragraphs: [
          'To ensure AI capabilities remain secure without exposing corporate data structures, Marka Plus is built upon four protective technical pillars:',
          'Data-Level Isolation: Dedicated database accounts possess only CONNECT, USAGE, and SELECT privileges restricted to five specialized views (ai_projects, ai_project_tasks, ai_project_financials, ai_company_financials, ai_crm_deals). Every view enforces tenant company column filtering, with zero raw SQL endpoints.',
          'Catalog Verification & MCP Protocol: MCP Streamable HTTP (2025-11-25 protocol) provides typed tool endpoints for discovering permitted data sources and schemas. The 202-source catalog is compiled from code and hash-verified in CI, breaking builds on stale definitions.',
          'Cryptographic HMAC Callbacks: External callbacks require 13-component HMAC signatures (method, path, timestamp, nonce, payload hash, tenant, user, role, tool, request ID, company, permissions, project scope) with instant nonce replay rejection and AES-256-GCM encrypted secrets.',
          'Model Provider Decoupling: Large language models (via OpenRouter) strictly interpret natural language. Structured querying, permission enforcement, MCP tooling, and write actions execute autonomously without AI provider dependencies.',
        ],
        image: {
          src: '/images/case-studies/markaplus/technical-architecture.png',
          alt: 'Technical Architecture & Data Flow Diagram: Language models plan queries while ERP runtime validates permissions and executes APIs',
        },
      },
      {
        eyebrow: 'IMPLEMENTATION ROADMAP',
        mainTitle: 'Four Structured Phases Across Six Weeks',
        paragraphs: [
          'Built directly on production-grade MarkaSuite code, allowing immediate validation against live business roles, project records, and operational workflows. 34 dedicated test suites were implemented during development.',
        ],
        table: {
          caption: 'Marka Plus Engineering Roadmap & Validation Gates',
          headers: ['Phase', 'Timeline', 'Deliverables', 'Validation Method'],
          rows: [
            [
              'Initial Integration',
              'Sep 15–21, 2026',
              'AI request tables, tenant provisioning, read-only ai_* views',
              'Database migration verification gates',
            ],
            [
              'Contract V2 & Native Runtime',
              'Sep 21–30, 2026',
              'Signed authority snapshots, view alignment, native ERP runtime execution',
              'Signature suites, tenant isolation, runtime V2, HMAC V2, control plane',
            ],
            [
              'Audit & Remediation',
              'Oct 2–9, 2026',
              '15-scenario audit, remediation of 6 finding categories, CI catalog locking',
              '16 baseline suites, workflow regression tests, isolated PostgreSQL queries, 2 browser suites',
            ],
            [
              'Knowledge Engine & MCP',
              'Oct 15–28, 2026',
              'Code crawler, confidence scoring, answer suppression, MCP connection refactoring',
              'Knowledge Engine suite, natural language interpretation, schema linking',
            ],
          ],
        },
      },
      {
        eyebrow: 'BENCHMARK & RESULTS',
        mainTitle: 'Audit Verification, Security Integrity, and Operational Efficiency',
        paragraphs: [
          'Benchmarked across October 2 and October 7, 2026 development audit reports (local runtime, isolated PostgreSQL database, Edge browser) alongside a 10,000-iteration Monte Carlo simulation for project manager inquiry time:',
        ],
        table: {
          caption: 'Marka Plus Benchmark Verification Matrix',
          headers: ['Indicator', 'Before Marka Plus', 'With Marka Plus', 'Validation Result', 'Verification Status'],
          rows: [
            ['Accuracy & Role Access Scenarios with Execution Proof', '—', '15 of 15', '100% Passed', 'Lab Tested'],
            ['Baseline Test Suites (Permissions, Injections, Provider Failures)', '—', '16 suites', '100% Passed', 'Lab Tested'],
            ['Audit Findings on Workflow Divergence', '6 categories', '0 remaining on tested paths', 'Locked via regression tests', 'Lab Tested'],
            ['Data Mutation on Cancelled / Confirmed Proposals', '—', '0 / Exactly 1', 'As designed', 'Lab Tested'],
            ['Active Project Count: Assistant vs Direct Database Query', '—', 'Identical', 'Direct read test passed', 'Lab Tested'],
            ['Catalog Coverage of Business Data Sources', '—', '202 data sources, 15 modules', 'CI hash verified', 'Actual Codebase'],
            ['PM Work Time per Status Inquiry', '±13 minutes', '±2.8 minutes', '±79% time saved', 'Simulation'],
            ['Reclaimed PM Working Hours per Week', '—', '±3.8 hours (2.4–5.8)', 'Modeled for 10–40 inquiries/wk', 'Projection'],
          ],
        },
        image: {
          src: '/images/case-studies/markaplus/pm-time-simulation.png',
          alt: 'Monte Carlo simulation: PM working time per status inquiry drops from median ±13 mins to ±2.8 mins (saving ±79%)',
        },
        subsections: [
          {
            subtitle: '15 of 15 Test Scenarios Verified',
            content: 'Covering general information, role queries, single-table lookups, relational data, filters, empty datasets, access denials, record mutations, invalid inputs, system failure recovery, and long-tail responses.',
          },
          {
            subtitle: 'Six Audit Findings Remediated',
            content: 'The October 7 audit deliberately surfaced edge cases (such as Weekly inquiries querying Daily Tasks). All six findings were reproduced with failing tests, repaired, and locked into regression suites.',
          },
          {
            subtitle: '0 and 1 Atomic Data Mutations',
            content: 'Browser test verification confirmed that cancelling proposals produces zero database writes, while confirming claims tickets atomically and produces exactly one verified write.',
          },
          {
            subtitle: '79% PM Time Saved (3.8 Hours/Week)',
            content: 'Simulation models 10,000 iterations factoring escalation rates of 10–35%. Eliminating manual ERP navigation reclaims 2.4 to 5.8 working hours per week per project manager.',
          },
        ],
      },
      {
        eyebrow: 'TESTING METHODOLOGY',
        mainTitle: 'Testing Methodology and Monte Carlo Simulation Model',
        paragraphs: [
          'Indicator Definitions: Execution proof denotes automated, repeatable tests passing within the October 2, 2026 audit framework. PM inquiry time measures minutes spent reading, querying, synthesizing, and responding (excluding requester queue delays).',
          'Monte Carlo Simulation (10,000 iterations, triangular distribution): Manual workflow modeled reading inquiries (0.5/1/2 min), searching ERP/spreadsheets (2/5/10 min), computing aggregates (1/3/8 min), and writing replies (1/2/4 min)—yielding median 13.1 minutes. Marka Plus scales manual time by realistic PM escalation rates (10%/20%/35%)—yielding median 2.8 minutes and 79% median time savings.',
        ],
        image: {
          src: '/images/case-studies/markaplus/role-scope-comparison.png',
          alt: 'Role Scope Comparison: Marka Plus inherits data boundaries from the active user role, rejecting forged tenant headers',
        },
      },
    ],
  },

  /* ── 3. MarkaSuite — Enterprise ERP Architecture ── */
  {
    id: 3,
    slug: 'markasuite-erp-terpadu-arsalynk',
    title: 'How MarkaSuite Slashed Executive Dashboard Load Times by 89% in a Unified ERP for Projects, Finance, and CRM',
    category: 'ENTERPRISE SOLUTION',
    tags: ['INTEGRATED ERP', 'ENTERPRISE ERP', 'PROJECT GOVERNANCE', 'FINANCIAL CONTROL', 'MARKASUITE', 'AI INTEGRATION'],
    dateLabel: 'NOVEMBER 2026',
    dateValue: '2026-11-06',
    description: 'MarkaSuite case study: Arsalynk’s unified enterprise ERP for projects, finance, and CRM, delivering 89% faster executive dashboard loads in lab benchmarks.',
    coverImage: '/images/case-studies/marka/cover.png',
    coverImageAlt: 'MarkaSuite executive dashboard displaying project progress, financial summaries, and Request Cards on a single unified canvas',
    sections: [
      {
        eyebrow: 'EXECUTIVE SUMMARY',
        mainTitle: 'Unified ERP for Projects, Finance, and CRM with Sub-Second Response Times',
        paragraphs: [
          'Client & Scenario: Internal implementation at PT Sinergi Muda Arsa (Arsalynk), an enterprise technology services firm managing concurrent multi-client engineering engagements.',
          'Problem Focus: Project delivery milestones, disbursement requests, and financial ledgers were dispersed across spreadsheets and chat channels, forcing executive leadership to rely on delayed manual recaps.',
          'Product Solution: MarkaSuite (Marka+ ERP), integrating Project & Task Governance, Multi-tier Requests, Finance & Accounting, Sales CRM, and Executive Reporting, coupled with an embedded role-scoped AI assistant.',
          'Implementation Timeline: ±3 months (August 3 – November 5, 2026) across four structured phases, each validated by automated testing suites.',
        ],
        metrics: [
          {
            value: '89%',
            label: 'Load Time Slashed',
            detail: 'Login to complete executive dashboard: 18.0s → 2.0s (Lab Tested)',
          },
          {
            value: '95%',
            label: 'Sub-Second Reads',
            detail: '742 of 783 read endpoints respond under 1 second with a 715 ms median (Lab Tested)',
          },
          {
            value: '78%',
            label: 'Recap Time Saved',
            detail: 'Weekly progress recap per project: ±88 mins → ±20 mins (Monte Carlo Simulation)',
          },
        ],
      },
      {
        eyebrow: 'THE PROBLEM SCENARIO',
        mainTitle: 'When Project Reporting Relies on Whoever Has Time to Fill Out Spreadsheets',
        paragraphs: [
          'Arsalynk executes multi-sector digital transformation engagements. Each engagement involves project managers, engineering personnel, financial controllers, and executive directors, with multiple projects progressing concurrently.',
          'Prior to MarkaSuite, daily operations relied on an ad-hoc combination of Google Sheets, Telegram bots, and fragmented messaging threads:',
        ],
        subsections: [
          {
            subtitle: 'Progress Forever Lagging by a Day',
            content: 'PMs continually chased team members across chats before manually calculating progress percentages. Spreadsheets only reflected the most recent message, leaving leadership blind to emerging roadblocks.',
          },
          {
            subtitle: 'Untracked Disbursement Requests',
            content: 'Project funding and expense claims were approved verbally or via informal chat messages. Finance teams were forced to reconstruct audit trails retrospectively when compiling accountability reports (LPJ).',
          },
          {
            subtitle: 'Hand-Assembled Financial Ledgers',
            content: 'Project costs, client invoices, and vendor payouts were recorded in disjointed files. According to a Lark report cited by JPNN, 48% of enterprise workers switch apps hourly and 58% lose >=3 hours weekly to coordination friction.',
          },
        ],
        image: {
          src: '/images/case-studies/marka/workflow-comparison.png',
          alt: 'Workflow Comparison Diagram: Transitioning from fragmented spreadsheets and chat to a unified single source of truth in MarkaSuite',
        },
      },
      {
        eyebrow: 'PRODUCT SOLUTION',
        mainTitle: 'Connecting Field Operations, Management, and Finance in a Single Source of Truth',
        paragraphs: [
          'MarkaSuite was designed to bridge the operational gap between team execution, management oversight, and financial governance. Every operational activity is captured as an immutable transaction within a unified multi-tenant database.',
          'Views automatically adapt to active organizational roles: Staff, Project Manager, Operations Manager, Finance, or Executive Director.',
        ],
        subsections: [
          {
            subtitle: 'A. Automated Checklist-Driven Progress Aggregation',
            content: 'Staff log Daily Tasks by completing deliverables and flagging impediments. Backend engines compute percentage progress directly from verified checklist outputs, rolling aggregates upward to Weekly Targets and project milestones without manual data entry.',
          },
          {
            subtitle: 'B. Request Cards with Multi-Tier Approval Workflows',
            content: 'Expense and resource requests route through role-governed reviewer queues. Approvals display as real-time Request Cards, allowing Finance to execute disbursements that generate automated journal entries linked directly to final LPJ reconciliations.',
          },
          {
            subtitle: 'C. Transactional Financial Control with Maker-Checker Discipline',
            content: 'Project costs post to Work in Progress (WIP) accounts via verified journals. Invoices issue under predefined tax configurations, while vendor payouts require 3-way matching. Strict segregation of duties prevents makers from approving their own entries.',
          },
          {
            subtitle: 'D. Role-Scoped AI Assistant Embedded into Dashboards',
            content: 'Users query enterprise records in natural language. Each session utilizes signed 120-second authority snapshots to read strictly from 5 sanitized database views (100-row / 5-second limits), requiring explicit human confirmation before executing write proposals.',
          },
        ],
        image: {
          src: '/images/case-studies/marka/daily-task-progress.png',
          alt: 'Daily Task and Project Progress Interface: Output-driven completion metrics eliminating manual progress estimation',
        },
      },
      {
        eyebrow: 'TECHNICAL ARCHITECTURE',
        mainTitle: 'A Fast, Isolated, and Auditable Architecture',
        paragraphs: [
          'To ensure concurrent multi-role responsiveness without data bleed, MarkaSuite was engineered upon resilient architectural foundations:',
          'Modern Modular Core: Node.js, Express, and TypeScript with Prisma ORM atop PostgreSQL (Supabase), complemented by a Next.js App Router frontend. 2,616 registered API endpoints serve 21 backend modules.',
          'Query Projection & Multi-Tier Caching: Dashboard components compile via unified single-query JSON projections rather than dozens of waterfall requests. Read-through caching by tenant, user, role, and module slashes repeated dashboard loads from 1,033 ms to 118 ms.',
          'Four-Layer Security Model: JWT authentication, active role boundaries, company-level module entitlement, and project-level row filtering. Forged tenant headers reject with HTTP 403, and unauthorized requests abort in-browser.',
          'Strict Auditability: Every write mutation requires an Idempotency-Key preventing duplicate transactions, accompanied by X-Request-ID telemetry and sanitized audit logging.',
        ],
        image: {
          src: '/images/case-studies/marka/technical-architecture.png',
          alt: 'Technical Architecture & Data Flow Diagram: Multi-tenant Express API gateway enforcing 4-layer access controls across PostgreSQL',
        },
      },
      {
        eyebrow: 'IMPLEMENTATION ROADMAP',
        mainTitle: 'Four Phases Across Three Months',
        paragraphs: [
          'Developed over ±3 months across 533 recorded commits. Each phase commenced only after its predecessor passed automated validation suites, preventing legacy technical debt from propagating.',
        ],
        table: {
          caption: 'MarkaSuite Engineering Milestones & Validation Gates',
          headers: ['Phase', 'Timeline', 'Deliverables', 'Validation Method'],
          rows: [
            [
              'Foundation & Data Modeling',
              'Aug 3–25, 2026',
              'Django prototype and entity data models for projects, CRM, finance, inventory, manufacturing',
              'Unit testing per business module',
            ],
            [
              'Architecture Migration',
              'Aug 26 – early Sep 2026',
              'Backend migration to Node.js/Express/TypeScript with Prisma; Next.js frontend rebuild',
              'TypeScript compilation across stacks; 2,616 endpoint route inventory',
            ],
            [
              'Hardening & Performance Tuning',
              'Sep 2026',
              'Tiered access controls, transactional finance workflows, dashboard cache, production launch Sep 22–24',
              '783 read endpoints, 1,833 non-destructive write tests, 9 login scenarios, Q11 guardrails',
            ],
            [
              'AI Assistant & UX Refinement',
              'Sep – Nov 2026',
              'ERP-grounded AI assistant, Oct 7 chatbot audit, role-tailored dashboard refactoring',
              '16 chatbot test suites, 2 browser automation suites (desktop & mobile)',
            ],
          ],
        },
      },
      {
        eyebrow: 'BENCHMARK & RESULTS',
        mainTitle: 'Load Time Reductions, Route Throughput, and Weekly Efficiency Benchmarks',
        paragraphs: [
          'Benchmarked across the production Express and PostgreSQL runtime in September 2026 compared against the initial build, alongside a 10,000-iteration Monte Carlo simulation for weekly project coordination:',
        ],
        table: {
          caption: 'MarkaSuite Performance Verification & Efficiency Matrix',
          headers: ['Operational Indicator', 'Initial Build', 'With MarkaSuite', 'Difference', 'Verification Status'],
          rows: [
            ['Login to Complete Executive Dashboard', '18.0 seconds', '2.0 seconds', '89% Reduction', 'Lab Tested'],
            ['Login Endpoint Response (9 Scenarios)', '7.5–11.4 seconds', '0.35–1.3 seconds', '9 of 9 < 3 seconds', 'Lab Tested'],
            ['Trial Balance Financial Statement Generation', '4.6 seconds', '1.3 seconds', '72% Reduction', 'Lab Tested'],
            ['Repeated Dashboard Load (Cached)', '1,033 ms', '118 ms', '±9x Faster', 'Lab Tested'],
            ['Request Card Activity Feed (Cached)', '1,388 ms', '394 ms', '±3.5x Faster', 'Lab Tested'],
            ['Read Endpoints Responding Under 1s', '—', '742 of 783 (95%)', 'Median 715 ms', 'Lab Tested'],
            ['Non-Destructive Write Tests Passed', '—', '1,833 of 1,833', 'Zero business records mutated', 'Lab Tested'],
            ['Weekly Progress Recap per Project', '±88 minutes (sheets + chat)', '±20 minutes (dashboard)', '±78% Time Saved', 'Simulation'],
          ],
        },
        image: {
          src: '/images/case-studies/marka/load-time-benchmarks.png',
          alt: 'Load Time Optimization Benchmark: Executive dashboard dropped from 18s to 2s, and trial balance generation slashed by 72%',
        },
        subsections: [
          {
            subtitle: 'Executive Dashboard: 18s to 2s',
            content: 'Consolidating 12 project queries and 13 financial calls into unified, tenant-filtered JSON projections eliminated round-trip latency and removed artificial delays.',
          },
          {
            subtitle: 'Trial Balance: 4.6s to 1.3s',
            content: 'Migrated debit and credit balance computations to aggregate database queries, eliminating sequential account initialization.',
          },
          {
            subtitle: 'Weekly Coordination: 78% Time Saved',
            content: 'Automated Daily Task check-offs eliminated manual chasing and spreadsheet reconciliation, shifting PM focus to unblocking tasks.',
          },
          {
            subtitle: 'Sub-33ms Database Downtime Handling',
            content: 'Engineered explicit HTTP 503 error handlers responding in ±33 ms during connection drops, allowing instant differentiation from application faults.',
          },
        ],
      },
      {
        eyebrow: 'TESTING METHODOLOGY',
        mainTitle: 'Testing Methodology and Monte Carlo Simulation Model',
        paragraphs: [
          'Indicator Definitions: Complete dashboard load measures duration from login button click until all dashboard cards and Request feeds render completely in Next.js production builds. Write route verification utilizes Prisma firewalls preventing actual database mutation.',
          'Monte Carlo Simulation (10,000 iterations, triangular distribution): Manual workflow: chasing updates (15/25/45 min), reconciling spreadsheets (10/20/40 min), calculating progress (10/20/30 min), answering leadership inquiries (5/15/30 min)—median 88 mins. MarkaSuite workflow: reviewing dashboard (5/10/20 min), following up impediments (2/5/10 min), leadership follow-ups (0/2/5 min)—median 20 mins, achieving 78% median time savings.',
        ],
        image: {
          src: '/images/case-studies/marka/weekly-recap-simulation.png',
          alt: 'Monte Carlo Simulation: Weekly project progress recap drops from median ±88 mins to ±20 mins (saving ±78%)',
        },
      },
    ],
  },
  /* ── 4. AdsVar — Performance Marketing Agency Single-Page CRM ── */
  {
    "id": 4,
    "slug": "adsvar-website-crm-terintegrasi",
    "title": "How AdsVar Connected a Single Offer Page to CRM: 30 of 30 Test Leads Ingested with Cryptographically Valid Signatures",
    "category": "DIGITAL DEVELOPMENT",
    "tags": [
        "DIGITAL DEVELOPMENT",
        "LANDING PAGE",
        "CRM INTEGRATION",
        "LEAD MANAGEMENT",
        "ADSVAR",
        "ARSALYNK"
    ],
    "dateLabel": "NOVEMBER 2026",
    "dateValue": "2026-11-10",
    "description": "AdsVar case study: high-performance single-page agency website dispatching every lead, live chat, and support ticket directly to MarkaSuite CRM with cryptographically signed payloads.",
    "coverImage": "/images/case-studies/adsvar/cover.png",
    "coverImageAlt": "AdsVar main landing page showcasing performance advertising solutions, track catalogs, and consultation workflows",
    "sections": [
        {
            "eyebrow": "EXECUTIVE SUMMARY (AT-A-GLANCE)",
            "mainTitle": "Bridging a High-Velocity Offer Page Directly to Enterprise CRM",
            "paragraphs": [
                "Client & Scenario: AdsVar, a performance marketing agency within the Arsalynk group managing Meta Ads, Google Ads, TikTok Ads, TikTok Shop GMV Max, and Shopee Ads for enterprise brands and SMEs.",
                "Problem Focus: Prospective clients arrived across disconnected channels. Critical inquiry context (ad network, tier, budget) arrived fragmented and required manual copy-pasting before sales teams could respond.",
                "Product Solution: A high-performance single-page application (Next.js 16) featuring per-channel package catalogs, context-carrying consultation forms, integrated live chat, support tickets, and an internal lead dashboard. Every interaction dispatches signed cryptographic events to MarkaSuite CRM.",
                "Implementation Timeline: ~3 weeks (October 15 – November 3, 2026), 30 production commits.",
                "Measured Impact: 30 of 30 test leads ingested and forwarded to CRM endpoint with valid HMAC-SHA256 signatures at a median response time of 6.4 ms (Lab Tested); Desktop Lighthouse Performance 100 & SEO 100 (Lab Tested); Admin handling time per lead reduced from ~17 mins to ~3 mins, saving ~83% effort (10,000 Iteration Simulation)."
            ],
            "metrics": [
                {
                    "value": "30/30",
                    "label": "Valid Test Leads",
                    "detail": "30 of 30 leads ingested and forwarded to CRM endpoint with valid HMAC-SHA256 signature, 6.4 ms median response (Lab Tested)"
                },
                {
                    "value": "100/100",
                    "label": "Desktop Lighthouse",
                    "detail": "Desktop Lighthouse Performance 100 and SEO 100, LCP 0.79 seconds (Lab Tested)"
                },
                {
                    "value": "83%",
                    "label": "Admin Time Saved",
                    "detail": "Admin manual handling per lead reduced from ~17 mins to ~3 mins (10,000 Iteration Simulation)"
                }
            ]
        },
        {
            "eyebrow": "PROBLEM SCENARIO",
            "mainTitle": "When Leads Are Complete in the Prospect's Mind but Fragmented in the Inbox",
            "paragraphs": [
                "AdsVar sells outcome-driven advertising services. Its prospective clients range from online merchants scaling Shopee Ads to consumer brands requiring full-scale TikTok marketing and enterprises seeking blended ads and content packages. Prospective clients typically know their target channels and budget tiers when they first reach out.",
                "However, that vital context rarely arrived intact to the sales team due to three operational barriers:",
                "Speed in this intake window directly determines conversion outcomes. A landmark Harvard Business Review study of 2,241 U.S. enterprises revealed that firms contacting prospects within one hour were nearly seven times more likely to qualify leads than those waiting longer."
            ],
            "subsections": [
                {
                    "subtitle": "Scattered Inquiries Across Fragmented Channels",
                    "content": "Prospects contacted the agency via WhatsApp, Instagram DM, and email, each with unstructured formatting. Administrators manually parsed messages and copied contact info and project scope into spreadsheets. Inquiries were frequently logged hours later or overlooked."
                },
                {
                    "subtitle": "Repetitive Clarifications Delaying Response Time",
                    "content": "Initial messages often stated vague inquiries like 'inquire ad packages'. Admin staff had to ask multiple follow-up questions regarding channel, desired tier, and budget, requiring several conversational rounds before sales could formulate a relevant proposal."
                },
                {
                    "subtitle": "Commercial History Disconnected from Core CRM",
                    "content": "Live chat conversations, support issues, and proposal decisions remained isolated in siloed messaging apps. When sales representatives followed up, they lacked a unified timeline of prospect interactions."
                }
            ],
            "image": {
                "src": "/images/case-studies/adsvar/workflow-comparison.png",
                "alt": "Lead Workflow Comparison: Manual fragmented inbox copying versus unified cryptographically signed CRM ingestion"
            }
        },
        {
            "eyebrow": "PRODUCT SOLUTION",
            "mainTitle": "Unifying the Offer Experience and Enterprise CRM into a Single Data Pipeline",
            "paragraphs": [
                "AdsVar was architected as a high-velocity single-page web platform serving as the primary commercial gateway to MarkaSuite CRM. Rather than dumping traffic into unstructured WhatsApp chats, every interactive element on the page produces structured, cryptographically signed telemetry that populates both the web database and the enterprise CRM.",
                "The single page encapsulates the entire client evaluation journey: channel catalogs, pricing breakdowns, deliverables, portfolio proofs, and instant consultation modals. Supporting the frontend are 15 dedicated API routes handling leads, real-time chat, tickets, feedback, and bidirectional CRM synchronization."
            ],
            "subsections": [
                {
                    "subtitle": "A. Per-Channel Package Catalog Injecting Context into Inquiries",
                    "content": "When prospects select an advertising track (Meta, Google, TikTok, TikTok Shop GMV Max, or Shopee), the interface displays corresponding tiers, monthly retainers, and comparative deliverables. Clicking 'Choose this package' launches a consultation modal with package name, billing cycle, and pricing pre-populated. In lab tests, 20 of 20 modal inquiries were recorded with complete package context."
                },
                {
                    "subtitle": "B. Triplicate Lead Ingestion in a Single Transmission",
                    "content": "Upon form submission, the system validates contact inputs and executes three atomic actions: persists the lead to SQLite, triggers instant email alerts to sales, and dispatches a signed 'inquiry.submitted' event to MarkaSuite CRM. Payloads include HMAC-SHA256 signatures, timestamps, and nonces, with automatic 3x exponential retry on network failures."
                },
                {
                    "subtitle": "C. Unified Ingestion for Live Chat, Support Tickets, and Ratings",
                    "content": "When visitors initiate live chat, open support tickets, or submit service ratings, the system dispatches corresponding 'message.received', 'ticket.created', or 'feedback.submitted' events to the same CRM timeline. Webhook endpoints verify inbound signatures and reject tampered payloads with HTTP 401."
                },
                {
                    "subtitle": "D. Executive Lead Dashboard for Operational Teams",
                    "content": "An internal dashboard aggregates inquiries from all contact points into a searchable, filterable interface with live lead counts, pipeline status toggles, direct WhatsApp deep-links, and one-click CSV export."
                }
            ],
            "image": {
                "src": "/images/case-studies/adsvar/form-to-crm-flow.png",
                "alt": "Form to CRM Flow Diagram: One submission produces records in database, email notification, and cryptographically signed CRM event"
            }
        },
        {
            "eyebrow": "TECHNICAL ARCHITECTURE",
            "mainTitle": "Engineered for Extreme Speed, System Interoperability, and Complete Traceability",
            "paragraphs": [
                "To maintain instantaneous page delivery while embedding robust CRM integration, AdsVar leverages a resilient architectural foundation:",
                "Lightweight Client Delivery: Next.js 16 featuring static pre-rendering, local optimized typography, and dynamic catalog hydration. Desktop payload is kept under 475 KB, with production builds executing in ~13 seconds.",
                "Cryptographic Event Pipeline: Webhook integrations with MarkaSuite CRM implement HMAC-SHA256 signatures, microsecond timestamps, cryptographic nonces, and strict 8-second execution timeouts across five distinct business event types.",
                "End-to-End Auditability: Every outbound CRM dispatch—successful or failed—is archived in a local SQLite event log alongside payload bodies, status codes, and latency metrics, guaranteeing zero data loss during external CRM outages.",
                "Enterprise Search Readiness: Complete metadata automation, XML sitemaps, robots.txt directives, JSON-LD Schema (Organization, OfferCatalog, BreadcrumbList), and 308 permanent canonical redirects from legacy domains."
            ],
            "image": {
                "src": "/images/case-studies/adsvar/technical-architecture.png",
                "alt": "Technical Architecture Diagram: Next.js frontend, 15 API routes, SQLite event logging, and bidirectional HMAC webhook integration with MarkaSuite CRM"
            }
        },
        {
            "eyebrow": "IMPLEMENTATION TIMELINE",
            "mainTitle": "From Static Profile to Dynamic CRM Gateway in Three Weeks",
            "paragraphs": [
                "AdsVar was delivered across four structured sprints, each built atop the live running application to validate real visitor workflows from day one."
            ],
            "table": {
                "caption": "AdsVar Four-Phase Engineering Roadmap",
                "headers": [
                    "Sprint Phase",
                    "Execution Period",
                    "Core Deliverables",
                    "Validation Methodology"
                ],
                "rows": [
                    [
                        "Page Foundation",
                        "Oct 15–20, 2026",
                        "Single-page structure, SVG components, SQLite schema for services, tiers, and portfolios",
                        "Production build and cross-device visual audit"
                    ],
                    [
                        "Packages & Content",
                        "Oct 21–28, 2026",
                        "Per-channel package catalogs, comparison matrices, package modals, English copy",
                        "Interactive package selection and modal pre-fill testing"
                    ],
                    [
                        "CRM Integration",
                        "Oct 29, 2026",
                        "HMAC signed events to MarkaSuite CRM, email dispatch, internal lead dashboard",
                        "End-to-end CRM mock test suite and webhook validation"
                    ],
                    [
                        "SEO & Domain Migration",
                        "Oct 22 – Nov 3, 2026",
                        "Metadata, schema markup, dynamic sitemap, 308 redirects to adsvar.id",
                        "Lighthouse 12 audits and redirect chain verification"
                    ]
                ]
            }
        },
        {
            "eyebrow": "BENCHMARKS & IMPACT",
            "mainTitle": "Laboratory Performance Evidence and Admin Efficiency Simulation",
            "paragraphs": [
                "Based on rigorous local test suites conducted on November 9, 2026 (production build, isolated test database, mock CRM endpoint with strict HMAC verification), Lighthouse 12 audits, and a 10,000-iteration triangular distribution simulation of admin handling time:"
            ],
            "table": {
                "caption": "AdsVar Performance, Ingestion, and Efficiency Benchmarks",
                "headers": [
                    "Performance Indicator",
                    "Baseline (Manual)",
                    "With AdsVar",
                    "Measured Outcome",
                    "Validation Status"
                ],
                "rows": [
                    [
                        "Contact Form Lead Intake",
                        "–",
                        "Median 6.4 ms, P95 10.9 ms",
                        "30 of 30 Succeeded",
                        "Lab Tested"
                    ],
                    [
                        "CRM Ingestion with Valid Signature",
                        "–",
                        "HMAC-SHA256 + timestamp + nonce",
                        "30 of 30 Verified",
                        "Lab Tested"
                    ],
                    [
                        "Modal Package Ingestion with Context",
                        "–",
                        "Median 4.8 ms",
                        "20 of 20 Succeeded",
                        "Lab Tested"
                    ],
                    [
                        "Inbound Webhook Signature Verification",
                        "–",
                        "HTTP 401 Unauthorized",
                        "Tampered Rejected",
                        "Lab Tested"
                    ],
                    [
                        "Lighthouse Desktop (Performance / SEO)",
                        "–",
                        "100 / 100",
                        "LCP 0.79s",
                        "Lab Tested"
                    ],
                    [
                        "Lighthouse Mobile (Performance / SEO)",
                        "–",
                        "82 / 100",
                        "LCP 3.13s",
                        "Lab Tested"
                    ],
                    [
                        "Admin Manual Effort per Inbound Lead",
                        "~17 minutes",
                        "~3 minutes",
                        "~83% Time Saved",
                        "Simulation"
                    ]
                ]
            },
            "subsections": [
                {
                    "subtitle": "Interpreting the Lab Benchmarks",
                    "content": "Sub-7ms intake latency covers validation, local SQLite persistence, and HMAC event dispatch in local environments. Desktop 100 Performance demonstrates the speed of pre-rendered static assets. The 83% reduction in admin effort results directly from capturing complete package and budget parameters upfront."
                },
                {
                    "subtitle": "Measurement Boundaries",
                    "content": "Intake benchmarks were evaluated on local environments without public internet latency. Outbound SMTP email delivery was not included in network latency calculations. Admin handling metrics represent statistical simulation across 10,000 iterations."
                }
            ],
            "image": {
                "src": "/images/case-studies/adsvar/admin-time-simulation.png",
                "alt": "Admin Time Simulation Chart: Effort per lead drops from 17 minutes to 3 minutes, achieving 83% median efficiency gain"
            }
        },
        {
            "eyebrow": "NEXT STEPS & ENTERPRISE ADOPTION",
            "mainTitle": "Ready to Deploy Connected Commercial Gateways in Your Enterprise?",
            "paragraphs": [
                "Every professional service business maintains distinct commercial onboarding workflows. The architectural pattern proven by AdsVar applies seamlessly to digital agencies, management consultancies, B2B SaaS providers, and educational institutions requiring high-converting websites directly integrated into enterprise CRMs.",
                "The Arsalynk engineering team stands ready to architect your prospect journeys, construct high-performance single-page offer platforms, and bridge your web infrastructure to enterprise CRM backends with cryptographic reliability."
            ]
        }
    ]
},
  /* ── 5. Craftivation — Exhibition Booth Contractor Platform ── */
  {
    "id": 5,
    "slug": "craftivation-website-kontraktor-booth",
    "title": "How Craftivation Structured a Four-Page Exhibition Booth Journey: 100 SEO Scores Across All Pages and Database-Driven Service Packages",
    "category": "DIGITAL DEVELOPMENT",
    "tags": [
        "BOOTH CONTRACTOR",
        "COMPANY PROFILE",
        "EXHIBITION BOOTH",
        "DATABASE CMS",
        "CRAFTIVATION",
        "ARSALYNK"
    ],
    "dateLabel": "NOVEMBER 2026",
    "dateValue": "2026-11-10",
    "description": "Craftivation case study: four-page exhibition booth contractor website featuring database-driven service packages, centralized consultation card, and 100 SEO scores across all pages.",
    "coverImage": "/images/case-studies/craftivation/cover.png",
    "coverImageAlt": "Craftivation homepage showcasing exhibition booths, modular packages, and consultation workflows",
    "sections": [
        {
            "eyebrow": "EXECUTIVE SUMMARY (AT-A-GLANCE)",
            "mainTitle": "Structuring the Exhibition Booth Journey with Database-Driven Packages",
            "paragraphs": [
                "Client & Scenario: Craftivation, an exhibition booth contractor in the Arsalynk ecosystem handling end-to-end concept design, structural fabrication, and on-site installation for brand showcases and retail activations.",
                "Problem Focus: Prospective clients sought to understand methodology and package options before initiating contact, but critical information was scattered across social media and messaging channels with fragmented inquiry routing.",
                "Product Solution: A structured four-page web application (Home, About Us, Approach, Contact) featuring database-driven service tiers and a unified consultation card anchoring every call to action.",
                "Implementation Timeline: ~1 month (October 7 – November 5, 2026), 123 production commits.",
                "Measured Impact: Lighthouse SEO 100 & Best Practices 100 across all 4 pages on mobile and desktop (Lab Tested); Package updates persist in 2.5 ms median and reflect immediately without rebuilding (Lab Tested); Effort required to update a service tier reduced from ~72 mins to ~23 mins, saving ~67% time (10,000 Iteration Simulation)."
            ],
            "metrics": [
                {
                    "value": "100/100",
                    "label": "SEO & Best Practices",
                    "detail": "Lighthouse SEO 100 and Best Practices 100 across all 4 pages on mobile and desktop (Lab Tested)"
                },
                {
                    "value": "2.5 ms",
                    "label": "Package Update Speed",
                    "detail": "Package record changes persist in 2.5 ms median and reflect immediately without rebuilding (Lab Tested)"
                },
                {
                    "value": "67%",
                    "label": "Update Effort Saved",
                    "detail": "Work updating one service tier drops from ~72 mins to ~23 mins, saving ~67% effort (10,000 Iteration Simulation)"
                }
            ]
        },
        {
            "eyebrow": "PROBLEM SCENARIO",
            "mainTitle": "When Prospective Clients Must Ask Questions First Just to Learn the Process",
            "paragraphs": [
                "Craftivation builds bespoke booths for trade expos, product launches, and experiential brand activations. Exhibition dates cannot be postponed, forcing clients to evaluate contractors under tight timelines. Before reaching out, buyers need three answers: who Craftivation is, how the process works, and what packages are available.",
                "Without a structured website answering these sequentially, operations suffered from three structural bottlenecks:",
                "B2B buyers evaluate vendors predominantly through independent research. Gartner research into B2B buying journeys reveals that buyers spend only ~17% of total evaluation time meeting prospective suppliers, dedicating the remaining time to self-directed research, including analyzing vendor websites."
            ],
            "subsections": [
                {
                    "subtitle": "Methodology Residing Solely in the Team's Memory",
                    "content": "Work phases—from consultation, 3D modeling, fabrication, to on-site assembly—were explained manually via chat for every inquiry. Explanations varied depending on the responder, making it difficult for clients to compare Craftivation against competing vendors."
                },
                {
                    "subtitle": "Packages Buried Inside Static Quotation PDFs",
                    "content": "Package specifications were only revealed after generating formal quotation PDFs. If hardcoded into static website markup, every price change required developers, rebuilds, and redeployments, leaving offerings outdated."
                },
                {
                    "subtitle": "Scattered and Unmonitored Contact Channels",
                    "content": "WhatsApp numbers, direct emails, business offices, and factory workshop coordinates were scattered across social bios, business cards, and chat archives, causing lost inquiries and visits to outdated addresses."
                }
            ],
            "image": {
                "src": "/images/case-studies/craftivation/workflow-comparison.png",
                "alt": "Client Journey Comparison: Fragmented multi-channel inquiries versus unified four-page sequence with centralized contact card"
            }
        },
        {
            "eyebrow": "PRODUCT SOLUTION",
            "mainTitle": "Unifying Brand Story, Service Packages, and Consultation Channels into One Cohesive Web Platform",
            "paragraphs": [
                "Craftivation was architected as a structured multi-page platform mirroring the client's decision-making sequence: discover the brand, comprehend process and packages, then initiate consultation. Rather than hardcoding offerings, service tiers are stored in a database and queried dynamically upon page load, allowing instantaneous updates without rebuilding.",
                "Behind the scenes, content is managed via normalized database tables for services, projects, and corporate statistics served by five dedicated API routes. In the frontend, every consultation trigger converges into a single modal card and verified contact numbers."
            ],
            "subsections": [
                {
                    "subtitle": "A. Four Dedicated Pages Matching the Evaluation Journey",
                    "content": "Home introduces three work phases: Understand, Create, Implement. Navigation flows smoothly to About Us for team credentials, Approach for detailed methodology and packages, and Contact for consultation routing. Breadcrumbs orient visitors across all sub-pages, maintaining zero layout shift (CLS 0)."
                },
                {
                    "subtitle": "B. Database-Driven Service Packages (No Rebuilds Required)",
                    "content": "When Approach loads, three booth tiers (Modular, Versatile, Enterprise) are retrieved dynamically from the service table: title, description, imagery, display order, and active state. In lab tests, 10 of 10 package edits persisted in 2.5 ms median and reflected instantly."
                },
                {
                    "subtitle": "C. Unified Consultation Card Anchoring Every Call to Action",
                    "content": "Triggering 'Consult Now' launches a focused contact modal featuring three direct actions: WhatsApp, email, and Google Maps workshop coordinates. Contact expands this into three clear channels: Direct Consultation, Jakarta Business Office, and Bogor Workshop."
                },
                {
                    "subtitle": "D. Search Engine Ready with Complete Schema Markup",
                    "content": "Each page incorporates dedicated metadata, canonical tags, and structured JSON-LD (Organization, WebSite, 3 Service records in OfferCatalog, and dual physical location schemas with coordinates and opening hours), achieving Lighthouse SEO 100 across all routes."
                }
            ],
            "image": {
                "src": "/images/case-studies/craftivation/service-packages.png",
                "alt": "Approach Page Service Packages: Modular, Versatile, and Enterprise packages retrieved dynamically from database"
            }
        },
        {
            "eyebrow": "TECHNICAL ARCHITECTURE",
            "mainTitle": "Under the Hood: Static-Rendered Core, Selectively Dynamic Data, and Low-Maintenance Engineering",
            "paragraphs": [
                "To ensure instantaneous page delivery while maintaining effortless content maintenance, Craftivation implements a modern hybrid architecture:",
                "Pre-rendered Static Pages: Next.js 16 renders all four core routes statically at build time, eliminating layout shifts (CLS 0) and serving complete markup instantly.",
                "Dynamic Content Layer: Service tiers, project showcases, and company statistics reside in SQLite and are served via five API routes with median response times of 1.6–1.9 ms. Schema fallbacks guarantee flawless rendering if database queries stall.",
                "Maintainable Modular Structure: Component isolation per section, data access via repository pattern, and structured schema contracts ensure easy expansion for future project galleries."
            ],
            "image": {
                "src": "/images/case-studies/craftivation/technical-architecture.png",
                "alt": "Technical Architecture Diagram: Next.js pre-rendered pages, content APIs, SQLite database, and centralized contact card routing"
            }
        },
        {
            "eyebrow": "IMPLEMENTATION TIMELINE",
            "mainTitle": "Four Enterprise Pages Delivered in One Month",
            "paragraphs": [
                "Craftivation was engineered across four focused phases by two core contributors, incorporating design iterations from the leadership team at each milestone."
            ],
            "table": {
                "caption": "Craftivation Implementation Roadmap",
                "headers": [
                    "Sprint Phase",
                    "Execution Period",
                    "Core Deliverables",
                    "Validation Methodology"
                ],
                "rows": [
                    [
                        "Foundation & Data Schema",
                        "Oct 7–9, 2026",
                        "Page structure, SQLite schema for services, projects, and statistics, Approach page",
                        "Production build and API endpoint verification"
                    ],
                    [
                        "Design & Responsive UI",
                        "Oct 12–15, 2026",
                        "Typography, animations, responsive layouts across desktop, tablet, and mobile",
                        "Cross-breakpoint layout verification"
                    ],
                    [
                        "SEO & Geo-Locations",
                        "Oct 19–23, 2026",
                        "Per-page metadata, JSON-LD schemas, office and workshop map integrations",
                        "Metadata validation and Google Maps link audits"
                    ],
                    [
                        "Homepage Redesign",
                        "Nov 2–5, 2026",
                        "Section-changer service panel, unified contact card, mobile navigation polish",
                        "Interactive and responsive audit"
                    ]
                ]
            }
        },
        {
            "eyebrow": "BENCHMARKS & IMPACT",
            "mainTitle": "Laboratory Performance Evidence and Content Maintenance Simulation",
            "paragraphs": [
                "Based on local laboratory test suites conducted on November 9, 2026 (production build, default database), Lighthouse 12 audits across all 4 pages, and a 10,000-iteration triangular distribution simulation of package update workflows:"
            ],
            "table": {
                "caption": "Craftivation Performance and Content Agility Benchmarks",
                "headers": [
                    "Performance Indicator",
                    "Baseline (Hardcoded)",
                    "With Craftivation",
                    "Measured Outcome",
                    "Validation Status"
                ],
                "rows": [
                    [
                        "Lighthouse SEO Score",
                        "–",
                        "100 across 4 of 4 pages",
                        "Mobile & Desktop",
                        "Lab Tested"
                    ],
                    [
                        "Lighthouse Best Practices",
                        "–",
                        "100 across 4 of 4 pages",
                        "Mobile & Desktop",
                        "Lab Tested"
                    ],
                    [
                        "Cumulative Layout Shift (CLS)",
                        "–",
                        "0",
                        "All Pages",
                        "Lab Tested"
                    ],
                    [
                        "Desktop Performance Score",
                        "–",
                        "80–99",
                        "About Us & Contact 99",
                        "Lab Tested"
                    ],
                    [
                        "Content API Response Time",
                        "–",
                        "Median 1.6–1.9 ms",
                        "50 Requests/Endpoint",
                        "Lab Tested"
                    ],
                    [
                        "Service Package Mutation",
                        "Code edit, rebuild, deploy",
                        "Median 2.5 ms, 10 of 10 persisted",
                        "No Rebuild Needed",
                        "Lab Tested"
                    ],
                    [
                        "Time to Update One Service Tier",
                        "~72 minutes",
                        "~23 minutes",
                        "~67% Time Saved",
                        "Simulation"
                    ]
                ]
            },
            "subsections": [
                {
                    "subtitle": "Interpreting the Lab Benchmarks",
                    "content": "Perfect 100 SEO scores stem from automated metadata, breadcrumbs, schema markup, and sitemaps. 2.5 ms database persistence decouples content maintenance from CI/CD deployment pipelines. The 67% reduction in update effort eliminates developer dependencies for routine pricing and tier adjustments."
                },
                {
                    "subtitle": "Measurement Boundaries",
                    "content": "Testing was conducted on local production builds without public CDN latency. Content APIs currently require backend authentication before public admin exposure. Update workflow reductions reflect statistical simulations across 10,000 iterations."
                }
            ],
            "image": {
                "src": "/images/case-studies/craftivation/package-update-simulation.png",
                "alt": "Package Update Workflow Simulation: Maintenance effort reduced from 72 minutes to 23 minutes, achieving 67% median time savings"
            }
        },
        {
            "eyebrow": "NEXT STEPS & ENTERPRISE ADOPTION",
            "mainTitle": "Ready to Deploy Structured Commercial Experiences in Your Business?",
            "paragraphs": [
                "Every project-based business must articulate its process with precision. The architectural pattern established by Craftivation applies directly to interior contractors, event organizers, architectural practices, and custom manufacturers seeking to qualify prospects before initial contact.",
                "The Arsalynk engineering team is ready to structure your multi-page customer journey, architect dynamic database-driven service catalogs, and unify inbound inquiry routing into your commercial teams."
            ]
        }
    ]
},
];

export const LEADERSHIP_THOUGHTS_DUMMY_DATA: LeadershipThoughtArticle[] = [
  {
    "id": 1,
    "slug": "silent-clients-are-not-always-satisfied",
    "title": "Silent Clients Are Not Always Satisfied: What Owners Must Know Before Revenue Speaks",
    "category": "CUSTOMER LEADERSHIP",
    "tags": [
      "CUSTOMER EXPERIENCE",
      "FEEDBACK",
      "RETENTION",
      "CUSTOMER DATA"
    ],
    "author": "Artic Analytica Leadership",
    "readTime": "6 min read",
    "date": "November 2026",
    "datePublished": "2026-11-04",
    "dateModified": "2026-11-04",
    "language": "en-US",
    "description": "Clients who complain are giving you a chance to fix things. Silent clients have often already decided to leave. How business owners can read behavioral signals before churn hits revenue.",
    "coverImage": "/images/leadership-thoughts/silent-clients-are-not-always-satisfied/image4.jpg",
    "coverImageAlt": "A quiet desk with an unlit phone and a cup of coffee: an empty inbox can mean clients are satisfied, or that they have stopped hoping for improvement.",
    "sections": [
      {
        "eyebrow": "EXECUTIVE SUMMARY",
        "mainTitle": "Detecting Decisions Before It Is Too Late",
        "paragraphs": [
          "The Idea: A complaining client is still offering you an opportunity to improve. A silent client has often already made up their mind—they just have not announced it yet.",
          "Why It Matters Now: The Qualtrics XM Institute survey of 28,400 consumers across 26 countries found that only one-third provide direct feedback following a bad experience. Meanwhile, 51% reduce or completely stop spending with that brand.",
          "What Leaders Can Do: Stop treating 'zero complaints' as a KPI target, make submitting feedback as frictionless as placing an order, and monitor behavioral drift before churn hits revenue."
        ]
      },
      {
        "eyebrow": "THE CENTRAL IDEA",
        "mainTitle": "A Month Without Complaints Is Not Necessarily a Good Month",
        "paragraphs": [
          "The monthly meeting opens with welcome news: zero customer complaints logged. The customer service manager smiles, executives nod, and the agenda moves smoothly to the next item. Two months later, three long-standing clients choose not to renew their contracts. Nobody in the room can pinpoint when the drift began.",
          "Complaining takes effort for a client. They have to set aside time, re-explain the issue from scratch, and endure awkward friction. People only invest that effort when they still believe the relationship is worth salvaging. When a client goes completely quiet, they have usually concluded that fixing things is no longer worth the emotional energy.",
          "Silence is frequently a decision that simply has not been announced yet.",
          "Artic Analytica arrived at this operating conviction while unifying customer data streams across the Arsalynk ecosystem. In the AdsVar project, every chat conversation, ticket, and web feedback entry flows into one central CRM across five event categories (Actual codebase specification). Once all client signals are gathered into a unified profile, it becomes immediately apparent who has quietly gone dark."
        ],
        "image": {
          "src": "/images/leadership-thoughts/silent-clients-are-not-always-satisfied/image1.png",
          "alt": "Two-panel diagram: Reading silence as satisfaction (complaints drop → assumed happy → client churns) vs Reading silence as an operational signal (monitoring behavior → proactively reaching out → resolving root causes while salvageable)."
        }
      },
      {
        "eyebrow": "WHY THE PROBLEM PERSISTS",
        "mainTitle": "Organisations Are Trained to Fear Complaints",
        "paragraphs": [
          "Complaints are treated like negative report card grades. When incoming complaint volume becomes a KPI target, teams are incentivised to suppress the numbers rather than listen to the substance. The team with the fewest logged grievances appears to be performing best—even if their customers have simply given up on speaking up.",
          "Most customers rarely voice dissatisfaction directly. The Qualtrics XM Institute research revealed that only one-third of consumers share direct feedback with a business following a poor experience. The remaining two-thirds voice dissatisfaction through indirect channels: service calls, offhand chat remarks, online reviews, or social media. In the same study, 51% of consumers actively curtailed or eliminated their spending after a negative encounter.",
          "Read together, those two data points are alarming: many customers are disappointed, very few speak directly, and half quietly take their business elsewhere.",
          "Customer signals remain fragmented across silos. A minor complaint gets trapped in a sales rep's WhatsApp, an administrative email, an Instagram comment, or an account manager's memory. Nobody sees the composite picture. The symptom is unmistakable: management reviews conclude 'Client X is happy' based solely on casual conversation, while the last formal ticket was filed six months ago and order frequency has halved."
        ]
      },
      {
        "eyebrow": "FIELD LESSONS",
        "mainTitle": "When Every Client Voice Converges into One System",
        "paragraphs": [
          "AdsVar, a paid performance marketing brand within our group, interacts with prospective and current clients across multiple touchpoints: inquiry forms, pricing tiers, live chat, support tickets, and feedback surveys. Stored separately, teams only ever see fragmented puzzle pieces. Admin logs a ticket, sales issues a quote, but nobody realises that the same client just rejected a proposal and opened a grievance ticket.",
          "Our architectural decision was straightforward: every category of customer interaction belongs in a single unified record. The AdsVar website routes five distinct event types into MarkaSuite CRM: inbound inquiries, chat messages, support tickets, feedback entries, and proposal decisions (Actual, from code). Proposal decisions are recorded even when rejected, because rejection is a vital operational signal. If the CRM is momentarily unreachable, data queues safely in the local website database with failure logging (Lab Test).",
          "During benchmark tests, live chat, tickets, and feedback submissions were reliably ingested and dispatched to the CRM (3 out of 3, Lab Test). The client-side chat widget checks for new responses every 5 seconds (Actual, from code), preventing conversations from stalling while waiting for an admin to refresh their browser.",
          "The core insight: technology is actually the easiest part. What makes silence legible is the organisational discipline to funnel every signal—including uncomfortable feedback—into one single source of truth per client. A note of transparency: the benchmark numbers above originate from controlled lab tests with simulated CRM endpoints rather than live production client data. Full technical details are documented in the AdsVar Case Study."
        ],
        "image": {
          "src": "/images/leadership-thoughts/silent-clients-are-not-always-satisfied/image3.png",
          "alt": "Process flow diagram: Inbound inquiries, chat messages, support tickets, feedback, and quote decisions routing into MarkaSuite CRM unified client profile."
        }
      },
      {
        "eyebrow": "ACTIONABLE FRAMEWORK",
        "mainTitle": "Listen to Client Silence, Not Just Their Voice",
        "subsections": [
          {
            "subtitle": "Remove 'Zero Complaints' from Performance Targets",
            "content": "Replace aggregate complaint count targets with controllable quality metrics: first-response latency and resolution rate. Teams that proactively surface client friction should be rewarded, not penalised by vanity metrics. Signs in your organisation: teams celebrate a month without complaints, but nobody cross-checks re-order retention for the same cohort. First step: replace the 'total complaints' KPI on your monthly dashboard with 'average time to full resolution'."
          },
          {
            "subtitle": "Make Giving Feedback as Frictionless as Placing an Order",
            "content": "If a client must search for a contact number, wait for business hours, and explain their issue to three different gatekeepers, most will choose silence. Embed quick feedback options directly where clients already interact—such as website chat or one-click ticketing—and ensure human accountability behind every channel. Test it yourself: mystery-shop your own company and count how many steps it takes to lodge an issue."
          },
          {
            "subtitle": "Consolidate Customer Signals into a Single Profile",
            "content": "Sales chats, admin emails, help tickets, reviews, and rejected proposals should converge into a single record per client. You do not need an enterprise software suite to start: a shared weekly spreadsheet with clear governance is infinitely superior to five department heads holding isolated pieces of the puzzle."
          },
          {
            "subtitle": "Monitor Behavioral Drift Before Contract Renewals",
            "content": "Clients rarely announce their departure in advance; their behavior drifts first. Response lengths become curt. Repeat orders become sporadic. Revision requests halt, even though they used to be highly meticulous. Regular inquiries vanish, and quarterly reviews are repeatedly rescheduled. Review your top ten accounts this week and compare their communication frequency over the last three months against the previous quarter."
          }
        ],
        "image": {
          "src": "/images/leadership-thoughts/silent-clients-are-not-always-satisfied/image2.png",
          "alt": "Visual checklist: Five behavioral warning signs that indicate a client is drifting away before revenue drops."
        }
      },
      {
        "eyebrow": "LEADERSHIP QUESTIONS",
        "mainTitle": "When Was the Last Time You Contacted a Client Who Never Complained?",
        "paragraphs": [
          "Does your leadership scorecard still treat raw complaint volume as an indicator of service quality?",
          "How many friction-filled steps must a dissatisfied client endure to voice a problem, and have you ever walked that path yourself?",
          "Across how many disconnected tools and inboxes is your customer intelligence scattered today?",
          "Which key accounts have decreased their order frequency or engagement over the past 90 days, and has anyone reached out to ask why?",
          "If your largest account decided to terminate their contract tomorrow, what leading indicators should have warned you a month in advance?",
          "A client who takes the time to complain is actively fighting to preserve their relationship with your business. Unchecked silence is infinitely more expensive."
        ]
      },
      {
        "eyebrow": "NOTES & METHODOLOGY",
        "mainTitle": "Definitions, Internal Data Points & References",
        "paragraphs": [
          "Definition of Customer Signals: Every traceable touchpoint in a client's lifecycle, including chat dialogues, support tickets, structured feedback, public reviews, accepted/rejected commercial proposals, and longitudinal transaction patterns.",
          "Internal Group Data Source: AdsVar Case Study Factsheet: A6 (data resilience when CRM is unavailable, Lab Test), A7 (five event types dispatched to CRM, Actual from code), A8 (live chat, tickets, and feedback relayed to CRM, 3/3, Lab Test), A12 (chat polling interval of 5 seconds, Actual from code). Benchmark tests executed against mock CRM endpoints; no proprietary customer records were used.",
          "External Reference: Qualtrics XM Institute (2024). Bad customer service threatens $3.7 trillion annually as frontline workers reach a breaking point. Global study of 28,400 consumers across 26 countries, Q3 2023 dataset."
        ]
      }
    ]
  },
  {
    "id": 2,
    "slug": "the-shadow-team-behind-slow-projects",
    "title": "The Shadow Team Behind Slow Projects: Who They Are and How Leaders Regain Control",
    "category": "DIGITAL LEADERSHIP",
    "tags": [
      "DIGITAL PROJECTS",
      "DEVELOPERS",
      "VENDORS",
      "PROJECT GOVERNANCE"
    ],
    "author": "Web2Up Leadership",
    "readTime": "6 min read",
    "date": "November 2026",
    "datePublished": "2026-11-03",
    "dateModified": "2026-11-03",
    "language": "en-US",
    "description": "Many digital projects stall where owners never look: developers behind the scenes. Who they are, why bottlenecks form, and how leaders regain visibility and control.",
    "coverImage": "/images/leadership-thoughts/the-shadow-team-behind-slow-projects/image2.jpg",
    "coverImageAlt": "A workstation with an active monitor in a darkened room with an empty chair: those attending the status meeting are rarely the ones writing the code.",
    "sections": [
      {
        "eyebrow": "EXECUTIVE SUMMARY",
        "mainTitle": "Unravelling the Invisible Project Bottleneck",
        "paragraphs": [
          "The Idea: Digital projects rarely stall on the client's desk; they stall in the shadow team—the hidden developers doing the actual work who remain invisible and unreachable by the business owner.",
          "Why It Matters Now: An empirical study of 133 popular GitHub repositories found that 65% would be paralysed if just one or two key developers departed (the 'truck factor'). Across general workplaces, 45% of professional developers encounter knowledge silos weekly.",
          "What Leaders Can Do: Ask who is writing the code, demand tangible demos you can open directly, ensure code repositories and cloud access belong to your company, and never allow a mission-critical system to depend on a single individual."
        ]
      },
      {
        "eyebrow": "THE CENTRAL IDEA",
        "mainTitle": "Your Project Bottleneck Is in Places You Cannot See",
        "paragraphs": [
          "The website project is already three weeks behind schedule. In status meetings, the owner begins blaming themselves for requesting too many revisions, while the agency account manager offers polite reassurance that 'everything is on track.' Yet when the meeting ends, the ticket sits in a queue waiting for someone neither of them has ever met.",
          "That is the shadow team. They are neither incompetent nor malicious—frequently, they are exceptionally skilled. The core problem is that they are entirely invisible, uncontactable, and juggling four other conflicting deadlines from different agencies.",
          "Software projects rarely drag because the code is impossibly difficult. They drag because the person writing the code is waiting for clarification, working part-time, or forced to re-architect everything from scratch.",
          "Web2Up observes this pathology from both directions: rescuing stalled legacy builds commissioned from outside vendors, and designing our own team structures to eliminate hidden handoffs."
        ],
        "image": {
          "src": "/images/leadership-thoughts/the-shadow-team-behind-slow-projects/image3.png",
          "alt": "Two-tier diagram: What the owner sees (Owner → Account Manager → Agency presentation) vs What is actually happening (Freelance developers splitting focus across multiple unrelated client deadlines)."
        }
      },
      {
        "eyebrow": "WHY THE PROBLEM PERSISTS",
        "mainTitle": "Projects Are Managed Through Intermediaries, Not Through the Work Itself",
        "paragraphs": [
          "The actual work is obscured behind communication layers. Business owners talk to account managers, who brief project coordinators, who write tickets for developers. Every layer dilutes nuance, delays answers, and adds bureaucratic lag.",
          "Competing priorities tear developers in opposite directions. Freelancers and outsourced vendors balance multiple client commitments. When your project hits an obstacle, work does not merely pause—the developer switches contexts to another paying client, causing days of restart latency.",
          "Institutional knowledge is locked inside one individual's head. Server credentials, deployment scripts, technical architecture rationales—all reside in a single brain. Avelino et al. (2016) measured this vulnerability as the 'truck factor', proving that most digital initiatives have catastrophic single points of human failure.",
          "If open-source projects with global communities suffer from this vulnerability, proprietary client projects built by small agencies are exponentially more exposed."
        ]
      },
      {
        "eyebrow": "FIELD LESSONS",
        "mainTitle": "One Developer, Three Weeks, and What Made the Code Truly Transferable",
        "paragraphs": [
          "The AdsVar website, built for a performance marketing brand in our ecosystem, moved with extreme velocity: 30 commits completed across three weeks by a single primary engineer (Actual codebase record).",
          "We recognized that speed carries inherent operational risk. If that engineer became unavailable tomorrow, would another developer understand the codebase, or would the build collapse into the shadow team trap? Our safeguard was not hiring more managers, but embedding rigid architectural contracts into code.",
          "Every data model, API payload, and form state was enforced via strict TypeScript definitions and automated validations. Any competent engineer can read the schema and immediately understand how data moves without needing verbal onboarding.",
          "The takeaway: small teams are not inherently dangerous. What creates severe risk is a small team operating without explicit, documented architectural contracts. Complete technical records are detailed in the AdsVar Case Study."
        ],
        "image": {
          "src": "/images/leadership-thoughts/the-shadow-team-behind-slow-projects/image1.png",
          "alt": "Horizontal workflow diagram: Moving from 1 contributor and 30 commits to explicit architectural contracts codified in TypeScript."
        }
      },
      {
        "eyebrow": "ACTIONABLE FRAMEWORK",
        "mainTitle": "Bring the Shadow Team into the Light",
        "subsections": [
          {
            "subtitle": "Ask Who Is Actually Writing the Code",
            "content": "At project kickoff, require your agency or tech vendor to name the specific engineers assigned, their employment status (full-time employee, freelancer, or offshore contractor), and how many concurrent accounts they are handling. Signs in your organisation: you know the agency's sales team intimately, but have no idea who actually pushes code to production. First step: send a brief email today asking for the names and roles of everyone actively allocated to your sprint."
          },
          {
            "subtitle": "Demand Working Demos You Can Open Yourself",
            "content": "Weekly progress decks with percentage bars are effortless to manufacture and nearly impossible to verify. Demand a live staging link or direct repository commits updated at least weekly so you can verify tangible functionality rather than slide presentations."
          },
          {
            "subtitle": "Ensure Code Repositories and Cloud Accounts Belong to Your Company",
            "content": "GitHub repositories, cloud hosting consoles, domain registrars, and third-party API accounts must be owned directly under your corporate entity, with developers granted access as contributors—never the reverse. Require minimal documentation covering local setup, deployment steps, and service dependencies so vendor transitions never force a full rebuild. Signs in your organisation: updating a single paragraph on your landing page requires waiting for an external contractor holding administrative keys."
          },
          {
            "subtitle": "Never Let Mission-Critical Systems Depend on a Single Individual",
            "content": "Small teams are efficient, but solitary points of failure are perilous. Require at least two people on the vendor side to be familiar with the architecture, or ensure code adheres to clean modular standards that allow a new developer to step in seamlessly."
          }
        ],
        "image": {
          "src": "/images/leadership-thoughts/the-shadow-team-behind-slow-projects/image4.jpg",
          "alt": "Laptop displaying source code next to a coffee cup: the work that determines project delivery happens on screens the client never sees."
        }
      },
      {
        "eyebrow": "LEADERSHIP QUESTIONS",
        "mainTitle": "What Is the Name of the Person Writing Your Code This Week?",
        "paragraphs": [
          "Do you know the exact employment status of the engineers building your platform: vendor staff, freelancers, or third-party contractors?",
          "How many other client deliverables is that same engineer balancing alongside your project?",
          "Can you open and test the latest staging deployment of your project right now without asking permission?",
          "Whose name and credit card are registered on your project's source repository, hosting account, and domain?",
          "If your lead developer departed tomorrow, how many weeks would it take for a newcomer to resume feature releases?",
          "Delayed projects are rarely caused by a single terrible decision. They are caused by critical work happening in invisible shadows."
        ]
      },
      {
        "eyebrow": "NOTES & METHODOLOGY",
        "mainTitle": "Definitions, Internal Data Points & References",
        "paragraphs": [
          "Definition of Shadow Team: Engineers and specialists doing the actual hands-on execution of a digital initiative who remain invisible and inaccessible to the project owner, such as subcontracted offshore freelancers behind an agency facade.",
          "Definition of Truck Factor: The minimum number of core developers who, if incapacitated or quitting, would stall or terminate a project's forward development.",
          "Internal Group Data Source: AdsVar Case Study Factsheet: Header specifications (30 commits between October 15 and November 3, 2026, 1 primary contributor).",
          "External References: Avelino, G., Passos, L., Hora, A., & Valente, M. T. (2016). A Novel Approach for Estimating Truck Factors. IEEE SANER. Stack Overflow (2024). Professional Developers Survey: 45.1% report knowledge silos weekly."
        ]
      }
    ]
  },
  {
    "id": 3,
    "slug": "expensive-software-only-three-people-use",
    "title": "Expensive Software That Only Three People Use: Why Systems Get Abandoned and How to Prevent It",
    "category": "OPERATIONAL LEADERSHIP",
    "tags": [
      "SYSTEM ADOPTION",
      "ERP",
      "DIGITAL TRANSFORMATION",
      "PRODUCTIVITY"
    ],
    "author": "MarkaSuites Leadership",
    "readTime": "6 min read",
    "date": "November 2026",
    "datePublished": "2026-11-02",
    "dateModified": "2026-11-02",
    "language": "en-US",
    "description": "New software is rarely rejected outright; more often, teams quietly drift back to spreadsheets after being sold on a polished demo. Why systems fail adoption and how to choose from daily workflow.",
    "coverImage": "/images/leadership-thoughts/expensive-software-only-three-people-use/image3.jpg",
    "coverImageAlt": "An open corporate office with empty desks and monitors: software licenses are purchased for everyone, but those actively logging in can be counted on one hand.",
    "sections": [
      {
        "eyebrow": "EXECUTIVE SUMMARY",
        "mainTitle": "Why Enterprise Software Fails in Daily Operations",
        "paragraphs": [
          "The Idea: New software rarely fails because of overt employee rebellion. It is abandoned quietly because it was chosen from a slick sales demo rather than the friction-filled reality of everyday work.",
          "Why It Matters Now: Zylo's 2026 SaaS Management Index, analyzing over 40 million software licenses, reveals that the average organisation utilizes only 52% of its purchased software licenses. Nearly half of corporate software budgets are spent on shelfware.",
          "What Leaders Can Do: Shadow a team member for half a day before watching vendor demos, involve end-users in evaluation, ensure the new software is visibly faster than spreadsheets, and track actual user engagement rather than purchased license counts."
        ]
      },
      {
        "eyebrow": "THE CENTRAL IDEA",
        "mainTitle": "Teams Rarely Reject New Software, They Were Simply Never Asked",
        "paragraphs": [
          "The sales presentation went flawlessly. Executive dashboards looked stunning, charts animated seamlessly, and vendor representatives answered every board question with polish. Contracts were signed, licenses acquired for entire departments, and a one-day training was held. Three months later, the only people opening the software daily are administrators obliged to compile executive reports. Everyone else has quietly returned to their trusted desktop spreadsheets.",
          "Nobody openly revolted against the system. Team members simply reached for the tool that lets them finish their immediate tasks fastest. If looking up an order in the new system takes five clicks and ten seconds of loading, whereas a local spreadsheet opens instantaneously, people will choose the spreadsheet every single time.",
          "MarkaSuites reached this clarity while engineering Marka+ ERP. An early development build required 18,046 milliseconds—over 18 seconds—from initial authentication to full executive dashboard rendering (Lab Test). That delay was tolerable in demo walkthroughs, but utterly untenable in live operations: rushed staff would immediately reach for pen and paper.",
          "Software adoption is not dictated by executive mandates; it is decided by whether daily tasks become lighter or heavier for the person performing them."
        ],
        "image": {
          "src": "/images/leadership-thoughts/expensive-software-only-three-people-use/image1.png",
          "alt": "Two-panel diagram: Chosen from vendor demo (board impressed → mass licenses bought → team retreats to spreadsheets) vs Chosen from daily workflow (observing real friction → sub-second speed → voluntary organic adoption)."
        }
      },
      {
        "eyebrow": "WHY THE PROBLEM PERSISTS",
        "mainTitle": "Those Who Approve the Purchase Are Not the Ones Using It Daily",
        "paragraphs": [
          "Decision-makers evaluate visual features; operational teams experience friction. Executives are dazzled by 3D predictive charts. Data entry staff simply want to post an invoice without cursor lag. When software is selected based on capabilities that impress in boardrooms, boring daily essentials are overlooked.",
          "New software introduces overhead before delivering relief. Before automation generates value, teams must migrate legacy records, adjust routines, and dual-run legacy systems. If leaders fail to support this transition, teams experience the platform solely as added burden.",
          "System latency loses to the instant spreadsheet. Spreadsheets present massive security and governance hazards, but possess one insurmountable superpower: zero latency. If an enterprise tool adds even three seconds of latency per entry, that friction compounds into a compelling rationale for operational abandonment.",
          "Zylo's 2026 data confirms this is a systemic corporate epidemic. With average license utilization hovering at just 52%, billions of dollars are wasted globally on digital shelfware."
        ]
      },
      {
        "eyebrow": "FIELD LESSONS",
        "mainTitle": "Making the System Faster Than Spreadsheets",
        "paragraphs": [
          "When MarkaSuites engineered Marka+ ERP, system latency was treated as an existential requirement rather than an afterthought. We recognized that warehouse and finance personnel would abandon any tool that slowed their routine.",
          "In lab benchmarks, the duration from user login to complete executive dashboard rendering was reduced from 18,046 ms down to 2,009 ms—an 89% latency reduction (Lab Test, engineering benchmark). Trial balance generation was optimized from 4,617.9 ms to 1,306.7 ms (Lab Test).",
          "Simulations estimated that compiling weekly multi-project progress summaries dropped from approximately 88 minutes down to 20 minutes per project (Simulation of 10,000 iterations). That tangible time recovery is what motivated teams to leave spreadsheets behind voluntarily.",
          "The leadership lesson: sustainable adoption is earned through performance and workflow respect. Benchmark figures reflect local lab environments; full technical methodologies are published in the MarkaSuite Case Study."
        ],
        "image": {
          "src": "/images/leadership-thoughts/expensive-software-only-three-people-use/image4.png",
          "alt": "Performance benchmark bar chart: Marka+ ERP login-to-dashboard latency dropping from 18,046 ms (early build) to 2,009 ms (September 2026 build)."
        }
      },
      {
        "eyebrow": "ACTIONABLE FRAMEWORK",
        "mainTitle": "Choose Software from Daily Workflows, Not Demo Days",
        "subsections": [
          {
            "subtitle": "Shadow a Team Member Before Watching Vendor Demos",
            "content": "Sit alongside an administrative or warehouse team member for half a day. Watch how they accept purchase orders, verify inventory, and troubleshoot errors. Document which tools they actually rely on and where their hours are consumed."
          },
          {
            "subtitle": "Involve End-Users in Vendor Evaluations",
            "content": "Bring operational staff into vendor demos. Hand them the keyboard and ask them to execute their real, messy daily transactions rather than scripted vendor sample data. Signs in your organisation: new software is announced to departments via broadcast email without anyone on the frontline ever previewing it."
          },
          {
            "subtitle": "Ensure the New Tool Is Measurably Faster Than the Old Way",
            "content": "Time common transactional tasks before signing a contract. How many seconds does generating an invoice take in the current setup versus the proposed system? If the new tool takes longer despite possessing more features, staff will inevitably seek offline workarounds."
          },
          {
            "subtitle": "Track Active Users, Not Just Purchased Licenses",
            "content": "Do not declare success based on license deployment. Track Weekly Active Users (WAU) and conduct an operational audit 30 days post-launch: decommission dormant seat licenses or re-engineer the workflow that created the bottleneck."
          }
        ],
        "image": {
          "src": "/images/leadership-thoughts/expensive-software-only-three-people-use/image2.jpg",
          "alt": "Close-up photograph of printed numerical spreadsheets: when new software introduces friction, staff quietly retreat to spreadsheets."
        }
      },
      {
        "eyebrow": "LEADERSHIP QUESTIONS",
        "mainTitle": "How Many People Actually Logged into Your System Last Week?",
        "paragraphs": [
          "Who authored the technical requirements for your latest enterprise software purchase, and were daily frontline operators included in that process?",
          "Has your technology vendor ever demonstrated real-world daily workflows using your messy production data, or only their pristine sample scenarios?",
          "How many seconds does it take for your operational staff to locate an order in the system versus in their offline spreadsheets?",
          "Is transaction data still being keyed twice: once into the official system, and once into offline spreadsheets or physical logs?",
          "How many seat licenses are you paying for this month, and how many have recorded meaningful activity in the past 30 days?",
          "Exceptional software requires no corporate coercion. Frontline teams will embrace it eagerly the moment it makes their daily shift lighter."
        ]
      },
      {
        "eyebrow": "NOTES & METHODOLOGY",
        "mainTitle": "Definitions, Internal Data Points & References",
        "paragraphs": [
          "Definition of System Adoption: The proportion of target users who actively execute their core responsibilities inside the software, verified through login logs and data transactions rather than license issuance.",
          "Internal Group Data Source: MarkaSuite Case Study Factsheet: F1 (login to executive dashboard 18,046 ms → 2,009 ms, 89% reduction, Lab Test), F3 (trial balance 4,617.9 ms → 1,306.7 ms, Lab Test), F8 (weekly project recaps ±88 → ±20 minutes, Simulation of 10,000 runs), F9 (533 commits from August 3 to November 5, 2026, Actual).",
          "External References: Zylo (2026). SaaS Management Index 2026. Global benchmark study of 40M+ licenses and $75B in SaaS expenditure. Lark Workplace Coordination Report (secondary citation)."
        ]
      }
    ]
  },
  {
    "id": 4,
    "slug": "a-beautiful-website-nobody-contacts",
    "title": "Our First Website Was Beautiful, and Nobody Contacted Us: Turning Visual Showcases into Conversation Engines",
    "category": "DIGITAL GROWTH",
    "tags": [
      "WEBSITES",
      "CONVERSION",
      "LEADS",
      "CRM"
    ],
    "author": "Web2Up Leadership",
    "readTime": "6 min read",
    "date": "November 2026",
    "datePublished": "2026-11-01",
    "dateModified": "2026-11-01",
    "language": "en-US",
    "description": "Websites are often judged by board room aesthetics rather than what customers actually search for. Why gorgeous websites stay quiet and how leaders turn them into fast conversation channels.",
    "coverImage": "/images/leadership-thoughts/a-beautiful-website-nobody-contacts/image2.jpg",
    "coverImageAlt": "A mobile smartphone on a wooden desk displaying a live web page: websites are typically approved on massive boardroom screens, but prospective clients experience them on mobile phones.",
    "sections": [
      {
        "eyebrow": "EXECUTIVE SUMMARY",
        "mainTitle": "Turning Visual Showcases into Conversation Engines",
        "paragraphs": [
          "The Idea: 'Our website looks great, but nobody contacts us' is one of the most frequent grievances from business owners. The core issue is rarely aesthetic design. Websites are evaluated based on boardroom tastes rather than the urgent questions prospective customers need answered.",
          "Why It Matters Now: A landmark audit of 2,241 US companies published by Harvard Business Review found that only 37% responded to web leads within an hour, the average response latency was 42 hours, and 23% never responded at all. Yet firms responding within an hour were nearly 7 times more likely to qualify the lead.",
          "What Leaders Can Do: Architect websites around customer questions, test flows exclusively on smartphones, connect submission forms directly to operational responders, and track answered leads rather than vanity traffic spikes."
        ]
      },
      {
        "eyebrow": "THE CENTRAL IDEA",
        "mainTitle": "Websites Are Judged by Meeting Room Taste, Not What Customers Seek",
        "paragraphs": [
          "The launch felt like a celebration. The new website was projected onto a massive boardroom display—smooth transitions, polished typography, and elegant corporate photography. Leadership was thrilled. Three months later, the inbound inquiry inbox remained silent, and discussions drifted toward buying paid ads.",
          "The refrain 'our website is gorgeous, but nobody reaches out' is a constant theme among business owners approaching Web2Up. Almost without exception, the website is aesthetically pleasing to those who commissioned it. What was rarely asked is what potential clients are looking for, and what happens the second they click submit.",
          "A beautiful website represents only half the journey.",
          "The other half lies in the digital plumbing after the click. In the AdsVar project, every website form submission syncs into the CRM within milliseconds, populated with the specific service tier selected (Lab Test). Sales representatives do not wait for an admin to forward an email; they know a high-intent prospect is inquiring before the prospect even leaves the page."
        ],
        "image": {
          "src": "/images/leadership-thoughts/a-beautiful-website-nobody-contacts/image4.png",
          "alt": "Two-panel diagram: Website as a static brochure (boardroom approval → form sent to generic email → delayed response → prospect leaves) vs Website as an active conversation channel (architected from buyer questions → tested on mobile → direct CRM sync → instant sales outreach)."
        }
      },
      {
        "eyebrow": "WHY THE PROBLEM PERSISTS",
        "mainTitle": "The Work Is Mistakenly Considered Complete When the Site Goes Live",
        "paragraphs": [
          "Those who approve the website are not the ones searching for services. Websites are reviewed on 27-inch monitors by executives who already know the business intimately. Prospective buyers arrive on mobile phones with simple, urgent inquiries: how much does it cost, when can work begin, and whom can I contact right now? When answers are buried behind long corporate history pages, they leave.",
          "The desktop bias masks mobile degradation. In our AdsVar benchmark tests, the desktop Lighthouse performance score achieved a perfect 100, whereas the mobile score registered 82, with Largest Contentful Paint taking 3.13 seconds (Lab Test, local server). The exact same website felt effortless on corporate Wi-Fi and sluggish on a mobile carrier network.",
          "Inbound leads fall into organizational voids. Forms dump into a shared administrative inbox checked erratically. The symptom is clear: nobody in leadership can state your company's median response time to a digital inquiry.",
          "Web leads grow cold in minutes. A potential client waiting for a reply is already browsing competitor offerings in adjacent browser tabs."
        ]
      },
      {
        "eyebrow": "FIELD LESSONS",
        "mainTitle": "A Website Connected Directly to the Responders",
        "paragraphs": [
          "AdsVar required a digital presence built to initiate commercial conversations rather than serve as digital brochureware.",
          "We engineered the website with a direct bridge to MarkaSuite CRM. In benchmark tests, 30 out of 30 contact submissions were captured with a median response time of 6.4 milliseconds (Lab Test). When prospects selected pricing packages, tier details, billing frequency, and pricing metadata were preserved (20/20, Lab Test), giving sales reps immediate context before picking up the phone. If the CRM is temporarily unavailable, leads queue safely in local storage (Lab Test).",
          "Operational simulations estimated that administrative overhead per inbound lead plummeted from approximately 17 minutes to 3 minutes—an 83% time reduction (Simulation, P10–P90 range: 74% to 89%). That recovered time is channeled directly into sub-hour response outreach.",
          "The takeaway: website quality is defined by what transpires after the click. Benchmark figures reflect local lab environments; full technical methodologies are published in the AdsVar Case Study."
        ],
        "image": {
          "src": "/images/leadership-thoughts/a-beautiful-website-nobody-contacts/image3.png",
          "alt": "Horizontal lead journey diagram: User completes form → received in 6.4 ms → recorded in MarkaSuite CRM with package context → sales rep initiates immediate conversation."
        }
      },
      {
        "eyebrow": "ACTIONABLE FRAMEWORK",
        "mainTitle": "Measure Websites by Conversations Created",
        "subsections": [
          {
            "subtitle": "Architect from Customer Questions, Not Corporate Milestones",
            "content": "Gather the ten most common questions prospects ask over phone or chat. Ensure clear answers can be located within two mobile scrolls. Corporate heritage pages can exist, but never in a way that obstructs pricing, capabilities, and direct contact avenues. Signs in your organisation: sales teams repeatedly answer the same basic questions that are supposedly 'already on the website'."
          },
          {
            "subtitle": "Review and Approve on Mobile Phones, Not Boardroom Displays",
            "content": "Audit your website exclusively on a standard smartphone over a cellular connection. Attempt to complete your contact form with one hand while walking. If the flow feels tedious to you, prospects will abandon it immediately."
          },
          {
            "subtitle": "Connect Inbound Forms Directly to Operational Responders",
            "content": "Leads sent to generic inboxes are leads neglected. Route form submissions into a CRM or directly to an accountable individual with explicit SLA targets (e.g., maximum 15 to 30 minutes). Include package and intent context so the initial response is tailored and immediate."
          },
          {
            "subtitle": "Track Answered Leads, Not Raw Visitor Counts",
            "content": "Surging visitor analytics look impressive, but traffic does not fund payroll. Report weekly on incoming lead volume, percentage responded to within 60 minutes, and qualified conversations initiated. Those metrics instantly reveal where conversion leaks."
          }
        ],
        "image": {
          "src": "/images/leadership-thoughts/a-beautiful-website-nobody-contacts/image1.jpg",
          "alt": "Laptop displaying marketing conversion analytics: reporting must focus on answered leads and response speed rather than raw traffic charts."
        }
      },
      {
        "eyebrow": "LEADERSHIP QUESTIONS",
        "mainTitle": "How Long Did Prospective Clients Wait for a Response Last Week?",
        "paragraphs": [
          "Can a prospective buyer find pricing expectations or contact options on your website within two mobile scrolls?",
          "When was the last time you opened your website on your own smartphone and completed the inquiry form?",
          "Where do website submissions route today, and which specific individual is held accountable for responding?",
          "How many leads came in last month, and what percentage received a substantive reply within the first hour?",
          "What metric does your marketing team lead with each month: visitor counts, or qualified commercial dialogues?",
          "A great website inspires potential clients to inquire. What converts them into loyal customers is a thoughtful response delivered with speed."
        ]
      },
      {
        "eyebrow": "NOTES & METHODOLOGY",
        "mainTitle": "Definitions, Internal Data Points & References",
        "paragraphs": [
          "Definition of Lead: A prospective client who submits verifiable contact details or requests detailed commercial information through the website.",
          "Definition of Lead Qualification: Verifying that an inquiring prospect has legitimate needs, urgency, and budget alignment with company offerings.",
          "Internal Group Data Source: AdsVar Case Study Factsheet: A1 (30/30 contact forms ingested, median 6.4 ms, Lab Test), A3 (tier and pricing capture, 20/20, Lab Test), A6 (resilient local queuing, Lab Test), A9 & A10 (Lighthouse desktop 100, mobile 82, LCP 3.13s, Lab Test), A13 (admin processing time reduced from ±17 to ±3 minutes, 83% saving, Simulation).",
          "External Reference: Oldroyd, J. B., McElheran, K., & Elkington, D. (2011). The Short Life of Online Sales Leads. Harvard Business Review, 89(3), 28. Response audit of 2,241 US corporations."
        ]
      }
    ]
  }
];


export const TESTIMONIALS_DUMMY_DATA = [
  {
    id: 1,
    name: 'Ibnu Sapto Adi',
    role: 'General Manager at PT Bahtera Sapta Permata',
    text: 'We needed a site that could handle high traffic and complex product catalogs. Kaluna delivered a fast, stable platform that makes selling our products effortless. Their communication was top-tier.',
    avatar: '/images/testimonials/ibnu-sapto.webp',
  },
  {
    id: 2,
    name: 'Goenawan Permadi',
    role: 'Editor-in-Chief at Suara Merdeka Network',
    text: 'Kaluna Technology helped us develop a professional and informative enterprise company profile website. The development process was well managed, and communication with the team went smoothly.',
    avatar: '/images/testimonials/gunawan.webp',
  },
  {
    id: 3,
    name: 'Simon Agung Hoedoyo',
    role: 'Project Leader – Digital Media & Web Systems at Top Toy',
    text: 'Kaluna Technology supported the implementation of our digital marketing display portal and interactive web system for Top Toy’s brand expansion. Their engineering and delivery were outstanding.',
    avatar: '/images/testimonials/simon-agung-hoedoyo.webp',
  },
  {
    id: 4,
    name: 'Ishaq Nfarara',
    role: 'Building Operations Manager at Queen City Mall',
    text: 'Kaluna Technology helped us develop a modern web management system for our facility operations. The platform is responsive, intuitive, and perfectly suited to our daily commercial workflows.',
    avatar: '/images/testimonials/ishaq-nfarara.webp',
  },
  {
    id: 5,
    name: 'Anisa Apriani',
    role: 'Business Development Manager at Sinau Print',
    text: 'Kaluna Technology didn’t just build us a website—they built us a digital headquarters. The design is modern, the backend is intuitive, and our clients constantly compliment the user experience.',
    avatar: '/images/testimonials/anisa.webp',
  },
  {
    id: 6,
    name: 'Sisca Kristina Dewi',
    role: 'General Manager at Mandiri Pribumi',
    text: 'The company profile website developed by Kaluna Technology met our expectations. It looks professional, and the entire development process went smoothly.',
    avatar: '/images/testimonials/sisca.webp',
  },
  {
    id: 7,
    name: 'Mayakharta Siahaan',
    role: 'Marketing Manager at X1-Tire',
    text: 'Our old site was clunky and hard to update. Kaluna built a beautiful, customizable web that lets my marketing team launch new campaigns and update content in minutes—not days.',
    avatar: '/images/testimonials/mayakarta.webp',
  },
];
