import type { Metadata } from "next";
import { checkoutUrl } from "@/lib/config";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problem, Demo } from "@/components/overview";
import { Contents, Gotchas } from "@/components/contents";
import { Pricing } from "@/components/pricing";
import { FAQ, Footer } from "@/components/faq";
import { PurchaseThanks } from "@/components/purchase-thanks";

const homeUrl = "https://www.shiptopaid.com";
const description = "AI coding-agent skills, slash commands and a working Next.js starter to add Polar or Stripe payments, verified webhooks and paywalls in an afternoon. $49, one-time.";

export const metadata: Metadata = {
  alternates: { canonical: homeUrl },
};

const organization = {
  "@type": "Organization",
  "@id": `${homeUrl}/#organization`,
  name: "ShipToPaid",
  url: homeUrl,
  sameAs: ["https://github.com/shiptopaid"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    {
      "@type": ["Product", "SoftwareApplication"],
      "@id": `${homeUrl}/#product`,
      name: "ShipToPaid",
      description,
      url: homeUrl,
      image: `${homeUrl}/opengraph-image`,
      brand: { "@type": "Brand", name: "ShipToPaid" },
      manufacturer: { "@id": `${homeUrl}/#organization` },
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "49",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: checkoutUrl,
        seller: { "@id": `${homeUrl}/#organization` },
      },
    },
  ],
};

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><a className="fixed top-3 left-3 z-50 -translate-y-32 rounded-pill bg-lime px-6 py-3 text-forest-ink focus:translate-y-0" href="#main">Skip to content</a><Header /><PurchaseThanks /><main id="main"><Hero /><Problem /><Contents /><Gotchas /><Demo /><Pricing /><FAQ /></main><Footer /></>;
}
