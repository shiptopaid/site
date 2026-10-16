import { checkoutUrl } from "@/lib/config";

export function Arrow({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={className}>↗</span>;
}

export function BuyButton({ children = "Get ShipToPaid", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <a href={checkoutUrl} className={`inline-flex items-center justify-center gap-6 rounded-pill bg-lime px-6 py-[11px] text-base font-medium text-forest-ink hover:bg-linen-mist ${className}`}>{children}<Arrow /></a>;
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="mb-10 [&_h2]:font-display [&_h2]:text-4xl [&_h2]:font-black [&_h2]:leading-[1.05] [&_h2]:tracking-[-0.03em] [&_h2]:text-obsidian md:[&_h2]:text-5xl"><p className="mb-4 text-xs font-medium text-forest-ink">{eyebrow}</p><h2>{title}</h2>{children && <p className="mb-0 mt-5 text-lg leading-relaxed text-charcoal">{children}</p>}</div>;
}
