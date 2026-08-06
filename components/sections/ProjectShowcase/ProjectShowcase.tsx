'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';

/* =========================================================
   CONFIGURATION
========================================================= */

const AUTOPLAY_DURATION = 6000;
const PROGRESS_UPDATE_INTERVAL = 50;
const LOOP_COUNT = 30;

const CATEGORIES = ['TECHNOLOGY', 'SURVEY & DATA', 'MEDIA'] as const;

type ProjectCategory = (typeof CATEGORIES)[number];

type Project = {
  id: number;
  client: string;
  title: string;
  category: string;
  tabCategory: ProjectCategory;
  image: string;
};

const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    client: 'SINAU PRINT',
    title: 'Sinau Print Marketplace Website',
    category: 'BRANDING • SURVEY AND ANALYTICS',
    tabCategory: 'TECHNOLOGY',
    image: '/images/projects/sinau-print-erp/1.webp',
  },
  {
    id: 2,
    client: 'ARTIC ANALYTICA',
    title: 'Artic Complex Web Architecture & Portal',
    category: 'COMPLEX WEB • DATA PLATFORM',
    tabCategory: 'TECHNOLOGY',
    image: '/images/projects/artic-complex-web/1.webp',
  },
  {
    id: 3,
    client: 'MYBOSS',
    title: 'MyBoss Connected IoT Hardware & Control System',
    category: 'IOT SYSTEM • IT INFRASTRUCTURE',
    tabCategory: 'TECHNOLOGY',
    image: '/images/projects/myboss-iot-system/1.webp',
  },
  {
    id: 4,
    client: 'ALTATIC',
    title: 'Altatic Data Analytics & Intelligence Dashboard',
    category: 'SURVEY & DATA • ANALYTICS PLATFORM',
    tabCategory: 'SURVEY & DATA',
    image: '/images/projects/altatic-analytic/1.webp',
  },
  {
    id: 5,
    client: 'WEB MEDIA',
    title: 'Web Media Corporate Profile & Digital Presence',
    category: 'MEDIA • CORPORATE PROFILE',
    tabCategory: 'MEDIA',
    image: '/images/projects/web-media-profile/1.webp',
  },
];

/*
 * Ukuran tombol kategori 17% lebih kecil
 * daripada ukuran desain awal:
 *
 * TECHNOLOGY     168px → 139.5px
 * SURVEY & DATA  166px → 138px
 * MEDIA           97px → 80.5px
 */
const CATEGORY_WIDTH: Record<ProjectCategory, string> = {
  TECHNOLOGY: 'w-[clamp(113px,7.263vw,139.5px)]',
  'SURVEY & DATA': 'w-[clamp(114.5px,7.176vw,138px)]',
  MEDIA: 'w-[clamp(71.5px,4.193vw,80.5px)]',
};

/* =========================================================
   ICONS
========================================================= */

function IconChevronLeft({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChevronRight({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>('TECHNOLOGY');

  const filteredProjects = MOCK_PROJECTS.filter(
    (project) => project.tabCategory === activeCategory,
  );

  return (
    <section
      id="portfolio"
      aria-label="Featured works"
      className="
        relative overflow-hidden
        bg-[#F7F7F7]
        py-[64px]
        md:py-[80px]
        xl:pt-[clamp(88px,6.458vw,124px)]
        xl:pb-[clamp(88px,5.729vw,110px)]
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          mx-auto mb-[32px]
          flex w-[calc(100%-48px)] max-w-[1699px]
          flex-col justify-end gap-[32px]

          xl:mb-[clamp(32px,2.188vw,42px)]
          xl:min-h-[clamp(124px,7.813vw,150px)]
          xl:w-[88.49vw]
          xl:flex-row
          xl:items-end
          xl:justify-between
          xl:gap-0
        "
      >
        {/* Title area */}
        <div
          className="
            flex w-full flex-col
            items-start gap-[16px]

            xl:max-w-[804px]
            xl:gap-[clamp(18px,1.25vw,24px)]
          "
        >
          {/* Featured Works dibuat 10% lebih kecil */}
          <div className="flex items-center gap-[7px]">
            <span
              aria-hidden="true"
              className="
                block shrink-0
                h-[clamp(6px,0.375vw,7.2px)]
                w-[clamp(6px,0.375vw,7.2px)]
                bg-[#1A3E9E]
              "
            />

            <span
              className="
                font-body
                text-[10px]
                font-extrabold
                uppercase
                leading-[1.6]
                tracking-[0.02em]
                text-[#1A3E9E]

                xl:text-[clamp(11px,0.656vw,12.6px)]
              "
            >
              Featured Works
            </span>
          </div>

          <h2
            className="
              font-heading
              text-[clamp(44px,8vw,68px)]
              font-medium
              leading-none
              tracking-[-0.03em]
              text-[#101010]

              xl:text-[clamp(64px,4.375vw,84px)]
            "
          >
            We Build It All
          </h2>
        </div>

        {/* Filter buttons */}
        <div
          className="
            flex w-full flex-wrap
            items-center gap-[8px]

            xl:w-auto
            xl:flex-nowrap
            xl:justify-end
            xl:gap-[clamp(8px,0.519vw,10px)]
          "
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`
                  inline-flex h-[34px]
                  shrink-0 items-center justify-center

                  gap-[clamp(6px,0.432vw,8.3px)]
                  rounded-full
                  border
                  bg-transparent
                  px-[14px]

                  font-body
                  text-[10px]
                  font-semibold
                  leading-[1.6]

                  transition-[color,background-color,border-color]
                  duration-300

                  md:h-[38px]

                  xl:h-[clamp(38px,2.422vw,46.5px)]
                  xl:px-[clamp(15px,1.038vw,20px)]
                  xl:text-[clamp(11px,0.691vw,13.3px)]

                  ${CATEGORY_WIDTH[category]}

                  ${
                    isActive
                      ? `
                        border-[#192B84]
                        text-[#1A3E9E]
                      `
                      : `
                        border-[#C8C8C8]
                        text-[#C8C8C8]

                        hover:border-[#929292]
                        hover:bg-white/60
                        hover:text-[#747474]
                      `
                  }
                `}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="
                      h-[3.3px] w-[3.3px]
                      shrink-0
                      bg-[#1A3E9E]
                    "
                  />
                )}

                <span className="whitespace-nowrap">{category}</span>
              </button>
            );
          })}

          {/* See All Works dibuat 17% lebih kecil */}
          <a
            href="/our-works"
            className="
              inline-flex h-[38px]
              shrink-0 items-center justify-center

              gap-[clamp(8px,0.432vw,13.3px)]
              rounded-full
              border border-[#1A3E9E]
              bg-[#1A3E9E]
              px-[17px]

              font-body
              text-[11px]
              font-semibold
              leading-[1.6]
              tracking-[0.01em]
              text-[#F7F7F7]

              transition-[background-color,border-color]
              duration-300

              hover:border-[#152571]
              hover:bg-[#152571]

              md:h-[42px]

              xl:h-[clamp(38px,2.422vw,46.5px)]
              xl:w-[clamp(158px,9.813vw,188.5px)]
              xl:px-[clamp(16.5px,1.038vw,20px)]
              xl:text-[clamp(12px,0.779vw,15px)]
            "
          >
            <span className="whitespace-nowrap">SEE ALL WORKS</span>

            <span
              className="
                flex h-[20px] w-[20px]
                shrink-0 items-center justify-center

                xl:h-[clamp(20px,1.385vw,26.5px)]
                xl:w-[clamp(20px,1.385vw,26.5px)]
              "
            >
              <IconChevronRight size={17} />
            </span>
          </a>
        </div>
      </div>

      {/* =====================================================
          MOBILE PROJECT CARDS
      ====================================================== */}

      <div
        className="
          mx-auto flex
          w-[calc(100%-48px)]
          flex-col gap-[12px]
          md:hidden
        "
      >
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={`/works/${project.id}`}
            className="
              group relative block
              aspect-[1.72/1]
              overflow-hidden
              rounded-[16px]
              bg-black
            "
          >
            <img
              src={project.image}
              alt={project.title}
              draggable={false}
              className="
                absolute inset-0
                h-full w-full
                object-cover

                transition-transform
                duration-1000
                ease-[cubic-bezier(0.22,1,0.36,1)]

                group-hover:scale-[1.03]
              "
            />

            {/* Overlay gelap agar gambar terang tetap gelap */}
            <span
              aria-hidden="true"
              className="
                absolute inset-0
                bg-black/45
              "
            />

            {/* Gradient bawah */}
            <span
              aria-hidden="true"
              className="
                absolute inset-x-0 bottom-0
                h-[72%]

                bg-gradient-to-t
                from-black
                via-black/70
                to-transparent
              "
            />

            <span
              className="
                absolute inset-x-[18px]
                bottom-[18px]
                z-10
              "
            >
              <span
                className="
                  block max-w-[92%]

                  font-heading
                  text-[25px]
                  font-medium
                  leading-[1.1]
                  tracking-[-0.02em]
                  text-[#F7F7F7]
                "
              >
                {project.title}
              </span>

              <ProjectCategoryLabel
                category={project.category}
                className="mt-[10px] text-[9px]"
              />
            </span>
          </a>
        ))}
      </div>

      {/* =====================================================
          DESKTOP CAROUSEL
      ====================================================== */}

      <div className="hidden md:block">
        <ProjectCarouselTrack
          key={activeCategory}
          projects={filteredProjects}
        />
      </div>
    </section>
  );
}

/* =========================================================
   DESKTOP CAROUSEL
========================================================= */

function ProjectCarouselTrack({ projects }: { projects: Project[] }) {
  const extendedProjects = Array.from(
    { length: LOOP_COUNT },
    () => projects,
  ).flat();

  const startIndex = Math.floor(
    (LOOP_COUNT * Math.max(projects.length, 1)) / 2,
  );

  const [activeIndex, setActiveIndex] = useState(startIndex);
  const [isTrackMoving, setIsTrackMoving] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const progressRef = useRef(0);
  const lastProgressTimeRef = useRef<number | null>(null);

  const resetProgress = useCallback(() => {
    progressRef.current = 0;
    lastProgressTimeRef.current = null;
    setProgress(0);
  }, []);

  const moveToIndex = useCallback(
    (nextIndex: number) => {
      setIsTrackMoving(true);
      resetProgress();
      setActiveIndex(nextIndex);
    },
    [resetProgress],
  );

  const nextSlide = useCallback(() => {
    setIsTrackMoving(true);
    resetProgress();

    setActiveIndex((previousIndex) => previousIndex + 1);
  }, [resetProgress]);

  const previousSlide = useCallback(() => {
    setIsTrackMoving(true);
    resetProgress();

    setActiveIndex((previousIndex) => previousIndex - 1);
  }, [resetProgress]);

  /* =======================================================
     AUTOPLAY TIMER + PROGRESS BAR

     - Durasi 6 detik.
     - Progress 0% sampai 100%.
     - Otomatis pindah slide saat mencapai 100%.
     - Pause saat hover.
     - Lanjut dari posisi terakhir setelah hover selesai.
     - Reset saat navigasi manual.
  ======================================================= */

  useEffect(() => {
    if (projects.length <= 1 || isPaused) {
      lastProgressTimeRef.current = null;
      return;
    }

    lastProgressTimeRef.current = window.performance.now();

    const progressInterval = window.setInterval(() => {
      const currentTime = window.performance.now();

      if (document.hidden) {
        lastProgressTimeRef.current = currentTime;
        return;
      }

      const previousTime =
        lastProgressTimeRef.current ?? currentTime;

      const elapsedTime = currentTime - previousTime;

      lastProgressTimeRef.current = currentTime;

      const nextProgress =
        progressRef.current +
        (elapsedTime / AUTOPLAY_DURATION) * 100;

      if (nextProgress >= 100) {
        progressRef.current = 0;
        lastProgressTimeRef.current = currentTime;

        setProgress(0);
        setIsTrackMoving(true);
        setActiveIndex((previousIndex) => previousIndex + 1);

        return;
      }

      progressRef.current = nextProgress;
      setProgress(nextProgress);
    }, PROGRESS_UPDATE_INTERVAL);

    return () => {
      window.clearInterval(progressInterval);
    };
  }, [isPaused, projects.length]);

  if (projects.length === 0) {
    return (
      <div
        className="
          mx-auto flex
          h-[420px]
          w-[88.49vw]
          max-w-[1699px]
          items-center justify-center

          rounded-[24px]
          border border-[#D9D9D9]
        "
      >
        <p className="font-body text-[14px] text-[#717171]">
          No featured works are available in this category.
        </p>
      </div>
    );
  }

  const handleDragStart = (clientX: number) => {
    setDragStart(clientX);
  };

  const handleDragEnd = (clientX: number) => {
    if (dragStart === null) return;

    const difference = dragStart - clientX;

    if (difference > 50) {
      nextSlide();
    } else if (difference < -50) {
      previousSlide();
    }

    setDragStart(null);
  };

  return (
    <div
      className="
        relative
        h-[clamp(500px,39.583vw,760px)]
        w-full
        cursor-grab
        select-none
        overflow-hidden

        active:cursor-grabbing
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={(event) => {
        setIsPaused(false);

        if (dragStart !== null) {
          handleDragEnd(event.clientX);
        }
      }}
      onMouseDown={(event) => {
        handleDragStart(event.clientX);
      }}
      onMouseUp={(event) => {
        handleDragEnd(event.clientX);
      }}
      onTouchStart={(event) => {
        handleDragStart(event.touches[0].clientX);
      }}
      onTouchEnd={(event) => {
        handleDragEnd(event.changedTouches[0].clientX);
      }}
    >
      {/* =====================================================
          MOVING TRACK
      ====================================================== */}

      <div
        className="
          safari-motion-layer
          absolute left-0 top-0
          flex h-full gap-[16px]
        "
        onTransitionEnd={(event) => {
          if (event.target === event.currentTarget) {
            setIsTrackMoving(false);
          }
        }}
        style={
          {
            '--slide-width': 'clamp(760px, 73.594vw, 1413px)',

            transform: `
              translate3d(
                calc(
                  50vw -
                  (var(--slide-width) / 2) -
                  ${activeIndex} *
                  (var(--slide-width) + 16px)
                ),
                0,
                0
              )
            `,

            transition:
              'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)',

            willChange: isTrackMoving ? 'transform' : 'auto',
          } as CSSProperties
        }
      >
        {extendedProjects.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={`${project.id}-${index}`}
              onClick={() => {
                if (!isActive) {
                  moveToIndex(index);
                }
              }}
              className={`
                group relative
                h-full
                w-[var(--slide-width)]
                shrink-0
                overflow-hidden
                rounded-[32px]
                bg-black

                ${isActive ? 'z-10' : 'z-0'}
              `}
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="
                  pointer-events-none
                  absolute inset-0
                  h-full w-full
                  object-cover

                  transition-transform
                  duration-1000
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:scale-[1.025]
                "
              />

              {/* =================================================
                  BLACK OVERLAY

                  Tidak memakai opacity pada article.
                  Overlay hitam berada di atas gambar sehingga
                  background gambar terang tetap menjadi gelap.
              ================================================== */}

              <div
                aria-hidden="true"
                className={`
                  pointer-events-none
                  absolute inset-0
                  z-[1]
                  bg-black

                  transition-opacity
                  duration-500

                  ${
                    isActive
                      ? 'opacity-[0.46]'
                      : `
                        opacity-[0.64]
                        group-hover:opacity-[0.52]
                      `
                  }
                `}
              />

              {/* Gradient hitam bagian bawah */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-x-0 bottom-0
                  z-[2]
                  h-[68%]

                  bg-gradient-to-b
                  from-transparent
                  via-black/55
                  to-black
                "
              />

              {/* Tambahan shadow bawah agar teks selalu terbaca */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-x-0 bottom-0
                  z-[3]
                  h-[38%]

                  bg-gradient-to-t
                  from-black
                  via-black/50
                  to-transparent
                "
              />

              {/* Project information */}
              <div
                className="
                  pointer-events-none
                  absolute z-[5]

                  left-[clamp(32px,3.385vw,65px)]
                  right-[clamp(32px,3.385vw,65px)]
                  bottom-[clamp(32px,3.021vw,58px)]
                "
              >
                <h3
                  className="
                    max-w-[1236px]

                    font-heading
                    text-[clamp(38px,3.333vw,64px)]
                    font-medium
                    leading-[1.2]
                    tracking-[-0.02em]
                    text-[#F7F7F7]
                  "
                >
                  {project.title}
                </h3>

                <ProjectCategoryLabel
                  category={project.category}
                  className="
                    mt-[clamp(7px,0.365vw,10px)]
                    text-[clamp(11.8px,0.854vw,16.4px)]
                  "
                />
              </div>

              {/* =================================================
                  PROGRESS BAR
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-x-0 bottom-0
                  z-20
                  h-[4px]
                  overflow-hidden
                  bg-white/35

                  xl:h-[6px]
                "
              >
                {isActive && projects.length > 1 && (
                  <span
                    className="
                      absolute inset-y-0 left-0
                      w-full
                      origin-left
                      bg-[#E6FF2A]

                      transition-transform
                      duration-[75ms]
                      ease-linear
                    "
                    style={{
                      transform: `scaleX(${Math.min(
                        progress / 100,
                        1,
                      )})`,
                    }}
                  />
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* =====================================================
          SIDE SHADERS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-y-0 left-0
          z-20

          w-[clamp(120px,13.021vw,250px)]

          bg-gradient-to-r
          from-black
          via-black/80
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-y-0 right-0
          z-20

          w-[clamp(120px,13.021vw,250px)]

          bg-gradient-to-l
          from-black
          via-black/80
          to-transparent
        "
      />

      {/* =====================================================
          PREVIOUS NAVIGATION

          5.755vw merupakan sisa kiri dari container 88.49vw:
          (100% - 88.49%) / 2 = 5.755%
      ====================================================== */}

      <div
        className="
          absolute top-1/2
          z-30
          -translate-y-1/2
        "
        style={{
          left: 'max(5.755vw, calc((100vw - 1699px) / 2))',
        }}
      >
        <button
          type="button"
          aria-label="Previous slide"
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
          onClick={(event) => {
            event.stopPropagation();
            previousSlide();
          }}
          className="
            flex
            h-[clamp(54.5px,3.633vw,70px)]
            w-[clamp(54.5px,3.633vw,70px)]
            items-center justify-center

            rounded-[6px]
            border border-[#4C4C4C]
            bg-black/30
            text-[#D9D9D9]

            transition-[border-color,background-color,color]
            duration-300

            hover:border-[#D9D9D9]
            hover:bg-black/70
            hover:text-white
          "
        >
          <IconChevronLeft size={26} />
        </button>
      </div>

      {/* =====================================================
          NEXT NAVIGATION
      ====================================================== */}

      <div
        className="
          absolute top-1/2
          z-30
          -translate-y-1/2
        "
        style={{
          right: 'max(5.755vw, calc((100vw - 1699px) / 2))',
        }}
      >
        <button
          type="button"
          aria-label="Next slide"
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
          onClick={(event) => {
            event.stopPropagation();
            nextSlide();
          }}
          className="
            flex
            h-[clamp(54.5px,3.633vw,70px)]
            w-[clamp(54.5px,3.633vw,70px)]
            items-center justify-center

            rounded-[6px]
            border border-[#4C4C4C]
            bg-black/30
            text-[#D9D9D9]

            transition-[border-color,background-color,color]
            duration-300

            hover:border-[#D9D9D9]
            hover:bg-black/70
            hover:text-white
          "
        >
          <IconChevronRight size={26} />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT CATEGORY LABEL
========================================================= */

function ProjectCategoryLabel({
  category,
  className = '',
}: {
  category: string;
  className?: string;
}) {
  const categoryParts = category
    .split('•')
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <div
      className={`
        flex flex-wrap items-center

        gap-x-[clamp(8px,0.625vw,12px)]
        gap-y-[5px]

        font-body
        font-medium
        uppercase
        leading-[1.3]
        tracking-[0.06em]
        text-[#E6FF2A]

        ${className}
      `}
    >
      {categoryParts.map((part, index) => (
        <span key={`${part}-${index}`} className="contents">
          {index > 0 && (
            <span
              aria-hidden="true"
              className="
                h-[3px] w-[3px]
                shrink-0
                bg-[#F7F7F7]
              "
            />
          )}

          <span>{part}</span>
        </span>
      ))}
    </div>
  );
}