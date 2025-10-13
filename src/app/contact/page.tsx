import type { Metadata } from "next";
import {
  CalendarCheck,
  CheckCircle2,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { DiscoveryCallRequestForm } from "@/components/discovery-call-request-form";
import { Badge } from "@/components/ui/badge";
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
          Book time with Elliot Schoenfeld.
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Pick a slot to walk through your goals, constraints, and timeline with
          the founder of Ollieware. You&apos;ll leave with an honest read on
          feasibility plus the first steps toward delivery.
        </p>
      </header>
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)]">
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
            </p>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
                <span>
                  Walk away with a sequenced action plan, even if we don&apos;t end up working together.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
                <span>
                  Talk directly with the engineer who will deliver your project — no handoffs or sales scripts.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
                <span>
                  Get scheduling certainty: once you pick a slot, the meeting is confirmed and an invite is sent immediately.
                </span>
              </li>
            </ul>
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
        <div className="lg:pl-4">
          <DiscoveryCallRequestForm />
        </div>
      </div>
    </div>
  );
}
