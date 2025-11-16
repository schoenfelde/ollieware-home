import type { Metadata } from "next";
import {
  CalendarCheck,
  CheckCircle2,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Grab time on Elliot’s calendar for a free discovery call or reach out directly to Ollieware.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <Badge variant="outline" className="border-primary/30 text-primary">
          Free 30-minute discovery call
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Book a 30-minute working session.
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Pick a slot to walk through your goals, constraints, and timeline. You&apos;ll leave with an honest read on
          feasibility plus the first steps toward delivery.
        </p>
      </header>
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.3fr),minmax(0,0.9fr)]">
        <div className="space-y-10">
          <section className="space-y-6 rounded-2xl border border-border/70 bg-card/80 p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              <CalendarCheck className="h-3.5 w-3.5" aria-hidden />
              Free to meet
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Decade of delivery experience, tailored to your project.
            </h2>
            <p className="text-base text-muted-foreground">
              I&apos;ve spent 10+ years shipping regulated healthcare, fintech,
              and legal software. This call is where we map your critical path,
              outline risk, and confirm whether Ollieware is the right fit.
              We start with the business challenge first, then decide which
              technology moves actually matter.
            </p>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>
                  Walk away with a sequenced action plan, even if we don&apos;t end up working together.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>
                  Talk directly with the operator who is simultaneously your CTO, Lead Engineer, and Head of Product — no handoffs or sales scripts.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>
                  Get scheduling certainty: once you pick a slot, the meeting is confirmed and an invite is sent immediately.
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="lg" className="min-w-[230px]">
                <Link
                  href="https://cal.com/ollieware/discovery-call"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book your free discovery call
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                Opens Cal.com in a new tab. 30-minute Google Meet.
              </p>
            </div>
          </section>
          <Card className="border border-border/70 bg-card/80 shadow-sm">
            <CardHeader className="space-y-3">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                <Sparkles className="h-5 w-5 text-primary" aria-hidden />
                What we&apos;ll cover together
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Context.</span>{" "}
                Give me the outcome you&apos;re chasing, stakeholders who matter most, and the timeline you&apos;re aiming for.
              </p>
              <p>
                <span className="font-medium text-foreground">Reality check.</span>{" "}
                I&apos;ll outline risks I see, trade-offs, and how we can ship fast without cutting corners.
              </p>
              <p>
                <span className="font-medium text-foreground">Next steps.</span>{" "}
                Leave with a 48-hour follow-up that includes priorities, sequencing, and any intros I can make.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-primary/40 bg-primary/5 shadow-sm">
            <CardHeader className="space-y-3">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                <CalendarCheck className="h-5 w-5 text-primary" aria-hidden />
                Need something else?
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Prefer to reach out before booking? I respond within one business day.
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden />
                <Link
                  href="mailto:elliot@ollieware.com"
                  className="font-medium text-foreground hover:text-primary"
                >
                  elliot@ollieware.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden />
                <Link
                  href="tel:+19048609220"
                  className="font-medium text-foreground hover:text-primary"
                >
                  (904) 860-9220
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6 lg:pl-4">
          <Card className="border border-border/70 bg-card/90 shadow-lg">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl font-semibold">
                Ready when you are
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Skip the intake form and go straight to the calendar. Grab a slot that works for you and bring your top priorities.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <dl className="grid grid-cols-1 gap-4 text-sm text-muted-foreground">
                <div>
                  <dt className="font-medium text-foreground">Duration</dt>
                  <dd>30 minutes (Google Meet)</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Focus</dt>
                  <dd>Goals, constraints, current build, and near-term roadmap.</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Follow-up</dt>
                  <dd>Receive a written recap with the sequence of next steps within 48 hours.</dd>
                </div>
              </dl>
              <Button asChild size="lg" className="w-full">
                <Link
                  href="https://cal.com/ollieware/discovery-call"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to calendar
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border border-border/70 bg-card/80 shadow-sm">
            <CardHeader className="space-y-2">
              <CardTitle className="text-lg font-semibold">
                Bring these details
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Having a few bullets ready helps us jump right into decision-making.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  Critical outcomes for the next 90 days.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  Known constraints (compliance, integrations, hiring freeze, etc.).
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  Links to anything you want reviewed: decks, demos, repos.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
