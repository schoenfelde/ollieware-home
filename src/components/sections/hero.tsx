"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const trustedBy = [
  "Nationwide legal teams",
  "Healthcare innovators",
  "Fintech scale-ups",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-background to-background/60">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
              10+ years delivering production software
            </Badge>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Full-stack consulting for teams that need outcomes
              now.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              I&apos;m Elliot Schoenfeld — the founder of Ollieware. I help
              regulated startups and enterprises ship reliable software fast,
              while keeping customers, compliance, and internal teams delighted.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="min-w-[220px]">
              <Link href="/contact">
                Book your free discovery call
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">Explore client outcomes</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              Guaranteed constructive call.
            </span>{" "}
            We’ll map your next 90 days and you’ll leave with a plan —
            regardless of fit.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-10 rounded-3xl border border-border/60 bg-card/70 p-8 shadow-lg shadow-primary/5 backdrop-blur">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              What clients count on
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                ➤ Translating murky requirements into software people love to
                use.
              </li>
              <li>
                ➤ Shipping secure experiences in healthcare, fintech, and legal
                without slowing down.
              </li>
              <li>
                ➤ Coaching in-house teams so the wins keep compounding.
              </li>
            </ul>
          </div>
          <div className="space-y-2 rounded-2xl border border-dashed border-primary/40 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">
              Trusted by
            </p>
            <div className="grid gap-2 text-sm text-muted-foreground">
              {trustedBy.map((company) => (
                <span key={company} className="flex items-center gap-2">
                  <span className="h-px flex-1 bg-primary/20" />
                  {company}
                  <span className="h-px flex-1 bg-primary/20" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
