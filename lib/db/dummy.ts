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
   CASE STUDIES DUMMY DATA (6 Articles aligned 1-to-1 with Our Solution)
   ───────────────────────────────────────────────────────────────────────── */
export const CASE_STUDIES_DUMMY_DATA: CaseStudyArticle[] = [
  /* ── 1. Sinau Print — POS ── */
  {
    id: 1,
    slug: 'sinau-print-pos-system',
    title: 'Sinau Print (Point of Sale)',
    category: 'TECHNOLOGY',
    tags: ['POINT OF SALE', 'ERP', 'RETAIL OPERATIONS'],
    dateLabel: 'APRIL 2026',
    dateValue: '2026-04-22',
    description: 'A centralized Point of Sale solution designed to streamline sales operations, order management, payment processing, and customer communication—from the initial order to final completion.',
    coverImage: '/images/case-studies/sinau-print-pos/cover.webp',
    coverImageAlt: 'Operations team managing sales and order workflows on the Sinau Print POS system',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Managing Sales Across Multiple Teams Without a Centralized System',
        paragraphs: [
          'Managing sales and customer orders across multiple teams can quickly become complex, especially when transactions involve deposits, installment payments, production processes, and different levels of user access.',
          'Without a centralized system, businesses face limited visibility into real-time sales performance, manual and fragmented order management, difficulty tracking deposits and outstanding balances, time-consuming invoice creation, lack of clear authorization across purchasing and production teams, inconsistent customer communication, and a high risk of errors when multiple teams access the same order data.',
        ],
      },
      {
        mainTitle: 'Bringing Sales, Orders, and Payments into One Operational Platform',
        paragraphs: [
          'We developed an integrated Point of Sale system that connects sales, order management, payments, production, and customer communication within a single platform, ensuring every transaction and workflow step is visible, controlled, and consistent.',
        ],
        image: { src: '/images/case-studies/sinau-print-pos/case-study-angle-02.webp', alt: 'Centralized POS platform connecting sales, payments, and production teams' },
      },
      {
        eyebrow: 'OUR SOLUTION',
        mainTitle: 'An Integrated System Built Around Every Stage of the Sales Workflow',
        subsections: [
          { subtitle: '01', content: 'Real-Time Sales Dashboard: A centralized dashboard provides key sales metrics and performance insights, allowing teams and management to monitor business performance and make informed decisions based on real-time data.' },
          { subtitle: '02', content: 'Direct Order Input & Management: Sales and customer service teams can create, update, and manage orders directly within the system, ensuring order information remains centralized, accurate, and accessible to authorized users.' },
          { subtitle: '03', content: 'Split Bill & Installment Management: The system supports flexible payment structures, including deposits and final payments, making it easier to manage transactions where customers pay in multiple stages.' },
          { subtitle: '04', content: 'Save Order for Credit & Installment Transactions: Orders can be saved and managed for customers who purchase on credit or through installment plans, allowing teams to track outstanding payments without losing the original order details.' },
          { subtitle: '05', content: 'Midtrans Integration & Automated Invoicing: Payment processing is integrated with Midtrans, while invoices are generated automatically based on transaction data, reducing manual administrative work and minimizing payment-related errors.' },
          { subtitle: '06', content: 'Role-Based Access Control: The system provides different access levels for Superadmin, Admin, Customer Service, and Production teams, ensuring each role accesses only the functions and information relevant to their responsibilities.' },
          { subtitle: '07', content: 'Authorized Purchase, Production & Order Completion Workflow: Business processes are structured into controlled stages—from purchasing and production to order completion—managed by authorized users, creating a clearer workflow and reducing unauthorized actions.' },
          { subtitle: '08', content: 'Automated Invoice Delivery via WhatsApp: Invoices are automatically delivered to customers through WhatsApp, providing a faster and more convenient way to communicate payment information while reducing manual follow-ups.' },
        ],
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'A More Connected, Efficient, and Transparent Sales Operation',
        paragraphs: [
          'The POS system creates a more connected and efficient operational workflow by bringing sales, payments, orders, production, and customer communication into one platform.',
          'As a result, the business benefits from greater operational efficiency through centralized order and sales management, improved financial visibility with clearer tracking of deposits and outstanding balances, reduced manual processes through automated invoicing and payment integration, better accountability with role-based access and authorized workflows, faster customer communication through automated invoice delivery via WhatsApp, and more accurate order management by maintaining consistent information across teams.',
        ],
      },
    ],
  },

  /* ── 2. Sinau Print — WMS ── */
  {
    id: 2,
    slug: 'sinau-print-warehouse-management-wms',
    title: 'Sinau Print (Warehouse Management)',
    category: 'TECHNOLOGY',
    tags: ['WAREHOUSE MANAGEMENT', 'INVENTORY', 'SUPPLY CHAIN'],
    dateLabel: 'APRIL 2026',
    dateValue: '2026-04-22',
    description: 'A Warehouse Management System built to provide complete visibility and control over inventory—from purchase orders and inbound stock to production consumption and stock reconciliation.',
    coverImage: '/images/case-studies/sinau-print-wms/cover.webp',
    coverImageAlt: 'Warehouse operations team conducting stock opname and inventory inspection at Sinau Print',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Inaccurate Inventory and Limited Visibility Across Warehouse Operations',
        paragraphs: [
          'Managing warehouse operations manually often leads to inaccurate inventory records, inefficient stock movement, and limited visibility into material usage. As production scales, businesses need a reliable system to ensure that inventory remains accurate, procurement is well-documented, and stock levels support uninterrupted operations.',
          'Common operational challenges include manual tracking of incoming and outgoing inventory, difficulty monitoring raw material consumption for each production order, limited visibility into vendor purchasing history, unexpected stock shortages due to late replenishment, poor estimation of material waste during production, and time-consuming stock audits and inventory adjustments.',
        ],
      },
      {
        mainTitle: 'A Central Inventory System from Purchase Order to Production Floor',
        paragraphs: [
          'We developed a centralized Warehouse Management System that automates inventory movement, improves material traceability, and helps businesses maintain accurate stock records across every stage of warehouse operations.',
        ],
        image: { src: '/images/case-studies/sinau-print-wms/case-study-angle-02.webp', alt: 'Industrial warehouse facility with high-bay racking system and inventory management operations' },
      },
      {
        eyebrow: 'OUR SOLUTION',
        mainTitle: 'Automating Inventory Accuracy from Receiving to Production',
        subsections: [
          { subtitle: '01', content: 'Automated Purchase Orders & Stock Movement: The system automatically records purchase orders, inbound inventory, and outbound stock transactions, ensuring every stock movement is reflected in real time while reducing manual data entry.' },
          { subtitle: '02', content: 'Material Consumption Tracking per Production Order: Raw material usage is tracked for each production order, providing clear visibility into how inventory is consumed throughout the manufacturing process and supporting more accurate production planning.' },
          { subtitle: '03', content: 'Vendor Transaction History: A complete history of purchases and transactions is maintained for every vendor, making it easier to review procurement activities, evaluate supplier performance, and access historical purchasing data whenever needed.' },
          { subtitle: '04', content: 'Low Stock Alerts: The system proactively monitors inventory levels and sends alerts when stock reaches predefined thresholds, allowing teams to replenish inventory before shortages impact production.' },
          { subtitle: '05', content: 'Material Waste Estimation: Built-in waste estimation helps businesses monitor expected material loss during production, enabling better cost control and more informed inventory planning.' },
          { subtitle: '06', content: 'Stock Opname & Manual Adjustments: The WMS supports physical inventory counts along with authorized manual adjustments, ensuring that warehouse records remain aligned with actual inventory conditions.' },
        ],
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'Greater Inventory Accuracy, Stronger Production Support, and Efficient Warehouse Management',
        paragraphs: [
          'By centralizing warehouse operations into a single platform, the WMS helps businesses achieve greater inventory accuracy, stronger production support, and more efficient warehouse management.',
          'Key outcomes include improved inventory accuracy through automated stock movement recording, greater production visibility with material consumption tracking for every order, better procurement insights through comprehensive vendor transaction history, fewer stock shortages with proactive low-stock alerts, more effective cost control through waste estimation and inventory monitoring, and faster inventory reconciliation with streamlined stock opname and adjustment processes.',
        ],
      },
    ],
  },

  /* ── 3. PT Sinergi Muda Arsa — HRMS ── */
  {
    id: 3,
    slug: 'pt-sinergi-muda-arsa-hr-management',
    title: 'PT Sinergi Muda Arsa (HR Management)',
    category: 'TECHNOLOGY & DATA',
    tags: ['HRMS', 'ENTERPRISE PORTAL', 'WORKFORCE MANAGEMENT'],
    dateLabel: 'JUNE 2026',
    dateValue: '2026-06-24',
    description: 'An integrated ERP solution designed to streamline Human Resources management, employee development, and organizational processes through a centralized and structured platform.',
    coverImage: '/images/case-studies/sinergi-muda-arsa-hr/cover.webp',
    coverImageAlt: 'HR team reviewing employee assessment and development data on the integrated ERP portal',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Fragmented HR Data and Inconsistent Evaluation Processes Limiting Workforce Visibility',
        paragraphs: [
          'Managing human resources effectively requires more than maintaining employee records. Organizations need a structured approach to managing employee performance, development, assessments, and HR processes while ensuring that relevant information is accessible to the right people.',
          'As organizations grow, HR teams face challenges such as employee information scattered across different systems, manual and time-consuming HR administration, difficulty monitoring employee development and assessment results, inconsistent processes for periodic employee evaluations, limited visibility into employee potential and competencies, difficulty maintaining structured assessment histories, and a lack of centralized HR data to support management decision-making.',
        ],
      },
      {
        mainTitle: 'Centralizing People Data, Processes, and Annual Assessments in One ERP Platform',
        paragraphs: [
          'We developed an ERP solution with an integrated Human Resources Management system that centralizes employee information, HR processes, and annual psychological assessments within a single platform, enabling more structured, data-driven, and sustainable people management.',
        ],
        image: { src: '/images/case-studies/sinergi-muda-arsa-hr/cover.webp', alt: 'HR professionals managing employee lifecycle data, assessments, and development insights on the ERP portal' },
      },
      {
        eyebrow: 'OUR SOLUTION',
        mainTitle: 'An Integrated HR Platform Built Around Employee Lifecycle and Annual Assessment',
        subsections: [
          { subtitle: '01', content: 'Centralized Employee Management: The system provides a centralized employee database where HR teams can manage employee profiles, organizational information, employment records, and relevant HR data in a structured and easily accessible environment.' },
          { subtitle: '02', content: 'Annual Psychological Assessment: The ERP provides a dedicated platform for conducting annual psychological assessments (psychotests) for employees, allowing organizations to conduct periodic evaluations and maintain assessment records as part of their employee development and HR management processes.' },
          { subtitle: '03', content: 'Employee Assessment History: Psychological assessment results and employee evaluation records are stored systematically, creating a historical overview that HR teams can use to monitor employee development over time.' },
          { subtitle: '04', content: 'Structured HR Management: The system helps standardize HR processes across the organization, reducing reliance on manual administration and ensuring that employee-related activities follow a consistent workflow.' },
          { subtitle: '05', content: 'Employee Development & Potential Mapping: Assessment data provides HR teams and management with additional insights into employee characteristics, competencies, and development areas, supporting more informed decisions regarding employee development, training, and organizational planning.' },
          { subtitle: '06', content: 'Role-Based HR Access: Access to employee and assessment information is controlled according to user roles and responsibilities, helping protect sensitive HR data while ensuring that authorized users have access to the information they need.' },
          { subtitle: '07', content: 'Centralized HR Data & Reporting: By consolidating HR information and assessment data into one platform, management can access more structured information to support workforce planning, evaluation, and strategic decision-making.' },
        ],
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'A More Structured, Centralized, and Data-Driven HR Workflow',
        paragraphs: [
          'The ERP solution transforms HR management from a fragmented and administrative process into a more structured, centralized, and data-driven workflow.',
          'Key outcomes include more efficient HR administration through centralized employee management, structured annual psychological assessments with digital workflows and records, better visibility into employee development through historical assessment data, more informed workforce decisions supported by centralized HR information, improved data organization and accessibility across HR processes, stronger data governance through controlled access to employee information, and a more consistent HR workflow that can scale alongside organizational growth.',
        ],
      },
    ],
  },

  /* ── 4. Financial Management System ── */
  {
    id: 4,
    slug: 'financial-management-system',
    title: 'Financial Management System',
    category: 'TECHNOLOGY & DATA',
    tags: ['FINANCE', 'ACCOUNTING AUTOMATION', 'CASH FLOW'],
    dateLabel: 'MAY 2026',
    dateValue: '2026-05-15',
    description: 'An integrated financial management solution designed to provide real-time visibility into cash flow, cost structures, accounting transactions, taxation, payments, and project financing—helping businesses manage their financial operations with greater accuracy and control.',
    coverImage: '/images/case-studies/financial-management/cover.webp',
    coverImageAlt: 'Development team building the integrated financial management system architecture',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Fragmented Financial Processes Limiting Visibility, Accuracy, and Management Decisions',
        paragraphs: [
          'Managing financial operations across multiple projects, vendors, transactions, and payment schedules can become increasingly complex as a business grows.',
          'Without an integrated financial management system, finance teams face challenges such as limited visibility into real-time cash flow and financial conditions, difficulty calculating and monitoring Cost of Goods Sold for each business unit or project, manual recording and reconciliation of accounting transactions, complex tax administration and period-end closing processes, time-consuming vendor invoice processing, inefficient management of bulk and recurring payments, limited visibility into project capital allocation, and difficulty tracking and allocating overhead costs accurately.',
        ],
      },
      {
        mainTitle: 'Connecting Accounting, Cash Flow, Taxation, and Project Finance in One Platform',
        paragraphs: [
          'We developed an integrated financial management solution that connects accounting, cash flow, taxation, payments, project financing, and cost management within a centralized platform, enabling finance teams to work from one consistent source of financial truth.',
        ],
        image: { src: '/images/case-studies/financial-management/case-study-angle-02.webp', alt: 'Backend architecture powering the integrated financial management system with clean enterprise code structure' },
      },
      {
        eyebrow: 'OUR APPROACH',
        mainTitle: 'A Comprehensive Financial Engine for Enterprise Accuracy and Control',
        subsections: [
          { subtitle: '01', content: "Real-Time Cash Flow Monitoring: The system provides real-time visibility into cash inflows and outflows, allowing finance teams and management to monitor the company's current cash position and better manage liquidity." },
          { subtitle: '02', content: 'Unit-Level COGS Management: The system enables businesses to calculate and monitor Cost of Goods Sold at the business-unit or project level, providing greater visibility into direct costs and helping management evaluate profitability more accurately.' },
          { subtitle: '03', content: 'Journal Entries & Transaction Records: Financial transactions are recorded systematically through journal entries, creating a structured accounting trail for income, expenses, payments, adjustments, and other financial activities.' },
          { subtitle: '04', content: 'Tax Management & Period-End Closing: The system supports structured tax management and period-end closing processes, helping finance teams organize tax-related transactions and complete accounting periods in a more controlled and consistent manner.' },
          { subtitle: '05', content: 'Vendor Invoice Management: Vendor invoices are recorded and managed centrally, providing better visibility into outstanding payables, payment schedules, and vendor-related financial obligations.' },
          { subtitle: '06', content: 'Batch Payment Processing: The system supports batch payments, allowing multiple payment transactions to be processed efficiently in a single workflow, reducing repetitive administrative tasks and improving payment processing efficiency.' },
          { subtitle: '07', content: 'Recurring Payment Management: Recurring payments can be scheduled and monitored for regular financial obligations such as subscriptions, operational expenses, service fees, or other recurring commitments.' },
          { subtitle: '08', content: 'Project Capital & Overhead Cost Management: The system provides visibility into project capital allocation and funding while also enabling systematic tracking and allocation of overhead costs, supporting more accurate profitability analysis.' },
        ],
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'A Centralized, Transparent, and Data-Driven Financial Ecosystem',
        paragraphs: [
          'By integrating financial operations into a centralized platform, the system helps businesses improve financial visibility, strengthen accounting accuracy, and streamline day-to-day finance processes.',
          'Key outcomes include real-time financial visibility through centralized cash flow monitoring, more accurate profitability analysis with unit-level COGS tracking, improved accounting accuracy through structured journal entries and transaction records, more efficient tax and period-end processes through centralized financial data, streamlined accounts payable management with centralized vendor invoices, greater payment efficiency through batch and recurring payment capabilities, better project financial control through centralized capital allocation, and more accurate cost management through structured overhead allocation.',
        ],
      },
    ],
  },

  /* ── 5. MyBoss — Logistics & Fleet Management ── */
  {
    id: 5,
    slug: 'myboss-logistics-fleet-management',
    title: 'MyBoss (Logistics & Fleet Management)',
    category: 'TECHNOLOGY',
    tags: ['LOGISTICS', 'FLEET MANAGEMENT', 'IOT OPERATIONS'],
    dateLabel: 'MAY 2026',
    dateValue: '2026-05-30',
    description: 'An integrated Logistics & Fleet Management System powered by MyBoss IoT infrastructure, designed to streamline transportation, delivery operations, real-time shipment tracking, and logistics costs while providing complete visibility over field assets and driver activity.',
    coverImage: '/images/case-studies/myboss-logistics/cover.webp',
    coverImageAlt: 'BSP Track dashboard showing real-time fleet management, vehicle status, and delivery operations for MyBoss',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Operational Blind Spots Between the Control Room, Drivers, and Customers',
        paragraphs: [
          'Managing field logistics and fleet operations manually creates blind spots between the control room, drivers, and customers. Disconnected communication and lack of real-time telemetry lead to operational delays, high fuel costs, and poor delivery accountability.',
          'Common operational challenges include the inability to track fleet location, delivery progress, and vehicle status in real time, inefficient dispatch scheduling and unoptimized transport routes, reliance on paper-based delivery orders and manual proof of handover, uncontrolled transportation and fuel expenses without live operational data, difficulty monitoring driver behavior and idle time, and customer dissatisfaction due to inaccurate estimated time of arrival.',
        ],
      },
      {
        mainTitle: 'A Centralized Logistics Command Layer Integrated with MyBoss IoT Telemetry',
        paragraphs: [
          'We engineered a centralized Logistics & Fleet Management layer directly connected to MyBoss IoT telemetry, integrating shipment planning, routing, driver management, and tracking into a single command dashboard—making every vehicle, delivery, and route visible in real time.',
        ],
        image: { src: '/images/case-studies/myboss-logistics/cover.webp', alt: 'BSP Track fleet management dashboard showing vehicle types, driver assignments, and delivery status for the MyBoss logistics operation' },
      },
      {
        eyebrow: 'OUR APPROACH',
        mainTitle: 'From Disconnected Field Assets to a Unified Operational Command Dashboard',
        subsections: [
          { subtitle: '01', content: 'Automated Delivery Order Management: Teams can generate, assign, and track digital delivery orders through a structured workflow, eliminating lost paperwork and ensuring clear task assignment for every driver and vehicle.' },
          { subtitle: '02', content: 'IoT-Powered Real-Time Shipment & Fleet Tracking: Live telemetry and GPS data from MyBoss hardware provide continuous visibility into vehicle coordinates, movement status, and delivery milestones across all active routes.' },
          { subtitle: '03', content: 'Dynamic Delivery Scheduling & Dispatch: Dispatchers can organize delivery queues based on destination priorities, fleet payload capacity, and urgent shipment requirements, reducing idle time and improving fleet utilization.' },
          { subtitle: '04', content: 'Smart Route Optimization: The system recommends optimal delivery routes to minimize mileage, avoid bottlenecks, and reduce fuel consumption across the entire fleet.' },
          { subtitle: '05', content: 'Driver & Vehicle Performance Monitoring: Centralized logging of driver activity, operating hours, vehicle health, and idle time improves safety, operational discipline, and proactive fleet maintenance scheduling.' },
          { subtitle: '06', content: 'Digital Proof of Delivery (e-POD): Delivery completion is recorded digitally with recipient confirmations and condition documentation at the point of delivery, providing instant reconciliation and eliminating paper disputes.' },
          { subtitle: '07', content: 'Logistics Cost & Fuel Analytics: Transit expenses, toll fees, and fuel usage per trip are recorded and monitored, giving management accurate cost-per-delivery insights to support financial and operational decisions.' },
        ],
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'Full Operational Visibility from Field Assets to Control Room',
        paragraphs: [
          'The integration of MyBoss IoT with the logistics management layer delivers total control over transportation operations—replacing fragmented manual processes with a connected, data-driven fleet command system.',
          'Key outcomes include full operational visibility with live map tracking and status updates from the field, lower transport operating costs through optimized routes and idle-time reduction, faster delivery turnaround and higher on-time fulfillment rates, elimination of paper disputes through instant verifiable digital Proof of Delivery, improved driver accountability, and proactive fleet maintenance scheduling supported by real-time vehicle health data.',
        ],
      },
    ],
  },

  /* ── 6. MyBoss — Supply Chain & Distribution System ── */
  {
    id: 6,
    slug: 'myboss-supply-chain-distribution-system',
    title: 'MyBoss (Supply Chain & Distribution System)',
    category: 'TECHNOLOGY & DATA',
    tags: ['SUPPLY CHAIN', 'PROCUREMENT', 'DISTRIBUTION'],
    dateLabel: 'MAY 2026',
    dateValue: '2026-05-30',
    description: 'An end-to-end Supply Chain & Distribution Management solution integrated with MyBoss operational data, connecting suppliers, procurement, distribution hubs, demand forecasting, and fulfillment into a unified ecosystem.',
    coverImage: '/images/case-studies/myboss-supply-chain/cover.webp',
    coverImageAlt: 'Container cargo ship at an international port terminal representing global supply chain and distribution management',
    sections: [
      {
        eyebrow: 'THE CHALLENGE',
        mainTitle: 'Fragmented Supply Chain Processes Creating Inventory Mismatches and Supplier Blind Spots',
        paragraphs: [
          'Managing a multi-point supply chain without connected data creates significant inventory mismatches, delayed replenishment, and weak supplier accountability. When procurement and distribution operate in silos, businesses struggle to match field demand with warehouse supply.',
          'Common challenges include fragmented communication between central procurement, regional distribution hubs, and suppliers, inaccurate demand forecasting leading to overstocking or sudden stockouts in the field, lack of supplier performance tracking regarding delivery punctuality and fulfillment quality, inefficient purchasing approval workflows causing procurement bottlenecks, limited financial visibility into total landed costs and supply chain overheads, and delayed response to sudden shifts in customer order volume and seasonal demand.',
        ],
      },
      {
        mainTitle: 'Synchronizing Supplier Networks, Procurement, and Field Inventory with MyBoss Distribution Data',
        paragraphs: [
          'We developed an integrated Supply Chain Management System that synchronizes supplier networks, procurement workflows, and field inventory levels with MyBoss distribution telemetry, creating a connected and demand-driven supply chain from procurement to final delivery.',
        ],
        image: { src: '/images/case-studies/myboss-supply-chain/case-study-angle-02.webp', alt: 'Global supply chain network visualization representing multi-hub distribution connectivity and operational visibility' },
      },
      {
        eyebrow: 'OUR APPROACH',
        mainTitle: 'A Connected Supply Chain Ecosystem from Supplier to Distribution Hub',
        subsections: [
          { subtitle: '01', content: 'Centralized Supplier & Vendor Management: Maintains complete supplier profiles, contract terms, pricing agreements, and transaction history to streamline vendor relations and enable data-driven sourcing decisions.' },
          { subtitle: '02', content: 'Structured Procurement & Purchase Request Workflows: Multi-level approval workflows for purchase requisitions and purchase orders ensure strict budget compliance, operational alignment, and full audit readiness.' },
          { subtitle: '03', content: 'Data-Driven Demand & Inventory Planning: Analyzes historical order trends and field consumption rates to forecast replenishment needs accurately across all distribution hubs and inventory locations.' },
          { subtitle: '04', content: 'Multi-Hub Supply & Demand Visibility: Provides a unified view of inventory across central warehouses, transit hubs, and regional distribution points, helping businesses maintain appropriate stock levels and avoid overstocking.' },
          { subtitle: '05', content: 'Supplier Performance & SLA Evaluation: Supplier performance is evaluated based on lead times, order completeness, and delivery reliability, helping businesses make better strategic sourcing decisions and hold suppliers accountable.' },
          { subtitle: '06', content: 'End-to-End Supply Chain Cost Tracking: Tracks purchase costs, freight charges, holding costs, and distribution expenses to provide management with accurate product margins and total landed cost visibility.' },
          { subtitle: '07', content: 'Executive Supply Chain Analytics & Reporting: Consolidated dashboards deliver actionable metrics on procurement cycles, inventory turnover, supplier performance, and fulfillment efficiency to support senior management decisions.' },
        ],
      },
      {
        eyebrow: 'THE OUTCOME',
        mainTitle: 'A Synchronized, Demand-Driven Distribution Network',
        paragraphs: [
          'The system transforms disconnected supply chain operations into a synchronized, demand-driven distribution network—connecting suppliers, procurement, inventory, and fulfillment into one coordinated operational ecosystem.',
          'Key outcomes include seamless alignment between supplier procurement, inventory availability, and customer fulfillment, minimized stockouts and reduced carrying costs through intelligent demand planning, greater procurement transparency with controlled approval hierarchies, stronger supplier accountability backed by objective SLA performance data, better cost control through end-to-end supply chain cost visibility, and agile supply chain decision-making powered by real-time inventory and logistics data.',
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
