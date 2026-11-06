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
    headline: 'Arsalynk\nTeknologi Enterprise',
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
    heroHeadline: 'Sederhanakan Operasional Enterprise dengan Manajemen Sistem Terpusat',
    description:
      'Integrasikan alur kerja korporat ke dalam satu sistem tunggal untuk visibilitas real-time dan pertumbuhan berskala tinggi.',
  },
  'data-ai-integration': {
    title: 'Integrasi Data & AI',
    titleLine1: 'Integrasi',
    titleLine2: 'Data & AI',
    heroHeadline: 'Ubah Data Mentah Menjadi Keputusan Bisnis Strategis Berbasis AI',
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
    heroHeadline: 'Bangun Situs Web Berkinerja Tinggi dan Aplikasi Web Enterprise',
    description: 'Bangun situs web berkinerja tinggi dan solusi digital modern.',
  },
};

const SOLUTION_SERVICES_ID_MAP: Record<string, Partial<SolutionService>> = {
  'enterprise-solution': {
    title: 'Enterprise Solution',
    shortTitle: 'Enterprise Solution',
    heroHeadline: 'Sederhanakan Operasional Enterprise dengan Manajemen Sistem Terpusat',
    description:
      'Integrasikan alur kerja operasional lintas divisi ke dalam satu ekosistem terpadu dengan visibilitas real-time dan skalabilitas enterprise yang berkelanjutan.',
    whatItIs:
      'Layanan manajemen enterprise terstruktur yang dirancang untuk menyatukan alur kerja operasional kompleks, mengoptimalkan alokasi sumber daya, dan memastikan skalabilitas bisnis jangka panjang.',
    whatServiceTitle: 'Arsitektur Enterprise Terintegrasi',
    valuePropTitle: 'Melampaui Solusi Generik',
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
    heroHeadline: 'Ubah Data Mentah Menjadi Keputusan Bisnis Strategis Berbasis AI',
    description:
      'Konsolidasikan data korporat multi-sumber ke dalam satu ekosistem terpadu dengan pemodelan AI prediktif, proyeksi permintaan, dan wawasan otomatis.',
    whatItIs:
      'Layanan rekayasa data tingkat lanjut dan integrasi AI yang dirancang untuk mengubah data mentah perusahaan menjadi intelijen yang dapat ditindaklanjuti, analitik prediktif, dan pengambilan keputusan otomatis.',
    whatServiceTitle: 'Infrastruktur Data Cerdas & Deep Learning',
    valuePropTitle: 'Melampaui Analitik Statis',
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
      heading: 'Kolaborasi Portofolio Klien: Artic Analytica',
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
    valuePropTitle: 'Melampaui Otomasi Standar',
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
    heroHeadline: 'Bangun Situs Web Berkinerja Tinggi dan Aplikasi Web Enterprise',
    description:
      'Direkayasa untuk UX unggul, performa sangat cepat, dan keamanan kelas enterprise guna mempercepat konversi serta pertumbuhan digital.',
    whatItIs:
      'Rekayasa web modern siklus penuh yang berfokus pada pembangunan platform digital dinamis, responsif, dan selaras dengan identitas brand melalui manajemen konten intuitif serta keunggulan SEO teknis.',
    whatServiceTitle: 'Arsitektur Web Dinamis, Responsif & Berorientasi SEO',
    valuePropTitle: 'Melampaui Pembuatan Berbasis Template',
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
  'sinau-print-pos-system': {
    title: 'Sinau Print',
    category: 'SOLUSI ENTERPRISE',
    tags: ['POINT OF SALE', 'ARSITEKTUR ERP', 'OTOMASI RITEL'],
    dateLabel: 'APRIL 2026',
    description:
      'Solusi ERP operasional ritel dan Point of Sale terpusat yang dirancang untuk menyederhanakan penjualan multi-cabang, alur pesanan, penanganan pembayaran, serta pengiriman faktur WhatsApp otomatis.',
    coverImageAlt: 'Sistem Manajemen Operasional dan Point of Sale Sinau Print',
    sections: [
      {
        eyebrow: 'TANTANGAN',
        mainTitle: 'Mengelola Pesanan Bervolume Tinggi Lintas Tim Tanpa Alur Operasional Terpadu',
        paragraphs: [
          'Mengelola pesanan ritel kustom, produksi cetak, dan pemenuhan pesanan pelanggan di berbagai tim cabang menciptakan hambatan ketika transaksi melibatkan uang muka bervariasi, jadwal cicilan, dan produksi bertahap.',
          'Tanpa arsitektur terpusat, bisnis mengalami silo data antar-kasir, keterlambatan pengiriman faktur, selisih pelacakan pembayaran, dan keterbatasan visibilitas terhadap pendapatan operasional harian.',
        ],
      },
      {
        mainTitle: 'Menghubungkan Penjualan, Pemrosesan Pesanan, dan Produksi ke Dalam Satu Ekosistem',
        paragraphs: [
          'Kami merekayasa sistem manajemen alur kerja dan POS enterprise khusus yang menyinkronkan meja kasir depan, antrean produksi, rekonsiliasi akuntansi, dan komunikasi pelanggan ke dalam satu platform terpadu.',
        ],
        image: {
          src: '/images/case-studies/sinau-print.svg',
          alt: 'Platform POS terpusat yang menghubungkan tim penjualan, pembayaran, dan produksi',
        },
      },
      {
        eyebrow: 'SOLUSI KAMI',
        mainTitle: 'Arsitektur Terintegrasi yang Dirancang di Setiap Tahapan Alur Kerja Ritel',
        subsections: [
          {
            subtitle: '01',
            content:
              'Dasbor Penjualan & Transaksi Real-Time: Menyajikan performa penjualan multi-kasir, kecepatan transaksi, dan analitik pendapatan langsung untuk visibilitas kepemimpinan instan.',
          },
          {
            subtitle: '02',
            content:
              'Pengiriman & Pelacakan Pesanan Langsung: Tim penjualan dan layanan pelanggan mencatat, memperbarui, serta meneruskan pesanan cetak kustom dengan pencatatan status terperinci.',
          },
          {
            subtitle: '03',
            content:
              'Pemrosesan Split Bill & Pembayaran Bertahap: Dukungan bawaan untuk uang muka parsial, jadwal termin, dan rekonsiliasi pelunasan akhir.',
          },
          {
            subtitle: '04',
            content:
              'Integrasi Payment Gateway Midtrans Otomatis: Pembayaran digital mulus melalui virtual account, QRIS, dan e-wallet dengan pembaruan status instan.',
          },
          {
            subtitle: '05',
            content:
              'Kontrol Akses Operasional Berbasis Peran: Memisahkan secara ketat wewenang kasir, staf produksi, pengelola inventaris, dan manajer cabang.',
          },
          {
            subtitle: '06',
            content:
              'Pengiriman Faktur Otomatis via WhatsApp API: Mengirimkan tanda terima PDF digital dan pengingat pembayaran langsung ke pelanggan saat checkout, memangkas waktu tunggu di kasir.',
          },
        ],
      },
      {
        eyebrow: 'HASIL AKHIR',
        mainTitle: 'Operasional Toko yang Transparan, Efisien, dan Lebih Cepat',
        paragraphs: [
          'Penerapan sistem Sinau Print menghilangkan penanganan nota manual, memangkas waktu siklus transaksi lebih dari 45%, dan memberikan visibilitas penuh kepada manajemen atas pendapatan cabang harian serta hambatan produksi.',
        ],
      },
    ],
  },
  'presstis-digital-platform': {
    title: 'Presstis',
    category: 'PENGEMBANGAN DIGITAL',
    tags: ['WEB DEVELOPMENT', 'PLATFORM DIGITAL', 'ARSITEKTUR MEDIA'],
    dateLabel: 'MEI 2026',
    description:
      'Platform penerbitan digital dan distribusi media berkinerja tinggi yang direkayasa untuk jaringan multi-publikasi, kolaborasi editorial, dan interaksi pembaca berkonkurensi tinggi.',
    coverImageAlt: 'Platform Web dan Media Digital Berskala Tinggi Presstis',
    sections: [
      {
        eyebrow: 'TANTANGAN',
        mainTitle: 'Pipeline Editorial Terfragmentasi dan Pengiriman Lambat Saat Lonjakan Trafik',
        paragraphs: [
          'Jaringan media modern yang beroperasi di berbagai publikasi menghadapi kendala teknis berulang: kecepatan muat halaman lambat yang menurunkan peringkat pencarian, sistem manajemen konten yang terpisah bagi tim editorial, serta kerentanan keamanan saat lonjakan trafik berita utama.',
          'Framework web monolitik lama terbukti terlalu kaku untuk mendukung sindikasi real-time lintas domain sembari mempertahankan standar UX modern.',
        ],
      },
      {
        mainTitle: 'Arsitektur Web Kustom yang Dibangun untuk Kecepatan dan Skalabilitas Tanpa Kompromi',
        paragraphs: [
          'Kami merancang dan mengodekan platform digital modern dari awal, memanfaatkan teknologi web edge-rendered, caching CDN terdistribusi, dan backend ruang redaksi terpadu yang intuitif untuk operasional editorial berkecepatan tinggi.',
        ],
        image: {
          src: '/images/case-studies/presstis.svg',
          alt: 'Arsitektur platform media digital berkinerja tinggi Presstis',
        },
      },
      {
        eyebrow: 'SOLUSI KAMI',
        mainTitle: 'Skalabilitas Headless, Akselerasi Edge, dan Tata Kelola Editorial Terpadu',
        subsections: [
          {
            subtitle: '01',
            content:
              'Pengiriman Konten Berlatensi Sangat Rendah: Distribusi berbasis edge-cache yang menjamin waktu muat halaman sub-detik bagi puluhan ribu pembaca serentak.',
          },
          {
            subtitle: '02',
            content:
              'Ruang Kerja Editorial Multi-Publikasi: CMS penerbitan terpusat yang memungkinkan jurnalis dan editor menyusun, meninjau, serta menyindikasikan konten di berbagai domain brand.',
          },
          {
            subtitle: '03',
            content:
              'Telemetri Interaksi Real-Time: Analitik interaksi audiens terintegrasi yang mengukur durasi baca, kedalaman gulir, dan artikel populer untuk memandu strategi redaksi.',
          },
          {
            subtitle: '04',
            content:
              'Protokol Keamanan Kelas Enterprise: Perlindungan DDoS proaktif, rotasi SSL otomatis, dan izin peran terperinci yang memastikan ketersediaan platform tanpa henti.',
          },
          {
            subtitle: '05',
            content:
              'Monetisasi Dinamis & Penempatan Iklan: Slot sponsor dan iklan bawaan yang tidak mengganggu kenyamanan baca guna memaksimalkan pendapatan tanpa mengorbankan Core Web Vitals.',
          },
          {
            subtitle: '06',
            content:
              'Arsitektur Semantik Berorientasi SEO: Skema JSON-LD terstruktur, sitemap XML otomatis, dan metadata Open Graph teroptimasi yang mendorong dominasi pencarian organik.',
          },
        ],
      },
      {
        eyebrow: 'HASIL AKHIR',
        mainTitle: 'Retensi Pembaca Istimewa dan Ketersediaan 100% di Tengah Lonjakan Trafik',
        paragraphs: [
          'Presstis menghadirkan peningkatan performa Core Web Vitals sebesar 300%, memangkas biaya operasional infrastruktur hingga 40%, dan memberdayakan staf editorial untuk menerbitkan serta menyindikasikan berita utama dalam hitungan detik.',
        ],
      },
    ],
  },
  'markaplus-ai-assistant': {
    title: 'MarkaPlus',
    category: 'INTEGRASI DATA & AI',
    tags: ['ASISTEN AI ERP', 'DEEP LEARNING', 'PIPELINE DATA'],
    dateLabel: 'JUNI 2026',
    description:
      'Asisten cerdas AI deep learning yang terintegrasi langsung ke dalam perangkat lunak ERP enterprise, mengubah kueri multi-database kompleks menjadi panduan operasional instan dan keputusan terotomatisasi.',
    coverImageAlt: 'Asisten Chat AI Cerdas dan Infrastruktur Deep Learning ERP MarkaPlus',
    sections: [
      {
        eyebrow: 'TANTANGAN',
        mainTitle: 'Latensi Data dan Beban Informasi Berlebih di Dalam Sistem Korporat Kompleks',
        paragraphs: [
          'Basis data ERP enterprise menyimpan jutaan catatan transaksi di bagian keuangan, inventaris, logistik, dan personalia. Namun ketika para pemimpin dan staf operasional membutuhkan jawaban cepat, mereka harus menghadapi pelaporan SQL yang rumit, unduhan spreadsheet manual, dan penundaan berjam-jam.',
          'Tanpa kecerdasan percakapan real-time, eksekutif mengambil keputusan berdasarkan ringkasan yang sudah usang sementara tim lapangan kesulitan menavigasi menu perangkat lunak yang kompleks.',
        ],
      },
      {
        mainTitle: 'Menanamkan AI Sadar-Konteks Langsung ke Dalam Alur Kerja Operasional Harian',
        paragraphs: [
          'Kami membangun MarkaPlus—mesin percakapan deep learning aman yang tertanam langsung di dalam platform enterprise. Beroperasi di atas pipeline pengambilan data kustom, MarkaPlus mengubah relasi multi-tabel ERP yang rumit menjadi dialog alami dan instan.',
        ],
        image: {
          src: '/images/case-studies/markaplus.svg',
          alt: 'Asisten AI MarkaPlus tertanam di dalam ERP enterprise',
        },
      },
      {
        eyebrow: 'SOLUSI KAMI',
        mainTitle: 'Dari Basis Data Pasif Menuju Intelijen Operasional Proaktif',
        subsections: [
          {
            subtitle: '01',
            content:
              'Kueri Bisnis Bahasa Alami: Karyawan dapat mengajukan pertanyaan sehari-hari—seperti "Rangkum persetujuan yang tertunda hari ini" atau "Proyeksikan pengisian ulang stok minggu depan"—dan menerima data terverifikasi dalam hitungan detik.',
          },
          {
            subtitle: '02',
            content:
              'Prediksi Permintaan & Deteksi Anomali: Model deep learning terus menganalisis konsumsi historis dan pola pesanan untuk memperingatkan manajer akan ketidakteraturan pasokan.',
          },
          {
            subtitle: '03',
            content:
              'Ringkasan Eksekutif Otomatis: Menyintesis metrik lintas departemen menjadi intisari eksekutif pagi hari yang dikirimkan melalui obrolan enterprise yang aman.',
          },
          {
            subtitle: '04',
            content:
              'Keamanan Peran Tanpa Kebocoran: Filter izin bawaan menjamin AI menghormati hierarki akses korporat, mengisolasi catatan keuangan dan eksekutif yang sensitif secara ketat.',
          },
          {
            subtitle: '05',
            content:
              'Eksekusi Tugas Interaktif: Selain menjawab pertanyaan, MarkaPlus membantu pengguna yang berwenang dalam memulai permintaan persetujuan, menjadwalkan tugas, dan mengirimkan notifikasi.',
          },
          {
            subtitle: '06',
            content:
              'Intelijen Kueri yang Mengoptimalkan Diri: Belajar dari umpan balik berkelanjutan dan kosakata domain untuk terus meningkatkan presisi semantik di seluruh divisi bisnis.',
          },
        ],
      },
      {
        eyebrow: 'HASIL AKHIR',
        mainTitle: 'Akses Data Tanpa Hambatan dan Kecepatan Operasional Otonom',
        paragraphs: [
          'MarkaPlus memangkas waktu kueri operasional rutin sebesar 85%, menghilangkan ketergantungan pada staf TI untuk pembuatan laporan khusus, dan mendorong pengambilan keputusan berbasis data di seluruh tingkatan manajerial.',
        ],
      },
    ],
  },
  'marka-finance-accounting': {
    title: 'MARKA - Finance',
    category: 'SOLUSI ENTERPRISE',
    tags: ['ERP KEUANGAN', 'AKUNTANSI KORPORAT', 'TATA KELOLA ARUS KAS'],
    dateLabel: 'JULI 2026',
    description:
      'Arsitektur manajemen keuangan terintegrasi yang dirancang untuk menyatukan perbankan korporat, buku besar multi-cabang, pencairan massal, dan tata kelola arus kas secara real-time.',
    coverImageAlt: 'Platform Keuangan dan Akuntansi Korporat MARKA oleh Arsalynk',
    sections: [
      {
        eyebrow: 'TANTANGAN',
        mainTitle: 'Catatan Keuangan Terfragmentasi dan Siklus Rekonsiliasi Akhir Bulan yang Lambat',
        paragraphs: [
          'Seiring berkembangnya perusahaan menengah hingga besar di berbagai anak perusahaan dan entitas proyek, tata kelola keuangan menjadi rentan terhadap fragmentasi data. Perangkat akuntansi yang terpisah menyebabkan keterlambatan pencatatan jurnal, rekonsiliasi bank manual, dan penutupan buku akhir bulan yang lambat.',
          'Tanpa pusat komando keuangan terintegrasi, CFO dan pengendali keuangan tidak dapat memproyeksikan likuiditas secara akurat atau menegakkan disiplin anggaran yang ketat di seluruh operasional terdistribusi.',
        ],
      },
      {
        mainTitle: 'Menyatukan Perbankan, Buku Besar, dan Kontrol Pengeluaran ke Dalam Satu Inti Keuangan',
        paragraphs: [
          'Kami merekayasa MARKA - Finance sebagai platform manajemen keuangan kelas enterprise yang mengotomatiskan penjurnalan transaksi, merekonsiliasi mutasi perbankan secara real-time, dan menyajikan laporan siap audit di seluruh unit bisnis.',
        ],
        image: {
          src: '/images/case-studies/marka-finance.svg',
          alt: 'Dasbor Keuangan dan Akuntansi Korporat MARKA',
        },
      },
      {
        eyebrow: 'SOLUSI KAMI',
        mainTitle: 'Rekayasa Keuangan Presisi dengan Tata Kelola Arus Kas Real-Time',
        subsections: [
          {
            subtitle: '01',
            content:
              'Integrasi Perbankan Korporat Multi-Akun: Menghubungkan mutasi bank langsung ke buku besar, menyinkronkan transaksi masuk dan keluar secara otomatis.',
          },
          {
            subtitle: '02',
            content:
              'Buku Besar & Penjurnalan Otomatis: Mesin berbasis aturan menghasilkan catatan jurnal pembukuan berpasangan saat transaksi selesai, menghilangkan entri spreadsheet manual.',
          },
          {
            subtitle: '03',
            content:
              'Alur Kerja Persetujuan Berlapis: Protokol otorisasi berjenjang untuk pengeluaran dan pencairan dana menegakkan kepatuhan terhadap anggaran dasar tata kelola korporat.',
          },
          {
            subtitle: '04',
            content:
              'Pencairan Pembayaran Massal & Penggajian: Menyederhanakan pembayaran vendor massal dan jadwal penggajian karyawan ke dalam satu batch transaksi terverifikasi.',
          },
          {
            subtitle: '05',
            content:
              'Analitik Arus Kas & Likuiditas Real-Time: Dasbor visual langsung memantau ketahanan kas operasi, umur piutang usaha, dan laju belanja modal.',
          },
          {
            subtitle: '06',
            content:
              'Kesiapan Kepatuhan Pajak & Audit: Mesin perhitungan pajak bawaan dan catatan audit yang tidak dapat diubah memastikan pelaporan pajak akhir tahun dan verifikasi audit berjalan mulus.',
          },
        ],
      },
      {
        eyebrow: 'HASIL AKHIR',
        mainTitle: 'Kendali Keuangan Sempurna, Penutupan Buku Lebih Cepat, dan Transparansi Total',
        paragraphs: [
          'Implementasi MARKA - Finance memangkas waktu penutupan buku akhir bulan dari 14 hari menjadi hanya 3 hari, menghilangkan selisih rekonsiliasi, dan memberikan visibilitas likuiditas real-time kepada jajaran eksekutif.',
        ],
      },
    ],
  },
  'marka-project-manager': {
    title: 'MARKA - Project Manager',
    category: 'SOLUSI ENTERPRISE',
    tags: ['MANAJEMEN PROYEK', 'TATA KELOLA ALUR KERJA', 'PENJADWALAN SUMBER DAYA'],
    dateLabel: 'AGUSTUS 2026',
    description:
      'Platform manajemen operasional menyeluruh yang mengoordinasikan milestone proyek berlapis, alokasi sumber daya, ketergantungan tugas, dan kepatuhan anggaran di seluruh tim enterprise.',
    coverImageAlt: 'Platform Manajemen Proyek dan Operasional MARKA oleh Arsalynk',
    sections: [
      {
        eyebrow: 'TANTANGAN',
        mainTitle: 'Keterlambatan Proyek, Hambatan Sumber Daya, dan Pipeline Eksekusi yang Kurang Transparan',
        paragraphs: [
          'Mengeksekusi inisiatif korporat berskala besar di berbagai tim yang tersebar sering kali terkendala oleh manajemen tugas yang terfragmentasi. Tenggat waktu meleset ketika ketergantungan tugas tidak dipetakan dengan jelas, beban kerja tim menjadi tidak seimbang, dan manajemen kekurangan wawasan real-time atas progres proyek.',
          'Mengandalkan papan tugas generik gagal memperhitungkan milestone kontrak, tenggat pengadaan, dan pelacakan anggaran yang dibutuhkan dalam proyek enterprise berisiko tinggi.',
        ],
      },
      {
        mainTitle: 'Lapisan Komando Terstruktur yang Menyelaraskan Strategi, Tenggat Waktu, dan Eksekusi Tim',
        paragraphs: [
          'Kami merancang MARKA - Project Manager untuk menjembatani ekspektasi kepemimpinan korporat dengan pelaksanaan operasional di lapangan, menghadirkan pemetaan ketergantungan yang jelas, perencanaan kapasitas, dan verifikasi milestone otomatis.',
        ],
        image: {
          src: '/images/case-studies/marka-project-manager.svg',
          alt: 'Antarmuka MARKA Project Manager dan penjadwalan sumber daya',
        },
      },
      {
        eyebrow: 'SOLUSI KAMI',
        mainTitle: 'Kendali Operasional Menyeluruh dari Inisiasi Milestone hingga Serah Terima Akhir',
        subsections: [
          {
            subtitle: '01',
            content:
              'Pemetaan Ketergantungan Milestone & Gantt Dinamis: Pemodelan lini masa visual yang menyoroti jalur kritis dan memperingatkan manajer proyek akan potensi risiko keterlambatan.',
          },
          {
            subtitle: '02',
            content:
              'Alokasi Kapasitas & Beban Kerja: Penyeimbangan sumber daya real-time mencegah kelelahan karyawan dan memastikan keahlian khusus ditugaskan pada prioritas tertinggi.',
          },
          {
            subtitle: '03',
            content:
              'Pelacakan Anggaran & Biaya Proyek Terintegrasi: Menghubungkan jam kerja tertagih, lisensi perangkat lunak, dan biaya vendor eksternal langsung ke pusat biaya proyek.',
          },
          {
            subtitle: '04',
            content:
              'Alur Kerja Persetujuan Serah Terima Otomatis: Daftar periksa serah terima digital dan persetujuan tinjauan klien membangun akuntabilitas yang jelas atas penyelesaian milestone.',
          },
          {
            subtitle: '05',
            content:
              'Pusat Kolaborasi Lintas Departemen: Memusatkan dokumentasi proyek, diskusi tugas, dan versi dokumen di dalam utas proyek yang kaya konteks.',
          },
          {
            subtitle: '06',
            content:
              'Dasbor Progres Eksekutif & SLA: Ringkasan eksekutif terkonsolidasi yang menampilkan tingkat penyelesaian tepat waktu, varians anggaran, dan performa departemen.',
          },
        ],
      },
      {
        eyebrow: 'HASIL AKHIR',
        mainTitle: 'Penyelesaian Terukur, Utilisasi Sumber Daya Optimal, dan Eksekusi Berskala Tinggi',
        paragraphs: [
          'Penerapan MARKA - Project Manager meningkatkan tingkat penyelesaian proyek tepat waktu hingga 96%, memangkas rapat status administratif hingga separuhnya, dan memberdayakan tim dengan disiplin alur kerja yang transparan serta akuntabel.',
        ],
      },
    ],
  },
  'myboss-logistics-fleet-management': {
    title: 'MyBOS',
    category: 'SISTEM SMART IOT',
    tags: ['TELEMETRI IOT', 'LOGISTIK ARMADA', 'INTEGRASI PERANGKAT'],
    dateLabel: 'SEPTEMBER 2026',
    description:
      'Perangkat keras IoT terhubung dan telemetri komando yang menjembatani armada kendaraan komersial, sensor jarak jauh, dan pusat logistik menjadi intelijen transportasi operasional secara real-time.',
    coverImageAlt: 'Ekosistem Operasional IoT Terhubung dan Telemetri Armada MyBOS',
    sections: [
      {
        eyebrow: 'TANTANGAN',
        mainTitle: 'Titik Buta Operasional Antara Ruang Kontrol, Pengemudi, dan Aset Lapangan',
        paragraphs: [
          'Mengelola armada logistik komersial di rute regional yang luas tanpa integrasi IoT membuat petugas pengatur kehilangan informasi mengenai lokasi aktual kendaraan, waktu mesin menyala diam (idling), keterlambatan transit, dan kehilangan bahan bakar.',
          'Manifes kertas lama dan panggilan telepon manual menunda konfirmasi pengiriman, memicu sengketa pelanggan, serta menghambat respons darurat tepat waktu terhadap kerusakan mekanis di jalan.',
        ],
      },
      {
        mainTitle: 'Menjembatani Kendaraan Fisik dengan Perangkat Lunak Enterprise Cerdas',
        paragraphs: [
          'Kami menerapkan ekosistem IoT MyBOS—mengintegrasikan sensor telematika kendaraan, unit pelacak GPS, dan pusat komando pengiriman otomatis yang memantau setiap pergerakan kendaraan secara real-time.',
        ],
        image: {
          src: '/images/case-studies/mybos.svg',
          alt: 'Pusat Komando dan Telemetri Armada IoT MyBOS',
        },
      },
      {
        eyebrow: 'SOLUSI KAMI',
        mainTitle: 'Telemetri Perangkat Keras Real-Time, Pengaturan Cerdas, dan Bukti Pengiriman Digital',
        subsections: [
          {
            subtitle: '01',
            content:
              'Telemetri IoT Langsung & Pelacakan GPS: Penentuan posisi satelit real-time dan umpan sensor kendaraan menghadirkan visibilitas rute berkelanjutan ke ruang kontrol pusat.',
          },
          {
            subtitle: '02',
            content:
              'Surat Jalan Digital Otomatis: Menghilangkan manifes kertas dengan meneruskan tugas pengiriman digital langsung ke pengemudi lengkap dengan instruksi navigasi.',
          },
          {
            subtitle: '03',
            content:
              'Optimasi Rute & Bahan Bakar Cerdas: Merekomendasikan rute optimal berdasarkan kepadatan lalu lintas dan beban kargo, secara substansial mengurangi konsumsi BBM armada.',
          },
          {
            subtitle: '04',
            content:
              'Pemantauan Perilaku & Keselamatan Pengemudi: Melacak pengereman mendadak, waktu idle berlebih, dan jam operasional untuk membangun disiplin keselamatan serta menjadwalkan perawatan preventif.',
          },
          {
            subtitle: '05',
            content:
              'Bukti Pengiriman Digital (e-POD): Menangkap tanda tangan digital, koordinat GPS berstempel waktu, dan foto penerima saat barang tiba untuk rekonsiliasi penagihan instan.',
          },
          {
            subtitle: '06',
            content:
              'Telemetri Pemeliharaan & Diagnostik Armada: Telemetri mesin real-time memperingatkan manajer bengkel akan keausan komponen sebelum terjadi mogok mendadak di perjalanan.',
          },
        ],
      },
      {
        eyebrow: 'HASIL AKHIR',
        mainTitle: 'Kendali Operasional Penuh, Biaya Transit Lebih Rendah, dan Keandalan Terjamin',
        paragraphs: [
          'MyBOS menghasilkan penurunan belanja bahan bakar armada sebesar 22%, memangkas sengketa pengiriman hingga nol berkat e-POD, dan memberdayakan pengatur logistik dengan kendali real-time penuh atas aset transit terdistribusi.',
        ],
      },
    ],
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
  return getLocalizedCaseStudies(locale).find((s) => s.slug === slug);
}

// ============================================================================
// 5. LEADERSHIP THOUGHTS (LeadershipThoughtArticle[])
// ============================================================================
const LEADERSHIP_THOUGHTS_ID_MAP: Record<string, Partial<LeadershipThoughtArticle>> = {
  'why-transformation-must-start-with-the-real-workflow': {
    title: 'Mengapa Transformasi Harus Dimulai dari Alur Kerja Nyata',
    category: 'KEPEMIMPINAN OPERASIONAL',
    tags: ['TRANSFORMASI', 'DESAIN PROSES', 'TEKNOLOGI'],
    author: 'Tim Eksekutif Arsalynk',
    readTime: '6 menit baca',
    date: 'Juli 2026',
    language: 'id-ID',
    description:
      'Pelajaran dari membangun platform terintegrasi: transformasi berkelanjutan dimulai dengan memahami bagaimana pekerjaan benar-benar bergerak sebelum memilih teknologinya.',
    coverImageAlt: 'Para pemimpin lintas fungsi memetakan alur kerja operasional nyata',
    sections: [
      {
        eyebrow: 'GAGASAN UTAMA',
        mainTitle: 'Teknologi Tidak Dapat Memperbaiki Proses yang Belum Terdefinisi',
        paragraphs: [
          'Platform Sinau Print mempertegas pelajaran yang terus berulang: perangkat lunak baru menjadi bermanfaat setelah tim menyepakati kepemilikan tugas, serah terima, pengecualian, dan definisi penyelesaian.',
          'Para pemimpin menciptakan momentum dengan membuat alur kerja nyata terlihat jelas, termasuk langkah-langkah informal yang jarang muncul di dalam prosedur operasi standar (SOP). Peta proses bernilai bukan karena terlihat rapi, melainkan karena membuat perbedaan pandangan dapat didiskusikan secara terbuka.',
        ],
        image: {
          src: '/images/projects/sinau-print-erp/case-study-angle-02.webp',
          alt: 'Pemesanan digital yang terhubung dengan alur kerja produksi',
        },
      },
      {
        eyebrow: 'MENGAPA TRANSFORMASI TERHAMBAT',
        mainTitle: 'Organisasi Sering Mengotomatiskan Versi Pekerjaan di Atas Kertas',
        paragraphs: [
          'Prosedur formal menjelaskan jalur yang diharapkan. Namun pekerjaan sehari-hari juga mencakup jalan pintas, pertimbangan situasional, informasi yang kurang, serta ketergantungan yang ditopang oleh individu berpengalaman.',
          'Ketika realitas tersebut tetap tersembunyi, otomatisasi justru mengunci ambiguitas ke dalam sistem. Tim kemudian menyalahkan perangkat lunak atas keputusan yang sebenarnya belum pernah diperjelas oleh manajemen.',
        ],
      },
      {
        eyebrow: 'KERANGKA KERJA PRAKTIS',
        mainTitle: 'Memimpin Melalui Model Operasi',
        subsections: [
          {
            subtitle: 'Amati Sebelum Menstandarkan',
            content:
              'Ikuti alur pekerjaan nyata lintas peran dan catat pengecualian, pengerjaan ulang, waktu tunggu, serta koordinasi informal.',
          },
          {
            subtitle: 'Perjelas Kepemilikan',
            content:
              'Setiap keputusan kritis dan serah terima membutuhkan peran yang bertanggung jawab, respons yang diharapkan, serta jalur eskalasi yang jelas.',
          },
          {
            subtitle: 'Sederhanakan Sebelum Mengotomatiskan',
            content:
              'Hilangkan persetujuan berulang dan entri data ganda sebelum menerjemahkan alur kerja tersebut ke dalam perangkat lunak.',
          },
          {
            subtitle: 'Ukur Perilaku, Bukan Sekadar Instalasi',
            content:
              'Keberhasilan tercermin dari tingkat adopsi, waktu siklus, pengurangan kesalahan, dan kualitas keputusan—bukan sekadar apakah platform sudah diluncurkan.',
          },
        ],
      },
      {
        eyebrow: 'PERTANYAAN KEPEMIMPINAN',
        mainTitle: 'Apa yang Harus Ditanyakan Pemimpin Sebelum Menyetujui Pembangunan Sistem',
        paragraphs: [
          'Di titik mana pekerjaan paling sering menunggu, dan informasi apa yang biasanya belum tersedia pada saat itu? Pengecualian mana yang membutuhkan pertimbangan manusia ketimbang otomatisasi? Siapa yang bertanggung jawab atas hasil akhir lintas batas departemen?',
          'Pertanyaan-pertanyaan ini menggeser transformasi dari sekadar pembelian teknologi menuju perancangan ulang yang eksplisit atas cara organisasi beroperasi.',
        ],
      },
    ],
  },
  'data-leadership-is-the-discipline-of-defining-what-matters': {
    title: 'Kepemimpinan Data Adalah Disiplin dalam Mendefinisikan Apa yang Penting',
    category: 'KEPEMIMPINAN DATA',
    tags: ['STRATEGI DATA', 'PENGAMBILAN KEPUTUSAN', 'TATA KELOLA'],
    author: 'Kepemimpinan Artic Analytica',
    readTime: '5 menit baca',
    date: 'Juni 2026',
    language: 'id-ID',
    description:
      'Dasbor tidak menciptakan keselarasan dengan sendirinya. Para pemimpin harus menetapkan definisi bersama dan menghubungkan setiap metrik dengan sebuah keputusan.',
    coverImageAlt: 'Tim kepemimpinan mendiskusikan makna dari metrik kinerja',
    sections: [
      {
        eyebrow: 'GAGASAN UTAMA',
        mainTitle: 'Lebih Banyak Data Tidak Sama Dengan Lebih Banyak Kejelasan',
        paragraphs: [
          'Pengembangan dasbor analitik menunjukkan bahwa sistem analitik terkuat selalu dimulai dari pertanyaan manajemen. Ketika indikator tidak terhubung dengan keputusan apa pun, indikator tersebut hanya menambah kebisingan, bukan keyakinan.',
          'Sebuah dasbor dapat menampilkan angka yang tampak presisi sembari menyembunyikan ketidakpastian dalam definisi, kualitas sumber, atau waktu pembaruan. Kepemimpinan data dimulai ketika eksekutif memperlakukan asumsi-asumsi tersebut sebagai bagian dari keputusan.',
        ],
        image: {
          src: '/images/projects/altatic-analytic/case-study-angle-02.webp',
          alt: 'Tim eksekutif meninjau indikator kinerja yang dikelola dengan ketat',
        },
      },
      {
        eyebrow: 'RISIKO KEPEMIMPINAN',
        mainTitle: 'Ledakan Jumlah Metrik Dapat Menggantikan Akuntabilitas',
        paragraphs: [
          'Ketika setiap tim membawa ukuran keberhasilannya sendiri, rapat berubah menjadi negosiasi tentang angka siapa yang paling benar. Diskusi pun menjauh dari akar masalah, pilihan strategis, dan tanggung jawab.',
          'Para pemimpin harus menahan diri untuk tidak menambah indikator baru sampai organisasi menyepakati apa arti sebuah metrik, keputusan apa yang didukungnya, dan siapa yang bertanggung jawab untuk meresponsnya.',
        ],
      },
      {
        eyebrow: 'DISIPLIN TATA KELOLA',
        mainTitle: 'Menciptakan Bahasa Bersama untuk Kinerja',
        subsections: [
          {
            subtitle: 'Mulai dari Keputusan',
            content:
              'Tetapkan keputusan berulang terlebih dahulu, lalu identifikasi bukti minimum yang diperlukan untuk mengambil keputusan tersebut secara bertanggung jawab.',
          },
          {
            subtitle: 'Tetapkan Pemilik Metrik',
            content:
              'Kepemilikan mencakup definisi, sumber data, pemeriksaan kualitas, frekuensi pembaruan, dan penjelasan atas perubahan signifikan.',
          },
          {
            subtitle: 'Tampilkan Konteks dan Konsekuensi',
            content:
              'Target harus dibaca berdampingan dengan kapasitas, kualitas, risiko, dan dampak pelanggan, bukan secara terpisah.',
          },
          {
            subtitle: 'Tinjau Kembali Metrik Itu Sendiri',
            content:
              'Hentikan indikator yang tidak lagi memengaruhi tindakan atau yang justru mendorong perilaku yang bertentangan dengan tujuan utama.',
          },
        ],
      },
      {
        eyebrow: 'PERTANYAAN KEPEMIMPINAN',
        mainTitle: 'Dapatkah Tim Menjelaskan Apa yang Terjadi Ketika Angka Ini Berubah?',
        paragraphs: [
          'Jika sebuah metrik naik atau turun, para pemimpin harus mengetahui hipotesis mana yang perlu diuji, peran mana yang menyelidiki, dan rentang perubahan mana yang memerlukan intervensi.',
          'Kejelasan itulah yang membedakan antara dasbor yang sekadar melaporkan masa lalu dan sistem manajemen yang meningkatkan kualitas keputusan.',
        ],
      },
    ],
  },
  'designing-organisations-that-can-operate-through-uncertainty': {
    title: 'Merancang Organisasi yang Mampu Beroperasi di Tengah Ketidakpastian',
    category: 'KEPEMIMPINAN TANGGUH',
    tags: ['KETANGGUHAN', 'IOT', 'VISIBILITAS OPERASIONAL'],
    author: 'Kepemimpinan Kaluna Technology',
    readTime: '7 menit baca',
    date: 'Mei 2026',
    language: 'id-ID',
    description:
      'Apa yang diajarkan oleh operasional terhubung kepada para pemimpin tentang visibilitas, eskalasi, dan pembangunan sistem yang tetap andal saat kondisi berubah.',
    coverImageAlt: 'Pemimpin operasional mengoordinasikan respons ketangguhan dengan tenang',
    sections: [
      {
        eyebrow: 'GAGASAN UTAMA',
        mainTitle: 'Visibilitas Adalah Kapabilitas Kepemimpinan',
        paragraphs: [
          'MyBoss membuktikan bahwa ketangguhan bergantung pada sinyal yang tepat waktu dan jalur eskalasi yang jelas. Prinsip yang sama berlaku bagi organisasi: setiap orang perlu mengetahui apa yang berubah, apa yang penting, dan siapa yang berwenang bertindak.',
          'Visibilitas bukanlah pengawasan terus-menerus. Visibilitas adalah gambaran bersama yang dirancang secara sadar mengenai kondisi saat ini, potensi risiko yang muncul, dan kepemilikan keputusan.',
        ],
        image: {
          src: '/images/projects/myboss-iot-system/case-study-angle-02.webp',
          alt: 'Visibilitas operasional terhubung dari lapangan ke ruang kontrol',
        },
      },
      {
        eyebrow: 'MELAMPAUI KEBERLANGSUNGAN BISNIS',
        mainTitle: 'Ketangguhan Dibangun melalui Keputusan Operasional Sehari-hari',
        paragraphs: [
          'Organisasi sering kali bersiap menghadapi insiden besar namun menoleransi titik kegagalan tunggal (single point of failure) dalam keseharian: satu pakar, satu spreadsheet, satu jalur persetujuan, atau satu saluran komunikasi.',
          'Upaya ketangguhan terbaik mengidentifikasi ketergantungan ini sebelum gangguan terjadi dan memberi tim cara yang aman untuk tetap beroperasi ketika proses utama sedang tidak tersedia.',
        ],
      },
      {
        eyebrow: 'PRINSIP DESAIN',
        mainTitle: 'Merancang untuk Kondisi Terbatas',
        subsections: [
          {
            subtitle: 'Pertahankan Konteks Kritis',
            content:
              'Tim harus tetap memiliki informasi yang cukup untuk mengambil keputusan tepat ketika aliran data ideal terganggu.',
          },
          {
            subtitle: 'Buat Eskalasi Menjadi Eksplisit',
            content:
              'Ambang batas intervensi yang jelas mencegah terjadinya keterlambatan tindakan maupun kendali eksekutif yang berlebihan.',
          },
          {
            subtitle: 'Distribusikan Kapabilitas Keputusan',
            content:
              'Orang-orang yang paling dekat dengan situasi lapangan membutuhkan wewenang terukur, prioritas jelas, dan akses ke gambaran operasi yang sama.',
          },
          {
            subtitle: 'Latih Pemulihan Secara Berkala',
            content:
              'Simulasi mengungkap ketidakjelasan peran dan ketergantungan tersembunyi jauh lebih efektif dibandingkan dokumen semata.',
          },
        ],
      },
      {
        eyebrow: 'PERTANYAAN KEPEMIMPINAN',
        mainTitle: 'Apa yang Berhenti Bekerja Ketika Satu Orang atau Sistem Tidak Tersedia?',
        paragraphs: [
          'Tinjauan ketangguhan yang bermanfaat menelusuri dampak ketidakhadiran tersebut terhadap pelanggan, operasional, informasi, dan kewenangan.',
          'Tujuannya bukan menghilangkan setiap gangguan, melainkan memastikan organisasi dapat mengenali perubahan, mengoordinasikan tindakan, dan pulih tanpa kehilangan kepercayaan.',
        ],
      },
    ],
  },
  'credible-strategy-requires-evidence-and-a-path-to-action': {
    title: 'Strategi yang Kredibel Membutuhkan Bukti dan Jalur Menuju Tindakan',
    category: 'PEMIKIRAN STRATEGIS',
    tags: ['KELAYAKAN', 'RISET', 'STRATEGI'],
    author: 'Kepemimpinan Artic Analytica',
    readTime: '6 menit baca',
    date: 'April 2026',
    language: 'id-ID',
    description:
      'Sebuah studi kelayakan hanya bernilai ketika bukti, asumsi, dan pilihan implementasi dihubungkan ke dalam satu kerangka pengambilan keputusan.',
    coverImageAlt: 'Para pengambil keputusan membandingkan bukti dan skenario pengembangan',
    sections: [
      {
        eyebrow: 'GAGASAN UTAMA',
        mainTitle: 'Melangkah Melampaui Proyeksi Tunggal',
        paragraphs: [
          'Studi GIK mengharuskan permintaan pasar, perilaku pengunjung, peluang spasial, dan asumsi operasional dipertimbangkan secara bersama-sama. Strategi menjadi kredibel ketika para pemimpin dapat melihat bagaimana faktor-faktor tersebut saling berinteraksi.',
          'Sebuah proyeksi hanyalah satu ekspresi dari serangkaian asumsi. Tanggung jawab kepemimpinan adalah memahami asumsi tersebut, memutuskan risiko mana yang dapat diterima, dan menciptakan cara untuk belajar sebelum mengambil komitmen yang tidak dapat diubah.',
        ],
        image: {
          src: '/images/projects/kajian-kelayakan-gik/case-study-angle-02.webp',
          alt: 'Bukti lapangan yang mendukung strategi pengembangan di Semarang',
        },
      },
      {
        eyebrow: 'KENYAMANAN SEMU DARI KEPASTIAN',
        mainTitle: 'Angka yang Presisi Tetap Bisa Menjadi Keputusan yang Lemah',
        paragraphs: [
          'Inisiatif jangka panjang memadukan ketidakpastian permintaan, kapasitas institusional, batasan finansial, dan perubahan perilaku publik. Memadatkan semua hal tersebut ke dalam satu angka imbal hasil dapat menyembunyikan pilihan-pilihan yang paling krusial.',
          'Strategi yang lebih bermanfaat membandingkan berbagai skenario, menyebutkan asumsi kritis secara terbuka, dan mengidentifikasi bukti apa yang harus memicu penyesuaian jalur.',
        ],
      },
      {
        eyebrow: 'DARI STUDI MENUJU TINDAKAN',
        mainTitle: 'Rekomendasi Membutuhkan Pemilik dan Sinyal',
        subsections: [
          {
            subtitle: 'Pisahkan Fakta dari Asumsi',
            content:
              'Perjelas klaim mana yang berasal dari bukti teramati dan mana yang bergantung pada perilaku di masa depan.',
          },
          {
            subtitle: 'Bertahap dalam Komitmen Besar',
            content:
              'Gunakan uji coba (pilot) dan investasi bertahap untuk mempelajari respons pasar sebelum mengunci keputusan yang paling mahal.',
          },
          {
            subtitle: 'Tunjuk Pemilik Keputusan',
            content:
              'Setiap rekomendasi harus mengidentifikasi siapa yang bertindak, siapa yang memberi masukan, dan siapa yang menyelesaikan perbedaan pendapat.',
          },
          {
            subtitle: 'Tetapkan Sinyal Penyesuaian',
            content:
              'Sepakati sejak awal perubahan permintaan, biaya, kapasitas, atau kebijakan mana yang mengharuskan strategi ditinjau kembali.',
          },
        ],
      },
      {
        eyebrow: 'PERTANYAAN KEPEMIMPINAN',
        mainTitle: 'Apa yang Harus Terbukti Benar Agar Strategi Ini Berhasil?',
        paragraphs: [
          'Pertanyaan ini membuka ketergantungan yang sering kali dibiarkan tersirat oleh rencana yang terlalu optimis. Pertanyaan ini juga membuat perbedaan pendapat menjadi produktif karena tim dapat menguji asumsi alih-alih mempertahankan preferensi pribadi.',
          'Strategi yang kredibel bukanlah janji bahwa masa depan akan selalu mengikuti rencana, melainkan cara disiplin untuk bertindak, belajar, dan menyesuaikan diri sembari melindungi hasil yang dituju.',
        ],
      },
    ],
  },
  'communication-design-is-part-of-public-impact': {
    title: 'Desain Komunikasi Adalah Bagian dari Dampak Publik',
    category: 'DAMPAK SOSIAL',
    tags: ['PERUBAHAN PERILAKU', 'KOMUNIKASI', 'LAYANAN PUBLIK'],
    author: 'Kepemimpinan Artic Analytica',
    readTime: '5 menit baca',
    date: 'Maret 2026',
    language: 'id-ID',
    description:
      'Bukti ilmiah hanya menciptakan dampak ketika masyarakat dapat memahami, mempercayai, dan menggunakannya di dalam realitas kehidupan sehari-hari.',
    coverImageAlt: 'Fasilitator lapangan dan keluarga merancang bersama materi komunikasi',
    sections: [
      {
        eyebrow: 'GAGASAN UTAMA',
        mainTitle: 'Akurasi dan Kemudahan Akses Harus Berjalan Beriringan',
        paragraphs: [
          'Penyusunan panduan penurunan risiko stunting menunjukkan mengapa komunikasi publik tidak boleh diperlakukan sekadar sebagai tahap pemformatan akhir. Bahasa, urutan penyampaian, contoh nyata, dan panduan fasilitator menentukan apakah pengetahuan benar-benar berubah menjadi tindakan.',
          'Para pemimpin bertanggung jawab bukan hanya atas kebenaran informasi, tetapi juga apakah informasi tersebut dapat dipahami dan diterapkan oleh masyarakat yang menghadapi berbagai keterbatasan.',
        ],
        image: {
          src: '/images/projects/panduan-perubahan-perilaku-stunting/case-study-angle-02.webp',
          alt: 'Komunikasi gizi keluarga praktis di lingkungan masyarakat',
        },
      },
      {
        eyebrow: 'KESENJANGAN IMPLEMENTASI',
        mainTitle: 'Pesan Gagal Ketika Mengabaikan Kondisi Tindakan',
        paragraphs: [
          'Seseorang mungkin memahami sebuah rekomendasi namun tetap tidak dapat menjalankannya karena faktor biaya, waktu, dinamika rumah tangga, kepercayaan diri, atau akses terhadap dukungan.',
          'Komunikasi yang menganggap pengetahuan sebagai satu-satunya penghambat dapat secara tidak sengaja membebankan tanggung jawab penuh pada audiens sembari membiarkan hambatan struktural tidak tersentuh.',
        ],
      },
      {
        eyebrow: 'PRAKTIK KO-DESAIN',
        mainTitle: 'Merancang Bersama Mereka yang Menyampaikan dan Menerima Pesan',
        subsections: [
          {
            subtitle: 'Dengarkan Hambatan Nyata',
            content:
              'Percakapan di garis depan mengungkap momen ketika panduan terasa membingungkan, tidak praktis, atau sulit diterapkan secara sosial.',
          },
          {
            subtitle: 'Gunakan Pilihan Konkret',
            content:
              'Contoh nyata, skenario harian, dan langkah kecil berikutnya jauh lebih mudah diterapkan dibandingkan instruksi abstrak.',
          },
          {
            subtitle: 'Dukung Peran Fasilitator',
            content:
              'Panduan percakapan, urutan visual, dan alat tindak lanjut membantu menjaga konsistensi tanpa membuat interaksi terasa kaku.',
          },
          {
            subtitle: 'Bangun Umpan Balik dalam Pelaksanaan',
            content:
              'Para pemimpin membutuhkan jalur pembelajaran lokal untuk terus menyempurnakan konten program, sumber daya, dan kebijakan.',
          },
        ],
      },
      {
        eyebrow: 'PERTANYAAN KEPEMIMPINAN',
        mainTitle: 'Realitas Siapa yang Masih Belum Terwakili di Dalam Pesan Ini?',
        paragraphs: [
          'Sebelum menyetujui komunikasi publik, para pemimpin perlu menanyakan siapa yang telah mengujinya, dalam kondisi apa, dan tindakan realistis apa yang diharapkan dari audiens selanjutnya.',
          'Dampak akan meningkat secara nyata ketika komunikasi diperlakukan sebagai bagian inti dari desain layanan, bukan sekadar lapisan kampanye di tahap akhir.',
        ],
      },
    ],
  },
  'brand-trust-is-built-through-consistent-experience': {
    title: 'Kepercayaan Brand Dibangun Melalui Pengalaman yang Konsisten',
    category: 'KEPEMIMPINAN BRAND',
    tags: ['BRAND', 'MEDIA', 'PENGALAMAN'],
    author: 'Tim Eksekutif Arsalynk',
    readTime: '4 menit baca',
    date: 'Februari 2026',
    language: 'id-ID',
    description:
      'Mulai dari platform korporat hingga produksi media olahraga, kepercayaan tumbuh ketika setiap titik interaksi audiens mengekspresikan janji yang sama dengan kejelasan.',
    coverImageAlt: 'Pimpinan brand, video, dan digital meninjau konsistensi pengalaman pengguna',
    sections: [
      {
        eyebrow: 'GAGASAN UTAMA',
        mainTitle: 'Konsistensi Lebih dari Sekadar Pengulangan Visual',
        paragraphs: [
          'Proyek Padel Arena dan Web Media menunjukkan bahwa konsistensi brand adalah keselarasan antara cerita, antarmuka, ekspektasi layanan, dan kualitas hasil kerja.',
          'Audiens tidak merasakan buku panduan brand. Mereka merasakan janji di berbagai momen: sebuah artikel, proposal, platform digital, interaksi dukungan, atau acara yang diselenggarakan. Kepercayaan tumbuh ketika seluruh momen tersebut saling menguatkan.',
        ],
        image: {
          src: '/images/projects/web-media-profile/case-study-angle-02.webp',
          alt: 'Tim editorial meninjau pengalaman brand responsif yang konsisten',
        },
      },
      {
        eyebrow: 'TANGGUNG JAWAB KEPEMIMPINAN',
        mainTitle: 'Pergeseran Brand Sering Kali Merupakan Masalah Sistem Operasi',
        paragraphs: [
          'Inkonsistensi jarang disebabkan semata-mata oleh penilaian desain yang kurang baik. Tim mungkin kekurangan prioritas bersama, aset yang dapat digunakan kembali, batas persetujuan yang jelas, atau waktu yang cukup untuk menerjemahkan panduan abstrak.',
          'Kepemimpinan harus membuat konsistensi lebih mudah diwujudkan dengan menghubungkan prinsip-prinsip brand ke dalam perangkat kerja harian, peran, dan pengambilan keputusan.',
        ],
      },
      {
        eyebrow: 'SISTEM YANG BERKELANJUTAN',
        mainTitle: 'Membangun Tata Kelola yang Mendukung Pertimbangan Tepat',
        subsections: [
          {
            subtitle: 'Tetapkan Janji Utama',
            content:
              'Sejumlah kecil prinsip pengalaman yang jelas membantu tim mengevaluasi pilihan melampaui tampilan visual semata.',
          },
          {
            subtitle: 'Sediakan Fondasi yang Dapat Digunakan Kembali',
            content:
              'Komponen, templat, panduan nada komunikasi, dan pustaka aset mengurangi pembuatan ulang yang tidak perlu.',
          },
          {
            subtitle: 'Tetapkan Batas Keputusan',
            content:
              'Tim perlu mengetahui apa yang dapat mereka sesuaikan secara mandiri dan apa yang memerlukan tinjauan lebih luas.',
          },
          {
            subtitle: 'Audit Pengalaman Secara Menyeluruh',
            content:
              'Tinjau perjalanan pelanggan dan momen serah terima layanan—bukan hanya materi kampanye—untuk memastikan keselarasan dengan janji brand.',
          },
        ],
      },
      {
        eyebrow: 'PERTANYAAN KEPEMIMPINAN',
        mainTitle: 'Apakah Audiens Mengenali Organisasi yang Sama di Setiap Titik Sentuh?',
        paragraphs: [
          'Pertanyaannya bukanlah apakah setiap keluaran terlihat identik, melainkan apakah nada bicara, kejelasan, kualitas, dan perilaku mengekspresikan janji yang utuh.',
          'Kepemimpinan brand yang kuat menciptakan struktur yang cukup untuk menjaga konsistensi sekaligus ruang gerak yang cukup bagi tim untuk merespons konteks secara cerdas.',
        ],
      },
    ],
  },
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
