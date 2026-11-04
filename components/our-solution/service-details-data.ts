export type ServiceCardDetail = {
  category: string;
  suiteName: string;
  suiteLogo?: string;
  abstractImage?: string;
  paragraphs: [string, string, string];
  capabilities: string[];
  previews?: { title: string; desc: string; image: string }[];
};

export const SERVICE_CARD_DETAILS: Record<string, ServiceCardDetail> = {
  // ── ENTERPRISE SOLUTION ──
  'Financial Accounting & Consolidation': {
    category: 'Enterprise Solutions',
    suiteName: 'MARKA SUITES',
    suiteLogo: '/images/partners/markasuites.svg',
    abstractImage: '/images/our-solution/card-enterprise.svg',
    paragraphs: [
      'Financial Accounting & Consolidation delivers an institutional-grade general ledger architecture designed for multi-entity corporations. By synchronizing transactions, multi-currency accounts, and intercompany settlements into a single immutable audit trail, finance leaders gain instantaneous cash visibility without waiting for monthly manual reconciliation cycles.',
      'Our engine integrates automated revenue recognition, bank feed harmonization, accounts payable approval matrices, and automated tax reporting. Real-time cost allocation links every transaction directly to specific operational projects, work orders, and department budgets—eliminating budget leakage and retroactive journal adjustments.',
      'Engineered for rigorous compliance with IFRS and local accounting standards, the platform features role-based cryptographic audit logging, continuous financial health scoring, and executive cash-runway forecasting that empowers leadership to make proactive capital allocation decisions.',
    ],
    capabilities: [
      'Multi-entity automated ledger consolidation and intercompany balancing',
      'Automated AP/AR workflows with multi-tier approval thresholds',
      'Real-time cash flow run-rate telemetry and burn-rate modeling',
      'Strict regulatory tax reporting and immutable audit trail compliance',
    ],
    previews: [
      {
        title: 'Real-Time Ledger Sync',
        desc: 'Instant transaction synchronization across divisions and branch accounts.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Cashflow Run-Rate Engine',
        desc: 'Automated revenue recognition with project cost allocation.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Compliance & Audit Hub',
        desc: 'Role-based access governance with automated tax statement generation.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  'HR Management & Automated Payroll': {
    category: 'Enterprise Solutions',
    suiteName: 'MARKA SUITES',
    suiteLogo: '/images/partners/markasuites.svg',
    paragraphs: [
      'HR Management & Automated Payroll centralizes your entire human capital lifecycle into a unified digital core. From biometric attendance synchronization and flexible shift scheduling to tax deductions (PPh 21/BPJS) and direct banking disbursement, every employee record remains synchronized without human intervention.',
      'Self-service employee portals empower staff to manage leave requests, claim reimbursements, and review salary slips directly from mobile devices, while HR leadership benefits from automated KPI tracking, talent retention analytics, and departmental headcount cost modeling.',
      'Built-in regulatory governance guarantees that changes in labor laws, overtime calculation rules, and statutory benefit deductions are automatically updated across all payroll runs, safeguarding the organization from compliance exposure and audit discrepancies.',
    ],
    capabilities: [
      'Automated gross-to-net payroll computation with BPJS and PPh 21 logic',
      'Biometric and GPS-fenced multi-shift attendance synchronization',
      'Employee self-service portal for leave, claims, and electronic payslips',
      'Talent retention modeling, KPI evaluation, and organizational charting',
    ],
    previews: [
      {
        title: 'Automated Payroll Engine',
        desc: 'One-click payroll disbursement with statutory tax deductions.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Attendance & Shift Telemetry',
        desc: 'Real-time synchronization across branch offices and remote teams.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Personnel Lifecycle Records',
        desc: 'Centralized employee dossiers with performance appraisal metrics.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  'Project Management & Governance': {
    category: 'Enterprise Solutions',
    suiteName: 'MARKA SUITES',
    suiteLogo: '/images/partners/markasuites.svg',
    paragraphs: [
      'Project Management & Governance bridges the gap between field operational milestones and executive financial tracking. By structuring complex deliverables into synchronized sprint boards, Gantt timelines, and critical-path dependencies, teams maintain complete accountability across distributed divisions.',
      'Every project milestone links directly to resource capacity, vendor purchase orders, and billable time logs. This bidirectional connection ensures that operational delays trigger automated alerts to finance and procurement before budget slippage impacts profit margins.',
      'Executive dashboards provide portfolio-level visibility with real-time Earned Value Management (EVM), milestone variance tracking, and deliverables verification checklists that ensure strict contractual adherence for enterprise client engagements.',
    ],
    capabilities: [
      'Real-time Earned Value Management (EVM) and cost-milestone tracking',
      'Automated resource allocation, workload leveling, and timesheet logging',
      'Bidirectional sync between engineering tickets and procurement orders',
      'Executive portfolio risk scoring and automated delivery bottleneck alerts',
    ],
    previews: [
      {
        title: 'Milestone Variance Tracking',
        desc: 'Live tracking of delivery timelines and critical path dependencies.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Resource Capacity Planner',
        desc: 'Workload leveling and billable hour utilization across teams.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Portfolio Health Dashboard',
        desc: 'Executive oversight of active multi-entity contracts and budget burn.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  'Inventory & Supply Chain Management': {
    category: 'Enterprise Solutions',
    suiteName: 'MARKA SUITES',
    suiteLogo: '/images/partners/markasuites.svg',
    paragraphs: [
      'Inventory & Supply Chain Management synchronizes multi-warehouse stock levels, inbound procurement pipelines, and outbound fulfillment workflows into a unified inventory ecosystem. Barcode and batch tracking ensure complete traceability from supplier delivery to customer handover.',
      'Dynamic reorder-point algorithms evaluate lead times, consumption velocity, and seasonal demand swings to automatically generate purchase requests. This eliminates stockouts of critical operational materials while preventing excess working capital from sitting idle on warehouse shelves.',
      'Integrated vendor scorecards track supplier fulfillment timeliness, pricing consistency, and defect ratios, giving procurement directors the quantitative data required to negotiate favorable contracts and optimize end-to-end supply chain resilience.',
    ],
    capabilities: [
      'Multi-location warehouse balancing and real-time inventory ledger sync',
      'Predictive safety stock calculations and automated replenishment triggers',
      'Batch and serial number traceability with FIFO/FEFO expiration tracking',
      'Supplier performance analytics and automated purchase requisition matrices',
    ],
    previews: [
      {
        title: 'Multi-Warehouse Inventory Ledger',
        desc: 'Real-time stock level monitoring across distributed depot locations.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Automated Replenishment Engine',
        desc: 'Algorithmic purchase orders based on consumption burn rates.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Supplier Quality & Lead Time Score',
        desc: 'Quantitative vendor evaluation and purchase order status audits.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  'Sales Pipeline & CRM Automation': {
    category: 'Enterprise Solutions',
    suiteName: 'MARKA SUITES',
    suiteLogo: '/images/partners/markasuites.svg',
    paragraphs: [
      'Sales Pipeline & CRM Automation transforms fragmented lead tracking into a repeatable, high-conversion revenue machine. From first contact through proposal generation, contract signing, and post-sales handoff, every sales opportunity is monitored across visual stage-gate funnels.',
      'Automated task sequencing prompts account executives on scheduled follow-ups, quotation expirations, and contract renewal windows. Integration with Marka ERP ensures that when a deal closes, sales orders and invoice schedules are instantly created in the financial ledger without duplicate data entry.',
      'Comprehensive sales intelligence dashboards provide granular win/loss ratio analysis, sales rep activity benchmarks, and weighted revenue forecasting that enables leadership to make accurate quarterly growth projections.',
    ],
    capabilities: [
      'Visual deal stage management with automated task reminders and SLAs',
      'Instant quotation-to-sales-order conversion integrated with finance',
      'Customer 360 dossiers containing interactions, contracts, and payment history',
      'Weighted revenue forecasting and individual account executive quota tracking',
    ],
    previews: [
      {
        title: 'Stage-Gate Deal Funnel',
        desc: 'Drag-and-drop pipeline with probability-weighted revenue metrics.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Quotation to Order Bridge',
        desc: 'Seamless conversion from sales agreement to billing and ERP invoices.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Customer 360 Intelligence',
        desc: 'Unified account history, contracts, ticket status, and lifetime value.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  // ── DATA & AI INTEGRATION ──
  'Agentic AI Management & Enterprise Assistants': {
    category: 'Data & AI Integration',
    suiteName: 'MARKA PLUS AI',
    suiteLogo: '/images/client-logos/artic-analytica.png',
    paragraphs: [
      'Agentic AI Management & Enterprise Assistants bridges traditional enterprise databases with state-of-the-art autonomous conversational AI agents. Built on secure local and cloud LLM architectures, these agents connect directly to ERP, CRM, and internal repositories to assist employees with contextual answers and workflow execution.',
      'Unlike generic chatbots, our agentic models possess tool-use capabilities: they can verify project milestone completion, check warehouse inventory levels, trigger approval workflows, and generate customized financial summaries—strictly adhering to role-based access control (RBAC).',
      'Enterprise security is prioritized through private contextual grounding, zero data-retention on public models, and end-to-end prompt firewalling that protects corporate trade secrets and customer privacy while unlocking breakthrough operational productivity.',
    ],
    capabilities: [
      'Autonomous tool-use agents capable of querying databases and triggering actions',
      'Role-based access controls ensuring staff only query authorized data',
      'Zero-retention private enterprise model deployment with prompt firewalls',
      'Contextual retrieval-augmented generation (RAG) over company SOPs and ERP records',
    ],
    previews: [
      {
        title: 'Conversational ERP Assistant',
        desc: 'Natural language queries over operational tasks, tickets, and costs.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Role-Based Agent Actions',
        desc: 'Secure execution of system workflows with dual authorization checks.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Private Contextual RAG',
        desc: 'High-speed retrieval from company documentation and internal ledgers.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  'Machine Learning & Enterprise Data Management': {
    category: 'Data & AI Integration',
    suiteName: 'CIVITAS ANALYTIC',
    suiteLogo: '/images/client-logos/artic-analytica.png',
    paragraphs: [
      'Machine Learning & Enterprise Data Management converts millions of disparate operational data points into unified data lakes and high-precision predictive intelligence. We design robust ETL/ELT streaming pipelines that extract, cleanse, and normalize data from legacy databases, cloud platforms, and IoT sensors.',
      'Our custom machine learning models are trained on domain-specific historical datasets to forecast market demand, detect transactional anomalies, predict customer churn, and optimize resource allocation with measurable statistical accuracy.',
      'Integrated with executive BI dashboards, the platform transforms retrospective reporting into proactive strategy. Decision makers receive prescriptive recommendations and automated scenario simulations that de-risk major strategic moves.',
    ],
    capabilities: [
      'High-throughput real-time ETL/ELT pipelines and unified data lakehouse design',
      'Custom predictive machine learning models for demand forecasting and anomaly detection',
      'Automated data quality scoring, deduplication, and schema validation',
      'Prescriptive scenario simulation engines integrated into executive BI dashboards',
    ],
    previews: [
      {
        title: 'Unified Data Lakehouse',
        desc: 'Continuous ingestion and normalization from distributed corporate sources.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Predictive Forecasting Models',
        desc: 'Machine learning demand curves with confidence interval modeling.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Anomaly & Trend Telemetry',
        desc: 'Automated executive alerts on operational deviations and market shifts.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  // ── SMART IOT SYSTEM ──
  'Industrial Automation & Edge Computing': {
    category: 'Smart IoT System',
    suiteName: 'KALUNA TECHNOLOGY',
    paragraphs: [
      'Industrial Automation & Edge Computing bridges factory-floor physical machinery with enterprise software backends. By deploying ruggedized edge microcontrollers and PLC gateway bridges, shopfloors achieve sub-second telemetry ingestion and automated supervisory control.',
      'Edge computing nodes process high-frequency sensor readings locally, executing safety interlocks, production line pacing, and vibration threshold checks with near-zero latency—even during intermittent cloud connectivity.',
      'Aggregated operational metrics synchronize seamlessly with Marka ERP work orders, automatically reconciling raw material consumption against manufactured finished units and flagging machine downtime for predictive maintenance.',
    ],
    capabilities: [
      'Industrial PLC and Modbus/CAN bus gateway integration with sub-second polling',
      'Edge-native safety interlocks and offline-resilient logic execution',
      'Automated work order reconciliation between shopfloor sensors and ERP',
      'Predictive equipment maintenance algorithms detecting motor vibration anomalies',
    ],
    previews: [
      {
        title: 'Edge Gateway Telemetry',
        desc: 'Sub-second sensor ingestion and local automated hardware interlocks.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Shopfloor OEE Tracking',
        desc: 'Live Overall Equipment Effectiveness calculation across production lines.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Predictive Maintenance Alerts',
        desc: 'Early warning signals on thermal, pressure, and mechanical drift.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  'Smart Facility & Energy Management': {
    category: 'Smart IoT System',
    suiteName: 'KALUNA TECHNOLOGY',
    paragraphs: [
      'Smart Facility & Energy Management transforms commercial buildings, campuses, and industrial plants into energy-efficient, automated environments. Integrated environmental sensors monitor power consumption, HVAC loads, temperature, humidity, and occupancy in real time.',
      'Intelligent scheduling algorithms dynamically modulate lighting and climate control based on peak electricity tariffs, real-time weather forecasts, and room occupancy patterns, reducing overall facility operating expenses by up to 28%.',
      'Automated alert thresholds notify facility managers of abnormal energy spikes, water leakage, or HVAC compressor strain before equipment failure occurs, complete with detailed ESG compliance carbon footprint reporting.',
    ],
    capabilities: [
      'Real-time sub-metering of electrical circuits, HVAC units, and water mains',
      'Occupancy-driven automated lighting and HVAC environmental modulation',
      'Peak-shaving tariff management and automated load shedding logic',
      'Audit-ready ESG carbon emission telemetry and monthly sustainability reports',
    ],
    previews: [
      {
        title: 'Facility Load Heatmaps',
        desc: 'Real-time spatial energy and environmental parameter visualization.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Automated Load Shedding',
        desc: 'Dynamic scheduling to avoid expensive peak-hour utility tariffs.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'ESG & Carbon Reports',
        desc: 'Automated greenhouse gas protocol calculations and compliance logs.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  'Connected Asset & Fleet Telemetry': {
    category: 'Smart IoT System',
    suiteName: 'KALUNA TECHNOLOGY',
    paragraphs: [
      'Connected Asset & Fleet Telemetry provides continuous real-time oversight of moving logistics assets, industrial machinery, and field service fleets. Utilizing multi-constellation GNSS, OBD-II telemetry, and cellular/LoRaWAN modules, vehicles transmit location, speed, fuel burn, and diagnostic trouble codes.',
      'Intelligent geofencing triggers automated dispatch notifications when vehicles enter or leave logistics hubs, while driver behavior algorithms analyze harsh braking, excessive idling, and speeding to safeguard fleet safety and lower insurance premiums.',
      'Direct integration with supply chain dispatch modules provides clients with accurate live estimated delivery times, instant delivery confirmation, and automated maintenance scheduling based on engine hours rather than arbitrary calendar dates.',
    ],
    capabilities: [
      'Real-time GPS tracking with cellular and LoRaWAN fallback connectivity',
      'OBD-II engine diagnostics, automated fuel theft detection, and idle logging',
      'Dynamic geofencing with automated arrival/departure logistics alerts',
      'Condition-based fleet maintenance scheduling calculated by engine run-hours',
    ],
    previews: [
      {
        title: 'Live Fleet Tracking Map',
        desc: 'Real-time vehicle positioning with traffic-aware routing overlays.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Fuel & Engine Telemetry',
        desc: 'Diagnostic trouble codes with automated fuel level discrepancy alerts.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Geofence Dispatch Automation',
        desc: 'Automatic gate check-ins and delivery completion event logging.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  // ── DIGITAL DEVELOPMENT ──
  'Dynamic & Responsive Web Engineering': {
    category: 'Digital Development',
    suiteName: 'WEB2UP',
    suiteLogo: '/images/partners/web2up.svg',
    paragraphs: [
      'Dynamic & Responsive Web Engineering crafts bespoke digital web platforms engineered for lightning-fast responsiveness, architectural elegance, and flawless rendering across every device and viewport dimension.',
      'Leveraging modern headless architectures, edge SSR caching, and atomic design systems, our websites achieve sub-second page loads and perfect 100/100 Core Web Vitals scores. Fluid animations and interactive micro-interactions engage visitors without sacrificing page speed.',
      'Every web experience is built with enterprise security, strict accessibility compliance (WCAG 2.1), and robust API orchestration that effortlessly integrates with your CRM, payment gateways, and backend inventory systems.',
    ],
    capabilities: [
      'Fluid responsive web engineering optimized for mobile, tablet, and desktop viewports',
      'Sub-second edge caching architecture achieving top Core Web Vitals performance',
      'Atomic component design systems ensuring visual brand consistency across pages',
      'Enterprise API orchestration connecting web frontends to CRM and payment gateways',
    ],
    previews: [
      {
        title: 'Responsive Viewport Engine',
        desc: 'Pixel-perfect rendering across high-density mobile and desktop screens.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Core Web Vitals Optimization',
        desc: 'Sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Headless API Integration',
        desc: 'Bidirectional synchronization with CRM, marketing, and catalog backends.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  'Enterprise Content Management & CMS': {
    category: 'Digital Development',
    suiteName: 'WEB2UP',
    suiteLogo: '/images/partners/web2up.svg',
    paragraphs: [
      'Enterprise Content Management & CMS liberates marketing and editorial teams from developer dependencies. We build intuitive, visual headless CMS environments that allow non-technical teams to publish pages, curate multimedia, and run campaign experiments with complete autonomy.',
      'Granular role-based publishing workflows ensure that content undergoes rigorous peer review and legal approval before going live. Multi-locale localization support enables multi-brand enterprises to manage localized content across global markets from a single administrative hub.',
      'Under the hood, automated asset optimization pipelines transform raw high-resolution media into next-generation AVIF/WebP formats and deliver them across global CDNs, guaranteeing rapid load times for content-heavy enterprise portals.',
    ],
    capabilities: [
      'Visual drag-and-drop block builders tailored to unique corporate design systems',
      'Multi-stage publishing governance with role-based editorial approval workflows',
      'Global multi-locale localization and translation synchronization hubs',
      'Automated media pipeline converting assets into next-gen AVIF/WebP formats',
    ],
    previews: [
      {
        title: 'Visual Block Publishing',
        desc: 'Intuitive modular page creation without touching a line of code.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Editorial Approval Workflows',
        desc: 'Multi-tiered governance protecting brand integrity before publication.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Automated Media CDN',
        desc: 'Next-gen responsive image optimization with edge asset distribution.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  'Modern Brand Identity & UI/UX Design': {
    category: 'Digital Development',
    suiteName: 'WEB2UP',
    suiteLogo: '/images/partners/web2up.svg',
    paragraphs: [
      'Modern Brand Identity & UI/UX Design synthesizes strategic brand positioning with conversion-focused human-computer interaction. We craft contemporary visual identities, typography hierarchies, and cohesive design systems that reflect modern corporate sophistication.',
      'Every user flow is rooted in cognitive empathy, user testing, and behavioral psychology. We design frictionless onboarding sequences, intuitive navigation patterns, and accessible form inputs that turn casual visitors into loyal, high-value enterprise accounts.',
      'Deliverables include comprehensive design token libraries, interactive Figma prototypes, and component documentation that streamline collaboration between design and development teams, ensuring 100% design fidelity in final production builds.',
    ],
    capabilities: [
      'Contemporary corporate brand identity systems, typography, and color tokens',
      'High-fidelity interactive Figma prototypes validated by real user testing',
      'Conversion-optimized information architecture and frictionless checkout flows',
      'Comprehensive design system documentation bridging designers and developers',
    ],
    previews: [
      {
        title: 'Design Token System',
        desc: 'Systematized typography, spacing, and chromatic hierarchy libraries.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Interactive UI Prototypes',
        desc: 'Validated user journeys tested across diverse user demographic groups.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Conversion Flow Architecture',
        desc: 'Streamlined checkout and lead capture forms engineered for maximum ROI.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  'Advanced SEO Engineering & Optimization': {
    category: 'Digital Development',
    suiteName: 'WEB2UP',
    suiteLogo: '/images/partners/web2up.svg',
    paragraphs: [
      'Advanced SEO Engineering & Optimization goes far beyond simple keyword stuffing. We build programmatic technical SEO foundations into the very architecture of your web platforms, ensuring search engines crawl, index, and rank your content with top authority.',
      'We implement automated JSON-LD structured schema (Organization, Service, FAQ, BreadcrumbList, CaseStudy), dynamic XML sitemaps, IndexNow instant search engine pinging, and semantic HTML5 landmarks that dominate search engine result pages (SERPs).',
      'Continuous technical audits monitor canonical links, broken redirects, hreflang tags, and mobile usability, while data-driven search intent mapping guarantees that high-commercial-intent organic visitors land directly on relevant conversion funnels.',
    ],
    capabilities: [
      'Comprehensive JSON-LD semantic schema markup (Organization, Product, Service)',
      'IndexNow instant indexing protocol notifying Bing and search engines upon publishing',
      'Automated dynamic sitemaps, robots.txt, and canonical link integrity monitoring',
      'Search intent mapping targeting high-conversion commercial search queries',
    ],
    previews: [
      {
        title: 'Semantic Schema Engine',
        desc: 'Automated JSON-LD rich snippets driving high-visibility SERP rankings.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'IndexNow Instant Publishing',
        desc: 'Immediate search engine crawl triggers upon content publication.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Technical SEO Health Audit',
        desc: 'Continuous monitoring of crawl budgets, canonicals, and Core Web Vitals.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },

  'Custom Web Applications & Portal Systems': {
    category: 'Digital Development',
    suiteName: 'WEB2UP',
    suiteLogo: '/images/partners/web2up.svg',
    paragraphs: [
      'Custom Web Applications & Portal Systems engineer complex, high-density web software that powers bespoke business operations. From client self-service portals and vendor management extranets to custom booking engines, we build web apps that handle mission-critical workflows securely.',
      'Built with modern full-stack frameworks (Next.js, TypeScript, PostgreSQL), our web apps feature role-based authentication (RBAC), multi-tenant tenancy separation, and real-time WebSocket communication for live collaborative editing and status updates.',
      'Architected for enterprise scalability, systems include automated disaster recovery, automated unit and end-to-end integration test suites, and Dockerized cloud containerization that reliably handles thousands of concurrent enterprise transactions.',
    ],
    capabilities: [
      'Custom client self-service portals and secure B2B vendor management extranets',
      'Multi-tenant database architectures with strict row-level security isolation',
      'Real-time WebSocket event streams for live collaboration and telemetry',
      'Dockerized container deployments with automated CI/CD and automated test suites',
    ],
    previews: [
      {
        title: 'Secure B2B Portal Gateway',
        desc: 'Role-based client dashboard with encrypted document exchange.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Real-Time Event Stream',
        desc: 'Low-latency WebSockets syncing operational status across users.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Multi-Tenant Security Architecture',
        desc: 'Isolated tenant data partitions with rigorous SOC2-ready compliance.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
};

const ABSTRACT_IMAGE_MAP: Record<string, string> = {
  'Enterprise Solutions': '/images/our-solution/card-enterprise.svg',
  'Enterprise Solution': '/images/our-solution/card-enterprise.svg',
  'Data & AI Integration': '/images/our-solution/card-data-ai.svg',
  'Smart IoT System': '/images/our-solution/card-smart-iot.svg',
  'Digital Development': '/images/our-solution/card-digital-dev.svg',
};

export function getServiceCardDetail(title: string, categoryFallback: string): ServiceCardDetail {
  const defaultAbstract = ABSTRACT_IMAGE_MAP[categoryFallback] ?? '/images/our-solution/card-enterprise.svg';

  if (SERVICE_CARD_DETAILS[title]) {
    const detail = SERVICE_CARD_DETAILS[title];
    return {
      ...detail,
      abstractImage: detail.abstractImage ?? defaultAbstract,
    };
  }

  // Generates realistic fallback detail if custom card title is added
  return {
    category: categoryFallback,
    suiteName: 'ENTERPRISE CAPABILITY',
    abstractImage: defaultAbstract,
    paragraphs: [
      `${title} provides an integrated operational architecture engineered to solve core business bottlenecks, unify fragmented workflows, and provide actionable real-time transparency across departments.`,
      `Built with scalable technology foundations and strict role-based governance, the system automates repetitive tasks and connects directly to your central enterprise data pipelines to ensure zero operational latency.`,
      `Leadership gains end-to-end operational oversight through live performance metrics, automated compliance reporting, and predictive capacity modeling that accelerates strategic enterprise growth.`,
    ],
    capabilities: [
      'Automated workflow orchestration and cross-department synchronization',
      'Role-based access governance with comprehensive audit tracking',
      'Real-time performance metrics and automated executive alert triggers',
      'Enterprise-grade security, scalability, and seamless API integration',
    ],
    previews: [
      {
        title: 'Real-Time Workflow Sync',
        desc: 'Instant synchronization across operational divisions and teams.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Automated Governance Engine',
        desc: 'Role-based compliance checks and automated activity logging.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Executive Telemetry Dashboard',
        desc: 'Actionable performance visibility and predictive forecasting.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  };
}

