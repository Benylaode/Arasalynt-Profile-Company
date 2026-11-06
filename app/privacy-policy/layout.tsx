import type { Metadata } from 'next';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const alternates = buildLocalizedAlternates('/privacy-policy', locale);

  return {
    title: dict.seo.privacyPolicyTitle,
    description: dict.seo.privacyPolicyDescription,
    alternates,
  };
}

export default function PrivacyPolicyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

