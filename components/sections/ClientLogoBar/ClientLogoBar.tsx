import styles from './ClientLogoBar.module.css';
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
  // Double for seamless marquee loop
  const doubledBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className={styles.section} aria-label="Trusted by leading companies">
      <div className={styles.inner}>
        <div className={styles.labelWrap}>
          <SectionLabel text="Trusted By Leading Companies" />
        </div>

        <div className={styles.marquee}>
          <div className={styles.track}>
            {doubledBrands.map((brand, index) => (
              <div key={`${brand.name}-${index}`} className={styles.logoItem} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", margin: "0 40px", opacity: 0.6, filter: "grayscale(100%)", transition: "opacity 0.3s ease, filter 0.3s ease" }}>
                {brand.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
