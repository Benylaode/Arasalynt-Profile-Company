import Link from 'next/link';

const ArrowRight = () => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1 1L7 7L1 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function BeyondExpectations() {
  return (
    <section
      id="beyond-expectations"
      aria-label="Beyond Expectations CTA"
      className="relative isolate flex min-h-[clamp(450px,32vw,615px)] w-full items-center justify-center overflow-hidden bg-[#101010] px-[6vw] py-[clamp(80px,6.563vw,126px)] text-center max-[1199px]:px-[4vw]"
    >
      {/* SVG Background Layer */}
      <div className="absolute inset-0 -z-20 pointer-events-none flex items-center justify-center">
        <img
          src="/images/componen/beyond_bg.svg"
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
        />
        {/* Bottom Fade to Black (Solid base) */}
        <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-gradient-to-t from-[#101010] from-[25%] via-[#101010]/80 via-[60%] to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1700px] flex-col items-center">
        <div className="flex w-full flex-col items-center gap-[clamp(18px,1.25vw,24px)]">
          <h2
            className="m-0 max-w-[1180px] text-center text-[clamp(48px,5.729vw,110px)] font-medium leading-[0.96] tracking-[-0.03em] text-[#F7F7F7] max-[480px]:text-[40px]"
            style={{
              fontFamily: '"Switzer", Arial, sans-serif',
            }}
          >
            <span className="block">We Build Beyond</span>
            <span className="block">Your Expectations</span>
          </h2>

          <p
            className="mx-auto max-w-[580px] font-normal text-[clamp(15px,1.042vw,20px)] leading-[1.6] tracking-[0.02em] text-[#D9D9D9]"
            style={{
              fontFamily: '"Manrope", Arial, sans-serif',
            }}
          >
            Connect with Arsalynk and explore how integrated expertise creates
            measurable impact across every opportunity.
          </p>
        </div>

        <div className="mt-[clamp(24px,1.667vw,32px)] flex w-full flex-wrap items-center justify-center gap-[12px] max-[480px]:flex-col max-[480px]:gap-[10px]">
          <Link
            href="/contact-us#contact-form"
            className="group inline-flex h-[clamp(47px,3.125vw,60px)] min-w-[clamp(175px,11.979vw,230px)] items-center justify-center gap-[10px] rounded-full bg-[#E6FF2A] px-[clamp(24px,1.667vw,32px)] text-[clamp(14px,0.833vw,16px)] font-extrabold leading-[1.2] text-[#101010] transition-transform duration-300 hover:-translate-y-1 max-[480px]:w-full max-[480px]:max-w-[280px]"
            style={{
              fontFamily: '"Manrope", Arial, sans-serif',
            }}
          >
            <span>GET IN TOUCH</span>

            <span className="flex h-[16px] w-[12px] scale-[0.85] items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </Link>

          <Link
            href="/our-works"
            className="inline-flex h-[clamp(47px,3.125vw,60px)] min-w-[clamp(171px,11.719vw,225px)] items-center justify-center rounded-full border border-[#E6FF2A] px-[clamp(24px,1.667vw,32px)] text-[clamp(14px,0.833vw,16px)] font-extrabold leading-[1.2] text-[#F7F7F7] transition-colors duration-300 hover:bg-[#E6FF2A] hover:text-[#101010] max-[480px]:w-full max-[480px]:max-w-[280px]"
            style={{
              fontFamily: '"Manrope", Arial, sans-serif',
            }}
          >
            EXPLORE WORKS
          </Link>
        </div>
      </div>
    </section>
  );
}
