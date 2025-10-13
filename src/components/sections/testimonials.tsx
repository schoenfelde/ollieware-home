"use client";

import { Quote } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-b border-border/60 bg-background py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Clients notice the calm, not the chaos
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Empathy keeps delivery human. Teams feel supported, informed, and
            confident as we move from idea to launch.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="flex h-full flex-col border border-border/70 bg-card/70 shadow-sm"
            >
              <CardHeader className="flex items-start justify-between">
                <CardTitle className="flex items-center gap-3 text-left text-base font-medium">
                  <Avatar className="h-10 w-10 border border-border/60">
                    <AvatarFallback>{initials(testimonial.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </CardTitle>
                <Quote className="h-5 w-5 text-primary" aria-hidden />
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                “{testimonial.quote}”
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
