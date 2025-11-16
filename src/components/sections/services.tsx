"use client";

import { Lightbulb, Compass, ShieldCheck, Workflow } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/content";

const icons = [Lightbulb, ShieldCheck, Workflow, Compass];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-border/60 bg-gradient-to-b from-background via-background to-background/60"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What we build together
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Whether you need an MVP in six weeks, a legacy rescue, or a senior
            builder to get into the code and ship, Ollieware meets you where
            you are.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Card
                key={service.title}
                className="border border-border/70 bg-card/70 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <p className="text-muted-foreground">{service.summary}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
