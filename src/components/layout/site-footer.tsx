"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const specialties = [
  "Design AI systems relevant to your business",
  "Product-minded CTO + Lead Engineer + Head of Product who keeps discovery and delivery in sync",
  "Healthcare & HIPAA-compliant apps",
  "Fintech & payments",
  "DevOps & infrastructure as code",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[2fr,1fr,1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                Ollieware
              </span>
              <span className="text-sm text-muted-foreground">
                Full-stack consultancy
              </span>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              We partner with teams to design,
              build, and ship the software their customers needed yesterday.
              Senior hands-on expertise across web, mobile, and cloud.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" aria-hidden />
                <Link
                  href="mailto:elliot@ollieware.com"
                  className="hover:text-foreground"
                >
                  elliot@ollieware.com
                </Link>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" aria-hidden />
                <Link
                  href="tel:+19048609220"
                  className="hover:text-foreground"
                >
                  (904) 860-9220
                </Link>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" aria-hidden />
                <span>Based in the USA · Remote friendly</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Specialties</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {specialties.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Quick links
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ollieware. All rights reserved.</p>
          <p className="sm:text-right">
            Made with ❤️ from Summit
          </p>
        </div>
      </div>
    </footer>
  );
}
