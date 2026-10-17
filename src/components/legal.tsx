import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/faq";
import { siteUrl } from "@/lib/config";

export const legalUpdated = { iso: "2026-10-17", label: "October 17, 2026" };

export function legalMetadata(path: string, title: string, description: string): Metadata {
  const url = `${siteUrl}${path}`;
  return { title: `${title} | ShipToPaid`, description, alternates: { canonical: url }, openGraph: { title, description, url, type: "website", siteName: "ShipToPaid" } };
}

export type Section = { heading: string; body: React.ReactNode };

export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: React.ReactNode; sections: Section[] }) {
  return <><Header /><main id="main" className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 md:py-20">
    <article className="max-w-[760px]">
      <p className="mb-4 inline-block rounded-pill bg-linen-mist px-4 py-2 text-xs font-medium text-forest-ink">{eyebrow}</p>
      <h1 className="mb-4 font-display text-5xl font-black leading-[0.95] tracking-[-0.04em] text-obsidian uppercase md:text-6xl">{title}</h1>
      <p className="mb-8 text-sm text-slate">Last updated <time dateTime={legalUpdated.iso}>{legalUpdated.label}</time></p>
      <div className="mb-10 text-lg leading-relaxed text-charcoal">{intro}</div>
      {sections.map((s) => <section key={s.heading} className="mb-10">
        <h2 className="mb-3 text-2xl font-black leading-tight tracking-[-0.03em] text-obsidian">{s.heading}</h2>
        <div className="grid gap-3 text-base leading-relaxed text-charcoal [&_a]:text-forest-ink [&_a]:underline [&_a]:underline-offset-4 [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-2 [&_ul]:pl-6">{s.body}</div>
      </section>)}
    </article>
  </main><Footer /></>;
}

export const Support = () => <a href="mailto:support@shiptopaid.com">support@shiptopaid.com</a>;
