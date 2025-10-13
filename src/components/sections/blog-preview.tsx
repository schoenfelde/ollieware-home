"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/content";

const formatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function BlogPreviewSection() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="border-b border-border/60 bg-background/90 py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Field notes & insights
            </h2>
            <p className="text-base text-muted-foreground">
              Essays from the past decade of shipping mission-critical software.
              Tactics, templates, and leadership lessons you can borrow today.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            Read the blog
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((post) => (
            <Card
              key={post.slug}
              className="flex h-full flex-col border border-border/70 bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  <span>{formatter.format(new Date(post.date))}</span>
                  <span aria-hidden>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                >
                  Continue reading
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
