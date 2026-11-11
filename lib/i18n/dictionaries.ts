import type { Locale } from './config';

export const DICTIONARIES = {
  en: {
    common: {
      home: 'Home',
      breadcrumb: 'Breadcrumb',
      previousSlide: 'Previous slide',
      nextSlide: 'Next slide',
      newest: 'Newest',
      oldest: 'Oldest',
      loadMore: 'Load More',
      closeModal: 'Close modal',
    },
    seo: {
      defaultTitle: 'Arsalynk | Enterprise IT Infrastructure & Software Engineering',
      defaultDescription:
        'Premier enterprise technology partner specializing in custom software engineering, IoT telemetry, AI data orchestration, and scalable digital infrastructure.',
      homeTitle: 'Arsalynk | Enterprise IT Infrastructure & Software Engineering',
      homeDescription:
        'Premier enterprise technology partner specializing in custom software engineering, IoT telemetry, AI data orchestration, and scalable digital infrastructure.',
      aboutUs: {
        title: 'About Us',
        description:
          'Discover the architecture of Arsalynk—our corporate profile, executive leadership, and unified ecosystem philosophy.',
      },
      corporateProfile: {
        title: 'Corporate Profile',
        description:
          'Institutional overview, vision, mission, and core engineering principles of PT Arsalynk.',
      },
      companyLeadership: {
        title: 'Company Leadership',
        description:
          'Meet the executive leadership and principal architects driving enterprise digital transformation at Arsalynk.',
      },
      ecosystemPhilosophy: {
        title: 'Ecosystem Philosophy',
        description:
          'How Arsalynk unifies Enterprise Systems, IoT, Data & AI, and Web Engineering into a single operational nervous system.',
      },
      ourSolution: {
        title: 'Our Solution | Arsalynk',
        description:
          'Explore Arsalynk enterprise technology solutions across Enterprise Systems, IoT & Connected Systems, Data & AI, and Web Development.',
      },
      insightProgramsTitle: 'Insight & Programs',
      insightProgramsDescription:
        'Explore Arsalynk case studies, architectural blueprints, and executive leadership thoughts on enterprise technology.',
      caseStudiesTitle: 'Case Studies',
      caseStudiesDescription:
        'Real-world enterprise engineering case studies across logistics, IoT telemetry, ERP modernization, and AI orchestration.',
      leadershipThoughtsTitle: 'Leadership Thoughts',
      leadershipThoughtsDescription:
        'Strategic perspectives and technical essays from Arsalynk executives and principal engineers.',
      contactUsTitle: 'Contact Us',
      contactUsDescription:
        'Connect with Arsalynk enterprise solution architects to discuss your software engineering, ERP, IoT, or AI transformation.',
      privacyPolicyTitle: 'Privacy Policy | Arsalynk',
      privacyPolicyDescription:
        'Learn how PT Arsalynk collects, processes, and protects personal and institutional data across our digital ecosystem.',
      profileTitle: 'Executive & Leadership Digital Profiles | Arsalynk',
      profileDescription:
        'Official digital business card directory for Arsalynk leadership and key personnel.',
      portalTitle: 'Client Project Portal | Arsalynk',
      portalDescription:
        'Track project progress, milestones, and deliverables in real time through the Arsalynk Client Project Portal.',
      feedbackTitle: 'Client Satisfaction & Feedback | Arsalynk',
      feedbackDescription:
        'Share your project feedback and testimonial with the Arsalynk engineering and delivery team.',
      pages: {
        '/': {
          title: 'Arsalynk | Enterprise IT Infrastructure & Software Engineering',
          description:
            'Premier enterprise technology partner specializing in custom software engineering, IoT telemetry, AI data orchestration, and scalable digital infrastructure.',
        },
        '/about-us': {
          title: 'About Us | Arsalynk',
          description:
            'Discover the architecture of Arsalynk—our corporate profile, executive leadership, and unified ecosystem philosophy.',
        },
        '/about-us/corporate-profile': {
          title: 'Corporate Profile | Arsalynk',
          description:
            'Institutional overview, vision, mission, and core engineering principles of PT Arsalynk.',
        },
        '/about-us/company-leadership': {
          title: 'Company Leadership | Arsalynk',
          description:
            'Meet the executive leadership and principal architects driving enterprise digital transformation at Arsalynk.',
        },
        '/about-us/ecosystem-philosophy': {
          title: 'Ecosystem Philosophy | Arsalynk',
          description:
            'How Arsalynk unifies Enterprise Systems, IoT, Data & AI, and Web Engineering into a single operational nervous system.',
        },
        '/our-solution': {
          title: 'Our Solutions | Arsalynk',
          description:
            'Explore Arsalynk enterprise technology solutions across Enterprise Systems, IoT & Connected Systems, Data & AI, and Web Development.',
        },
        '/insight-programs': {
          title: 'Insight & Programs | Arsalynk',
          description:
            'Explore Arsalynk case studies, architectural blueprints, and executive leadership thoughts on enterprise technology.',
        },
        '/insight-programs/case-studies': {
          title: 'Case Studies | Arsalynk',
          description:
            'Real-world enterprise engineering case studies across logistics, IoT telemetry, ERP modernization, and AI orchestration.',
        },
        '/insight-programs/leadership-thoughts': {
          title: 'Leadership Thoughts | Arsalynk',
          description:
            'Strategic perspectives and technical essays from Arsalynk executives and principal engineers.',
        },
        '/contact-us': {
          title: 'Contact Us | Arsalynk',
          description:
            'Connect with Arsalynk enterprise solution architects to discuss your software engineering, ERP, IoT, or AI transformation.',
        },
        '/privacy-policy': {
          title: 'Privacy Policy | Arsalynk',
          description:
            'Learn how PT Arsalynk collects, processes, and protects personal and institutional data across our digital ecosystem.',
        },
        '/profile': {
          title: 'Leadership Directory | Arsalynk',
          description:
            'Official digital business card directory for Arsalynk leadership and key personnel.',
        },
        '/portal': {
          title: 'Client Project Portal | Arsalynk',
          description:
            'Track project progress, milestones, and deliverables in real time through the Arsalynk Client Project Portal.',
        },
        '/crm': {
          title: 'Enterprise Client & Project Hub | Arsalynk',
          description:
            'Integrated consultation intake, live project tracking, and client feedback hub powered by Arsalynk CRM.',
        },
        '/feedback': {
          title: 'Client Satisfaction & Feedback | Arsalynk',
          description:
            'Share your project feedback and testimonial with the Arsalynk engineering and delivery team.',
        },
      },
    },
    navbar: {
      home: 'Home',
      aboutUs: 'About Us',
      ourSolution: 'Our Solution',
      insightPrograms: 'Insight & Programs',
      contactUs: 'CONTACT US',
      languageLabel: 'Select Language',
      switchToEn: 'Switch language to English',
      switchToId: 'Switch language to Bahasa Indonesia',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      dropdowns: {
        aboutUs: [
          {
            label: 'Corporate Profile',
            sub: 'Who we are, vision, mission & core values',
            href: '/about-us/corporate-profile',
          },
          {
            label: 'Company Leadership',
            sub: 'Executive team & key personnel',
            href: '/about-us/company-leadership',
          },
          {
            label: 'Ecosystem Philosophy',
            sub: 'How our services work together',
            href: '/about-us/ecosystem-philosophy',
          },
        ],
        ourSolution: [
          {
            label: 'Enterprise System',
            sub: 'ERP, CRM, HRIS & custom enterprise platforms',
            href: '/our-solution/enterprise-system',
          },
          {
            label: 'IoT & Connected Systems',
            sub: 'Smart sensors, edge computing & automation',
            href: '/our-solution/iot-connected-systems',
          },
          {
            label: 'Data & AI',
            sub: 'Machine learning, analytics & AI agents',
            href: '/our-solution/data-ai',
          },
          {
            label: 'Web Development',
            sub: 'High-performance web apps & digital platforms',
            href: '/our-solution/web-development',
          },
        ],
        insightPrograms: [
          {
            label: 'Case Studies',
            sub: 'Real-world results & client impact',
            href: '/insight-programs/case-studies',
          },
          {
            label: 'Leadership Thoughts',
            sub: 'Perspectives on tech, AI & digital strategy',
            href: '/insight-programs/leadership-thoughts',
          },
        ],
      },
    },
    footer: {
      ctaTitleLine1: 'Want to Chat Hint?',
      ctaTitleLine2: 'Drop Us a Line!',
      ctaDescription:
        'Have a project in mind or looking to modernize your enterprise infrastructure? Reach out to our team and let us build scalable digital solutions together.',
      emailPlaceholder: 'Enter your work email...',
      sendButton: 'Send',
      navigationHeader: 'Navigation',
      solutionsHeader: 'Solutions',
      companyHeader: 'Company',
      links: {
        home: 'Home',
        aboutUs: 'About Us',
        ourSolution: 'Our Solution',
        insightPrograms: 'Insight & Programs',
        contactUs: 'Contact Us',
        enterpriseSystem: 'Enterprise System',
        iotSystems: 'IoT & Connected Systems',
        dataAi: 'Data & AI',
        webDevelopment: 'Web Development',
        corporateProfile: 'Corporate Profile',
        companyLeadership: 'Company Leadership',
        ecosystemPhilosophy: 'Ecosystem Philosophy',
        caseStudies: 'Case Studies',
        leadershipThoughts: 'Leadership Thoughts',
        privacyPolicy: 'Privacy Policy',
      },
      headOffice: 'Head Office',
      branchOffice: 'Branch Office',
      copyright: 'All rights reserved.',
    },
    whatsapp: {
      ariaLabel: 'Chat with us on WhatsApp',
      tooltip: 'Chat via WhatsApp',
      defaultMessage:
        'Hello Arsalynk team, I would like to discuss a potential technology project.',
    },
    chatbot: {
      triggerAriaLabel: 'Open Arsalynk Plus Assistant',
      assistantName: 'Arsalynk Plus',
      statusOnline: 'Online & CS Ready',
      closeAriaLabel: 'Close Arsalynk Plus drawer',
      welcomeMessage:
        'Hello! I am Arsalynk Plus, the intelligent assistant for Arsalynk. I can help you explore our enterprise technology solutions, company background, or connect you directly with our Customer Support team. How can I assist you today?',
      quickActionsTitle: 'QUICK ACTIONS',
      inputPlaceholder: 'Ask Arsalynk Plus anything..',
      sendAriaLabel: 'Send message',
      footerNote: 'Arsalynk Plus powered by Enterprise AI & Live WhatsApp CS.',
      errorFallback:
        'I apologize, I am experiencing a temporary connection issue. Would you like to connect directly with our team via WhatsApp?',
      connectWhatsappCta: 'Connect via WhatsApp CS',
      quickActions: [
        {
          id: 'company-profile',
          label: 'Company Profile & Vision',
          prompt: 'Tell me about Arsalynk company profile, vision, and core competencies.',
        },
        {
          id: 'enterprise-solutions',
          label: 'Enterprise Solutions & Services',
          prompt: 'What enterprise solutions and technology services does Arsalynk offer?',
        },
        {
          id: 'case-studies',
          label: 'Project Case Studies',
          prompt: 'Can you share examples of recent enterprise projects and case studies by Arsalynk?',
        },
        {
          id: 'contact-whatsapp',
          label: 'Connect with Support Team (WhatsApp)',
          prompt: 'I would like to speak with the Arsalynk Customer Support or Sales team on WhatsApp.',
        },
      ],
    },
    home: {
      hero: {
        prevSlideAria: 'Previous slide',
        nextSlideAria: 'Next slide',
        goToSlideAria: 'Go to slide',
      },
      clientLogos: {
        heading: 'TRUSTED BY FORWARD-THINKING ENTERPRISES & INSTITUTIONS',
      },
      specialized: {
        badge: 'WHY ARSALYNK',
        titleLine1: 'Specialized by Nature,',
        titleLine2: 'Integrated by Design',
        description:
          'We do not just build isolated software. We engineer cohesive digital ecosystems that connect your operations, hardware, data, and people into one unified architecture.',
        cards: [
          {
            title: 'Enterprise-Grade Architecture',
            description:
              'Built on resilient microservices and cloud-native foundations designed to handle mission-critical workloads with 99.9% uptime.',
          },
          {
            title: 'Cross-Disciplinary Engineering',
            description:
              'Seamless convergence of ERP software, industrial IoT hardware telemetry, and autonomous AI workflows under one roof.',
          },
          {
            title: 'Security & Governance First',
            description:
              'Zero-trust access controls, end-to-end encryption, and comprehensive audit trails baked into every layer of your platform.',
          },
        ],
      },
      itInfrastructure: {
        badge: 'OUR CORE SOLUTIONS',
        title: 'End-to-End IT Infrastructure & Digital Engineering',
        subtitle:
          'Four interconnected pillars engineered to modernize operations, automate complex workflows, and accelerate institutional growth.',
        exploreService: 'Explore Service',
        keyCapabilities: 'Key Capabilities',
      },
      solutionExplorer: {
        badge: 'INTERACTIVE SOLUTION EXPLORER',
        title: 'How Our Ecosystem Solves Real Operational Bottlenecks',
        subtitle:
          'Select a domain to explore the enterprise modules, live dashboards, and architectural capabilities we deploy for our clients.',
        viewAllSolutions: 'Explore Full Solution Architecture',
        viewDetails: 'View Details',
      },
      businessWorks: {
        badge: 'INDUSTRY APPLICATIONS',
        title: 'Engineered for Complex Industry Workflows',
        subtitle:
          'See how Arsalynk adapts our core technology stack to solve specialized operational challenges across key sectors.',
        prevAria: 'Previous industry',
        nextAria: 'Next industry',
        items: [
          {
            tag: 'MANUFACTURING & SUPPLY CHAIN',
            title: 'Smart Factory Telemetry & ERP Synchronization',
            description:
              'Connecting shop-floor PLC sensors directly to inventory and financial ledgers for real-time production costing and predictive maintenance.',
            metrics: ['99.4% Inventory Accuracy', '38% Less Unplanned Downtime'],
          },
          {
            tag: 'CORPORATE & MULTI-ENTITY ENTERPRISE',
            title: 'Unified Holding Financial & HR Consolidation',
            description:
              'Centralizing multi-branch accounting, automated payroll, tax compliance, and executive KPIs into a single source of truth.',
            metrics: ['3x Faster Monthly Closing', '100% Audit Traceability'],
          },
          {
            tag: 'LOGISTICS & FLEET OPERATIONS',
            title: 'Real-Time Fleet GPS & Cold-Chain Assurance',
            description:
              'Continuous vehicle telemetry, route optimization, fuel monitoring, and automated geofence alerts for nationwide distribution.',
            metrics: ['24% Fuel & Route Savings', 'Real-Time Asset Visibility'],
          },
          {
            tag: 'PUBLIC SECTOR & SMART INFRASTRUCTURE',
            title: 'High-Concurrency Digital Portals & AI Governance',
            description:
              'Secure, accessible public service platforms and executive command dashboards built to serve millions of citizens reliably.',
            metrics: ['Sub-Second Page Loads', 'Enterprise Role Security'],
          },
        ],
      },
      growthMetrics: {
        badge: 'MEASURABLE IMPACT',
        title: 'Engineered for Real Operational Scale',
        subtitle:
          'Every architecture we deploy is measured against strict performance, reliability, and business efficiency benchmarks.',
        stats: [
          {
            value: '99.9%',
            label: 'System Uptime SLA',
            detail: 'High-availability cloud & hybrid deployments',
          },
          {
            value: '3.5x',
            label: 'Operational Velocity',
            detail: 'Faster cross-department workflow execution',
          },
          {
            value: '40%',
            label: 'Efficiency Gain',
            detail: 'Reduction in manual data reconciliation overhead',
          },
          {
            value: '24/7',
            label: 'Dedicated Engineering Support',
            detail: 'Proactive telemetry monitoring & incident response',
          },
        ],
      },
      projectShowcase: {
        badge: 'FEATURED CASE STUDIES',
        title: 'Proven Execution Across Critical Industries',
        subtitle:
          'Explore how we partner with ambitious organizations to turn complex technical challenges into competitive advantages.',
        viewAllCta: 'View All Case Studies',
        readCaseStudy: 'Read Case Study',
      },
      bridgePossibility: {
        badge: 'ECOSYSTEM PHILOSOPHY',
        titleLine1: 'Bridging the Gap Between',
        titleLine2: 'Operational Reality & Digital Possibility',
        description:
          'Disconnected tools create data silos. Arsalynk unifies your physical assets, enterprise workflows, and executive intelligence into one continuous digital thread.',
        ctaPrimary: 'Explore Our Philosophy',
        ctaSecondary: 'Consult With an Architect',
        pillars: [
          {
            step: '01',
            title: 'Capture & Connect',
            desc: 'Ingest real-time signals from IoT sensors, web portals, and frontline operations.',
          },
          {
            step: '02',
            title: 'Orchestrate & Automate',
            desc: 'Process workflows through unified ERP, HRMS, and project governance engines.',
          },
          {
            step: '03',
            title: 'Analyze & Predict',
            desc: 'Empower leadership with Agentic AI assistants and predictive analytics.',
          },
        ],
      },
      testimonials: {
        badge: 'CLIENT VOICES',
        title: 'Trusted by Leaders Who Demand Precision',
        subtitle:
          'Hear directly from executives and operations directors who transformed their infrastructure with Arsalynk.',
        prevAria: 'Previous testimonial',
        nextAria: 'Next testimonial',
      },
      beyondExpectations: {
        badge: 'START YOUR TRANSFORMATION',
        titleLine1: 'Ready to Engineer Digital Systems',
        titleLine2: 'That Go Beyond Expectations?',
        description:
          'Schedule a technical discovery session with our principal architects to map out your ERP, IoT, AI, or custom platform roadmap.',
        primaryCta: 'Schedule a Consultation',
        secondaryCta: 'Explore Our Solutions',
      },
    },
    aboutUs: {
      hub: {
        badge: 'ABOUT ARSALYNK',
        title: 'Architecting the Digital Backbone of Modern Enterprises',
        subtitle:
          'Arsalynk is an enterprise technology and software engineering firm dedicated to building resilient, interconnected digital ecosystems across Indonesia and beyond.',
        exploreSection: 'Explore Section',
        cards: [
          {
            tag: '01 / IDENTITY & VISION',
            title: 'Corporate Profile',
            description:
              'Discover our institutional background, engineering standards, vision, mission, and the core values that govern every system we build.',
            href: '/about-us/corporate-profile',
          },
          {
            tag: '02 / EXECUTIVE TEAM',
            title: 'Company Leadership',
            description:
              'Meet the executives, principal engineers, and domain specialists steering Arsalynk’s technical vision and client delivery.',
            href: '/about-us/company-leadership',
          },
          {
            tag: '03 / UNIFIED ARCHITECTURE',
            title: 'Ecosystem Philosophy',
            description:
              'Learn why we reject fragmented software in favor of a unified ecosystem connecting Enterprise Systems, IoT, Data & AI, and Web platforms.',
            href: '/about-us/ecosystem-philosophy',
          },
        ],
        statsTitle: 'Institutional Highlights',
        stats: [
          { value: '4+', label: 'Core Engineering Pillars' },
          { value: '99.9%', label: 'Target Production Reliability' },
          { value: 'End-to-End', label: 'Hardware to Cloud Integration' },
          { value: 'Enterprise', label: 'Security & Governance Standard' },
        ],
      },
      corporateProfile: {
        breadcrumbAbout: 'About Us',
        breadcrumbCurrent: 'Corporate Profile',
        badge: 'CORPORATE PROFILE',
        heroTitle: 'Engineering Resilient Technology for Complex Organizations',
        heroSubtitle:
          'PT Arsalynk is an enterprise software engineering and systems integration partner. We design, build, and operate mission-critical digital infrastructure that empowers organizations to scale with clarity and control.',
        whoWeAreTag: 'WHO WE ARE',
        whoWeAreTitle: 'Built to Solve Fragmentation in Enterprise Technology',
        whoWeAreP1:
          'Many organizations struggle not from a lack of software, but from disconnected systems—where financial ledgers do not talk to field operations, HR data is isolated from project governance, and executive reports require weeks of manual reconciliation.',
        whoWeAreP2:
          'Arsalynk was founded to bridge that divide. By combining deep software engineering, industrial IoT telemetry, enterprise data architecture, and modern web platforms, we deliver unified systems that operate as a single digital nervous system.',
        visionTitle: 'Our Vision',
        visionBody:
          'To be the premier enterprise technology partner in Southeast Asia, recognized for engineering unified, intelligent, and enduring digital ecosystems that power institutional excellence.',
        missionTitle: 'Our Mission',
        missions: [
          'Deliver integrated enterprise platforms that eliminate operational silos and manual bottlenecks.',
          'Bridge physical assets and digital workflows through reliable IoT telemetry and edge computing.',
          'Democratize institutional intelligence using secure, role-aware AI agents and predictive analytics.',
          'Uphold the highest standards of software craftsmanship, security governance, and long-term partnership.',
        ],
        valuesTag: 'CORE VALUES',
        valuesTitle: 'The Principles Behind Every Line of Code',
        values: [
          {
            title: 'Architectural Integrity',
            desc: 'We never take shortcuts on scalability, security, or data consistency. We build systems meant to last for decades.',
          },
          {
            title: 'Operational Empathy',
            desc: 'Technology must serve the people who use it daily. We design intuitive interfaces grounded in real frontline workflows.',
          },
          {
            title: 'Measurable Accountability',
            desc: 'Every deployment is tied to concrete operational KPIs—faster closing cycles, higher asset uptime, and transparent governance.',
          },
          {
            title: 'Continuous Innovation',
            desc: 'We continuously advance our stack—from Agentic AI to edge telemetry—so our clients always stay ahead of industry shifts.',
          },
        ],
        ctaTitle: 'Partner With Arsalynk for Your Next Transformation',
        ctaDesc: 'Speak directly with our solution architects to discuss your organizational roadmap.',
        ctaButton: 'Contact Our Team',
      },
      leadership: {
        breadcrumbAbout: 'About Us',
        breadcrumbCurrent: 'Company Leadership',
        badge: 'COMPANY LEADERSHIP',
        heroTitle: 'Guided by Engineering Depth & Strategic Clarity',
        heroSubtitle:
          'Our leadership team brings together decades of combined experience in enterprise architecture, industrial automation, financial governance, and digital product delivery.',
        executiveTag: 'EXECUTIVE BOARD & PRINCIPAL LEADERS',
        executiveTitle: 'Leadership Team',
        viewDigitalCard: 'View Digital Profile',
        directoryCtaTitle: 'Looking for Direct Executive Contact or vCard?',
        directoryCtaDesc:
          'Access our official Leadership Directory for verified contact links, downloadable vCards, and direct messaging.',
        directoryCtaButton: 'Open Leadership Directory',
      },
      philosophy: {
        breadcrumbAbout: 'About Us',
        breadcrumbCurrent: 'Ecosystem Philosophy',
        badge: 'ECOSYSTEM PHILOSOPHY',
        heroTitle: 'Why Unified Architecture Always Outperforms Siloed Software',
        heroSubtitle:
          'At Arsalynk, we believe an enterprise is a living organism. When your ERP, field sensors, AI assistants, and web portals share a common foundation, every decision becomes faster, smarter, and verifiable.',
        problemTag: 'THE FRAGMENTATION TRAP',
        problemTitle: 'The Hidden Cost of Disconnected Systems',
        problemDesc:
          'Traditional IT procurement leaves organizations with a patchwork of incompatible vendors—creating duplicate data entry, blind spots in asset tracking, and delayed executive reporting.',
        solutionTag: 'THE ARSALYNK ECOSYSTEM',
        solutionTitle: 'Four Pillars Operating as One Nervous System',
        layers: [
          {
            code: 'LAYER 01',
            title: 'Web & Digital Experience Layer',
            subtitle: 'Public Portals, Corporate Presence & Client Interfaces',
            desc: 'High-concurrency, SEO-optimized web applications and headless CMS platforms that connect your brand and services with customers and stakeholders.',
            href: '/our-solution/web-development',
          },
          {
            code: 'LAYER 02',
            title: 'Enterprise Core Layer',
            subtitle: 'Marka ERP, HRMS, Finance, CRM & Project Governance',
            desc: 'The central operational engine governing multi-entity accounting, human capital, procurement, inventory, and cross-department project execution.',
            href: '/our-solution/enterprise-system',
          },
          {
            code: 'LAYER 03',
            title: 'Physical & Edge Telemetry Layer',
            subtitle: 'IoT Sensors, PLC Gateways & MyBoss Fleet GPS',
            desc: 'Real-time hardware integration capturing vehicle locations, cold-chain temperatures, facility energy use, and industrial machine health.',
            href: '/our-solution/iot-connected-systems',
          },
          {
            code: 'LAYER 04',
            title: 'Intelligence & AI Orchestration Layer',
            subtitle: 'MarkaPlus Agentic AI & Predictive Data Pipelines',
            desc: 'Role-aware conversational AI agents and machine learning models that synthesize data across all layers into instant answers and forecasts.',
            href: '/our-solution/data-ai',
          },
        ],
        explorePillar: 'Explore Pillar',
        ctaTitle: 'Ready to Unify Your Technology Ecosystem?',
        ctaDesc: 'Let us map how your existing systems can be integrated into a cohesive architecture.',
        ctaButton: 'Schedule Architecture Review',
      },
    },
    ourSolution: {
      breadcrumb: 'HOME / OUR SOLUTION',
      heroTitle: 'Our Solution',
      heroSubtitle:
        'Integrated enterprise technology engineered to connect your operations, physical assets, data intelligence, and digital experience.',
      scrollToChallenge: 'Scroll to challenge section',
      challengeEyebrow: 'THE CHALLENGE',
      architectureEyebrow: 'OUR ARCHITECTURE',
      architectureHeading: 'Four Core Pillars of Digital Transformation',
      servicesEyebrow: 'EXPLORE OUR SERVICES',
      servicesHeading: ['Specialized Solutions,', 'Engineered for Scale'],
      servicesBody:
        'Select a service pillar below to inspect our specialized modules, architectural blueprints, and real-world enterprise deployments.',
      outcomesHeading: 'Measurable Business Outcomes',
      otherSolutionsEyebrow: 'EXPLORE OTHER SOLUTIONS',
      hub: {
        badge: 'OUR SOLUTIONS',
        heroTitle: 'Enterprise Technology Engineered for Total Operational Clarity',
        heroSubtitle:
          'Explore our four specialized engineering domains—designed to work independently or as a fully integrated digital ecosystem.',
        challengeTag: 'THE CHALLENGE WE SOLVE',
        exploreDomain: 'Explore Solution Domain',
        keyModules: 'Core Capabilities & Modules',
        ctaTitle: 'Need a Custom Architecture Tailored to Your Enterprise?',
        ctaDesc:
          'Our principal engineers can design a bespoke deployment combining ERP, IoT telemetry, AI agents, and custom web applications.',
        ctaButton: 'Talk to a Solution Architect',
      },
      detail: {
        breadcrumbHome: 'Home',
        breadcrumbSolutions: 'Our Solution',
        overviewTag: 'SOLUTION OVERVIEW',
        capabilitiesTitle: 'Specialized Modules & Capabilities',
        capabilitiesSubtitle:
          'Click on any capability card below to inspect the architectural breakdown, key features, and interactive module preview.',
        viewDetails: 'View Details',
        architectureTag: 'ARCHITECTURAL ADVANTAGE',
        architectureTitle: 'Built for Security, Scale, and Seamless Integration',
        architecturePoints: [
          {
            title: 'API-First & Interoperable',
            desc: 'Designed with clean REST/GraphQL and webhook interfaces to integrate smoothly with your existing legacy databases and third-party tools.',
          },
          {
            title: 'Role-Based Access Control (RBAC)',
            desc: 'Granular permission matrices and complete audit logs ensure every user and AI agent only accesses authorized institutional data.',
          },
          {
            title: 'Cloud, On-Premise, or Hybrid',
            desc: 'Flexible deployment topologies tailored to your regulatory, data-sovereignty, and latency requirements.',
          },
        ],
        otherSolutionsTitle: 'Explore Other Solution Pillars',
        consultCtaTitle: 'Interested in Deploying This Solution?',
        consultCtaDesc:
          'Request a live demonstration or technical consultation with our engineering team.',
        consultCtaButton: 'Request a Live Demo',
      },
      modal: {
        closeAria: 'Close service details modal',
        overviewHeading: 'Overview & Operational Value',
        highlightsHeading: 'Key Architectural Capabilities',
        metricsHeading: 'Target Impact & Benchmarks',
        inquireCta: 'Discuss This Module With Our Team',
        closeButton: 'Close Preview',
      },
    },
    insightPrograms: {
      heroAriaLabel: 'Insight and Programs Hero',
      heroTitle: 'Insight & Programs',
      heroDescription:
        'Explore real-world enterprise case studies, architectural blueprints, and strategic perspectives from our technology leadership.',
      scrollAriaLabel: 'Scroll to content',
      pillarsEyebrow: 'KNOWLEDGE & EXECUTION',
      pillarsTitle: 'Two Pillars of Institutional Insight',
      pillarsDescription:
        'From proven field deployments to executive commentary on the future of enterprise systems, IoT, and AI.',
      pillar1Eyebrow: '01 / PROVEN EXECUTION',
      pillar1CountSuffix: 'Deployments',
      pillar1Title: 'Case Studies',
      pillar1Description:
        'Deep-dive into how Arsalynk architectures solve complex operational bottlenecks across logistics, manufacturing, corporate holdings, and digital platforms.',
      pillar1FeaturedLabel: 'Featured Deployments',
      pillar1Cta: 'Explore All Case Studies',
      pillar2Eyebrow: '02 / EXECUTIVE PERSPECTIVES',
      pillar2CountSuffix: 'Articles',
      pillar2Title: 'Leadership Thoughts',
      pillar2Description:
        'Strategic essays, architectural analyses, and forward-looking insights written by Arsalynk executives and principal engineers.',
      pillar2FeaturedLabel: 'Latest Perspectives',
      pillar2Cta: 'Read Leadership Thoughts',
      caseStudiesHeroTitle: 'Case Studies',
      caseStudiesHeroDescription:
        'Proven engineering execution and measurable operational outcomes across our enterprise deployments.',
      caseStudiesFeaturedEyebrow: 'FEATURED CASE STUDY',
      caseStudiesExploreTitle: 'Explore Case Studies',
      caseStudiesSearchPlaceholder: 'Search case studies...',
      caseStudiesSortAriaLabel: 'Sort case studies',
      caseStudiesNoMatch: 'No case studies match your search criteria.',
      caseStudyDetailRelatedSolution: 'Related Solution Architecture:',
      caseStudyDetailContinueExploring: 'CONTINUE EXPLORING',
      caseStudyDetailOtherCaseStudies: 'Other Case Studies',
      caseStudyDetailViewAll: 'View All Case Studies',
      leadershipThoughtsHeroTitle: 'Leadership Thoughts',
      leadershipThoughtsHeroDescription:
        'Strategic perspectives, architectural notes, and commentary from Arsalynk executives and principal engineers.',
      leadershipThoughtsFeaturedEyebrow: 'FEATURED PERSPECTIVE',
      leadershipThoughtsByPrefix: 'By',
      leadershipThoughtsExploreTitle: 'Explore Articles',
      leadershipThoughtsSearchPlaceholder: 'Search articles...',
      leadershipThoughtsSortAriaLabel: 'Sort articles',
      leadershipThoughtsNoMatch: 'No articles match your search criteria.',
      leadershipThoughtDetailByPrefix: 'By',
      leadershipThoughtDetailOtherThoughts: 'Other Leadership Thoughts',
      hub: {
        badge: 'INSIGHT & PROGRAMS',
        heroTitle: 'Engineering Case Studies & Executive Perspectives',
        heroSubtitle:
          'Explore how Arsalynk solves complex industrial and institutional challenges, along with strategic essays from our technology leaders.',
        caseStudiesSectionTitle: 'Featured Case Studies',
        caseStudiesSectionSub: 'Real-world deployments and measurable business outcomes.',
        viewAllCaseStudies: 'View All Case Studies',
        readCaseStudy: 'Read Case Study',
        leadershipSectionTitle: 'Leadership Thoughts',
        leadershipSectionSub: 'Technical perspectives on AI, ERP architecture, and digital strategy.',
        viewAllThoughts: 'View All Articles',
        readArticle: 'Read Article',
      },
      caseStudies: {
        breadcrumbParent: 'Insight & Programs',
        breadcrumbCurrent: 'Case Studies',
        badge: 'CASE STUDIES',
        heroTitle: 'Proven Impact Across Enterprise & Industrial Deployments',
        heroSubtitle:
          'Deep-dive into the architectural challenges, engineering solutions, and measurable outcomes we have delivered for our partners.',
        allCategories: 'All Categories',
        clientLabel: 'Client / Sector',
        timelineLabel: 'Timeline',
        readFullCaseStudy: 'Read Full Case Study',
        backToCaseStudies: 'Back to All Case Studies',
        challengeHeading: 'The Operational Challenge',
        solutionHeading: 'The Arsalynk Engineering Solution',
        resultsHeading: 'Key Results & Measurable Impact',
        technologiesHeading: 'Technologies & Modules Deployed',
        ctaTitle: 'Facing a Similar Operational Challenge?',
        ctaDesc: 'Let our engineering team design a tailored architecture for your organization.',
        ctaButton: 'Schedule a Technical Consultation',
      },
      leadershipThoughts: {
        breadcrumbParent: 'Insight & Programs',
        breadcrumbCurrent: 'Leadership Thoughts',
        badge: 'LEADERSHIP THOUGHTS',
        heroTitle: 'Strategic Perspectives on Enterprise Technology & AI',
        heroSubtitle:
          'Essays, architectural notes, and commentary from Arsalynk executives and principal engineers.',
        readArticle: 'Read Full Article',
        backToArticles: 'Back to Leadership Thoughts',
        publishedOn: 'Published on',
        readTime: 'read',
        shareArticle: 'Share or Discuss This Perspective',
        ctaTitle: 'Want to Discuss This Topic With Our Leadership?',
        ctaDesc: 'Connect with our team to explore how these strategies apply to your enterprise.',
        ctaButton: 'Get in Touch',
      },
    },
    contactUs: {
      badge: 'CONTACT US',
      heroBreadcrumb: 'CONTACT US',
      heroTitle: 'Let’s Build Your Next Enterprise Breakthrough',
      heroSubtitle:
        'Whether you are modernizing legacy ERP workflows, deploying IoT fleet telemetry, or integrating Agentic AI, our solution architects are ready to help.',
      scrollAriaLabel: 'Scroll to contact form',
      leftHeadingLine1: 'Ready to Transform',
      leftHeadingLine2: 'Your Enterprise',
      leftHeadingLine3: 'Infrastructure?',
      contactLabel: 'DIRECT CONTACT',
      jakartaOfficeLabel: 'JAKARTA HEAD OFFICE',
      jakartaOfficeAddress:
        'Menara Rajawali Level 26, Jl. DR. Ide Anak Agung Gde Agung, Mega Kuningan, South Jakarta 12950',
      semarangOfficeLabel: 'SEMARANG R&D & OPERATIONS OFFICE',
      semarangOfficeAddress:
        'Jl. Diponegoro No. 45, Lempongsari, Gajahmungkur, Semarang City, Central Java 50231',
      yourNameLabel: 'Your Name',
      yourNamePlaceholder: 'Enter your full name',
      companyNameLabel: 'Company Name',
      companyNamePlaceholder: 'Enter your company or institution',
      emailPlaceholder: 'Enter your work email address',
      phoneNumberLabel: 'Phone / WhatsApp Number',
      phoneNumberPlaceholder: 'e.g. +62 812 3456 7890',
      inquiryLabel: 'What Can We Help You With?',
      inquiryPlaceholder: 'Select a solution domain',
      inquiryOptionTech: 'Enterprise System & ERP Architecture',
      inquiryOptionData: 'Data Engineering, Analytics & Agentic AI',
      inquiryOptionMedia: 'Smart IoT Telemetry & Fleet Systems',
      inquiryOptionPartnership: 'Digital Web Engineering & Strategic Partnership',
      inquiryOptionOther: 'Other / Custom Ecosystem Consultation',
      messageLabel: 'Project Details & Message',
      messagePlaceholder: 'Tell us about your project goals, current challenges, or timeline...',
      submitErrorFallback: 'Failed to submit inquiry. Please check your inputs and try again.',
      serverErrorFallback: 'Unable to connect to the server. Please try again shortly.',
      successCloseAriaLabel: 'Close confirmation dialog',
      successTitle: 'Thank You for Reaching Out!',
      successDescription:
        'Your inquiry has been received and logged into our Enterprise CRM. Our solution architecture team will review your requirements and contact you shortly.',
      successBackToHome: 'Back to Homepage',
      directChannelsTitle: 'Direct Communication Channels',
      directChannelsDesc:
        'Prefer immediate executive assistance? Reach us directly via email, WhatsApp, or visit our offices.',
      emailLabel: 'Official Email',
      whatsappLabel: 'WhatsApp Consultation',
      whatsappAction: 'Chat With Solution Architect',
      headOfficeLabel: 'Head Office',
      branchOfficeLabel: 'Branch Office',
      businessHoursLabel: 'Operating Hours',
      businessHoursValue: 'Monday – Friday, 08:30 – 17:30 WIB',
      formTitle: 'Send Us a Project Inquiry',
      formSubtitle:
        'Fill out the details below and our engineering team will respond within 1 business day.',
      fields: {
        fullName: 'Full Name',
        fullNamePlaceholder: 'e.g. Budi Santoso',
        email: 'Work Email',
        emailPlaceholder: 'e.g. budi@company.com',
        phone: 'Phone / WhatsApp Number',
        phonePlaceholder: 'e.g. +62 812 3456 7890',
        company: 'Company / Institution Name',
        companyPlaceholder: 'e.g. PT Nusantara Logistik',
        inquiryType: 'Solution Domain of Interest',
        inquiryOptions: {
          enterprise: 'Enterprise System (ERP, HRMS, Finance, CRM)',
          iot: 'IoT & Connected Systems (Telemetry, GPS Fleet, Edge)',
          dataAi: 'Data & AI (MarkaPlus Agentic AI, Analytics)',
          web: 'Web Development (Corporate Portal, Headless CMS, E-Commerce)',
          custom: 'Custom Full-Ecosystem Integration / General Inquiry',
        },
        message: 'Project Scope or Challenge Details',
        messagePlaceholder:
          'Tell us about your current operational challenges, target timeline, or specific modules you would like to explore...',
      },
      submitButton: 'Submit Project Inquiry',
      submittingButton: 'Submitting Inquiry...',
      validation: {
        requiredFields: 'Please complete your name, email, and message before submitting.',
        genericError: 'Unable to submit your inquiry right now. Please try again or contact us via WhatsApp.',
      },
      successModal: {
        title: 'Inquiry Received Successfully!',
        description:
          'Thank you for reaching out to Arsalynk. Your project inquiry has been logged into our Enterprise CRM and assigned to a Solution Architect. We will contact you shortly.',
        referenceLabel: 'Reference Ticket',
        closeButton: 'Return to Page',
        whatsappFollowup: 'Need Urgent Response? Chat via WhatsApp',
      },
    },
    privacyPolicy: {
      badge: 'LEGAL & COMPLIANCE',
      title: 'Privacy Policy & Data Protection Governance',
      heroTitle: 'Privacy Policy',
      heroDescription:
        'How PT Arsalynk safeguards personal and institutional data across our digital products, enterprise systems, and client services.',
      lastUpdated: 'Last updated: November 2026',
      lastUpdatedLabel: 'Last Updated:',
      lastUpdatedDate: 'November 1, 2026',
      glanceTitle: 'Privacy at a Glance',
      glanceDescription: 'Key principles governing how we handle, isolate, and protect your data.',
      needAssistance: 'Need Legal or DPO Assistance?',
      contactOurTeam: 'Contact Our Compliance Team',
      commitmentTitle: 'Our Institutional Commitment',
      commitmentDescription:
        'PT Arsalynk upholds strict data sovereignty, zero-trust access control, and full compliance with Indonesian Personal Data Protection Law (UU PDP No. 27/2022).',
      contactEyebrow: 'DATA PROTECTION & COMPLIANCE',
      contactTitle: 'Questions About Data Privacy or Enterprise NDAs?',
      contactDescription:
        'Reach out directly to our Data Protection Officer and legal compliance desk for formal documentation or data requests.',
      emailButton: 'Email Privacy Team',
      contactUsButton: 'Open Contact Form',
      intro:
        'PT Arsalynk ("Arsalynk", "we", "our", or "us") is committed to protecting the privacy, confidentiality, and security of personal and institutional information across our websites, enterprise platforms (Marka ERP, MarkaPlus, MyBoss), and client portals.',
      tocTitle: 'Contents',
      sections: [
        {
          id: 'information-collection',
          number: '01',
          title: 'Information We Collect',
          body: 'We collect information that you voluntarily provide when submitting consultation forms, requesting product demonstrations, accessing the Client Project Portal, or interacting with our Arsalynk Plus assistant. This includes your full name, corporate email address, phone/WhatsApp number, company name, job title, and project technical requirements. We also automatically collect standard telemetry such as IP region, browser language preference, and device diagnostics to optimize site localization and security.',
        },
        {
          id: 'how-we-use-data',
          number: '02',
          title: 'How We Use Your Information',
          body: 'Your information is used strictly to: (a) respond to your technical inquiries and schedule architectural consultations; (b) provision and authenticate access to client project portals and enterprise sandboxes; (c) deliver localized content in English or Bahasa Indonesia based on your preferences; and (d) improve the reliability, security, and performance of our digital infrastructure.',
        },
        {
          id: 'enterprise-data-isolation',
          number: '03',
          title: 'Enterprise Data Isolation & AI Governance',
          body: 'For organizations utilizing Marka ERP, MyBoss Telemetry, or MarkaPlus Agentic AI, all institutional data remains the sole property of the client. Our AI assistants operate under strict Role-Based Access Control (RBAC) and never use confidential client ledgers or proprietary operational data to train public foundation models.',
        },
        {
          id: 'cookies-localization',
          number: '04',
          title: 'Cookies & Language Preferences',
          body: 'We use essential functional cookies and local storage (such as NEXT_LOCALE and arsalynk_locale) to remember your manual language selection (EN/ID) and session state so you do not have to reconfigure your preferences on every visit.',
        },
        {
          id: 'data-security',
          number: '05',
          title: 'Security Architecture & Encryption',
          body: 'We implement enterprise-grade security safeguards including TLS encryption in transit, encrypted database storage at rest, zero-trust network segmentation, and continuous audit logging to prevent unauthorized access, alteration, or disclosure.',
        },
        {
          id: 'third-party-sharing',
          number: '06',
          title: 'Third-Party Sharing & Subprocessors',
          body: 'Arsalynk does not sell, rent, or trade your personal information to third parties. Information is only shared with verified cloud infrastructure providers and authorized engineering personnel bound by strict Non-Disclosure Agreements (NDAs).',
        },
        {
          id: 'your-rights',
          number: '07',
          title: 'Your Data Protection Rights (UU PDP Compliance)',
          body: 'In accordance with Indonesian Personal Data Protection regulations (UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi) and international standards, you have the right to request access to, correction of, or deletion of your personal data stored in our systems at any time.',
        },
        {
          id: 'contact-dpo',
          number: '08',
          title: 'Contact Our Privacy & Compliance Team',
          body: 'If you have questions regarding this Privacy Policy, data sovereignty, or enterprise compliance agreements, please contact our Data Protection Officer at info@arsalynk.com.',
        },
      ],
      ctaTitle: 'Questions About Enterprise Security or NDA Compliance?',
      ctaDesc: 'Reach out to our legal and architecture team for formal security documentation.',
      ctaButton: 'Contact Compliance Team',
    },
    profile: {
      directoryBadge: 'OFFICIAL DIRECTORY',
      directoryTitle: 'Executive & Leadership Digital Profiles',
      directorySubtitle:
        'Connect directly with Arsalynk executives and key personnel. View verified credentials, save contact cards (vCard), or initiate direct communication.',
      ourPeopleEyebrow: 'LEADERSHIP & KEY PERSONNEL',
      heroTitle: 'Executive Profile Directory',
      ourTeamEyebrow: 'VERIFIED DIGITAL CARDS',
      allProfilesTitle: 'All Leadership Profiles',
      allProfilesDescription:
        'Select an executive profile below to view verified contact credentials or download a digital vCard.',
      phoneShort: 'Phone',
      emailShort: 'Email',
      officeShort: 'Office',
      saveContact: 'Save Contact',
      searchPlaceholder: 'Search by name, role, or department...',
      allDepartments: 'All Departments',
      viewCardCta: 'Open Digital Card',
      noResults: 'No team members match your search criteria.',
      backToDirectory: 'Back to Directory',
      saveContactVcard: 'Save Contact (vCard)',
      shareProfile: 'Share Profile',
      copiedLink: 'Profile Link Copied!',
      aboutHeading: 'Executive Bio & Focus',
      expertiseHeading: 'Areas of Expertise',
      credentialsHeading: 'Direct Contact & Credentials',
      emailLabel: 'Corporate Email',
      phoneLabel: 'Direct Line / WhatsApp',
      locationLabel: 'Base Location',
      departmentLabel: 'Department',
      idLabel: 'Employee ID',
    },
    portal: {
      badge: 'CLIENT PROJECT PORTAL',
      title: 'Real-Time Project Governance & Milestone Tracker',
      subtitle:
        'Enter your project access code or registered corporate email to inspect live engineering progress, sprint milestones, and deployment deliverables.',
      heroBreadcrumb: 'CLIENT PORTAL',
      heroTitle: 'Client Project & Support Portal',
      heroDescription:
        'Review and authorize digital quotations or submit priority engineering support tickets synchronized directly with Marka ERP.',
      scrollAriaLabel: 'Scroll to portal workspace',
      leftTitleLine1: 'Unified Client',
      leftTitleLine2: 'Governance &',
      leftTitleLine3: 'Support Desk',
      leftDescription:
        'Every action submitted here is cryptographically logged and routed in real time to your dedicated Arsalynk delivery team.',
      helpInfoLabel: 'DIRECT CLIENT ASSISTANCE',
      markaIntegrationLabel: 'MARKA ERP LIVE SYNC',
      markaIntegrationDescription:
        'Connected directly to MarkaSuites Enterprise CRM & Project Governance engine.',
      loadingPortal: 'Loading Client Portal...',
      tabQuotationReview: 'Quotation Approval',
      tabSupportTicket: 'Support Ticket',
      quoteEyebrow: 'DIGITAL QUOTATION GOVERNANCE',
      quoteTitle: 'Review & Authorize Quotation',
      quoteDescription:
        'Enter your official Quotation Document Number and authorized representative details to approve or decline a commercial proposal.',
      quoteInfoNote:
        'Ensure the document number matches the official PDF quotation issued by Arsalynk Commercial Desk.',
      quoteDocNumberLabel: 'Quotation Document Number',
      quoteDocNumberPlaceholder: 'e.g. QUO-2026-0042',
      quoteDocNumberHelp: 'Found in the top-right header of your quotation document.',
      quoteRepNameLabel: 'Authorized Representative Name',
      quoteRepNamePlaceholder: 'Enter full name and title',
      quoteNotesLabel: 'Approval / Revision Notes (Optional)',
      quoteNotesPlaceholder: 'Add any PO reference numbers, billing notes, or revision requests...',
      quoteProcessingButton: 'Processing...',
      quoteApproveButton: 'Approve Quotation',
      quoteRejectButton: 'Request Revision / Decline',
      quoteErrorRequiredCode: 'Please enter a valid Quotation Document Number.',
      quoteErrorRequiredName: 'Please enter the Authorized Representative Name.',
      quoteInfoSubmitting: 'Transmitting decision to Marka ERP...',
      quoteInfoQueued: 'Decision recorded locally and queued for ERP synchronization.',
      ticketEyebrow: 'TECHNICAL SUPPORT DESK',
      ticketTitle: 'Submit Engineering Support Ticket',
      ticketDescription:
        'Report technical issues, request configuration changes, or escalate urgent operational incidents to our 24/7 engineering desk.',
      ticketSubjectLabel: 'Issue Subject',
      ticketSubjectPlaceholder: 'Brief summary of the issue or request',
      ticketSerialLabel: 'Module / Asset Serial Code (Optional)',
      ticketSerialPlaceholder: 'e.g. MRK-FIN-01 or IoT Gateway ID',
      ticketPriorityLabel: 'Incident Priority',
      ticketPriorityLow: 'Low — General Question / Minor UI',
      ticketPriorityNormal: 'Normal — Standard Feature / Config Request',
      ticketPriorityHigh: 'High — Operational Module Degraded',
      ticketPriorityUrgent: 'Urgent — Critical Production Outage',
      ticketFullNameLabel: 'Your Full Name',
      ticketFullNamePlaceholder: 'Enter your name',
      ticketEmailLabel: 'Work Email Address',
      ticketEmailPlaceholder: 'Enter your corporate email',
      ticketClientCodeLabel: 'Client / Project Code (Optional)',
      ticketClientCodePlaceholder: 'e.g. CLI-ARS-088',
      ticketIssueDescriptionLabel: 'Detailed Technical Description',
      ticketIssueDescriptionPlaceholder:
        'Describe the steps to reproduce, affected module, or expected behavior...',
      ticketRefEventIdPrefix: 'Event Reference ID:',
      ticketCreateButton: 'Submit Support Ticket',
      ticketProtocolTitle: 'SLA Response Protocol',
      ticketProtocolDescription:
        'Urgent production tickets trigger immediate on-call engineer paging within 15 minutes. Normal tickets are answered within 4 business hours.',
      ticketErrorRequiredSubject: 'Please provide a ticket subject.',
      ticketErrorRequiredDescription: 'Please provide a detailed description of the issue.',
      ticketErrorRequiredIdentity: 'Please provide your name or corporate email address.',
      ticketSuccessRegistered: 'Support ticket registered and dispatched to Arsalynk Engineering.',
      searchPlaceholder: 'Enter Project Code (e.g. PRJ-2026-001) or Client Email...',
      accessButton: 'Access Project Status',
      searchingButton: 'Verifying...',
      demoCodesLabel: 'Quick Demo Project Codes:',
      statusLabel: 'Current Status',
      progressLabel: 'Overall Completion',
      timelineLabel: 'Target Delivery',
      leadArchitectLabel: 'Lead Architect',
      milestonesHeading: 'Engineering Milestones & Deliverables',
      needHelpTitle: 'Need Direct Assistance From Your Project Manager?',
      needHelpDesc: 'Contact your dedicated Arsalynk delivery lead or open a support ticket.',
      contactPmCta: 'Message Delivery Team',
    },
    crm: {
      badge: 'ENTERPRISE CLIENT HUB',
      title: 'Integrated Consultation, Project Tracking & Client Feedback',
      subtitle:
        'Access our unified client portal to request a technical consultation, track your active implementation, or submit project satisfaction feedback.',
      dashboardBadge: 'ENTERPRISE CRM CONSOLE',
      dashboardRefresh: 'Refresh Data',
      dashboardBackToWebsite: 'Back to Website',
      dashboardTabInquiries: 'Project Inquiries',
      dashboardTabInbox: 'Omnichannel Inbox',
      dashboardTabWebhooks: 'ERP Webhook Logs',
      dashboardTabTickets: 'Support Tickets',
      dashboardKpiTotal: 'Total Inquiries',
      dashboardKpiPending: 'Pending Review',
      dashboardKpiContacted: 'In Discussion',
      dashboardKpiDeals: 'Active Deals',
      dashboardSearchPlaceholder: 'Search by name, company, email, or service...',
      dashboardStatusAll: 'All Statuses',
      dashboardStatusPending: 'Pending',
      dashboardStatusContacted: 'Contacted',
      dashboardStatusDeal: 'Deal / Active',
      dashboardStatusClosed: 'Closed',
      dashboardExportCsv: 'Export CSV',
      dashboardColNameCompany: 'Client & Company',
      dashboardColContact: 'Contact Channels',
      dashboardColService: 'Solution Domain',
      dashboardColTimestamp: 'Submitted At',
      dashboardColStatus: 'Status',
      dashboardColActions: 'Actions',
      dashboardLoadingInquiries: 'Loading inquiries...',
      dashboardNoInquiriesMatch: 'No inquiries match the current filters.',
      dashboardInboxSearchTitle: 'Thread Lookup',
      dashboardInboxSearchDescription: 'Inspect live client messaging threads synced with Marka CRM.',
      dashboardInboxThreadPlaceholder: 'Enter Thread ID or Client Email...',
      dashboardInboxOpenButton: 'Load Thread',
      dashboardInboxViewerTitle: 'Active Thread:',
      dashboardInboxNoneSelected: 'None selected',
      dashboardInboxLoading: 'Loading messages...',
      dashboardInboxEmpty: 'No messages in this thread.',
      dashboardInboxSelectPrompt: 'Enter a thread ID above to inspect messages.',
      dashboardWebhooksTitle: 'Marka ERP Webhook & Event Stream',
      dashboardWebhooksDescription:
        'Real-time synchronization logs between the public portal and Marka ERP.',
      dashboardColTime: 'Timestamp',
      dashboardColDetails: 'Payload Details',
      dashboardWebhooksLoading: 'Loading webhook logs...',
      dashboardWebhooksEmpty: 'No webhook events recorded yet.',
      dashboardInspectButton: 'Inspect',
      dashboardTicketsTitle: 'Client Engineering Support Tickets',
      dashboardTicketsLoading: 'Loading support tickets...',
      dashboardTicketsEmpty: 'No support tickets found.',
      consultationErrorFallback: 'Unable to submit consultation request. Please try again.',
      consultationSuccessTitle: 'Consultation Request Logged!',
      consultationSuccessDescription:
        'Our principal solution architect will review your scope and contact you within 1 business day.',
      consultationCloseButton: 'Done',
      consultationEyebrow: 'ENTERPRISE ARCHITECTURE DESK',
      consultationTitle: 'Schedule a Technical Consultation',
      consultationDescription:
        'Share your operational requirements and our engineering team will prepare a tailored architecture briefing.',
      consultationFullNameLabel: 'Full Name',
      consultationFullNamePlaceholder: 'e.g. Andi Pratama',
      consultationCompanyLabel: 'Company / Organization',
      consultationCompanyPlaceholder: 'e.g. PT Sinergi Nusantara',
      consultationEmailLabel: 'Work Email',
      consultationEmailPlaceholder: 'e.g. andi@company.co.id',
      consultationPhoneLabel: 'Phone / WhatsApp',
      consultationPhonePlaceholder: 'e.g. +62 811 2233 4455',
      consultationSolutionLabel: 'Primary Solution Pillar',
      consultationSolutionPlaceholder: 'Select solution pillar',
      consultationBudgetLabel: 'Estimated Project Scale (Optional)',
      consultationBudgetPlaceholder: 'Select estimated scale',
      consultationScopeLabel: 'Project Scope & Objectives',
      consultationScopePlaceholder:
        'Describe the systems you want to build, integrate, or modernize...',
      consultationCancelButton: 'Cancel',
      consultationSubmittingButton: 'Submitting...',
      consultationSubmitButton: 'Submit Request',
      hubWelcomeMessage:
        'Welcome to Arsalynk Enterprise Hub. You can message our delivery desk directly, submit a structured project inquiry, or check your ticket/quotation status.',
      hubOpenAriaLabel: 'Open Enterprise Client Hub',
      hubTriggerTitle: 'Client & Project Hub',
      hubTriggerSubtitle: 'Live CRM & Portal',
      hubWindowTitle: 'Arsalynk Enterprise Hub',
      hubSyncActive: 'Marka CRM Live Sync',
      hubCloseAriaLabel: 'Close Enterprise Hub',
      hubTabInbox: 'Live Desk',
      hubTabInquiry: 'New Inquiry',
      hubTabPortal: 'Status Check',
      hubIdentityLabel: 'Your Name or Email:',
      hubIdentityPlaceholder: 'e.g. budi@company.com (so our team can reply)',
      hubYou: 'You',
      hubSending: 'Sending...',
      hubSentToCrm: 'Synced to CRM',
      hubFailed: 'Delivery delayed',
      hubInputPlaceholder: 'Type a message to our solution desk...',
      hubSendAriaLabel: 'Send message',
      hubInquirySuccessTitle: 'Inquiry Logged in CRM!',
      hubInquirySuccessDescription:
        'Our team has received your project brief and will reach out shortly.',
      hubInquiryAnotherButton: 'Submit Another Inquiry',
      hubSavingToCrm: 'Syncing to CRM...',
      hubSubmitInquiryButton: 'Send Project Inquiry',
      hubTicketTab: 'Support Ticket',
      hubQuotationTab: 'Quotation',
      hubTicketNumberLabel: 'Ticket Number',
      hubQuotationNumberLabel: 'Quotation Number',
      hubTokenLabel: 'Access Token / Client Code (Optional)',
      hubCheckingStatus: 'Checking...',
      hubCheckStatusButton: 'Check Live Status',
      hubActiveStatus: 'Active',
      hubTitleLabel: 'Title:',
      hubValueLabel: 'Value:',
      hubSignatoryPlaceholder: 'Authorized Signatory Name',
      hubApproveButton: 'Approve',
      hubDeclineButton: 'Decline',
      portalModalEyebrow: 'REAL-TIME ERP VERIFICATION',
      portalModalTitle: 'Project Ticket & Quotation Lookup',
      portalModalDescription:
        'Verify live status and authorize commercial documents directly against Marka ERP.',
      portalModalTabTickets: 'Support Tickets',
      portalModalTabQuotations: 'Quotations',
      portalModalTicketIdLabel: 'Ticket Reference ID',
      portalModalQuotationIdLabel: 'Quotation Document ID',
      portalModalTokenLabel: 'Client Security Token (Optional)',
      portalModalTokenPlaceholder: 'Enter token if required by your NDA',
      portalModalCheckingButton: 'Querying ERP...',
      portalModalCheckButton: 'Verify Status',
      portalModalResetButton: 'Reset',
      portalModalDocFound: 'Record Verified',
      portalModalDecisionTitle: 'Digital Sign-Off',
      portalModalSignerPlaceholder: 'Full Name & Title of Approver',
      portalModalNotesPlaceholder: 'Optional approval or revision notes...',
      portalModalApproveButton: 'Approve Document',
      portalModalDeclineButton: 'Decline / Revise',
      cards: {
        consultationTitle: 'Schedule Technical Consultation',
        consultationDesc:
          'Submit your architecture requirements directly to our solution engineering desk.',
        consultationBtn: 'Open Consultation Form',
        portalTitle: 'Live Project Status Portal',
        portalDesc:
          'Check real-time milestone completion and sprint deliverables using your project code.',
        portalBtn: 'Track Project Status',
        feedbackTitle: 'Client Feedback & Testimonial',
        feedbackDesc:
          'Share your experience working with the Arsalynk engineering and delivery team.',
        feedbackBtn: 'Submit Feedback',
      },
    },
    feedback: {
      badge: 'CLIENT SATISFACTION',
      title: 'Share Your Experience With Arsalynk',
      subtitle:
        'Your feedback directly shapes our engineering standards and service excellence. Let us know how our team performed on your project.',
      heroBreadcrumb: 'CLIENT FEEDBACK',
      heroTitle: 'Client Satisfaction & Review',
      heroDescription:
        'Your evaluation helps us continuously refine our engineering delivery, SLA responsiveness, and long-term partnership quality.',
      scrollAriaLabel: 'Scroll to feedback form',
      leftTitleLine1: 'Shaping Excellence',
      leftTitleLine2: 'Through Honest',
      leftTitleLine3: 'Client Evaluation',
      leftDescription:
        'Every review is read directly by our executive board and principal architects to ensure our systems and teams exceed expectations.',
      officialClientServiceLabel: 'CLIENT QUALITY ASSURANCE',
      dataConfidentialityLabel: 'VERIFIED & CONFIDENTIAL',
      dataConfidentialityDescription:
        'Feedback is linked to your client code for internal quality governance and is never published externally without explicit permission.',
      formEyebrow: 'PROJECT EVALUATION FORM',
      formTitle: 'Submit Your Project Review',
      formDescription:
        'Please enter your client or project code and rate your experience with our team.',
      clientCodeLabel: 'Client Code / Project Reference',
      clientCodePlaceholder: 'e.g. CLI-2026-019 or PRJ-ERP-04',
      clientCodeHelp: 'Provided in your project handover pack or monthly SLA report.',
      satisfactionLevelLabel: 'Overall Satisfaction Level',
      rating5: 'Excellent',
      rating4: 'Good',
      rating3: 'Satisfactory',
      rating2: 'Needs Improvement',
      rating1: 'Unsatisfied',
      serviceCategoryLabel: 'Evaluation Category',
      categoryOptionReview: 'Overall Project Delivery Review',
      categoryOptionEvaluation: 'System Performance & Architecture',
      categoryOptionManagement: 'Project Management & Communication',
      categoryOptionSupport: 'After-Sales SLA & Technical Support',
      feedbackTextLabel: 'Detailed Feedback & Suggestions',
      feedbackTextPlaceholder:
        'Tell us what went well and how we can further improve our engineering and delivery...',
      errorRequiredClientCode: 'Please enter your Client Code or Project Reference.',
      errorFallback: 'Failed to submit feedback. Please try again.',
      submitAnotherReviewButton: 'Submit Another Review',
      backToHomeButton: 'Back to Homepage',
      fields: {
        name: 'Your Full Name',
        namePlaceholder: 'e.g. Hendra Wijaya',
        role: 'Job Title / Role',
        rolePlaceholder: 'e.g. Chief Information Officer',
        company: 'Company / Organization',
        companyPlaceholder: 'e.g. PT Mandiri Logistik',
        projectCode: 'Project Code (Optional)',
        projectCodePlaceholder: 'e.g. PRJ-2026-001',
        rating: 'Overall Satisfaction Rating',
        quote: 'Your Feedback / Testimonial',
        quotePlaceholder:
          'Share how Arsalynk helped transform your operations or what stood out during the project delivery...',
      },
      submitButton: 'Submit Feedback',
      submittingButton: 'Submitting...',
      successTitle: 'Thank You for Your Feedback!',
      successDesc:
        'Your review has been recorded. We truly appreciate your partnership with Arsalynk.',
      backHomeButton: 'Return to Homepage',
    },
    errors: {
      notFoundBadge: 'ERROR 404',
      notFoundEyebrow: 'ERROR 404 — PAGE NOT FOUND',
      notFoundTitle: 'Page Not Found',
      notFoundTitleLine1: 'The Page You Requested',
      notFoundTitleLine2: 'Could Not Be Found',
      notFoundDesc:
        'The page or resource you are looking for might have been moved, renamed, or is temporarily unavailable.',
      notFoundDescription:
        'The URL may have been mistyped, or the page may have moved within our updated bilingual architecture.',
      backHome: 'Back to Homepage',
      returnHomeButton: 'Return to Homepage',
      exploreSolutions: 'Explore Solutions',
      exploreSolutionsButton: 'Explore Our Solutions',
      errorBadge: 'SYSTEM NOTICE',
      errorEyebrow: 'SYSTEM RUNTIME EXCEPTION',
      errorTitle: 'Something Went Wrong',
      errorTitleLine1: 'Something Went Wrong',
      errorTitleLine2: 'While Loading This Page',
      errorDesc:
        'An unexpected error occurred while rendering this section. You can retry loading or return to the homepage.',
      errorDescription:
        'Our engineering telemetry has logged this issue. Please try reloading the view or return to the homepage.',
      retryButton: 'Try Again',
      tryAgainButton: 'Try Again',
      referencePrefix: 'Diagnostic Reference:',
      globalErrorEyebrow: 'CRITICAL APPLICATION ERROR',
      globalErrorTitleLine1: 'Application Encountered',
      globalErrorTitleLine2: 'An Unexpected Error',
      globalErrorDescription:
        'We apologize for the interruption. Please retry loading the application or return to the main Arsalynk homepage.',
    },
  },
  id: {
    common: {
      home: 'Beranda',
      breadcrumb: 'Jejak Navigasi',
      previousSlide: 'Slide sebelumnya',
      nextSlide: 'Slide berikutnya',
      newest: 'Terbaru',
      oldest: 'Terlama',
      loadMore: 'Muat Lebih Banyak',
      closeModal: 'Tutup jendela',
    },
    seo: {
      defaultTitle: 'Arsalynk | Infrastruktur TI Enterprise & Rekayasa Perangkat Lunak',
      defaultDescription:
        'Mitra teknologi enterprise terkemuka yang berfokus pada rekayasa perangkat lunak kustom, telemetri IoT, orkestrasi data AI, dan infrastruktur digital berskala tinggi.',
      homeTitle: 'Arsalynk | Infrastruktur TI Enterprise & Rekayasa Perangkat Lunak',
      homeDescription:
        'Mitra teknologi enterprise terkemuka yang berfokus pada rekayasa perangkat lunak kustom, telemetri IoT, orkestrasi data AI, dan infrastruktur digital berskala tinggi.',
      aboutUs: {
        title: 'Tentang Kami',
        description:
          'Pelajari arsitektur Arsalynk—profil korporat, kepemimpinan eksekutif, dan filosofi ekosistem terpadu kami.',
      },
      corporateProfile: {
        title: 'Profil Korporat',
        description:
          'Gambaran institusional, visi, misi, dan prinsip rekayasa utama PT Arsalynk.',
      },
      companyLeadership: {
        title: 'Kepemimpinan Perusahaan',
        description:
          'Kenali jajaran kepemimpinan eksekutif dan arsitek utama yang mendorong transformasi digital enterprise di Arsalynk.',
      },
      ecosystemPhilosophy: {
        title: 'Filosofi Ekosistem',
        description:
          'Bagaimana Arsalynk menyatukan Enterprise System, IoT, Data & AI, serta Web Engineering ke dalam satu sistem saraf operasional terpadu.',
      },
      ourSolution: {
        title: 'Solusi Kami | Arsalynk',
        description:
          'Jelajahi solusi teknologi enterprise Arsalynk mencakup Enterprise System, IoT & Connected Systems, Data & AI, serta Web Development.',
      },
      insightProgramsTitle: 'Wawasan & Program',
      insightProgramsDescription:
        'Telusuri studi kasus Arsalynk, cetak biru arsitektur, dan pemikiran kepemimpinan eksekutif seputar teknologi enterprise.',
      caseStudiesTitle: 'Studi Kasus',
      caseStudiesDescription:
        'Studi kasus rekayasa enterprise nyata di sektor logistik, telemetri IoT, modernisasi ERP, dan orkestrasi AI.',
      leadershipThoughtsTitle: 'Pemikiran Kepemimpinan',
      leadershipThoughtsDescription:
        'Perspektif strategis dan esai teknis dari jajaran eksekutif serta engineer utama Arsalynk.',
      contactUsTitle: 'Hubungi Kami',
      contactUsDescription:
        'Terhubung dengan arsitek solusi enterprise Arsalynk untuk mendiskusikan transformasi rekayasa perangkat lunak, ERP, IoT, atau AI Anda.',
      privacyPolicyTitle: 'Kebijakan Privasi | Arsalynk',
      privacyPolicyDescription:
        'Pelajari bagaimana PT Arsalynk mengumpulkan, memproses, dan melindungi data pribadi maupun institusional di seluruh ekosistem digital kami.',
      profileTitle: 'Profil Digital Eksekutif & Kepemimpinan | Arsalynk',
      profileDescription:
        'Direktori kartu nama digital resmi untuk jajaran kepemimpinan dan personel kunci Arsalynk.',
      portalTitle: 'Portal Proyek Klien | Arsalynk',
      portalDescription:
        'Pantau progres proyek, milestone, dan hasil kerja secara real-time melalui Portal Proyek Klien Arsalynk.',
      feedbackTitle: 'Kepuasan & Umpan Balik Klien | Arsalynk',
      feedbackDescription:
        'Bagikan umpan balik proyek dan testimoni Anda bersama tim rekayasa dan delivery Arsalynk.',
      pages: {
        '/': {
          title: 'Arsalynk | Infrastruktur TI Enterprise & Rekayasa Perangkat Lunak',
          description:
            'Mitra teknologi enterprise terkemuka yang berfokus pada rekayasa perangkat lunak kustom, telemetri IoT, orkestrasi data AI, dan infrastruktur digital berskala tinggi.',
        },
        '/about-us': {
          title: 'Tentang Kami | Arsalynk',
          description:
            'Pelajari arsitektur Arsalynk—profil korporat, kepemimpinan eksekutif, dan filosofi ekosistem terpadu kami.',
        },
        '/about-us/corporate-profile': {
          title: 'Profil Korporat | Arsalynk',
          description:
            'Gambaran institusional, visi, misi, dan prinsip rekayasa utama PT Arsalynk.',
        },
        '/about-us/company-leadership': {
          title: 'Kepemimpinan Perusahaan | Arsalynk',
          description:
            'Kenali jajaran kepemimpinan eksekutif dan arsitek utama yang mendorong transformasi digital enterprise di Arsalynk.',
        },
        '/about-us/ecosystem-philosophy': {
          title: 'Filosofi Ekosistem | Arsalynk',
          description:
            'Bagaimana Arsalynk menyatukan Enterprise System, IoT, Data & AI, serta Web Engineering ke dalam satu sistem saraf operasional terpadu.',
        },
        '/our-solution': {
          title: 'Solusi Kami | Arsalynk',
          description:
            'Jelajahi solusi teknologi enterprise Arsalynk mencakup Enterprise System, IoT & Connected Systems, Data & AI, serta Web Development.',
        },
        '/insight-programs': {
          title: 'Wawasan & Program | Arsalynk',
          description:
            'Telusuri studi kasus Arsalynk, cetak biru arsitektur, dan pemikiran kepemimpinan eksekutif seputar teknologi enterprise.',
        },
        '/insight-programs/case-studies': {
          title: 'Studi Kasus | Arsalynk',
          description:
            'Studi kasus rekayasa enterprise nyata di sektor logistik, telemetri IoT, modernisasi ERP, dan orkestrasi AI.',
        },
        '/insight-programs/leadership-thoughts': {
          title: 'Pemikiran Kepemimpinan | Arsalynk',
          description:
            'Perspektif strategis dan esai teknis dari jajaran eksekutif serta engineer utama Arsalynk.',
        },
        '/contact-us': {
          title: 'Hubungi Kami | Arsalynk',
          description:
            'Terhubung dengan arsitek solusi enterprise Arsalynk untuk mendiskusikan transformasi rekayasa perangkat lunak, ERP, IoT, atau AI Anda.',
        },
        '/privacy-policy': {
          title: 'Kebijakan Privasi | Arsalynk',
          description:
            'Pelajari bagaimana PT Arsalynk mengumpulkan, memproses, dan melindungi data pribadi maupun institusional di seluruh ekosistem digital kami.',
        },
        '/profile': {
          title: 'Direktori Kepemimpinan | Arsalynk',
          description:
            'Direktori kartu nama digital resmi untuk jajaran kepemimpinan dan personel kunci Arsalynk.',
        },
        '/portal': {
          title: 'Portal Proyek Klien | Arsalynk',
          description:
            'Pantau progres proyek, milestone, dan hasil kerja secara real-time melalui Portal Proyek Klien Arsalynk.',
        },
        '/crm': {
          title: 'Pusat Klien & Proyek Enterprise | Arsalynk',
          description:
            'Layanan terpadu untuk pengajuan konsultasi, pelacakan proyek langsung, dan umpan balik klien berbasis CRM Arsalynk.',
        },
        '/feedback': {
          title: 'Kepuasan & Umpan Balik Klien | Arsalynk',
          description:
            'Bagikan umpan balik proyek dan testimoni Anda bersama tim rekayasa dan delivery Arsalynk.',
        },
      },
    },
    navbar: {
      home: 'Beranda',
      aboutUs: 'Tentang Kami',
      ourSolution: 'Solusi Kami',
      insightPrograms: 'Wawasan & Program',
      contactUs: 'HUBUNGI KAMI',
      languageLabel: 'Pilih Bahasa',
      switchToEn: 'Ganti bahasa ke Bahasa Inggris',
      switchToId: 'Ganti bahasa ke Bahasa Indonesia',
      openMenu: 'Buka menu navigasi',
      closeMenu: 'Tutup menu navigasi',
      dropdowns: {
        aboutUs: [
          {
            label: 'Profil Perusahaan',
            sub: 'Siapa kami, visi, misi & nilai utama',
            href: '/about-us/corporate-profile',
          },
          {
            label: 'Prinsip Kepemimpinan',
            sub: 'Tim eksekutif & personel kunci',
            href: '/about-us/company-leadership',
          },
          {
            label: 'Filosofi Ekosistem',
            sub: 'Bagaimana layanan kami bekerja secara terpadu',
            href: '/about-us/ecosystem-philosophy',
          },
        ],
        ourSolution: [
          {
            label: 'Enterprise System',
            sub: 'ERP, CRM, HRIS & platform enterprise kustom',
            href: '/our-solution/enterprise-system',
          },
          {
            label: 'IoT & Connected Systems',
            sub: 'Sensor cerdas, edge computing & otomasi',
            href: '/our-solution/iot-connected-systems',
          },
          {
            label: 'Data & AI',
            sub: 'Machine learning, analitik & agen AI',
            href: '/our-solution/data-ai',
          },
          {
            label: 'Web Development',
            sub: 'Aplikasi web berkinerja tinggi & platform digital',
            href: '/our-solution/web-development',
          },
        ],
        insightPrograms: [
          {
            label: 'Studi Kasus',
            sub: 'Hasil nyata & dampak bagi klien',
            href: '/insight-programs/case-studies',
          },
          {
            label: 'Artikel',
            sub: 'Perspektif tentang teknologi, AI & strategi digital',
            href: '/insight-programs/leadership-thoughts',
          },
        ],
      },
    },
    footer: {
      ctaTitleLine1: 'Ingin Berdiskusi Lebih Lanjut?',
      ctaTitleLine2: 'Hubungi Tim Kami!',
      ctaDescription:
        'Memiliki rencana proyek atau ingin memodernisasi infrastruktur enterprise Anda? Hubungi tim kami dan mari bangun solusi digital berskala tinggi bersama.',
      emailPlaceholder: 'Masukkan email kerja Anda...',
      sendButton: 'Kirim',
      navigationHeader: 'Navigasi',
      solutionsHeader: 'Solusi',
      companyHeader: 'Perusahaan',
      links: {
        home: 'Beranda',
        aboutUs: 'Tentang Kami',
        ourSolution: 'Solusi Kami',
        insightPrograms: 'Wawasan & Program',
        contactUs: 'Hubungi Kami',
        enterpriseSystem: 'Enterprise System',
        iotSystems: 'IoT & Connected Systems',
        dataAi: 'Data & AI',
        webDevelopment: 'Web Development',
        corporateProfile: 'Profil Perusahaan',
        companyLeadership: 'Prinsip Kepemimpinan',
        ecosystemPhilosophy: 'Filosofi Ekosistem',
        caseStudies: 'Studi Kasus',
        leadershipThoughts: 'Artikel',
        privacyPolicy: 'Kebijakan Privasi',
      },
      headOffice: 'Kantor Pusat',
      branchOffice: 'Kantor Cabang',
      copyright: 'Seluruh hak cipta dilindungi.',
    },
    whatsapp: {
      ariaLabel: 'Chat dengan kami di WhatsApp',
      tooltip: 'Chat melalui WhatsApp',
      defaultMessage:
        'Halo tim Arsalynk, saya ingin mendiskusikan potensi proyek teknologi untuk perusahaan kami.',
    },
    chatbot: {
      triggerAriaLabel: 'Buka Asisten Arsalynk Plus',
      assistantName: 'Arsalynk Plus',
      statusOnline: 'Online & CS Siap Membantu',
      closeAriaLabel: 'Tutup panel Arsalynk Plus',
      welcomeMessage:
        'Halo! Saya Arsalynk Plus, asisten cerdas untuk Arsalynk. Saya dapat membantu Anda menjelajahi solusi teknologi enterprise kami, profil perusahaan, atau menghubungkan Anda langsung dengan tim Customer Support kami. Ada yang bisa saya bantu hari ini?',
      quickActionsTitle: 'AKSI CEPAT',
      inputPlaceholder: 'Tanyakan apa saja pada Arsalynk Plus..',
      sendAriaLabel: 'Kirim pesan',
      footerNote: 'Arsalynk Plus didukung oleh Enterprise AI & Live WhatsApp CS.',
      errorFallback:
        'Mohon maaf, sedang terjadi kendala koneksi sementara. Apakah Anda ingin terhubung langsung dengan tim kami melalui WhatsApp?',
      connectWhatsappCta: 'Hubungi via WhatsApp CS',
      quickActions: [
        {
          id: 'company-profile',
          label: 'Profil & Visi Perusahaan',
          prompt: 'Ceritakan tentang profil perusahaan Arsalynk, visi, dan kompetensi utamanya.',
        },
        {
          id: 'enterprise-solutions',
          label: 'Solusi & Layanan Enterprise',
          prompt: 'Apa saja solusi enterprise dan layanan teknologi yang ditawarkan oleh Arsalynk?',
        },
        {
          id: 'case-studies',
          label: 'Studi Kasus Proyek',
          prompt: 'Bisa bagikan contoh proyek enterprise terbaru dan studi kasus dari Arsalynk?',
        },
        {
          id: 'contact-whatsapp',
          label: 'Hubungi Tim Support (WhatsApp)',
          prompt: 'Saya ingin berbicara dengan tim Customer Support atau Sales Arsalynk melalui WhatsApp.',
        },
      ],
    },
    home: {
      hero: {
        prevSlideAria: 'Slide sebelumnya',
        nextSlideAria: 'Slide berikutnya',
        goToSlideAria: 'Ke slide',
      },
      clientLogos: {
        heading: 'DIPERCAYA OLEH PERUSAHAAN & INSTITUSI BERORIENTASI MASA DEPAN',
      },
      specialized: {
        badge: 'MENGAPA ARSALYNK',
        titleLine1: 'Terspesialisasi Secara Alami,',
        titleLine2: 'Terintegrasi Secara Desain',
        description:
          'Kami tidak sekadar membangun perangkat lunak yang berdiri sendiri. Kami merekayasa ekosistem digital terpadu yang menghubungkan operasional, perangkat keras, data, dan sumber daya manusia Anda ke dalam satu arsitektur utuh.',
        cards: [
          {
            title: 'Arsitektur Kelas Enterprise',
            description:
              'Dibangun di atas fondasi microservices yang tangguh dan cloud-native untuk menangani beban kerja kritikal dengan tingkat ketersediaan 99,9%.',
          },
          {
            title: 'Rekayasa Lintas Disiplin',
            description:
              'Konvergensi mulus antara perangkat lunak ERP, telemetri perangkat keras IoT industri, dan alur kerja AI otonom di bawah satu atap.',
          },
          {
            title: 'Prioritas Keamanan & Tata Kelola',
            description:
              'Kontrol akses zero-trust, enkripsi ujung-ke-ujung, dan jejak audit menyeluruh yang tertanam di setiap lapisan platform Anda.',
          },
        ],
      },
      itInfrastructure: {
        badge: 'SOLUSI UTAMA KAMI',
        title: 'Infrastruktur TI & Rekayasa Digital Menyeluruh',
        subtitle:
          'Empat pilar saling terhubung yang dirancang untuk memodernisasi operasional, mengotomatiskan alur kerja kompleks, dan mempercepat pertumbuhan institusi.',
        exploreService: 'Jelajahi Layanan',
        keyCapabilities: 'Kapabilitas Utama',
      },
      solutionExplorer: {
        badge: 'PENJELAJAH SOLUSI INTERAKTIF',
        title: 'Bagaimana Ekosistem Kami Mengatasi Hambatan Operasional Nyata',
        subtitle:
          'Pilih domain untuk menjelajahi modul enterprise, dasbor langsung, dan kapabilitas arsitektur yang kami terapkan bagi klien kami.',
        viewAllSolutions: 'Jelajahi Arsitektur Solusi Lengkap',
        viewDetails: 'Lihat Detail',
      },
      businessWorks: {
        badge: 'IMPLEMENTASI INDUSTRI',
        title: 'Dirancang untuk Alur Kerja Industri yang Kompleks',
        subtitle:
          'Lihat bagaimana Arsalynk mengadaptasi tumpukan teknologi utama kami untuk menyelesaikan tantangan operasional spesifik di berbagai sektor.',
        prevAria: 'Industri sebelumnya',
        nextAria: 'Industri berikutnya',
        items: [
          {
            tag: 'MANUFAKTUR & RANTAI PASOK',
            title: 'Telemetri Pabrik Cerdas & Sinkronisasi ERP',
            description:
              'Menghubungkan sensor PLC lantai produksi langsung ke buku besar inventaris dan keuangan untuk perhitungan biaya produksi real-time dan pemeliharaan prediktif.',
            metrics: ['Akurasi Inventaris 99,4%', '38% Penurunan Downtime Tak Terencana'],
          },
          {
            tag: 'KORPORASI & ENTERPRISE MULTI-ENTITAS',
            title: 'Konsolidasi Keuangan & SDM Holding Terpadu',
            description:
              'Memusatkan akuntansi multi-cabang, penggajian otomatis, kepatuhan pajak, dan KPI eksekutif ke dalam satu sumber kebenaran tunggal.',
            metrics: ['Penutupan Bulanan 3x Lebih Cepat', '100% Keterlacakan Audit'],
          },
          {
            tag: 'LOGISTIK & OPERASIONAL ARMADA',
            title: 'GPS Armada Real-Time & Jaminan Rantai Dingin',
            description:
              'Telemetri kendaraan berkelanjutan, optimasi rute, pemantauan bahan bakar, dan peringatan geofence otomatis untuk distribusi berskala nasional.',
            metrics: ['Penghematan BBM & Rute 24%', 'Visibilitas Aset Real-Time'],
          },
          {
            tag: 'SEKTOR PUBLIK & INFRASTRUKTUR CERDAS',
            title: 'Portal Digital Konkurensi Tinggi & Tata Kelola AI',
            description:
              'Platform layanan publik yang aman dan mudah diakses serta dasbor komando eksekutif yang dirancang untuk melayani jutaan pengguna secara andal.',
            metrics: ['Waktu Muat Sub-Detik', 'Keamanan Peran Enterprise'],
          },
        ],
      },
      growthMetrics: {
        badge: 'DAMPAK TERUKUR',
        title: 'Direkayasa untuk Skala Operasional Nyata',
        subtitle:
          'Setiap arsitektur yang kami terapkan diukur berdasarkan tolok ukur kinerja, keandalan, dan efisiensi bisnis yang ketat.',
        stats: [
          {
            value: '99.9%',
            label: 'SLA Uptime Sistem',
            detail: 'Penerapan cloud & hybrid dengan ketersediaan tinggi',
          },
          {
            value: '3.5x',
            label: 'Kecepatan Operasional',
            detail: 'Eksekusi alur kerja lintas departemen lebih cepat',
          },
          {
            value: '40%',
            label: 'Peningkatan Efisiensi',
            detail: 'Pengurangan beban rekonsiliasi data manual',
          },
          {
            value: '24/7',
            label: 'Dukungan Engineer Khusus',
            detail: 'Pemantauan telemetri proaktif & respons insiden',
          },
        ],
      },
      projectShowcase: {
        badge: 'STUDI KASUS UNGGULAN',
        title: 'Eksekusi Terbukti di Berbagai Industri Kritikal',
        subtitle:
          'Pelajari bagaimana kami bermitra dengan organisasi visioner untuk mengubah tantangan teknis yang kompleks menjadi keunggulan kompetitif.',
        viewAllCta: 'Lihat Semua Studi Kasus',
        readCaseStudy: 'Baca Studi Kasus',
      },
      bridgePossibility: {
        badge: 'FILOSOFI EKOSISTEM',
        titleLine1: 'Menjembatani Kesenjangan Antara',
        titleLine2: 'Realitas Operasional & Kemungkinan Digital',
        description:
          'Perangkat yang terpisah menciptakan silo data. Arsalynk menyatukan aset fisik, alur kerja enterprise, dan intelijen eksekutif Anda ke dalam satu rangkaian digital yang berkesinambungan.',
        ctaPrimary: 'Jelajahi Filosofi Kami',
        ctaSecondary: 'Konsultasi Dengan Arsitek',
        pillars: [
          {
            step: '01',
            title: 'Tangkap & Hubungkan',
            desc: 'Kumpulkan sinyal real-time dari sensor IoT, portal web, dan operasional lapangan.',
          },
          {
            step: '02',
            title: 'Orkestrasi & Otomatisasi',
            desc: 'Proses alur kerja melalui mesin ERP, HRMS, dan tata kelola proyek yang terpadu.',
          },
          {
            step: '03',
            title: 'Analisis & Prediksi',
            desc: 'Berdayakan kepemimpinan dengan asisten Agentic AI dan analitik prediktif.',
          },
        ],
      },
      testimonials: {
        badge: 'SUARA KLIEN',
        title: 'Dipercaya oleh Para Pemimpin yang Mengutamakan Presisi',
        subtitle:
          'Dengarkan langsung dari para eksekutif dan direktur operasional yang telah mentransformasi infrastruktur mereka bersama Arsalynk.',
        prevAria: 'Testimoni sebelumnya',
        nextAria: 'Testimoni berikutnya',
      },
      beyondExpectations: {
        badge: 'MULAI TRANSFORMASI ANDA',
        titleLine1: 'Siap Merekayasa Sistem Digital',
        titleLine2: 'yang Melampaui Ekspektasi?',
        description:
          'Jadwalkan sesi diskusi teknis bersama arsitek utama kami untuk memetakan peta jalan ERP, IoT, AI, atau platform kustom Anda.',
        primaryCta: 'Jadwalkan Konsultasi',
        secondaryCta: 'Jelajahi Solusi Kami',
      },
    },
    aboutUs: {
      hub: {
        badge: 'TENTANG ARSALYNK',
        title: 'Merancang Tulang Punggung Digital bagi Enterprise Modern',
        subtitle:
          'Arsalynk adalah perusahaan teknologi enterprise dan rekayasa perangkat lunak yang berdedikasi membangun ekosistem digital yang tangguh dan saling terhubung di Indonesia maupun mancanegara.',
        exploreSection: 'Jelajahi Bagian',
        cards: [
          {
            tag: '01 / IDENTITAS & VISI',
            title: 'Profil Korporat',
            description:
              'Pelajari latar belakang institusional kami, standar rekayasa, visi, misi, serta nilai-nilai utama yang melandasi setiap sistem yang kami bangun.',
            href: '/about-us/corporate-profile',
          },
          {
            tag: '02 / TIM EKSEKUTIF',
            title: 'Kepemimpinan Perusahaan',
            description:
              'Kenali jajaran eksekutif, engineer utama, dan spesialis domain yang mengarahkan visi teknis serta kualitas delivery klien Arsalynk.',
            href: '/about-us/company-leadership',
          },
          {
            tag: '03 / ARSITEKTUR TERPADU',
            title: 'Filosofi Ekosistem',
            description:
              'Pahami mengapa kami menolak perangkat lunak yang terfragmentasi dan memilih ekosistem terpadu yang menghubungkan Enterprise System, IoT, Data & AI, serta platform Web.',
            href: '/about-us/ecosystem-philosophy',
          },
        ],
        statsTitle: 'Sorotan Institusional',
        stats: [
          { value: '4+', label: 'Pilar Rekayasa Utama' },
          { value: '99.9%', label: 'Target Keandalan Produksi' },
          { value: 'End-to-End', label: 'Integrasi Hardware hingga Cloud' },
          { value: 'Enterprise', label: 'Standar Keamanan & Tata Kelola' },
        ],
      },
      corporateProfile: {
        breadcrumbAbout: 'Tentang Kami',
        breadcrumbCurrent: 'Profil Korporat',
        badge: 'PROFIL KORPORAT',
        heroTitle: 'Merekayasa Teknologi Tangguh untuk Organisasi Kompleks',
        heroSubtitle:
          'PT Arsalynk adalah mitra rekayasa perangkat lunak enterprise dan integrasi sistem. Kami merancang, membangun, dan mengoperasikan infrastruktur digital kritikal yang memberdayakan organisasi untuk berkembang dengan kejelasan dan kendali penuh.',
        whoWeAreTag: 'SIAPA KAMI',
        whoWeAreTitle: 'Dibangun untuk Mengatasi Fragmentasi Teknologi Enterprise',
        whoWeAreP1:
          'Banyak organisasi mengalami hambatan bukan karena kekurangan perangkat lunak, melainkan karena sistem yang tidak saling terhubung—di mana buku besar keuangan tidak terhubung dengan operasional lapangan, data SDM terpisah dari tata kelola proyek, dan laporan eksekutif membutuhkan waktu berminggu-minggu untuk rekonsiliasi manual.',
        whoWeAreP2:
          'Arsalynk didirikan untuk menjembatani kesenjangan tersebut. Dengan memadukan rekayasa perangkat lunak mendalam, telemetri IoT industri, arsitektur data enterprise, dan platform web modern, kami menghadirkan sistem terpadu yang beroperasi sebagai satu sistem saraf digital.',
        visionTitle: 'Visi Kami',
        visionBody:
          'Menjadi mitra teknologi enterprise terkemuka di Asia Tenggara yang diakui dalam merekayasa ekosistem digital yang terpadu, cerdas, dan berkelanjutan guna mendorong keunggulan institusional.',
        missionTitle: 'Misi Kami',
        missions: [
          'Menghadirkan platform enterprise terintegrasi yang menghilangkan silo operasional dan hambatan manual.',
          'Menjembatani aset fisik dan alur kerja digital melalui telemetri IoT dan edge computing yang andal.',
          'Mendemokratisasi intelijen institusional menggunakan agen AI berbasis hak akses yang aman serta analitik prediktif.',
          'Menjunjung tinggi standar keunggulan rekayasa perangkat lunak, tata kelola keamanan, dan kemitraan jangka panjang.',
        ],
        valuesTag: 'NILAI UTAMA',
        valuesTitle: 'Prinsip di Balik Setiap Baris Kode',
        values: [
          {
            title: 'Integritas Arsitektur',
            desc: 'Kami tidak pernah mengambil jalan pintas dalam hal skalabilitas, keamanan, atau konsistensi data. Kami membangun sistem yang dirancang bertahan untuk jangka panjang.',
          },
          {
            title: 'Empati Operasional',
            desc: 'Teknologi harus melayani orang-orang yang menggunakannya setiap hari. Kami merancang antarmuka intuitif yang berakar pada alur kerja nyata di lapangan.',
          },
          {
            title: 'Akuntabilitas Terukur',
            desc: 'Setiap implementasi dikaitkan dengan KPI operasional nyata—siklus tutup buku lebih cepat, uptime aset lebih tinggi, dan tata kelola yang transparan.',
          },
          {
            title: 'Inovasi Berkelanjutan',
            desc: 'Kami terus mengembangkan teknologi kami—mulai dari Agentic AI hingga telemetri edge—agar klien kami selalu berada di garis depan perubahan industri.',
          },
        ],
        ctaTitle: 'Bermitra Dengan Arsalynk untuk Transformasi Anda Berikutnya',
        ctaDesc: 'Diskusikan langsung peta jalan organisasi Anda bersama arsitek solusi kami.',
        ctaButton: 'Hubungi Tim Kami',
      },
      leadership: {
        breadcrumbAbout: 'Tentang Kami',
        breadcrumbCurrent: 'Kepemimpinan Perusahaan',
        badge: 'KEPEMIMPINAN PERUSAHAAN',
        heroTitle: 'Dipandu oleh Kedalaman Rekayasa & Kejelasan Strategis',
        heroSubtitle:
          'Tim kepemimpinan kami menyatukan pengalaman puluhan tahun di bidang arsitektur enterprise, otomasi industri, tata kelola keuangan, dan pengembangan produk digital.',
        executiveTag: 'DEWAN EKSEKUTIF & PEMIMPIN UTAMA',
        executiveTitle: 'Tim Kepemimpinan',
        viewDigitalCard: 'Lihat Profil Digital',
        directoryCtaTitle: 'Mencari Kontak Eksekutif Langsung atau vCard?',
        directoryCtaDesc:
          'Akses Direktori Kepemimpinan resmi kami untuk tautan kontak terverifikasi, unduhan vCard, dan pesan langsung.',
        directoryCtaButton: 'Buka Direktori Kepemimpinan',
      },
      philosophy: {
        breadcrumbAbout: 'Tentang Kami',
        breadcrumbCurrent: 'Filosofi Ekosistem',
        badge: 'FILOSOFI EKOSISTEM',
        heroTitle: 'Mengapa Arsitektur Terpadu Selalu Mengungguli Perangkat Lunak Terpisah',
        heroSubtitle:
          'Di Arsalynk, kami meyakini bahwa enterprise adalah sebuah organisme hidup. Ketika ERP, sensor lapangan, asisten AI, dan portal web Anda berbagi satu fondasi yang sama, setiap keputusan menjadi lebih cepat, lebih cerdas, dan dapat diverifikasi.',
        problemTag: 'JEBAKAN FRAGMENTASI',
        problemTitle: 'Biaya Tersembunyi dari Sistem yang Terputus',
        problemDesc:
          'Pengadaan TI tradisional sering meninggalkan organisasi dengan rangkaian vendor yang tidak kompatibel—menciptakan duplikasi input data, titik buta dalam pelacakan aset, dan keterlambatan pelaporan eksekutif.',
        solutionTag: 'EKOSISTEM ARSALYNK',
        solutionTitle: 'Empat Pilar yang Beroperasi Sebagai Satu Sistem Saraf',
        layers: [
          {
            code: 'LAPISAN 01',
            title: 'Lapisan Web & Pengalaman Digital',
            subtitle: 'Portal Publik, Kehadiran Korporat & Antarmuka Klien',
            desc: 'Aplikasi web berkonkurensi tinggi yang dioptimalkan untuk SEO serta platform headless CMS yang menghubungkan brand dan layanan Anda dengan pelanggan maupun pemangku kepentingan.',
            href: '/our-solution/web-development',
          },
          {
            code: 'LAPISAN 02',
            title: 'Lapisan Inti Enterprise',
            subtitle: 'Marka ERP, HRMS, Keuangan, CRM & Tata Kelola Proyek',
            desc: 'Mesin operasional pusat yang mengatur akuntansi multi-entitas, modal manusia, pengadaan, inventaris, dan eksekusi proyek lintas departemen.',
            href: '/our-solution/enterprise-system',
          },
          {
            code: 'LAPISAN 03',
            title: 'Lapisan Telemetri Fisik & Edge',
            subtitle: 'Sensor IoT, Gateway PLC & GPS Armada MyBoss',
            desc: 'Integrasi perangkat keras real-time yang menangkap lokasi kendaraan, suhu rantai dingin, konsumsi energi fasilitas, dan kesehatan mesin industri.',
            href: '/our-solution/iot-connected-systems',
          },
          {
            code: 'LAPISAN 04',
            title: 'Lapisan Intelijen & Orkestrasi AI',
            subtitle: 'Agentic AI MarkaPlus & Pipeline Data Prediktif',
            desc: 'Agen AI percakapan berbasis hak akses dan model machine learning yang menyintesis data di seluruh lapisan menjadi jawaban instan dan proyeksi akurat.',
            href: '/our-solution/data-ai',
          },
        ],
        explorePillar: 'Jelajahi Pilar',
        ctaTitle: 'Siap Menyatukan Ekosistem Teknologi Anda?',
        ctaDesc: 'Mari petakan bagaimana sistem Anda saat ini dapat diintegrasikan ke dalam arsitektur yang kohesif.',
        ctaButton: 'Jadwalkan Tinjauan Arsitektur',
      },
    },
    ourSolution: {
      breadcrumb: 'BERANDA / SOLUSI KAMI',
      heroTitle: 'Solusi Kami',
      heroSubtitle:
        'Teknologi enterprise terintegrasi yang dirancang untuk menghubungkan operasional, aset fisik, intelijen data, dan pengalaman digital Anda.',
      scrollToChallenge: 'Gulir ke bagian tantangan',
      challengeEyebrow: 'TANTANGAN',
      architectureEyebrow: 'ARSITEKTUR KAMI',
      architectureHeading: 'Empat Pilar Utama Transformasi Digital',
      servicesEyebrow: 'JELAJAHI LAYANAN KAMI',
      servicesHeading: ['Solusi Terspesialisasi,', 'Dirancang untuk Skala Besar'],
      servicesBody:
        'Pilih pilar layanan di bawah ini untuk melihat modul spesialis, cetak biru arsitektur, dan implementasi nyata enterprise kami.',
      outcomesHeading: 'Hasil Bisnis yang Terukur',
      otherSolutionsEyebrow: 'JELAJAHI SOLUSI LAINNYA',
      hub: {
        badge: 'SOLUSI KAMI',
        heroTitle: 'Teknologi Enterprise yang Direkayasa untuk Kejelasan Operasional Menyeluruh',
        heroSubtitle:
          'Jelajahi empat domain rekayasa spesialis kami—dirancang untuk bekerja secara mandiri maupun sebagai ekosistem digital yang terintegrasi penuh.',
        challengeTag: 'TANTANGAN YANG KAMI SELESAIKAN',
        exploreDomain: 'Jelajahi Domain Solusi',
        keyModules: 'Kapabilitas & Modul Utama',
        ctaTitle: 'Butuh Arsitektur Kustom yang Disesuaikan untuk Enterprise Anda?',
        ctaDesc:
          'Engineer utama kami dapat merancang penerapan khusus yang memadukan ERP, telemetri IoT, agen AI, dan aplikasi web kustom.',
        ctaButton: 'Diskusi dengan Arsitek Solusi',
      },
      detail: {
        breadcrumbHome: 'Beranda',
        breadcrumbSolutions: 'Solusi Kami',
        overviewTag: 'RINGKASAN SOLUSI',
        capabilitiesTitle: 'Modul & Kapabilitas Spesialis',
        capabilitiesSubtitle:
          'Klik pada kartu kapabilitas di bawah ini untuk melihat rincian arsitektur, fitur utama, dan pratinjau modul interaktif.',
        viewDetails: 'Lihat Detail',
        architectureTag: 'KEUNGGULAN ARSITEKTUR',
        architectureTitle: 'Dibangun untuk Keamanan, Skala, dan Integrasi Mulus',
        architecturePoints: [
          {
            title: 'API-First & Interoperabel',
            desc: 'Dirancang dengan antarmuka REST/GraphQL dan webhook yang bersih untuk berintegrasi secara mulus dengan basis data lama maupun perangkat pihak ketiga Anda.',
          },
          {
            title: 'Kontrol Akses Berbasis Peran (RBAC)',
            desc: 'Matriks izin terperinci dan log audit lengkap memastikan setiap pengguna maupun agen AI hanya mengakses data institusional yang diotorisasi.',
          },
          {
            title: 'Cloud, On-Premise, atau Hybrid',
            desc: 'Topologi penerapan fleksibel yang disesuaikan dengan kebutuhan regulasi, kedaulatan data, dan latensi organisasi Anda.',
          },
        ],
        otherSolutionsTitle: 'Jelajahi Pilar Solusi Lainnya',
        consultCtaTitle: 'Tertarik Menerapkan Solusi Ini?',
        consultCtaDesc:
          'Ajukan demonstrasi langsung atau konsultasi teknis bersama tim rekayasa kami.',
        consultCtaButton: 'Minta Demo Langsung',
      },
      modal: {
        closeAria: 'Tutup jendela detail layanan',
        overviewHeading: 'Ringkasan & Nilai Operasional',
        highlightsHeading: 'Kapabilitas Arsitektur Utama',
        metricsHeading: 'Target Dampak & Tolok Ukur',
        inquireCta: 'Diskusikan Modul Ini Bersama Tim Kami',
        closeButton: 'Tutup Pratinjau',
      },
    },
    insightPrograms: {
      heroAriaLabel: 'Hero Wawasan dan Program',
      heroTitle: 'Wawasan & Program',
      heroDescription:
        'Jelajahi studi kasus enterprise nyata, cetak biru arsitektur, dan perspektif strategis dari jajaran kepemimpinan teknologi kami.',
      scrollAriaLabel: 'Gulir ke konten',
      pillarsEyebrow: 'PENGETAHUAN & EKSEKUSI',
      pillarsTitle: 'Dua Pilar Wawasan Institusional',
      pillarsDescription:
        'Mulai dari implementasi lapangan yang terbukti hingga pandangan eksekutif tentang masa depan sistem enterprise, IoT, dan AI.',
      pillar1Eyebrow: '01 / EKSEKUSI TERBUKTI',
      pillar1CountSuffix: 'Implementasi',
      pillar1Title: 'Studi Kasus',
      pillar1Description:
        'Telusuri secara mendalam bagaimana arsitektur Arsalynk menyelesaikan hambatan operasional kompleks di sektor logistik, manufaktur, holding korporat, dan platform digital.',
      pillar1FeaturedLabel: 'Implementasi Unggulan',
      pillar1Cta: 'Jelajahi Semua Studi Kasus',
      pillar2Eyebrow: '02 / PERSPEKTIF EKSEKUTIF',
      pillar2CountSuffix: 'Artikel',
      pillar2Title: 'Artikel',
      pillar2Description:
        'Esai strategis, analisis arsitektur, dan wawasan masa depan yang ditulis oleh jajaran eksekutif serta engineer utama Arsalynk.',
      pillar2FeaturedLabel: 'Perspektif Terbaru',
      pillar2Cta: 'Baca Artikel',
      caseStudiesHeroTitle: 'Studi Kasus',
      caseStudiesHeroDescription:
        'Eksekusi rekayasa yang terbukti dan hasil operasional terukur di berbagai implementasi enterprise kami.',
      caseStudiesFeaturedEyebrow: 'STUDI KASUS UNGGULAN',
      caseStudiesExploreTitle: 'Jelajahi Studi Kasus',
      caseStudiesSearchPlaceholder: 'Cari studi kasus...',
      caseStudiesSortAriaLabel: 'Urutkan studi kasus',
      caseStudiesNoMatch: 'Tidak ada studi kasus yang sesuai dengan pencarian Anda.',
      caseStudyDetailRelatedSolution: 'Arsitektur Solusi Terkait:',
      caseStudyDetailContinueExploring: 'LANJUTKAN MENJELAJAH',
      caseStudyDetailOtherCaseStudies: 'Studi Kasus Lainnya',
      caseStudyDetailViewAll: 'Lihat Semua Studi Kasus',
      leadershipThoughtsHeroTitle: 'Artikel',
      leadershipThoughtsHeroDescription:
        'Perspektif strategis, catatan arsitektur, dan pandangan dari jajaran eksekutif serta engineer utama Arsalynk.',
      leadershipThoughtsFeaturedEyebrow: 'PERSPEKTIF UNGGULAN',
      leadershipThoughtsByPrefix: 'Oleh',
      leadershipThoughtsExploreTitle: 'Jelajahi Artikel',
      leadershipThoughtsSearchPlaceholder: 'Cari artikel...',
      leadershipThoughtsSortAriaLabel: 'Urutkan artikel',
      leadershipThoughtsNoMatch: 'Tidak ada artikel yang sesuai dengan pencarian Anda.',
      leadershipThoughtDetailByPrefix: 'Oleh',
      leadershipThoughtDetailOtherThoughts: 'Artikel Lainnya',
      hub: {
        badge: 'WAWASAN & PROGRAM',
        heroTitle: 'Studi Kasus Rekayasa & Perspektif Eksekutif',
        heroSubtitle:
          'Pelajari bagaimana Arsalynk menyelesaikan tantangan industri dan institusi yang kompleks, beserta esai strategis dari para pemimpin teknologi kami.',
        caseStudiesSectionTitle: 'Studi Kasus Unggulan',
        caseStudiesSectionSub: 'Implementasi nyata dan hasil bisnis yang terukur.',
        viewAllCaseStudies: 'Lihat Semua Studi Kasus',
        readCaseStudy: 'Baca Studi Kasus',
        leadershipSectionTitle: 'Artikel',
        leadershipSectionSub: 'Perspektif teknis seputar AI, arsitektur ERP, dan strategi digital.',
        viewAllThoughts: 'Lihat Semua Artikel',
        readArticle: 'Baca Artikel',
      },
      caseStudies: {
        breadcrumbParent: 'Wawasan & Program',
        breadcrumbCurrent: 'Studi Kasus',
        badge: 'STUDI KASUS',
        heroTitle: 'Dampak Terbukti di Berbagai Implementasi Enterprise & Industri',
        heroSubtitle:
          'Telusuri secara mendalam tantangan arsitektur, solusi rekayasa, dan hasil terukur yang telah kami hadirkan bagi mitra kami.',
        allCategories: 'Semua Kategori',
        clientLabel: 'Klien / Sektor',
        timelineLabel: 'Durasi Proyek',
        readFullCaseStudy: 'Baca Studi Kasus Lengkap',
        backToCaseStudies: 'Kembali ke Semua Studi Kasus',
        challengeHeading: 'Tantangan Operasional',
        solutionHeading: 'Solusi Rekayasa Arsalynk',
        resultsHeading: 'Hasil Utama & Dampak Terukur',
        technologiesHeading: 'Teknologi & Modul yang Diterapkan',
        ctaTitle: 'Menghadapi Tantangan Operasional Serupa?',
        ctaDesc: 'Biarkan tim rekayasa kami merancang arsitektur yang disesuaikan untuk organisasi Anda.',
        ctaButton: 'Jadwalkan Konsultasi Teknis',
      },
      leadershipThoughts: {
        breadcrumbParent: 'Wawasan & Program',
        breadcrumbCurrent: 'Pemikiran Kepemimpinan',
        badge: 'PEMIKIRAN KEPEMIMPINAN',
        heroTitle: 'Perspektif Strategis tentang Teknologi Enterprise & AI',
        heroSubtitle:
          'Esai, catatan arsitektur, dan pandangan dari jajaran eksekutif serta engineer utama Arsalynk.',
        readArticle: 'Baca Artikel Lengkap',
        backToArticles: 'Kembali ke Artikel',
        publishedOn: 'Diterbitkan pada',
        readTime: 'baca',
        shareArticle: 'Bagikan atau Diskusikan Perspektif Ini',
        ctaTitle: 'Ingin Mendiskusikan Topik Ini Bersama Kepemimpinan Kami?',
        ctaDesc: 'Hubungi tim kami untuk mengeksplorasi bagaimana strategi ini dapat diterapkan di perusahaan Anda.',
        ctaButton: 'Hubungi Kami',
      },
    },
    contactUs: {
      badge: 'HUBUNGI KAMI',
      heroBreadcrumb: 'HUBUNGI KAMI',
      heroTitle: 'Mari Bangun Terobosan Enterprise Anda Berikutnya',
      heroSubtitle:
        'Baik Anda sedang memodernisasi alur kerja ERP lama, menerapkan telemetri armada IoT, maupun mengintegrasikan Agentic AI, arsitek solusi kami siap membantu.',
      scrollAriaLabel: 'Gulir ke formulir kontak',
      leftHeadingLine1: 'Siap Mentransformasi',
      leftHeadingLine2: 'Infrastruktur',
      leftHeadingLine3: 'Enterprise Anda?',
      contactLabel: 'KONTAK LANGSUNG',
      jakartaOfficeLabel: 'KANTOR PUSAT JAKARTA',
      jakartaOfficeAddress:
        'Menara Rajawali Lt. 26, Jl. DR. Ide Anak Agung Gde Agung, Mega Kuningan, Jakarta Selatan 12950',
      semarangOfficeLabel: 'KANTOR R&D & OPERASIONAL SEMARANG',
      semarangOfficeAddress:
        'Jl. Diponegoro No. 45, Lempongsari, Gajahmungkur, Kota Semarang, Jawa Tengah 50231',
      yourNameLabel: 'Nama Anda',
      yourNamePlaceholder: 'Masukkan nama lengkap Anda',
      companyNameLabel: 'Nama Perusahaan',
      companyNamePlaceholder: 'Masukkan nama perusahaan atau institusi Anda',
      emailPlaceholder: 'Masukkan alamat email kerja Anda',
      phoneNumberLabel: 'Nomor Telepon / WhatsApp',
      phoneNumberPlaceholder: 'cth. +62 812 3456 7890',
      inquiryLabel: 'Apa yang Bisa Kami Bantu?',
      inquiryPlaceholder: 'Pilih domain solusi',
      inquiryOptionTech: 'Sistem Enterprise & Arsitektur ERP',
      inquiryOptionData: 'Rekayasa Data, Analitik & Agentic AI',
      inquiryOptionMedia: 'Telemetri IoT Cerdas & Sistem Armada',
      inquiryOptionPartnership: 'Rekayasa Web Digital & Kemitraan Strategis',
      inquiryOptionOther: 'Lainnya / Konsultasi Ekosistem Kustom',
      messageLabel: 'Rincian Proyek & Pesan',
      messagePlaceholder: 'Ceritakan tujuan proyek, tantangan saat ini, atau target waktu Anda...',
      submitErrorFallback: 'Gagal mengirim pertanyaan. Mohon periksa kembali isian Anda dan coba lagi.',
      serverErrorFallback: 'Tidak dapat terhubung ke server. Silakan coba beberapa saat lagi.',
      successCloseAriaLabel: 'Tutup dialog konfirmasi',
      successTitle: 'Terima Kasih Telah Menghubungi Kami!',
      successDescription:
        'Pertanyaan Anda telah diterima dan tercatat di dalam CRM Enterprise kami. Tim arsitektur solusi kami akan meninjau kebutuhan Anda dan segera menghubungi Anda.',
      successBackToHome: 'Kembali ke Beranda',
      directChannelsTitle: 'Saluran Komunikasi Langsung',
      directChannelsDesc:
        'Membutuhkan bantuan eksekutif segera? Hubungi kami langsung melalui email, WhatsApp, atau kunjungi kantor kami.',
      emailLabel: 'Email Resmi',
      whatsappLabel: 'Konsultasi WhatsApp',
      whatsappAction: 'Chat Dengan Arsitek Solusi',
      headOfficeLabel: 'Kantor Pusat',
      branchOfficeLabel: 'Kantor Cabang',
      businessHoursLabel: 'Jam Operasional',
      businessHoursValue: 'Senin – Jumat, 08.30 – 17.30 WIB',
      formTitle: 'Kirimkan Pertanyaan Proyek',
      formSubtitle:
        'Lengkapi rincian di bawah ini dan tim rekayasa kami akan merespons dalam waktu 1 hari kerja.',
      fields: {
        fullName: 'Nama Lengkap',
        fullNamePlaceholder: 'cth. Budi Santoso',
        email: 'Email Kerja',
        emailPlaceholder: 'cth. budi@perusahaan.com',
        phone: 'Nomor Telepon / WhatsApp',
        phonePlaceholder: 'cth. +62 812 3456 7890',
        company: 'Nama Perusahaan / Institusi',
        companyPlaceholder: 'cth. PT Nusantara Logistik',
        inquiryType: 'Domain Solusi yang Diminati',
        inquiryOptions: {
          enterprise: 'Enterprise System (ERP, HRMS, Keuangan, CRM)',
          iot: 'IoT & Connected Systems (Telemetri, GPS Armada, Edge)',
          dataAi: 'Data & AI (Agentic AI MarkaPlus, Analitik)',
          web: 'Web Development (Portal Korporat, Headless CMS, E-Commerce)',
          custom: 'Integrasi Ekosistem Penuh Kustom / Pertanyaan Umum',
        },
        message: 'Ruang Lingkup Proyek atau Rincian Tantangan',
        messagePlaceholder:
          'Ceritakan tantangan operasional Anda saat ini, target waktu implementasi, atau modul spesifik yang ingin Anda eksplorasi...',
      },
      submitButton: 'Kirim Pertanyaan Proyek',
      submittingButton: 'Mengirimkan...',
      validation: {
        requiredFields: 'Mohon lengkapi nama, email, dan pesan Anda sebelum mengirim.',
        genericError: 'Tidak dapat mengirim pesan saat ini. Silakan coba lagi atau hubungi kami melalui WhatsApp.',
      },
      successModal: {
        title: 'Pertanyaan Berhasil Diterima!',
        description:
          'Terima kasih telah menghubungi Arsalynk. Pertanyaan proyek Anda telah tercatat di dalam CRM Enterprise kami dan diteruskan kepada Arsitek Solusi. Kami akan segera menghubungi Anda.',
        referenceLabel: 'Tiket Referensi',
        closeButton: 'Kembali ke Halaman',
        whatsappFollowup: 'Butuh Respons Cepat? Chat via WhatsApp',
      },
    },
    privacyPolicy: {
      badge: 'HUKUM & KEPATUHAN',
      title: 'Kebijakan Privasi & Tata Kelola Pelindungan Data',
      heroTitle: 'Kebijakan Privasi',
      heroDescription:
        'Bagaimana PT Arsalynk melindungi data pribadi dan institusional di seluruh produk digital, sistem enterprise, dan layanan klien kami.',
      lastUpdated: 'Terakhir diperbarui: November 2026',
      lastUpdatedLabel: 'Terakhir Diperbarui:',
      lastUpdatedDate: '1 November 2026',
      glanceTitle: 'Ringkasan Privasi',
      glanceDescription:
        'Prinsip utama yang mengatur cara kami menangani, mengisolasi, dan melindungi data Anda.',
      needAssistance: 'Butuh Bantuan Hukum atau DPO?',
      contactOurTeam: 'Hubungi Tim Kepatuhan Kami',
      commitmentTitle: 'Komitmen Institusional Kami',
      commitmentDescription:
        'PT Arsalynk menjunjung tinggi kedaulatan data, kontrol akses zero-trust, dan kepatuhan penuh terhadap Undang-Undang Pelindungan Data Pribadi (UU PDP No. 27/2022).',
      contactEyebrow: 'PELINDUNGAN DATA & KEPATUHAN',
      contactTitle: 'Pertanyaan Seputar Privasi Data atau NDA Enterprise?',
      contactDescription:
        'Hubungi langsung Petugas Pelindungan Data (DPO) dan tim kepatuhan hukum kami untuk dokumentasi resmi atau permintaan data.',
      emailButton: 'Email Tim Privasi',
      contactUsButton: 'Buka Formulir Kontak',
      intro:
        'PT Arsalynk ("Arsalynk", "kami") berkomitmen penuh untuk melindungi privasi, kerahasiaan, dan keamanan informasi pribadi maupun institusional di seluruh situs web kami, platform enterprise (Marka ERP, MarkaPlus, MyBoss), serta portal klien.',
      tocTitle: 'Daftar Isi',
      sections: [
        {
          id: 'information-collection',
          number: '01',
          title: 'Informasi yang Kami Kumpulkan',
          body: 'Kami mengumpulkan informasi yang Anda berikan secara sukarela saat mengirimkan formulir konsultasi, meminta demonstrasi produk, mengakses Portal Proyek Klien, atau berinteraksi dengan asisten Arsalynk Plus kami. Informasi ini mencakup nama lengkap, alamat email korporat, nomor telepon/WhatsApp, nama perusahaan, jabatan, serta kebutuhan teknis proyek. Kami juga mengumpulkan telemetri standar secara otomatis seperti wilayah IP, preferensi bahasa browser, dan diagnostik perangkat guna mengoptimalkan lokalisasi serta keamanan situs.',
        },
        {
          id: 'how-we-use-data',
          number: '02',
          title: 'Bagaimana Kami Menggunakan Informasi Anda',
          body: 'Informasi Anda digunakan secara ketat untuk: (a) menanggapi pertanyaan teknis Anda dan menjadwalkan konsultasi arsitektur; (b) menyediakan serta mengautentikasi akses ke portal proyek klien dan sandbox enterprise; (c) menyajikan konten terlokalisasi dalam Bahasa Inggris atau Bahasa Indonesia sesuai preferensi Anda; serta (d) meningkatkan keandalan, keamanan, dan kinerja infrastruktur digital kami.',
        },
        {
          id: 'enterprise-data-isolation',
          number: '03',
          title: 'Isolasi Data Enterprise & Tata Kelola AI',
          body: 'Bagi organisasi yang menggunakan Marka ERP, Telemetri MyBoss, atau Agentic AI MarkaPlus, seluruh data institusional tetap menjadi milik penuh klien. Asisten AI kami beroperasi di bawah Kontrol Akses Berbasis Peran (RBAC) yang ketat dan tidak pernah menggunakan buku besar rahasia klien atau data operasional internal untuk melatih model AI publik.',
        },
        {
          id: 'cookies-localization',
          number: '04',
          title: 'Cookie & Preferensi Bahasa',
          body: 'Kami menggunakan cookie fungsional esensial dan penyimpanan lokal (seperti NEXT_LOCALE dan arsalynk_locale) untuk mengingat pilihan bahasa manual Anda (EN/ID) serta status sesi sehingga Anda tidak perlu mengatur ulang preferensi di setiap kunjungan.',
        },
        {
          id: 'data-security',
          number: '05',
          title: 'Arsitektur Keamanan & Enkripsi',
          body: 'Kami menerapkan perlindungan keamanan kelas enterprise termasuk enkripsi TLS saat transmisi, penyimpanan basis data terenkripsi, segmentasi jaringan zero-trust, dan pencatatan audit berkelanjutan untuk mencegah akses, perubahan, atau pengungkapan tanpa izin.',
        },
        {
          id: 'third-party-sharing',
          number: '06',
          title: 'Pembagian Pihak Ketiga & Subprosesor',
          body: 'Arsalynk tidak menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga. Informasi hanya dibagikan dengan penyedia infrastruktur cloud terverifikasi dan personel rekayasa resmi yang terikat oleh Perjanjian Kerahasiaan (NDA) yang ketat.',
        },
        {
          id: 'your-rights',
          number: '07',
          title: 'Hak Pelindungan Data Anda (Kepatuhan UU PDP)',
          body: 'Sesuai dengan Undang-Undang Pelindungan Data Pribadi Indonesia (UU No. 27 Tahun 2022) dan standar internasional, Anda berhak meminta akses, koreksi, atau penghapusan data pribadi Anda yang tersimpan di dalam sistem kami kapan saja.',
        },
        {
          id: 'contact-dpo',
          number: '08',
          title: 'Hubungi Tim Privasi & Kepatuhan Kami',
          body: 'Apabila Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, kedaulatan data, atau perjanjian kepatuhan enterprise, silakan hubungi Petugas Pelindungan Data kami di info@arsalynk.com.',
        },
      ],
      ctaTitle: 'Pertanyaan Seputar Keamanan Enterprise atau Kepatuhan NDA?',
      ctaDesc: 'Hubungi tim hukum dan arsitektur kami untuk dokumentasi keamanan resmi.',
      ctaButton: 'Hubungi Tim Kepatuhan',
    },
    profile: {
      directoryBadge: 'DIREKTORI RESMI',
      directoryTitle: 'Profil Digital Eksekutif & Kepemimpinan',
      directorySubtitle:
        'Terhubung langsung dengan jajaran eksekutif dan personel kunci Arsalynk. Lihat kredensial terverifikasi, simpan kartu kontak (vCard), atau mulai komunikasi langsung.',
      ourPeopleEyebrow: 'KEPEMIMPINAN & PERSONEL KUNCI',
      heroTitle: 'Direktori Profil Eksekutif',
      ourTeamEyebrow: 'KARTU DIGITAL TERVERIFIKASI',
      allProfilesTitle: 'Semua Profil Kepemimpinan',
      allProfilesDescription:
        'Pilih profil eksekutif di bawah ini untuk melihat kredensial kontak terverifikasi atau mengunduh vCard digital.',
      phoneShort: 'Telepon',
      emailShort: 'Email',
      officeShort: 'Kantor',
      saveContact: 'Simpan Kontak',
      searchPlaceholder: 'Cari berdasarkan nama, jabatan, atau departemen...',
      allDepartments: 'Semua Departemen',
      viewCardCta: 'Buka Kartu Digital',
      noResults: 'Tidak ada anggota tim yang sesuai dengan kriteria pencarian Anda.',
      backToDirectory: 'Kembali ke Direktori',
      saveContactVcard: 'Simpan Kontak (vCard)',
      shareProfile: 'Bagikan Profil',
      copiedLink: 'Tautan Profil Disalin!',
      aboutHeading: 'Biografi & Fokus Eksekutif',
      expertiseHeading: 'Bidang Keahlian',
      credentialsHeading: 'Kontak Langsung & Kredensial',
      emailLabel: 'Email Korporat',
      phoneLabel: 'Telepon Langsung / WhatsApp',
      locationLabel: 'Lokasi Utama',
      departmentLabel: 'Departemen',
      idLabel: 'ID Karyawan',
    },
    portal: {
      badge: 'PORTAL PROYEK KLIEN',
      title: 'Tata Kelola Proyek & Pelacak Milestone Real-Time',
      subtitle:
        'Masukkan kode akses proyek atau email korporat terdaftar Anda untuk memeriksa progres rekayasa langsung, milestone sprint, dan hasil kerja implementasi.',
      heroBreadcrumb: 'PORTAL KLIEN',
      heroTitle: 'Portal Proyek & Dukungan Klien',
      heroDescription:
        'Tinjau dan otorisasi penawaran harga digital atau kirimkan tiket dukungan teknis prioritas yang tersinkronisasi langsung dengan Marka ERP.',
      scrollAriaLabel: 'Gulir ke ruang kerja portal',
      leftTitleLine1: 'Tata Kelola',
      leftTitleLine2: '& Dukungan Klien',
      leftTitleLine3: 'Terpadu',
      leftDescription:
        'Setiap tindakan yang dikirimkan di sini dicatat secara aman dan diteruskan secara real-time kepada tim delivery Arsalynk Anda.',
      helpInfoLabel: 'BANTUAN LANGSUNG KLIEN',
      markaIntegrationLabel: 'SINKRONISASI LANGSUNG MARKA ERP',
      markaIntegrationDescription:
        'Terhubung langsung ke mesin CRM Enterprise & Tata Kelola Proyek MarkaSuites.',
      loadingPortal: 'Memuat Portal Klien...',
      tabQuotationReview: 'Persetujuan Penawaran',
      tabSupportTicket: 'Tiket Dukungan',
      quoteEyebrow: 'TATA KELOLA PENAWARAN DIGITAL',
      quoteTitle: 'Tinjau & Otorisasi Penawaran',
      quoteDescription:
        'Masukkan Nomor Dokumen Penawaran resmi dan rincian perwakilan berwenang Anda untuk menyetujui atau menolak proposal komersial.',
      quoteInfoNote:
        'Pastikan nomor dokumen sesuai dengan PDF penawaran resmi yang diterbitkan oleh Tim Komersial Arsalynk.',
      quoteDocNumberLabel: 'Nomor Dokumen Penawaran',
      quoteDocNumberPlaceholder: 'cth. QUO-2026-0042',
      quoteDocNumberHelp: 'Terdapat pada bagian kanan atas dokumen penawaran Anda.',
      quoteRepNameLabel: 'Nama Perwakilan Berwenang',
      quoteRepNamePlaceholder: 'Masukkan nama lengkap dan jabatan',
      quoteNotesLabel: 'Catatan Persetujuan / Revisi (Opsional)',
      quoteNotesPlaceholder:
        'Tambahkan nomor referensi PO, catatan penagihan, atau permintaan revisi...',
      quoteProcessingButton: 'Memproses...',
      quoteApproveButton: 'Setujui Penawaran',
      quoteRejectButton: 'Minta Revisi / Tolak',
      quoteErrorRequiredCode: 'Mohon masukkan Nomor Dokumen Penawaran yang valid.',
      quoteErrorRequiredName: 'Mohon masukkan Nama Perwakilan Berwenang.',
      quoteInfoSubmitting: 'Mengirimkan keputusan ke Marka ERP...',
      quoteInfoQueued: 'Keputusan tercatat dan masuk antrean sinkronisasi ERP.',
      ticketEyebrow: 'LAYANAN DUKUNGAN TEKNIS',
      ticketTitle: 'Kirim Tiket Dukungan Teknis',
      ticketDescription:
        'Laporkan kendala teknis, ajukan perubahan konfigurasi, atau eskalasikan insiden operasional mendesak ke meja rekayasa 24/7 kami.',
      ticketSubjectLabel: 'Subjek Kendala',
      ticketSubjectPlaceholder: 'Ringkasan singkat kendala atau permintaan',
      ticketSerialLabel: 'Kode Seri Modul / Aset (Opsional)',
      ticketSerialPlaceholder: 'cth. MRK-FIN-01 atau ID Gateway IoT',
      ticketPriorityLabel: 'Prioritas Insiden',
      ticketPriorityLow: 'Rendah — Pertanyaan Umum / UI Minor',
      ticketPriorityNormal: 'Normal — Permintaan Fitur / Konfigurasi Standar',
      ticketPriorityHigh: 'Tinggi — Gangguan Modul Operasional',
      ticketPriorityUrgent: 'Mendesak — Gangguan Produksi Kritikal',
      ticketFullNameLabel: 'Nama Lengkap Anda',
      ticketFullNamePlaceholder: 'Masukkan nama Anda',
      ticketEmailLabel: 'Alamat Email Kerja',
      ticketEmailPlaceholder: 'Masukkan email korporat Anda',
      ticketClientCodeLabel: 'Kode Klien / Proyek (Opsional)',
      ticketClientCodePlaceholder: 'cth. CLI-ARS-088',
      ticketIssueDescriptionLabel: 'Rincian Deskripsi Teknis',
      ticketIssueDescriptionPlaceholder:
        'Jelaskan kronologi kendala, modul yang terdampak, atau hasil yang diharapkan...',
      ticketRefEventIdPrefix: 'ID Referensi Event:',
      ticketCreateButton: 'Kirim Tiket Dukungan',
      ticketProtocolTitle: 'Protokol Respons SLA',
      ticketProtocolDescription:
        'Tiket produksi mendesak langsung memicu panggilan engineer siaga dalam 15 menit. Tiket normal ditanggapi dalam 4 jam kerja.',
      ticketErrorRequiredSubject: 'Mohon isi subjek tiket.',
      ticketErrorRequiredDescription: 'Mohon berikan deskripsi rinci mengenai kendala tersebut.',
      ticketErrorRequiredIdentity: 'Mohon cantumkan nama atau alamat email korporat Anda.',
      ticketSuccessRegistered: 'Tiket dukungan berhasil terdaftar dan diteruskan ke Tim Rekayasa Arsalynk.',
      searchPlaceholder: 'Masukkan Kode Proyek (cth. PRJ-2026-001) atau Email Klien...',
      accessButton: 'Akses Status Proyek',
      searchingButton: 'Memverifikasi...',
      demoCodesLabel: 'Kode Proyek Demo Cepat:',
      statusLabel: 'Status Saat Ini',
      progressLabel: 'Penyelesaian Keseluruhan',
      timelineLabel: 'Target Penyelesaian',
      leadArchitectLabel: 'Arsitek Utama',
      milestonesHeading: 'Milestone Rekayasa & Hasil Kerja',
      needHelpTitle: 'Butuh Bantuan Langsung dari Manajer Proyek Anda?',
      needHelpDesc: 'Hubungi pimpinan delivery Arsalynk khusus Anda atau buat tiket dukungan.',
      contactPmCta: 'Hubungi Tim Delivery',
    },
    crm: {
      badge: 'PUSAT KLIEN ENTERPRISE',
      title: 'Konsultasi Terpadu, Pelacakan Proyek & Umpan Balik Klien',
      subtitle:
        'Akses portal klien terpadu kami untuk mengajukan konsultasi teknis, melacak implementasi aktif Anda, atau mengirimkan umpan balik kepuasan proyek.',
      dashboardBadge: 'KONSOL CRM ENTERPRISE',
      dashboardRefresh: 'Muat Ulang Data',
      dashboardBackToWebsite: 'Kembali ke Situs Web',
      dashboardTabInquiries: 'Pertanyaan Proyek',
      dashboardTabInbox: 'Kotak Masuk Omnichannel',
      dashboardTabWebhooks: 'Log Webhook ERP',
      dashboardTabTickets: 'Tiket Dukungan',
      dashboardKpiTotal: 'Total Pertanyaan',
      dashboardKpiPending: 'Menunggu Tinjauan',
      dashboardKpiContacted: 'Dalam Diskusi',
      dashboardKpiDeals: 'Proyek Aktif',
      dashboardSearchPlaceholder: 'Cari berdasarkan nama, perusahaan, email, atau layanan...',
      dashboardStatusAll: 'Semua Status',
      dashboardStatusPending: 'Menunggu',
      dashboardStatusContacted: 'Dihubungi',
      dashboardStatusDeal: 'Disepakati / Aktif',
      dashboardStatusClosed: 'Selesai',
      dashboardExportCsv: 'Ekspor CSV',
      dashboardColNameCompany: 'Klien & Perusahaan',
      dashboardColContact: 'Saluran Kontak',
      dashboardColService: 'Domain Solusi',
      dashboardColTimestamp: 'Waktu Pengiriman',
      dashboardColStatus: 'Status',
      dashboardColActions: 'Aksi',
      dashboardLoadingInquiries: 'Memuat data pertanyaan...',
      dashboardNoInquiriesMatch: 'Tidak ada data pertanyaan yang sesuai dengan filter saat ini.',
      dashboardInboxSearchTitle: 'Pencarian Percakapan',
      dashboardInboxSearchDescription:
        'Periksa riwayat percakapan klien secara langsung yang tersinkronisasi dengan CRM Marka.',
      dashboardInboxThreadPlaceholder: 'Masukkan ID Percakapan atau Email Klien...',
      dashboardInboxOpenButton: 'Buka Percakapan',
      dashboardInboxViewerTitle: 'Percakapan Aktif:',
      dashboardInboxNoneSelected: 'Belum dipilih',
      dashboardInboxLoading: 'Memuat pesan...',
      dashboardInboxEmpty: 'Belum ada pesan dalam percakapan ini.',
      dashboardInboxSelectPrompt: 'Masukkan ID percakapan di atas untuk memeriksa pesan.',
      dashboardWebhooksTitle: 'Aliran Event & Webhook Marka ERP',
      dashboardWebhooksDescription:
        'Catatan sinkronisasi real-time antara portal publik dan Marka ERP.',
      dashboardColTime: 'Waktu',
      dashboardColDetails: 'Rincian Payload',
      dashboardWebhooksLoading: 'Memuat log webhook...',
      dashboardWebhooksEmpty: 'Belum ada event webhook yang tercatat.',
      dashboardInspectButton: 'Periksa',
      dashboardTicketsTitle: 'Tiket Dukungan Teknis Klien',
      dashboardTicketsLoading: 'Memuat tiket dukungan...',
      dashboardTicketsEmpty: 'Belum ada tiket dukungan.',
      consultationErrorFallback: 'Tidak dapat mengirim permintaan konsultasi. Silakan coba lagi.',
      consultationSuccessTitle: 'Permintaan Konsultasi Tercatat!',
      consultationSuccessDescription:
        'Arsitek solusi utama kami akan meninjau ruang lingkup Anda dan menghubungi Anda dalam 1 hari kerja.',
      consultationCloseButton: 'Selesai',
      consultationEyebrow: 'MEJA ARSITEKTUR ENTERPRISE',
      consultationTitle: 'Jadwalkan Konsultasi Teknis',
      consultationDescription:
        'Bagikan kebutuhan operasional Anda dan tim rekayasa kami akan menyiapkan sesi pemaparan arsitektur yang disesuaikan.',
      consultationFullNameLabel: 'Nama Lengkap',
      consultationFullNamePlaceholder: 'cth. Andi Pratama',
      consultationCompanyLabel: 'Perusahaan / Organisasi',
      consultationCompanyPlaceholder: 'cth. PT Sinergi Nusantara',
      consultationEmailLabel: 'Email Kerja',
      consultationEmailPlaceholder: 'cth. andi@perusahaan.co.id',
      consultationPhoneLabel: 'Telepon / WhatsApp',
      consultationPhonePlaceholder: 'cth. +62 811 2233 4455',
      consultationSolutionLabel: 'Pilar Solusi Utama',
      consultationSolutionPlaceholder: 'Pilih pilar solusi',
      consultationBudgetLabel: 'Estimasi Skala Proyek (Opsional)',
      consultationBudgetPlaceholder: 'Pilih estimasi skala',
      consultationScopeLabel: 'Ruang Lingkup & Tujuan Proyek',
      consultationScopePlaceholder:
        'Jelaskan sistem yang ingin Anda bangun, integrasikan, atau modernisasi...',
      consultationCancelButton: 'Batal',
      consultationSubmittingButton: 'Mengirimkan...',
      consultationSubmitButton: 'Kirim Permintaan',
      hubWelcomeMessage:
        'Selamat datang di Pusat Enterprise Arsalynk. Anda dapat mengirim pesan langsung ke tim delivery kami, mengajukan pertanyaan proyek terstruktur, atau memeriksa status tiket/penawaran Anda.',
      hubOpenAriaLabel: 'Buka Pusat Klien Enterprise',
      hubTriggerTitle: 'Pusat Klien & Proyek',
      hubTriggerSubtitle: 'CRM & Portal Langsung',
      hubWindowTitle: 'Pusat Enterprise Arsalynk',
      hubSyncActive: 'Sinkronisasi Langsung CRM Marka',
      hubCloseAriaLabel: 'Tutup Pusat Enterprise',
      hubTabInbox: 'Pesan Langsung',
      hubTabInquiry: 'Pertanyaan Baru',
      hubTabPortal: 'Cek Status',
      hubIdentityLabel: 'Nama atau Email Anda:',
      hubIdentityPlaceholder: 'cth. budi@perusahaan.com (agar tim kami dapat membalas)',
      hubYou: 'Anda',
      hubSending: 'Mengirim...',
      hubSentToCrm: 'Tersinkron ke CRM',
      hubFailed: 'Pengiriman tertunda',
      hubInputPlaceholder: 'Ketik pesan ke tim solusi kami...',
      hubSendAriaLabel: 'Kirim pesan',
      hubInquirySuccessTitle: 'Pertanyaan Tercatat di CRM!',
      hubInquirySuccessDescription:
        'Tim kami telah menerima ringkasan proyek Anda dan akan segera menghubungi Anda.',
      hubInquiryAnotherButton: 'Kirim Pertanyaan Lain',
      hubSavingToCrm: 'Menyinkronkan ke CRM...',
      hubSubmitInquiryButton: 'Kirim Pertanyaan Proyek',
      hubTicketTab: 'Tiket Dukungan',
      hubQuotationTab: 'Penawaran Harga',
      hubTicketNumberLabel: 'Nomor Tiket',
      hubQuotationNumberLabel: 'Nomor Penawaran',
      hubTokenLabel: 'Token Akses / Kode Klien (Opsional)',
      hubCheckingStatus: 'Memeriksa...',
      hubCheckStatusButton: 'Cek Status Langsung',
      hubActiveStatus: 'Aktif',
      hubTitleLabel: 'Judul:',
      hubValueLabel: 'Nilai:',
      hubSignatoryPlaceholder: 'Nama Penandatangan Berwenang',
      hubApproveButton: 'Setujui',
      hubDeclineButton: 'Tolak',
      portalModalEyebrow: 'VERIFIKASI ERP REAL-TIME',
      portalModalTitle: 'Pencarian Tiket Proyek & Penawaran',
      portalModalDescription:
        'Verifikasi status langsung dan otorisasi dokumen komersial secara langsung melalui Marka ERP.',
      portalModalTabTickets: 'Tiket Dukungan',
      portalModalTabQuotations: 'Penawaran Harga',
      portalModalTicketIdLabel: 'ID Referensi Tiket',
      portalModalQuotationIdLabel: 'ID Dokumen Penawaran',
      portalModalTokenLabel: 'Token Keamanan Klien (Opsional)',
      portalModalTokenPlaceholder: 'Masukkan token jika diwajibkan oleh NDA Anda',
      portalModalCheckingButton: 'Memeriksa ERP...',
      portalModalCheckButton: 'Verifikasi Status',
      portalModalResetButton: 'Atur Ulang',
      portalModalDocFound: 'Dokumen Terverifikasi',
      portalModalDecisionTitle: 'Otorisasi Digital',
      portalModalSignerPlaceholder: 'Nama Lengkap & Jabatan Penyetuju',
      portalModalNotesPlaceholder: 'Catatan persetujuan atau revisi (opsional)...',
      portalModalApproveButton: 'Setujui Dokumen',
      portalModalDeclineButton: 'Tolak / Revisi',
      cards: {
        consultationTitle: 'Jadwalkan Konsultasi Teknis',
        consultationDesc:
          'Kirimkan kebutuhan arsitektur Anda langsung ke meja rekayasa solusi kami.',
        consultationBtn: 'Buka Formulir Konsultasi',
        portalTitle: 'Portal Status Proyek Langsung',
        portalDesc:
          'Periksa penyelesaian milestone real-time dan hasil sprint menggunakan kode proyek Anda.',
        portalBtn: 'Lacak Status Proyek',
        feedbackTitle: 'Umpan Balik & Testimoni Klien',
        feedbackDesc:
          'Bagikan pengalaman Anda bekerja bersama tim rekayasa dan delivery Arsalynk.',
        feedbackBtn: 'Kirim Umpan Balik',
      },
    },
    feedback: {
      badge: 'KEPUASAN KLIEN',
      title: 'Bagikan Pengalaman Anda Bersama Arsalynk',
      subtitle:
        'Umpan balik Anda secara langsung membentuk standar rekayasa dan keunggulan layanan kami. Beritahu kami bagaimana kinerja tim kami pada proyek Anda.',
      heroBreadcrumb: 'UMPAN BALIK KLIEN',
      heroTitle: 'Kepuasan & Ulasan Klien',
      heroDescription:
        'Evaluasi Anda membantu kami terus menyempurnakan kualitas pengerjaan rekayasa, ketepatan SLA, dan kemitraan jangka panjang kami.',
      scrollAriaLabel: 'Gulir ke formulir umpan balik',
      leftTitleLine1: 'Membentuk Keunggulan',
      leftTitleLine2: 'Melalui Evaluasi',
      leftTitleLine3: 'Klien yang Transparan',
      leftDescription:
        'Setiap ulasan dibaca langsung oleh dewan eksekutif dan arsitek utama kami untuk memastikan sistem serta tim kami melampaui ekspektasi.',
      officialClientServiceLabel: 'JAMINAN KUALITAS KLIEN',
      dataConfidentialityLabel: 'TERVERIFIKASI & RAHASIA',
      dataConfidentialityDescription:
        'Umpan balik ditautkan ke kode klien Anda untuk tata kelola kualitas internal dan tidak pernah dipublikasikan tanpa izin tertulis.',
      formEyebrow: 'FORMULIR EVALUASI PROYEK',
      formTitle: 'Kirim Ulasan Proyek Anda',
      formDescription:
        'Silakan masukkan kode klien atau proyek Anda dan berikan penilaian atas pengalaman Anda bersama tim kami.',
      clientCodeLabel: 'Kode Klien / Referensi Proyek',
      clientCodePlaceholder: 'cth. CLI-2026-019 atau PRJ-ERP-04',
      clientCodeHelp: 'Tercantum pada dokumen serah terima proyek atau laporan SLA bulanan Anda.',
      satisfactionLevelLabel: 'Tingkat Kepuasan Keseluruhan',
      rating5: 'Sangat Memuaskan',
      rating4: 'Baik',
      rating3: 'Cukup',
      rating2: 'Perlu Peningkatan',
      rating1: 'Kurang Memuaskan',
      serviceCategoryLabel: 'Kategori Evaluasi',
      categoryOptionReview: 'Ulasan Penyelesaian Proyek Keseluruhan',
      categoryOptionEvaluation: 'Kinerja Sistem & Arsitektur',
      categoryOptionManagement: 'Manajemen Proyek & Komunikasi',
      categoryOptionSupport: 'SLA Purnajual & Dukungan Teknis',
      feedbackTextLabel: 'Umpan Balik & Saran Rinci',
      feedbackTextPlaceholder:
        'Ceritakan apa yang telah berjalan baik dan bagaimana kami dapat terus meningkatkan kualitas rekayasa serta layanan kami...',
      errorRequiredClientCode: 'Mohon masukkan Kode Klien atau Referensi Proyek Anda.',
      errorFallback: 'Gagal mengirim umpan balik. Silakan coba lagi.',
      submitAnotherReviewButton: 'Kirim Ulasan Lainnya',
      backToHomeButton: 'Kembali ke Beranda',
      fields: {
        name: 'Nama Lengkap Anda',
        namePlaceholder: 'cth. Hendra Wijaya',
        role: 'Jabatan / Peran',
        rolePlaceholder: 'cth. Chief Information Officer',
        company: 'Perusahaan / Organisasi',
        companyPlaceholder: 'cth. PT Mandiri Logistik',
        projectCode: 'Kode Proyek (Opsional)',
        projectCodePlaceholder: 'cth. PRJ-2026-001',
        rating: 'Penilaian Kepuasan Keseluruhan',
        quote: 'Umpan Balik / Testimoni Anda',
        quotePlaceholder:
          'Bagikan bagaimana Arsalynk membantu mentransformasi operasional Anda atau hal terbaik selama pengerjaan proyek...',
      },
      submitButton: 'Kirim Umpan Balik',
      submittingButton: 'Mengirimkan...',
      successTitle: 'Terima Kasih atas Umpan Balik Anda!',
      successDesc:
        'Ulasan Anda telah tercatat. Kami sangat menghargai kemitraan Anda bersama Arsalynk.',
      backHomeButton: 'Kembali ke Beranda',
    },
    errors: {
      notFoundBadge: 'ERROR 404',
      notFoundEyebrow: 'ERROR 404 — HALAMAN TIDAK DITEMUKAN',
      notFoundTitle: 'Halaman Tidak Ditemukan',
      notFoundTitleLine1: 'Halaman yang Anda Cari',
      notFoundTitleLine2: 'Tidak Dapat Ditemukan',
      notFoundDesc:
        'Halaman atau sumber daya yang Anda cari mungkin telah dipindahkan, diubah namanya, atau sedang tidak tersedia.',
      notFoundDescription:
        'Alamat URL mungkin salah diketik, atau halaman telah dipindahkan di dalam pembaruan arsitektur dwibahasa kami.',
      backHome: 'Kembali ke Beranda',
      returnHomeButton: 'Kembali ke Beranda',
      exploreSolutions: 'Jelajahi Solusi',
      exploreSolutionsButton: 'Jelajahi Solusi Kami',
      errorBadge: 'PEMBERITAHUAN SISTEM',
      errorEyebrow: 'GANGGUAN SISTEM SEMENTARA',
      errorTitle: 'Terjadi Kendala Teknis',
      errorTitleLine1: 'Terjadi Kendala Teknis',
      errorTitleLine2: 'Saat Memuat Halaman Ini',
      errorDesc:
        'Terjadi kesalahan tak terduga saat memuat bagian ini. Anda dapat mencoba memuat ulang atau kembali ke halaman utama.',
      errorDescription:
        'Telemetri rekayasa kami telah mencatat kendala ini. Silakan coba muat ulang tampilan ini atau kembali ke halaman utama.',
      retryButton: 'Coba Lagi',
      tryAgainButton: 'Coba Lagi',
      referencePrefix: 'Referensi Diagnostik:',
      globalErrorEyebrow: 'GANGGUAN APLIKASI KRITIKAL',
      globalErrorTitleLine1: 'Aplikasi Mengalami',
      globalErrorTitleLine2: 'Kesalahan Tak Terduga',
      globalErrorDescription:
        'Kami mohon maaf atas gangguan ini. Silakan coba muat ulang aplikasi atau kembali ke halaman utama Arsalynk.',
    },
  },
};

export type Dictionary = (typeof DICTIONARIES)['en'];

export function getDictionary(locale: Locale): Dictionary {
  return (DICTIONARIES[locale] ?? DICTIONARIES.en) as Dictionary;
}

