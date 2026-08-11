import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { SITE_URL } from '@/lib/constants';

const IconArrow = ({ direction = 'right', size = 20 }: { direction?: 'left' | 'right'; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={direction === 'left' ? 'rotate-180' : ''}
    aria-hidden="true"
  >
    <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconOutdated = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="10.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="5.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 10.75V16L19.25 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTracking = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="6.5" y="6.5" width="19" height="19" rx="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 10.5V16L20 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 4.5V8.5M21 4.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconVisibility = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M4.5 16C7.4 11.65 11.25 9.5 16 9.5C20.75 9.5 24.6 11.65 27.5 16C24.6 20.35 20.75 22.5 16 22.5C11.25 22.5 7.4 20.35 4.5 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="3.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 7L25 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 font-body text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E] sm:text-[13px] 2xl:text-[16px]">
    <span className="h-2 w-2 shrink-0 bg-[#1A3E9E]" />
    <span>{children}</span>
  </div>
);

const Gallery = ({ src, alt }: { src: string; alt: string }) => (
  <div className="group relative aspect-[1206/600] w-full overflow-hidden rounded-[16px] bg-[#0C2D5B] sm:rounded-[20px] 2xl:rounded-[24px]">
    <img src={src} alt={alt} className="h-full w-full object-cover" />

    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/45 to-transparent" />

    <div className="absolute inset-y-0 left-4 flex items-center sm:left-6 2xl:left-[40px]">
      <button
        type="button"
        aria-label="Previous image"
        className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-white/40 text-white transition hover:bg-white/10 sm:h-11 sm:w-11 2xl:h-16 2xl:w-16 2xl:rounded-[12px]"
      >
        <IconArrow direction="left" size={20} />
      </button>
    </div>

    <div className="absolute inset-y-0 right-4 flex items-center sm:right-6 2xl:right-[40px]">
      <button
        type="button"
        aria-label="Next image"
        className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-white/40 text-white transition hover:bg-white/10 sm:h-11 sm:w-11 2xl:h-16 2xl:w-16 2xl:rounded-[12px]"
      >
        <IconArrow size={20} />
      </button>
    </div>

    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/45 px-4 py-3 backdrop-blur-[4px] 2xl:bottom-[35px]">
      <span className="h-2.5 w-[54px] rounded-[1px] bg-[#E6FF2A]" />
      <span className="h-2.5 w-2.5 rounded-[1px] bg-[#717171]" />
      <span className="h-2.5 w-2.5 rounded-[1px] bg-[#717171]" />
    </div>
  </div>
);

const ChallengeCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <article className="flex min-h-[190px] flex-col items-start gap-5 rounded-[18px] bg-[linear-gradient(79deg,rgba(26,62,158,0.0375)_13.31%,rgba(133,166,255,0.075)_132.94%)] p-5 backdrop-blur-[8px] sm:min-h-[215px] sm:p-6 2xl:min-h-[249px] 2xl:gap-6 2xl:rounded-[24px] 2xl:pb-9">
    <div className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-[#99A6E7] bg-[rgba(153,166,231,0.35)] text-[#101010] 2xl:h-16 2xl:w-16">
      {icon}
    </div>
    <div>
      <h3 className="font-body text-[18px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#424242] sm:text-[21px] 2xl:text-[28px] 2xl:leading-[1.6]">{title}</h3>
      <p className="mt-1 font-body text-[13px] leading-[1.6] text-[#424242] sm:text-[14px] 2xl:text-[16px]">{description}</p>
    </div>
  </article>
);

const WorkCard = ({ href, src, title, categories }: { href: string; src: string; title: string; categories: string[] }) => (
  <Link href={href} className="group relative block aspect-[835/616] overflow-hidden rounded-[18px] bg-[#151515] no-underline sm:rounded-[24px] 2xl:rounded-[32px]">
    <img src={src} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
    <div className="absolute inset-0 bg-black/20" />
    <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black via-black/65 to-transparent" />

    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7 2xl:inset-x-[40px] 2xl:bottom-[40px]">
      <div className="min-w-0 flex-1">
        <h3 className="max-w-[700px] font-heading text-[23px] font-medium leading-[1.1] tracking-[-0.01em] text-[#F7F7F7] sm:text-[30px] xl:text-[34px] 2xl:text-[42px]">{title}</h3>
        <div className="mt-4 flex flex-wrap items-center gap-3 font-body text-[10px] font-medium uppercase tracking-[0.06em] text-[#E6FF2A] sm:text-[12px] 2xl:text-[16px]">
          {categories.map((category, index) => (
            <span key={category} className="flex items-center gap-3">
              {index > 0 && <span className="h-[3px] w-[3px] bg-white" />}
              {category}
            </span>
          ))}
        </div>
      </div>

      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] border border-[#4C4C4C] text-[#D9D9D9] sm:h-12 sm:w-12 2xl:h-[54px] 2xl:w-[54px]">
        <IconArrow size={20} />
      </span>
    </div>
  </Link>
);

const PROJECT_DETAILS_MAP: Record<string, {
  title: string;
  corporation: string;
  tags: string[];
  heroImage: string;
  gallery1: string;
  gallery2: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
  capabilityLabel?: string;
  ctaLabel?: string;
  description: string;
  challengeDesc: string;
  challenges: { title: string; desc: string }[];
}> = {
  'sinau-print-erp': {
    title: 'Manifesting The A-Z Print Solution, Marketplace Website Optimization for Sinau Print',
    corporation: 'Sinau Print',
    tags: ['Enterprise Systems', 'ERP & Marketplace', 'E-Commerce'],
    heroImage: '/images/projects/sinau-print-erp/1.webp',
    gallery1: '/images/projects/sinau-print-erp/2.webp',
    gallery2: '/images/projects/sinau-print-erp/3.webp',
    features: [
      'Comprehensive Online Order System',
      '70+ Products and Services',
      'Online Booking & ERP System',
      'Support 500+ Products Catalog',
    ],
    techStack: ['Laravel', 'Next.js', 'MySQL', 'React', 'Midtrans'],
    liveUrl: 'https://sinauprint.com',
    description: 'Sinau Print partnered with Arsalynk to develop a custom marketplace website and ERP platform that enables customers to explore printing products, place orders online, and manage transactions seamlessly.',
    challengeDesc: 'Addressing operational bottlenecks in manual order processing and inventory management for multi-branch printing hubs.',
    challenges: [
      { title: 'Outdated Manual Entry', desc: 'Order processing relied heavily on repetitive manual data entry.' },
      { title: 'No Real-Time Tracking', desc: 'Customers had limited visibility into order and delivery progress.' },
      { title: 'No Clear Products View', desc: 'Product choices and specifications were difficult to compare.' },
    ],
  },
  'artic-complex-web': {
    title: 'Artic Complex Web Architecture & High-Performance Data Portal',
    corporation: 'Artic Analytica',
    tags: ['Digital Platforms', 'Data Portal Development', 'Data Architecture'],
    heroImage: '/images/projects/artic-complex-web/1.webp',
    gallery1: '/images/projects/artic-complex-web/2.webp',
    gallery2: '/images/projects/artic-complex-web/3.webp',
    features: [
      'High-Performance Query Engine',
      'Multi-Tenant Dashboard Architecture',
      'Automated Analytical PDF Reports',
      'Role-Based Granular Permissions',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'Docker'],
    liveUrl: 'https://articanalytica.com',
    description: 'Artic Analytica required a high-performance complex web portal to structure, visualize, and distribute multi-layered business research data with ultra-low latency.',
    challengeDesc: 'Managing high-volume analytical queries and multi-tenant security architecture.',
    challenges: [
      { title: 'Data Query Latency', desc: 'Unoptimized queries caused delays in generating executive analytical reports.' },
      { title: 'Complex Data Structures', desc: 'Multi-layered data sources lacked a unified visualization interface.' },
      { title: 'Access Governance', desc: 'Managing secure role-based access for multi-organization clients.' },
    ],
  },
  'myboss-iot-system': {
    title: 'MyBoss Connected IoT Hardware & Real-Time Control System',
    corporation: 'MyBoss',
    tags: ['Connected Technology', 'IoT Integration', 'Hardware Control'],
    heroImage: '/images/projects/myboss-iot-system/1.webp',
    gallery1: '/images/projects/myboss-iot-system/2.webp',
    gallery2: '/images/projects/myboss-iot-system/3.webp',
    features: [
      'Low-Latency Sensor Telemetry Engine',
      'Remote Hardware Switch Control',
      'Predictive Maintenance Alerts',
      'Automated Incident Logging',
    ],
    techStack: ['Python', 'MQTT', 'React', 'Node.js', 'Redis'],
    liveUrl: 'https://myboss-iot.com',
    description: 'MyBoss connected smart devices and hardware sensors into a central cloud dashboard to monitor physical industrial operations in real time.',
    challengeDesc: 'Eliminating hardware sensor latency and ensuring 99.99% uptime for remote device control.',
    challenges: [
      { title: 'Hardware Sensor Disconnects', desc: 'Legacy sensor networks experienced frequent data dropouts.' },
      { title: 'Manual Switch Operations', desc: 'Physical switches required on-site manual intervention.' },
      { title: 'Lack of Predictive Alerts', desc: 'Failures were detected only after equipment breakdowns occurred.' },
    ],
  },
  'altatic-analytic': {
    title: 'Altatic Data Analytics & Intelligence Dashboard Platform',
    corporation: 'Altatic',
    tags: ['Data & Intelligence', 'Analytics Dashboard', 'Business Intelligence'],
    heroImage: '/images/projects/altatic-analytic/1.webp',
    gallery1: '/images/projects/altatic-analytic/2.webp',
    gallery2: '/images/projects/altatic-analytic/3.webp',
    features: [
      'Automated Survey Data Aggregation',
      'Interactive Chart & Heatmap Visualizer',
      'Predictive Business Trend Forecasting',
      'Exportable Executive Presentations',
    ],
    techStack: ['React', 'Python', 'D3.js', 'FastAPI', 'PostgreSQL'],
    liveUrl: 'https://altatic.io',
    description: 'Altatic built an enterprise data intelligence platform to aggregate survey results, market trends, and predictive business insights into simplified executive charts.',
    challengeDesc: 'Transforming unstructured survey responses into real-time visual dashboards.',
    challenges: [
      { title: 'Unstructured Survey Data', desc: 'Raw survey inputs were scattered across unformatted spreadsheets.' },
      { title: 'Delayed Reporting', desc: 'Compiling reports manually took weeks instead of minutes.' },
      { title: 'Inconsistent Data Visuals', desc: 'Executive teams lacked standardized visual charting tools.' },
    ],
  },
  'web-media-profile': {
    title: 'Web Media Corporate Profile & Interactive Digital Presence',
    corporation: 'Web Media',
    tags: ['Brand & Digital Experience', 'Corporate Profile Website', 'Digital Branding'],
    heroImage: '/images/projects/web-media-profile/1.webp',
    gallery1: '/images/projects/web-media-profile/2.webp',
    gallery2: '/images/projects/web-media-profile/3.webp',
    features: [
      'Immersive Media Gallery Layout',
      'High-Speed Asset Streaming',
      'Interactive Client Portfolio Grid',
      'Custom Motion & Micro-Animations',
    ],
    techStack: ['Next.js', 'Framer Motion', 'Tailwind', 'Vercel', 'CDN'],
    liveUrl: 'https://webmedia.co.id',
    description: 'Web Media required a modern digital showcase and corporate profile website to communicate their brand story and showcase creative media portfolios.',
    challengeDesc: 'Designing an ultra-responsive visual layout that highlights video assets without sacrificing page load speed.',
    challenges: [
      { title: 'Slow Asset Loading', desc: 'Heavy media assets caused slow initial page loads.' },
      { title: 'Outdated Visual Identity', desc: 'The previous corporate website did not reflect modern creative standards.' },
      { title: 'Mobile Responsiveness', desc: 'Complex media grids broke on mobile viewports.' },
    ],
  },
  'kajian-kelayakan-gik': {
    title: 'Kajian Kelayakan Pengembangan Gedung Industri Kreatif (GIK) sebagai Destinasi Wisata Belanja Oleh-Oleh Khas Kota Semarang',
    corporation: 'Artic Analytica',
    tags: ['Research & Strategy', 'Feasibility Study', 'Tourism Development'],
    heroImage: '/images/projects/kajian-kelayakan-gik/1.webp',
    gallery1: '/images/projects/kajian-kelayakan-gik/1.webp',
    gallery2: '/images/projects/kajian-kelayakan-gik/1.webp',
    features: ['Market and Visitor Analysis', 'Commercial Feasibility Assessment', 'Destination Development Strategy', 'Actionable Policy Recommendations'],
    techStack: ['Field Research', 'Market Analysis', 'Stakeholder Mapping', 'Financial Modeling'],
    capabilityLabel: 'Research Approach',
    ctaLabel: 'Discuss a Research Project',
    liveUrl: '/contact-us',
    description: 'Kajian ini mengevaluasi potensi Gedung Industri Kreatif sebagai destinasi wisata belanja oleh-oleh khas Kota Semarang melalui analisis pasar, perilaku pengunjung, kesiapan ekosistem, dan kelayakan pengembangan usaha.',
    challengeDesc: 'Menggabungkan kebutuhan pelaku industri kreatif, daya tarik wisata, dan keberlanjutan komersial menjadi rekomendasi pengembangan yang terukur.',
    challenges: [
      { title: 'Fragmented Market Evidence', desc: 'Data pasar, wisatawan, dan pelaku usaha perlu disatukan dalam satu kerangka analisis.' },
      { title: 'Destination Positioning', desc: 'GIK membutuhkan proposisi nilai yang kuat agar berbeda dari pusat oleh-oleh konvensional.' },
      { title: 'Commercial Sustainability', desc: 'Model pengembangan harus layak secara operasional sekaligus memberi dampak bagi ekosistem kreatif.' },
    ],
  },
  'panduan-perubahan-perilaku-stunting': {
    title: 'Penyusunan Buku Panduan Perubahan Perilaku Pendampingan Keluarga Dalam Upaya Percepatan Penurunan Risiko Stunting di Tingkat Kelurahan',
    corporation: 'Artic Analytica',
    tags: ['Research & Social Impact', 'Behaviour Change Research', 'Public Health'],
    heroImage: '/images/projects/panduan-perubahan-perilaku-stunting/1.webp',
    gallery1: '/images/projects/panduan-perubahan-perilaku-stunting/1.webp',
    gallery2: '/images/projects/panduan-perubahan-perilaku-stunting/1.webp',
    features: ['Behavioral Insight Framework', 'Family Assistance Guidelines', 'Kelurahan-Level Implementation', 'Monitoring and Evaluation Indicators'],
    techStack: ['Qualitative Research', 'Behavior Mapping', 'Co-Creation Workshop', 'Content Validation'],
    capabilityLabel: 'Research Approach',
    ctaLabel: 'Discuss a Research Project',
    liveUrl: '/contact-us',
    description: 'Panduan disusun untuk membantu pendamping keluarga menerjemahkan temuan perilaku menjadi komunikasi dan intervensi yang mudah diterapkan dalam percepatan penurunan risiko stunting di tingkat kelurahan.',
    challengeDesc: 'Mengubah kebijakan dan bukti kesehatan masyarakat menjadi panduan praktis yang relevan bagi pendamping serta mudah dipahami keluarga.',
    challenges: [
      { title: 'Complex Behavioral Factors', desc: 'Risiko stunting dipengaruhi kebiasaan, akses informasi, lingkungan, dan dinamika keluarga.' },
      { title: 'Different Local Contexts', desc: 'Pendekatan pendampingan perlu cukup fleksibel untuk kondisi setiap kelurahan.' },
      { title: 'Practical Field Adoption', desc: 'Materi harus ringkas, empatik, dan dapat digunakan langsung saat pendampingan keluarga.' },
    ],
  },
  'desain-pelatihan-wasit-semarang': {
    title: 'Desain Pelatihan Wasit Kota Semarang',
    corporation: 'The Drafroom',
    tags: ['Communication & Learning', 'Learning Experience Design', 'Sports Communication'],
    heroImage: '/images/projects/desain-pelatihan-wasit-semarang/1.webp',
    gallery1: '/images/projects/desain-pelatihan-wasit-semarang/1.webp',
    gallery2: '/images/projects/desain-pelatihan-wasit-semarang/1.webp',
    features: ['Structured Training Journey', 'Practical Referee Simulation', 'Visual Learning Materials', 'Participant Evaluation Design'],
    techStack: ['Program Design', 'Visual Communication', 'Event Production', 'Documentation'],
    capabilityLabel: 'Creative Capabilities',
    ctaLabel: 'Start a Media Project',
    liveUrl: '/contact-us',
    description: 'Program pelatihan dirancang untuk menciptakan pengalaman belajar wasit yang terstruktur, komunikatif, dan aplikatif melalui materi visual, simulasi lapangan, serta alur evaluasi peserta.',
    challengeDesc: 'Menyampaikan aturan dan pengambilan keputusan pertandingan secara menarik tanpa mengurangi ketepatan materi teknis.',
    challenges: [
      { title: 'Dense Technical Material', desc: 'Materi perwasitan perlu disederhanakan tanpa kehilangan ketepatan aturan.' },
      { title: 'Practice Consistency', desc: 'Simulasi harus membangun standar keputusan yang konsisten antarpeserta.' },
      { title: 'Participant Engagement', desc: 'Format pelatihan membutuhkan ritme visual dan aktivitas yang menjaga fokus peserta.' },
    ],
  },
  'video-portret-padel-arena': {
    title: 'Produksi Konten Video Portret Padel Arena',
    corporation: 'LoxLive',
    tags: ['Media Production', 'Cinematic Video Production', 'Sports Portrait'],
    heroImage: '/images/projects/video-portret-padel-arena/1.webp',
    gallery1: '/images/projects/video-portret-padel-arena/1.webp',
    gallery2: '/images/projects/video-portret-padel-arena/1.webp',
    features: ['Cinematic Sports Portrait', 'On-Location Production', 'Lighting and Art Direction', 'Social Media Deliverables'],
    techStack: ['Creative Direction', 'Cinematography', 'Post Production', 'Color Grading'],
    capabilityLabel: 'Production Capabilities',
    ctaLabel: 'Start a Video Project',
    liveUrl: '/contact-us',
    description: 'Produksi video portret menghadirkan karakter atlet dan atmosfer Padel Arena melalui pendekatan sinematik, tata cahaya terarah, serta visual yang siap digunakan untuk kebutuhan kampanye digital.',
    challengeDesc: 'Menjaga autentisitas olahraga sekaligus menciptakan visual portret premium dalam kondisi arena yang dinamis dan reflektif.',
    challenges: [
      { title: 'Mixed Arena Lighting', desc: 'Pencahayaan lapangan dan produksi harus seimbang tanpa menghilangkan atmosfer arena.' },
      { title: 'Authentic Athlete Direction', desc: 'Gerak dan ekspresi atlet perlu terlihat natural sekaligus kuat secara visual.' },
      { title: 'Multi-Platform Delivery', desc: 'Materi harus tetap efektif pada format horizontal maupun potongan konten sosial.' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECT_DETAILS_MAP[slug];

  if (!project) {
    return { title: 'Work Not Found', robots: { index: false, follow: false } };
  }

  const canonical = `/our-works/${slug}`;
  const title = `${project.title} — Project`;

  return {
    title,
    description: project.description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: `${project.title} | Arsalynk`,
      description: project.description,
      url: canonical,
      images: [{ url: project.heroImage, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Arsalynk`,
      description: project.description,
      images: [project.heroImage],
    },
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentProject = PROJECT_DETAILS_MAP[slug];

  if (!currentProject) notFound();

  const canonicalUrl = `${SITE_URL}/our-works/${slug}`;
  const projectSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${canonicalUrl}/#project`,
        name: currentProject.title,
        description: currentProject.description,
        url: canonicalUrl,
        image: `${SITE_URL}${currentProject.heroImage}`,
        creator: { '@id': `${SITE_URL}/#organization` },
        about: currentProject.tags,
        keywords: currentProject.tags.join(', '),
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Our Works', item: `${SITE_URL}/our-works` },
          { '@type': 'ListItem', position: 3, name: currentProject.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <main className="w-full bg-[#F7F7F7] text-[#101010]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema).replace(/</g, '\\u003c') }} />
      {/* INTRO WORKS */}
      <section className="px-[6vw] pb-14 pt-[130px] max-[1199px]:px-[4vw] sm:pb-20 sm:pt-[150px] 2xl:pb-24 2xl:pt-[186px]">
        <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-10 2xl:gap-16">
          <div className="flex flex-col gap-5 sm:gap-7 2xl:gap-8">
            <div className="flex flex-wrap items-center gap-2 font-body text-[10px] font-bold uppercase tracking-[0.06em] text-[#1A3E9E] sm:text-[12px] 2xl:text-[14px]">
              <span>Home</span>
              <span>›</span>
              <span>Our Works</span>
              <span>›</span>
              <span>{currentProject.corporation}</span>
            </div>

            <h1 className={`max-w-[1640px] font-heading font-medium leading-[1.08] tracking-[-0.02em] text-[#101010] 2xl:leading-[1.1] ${currentProject.title.length > 110 ? 'text-[28px] sm:text-[36px] lg:text-[44px] 2xl:text-[52px]' : currentProject.title.length > 70 ? 'text-[32px] sm:text-[42px] lg:text-[50px] 2xl:text-[60px]' : 'text-[36px] sm:text-[48px] lg:text-[58px] 2xl:text-[72px]'}`}>
              {currentProject.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2">
              {currentProject.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[rgba(153,166,231,0.15)] px-5 py-3 font-body text-[12px] leading-none tracking-[0.02em] text-[#292929] sm:px-7 sm:py-4 sm:text-[14px] 2xl:px-8 2xl:text-[18px] 2xl:leading-[1.5]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-[300px] w-full overflow-hidden rounded-[18px] bg-[#2B2B2B] sm:h-[480px] sm:rounded-[24px] lg:h-[650px] 2xl:h-[800px] 2xl:rounded-[32px]">
            <img
              src={currentProject.heroImage}
              alt={currentProject.title}
              className="h-full w-full object-cover object-[50%_55%]"
            />
          </div>
        </div>
      </section>

      {/* DETAIL WORKS */}
      <section className="px-[6vw] pb-20 pt-4 max-[1199px]:px-[4vw] sm:pb-24 lg:pt-20 2xl:pb-[132px] 2xl:pt-24">
        <div className="mx-auto grid w-full max-w-[1700px] grid-cols-1 items-start gap-10 xl:grid-cols-[310px_minmax(0,1fr)] xl:gap-[64px]">
          <aside className="relative z-30 self-start xl:sticky xl:top-[96px]">
            <div className="rounded-[20px] bg-[rgba(153,166,231,0.1)] px-5 py-6 sm:px-6 sm:py-7 2xl:px-6 2xl:py-8">
              <div className="border-b border-[rgba(200,200,200,0.25)] pb-5">
                <h2 className="font-body text-[13px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E] sm:text-[15px] 2xl:text-[16px]">Key Features</h2>
                <ul className="mt-3 flex flex-col gap-1.5 font-body text-[13px] leading-[1.5] text-[#292929] 2xl:text-[15px]">
                  {currentProject.features.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center pt-0.5">
                        <span className="h-1.5 w-1.5 bg-[#1A3E9E]" />
                      </span>
                      <span className="pt-[1px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-b border-[rgba(200,200,200,0.25)] py-5">
                <h2 className="font-body text-[13px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E] sm:text-[15px] 2xl:text-[16px]">{currentProject.capabilityLabel ?? 'Tech Stack'}</h2>
                <div className="mt-3 grid grid-cols-2 gap-1.5">
                  {currentProject.techStack.map((tech) => (
                    <span key={tech} className="flex min-h-[36px] items-center justify-center rounded-full bg-[rgba(153,166,231,0.15)] px-3 text-center font-body text-[11px] font-medium leading-none text-[#292929] sm:text-[12px] 2xl:min-h-[40px] 2xl:text-[14px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a href={currentProject.liveUrl} target={currentProject.liveUrl.startsWith('http') ? '_blank' : undefined} rel={currentProject.liveUrl.startsWith('http') ? 'noreferrer' : undefined} className="mt-5 flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-full bg-[#1A3E9E] px-5 font-body text-[12px] font-semibold uppercase tracking-[0.01em] text-[#F7F7F7] transition hover:bg-[#153486] sm:text-[14px] 2xl:min-h-[50px] 2xl:text-[16px]">
                {currentProject.ctaLabel ?? 'Visit Live Website'}
                <IconArrow size={16} />
              </a>
            </div>
          </aside>

          <div className="flex min-w-0 flex-col gap-16 sm:gap-20 2xl:gap-24">
            <article className="flex flex-col gap-8 sm:gap-10 2xl:gap-14">
              <div className="flex flex-col gap-4 2xl:gap-6">
                <h2 className="font-heading text-[34px] font-medium leading-[1.12] tracking-[-0.02em] text-[#101010] sm:text-[44px] lg:text-[52px] 2xl:text-[64px] 2xl:leading-[1.2]">
                  {currentProject.title}
                </h2>
                <p className="font-body text-[14px] leading-[1.7] tracking-[0.01em] text-[#292929] sm:text-[16px] 2xl:text-[20px] 2xl:leading-[1.6] 2xl:tracking-[0.02em]">
                  {currentProject.description}
                </p>
              </div>
              <Gallery src={currentProject.gallery1} alt={`${currentProject.title} showcase 1`} />
            </article>

            <article className="flex flex-col gap-8 2xl:gap-[42px]">
              <div className="flex flex-col gap-4 2xl:gap-6">
                <SectionLabel>The Challenge</SectionLabel>
                <h2 className="font-heading text-[34px] font-medium leading-[1.12] tracking-[-0.02em] text-[#101010] sm:text-[44px] lg:text-[52px] 2xl:text-[64px] 2xl:leading-[1.2]">
                  {currentProject.challengeDesc}
                </h2>
                <p className="font-body text-[14px] leading-[1.7] tracking-[0.01em] text-[#292929] sm:text-[16px] 2xl:text-[20px] 2xl:leading-[1.6] 2xl:tracking-[0.02em]">
                  {currentProject.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 2xl:gap-[15px]">
                {currentProject.challenges.map((c, i) => (
                  <ChallengeCard key={c.title} icon={i === 0 ? <IconOutdated /> : i === 1 ? <IconTracking /> : <IconVisibility />} title={c.title} description={c.desc} />
                ))}
              </div>
            </article>

            <article className="flex flex-col gap-8 sm:gap-10 2xl:gap-14">
              <div className="flex flex-col gap-8 sm:gap-10 2xl:gap-[54px]">
                <div className="flex flex-col gap-4 2xl:gap-6">
                  <SectionLabel>Things We Build</SectionLabel>
                  <h2 className="font-heading text-[34px] font-medium leading-[1.12] tracking-[-0.02em] text-[#101010] sm:text-[44px] lg:text-[52px] 2xl:text-[64px] 2xl:leading-[1.2]">
                    Addressing Operational Bottlenecks in Manual Order Processing
                  </h2>
                </div>

                <div className="flex flex-col gap-4 2xl:gap-6">
                  <h3 className="font-heading text-[25px] font-medium leading-[1.1] tracking-[-0.01em] text-[#292929] sm:text-[32px] 2xl:text-[42px]">Subheadline 1</h3>
                  <p className="font-body text-[14px] leading-[1.7] tracking-[0.01em] text-[#292929] sm:text-[16px] 2xl:text-[20px] 2xl:leading-[1.6] 2xl:tracking-[0.02em]">
                    {currentProject.description}
                  </p>
                </div>
              </div>

              <Gallery src={currentProject.gallery2} alt={`${currentProject.title} showcase 2`} />
            </article>
          </div>
        </div>
      </section>

      {/* OTHER WORKS */}
      <section className="bg-[rgba(153,166,231,0.1)] px-[6vw] py-16 max-[1199px]:px-[4vw] sm:py-20 2xl:pb-[110px] 2xl:pt-24">
        <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-8">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-heading text-[46px] font-medium leading-none tracking-[-0.03em] text-[#101010] sm:text-[60px] 2xl:text-[84px]">Other Works</h2>
            <div className="flex items-center gap-2">
              <button type="button" aria-label="Previous works" className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#D9D9D9] text-[#717171] transition hover:bg-white sm:h-14 sm:w-14 2xl:h-16 2xl:w-16 2xl:rounded-[12px]">
                <IconArrow direction="left" size={20} />
              </button>
              <button type="button" aria-label="Next works" className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#D9D9D9] text-[#717171] transition hover:bg-white sm:h-14 sm:w-14 2xl:h-16 2xl:w-16 2xl:rounded-[12px]">
                <IconArrow size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 2xl:gap-[30px]">
            <WorkCard href="/our-works/artic-complex-web" src="/images/projects/artic-complex-web/1.webp" title="Artic Complex Web Architecture & Portal" categories={['Web Platform', 'Data Architecture']} />
            <WorkCard href="/our-works/myboss-iot-system" src="/images/projects/myboss-iot-system/1.webp" title="MyBoss Connected IoT Hardware & Control System" categories={['IoT System', 'IT Infrastructure']} />
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-[54px] rounded-[1px] bg-[#1A3E9E]" />
            <span className="h-2.5 w-2.5 rounded-[1px] bg-[#D9D9D9]" />
            <span className="h-2.5 w-2.5 rounded-[1px] bg-[#D9D9D9]" />
          </div>
        </div>
      </section>

      {/* CTA SECTION - BEYOND EXPECTATIONS */}
      <BeyondExpectations />
    </main>
  );
}
