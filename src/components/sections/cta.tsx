"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CallToActionSection() {
  return (
    <section className="bg-gradient-to-b from-background/95 via-background to-primary/5 py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <Card className="border border-primary/30 bg-background/95 shadow-xl shadow-primary/10">
          <CardContent className="grid gap-10 p-10 md:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                Complimentary first session
              </span>
              <h2 className="text-3xl font-semibold leading-tight text-foreground">
                Let&apos;s map your next milestone — no cost, no obligation.
              </h2>
              <p className="text-base text-muted-foreground">
                We’ll spend 30 minutes unpacking your goals, constraints, and
                success metrics. You leave with a crystal-clear action plan,
                whether we partner or not.
              </p>
            </div>
            <div className="flex flex-col justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">
                  What you can expect:
                </p>
                <ul className="mt-3 space-y-2">
                  <li>• Alignment on the outcomes that matter most.</li>
                  <li>• A prioritized roadmap covering the next 90 days.</li>
                  <li>• Honest risk assessment and quick wins.</li>
                </ul>
              </div>
              <Button asChild size="lg" className="w-full">
                <Link href="/contact">
                  Book the free discovery call
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
