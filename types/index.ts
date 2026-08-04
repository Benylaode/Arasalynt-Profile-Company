/* ─── Types for Arsalynt Website ─── */

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroSlide {
  id: string | number;
  headline: string;
  body: string;
  backgroundImage: string;
  mobileBackgroundImage?: string;
  backgroundPosition?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface ClientLogo {
  name: string;
  /** Path to logo image — placeholder until real assets */
  src: string;
  width: number;
  height: number;
}

export interface FeatureCard {
  id: number;
  title: string;
  description: string;
  /** Path to isometric illustration */
  imageSrc: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  /** Path to project screenshot */
  imageSrc: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'default' | 'small';
export type ContainerWidth = 'max' | 'content' | 'narrow';

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

/* ─── Article & Section Types for Case Studies and Leadership Thoughts ─── */

export interface ArticleSubsection {
  subtitle: string;
  content: string;
}

export interface ArticleSection {
  eyebrow?: string;
  mainTitle: string;
  paragraphs?: string[];
  image?: {
    src: string;
    alt: string;
  };
  subsections?: ArticleSubsection[];
}

export interface CaseStudyArticle {
  id: number | string;
  slug: string;
  title: string;
  category: 'INSIGHT' | 'PROJECT STORIES' | string;
  tags: string[];
  dateLabel: string;
  dateValue: string;
  description: string;
  coverImage: string;
  coverImageAlt: string;
  sections: ArticleSection[];
}

export interface LeadershipThoughtArticle {
  id: number | string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  author: string;
  readTime: string;
  date: string;
  description: string;
  coverImage: string;
  coverImageAlt: string;
  sections: ArticleSection[];
}


