import Link from "next/link";
import { getPosts } from "@/lib/blog";

/** Small, quiet list of the latest guides near the bottom of the home page (internal links for SEO). */
export function FromTheBlog() {
  const posts = getPosts().slice(0, 3);
  if (posts.length === 0) return null;
  return <section aria-labelledby="from-the-blog" className="mx-auto w-full max-w-[1200px] border-t border-pebble/30 px-5 py-10 sm:px-8">
    <h2 id="from-the-blog" className="mb-4 text-xs font-medium text-forest-ink">FROM THE BLOG</h2>
    <ul className="m-0 grid list-none gap-3 p-0 text-base">
      {posts.map((post) => <li key={post.slug}><Link href={`/blog/${post.slug}`} className="font-medium text-forest-ink underline underline-offset-4 hover:text-spruce">{post.title}</Link></li>)}
    </ul>
    <p className="mb-0 mt-4 text-sm"><Link href="/blog" className="text-charcoal underline underline-offset-4 hover:text-spruce">All posts</Link></p>
  </section>;
}
