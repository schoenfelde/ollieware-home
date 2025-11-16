"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/content";

export function CaseStudiesPreview() {
  return (
    <section
      id="case-studies"
      className="border-b border-border/60 bg-background/95"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Case studies from regulated industries
            </h2>
            <p className="text-base text-muted-foreground">
              Each engagement pairs fast delivery with thoughtful change
              management. No cowboy projects — just steady, predictable outcomes
              that keep leadership and auditors happy.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            View all case studies
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Card
              key={study.title}
              className="flex h-full flex-col border border-border/70 bg-card/70 shadow-sm"
            >
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="rounded-full">
                    {study.industry}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {study.client}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {study.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  {study.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground/80">
                  {study.stack.map((item) => (
                    <span key={item} className="rounded-full bg-muted px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
