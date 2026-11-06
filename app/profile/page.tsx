import type { Metadata } from 'next';
import ProfileDirectory from './ProfileDirectory';
import { TEAM_MEMBERS } from '@/lib/team.data';
import { getServerLocale } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  return {
    title: dict.seo.profileTitle,
    description: dict.seo.profileDescription,
    robots: { index: false, follow: false, nocache: true },
  };
}

export default function ProfilePage() {
  return <ProfileDirectory members={TEAM_MEMBERS} />;
}
