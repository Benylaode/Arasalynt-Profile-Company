import type { Metadata } from 'next';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const alternates = buildLocalizedAlternates('/feedback', locale);

  return {
    title: dict.seo.feedbackTitle,
    description: dict.seo.feedbackDescription,
    alternates,
    robots: { index: false, follow: false, nocache: true },
  };
}

export default function FeedbackLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

