import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { getSolutionService, SOLUTION_SERVICES } from '@/lib/our-solution.data';
import { SITE_URL } from '@/lib/constants';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SOLUTION_SERVICES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getSolutionService(slug);

  if (!service) {
    return { title: 'Solution Not Found', robots: { index: false, follow: false } };
  }

  const canonicalUrl = `/our-solution/${service.slug}`;
  const title = `${service.title} | Solusi Enterprise Arsalynk`;

  return {
    title,
    description: service.description,
    keywords: service.keywords,
    robots: { index: true, follow: true },
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'website',
      title: `${service.title} | Arsalynk Enterprise Solution`,
      description: service.description,
      url: canonicalUrl,
      images: [
        {
          url: service.image.startsWith('/') ? service.image : '/images/our-works/our-works-hero-bg.webp',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Arsalynk Enterprise Solution`,
      description: service.description,
      images: [service.image.startsWith('/') ? service.image : '/images/our-works/our-works-hero-bg.webp'],
    },
  };
}

function IconArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19M14 7L19 12L14 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-[#E6FF2A]">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function SolutionServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getSolutionService(slug);

  if (!service) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/our-solution/${service.slug}`;
  const otherServices = SOLUTION_SERVICES.filter((s) => s.slug !== service.slug);

  const solutionServiceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: service.title,
        description: service.description,
        provider: { '@id': `${SITE_URL}/#organization` },
        serviceType: service.title,
        areaServed: 'ID',
        url: canonicalUrl,
        category: service.industry,
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `${service.title} | Arsalynk`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${canonicalUrl}#service` },
        description: service.description,
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        inLanguage: 'id-ID',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Our Solution', item: `${SITE_URL}/our-solution` },
          { '@type': 'ListItem', position: 3, name: service.shortTitle, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <script
        id={`solution-service-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(solutionServiceSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* ── HERO SECTION ── */}
      <section className="relative isolate flex min-h-[580px] items-center justify-center overflow-hidden rounded-b-[clamp(24px,2.188vw,42px)] bg-[#101010] pb-20 pt-[140px] text-white">
        <img
          src="/images/our-works/our-works-hero-bg.webp"
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 z-0 h-auto min-h-[160%] w-[105%] min-w-[1100px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover opacity-50"
        />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,_rgba(26,62,158,0.55),_transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-[#101010] to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 text-center">
          {/* Breadcrumb text */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.08em] text-[#E6FF2A]">
            <Link href="/" className="transition hover:opacity-75">Home</Link>
            <span aria-hidden="true">·</span>
            <Link href="/our-solution" className="transition hover:opacity-75">Our Solution</Link>
            <span aria-hidden="true">·</span>
            <span className="text-white/80">{service.shortTitle}</span>
          </nav>

          <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-[0.05em] text-white backdrop-blur-[6px]">
            <span className="h-2 w-2 rounded-full bg-[#E6FF2A]" />
            {service.industry}
          </span>

          <h1 className="mt-6 max-w-[980px] font-heading text-[clamp(36px,4.5vw,72px)] font-medium leading-[1.08] text-[#F7F7F7]">
            {service.title}
          </h1>

          <p className="mt-5 max-w-[760px] font-body text-[clamp(15px,1.15vw,20px)] font-light leading-[1.65] text-white/90">
            {service.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us#contact-form"
              className="inline-flex h-[50px] items-center justify-center gap-2.5 rounded-full bg-[#E6FF2A] px-7 font-body text-[14px] font-bold tracking-[0.02em] text-[#101010] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_25px_rgba(230,255,42,0.35)]"
            >
              <span>Konsultasi Solusi</span>
              <IconArrowRight />
            </Link>

            <Link
              href={`/insight-programs/case-studies/${service.caseStudySlug}`}
              className="inline-flex h-[50px] items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-7 font-body text-[14px] font-semibold text-white backdrop-blur-[4px] transition duration-300 hover:border-[#E6FF2A] hover:bg-white/15 hover:text-[#E6FF2A]"
            >
              <span>Lihat Case Study Terkait</span>
              <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: WHAT IT IS & OVERVIEW ── */}
      <section className="px-[6vw] py-[clamp(70px,6.5vw,120px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>WHAT IT IS</span>
            </div>
            <h2 className="font-heading text-[clamp(32px,3.2vw,56px)] font-medium leading-[1.12] text-[#101010]">
              Arsitektur Operasional yang Terintegrasi &amp; Presisi
            </h2>
            <p className="font-body text-[clamp(15px,1vw,18px)] leading-[1.7] text-[#424242]">
              {service.whatItIs}
            </p>
            <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-[#1A3E9E]/15 bg-[rgba(26,62,158,0.03)] p-6">
              <h3 className="font-body text-[15px] font-bold text-[#1A3E9E]">Mengapa Pendekatan Ini Berbeda?</h3>
              <p className="font-body text-[14px] leading-[1.65] text-[#555]">
                Kami tidak menerapkan solusi generik yang kaku. Setiap modul dirancang adaptif mengikuti regulasi bisnis Indonesia, alur operasional internal tim, serta skalabilitas ekspansi jangka panjang.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-black/10 bg-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PROBLEMS IT SOLVES (THE CHALLENGE) ── */}
      <section className="bg-[#EEF0F6] px-[6vw] py-[clamp(70px,6.5vw,120px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-10">
          <div className="flex max-w-[900px] flex-col gap-4">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>THE CHALLENGE</span>
            </div>
            <h2 className="font-heading text-[clamp(32px,3.2vw,56px)] font-medium leading-[1.12]">
              Masalah Nyata yang Diselesaikan
            </h2>
            <p className="font-body text-[clamp(15px,1vw,18px)] leading-[1.65] text-[#424242]">
              {service.challenge}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-2xl border border-white bg-white/80 p-6 shadow-sm backdrop-blur-[6px]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A3E9E]/10 font-bold text-[#1A3E9E]">01</div>
              <h3 className="font-heading text-[22px] font-medium text-[#101010]">Fragmentasi Informasi</h3>
              <p className="font-body text-[14px] leading-[1.6] text-[#555]">
                Data yang tersebar di beragam format dan dokumen fisik memperlambat kolaborasi antar divisi dan menciptakan celah miskomunikasi.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-white bg-white/80 p-6 shadow-sm backdrop-blur-[6px]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A3E9E]/10 font-bold text-[#1A3E9E]">02</div>
              <h3 className="font-heading text-[22px] font-medium text-[#101010]">Data Lag &amp; Keputusan Reaktif</h3>
              <p className="font-body text-[14px] leading-[1.6] text-[#555]">
                Laporan yang baru selesai berhari-hari setelah kejadian membuat jajaran manajemen terlambat merespons fluktuasi pasar atau kendala teknis.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-white bg-white/80 p-6 shadow-sm backdrop-blur-[6px]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A3E9E]/10 font-bold text-[#1A3E9E]">03</div>
              <h3 className="font-heading text-[22px] font-medium text-[#101010]">Beban Administrasi Manual</h3>
              <p className="font-body text-[14px] leading-[1.6] text-[#555]">
                Waktu kerja berharga karyawan habis untuk rekonsiliasi berulang dan entri data manual yang rawan human-error.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CAPABILITIES & APPROACH ── */}
      <section className="bg-[#101010] px-[6vw] py-[clamp(80px,7vw,130px)] text-white max-[1199px]:px-[4vw]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#E6FF2A]">
              <span className="h-2 w-2 bg-[#E6FF2A]" />
              <span>CAPABILITIES &amp; APPROACH</span>
            </div>
            <h2 className="font-heading text-[clamp(32px,3.2vw,56px)] font-medium leading-[1.12] text-[#F7F7F7]">
              Kapabilitas Utama yang Kami Bangun
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((step, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E6FF2A]/50 hover:bg-white/[0.08]"
              >
                <div>
                  <span className="font-heading text-[28px] font-medium text-[#E6FF2A]">0{idx + 1}</span>
                  <p className="mt-4 font-body text-[15px] leading-[1.65] text-white/85">
                    {step}
                  </p>
                </div>
                <div className="mt-6 h-1 w-12 rounded-full bg-[#E6FF2A]/30 transition group-hover:w-full group-hover:bg-[#E6FF2A]" />
              </div>
            ))}
          </div>

          {/* Outcomes checklist */}
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/[0.03] p-8">
            <h3 className="font-heading text-[24px] font-medium text-[#E6FF2A]">Hasil &amp; Dampak Terukur:</h3>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {service.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <IconCheck />
                  <span className="font-body text-[15px] leading-[1.6] text-white/90">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 & 5: INTEGRATION ARCHITECTURE & WHO IT IS FOR ── */}
      <section className="px-[6vw] py-[clamp(70px,6.5vw,120px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Integration */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>INTEGRATION ARCHITECTURE</span>
            </div>
            <h2 className="font-heading text-[clamp(28px,2.6vw,46px)] font-medium leading-[1.15]">
              Terhubung Mulus dengan Sistem Anda
            </h2>
            <p className="font-body text-[15px] leading-[1.65] text-[#555]">
              Tidak perlu membuang infrastruktur yang sudah berjalan. Kami membangun konektor API dan protokol sinkronisasi yang menjamin kontinuitas data secara real-time.
            </p>
            <ul className="mt-2 flex flex-col gap-3 p-0">
              {service.integration.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1A3E9E] text-xs font-bold text-white">✓</span>
                  <span className="font-body text-[14px] leading-[1.6] text-[#222]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who It Is For */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>TARGET AUDIENCE</span>
            </div>
            <h2 className="font-heading text-[clamp(28px,2.6vw,46px)] font-medium leading-[1.15]">
              Dirancang Spesifik Untuk Kebutuhan Anda
            </h2>
            <p className="font-body text-[15px] leading-[1.65] text-[#555]">
              Cocok bagi perusahaan yang mengutamakan akurasi, kepatuhan audit, dan efisiensi rantai kerja operasional lintas departemen.
            </p>
            <ul className="mt-2 flex flex-col gap-3 p-0">
              {service.whoItIsFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E6FF2A] text-xs font-bold text-[#101010]">★</span>
                  <span className="font-body text-[14px] leading-[1.6] text-[#222]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CONTEXTUAL PROOF (CASE STUDY & RELATED WORK) ── */}
      <section className="bg-[rgba(153,166,231,0.12)] px-[6vw] py-[clamp(80px,7vw,130px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>CONTEXTUAL PROOF &amp; IMPLEMENTATION</span>
            </div>
            <h2 className="font-heading text-[clamp(32px,3.2vw,56px)] font-medium leading-[1.12]">
              Bukti Implementasi Nyata
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Case Study Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-white bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-4">
                <span className="font-body text-[11px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
                  RELATED CASE STUDY
                </span>
                <h3 className="font-heading text-[28px] font-medium text-[#101010]">
                  Pelajari Bagaimana Kami Memecahkan Masalah Ini di Lapangan
                </h3>
                <p className="font-body text-[15px] leading-[1.65] text-[#555]">
                  Baca studi kasus lengkap tentang implementasi workflow, tahapan arsitektur solusi, dan hasil terukur yang dinikmati klien kami.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href={`/insight-programs/case-studies/${service.caseStudySlug}`}
                  className="inline-flex h-[46px] items-center gap-2 rounded-full bg-[#1A3E9E] px-6 font-body text-[13px] font-semibold text-white transition hover:bg-[#152571]"
                >
                  <span>Buka Case Study Lengkap</span>
                  <IconArrowRight />
                </Link>
              </div>
            </div>

            {/* Related Work Card (if exists) */}
            {service.relatedWork ? (
              <div className="flex flex-col justify-between rounded-3xl border border-white bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-4">
                  <span className="font-body text-[11px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
                    SUPPORTING PROJECT PROOF
                  </span>
                  <h3 className="font-heading text-[28px] font-medium text-[#101010]">
                    {service.relatedWork.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.65] text-[#555]">
                    {service.relatedWork.relationship === 'direct'
                      ? 'Proyek ini menjadi representasi implementasi langsung dari kapabilitas solusi ini.'
                      : 'Proyek ini menunjukkan kapabilitas teknologi pendukung yang relevan dengan arsitektur solusi ini.'}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/our-works/${service.relatedWork.slug}`}
                    className="inline-flex h-[46px] items-center gap-2 rounded-full border border-[#1A3E9E] px-6 font-body text-[13px] font-semibold text-[#1A3E9E] transition hover:bg-[#1A3E9E] hover:text-white"
                  >
                    <span>Eksplorasi Proyek Karya</span>
                    <IconArrowRight />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-between rounded-3xl border border-white bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-4">
                  <span className="font-body text-[11px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
                    CUSTOM ARCHITECTURE
                  </span>
                  <h3 className="font-heading text-[28px] font-medium text-[#101010]">
                    Solusi Kustom Sesuai Kebutuhan Anda
                  </h3>
                  <p className="font-body text-[15px] leading-[1.65] text-[#555]">
                    Setiap arsitektur dirancang khusus untuk mengakomodasi skala operasi dan ekosistem bisnis Anda. Diskusikan rencana digitalisasi Anda bersama tim konsultan kami.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact-us#contact-form"
                    className="inline-flex h-[46px] items-center gap-2 rounded-full bg-[#1A3E9E] px-6 font-body text-[13px] font-semibold text-white transition hover:bg-[#152571]"
                  >
                    <span>Hubungi Tim Konsultan</span>
                    <IconArrowRight />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: EXPLORE OTHER SOLUTIONS ── */}
      <section className="px-[6vw] py-[clamp(60px,5vw,100px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              EXPLORE ALL CAPABILITIES
            </span>
            <h2 className="font-heading text-[clamp(28px,2.5vw,44px)] font-medium">
              Solusi Enterprise Lainnya
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.slice(0, 4).map((other) => (
              <Link
                key={other.slug}
                href={`/our-solution/${other.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#1A3E9E] hover:shadow-md"
              >
                <div>
                  <span className="font-body text-[11px] font-bold uppercase tracking-wider text-[#1A3E9E]">
                    {other.industry}
                  </span>
                  <h3 className="mt-2 font-heading text-[20px] font-medium leading-snug text-[#101010] transition group-hover:text-[#1A3E9E]">
                    {other.shortTitle}
                  </h3>
                  <p className="mt-2 line-clamp-2 font-body text-[13px] leading-relaxed text-[#666]">
                    {other.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 font-body text-[12px] font-semibold text-[#1A3E9E]">
                  <span>Pelajari Solusi</span>
                  <IconArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <BeyondExpectations />
    </main>
  );
}
