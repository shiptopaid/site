import { Fragment } from "react";
import type { Block } from "@/lib/blog";
import { checkoutUrl } from "@/lib/config";

const inlinePattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

function Inline({ text }: { text: string }) {
  return <>{text.split(inlinePattern).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={index} className="font-bold text-obsidian">{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const external = link[2].startsWith("http");
      return <a key={index} href={link[2]} className="font-medium text-forest-ink underline underline-offset-4 hover:text-spruce" {...(external ? { target: "_blank", rel: "noopener" } : {})}>{link[1]}</a>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  })}</>;
}

export function PostBody({ blocks }: { blocks: Block[] }) {
  return <div className="text-lg leading-[1.7] text-charcoal [&_h2]:mb-4 [&_h2]:mt-14 [&_h2]:text-3xl [&_h2]:font-black [&_h2]:leading-tight [&_h2]:tracking-[-0.03em] [&_h2]:text-obsidian [&_h3]:mb-3 [&_h3]:mt-10 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-obsidian [&_p]:mb-6 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 [&_li]:pl-1 [&_li]:marker:text-spruce">
    {blocks.map((block, index) => {
      switch (block.type) {
        case "h2": return <h2 key={index}><Inline text={block.text} /></h2>;
        case "h3": return <h3 key={index}><Inline text={block.text} /></h3>;
        case "ul": return <ul key={index}>{block.items.map((item) => <li key={item}><Inline text={item} /></li>)}</ul>;
        case "ol": return <ol key={index}>{block.items.map((item) => <li key={item}><Inline text={item} /></li>)}</ol>;
        case "note": return <p key={index} className="rounded-card bg-linen-mist px-6 py-5 text-base text-forest-ink"><Inline text={block.text} /></p>;
        default: return <p key={index}><Inline text={block.text} /></p>;
      }
    })}
  </div>;
}

export function BlogCta() {
  return <aside aria-label="Try ShipToPaid" className="mt-16 rounded-card-lg bg-forest-ink p-8 text-paper sm:p-10">
    <p className="mb-3 text-xs font-medium text-linen-mist">FROM SHIPPED TO PAID</p>
    <h2 className="mb-4 text-3xl font-black leading-tight tracking-[-0.03em] text-lime">Let your AI agent handle the payment part, with the traps already written down.</h2>
    <p className="mb-8 text-base leading-relaxed text-paper">Start with the free lite pack: three skills for Polar checkout, payment messages and a quick launch check. When you want Stripe, a billing page, credits and a working starter app, get the full pack. $49 one-time for the first 100 buyers, then $79.</p>
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <a href="https://github.com/shiptopaid/shiptopaid-lite" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-6 rounded-pill bg-lime px-6 py-[11px] text-base font-medium text-forest-ink hover:bg-linen-mist">Try the free lite pack<span aria-hidden="true">↗</span></a>
      <a href={checkoutUrl} className="text-base font-medium text-linen-mist underline underline-offset-4 hover:text-lime">Get ShipToPaid</a>
    </div>
  </aside>;
}
