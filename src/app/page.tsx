import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problem, Demo } from "@/components/overview";
import { Contents, Gotchas } from "@/components/contents";
import { Pricing } from "@/components/pricing";
import { FAQ, Footer } from "@/components/faq";
import { PurchaseThanks } from "@/components/purchase-thanks";

export default function Home() {
  return <><a className="fixed top-3 left-3 z-50 -translate-y-32 rounded-pill bg-lime px-6 py-3 text-forest-ink focus:translate-y-0" href="#main">Skip to content</a><Header /><PurchaseThanks /><main id="main"><Hero /><Problem /><Contents /><Gotchas /><Demo /><Pricing /><FAQ /></main><Footer /></>;
}
