import type { MetadataRoute } from "next";

const base = "https://www.shiptopaid.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
