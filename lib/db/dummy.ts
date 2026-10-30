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
   CASE STUDIES DUMMY DATA (6 Articles aligned 1-to-1 with Our Solution)
   ───────────────────────────────────────────────────────────────────────── */
export const CASE_STUDIES_DUMMY_DATA: CaseStudyArticle[] = [
  /* ── 1. Sinau Print ── */
  {
    id: 1,
    slug: 'sinau-print-pos-system',
    title: 'Sinau Print',
    category: 'ENTERPRISE SOLUTION',
    tags: ['POINT OF SALE', 'ERP ARCHITECTURE', 'RETAIL AUTOMATION'],
    dateLabel: 'APRIL 2026',
    dateValue: '2026-04-22',
    description: 'A centralized Point of Sale and retail operations ERP solution designed to streamline multi-branch sales, order flows, payment handling, and automated WhatsApp invoice dispatch.',
    coverImage: '/images/case-studies/sinau-print.svg',
    coverImageAlt: 'Sinau Print Point of Sale and Operations Management System',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Managing High-Volume Orders Across Teams Without Unified Operational Flow',
        paragraphs: [
          'Managing custom retail orders, print production, and customer fulfillment across multiple branch teams creates friction when transactions involve variable down payments, installment schedules, and multi-stage production.',
          'Without a centralized architecture, businesses experience data silos between counters, delayed invoice delivery, payment tracking discrepancies, and limited visibility into daily operational revenue.',
        ],
      },
      {
        mainTitle: 'Connecting Sales, Order Processing, and Fulfillment into One Ecosystem',
        paragraphs: [
          'We engineered a tailored enterprise POS and workflow management system that synchronizes front-counter cashier desks, production queues, accounting reconciliations, and customer communication into a unified platform.',
        ],
        image: { src: '/images/case-studies/sinau-print.svg', alt: 'Centralized POS platform connecting sales, payments, and production teams' },
      },
      {
        eyebrow: 'OUR SOLUTION',
        mainTitle: 'An Integrated Architecture Designed Around Every Stage of the Retail Workflow',
        subsections: [
          { subtitle: '01', content: 'Real-Time Sales & Transaction Dashboard: Delivers live multi-counter sales performance, transaction velocity, and revenue analytics for instant leadership visibility.' },
          { subtitle: '02', content: 'Direct Order Dispatch & Tracking: Sales and customer service teams register, update, and route custom print orders with granular status logging.' },
          { subtitle: '03', content: 'Split Bill & Multi-Stage Payment Processing: Native support for partial deposits, installment schedules, and final settlement reconciliations.' },
          { subtitle: '04', content: 'Automated Midtrans Payment Gateway Integration: Seamless digital payments via virtual accounts, QRIS, and e-wallets with instant status callbacks.' },
          { subtitle: '05', content: 'Role-Based Operational Access Control: Strictly isolates counter cashiers, production staff, inventory handlers, and branch managers with assigned permission boundaries.' },
          { subtitle: '06', content: 'Automated Invoice Delivery via WhatsApp API: Dispatches digital PDF receipts and payment reminders directly to customers upon checkout, reducing counter wait times.' },
        ],
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'Transparent, Efficient, and Accelerated Store Operations',
        paragraphs: [
          'The Sinau Print deployment eliminated manual receipt handling, reduced transaction cycle times by over 45%, and gave management absolute visibility into daily branch revenue and production bottlenecks.',
        ],
      },
    ],
  },

  /* ── 2. Presstis ── */
  {
    id: 2,
    slug: 'presstis-digital-platform',
    title: 'Presstis',
    category: 'DIGITAL DEVELOPMENT',
    tags: ['WEB DEVELOPMENT', 'DIGITAL PLATFORM', 'MEDIA ARCHITECTURE'],
    dateLabel: 'MAY 2026',
    dateValue: '2026-05-15',
    description: 'A high-performance digital publishing and media distribution platform engineered for multi-publication networks, editorial collaboration, and high-concurrency reader engagement.',
    coverImage: '/images/case-studies/presstis.svg',
    coverImageAlt: 'Presstis Scalable Digital Media and Web Platform',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Fragmented Editorial Pipelines and Sluggish Delivery Under Traffic Surges',
        paragraphs: [
          'Modern media networks operating across diverse niche publications face recurring technical hurdles: slow page render speeds that hurt search ranking, disjointed content management systems for editorial teams, and security vulnerabilities during breaking-news traffic spikes.',
          'Legacy monolithic web frameworks proved too rigid to support real-time syndication across multiple domain properties while maintaining modern UX standards.',
        ],
      },
      {
        mainTitle: 'A Custom Engineered Web Architecture Built for Speed and Uncompromising Scalability',
        paragraphs: [
          'We designed and coded a modern digital platform from the ground up, utilizing edge-rendered web technologies, distributed CDN caching, and an intuitive unified newsroom backend tailored to high-velocity editorial operations.',
        ],
        image: { src: '/images/case-studies/presstis.svg', alt: 'Presstis high-performance digital media platform architecture' },
      },
      {
        eyebrow: 'OUR SOLUTION',
        mainTitle: 'Headless Scalability, Edge Acceleration, and Unified Editorial Governance',
        subsections: [
          { subtitle: '01', content: 'Ultra-Low Latency Content Delivery: Edge-cached distribution guaranteeing sub-second page load times across tens of thousands of concurrent readers.' },
          { subtitle: '02', content: 'Multi-Publication Editorial Workspace: A centralized publishing CMS enabling journalists and editors to draft, review, and syndicate content across multiple brand domains.' },
          { subtitle: '03', content: 'Real-Time Engagement Telemetry: Integrated audience interaction analytics measuring dwell time, scroll depth, and trending articles to guide editorial strategy.' },
          { subtitle: '04', content: 'Enterprise-Grade Security Protocols: Proactive DDoS shielding, automated SSL rotation, and granular role permissions ensuring continuous platform availability.' },
          { subtitle: '05', content: 'Dynamic Monetization & Ad Placement: Native, non-intrusive sponsor and ad slots engineered to maximize revenue yield without sacrificing Core Web Vitals.' },
          { subtitle: '06', content: 'SEO-First Semantic Architecture: Structured JSON-LD schemas, automated XML sitemaps, and optimized open-graph metadata driving organic search prominence.' },
        ],
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'Exceptional Reader Retention and 100% Availability Under Surge Conditions',
        paragraphs: [
          'Presstis delivered a 300% improvement in Core Web Vitals performance, slashed infrastructure operating costs by 40%, and empowered editorial staff to publish and syndicate breaking stories in seconds.',
        ],
      },
    ],
  },

  /* ── 3. MarkaPlus ── */
  {
    id: 3,
    slug: 'markaplus-ai-assistant',
    title: 'MarkaPlus',
    category: 'DATA & AI INTEGRATION',
    tags: ['AI ERP ASSISTANT', 'DEEP LEARNING', 'DATA PIPELINES'],
    dateLabel: 'JUNE 2026',
    dateValue: '2026-06-20',
    description: 'An intelligent AI deep learning assistant integrated directly into enterprise ERP software, converting complex multi-database queries into instant operational guidance and automated decisions.',
    coverImage: '/images/case-studies/markaplus.svg',
    coverImageAlt: 'MarkaPlus Intelligent AI Chat Assistant and ERP Deep Learning Infrastructure',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Data Latency and Information Overload in Complex Corporate Systems',
        paragraphs: [
          'Enterprise ERP databases store millions of transactional records across finance, inventory, logistics, and personnel. Yet, when leaders and operational staff need critical answers, they face cumbersome SQL reporting, manual spreadsheet downloads, and hour-long delays.',
          'Without real-time conversational intelligence, executives make decisions on outdated summaries while front-line teams struggle to navigate complicated software menus.',
        ],
      },
      {
        mainTitle: 'Embedding Context-Aware AI Directly into Daily Operational Workflows',
        paragraphs: [
          'We built MarkaPlus—a secure deep learning conversational engine embedded natively within the enterprise platform. Operating on custom retrieval pipelines, MarkaPlus transforms complex multi-table ERP relationships into natural, instant dialogue.',
        ],
        image: { src: '/images/case-studies/markaplus.svg', alt: 'MarkaPlus AI Assistant embedded in enterprise ERP' },
      },
      {
        eyebrow: 'OUR SOLUTION',
        mainTitle: 'From Passive Databases to Proactive Operational Intelligence',
        subsections: [
          { subtitle: '01', content: 'Natural Language Business Queries: Employees ask everyday questions—such as "Summarize today’s pending approvals" or "Forecast stock replenishment for next week"—and receive verified live data in seconds.' },
          { subtitle: '02', content: 'Predictive Demand & Anomaly Detection: Deep learning models continuously analyze historical consumption and order patterns to alert managers of supply irregularities.' },
          { subtitle: '03', content: 'Automated Executive Briefings: Synthesizes multi-department metrics into concise morning executive digests delivered via secure enterprise chat.' },
          { subtitle: '04', content: 'Zero-Leakage Role Security: Built-in permission filters guarantee the AI respects corporate access hierarchies, strictly isolating sensitive financial and executive records.' },
          { subtitle: '05', content: 'Interactive Task Execution: Beyond answering questions, MarkaPlus assists authorized users in initiating approval requests, scheduling tasks, and dispatching notifications.' },
          { subtitle: '06', content: 'Self-Optimizing Query Intelligence: Learns from ongoing user feedback and domain vocabulary to continually enhance semantic precision across business divisions.' },
        ],
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'Frictionless Data Access and Autonomous Operational Speed',
        paragraphs: [
          'MarkaPlus reduced routine operational query time by 85%, eliminated dependence on IT staff for custom reporting, and fostered data-driven decision-making across all managerial tiers.',
        ],
      },
    ],
  },

  /* ── 4. MARKA - Finance ── */
  {
    id: 4,
    slug: 'marka-finance-accounting',
    title: 'MARKA - Finance',
    category: 'ENTERPRISE SOLUTION',
    tags: ['FINANCE ERP', 'CORPORATE ACCOUNTING', 'CASH FLOW GOVERNANCE'],
    dateLabel: 'JULY 2026',
    dateValue: '2026-07-08',
    description: 'An integrated financial management architecture designed to unify corporate banking, multi-branch general ledgers, batch disbursements, and real-time cash flow governance.',
    coverImage: '/images/case-studies/marka-finance.svg',
    coverImageAlt: 'MARKA Corporate Finance and Accounting Platform by Arsalynk',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Fragmented Financial Records and Slow Month-End Reconciliation Cycles',
        paragraphs: [
          'As mid-to-large enterprises scale across multiple subsidiaries and project entities, financial governance becomes vulnerable to data fragmentation. Disjointed accounting tools lead to delayed journal entries, manual bank reconciliations, and slow month-end closures.',
          'Without an integrated financial command center, CFOs and finance controllers cannot forecast liquidity accurately or enforce rigorous budget discipline across distributed operations.',
        ],
      },
      {
        mainTitle: 'Unifying Banking, Ledgering, and Expense Controls into One Financial Core',
        paragraphs: [
          'We engineered MARKA - Finance as an enterprise-grade financial management platform that automates transaction journalizing, reconciles banking feeds in real-time, and provides audit-ready reporting across all business units.',
        ],
        image: { src: '/images/case-studies/marka-finance.svg', alt: 'MARKA Finance and Corporate Accounting dashboard' },
      },
      {
        eyebrow: 'OUR SOLUTION',
        mainTitle: 'Precision Financial Engineering with Real-Time Cash Flow Governance',
        subsections: [
          { subtitle: '01', content: 'Multi-Account Corporate Banking Integration: Connects bank feeds directly to the general ledger, synchronizing incoming and outgoing transactions automatically.' },
          { subtitle: '02', content: 'Automated General Ledger & Journalizing: Rules-based engines generate double-entry journal records upon transaction completion, eliminating manual spreadsheet entry.' },
          { subtitle: '03', content: 'Multi-Level Approval Workflows: Tiered authorization protocols for expenditures and disbursements enforce compliance with corporate governance bylaws.' },
          { subtitle: '04', content: 'Batch Payment & Payroll Disbursement: Streamlines mass vendor payouts and employee payroll schedules into single, verified transaction batches.' },
          { subtitle: '05', content: 'Real-Time Cash Flow & Liquidity Analytics: Live visual dashboards monitor operating runway, accounts receivable aging, and capital expenditure burn rates.' },
          { subtitle: '06', content: 'Tax & Audit Compliance Readiness: Built-in tax calculation engines and immutable audit logs ensure seamless year-end tax filings and audit verifications.' },
        ],
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'Flawless Financial Control, Accelerated Closures, and Total Transparency',
        paragraphs: [
          'Implementing MARKA - Finance reduced month-end closing times from 14 days to just 3 days, eliminated reconciliation discrepancies, and provided executive leadership with real-time liquidity visibility.',
        ],
      },
    ],
  },

  /* ── 5. MARKA - Project Manager ── */
  {
    id: 5,
    slug: 'marka-project-manager',
    title: 'MARKA - Project Manager',
    category: 'ENTERPRISE SOLUTION',
    tags: ['PROJECT MANAGEMENT', 'WORKFLOW GOVERNANCE', 'RESOURCE SCHEDULING'],
    dateLabel: 'AUGUST 2026',
    dateValue: '2026-08-12',
    description: 'A comprehensive operational management platform coordinating multi-tier project milestones, resource allocation, task dependencies, and budget compliance across enterprise teams.',
    coverImage: '/images/case-studies/marka-project-manager.svg',
    coverImageAlt: 'MARKA Project Management and Operations Platform by Arsalynk',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Project Delays, Resource Bottlenecks, and Opaque Execution Pipelines',
        paragraphs: [
          'Executing large-scale corporate initiatives across dispersed teams often suffers from fragmented task management. Deadlines slip when dependencies are not clearly mapped, team workloads become imbalanced, and management lacks real-time insight into project progress.',
          'Relying on generic task boards fails to account for contract milestones, procurement deadlines, and budget tracking required in high-stakes enterprise projects.',
        ],
      },
      {
        mainTitle: 'A Structured Command Layer Aligning Strategy, Deadlines, and Team Execution',
        paragraphs: [
          'We architected MARKA - Project Manager to bridge corporate leadership expectations with on-the-ground operational delivery, providing clear dependency mapping, capacity planning, and automated milestone verification.',
        ],
        image: { src: '/images/case-studies/marka-project-manager.svg', alt: 'MARKA Project Manager and resource scheduling interface' },
      },
      {
        eyebrow: 'OUR SOLUTION',
        mainTitle: 'End-to-End Operational Control from Milestone Inception to Final Handover',
        subsections: [
          { subtitle: '01', content: 'Dynamic Gantt & Milestone Dependency Mapping: Visual timeline modeling that highlights critical paths and alerts project managers to emerging delivery risks.' },
          { subtitle: '02', content: 'Capacity & Workload Allocation: Real-time resource balancing prevents employee burnout and ensures specialized skills are assigned to high-priority deliverables.' },
          { subtitle: '03', content: 'Integrated Project Budget & Cost Tracking: Links billable hours, software licenses, and external vendor expenses directly against project cost centers.' },
          { subtitle: '04', content: 'Automated Deliverable Sign-Off Workflows: Digital handoff checklists and client review approvals establish clear accountability for milestone completion.' },
          { subtitle: '05', content: 'Cross-Department Collaboration Hub: Centralizes project documentation, task discussions, and file versions within context-rich project threads.' },
          { subtitle: '06', content: 'Executive Progress & SLA Dashboards: Consolidated executive overviews summarizing on-time delivery rates, budget variance, and department performance.' },
        ],
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'Predictable Delivery, Optimized Resource Utilization, and Scalable Execution',
        paragraphs: [
          'Deploying MARKA - Project Manager elevated on-time project completion rates to 96%, reduced administrative status meetings by half, and empowered teams with transparent, accountable workflow discipline.',
        ],
      },
    ],
  },

  /* ── 6. MyBOS ── */
  {
    id: 6,
    slug: 'myboss-logistics-fleet-management',
    title: 'MyBOS',
    category: 'SMART IOT SYSTEM',
    tags: ['IOT TELEMETRY', 'FLEET LOGISTICS', 'DEVICE INTEGRATION'],
    dateLabel: 'SEPTEMBER 2026',
    dateValue: '2026-09-24',
    description: 'Connected IoT hardware and command telemetry bridging commercial vehicle fleets, remote sensors, and logistics hubs into real-time operational transport intelligence.',
    coverImage: '/images/case-studies/mybos.svg',
    coverImageAlt: 'MyBOS Connected Operational IoT Ecosystem and Fleet Telemetry',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Operational Blind Spots Between Control Rooms, Drivers, and Field Assets',
        paragraphs: [
          'Managing commercial logistics fleets across vast regional routes without IoT integration leaves dispatchers in the dark regarding actual vehicle locations, driver idling, transit delays, and fuel loss.',
          'Legacy paper manifests and manual phone calls delay delivery confirmations, cause customer disputes, and prevent timely emergency response to unexpected mechanical breakdowns.',
        ],
      },
      {
        mainTitle: 'Bridging Physical Vehicles with Intelligent Enterprise Software',
        paragraphs: [
          'We deployed the MyBOS IoT ecosystem—integrating onboard telematics sensors, GPS tracking units, and an automated central dispatch command center that monitors every vehicle movement in real time.',
        ],
        image: { src: '/images/case-studies/mybos.svg', alt: 'MyBOS IoT Fleet Telemetry and Command Center' },
      },
      {
        eyebrow: 'OUR SOLUTION',
        mainTitle: 'Real-Time Hardware Telemetry, Smart Dispatch, and Digital Proof of Delivery',
        subsections: [
          { subtitle: '01', content: 'Live IoT Telemetry & GPS Tracking: Real-time satellite positioning and vehicle sensor feeds deliver continuous route visibility to central dispatch controllers.' },
          { subtitle: '02', content: 'Automated Digital Delivery Orders: Eliminates paper manifests by routing digital delivery tasks directly to drivers with navigation instructions.' },
          { subtitle: '03', content: 'Intelligent Route & Fuel Optimization: Recommends optimal routes based on traffic density and cargo load, substantially reducing fleet fuel consumption.' },
          { subtitle: '04', content: 'Driver Behavior & Safety Monitoring: Tracks harsh braking, excessive idling, and operating hours to foster safety discipline and schedule preventive maintenance.' },
          { subtitle: '05', content: 'Digital Proof of Delivery (e-POD): Captures digital signatures, timestamped GPS coordinates, and recipient photos upon delivery for instant billing reconciliation.' },
          { subtitle: '06', content: 'Fleet Maintenance & Diagnostic Telemetry: Real-time engine telemetry alerts workshop managers to impending component wear before sudden roadside breakdowns.' },
        ],
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'Full Operational Control, Lower Transit Costs, and Guaranteed Reliability',
        paragraphs: [
          'MyBOS delivered a 22% reduction in fleet fuel expenditure, cut delivery dispute resolutions to zero with e-POD, and empowered logistics dispatchers with complete real-time command over distributed transit assets.',
        ],
      },
    ],
  },
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
    datePublished: '2026-07-12',
    dateModified: '2026-07-12',
    language: 'en-US',
    description: 'Lessons from building integrated platforms: sustainable transformation begins by understanding how work truly moves before selecting the technology.',
    coverImage: '/images/insight-programs/leadership-thoughts/real-workflow.svg',
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
    datePublished: '2026-06-18',
    dateModified: '2026-06-18',
    language: 'en-US',
    description: 'Dashboards do not create alignment by themselves. Leaders must establish shared definitions and connect every metric to a decision.',
    coverImage: '/images/insight-programs/leadership-thoughts/data-leadership.svg',
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
    datePublished: '2026-05-20',
    dateModified: '2026-05-20',
    language: 'en-US',
    description: 'What connected operations teach leaders about visibility, escalation, and building systems that remain dependable when conditions change.',
    coverImage: '/images/insight-programs/leadership-thoughts/resilient-organisation.svg',
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
    datePublished: '2026-04-16',
    dateModified: '2026-04-16',
    language: 'en-US',
    description: 'A feasibility study is valuable only when evidence, assumptions, and implementation choices are connected in one decision framework.',
    coverImage: '/images/insight-programs/leadership-thoughts/credible-strategy.svg',
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
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
    language: 'en-US',
    description: 'Evidence creates impact only when people can understand it, trust it, and use it within the realities of everyday life.',
    coverImage: '/images/insight-programs/leadership-thoughts/communication-design.svg',
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
    datePublished: '2026-02-14',
    dateModified: '2026-02-14',
    language: 'en-US',
    description: 'From corporate platforms to sports films, trust grows when every audience touchpoint expresses the same promise with clarity.',
    coverImage: '/images/insight-programs/leadership-thoughts/brand-trust.svg',
    coverImageAlt: 'Brand, video, and digital leads reviewing a consistent experience',
    sections: [
      { eyebrow: 'THE CENTRAL IDEA', mainTitle: 'Consistency Is More Than Visual Repetition', paragraphs: ['The Padel Arena and Web Media projects demonstrate that brand consistency is the alignment of story, interface, service expectations, and delivery quality.', 'Audiences do not experience a brand guideline. They experience promises across moments: an article, a proposal, a platform, a support interaction, or a delivered event. Trust grows when those moments reinforce one another.'], image: { src: '/images/projects/web-media-profile/case-study-angle-02.webp', alt: 'Editorial team reviewing a consistent responsive brand experience' } },
      { eyebrow: 'THE LEADERSHIP RESPONSIBILITY', mainTitle: 'Brand Drift Is Often an Operating-System Problem', paragraphs: ['Inconsistency is rarely caused only by poor design judgment. Teams may lack shared priorities, reusable assets, clear approval boundaries, or enough time to interpret abstract guidance.', 'Leadership should make consistency easier to produce by connecting brand principles to everyday tools, roles, and decisions.'] },
      { eyebrow: 'A SUSTAINABLE SYSTEM', mainTitle: 'Build Governance That Supports Good Judgment', subsections: [{ subtitle: 'Define the Promise', content: 'A small number of clear experience principles helps teams evaluate choices beyond visual appearance.' }, { subtitle: 'Provide Reusable Foundations', content: 'Components, templates, voice guidance, and asset libraries reduce unnecessary reinvention.' }, { subtitle: 'Set Decision Boundaries', content: 'Teams need to know what they may adapt independently and what requires broader review.' }, { subtitle: 'Audit the Full Experience', content: 'Review customer journeys and delivery moments, not only campaign outputs, for alignment with the promise.' }] },
      { eyebrow: 'LEADERSHIP QUESTIONS', mainTitle: 'Would the Audience Recognise the Same Organisation at Every Touchpoint?', paragraphs: ['The question is not whether every output looks identical. It is whether tone, clarity, quality, and behaviour express a coherent promise.', 'Strong brand leadership creates enough structure for consistency and enough freedom for teams to respond intelligently to context.'] }
    ]
  }
];


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
