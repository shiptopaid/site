import { ImageResponse } from "next/og";

export const alt = "ShipToPaid — From shipped to paid. AI coding-agent skills, commands and a Next.js starter for Polar or Stripe.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 80px", background: "#163300", color: "#ffffff", fontFamily: "sans-serif" }}><div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>ShipToPaid<span style={{ color: "#9fe870" }}>.</span></div><div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -5 }}>From shipped to <span style={{ color: "#9fe870", marginLeft: 20 }}>paid.</span></div><div style={{ fontSize: 27, color: "#e2f6d5", marginTop: 24 }}>AI agent skills + slash commands + Next.js & Polar starter</div></div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 23 }}><span>Less payment plumbing. More building.</span><span style={{ color: "#9fe870" }}>$49 · One-time · Lifetime updates</span></div></div>, size);
}
