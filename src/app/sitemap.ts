import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";

const base = "https://www.shiptopaid.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: posts[0] ? new Date(posts[0].updated ?? posts[0].date) : new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.updated ?? post.date), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...["/terms", "/privacy", "/refunds"].map((path) => ({ url: `${base}${path}`, lastModified: new Date("2026-10-17"), changeFrequency: "yearly" as const, priority: 0.3 })),
  ];
}
