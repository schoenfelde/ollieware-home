import type { Metadata } from "next";
import { Brain, HeartHandshake, Rocket } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const values = [
  {
    title: "Consideration before architecture",
    icon: HeartHandshake,
    description:
      "Great software starts by understanding the humans behind the requirements. I listen first, translate frustrations into journeys, and design solutions that respect every stakeholder.",
  },
  {
    title: "Velocity with guardrails",
    icon: Rocket,
    description:
      "Speed sticks when quality is baked in. Automated testing, CI/CD, and observability are non-negotiable so teams can deploy daily without fear.",
  },
  {
    title: "Pragmatic craftsmanship",
    icon: Brain,
    description:
      "I sweat design systems, developer experience, and infrastructure so the entire team can move faster — and enjoy the ride.",
  },
];

const timeline = [
  {
    year: "2015 – 2018",
    company: "Norfolk Southern",
    role: "Software Engineer",
    summary:
      "Led an 8-person team modernizing rail operations software. Introduced mobile tooling that brought 3,000+ conductors onto a unified workflow.",
  },
  {
    year: "2018 – 2019",
    company: "Accenture Emerging Technology",
    role: "Lead Engineer",
    summary:
      "Guided a hybrid team of ten building a React and Node.js order management platform on Kubernetes. Launched rapid prototypes and codified DevOps accelerators.",
  },
  {
    year: "2019 – Present",
    company: "Ollieware",
    role: "Principal Consultant & Founder",
    summary:
      "Partnered with healthcare, fintech, and legal teams to ship design systems, mobile apps, and serverless platforms under tight deadlines and strict compliance.",
  },
];

export const metadata: Metadata = {
  title: "About Elliot",
  description:
    "Get to know Elliot, the full-stack consultant behind Ollieware.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">
          About Ollieware
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Meet Elliot, — product-minded, thoughtful, engineer.
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground">
          I&apos;ve spent the past decade guiding cross-functional teams through
          hairy moments: HIPAA audits, fintech deadlines, legacy rewrites,
          mobile refactors, and everything in between. I thrive when the stakes
          are high and teams need a calm partner who can lead both conversations
          and commits.
        </p>
      </section>
      <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <Card className="border border-border/70 bg-card/80 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Why clients bring me in
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              I operate as a force multiplier — filling gaps between product,
              design, engineering, and leadership. Some days I&apos;m pair
              programming on a React feature. Others I&apos;m facilitating
              cross-team decisions or mentoring rising engineers.
            </p>
            <p>
              My north star is always the same: deliver business value fast
              while making the path humane for everyone involved.
            </p>
            <Separator />
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground/80">
                Certifications & tooling
              </h3>
              <p className="mt-3">
                AWS Certified Developer · Terraform · Pulumi · React Native ·
                Swift · Kotlin · GraphQL · Serverless architectures · CI/CD
                enablement
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-primary/40 bg-primary/5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Quick snapshot
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Location:</span>{" "}
              Florida (supporting clients across the U.S.)
            </p>
            <p>
              <span className="font-semibold text-foreground">
                Previous teams:
              </span>{" "}
              Norfolk Southern, Accenture Emerging Technology
            </p>
            <p>
              <span className="font-semibold text-foreground">
                Specialty:
              </span>{" "}
              Accelerating delivery for regulated industries without burning out
              teams.
            </p>
            <p>
              <span className="font-semibold text-foreground">
                Motto:
              </span>{" "}
              “Ship fast, listen faster.”
            </p>
          </CardContent>
        </Card>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Principles I carry into every engagement
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card
                key={value.title}
                className="border border-border/70 bg-card/80 shadow-sm"
              >
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {value.description}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      <section className="mt-16 space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Career timeline
        </h2>
        <div className="relative space-y-10 border-l border-border/70 pl-6">
          {timeline.map((entry) => (
            <div key={entry.year} className="relative">
              <span className="absolute -left-[29px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary" />
              <p className="text-xs uppercase tracking-[0.16em] text-primary/80">
                {entry.year}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {entry.company} · {entry.role}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {entry.summary}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
