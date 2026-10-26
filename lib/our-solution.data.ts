import type { CaseStudyArticle } from '@/types';

export type SolutionService = {
  slug: string;
  title: string;
  shortTitle: string;
  heroHeadline?: string;
  description: string;
  image: string;
  whatItIs: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  integration: string[];
  partnerIntegration?: {
    partnerName: string;
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
    title: 'Legacy Hardware & Outdated Infrastructure',
    description:
      'Aging physical servers and legacy equipment severely limit business expansion, carry high maintenance costs, and resist modern IoT or cloud integration.',
  },
  {
    title: 'Stuck Software & Fragmented ERP',
    description:
      'Operating on disjointed platforms creates data silos, forces manual workarounds, and leads to expensive duplicate tasks across enterprise departments.',
  },
  {
    title: 'Operational Blind Spots & Data Lag',
    description:
      'Without real-time data flow from the shop floor to the executive dashboard, leaders rely on outdated reports and cannot make proactive decisions.',
  },
  {
    title: 'Unplanned Downtime & Reactive Maintenance',
    description:
      'Limited machine and system monitoring results in sudden equipment failures, costly operational halts, and escalating emergency IT expenses.',
  },
] as const;

export const CORE_SOLUTIONS = [
  {
    slug: 'enterprise-solution',
    title: 'Enterprise Solution',
    heroHeadline: 'Streamline Your Entire Business Operations with Centralized, Enterprise-Grade System Management.',
    description:
      'A comprehensive system management service designed to integrate various operational lines of large enterprises. We help simplify complex workflows, enhance real-time data visibility, and ensure sustainable business scalability in the digital era.',
    image: '/images/our-business/kaluna-technology/services/finance-system.webp',
  },
  {
    slug: 'data-ai-integration',
    title: 'Data & AI Integration',
    heroHeadline: 'Turn Raw Data into Strategic Business Decisions Powered by Artificial Intelligence.',
    description:
      'An intelligent data integration service that consolidates diverse corporate information sources into a unified ecosystem. Backed by advanced AI technology, we help you analyze trends, predict market demands, and automate business insights with precision.',
    image: '/images/specialized/specialized-intelligence.webp',
  },
  {
    slug: 'smart-iot-system',
    title: 'Smart IOT System',
    heroHeadline: 'Connect Physical Devices to the Digital World for Smarter Operational Automation.',
    description:
      'An Internet of Things (IoT) and smart system integration solution designed to remotely monitor, control, and optimize physical devices. Boost your operational efficiency and infrastructure security through real-time, sensor-driven insights.',
    image: '/images/projects/myboss-iot-system/1.webp',
  },
  {
    slug: 'digital-development',
    title: 'Digital Development',
    heroHeadline: 'Build a Powerful Digital Presence with High-Performance Websites and Web Apps.',
    description:
      'Professional web development services ranging from high-converting landing pages to complex, responsive web-based applications. We focus on optimal user experience (UX), fast loading speeds, and robust system security to accelerate your brand’s digital growth.',
    image: '/images/our-business/kaluna-technology/services/software-development.webp',
  },
] as const;

export const SOLUTION_SERVICES: SolutionService[] = [
  {
    slug: 'enterprise-solution',
    title: 'Enterprise Solution',
    shortTitle: 'Enterprise Solution',
    heroHeadline: 'Streamline Your Entire Business Operations with Centralized, Enterprise-Grade System Management.',
    description:
      'A comprehensive system management service designed to integrate various operational lines of large enterprises. We help simplify complex workflows, enhance real-time data visibility, and ensure sustainable business scalability in the digital era.',
    image: '/images/our-business/kaluna-technology/services/finance-system.webp',
    whatItIs:
      'A comprehensive system management service designed to integrate various operational lines of large enterprises. We help simplify complex workflows, enhance real-time data visibility, and ensure sustainable business scalability in the digital era.',
    challenge:
      'Operating on disjointed platforms creates data silos, forces manual workarounds, and leads to expensive duplicate tasks across enterprise departments.',
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
      partnerName: 'Marka ERP',
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
    heroHeadline: 'Turn Raw Data into Strategic Business Decisions Powered by Artificial Intelligence.',
    description:
      'An intelligent data integration service that consolidates diverse corporate information sources into a unified ecosystem. Backed by advanced AI technology, we help you analyze trends, predict market demands, and automate business insights with precision.',
    image: '/images/specialized/specialized-intelligence.webp',
    whatItIs:
      'An intelligent data integration service that consolidates diverse corporate information sources into a unified ecosystem. Backed by advanced AI technology, we help you analyze trends, predict market demands, and automate business insights with precision.',
    challenge:
      'Corporate information trapped in disconnected databases leaves leadership with delayed reports, blind spots, and reactive rather than proactive decisions.',
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
      partnerName: 'Artificial Intelligence Ecosystem',
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
    heroHeadline: 'Connect Physical Devices to the Digital World for Smarter Operational Automation.',
    description:
      'An Internet of Things (IoT) and smart system integration solution designed to remotely monitor, control, and optimize physical devices. Boost your operational efficiency and infrastructure security through real-time, sensor-driven insights.',
    image: '/images/projects/myboss-iot-system/1.webp',
    whatItIs:
      'An Internet of Things (IoT) and smart system integration solution designed to remotely monitor, control, and optimize physical devices. Boost your operational efficiency and infrastructure security through real-time, sensor-driven insights.',
    challenge:
      'Physical devices and remote operational assets operate without real-time connectivity, resulting in unexpected equipment failure, delayed maintenance, and security vulnerabilities.',
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
    heroHeadline: 'Build a Powerful Digital Presence with High-Performance Websites and Web Apps.',
    description:
      'Professional web development services ranging from high-converting landing pages to complex, responsive web-based applications. We focus on optimal user experience (UX), fast loading speeds, and robust system security to accelerate your brand’s digital growth.',
    image: '/images/our-business/kaluna-technology/services/software-development.webp',
    whatItIs:
      'Professional web development services ranging from high-converting landing pages to complex, responsive web-based applications. We focus on optimal user experience (UX), fast loading speeds, and robust system security to accelerate your brand’s digital growth.',
    challenge:
      'Slow, rigid, or outdated websites compromise user trust, suffer from security risks, and fail to convert visitors into loyal customers in a competitive digital landscape.',
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
