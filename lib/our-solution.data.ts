import type { CaseStudyArticle } from '@/types';

export type ChallengeCard = {
  number: string;
  badge: string;
  title: string;
  description: string;
  image: string;
};

export type SolutionService = {
  slug: string;
  title: string;
  shortTitle: string;
  heroHeadline?: string;
  description: string;
  image: string;
  heroSvg?: string;
  serviceSectionSvg?: string;
  whatItIs: string;
  challenge: string;
  modulesSectionTag?: string;
  modulesSectionTitle?: string;
  modulesSectionDescription?: string;
  challengeCards?: ChallengeCard[];
  approach: string[];
  outcomes: string[];
  integration: string[];
  partnerIntegration?: {
    partnerName: string;
    heading?: string;
    badge?: string;
    logo?: string;
    text: string;
  };
  whoItIsFor: string[];
  ctaPrimary?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  relatedWork?: {
    slug: string;
    title: string;
    image: string;
    relationship: 'direct' | 'supporting';
  };
  caseStudySlug: string;
  articleCategory: string;
  articleDateLabel: string;
  articleDateValue: string;
  articleTags: string[];
  industry: string;
  keywords: string[];
  updatedAt?: string;
  language?: 'id-ID' | 'en-US';
  seoTitle?: string;
  seoDescription?: string;
  whatServiceTitle?: string;
  valuePropTitle?: string;
  valuePropDescription?: string;
  valuePropIcon?: string;
};

export const OUR_SOLUTION_CHALLENGE = {
  title: "What’s Slowing Your Enterprise Down?",
  description:
    'Legacy infrastructure, fragmented ERP, delayed operational data, and reactive maintenance prevent enterprises from moving with speed, visibility, and confidence.',
};

export const OUR_SOLUTION_CHALLENGES = [
  {
    number: '01',
    title: 'Legacy Hardware & Outdated Infrastructure',
    description:
      'Aging servers and legacy hardware limit growth, hike maintenance costs, and block cloud adoption.',
    image: '/images/our-solution/projects/iot/mybos-iot.svg',
  },
  {
    number: '02',
    title: 'Stuck Software & Fragmented ERP',
    description:
      'Disconnected platforms create data silos, manual workarounds, and redundant enterprise tasks.',
    image: '/images/our-solution/projects/enterprise/marka-project-manager.png',
  },
  {
    number: '03',
    title: 'Operational Blind Spots & Data Lag',
    description:
      'Without real-time operational data, leaders rely on stale reports and face blind spots in decisions.',
    image: '/images/our-solution/projects/data-ai/markaplus.svg',
  },
  {
    number: '04',
    title: 'Unplanned Downtime & Reactive Maintenance',
    description:
      'Unmonitored systems cause sudden equipment breakdowns, costly operational halts, and emergency repairs.',
    image: '/images/our-solution/projects/digital/presstis.svg',
  },
] as const;

export const CORE_SOLUTIONS = [
  {
    slug: 'enterprise-solution',
    title: 'Enterprise Solution',
    titleLine1: 'Enterprise',
    titleLine2: 'Solution',
    heroHeadline: 'Streamline Enterprise Operations with Centralized System Management',
    description:
      'Integrate corporate workflows into a single system for real-time visibility and scalable growth.',
    image: '/images/our-solution/projects/enterprise/marka-sales.png',
    cardBg: '#090D16',
    cardBorder: 'rgba(77, 139, 255, 0.28)',
    glowStart: '#3B82F6',
    glowStartOpacity: 0.45,
    glowEnd: '#1A3E9E',
    glowEndOpacity: 0.05,
    textColor: '#FFFFFF',
    descColor: 'rgba(255, 255, 255, 0.82)',
  },
  {
    slug: 'data-ai-integration',
    title: 'Data & AI Integration',
    titleLine1: 'Data & AI',
    titleLine2: 'Integration',
    heroHeadline: 'Turn Raw Data into Strategic Business Decisions Powered by AI',
    description:
      'Consolidate corporate data and leverages AI to automate insights, predict trends, and guide smart decisions.',
    image: '/images/our-solution/projects/data-ai/civitas-analytic.svg',
    cardBg: '#0D140F',
    cardBorder: 'rgba(230, 255, 42, 0.3)',
    glowStart: '#E6FF2A',
    glowStartOpacity: 0.48,
    glowEnd: '#10B981',
    glowEndOpacity: 0.05,
    textColor: '#FFFFFF',
    descColor: 'rgba(255, 255, 255, 0.82)',
  },
  {
    slug: 'smart-iot-system',
    title: 'Smart IOT System',
    titleLine1: 'Smart IOT',
    titleLine2: 'System',
    heroHeadline: 'Connect Physical Devices for Smarter Operational Automation',
    description:
      'Connect physical devices for real-time operational automation.',
    image: '/images/our-solution/projects/iot/sinau-print-iot.svg',
    cardBg: '#10326A',
    cardBorder: 'rgba(56, 189, 248, 0.45)',
    glowStart: '#38BDF8',
    glowStartOpacity: 0.55,
    glowEnd: '#155A99',
    glowEndOpacity: 0.1,
    textColor: '#FFFFFF',
    descColor: 'rgba(255, 255, 255, 0.88)',
  },
  {
    slug: 'digital-development',
    title: 'Digital Development',
    titleLine1: 'Digital',
    titleLine2: 'Development',
    heroHeadline: 'Build High-Performance Websites and Enterprise Web Apps',
    description:
      'Build high-performance websites and digital solutions.',
    image: '/images/our-solution/projects/digital/craftivation.svg',
    cardBg: '#0E121D',
    cardBorder: 'rgba(56, 189, 248, 0.28)',
    glowStart: '#38BDF8',
    glowStartOpacity: 0.45,
    glowEnd: '#818CF8',
    glowEndOpacity: 0.05,
    textColor: '#FFFFFF',
    descColor: 'rgba(255, 255, 255, 0.82)',
  },
] as const;

export const SOLUTION_SERVICES: SolutionService[] = [
  {
    slug: 'enterprise-solution',
    title: 'Enterprise Solution',
    shortTitle: 'Enterprise Solution',
    heroHeadline: 'Streamline Enterprise Operations with Centralized System Management',
    description:
      'Integrate operational workflows across divisions into a unified ecosystem with real-time visibility and sustainable enterprise scalability.',
    image: '/images/our-solution/projects/enterprise/marka-finance.png',
    heroSvg: '/images/our-solution/hero-enterprise-solution.svg',
    serviceSectionSvg: '/images/our-solution/service-section-enterprise-solution.svg',
    whatItIs:
      'A streamlined enterprise management service designed to unify complex operational workflows, optimize resource allocation, and ensure sustainable business scalability.',
    whatServiceTitle: 'Integrated Enterprise Architecture',
    valuePropTitle: 'Beyond Generic Solutions',
    valuePropDescription:
      'We avoid rigid, one-size-fits-all platforms. Every ERP module is custom-engineered to align with your corporate governance, internal workflows, and long-term expansion goals.',
    valuePropIcon: '/images/our-solution/icon-highlight-enterprise.svg',
    challenge:
      'Operating on disjointed platforms creates data silos, forces manual workarounds, and leads to expensive duplicate tasks across enterprise departments.',
    modulesSectionTag: 'ENTERPRISE MODULES & SERVICES',
    modulesSectionTitle: 'Core Enterprise Modules & Services',
    modulesSectionDescription:
      'A complete suite of integrated enterprise modules engineered to centralize operations, automate workflows, and provide end-to-end visibility across corporate divisions.',
    challengeCards: [
      {
        number: '01',
        badge: 'Finance & Accounting',
        title: 'Financial Accounting & Consolidation',
        description:
          'Multi-entity general ledger, automated real-time cashflow management, tax compliance reporting, and executive balance sheets.',
        image: '/images/our-solution/projects/enterprise/marka-finance.png',
      },
      {
        number: '02',
        badge: 'HR & Payroll',
        title: 'HR Management & Automated Payroll',
        description:
          'Centralized employee records, automated payroll calculation, KPI & attendance tracking, digital leave approvals, and talent management.',
        image: '/images/our-solution/projects/enterprise/marka-hrms.png',
      },
      {
        number: '03',
        badge: 'Project Governance',
        title: 'Project Management & Governance',
        description:
          'Cross-department milestone tracking, task scheduling, resource allocation, real-time budget burn-down monitoring, and operational team collaboration.',
        image: '/images/our-solution/projects/enterprise/marka-project-manager.png',
      },
      {
        number: '04',
        badge: 'Supply Chain & Inventory',
        title: 'Inventory & Supply Chain Management',
        description:
          'Multi-warehouse stock control, automated procurement reorder points, asset lifecycle tracking, vendor logistics, and material dispatch.',
        image: '/images/our-solution/projects/enterprise/marka-resource.png',
      },
      {
        number: '05',
        badge: 'Sales & CRM',
        title: 'Sales Pipeline & CRM Automation',
        description:
          'End-to-end quotation-to-cash workflows, lead capture, customer relationship management, deal pipeline forecasting, and automated billing.',
        image: '/images/our-solution/projects/enterprise/marka-sales.png',
      },
    ],
    approach: [
      'Centralized enterprise workflow architecture connecting all operating units',
      'Seamless unified platform for finance, inventory, HR, and supply chain',
      'Real-time data visibility and multi-department consolidated reporting pipelines',
      'Enterprise-grade system management designed for sustainable scalability',
    ],
    outcomes: [
      'Streamlined business operations across finance, inventory, HR, and supply chain',
      'Real-time data visibility and accelerated executive decision making',
      'Elimination of operational silos and redundant manual workflows',
      'Sustainable enterprise scalability across all organizational divisions',
    ],
    partnerIntegration: {
      partnerName: 'MarkaSuites',
      logo: '/images/partners/markasuites.svg',
      text: 'Fully integrated with Marka ERP, a leading ERP solution for enterprises that unifies finance, inventory, HR, and supply chain into a single, smart, and easily manageable platform.',
    },
    integration: [
      'Fully integrated with Marka ERP platform',
      'Unified finance, inventory, HR, and supply chain management',
      'REST & GraphQL enterprise API connectors and ledger sync',
      'Custom role-based access control and comprehensive audit trails',
    ],
    whoItIsFor: [
      'Large enterprises managing multiple operational divisions',
      'Organizations seeking centralized, enterprise-grade system management',
      'Companies needing unified ERP control across finance, HR, inventory, and supply chain',
    ],
    ctaPrimary: 'Schedule an Enterprise Consultation',
    ctaSecondary: 'Start Your Transformation',
    relatedWork: {
      slug: 'sinau-print-erp',
      title: 'Sinau Print ERP & Centralized System Management',
      image: '/images/our-solution/projects/enterprise/marka-project-manager.png',
      relationship: 'direct',
    },
    caseStudySlug: 'sinau-print-pos-system',
    articleCategory: 'ENTERPRISE SOLUTION',
    articleDateLabel: 'APRIL 2026',
    articleDateValue: '2026-04-22',
    articleTags: ['ENTERPRISE SOLUTION', 'MARKA ERP', 'ERP MANAGEMENT', 'SCALABILITY'],
    industry: 'Enterprise Operations & System Management',
    keywords: ['enterprise solution', 'marka erp', 'system management', 'enterprise workflows', 'scalability'],
    updatedAt: '2026-10-26',
    language: 'id-ID',
    seoTitle: 'Enterprise Solution — Centralized Enterprise System Management',
  },
  {
    slug: 'data-ai-integration',
    title: 'Data & AI Integration',
    shortTitle: 'Data & AI Integration',
    heroHeadline: 'Turn Raw Data into Strategic Business Decisions Powered by AI',
    description:
      'Consolidate multi-source corporate data into a unified ecosystem with predictive AI modeling, demand forecasting, and automated insights.',
    image: '/images/our-solution/projects/data-ai/markaplus.svg',
    heroSvg: '/images/our-solution/hero-data-ai-integration.svg',
    serviceSectionSvg: '/images/our-solution/service-section-data-ai-integration.svg',
    whatItIs:
      'Advanced data engineering and AI integration services designed to transform raw enterprise data into actionable intelligence, predictive analytics, and automated decision-making.',
    whatServiceTitle: 'Intelligent Data & Deep Learning Infrastructure',
    valuePropTitle: 'Beyond Static Analytics',
    valuePropDescription:
      'We move past basic dashboards. Our custom deep learning models and data pipelines are built specifically to adapt to your unique business logic and industry ecosystem.',
    valuePropIcon: '/images/our-solution/icon-highlight-data-ai.svg',
    challenge:
      'Corporate information trapped in disconnected databases leaves leadership with delayed reports, blind spots, and reactive rather than proactive decisions.',
    modulesSectionTag: 'DATA & AI SERVICES',
    modulesSectionTitle: 'Agentic AI & Machine Learning Services',
    modulesSectionDescription:
      'Specialized enterprise AI architectures designed for autonomous agentic task execution and end-to-end machine learning data management.',
    challengeCards: [
      {
        number: '01',
        badge: 'Agentic AI Management',
        title: 'Agentic AI Management & Enterprise Assistants',
        description:
          'Autonomous conversational AI agents connected directly to ERP and enterprise databases to assist teams, query real-time project metrics, and execute role-based operational tasks.',
        image: '/images/our-solution/projects/data-ai/markaplus.svg',
      },
      {
        number: '02',
        badge: 'Machine Learning & Data',
        title: 'Machine Learning & Enterprise Data Management',
        description:
          'End-to-end data pipeline orchestration, multi-source data consolidation, and predictive machine learning models to forecast trends and optimize institutional decision making.',
        image: '/images/our-solution/projects/data-ai/civitas-analytic.svg',
      },
    ],
    approach: [
      'Consolidation of diverse corporate information into a unified data ecosystem',
      'Deployment of advanced AI models for trend analysis and demand forecasting',
      'Automated business insights generation with high mathematical precision',
      'Secure enterprise data warehousing with real-time streaming pipelines',
    ],
    outcomes: [
      'Raw corporate data converted into high-value strategic business decisions',
      'Accurate market demand prediction and trend identification',
      'Automated precision insights delivered directly to executive dashboards',
      'Agile data-driven operational decision making across the entire business',
    ],
    partnerIntegration: {
      partnerName: 'Artic Analytica',
      heading: 'Client Portfolio Collaboration: Artic Analytica',
      logo: '/images/client-logos/artic-analytica.png',
      text: 'Artic Analytica is one of our key client portfolios. As their trusted technology partner, we collaborate extensively in enterprise data management, advanced AI pipeline architecture, and predictive intelligence modeling to power their data-driven research and strategic institutional decision making.',
    },
    integration: [
      'Real-time streaming pipelines connecting ERP, CRM, and cloud databases',
      'AI-driven predictive algorithms for demand forecasting & market trends',
      'Automated executive insights delivery and anomaly alerting',
      'Enterprise security and strict data governance compliance',
    ],
    whoItIsFor: [
      'Enterprises with multi-source corporate data seeking unified intelligence',
      'Executive leaders requiring automated, precision-crafted market insights',
      'Companies aiming to transform historical data into proactive AI strategies',
    ],
    ctaPrimary: 'Explore Our AI Solutions',
    ctaSecondary: 'Request a Data Demo',
    relatedWork: {
      slug: 'artic-analytica',
      title: 'Artic Analytica Strategic Decision & AI Hub',
      image: '/images/specialized/specialized-intelligence.webp',
      relationship: 'direct',
    },
    caseStudySlug: 'sinau-print-warehouse-management-wms',
    articleCategory: 'DATA & AI',
    articleDateLabel: 'APRIL 2026',
    articleDateValue: '2026-04-22',
    articleTags: ['DATA INTEGRATION', 'ARTIFICIAL INTELLIGENCE', 'PREDICTIVE ANALYTICS', 'AUTOMATION'],
    industry: 'Data & AI Strategic Integration',
    keywords: ['data integration', 'artificial intelligence', 'ai solutions', 'predictive insights', 'machine learning'],
    updatedAt: '2026-10-26',
    language: 'id-ID',
    seoTitle: 'Data & AI Integration — Turn Raw Data into Strategic Decisions',
  },
  {
    slug: 'smart-iot-system',
    title: 'Smart IOT System',
    shortTitle: 'Smart IOT System',
    heroHeadline: 'Connect Physical Devices for Smarter Operational Automation',
    description:
      'Remotely monitor, control, and automate physical assets with real-time sensor telemetry and industrial-grade security.',
    image: '/images/our-solution/projects/iot/mybos-iot.svg',
    heroSvg: '/images/our-solution/hero-smart-iot-system.svg',
    serviceSectionSvg: '/images/our-solution/service-section-smart-iot-system.svg',
    whatItIs:
      'Comprehensive IoT integration services designed to bridge physical hardware with enterprise software, enabling real-time telemetry, remote monitoring, and automated asset control.',
    whatServiceTitle: 'Connected Operational IoT Ecosystem',
    valuePropTitle: 'Beyond Standard Automation',
    valuePropDescription:
      'We do not use generic plug-and-play tools. Each device architecture is securely tailored to your physical infrastructure, security protocols, and operational requirements.',
    valuePropIcon: '/images/our-solution/icon-highlight-smart-iot.svg',
    challenge:
      'Physical devices and remote operational assets operate without real-time connectivity, resulting in unexpected equipment failure, delayed maintenance, and security vulnerabilities.',
    modulesSectionTag: 'SMART IOT SERVICES',
    modulesSectionTitle: 'Core Enterprise IoT & Automation Services',
    modulesSectionDescription:
      'Enterprise-grade IoT solutions bridging physical equipment with digital platforms through industrial edge computing, facility sensor networks, and remote asset telemetry.',
    challengeCards: [
      {
        number: '01',
        badge: 'Industrial Automation',
        title: 'Industrial Automation & Edge Computing',
        description:
          'Connecting plant machinery, industrial PLCs, and edge gateways to automate manufacturing workflows, monitor equipment status in real-time, and prevent unplanned downtime.',
        image: '/images/corporate-profile/capabilities/scalable-systems-iot.webp',
      },
      {
        number: '02',
        badge: 'Facility & Energy',
        title: 'Smart Facility & Energy Management',
        description:
          'Multi-sensor environmental telemetry, automated power and energy consumption tracking, ambient climate monitoring, and digital facility safety compliance.',
        image: '/images/insight-programs/case-studies/case-enterprise-iot.webp',
      },
      {
        number: '03',
        badge: 'Asset Telemetry',
        title: 'Connected Asset & Fleet Telemetry',
        description:
          'Continuous telemetry for distributed physical assets, high-precision GPS positioning, engine diagnostics, cold-chain temperature tracking, and instant geofencing alerts.',
        image: '/images/our-solution/projects/iot/mybos-iot.svg',
      },
    ],
    approach: [
      'Deployment of smart IoT sensors and connected hardware gateways',
      'Continuous remote monitoring, control, and telemetry tracking of physical devices',
      'Automated threshold alerts and sensor-driven operational workflows',
      'Industrial automation integration engineered with Kaluna Technology',
    ],
    outcomes: [
      'Seamless connection of physical devices to the digital operating ecosystem',
      'Elevated operational efficiency and smarter automated workflows',
      'Enhanced infrastructure security via 24/7 sensor-driven surveillance',
      'Significant reduction in unexpected equipment downtime and maintenance overhead',
    ],
    partnerIntegration: {
      partnerName: 'Kaluna Technology',
      logo: '/images/our-business/kaluna-technology/logo.svg',
      text: 'Powered by the expertise of Kaluna Technology, a trusted provider of IoT and integrated device system services to bring next-generation industrial automation to life.',
    },
    integration: [
      'Powered by the expertise of Kaluna Technology',
      'Industrial PLC, telemetry sensors, GPS, and custom IoT edge microcontrollers',
      'Ultra-reliable MQTT and low-latency cloud data streaming',
      'Direct integration with central enterprise management & dispatch systems',
    ],
    whoItIsFor: [
      'Industrial, logistics, fleet, and manufacturing enterprises',
      'Facilities managing distributed machinery and physical infrastructure',
      'Organizations seeking remote device control, monitoring, and smart automation',
    ],
    ctaPrimary: 'Consult Your IoT Project',
    ctaSecondary: 'Start Smart Automation',
    relatedWork: {
      slug: 'myboss-iot-system',
      title: 'Kaluna Technology MyBoss Connected IoT System',
      image: '/images/projects/myboss-iot-system/1.webp',
      relationship: 'direct',
    },
    caseStudySlug: 'myboss-logistics-fleet-management',
    articleCategory: 'SMART IOT',
    articleDateLabel: 'MAY 2026',
    articleDateValue: '2026-05-30',
    articleTags: ['SMART IOT', 'KALUNA TECHNOLOGY', 'AUTOMATION', 'SENSORS', 'CONNECTED DEVICES'],
    industry: 'IoT & Smart Industrial Automation',
    keywords: ['smart iot system', 'kaluna technology', 'iot integration', 'industrial automation', 'sensor insights'],
    updatedAt: '2026-10-26',
    language: 'id-ID',
    seoTitle: 'Smart IOT System — Connect Physical Devices to Digital Automation',
  },
  {
    slug: 'digital-development',
    title: 'Digital Development',
    shortTitle: 'Digital Development',
    heroHeadline: 'Build High-Performance Websites and Enterprise Web Apps',
    description:
      'Engineered for superior UX, blazing-fast performance, and enterprise-grade security to accelerate digital conversions and growth.',
    image: '/images/our-solution/projects/digital/adsvar.svg',
    heroSvg: '/images/our-solution/hero-digital-development.svg',
    serviceSectionSvg: '/images/our-solution/service-section-digital-development.svg',
    whatItIs:
      'Full-cycle modern web engineering focused on building dynamic, responsive, and brand-aligned digital platforms with intuitive content management and technical SEO excellence.',
    whatServiceTitle: 'Dynamic, Responsive & SEO-Driven Web Architecture',
    valuePropTitle: 'Beyond Template Builds',
    valuePropDescription:
      'We reject cookie-cutter templates. Every digital platform is custom-coded from the ground up to guarantee optimal performance, robust security, and seamless brand alignment.',
    valuePropIcon: '/images/our-solution/icon-highlight-digital-dev.svg',
    challenge:
      'Slow, rigid, or outdated websites compromise user trust, suffer from security risks, and fail to convert visitors into loyal customers in a competitive digital landscape.',
    modulesSectionTag: 'DIGITAL APPLICATION SERVICES',
    modulesSectionTitle: 'Modern Web Development & Digital Platforms',
    modulesSectionDescription:
      'Dynamic, responsive, and SEO-engineered web platforms designed to showcase contemporary brand identity with seamless enterprise content management.',
    challengeCards: [
      {
        number: '01',
        badge: 'Dynamic & Responsive Web',
        title: 'Dynamic & Responsive Web Engineering',
        description:
          'Building fast, fluid, and mobile-responsive websites that adapt seamlessly across every screen size, powered by modern frameworks with interactive real-time capabilities.',
        image: '/images/our-solution/projects/digital/adsvar.svg',
      },
      {
        number: '02',
        badge: 'Content Management',
        title: 'Enterprise Content Management & CMS',
        description:
          'Intuitive headless CMS architectures and publishing workflows that give corporate teams effortless control over digital content, instant updates, and multi-channel publishing.',
        image: '/images/our-solution/projects/digital/presstis.svg',
      },
      {
        number: '03',
        badge: 'Brand Identity & UX',
        title: 'Modern Brand Identity & UI/UX Design',
        description:
          'Contemporary visual aesthetics crafted to mirror your corporate identity, creating immersive digital storytelling, engaging interactive elements, and high-converting user journeys.',
        image: '/images/our-solution/projects/digital/craftivation.svg',
      },
      {
        number: '04',
        badge: 'SEO & Performance',
        title: 'Advanced SEO Engineering & Optimization',
        description:
          'Technical search engine optimization, semantic HTML structure, schema markup, and Core Web Vitals optimization engineered to achieve top search rankings and organic visibility.',
        image: '/images/our-solution/projects/digital/artic-analytica.svg',
      },
      {
        number: '05',
        badge: 'Custom Web Applications',
        title: 'Custom Web Applications & Portal Systems',
        description:
          'Tailored enterprise web applications with complex interactive filtering, secure authentication, and seamless third-party API and database integrations.',
        image: '/images/our-solution/projects/digital/x1-tire.svg',
      },
    ],
    approach: [
      'Modern web engineering optimized for blazing-fast loading speeds and responsive UX',
      'High-converting landing pages and bespoke enterprise web applications',
      'Rigorous security standards, data encryption, and resilient cloud architecture',
      'Brand digitalization and conversion optimization in partnership with Web2Up',
    ],
    outcomes: [
      'Powerful, high-converting digital presence across all devices and platforms',
      'Superior UX and ultra-fast page speeds boosting search rankings and engagement',
      'Robust enterprise-grade system security and data integrity protection',
      'Accelerated brand growth and measurable business conversion performance',
    ],
    partnerIntegration: {
      partnerName: 'Web2Up',
      logo: '/images/partners/web2up.svg',
      text: 'In partnership with Web2Up, specialists in business and brand digitalization through modern, functional website and WebApp development designed to drive conversions.',
    },
    integration: [
      'In partnership with Web2Up brand digitalization specialists',
      'Modern Next.js, React, and serverless cloud infrastructure',
      'High-converting landing pages and responsive corporate web applications',
      'Seamless API integrations with payment gateways, CRMs, and analytics tools',
    ],
    whoItIsFor: [
      'Businesses requiring modern, high-converting websites and landing pages',
      'Enterprises seeking complex, secure, and responsive web-based applications',
      'Brands aiming to accelerate digital growth through speed, UX, and security',
    ],
    ctaPrimary: 'Build Your Website Now',
    ctaSecondary: 'Start Your Digital Project',
    relatedWork: {
      slug: 'web2up-digital',
      title: 'Web2Up Digital Platform & High-Performance WebApps',
      image: '/images/our-solution/projects/digital/adsvar.svg',
      relationship: 'direct',
    },
    caseStudySlug: 'sinau-print-pos-system',
    articleCategory: 'DIGITAL DEVELOPMENT',
    articleDateLabel: 'APRIL 2026',
    articleDateValue: '2026-04-22',
    articleTags: ['DIGITAL DEVELOPMENT', 'WEB2UP', 'HIGH PERFORMANCE', 'WEB APPS', 'UX'],
    industry: 'Digital Engineering & Web Development',
    keywords: ['digital development', 'web2up', 'web development', 'web apps', 'conversion ux'],
    updatedAt: '2026-10-26',
    language: 'id-ID',
    seoTitle: 'Digital Development — High-Performance Websites & Web Apps',
  },
];


export const SOLUTION_CASE_STUDIES: CaseStudyArticle[] = SOLUTION_SERVICES.map((service, index) => ({
  id: `solution-service-${index + 1}`,
  slug: service.caseStudySlug,
  title: service.title,
  category: service.articleCategory,
  tags: service.articleTags,
  dateLabel: service.articleDateLabel,
  dateValue: service.articleDateValue,
  description: service.description,
  coverImage: service.relatedWork?.image ?? service.image,
  coverImageAlt: service.relatedWork
    ? `${service.title} capability represented by ${service.relatedWork.title}`
    : `${service.title} capability illustration`,
  sections: [
    {
      eyebrow: 'THE CHALLENGE',
      mainTitle: service.challenge,
      paragraphs: service.relatedWork
        ? [
            service.relatedWork.relationship === 'direct'
              ? `${service.relatedWork.title} demonstrates this capability in a delivered operational workflow.`
              : `${service.relatedWork.title} demonstrates supporting technology relevant to this capability without being presented as an identical implementation.`,
          ]
        : [
            'This capability is presented as a service offering. No published project is currently claimed as a direct implementation.',
          ],
    },
    {
      eyebrow: 'OUR SOLUTION',
      mainTitle: `How ${service.shortTitle} Connects the Workflow`,
      subsections: service.approach.map((item, approachIndex) => ({
        subtitle: `0${approachIndex + 1}`,
        content: item,
      })),
    },
    {
      eyebrow: 'THE OUTCOME',
      mainTitle: 'A More Connected and Measurable Operation',
      paragraphs: service.outcomes.map((outcome) => `${outcome}.`),
    },
  ],
}));

export function getSolutionService(slug: string) {
  if (
    slug === 'enterprise-resource-planning' ||
    slug === 'retail-pos-inventory' ||
    slug === 'finance-accounting-system' ||
    slug === 'hr-payroll-management'
  ) {
    return SOLUTION_SERVICES.find((service) => service.slug === 'enterprise-solution');
  }
  if (slug === 'internet-of-things' || slug === 'fleet-logistics-tracking') {
    return SOLUTION_SERVICES.find((service) => service.slug === 'smart-iot-system');
  }
  if (slug === 'warehouse-management-wms') {
    return SOLUTION_SERVICES.find((service) => service.slug === 'data-ai-integration');
  }
  if (slug === 'custom-software-engineering') {
    return SOLUTION_SERVICES.find((service) => service.slug === 'digital-development');
  }
  return SOLUTION_SERVICES.find((service) => service.slug === slug);
}
