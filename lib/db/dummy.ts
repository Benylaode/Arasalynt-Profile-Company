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
