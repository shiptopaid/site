import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/faq";
import { blogUrl, formatDate, getPosts } from "@/lib/blog";

const title = "Blog: adding payments to apps you built with AI";
const description = "Plain-English guides for vibe coders on charging for your app: how payments work, what breaks, and how to check before your first customer does.";

export const metadata: Metadata = {
  title: `${title} | ShipToPaid`,
  description,
  alternates: { canonical: blogUrl },
  openGraph: { title, description, url: blogUrl, type: "website", siteName: "ShipToPaid" },
};

export default function BlogIndex() {
  const posts = getPosts();
  return <><Header /><main id="main" className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 md:py-20">
    <div className="mb-12 max-w-[760px]">
      <p className="mb-4 inline-block rounded-pill bg-linen-mist px-4 py-2 text-xs font-medium text-forest-ink">THE SHIPTOPAID BLOG</p>
      <h1 className="mb-5 font-display text-5xl font-black leading-[0.95] tracking-[-0.04em] text-obsidian uppercase md:text-6xl">From shipped to paid, in plain words.</h1>
      <p className="text-lg leading-relaxed text-charcoal">Practical guides for people who built an app with an AI agent and now want to charge for it, without it breaking.</p>
    </div>
    {posts.length === 0 ? <p className="text-lg text-charcoal">First post coming soon.</p> : <ul className="m-0 grid list-none gap-6 p-0 md:grid-cols-2">
      {posts.map((post) => <li key={post.slug}><Link href={`/blog/${post.slug}`} className="group flex h-full flex-col rounded-card-lg border border-fog bg-paper p-8 hover:border-forest-ink hover:bg-linen-mist/40">
        <p className="mb-4 text-xs font-medium text-slate"><time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read</p>
        <h2 className="mb-4 text-2xl font-black leading-tight tracking-[-0.03em] text-obsidian group-hover:text-spruce">{post.title}</h2>
        <p className="mb-6 text-base leading-relaxed text-charcoal">{post.description}</p>
        <span className="mt-auto text-base font-medium text-forest-ink underline underline-offset-4">Read the guide <span aria-hidden="true">↗</span></span>
      </Link></li>)}
    </ul>}
  </main><Footer /></>;
}
