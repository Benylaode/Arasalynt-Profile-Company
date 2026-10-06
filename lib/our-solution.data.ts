import type { CaseStudyArticle } from '@/types';

export type SolutionService = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  whatItIs: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  integration: string[];
  whoItIsFor: string[];
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
    slug: 'enterprise-resource-planning',
    title: 'Enterprise Resource Planning',
    description:
      'Centralizing core business functions into a unified digital platform, automating finance, supply chain, inventory, and HR workflows to eliminate operational problems and boost enterprise productivity.',
    image: '/images/our-business/kaluna-technology/services/finance-system.webp',
  },
  {
    slug: 'internet-of-things',
    title: 'Internet of Things',
    description:
      'Connecting physical machinery, smart sensors, and edge devices to digital networks, providing real-time asset monitoring, automated data collection, and predictive insight across your operations.',
    image: '/images/our-business/kaluna-technology/services/software-development.webp',
  },
] as const;

export const SOLUTION_SERVICES: SolutionService[] = [
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
  return SOLUTION_SERVICES.find((service) => service.slug === slug);
}
