import { SectionHeading } from "./ui";

export function Problem() {
  return <section className="bg-linen-mist py-16 md:py-20"><div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8"><SectionHeading eyebrow="SHIPPING IS ONLY HALF THE JOB" title="The demo works. Does the money part?">Payment code is where “looks right” gets expensive.</SectionHeading><div className="grid gap-6 md:grid-cols-3">{[
    ["01", "Confident agent. Imaginary API.", "Your agent invents an endpoint. You spend the afternoon untangling payment code that never worked."],
    ["02", "A webhook isn’t just a POST.", "Events silently fail. Signatures go unchecked. One spoofed request becomes a very real problem."],
    ["03", "Paid doesn’t always mean access.", "Customers pay and stay locked out. Or cancel and keep Pro. Your entitlements need to follow the money."],
  ].map(([number, title, text]) => <article className="border-t border-pebble/40 pt-6 [&_h3]:my-5 [&_h3]:text-lg [&_h3]:font-bold [&_p]:m-0 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-pebble" key={number}><span className="inline-flex size-6 items-center text-xl text-spruce">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

export function Demo() {
  return <section className="py-16 md:py-20 mx-auto w-full max-w-[1200px] px-5 sm:px-8 "><div className="mb-10 text-center [&_h2]:font-display [&_h2]:text-4xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:text-obsidian [&_p:last-child]:text-lg [&_p:last-child]:text-charcoal"><p className="mb-4 text-xs font-medium text-forest-ink">YOUR AGENT. BETTER INSTRUCTIONS.</p><h2>Fits right into your workflow.</h2><div className="my-6 flex flex-wrap justify-center gap-3 [&_span]:rounded-pill [&_span]:bg-linen-mist [&_span]:px-5 [&_span]:py-2 [&_span]:text-xs [&_span]:font-medium [&_span]:text-forest-ink">{["Codex", "Claude Code", "Cursor"].map(name => <span key={name}>{name}</span>)}</div><p>Drop in the skills. Run a command. Keep building.</p></div><div className="mx-auto max-w-[850px] overflow-hidden rounded-card border border-pebble/40 bg-fog"><video className="block aspect-video w-full" src="/demo.mp4" poster="/demo-poster.jpg" controls muted playsInline loop preload="metadata" aria-label="Demo: shipped to paid in one prompt" /></div></section>;
}
