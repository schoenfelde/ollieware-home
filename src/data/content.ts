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
  year: string;
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
      "From greenfield MVPs to legacy rescues, delivered on or ahead of schedule with empathy for every stakeholder.",
  },
  {
    value: "6",
    label: "cross-functional teams led",
    description:
      "Guiding engineers, designers, PMs, and compliance experts toward outcomes that delight customers.",
  },
];

export const services: Service[] = [
  {
    title: "Full-stack product acceleration",
    summary:
      "Own the roadmap from discovery through production, filling gaps across product, design systems, and delivery.",
    highlights: [
      "Translate fuzzy ideas into working software in weeks, not quarters.",
      "Pair closely with designers to ship pixel-perfect, accessible interfaces.",
      "Instrument analytics and feedback loops so we can iterate with confidence.",
    ],
  },
  {
    title: "Legacy modernization & rescue",
    summary:
      "Stabilize fragile systems and deliver the features your customers needed yesterday.",
    highlights: [
      "Audit current architecture and build a plan your stakeholders can trust.",
      "Untangle debt while keeping critical systems online and compliant.",
      "Coach internal teams so momentum continues long after launch.",
    ],
  },
  {
    title: "Team leadership & mentorship",
    summary:
      "Bring calm senior leadership to hybrid teams that need clarity, empathy, and velocity.",
    highlights: [
      "Stand up modern SDLC practices: CI, testing, observability, and guardrails.",
      "Mentor engineers across web, mobile, and infrastructure disciplines.",
      "Translate between business, legal, and technical conversations without friction.",
    ],
  },
  {
    title: "Platform & integration architecture",
    summary:
      "Design integrations that respect sensitive data and scale with your business.",
    highlights: [
      "Build secure, compliant data flows with HIPAA, PCI, and SOC considerations.",
      "Wrangle legacy partner APIs and deliver clean abstractions to your teams.",
      "Codify infra with Terraform, Pulumi, and AWS so environments stay reproducible.",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "CORE design system unlocks design-development parity",
    client: "Series B health-tech startup",
    industry: "Healthcare",
    year: "2023",
    summary:
      "Bootstrapped a React component library that empowered teams to ship consistent UI without designer bottlenecks.",
    outcomes: [
      "Cut time-to-MVP from months to weeks across three internal product lines.",
      "Established automated visual regression pipelines for safe iteration.",
      "Delivered exhaustive documentation and workshops that upskilled every squad.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Storybook",
      "CI/CD",
      "Design tokens",
    ],
  },
  {
    title: "Patient records portal earns the trust of the nation’s largest firm",
    client: "AmLaw 10 law firm",
    industry: "Legal",
    year: "2022",
    summary:
      "Replatformed legacy data into a serverless React experience, enabling secure collaboration with medical partners.",
    outcomes: [
      "Migrated years of protected data with zero downtime or compliance incidents.",
      "Wrapped brittle partner APIs with resilient, observable integration layers.",
      "Launched on schedule while coaching the client’s internal team on cloud operations.",
    ],
    stack: ["React", "Node.js", "AWS Lambda", "DynamoDB", "Terraform"],
  },
  {
    title: "Mobile banking refresh ships on time with a 3x team scale-up",
    client: "Fintech scale-up",
    industry: "Fintech",
    year: "2021",
    summary:
      "Guided an underestimated rewrite, scaling engineering from 2 to 6 devs while delivering a compliant mobile app overhaul.",
    outcomes: [
      "Met an eight-week release deadline without sacrificing accessibility or compliance.",
      "Stood up TDD practices that reduced production defects by 45%.",
      "Mentored new hires across Android, iOS, and React Native for sustainable velocity.",
    ],
    stack: ["React Native", "Android", "iOS", "Node.js", "PCI compliance"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Elliot is the rare consultant who listens first, translates chaos into a roadmap, and then quietly ships the thing everyone else said was impossible.",
    name: "Sasha Patel",
    role: "VP of Product",
    company: "Helios Health",
  },
  {
    quote:
      "He brings empathy to every stakeholder conversation — legal, engineering, executives — and leaves teams more confident than he found them.",
    name: "Morgan DeWitt",
    role: "Director of Engineering",
    company: "Crescent Fintech",
  },
  {
    quote:
      "Our partners called out the craftsmanship and polish immediately. Elliot’s ability to mentor while delivering was the force multiplier we needed.",
    name: "Dana Lee",
    role: "COO",
    company: "Cobalt Legal Group",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "the-empathy-advantage",
    title: "The Empathy Advantage in Shipping Software Fast",
    description:
      "Why listening harder — to users, stakeholders, and engineers — is the fastest path to production.",
    date: "2024-09-18",
    readTime: "6 min read",
    tags: ["consulting", "delivery", "leadership"],
    blocks: [
      {
        type: "paragraph",
        text: "Speed is not a synonym for pressure. The teams that ship the fastest are the ones that feel the most understood. Empathy surfaces the real constraints so we can solve the right problem the first time.",
      },
      {
        type: "heading",
        level: 3,
        text: "Listen past the backlog",
      },
      {
        type: "paragraph",
        text: "When I join a new engagement, my first meetings are with the people closest to the customer pain. I map frustrations, regulatory guardrails, and desired outcomes. That map becomes the blueprint for the first milestone.",
      },
      {
        type: "list",
        items: [
          "Shadow frontline teammates to understand real-world workflows.",
          "Translate regulatory constraints into actionable technical requirements.",
          "Surface hidden dependencies before they blow up the timeline.",
        ],
      },
      {
        type: "paragraph",
        text: "Once everyone feels heard, the pace picks up naturally. Meetings shrink, decisions stick, and we can measure progress in days instead of quarters.",
      },
    ],
  },
  {
    slug: "secure-delivery-in-complex-industries",
    title: "Shipping Sensitive Apps Without Losing Momentum",
    description:
      "Practical guardrails I lean on to keep healthcare, fintech, and legal products both compliant and fast.",
    date: "2024-07-10",
    readTime: "7 min read",
    tags: ["security", "healthcare", "fintech"],
    blocks: [
      {
        type: "paragraph",
        text: "Building in regulated spaces is a balancing act. The trick is to automate the boring compliance steps so the team can focus on user value.",
      },
      {
        type: "list",
        items: [
          "Codify infrastructure and policies so environments are reproducible.",
          "Automate dependency and security scanning from day one.",
          "Invest in observability — auditors love dashboards as much as engineers.",
        ],
      },
      {
        type: "paragraph",
        text: "With the guardrails in place, the product conversation can stay anchored to outcomes, not paperwork.",
      },
    ],
  },
  {
    slug: "your-free-discovery-call",
    title: "What We’ll Cover in Your Free Discovery Call",
    description:
      "A quick guide to the conversation we’ll have when we first connect — zero obligation, 100% focused on clarity.",
    date: "2024-05-21",
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
