import { TEAM_MEMBERS_DUMMY_DATA } from '@/lib/db/dummy';

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  discipline: string;
  image: string;
  imagePosition?: string;
  summary: string;
  biography: string[];
  expertise: string[];
  principles: string[];
  phone: string;
  email: string;
  address: string;
  company: string;
};

export const TEAM_MEMBERS: TeamMember[] = TEAM_MEMBERS_DUMMY_DATA;

export function getTeamMember(slug: string) {
  return TEAM_MEMBERS.find((member) => member.slug === slug);
}
