import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteUrl } from "@/lib/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ShipToPaid — From shipped to paid",
  description: "AI coding-agent skills, slash commands and a working Next.js starter to add Polar or Stripe payments, verified webhooks and paywalls in an afternoon. $49, one-time.",
  openGraph: {
    title: "ShipToPaid — From shipped to paid",
    description: "You vibe-coded the app. Now add payments that actually work. Skills, commands and a working Next.js starter for Polar or Stripe.",
    type: "website",
    siteName: "ShipToPaid",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable}>{children}<Analytics /><SpeedInsights /></body></html>;
}
