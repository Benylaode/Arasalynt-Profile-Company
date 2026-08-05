import Image from 'next/image';

const BRANDS = [
  { name: 'Nasmoco', src: '/images/client-logos/nasmoco.webp' },
  { name: 'Kota Semarang', src: '/images/client-logos/kota-semarang.webp' },
  { name: 'BSP', src: '/images/client-logos/bsp.webp' },
  { name: 'Suara Merdeka', src: '/images/client-logos/suara-merdeka.webp' },
  { name: 'Top Toy', src: '/images/client-logos/top-toy.webp' },
  { name: 'Aiansea', src: '/images/client-logos/aiansea.webp' },
  { name: 'Catatanesia', src: '/images/client-logos/catatanesia.webp' },
  { name: 'CityLab News', src: '/images/client-logos/citylab-news.webp' },
  { name: 'Partner 05', src: '/images/client-logos/partner-05.webp' },
  { name: 'Jateng View', src: '/images/client-logos/jateng-view.webp' },
  { name: 'Partner 07', src: '/images/client-logos/partner-07.webp' },
  { name: 'Presstis', src: '/images/client-logos/presstis.webp' },
  { name: 'Semarang Center', src: '/images/client-logos/semarang-center.webp' },
  { name: 'Go', src: '/images/client-logos/go.webp' },
  { name: 'Partner 11', src: '/images/client-logos/partner-11.webp' },
  { name: 'X-1 Tire', src: '/images/client-logos/x1-tire.webp' },
  { name: 'Queen City Mall', src: '/images/client-logos/queen-city-mall.webp' },
  { name: 'Aspog Jateng', src: '/images/client-logos/aspog-jateng.webp' },
  { name: 'Partner 18', src: '/images/client-logos/partner-18.webp' },
];

export default function ClientLogoBar() {
  const doubledBrands = [...BRANDS, ...BRANDS];

  return (
    <section
      className="relative z-[2] -mb-[2px] isolate overflow-hidden border-0 bg-[#F7F7F7] py-[48px] shadow-none outline-none after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-20 after:h-[3px] after:bg-[#F7F7F7] after:content-[''] max-[768px]:py-[36px]"
      aria-label="Trusted by leading companies"
    >
      <div className="site-shell flex flex-col items-center gap-[32px] px-0 max-[768px]:gap-[24px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-[5px] text-[#1A3E9E]">
            <span className="h-[7px] w-[7px] shrink-0 bg-[#1A3E9E]" aria-hidden="true" />
            <span className="font-body text-[11px] font-extrabold uppercase leading-[1.6] tracking-[0.02em]">
              PROVEN TRACKS, TRUSTED BY THE BEST
            </span>
          </div>
        </div>

        <div className="relative w-full overflow-hidden before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[15%] before:z-[2] before:pointer-events-none before:bg-gradient-to-r before:from-[#F7F7F7] before:to-transparent after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[15%] after:z-[2] after:pointer-events-none after:bg-gradient-to-l after:from-[#F7F7F7] after:to-transparent">
          <div className="flex items-center gap-[24px] max-[768px]:gap-[16px] w-max animate-marquee">
            {doubledBrands.map((brand, index) => (
              <div key={`${brand.name}-${index}`} className="inline-flex h-[38px] w-[88px] shrink-0 items-center justify-center mx-[12px] opacity-90 transition-[transform,opacity] duration-300 hover:scale-105 hover:opacity-100 max-[768px]:h-[31px] max-[768px]:w-[73px]">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={150}
                  height={64}
                  className="block max-h-full max-w-full object-contain grayscale saturate-0 brightness-[0.58] contrast-[1.12]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
