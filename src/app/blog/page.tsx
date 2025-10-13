import type { Metadata } from "next";
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
  month: "long",
  day: "numeric",
  year: "numeric",
});

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, templates, and lessons from shipping software fast in regulated industries.",
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">
          Ollieware Insights
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Notes from 10+ years of empathetic delivery.
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground">
          Field-tested practices for building software that stands up to audits
          and delights users. Every article is shaped by work in healthcare,
          fintech, legal, and enterprise teams that needed dependable velocity.
        </p>
      </header>
      <div className="mt-12 grid gap-6">
        {blogPosts.map((post) => {
          const firstParagraph =
            post.blocks.find((block) => block.type === "paragraph")?.text ??
            post.description;

          return (
            <Card
              key={post.slug}
              className="border border-border/70 bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  <span>{formatter.format(new Date(post.date))}</span>
                  <span aria-hidden>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 text-sm text-muted-foreground">
                <p>{firstParagraph}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                >
                  Continue reading
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
