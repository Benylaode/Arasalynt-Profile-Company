'use client';

import { useState } from 'react';

/* ── Pure SVG Icons ── */
const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const IconChevronRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 5l7 7-7 7" />
  </svg>
);

const IconChevronLeft = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

/* ── Leadership Thought Articles ── */
const LEADERSHIP_THOUGHTS = [
  {
    id: 1,
    title: "Building High-Performance Teams Starts with Trust, Not Control",
    category: "LEADERSHIP INSIGHTS",
    author: "Arsalynt Executive Team",
    readTime: "6 min read",
    date: "July 2026",
    desc: "The most effective leaders don't manage from a position of authority — they create environments where trust becomes the operating system of performance.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Why We Prioritize Process Before Technology",
    category: "STRATEGIC THINKING",
    author: "Arsalynt Executive Team",
    readTime: "5 min read",
    date: "June 2026",
    desc: "Investing in technology without a solid operational foundation is like building a skyscraper on sand. Here's how we help organisations get the order right.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Lessons from Scaling Cross-Functional Collaboration",
    category: "ORGANISATIONAL GROWTH",
    author: "Arsalynt Executive Team",
    readTime: "7 min read",
    date: "June 2026",
    desc: "Scaling a business isn't just about hiring more people — it's about designing systems that allow teams across disciplines to work as one unified force.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 4,
    title: "Why We Prioritize Process Before Technology",
    category: "STRATEGIC THINKING",
    author: "Arsalynt Executive Team",
    readTime: "5 min read",
    date: "May 2026",
    desc: "Investing in technology without a solid operational foundation is like building a skyscraper on sand. Here's how we help organisations get the order right.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Building High-Performance Teams Starts with Trust, No...",
    category: "LEADERSHIP INSIGHTS",
    author: "Arsalynt Executive Team",
    readTime: "6 min read",
    date: "May 2026",
    desc: "The most effective leaders don't manage from a position of authority — they create environments where trust becomes the operating system of performance.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Lessons from Scaling Cross-Functional Collaboration",
    category: "ORGANISATIONAL GROWTH",
    author: "Arsalynt Executive Team",
    readTime: "7 min read",
    date: "April 2026",
    desc: "Scaling a business isn't just about hiring more people — it's about designing systems that allow teams across disciplines to work as one unified force.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 7,
    title: "Building High-Performance Teams Starts with Trust, No...",
    category: "LEADERSHIP INSIGHTS",
    author: "Arsalynt Executive Team",
    readTime: "6 min read",
    date: "April 2026",
    desc: "The most effective leaders don't manage from a position of authority — they create environments where trust becomes the operating system of performance.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 8,
    title: "Lessons from Scaling Cross-Functional Collaboration",
    category: "ORGANISATIONAL GROWTH",
    author: "Arsalynt Executive Team",
    readTime: "7 min read",
    date: "March 2026",
    desc: "Scaling a business isn't just about hiring more people — it's about designing systems that allow teams across disciplines to work as one unified force.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 9,
    title: "Why We Prioritize Process Before Technology",
    category: "STRATEGIC THINKING",
    author: "Arsalynt Executive Team",
    readTime: "5 min read",
    date: "March 2026",
    desc: "Investing in technology without a solid operational foundation is like building a skyscraper on sand. Here's how we help organisations get the order right.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
];

const ALL_CATEGORIES = ['All', 'LEADERSHIP INSIGHTS', 'STRATEGIC THINKING', 'ORGANISATIONAL GROWTH'];

const CATEGORY_COLORS: Record<string, string> = {
  'LEADERSHIP INSIGHTS': '#2563EB',
  'STRATEGIC THINKING': '#7C3AED',
  'ORGANISATIONAL GROWTH': '#059669',
};

const FEATURED_ARTICLES = LEADERSHIP_THOUGHTS.filter((a) => a.featured);
const PAGE_SIZE = 6;

export default function LeadershipThoughtsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const handleScrollDown = () => {
    const el = document.getElementById('explore-thoughts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrev = () =>
    setActiveSlide((prev) => (prev === 0 ? FEATURED_ARTICLES.length - 1 : prev - 1));

  const handleNext = () =>
    setActiveSlide((prev) => (prev === FEATURED_ARTICLES.length - 1 ? 0 : prev + 1));

  const filteredArticles = LEADERSHIP_THOUGHTS.filter((a) =>
    selectedCategory === 'All' ? true : a.category === selectedCategory
  );

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const featured = FEATURED_ARTICLES[activeSlide];

  return (
    <div className="w-full relative bg-[#fafafa] min-h-screen">

      {/* HERO HEADER SECTION */}
      <section className="relative w-full h-[60vh] min-h-[480px] max-[768px]:h-[50vh] bg-[#020617] overflow-hidden flex items-center justify-center" id="hero" aria-label="Leadership Thoughts Hero">
        <div className="absolute inset-0 z-[1]" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="Leadership team discussion"
            className="w-full h-full object-cover opacity-40 brightness-55 contrast-110 saturate-80"
          />
        </div>
        <div 
          className="absolute inset-0 z-[2] pointer-events-none" 
          aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.012) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-t from-[#fafafa] to-transparent z-[3] pointer-events-none" aria-hidden="true" />

        <div className="relative z-[5] text-center max-w-[760px] px-6 mt-10">
          <span className="inline-block font-heading text-[10px] font-extrabold tracking-[0.25em] text-lime-yellow uppercase mb-4">
            ARSALYNT PERSPECTIVE
          </span>
          <h1 className="font-heading font-bold text-[56px] max-[1024px]:text-[44px] max-[768px]:text-[36px] max-[480px]:text-[30px] leading-tight tracking-tight text-white mb-5">
            Leadership Thoughts
          </h1>
          <p className="font-body text-lg leading-relaxed text-[#A0A0A0] max-w-[620px] mx-auto">
            Perspectives, principles, and insights from the Arsalynt leadership team —
            shaping the way we think about business, technology, and human potential.
          </p>
          <button 
            onClick={handleScrollDown} 
            className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[44px] h-[44px] rounded-full bg-white/8 border border-white/15 text-white flex items-center justify-center cursor-pointer z-[5] transition-colors duration-150 hover:bg-white/15 animate-bounce-slow" 
            aria-label="Scroll down"
          >
            <IconChevronDown />
          </button>
        </div>
      </section>

      {/* FEATURED ARTICLE SLIDER */}
      <section className="bg-[#fafafa] pt-10 pb-5 relative z-[4]" aria-label="Featured Thought">
        <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
          <div className="group relative w-full aspect-[2.4/1] min-h-[380px] max-[1024px]:aspect-[1.8/1] max-[768px]:aspect-[1.4/1] max-[480px]:aspect-[1.2/1] max-[480px]:min-h-[280px] rounded-[24px] overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.08)] flex flex-col justify-end">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/10 z-[1]" />

            <div className="relative z-[2] p-12 max-[768px]:p-6 flex flex-col justify-end gap-3">
              <span className="font-heading text-[11px] font-extrabold text-lime-yellow tracking-[0.12em] uppercase">{featured.category}</span>
              <h2 className="font-heading font-bold text-[32px] max-[1024px]:text-[28px] max-[768px]:text-[22px] leading-tight text-white max-w-[720px] tracking-tight">{featured.title}</h2>
              <p className="hidden md:block font-body text-[15px] leading-relaxed text-white/72 max-w-[620px]">{featured.desc}</p>

              <div className="flex justify-between items-center mt-5 w-full">
                {/* Pagination Dots */}
                <div className="flex gap-2 items-center">
                  {FEATURED_ARTICLES.map((_, i) => (
                    <button
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full border-none cursor-pointer p-0 transition-all duration-150 ${
                        i === activeSlide ? 'bg-lime-yellow scale-140 shadow-[0_0_8px_#E6FF2A]' : 'bg-white/35'
                      }`}
                      onClick={() => setActiveSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Controls */}
                <div className="flex gap-2.5">
                  <button className="w-[38px] h-[38px] rounded-full border border-white/20 bg-white/7 text-white flex items-center justify-center cursor-pointer transition-colors duration-150 hover:bg-white/14 hover:border-white/40" onClick={handlePrev} aria-label="Previous article">
                    <IconChevronLeft />
                  </button>
                  <button className="w-[38px] h-[38px] rounded-full border border-white/20 bg-white/7 text-white flex items-center justify-center cursor-pointer transition-colors duration-150 hover:bg-white/14 hover:border-white/40" onClick={handleNext} aria-label="Next article">
                    <IconChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE THOUGHTS GRID */}
      <section id="explore-thoughts" className="bg-[#fafafa] pt-[60px] pb-[100px] relative z-[4]" aria-label="Explore Leadership Thoughts">
        <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">

          {/* Header Row with Category Tabs + Sort */}
          <div className="flex justify-between items-center mb-11 flex-wrap gap-5 max-[768px]:flex-col max-[768px]:items-start">
            <h2 className="font-heading text-[32px] font-bold tracking-tight text-slate-900">Explore Our Thoughts</h2>

            <div className="flex items-center gap-4 flex-wrap max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-start">
              {/* Category Filter Pills */}
              <div className="flex gap-2 flex-wrap max-[768px]:w-full">
                {ALL_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`font-heading text-[10px] font-extrabold tracking-[0.08em] uppercase px-4 py-2 rounded-full border transition-all duration-150 whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-slate-900 text-lime-yellow border-slate-900 hover:bg-slate-800'
                        : 'bg-white text-slate-500 border-black/8 hover:border-black/20 hover:text-slate-900'
                    }`}
                    onClick={() => { setSelectedCategory(cat); setVisibleCount(PAGE_SIZE); }}
                  >
                    {cat === 'All' ? 'All Topics' : cat}
                  </button>
                ))}
              </div>

              {/* Sort Label */}
              <div className="flex items-center gap-1 font-heading text-[11px] font-bold text-slate-500 tracking-wider cursor-pointer px-3 py-2 rounded-lg border border-black/6 bg-white hover:bg-slate-100 select-none">
                <span>Latest</span>
                <IconChevronDown size={12} />
              </div>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px]">
            {visibleArticles.map((article) => (
              <article key={article.id} className="group bg-white rounded-[20px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] flex flex-col border border-black/4 transition-all duration-400 hover:-translate-y-1.2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                <div className="w-full aspect-[16/10] overflow-hidden relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                  <span
                    className="absolute bottom-3 left-[14px] font-heading text-[9px] font-extrabold tracking-[0.1em] uppercase text-white px-2.5 py-1 rounded-full pointer-events-none"
                    style={{ backgroundColor: CATEGORY_COLORS[article.category] ?? '#2563EB' }}
                  >
                    {article.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-heading text-[10px] font-extrabold text-blue-600 uppercase tracking-[0.06em]">{article.author}</span>
                    <span className="font-body text-[11px] text-slate-400">{article.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-[17px] leading-snug text-slate-900 tracking-tight mt-0.5">{article.title}</h3>
                  <p className="font-body text-[13px] leading-relaxed text-slate-500 flex-grow">{article.desc}</p>
                  <div className="flex justify-between items-center mt-3 pt-3.5 border-t border-black/5">
                    <span className="font-body text-[11px] text-slate-400">{article.readTime}</span>
                    <button className="group/btn inline-flex items-center gap-1 font-heading text-[10px] font-extrabold tracking-[0.05em] text-slate-900 cursor-pointer bg-transparent border-none p-0 transition-all duration-150 hover:text-blue-600 hover:gap-2" aria-label={`Read ${article.title}`}>
                      Read More <IconChevronRight size={11} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center mt-[60px]">
              <button
                className="bg-transparent border border-black/10 text-slate-900 font-heading font-extrabold text-[10px] tracking-[0.12em] px-8 py-[15px] rounded-full cursor-pointer inline-flex items-center gap-2 transition-all duration-150 hover:bg-slate-100 hover:border-black/18 hover:-translate-y-0.5"
                onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
              >
                LOAD MORE <IconChevronRight size={12} />
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
