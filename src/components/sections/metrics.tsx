"use client";

import { metrics } from "@/data/content";

export function MetricsSection() {
  return (
    <section className="border-b border-border/60 bg-background" id="metrics">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-border/70 bg-card/70 p-6 shadow-sm shadow-primary/10"
            >
              <p className="text-4xl font-semibold text-foreground">
                {metric.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary/80">
                {metric.label}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
