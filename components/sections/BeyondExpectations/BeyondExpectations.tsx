'use client';

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
      id="contact"
      aria-label="Beyond Expectations CTA"
      className="relative isolate flex min-h-[450px] w-full items-center justify-center overflow-hidden bg-[#101010] px-[110px] py-[80px] text-center max-[1280px]:px-[64px] max-[1024px]:min-h-[400px] max-[1024px]:px-[40px] max-[1024px]:py-[64px] max-[768px]:min-h-[350px] max-[768px]:px-[24px] max-[768px]:py-[48px] max-[480px]:px-[16px] max-[480px]:py-[40px]"
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
      <div className="relative z-10 flex w-full max-w-[1700px] flex-col items-center">
        <div className="flex w-full flex-col items-center gap-[24px]">
          <h2
            className="m-0 max-w-[1000px] text-center text-[86px] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7] max-[1440px]:text-[74px] max-[1280px]:max-w-[900px] max-[1280px]:text-[64px] max-[1024px]:max-w-[760px] max-[1024px]:text-[54px] max-[768px]:max-w-[580px] max-[768px]:text-[42px] max-[480px]:text-[34px]"
            style={{
              fontFamily: '"Switzer", Arial, sans-serif',
            }}
          >
            We Build Beyond
            <br />
            Your Expectations
          </h2>

          <p
            className="m-0 max-w-[780px] text-center text-[16px] font-normal leading-[1.6] tracking-[0.02em] text-[#D9D9D9] max-[1024px]:max-w-[680px] max-[1024px]:text-[14px] max-[768px]:max-w-[540px] max-[768px]:text-[13px] max-[480px]:leading-[1.7]"
            style={{
              fontFamily: '"Manrope", Arial, sans-serif',
            }}
          >
            Connect with Arsalynk and explore how integrated expertise
            <br className="max-[768px]:hidden" />
            creates measurable impact across every opportunity.
          </p>
        </div>

        <div className="mt-[28px] flex h-[47px] items-center justify-center gap-[12px] max-[640px]:mt-[20px] max-[640px]:h-auto max-[640px]:w-full max-[640px]:flex-col max-[640px]:gap-[10px]">
          <a
            href="#contact-form"
            className="group inline-flex h-[47px] w-[175px] items-center justify-center gap-[10px] rounded-full bg-[#E6FF2A] px-[24px] text-[14px] font-extrabold leading-[1.2] text-[#101010] transition-transform duration-300 hover:-translate-y-1 max-[640px]:w-full max-[640px]:max-w-[280px]"
            style={{
              fontFamily: '"Manrope", Arial, sans-serif',
            }}
          >
            <span>GET IN TOUCH</span>

            <span className="flex h-[16px] w-[12px] scale-[0.85] items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </a>

          <a
            href="#works"
            className="inline-flex h-[47px] w-[171px] items-center justify-center rounded-full border border-[#E6FF2A] px-[24px] text-[14px] font-extrabold leading-[1.2] text-[#F7F7F7] transition-colors duration-300 hover:bg-[#E6FF2A] hover:text-[#101010] max-[640px]:w-full max-[640px]:max-w-[280px]"
            style={{
              fontFamily: '"Manrope", Arial, sans-serif',
            }}
          >
            EXPLORE WORKS
          </a>
        </div>
      </div>
    </section>
  );
}