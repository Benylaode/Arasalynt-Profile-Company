import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { getSolutionService, SOLUTION_SERVICES } from '@/lib/our-solution.data';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SOLUTION_SERVICES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getSolutionService(slug);
  if (!service) return {};
  return { title: `${service.title} — Arsalynk`, description: service.description };
}

export default async function SolutionServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getSolutionService(slug);

  if (!service) {
    notFound();
  }

  // Directly navigate to the work article from our-works
  redirect(`/our-works/${service.relatedWorkSlug}`);
}
