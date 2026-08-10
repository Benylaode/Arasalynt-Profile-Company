import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTeamMember, TEAM_MEMBERS } from '@/lib/team.data';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TEAM_MEMBERS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const member = getTeamMember((await params).slug);
  if (!member) return { title: 'Profile Not Found', robots: { index: false, follow: false } };
  return {
    title: `${member.name} — Arsalynk`,
    description: member.summary,
    robots: { index: false, follow: false, nocache: true },
  };
}

function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 8 14" fill="none" aria-hidden="true" className={className}>
      <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function escapeVCard(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

export default async function TeamProfilePage({ params }: PageProps) {
  const member = getTeamMember((await params).slug);
  if (!member) notFound();

  const vCard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${escapeVCard(member.name)}`,
    `N:${escapeVCard(member.name)};;;;`,
    `ORG:${escapeVCard(member.company)}`,
    `TITLE:${escapeVCard(member.role)}`,
    `TEL;TYPE=CELL:${escapeVCard(member.phone)}`,
    `EMAIL;TYPE=WORK:${escapeVCard(member.email)}`,
    `ADR;TYPE=WORK:;;${escapeVCard(member.address)};;;;`,
    'END:VCARD',
  ].join('\r\n');
  const vCardHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCard)}`;

  return (
    <main className="min-h-[calc(100svh-90px)] overflow-hidden bg-white px-5 pb-20 pt-[clamp(120px,18vh,170px)] text-black sm:px-8 md:pt-20 lg:pb-28 lg:pt-[110px]">
      <section aria-labelledby="profile-name" className="relative mx-auto w-full max-w-[820px] overflow-hidden rounded-[20px] border border-black/[0.16] bg-white shadow-[0_14px_48px_rgba(10,27,68,0.10)] md:h-[492px]">
        <div className="flex min-h-[510px] flex-col px-6 pb-8 pt-9 min-[390px]:px-8 sm:px-12 sm:pb-10 sm:pt-11 md:block md:min-h-0 md:p-0">
          <header className="w-full md:absolute md:left-[64px] md:top-[58px] md:max-w-[600px]">
            <h1 id="profile-name" className="whitespace-nowrap font-heading text-[clamp(38px,11vw,54px)] font-normal leading-none tracking-[-0.055em] md:text-[68px]">{member.name}</h1>
            <p className="mt-3 font-heading text-[clamp(22px,6.6vw,30px)] font-medium leading-[1.15] tracking-[-0.025em] text-[#12358D] md:mt-4 md:text-[34px]">{member.role}</p>
          </header>

          <div className="mt-[86px] w-full md:absolute md:bottom-[58px] md:left-[64px] md:right-[64px] md:mt-0 md:flex md:w-auto md:items-end md:justify-between md:gap-12">
            <div className="shrink-0">
              <div className="grid grid-cols-[32px_1fr] items-baseline gap-x-8 md:grid-cols-[28px_1fr] md:gap-x-10">
                <span className="font-body text-[16px] leading-[1.5] tracking-[-0.03em] md:text-[17px]">PH</span>
                <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="whitespace-nowrap font-body text-[16px] font-medium leading-[1.5] tracking-[-0.035em] transition-colors hover:text-[#1A3E9E] md:text-[19px]">{member.phone}</a>
              </div>
              <div className="grid grid-cols-[32px_1fr] items-baseline gap-x-8 md:grid-cols-[28px_1fr] md:gap-x-10">
                <span className="font-body text-[16px] leading-[1.5] tracking-[-0.03em] md:text-[17px]">EM</span>
                <a href={`mailto:${member.email}`} className="whitespace-nowrap font-body text-[16px] font-medium leading-[1.5] tracking-[-0.035em] transition-colors hover:text-[#1A3E9E] md:text-[19px]">{member.email}</a>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-[32px_1fr] items-start gap-x-8 md:mt-0 md:max-w-[330px] md:grid-cols-[28px_1fr] md:gap-x-8">
              <span className="font-body text-[16px] leading-[1.5] tracking-[-0.03em] md:text-[17px]">OF</span>
              <address className="font-body text-[16px] font-medium not-italic leading-[1.42] tracking-[-0.035em] md:text-[19px]">{member.address}</address>
            </div>
          </div>

          <a href={vCardHref} download={`${member.slug}.vcf`} aria-label={`Save ${member.name} contact`} className="group mt-auto flex h-12 w-[178px] self-end items-center justify-between rounded-full bg-[#1A3E9E] py-2 pl-5 pr-4 text-white transition-all duration-300 ease-out hover:bg-[#08277A] hover:shadow-[0_8px_24px_rgba(26,62,158,0.22)] active:scale-[0.98] md:hidden">
            <span className="whitespace-nowrap font-body text-[15px] font-medium">Save Contact</span>
            <ArrowRightIcon className="h-3 w-[7px] transition-transform duration-300 group-hover:translate-x-[2px]" />
          </a>
        </div>
      </section>

      <div className="mt-8 hidden justify-center md:flex">
        <a href={vCardHref} download={`${member.slug}.vcf`} aria-label={`Save ${member.name} contact`} className="group flex h-[52px] w-[190px] items-center justify-between rounded-full bg-[#1A3E9E] py-2.5 pl-6 pr-4 text-white transition-all duration-300 ease-out hover:bg-[#08277A] hover:shadow-[0_8px_24px_rgba(26,62,158,0.22)] active:scale-[0.98]">
          <span className="whitespace-nowrap font-body text-[16px] font-medium">Save Contact</span>
          <span className="flex h-[32px] w-[32px] items-center justify-center"><ArrowRightIcon className="h-[13px] w-[8px] transition-transform duration-300 group-hover:translate-x-[2px]" /></span>
        </a>
      </div>
    </main>
  );
}
