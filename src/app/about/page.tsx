import type { Metadata } from "next";
import Image from "next/image";
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

const funFacts = [
  {
    title: "Analog Resets",
    description:
      "When I'm not behind a computer, you'll traveling the world. Currently I'm hiking the U.S. National Parks and have visited 20/63.",
  },
  {
    title: "Healthy Living",
    description:
      "I am an ultramarathoner and love long-distance trail running. Training keeps me energized and focused.",
  },
  {
    title: "Origins of Ollieware",
    description:
      "Ollieware is named ofter my 10-year-young mutt, Ollie. She's is my co-pilot and travel companion.",
  },
];


export const metadata: Metadata = {
  title: "About Elliot",
  description:
    "Get to know me.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">
          About Ollieware
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Meet Elliot, the hands-on engineer who also covers CTO and product leadership when you need it.
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground">
          I&apos;ve spent the past decade parachuting into cross-functional
          teams when outcomes matter most: getting AI features from prototype to
          production, taming legacy rewrites, unblocking mobile refactors, and
          turning blank-slate visions into revenue. I show up as a senior
          builder who can also step into the CTO or Head of Product seat —
          aligning the business case, the user journey, and the delivery plan
          so every initiative earns trust quickly. I still write code most
          weeks, pair with engineers, and stay close to the actual build.
        </p>
      </section>
      <section className="mt-12 grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border/60 bg-muted/40 shadow-xl">
          <Image
            src="/images/about/elliot-headshot.jpg"
            alt="Elliot Schoenfeld standing in a sunlit studio."
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 480px"
            priority
          />
        </div>
        <Card className="border border-border/70 bg-card/80 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              A few fun facts
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              The things that keep me energized outside the sprint schedule.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {funFacts.map((fact) => (
                <li
                  key={fact.title}
                  className="rounded-2xl border border-border/60 bg-background/70 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {fact.title}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {fact.description}
                  </p>
                </li>
              ))}
            </ul>
            <figure className="mt-8 space-y-3">
              <div className="relative aspect-[5/3] overflow-hidden rounded-3xl border border-border/60 bg-muted/40">
                <Image
                  src="/images/about/ollie.jpg"
                  alt="Ollie, the family vizsla, lounging during a work session."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
              <figcaption className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Studio mascot: Ollie 🐕
              </figcaption>
            </figure>
          </CardContent>
        </Card>
      </section>
      <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
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
              cross-team decisions or mentoring rising engineers, always tying
              the technical plan back to the business outcome we&apos;re chasing.
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
              Based in the USA · Remote friendly
            </p>
            <p>
              <span className="font-semibold text-foreground">
                Motto:
              </span>{" "}
              “Ship fast, listen faster.”
            </p>
            <p>
              <span className="font-semibold text-foreground">AI focus:</span>{" "}
              Leading teams through AI-native product decisions, from model
              selection to safety reviews.
            </p>
            <p>
              <span className="font-semibold text-foreground">Speed:</span>{" "}
              Quick wins in the first 2–4 weeks so momentum never stalls.
            </p>
            <p>
              <span className="font-semibold text-foreground">Product lens:</span>{" "}
              Every sprint ties shipping checklists to user outcomes and clear
              business signals.
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
    </div>
  );
}
