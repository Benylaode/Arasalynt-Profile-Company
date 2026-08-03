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
      name: 'Digital Platform Development',
      tag: 'Website Development',
      img: '/images/our-business/kaluna-technology/works/project-01.webp',
    },
    {
      name: 'Sinau Print Marketplace Website',
      tag: 'Marketplace Website',
      img: '/images/our-business/kaluna-technology/works/sinau-print-marketplace.webp',
    },
    {
      name: 'X-1 Tire Company Profile Website',
      tag: 'Company Profile Website',
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
  heroOverlayImg: '/images/our-business/artic-analytica/hero-network-overlay.webp',
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
  visionImg: '/images/our-business/artic-analytica/vision-bg.webp',

  worksLabel: 'OUR PROJECTS',
  featuredWorkIndex: 1,
  works: [
    {
      name: 'Digital Media Production Platform',
      tag: 'Digital Platform',
      img: '/images/our-business/artic-analytica/works/digital-media-platform.webp',
    },
    {
      name: 'Sinau Print Marketplace Website',
      tag: 'Marketplace Website',
      img: '/images/our-business/artic-analytica/works/sinau-print-marketplace.webp',
    },
    {
      name: 'X-1 Tire Company Profile Website',
      tag: 'Company Profile Website',
      img: '/images/our-business/artic-analytica/works/x1-tire-website.webp',
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
      img: '/images/our-business/artic-analytica/other-business-previews/loxlive.webp',
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

  heroImg: '/images/our-business/loxlive/hero.webp',
  heroOverlayImg: '/images/our-business/loxlive/hero-network-overlay.webp',
  heroObjectPosition: 'center top',
  aboutDesc:
    'LoxLive provides premium broadcast and livestreaming solutions that combine studio-grade production, reliable streaming infrastructure, and seamless event execution to deliver exceptional virtual experiences.',
  aboutImg: '/images/our-business/loxlive/about.webp',
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
      name: 'Livestream Production',
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
  servicesBg: '/images/our-business/loxlive/services-bg.webp',

  visionLabel: 'OUR VISION',
  visionTextSize: 'large',
  visionQuote:
    'We envision a future where virtual events are as immersive, engaging, and impactful as being there in person.',
  visionImg: '/images/our-business/loxlive/vision-bg.webp',

  worksLabel: 'OUR PROJECTS',
  worksTitle: 'Explore LoxLive’s Work',
  featuredWorkIndex: 1,
  works: [
    {
      name: 'National Hybrid Event Livestream',
      tag: 'Broadcast Production',
      img: '/images/our-business/loxlive/works/broadcast-streaming-platform.webp',
    },
    {
      name: 'Sinau Print Marketplace Website',
      tag: 'Branding · Survey and Analytics',
      img: '/images/our-business/loxlive/works/sinau-print-marketplace.webp',
    },
    {
      name: 'X-1 Tire Company Profile Website',
      tag: 'Website · Digital Experience',
      img: '/images/our-business/loxlive/works/x1-tire-website.webp',
    },
  ],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'personice',
      name: 'Personice',
      img: '/images/our-business/loxlive/other-business-previews/personice.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/loxlive/other-business-previews/loxlive.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/loxlive/other-business-previews/adsvar.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/loxlive/other-business-previews/seveny.webp',
    },
  ],

  ctaTitle: 'Let’s Start Your Quality Streaming Event',
  ctaDesc:
    'Bring your next event to life with reliable broadcast production, professional infrastructure, and a seamless livestream experience from preparation to delivery.',
  ctaImg: '/images/our-business/loxlive/cta-bg.webp',
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
  heroOverlayImg: '/images/our-business/the-drafroom/hero-network-overlay.webp',
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
      name: 'Corporate Communication',
      img: '/images/our-business/the-drafroom/services/corporate-communication.webp',
    },
  ],
  servicesBg: '/images/our-business/the-drafroom/services-bg.webp',

  visionLabel: 'OUR VISION',
  visionTextSize: 'large',
  visionQuote:
    'Help ambitious brands build iconic value that inspire trust, create lasting value, and stand the test of time.',
  visionImg: '/images/our-business/the-drafroom/vision-bg.webp',

  worksLabel: 'OUR PROJECTS',
  worksTitle: 'Explore The Drafroom’s Work',
  featuredWorkIndex: 1,
  works: [
    {
      name: 'Integrated Brand Campaign Platform',
      tag: 'Brand Strategy · Digital Experience',
      img: '/images/our-business/the-drafroom/works/brand-campaign-platform.webp',
    },
    {
      name: 'Sinau Print Marketplace Website',
      tag: 'Branding · Survey and Analytics',
      img: '/images/our-business/the-drafroom/works/sinau-print-marketplace.webp',
    },
    {
      name: 'X-1 Tire Company Profile Website',
      tag: 'Corporate Identity · Website',
      img: '/images/our-business/the-drafroom/works/x1-tire-website.webp',
    },
  ],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'personice',
      name: 'Personice',
      img: '/images/our-business/the-drafroom/other-business-previews/personice.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/the-drafroom/other-business-previews/loxlive.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/the-drafroom/other-business-previews/adsvar.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/the-drafroom/other-business-previews/seveny.webp',
    },
  ],

  ctaTitle: 'Discover More with The Drafroom',
  ctaDesc:
    'Explore our branding expertise, creative capabilities, and strategic design solutions that help ambitious brands build recognition, relevance, and lasting value.',
  ctaImg: '/images/our-business/the-drafroom/cta-bg.webp',
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
  heroOverlayImg: '/images/our-business/ilusia/hero-network-overlay.webp',
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
  visionImg: '/images/our-business/ilusia/vision-bg.webp',

  worksLabel: 'OUR PROJECTS',
  worksTitle: 'Explore Ilusia Studio’s Work',
  featuredWorkIndex: 1,
  works: [
    {
      name: 'Live Event Motion Package',
      tag: 'Motion Graphics · Broadcast Visuals',
      img: '/images/our-business/ilusia/works/live-event-motion-package.webp',
    },
    {
      name: 'Sinau Print Marketplace Website',
      tag: 'Branding · Survey and Analytics',
      img: '/images/our-business/ilusia/works/sinau-print-marketplace.webp',
    },
    {
      name: 'X-1 Tire Company Profile Website',
      tag: 'Product Visualization · Website',
      img: '/images/our-business/ilusia/works/x1-tire-website.webp',
    },
  ],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'personice',
      name: 'Personice',
      img: '/images/our-business/ilusia/other-business-previews/personice.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/ilusia/other-business-previews/loxlive.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/ilusia/other-business-previews/adsvar.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/ilusia/other-business-previews/seveny.webp',
    },
  ],

  ctaTitle: 'Discover More with Ilusia Studio',
  ctaDesc:
    'Explore our motion expertise, creative capabilities, and visual storytelling solutions that transform complex ideas into clear and engaging experiences.',
  ctaImg: '/images/our-business/ilusia/cta-bg.webp',
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
  heroOverlayImg: '/images/our-business/adsvar/hero-network-overlay.webp',
  heroObjectPosition: 'center top',
  aboutDesc:
    'Adsvar helps businesses maximize advertising performance through data-driven strategies, precision targeting, and measurable campaign optimization that delivers real business outcomes.',
  aboutImg: '/images/our-business/adsvar/about.webp',
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
      icon: '/images/our-business/adsvar/icons/limited-production-quality.svg',
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
  servicesBg: '/images/our-business/adsvar/services-bg.webp',

  visionLabel: 'OUR VISION',
  visionTextSize: 'large',
  visionQuote:
    'Data-driven advertising that transforms marketing investment into predictable customer acquisition, measurable outcomes, and long-term growth.',
  visionImg: '/images/our-business/adsvar/vision-bg.webp',

  worksLabel: 'OUR PROJECTS',
  worksTitle: 'Explore Adsvar’s Work',
  featuredWorkIndex: 1,
  works: [
    {
      name: 'Performance Campaign Dashboard',
      tag: 'Paid Media · Campaign Analytics',
      img: '/images/our-business/adsvar/works/performance-campaign-dashboard.webp',
    },
    {
      name: 'Sinau Print Marketplace Website',
      tag: 'Branding · Survey and Analytics',
      img: '/images/our-business/adsvar/works/sinau-print-marketplace.webp',
    },
    {
      name: 'X-1 Tire Company Profile Website',
      tag: 'Digital Campaign · Website',
      img: '/images/our-business/adsvar/works/x1-tire-website.webp',
    },
  ],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'personice',
      name: 'Personice',
      img: '/images/our-business/adsvar/other-business-previews/personice.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/adsvar/other-business-previews/loxlive.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/adsvar/other-business-previews/adsvar.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/adsvar/other-business-previews/seveny.webp',
    },
  ],

  ctaTitle: 'Explore More Our Capability with Adsvar',
  ctaDesc:
    'Explore our performance marketing expertise, paid advertising solutions, and data-driven campaign capabilities designed to accelerate measurable business growth.',
  ctaImg: '/images/our-business/adsvar/cta-bg.webp',
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
  heroOverlayImg: '/images/our-business/personice/hero-network-overlay.webp',
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
      icon: '/images/our-business/personice/icons/limited-production-quality.svg',
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
  servicesBg: '/images/our-business/personice/services-bg.webp',

  visionLabel: 'OUR VISION',
  visionTextSize: 'large',
  visionQuote:
    'Authentic relationships, credible leadership, and strategic communication that strengthen reputation and create lasting public trust.',
  visionImg: '/images/our-business/personice/vision-bg.webp',

  worksLabel: 'OUR PROJECTS',
  worksTitle: 'Explore Personice’s Work',
  featuredWorkIndex: 1,
  works: [
    {
      name: 'Strategic PR Campaign',
      tag: 'Public Relations · Brand Reputation',
      img: '/images/our-business/personice/works/strategic-pr-campaign.webp',
    },
    {
      name: 'Sinau Print Marketplace Website',
      tag: 'Branding · Survey and Analytics',
      img: '/images/our-business/personice/works/sinau-print-marketplace.webp',
    },
    {
      name: 'X-1 Tire Company Profile Website',
      tag: 'Digital Campaign · Website',
      img: '/images/our-business/personice/works/x1-tire-website.webp',
    },
  ],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'personice',
      name: 'Personice',
      img: '/images/our-business/personice/other-business-previews/personice.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/personice/other-business-previews/loxlive.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/personice/other-business-previews/adsvar.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/personice/other-business-previews/seveny.webp',
    },
  ],

  ctaTitle: 'Discover PR & Executive Talent Management with Personice',
  ctaDesc:
    'Explore our public relations expertise, executive branding, and talent management solutions designed to build credibility, strengthen reputation, and create lasting public trust.',
  ctaImg: '/images/our-business/personice/cta-bg.webp',
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
  heroOverlayImg: '/images/our-business/seveny/hero-network-overlay.webp',
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
  servicesBg: '/images/our-business/seveny/services-bg.webp',

  visionLabel: 'OUR VISION',
  visionTextSize: 'large',
  visionQuote:
    'Corporate events that combine immersive experiences, intelligent technology, and meaningful engagement to create lasting business impact.',
  visionImg: '/images/our-business/seveny/vision-bg.webp',

  worksLabel: 'OUR PROJECTS',
  worksTitle: 'Explore Seveny’s Work',
  featuredWorkIndex: 1,
  works: [
    {
      name: 'Signature Corporate Event Production',
      tag: 'Event Management · Experiential Production',
      img: '/images/our-business/seveny/works/signature-event-production.webp',
    },
    {
      name: 'Sinau Print Marketplace Website',
      tag: 'Branding · Survey and Analytics',
      img: '/images/our-business/seveny/works/sinau-print-marketplace.webp',
    },
    {
      name: 'X-1 Tire Company Profile Website',
      tag: 'Digital Campaign · Website',
      img: '/images/our-business/seveny/works/x1-tire-website.webp',
    },
  ],

  otherBusinessesTitle: 'Explore Other Businesses',
  featuredOtherBusinessIndex: 1,
  otherBusinesses: [
    {
      slug: 'personice',
      name: 'Personice',
      img: '/images/our-business/seveny/other-business-previews/personice.webp',
    },
    {
      slug: 'loxlive',
      name: 'LoxLive',
      img: '/images/our-business/seveny/other-business-previews/loxlive.webp',
    },
    {
      slug: 'adsvar',
      name: 'Adsvar',
      img: '/images/our-business/seveny/other-business-previews/adsvar.webp',
    },
    {
      slug: 'seveny',
      name: 'Seveny',
      img: '/images/our-business/seveny/other-business-previews/seveny.webp',
    },
  ],

  ctaTitle: "Let's Create Your Next Signature Event",
  ctaDesc:
    'From concept and technology to production and guest experience, Seveny helps organizations create memorable events with clear purpose and lasting business impact.',
  ctaImg: '/images/our-business/seveny/cta-bg.webp',
  ctaPrimaryLabel: 'GET IN TOUCH',
  ctaPrimaryHref: '/contact-us',
  ctaSecondaryLabel: 'EXPLORE WORKS',
  ctaSecondaryHref: '/our-works',
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

