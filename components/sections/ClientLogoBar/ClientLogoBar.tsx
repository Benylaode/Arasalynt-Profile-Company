import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';

const BRANDS = [
  { name: "Sinar Mas", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "-0.04em", color: "var(--color-text-secondary)" }}>sinarmas</span> },
  { name: "GOTO", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "-0.02em", color: "var(--color-text-secondary)" }}>go<span style={{ color: "var(--color-lime-500)" }}>to</span></span> },
  { name: "BCA", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.3rem", letterSpacing: "0.08em", color: "var(--color-text-secondary)" }}>BCA</span> },
  { name: "Pertamina", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.1rem", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>PERTAMINA</span> },
  { name: "Unilever", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: "1.25rem", letterSpacing: "0.05em", color: "var(--color-text-secondary)" }}>Unilever</span> },
  { name: "Mandiri", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.15rem", fontStyle: "italic", color: "var(--color-text-secondary)" }}>mandırı</span> },
  { name: "Adaro", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.2rem", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>adaro</span> },
  { name: "Telkom", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.25rem", color: "var(--color-text-secondary)" }}>Telkom <span style={{ fontWeight: 300 }}>Indonesia</span></span> }
];

export default function ClientLogoBar() {
  const doubledBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="bg-white py-[64px] max-[768px]:py-[48px] overflow-hidden" aria-label="Trusted by leading companies">
      <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] flex flex-col items-center gap-[40px] max-[768px]:gap-[28px]">
        <div className="text-center">
          <SectionLabel text="TRUSTED BY LEADING COMPANIES" />
        </div>

        <div className="relative w-full overflow-hidden before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[100px] max-[768px]:before:w-[50px] before:z-[2] before:pointer-events-none before:bg-gradient-to-r before:from-white before:to-transparent after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[100px] max-[768px]:after:w-[50px] after:z-[2] after:pointer-events-none after:bg-gradient-to-l after:from-white after:to-transparent">
          <div className="flex items-center gap-[48px] max-[768px]:gap-[32px] w-max animate-marquee">
            {doubledBrands.map((brand, index) => (
              <div key={`${brand.name}-${index}`} className="inline-flex items-center justify-center mx-[32px] opacity-60 filter grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-105">
                {brand.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
