"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FieldType = "text" | "email" | "textarea" | "select" | "guests";

type FieldConfig = {
  name: string;
  label: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
  type: FieldType;
  options?: Array<{ label: string; value: string }>;
};

const CAL_BASE_URL = "https://cal.com/ollieware/discovery-call";

const FIELD_CONFIG: FieldConfig[] = [
  {
    name: "name",
    label: "Your name",
    placeholder: "Jane Doe",
    required: true,
    type: "text",
  },
  {
    name: "email",
    label: "Work email",
    placeholder: "you@acmecorp.com",
    required: true,
    type: "email",
  },
  {
    name: "company",
    label: "Company / organization",
    placeholder: "Acme Health",
    required: true,
    type: "text",
  },
  {
    name: "role",
    label: "Your role & team",
    placeholder: "VP of Product, Growth",
    required: true,
    type: "text",
  },
  {
    name: "goal_90_days",
    label: "What outcome do you want in the next 90 days?",
    placeholder: "Launch MVP, modernize reporting, etc.",
    required: true,
    type: "textarea",
  },
  {
    name: "timeline",
    label: "Deadline or key milestone",
    placeholder: "Need beta live by June 1",
    required: true,
    type: "text",
  },
  {
    name: "current_state",
    label: "Where is the product today?",
    placeholder: "Select the stage you're in (idea, prototype, beta, production...)",
    required: true,
    type: "select",
    options: [
      { label: "Idea / discovery", value: "Idea / discovery" },
      { label: "MVP in progress", value: "MVP in progress" },
      { label: "Live but needs rescue", value: "Live but needs rescue" },
      {
        label: "Legacy platform modernization",
        value: "Legacy platform modernization",
      },
    ],
  },
  {
    name: "constraints",
    label: "Any compliance or integration constraints I should know?",
    placeholder:
      "List required certifications or integrations",
    type: "select",
    options: [
      { label: "Healthcare / HIPAA", value: "Healthcare / HIPAA" },
      { label: "Fintech / PCI", value: "Fintech / PCI" },
      { label: "Legal / privacy", value: "Legal / privacy" },
      {
        label: "Internal enterprise systems",
        value: "Internal enterprise systems",
      },
      { label: "Other (mention below)", value: "Other (mention below)" },
    ],
  },
  {
    name: "prework",
    label: "Anything you'd like me to review before we meet?",
    placeholder: "Links, docs, codebases, stakeholder notes...",
    type: "textarea",
  },
  {
    name: "referral",
    label: "How did you hear about Ollieware?",
    placeholder: "Referral from ... / LinkedIn / Conference",
    type: "text",
  },
];

type FormValues = Record<string, string>;

type FormErrors = Partial<Record<string, string>>;

function parseGuests(guests: string | undefined) {
  if (!guests) {
    return [];
  }
  return guests
    .split(/[\n,]/)
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function isValidEmail(value: string) {
  if (!value) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function DiscoveryCallRequestForm({ className }: { className?: string }) {
  const initialState = useMemo(() => {
    const base: FormValues = {};
    for (const field of FIELD_CONFIG) {
      base[field.name] = "";
    }
    return base;
  }, []);

  const [values, setValues] = useState<FormValues>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};

    for (const field of FIELD_CONFIG) {
      const rawValue = values[field.name]?.trim();
      if (field.required && !rawValue) {
        nextErrors[field.name] = "This field is required.";
        continue;
      }
      if (field.type === "email" && rawValue && !isValidEmail(rawValue)) {
        nextErrors[field.name] = "Enter a valid email.";
      }
    }

    const guestsList = parseGuests(values.guests);
    const invalidGuest = guestsList.find((guest) => !isValidEmail(guest));
    if (invalidGuest) {
      nextErrors.guests = "Guest emails must be valid.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const params = new URLSearchParams();

      const assignPrefill = (key: string, value: string) => {
        if (!value) return;
        params.set(`prefill[${key}]`, value);
      };

      assignPrefill("name", values.name.trim());
      assignPrefill("email", values.email.trim());
      assignPrefill("company", values.company.trim());
      assignPrefill("role", values.role.trim());
      assignPrefill("goal_90_days", values.goal_90_days.trim());
      assignPrefill("timeline", values.timeline.trim());
      assignPrefill("current_state", values.current_state.trim());
      assignPrefill("constraints", values.constraints.trim());
      assignPrefill("prework", values.prework.trim());
      assignPrefill("referral", values.referral.trim());

      if (guestsList.length > 0) {
        guestsList.forEach((guest, index) => {
          params.append(`prefill[guests][${index}]`, guest);
        });
      }

      const url = `${CAL_BASE_URL}?${params.toString()}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={cn(
        "space-y-6 rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm",
        className,
      )}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="space-y-2 text-left">
        <h2 className="text-xl font-semibold text-foreground">
          Tell me about your project.
        </h2>
        <p className="text-sm text-muted-foreground">
          Share the context I need to prepare for our discovery call. After you
          submit, you’ll jump to my scheduling page with these answers pre-filled
          so you can lock in a time right away.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {FIELD_CONFIG.map((field) => {
          const content = (() => {
            switch (field.type) {
              case "textarea":
                return (
                  <Textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={values[field.name]}
                    onChange={(event) =>
                      handleChange(field.name, event.target.value)
                    }
                    className="min-h-[120px]"
                  />
                );
              case "select":
                return (
                  <Select
                    value={values[field.name]}
                    onValueChange={(value) => handleChange(field.name, value)}
                  >
                    <SelectTrigger
                      id={field.name}
                      className="h-auto min-h-[48px] items-center justify-between text-left data-[placeholder]:items-start data-[placeholder]:pb-3 data-[placeholder]:pt-3"
                    >
                      <SelectValue
                        placeholder={field.placeholder ?? "Select an option"}
                        className="whitespace-normal text-left leading-5"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              case "guests":
                return (
                  <Textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    onChange={(event) =>
                      handleChange(field.name, event.target.value)
                    }
                    className="min-h-[88px]"
                  />
                );
              default:
                return (
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type === "email" ? "email" : "text"}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={values[field.name]}
                    onChange={(event) =>
                      handleChange(field.name, event.target.value)
                    }
                  />
                );
            }
          })();

          return (
            <div
              key={field.name}
              className="space-y-2"
            >
              <div className="space-y-1">
                <Label htmlFor={field.name} className="text-sm font-medium">
                  {field.label}
                  {field.required ? (
                    <span className="ml-1 text-destructive">*</span>
                  ) : null}
                </Label>
                {field.description ? (
                  <p className="text-xs text-muted-foreground">
                    {field.description}
                  </p>
                ) : null}
              </div>
              {content}
              {errors[field.name] ? (
                <p className="text-xs text-destructive">{errors[field.name]}</p>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col flex-1 items-center">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Continue to scheduling"}
        </Button>
      </div>
    </form>
  );
}
