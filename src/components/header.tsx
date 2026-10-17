import Link from "next/link";
import { BuyButton } from "./ui";

export function Header() {
  return <header className="border-b border-fog bg-paper text-forest-ink"><nav aria-label="Main navigation" className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 flex min-h-24 flex-wrap items-center justify-between gap-4 py-4"><Link href="/" className="inline-flex items-center text-xl font-bold tracking-tight text-forest-ink" aria-label="ShipToPaid home"><span className="mr-2 grid size-8 place-items-center rounded-card bg-linen-mist text-2xl" aria-hidden="true">↗</span>ShipToPaid<span className="text-spruce">.</span></Link><div className="flex flex-wrap items-center gap-1 text-sm [&_a]:rounded-pill [&_a]:px-3 [&_a]:py-2 [&_a]:hover:bg-linen-mist [&_a:last-child]:border [&_a:last-child]:border-forest-ink"><Link href="/#inside">What’s inside</Link><Link href="/#pricing">Pricing</Link><Link href="/blog">Blog</Link><Link href="/#faq">FAQ</Link></div><BuyButton className="text-sm sm:text-base">Buy the pack</BuyButton></nav></header>;
}
