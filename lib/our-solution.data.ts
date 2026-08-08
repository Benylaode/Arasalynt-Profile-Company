import type { CaseStudyArticle } from '@/types';

export type SolutionService = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  relatedWorkSlug: string;
  relatedWorkTitle: string;
  relatedWorkImage: string;
  caseStudySlug: string;
  articleCategory: string;
  articleDateLabel: string;
  articleDateValue: string;
  articleTags: string[];
  industry: string;
  keywords: string[];
};

export const OUR_SOLUTION_CHALLENGE = {
  title: "What’s Slowing Your Enterprise Down?",
  description:
    'Legacy infrastructure, fragmented ERP, delayed operational data, and reactive maintenance prevent enterprises from moving with speed, visibility, and confidence.',
};

export const OUR_SOLUTION_CHALLENGES = [
  { title: 'Legacy Hardware & Outdated Infrastructure', description: 'Aging physical servers and legacy equipment severely limit business expansion, carry high maintenance costs, and resist modern IoT or cloud integration.' },
  { title: 'Stuck Software & Fragmented ERP', description: 'Operating on disjointed platforms creates data silos, forces manual workarounds, and leads to expensive duplicate tasks across enterprise departments.' },
  { title: 'Operational Blind Spots & Data Lag', description: 'Without real-time data flow from the shop floor to the executive dashboard, leaders rely on outdated reports and cannot make proactive decisions.' },
  { title: 'Unplanned Downtime & Reactive Maintenance', description: 'Limited machine and system monitoring results in sudden equipment failures, costly operational halts, and escalating emergency IT expenses.' },
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
    slug: 'point-of-sale-pos',
    title: 'Point of Sale (POS)',
    shortTitle: 'Point of Sale',
    description: 'Connect checkout, product, promotion, customer, and store performance data in one retail operating system.',
    image: '/images/Expertise/pos-retail.webp',
    challenge: 'Disconnected transaction and inventory records make retail decisions slower and less reliable.',
    approach: ['Centralized product and pricing controls', 'Real-time sales and stock synchronization', 'Multi-outlet reporting and role management'],
    outcomes: ['Faster checkout workflows', 'Accurate inventory visibility', 'Consistent retail reporting'],
    relatedWorkSlug: 'sinau-print-erp',
    relatedWorkTitle: 'Sinau Print ERP & Marketplace Platform',
    relatedWorkImage: '/images/projects/sinau-print-erp/1.webp',
    caseStudySlug: 'point-of-sale-retail-management-system',
    articleCategory: 'TECHNOLOGY', articleDateLabel: 'APRIL 2026', articleDateValue: '2026-04-22',
    articleTags: ['ERP', 'RETAIL', 'POINT OF SALE'],
    industry: 'Retail & Commerce',
    keywords: ['pos', 'point of sale', 'retail', 'marketplace', 'checkout', 'erp', 'inventory'],
  },
  {
    slug: 'hr-talent-management-engine',
    title: 'HR & Talent Management Engine (HRMS)',
    shortTitle: 'HR & Talent Management',
    description: 'Manage employee records, attendance, performance, payroll workflows, and talent development from one platform.',
    image: '/images/Expertise/hrms.webp',
    challenge: 'Scattered employee information creates repetitive administration and weak workforce visibility.',
    approach: ['Unified employee lifecycle records', 'Automated attendance and approval workflows', 'Performance and talent dashboards'],
    outcomes: ['Lower administrative workload', 'Clearer workforce decisions', 'Consistent employee experience'],
    relatedWorkSlug: 'artic-complex-web',
    relatedWorkTitle: 'Artic Complex Web Architecture & Portal',
    relatedWorkImage: '/images/projects/artic-complex-web/1.webp',
    caseStudySlug: 'hr-talent-management-engine',
    articleCategory: 'TECHNOLOGY & DATA', articleDateLabel: 'JUNE 2026', articleDateValue: '2026-06-24',
    articleTags: ['HRMS', 'ENTERPRISE PORTAL', 'WORKFLOW'],
    industry: 'Enterprise Operations',
    keywords: ['hr', 'hrms', 'human resources', 'talent', 'employee', 'workflow', 'portal'],
  },
  {
    slug: 'financial-accounting-automation-hub',
    title: 'Financial & Accounting Automation Hub',
    shortTitle: 'Financial Automation',
    description: 'Automate transaction recording, reconciliation, approvals, reporting, and enterprise financial controls.',
    image: '/images/Expertise/financial-accounting.webp',
    challenge: 'Manual reconciliation and isolated financial records delay reporting and increase operational risk.',
    approach: ['Automated journals and reconciliation', 'Configurable approval controls', 'Live financial reporting'],
    outcomes: ['Faster closing cycles', 'Stronger financial governance', 'Reliable management reporting'],
    relatedWorkSlug: 'altatic-analytic',
    relatedWorkTitle: 'Altatic Data Analytics & Intelligence Dashboard',
    relatedWorkImage: '/images/projects/altatic-analytic/1.webp',
    caseStudySlug: 'financial-accounting-automation-hub',
    articleCategory: 'DATA & ANALYTICS', articleDateLabel: 'MARCH 2026', articleDateValue: '2026-03-19',
    articleTags: ['FINANCE', 'AUTOMATION', 'DASHBOARD'],
    industry: 'Finance & Analytics',
    keywords: ['finance', 'accounting', 'automation', 'reconciliation', 'dashboard', 'analytics'],
  },
  {
    slug: 'supply-chain-inventory-control',
    title: 'Supply Chain & Inventory Control System',
    shortTitle: 'Supply Chain Control',
    description: 'Coordinate procurement, suppliers, stock movement, replenishment, and demand visibility across operations.',
    image: '/images/Expertise/supply-chain.webp',
    challenge: 'Limited coordination between purchasing and stock operations causes shortages, delays, and excess inventory.',
    approach: ['Supplier and procurement workflows', 'Demand-aware replenishment', 'End-to-end stock movement visibility'],
    outcomes: ['Healthier inventory levels', 'More predictable procurement', 'Reduced operational waste'],
    relatedWorkSlug: 'sinau-print-erp',
    relatedWorkTitle: 'Sinau Print ERP & Marketplace Platform',
    relatedWorkImage: '/images/projects/sinau-print-erp/1.webp',
    caseStudySlug: 'supply-chain-inventory-control-system',
    articleCategory: 'TECHNOLOGY', articleDateLabel: 'APRIL 2026', articleDateValue: '2026-04-22',
    articleTags: ['ERP', 'SUPPLY CHAIN', 'INVENTORY'],
    industry: 'Supply Chain',
    keywords: ['supply chain', 'procurement', 'supplier', 'inventory', 'stock', 'erp'],
  },
  {
    slug: 'logistics-fleet-operations-tracker',
    title: 'Logistics & Fleet Operations Tracker',
    shortTitle: 'Logistics & Fleet Tracker',
    description: 'Track vehicles, assignments, routes, maintenance, and delivery performance through connected operations.',
    image: '/images/Expertise/logistics-fleet.webp',
    challenge: 'Fragmented fleet information limits delivery control, asset utilization, and timely intervention.',
    approach: ['Live fleet and assignment monitoring', 'Route and delivery status tracking', 'Maintenance and utilization records'],
    outcomes: ['Improved fleet utilization', 'More reliable deliveries', 'Faster operational response'],
    relatedWorkSlug: 'myboss-iot-system',
    relatedWorkTitle: 'MyBoss Connected IoT Hardware & Control System',
    relatedWorkImage: '/images/projects/myboss-iot-system/1.webp',
    caseStudySlug: 'logistics-fleet-operations-tracker',
    articleCategory: 'TECHNOLOGY', articleDateLabel: 'MAY 2026', articleDateValue: '2026-05-30',
    articleTags: ['IOT', 'LOGISTICS', 'FLEET OPERATIONS'],
    industry: 'Logistics & IoT',
    keywords: ['logistics', 'fleet', 'vehicle', 'tracking', 'route', 'iot', 'delivery'],
  },
  {
    slug: 'warehouse-management-system',
    title: 'Warehouse Management System',
    shortTitle: 'Warehouse Management',
    description: 'Orchestrate receiving, put-away, storage, picking, packing, and dispatch with accurate real-time inventory.',
    image: '/images/Expertise/warehouse-management.webp',
    challenge: 'Manual warehouse processes create inventory discrepancies and slow order fulfillment.',
    approach: ['Structured inbound and storage workflows', 'Barcode-ready picking and packing', 'Real-time warehouse inventory control'],
    outcomes: ['Higher stock accuracy', 'Faster fulfillment', 'Traceable warehouse operations'],
    relatedWorkSlug: 'sinau-print-erp',
    relatedWorkTitle: 'Sinau Print ERP & Marketplace Platform',
    relatedWorkImage: '/images/projects/sinau-print-erp/1.webp',
    caseStudySlug: 'warehouse-management-system',
    articleCategory: 'TECHNOLOGY', articleDateLabel: 'APRIL 2026', articleDateValue: '2026-04-22',
    articleTags: ['ERP', 'WAREHOUSE', 'FULFILLMENT'],
    industry: 'Warehouse & Fulfillment',
    keywords: ['warehouse', 'wms', 'storage', 'picking', 'packing', 'dispatch', 'inventory'],
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
  coverImage: service.relatedWorkImage,
  coverImageAlt: `${service.title} implemented through ${service.relatedWorkTitle}`,
  sections: [
    {
      eyebrow: 'THE CHALLENGE',
      mainTitle: service.challenge,
      paragraphs: [
        `${service.relatedWorkTitle} provides the project foundation for this solution. The implementation translates a real operational requirement into a connected enterprise workflow.`,
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
