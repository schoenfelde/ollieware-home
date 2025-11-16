export type Metric = {
  value: string;
  label: string;
  description: string;
};

export type Service = {
  title: string;
  summary: string;
  highlights: string[];
};

export type CaseStudy = {
  title: string;
  client: string;
  industry: string;
  summary: string;
  outcomes: string[];
  stack: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type RichTextBlock =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  blocks: RichTextBlock[];
};

export const metrics: Metric[] = [
  {
    value: "10+",
    label: "years in the trenches",
    description:
      "Helping regulated teams ship secure, performant experiences across healthcare, fintech, and legal.",
  },
  {
    value: "40+",
    label: "product launches",
    description:
      "From greenfield MVPs to legacy rescues, delivered on or ahead of schedule for every stakeholder.",
  },
  {
    value: "6",
    label: "critical launches rescued and delivered",
    description:
      "Guiding engineers, designers, and stakeholders through high-stakes releases without sacrificing quality.",
  },
];

export const services: Service[] = [
  {
    title: "Full-stack product acceleration",
    summary:
      "Get a working v1 in weeks, not quarters — from discovery to deployed app — with one partner owning the roadmap and the build.",
    highlights: [
      "Translate fuzzy ideas into working software in weeks, not quarters.",
      "Pair closely with designers to ship pixel-perfect, accessible interfaces.",
      "Instrument analytics and feedback loops so we can iterate with confidence.",
    ],
  },
  {
    title: "Legacy modernization & rescue",
    summary:
      "Stabilize fragile systems fast so you can ship the features your customers needed yesterday without risking uptime.",
    highlights: [
      "Audit current architecture and build a plan your stakeholders can trust.",
      "Untangle debt while keeping critical systems online and compliant.",
      "Coach internal teams so momentum continues long after launch.",
    ],
  },
  {
    title: "Team leadership & mentorship",
    summary:
      "Help your hybrid teams ship consistently by adding calm senior leadership where it&apos;s missing.",
    highlights: [
      "Stand up modern SDLC practices: CI, testing, observability, and guardrails.",
      "Mentor engineers across web, mobile, and infrastructure disciplines.",
      "Translate between business, legal, and technical conversations without friction.",
    ],
  },
  {
    title: "Platform & integration architecture",
    summary:
      "Ship integrations that respect sensitive data and scale with your business instead of fragile one-off hacks.",
    highlights: [
      "Build secure, compliant data flows with HIPAA, PCI, and SOC considerations.",
      "Wrangle legacy partner APIs and deliver clean abstractions to your teams.",
      "Codify infra with Terraform, Pulumi, and AWS so environments stay reproducible.",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Logging MVP rebrand ships on time and under budget",
    client: "Mid-market transportation startup",
    industry: "Transportation & logistics",
    summary:
      "Turned a partially built logistics tool into a production-ready, multi-tenant SaaS that gets timber loads from forest to mill with real-time visibility.",
    outcomes: [
      "Shipped the rebranded multi-tenant SaaS on schedule, turning a half-built prototype into a tool dispatch teams actually use every day.",
      "Authored the multi-tenant implementation plan, API docs, and service contracts that cut through scope noise and kept a three-team delivery on track.",
      "Containerized the Next.js web client, Express/Mongo API, and React admin into a reproducible Docker/ECS pipeline with SOC-ready environment automation.",
      "Unlocked driver adoption by designing the Flutter mobile app API: on-duty toggles, load lifecycle, GPS tracking, push notifications, and chat.",
    ],
    stack: [
      "Next.js 14",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Flutter",
      "Docker/ECS",
    ],
  },
  {
    title: "CORE design system unlocks design-development parity",
    client: "Series B health-tech startup",
    industry: "Healthcare",
    summary:
      "Productized the company’s visual language into CORE — a typed React/Tailwind system that lets any squad drop in accessible, brand-ready UI without rebuilding primitives.",
    outcomes: [
      "Enabled every product squad to ship on-brand, accessible UI faster with a shared React/Tailwind design system.",
      "Shipped 40+ audited atoms/molecules/organisms (from TanStack-powered data grids to Stripe-ready payment forms) with theme tokens, dark mode, and Tailwind presets that covered every product surface.",
      "Activated semantic-release, Chromatic visual diffs, Vitest/Cypress suites, and Storybook 8 docs so every npm publish came with screenshots, type defs, and CI evidence.",
      "Delivered consumer templates (Remix, serverless Express, CRA) plus brown-bag sessions that cut handoff cycles in half for design and feature squads.",
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Tailwind CSS & Styled Components",
      "Storybook 8 & Chromatic",
      "TanStack Table",
      "Vitest / Cypress / semantic-release",
    ],
  },
  {
    title: "Patient records portal earns the trust of the nation’s largest firm",
    client: "AmLaw 10 law firm",
    industry: "Legal",
    summary:
      "Built the secure bridge between litigators, providers, and an internal fulfillment desk—pairing a React portal with a serverless Node/API tier so medical record pulls stop depending on email chains.",
    outcomes: [
      "Gave litigators and staff a single, secure place to manage medical record pulls without email or spreadsheet chaos.",
      "Designed the end-to-end workflow: request intake, provider search, tracked submissions, and pre-signed uploads that land straight in the firm’s case-management platform without exposing PHI.",
      "Delivered a Postgres/TypeORM schema plus admin ops endpoints for migrations, ETL, and bulk sync so legacy matters could be brought forward with zero downtime.",
      "Codified AWS infrastructure with Pulumi and GitHub Actions, giving legal IT a reproducible Lambda/S3/RDS footprint and SOC-II ready audit trails.",
    ],
    stack: [
      "React",
      "Node.js / Express",
      "Postgres",
      "Auth0",
      "AWS Lambda & S3",
      "Pulumi",
    ],
  },
  {
    title: "Mobile banking refresh ships on time with a 3x team scale-up",
    client: "Fintech scale-up",
    industry: "Fintech",
    summary:
      "Guided an underestimated rewrite, scaling engineering from 2 to 6 devs while delivering a compliant mobile app overhaul.",
    outcomes: [
      "Launched the mobile banking refresh on time while scaling the engineering team 3x and maintaining compliance.",
      "Met an eight-week release deadline without sacrificing accessibility or compliance.",
      "Stood up TDD practices that reduced production defects by 45%.",
      "Mentored new hires across Android, iOS, and React Native for sustainable velocity.",
    ],
    stack: ["React Native", "Android", "iOS", "Node.js", "PCI compliance"],
  },
];

export const testimonials: Testimonial[] = [
  // {
  //   quote:
  //     "Elliot is the rare consultant who listens first, translates chaos into a roadmap, and then quietly ships the thing everyone else said was impossible.",
  //   name: "Sasha Patel",
  //   role: "VP of Product",
  //   company: "Helios Health",
  // },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "your-free-discovery-call",
    title: "What We’ll Cover in Your Free Discovery Call",
    description:
      "A quick guide to the conversation we’ll have when we first connect — zero obligation, 100% focused on clarity.",
    date: "2025-06-01",
    readTime: "4 min read",
    tags: ["consulting", "process"],
    blocks: [
      {
        type: "paragraph",
        text: "Every project starts with a free discovery call. It is equal parts listening session and practical planning.",
      },
      {
        type: "list",
        items: [
          "We’ll clarify the business outcome you need in the next 90 days.",
          "I’ll highlight risk areas and quick wins based on similar work.",
          "You’ll leave with a lightweight action plan — whether we work together or not.",
        ],
      },
      {
        type: "paragraph",
        text: "Clients tell me this call alone helps them sleep better. When you’re ready, grab a time and let’s map the path forward.",
      },
    ],
  },
];
