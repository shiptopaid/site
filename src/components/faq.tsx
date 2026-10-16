import { SectionHeading } from "./ui";

const questions = [
  ["Why not just use free skills?", "There’s a free lite pack with 3 skills. The full pack goes further: entitlements, credits, license keys, full Stripe support, a launch audit, plus a tested starter and scripts. Every gotcha comes from building it for real."],
  ["What if I cancel?", "Nothing to cancel. ShipToPaid is a one-time purchase with lifetime updates."],
  ["What’s the refund policy?", "Try it for 14 days. If it’s not for you, ask for a full refund. No questions asked."],
  ["Which stacks does it work with?", "The starter and primary examples use Next.js App Router. The skills also include notes for adapting the workflows to other stacks."],
  ["Polar or Stripe?", "Your choice: both are first-class, with their own checkout, webhook and portal skills, and both are live-tested in the starter. Polar is a merchant of record, so it handles sales tax for you. Stripe fits if you already have an account; you handle tax yourself, e.g. with Stripe Tax."],
  ["What about iOS?", "iOS support is planned for later. Buyers will receive it as an update when it’s available. The pack is web-first today."],
  ["How do I get it?", "After purchasing via Polar, you’ll get access to the private GitHub repo with the skills, slash commands, starter and scripts."],
];
export function FAQ() {
  return <section id="faq" className="py-16 md:py-20 mx-auto w-full max-w-[1200px] px-5 sm:px-8 grid gap-8 md:grid-cols-2 md:gap-16"><SectionHeading eyebrow="A FEW MORE THINGS" title="Good questions.">Here’s what to know before you ship.</SectionHeading><div className="[&_details]:border-b [&_details]:border-pebble/40 [&_details:first-child]:border-t [&_summary]:flex [&_summary]:cursor-pointer [&_summary]:list-none [&_summary]:items-center [&_summary]:justify-between [&_summary]:gap-5 [&_summary]:py-6 [&_summary]:text-base [&_summary]:font-bold [&_summary::-webkit-details-marker]:hidden [&_details>p]:mb-6 [&_details>p]:text-base [&_details>p]:leading-relaxed [&_details>p]:text-charcoal">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true" className="text-2xl font-normal text-spruce in-open:rotate-45">+</span></summary><p>{answer}</p></details>)}</div></section>;
}

export function Footer() {
  return <footer className="border-t border-pebble/30 py-10"><div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 flex flex-wrap items-center justify-between gap-6 [&_p]:mb-0 [&_p]:mt-2 [&_p]:text-xs [&_p]:text-slate [&_nav]:flex [&_nav]:flex-wrap [&_nav]:gap-5 [&_nav]:text-xs [&_nav]:text-forest-ink [&_nav_a]:hover:underline"><div><a href="#" className="inline-flex items-center text-xl font-bold tracking-tight text-forest-ink">ShipToPaid<span className="text-spruce">.</span></a><p>© {new Date().getFullYear()} Supermax · shiptopaid.com</p></div>{/* TODO: point Terms/Privacy/Refunds at hosted legal pages once deployed */}<nav aria-label="Footer navigation"><a href="#">Terms</a><a href="#">Privacy</a><a href="#">Refunds</a><a href="mailto:support@shiptopaid.com">support@shiptopaid.com</a></nav><span className="text-xs text-slate">Built to get you building.</span></div></footer>;
}
