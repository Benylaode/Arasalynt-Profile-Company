import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';

const BRANDS = [
  { name: "Sinar Mas", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "-0.04em", color: "#333" }}>sinarmas</span> },
  { name: "Queen City Mall", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.0rem", letterSpacing: "0.02em", color: "#333" }}>QUEEN CITY</span> },
  { name: "Sinau Print", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.0rem", color: "#333" }}>SINAU PRINT</span> },
  { name: "BSP", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "-0.02em", color: "#333" }}>BSP</span> },
  { name: "Suara Merdeka", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "0.9rem", color: "#333", textTransform: "uppercase" as const }}>SUARA MERDEKA</span> },
  { name: "X-1 Tire", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "0.05em", color: "#333" }}>X-1 TIRE</span> },
  { name: "Bank Jateng", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.0rem", color: "#333" }}>Bank Jateng</span> },
  { name: "Portres", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.0rem", color: "#333" }}>PORTRES</span> },
  { name: "Top Toy", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.1rem", color: "#333" }}>TOP TOY</span> },
  { name: "PB YPI", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.0rem", color: "#333" }}>PB YPI</span> },
  { name: "BRIDA", logo: <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.1rem", color: "#333" }}>BRIDA</span> },
];

export default function ClientLogoBar() {
  const doubledBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="bg-[#F0F2F8] py-[48px] max-[768px]:py-[36px] overflow-hidden" aria-label="Trusted by leading companies">
      <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] flex flex-col items-center gap-[32px] max-[768px]:gap-[24px]">
        <div className="text-center">
          <SectionLabel text="PROVEN TRACKS, TRUSTED BY THE BEST" />
        </div>

        <div className="relative w-full overflow-hidden before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[100px] max-[768px]:before:w-[50px] before:z-[2] before:pointer-events-none before:bg-gradient-to-r before:from-[#F0F2F8] before:to-transparent after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[100px] max-[768px]:after:w-[50px] after:z-[2] after:pointer-events-none after:bg-gradient-to-l after:from-[#F0F2F8] after:to-transparent">
          <div className="flex items-center gap-[48px] max-[768px]:gap-[32px] w-max animate-marquee">
            {doubledBrands.map((brand, index) => (
              <div key={`${brand.name}-${index}`} className="inline-flex items-center justify-center mx-[24px] opacity-70 filter grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-105">
                {brand.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


