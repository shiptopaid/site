import { ImageResponse } from "next/og";
import { getPost, getPosts } from "@/lib/blog";

export const alt = "ShipToPaid blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  const title = post?.title ?? "The ShipToPaid blog";
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 80px", background: "#163300", color: "#ffffff", fontFamily: "sans-serif" }}><div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>ShipToPaid<span style={{ color: "#9fe870" }}>.</span><span style={{ marginLeft: 20, color: "#e2f6d5", fontWeight: 400 }}>Blog</span></div><div style={{ display: "flex", fontSize: 64, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, color: "#9fe870" }}>{title}</div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#e2f6d5" }}><span>By {post?.author ?? "Deepak"}</span><span>shiptopaid.com/blog</span></div></div>, size);
}
