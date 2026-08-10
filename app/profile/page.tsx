import type { Metadata } from 'next';
import ProfileDirectory from './ProfileDirectory';
import { TEAM_MEMBERS } from '@/lib/team.data';

export const metadata: Metadata = {
  title: 'Team Profiles',
  description: 'Arsalynk team profile directory.',
  robots: { index: false, follow: false, nocache: true },
};

export default function ProfilePage() {
  return <ProfileDirectory members={TEAM_MEMBERS} />;
}
