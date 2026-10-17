import { posts as allPosts } from "@/content/posts";

/**
 * A blog post is plain data: no markdown parser, no extra dependencies.
 * Inline text supports **bold** and [link text](https://url) only.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string };

export type Post = {
  slug: string;
  title: string;
  /** Shorter <title> for search results (keep under ~60 chars incl. " | ShipToPaid"). */
  seoTitle?: string;
  description: string;
  /** ISO date, e.g. "2026-10-17" */
  date: string;
  updated?: string;
  author: string;
  readingMinutes: number;
  body: Block[];
};

export const blogUrl = "https://www.shiptopaid.com/blog";

export function getPosts(): Post[] {
  return [...allPosts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
