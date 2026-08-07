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
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: 'rian-destianto',
    name: 'Rian Destianto',
    role: 'Chief Marketing Officer — Arsalynk',
    discipline: 'Marketing, Brand & Business Growth',
    image: '/images/leadership-thoughts/featured-leader-bw.webp',
    imagePosition: 'center 28%',
    summary:
      'Leading Arsalynk’s marketing direction by connecting brand strategy, market insight, and business growth initiatives.',
    biography: [
      'Rian Destianto serves as Chief Marketing Officer at Arsalynk. He is responsible for shaping the company’s marketing direction, strengthening its market presence, and connecting Arsalynk’s capabilities with the needs of clients and strategic partners.',
      'His work focuses on building clear positioning, developing meaningful audience relationships, and ensuring that marketing initiatives support sustainable business growth across the Arsalynk ecosystem.',
    ],
    expertise: [
      'Marketing strategy',
      'Brand positioning',
      'Business development',
      'Strategic communication',
    ],
    principles: [
      'Understand the audience',
      'Build trust through clarity',
      'Connect strategy with execution',
      'Grow through meaningful relationships',
    ],
  },
];

export function getTeamMember(slug: string) {
  return TEAM_MEMBERS.find((member) => member.slug === slug);
}
