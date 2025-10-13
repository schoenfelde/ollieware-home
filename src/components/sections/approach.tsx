"use client";

import { CalendarCheck, Ear, GaugeCircle, Handshake } from "lucide-react";

const steps = [
  {
    title: "Listen with intent",
    description:
      "Stakeholder interviews, user pains, and regulatory guardrails captured in the first week. Everyone feels heard before we prescribe solutions.",
    icon: Ear,
  },
  {
    title: "Design a confident path",
    description:
      "Translate empathy into an executable plan: prioritized outcomes, measurable checkpoints, and transparent trade-offs.",
    icon: Handshake,
  },
  {
    title: "Ship rapidly, safely",
    description:
      "Iterate in production with observability, testing, and paired knowledge transfer — no knowledge silos or surprise regressions.",
    icon: GaugeCircle,
  },
  {
    title: "Leave teams stronger",
    description:
      "Documented playbooks, mentorship, and rituals so your team can continue delivering long after the engagement wraps.",
    icon: CalendarCheck,
  },
];

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="border-b border-border/60 bg-muted/40 py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A delivery rhythm built on empathy
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Elliot combines hands-on engineering with high EQ. The result is a
            steady cadence that keeps executives, legal, and engineering aligned
            from kickoff through rollout.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-3xl border border-border/60 bg-background p-8 shadow-sm shadow-primary/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
