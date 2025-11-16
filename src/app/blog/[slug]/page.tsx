import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarCheck } from "lucide-react";
import Link from "next/link";

import { blogPosts } from "@/data/content";

const formatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

type BlogPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to all posts
      </Link>
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {formatter.format(new Date(post.date))} · {post.readTime}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground">{post.description}</p>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/60 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="mt-12 space-y-6 text-base text-muted-foreground">
        {post.blocks.map((block, idx) => {
          if (block.type === "paragraph") {
            return <p key={idx}>{block.text}</p>;
          }

          if (block.type === "heading") {
            const Tag = block.level === 3 ? "h3" : "h2";

            return (
              <Tag
                key={idx}
                className="text-2xl font-semibold text-foreground first:mt-0"
              >
                {block.text}
              </Tag>
            );
          }

          if (block.type === "list") {
            return (
              <ul key={idx} className="list-disc space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </div>
      <footer className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">
          Ready to turn these ideas into action?
        </p>
        <p className="mt-2">
          Book your free discovery call — we&apos;ll unpack your goals and map
          the fastest path to impact.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-primary transition hover:text-primary/80"
        >
          Book your free discovery call
          <CalendarCheck className="h-4 w-4" aria-hidden />
        </Link>
      </footer>
    </article>
  );
}
