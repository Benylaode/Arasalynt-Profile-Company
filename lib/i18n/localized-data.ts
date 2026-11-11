import type { Locale } from './config';
import type { HeroSlide, CaseStudyArticle, LeadershipThoughtArticle } from '@/types';
import {
  HERO_SLIDES_DUMMY_DATA,
  CASE_STUDIES_DUMMY_DATA,
  LEADERSHIP_THOUGHTS_DUMMY_DATA,
  TESTIMONIALS_DUMMY_DATA,
  TEAM_MEMBERS_DUMMY_DATA,
} from '@/lib/db/dummy';
import {
  OUR_SOLUTION_CHALLENGE,
  OUR_SOLUTION_CHALLENGES,
  CORE_SOLUTIONS,
  SOLUTION_SERVICES,
  getSolutionService,
  type SolutionService,
} from '@/lib/our-solution.data';
import {
  getServiceCardDetail,
  type ServiceCardDetail,
} from '@/components/our-solution/service-details-data';
import type { TeamMember } from '@/lib/team.data';

// ============================================================================
// 1. HERO SLIDES
// ============================================================================
const HERO_SLIDES_ID_MAP: Record<string, Partial<HeroSlide>> = {
  'unified-enterprise-ecosystem': {
    headline: 'Teknologi Enterprise\nArsalynk',
    body: 'Kami mendorong transformasi modern melalui solusi ERP berskala tinggi dan IoT terkini,\nmengintegrasikan operasional Anda sepenuhnya untuk meningkatkan kinerja perusahaan.',
    primaryCta: {
      label: 'SOLUSI KAMI',
      href: '/our-solution',
    },
    secondaryCta: {
      label: 'TENTANG KAMI',
      href: '/about-us',
    },
  },
  'uncover-the-potential': {
    headline: 'Temukan\nPotensi Terbaik',
    body: 'Kami mendalami ekosistem unik Anda untuk mengidentifikasi peluang\ndan memetakan setiap kemungkinan pertumbuhan.',
    primaryCta: {
      label: 'JELAJAHI SOLUSI',
      href: '/our-solution',
    },
    secondaryCta: {
      label: 'TENTANG KAMI',
      href: '/about-us',
    },
  },
  'architect-the-solution': {
    headline: 'Rancang\nSolusi Tepat',
    body: 'Kami merekayasa kerangka kerja integrasi ERP dan IoT\nyang dirancang untuk memberikan dampak maksimal.',
    primaryCta: {
      label: 'JELAJAHI SOLUSI ERP',
      href: '/our-solution/enterprise-solution',
    },
    secondaryCta: {
      label: 'FILOSOFI EKOSISTEM',
      href: '/about-us/ecosystem-philosophy',
    },
  },
  'connect-the-future': {
    headline: 'Hubungkan\nMasa Depan',
    body: 'Kami menerapkan sistem secara mulus, menjembatani operasional saat ini\ndengan kapabilitas enterprise yang siap menghadapi masa depan.',
    primaryCta: {
      label: 'JELAJAHI SOLUSI IOT',
      href: '/our-solution/smart-iot-system',
    },
    secondaryCta: {
      label: 'HUBUNGI KAMI',
      href: '/contact-us',
    },
  },
};

export function localizeHeroSlides(slides: HeroSlide[], locale: Locale): HeroSlide[] {
  if (locale === 'en') return slides;
  return slides.map((slide) => {
    const trans = HERO_SLIDES_ID_MAP[slide.id];
    if (!trans) return slide;
    return {
      ...slide,
      ...trans,
    };
  });
}

export function getLocalizedHeroSlides(locale: Locale): HeroSlide[] {
  return localizeHeroSlides(HERO_SLIDES_DUMMY_DATA, locale);
}

// ============================================================================
// 2. OUR SOLUTION DATA
// ============================================================================
const OUR_SOLUTION_CHALLENGE_ID = {
  title: 'Apa yang Menghambat Laju Enterprise Anda?',
  description:
    'Infrastruktur lama, ERP yang terfragmentasi, keterlambatan data operasional, dan pemeliharaan reaktif menghalangi perusahaan bergerak dengan kecepatan, visibilitas, dan keyakinan penuh.',
};

const OUR_SOLUTION_CHALLENGES_ID = [
  {
    number: '01',
    title: 'Perangkat Keras Lama & Infrastruktur Usang',
    description:
      'Server yang menua dan perangkat keras lama membatasi pertumbuhan, meningkatkan biaya pemeliharaan, serta menghambat adopsi cloud.',
    image: '/images/our-solution/projects/iot/mybos-iot.svg',
  },
  {
    number: '02',
    title: 'Perangkat Lunak Terhambat & ERP Terfragmentasi',
    description:
      'Platform yang tidak saling terhubung menciptakan silo data, pekerjaan manual berulang, dan duplikasi tugas di seluruh departemen.',
    image: '/images/our-solution/projects/enterprise/marka-project-manager.svg',
  },
  {
    number: '03',
    title: 'Titik Buta Operasional & Keterlambatan Data',
    description:
      'Tanpa data operasional real-time, para pemimpin bergantung pada laporan lama dan menghadapi titik buta dalam pengambilan keputusan.',
    image: '/images/our-solution/projects/data-ai/markaplus.svg',
  },
  {
    number: '04',
    title: 'Downtime Tak Terencana & Pemeliharaan Reaktif',
    description:
      'Sistem yang tidak terpantau menyebabkan kerusakan peralatan mendadak, penghentian operasional yang mahal, dan perbaikan darurat.',
    image: '/images/our-solution/projects/digital/presstis.svg',
  },
] as const;

const CORE_SOLUTIONS_ID_MAP: Record<
  string,
  {
    title: string;
    titleLine1: string;
    titleLine2: string;
    heroHeadline: string;
    description: string;
  }
> = {
  'enterprise-solution': {
    title: 'Solusi Enterprise',
    titleLine1: 'Solusi',
    titleLine2: 'Enterprise',
    heroHeadline: 'Simplifikasi operasional bisnis dengan sistem tersentralisasi',
    description:
      'Integrasikan alur kerja korporat ke dalam satu sistem tunggal untuk visibilitas real-time dan pertumbuhan berskala tinggi.',
  },
  'data-ai-integration': {
    title: 'Integrasi Data & AI',
    titleLine1: 'Integrasi',
    titleLine2: 'Data & AI',
    heroHeadline: 'Konversi data menjadi keputusan strategis terintegrasi AI',
    description:
      'Konsolidasikan data korporat dan manfaatkan AI untuk mengotomatiskan wawasan, memprediksi tren, serta memandu keputusan cerdas.',
  },
  'smart-iot-system': {
    title: 'Sistem Smart IoT',
    titleLine1: 'Sistem',
    titleLine2: 'Smart IoT',
    heroHeadline: 'Hubungkan Perangkat Fisik untuk Otomasi Operasional yang Lebih Cerdas',
    description: 'Hubungkan perangkat fisik untuk otomasi operasional secara real-time.',
  },
  'digital-development': {
    title: 'Pengembangan Digital',
    titleLine1: 'Pengembangan',
    titleLine2: 'Digital',
    heroHeadline: 'Bangun website dan aplikasi web berkinerja tinggi',
    description: 'Bangun situs web berkinerja tinggi dan solusi digital modern.',
  },
};

const SOLUTION_SERVICES_ID_MAP: Record<string, Partial<SolutionService>> = {
  'enterprise-solution': {
    title: 'Enterprise Solution',
    shortTitle: 'Enterprise Solution',
    heroHeadline: 'Simplifikasi operasional bisnis dengan sistem tersentralisasi',
    description:
      'Integrasikan alur kerja operasional lintas divisi ke dalam satu ekosistem terpadu dengan visibilitas real-time dan skalabilitas enterprise yang berkelanjutan.',
    whatItIs:
      'Layanan manajemen enterprise terstruktur yang dirancang untuk menyatukan alur kerja operasional kompleks, mengoptimalkan alokasi sumber daya, dan memastikan skalabilitas bisnis jangka panjang.',
    whatServiceTitle: 'Arsitektur Enterprise Terintegrasi',
    valuePropTitle: 'Lebih dari solusi biasa',
    valuePropDescription:
      'Kami menghindari platform kaku yang seragam untuk semua. Setiap modul ERP direkayasa secara khusus agar selaras dengan tata kelola korporat, alur kerja internal, dan target ekspansi jangka panjang Anda.',
    challenge:
      'Beroperasi pada platform yang terpisah-pisah menciptakan silo data, memaksa penggunaan cara manual, dan menimbulkan duplikasi pekerjaan yang mahal di seluruh departemen perusahaan.',
    modulesSectionTag: 'MODUL & LAYANAN ENTERPRISE',
    modulesSectionTitle: 'Modul & Layanan Inti Enterprise',
    modulesSectionDescription:
      'Rangkaian lengkap modul enterprise terintegrasi yang dirancang untuk memusatkan operasional, mengotomatiskan alur kerja, dan menghadirkan visibilitas menyeluruh di seluruh divisi korporasi.',
    challengeCards: [
      {
        number: '01',
        badge: 'Keuangan & Akuntansi',
        title: 'Financial Accounting & Consolidation',
        description:
          'Buku besar multi-entitas, manajemen arus kas real-time otomatis, pelaporan kepatuhan pajak, dan neraca eksekutif.',
        image: '/images/our-solution/projects/enterprise/marka-finance.svg',
      },
      {
        number: '02',
        badge: 'SDM & Penggajian',
        title: 'HR Management & Automated Payroll',
        description:
          'Data karyawan terpusat, perhitungan gaji otomatis, pelacakan KPI & kehadiran, persetujuan cuti digital, serta manajemen talenta.',
        image: '/images/our-solution/projects/enterprise/marka-hrms.svg',
      },
      {
        number: '03',
        badge: 'Tata Kelola Proyek',
        title: 'Project Management & Governance',
        description:
          'Pelacakan milestone lintas departemen, penjadwalan tugas, alokasi sumber daya, pemantauan serapan anggaran real-time, dan kolaborasi tim operasional.',
        image: '/images/our-solution/projects/enterprise/marka-project-manager.svg',
      },
      {
        number: '04',
        badge: 'Rantai Pasok & Inventaris',
        title: 'Inventory & Supply Chain Management',
        description:
          'Kontrol stok multi-gudang, titik pemesanan ulang pengadaan otomatis, pelacakan siklus hidup aset, logistik vendor, dan pengiriman material.',
        image: '/images/our-solution/projects/enterprise/marka-resource.svg',
      },
      {
        number: '05',
        badge: 'Penjualan & CRM',
        title: 'Sales Pipeline & CRM Automation',
        description:
          'Alur kerja penawaran-hingga-pembayaran menyeluruh, penangkapan prospek, manajemen hubungan pelanggan, proyeksi pipeline penjualan, dan penagihan otomatis.',
        image: '/images/our-solution/projects/enterprise/marka-sales.svg',
      },
    ],
    approach: [
      'Arsitektur alur kerja enterprise terpusat yang menghubungkan seluruh unit operasional',
      'Platform terpadu yang mulus untuk keuangan, inventaris, SDM, dan rantai pasok',
      'Visibilitas data real-time dan pipeline pelaporan konsolidasi lintas departemen',
      'Manajemen sistem kelas enterprise yang dirancang untuk skalabilitas berkelanjutan',
    ],
    outcomes: [
      'Operasional bisnis yang lebih ramping di seluruh fungsi keuangan, inventaris, SDM, dan rantai pasok',
      'Visibilitas data real-time dan pengambilan keputusan eksekutif yang lebih cepat',
      'Penghapusan silo operasional serta alur kerja manual yang berulang',
      'Skalabilitas enterprise yang berkelanjutan di seluruh divisi organisasi',
    ],
    partnerIntegration: {
      partnerName: 'MarkaSuites',
      logo: '/images/partners/markasuites.svg',
      text: 'Terintegrasi penuh dengan Marka ERP, solusi ERP unggulan bagi perusahaan yang menyatukan keuangan, inventaris, SDM, dan rantai pasok ke dalam satu platform cerdas yang mudah dikelola.',
    },
    integration: [
      'Terintegrasi penuh dengan platform Marka ERP',
      'Manajemen keuangan, inventaris, SDM, dan rantai pasok yang terpadu',
      'Konektor API enterprise REST & GraphQL serta sinkronisasi buku besar',
      'Kontrol akses berbasis peran (RBAC) kustom dan jejak audit menyeluruh',
    ],
    whoItIsFor: [
      'Perusahaan besar yang mengelola berbagai divisi operasional',
      'Organisasi yang membutuhkan manajemen sistem terpusat kelas enterprise',
      'Perusahaan yang memerlukan kendali ERP terpadu atas keuangan, SDM, inventaris, dan rantai pasok',
    ],
    ctaPrimary: 'Jadwalkan Konsultasi Enterprise',
    ctaSecondary: 'Mulai Transformasi Anda',
    seoTitle: 'Solusi Enterprise — Manajemen Sistem Enterprise Terpusat',
  },
  'data-ai-integration': {
    title: 'Data & AI Integration',
    shortTitle: 'Data & AI Integration',
    heroHeadline: 'Konversi data menjadi keputusan strategis terintegrasi AI',
    description:
      'Konsolidasikan data korporat multi-sumber ke dalam satu ekosistem terpadu dengan pemodelan AI prediktif, proyeksi permintaan, dan wawasan otomatis.',
    whatItIs:
      'Layanan rekayasa data tingkat lanjut dan integrasi AI yang dirancang untuk mengubah data mentah perusahaan menjadi intelijen yang dapat ditindaklanjuti, analitik prediktif, dan pengambilan keputusan otomatis.',
    whatServiceTitle: 'Infrastruktur Data Cerdas & Deep Learning',
    valuePropTitle: 'Analitik dinamis yang unggul',
    valuePropDescription:
      'Kami melangkah lebih jauh dari sekadar dasbor dasar. Model deep learning dan pipeline data kustom kami dibangun khusus untuk beradaptasi dengan logika bisnis dan ekosistem industri unik Anda.',
    challenge:
      'Informasi korporat yang terjebak di dalam basis data yang terputus membuat kepemimpinan menghadapi laporan yang terlambat, titik buta operasional, dan keputusan yang bersifat reaktif.',
    modulesSectionTag: 'LAYANAN DATA & AI',
    modulesSectionTitle: 'Layanan Agentic AI & Machine Learning',
    modulesSectionDescription:
      'Arsitektur AI enterprise spesialis yang dirancang untuk eksekusi tugas agentic secara otonom dan manajemen data machine learning menyeluruh.',
    challengeCards: [
      {
        number: '01',
        badge: 'Manajemen Agentic AI',
        title: 'Agentic AI Management & Enterprise Assistants',
        description:
          'Agen AI percakapan otonom yang terhubung langsung ke ERP dan basis data enterprise untuk membantu tim, melakukan kueri metrik proyek real-time, dan mengeksekusi tugas operasional berbasis peran.',
        image: '/images/our-solution/projects/data-ai/agentic-ai-management.svg',
      },
      {
        number: '02',
        badge: 'Machine Learning & Data',
        title: 'Machine Learning & Enterprise Data Management',
        description:
          'Orkestrasi pipeline data menyeluruh, konsolidasi data multi-sumber, dan model machine learning prediktif untuk memproyeksikan tren serta mengoptimalkan pengambilan keputusan institusional.',
        image: '/images/our-solution/projects/data-ai/machine-learning-data-management.svg',
      },
    ],
    approach: [
      'Konsolidasi beragam informasi korporat ke dalam satu ekosistem data terpadu',
      'Penerapan model AI tingkat lanjut untuk analisis tren dan proyeksi permintaan',
      'Pembuatan wawasan bisnis otomatis dengan presisi matematis tinggi',
      'Pergudangan data enterprise yang aman dengan pipeline streaming real-time',
    ],
    outcomes: [
      'Data mentah korporat dikonversi menjadi keputusan bisnis strategis bernilai tinggi',
      'Prediksi permintaan pasar dan identifikasi tren yang akurat',
      'Wawasan presisi otomatis yang dikirimkan langsung ke dasbor eksekutif',
      'Pengambilan keputusan operasional berbasis data yang tangkas di seluruh lini bisnis',
    ],
    partnerIntegration: {
      partnerName: 'Artic Analytica',
      heading: 'Kolaborasi dengan Artic Analytica',
      logo: '/images/client-logos/artic-analytica.png',
      text: 'Artic Analytica merupakan salah satu portofolio klien utama kami. Sebagai mitra teknologi tepercaya mereka, kami berkolaborasi secara ekstensif dalam manajemen data enterprise, arsitektur pipeline AI tingkat lanjut, dan pemodelan intelijen prediktif untuk mendukung riset berbasis data serta pengambilan keputusan strategis institusional mereka.',
    },
    integration: [
      'Pipeline streaming real-time yang menghubungkan ERP, CRM, dan basis data cloud',
      'Algoritma prediktif berbasis AI untuk proyeksi permintaan & tren pasar',
      'Pengiriman wawasan eksekutif otomatis dan peringatan anomali',
      'Keamanan kelas enterprise serta kepatuhan tata kelola data yang ketat',
    ],
    whoItIsFor: [
      'Perusahaan dengan data korporat multi-sumber yang membutuhkan intelijen terpadu',
      'Pemimpin eksekutif yang memerlukan wawasan pasar otomatis dan presisi',
      'Perusahaan yang ingin mengubah data historis menjadi strategi AI proaktif',
    ],
    ctaPrimary: 'Jelajahi Solusi AI Kami',
    ctaSecondary: 'Minta Demo Data',
    seoTitle: 'Integrasi Data & AI — Ubah Data Mentah Menjadi Keputusan Strategis',
  },
  'smart-iot-system': {
    title: 'Smart IOT System',
    shortTitle: 'Smart IOT System',
    heroHeadline: 'Hubungkan Perangkat Fisik untuk Otomasi Operasional yang Lebih Cerdas',
    description:
      'Pantau, kendalikan, dan otomatiskan aset fisik dari jarak jauh dengan telemetri sensor real-time serta keamanan kelas industri.',
    whatItIs:
      'Layanan integrasi IoT menyeluruh yang dirancang untuk menjembatani perangkat keras fisik dengan perangkat lunak enterprise, memungkinkan telemetri real-time, pemantauan jarak jauh, dan kendali aset otomatis.',
    whatServiceTitle: 'Ekosistem Operasional IoT Terhubung',
    valuePropTitle: 'Otomasi sistem berstandar tinggi',
    valuePropDescription:
      'Kami tidak menggunakan perangkat plug-and-play generik. Setiap arsitektur perangkat disesuaikan secara aman dengan infrastruktur fisik, protokol keamanan, dan kebutuhan operasional Anda.',
    challenge:
      'Perangkat fisik dan aset operasional jarak jauh yang beroperasi tanpa konektivitas real-time mengakibatkan kerusakan peralatan tak terduga, keterlambatan pemeliharaan, dan kerentanan keamanan.',
    modulesSectionTag: 'LAYANAN SMART IOT',
    modulesSectionTitle: 'Layanan Inti IoT Enterprise & Otomasi',
    modulesSectionDescription:
      'Solusi IoT kelas enterprise yang menjembatani peralatan fisik dengan platform digital melalui edge computing industri, jaringan sensor fasilitas, dan telemetri aset jarak jauh.',
    challengeCards: [
      {
        number: '01',
        badge: 'Otomasi Industri',
        title: 'Industrial Automation & Edge Computing',
        description:
          'Menghubungkan mesin pabrik, PLC industri, dan edge gateway untuk mengotomatiskan alur kerja manufaktur, memantau status peralatan secara real-time, dan mencegah downtime tak terencana.',
        image: '/images/our-solution/projects/iot/industrial-automation-edge.svg',
      },
      {
        number: '02',
        badge: 'Fasilitas & Energi',
        title: 'Smart Facility & Energy Management',
        description:
          'Telemetri lingkungan multi-sensor, pelacakan konsumsi daya dan energi otomatis, pemantauan iklim ruangan, serta kepatuhan keselamatan fasilitas digital.',
        image: '/images/our-solution/projects/iot/smart-facility-energy.svg',
      },
      {
        number: '03',
        badge: 'Pelacakan Armada GPS',
        title: 'Connected Asset & Fleet Telemetry',
        description:
          'Pelacakan kendaraan GPS real-time yang didukung oleh MyBOS, telemetri armada berkelanjutan, diagnostik mesin, deteksi kebocoran bahan bakar, dan peringatan geofencing instan.',
        image: '/images/our-solution/projects/iot/mybos-fleet-tracking.svg',
      },
    ],
    approach: [
      'Penerapan sensor smart IoT dan gateway perangkat keras terhubung',
      'Pemantauan jarak jauh berkelanjutan, kendali, dan pelacakan telemetri perangkat fisik',
      'Peringatan ambang batas otomatis dan alur kerja operasional berbasis sensor',
      'Integrasi otomasi industri yang direkayasa bersama Kaluna Technology',
    ],
    outcomes: [
      'Koneksi mulus antara perangkat fisik dan ekosistem operasi digital',
      'Peningkatan efisiensi operasional dan alur kerja otomatis yang lebih cerdas',
      'Peningkatan keamanan infrastruktur melalui pemantauan berbasis sensor 24/7',
      'Pengurangan signifikan pada downtime peralatan tak terduga dan biaya pemeliharaan',
    ],
    partnerIntegration: {
      partnerName: 'Kaluna Technology',
      logo: '/images/our-business/kaluna-technology/logo.svg',
      text: 'Didukung oleh keahlian Kaluna Technology, penyedia layanan IoT dan sistem perangkat terintegrasi tepercaya untuk mewujudkan otomasi industri generasi terbaru.',
    },
    integration: [
      'Didukung oleh keahlian Kaluna Technology',
      'PLC industri, sensor telemetri, GPS, dan mikrokontroler edge IoT kustom',
      'Streaming data cloud MQTT yang sangat andal dan berlatensi rendah',
      'Integrasi langsung dengan sistem manajemen enterprise & pusat komando pengiriman',
    ],
    whoItIsFor: [
      'Perusahaan industri, logistik, armada transportasi, dan manufaktur',
      'Fasilitas yang mengelola mesin terdistribusi dan infrastruktur fisik',
      'Organisasi yang membutuhkan kendali perangkat jarak jauh, pemantauan, dan otomasi cerdas',
    ],
    ctaPrimary: 'Konsultasikan Proyek IoT Anda',
    ctaSecondary: 'Mulai Otomasi Cerdas',
    seoTitle: 'Sistem Smart IoT — Hubungkan Perangkat Fisik ke Otomasi Digital',
  },
  'digital-development': {
    title: 'Digital Development',
    shortTitle: 'Digital Development',
    heroHeadline: 'Bangun website dan aplikasi web berkinerja tinggi',
    description:
      'Direkayasa untuk UX unggul, performa sangat cepat, dan keamanan kelas enterprise guna mempercepat konversi serta pertumbuhan digital.',
    whatItIs:
      'Rekayasa web modern siklus penuh yang berfokus pada pembangunan platform digital dinamis, responsif, dan selaras dengan identitas brand melalui manajemen konten intuitif serta keunggulan SEO teknis.',
    whatServiceTitle: 'Arsitektur Web Dinamis, Responsif & Berorientasi SEO',
    valuePropTitle: 'Lebih dari sekedar template',
    valuePropDescription:
      'Kami menolak penggunaan template instan yang seragam. Setiap platform digital dikodekan secara khusus dari awal untuk menjamin performa optimal, keamanan tangguh, dan keselarasan identitas brand.',
    challenge:
      'Situs web yang lambat, kaku, atau usang menurunkan kepercayaan pengguna, rentan terhadap risiko keamanan, dan gagal mengubah pengunjung menjadi pelanggan setia di lanskap digital yang kompetitif.',
    modulesSectionTag: 'LAYANAN APLIKASI DIGITAL',
    modulesSectionTitle: 'Pengembangan Web Modern & Platform Digital',
    modulesSectionDescription:
      'Platform web dinamis, responsif, dan teroptimasi SEO yang dirancang untuk menampilkan identitas brand kontemporer dengan manajemen konten enterprise yang mulus.',
    challengeCards: [
      {
        number: '01',
        badge: 'Web Dinamis & Responsif',
        title: 'Dynamic & Responsive Web Engineering',
        description:
          'Membangun situs web cepat, adaptif, dan responsif di perangkat mobile yang menyesuaikan dengan mulus di setiap ukuran layar, didukung oleh framework modern dengan kapabilitas interaktif real-time.',
        image: '/images/our-solution/projects/digital/dynamic-responsive-web.svg',
      },
      {
        number: '02',
        badge: 'Manajemen Konten',
        title: 'Enterprise Content Management & CMS',
        description:
          'Arsitektur headless CMS intuitif dan alur kerja publikasi yang memberikan tim korporat kendali mudah atas konten digital, pembaruan instan, serta publikasi multi-saluran.',
        image: '/images/our-solution/projects/digital/enterprise-content-cms.svg',
      },
      {
        number: '03',
        badge: 'Identitas Brand & UX',
        title: 'Modern Brand Identity & UI/UX Design',
        description:
          'Estetika visual kontemporer yang dirancang untuk mencerminkan identitas korporat Anda, menciptakan penceritaan digital yang imersif, elemen interaktif menarik, dan perjalanan pengguna berkonversi tinggi.',
        image: '/images/our-solution/projects/digital/modern-brand-identity.svg',
      },
      {
        number: '04',
        badge: 'SEO & Performa',
        title: 'Advanced SEO Engineering & Optimization',
        description:
          'Optimasi mesin pencari teknis, struktur HTML semantik, schema markup, dan optimasi Core Web Vitals yang dirancang untuk mencapai peringkat teratas pencarian dan visibilitas organik.',
        image: '/images/our-solution/projects/digital/advanced-seo-engineering.svg',
      },
      {
        number: '05',
        badge: 'Aplikasi Web Kustom',
        title: 'Custom Web Applications & Portal Systems',
        description:
          'Aplikasi web enterprise yang disesuaikan dengan pemfilteran interaktif kompleks, autentikasi aman, serta integrasi API pihak ketiga dan basis data yang mulus.',
        image: '/images/our-solution/projects/digital/custom-web-applications.svg',
      },
    ],
    approach: [
      'Rekayasa web modern yang dioptimalkan untuk kecepatan muat sangat tinggi dan UX responsif',
      'Halaman arahan (landing page) berkonversi tinggi dan aplikasi web enterprise kustom',
      'Standar keamanan ketat, enkripsi data, dan arsitektur cloud yang tangguh',
      'Digitalisasi brand dan optimasi konversi melalui kemitraan dengan Web2Up',
    ],
    outcomes: [
      'Kehadiran digital yang kuat dan berkonversi tinggi di seluruh perangkat dan platform',
      'UX unggul dan kecepatan halaman ekstra cepat yang meningkatkan peringkat pencarian serta interaksi',
      'Keamanan sistem kelas enterprise yang tangguh serta perlindungan integritas data',
      'Pertumbuhan brand yang lebih cepat dan kinerja konversi bisnis yang terukur',
    ],
    partnerIntegration: {
      partnerName: 'Web2Up',
      logo: '/images/partners/web2up.svg',
      text: 'Bermitra dengan Web2Up, spesialis digitalisasi bisnis dan brand melalui pengembangan situs web serta WebApp modern dan fungsional yang dirancang untuk mendorong konversi.',
    },
    integration: [
      'Bermitra dengan spesialis digitalisasi brand Web2Up',
      'Infrastruktur cloud serverless, Next.js, dan React modern',
      'Landing page berkonversi tinggi dan aplikasi web korporat responsif',
      'Integrasi API mulus dengan payment gateway, CRM, dan perangkat analitik',
    ],
    whoItIsFor: [
      'Bisnis yang membutuhkan situs web dan landing page modern berkonversi tinggi',
      'Perusahaan yang mencari aplikasi berbasis web yang kompleks, aman, dan responsif',
      'Brand yang ingin mempercepat pertumbuhan digital melalui kecepatan, UX, dan keamanan',
    ],
    ctaPrimary: 'Bangun Situs Web Anda Sekarang',
    ctaSecondary: 'Mulai Proyek Digital Anda',
    seoTitle: 'Pengembangan Digital — Situs Web & Aplikasi Web Berkinerja Tinggi',
  },
};

export function getLocalizedOurSolutionData(locale: Locale) {
  if (locale === 'en') {
    return {
      challenge: OUR_SOLUTION_CHALLENGE,
      challengeIntro: OUR_SOLUTION_CHALLENGE,
      challenges: OUR_SOLUTION_CHALLENGES,
      coreSolutions: CORE_SOLUTIONS,
      services: SOLUTION_SERVICES,
    };
  }

  return {
    challenge: OUR_SOLUTION_CHALLENGE_ID,
    challengeIntro: OUR_SOLUTION_CHALLENGE_ID,
    challenges: OUR_SOLUTION_CHALLENGES_ID,
    coreSolutions: CORE_SOLUTIONS.map((item) => ({
      ...item,
      ...(CORE_SOLUTIONS_ID_MAP[item.slug] || {}),
    })),
    services: SOLUTION_SERVICES.map((service) => {
      const trans = SOLUTION_SERVICES_ID_MAP[service.slug];
      if (!trans) return service;
      return {
        ...service,
        ...trans,
        partnerIntegration: trans.partnerIntegration
          ? { ...service.partnerIntegration, ...trans.partnerIntegration }
          : service.partnerIntegration,
      };
    }),
  };
}

export function getLocalizedSolutionService(
  slug: string,
  locale: Locale
): SolutionService | undefined {
  const base = getSolutionService(slug);
  if (!base || locale === 'en') return base;
  const trans = SOLUTION_SERVICES_ID_MAP[base.slug];
  if (!trans) return base;
  return {
    ...base,
    ...trans,
    partnerIntegration: trans.partnerIntegration
      ? { ...base.partnerIntegration, ...trans.partnerIntegration }
      : base.partnerIntegration,
  };
}

// ============================================================================
// 3. SERVICE CARD DETAILS MODAL (ServiceCardDetail)
// ============================================================================
const SERVICE_CARD_DETAIL_ID_MAP: Record<string, Partial<ServiceCardDetail>> = {
  'Financial Accounting & Consolidation': {
    category: 'Solusi Enterprise',
    paragraphs: [
      'Financial Accounting & Consolidation menghadirkan arsitektur buku besar kelas institusional yang dirancang bagi korporasi multi-entitas. Dengan menyinkronkan transaksi, akun multi-mata uang, dan penyelesaian antar-perusahaan ke dalam satu jejak audit yang tidak dapat diubah, pemimpin keuangan memperoleh visibilitas kas instan tanpa harus menunggu siklus rekonsiliasi manual bulanan.',
      'Mesin kami mengintegrasikan pengakuan pendapatan otomatis, harmonisasi mutasi bank, matriks persetujuan utang usaha (AP), dan pelaporan pajak otomatis. Alokasi biaya real-time menghubungkan setiap transaksi langsung ke proyek operasional, perintah kerja, dan anggaran departemen terkait—menghilangkan kebocoran anggaran serta penyesuaian jurnal retroaktif.',
      'Direkayasa untuk kepatuhan ketat terhadap standar akuntansi IFRS maupun PSAK, platform ini dilengkapi pencatatan audit kriptografis berbasis peran, penilaian kesehatan keuangan berkelanjutan, serta proyeksi arus kas eksekutif yang memberdayakan pimpinan dalam mengambil keputusan alokasi modal secara proaktif.',
    ],
    capabilities: [
      'Konsolidasi buku besar multi-entitas otomatis dan penyeimbangan antar-perusahaan',
      'Alur kerja AP/AR otomatis dengan ambang batas persetujuan berlapis',
      'Telemetri laju arus kas real-time dan pemodelan serapan anggaran',
      'Pelaporan kepatuhan pajak regulasi ketat dan jejak audit yang tidak dapat diubah',
    ],
    previews: [
      {
        title: 'Sinkronisasi Buku Besar Real-Time',
        desc: 'Sinkronisasi transaksi instan di seluruh divisi dan rekening cabang.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Mesin Laju Arus Kas',
        desc: 'Pengakuan pendapatan otomatis dengan alokasi biaya berbasis proyek.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Pusat Kepatuhan & Audit',
        desc: 'Tata kelola akses berbasis peran dengan pembuatan laporan pajak otomatis.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'HR Management & Automated Payroll': {
    category: 'Solusi Enterprise',
    paragraphs: [
      'HR Management & Automated Payroll memusatkan seluruh siklus hidup modal manusia Anda ke dalam satu inti digital terpadu. Mulai dari sinkronisasi kehadiran biometrik dan penjadwalan shift fleksibel hingga pemotongan pajak (PPh 21/BPJS) serta pencairan bank langsung, setiap data karyawan tetap tersinkronisasi tanpa intervensi manual.',
      'Portal mandiri karyawan memberdayakan staf untuk mengelola pengajuan cuti, klaim reimbursement, dan meninjau slip gaji langsung dari perangkat mobile, sementara pimpinan HR mendapatkan pelacakan KPI otomatis, analitik retensi talenta, dan pemodelan biaya jumlah personel per departemen.',
      'Tata kelola regulasi bawaan menjamin bahwa perubahan aturan ketenagakerjaan, perhitungan lembur, dan potongan tunjangan wajib diperbarui secara otomatis di setiap siklus penggajian, melindungi organisasi dari risiko ketidakpatuhan dan selisih audit.',
    ],
    capabilities: [
      'Perhitungan gaji kotor-ke-bersih otomatis dengan logika BPJS dan PPh 21',
      'Sinkronisasi kehadiran multi-shift berbasis biometrik dan geofencing GPS',
      'Portal mandiri karyawan untuk cuti, klaim, dan slip gaji elektronik',
      'Pemodelan retensi talenta, evaluasi KPI, dan bagan struktur organisasi',
    ],
    previews: [
      {
        title: 'Mesin Penggajian Otomatis',
        desc: 'Pencairan gaji satu klik dengan potongan pajak dan tunjangan sesuai regulasi.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Telemetri Kehadiran & Shift',
        desc: 'Sinkronisasi real-time di seluruh kantor cabang dan tim jarak jauh.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Catatan Siklus Hidup Personel',
        desc: 'Arsip karyawan terpusat lengkap dengan metrik penilaian kinerja.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Project Management & Governance': {
    category: 'Solusi Enterprise',
    paragraphs: [
      'Project Management & Governance menjembatani kesenjangan antara milestone operasional lapangan dan pelacakan keuangan eksekutif. Dengan menstrukturkan hasil kerja kompleks ke dalam papan sprint tersinkronisasi, lini masa Gantt, dan ketergantungan jalur kritis, tim menjaga akuntabilitas penuh di seluruh divisi terdistribusi.',
      'Setiap milestone proyek terhubung langsung ke kapasitas sumber daya, pesanan pembelian vendor, dan catatan jam kerja tertagih. Koneksi dua arah ini memastikan bahwa keterlambatan operasional memicu peringatan otomatis ke bagian keuangan dan pengadaan sebelum penyimpangan anggaran memengaruhi margin laba.',
      'Dasbor eksekutif memberikan visibilitas tingkat portofolio dengan Earned Value Management (EVM) real-time, pelacakan varians milestone, dan daftar periksa verifikasi hasil kerja yang memastikan kepatuhan kontrak secara ketat.',
    ],
    capabilities: [
      'Earned Value Management (EVM) real-time dan pelacakan biaya per milestone',
      'Alokasi sumber daya otomatis, penyeimbangan beban kerja, dan pencatatan timesheet',
      'Sinkronisasi dua arah antara tiket teknis dan pesanan pengadaan (PO)',
      'Penilaian risiko portofolio eksekutif dan peringatan hambatan delivery otomatis',
    ],
    previews: [
      {
        title: 'Pelacakan Varians Milestone',
        desc: 'Pemantauan langsung jadwal pengerjaan dan ketergantungan jalur kritis.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Perencana Kapasitas Sumber Daya',
        desc: 'Penyeimbangan beban kerja dan utilisasi jam kerja di seluruh tim.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Dasbor Kesehatan Portofolio',
        desc: 'Pengawasan eksekutif atas kontrak multi-entitas aktif dan serapan anggaran.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Inventory & Supply Chain Management': {
    category: 'Solusi Enterprise',
    paragraphs: [
      'Inventory & Supply Chain Management menyinkronkan tingkat stok multi-gudang, pipeline pengadaan barang masuk, dan alur kerja pemenuhan pesanan keluar ke dalam satu ekosistem inventaris terpadu. Pelacakan barcode dan batch memastikan keterlacakan penuh dari pengiriman pemasok hingga serah terima pelanggan.',
      'Algoritma titik pemesanan ulang (reorder-point) dinamis mengevaluasi waktu tunggu, kecepatan konsumsi, dan fluktuasi permintaan musiman untuk menghasilkan permintaan pembelian secara otomatis. Hal ini menghilangkan kehabisan stok material penting sekaligus mencegah modal kerja mengendap di gudang.',
      'Kartu skor vendor terintegrasi melacak ketepatan waktu pemenuhan pemasok, konsistensi harga, dan rasio cacat, memberikan data kuantitatif yang dibutuhkan direktur pengadaan untuk menegosiasikan kontrak terbaik.',
    ],
    capabilities: [
      'Penyeimbangan gudang multi-lokasi dan sinkronisasi buku besar inventaris real-time',
      'Perhitungan stok pengaman prediktif dan pemicu pengisian ulang otomatis',
      'Keterlacakan nomor batch dan seri dengan pemantauan kedaluwarsa FIFO/FEFO',
      'Analitik kinerja pemasok dan matriks permintaan pembelian otomatis',
    ],
    previews: [
      {
        title: 'Buku Besar Inventaris Multi-Gudang',
        desc: 'Pemantauan tingkat stok real-time di seluruh lokasi depot terdistribusi.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Mesin Pengisian Ulang Otomatis',
        desc: 'Pesanan pembelian algoritmik berdasarkan laju konsumsi aktual.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Skor Kualitas & Lead Time Pemasok',
        desc: 'Evaluasi vendor kuantitatif dan audit status pesanan pembelian.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Sales Pipeline & CRM Automation': {
    category: 'Solusi Enterprise',
    paragraphs: [
      'Sales Pipeline & CRM Automation mengubah pelacakan prospek yang terfragmentasi menjadi mesin pendapatan berkonversi tinggi yang terukur. Mulai dari kontak pertama hingga pembuatan proposal, penandatanganan kontrak, dan serah terima pasca-penjualan, setiap peluang dipantau melalui funnel tahapan visual.',
      'Urutan tugas otomatis mengingatkan tim komersial tentang jadwal tindak lanjut, masa berlaku penawaran, dan jendela pembaruan kontrak. Integrasi dengan Marka ERP memastikan bahwa saat kesepakatan ditutup, pesanan penjualan dan jadwal faktur langsung dibuat di buku besar keuangan tanpa entri data ganda.',
      'Dasbor intelijen penjualan menyeluruh menyediakan analisis rasio menang/kalah yang terperinci, tolok ukur aktivitas tim sales, dan proyeksi pendapatan tertimbang bagi jajaran kepemimpinan.',
    ],
    capabilities: [
      'Manajemen tahapan kesepakatan visual dengan pengingat tugas otomatis dan SLA',
      'Konversi instan dari penawaran harga (quotation) menjadi pesanan penjualan di keuangan',
      'Arsip Pelanggan 360 yang memuat interaksi, kontrak, dan riwayat pembayaran',
      'Proyeksi pendapatan tertimbang dan pelacakan target kuota eksekutif penjualan',
    ],
    previews: [
      {
        title: 'Funnel Kesepakatan Bertahap',
        desc: 'Pipeline interaktif dengan metrik pendapatan tertimbang berdasarkan probabilitas.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Jembatan Penawaran ke Pesanan',
        desc: 'Konversi mulus dari kesepakatan penjualan ke penagihan dan faktur ERP.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Intelijen Pelanggan 360',
        desc: 'Riwayat akun terpadu, kontrak, status tiket, dan nilai siklus hidup klien.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Agentic AI Management & Enterprise Assistants': {
    category: 'Integrasi Data & AI',
    paragraphs: [
      'Agentic AI Management & Enterprise Assistants menjembatani basis data enterprise tradisional dengan agen AI percakapan otonom mutakhir. Dibangun di atas arsitektur LLM lokal maupun cloud yang aman, agen ini terhubung langsung ke ERP, CRM, dan repositori internal untuk membantu karyawan dengan jawaban kontekstual serta eksekusi alur kerja.',
      'Berbeda dengan chatbot generik, model agentic kami memiliki kapabilitas penggunaan alat (tool-use): mampu memverifikasi penyelesaian milestone proyek, memeriksa tingkat stok gudang, memicu alur kerja persetujuan, dan menyusun ringkasan keuangan kustom—dengan tetap mematuhi kontrol akses berbasis peran (RBAC) secara ketat.',
      'Keamanan enterprise diprioritaskan melalui pengikatan konteks privat, nol retensi data pada model publik, dan firewall prompt ujung-ke-ujung yang melindungi rahasia dagang korporasi serta privasi pelanggan.',
    ],
    capabilities: [
      'Agen otonom yang mampu melakukan kueri basis data dan memicu tindakan sistem',
      'Kontrol akses berbasis peran (RBAC) yang memastikan staf hanya mengakses data resmi',
      'Penerapan model enterprise privat tanpa retensi data dengan perlindungan prompt firewall',
      'Retrieval-Augmented Generation (RAG) kontekstual atas SOP perusahaan dan catatan ERP',
    ],
    previews: [
      {
        title: 'Asisten ERP Percakapan',
        desc: 'Kueri bahasa alami atas tugas operasional, tiket, dan biaya proyek.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Tindakan Agen Berbasis Peran',
        desc: 'Eksekusi alur kerja sistem yang aman dengan pemeriksaan otorisasi ganda.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'RAG Kontekstual Privat',
        desc: 'Pencarian berkecepatan tinggi dari dokumentasi perusahaan dan buku besar internal.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Machine Learning & Enterprise Data Management': {
    category: 'Integrasi Data & AI',
    paragraphs: [
      'Machine Learning & Enterprise Data Management mengubah jutaan titik data operasional yang tersebar menjadi data lake terpadu dan intelijen prediktif berpresisi tinggi. Kami merancang pipeline streaming ETL/ELT tangguh yang mengekstrak, membersihkan, dan menormalisasi data dari basis data lama, platform cloud, dan sensor IoT.',
      'Model machine learning kustom kami dilatih menggunakan kumpulan data historis spesifik domain untuk memproyeksikan permintaan pasar, mendeteksi anomali transaksi, memprediksi churn pelanggan, dan mengoptimalkan alokasi sumber daya dengan akurasi statistik yang terukur.',
      'Terintegrasi dengan dasbor BI eksekutif, platform ini mengubah pelaporan retrospektif menjadi strategi proaktif. Pengambil keputusan menerima rekomendasi preskriptif dan simulasi skenario otomatis yang meminimalkan risiko langkah strategis besar.',
    ],
    capabilities: [
      'Pipeline ETL/ELT real-time berkapasitas tinggi dan desain data lakehouse terpadu',
      'Model machine learning prediktif kustom untuk proyeksi permintaan dan deteksi anomali',
      'Penilaian kualitas data otomatis, deduplikasi, dan validasi skema',
      'Mesin simulasi skenario preskriptif yang terintegrasi ke dalam dasbor BI eksekutif',
    ],
    previews: [
      {
        title: 'Data Lakehouse Terpadu',
        desc: 'Ingesti dan normalisasi berkelanjutan dari berbagai sumber data korporat.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Model Proyeksi Prediktif',
        desc: 'Kurva permintaan machine learning dengan pemodelan interval kepercayaan.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Telemetri Anomali & Tren',
        desc: 'Peringatan eksekutif otomatis atas deviasi operasional dan pergeseran pasar.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Industrial Automation & Edge Computing': {
    category: 'Sistem Smart IoT',
    paragraphs: [
      'Industrial Automation & Edge Computing menjembatani mesin fisik di lantai pabrik dengan backend perangkat lunak enterprise. Dengan menerapkan mikrokontroler edge tangguh dan jembatan gateway PLC, lantai produksi mencapai ingesti telemetri sub-detik serta kontrol pengawasan otomatis.',
      'Node edge computing memproses pembacaan sensor berfrekuensi tinggi secara lokal, mengeksekusi interlock keselamatan, pengaturan kecepatan lini produksi, dan pemeriksaan ambang getaran dengan latensi mendekati nol—bahkan saat konektivitas cloud terputus sementara.',
      'Metrik operasional yang terkumpul disinkronkan secara mulus dengan perintah kerja Marka ERP, secara otomatis merekonsiliasi konsumsi bahan baku terhadap unit barang jadi dan menandai downtime mesin untuk pemeliharaan prediktif.',
    ],
    capabilities: [
      'Integrasi gateway PLC industri dan Modbus/CAN bus dengan pengambilan data sub-detik',
      'Interlock keselamatan berbasis edge dan eksekusi logika yang tahan kondisi offline',
      'Rekonsiliasi perintah kerja otomatis antara sensor lantai produksi dan ERP',
      'Algoritma pemeliharaan peralatan prediktif yang mendeteksi anomali getaran motor',
    ],
    previews: [
      {
        title: 'Telemetri Edge Gateway',
        desc: 'Ingesti sensor sub-detik dan interlock perangkat keras otomatis secara lokal.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Pelacakan OEE Lantai Produksi',
        desc: 'Perhitungan Overall Equipment Effectiveness langsung di seluruh lini produksi.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Peringatan Pemeliharaan Prediktif',
        desc: 'Sinyal peringatan dini atas pergeseran termal, tekanan, dan mekanis.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Smart Facility & Energy Management': {
    category: 'Sistem Smart IoT',
    paragraphs: [
      'Smart Facility & Energy Management mengubah gedung komersial, kawasan terpadu, dan pabrik industri menjadi lingkungan otomatis yang hemat energi. Sensor lingkungan terintegrasi memantau konsumsi daya, beban HVAC, suhu, kelembapan, dan tingkat hunian secara real-time.',
      'Algoritma penjadwalan cerdas secara dinamis mengatur pencahayaan dan kendali iklim berdasarkan tarif listrik beban puncak, prakiraan cuaca real-time, serta pola penggunaan ruangan, menurunkan biaya operasional fasilitas secara keseluruhan hingga 28%.',
      'Ambang batas peringatan otomatis memberi tahu manajer fasilitas tentang lonjakan energi tidak normal, kebocoran air, atau beban berlebih kompresor HVAC sebelum kerusakan terjadi, lengkap dengan pelaporan jejak karbon kepatuhan ESG.',
    ],
    capabilities: [
      'Sub-metering real-time pada sirkuit kelistrikan, unit HVAC, dan saluran air utama',
      'Modulasi pencahayaan dan lingkungan HVAC otomatis berbasis tingkat hunian',
      'Manajemen tarif beban puncak dan logika pelepasan beban (load shedding) otomatis',
      'Telemetri emisi karbon ESG siap audit dan laporan keberlanjutan bulanan',
    ],
    previews: [
      {
        title: 'Peta Panas Beban Fasilitas',
        desc: 'Visualisasi parameter energi dan lingkungan spasial secara real-time.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Pengaturan Beban Otomatis',
        desc: 'Penjadwalan dinamis untuk menghindari tarif utilitas jam puncak yang mahal.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Laporan ESG & Karbon',
        desc: 'Perhitungan protokol gas rumah kaca otomatis dan catatan kepatuhan.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Connected Asset & Fleet Telemetry': {
    category: 'Sistem Smart IoT',
    paragraphs: [
      'Didukung oleh pelacakan IoT MyBOS, Connected Asset & Fleet Telemetry menghadirkan penentuan posisi GPS real-time berkelanjutan dan pengawasan telematika untuk aset logistik bergerak, alat berat, serta armada kendaraan komersial. Memanfaatkan GNSS multi-konstelasi, telemetri OBD-II, dan modul seluler/LoRaWAN, kendaraan mengirimkan lokasi, kecepatan, konsumsi bahan bakar, dan kode diagnostik langsung ke dasbor terpadu.',
      'Geofencing cerdas memicu notifikasi pengiriman otomatis saat kendaraan memasuki atau meninggalkan pusat logistik, sementara algoritma perilaku pengemudi menganalisis pengereman mendadak, mesin menyala diam (idling) berlebih, dan batas kecepatan untuk menjaga keselamatan armada.',
      'Integrasi langsung dengan modul pengiriman rantai pasok memberikan estimasi waktu tiba (ETA) yang akurat bagi klien, konfirmasi pengiriman instan, dan penjadwalan servis otomatis berdasarkan jam kerja mesin.',
    ],
    capabilities: [
      'Pelacakan GPS real-time presisi tinggi dengan konektivitas cadangan seluler dan LoRaWAN',
      'Diagnostik mesin OBD-II, deteksi pencurian bahan bakar otomatis, dan pencatatan waktu idle',
      'Geofencing dinamis dengan peringatan keberangkatan/kedatangan logistik otomatis',
      'Penjadwalan pemeliharaan armada berbasis kondisi yang dihitung dari jam jalan mesin',
    ],
    previews: [
      {
        title: 'Peta Pelacakan Armada Langsung',
        desc: 'Penentuan posisi kendaraan real-time dengan lapisan rute sadar lalu lintas.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Telemetri BBM & Mesin',
        desc: 'Kode diagnostik mesin dengan peringatan selisih level bahan bakar otomatis.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Otomasi Pengiriman Geofence',
        desc: 'Pencatatan masuk gerbang otomatis dan log penyelesaian pengiriman.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Dynamic & Responsive Web Engineering': {
    category: 'Pengembangan Digital',
    paragraphs: [
      'Dynamic & Responsive Web Engineering merancang platform web digital kustom yang direkayasa untuk responsivitas sangat cepat, keanggunan arsitektur, dan tampilan sempurna di setiap perangkat maupun dimensi layar.',
      'Memanfaatkan arsitektur headless modern, caching SSR di edge, dan sistem desain atomik, situs web kami mencapai waktu muat sub-detik serta skor Core Web Vitals 100/100. Animasi halus dan interaksi mikro yang responsif memikat pengunjung tanpa mengorbankan kecepatan halaman.',
      'Setiap pengalaman web dibangun dengan keamanan kelas enterprise, kepatuhan aksesibilitas ketat (WCAG 2.1), dan orkestrasi API tangguh yang terintegrasi mulus dengan CRM, payment gateway, serta sistem inventaris backend Anda.',
    ],
    capabilities: [
      'Rekayasa web responsif adaptif yang dioptimalkan untuk layar mobile, tablet, dan desktop',
      'Arsitektur edge caching sub-detik yang mencapai performa puncak Core Web Vitals',
      'Sistem desain komponen atomik yang memastikan konsistensi visual brand di seluruh halaman',
      'Orkestrasi API enterprise yang menghubungkan frontend web ke CRM dan payment gateway',
    ],
    previews: [
      {
        title: 'Mesin Viewport Responsif',
        desc: 'Rendering presisi piksel di layar mobile dan desktop berdensitas tinggi.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Optimasi Core Web Vitals',
        desc: 'Largest Contentful Paint (LCP) sub-detik dan nol pergeseran tata letak (CLS).',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Integrasi API Headless',
        desc: 'Sinkronisasi dua arah dengan backend CRM, pemasaran, dan katalog produk.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Enterprise Content Management & CMS': {
    category: 'Pengembangan Digital',
    paragraphs: [
      'Enterprise Content Management & CMS membebaskan tim pemasaran dan editorial dari ketergantungan pada developer. Kami membangun lingkungan headless CMS visual yang intuitif sehingga tim non-teknis dapat menerbitkan halaman, mengelola multimedia, dan menjalankan kampanye secara mandiri.',
      'Alur kerja publikasi berbasis peran yang terperinci memastikan setiap konten melewati tinjauan sejawat dan persetujuan hukum sebelum tayang. Dukungan lokalisasi multibahasa memungkinkan perusahaan mengelola konten terlokalisasi untuk pasar domestik maupun global dari satu pusat administrasi.',
      'Di balik layar, pipeline optimasi aset otomatis mengubah media resolusi tinggi menjadi format AVIF/WebP generasi terbaru dan mendistribusikannya melalui CDN global, menjamin waktu muat cepat untuk portal korporat berskala besar.',
    ],
    capabilities: [
      'Penyusun blok visual yang disesuaikan dengan sistem desain unik korporasi Anda',
      'Tata kelola publikasi bertahap dengan alur persetujuan editorial berbasis peran',
      'Pusat sinkronisasi terjemahan dan lokalisasi multi-bahasa global',
      'Pipeline media otomatis yang mengonversi aset ke format AVIF/WebP generasi terbaru',
    ],
    previews: [
      {
        title: 'Publikasi Blok Visual',
        desc: 'Pembuatan halaman modular yang intuitif tanpa menyentuh baris kode.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Alur Persetujuan Editorial',
        desc: 'Tata kelola berlapis yang melindungi integritas brand sebelum publikasi.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'CDN Media Otomatis',
        desc: 'Optimasi gambar responsif generasi terbaru dengan distribusi aset edge.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Modern Brand Identity & UI/UX Design': {
    category: 'Pengembangan Digital',
    paragraphs: [
      'Modern Brand Identity & UI/UX Design menyatukan positioning brand strategis dengan interaksi manusia-komputer yang berfokus pada konversi. Kami merancang identitas visual kontemporer, hierarki tipografi, dan sistem desain kohesif yang mencerminkan kematangan korporasi modern.',
      'Setiap alur pengguna berakar pada empati kognitif, pengujian pengguna, dan psikologi perilaku. Kami merancang urutan orientasi bebas hambatan, pola navigasi intuitif, dan formulir yang mudah diakses guna mengubah pengunjung menjadi klien enterprise bernilai tinggi.',
      'Hasil kerja mencakup pustaka design token menyeluruh, prototipe Figma interaktif, dan dokumentasi komponen yang menyelaraskan kolaborasi antara tim desain dan engineering untuk menjamin 100% akurasi desain di tahap produksi.',
    ],
    capabilities: [
      'Sistem identitas brand korporat kontemporer, tipografi, dan token warna',
      'Prototipe Figma interaktif berfidelitas tinggi yang divalidasi melalui pengujian pengguna',
      'Arsitektur informasi teroptimasi konversi dan alur interaksi bebas hambatan',
      'Dokumentasi sistem desain menyeluruh yang menjembatani desainer dan developer',
    ],
    previews: [
      {
        title: 'Sistem Design Token',
        desc: 'Pustaka tipografi, spasi, dan hierarki warna yang terstandarisasi.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Prototipe UI Interaktif',
        desc: 'Perjalanan pengguna tervalidasi yang diuji di berbagai kelompok pengguna.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Arsitektur Alur Konversi',
        desc: 'Formulir penangkapan prospek dan transaksi yang dirancang untuk ROI maksimal.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Advanced SEO Engineering & Optimization': {
    category: 'Pengembangan Digital',
    paragraphs: [
      'Advanced SEO Engineering & Optimization melampaui sekadar penempatan kata kunci biasa. Kami membangun fondasi SEO teknis terprogram langsung ke dalam arsitektur platform web Anda, memastikan mesin pencari merayapi, mengindeks, dan memberi peringkat konten Anda dengan otoritas tertinggi.',
      'Kami menerapkan skema terstruktur JSON-LD otomatis (Organization, Service, FAQ, BreadcrumbList, CaseStudy), peta situs XML dinamis, ping instan mesin pencari IndexNow, serta struktur semantik HTML5 yang mendominasi halaman hasil mesin pencari (SERP).',
      'Audit teknis berkelanjutan memantau tautan kanonikal, pengalihan rusak, tag hreflang, dan kemudahan penggunaan mobile, sementara pemetaan niat pencarian berbasis data memastikan pengunjung organik berniat komersial tinggi mendarat langsung di halaman konversi yang tepat.',
    ],
    capabilities: [
      'Markup skema semantik JSON-LD menyeluruh (Organization, Product, Service)',
      'Protokol pengindeksan instan IndexNow yang memberi tahu mesin pencari saat publikasi',
      'Sitemap dinamis otomatis, robots.txt, dan pemantauan integritas tautan kanonikal',
      'Pemetaan niat pencarian yang menargetkan kueri komersial berkonversi tinggi',
    ],
    previews: [
      {
        title: 'Mesin Skema Semantik',
        desc: 'Cuplikan kaya JSON-LD otomatis yang mendorong visibilitas tinggi di SERP.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Publikasi Instan IndexNow',
        desc: 'Pemicu perayapan mesin pencari segera setelah konten diterbitkan.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Audit Kesehatan SEO Teknis',
        desc: 'Pemantauan berkelanjutan atas crawl budget, canonical, dan Core Web Vitals.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
  'Custom Web Applications & Portal Systems': {
    category: 'Pengembangan Digital',
    paragraphs: [
      'Custom Web Applications & Portal Systems merekayasa perangkat lunak web kompleks berdensitas tinggi yang menggerakkan operasional bisnis spesifik. Mulai dari portal mandiri klien dan ekstranet manajemen vendor hingga mesin pemesanan kustom, kami membangun aplikasi web yang menangani alur kerja kritikal secara aman.',
      'Dibangun dengan framework full-stack modern (Next.js, TypeScript, PostgreSQL), aplikasi web kami dilengkapi autentikasi berbasis peran (RBAC), pemisahan multi-tenant, dan komunikasi WebSocket real-time untuk kolaborasi langsung serta pembaruan status instan.',
      'Dirancang untuk skalabilitas enterprise, sistem ini mencakup pemulihan bencana otomatis, pengujian integrasi ujung-ke-ujung, dan kontainerisasi cloud Docker yang menangani ribuan transaksi korporat secara andal.',
    ],
    capabilities: [
      'Portal mandiri klien kustom dan ekstranet manajemen vendor B2B yang aman',
      'Arsitektur basis data multi-tenant dengan isolasi keamanan tingkat baris yang ketat',
      'Aliran event WebSocket real-time untuk kolaborasi langsung dan telemetri',
      'Deployment kontainer Docker dengan CI/CD otomatis dan rangkaian pengujian terpadu',
    ],
    previews: [
      {
        title: 'Gerbang Portal B2B Aman',
        desc: 'Dasbor klien berbasis peran dengan pertukaran dokumen terenkripsi.',
        image: '/images/our-solution/popups/preview-1.png',
      },
      {
        title: 'Aliran Event Real-Time',
        desc: 'WebSocket berlatensi rendah yang menyinkronkan status operasional antar-pengguna.',
        image: '/images/our-solution/popups/preview-2.png',
      },
      {
        title: 'Arsitektur Keamanan Multi-Tenant',
        desc: 'Partisi data tenant terisolasi dengan kepatuhan keamanan kelas enterprise.',
        image: '/images/our-solution/popups/preview-3.png',
      },
    ],
  },
};

export function getLocalizedServiceCardDetail(
  title: string,
  categoryFallback: string,
  locale: Locale
): ServiceCardDetail {
  const base = getServiceCardDetail(title, categoryFallback);
  if (locale === 'en') return base;
  const trans = SERVICE_CARD_DETAIL_ID_MAP[title];
  if (!trans) return base;
  return {
    ...base,
    ...trans,
  };
}

// ============================================================================
// 4. CASE STUDIES (CaseStudyArticle[])
// ============================================================================
const CASE_STUDIES_ID_MAP: Record<string, Partial<CaseStudyArticle>> = {
  'mybos-fondasi-pelacakan-armada': {
    title:
      'Bagaimana MyBOS Menyiapkan Fondasi Pelacakan Armada yang Mencatat Setiap Akses dan Menolak Token Tidak Sah dalam ±7 Milidetik',
    category: 'SMART IOT SYSTEM',
    tags: [
      'PELACAKAN ARMADA',
      'SISTEM LOGISTIK',
      'AUDIT TRAIL',
      'API APLIKASI DRIVER',
      'KONTROL AKSES',
    ],
    dateLabel: 'NOVEMBER 2026',
    description:
      'Studi kasus MyBOS: fondasi platform pelacakan armada dengan akses per peran, API aman untuk aplikasi lapangan, dan jejak audit di setiap akses.',
    coverImageAlt:
      'Halaman Admin Log MyBOS menampilkan riwayat akses dengan pengguna, waktu, dan platform',
    sections: [
      {
        eyebrow: 'RINGKASAN EKSEKUTIF (AT-A-GLANCE)',
        mainTitle:
          'Fondasi Identitas, Hak Akses, dan Jejak Audit Sebelum Modul Armada',
        paragraphs: [
          'Klien & Skenario: MyBOS (Marka Logistik / BSP Tracking Web), platform pelacakan armada untuk operasional logistik. Studi kasus ini membahas tahap fondasi: identitas, hak akses, API untuk aplikasi lapangan, dan jejak audit.',
          'Fokus Masalah: Sebelum telemetri kendaraan bisa dipakai, setiap orang dan setiap aplikasi yang mengakses data armada harus punya identitas sendiri, hak yang jelas, dan jejak yang bisa ditelusuri.',
          'Solusi Produk: Web admin (Laravel 9, Vue 3, Inertia.js) dan API v1 berbasis JWT untuk aplikasi mobile, dengan manajemen peran dan izin, pembatasan laju permintaan, serta log audit terpisah untuk panel admin dan API.',
          'Durasi Implementasi: Tahap fondasi selesai dan tercatat di repositori pada 18 Mei 2024. Modul armada (kendaraan, GPS, rute, delivery order) adalah tahap berikutnya.',
        ],
        metrics: [
          {
            value: '±7 ms',
            label: 'Penolakan Token',
            detail:
              'Permintaan tanpa token (403) atau token rusak (401) ditolak dalam ±7 milidetik (Uji Lab)',
          },
          {
            value: '81 ms',
            label: 'Median Login API',
            detail:
              'Tetap di bawah 0,6 detik saat 10 klien login bersamaan (Uji Lab)',
          },
          {
            value: '94%',
            label: 'Hemat Waktu Penelusuran',
            detail:
              'Menelusuri satu kejadian akses: ±47 menit → ±2,6 menit (Simulasi)',
          },
        ],
      },
      {
        eyebrow: '1. SKENARIO MASALAH',
        mainTitle: 'Ketika Data Armada Dibuka sebelum Pintunya Dikunci',
        paragraphs: [
          'Operasional logistik melibatkan dispatcher, admin kantor, manajer, dan pengemudi di lapangan. Tanpa telemetri, kondisi mesin dan efisiensi bahan bakar armada sulit dipantau. Namun sebelum data kendaraan dan lokasi dialirkan ke sistem, ada pertanyaan yang harus dijawab lebih dulu: siapa boleh melihat apa, dan bagaimana setiap akses bisa dibuktikan.',
          'Tanpa fondasi itu, sistem pelacakan yang baru dibangun akan mewarisi kebiasaan lama: satu akun dipakai bersama tanpa akuntabilitas, perubahan hak akses tanpa jejak di percakapan chat, dan aplikasi lapangan yang tidak terhubung dengan aman.',
        ],
        subsections: [
          {
            subtitle: 'Satu Akun untuk Banyak Orang',
            content:
              'Dispatcher dan admin berbagi satu login supaya praktis. Setiap perubahan data tercatat atas nama akun yang sama. Akibatnya, saat ada data yang salah, tidak ada yang bisa menunjukkan siapa yang mengubahnya.',
          },
          {
            subtitle: 'Perubahan Hak Akses Tanpa Jejak',
            content:
              'Hak akses ditambah atau dicabut lewat permintaan di chat. Riwayatnya tersebar di percakapan. Akibatnya, penelusuran sengketa atau audit internal memakan waktu berjam-jam dan bergantung pada ingatan orang.',
          },
          {
            subtitle: 'Aplikasi Lapangan yang Tidak Terhubung dengan Aman',
            content:
              'Aplikasi pengemudi butuh jalur API sendiri, terpisah dari panel admin. Tanpa token yang kedaluwarsa dan pembatasan permintaan, satu aplikasi yang bocor kredensialnya bisa dipakai terus-menerus. Akibatnya, data armada terbuka bagi siapa pun yang memegang kredensial itu.',
          },
        ],
        image: {
          src: '/images/case-studies/mybos/workflow-comparison.png',
          alt: 'Transformasi akses dari akun bersama tanpa jejak menjadi identitas per orang dengan catatan di setiap akses',
        },
      },
      {
        eyebrow: '2. SOLUSI PRODUK',
        mainTitle:
          'Menghubungkan Panel Admin dan Aplikasi Lapangan dalam Satu Lapisan Akses yang Tercatat',
        paragraphs: [
          'MyBOS dibangun dengan urutan yang sengaja dibalik: lapisan akses dan audit diselesaikan sebelum modul armada. Alih-alih menambahkan keamanan setelah data GPS mengalir, setiap fitur berikutnya tinggal memakai identitas, peran, dan pencatatan yang sudah ada.',
          'Platform ini memisahkan dua pintu masuk: panel admin web untuk dispatcher dan manajer, dan API v1 untuk aplikasi mobile di lapangan. Keduanya dicatat di log yang terpisah.',
        ],
        subsections: [
          {
            subtitle:
              'A. API untuk Aplikasi Lapangan dengan Token dan Pembatasan Laju',
            content:
              'Saat aplikasi mobile login lewat API, sistem memeriksa email dan kata sandi lalu menerbitkan token JWT yang berlaku 60 menit (bisa di-refresh hingga 14 hari). Middleware JWT menolak permintaan tanpa token (HTTP 403) dan token rusak (HTTP 401) dalam ±7 milidetik, serta membatasi 60 permintaan per menit per pengguna atau alamat IP.',
          },
          {
            subtitle: 'B. Peran dan Izin per Pengguna',
            content:
              'Izin dikelola dengan Spatie Laravel-Permission per peran (melihat dashboard, log admin, log API, kelola pengguna & peran). Begitu izin peran diubah, perubahan langsung berlaku ke seluruh pengguna pemegang peran dan dicatat sebagai kejadian audit.',
          },
          {
            subtitle: 'C. Jejak Audit Terpisah untuk Panel Admin dan API',
            content:
              'Sistem mencatat entri audit berisi pengguna, waktu, alamat IP, user agent, URL, platform (panel admin atau API), kode status, serta isi permintaan dan respons. Entri ditampilkan di menu terpisah Admin Log dan API Log yang dapat dicari dan ditelusuri detailnya.',
          },
        ],
        image: {
          src: '/images/case-studies/mybos/token-flow.png',
          alt: 'Aplikasi lapangan masuk lewat token yang kedaluwarsa dan jalur yang dibatasi lajunya',
        },
      },
      {
        eyebrow: '3. DI BALIK LAYAR',
        mainTitle: 'Arsitektur yang Terpisah, Terbatas, dan Tercatat',
        paragraphs: [
          'Untuk memastikan modul armada nanti bisa ditambahkan tanpa membongkar lapisan akses, fondasi MyBOS dibangun di atas komponen berikut:',
          'Terpisah antara web dan mobile: panel admin memakai Laravel 9 dengan sesi web, Vue 3, Inertia.js, dan Tailwind CSS. Aplikasi mobile memakai API v1 dengan otentikasi JWT dan guard tersendiri. Kode memuat 39 rute: 28 untuk panel admin, 6 untuk API, dan 5 lainnya.',
          'Terbatas lewat peran dan laju permintaan: izin dikelola dengan Spatie Laravel-Permission, dan API dibatasi 60 permintaan per menit per pengguna atau alamat IP.',
          'Tercatat di setiap akses: jejak audit memakai Laravel-Auditing dengan resolver tambahan untuk platform (admin_dashboard vs api), isi permintaan, isi respons, serta kode status di setiap entri.',
          'Siap dipasang di mana saja: basis data bawaan SQLite dan aset frontend yang sudah dikompilasi (Vite) membuat fondasi ini bisa dijalankan di laptop tim untuk uji coba, lalu dipindahkan ke basis data server saat produksi.',
        ],
        image: {
          src: '/images/case-studies/mybos/technical-architecture.png',
          alt: 'Panel admin dan aplikasi lapangan berbagi satu lapisan akses dan audit, tempat modul armada akan dipasang',
        },
      },
      {
        eyebrow: '4. PERJALANAN IMPLEMENTASI',
        mainTitle: 'Fondasi Dulu, Armada Kemudian',
        paragraphs: [
          'Repositori yang dianalisis berisi satu tahap yang sudah selesai, yaitu fondasi platform, yang tercatat pada 18 Mei 2024. Modul armada (data kendaraan, pelacakan GPS, rute, delivery order, notifikasi ke pengemudi) disiapkan pada tahap berikutnya.',
        ],
        table: {
          caption: 'Tahapan Pengembangan MyBOS: Fondasi vs Modul Armada',
          headers: ['Tahap', 'Status', 'Keluaran', 'Cara Diuji'],
          rows: [
            [
              'Fondasi platform',
              'Selesai (18 Mei 2024)',
              'Login web dan API, reset kata sandi, manajemen pengguna dan peran, Admin Log dan API Log, pembatasan laju API',
              'Uji Lab lokal pada 6 November 2026: waktu respons, penolakan token, pembatasan laju, pencatatan audit',
            ],
            [
              'Modul armada',
              'Tahap berikutnya',
              'Data kendaraan, pelacakan GPS, rute, delivery order, notifikasi ke pengemudi',
              'Dijadwalkan pada rilis berikutnya',
            ],
          ],
        },
      },
      {
        eyebrow: '5. DAMPAK & BENCHMARK PERFORMA',
        mainTitle: 'Hasil Pengujian Kinerja dan Efisiensi Operasional',
        paragraphs: [
          'Berdasarkan uji lokal pada 6 November 2026 (server Laravel dengan 4 worker, PHP 8.3, basis data SQLite berisi data contoh), penghitungan dari kode, serta simulasi 10.000 iterasi untuk penelusuran akses, berikut hasilnya:',
        ],
        table: {
          caption: 'Tabel Benchmark Kinerja dan Verifikasi Lapangan MyBOS',
          headers: ['Indikator', 'Sebelum', 'Dengan MyBOS', 'Hasil', 'Status'],
          rows: [
            ['Penolakan permintaan tanpa token', '—', 'HTTP 403, median 7,0 ms', '25 dari 25 ditolak', 'Uji Lab'],
            ['Penolakan token rusak', '—', 'HTTP 401, median 6,5 ms', '25 dari 25 ditolak', 'Uji Lab'],
            ['Login API (berurutan)', '—', 'median 81 ms, P95 89 ms', '50 dari 50 berhasil', 'Uji Lab'],
            ['Login API (10 klien bersamaan)', '—', 'median 396 ms, maks 561 ms', '50 dari 50 berhasil', 'Uji Lab'],
            ['Pembatasan laju API', '—', '60 permintaan/menit', 'Permintaan ke-61 ditolak (429)', 'Uji Lab'],
            ['Pencatatan login API di audit log', '—', 'Setiap login tercatat', 'Platform "api" terisi', 'Uji Lab'],
            ['Menelusuri satu kejadian akses', '±47 menit (chat + riwayat pesan)', '±2,6 menit (Admin/API Log)', 'Hemat ±94%', 'Simulasi'],
          ],
        },
        image: {
          src: '/images/case-studies/mybos/response-times.png',
          alt: 'Penolakan token dan halaman login selesai dalam ±7 milidetik, sementara login tetap di bawah 0,6 detik saat 10 klien login bersamaan',
        },
        subsections: [
          {
            subtitle: 'Penolakan dalam ±7 Milidetik',
            content:
              'Middleware JWT memeriksa token sebelum permintaan menyentuh logika bisnis atau basis data. Karena itu, permintaan yang tidak sah dihentikan hampir secepat halaman statis dimuat.',
          },
          {
            subtitle: 'Login 81 Milidetik, 396 Milidetik saat Ramai',
            content:
              'Sebagian besar waktu login dipakai untuk memeriksa hash kata sandi yang dirancang aman dari brute force. Saat 10 klien login bersamaan, permintaan mengantre di 4 worker server uji sehingga median naik menjadi 396 ms tetapi 100% berhasil.',
          },
          {
            subtitle: 'Hemat ±94% Waktu Penelusuran Insiden',
            content:
              'Angka penghematan ini datang dari penghapusan proses manual: bertanya di grup chat dan menunggu jawaban (tipikal 15–60 menit). Dengan Admin Log dan API Log, admin cukup mencari aksi dan membuka detail entri.',
          },
          {
            subtitle: 'Batas Pengukuran & Catatan Pengujian',
            content:
              'Yang diukur adalah tahap fondasi platform. Fitur telemetri armada GPS disiapkan pada tahap berikutnya. Uji coba dijalankan di server lokal dengan SQLite dan dapat bervariasi pada server produksi.',
          },
        ],
      },
      {
        eyebrow: '6. METODOLOGI & REFERENSI',
        mainTitle: 'Catatan Pengukuran dan Simulasi Monte Carlo',
        paragraphs: [
          'Definisi indikator: Waktu penolakan dan login adalah waktu dari permintaan dikirim sampai respons diterima, diukur di mesin yang sama dengan server (tanpa latensi jaringan). Penelusuran akses adalah waktu admin untuk mengetahui siapa, kapan, dan dari platform mana sebuah login atau perubahan izin terjadi.',
          'Simulasi penelusuran akses (per kejadian, distribusi segitiga min/tipikal/maks dalam menit, 10.000 iterasi): Alur manual: bertanya di grup chat (5/15/60 mnt), memeriksa riwayat (5/10/30 mnt), konfirmasi (2/5/15 mnt) — median 47,4 menit. Alur MyBOS: membuka Admin/API Log (0,5/1/3 mnt), membuka detail entri (0,5/1/2 mnt) — median 2,6 menit, menghasilkan penghematan waktu median 94%.',
        ],
        image: {
          src: '/images/case-studies/mybos/trace-time-simulation.png',
          alt: 'Median dan rentang P10–P90 waktu menelusuri satu kejadian akses, sebelum dan sesudah ada Admin Log dan API Log',
        },
      },
    ],
  },
  'myboss-logistics-fleet-management': {
    title:
      'Bagaimana MyBOS Menyiapkan Fondasi Pelacakan Armada yang Mencatat Setiap Akses dan Menolak Token Tidak Sah dalam ±7 Milidetik',
    category: 'SMART IOT SYSTEM',
    tags: [
      'PELACAKAN ARMADA',
      'SISTEM LOGISTIK',
      'AUDIT TRAIL',
      'API APLIKASI DRIVER',
      'KONTROL AKSES',
    ],
    dateLabel: 'NOVEMBER 2026',
    description:
      'Studi kasus MyBOS: fondasi platform pelacakan armada dengan akses per peran, API aman untuk aplikasi lapangan, dan jejak audit di setiap akses.',
    coverImageAlt:
      'Halaman Admin Log MyBOS menampilkan riwayat akses dengan pengguna, waktu, dan platform',
  },
  'marka-plus-asisten-ai-erp': {
    title:
      'Bagaimana Marka Plus Mengubah Pertanyaan Sehari-hari Menjadi Jawaban dari Data ERP, Lolos 15 dari 15 Skenario Uji Akurasi dan Hak Akses',
    category: 'INTEGRASI DATA & AI',
    tags: [
      'ASISTEN AI ERP',
      'AI UNTUK DATA PERUSAHAAN',
      'CHATBOT ERP',
      'MARKAPLUS',
      'MARKASUITE',
      'HAK AKSES',
    ],
    dateLabel: 'NOVEMBER 2026',
    description:
      'Studi kasus Marka Plus: asisten AI di MarkaSuite yang menjawab pertanyaan dari data ERP sesuai hak akses, lolos 15 dari 15 skenario uji.',
    coverImageAlt:
      'Panel asisten AI Marka Plus menampilkan jawaban berbentuk tabel dari data proyek ERP',
    sections: [
      {
        eyebrow: 'RINGKASAN EKSEKUTIF (AT-A-GLANCE)',
        mainTitle:
          'Asisten AI Enterprise Terverifikasi Berbasis Hak Akses ERP',
        paragraphs: [
          'Klien & Skenario: Asisten AI di dalam MarkaSuite (Marka+ ERP), dikembangkan Arsalynk untuk operasional internalnya dan untuk perusahaan pengguna MarkaSuite.',
          'Fokus Masalah: Pertanyaan status proyek dan cara pakai aplikasi menumpuk di chat project manager, sementara chatbot umum terlalu berisiko dihubungkan ke data inti perusahaan.',
          'Solusi Produk: Marka Plus, asisten AI yang memetakan bahasa sehari-hari ke 202 sumber data ERP, membaca data hanya sesuai hak akses pengguna, dan meminta konfirmasi sebelum mengubah data.',
          'Durasi Implementasi: ±6 minggu (15 September – 28 Oktober 2026) dalam empat fase, masing-masing dikunci oleh pengujian.',
        ],
        metrics: [
          {
            value: '15 / 15',
            label: 'Skenario Uji Lulus',
            detail:
              'Skenario uji akurasi dan hak akses memiliki bukti eksekusi yang lulus (Uji Lab)',
          },
          {
            value: '0 / 1',
            label: 'Integritas Mutasi Data',
            detail:
              'Konfirmasi aksi yang dibatalkan menghasilkan 0 penulisan; yang diterima menghasilkan tepat 1 penulisan (Uji Lab)',
          },
          {
            value: '79%',
            label: 'Waktu PM Dihemat',
            detail:
              'Waktu kerja PM per pertanyaan status: ±13 menit → ±2,8 menit (Simulasi Monte Carlo)',
          },
        ],
      },
      {
        eyebrow: '1. SKENARIO MASALAH',
        mainTitle:
          'Ketika Setiap Pertanyaan tentang Data Harus Lewat Satu Orang',
        paragraphs: [
          'Setelah proyek, tugas, permintaan, dan keuangan Arsalynk masuk ke MarkaSuite, datanya lengkap. Masalah berikutnya adalah cara orang mengambil jawaban dari data itu. MarkaSuite berkembang cepat: 533 commit dalam tiga bulan pertama, dengan 202 sumber data di 15 modul. Tidak semua pengguna hafal di mana tiap informasi berada.',
          'Sebelum Marka Plus, jalur tercepat untuk mendapat jawaban adalah bertanya ke orang yang paling paham sistem:',
        ],
        subsections: [
          {
            subtitle: 'Pertanyaan yang Antre di Chat PM',
            content:
              'Staf bertanya "berapa Weekly Task saya yang masih pending?", pimpinan bertanya "proyek mana yang sedang berjalan?". Project manager (PM) harus membuka ERP, memfilter, menghitung, lalu membalas satu per satu. Akibatnya, PM terus terpotong dari pekerjaannya sendiri, dan penanya menunggu sampai PM sempat membalas.',
          },
          {
            subtitle: 'Panduan yang Tertinggal dari Aplikasi',
            content:
              'Alur kerja berubah seiring rilis. Contohnya, Weekly Target harus disetujui PM sebelum bisa dipakai sebagai dasar Daily Task. Pengguna baru yang mengikuti panduan lama mengajukan dengan urutan yang salah. Akibatnya, pengajuan ditolak sistem dan pertanyaan yang sama kembali ke PM.',
          },
          {
            subtitle: 'AI yang Terlalu Percaya Diri',
            content:
              'Chatbot umum yang disambungkan ke basis data bisa menampilkan data di luar hak pengguna, mengarang angka, atau mengubah data tanpa konfirmasi. Dalam laporan HSBC Voices of Treasury 2025, 48% dari 29 responden korporasi Indonesia menyebut keamanan siber sebagai hambatan utama adopsi otomasi dan AI, tertinggi di Asia Pasifik.',
          },
        ],
        image: {
          src: '/images/case-studies/markaplus/workflow-comparison.png',
          alt: 'Transformasi jalur informasi dari pertanyaan yang antre di satu orang menjadi jawaban langsung dari data ERP, dengan batas akses yang sama seperti aplikasi',
        },
      },
      {
        eyebrow: '2. SOLUSI PRODUK',
        mainTitle:
          'Menghubungkan Bahasa Sehari-hari dan Data ERP dalam Satu Jalur yang Terkendali',
        paragraphs: [
          'Marka Plus dirancang agar setiap orang bisa bertanya langsung ke data ERP tanpa memberi AI akses bebas ke basis data. Alih-alih membiarkan model AI menulis query sendiri, model hanya memilih apa yang ditanyakan. ERP yang memutuskan apakah pertanyaan itu boleh dijawab, lalu membaca datanya lewat API yang sama dengan aplikasi.',
          'Alur eksekusi: Kata-kata pengguna → Maksud dan entitas bisnis → Modul dan sumber data → Tabel dan kolom → Pembacaan lewat API yang divalidasi → Jawaban yang bersumber dari baris data hasil bacaan itu.',
        ],
        subsections: [
          {
            subtitle:
              'A. Pertanyaan Sehari-hari yang Dipetakan ke Data yang Tepat',
            content:
              'Saat pengguna bertanya, Marka Plus mencari padanan istilah di glosarium bisnis, lalu menyusun rencana baca berbentuk JSON (sumber data, kolom, filter, batas baris). Backend memeriksa rencana terhadap katalog 202 sumber data. Pertanyaan lanjutan seperti "kalau bulan lalu?" tetap mempertahankan jenis tugas dan kepemilikan sebelumnya.',
          },
          {
            subtitle: 'B. Hak Akses yang Ikut di Setiap Jawaban',
            content:
              'Saat percakapan dimulai, ERP membuat snapshot identitas, perusahaan, peran aktif, modul, izin, dan cakupan proyek pengguna yang ditandatangani server dan kedaluwarsa dalam 120 detik. Data hanya dibaca dari lima tampilan khusus melalui akun basis data read-only (maksimal 100 baris, 30 kolom, 256 KiB, timeout 5 detik).',
          },
          {
            subtitle:
              'C. Aksi dengan Tiket, Konfirmasi, dan Pembacaan Ulang',
            content:
              'Saat pengguna meminta tindakan (seperti membuat Daily Task), Marka Plus menerbitkan tiket aksi berlaku 15 menit dan menampilkan ringkasan perubahan untuk dikonfirmasi. Tiket diklaim secara atomik, ERP menjalankan aksi via API resmi, dan membaca ulang hasilnya sebelum melabeli "Terverifikasi".',
          },
          {
            subtitle: 'D. Panduan yang Mengikuti Kode Terbaru',
            content:
              'Knowledge Engine memindai repositori (skema Prisma, kode TypeScript, halaman frontend), menyaring rahasia, dan membandingkan panduan dengan sistem terbaru (skor keyakinan 0–1). Bila panduan di bawah skor 0,6 atau tidak berlaku, Marka Plus menahan jawaban secara transparan.',
          },
        ],
        image: {
          src: '/images/case-studies/markaplus/question-to-table.png',
          alt: 'Pertanyaan dalam bahasa sehari-hari diterjemahkan menjadi pembacaan data yang tervalidasi, lengkap dengan jumlah dan periodenya',
        },
      },
      {
        eyebrow: '3. DI BALIK LAYAR',
        mainTitle:
          'Arsitektur yang Terbatas, Terverifikasi, dan Bisa Ditelusuri',
        paragraphs: [
          'Untuk memastikan AI tetap berguna tanpa menjadi pintu belakang ke data perusahaan, Marka Plus dibangun di atas empat pilar arsitektur:',
          'Terbatas di sisi data: akun basis data khusus hanya diberi hak CONNECT, USAGE, dan SELECT pada lima tampilan ai_* (ai_projects, ai_project_tasks, ai_project_financials, ai_company_financials, dan ai_crm_deals). Setiap tampilan wajib memuat kolom perusahaan untuk penyaringan tenant, dan tabel inti tidak pernah dibuka.',
          'Terverifikasi lewat katalog dan MCP: endpoint MCP Streamable HTTP (protokol 2025-11-25) menyediakan alat untuk mengenali sumber data yang diizinkan, membaca skema aktual, serta menjalankan pembacaan bertipe. Katalog 202 sumber data di 15 modul dibangkitkan dari kode dan dicocokkan dengan hash sumbernya di CI.',
          'Bisa ditelusuri di setiap pemanggilan: setiap callback eksternal ditandatangani HMAC dari 13 komponen (metode, path, waktu, nonce, hash isi, tenant, pengguna, peran, alat, ID request, perusahaan, izin, dan cakupan proyek) dengan penolakan nonce replay dan enkripsi AES-256-GCM.',
          'Tidak bergantung pada satu penyedia AI: model bahasa (melalui OpenRouter) hanya dipakai untuk memahami kalimat bebas. Query terstruktur, pemeriksaan izin, MCP, dan seluruh aksi tulis tetap berjalan tanpa penyedia AI.',
        ],
        image: {
          src: '/images/case-studies/markaplus/technical-architecture.png',
          alt: 'Model bahasa hanya menyusun rencana; ERP yang memvalidasi, membaca data, dan menegakkan hak akses',
        },
      },
      {
        eyebrow: '4. PERJALANAN IMPLEMENTASI',
        mainTitle: 'Empat Fase dalam Enam Minggu',
        paragraphs: [
          'Marka Plus dibangun di atas MarkaSuite yang sudah berjalan, sehingga setiap fase bisa langsung diuji terhadap peran, proyek, dan modul yang nyata. Tim menambahkan 34 file uji khusus asisten AI selama periode ini.',
        ],
        table: {
          caption: 'Tahapan Pengembangan Marka Plus & Gerbang Validasi',
          headers: ['Fase', 'Periode', 'Keluaran', 'Cara Diuji'],
          rows: [
            [
              'Integrasi awal',
              '15–21 September 2026',
              'Tabel permintaan AI, provisioning tenant, tampilan data read-only ai_*',
              'Gerbang migrasi basis data',
            ],
            [
              'Kontrak V2 & runtime native',
              '21–30 September 2026',
              'Snapshot otoritas bertanda tangan, penyelarasan tampilan, eksekusi native di dalam ERP',
              'Suite tanda tangan, tenant, runtime V2, HMAC V2, control plane',
            ],
            [
              'Audit & perbaikan',
              '2–9 Oktober 2026',
              'Audit 15 skenario, perbaikan 6 kelompok temuan, katalog dikunci di CI',
              '16 suite baseline, tes regresi alur kerja, query PostgreSQL terisolasi, 2 suite browser',
            ],
            [
              'Knowledge Engine & MCP',
              '15–28 Oktober 2026',
              'Crawler kode, skor keyakinan, penahanan jawaban, definisi ulang koneksi MCP',
              'Suite Knowledge Engine, pemahaman bahasa, dan schema linking',
            ],
          ],
        },
      },
      {
        eyebrow: '5. DAMPAK & BENCHMARK PERFORMA',
        mainTitle:
          'Hasil Pengujian Akurasi, Keamanan, dan Efisiensi Operasional',
        paragraphs: [
          'Berdasarkan laporan audit tim pengembang pada 2 dan 7 Oktober 2026 (source lokal, basis data PostgreSQL terisolasi, dan browser Edge), penghitungan langsung dari kode, serta simulasi 10.000 iterasi untuk waktu kerja PM, berikut hasilnya:',
        ],
        table: {
          caption: 'Matriks Benchmark Kinerja dan Verifikasi Lapangan Marka Plus',
          headers: ['Indikator', 'Sebelum', 'Dengan Marka Plus', 'Hasil', 'Status'],
          rows: [
            ['Skenario uji akurasi dan hak akses dengan bukti eksekusi', '—', '15 dari 15', 'Seluruhnya lulus', 'Uji Lab'],
            ['Suite uji baseline (izin, validasi, injeksi, kegagalan provider, dll)', '—', '16 suite', 'Seluruhnya lulus', 'Uji Lab'],
            ['Temuan audit jawaban tidak sesuai alur', '6 kelompok', '0 tersisa pada skenario yang diuji', 'Dikunci tes regresi', 'Uji Lab'],
            ['Penulisan data saat konfirmasi dibatalkan / diterima', '—', '0 / tepat 1', 'Sesuai desain', 'Uji Lab'],
            ['Jumlah proyek berjalan: jawaban asisten vs hitungan basis data', '—', 'Sama', 'Lulus uji baca langsung', 'Uji Lab'],
            ['Cakupan sumber data yang dipahami', '—', '202 sumber data, 15 modul', 'Dicocokkan di CI', 'Aktual'],
            ['Waktu kerja PM per pertanyaan status', '±13 menit', '±2,8 menit', 'Hemat ±79%', 'Simulasi'],
            ['Waktu PM yang kembali per minggu', '—', '±3,8 jam (2,4–5,8)', 'Untuk 10–40 pertanyaan/minggu', 'Proyeksi'],
          ],
        },
        image: {
          src: '/images/case-studies/markaplus/pm-time-simulation.png',
          alt: 'Waktu kerja PM per pertanyaan status turun dari median ±13 menit menjadi ±2,8 menit (hemat ±79%, P10–P90: 71–85%) pada simulasi 10.000 iterasi',
        },
        subsections: [
          {
            subtitle: '15 dari 15 Skenario Uji',
            content:
              'Mencakup informasi umum, pertanyaan fitur dan peran, query satu tabel, data berelasi, filter dan agregasi, data kosong, akses ditolak, pembuatan dan pembaruan data, input tidak valid, kegagalan basis data/MCP/penyedia AI, dan respons error.',
          },
          {
            subtitle: 'Enam Temuan Audit dan Tes Regresi',
            content:
              'Audit 7 Oktober menguji kasus batas (seperti pertanyaan Weekly yang sempat membaca Daily Task). Keenam temuan direproduksi dengan tes yang gagal, diperbaiki, dan dikunci dalam tes regresi.',
          },
          {
            subtitle: '0 dan 1 Penulisan Data Atomik',
            content:
              'Uji browser membuktikan konfirmasi yang dibatalkan menghasilkan 0 penulisan, sedangkan konfirmasi yang diterima menghasilkan tepat satu penulisan terverifikasi.',
          },
          {
            subtitle: 'Hemat ±79% Waktu PM (3,8 Jam/Minggu)',
            content:
              'Simulasi 10.000 iterasi dengan tingkat eskalasi 10–35% membuktikan penghapusan pencarian manual mengembalikan rata-rata 3,8 jam kerja per minggu bagi setiap project manager.',
          },
        ],
      },
      {
        eyebrow: '6. METODOLOGI & REFERENSI',
        mainTitle: 'Catatan Pengukuran dan Simulasi Monte Carlo',
        paragraphs: [
          'Definisi indikator: Skenario uji dengan bukti eksekusi adalah tes otomatis yang bisa dijalankan ulang dan lulus menurut audit 2 Oktober 2026. Waktu kerja PM per pertanyaan adalah waktu yang dipakai PM untuk membaca, mencari data di ERP, merangkum, dan membalas.',
          'Simulasi waktu PM (10.000 iterasi, distribusi segitiga min/tipikal/maks): Alur manual: membaca pertanyaan (0,5/1/2 mnt), mencari di ERP/spreadsheet (2/5/10 mnt), merangkum (1/3/8 mnt), membalas (1/2/4 mnt) — median 13,1 menit. Alur Marka Plus: waktu manual dikalikan tingkat eskalasi PM (10%/20%/35%) — median 2,8 menit, hemat 79% (71–85%), menghemat median 3,8 jam per minggu.',
        ],
        image: {
          src: '/images/case-studies/markaplus/role-scope-comparison.png',
          alt: 'Marka Plus mewarisi cakupan data dari peran aktif pengguna, bukan dari isi pertanyaannya',
        },
      },
    ],
  },
  'markaplus-ai-assistant': {
    title:
      'Bagaimana Marka Plus Mengubah Pertanyaan Sehari-hari Menjadi Jawaban dari Data ERP, Lolos 15 dari 15 Skenario Uji Akurasi dan Hak Akses',
    category: 'INTEGRASI DATA & AI',
    tags: [
      'ASISTEN AI ERP',
      'AI UNTUK DATA PERUSAHAAN',
      'CHATBOT ERP',
      'MARKAPLUS',
      'MARKASUITE',
      'HAK AKSES',
    ],
    dateLabel: 'NOVEMBER 2026',
    description:
      'Studi kasus Marka Plus: asisten AI di MarkaSuite yang menjawab pertanyaan dari data ERP sesuai hak akses, lolos 15 dari 15 skenario uji.',
    coverImageAlt:
      'Panel asisten AI Marka Plus menampilkan jawaban berbentuk tabel dari data proyek ERP',
  },
  'markasuite-erp-terpadu-arsalynk': {
    title:
      'Bagaimana MarkaSuite Memangkas Waktu Muat Dashboard Eksekutif hingga 89% dalam Satu ERP untuk Proyek, Keuangan, dan CRM',
    category: 'SOLUSI ENTERPRISE',
    tags: [
      'ERP TERINTEGRASI',
      'ERP INDONESIA',
      'MANAJEMEN PROYEK',
      'ERP DENGAN AI',
      'MARKASUITE',
      'TATA KELOLA KEUANGAN',
    ],
    dateLabel: 'NOVEMBER 2026',
    description:
      'Studi kasus MarkaSuite: ERP terpadu Arsalynk untuk proyek, keuangan, dan CRM, dengan dashboard eksekutif 89% lebih cepat pada pengujian internal.',
    coverImageAlt:
      'Dashboard eksekutif MarkaSuite menampilkan progres proyek, ringkasan keuangan, dan Request Card dalam satu layar',
    sections: [
      {
        eyebrow: 'RINGKASAN EKSEKUTIF (AT-A-GLANCE)',
        mainTitle:
          'ERP Terpadu Proyek, Keuangan, dan CRM dengan Waktu Respons Sub-Detik',
        paragraphs: [
          'Klien & Skenario: Implementasi internal di PT Sinergi Muda Arsa (Arsalynk), perusahaan jasa teknologi dengan banyak proyek klien yang berjalan bersamaan.',
          'Fokus Masalah: Progres proyek, pengajuan dana, dan data keuangan tersebar di spreadsheet dan percakapan chat, sehingga pimpinan harus menunggu rekap manual untuk melihat kondisi perusahaan.',
          'Solusi Produk: MarkaSuite (Marka+ ERP), dengan modul Project & Task, Request, Finance & Accounting, CRM, dan Reporting, ditambah asisten AI yang membaca data ERP sesuai hak akses.',
          'Durasi Implementasi: ±3 bulan (3 Agustus – 5 November 2026) dalam empat fase, masing-masing ditutup dengan pengujian otomatis.',
        ],
        metrics: [
          {
            value: '89%',
            label: 'Waktu Muat Turun',
            detail:
              'Login sampai dashboard eksekutif lengkap: 18,0 detik → 2,0 detik (Uji Lab)',
          },
          {
            value: '95%',
            label: 'Rute Baca Sub-Detik',
            detail:
              '742 dari 783 rute baca merespons di bawah 1 detik dengan median 715 ms (Uji Lab)',
          },
          {
            value: '78%',
            label: 'Waktu Rekap Dihemat',
            detail:
              'Rekap progres mingguan per proyek: ±88 menit → ±20 menit (Simulasi Monte Carlo)',
          },
        ],
      },
      {
        eyebrow: '1. SKENARIO MASALAH',
        mainTitle:
          'Ketika Laporan Proyek Bergantung pada Siapa yang Sempat Mengisi Spreadsheet',
        paragraphs: [
          'Arsalynk mengerjakan proyek IT untuk klien dari berbagai sektor. Setiap proyek melibatkan project manager (PM), staf pelaksana, tim keuangan, dan pimpinan, dan beberapa proyek berjalan pada minggu yang sama.',
          'Sebelum MarkaSuite, alur operasional harian bergantung pada kombinasi Google Sheets, bot Telegram untuk memperbarui isinya, dan percakapan chat untuk semua yang tidak muat di spreadsheet:',
        ],
        subsections: [
          {
            subtitle: 'Progres yang Selalu Terlambat Sehari',
            content:
              'PM harus menagih update satu per satu lewat chat sebelum bisa mengisi persentase progres. Status di spreadsheet hanya sebaik kiriman terakhir anggota tim. Akibatnya, pimpinan melihat kondisi proyek yang sudah tertinggal dari kenyataan.',
          },
          {
            subtitle: 'Pengajuan Dana Tanpa Jejak',
            content:
              'Permintaan dana proyek dan penggantian biaya diajukan lewat pesan, lalu disetujui secara lisan atau lewat balasan singkat. Tim keuangan harus merekonstruksi siapa menyetujui apa ketika menyusun laporan pertanggungjawaban (LPJ).',
          },
          {
            subtitle: 'Laporan Keuangan yang Dirakit Tangan',
            content:
              'Biaya proyek, tagihan ke klien, dan pembayaran ke vendor dicatat di tempat berbeda. Laporan Lark yang dikutip JPNN mencatat 48% responden harus membuka beberapa aplikasi setiap jam untuk memantau pekerjaan, dan 58% kehilangan sedikitnya 3 jam kerja per pekan karena inefisiensi koordinasi.',
          },
        ],
        image: {
          src: '/images/case-studies/marka/workflow-comparison.png',
          alt: 'Transformasi alur informasi dari pencatatan yang tersebar di spreadsheet dan chat menjadi satu sumber data untuk seluruh peran',
        },
      },
      {
        eyebrow: '2. SOLUSI PRODUK',
        mainTitle:
          'Menghubungkan Lapangan, Manajemen, dan Keuangan dalam Satu Sumber Data',
        paragraphs: [
          'MarkaSuite dirancang untuk menghapus jarak antara orang yang mengerjakan proyek, orang yang mengelolanya, dan orang yang membiayainya. Seluruh aktivitas dicatat sebagai transaksi di satu basis data multi-tenant terpadu, lalu ditampilkan kembali sesuai peran aktif pengguna: Staff, Project Manager, Operations Manager, Finance, atau Director.',
        ],
        subsections: [
          {
            subtitle:
              'A. Daily Task dan Weekly Target yang Menghitung Progres Sendiri',
            content:
              'Saat staf mengisi Daily Task, checklist pekerjaan dihitung otomatis oleh backend menjadi persentase progres, sehingga staf tidak bisa mengetik angka secara manual. Progres naik berjenjang ke Weekly Target, tugas proyek, dan dashboard PM tanpa rekap manual tambahan.',
          },
          {
            subtitle: 'B. Request Card dengan Persetujuan Berjenjang',
            content:
              'Pengajuan dana proyek dan penggantian biaya dikirim ke antrean peninjau sesuai peran, mencatat setiap persetujuan dan tampil sebagai Request Card. Begitu disetujui, Finance memproses pencairan yang otomatis membentuk jurnal hingga pelampiran LPJ.',
          },
          {
            subtitle: 'C. Keuangan Transaksional dengan Prinsip Maker–Checker',
            content:
              'Biaya proyek diposting ke akun Work in Progress (WIP) melalui jurnal. Proposal penagihan menerbitkan tagihan berskema pajak tersimpan, dan pembayaran vendor memerlukan pencocokan pesanan. Pembuat transaksi tidak dapat menyetujui transaksinya sendiri.',
          },
          {
            subtitle: 'D. Asisten AI yang Membaca Data Sesuai Hak Akses',
            content:
              'Asisten AI MarkaSuite menjawab pertanyaan dari data ERP pengguna via snapshot otoritas bertanda tangan server (kedaluwarsa 120 detik), hanya membaca 5 tampilan data khusus berbatas 100 baris/5 detik, dan mewajibkan konfirmasi sebelum mengeksekusi aksi.',
          },
        ],
        image: {
          src: '/images/case-studies/marka/daily-task-progress.png',
          alt: 'Progres dihitung dari checklist pekerjaan, bukan diketik manual, lalu naik otomatis ke tingkat proyek',
        },
      },
      {
        eyebrow: '3. DI BALIK LAYAR',
        mainTitle: 'Arsitektur yang Cepat, Tersekat, dan Bisa Diaudit',
        paragraphs: [
          'Untuk memastikan sistem tetap responsif meski banyak peran membaca satu basis data yang sama, MarkaSuite dibangun di atas fondasi berikut:',
          'Fondasi modern dan modular: backend Node.js, Express, dan TypeScript dengan Prisma di atas PostgreSQL (Supabase), serta frontend Next.js App Router. 2.616 rute API melayani 21 modul backend.',
          'Cepat lewat proyeksi dan cache: data proyek dan keuangan diambil dalam satu kueri JSON per bagian. Cache read-through berbasis perusahaan, pengguna, peran, dan modul menurunkan waktu muat dashboard berulang dari 1.033 ms menjadi 118 ms.',
          'Tersekat dengan kontrol akses empat lapis: token JWT, peran aktif, hak modul per perusahaan, dan cakupan baris data per proyek. Header perusahaan yang dipalsukan ditolak HTTP 403.',
          'Bisa diaudit di setiap transaksi: setiap mutasi membawa Idempotency-Key untuk mencegah transaksi ganda, header X-Request-ID untuk penelusuran, dan seluruh mutasi tercatat di audit trail dengan penyensoran data sensitif.',
        ],
        image: {
          src: '/images/case-studies/marka/technical-architecture.png',
          alt: 'Setiap permintaan melewati empat lapis pemeriksaan akses sebelum menyentuh data, dan asisten AI hanya membaca tampilan khusus yang dibatasi',
        },
      },
      {
        eyebrow: '4. PERJALANAN IMPLEMENTASI',
        mainTitle: 'Empat Fase dalam Tiga Bulan',
        paragraphs: [
          'MarkaSuite dibangun selama ±3 bulan dengan 533 commit tercatat. Setiap fase baru dimulai setelah fase sebelumnya lolos pengujian otomatis:',
        ],
        table: {
          caption: 'Tahapan Pengembangan MarkaSuite & Validasi Teknis',
          headers: ['Fase', 'Periode', 'Keluaran', 'Cara Diuji'],
          rows: [
            [
              'Fondasi & model data',
              '3–25 Agustus 2026',
              'Prototipe Django dan model data untuk proyek, CRM, penjualan, keuangan, inventori, manufaktur',
              'Uji unit per modul',
            ],
            [
              'Migrasi arsitektur',
              '26 Agustus – awal September 2026',
              'Backend pindah ke Node.js/Express/TypeScript dengan Prisma; frontend Next.js',
              'Kompilasi TypeScript backend dan frontend; inventaris 2.616 rute',
            ],
            [
              'Pengerasan & performa',
              'September 2026',
              'Kontrol akses berlapis, alur keuangan transaksional, cache dashboard, deploy produksi 22–24 September',
              '783 rute baca, 1.833 rute tulis non-destruktif, 9 skenario login, 9 pagar sistem (Q11)',
            ],
            [
              'Asisten AI & penyempurnaan',
              'September – November 2026',
              'Asisten AI berbasis data ERP, audit chatbot 7 Oktober, revisi tampilan per peran',
              '16 suite uji chatbot dan 2 suite browser (mobile dan desktop)',
            ],
          ],
        },
      },
      {
        eyebrow: '5. DAMPAK & BENCHMARK PERFORMA',
        mainTitle:
          'Hasil Pengukuran Waktu Muat, Throughput Rute, dan Efisiensi Mingguan',
        paragraphs: [
          'Berdasarkan benchmark tim pengembang pada stack Express dan PostgreSQL (Supabase) produksi pada September 2026, dengan pembanding build awal sistem, serta simulasi 10.000 iterasi untuk alur rekap mingguan, berikut hasilnya:',
        ],
        table: {
          caption: 'Tabel Benchmark Kinerja dan Efisiensi Operasional MarkaSuite',
          headers: ['Indikator Operasional', 'Sebelum', 'Dengan MarkaSuite', 'Selisih', 'Status'],
          rows: [
            ['Login sampai dashboard eksekutif lengkap', '18,0 detik (build awal)', '2,0 detik', 'Turun 89%', 'Uji Lab'],
            ['Respons login (9 skenario)', '7,5–11,4 detik', '0,35–1,3 detik', '9/9 di bawah 3 detik', 'Uji Lab'],
            ['Laporan neraca saldo', '4,6 detik', '1,3 detik', 'Turun 72%', 'Uji Lab'],
            ['Dashboard berulang (dari cache)', '1.033 ms', '118 ms', '±9x lebih cepat', 'Uji Lab'],
            ['Feed Request Card (dari cache)', '1.388 ms', '394 ms', '±3,5x lebih cepat', 'Uji Lab'],
            ['Rute baca di bawah 1 detik', '—', '742 dari 783 (95%)', 'Median 715 ms', 'Uji Lab'],
            ['Rute tulis lolos uji non-destruktif', '—', '1.833 dari 1.833', 'Tanpa mutasi data bisnis', 'Uji Lab'],
            ['Rekap progres mingguan per proyek', '±88 menit (spreadsheet + chat)', '±20 menit (dashboard)', 'Hemat ±78%', 'Simulasi'],
          ],
        },
        image: {
          src: '/images/case-studies/marka/load-time-benchmarks.png',
          alt: 'Dashboard eksekutif turun dari 18,0 detik menjadi 2,0 detik; laporan neraca saldo dari 4,6 menjadi 1,3 detik',
        },
        subsections: [
          {
            subtitle: 'Dashboard 18 Detik Menjadi 2 Detik',
            content:
              'Penyatuan 12 kueri proyek dan 13 kueri keuangan ke dalam satu proyeksi JSON terpadu per perusahaan menghilangkan jeda buatan dan latensi berulang.',
          },
          {
            subtitle: 'Neraca Saldo 4,6 Detik Menjadi 1,3 Detik',
            content:
              'Perhitungan debit dan kredit dipindahkan ke kueri agregat basis data, menghilangkan inisialisasi akun satu per satu.',
          },
          {
            subtitle: 'Rekap Mingguan Hemat ±78%',
            content:
              'Penagihan update manual dan pencocokan spreadsheet hilang karena progres terisi langsung dari Daily Task yang dicentang staf sendiri.',
          },
          {
            subtitle: 'Penanganan Downtime Sub-33ms',
            content:
              'Saat koneksi basis data terputus, sistem langsung mengembalikan HTTP 503 dalam ±33 ms agar tim support dapat segera membedakan gangguan basis data dari kesalahan aplikasi.',
          },
        ],
      },
      {
        eyebrow: '6. METODOLOGI & REFERENSI',
        mainTitle: 'Catatan Pengukuran dan Simulasi Monte Carlo',
        paragraphs: [
          'Definisi indikator: Login sampai dashboard eksekutif lengkap diukur dari klik login hingga seluruh bagian kartu dashboard dan Request Card tampil pada build produksi Next.js, backend Express, dan Supabase.',
          'Simulasi rekap progres mingguan (10.000 iterasi, distribusi segitiga min/tipikal/maks): Alur manual: menagih update (15/25/45 mnt), mencocokkan spreadsheet (10/20/40 mnt), menghitung progres (10/20/30 mnt), tanya jawab pimpinan (5/15/30 mnt) — median 88 menit. Alur MarkaSuite: memeriksa dashboard (5/10/20 mnt), menindaklanjuti hambatan (2/5/10 mnt), tanya jawab (0/2/5 mnt) — median 20 menit, menghasilkan penghematan median 78%.',
        ],
        image: {
          src: '/images/case-studies/marka/weekly-recap-simulation.png',
          alt: 'Rekap progres mingguan per proyek turun dari median ±88 menit menjadi ±20 menit (hemat ±78%) pada simulasi 10.000 iterasi',
        },
      },
    ],
  },
  'marka-project-manager': {
    title:
      'Bagaimana MarkaSuite Memangkas Waktu Muat Dashboard Eksekutif hingga 89% dalam Satu ERP untuk Proyek, Keuangan, dan CRM',
    category: 'SOLUSI ENTERPRISE',
    tags: [
      'ERP TERINTEGRASI',
      'ERP INDONESIA',
      'MANAJEMEN PROYEK',
      'MARKASUITE',
    ],
    dateLabel: 'NOVEMBER 2026',
    description:
      'Studi kasus MarkaSuite: ERP terpadu Arsalynk untuk proyek, keuangan, dan CRM, dengan dashboard eksekutif 89% lebih cepat pada pengujian internal.',
    coverImageAlt:
      'Dashboard eksekutif MarkaSuite menampilkan progres proyek, ringkasan keuangan, dan Request Card dalam satu layar',
  },
  'marka-finance-accounting': {
    title:
      'Bagaimana MarkaSuite Memangkas Waktu Muat Dashboard Eksekutif hingga 89% dalam Satu ERP untuk Proyek, Keuangan, dan CRM',
    category: 'SOLUSI ENTERPRISE',
    tags: [
      'ERP KEUANGAN',
      'AKUNTANSI KORPORAT',
      'TATA KELOLA ARUS KAS',
    ],
    dateLabel: 'NOVEMBER 2026',
    description:
      'Studi kasus MarkaSuite: ERP terpadu Arsalynk untuk proyek, keuangan, dan CRM, dengan dashboard eksekutif 89% lebih cepat pada pengujian internal.',
    coverImageAlt:
      'Dashboard eksekutif MarkaSuite menampilkan progres proyek, ringkasan keuangan, dan Request Card dalam satu layar',
  },
  'adsvar-website-crm-terintegrasi': {
    "title": "Bagaimana AdsVar Menyambungkan Satu Halaman Penawaran ke CRM hingga 30 dari 30 Lead Uji Tercatat dengan Tanda Tangan Valid",
    "category": "DIGITAL DEVELOPMENT",
    "tags": [
        "WEBSITE AGENSI IKLAN",
        "LANDING PAGE CRM",
        "INTEGRASI CRM WEBSITE",
        "LEAD MANAGEMENT",
        "ADSVAR",
        "ARSALYNK"
    ],
    "dateLabel": "NOVEMBER 2026",
    "description": "Studi kasus AdsVar: website satu halaman untuk agensi iklan performa yang mengirim setiap lead, chat, dan tiket langsung ke CRM MarkaSuite secara aman.",
    "coverImageAlt": "Halaman utama AdsVar dengan penawaran layanan iklan performa dan tombol konsultasi",
    "sections": [
        {
            "eyebrow": "RINGKASAN EKSEKUTIF (AT-A-GLANCE)",
            "mainTitle": "Menghubungkan Satu Halaman Penawaran Langsung ke CRM Perusahaan",
            "paragraphs": [
                "Klien & Skenario: AdsVar, agensi iklan performa di grup Arsalynk yang menangani Meta Ads, Google Ads, TikTok Ads, TikTok Shop GMV Max, dan Shopee Ads untuk brand dan UMKM.",
                "Fokus Masalah: Calon klien datang dari banyak kanal, tetapi kebutuhan mereka (kanal iklan, paket, budget) tiba tidak lengkap dan harus disalin manual sebelum tim sales bisa menindaklanjuti.",
                "Solusi Produk: Website satu halaman (Next.js 16) dengan katalog paket per kanal, formulir yang membawa konteks paket, live chat, tiket support, dan dashboard lead internal. Setiap interaksi dikirim ke CRM MarkaSuite sebagai event yang ditandatangani.",
                "Durasi Implementasi: ±3 minggu (15 Oktober – 3 November 2026), 30 commit.",
                "Dampak Terukur: 30 dari 30 lead uji diterima dan diteruskan ke endpoint CRM dengan tanda tangan HMAC valid, median respons 6,4 milidetik (Uji Lab); Skor Lighthouse desktop Performance 100 dan SEO 100 (Uji Lab); Kerja admin per lead turun dari ±17 menit menjadi ±3 menit, hemat ±83% (Simulasi 10.000 iterasi)."
            ],
            "metrics": [
                {
                    "value": "30/30",
                    "label": "Lead Uji Valid",
                    "detail": "30 dari 30 lead uji diterima dan diteruskan ke endpoint CRM dengan tanda tangan HMAC valid, median 6,4 ms (Uji Lab)"
                },
                {
                    "value": "100/100",
                    "label": "Lighthouse Desktop",
                    "detail": "Skor Lighthouse desktop Performance 100 dan SEO 100, LCP 0,79 detik (Uji Lab)"
                },
                {
                    "value": "83%",
                    "label": "Hemat Waktu Admin",
                    "detail": "Kerja admin per lead turun dari ±17 menit menjadi ±3 menit, hemat ±83% (Simulasi 10.000 iterasi)"
                }
            ]
        },
        {
            "eyebrow": "SKENARIO MASALAH",
            "mainTitle": "Ketika Lead Datang Lengkap di Kepala Calon Klien, tetapi Terpotong di Kotak Masuk",
            "paragraphs": [
                "AdsVar menjual layanan iklan berbasis hasil. Calon kliennya beragam: pemilik toko online yang ingin mencoba Shopee Ads, brand yang butuh kampanye TikTok, hingga perusahaan yang mencari paket iklan dan konten sekaligus. Mereka biasanya sudah tahu kanal dan kisaran budgetnya saat pertama kali menghubungi.",
                "Masalahnya, informasi itu jarang sampai utuh ke tim sales karena tiga kendala operasional:",
                "Kecepatan di tahap ini menentukan hasil. Audit Harvard Business Review terhadap 2.241 perusahaan di Amerika Serikat menemukan bahwa perusahaan yang menghubungi lead dalam satu jam hampir tujuh kali lebih mungkin melakukan kualifikasi dibanding yang menunggu lebih lama."
            ],
            "subsections": [
                {
                    "subtitle": "Kebutuhan yang Tercecer di Banyak Pintu",
                    "content": "Calon klien menghubungi lewat WhatsApp, DM Instagram, atau email, masing-masing dengan format bebas. Admin harus membaca satu per satu lalu menyalin nama, kontak, dan kebutuhan ke spreadsheet. Akibatnya, sebagian lead baru tercatat berjam-jam kemudian, dan sebagian lagi terlewat."
                },
                {
                    "subtitle": "Pertanyaan Ulang yang Memperlambat Respons",
                    "content": "Pesan pertama sering hanya berbunyi 'mau tanya paket iklan'. Admin lalu bertanya kanal apa, paket yang mana, dan berapa budgetnya. Akibatnya, percakapan butuh beberapa putaran sebelum sales bisa memberi penawaran yang tepat."
                },
                {
                    "subtitle": "Data Penjualan yang Terpisah dari Website",
                    "content": "Riwayat chat, keluhan, dan keputusan penawaran tersimpan di aplikasi yang berbeda dari CRM. Akibatnya, sales tidak melihat riwayat lengkap seorang calon klien saat menindaklanjuti."
                }
            ],
            "image": {
                "src": "/images/case-studies/adsvar/workflow-comparison.png",
                "alt": "Diagram Perbandingan Alur Lead: Transformasi dari pesan bebas yang disalin manual menjadi data terstruktur yang langsung tercatat di CRM"
            }
        },
        {
            "eyebrow": "SOLUSI PRODUK",
            "mainTitle": "Menghubungkan Halaman Penawaran dan CRM dalam Satu Jalur Data",
            "paragraphs": [
                "AdsVar dibangun sebagai website satu halaman yang bekerja seperti pintu depan CRM. Alih-alih mengarahkan semua pengunjung ke WhatsApp dan membiarkan admin merapikan datanya, setiap tombol di halaman menghasilkan data terstruktur yang langsung masuk ke basis data website dan ke CRM MarkaSuite.",
                "Satu halaman memuat seluruh perjalanan calon klien: layanan per kanal, paket dan harga, portofolio, lalu formulir konsultasi. Di belakang halaman itu ada 15 rute API yang menangani lead, chat, tiket, feedback, dan sinkronisasi dengan CRM."
            ],
            "subsections": [
                {
                    "subtitle": "A. Katalog Paket per Kanal yang Membawa Konteks ke Formulir",
                    "content": "Saat pengunjung memilih kanal (Meta, Google, TikTok, TikTok Shop GMV Max, atau Shopee), halaman menampilkan paket yang sesuai beserta harga bulanan dan tabel perbandingan. Begitu pengunjung menekan 'Choose this package', formulir terbuka dengan nama paket, siklus tagihan, dan harga yang sudah terisi. Pada uji lokal, 20 dari 20 lead dari modal paket tersimpan lengkap bersama detail paketnya."
                },
                {
                    "subtitle": "B. Lead yang Tercatat Tiga Kali dalam Satu Kiriman",
                    "content": "Saat formulir dikirim, sistem memvalidasi nama, email, dan subjek, lalu melakukan tiga hal: menyimpan lead ke basis data website, mengirim email notifikasi ke tim, dan mengirim event inquiry.submitted ke CRM MarkaSuite. Event ditandatangani HMAC-SHA256 dengan timestamp dan nonce, dicoba ulang hingga tiga kali bila gagal, dan dicatat di log event."
                },
                {
                    "subtitle": "C. Chat, Tiket, dan Feedback yang Masuk ke CRM yang Sama",
                    "content": "Saat pengunjung membuka live chat, mengirim tiket support, atau memberi penilaian layanan, website mengirim event message.received, ticket.created, atau feedback.submitted ke CRM. Widget chat memeriksa balasan setiap 5 detik. Arah sebaliknya juga diverifikasi: webhook dari CRM dengan tanda tangan tidak cocok langsung ditolak dengan HTTP 401."
                },
                {
                    "subtitle": "D. Dashboard Lead untuk Tim Internal",
                    "content": "Semua lead dari formulir kontak dan modal paket tampil dalam satu daftar: nama, kontak, layanan, paket, siklus tagihan, harga, dan sumber formulir, dengan ringkasan jumlah lead di bagian atas. Tim bisa mencari, menyaring status, membuka chat WhatsApp lead dengan satu klik, dan mengekspor data ke CSV."
                }
            ],
            "image": {
                "src": "/images/case-studies/adsvar/form-to-crm-flow.png",
                "alt": "Alur Lead dari Formulir ke CRM: Satu kiriman formulir menghasilkan tiga catatan terverifikasi di website, email tim, dan CRM"
            }
        },
        {
            "eyebrow": "ARSITEKTUR TEKNIS",
            "mainTitle": "Di Balik Layar: Arsitektur yang Ringan, Tersambung, dan Bisa Ditelusuri",
            "paragraphs": [
                "Untuk memastikan halaman tetap cepat dibuka meski membawa banyak fungsi CRM, AdsVar dibangun di atas fondasi berikut:",
                "Ringan untuk pengunjung: Next.js 16 dengan halaman utama yang dirender statis saat build, font lokal, dan data paket yang dimuat dari API. Bobot halaman desktop 475 KB, dan build produksi selesai dalam 13 detik.",
                "Tersambung lewat event bertanda tangan: integrasi ke CRM MarkaSuite memakai webhook dengan tanda tangan HMAC-SHA256, timestamp, nonce, dan batas waktu 8 detik per percobaan untuk lima jenis event bisnis.",
                "Bisa ditelusuri di setiap event: setiap kiriman ke CRM disimpan di tabel log event di SQLite beserta payload, kode status, dan responsnya, sehingga data aman meski CRM offline.",
                "Siap dicari mesin pencari: metadata, sitemap, robots.txt, data terstruktur (Organization, OfferCatalog, BreadcrumbList), dan pengalihan 308 permanen untuk domain lama."
            ],
            "image": {
                "src": "/images/case-studies/adsvar/technical-architecture.png",
                "alt": "Diagram Arsitektur Teknis & Aliran Data: Halaman statis untuk pengunjung, 15 rute API, dan jalur event bertanda tangan ke CRM MarkaSuite"
            }
        },
        {
            "eyebrow": "PERJALANAN IMPLEMENTASI",
            "mainTitle": "Dari Halaman Profil ke Pintu Depan CRM dalam Tiga Minggu",
            "paragraphs": [
                "AdsVar dikerjakan dalam empat fase terstruktur. Setiap fase dibangun di atas halaman yang sudah berjalan, sehingga pengujian dilakukan langsung pada alur pengunjung yang nyata."
            ],
            "table": {
                "caption": "Peta Jalan Implementasi Rekayasa AdsVar Empat Fase",
                "headers": [
                    "Fase",
                    "Periode",
                    "Keluaran",
                    "Cara Diuji"
                ],
                "rows": [
                    [
                        "Fondasi halaman",
                        "15–20 Oktober 2026",
                        "Struktur satu halaman, desain SVG, basis data SQLite untuk layanan, paket, portofolio",
                        "Build produksi dan pemeriksaan tampilan"
                    ],
                    [
                        "Paket & konten",
                        "21–28 Oktober 2026",
                        "Katalog paket per kanal, tabel perbandingan, detail paket, konten berbahasa Inggris",
                        "Pemeriksaan alur pilih paket"
                    ],
                    [
                        "Integrasi CRM",
                        "29 Oktober 2026",
                        "Event bertanda tangan ke MarkaSuite, email notifikasi, dashboard lead",
                        "Suite uji integrasi CRM internal"
                    ],
                    [
                        "SEO & domain",
                        "22 Oktober – 3 November 2026",
                        "Metadata, data terstruktur, sitemap, pengalihan 308 ke adsvar.id",
                        "Lighthouse dan pemeriksaan pengalihan"
                    ]
                ]
            }
        },
        {
            "eyebrow": "BENCHMARK & DAMPAK",
            "mainTitle": "Bukti Kinerja Laboratorium dan Simulasi Efisiensi Admin",
            "paragraphs": [
                "Berdasarkan uji lokal pada 9 November 2026 (build produksi, basis data uji, endpoint CRM server tiruan yang memverifikasi tanda tangan HMAC), pengukuran Lighthouse 12, serta simulasi distribusi segitiga 10.000 iterasi untuk kerja admin:"
            ],
            "table": {
                "caption": "Tabel Pengukuran Performa, Integritas Event, dan Simulasi Efisiensi",
                "headers": [
                    "Indikator",
                    "Sebelum",
                    "Dengan AdsVar",
                    "Hasil",
                    "Status"
                ],
                "rows": [
                    [
                        "Lead formulir kontak diterima",
                        "–",
                        "median 6,4 ms, P95 10,9 ms",
                        "30 dari 30",
                        "Uji Lab"
                    ],
                    [
                        "Event lead sampai ke CRM dengan tanda tangan valid",
                        "–",
                        "HMAC-SHA256 + timestamp + nonce",
                        "30 dari 30",
                        "Uji Lab"
                    ],
                    [
                        "Lead dari modal paket tersimpan dengan detail paket",
                        "–",
                        "median 4,8 ms",
                        "20 dari 20",
                        "Uji Lab"
                    ],
                    [
                        "Webhook dari CRM dengan tanda tangan salah",
                        "–",
                        "HTTP 401",
                        "Ditolak",
                        "Uji Lab"
                    ],
                    [
                        "Lighthouse desktop (Performance / SEO)",
                        "–",
                        "100 / 100",
                        "LCP 0,79 detik",
                        "Uji Lab"
                    ],
                    [
                        "Lighthouse mobile (Performance / SEO)",
                        "–",
                        "82 / 100",
                        "LCP 3,13 detik",
                        "Uji Lab"
                    ],
                    [
                        "Kerja admin per lead",
                        "±17 menit",
                        "±3 menit",
                        "Hemat ±83%",
                        "Simulasi"
                    ]
                ]
            },
            "subsections": [
                {
                    "subtitle": "Membaca Angka Ini",
                    "content": "Waktu 6,4 ms mencakup validasi, penyimpanan lokal SQLite, dan pengiriman event ke CRM. Keberhasilan validasi tanda tangan memastikan CRM menolak event yang dimanipulasi pihak ketiga. Penghematan kerja admin 83% didapat karena data kanal dan budget sudah terisi otomatis sejak formulir dikirim."
                },
                {
                    "subtitle": "Batas Pengukuran",
                    "content": "Uji lab dilakukan di lingkungan lokal tanpa latensi internet. Pengiriman email SMTP tidak diuji di lingkungan lokal. Simulasi kerja admin memakai pemodelan statistik 10.000 iterasi."
                }
            ],
            "image": {
                "src": "/images/case-studies/adsvar/admin-time-simulation.png",
                "alt": "Grafik Simulasi Kerja Admin per Lead: Kerja admin turun dari median 17 menit menjadi 3 menit, menghemat 83% waktu penanganan"
            }
        },
        {
            "eyebrow": "REKOMENDASI & IMPLEMENTASI",
            "mainTitle": "Siap Menguji Skenario Ini di Perusahaan Anda?",
            "paragraphs": [
                "Setiap bisnis jasa profesional memiliki pola unik dalam menerima calon klien. Arsitektur yang diterapkan pada AdsVar dapat diadaptasi untuk agensi, konsultan bisnis, penyedia B2B SaaS, hingga lembaga pendidikan yang menginginkan setiap interaksi penawaran website langsung tercatat rapi di CRM.",
                "Tim rekayasa teknologi Arsalynk siap menganalisis alur konversi calon klien Anda, merancang halaman penawaran berkecepatan tinggi dengan konteks paket otomatis, dan mengintegrasikannya ke sistem CRM perusahaan Anda secara aman."
            ]
        }
    ]
},
  'craftivation-website-kontraktor-booth': {
    "title": "Bagaimana Craftivation Menyusun Perjalanan Calon Klien Booth dalam Empat Halaman hingga Skor SEO 100 di Setiap Halaman",
    "category": "DIGITAL DEVELOPMENT",
    "tags": [
        "WEBSITE KONTRAKTOR BOOTH",
        "WEBSITE COMPANY PROFILE",
        "BOOTH PAMERAN",
        "KONTEN DARI BASIS DATA",
        "CRAFTIVATION",
        "ARSALYNK"
    ],
    "dateLabel": "NOVEMBER 2026",
    "description": "Studi kasus Craftivation: website empat halaman kontraktor booth pameran dengan paket layanan dari basis data, kartu kontak terpusat, dan skor SEO 100.",
    "coverImageAlt": "Halaman utama Craftivation dengan foto booth pameran di pusat perbelanjaan",
    "sections": [
        {
            "eyebrow": "RINGKASAN EKSEKUTIF (AT-A-GLANCE)",
            "mainTitle": "Menyusun Perjalanan Calon Klien dan Paket Booth yang Mudah Diperbarui",
            "paragraphs": [
                "Klien & Skenario: Craftivation, kontraktor booth pameran di grup Arsalynk yang menangani konsep, fabrikasi, dan instalasi booth untuk brand di pameran dan aktivasi.",
                "Fokus Masalah: Calon klien ingin memahami cara kerja dan pilihan paket sebelum menghubungi, tetapi informasinya tersebar di media sosial dan chat, dan setiap pertanyaan masuk lewat jalur yang berbeda.",
                "Solusi Produk: Website empat halaman (Beranda, Tentang Kami, Pendekatan, Kontak) dengan paket layanan yang dibaca dari basis data dan satu kartu kontak yang muncul dari setiap ajakan konsultasi.",
                "Durasi Implementasi: ±1 bulan (7 Oktober – 5 November 2026), 123 commit.",
                "Dampak Terukur: Skor Lighthouse SEO 100 dan Best Practices 100 di keempat halaman, mobile maupun desktop (Uji Lab); Perubahan paket layanan tersimpan dalam median 2,5 milidetik dan terbaca tanpa build ulang (Uji Lab); Kerja memperbarui satu paket layanan turun dari ±72 menit menjadi ±23 menit, hemat ±67% (Simulasi 10.000 iterasi)."
            ],
            "metrics": [
                {
                    "value": "100/100",
                    "label": "SEO & Best Practices",
                    "detail": "Skor Lighthouse SEO 100 dan Best Practices 100 di keempat halaman, mobile maupun desktop (Uji Lab)"
                },
                {
                    "value": "2,5 ms",
                    "label": "Update Paket Layanan",
                    "detail": "Perubahan paket layanan tersimpan dalam median 2,5 ms dan langsung terbaca tanpa build ulang (Uji Lab)"
                },
                {
                    "value": "67%",
                    "label": "Hemat Waktu Update",
                    "detail": "Kerja memperbarui satu paket layanan: ±72 menit → ±23 menit, hemat ±67% (Simulasi 10.000 iterasi)"
                }
            ]
        },
        {
            "eyebrow": "SKENARIO MASALAH",
            "mainTitle": "Ketika Calon Klien Harus Bertanya Dulu untuk Tahu Cara Kerja",
            "paragraphs": [
                "Craftivation membangun booth untuk pameran, peluncuran produk, dan aktivasi brand. Tanggal pameran tidak bisa digeser, jadi calon klien biasanya datang dengan waktu yang sempit. Sebelum menghubungi, mereka ingin tahu tiga hal: siapa Craftivation, bagaimana prosesnya, dan paket apa yang tersedia.",
                "Tanpa website yang menjawab tiga hal itu secara berurutan, situasinya mengalami tiga hambatan operasional:",
                "Pembeli B2B menilai vendor sebagian besar secara mandiri. Riset Gartner tentang perjalanan pembelian B2B mencatat pembeli hanya menghabiskan sekitar 17% waktu pembeliannya untuk bertemu calon pemasok, sehingga sisanya dipakai untuk riset sendiri, termasuk membaca website vendor."
            ],
            "subsections": [
                {
                    "subtitle": "Cara Kerja yang Hanya Ada di Kepala Tim",
                    "content": "Tahapan dari konsultasi, desain, fabrikasi, sampai instalasi dijelaskan ulang oleh tim lewat chat setiap kali ada calon klien baru. Akibatnya, penjelasan berbeda-beda tergantung siapa yang membalas, dan calon klien sulit membandingkan Craftivation dengan vendor lain."
                },
                {
                    "subtitle": "Paket yang Tersimpan di Dokumen Penawaran",
                    "content": "Pilihan paket booth baru terlihat setelah tim mengirim penawaran. Bila informasi paket ditulis langsung di kode website, setiap perubahan butuh programmer, build ulang, dan unggah ulang. Akibatnya, informasi paket jarang diperbarui dan calon klien bertanya hal yang sama berulang kali."
                },
                {
                    "subtitle": "Jalur Kontak yang Tercecer",
                    "content": "Nomor WhatsApp, email, alamat kantor, dan lokasi workshop tersebar di bio media sosial, kartu nama, dan pesan lama. Akibatnya, sebagian calon klien menghubungi kanal yang jarang dipantau, atau datang ke alamat yang salah."
                }
            ],
            "image": {
                "src": "/images/case-studies/craftivation/workflow-comparison.png",
                "alt": "Diagram Perbandingan Perjalanan Calon Klien: Bertanya ke banyak kanal vs membaca empat halaman berurutan dengan satu titik kontak"
            }
        },
        {
            "eyebrow": "SOLUSI PRODUK",
            "mainTitle": "Menghubungkan Cerita Merek, Paket Layanan, dan Jalur Konsultasi dalam Satu Website",
            "paragraphs": [
                "Craftivation dibangun sebagai website multi-halaman yang mengikuti urutan pertimbangan calon klien: mengenal perusahaan, memahami cara kerja dan paket, lalu menghubungi tim. Alih-alih menulis paket layanan langsung di kode, paket disimpan di basis data dan dibaca halaman setiap kali dimuat, sehingga tim bisa memperbaruinya tanpa membangun ulang website.",
                "Di belakang halaman, website memakai pengelolaan data sederhana: tabel paket layanan, proyek, dan statistik perusahaan yang dikelola lewat lima rute API. Di depan, semua ajakan konsultasi bermuara ke satu kartu kontak dan satu nomor tim."
            ],
            "subsections": [
                {
                    "subtitle": "A. Empat Halaman yang Mengikuti Urutan Pertimbangan",
                    "content": "Saat calon klien membuka Beranda, panel layanan dan bagian 'Bagaimana cara kami bekerja?' langsung menjelaskan tiga tahap kerja: Kenali, Kreasi, Implikasi. Dari sana, menu mengarahkan ke Tentang Kami, Pendekatan, dan Kontak. Tiga halaman turunan memuat breadcrumb, dengan stabilitas tata letak penuh (CLS 0)."
                },
                {
                    "subtitle": "B. Paket Layanan yang Dibaca dari Basis Data",
                    "content": "Saat halaman Pendekatan dimuat, tiga paket booth (Modular, Versatile, Enterprise) diambil dari tabel layanan: nama, deskripsi, gambar, urutan tampil, dan status aktif. Pada uji lokal, 10 dari 10 perubahan deskripsi paket tersimpan dalam median 2,5 milidetik dan langsung terbaca tanpa build ulang."
                },
                {
                    "subtitle": "C. Satu Kartu Kontak untuk Setiap Ajakan Konsultasi",
                    "content": "Saat calon klien menekan 'Konsultasi Sekarang' di Beranda atau 'Hubungi Kami' di menu ponsel, sebuah kartu kontak muncul dengan tiga tombol: WhatsApp, email, dan lokasi workshop di Google Maps. Halaman Kontak memperluas kartu ini menjadi tiga jalur: Konsultasi Langsung, Business Office di Jakarta, dan Production Workshop di Bogor."
                },
                {
                    "subtitle": "D. Halaman yang Siap Ditemukan Mesin Pencari",
                    "content": "Setiap halaman memiliki metadata unik, canonical tags, dan data terstruktur JSON-LD lengkap (Organization, WebSite, 3 layanan dalam OfferCatalog, serta dua lokasi fisik beserta koordinat dan jam operasional), mengantarkan skor SEO 100 di semua halaman."
                }
            ],
            "image": {
                "src": "/images/case-studies/craftivation/service-packages.png",
                "alt": "Paket Layanan di Halaman Pendekatan: Tiga paket booth dibaca dari basis data setiap kali halaman dimuat"
            }
        },
        {
            "eyebrow": "ARSITEKTUR TEKNIS",
            "mainTitle": "Di Balik Layar: Arsitektur yang Statis, Dinamis di Tempat yang Perlu, dan Mudah Dirawat",
            "paragraphs": [
                "Untuk memastikan halaman tetap cepat dan isinya mudah diperbarui, Craftivation dibangun di atas fondasi berikut:",
                "Statis untuk halaman: Next.js 16 merender keempat halaman sebagai halaman statis saat build, sehingga isi dan tata letak langsung tersedia ketika halaman dibuka. Pergeseran tata letak (CLS) bernilai 0 di semua halaman.",
                "Dinamis untuk data: paket layanan, proyek, dan statistik disimpan di SQLite dan dilayani lima rute API dengan respons median 1,6–1,9 milidetik pada uji lokal. Setiap tabel punya data cadangan, sehingga tampilan tetap utuh saat data belum siap.",
                "Mudah dirawat: komponen dipisah per bagian halaman, data diakses lewat pola repository, dan kontrak data ditulis di dokumentasi repo. Tabel proyek dan statistik sudah siap dipakai untuk galeri portofolio berikutnya."
            ],
            "image": {
                "src": "/images/case-studies/craftivation/technical-architecture.png",
                "alt": "Diagram Arsitektur Teknis & Aliran Data: Halaman dirender statis, paket layanan dibaca dari basis data, dan semua ajakan konsultasi menuju kanal tim yang sama"
            }
        },
        {
            "eyebrow": "PERJALANAN IMPLEMENTASI",
            "mainTitle": "Empat Halaman dalam Satu Bulan",
            "paragraphs": [
                "Craftivation dikerjakan dalam empat fase terstruktur oleh dua kontributor, dengan revisi desain dari tim internal di setiap fase."
            ],
            "table": {
                "caption": "Peta Jalan Implementasi Rekayasa Craftivation Empat Fase",
                "headers": [
                    "Fase",
                    "Periode",
                    "Keluaran",
                    "Cara Diuji"
                ],
                "rows": [
                    [
                        "Fondasi & data",
                        "7–9 Oktober 2026",
                        "Struktur halaman, basis data paket, proyek, dan statistik, halaman Pendekatan",
                        "Build produksi dan pemeriksaan API"
                    ],
                    [
                        "Desain & responsif",
                        "12–15 Oktober 2026",
                        "Font, animasi, tata letak responsif desktop, tablet, dan ponsel",
                        "Pemeriksaan tampilan per ukuran layar"
                    ],
                    [
                        "SEO & lokasi",
                        "19–23 Oktober 2026",
                        "Metadata per halaman, data terstruktur, alamat dan peta kantor serta workshop",
                        "Pemeriksaan metadata dan tautan peta"
                    ],
                    [
                        "Beranda baru",
                        "2–5 November 2026",
                        "Panel layanan bergaya section changer, kartu kontak, penyesuaian mobile dan tablet",
                        "Pemeriksaan responsif"
                    ]
                ]
            }
        },
        {
            "eyebrow": "BENCHMARK & DAMPAK",
            "mainTitle": "Bukti Kinerja Laboratorium dan Simulasi Efisiensi Pembaruan Konten",
            "paragraphs": [
                "Berdasarkan uji lokal pada 9 November 2026 (build produksi, basis data bawaan), pengukuran Lighthouse 12 untuk keempat halaman, serta simulasi distribusi segitiga 10.000 iterasi untuk pembaruan paket layanan:"
            ],
            "table": {
                "caption": "Tabel Pengukuran Performa Lighthouse, Kecepatan API, dan Simulasi Waktu Update",
                "headers": [
                    "Indikator",
                    "Sebelum",
                    "Dengan Craftivation",
                    "Hasil",
                    "Status"
                ],
                "rows": [
                    [
                        "Skor SEO Lighthouse",
                        "–",
                        "100 di 4 dari 4 halaman",
                        "Mobile dan desktop",
                        "Uji Lab"
                    ],
                    [
                        "Skor Best Practices Lighthouse",
                        "–",
                        "100 di 4 dari 4 halaman",
                        "Mobile dan desktop",
                        "Uji Lab"
                    ],
                    [
                        "Pergeseran tata letak (CLS)",
                        "–",
                        "0",
                        "Semua halaman",
                        "Uji Lab"
                    ],
                    [
                        "Performance desktop",
                        "–",
                        "80–99",
                        "Tentang Kami dan Kontak 99",
                        "Uji Lab"
                    ],
                    [
                        "Respons API konten",
                        "–",
                        "median 1,6–1,9 ms",
                        "50 permintaan per API",
                        "Uji Lab"
                    ],
                    [
                        "Perubahan paket layanan",
                        "Ubah kode, build, deploy",
                        "median 2,5 ms, 10 dari 10 tersimpan",
                        "Tanpa build ulang",
                        "Uji Lab"
                    ],
                    [
                        "Kerja memperbarui satu paket layanan",
                        "±72 menit",
                        "±23 menit",
                        "Hemat ±67%",
                        "Simulasi"
                    ]
                ]
            },
            "subsections": [
                {
                    "subtitle": "Membaca Angka Ini",
                    "content": "SEO 100 di semua halaman didapat dari metadata unik, breadcrumbs, data terstruktur, sitemap, dan arsitektur crawlable. Paket tersimpan dalam 2,5 ms langsung di database SQLite tanpa siklus build dan deploy. Penghematan kerja 67% didapat dari penghapusan ketergantungan programmer untuk pembaruan paket rutin."
                },
                {
                    "subtitle": "Batas Pengukuran",
                    "content": "Uji lab dilakukan di server lokal tanpa latensi CDN. Pengelolaan data saat ini melalui API internal sebelum dashboard admin publik dirilis. Simulasi kerja pembaruan memakai pemodelan 10.000 iterasi."
                }
            ],
            "image": {
                "src": "/images/case-studies/craftivation/package-update-simulation.png",
                "alt": "Grafik Simulasi Kerja Memperbarui Paket Layanan: Kerja pembaruan turun dari median 72 menit menjadi 23 menit, menghemat 67% waktu tim"
            }
        },
        {
            "eyebrow": "REKOMENDASI & IMPLEMENTASI",
            "mainTitle": "Siap Menguji Skenario Ini di Perusahaan Anda?",
            "paragraphs": [
                "Setiap bisnis proyek memiliki cara tersendiri dalam mempresentasikan prosesnya. Pola yang diterapkan pada Craftivation relevan untuk kontraktor interior, event organizer, studio arsitektur, hingga manufaktur kustom yang ingin calon klien memahami alur kerja sebelum menghubungi tim sales.",
                "Tim rekayasa teknologi Arsalynk siap menyusun struktur navigasi berorientasi konversi, mengimplementasikan katalog layanan berbasis basis data dinamis, dan menghubungkan seluruh titik kontak ke kanal komunikasi tim Anda secara terpusat."
            ]
        }
    ]
},
};

export function localizeCaseStudies(
  studies: CaseStudyArticle[],
  locale: Locale
): CaseStudyArticle[] {
  if (locale === 'en') return studies;
  return studies.map((study) => {
    const trans = CASE_STUDIES_ID_MAP[study.slug];
    if (!trans) return study;
    return {
      ...study,
      ...trans,
    };
  });
}

export function getLocalizedCaseStudies(locale: Locale): CaseStudyArticle[] {
  return localizeCaseStudies(CASE_STUDIES_DUMMY_DATA, locale);
}

export function getLocalizedCaseStudy(
  slug: string,
  locale: Locale
): CaseStudyArticle | undefined {
  const studies = getLocalizedCaseStudies(locale);
  return (
    studies.find((s) => s.slug === slug) ||
    studies.find(
      (s) =>
        (slug === 'myboss-logistics-fleet-management' &&
          s.slug === 'mybos-fondasi-pelacakan-armada') ||
        (slug === 'mybos-fondasi-pelacakan-armada' &&
          s.slug === 'myboss-logistics-fleet-management') ||
        (slug === 'markaplus-ai-assistant' &&
          s.slug === 'marka-plus-asisten-ai-erp') ||
        (slug === 'marka-plus-asisten-ai-erp' &&
          s.slug === 'markaplus-ai-assistant') ||
        ((slug === 'marka-project-manager' || slug === 'marka-finance-accounting') &&
          s.slug === 'markasuite-erp-terpadu-arsalynk') ||
        (slug === 'markasuite-erp-terpadu-arsalynk' &&
          (s.slug === 'marka-project-manager' || s.slug === 'marka-finance-accounting'))
    )
  );
}

// ============================================================================
// 5. LEADERSHIP THOUGHTS (LeadershipThoughtArticle[])
// ============================================================================
const LEADERSHIP_THOUGHTS_ID_MAP: Record<string, Partial<LeadershipThoughtArticle>> = {
  "silent-clients-are-not-always-satisfied": {
    "title": "Hati-hati, senyum heningnya klien belum tentu tanda puas. Owner perlu tahu tanda-tandanya",
    "category": "KEPEMIMPINAN PELANGGAN",
    "tags": [
      "PENGALAMAN PELANGGAN",
      "UMPAN BALIK",
      "RETENSI",
      "DATA PELANGGAN"
    ],
    "author": "Kepemimpinan Artic Analytica",
    "readTime": "6 menit baca",
    "date": "November 2026",
    "language": "id-ID",
    "description": "Klien yang komplain masih memberi kesempatan. Klien yang diam sering sudah memutuskan pergi. Cara owner membaca tanda-tandanya sebelum omzet bicara.",
    "coverImageAlt": "Kotak masuk yang sepi bisa berarti klien puas, bisa juga berarti mereka sudah berhenti berharap.",
    "sections": [
      {
        "eyebrow": "RINGKASAN GAGASAN",
        "mainTitle": "Mendeteksi Keputusan Sebelum Terlambat",
        "paragraphs": [
          "Gagasan: Klien yang komplain masih memberi Anda kesempatan memperbaiki. Klien yang diam sering sudah memutuskan, hanya belum memberi tahu.",
          "Kenapa penting sekarang: Survei Qualtrics XM Institute terhadap 28.400 konsumen di 26 negara, termasuk Indonesia, mencatat hanya sepertiga yang memberi masukan langsung setiap kali mengalami pengalaman buruk. Sementara itu, 51% mengurangi atau berhenti belanja di merek tersebut.",
          "Yang bisa dilakukan pemimpin: Berhenti menjadikan 'nol komplain' sebagai target, buat komplain semudah memesan, dan baca tanda menjauh dari perilaku klien."
        ]
      },
      {
        "eyebrow": "GAGASAN UTAMA",
        "mainTitle": "Bulan tanpa komplain belum tentu bulan yang baik",
        "paragraphs": [
          "Rapat bulanan dibuka dengan kabar yang enak didengar: tidak ada keluhan masuk sama sekali. Kepala layanan pelanggan tersenyum, direksi mengangguk, rapat pindah ke agenda berikutnya. Dua bulan kemudian, tiga klien lama tidak memperpanjang kontrak. Tidak ada yang bisa menjawab sejak kapan mereka mulai menjauh.",
          "Komplain itu repot bagi klien. Mereka harus meluangkan waktu, menjelaskan masalah dari awal, dan menanggung rasa tidak enak. Orang mau repot kalau masih berharap hubungannya berlanjut. Klien yang berhenti bicara biasanya sudah menghitung bahwa memperbaiki keadaan tidak sebanding dengan tenaganya.",
          "Diam sering kali adalah keputusan yang belum diumumkan.",
          "Artic Analytica sampai pada pandangan ini dari pekerjaan menyatukan data pelanggan di grup Arsalynk. Di proyek AdsVar, setiap chat, tiket, dan masukan dari website masuk ke satu CRM sebagai lima jenis peristiwa (Aktual, dari kode). Begitu semua suara klien berkumpul di satu tempat, terlihat juga siapa yang tiba-tiba berhenti terdengar."
        ],
        "image": {
          "src": "/images/leadership-thoughts/silent-clients-are-not-always-satisfied/image1.png",
          "alt": "Diagram dua panel: Membaca diam sebagai puas vs membaca diam sebagai sinyal."
        }
      },
      {
        "eyebrow": "KENAPA MASALAH INI BERTAHAN",
        "mainTitle": "Organisasi sering diajari takut pada komplain",
        "paragraphs": [
          "Komplain dijadikan nilai rapor. Saat jumlah keluhan masuk ke target kinerja, tim terdorong menekan angkanya, bukan mendengarkan isinya. Tim dengan keluhan paling sedikit terlihat paling baik. Bisa jadi pelanggannya hanya sudah malas bicara.",
          "Kebanyakan pelanggan memang tidak bicara langsung. Survei Qualtrics XM Institute yang dirilis Februari 2024 menemukan hanya sepertiga konsumen yang memberi masukan langsung ke perusahaan setiap kali pengalamannya buruk. Sisanya menyampaikan lewat jalur yang lebih tidak langsung: percakapan dengan pusat layanan, chat, ulasan produk, atau media sosial. Di survei yang sama, 51% konsumen mengurangi atau berhenti belanja setelah pengalaman buruk.",
          "Dua angka itu kalau dibaca bersama cukup mengganggu. Banyak orang kecewa, sedikit yang bilang langsung, dan separuh diam-diam mengurangi belanja.",
          "Sinyalnya tercecer. Keluhan kecil masuk ke WhatsApp sales, email admin, komentar Instagram, atau sekadar ingatan account manager. Tidak ada yang melihat gambarnya utuh. Gejalanya mudah dikenali: rapat menyimpulkan 'klien X aman' hanya dari obrolan santai, sementara tiket terakhirnya sudah enam bulan lalu dan frekuensi ordernya turun separuh."
        ]
      },
      {
        "eyebrow": "PELAJARAN DARI LAPANGAN",
        "mainTitle": "Saat semua suara klien masuk ke satu tempat",
        "paragraphs": [
          "AdsVar, brand iklan berbayar di grup kami, menerima calon klien dari banyak pintu: formulir kontak, pilihan paket harga, live chat, tiket bantuan, dan formulir masukan. Kalau masing-masing disimpan sendiri, tim hanya melihat potongan cerita. Admin tahu ada tiket, sales tahu ada penawaran, tapi tidak ada yang tahu bahwa klien yang sama baru saja menolak penawaran lalu membuka tiket keluhan.",
          "Keputusan kami sederhana: setiap jenis suara klien punya tempat yang sama. Website AdsVar mengirim lima jenis peristiwa ke CRM MarkaSuite, yaitu pertanyaan masuk, pesan chat, tiket, masukan, dan keputusan atas penawaran (Aktual, dari kode). Keputusan penawaran ikut dicatat, termasuk yang ditolak, karena penolakan juga sinyal. Kalau CRM sedang tidak bisa dihubungi, datanya tetap tersimpan di website dan kegagalannya tercatat (Uji Lab).",
          "Di uji lab, live chat, tiket, dan masukan masing-masing diterima dan diteruskan ke CRM (3 dari 3, Uji Lab). Widget chat memeriksa balasan baru setiap 5 detik (Aktual, dari kode), jadi percakapan tidak menggantung menunggu admin membuka halaman lain.",
          "Pelajarannya, teknologi justru bagian yang paling mudah. Yang membuat diam bisa terbaca adalah keputusan bahwa semua sinyal, termasuk yang tidak enak didengar, dikumpulkan di satu catatan per klien. Satu catatan jujur: angka di atas berasal dari uji lab, bukan data klien sungguhan, jadi belum ada klaim soal retensi. Cerita lengkapnya ada di case study AdsVar."
        ],
        "image": {
          "src": "/images/leadership-thoughts/silent-clients-are-not-always-satisfied/image3.png",
          "alt": "Diagram alur: Di AdsVar, lima jenis interaksi klien dikirim ke satu CRM."
        }
      },
      {
        "eyebrow": "KERANGKA KERJA",
        "mainTitle": "Dengarkan diamnya klien, bukan hanya suaranya",
        "subsections": [
          {
            "subtitle": "Hapus 'nol komplain' dari target",
            "content": "Ganti target jumlah keluhan dengan sesuatu yang bisa dikendalikan tim: seberapa cepat keluhan dijawab dan berapa yang benar-benar selesai. Tim yang berani mengangkat keluhan perlu dihargai, bukan dihukum lewat angka. Tanda di organisasi Anda: tim merayakan bulan tanpa keluhan, tapi tidak ada yang mengecek angka order ulang di bulan yang sama. Langkah pertama: minggu ini, ganti satu indikator 'jumlah komplain' di laporan Anda dengan 'waktu sampai keluhan selesai'."
          },
          {
            "subtitle": "Buat komplain semudah memesan",
            "content": "Kalau klien harus mencari nomor yang tepat, menunggu jam kerja, lalu menjelaskan ulang ke tiga orang, kebanyakan akan memilih diam. Sediakan jalur yang singkat di tempat klien sudah berada, misalnya formulir atau chat di website, dan pastikan ada orang yang membalas. Coba sendiri: menyamar jadi klien, lalu hitung berapa langkah sampai keluhan Anda diterima."
          },
          {
            "subtitle": "Kumpulkan sinyal di satu tempat",
            "content": "Chat sales, email admin, tiket, ulasan, dan penawaran yang ditolak sebaiknya bermuara di satu catatan per klien. Anda tidak perlu sistem besar untuk memulai. Satu tabel bersama yang diisi setiap minggu sudah lebih baik daripada lima kepala yang menyimpan potongan berbeda."
          },
          {
            "subtitle": "Pantau perubahan perilaku",
            "content": "Klien jarang mengumumkan bahwa mereka akan pergi, tapi perilakunya berubah lebih dulu. Balasan pesan makin singkat. Order ulang makin jarang. Permintaan revisi berhenti, padahal dulu mereka rewel. Pertanyaan yang biasanya rutin tiba-tiba hilang, dan rapat evaluasi terus ditunda. Ambil sepuluh klien terbesar Anda, lalu bandingkan tiga bulan terakhir dengan tiga bulan sebelumnya."
          }
        ],
        "image": {
          "src": "/images/leadership-thoughts/silent-clients-are-not-always-satisfied/image2.png",
          "alt": "Daftar visual lima tanda yang bisa dicek owner ketika klien mulai menjauh."
        }
      },
      {
        "eyebrow": "PERTANYAAN UNTUK PEMIMPIN",
        "mainTitle": "Kapan terakhir Anda menghubungi klien yang tidak pernah mengeluh?",
        "paragraphs": [
          "Apakah jumlah komplain masih masuk ke penilaian kinerja tim Anda?",
          "Berapa langkah yang harus dilalui klien untuk menyampaikan keluhan, dan sudahkah Anda mencobanya sendiri?",
          "Di berapa tempat berbeda suara klien Anda tersimpan hari ini?",
          "Klien mana yang order ulangnya turun dalam tiga bulan terakhir, dan apakah sudah ada yang bertanya kenapa?",
          "Kalau besok klien terbesar Anda pergi, data apa yang seharusnya sudah memberi tahu Anda sebulan sebelumnya?",
          "Klien yang komplain sedang berusaha mempertahankan hubungan dengan Anda. Keheningan yang tidak pernah dicek jauh lebih mahal."
        ]
      },
      {
        "eyebrow": "CATATAN & REFERENSI",
        "mainTitle": "Definisi, Bukti Internal & Rujukan",
        "paragraphs": [
          "Definisi Sinyal Klien: Setiap jejak interaksi klien yang bisa dicatat, termasuk chat, tiket, masukan, ulasan, penawaran yang diterima atau ditolak, dan pola order.",
          "Sumber Data Internal: Lembar fakta Case Study AdsVar: A6 (data tetap tersimpan saat CRM tidak bisa dihubungi, Uji Lab), A7 (lima jenis peristiwa ke CRM, Aktual dari kode), A8 (live chat, tiket, dan masukan diteruskan ke CRM, 3/3, Uji Lab), A12 (pemeriksaan balasan chat tiap 5 detik, Aktual dari kode). Uji lab memakai server CRM tiruan; tidak ada data klien sungguhan.",
          "Rujukan Eksternal: Qualtrics XM Institute (2024). Bad customer service threatens $3.7 trillion annually as frontline workers reach a breaking point. Rilis 1 Februari 2024; survei 28.400 konsumen di 26 negara, data Q3 2023."
        ]
      }
    ]
  },
  "the-shadow-team-behind-slow-projects": {
    "title": "Proyek sering lambat bukan karena klien, tapi karena tim bayangan Anda. Siapa mereka, dan kenapa bisa menghambat?",
    "category": "KEPEMIMPINAN DIGITAL",
    "tags": [
      "PROYEK DIGITAL",
      "DEVELOPER",
      "VENDOR",
      "TATA KELOLA PROYEK"
    ],
    "author": "Kepemimpinan Web2Up",
    "readTime": "6 menit baca",
    "date": "November 2026",
    "language": "id-ID",
    "description": "Banyak proyek website dan aplikasi molor di tempat yang tidak dilihat owner: developer di balik layar. Siapa mereka, kenapa menghambat, dan apa yang bisa dilakukan pemimpin.",
    "coverImageAlt": "Yang hadir di rapat sering bukan orang yang mengerjakan proyeknya.",
    "sections": [
      {
        "eyebrow": "RINGKASAN GAGASAN",
        "mainTitle": "Mengurai Kemacetan Proyek yang Tak Terlihat",
        "paragraphs": [
          "Gagasan: Proyek digital sering molor bukan di meja klien, tapi di tim bayangan, yaitu orang-orang yang mengerjakan proyek tetapi tidak terlihat dan tidak bisa dihubungi langsung oleh owner.",
          "Kenapa penting sekarang: Studi atas 133 proyek populer di GitHub menemukan 65% bisa lumpuh bila satu atau dua developer kunci berhenti (truck factor). Di tempat kerja umum, 45% developer menghadapi silo pengetahuan setiap minggu.",
          "Yang bisa dilakukan pemimpin: Tanyakan siapa yang menulis kodenya, minta progres yang bisa dilihat sendiri, pastikan kode dan akses milik perusahaan, dan jangan biarkan sistem bergantung pada satu orang."
        ]
      },
      {
        "eyebrow": "GAGASAN UTAMA",
        "mainTitle": "Antrean proyek Anda ada di tempat yang tidak Anda lihat",
        "paragraphs": [
          "Proyek website sudah molor tiga minggu. Di rapat, owner mulai menyalahkan dirinya sendiri karena terlalu banyak revisi, sementara manajer vendor tersenyum sopan dan berkata 'sedang dalam proses'. Begitu rapat selesai, pekerjaannya masuk ke antrean seseorang yang tidak pernah hadir di ruangan itu.",
          "Itulah tim bayangan. Mereka tidak jahat dan sering kali sangat terampil. Masalahnya, mereka tidak terlihat, tidak bisa dihubungi langsung, dan sedang memegang empat proyek lain dari klien yang berbeda.",
          "Proyek jarang lambat karena kodenya susah. Lebih sering lambat karena orang yang menulis kodenya sedang menunggu klarifikasi, bekerja paruh waktu, atau harus menebak-nebak apa yang dimaksud di dokumen revisi.",
          "Web2Up melihat pola ini dari dua sisi: saat mengambil alih proyek yang telantar dari pihak lain, dan saat menyusun tim kami sendiri agar tidak mengulangi kesalahan yang sama."
        ],
        "image": {
          "src": "/images/leadership-thoughts/the-shadow-team-behind-slow-projects/image3.png",
          "alt": "Diagram dua lapis: Yang dilihat owner vs yang sebenarnya berjalan di balik layar."
        }
      },
      {
        "eyebrow": "KENAPA MASALAH INI BERTAHAN",
        "mainTitle": "Proyek dikelola lewat perantara, bukan lewat pekerjaannya",
        "paragraphs": [
          "Pekerjaannya tidak terlihat. Owner berbicara dengan account manager, bukan dengan yang menulis kode. Pesan diteruskan lewat dua atau tiga kepala sebelum sampai ke developer. Setiap perantara menambah kemungkinan salah paham dan waktu tunggu.",
          "Prioritasnya bersaing. Developer freelance dan vendor kecil memegang banyak klien sekaligus. Saat proyek Anda tertahan oleh satu pertanyaan kecil, developer beralih ke proyek lain. Kembali ke proyek Anda butuh waktu lagi untuk membaca ulang konteksnya.",
          "Pengetahuannya ada di kepala satu orang. Akses server, cara deploy, alasan di balik keputusan teknis, semuanya sering hanya dipegang satu developer. Avelino dan rekan (2016) mengukur 'truck factor', yaitu berapa developer yang kalau berhenti akan melumpuhkan proyek. Dari 133 proyek populer di GitHub, 65% punya truck factor hanya satu atau dua orang.",
          "Kalau proyek terbuka yang dikerjakan banyak orang saja seperti itu, proyek tertutup di vendor klien jauh lebih rentan."
        ]
      },
      {
        "eyebrow": "PELAJARAN DARI LAPANGAN",
        "mainTitle": "Satu developer, tiga minggu, dan apa yang membuatnya tetap bisa dialihkan",
        "paragraphs": [
          "Website AdsVar, brand iklan berbayar di grup kami, dibangun cepat: 30 commit dalam tiga minggu oleh satu kontributor utama (Aktual, dari data git).",
          "Kami sadar kecepatan itu punya harga. Kalau developer tersebut berhalangan, apakah orang lain bisa langsung melanjutkan, atau proyeknya akan berhenti seperti kasus tim bayangan? Jawabannya bukan menambah orang di rapat, melainkan menulis 'kontrak' di dalam kodenya sendiri.",
          "Setiap bentuk data, cara pemanggilan API, dan status formulir ditulis dengan definisi tipe yang ketat (TypeScript) serta validasi otomatis (Zod). Developer baru yang membuka kode itu tidak perlu menebak apa yang dimaksud, karena aturannya tertulis di sana.",
          "Pelajarannya, tim kecil tidak otomatis berisiko. Yang berisiko adalah tim kecil yang bekerja tanpa catatan dan tanpa standar yang bisa dibaca orang lain. Cerita lengkapnya ada di case study AdsVar."
        ],
        "image": {
          "src": "/images/leadership-thoughts/the-shadow-team-behind-slow-projects/image1.png",
          "alt": "Alur horizontal: Dari 1 kontributor 30 commit ke kontrak arsitektur yang tertulis di kode."
        }
      },
      {
        "eyebrow": "KERANGKA KERJA",
        "mainTitle": "Keluarkan tim bayangan ke tempat terang",
        "subsections": [
          {
            "subtitle": "Tanyakan siapa yang benar-benar menulis kodenya",
            "content": "Di awal proyek, minta vendor menyebut nama orang yang mengerjakan, status kepegawaiannya (karyawan tetap, freelance, atau subkontraktor), dan berapa proyek lain yang sedang ia pegang. Tanda di organisasi Anda: Anda kenal account manager vendor dengan baik, tapi tidak pernah tahu siapa yang menulis kodenya. Langkah pertama: kirim satu email hari ini yang menanyakan siapa saja developer yang dialokasikan untuk proyek Anda minggu ini."
          },
          {
            "subtitle": "Minta progres yang bisa Anda buka sendiri",
            "content": "Laporan mingguan berisi persentase mudah dibuat dan sulit dicek. Minta tautan ke server staging atau repositori yang diperbarui minimal seminggu sekali, sehingga Anda bisa melihat sendiri apa yang sudah jalan."
          },
          {
            "subtitle": "Pastikan kode dan aksesnya milik perusahaan Anda",
            "content": "Repositori kode, akun hosting, domain, dan akun layanan pihak ketiga sebaiknya terdaftar atas nama perusahaan, dengan developer diberi akses, bukan sebaliknya. Dokumentasi minimal berisi cara menjalankan, cara deploy, dan daftar sistem yang terhubung. Kalau hubungan dengan vendor berakhir, Anda tidak perlu mulai dari nol. Tanda di organisasi Anda: untuk mengubah satu teks di website, Anda harus menunggu satu orang tertentu yang memegang semua akses."
          },
          {
            "subtitle": "Jangan biarkan sistem bergantung pada satu orang",
            "content": "Tim kecil boleh, ketergantungan tunggal jangan. Minta minimal dua orang di pihak vendor yang memahami arsitektur proyek, atau pastikan kodenya ditulis dengan standar yang cukup jelas sehingga developer baru bisa masuk tanpa harus membaca pikiran orang lain."
          }
        ],
        "image": {
          "src": "/images/leadership-thoughts/the-shadow-team-behind-slow-projects/image4.jpg",
          "alt": "Foto laptop menampilkan kode: pekerjaan yang paling menentukan jadwal proyek sering terjadi di layar yang tidak pernah dilihat owner."
        }
      },
      {
        "eyebrow": "PERTANYAAN UNTUK PEMIMPIN",
        "mainTitle": "Siapa nama orang yang sedang menulis kode proyek Anda minggu ini?",
        "paragraphs": [
          "Apakah Anda tahu status developer di proyek Anda: karyawan vendor, freelance, atau subkontraktor?",
          "Berapa proyek lain yang sedang dipegang orang yang sama?",
          "Bisakah Anda membuka versi terbaru proyek Anda sekarang juga, tanpa meminta siapa pun?",
          "Atas nama siapa repositori, hosting, dan domain proyek Anda terdaftar?",
          "Kalau developer utama berhenti besok, berapa lama sampai orang lain bisa melanjutkan?",
          "Proyek yang molor jarang disebabkan satu keputusan buruk. Biasanya karena terlalu banyak bagian penting yang bekerja di tempat yang tidak terlihat."
        ]
      },
      {
        "eyebrow": "CATATAN & REFERENSI",
        "mainTitle": "Definisi, Bukti Internal & Rujukan",
        "paragraphs": [
          "Definisi Tim Bayangan: Orang-orang yang mengerjakan proyek digital tetapi tidak terlihat dan tidak bisa dihubungi langsung oleh owner, misalnya subkontraktor pihak ketiga atau developer freelance di balik vendor.",
          "Definisi Truck Factor: Jumlah minimum developer yang bila berhenti akan melumpuhkan kelanjutan proyek.",
          "Sumber Data Internal: Lembar fakta Case Study AdsVar: 30 commit, 15 Oktober sampai 3 November 2026, 1 kontributor utama.",
          "Rujukan Eksternal: Avelino, G., Passos, L., Hora, A., & Valente, M. T. (2016). A Novel Approach for Estimating Truck Factors. IEEE SANER. Stack Overflow (2024). Developer Survey: 45,1% developer profesional menghadapi silo pengetahuan mingguan."
        ]
      }
    ]
  },
  "expensive-software-only-three-people-use": {
    "title": "Software mahal yang akhirnya hanya dipakai tiga orang: Kenapa sistem baru sering ditinggal dan bagaimana mencegahnya",
    "category": "KEPEMIMPINAN OPERASIONAL",
    "tags": [
      "ADOPSI SISTEM",
      "ERP",
      "TRANSFORMASI DIGITAL",
      "PRODUKTIVITAS"
    ],
    "author": "Kepemimpinan MarkaSuites",
    "readTime": "6 menit baca",
    "date": "November 2026",
    "language": "id-ID",
    "description": "Sistem baru sering dipilih dari demo yang memukau, lalu tim diam-diam kembali ke spreadsheet. Kenapa sistem ditinggal pelan-pelan dan cara memilih dari hari kerja biasa.",
    "coverImageAlt": "Lisensi dibeli untuk semua orang. Yang benar-benar membuka sistemnya bisa dihitung dengan jari.",
    "sections": [
      {
        "eyebrow": "RINGKASAN GAGASAN",
        "mainTitle": "Kenapa Sistem Baru Ditinggal Pelan-pelan",
        "paragraphs": [
          "Gagasan: Sistem baru jarang gagal karena ditolak. Lebih sering ia ditinggal pelan-pelan, karena dipilih dari demo yang memukau, bukan dari hari kerja biasa tim yang memakainya.",
          "Kenapa penting sekarang: SaaS Management Index 2026 dari Zylo, yang menganalisis lebih dari 40 juta lisensi, mencatat rata-rata organisasi hanya memanfaatkan 52% dari lisensi software yang mereka bayar. Artinya, hampir separuh uang software terbuang untuk alat yang tidak dipakai.",
          "Yang bisa dilakukan pemimpin: Ikuti satu hari kerja tim sebelum menonton demo, libatkan pemakai sejak memilih, pastikan sistem baru lebih cepat dari cara lama, dan ukur siapa yang membuka sistem, bukan berapa lisensi yang dibeli."
        ]
      },
      {
        "eyebrow": "GAGASAN UTAMA",
        "mainTitle": "Tim jarang menolak sistem baru, mereka hanya tidak pernah ditanya",
        "paragraphs": [
          "Demo berjalan mulus. Dasbornya rapi, grafiknya bergerak, presenter vendor menjawab semua pertanyaan direksi. Kontrak ditandatangani, lisensi dibeli untuk satu divisi, pelatihan diadakan satu hari. Tiga bulan kemudian, yang membuka sistem setiap hari hanya staf admin yang wajib memasukkan laporan ke direksi. Anggota tim lain kembali mencatat di spreadsheet sendiri.",
          "Tidak ada yang secara resmi menolak sistem itu. Tim hanya memilih alat yang lebih cepat untuk pekerjaan mereka hari itu. Kalau membuka satu data di sistem baru butuh lima klik dan sepuluh detik, sementara spreadsheet langsung ada di depan mata, orang akan memilih spreadsheet setiap kali.",
          "Cara pandang ini datang dari pekerjaan MarkaSuites membangun Marka+ ERP. Versi awal sistem ini butuh 18.046 milidetik, sekitar 18 detik, dari saat login sampai dasbor eksekutif tampil lengkap (Uji Lab). Waktu itu terasa wajar di ruang uji coba, tapi tidak akan bertahan di hari kerja biasa: staf yang terburu-buru akan langsung beralih ke kertas.",
          "Yang menentukan sebuah sistem dipakai atau ditinggal adalah hari kerja biasa, bukan hari demo."
        ],
        "image": {
          "src": "/images/leadership-thoughts/expensive-software-only-three-people-use/image1.png",
          "alt": "Diagram dua panel: Dipilih dari demo vs dipilih dari hari kerja."
        }
      },
      {
        "eyebrow": "KENAPA MASALAH INI BERTAHAN",
        "mainTitle": "Yang memutuskan membeli bukan yang memakai setiap hari",
        "paragraphs": [
          "Yang membeli melihat fitur, yang memakai merasakan gesekan. Direksi terkesan oleh dasbor analitik dan grafik prediktif. Staf administrasi hanya ingin memasukkan faktur tanpa kursornya tersendat. Ketika sistem dipilih dari fitur yang terlihat keren di presentasi, kebutuhan harian yang membosankan sering terlewat.",
          "Sistem baru menambah pekerjaan sebelum mengurangi beban. Sebelum otomatisasi memberi manfaat, tim harus memasukkan data awal, menyesuaikan kebiasaan, dan sering kali tetap menjalankan sistem lama secara paralel. Kalau fase transisi ini tidak didampingi, tim akan merasa sistem baru hanya beban tambahan.",
          "Kecepatan sistem kalah dari spreadsheet. Spreadsheet punya kelemahan besar dalam hal keamanan dan integrasi, tapi punya satu keunggulan tak tertandingi: ia instan. Kalau software enterprise terasa lebih lambat walau hanya beberapa detik per transaksi, gesekan kecil itu terakumulasi menjadi alasan kuat untuk meninggalkannya.",
          "Angka Zylo 2026 menunjukkan pemborosan lisensi terjadi secara massal: dengan rata-rata utilisasi hanya 52%, hampir separuh anggaran software terbuang percuma."
        ]
      },
      {
        "eyebrow": "PELAJARAN DARI LAPANGAN",
        "mainTitle": "Membuat sistem lebih cepat dari spreadsheet",
        "paragraphs": [
          "Saat MarkaSuites membangun Marka+ ERP, prioritas utama rekayasa sistem diarahkan pada pengurangan latensi di setiap alur kerja operasional. Kami tahu staf akuntansi dan gudang tidak akan bertahan memakai sistem yang lambat.",
          "Di uji benchmark, waktu dari login sampai dasbor eksekutif terpangkas dari 18.046 ms menjadi 2.009 ms, penurunan latensi 89% (Uji Lab, benchmark tim pengembang). Panggilan data neraca saldo dioptimalkan dari 4.617,9 ms menjadi 1.306,7 ms (Uji Lab).",
          "Simulasi kami memperkirakan rekapitulasi progres proyek mingguan turun dari sekitar 88 menit menjadi sekitar 20 menit per proyek (Simulasi 10.000 iterasi). Penghematan waktu itu yang membuat staf dengan sukarela meninggalkan spreadsheet.",
          "Pelajarannya: adopsi sistem tidak ditentukan oleh instruksi direksi, melainkan oleh apakah hari kerja staf menjadi lebih ringan atau lebih berat saat memakai sistem tersebut. Cerita lengkapnya ada di case study MarkaSuite."
        ],
        "image": {
          "src": "/images/leadership-thoughts/expensive-software-only-three-people-use/image4.png",
          "alt": "Perbandingan benchmark waktu Marka+ ERP: login ke dasbor eksekutif 18.046 ms vs 2.009 ms."
        }
      },
      {
        "eyebrow": "KERANGKA KERJA",
        "mainTitle": "Pilih sistem dari hari kerja, bukan dari hari demo",
        "subsections": [
          {
            "subtitle": "Ikuti satu hari kerja tim sebelum menonton demo",
            "content": "Duduklah di samping staf administrasi atau operasional selama setengah hari. Lihat bagaimana mereka menerima pesanan, mencatat inventaris, dan menyelesaikan masalah harian. Catat alat apa yang benar-benar mereka gunakan dan di mana mereka paling banyak membuang waktu."
          },
          {
            "subtitle": "Libatkan pemakai sejak memilih",
            "content": "Bawa perwakilan staf yang akan memakai sistem setiap hari ke sesi demo vendor. Minta mereka mencoba memasukkan data transaksi nyata mereka sendiri, bukan data contoh yang sudah disiapkan vendor. Tanda di organisasi Anda: sistem baru diumumkan kepada tim lewat email pengumuman tanpa ada staf yang pernah melihatnya sebelumnya."
          },
          {
            "subtitle": "Pastikan sistem baru lebih cepat dari cara lama",
            "content": "Ukur waktu transaksi dasar sebelum membeli. Memasukkan satu pesanan di cara lama butuh berapa menit? Di sistem baru butuh berapa menit? Kalau sistem baru ternyata lebih lambat walau lebih canggih, tim akan diam-diam mencari jalan pintas."
          },
          {
            "subtitle": "Ukur siapa yang membuka, bukan berapa lisensi",
            "content": "Jangan nilai keberhasilan sistem dari berapa lisensi yang aktif atau berapa modul yang terpasang. Ukur aktivitas pengguna mingguan dan periksa pekerjaan apa yang masih berjalan di luar sistem. Lakukan peninjauan 30 hari setelah peluncuran: hentikan lisensi yang menganggur atau perbaiki alur kerjanya."
          }
        ],
        "image": {
          "src": "/images/leadership-thoughts/expensive-software-only-three-people-use/image2.jpg",
          "alt": "Foto kertas spreadsheet penuh angka: saat sistem baru terasa lambat, tim kembali ke spreadsheet manual."
        }
      },
      {
        "eyebrow": "PERTANYAAN UNTUK PEMIMPIN",
        "mainTitle": "Berapa orang yang benar-benar membuka sistem Anda minggu lalu?",
        "paragraphs": [
          "Siapa yang menulis kebutuhan sistem terakhir yang Anda beli, dan apakah pemakai hariannya ikut?",
          "Pernahkah vendor mendemokan pekerjaan nyata tim Anda, bukan skenario contoh mereka?",
          "Berapa detik yang dibutuhkan staf Anda untuk menemukan satu angka di sistem, dibanding di spreadsheet?",
          "Masih adakah data yang diisi dua kali, di sistem dan di luar sistem?",
          "Berapa lisensi yang Anda bayar bulan ini, dan berapa yang login dalam 30 hari terakhir?",
          "Sistem yang baik tidak perlu dipaksakan. Tim akan memakainya karena hari kerja mereka jadi lebih ringan."
        ]
      },
      {
        "eyebrow": "CATATAN & REFERENSI",
        "mainTitle": "Definisi, Bukti Internal & Rujukan",
        "paragraphs": [
          "Definisi Adopsi Sistem: Seberapa banyak pemakai yang benar-benar menjalankan pekerjaan hariannya di sistem, diukur dari login aktif dan aktivitas nyata, bukan dari jumlah akun berbayar.",
          "Sumber Data Internal: Lembar fakta Case Study MarkaSuite: F1 (login sampai dasbor eksekutif 18.046 ms → 2.009 ms, turun 89%, Uji Lab), F3 (neraca saldo 4.617,9 ms → 1.306,7 ms, Uji Lab), F8 (rekap progres mingguan ±88 → ±20 menit per proyek, Simulasi 10.000 iterasi), F9 (periode 3 Agustus sampai 5 November 2026, 533 commit, Aktual).",
          "Rujukan Eksternal: Zylo (2026). SaaS Management Index 2026. Analisis lebih dari 40 juta lisensi SaaS dan belanja $75 miliar. Rilis 29 Januari 2026."
        ]
      }
    ]
  },
  "a-beautiful-website-nobody-contacts": {
    "title": "Website pertama kami bagus, dan tidak ada yang menghubungi kami",
    "category": "PERTUMBUHAN DIGITAL",
    "tags": [
      "WEBSITE",
      "KONVERSI",
      "LEAD",
      "CRM"
    ],
    "author": "Kepemimpinan Web2Up",
    "readTime": "6 menit baca",
    "date": "November 2026",
    "language": "id-ID",
    "description": "Banyak website dinilai dari selera rapat, bukan dari apa yang dicari pelanggan. Kenapa website yang cantik bisa sepi, dan cara pemimpin mengubahnya jadi jalur percakapan.",
    "coverImageAlt": "Website biasanya disetujui di layar besar. Calon pelanggan membukanya di ponsel.",
    "sections": [
      {
        "eyebrow": "RINGKASAN GAGASAN",
        "mainTitle": "Mengubah Website Cantik Menjadi Jalur Percakapan",
        "paragraphs": [
          "Gagasan: 'Website kami bagus, tapi tidak ada yang menghubungi' adalah keluhan yang sering didengar dari pemilik bisnis. Masalahnya biasanya bukan desain. Website dinilai dari selera orang di ruang rapat, bukan dari apa yang dicari dan dialami calon pelanggan.",
          "Kenapa penting sekarang: Audit atas 2.241 perusahaan di Amerika Serikat yang dilaporkan Harvard Business Review menemukan hanya 37% yang membalas lead dari web dalam satu jam, dan 23% tidak pernah membalas sama sekali. Padahal menghubungi dalam satu jam hampir 7 kali lebih mungkin mengkualifikasi lead itu.",
          "Yang bisa dilakukan pemimpin: Rancang dari pertanyaan pelanggan, uji di ponsel, sambungkan formulir langsung ke orang yang membalas, dan ukur lead yang dibalas, bukan jumlah pengunjung."
        ]
      },
      {
        "eyebrow": "GAGASAN UTAMA",
        "mainTitle": "Website dinilai dari selera rapat, bukan dari apa yang dicari pelanggan",
        "paragraphs": [
          "Peluncurannya terasa seperti perayaan. Website baru ditampilkan di layar besar ruang direksi, animasinya halus, foto kantornya terlihat mahal. Semua yang hadir puas. Tiga bulan kemudian, kotak masuk formulir kontak hampir kosong, dan pertanyaan di rapat berubah jadi 'apa perlu kita pasang iklan?'",
          "Kalimat 'website kami bagus, tapi tidak ada yang menghubungi' sering kami dengar dari pemilik bisnis yang datang ke Web2Up. Hampir selalu, website itu memang bagus di mata orang yang menyetujuinya. Yang jarang ditanyakan adalah apa yang dicari calon pelanggan saat membukanya, dan apa yang terjadi setelah mereka mengisi formulir.",
          "Website yang cantik hanya separuh pekerjaan.",
          "Separuh lainnya ada di jalur setelah klik. Di proyek AdsVar, setiap formulir dari website langsung tercatat di CRM dalam hitungan milidetik, lengkap dengan paket yang diminati (Uji Lab). Tim sales tidak perlu menunggu orang membuka email untuk tahu ada calon klien yang bertanya."
        ],
        "image": {
          "src": "/images/leadership-thoughts/a-beautiful-website-nobody-contacts/image4.png",
          "alt": "Diagram dua panel: Website sebagai brosur vs website sebagai jalur percakapan."
        }
      },
      {
        "eyebrow": "KENAPA MASALAH INI BERTAHAN",
        "mainTitle": "Pekerjaan dianggap selesai saat website tayang",
        "paragraphs": [
          "Yang menyetujui bukan yang mencari. Website dinilai di layar besar oleh orang yang sudah tahu perusahaannya. Calon pelanggan datang dengan pertanyaan sederhana: berapa harganya, bisa dikerjakan kapan, siapa yang bisa dihubungi. Kalau jawabannya tersembunyi di balik halaman 'Tentang Kami' yang panjang, mereka pergi.",
          "Website dilihat di desktop, dibuka di ponsel. Ini mudah terlewat. Di proyek AdsVar, skor performa Lighthouse untuk versi desktop mencapai 100, sedangkan versi mobile 82, dengan elemen terbesar tampil dalam 3,13 detik (Uji Lab). Website yang sama bisa terasa mulus di ruang rapat dan lambat di tangan pelanggan.",
          "Tidak ada yang memegang lead. Formulir masuk ke email umum yang dibuka admin sesekali. Gejalanya: tidak ada yang bisa menjawab berapa lama rata-rata calon klien menunggu balasan. Audit Harvard Business Review menunjukkan rata-rata waktu balas mencapai 42 jam, dan hampir seperempatnya tidak membalas sama sekali.",
          "Polanya jelas: lead dari web cepat dingin. Calon klien yang tidak mendapatkan balasan cepat akan langsung beralih ke pilihan lain."
        ]
      },
      {
        "eyebrow": "PELAJARAN DARI LAPANGAN",
        "mainTitle": "Website yang langsung tersambung ke orang yang membalas",
        "paragraphs": [
          "AdsVar, brand iklan berbayar di grup kami, butuh website yang menghasilkan percakapan, bukan sekadar terlihat profesional. Kondisi awalnya umum: calon klien bisa bertanya lewat beberapa pintu, dan admin harus menyalin data dari email ke catatan sales.",
          "Kami memutuskan website ini tersambung langsung ke CRM MarkaSuite. Di uji lab, 30 dari 30 formulir kontak diterima dengan waktu respons median 6,4 milidetik (Uji Lab). Saat calon klien memilih paket harga, nama paket, siklus tagihan, dan harganya ikut tersimpan, 20 dari 20 (Uji Lab), jadi sales tahu apa yang ditanyakan sebelum menelepon. Kalau CRM sedang tidak bisa dihubungi, lead tetap tersimpan di website (Uji Lab).",
          "Simulasi kami memperkirakan kerja admin per lead turun dari sekitar 17 menit menjadi sekitar 3 menit, hemat sekitar 83% (Simulasi; rentang P10 sampai P90: 74% sampai 89%). Waktu itu bisa dipakai untuk membalas lebih cepat.",
          "Pelajarannya, kualitas website diukur dari apa yang terjadi setelah klik. Catatan jujur: skor mobile 82 menunjukkan versi ponsel masih punya ruang perbaikan, dan angka di atas berasal dari uji lab serta simulasi, bukan lead sungguhan. Cerita lengkapnya ada di case study AdsVar."
        ],
        "image": {
          "src": "/images/leadership-thoughts/a-beautiful-website-nobody-contacts/image3.png",
          "alt": "Alur horizontal: Perjalanan satu lead di website AdsVar langsung masuk ke CRM."
        }
      },
      {
        "eyebrow": "KERANGKA KERJA",
        "mainTitle": "Ukur website dari percakapan yang dihasilkan",
        "subsections": [
          {
            "subtitle": "Rancang dari pertanyaan pelanggan",
            "content": "Kumpulkan sepuluh pertanyaan yang paling sering diajukan calon klien lewat telepon atau chat, lalu pastikan jawabannya bisa ditemukan dalam dua kali gulir. Halaman tentang sejarah perusahaan boleh tetap ada, asalkan tidak menghalangi harga, layanan, dan cara menghubungi. Tanda di organisasi Anda: sales masih menjawab pertanyaan yang sama berulang kali, padahal semuanya 'sudah ada di website'. Langkah pertama: minta tim sales menuliskan lima pertanyaan calon klien yang paling sering mereka terima bulan ini."
          },
          {
            "subtitle": "Uji di ponsel, bukan di monitor ruang direksi",
            "content": "Setujui website lewat ponsel biasa dengan koneksi biasa, bukan lewat layar besar dan internet kantor. Coba isi formulirnya sendiri dengan satu tangan. Kalau terasa merepotkan bagi Anda, calon pelanggan akan merasakan hal yang sama."
          },
          {
            "subtitle": "Sambungkan formulir ke orang yang membalas",
            "content": "Lead yang masuk ke email umum adalah lead yang menunggu. Sambungkan formulir ke CRM atau setidaknya ke satu orang yang bertanggung jawab, dengan batas waktu balas yang jelas. Ikutkan konteksnya, misalnya paket atau layanan yang diminati, supaya balasan pertama langsung relevan. Tanda di organisasi Anda: tidak ada yang tahu siapa yang seharusnya membalas formulir yang masuk Sabtu sore."
          },
          {
            "subtitle": "Ukur lead yang dibalas, bukan jumlah pengunjung",
            "content": "Pengunjung yang banyak enak dilaporkan, tapi tidak membayar tagihan. Laporkan setiap minggu berapa lead yang masuk, berapa yang dibalas dalam satu jam, dan berapa yang jadi percakapan lanjutan. Angka itu langsung memberi tahu di mana jalurnya macet."
          }
        ],
        "image": {
          "src": "/images/leadership-thoughts/a-beautiful-website-nobody-contacts/image1.jpg",
          "alt": "Foto laptop dengan dashboard angka: yang perlu dilaporkan adalah lead yang dibalas, bukan hanya grafik pengunjung."
        }
      },
      {
        "eyebrow": "PERTANYAAN UNTUK PEMIMPIN",
        "mainTitle": "Berapa lama calon klien Anda menunggu balasan minggu lalu?",
        "paragraphs": [
          "Bisakah calon pelanggan menemukan harga atau cara menghubungi Anda dalam dua kali gulir?",
          "Kapan terakhir Anda membuka website sendiri lewat ponsel dan mengisi formulirnya?",
          "Ke mana formulir website Anda masuk, dan siapa yang wajib membalasnya?",
          "Berapa lead yang masuk bulan lalu, dan berapa yang dibalas dalam satu jam?",
          "Angka apa yang dilaporkan tim tentang website setiap bulan: pengunjung, atau percakapan?",
          "Website yang bagus membuat orang mau bertanya. Yang membuat mereka jadi klien adalah balasan yang datang cepat."
        ]
      },
      {
        "eyebrow": "CATATAN & REFERENSI",
        "mainTitle": "Definisi, Bukti Internal & Rujukan",
        "paragraphs": [
          "Definisi Lead: Calon klien yang meninggalkan kontak atau pertanyaan lewat website. Mengkualifikasi lead: memastikan calon klien punya kebutuhan dan kemampuan yang sesuai.",
          "Sumber Data Internal: Lembar fakta Case Study AdsVar: A1 (30/30 formulir kontak diterima, median 6,4 ms, Uji Lab), A3 (paket, siklus tagihan, dan harga tersimpan, 20/20, Uji Lab), A6 (lead tetap tersimpan saat CRM tidak bisa dihubungi, Uji Lab), A9 dan A10 (Lighthouse desktop 100, mobile 82, LCP mobile 3,13 detik, Uji Lab), A13 (kerja admin per lead ±17 → ±3 menit, hemat ±83%, Simulasi).",
          "Rujukan Eksternal: Oldroyd, J. B., McElheran, K., & Elkington, D. (2011). The Short Life of Online Sales Leads. Harvard Business Review, 89(3), 28. Audit terhadap 2.241 perusahaan di Amerika Serikat."
        ]
      }
    ]
  }
};

export function localizeLeadershipThoughts(
  thoughts: LeadershipThoughtArticle[],
  locale: Locale
): LeadershipThoughtArticle[] {
  if (locale === 'en') return thoughts;
  return thoughts.map((thought) => {
    const trans = LEADERSHIP_THOUGHTS_ID_MAP[thought.slug];
    if (!trans) return thought;
    return {
      ...thought,
      ...trans,
    };
  });
}

export function getLocalizedLeadershipThoughts(locale: Locale): LeadershipThoughtArticle[] {
  return localizeLeadershipThoughts(LEADERSHIP_THOUGHTS_DUMMY_DATA, locale);
}

export function getLocalizedLeadershipThought(
  slug: string,
  locale: Locale
): LeadershipThoughtArticle | undefined {
  return getLocalizedLeadershipThoughts(locale).find((t) => t.slug === slug);
}

// ============================================================================
// 6. TESTIMONIALS
// ============================================================================
const TESTIMONIALS_ID_MAP: Record<number, { role: string; text: string }> = {
  1: {
    role: 'General Manager di PT Bahtera Sapta Permata',
    text: 'Kami membutuhkan situs yang mampu menangani trafik tinggi dan katalog produk yang kompleks. Kaluna menghadirkan platform yang cepat dan stabil sehingga penjualan produk kami menjadi jauh lebih mudah. Komunikasi tim mereka sangat luar biasa.',
  },
  2: {
    role: 'Pemimpin Redaksi di Suara Merdeka Network',
    text: 'Kaluna Technology membantu kami mengembangkan situs web profil perusahaan enterprise yang profesional dan informatif. Proses pengembangannya terkelola dengan baik dan komunikasi dengan tim berjalan sangat lancar.',
  },
  3: {
    role: 'Project Leader – Digital Media & Web Systems di Top Toy',
    text: 'Kaluna Technology mendukung implementasi portal tampilan pemasaran digital dan sistem web interaktif untuk ekspansi brand Top Toy. Kualitas rekayasa dan delivery mereka sangat memuaskan.',
  },
  4: {
    role: 'Building Operations Manager di Queen City Mall',
    text: 'Kaluna Technology membantu kami mengembangkan sistem manajemen web modern untuk operasional fasilitas kami. Platformnya responsif, intuitif, dan sangat sesuai dengan alur kerja komersial harian kami.',
  },
  5: {
    role: 'Business Development Manager di Sinau Print',
    text: 'Kaluna Technology tidak sekadar membuatkan situs web—mereka membangun kantor pusat digital bagi kami. Desainnya modern, sistem backend-nya intuitif, dan klien kami terus memuji pengalaman penggunanya.',
  },
  6: {
    role: 'General Manager di Mandiri Pribumi',
    text: 'Situs web profil perusahaan yang dikembangkan oleh Kaluna Technology memenuhi ekspektasi kami. Tampilannya profesional dan seluruh proses pengembangannya berjalan dengan sangat mulus.',
  },
  7: {
    role: 'Marketing Manager di X1-Tire',
    text: 'Situs lama kami kaku dan sulit diperbarui. Kaluna membangun web kustom yang indah dan memungkinkan tim pemasaran saya meluncurkan kampanye baru serta memperbarui konten dalam hitungan menit—bukan lagi berhari-hari.',
  },
};

export function localizeTestimonials<
  T extends { id: number; name: string; role: string; text: string; avatar: string }
>(testimonials: T[], locale: Locale): T[] {
  if (locale === 'en') return testimonials;
  return testimonials.map((item) => {
    const trans = TESTIMONIALS_ID_MAP[item.id];
    if (!trans) return item;
    return {
      ...item,
      role: trans.role,
      text: trans.text,
    };
  });
}

export function getLocalizedTestimonials(locale: Locale) {
  return localizeTestimonials(TESTIMONIALS_DUMMY_DATA, locale);
}

// ============================================================================
// 7. TEAM MEMBERS
// ============================================================================
const TEAM_MEMBERS_ID_MAP: Record<string, Partial<TeamMember>> = {
  'rian-destianto': {
    role: 'Head of Commercial',
    discipline: 'Komersial',
    summary:
      'Memimpin arah komersial Arsalynk dengan menghubungkan wawasan pasar, kemitraan strategis, dan pertumbuhan bisnis yang berkelanjutan.',
    address: 'Menara Rajawali Lt.26, Mega Kuningan, Jakarta Selatan, Indonesia 12950',
  },
};

export function localizeTeamMembers(members: TeamMember[], locale: Locale): TeamMember[] {
  if (locale === 'en') return members;
  return members.map((member) => {
    const trans = TEAM_MEMBERS_ID_MAP[member.slug];
    if (!trans) return member;
    return {
      ...member,
      ...trans,
    };
  });
}

export function getLocalizedTeamMembers(locale: Locale): TeamMember[] {
  return localizeTeamMembers(TEAM_MEMBERS_DUMMY_DATA, locale);
}

export function getLocalizedTeamMember(slug: string, locale: Locale): TeamMember | undefined {
  return getLocalizedTeamMembers(locale).find((m) => m.slug === slug);
}
