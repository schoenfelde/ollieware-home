import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { caseStudies } from "@/data/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected engagements showing how Ollieware delivers secure, reliable software for regulated industries.",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">
          Client outcomes
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Partnerships that shipped on time and on budget.
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground">
          Every engagement starts with targeted discovery. Together we navigate
          regulatory, technical, and human constraints to deliver software that
          stands up to scrutiny and keeps teams energized.
        </p>
      </header>
      <div className="mt-12 space-y-12">
        {caseStudies.map((study) => (
          <Card
            key={study.title}
            className="overflow-hidden border border-border/70 bg-card/80 shadow-sm"
          >
            <CardHeader className="space-y-2 border-b border-border/60 bg-muted/30 p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {study.industry} · {study.client}
              </p>
              <CardTitle className="text-2xl font-semibold text-foreground">
                {study.title}
              </CardTitle>
              <CardDescription className="text-sm">
                {study.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-8 p-6 md:grid-cols-[1.8fr,1fr]">
              <div className="space-y-6 text-sm text-muted-foreground">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground/80">
                    Outcomes
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {study.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-4 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5 text-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-primary/80">
                  Capabilities in focus
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {study.stack.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Separator />
                <div className="space-y-3 text-sm">
                  <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
                    Ready for similar results?
                  </h4>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-semibold text-primary transition hover:text-primary/80"
                  >
                    Book your free discovery call
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
