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
  whatItIs: string;
  challenge: string;
  challengeCards?: ChallengeCard[];
  approach: string[];
  outcomes: string[];
  integration: string[];
  partnerIntegration?: {
    partnerName: string;
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
      'Aging physical servers and legacy equipment severely limit business expansion, carry high maintenance costs, and resist modern IoT or cloud integration.',
    image: '/images/projects/myboss-iot-system/2.webp',
  },
  {
    number: '02',
    title: 'Stuck Software & Fragmented ERP',
    description:
      'Operating on disjointed platforms creates data silos, forces manual workarounds, and leads to expensive duplicate tasks across enterprise departments.',
    image: '/images/projects/sinau-print-erp/1.webp',
  },
  {
    number: '03',
    title: 'Operational Blind Spots & Data Lag',
    description:
      'Without real-time data flow from the shop floor to the executive dashboard, leaders rely on outdated reports and cannot make proactive decisions.',
    image: '/images/projects/altatic-analytic/1.webp',
  },
  {
    number: '04',
    title: 'Unplanned Downtime & Reactive Maintenance',
    description:
      'Limited machine and system monitoring results in sudden equipment failures, costly operational halts, and escalating emergency IT expenses.',
    image: '/images/projects/artic-complex-web/1.webp',
  },
] as const;

export const CORE_SOLUTIONS = [
  {
    slug: 'enterprise-solution',
    title: 'Enterprise Solution',
    heroHeadline: 'Streamline Enterprise Operations with Centralized System Management',
    description:
      'Integrate operational workflows across divisions into a unified ecosystem with real-time visibility and sustainable enterprise scalability.',
    image: '/images/our-business/kaluna-technology/services/finance-system.webp',
  },
  {
    slug: 'data-ai-integration',
    title: 'Data & AI Integration',
    heroHeadline: 'Turn Raw Data into Strategic Business Decisions Powered by AI',
    description:
      'Consolidate multi-source corporate data into a unified ecosystem with predictive AI modeling, demand forecasting, and automated insights.',
    image: '/images/specialized/specialized-intelligence.webp',
  },
  {
    slug: 'smart-iot-system',
    title: 'Smart IOT System',
    heroHeadline: 'Connect Physical Devices for Smarter Operational Automation',
    description:
      'Remotely monitor, control, and automate physical assets with real-time sensor telemetry and industrial-grade security.',
    image: '/images/projects/myboss-iot-system/1.webp',
  },
  {
    slug: 'digital-development',
    title: 'Digital Development',
    heroHeadline: 'Build High-Performance Websites and Enterprise Web Apps',
    description:
      'Engineered for superior UX, blazing-fast performance, and enterprise-grade security to accelerate digital conversions and growth.',
    image: '/images/our-business/kaluna-technology/services/software-development.webp',
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
    image: '/images/our-business/kaluna-technology/services/finance-system.webp',
    whatItIs:
      'A comprehensive system management service designed to integrate various operational lines of large enterprises. We help simplify complex workflows, enhance real-time data visibility, and ensure sustainable business scalability in the digital era.',
    challenge:
      'Operating on disjointed platforms creates data silos, forces manual workarounds, and leads to expensive duplicate tasks across enterprise departments.',
    challengeCards: [
      {
        number: '01',
        badge: 'Siloed Operations',
        title: 'Fragmented ERP & Data Silos',
        description:
          'Operating on disjointed platforms creates cross-department silos, forcing tedious manual workarounds between finance, inventory, and HR.',
        image: '/images/projects/sinau-print-erp/1.webp',
      },
      {
        number: '02',
        badge: 'Process Friction',
        title: 'Workflow Bottlenecks & Delay',
        description:
          'Unsynchronized departmental systems trigger administrative friction, duplicate ledger entries, and slow managerial approvals.',
        image: '/images/projects/sinau-print-erp/2.webp',
      },
      {
        number: '03',
        badge: 'Audit & Control',
        title: 'Scalability & Compliance Gaps',
        description:
          'Legacy software lacks unified audit trails and role-based permissions, creating compliance risks as enterprise operations expand.',
        image: '/images/projects/sinau-print-erp/3.webp',
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
      image: '/images/projects/sinau-print-erp/1.webp',
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
    image: '/images/specialized/specialized-intelligence.webp',
    whatItIs:
      'An intelligent data integration service that consolidates diverse corporate information sources into a unified ecosystem. Backed by advanced AI technology, we help you analyze trends, predict market demands, and automate business insights with precision.',
    challenge:
      'Corporate information trapped in disconnected databases leaves leadership with delayed reports, blind spots, and reactive rather than proactive decisions.',
    challengeCards: [
      {
        number: '01',
        badge: 'Data Disconnect',
        title: 'Information Fragmentation',
        description:
          'Corporate data trapped across disconnected databases and spreadsheets prevents teams from achieving a single source of operational truth.',
        image: '/images/projects/altatic-analytic/1.webp',
      },
      {
        number: '02',
        badge: 'Decision Lag',
        title: 'Data Lag & Reactive Decisions',
        description:
          'Delayed batch reports leave leadership reacting after problems happen instead of proactively forecasting market trends and demands.',
        image: '/images/projects/altatic-analytic/2.webp',
      },
      {
        number: '03',
        badge: 'Resource Drain',
        title: 'Manual Administrative Burden',
        description:
          'Valuable workforce hours are consumed by repetitive data cleaning, manual reconciliations, and error-prone reporting pipelines.',
        image: '/images/projects/altatic-analytic/3.webp',
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
      logo: '/images/our-business/artic-analytica/logo.svg',
      text: 'Backed by advanced AI technology, we help you analyze trends, predict market demands, and automate business insights with precision across all corporate information sources.',
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
    image: '/images/projects/myboss-iot-system/1.webp',
    whatItIs:
      'An Internet of Things (IoT) and smart system integration solution designed to remotely monitor, control, and optimize physical devices. Boost your operational efficiency and infrastructure security through real-time, sensor-driven insights.',
    challenge:
      'Physical devices and remote operational assets operate without real-time connectivity, resulting in unexpected equipment failure, delayed maintenance, and security vulnerabilities.',
    challengeCards: [
      {
        number: '01',
        badge: 'Hardware Blind Spots',
        title: 'Disconnected Physical Assets',
        description:
          'Distributed industrial machinery and fleet devices operate without real-time telemetry, leaving operations blind to live field conditions.',
        image: '/images/projects/myboss-iot-system/1.webp',
      },
      {
        number: '02',
        badge: 'Operational Downtime',
        title: 'Unplanned Downtime & Outages',
        description:
          'Lack of predictive hardware health monitoring leads to sudden equipment failure, emergency halts, and escalating maintenance costs.',
        image: '/images/projects/myboss-iot-system/2.webp',
      },
      {
        number: '03',
        badge: 'Alerting & Security',
        title: 'Delayed Field Anomaly Response',
        description:
          'Without automated threshold alerts and edge sensor monitoring, critical safety hazards and system breaches remain undetected until damage occurs.',
        image: '/images/projects/myboss-iot-system/3.webp',
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
    image: '/images/our-business/kaluna-technology/services/software-development.webp',
    whatItIs:
      'Professional web development services ranging from high-converting landing pages to complex, responsive web-based applications. We focus on optimal user experience (UX), fast loading speeds, and robust system security to accelerate your brand’s digital growth.',
    challenge:
      'Slow, rigid, or outdated websites compromise user trust, suffer from security risks, and fail to convert visitors into loyal customers in a competitive digital landscape.',
    challengeCards: [
      {
        number: '01',
        badge: 'Performance Lag',
        title: 'Slow Speeds & High Bounce Rates',
        description:
          'Sluggish loading times and clunky UI fail to retain visitors, significantly hurting conversion rates and digital brand credibility.',
        image: '/images/projects/artic-complex-web/1.webp',
      },
      {
        number: '02',
        badge: 'Architecture Gaps',
        title: 'Rigid Legacy Web Platforms',
        description:
          'Monolithic web architectures resist third-party API integrations, payment gateways, and modern marketing analytics tools.',
        image: '/images/projects/artic-complex-web/2.webp',
      },
      {
        number: '03',
        badge: 'Security Risks',
        title: 'Vulnerability & Data Exposures',
        description:
          'Outdated web standards leave enterprise platforms exposed to data breaches, compliance violations, and unexpected downtime.',
        image: '/images/projects/artic-complex-web/3.webp',
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
      image: '/images/our-business/kaluna-technology/services/software-development.webp',
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
