import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/faq";
import { BlogCta, PostBody } from "@/components/blog";
import { blogUrl, formatDate, getPost, getPosts } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `${blogUrl}/${post.slug}`;
  return {
    title: `${post.seoTitle ?? post.title} | ShipToPaid`,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.description, url, type: "article", siteName: "ShipToPaid", publishedTime: post.date, modifiedTime: post.updated ?? post.date, authors: [post.author], images: [{ url: `${url}/opengraph-image`, width: 1200, height: 630, alt: post.title }] },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [{ url: `${url}/opengraph-image`, alt: post.title }] },
  };
}

export default async function BlogPost({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const url = `${blogUrl}/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "ShipToPaid", url: "https://www.shiptopaid.com" },
    mainEntityOfPage: url,
    image: `${url}/opengraph-image`,
  };
  return <><Header /><main id="main" className="mx-auto w-full max-w-[720px] px-5 py-12 sm:px-8 md:py-16">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <nav aria-label="Breadcrumb" className="mb-8 text-sm"><Link href="/blog" className="font-medium text-forest-ink underline underline-offset-4 hover:text-spruce">← All posts</Link></nav>
    <article>
      <header className="mb-10 border-b border-fog pb-8">
        <h1 className="mb-5 font-display text-4xl font-black leading-[1.02] tracking-[-0.04em] text-obsidian md:text-5xl">{post.title}</h1>
        <p className="mb-6 text-xl leading-relaxed text-charcoal">{post.description}</p>
        <p className="m-0 text-sm text-slate">By {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read</p>
      </header>
      <PostBody blocks={post.body} />
    </article>
    <BlogCta />
  </main><Footer /></>;
}
