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
  {
    slug: 'enterprise-resource-planning',
    title: 'Enterprise Resource Planning (ERP)',
    shortTitle: 'Enterprise Resource Planning',
    description:
      'Centralize finance, inventory, supply chain, and human resources into a unified enterprise operating system.',
    image: '/images/our-business/kaluna-technology/services/finance-system.webp',
    whatItIs:
      'A comprehensive digital operating backbone that unifies business operations—from procurement, inventory, and sales to general ledger accounting and human capital—eliminating data silos and enabling real-time executive decision making.',
    challenge:
      'Legacy systems and disjointed spreadsheets force employees into manual data re-entry, create operational blind spots, and delay financial closing by weeks.',
    approach: [
      'Centralized architecture connecting finance, procurement, warehouse, and sales',
      'Automated inter-departmental transactions and reconciliations',
      'Configurable multi-level approval workflows and audit trails',
      'Multi-branch and multi-warehouse consolidated reporting',
    ],
    outcomes: [
      'Unified single source of truth across all business divisions',
      'Up to 70% faster financial close and reporting cycles',
      'Elimination of duplicate manual entries and human calculation errors',
    ],
    integration: [
      'REST & GraphQL APIs for third-party platforms',
      'Direct bank reconciliation & payment gateways',
      'Warehouse hardware and barcode scanner connectivity',
      'Custom reporting pipelines and BI dashboards',
    ],
    whoItIsFor: [
      'Mid-market and enterprise companies operating across multiple branches',
      'Retail chains and FMCG distributors requiring consolidated control',
      'Manufacturing and industrial enterprises needing inventory traceability',
    ],
    relatedWork: {
      slug: 'sinau-print-erp',
      title: 'Sinau Print ERP & Marketplace Platform',
      image: '/images/projects/sinau-print-erp/1.webp',
      relationship: 'direct',
    },
    caseStudySlug: 'sinau-print-pos-system',
    articleCategory: 'TECHNOLOGY',
    articleDateLabel: 'APRIL 2026',
    articleDateValue: '2026-04-22',
    articleTags: ['ERP', 'ENTERPRISE', 'WORKFLOW'],
    industry: 'Enterprise Operations & Manufacturing',
    keywords: ['erp', 'enterprise resource planning', 'workflow', 'operations', 'automation'],
    updatedAt: '2026-10-06',
    language: 'id-ID',
    seoTitle: 'Enterprise Resource Planning (ERP)',
  },
  {
    slug: 'internet-of-things',
    title: 'Internet of Things (IoT) Integration',
    shortTitle: 'Internet of Things',
    description:
      'Bridge physical machinery, smart sensors, and operational hardware with intelligent software systems.',
    image: '/images/our-business/kaluna-technology/services/software-development.webp',
    whatItIs:
      'An end-to-end telemetry and edge computing platform that connects physical assets, industrial sensors, and remote equipment to central dashboards, providing continuous visibility and automated triggers.',
    challenge:
      'Physical equipment and remote assets operate as unmonitored black boxes, leading to unexpected breakdowns, high reactive maintenance costs, and inaccurate field reporting.',
    approach: [
      'Edge device engineering and industrial sensor deployment',
      'Ultra-reliable MQTT and cellular communication protocols',
      'Real-time anomaly detection and predictive alerting algorithms',
      'Direct integration with central ERP maintenance workflows',
    ],
    outcomes: [
      'Zero unrecorded machine hours or unmonitored asset movements',
      'Up to 45% reduction in unplanned maintenance downtime',
      'Real-time operational alerts sent directly to operators and supervisors',
    ],
    integration: [
      'Industrial PLC, OBD-II, GPS, and custom microcontrollers',
      'Cloud time-series databases for high-frequency telemetry',
      'Automated work order creation in maintenance software',
      'Mobile operator dashboards with offline queuing support',
    ],
    whoItIsFor: [
      'Logistics, transportation, and fleet operators',
      'Manufacturing plants managing heavy industrial machinery',
      'Cold-chain logistics, agriculture, and warehouse facilities',
    ],
    relatedWork: {
      slug: 'myboss-iot-system',
      title: 'MyBoss Connected IoT Hardware & Control System',
      image: '/images/case-studies/myboss-logistics/cover.webp',
      relationship: 'direct',
    },
    caseStudySlug: 'myboss-logistics-fleet-management',
    articleCategory: 'TECHNOLOGY & IOT',
    articleDateLabel: 'MAY 2026',
    articleDateValue: '2026-05-30',
    articleTags: ['IOT', 'HARDWARE', 'SENSORS', 'CONNECTED ENTERPRISE'],
    industry: 'Manufacturing, Logistics & Infrastructure',
    keywords: ['iot', 'internet of things', 'hardware integration', 'sensors', 'telemetry', 'connectivity'],
    updatedAt: '2026-10-06',
    language: 'id-ID',
    seoTitle: 'Internet of Things (IoT) Integration',
  },
  {
    slug: 'point-of-sale-pos',
    title: 'Point of Sale (POS)',
    shortTitle: 'Point of Sale',
    description:
      'Connect checkout, product, promotion, customer, and store performance data in one retail operating system.',
    image: '/images/Expertise/pos-retail.svg',
    whatItIs:
      'An omni-channel retail transaction platform designed for speed, accuracy, and unified inventory synchronization across single and multi-outlet retail environments.',
    challenge:
      'Disconnected transaction and inventory records make retail decisions slower and less reliable.',
    approach: [
      'Centralized product and pricing controls',
      'Real-time sales and stock synchronization',
      'Multi-outlet reporting and role management',
    ],
    outcomes: [
      'Faster checkout workflows',
      'Accurate inventory visibility',
      'Consistent retail reporting',
    ],
    integration: [
      'Midtrans, QRIS, and EDC payment terminals',
      'Automated WhatsApp and email invoice dispatch',
      'Central ERP catalog and stock ledger integration',
      'Thermal receipt printers and cash drawer hardware',
    ],
    whoItIsFor: [
      'Multi-branch retail stores, supermarkets, and specialty shops',
      'Printing and custom fabrication businesses with deposits and installment workflows',
      'Food & beverage chains requiring fast counter service',
    ],
    relatedWork: {
      slug: 'sinau-print-erp',
      title: 'Sinau Print ERP & Marketplace Platform',
      image: '/images/projects/sinau-print-erp/1.webp',
      relationship: 'direct',
    },
    caseStudySlug: 'sinau-print-pos-system',
    articleCategory: 'TECHNOLOGY',
    articleDateLabel: 'APRIL 2026',
    articleDateValue: '2026-04-22',
    articleTags: ['ERP', 'RETAIL', 'POINT OF SALE'],
    industry: 'Retail & Commerce',
    keywords: ['pos', 'point of sale', 'retail', 'marketplace', 'checkout', 'erp', 'inventory'],
    updatedAt: '2026-10-06',
    language: 'id-ID',
    seoTitle: 'Point of Sale (POS)',
  },
  {
    slug: 'hr-talent-management-engine',
    title: 'HR & Talent Management Engine (HRMS)',
    shortTitle: 'HR & Talent Management',
    description:
      'Manage employee records, attendance, performance, payroll workflows, and talent development from one platform.',
    image: '/images/Expertise/hrms.svg',
    whatItIs:
      'A unified human capital management solution automating employee lifecycles—from onboarding and GPS/biometric attendance to payroll calculation, tax compliance, and KPI reviews.',
    challenge:
      'Scattered employee information creates repetitive administration and weak workforce visibility.',
    approach: [
      'Unified employee lifecycle records',
      'Automated attendance and approval workflows',
      'Performance and talent dashboards',
    ],
    outcomes: [
      'Lower administrative workload',
      'Clearer workforce decisions',
      'Consistent employee experience',
    ],
    integration: [
      'Biometric fingerprint/face attendance hardware',
      'Bank corporate payroll batch disbursement systems',
      'Company calendar and Google Workspace / Microsoft 365',
      'Accounting ledger automated payroll journal entries',
    ],
    whoItIsFor: [
      'Growing enterprise organizations with 50 to 5,000+ employees',
      'Companies with distributed field, remote, or shift-based workforces',
      'Enterprises seeking regulatory compliance and audit-ready HR records',
    ],
    caseStudySlug: 'pt-sinergi-muda-arsa-hr-management',
    articleCategory: 'TECHNOLOGY & DATA',
    articleDateLabel: 'JUNE 2026',
    articleDateValue: '2026-06-24',
    articleTags: ['HRMS', 'ENTERPRISE PORTAL', 'WORKFLOW'],
    industry: 'Enterprise Operations',
    keywords: ['hr', 'hrms', 'human resources', 'talent', 'employee', 'workflow', 'portal'],
    updatedAt: '2026-10-06',
    language: 'id-ID',
    seoTitle: 'HR & Talent Management Engine (HRMS)',
  },
  {
    slug: 'financial-accounting-automation-hub',
    title: 'Financial & Accounting Automation Hub',
    shortTitle: 'Financial Automation',
    description:
      'Automate transaction recording, reconciliation, approvals, reporting, and enterprise financial controls.',
    image: '/images/Expertise/financial-accounting.svg',
    whatItIs:
      'An intelligent financial governance platform that automates journal entries, multi-currency accounting, automated bank reconciliation, and real-time P&L reporting.',
    challenge:
      'Manual reconciliation and isolated financial records delay reporting and increase operational risk.',
    approach: [
      'Automated journals and reconciliation',
      'Configurable approval controls',
      'Live financial reporting',
    ],
    outcomes: [
      'Faster closing cycles',
      'Stronger financial governance',
      'Reliable management reporting',
    ],
    integration: [
      'Direct bank statement feeds (BCA, Mandiri, BRI, BNI)',
      'Core POS, Procurement, and Payroll modules',
      'Tax e-Faktur and corporate fiscal reporting standards',
      'Granular financial audit logs for enterprise compliance',
    ],
    whoItIsFor: [
      'CFOs and finance directors managing multi-entity operations',
      'Enterprises seeking strict financial governance and internal audit readiness',
      'Fast-growing businesses wanting automated cash flow oversight',
    ],
    caseStudySlug: 'financial-management-system',
    articleCategory: 'DATA & ANALYTICS',
    articleDateLabel: 'MARCH 2026',
    articleDateValue: '2026-03-19',
    articleTags: ['FINANCE', 'AUTOMATION', 'DASHBOARD'],
    industry: 'Finance & Analytics',
    keywords: ['finance', 'accounting', 'automation', 'reconciliation', 'dashboard', 'analytics'],
    updatedAt: '2026-10-06',
    language: 'id-ID',
    seoTitle: 'Financial & Accounting Automation Hub',
  },
  {
    slug: 'supply-chain-inventory-control',
    title: 'Supply Chain & Inventory Control System',
    shortTitle: 'Supply Chain Control',
    description:
      'Coordinate procurement, suppliers, stock movement, replenishment, and demand visibility across operations.',
    image: '/images/Expertise/supply-chain.svg',
    whatItIs:
      'An end-to-end supply chain orchestration platform that connects supplier purchase orders, lead time tracking, safety stock formulas, and warehouse replenishment.',
    challenge:
      'Limited coordination between purchasing and stock operations causes shortages, delays, and excess inventory.',
    approach: [
      'Supplier and procurement workflows',
      'Demand-aware replenishment',
      'End-to-end stock movement visibility',
    ],
    outcomes: [
      'Healthier inventory levels',
      'More predictable procurement',
      'Reduced operational waste',
    ],
    integration: [
      'Supplier ERP systems via EDI or secure API',
      'Barcode and RFID scanning devices in distribution centers',
      'Sales forecasting engines and ERP production schedules',
      'Logistics tracking and freight carrier updates',
    ],
    whoItIsFor: [
      'Distributors, wholesalers, and multi-location retail networks',
      'Manufacturing businesses reliant on raw material continuity',
      'Import/export enterprises managing extended supply lead times',
    ],
    relatedWork: {
      slug: 'sinau-print-erp',
      title: 'Sinau Print ERP & Marketplace Platform',
      image: '/images/projects/sinau-print-erp/1.webp',
      relationship: 'supporting',
    },
    caseStudySlug: 'myboss-supply-chain-distribution-system',
    articleCategory: 'TECHNOLOGY',
    articleDateLabel: 'APRIL 2026',
    articleDateValue: '2026-04-22',
    articleTags: ['ERP', 'SUPPLY CHAIN', 'INVENTORY'],
    industry: 'Supply Chain',
    keywords: ['supply chain', 'procurement', 'supplier', 'inventory', 'stock', 'erp'],
    updatedAt: '2026-10-06',
    language: 'id-ID',
    seoTitle: 'Supply Chain & Inventory Control System',
  },
  {
    slug: 'logistics-fleet-operations-tracker',
    title: 'Logistics & Fleet Operations Tracker',
    shortTitle: 'Logistics & Fleet Tracker',
    description:
      'Track vehicles, assignments, routes, maintenance, and delivery performance through connected operations.',
    image: '/images/Expertise/logistics-fleet.svg',
    whatItIs:
      'An integrated fleet intelligence and delivery management platform providing real-time GPS tracking, automated driver dispatch, fuel monitoring, and digital proof-of-delivery (e-POD).',
    challenge:
      'Fragmented fleet information limits delivery control, asset utilization, and timely intervention.',
    approach: [
      'Live fleet and assignment monitoring',
      'Route and delivery status tracking',
      'Maintenance and utilization records',
    ],
    outcomes: [
      'Improved fleet utilization',
      'More reliable deliveries',
      'Faster operational response',
    ],
    integration: [
      'OBD-II hardware, CAN-bus vehicle sensors, and GPS trackers',
      'Mobile Driver App (Android/iOS) with turn-by-turn guidance',
      'WMS & ERP delivery order synchronization',
      'Customer delivery tracking links via SMS/WhatsApp',
    ],
    whoItIsFor: [
      'Logistics and third-party freight providers (3PL)',
      'Enterprise distribution fleets and field service companies',
      'Cold-chain transport requiring temperature sensor tracking',
    ],
    relatedWork: {
      slug: 'myboss-iot-system',
      title: 'MyBoss Connected IoT Hardware & Control System',
      image: '/images/case-studies/myboss-logistics/cover.webp',
      relationship: 'direct',
    },
    caseStudySlug: 'myboss-logistics-fleet-management',
    articleCategory: 'TECHNOLOGY',
    articleDateLabel: 'MAY 2026',
    articleDateValue: '2026-05-30',
    articleTags: ['IOT', 'LOGISTICS', 'FLEET OPERATIONS'],
    industry: 'Logistics & IoT',
    keywords: ['logistics', 'fleet', 'vehicle', 'tracking', 'route', 'iot', 'delivery'],
    updatedAt: '2026-10-06',
    language: 'id-ID',
    seoTitle: 'Logistics & Fleet Operations Tracker',
  },
  {
    slug: 'warehouse-management-system',
    title: 'Warehouse Management System',
    shortTitle: 'Warehouse Management',
    description:
      'Orchestrate receiving, put-away, storage, picking, packing, and dispatch with accurate real-time inventory.',
    image: '/images/Expertise/warehouse-management.svg',
    whatItIs:
      'A high-performance warehouse execution engine that maximizes floor space utilization, guides staff through optimal picking paths, and provides 99.9% inventory accuracy.',
    challenge:
      'Manual warehouse processes create inventory discrepancies and slow order fulfillment.',
    approach: [
      'Structured inbound and storage workflows',
      'Barcode-ready picking and packing',
      'Real-time warehouse inventory control',
    ],
    outcomes: [
      'Higher stock accuracy',
      'Faster fulfillment',
      'Traceable warehouse operations',
    ],
    integration: [
      'Industrial handheld Android RF barcode scanners',
      'Conveyor belt systems, electronic scales, and label printers',
      'E-commerce order channels and enterprise ERP backends',
      'Courier shipping label generation APIs',
    ],
    whoItIsFor: [
      'Distribution centers handling high daily SKU volumes',
      'Fulfillment centers serving omnichannel e-commerce and retail',
      'Manufacturing warehouses managing spare parts and raw materials',
    ],
    relatedWork: {
      slug: 'sinau-print-erp',
      title: 'Sinau Print ERP & Marketplace Platform',
      image: '/images/case-studies/sinau-print-wms/cover.webp',
      relationship: 'direct',
    },
    caseStudySlug: 'sinau-print-warehouse-management-wms',
    articleCategory: 'TECHNOLOGY',
    articleDateLabel: 'APRIL 2026',
    articleDateValue: '2026-04-22',
    articleTags: ['ERP', 'WAREHOUSE', 'FULFILLMENT'],
    industry: 'Warehouse & Fulfillment',
    keywords: ['warehouse', 'wms', 'storage', 'picking', 'packing', 'dispatch', 'inventory'],
    updatedAt: '2026-10-06',
    language: 'id-ID',
    seoTitle: 'Warehouse Management System',
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
  if (slug === 'enterprise-resource-planning') {
    return SOLUTION_SERVICES.find((service) => service.slug === 'enterprise-solution');
  }
  if (slug === 'internet-of-things') {
    return SOLUTION_SERVICES.find((service) => service.slug === 'smart-iot-system');
  }
  return SOLUTION_SERVICES.find((service) => service.slug === slug);
}
