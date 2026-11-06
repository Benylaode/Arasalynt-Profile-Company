import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TEAM_MEMBERS } from '@/lib/team.data';
import { getServerLocale } from '@/lib/i18n/server';
import { getLocalizedTeamMember } from '@/lib/i18n/localized-data';
import TeamProfileClient from './TeamProfileClient';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TEAM_MEMBERS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getServerLocale();
  const member = getLocalizedTeamMember(slug, locale);
  if (!member) return { title: 'Profile Not Found', robots: { index: false, follow: false } };
  return {
    title: `${member.name} — Arsalynk`,
    description: member.summary,
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function TeamProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const member = getLocalizedTeamMember(slug, locale);
  if (!member) notFound();

  return <TeamProfileClient slug={slug} />;
}
