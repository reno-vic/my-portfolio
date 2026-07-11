export const contact = {
  email: "vicreno08@gmail.com",
  phone: "+254 768 945 358",
  schedulingUrl: process.env.NEXT_PUBLIC_SCHEDULING_URL || "",
  githubUrl: "https://github.com/reno-vic",
  linkedinUrl: "https://www.linkedin.com/in/victor-reno-985a9034b",
};

export const navLinks = [
  { name: "PROJECTS", href: "/projects" },
  { name: "SKILLS", href: "/skills" },
  { name: "SERVICES", href: "/services" },
  { name: "JOURNEY", href: "/journey" }
];

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  value: string;
  tech: string[];
  link: string;
  status: "Live" | "Public" | "Private";
  logoSrc?: string;
  logoAlt?: string;
  logoShape?: "square" | "wide";
  logoTone?: "neutral" | "coral" | "lime" | "ink" | "gold" | "stone";
  logoText?: string;
};

export const projects: Project[] = [
  {
    title: "Orionramp",
    eyebrow: "Stablecoin payment infrastructure",
    description:
      "Orionramp helps African businesses accept familiar local payments and route settlement into supported Hedera digital-asset flows.",
    value:
      "I worked on merchant-facing setup flows: API keys, sandbox access, account configuration, transaction visibility, and the dashboard moments businesses use before going live.",
    tech: ["Hedera", "Paystack", "Merchant Dashboard", "Fintech"],
    link: "https://orionramp.com/",
    status: "Live",
    logoSrc: "/project-logos/orionramp-logo.png",
    logoAlt: "Orionramp logo",
    logoTone: "ink"
  },
  {
    title: "Pureez",
    eyebrow: "Ecommerce application",
    description:
      "Pureez is a Kenyan ecommerce experience built around product discovery, shopping flows, and a smoother path from browsing to checkout.",
    value:
      "The work sits in the commerce layer: catalog clarity, customer-friendly purchase flows, and the business logic a seller needs behind the storefront.",
    tech: ["Ecommerce", "Catalog", "Checkout"],
    link: "https://pureez.co.ke/",
    status: "Live",
    logoSrc: "/project-logos/pureez-logo.png",
    logoAlt: "Pureez logo",
    logoTone: "lime"
  },
  {
    title: "Resumely",
    eyebrow: "Resume workflow product",
    description:
      "Resumely turns scattered career information into a guided resume workflow, so users can build cleaner documents without fighting a blank page.",
    value:
      "I focused on structured document flow, friendly product UI, and a calmer way to edit career details over time.",
    tech: ["Career Tech", "Documents", "Product UI"],
    link: "",
    status: "Private",
    logoText: "RS",
    logoTone: "coral"
  },
  {
    title: "Mam Nature",
    eyebrow: "Switzerland ecommerce",
    description:
      "Mam Nature is a Switzerland-based ecommerce site for whole-house water filtration, where product trust and education matter before the sale.",
    value:
      "The project needed commerce flows that could explain technical filtration benefits, support product confidence, and make buying feel credible.",
    tech: ["Ecommerce", "International", "Operations"],
    link: "https://mam-nature.com/",
    status: "Live",
    logoSrc: "/project-logos/mam-nature-logo.svg",
    logoAlt: "Mam Nature logo",
    logoShape: "wide",
    logoTone: "stone"
  },
  {
    title: "BitSpam",
    eyebrow: "Pull request quality triage",
    description:
      "BitSpam helps maintainers spot low-signal pull requests before review time gets swallowed by vague changes, risky diffs, or missing context.",
    value:
      "It works as an advisory layer: explain the risk, guide contributors fairly, and keep review queues useful without shutting down genuine work.",
    tech: ["GitHub API", "Queues", "Rules", "AI Signals"],
    link: "https://bitspam.vercel.app/",
    status: "Live",
    logoSrc: "/project-logos/bitspam-mark.svg",
    logoAlt: "BitSpam logo",
    logoTone: "neutral"
  },
  {
    title: "Suluhu",
    eyebrow: "SME collections and reconciliation",
    description:
      "Suluhu gives SMEs a clearer view of money coming in, what matched correctly, and what still needs attention.",
    value:
      "The work is about financial confidence: reliable payment processing, reconciliation views, audit trails, and retry-friendly backend workflows.",
    tech: ["PostgreSQL", "Redis", "OpenAPI", "Fintech"],
    link: "",
    status: "Private",
    logoText: "SU",
    logoTone: "gold"
  },
  {
    title: "Certify",
    eyebrow: "Blockchain certificate issuance",
    description:
      "Certify helps institutions issue tamper-evident academic certificates and gives employers a faster way to verify records.",
    value:
      "I built around the trust layer: certificate issuance, verification flows, blockchain-backed records, and the presentation material for the academic system.",
    tech: ["Blockchain", "Verification", "Academic Records"],
    link: "https://certify-sandy.vercel.app/",
    status: "Public",
    logoSrc: "/project-logos/certify-logo.png",
    logoAlt: "Certify logo",
    logoTone: "gold"
  }
];

export const services = [
  {
    title: "Custom Web Applications",
    icon: "web",
    description:
      "Dashboards, portals, admin tools, and product experiences built around your actual business process, not a generic template.",
    tags: ["React / Next.js", "Node.js", "Cloud Ready"]
  },
  {
    title: "Fintech & Integrations",
    icon: "payments",
    description:
      "Payment gateways, reconciliation screens, webhooks, and reporting flows that make money movement easier to trace.",
    tags: ["M-Pesa", "Stripe", "Paystack"]
  },
  {
    title: "Business Process Automation",
    icon: "account_tree",
    description:
      "Internal tools, approval flows, queues, and ERP-style workflows that help teams move faster with fewer manual mistakes.",
    tags: ["Workflows", "Internal Tools", "Queues"]
  }
];

export const valueCards = [
  {
    title: "Move Faster",
    icon: "bolt",
    description:
      "Automating manual processes saves time, reduces back-and-forth, and helps your team focus on work that actually grows the business.",
    metric: "Time to Market down"
  },
  {
    title: "Sleep Soundly",
    icon: "shield",
    description:
      "Payments, records, and internal workflows need validation, retries, logs, and clear ownership so small issues do not become 3 AM emergencies.",
    metric: "System Downtime down"
  },
  {
    title: "Grow Easily",
    icon: "trending_up",
    description:
      "I build with maintainable architecture so today's simple app can become tomorrow's stronger business platform.",
    metric: "User Capacity up"
  }
];

export const experiences = [
  {
    role: "Software Engineer, Business Solutions",
    company: "Guild Code",
    period: "Mar 2026 - Present",
    copy: "Architecting internal tools, ERP workflows, and robust backend APIs to support enterprise-scale operations.",
    highlights: [
      "Work with senior engineers and company leadership to turn operational needs into clear scope, dashboards, APIs, and handover-ready software.",
      "Build backend APIs, database workflows, and business applications using Python, TypeScript, Node.js, and PostgreSQL.",
      "Own assigned defects and release work from investigation through testing and deployment coordination."
    ]
  },
  {
    role: "Software Engineer",
    company: "NSE Innovation Lab, Project Orion",
    period: "Sep 2025 - Feb 2026",
    copy: "Developed digital finance infrastructure, including an M-Pesa to digital asset bridge and merchant dashboard interfaces.",
    highlights: [
      "Contributed to an NSE-Hedera innovation programme focused on local payment access for digital-asset applications.",
      "Built merchant dashboard workflows for API keys, account configuration, sandbox access, and live transaction visibility.",
      "Helped with technical documentation used in a successful grant application; Orion later secured a USD 10,000 Builder grant."
    ]
  },
  {
    role: "IT Intern",
    company: "Ministry of ICT",
    period: "Jun 2024 - Sep 2024",
    copy: "Supported eCitizen platform work through workflow mapping, user support, documentation, and application testing.",
    highlights: [
      "Mapped digital public-service workflows, documented user needs, and clarified business rules for delivery teams.",
      "Supported testing, issue follow-up, change documentation, user guides, and training materials.",
      "Worked across teams while handling institutional and citizen-service information responsibly."
    ]
  }
];

export const education = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "University of Nairobi",
    period: "Sep 2021 - Sep 2025",
    meta: "Second Class Upper Honours",
    copy:
      "Studied the foundations behind the systems I build today: algorithms, databases, software engineering, computer networks, artificial intelligence, and blockchain technology."
  },
  {
    title: "Kenya Certificate of Secondary Education",
    institution: "Maseno School",
    period: "2017 - 2021",
    meta: "A-",
    copy:
      "Built the academic discipline that carried me into computer science and engineering work."
  }
];

export const certifications = [
  {
    title: "Claude Code: Software Engineering with Generative AI Agents",
    issuer: "Vanderbilt University / Coursera",
    period: "In progress, 2026"
  },
  {
    title: "ALX Software Engineering Programme",
    issuer: "ALX Africa / Holberton School",
    period: "2024"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    period: "2023"
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM / Coursera",
    period: "2022"
  }
];

export const pursuits = [
  "Backend engineering",
  "Enterprise and ERP systems",
  "Payment platforms",
  "Distributed systems",
  "Platform reliability",
  "Cloud infrastructure",
  "Technology leadership"
];

export const languages = [
  "English, fluent",
  "Swahili, fluent",
  "French, professional working proficiency - DELF B2"
];

export const awards = [
  {
    title: "1st Runner-Up, Hedera Hashathon Nairobi",
    period: "2025",
    copy:
      "Recognition from the Hedera ecosystem for building and presenting blockchain-backed product work."
  },
  {
    title: "Project Orion Builder Grant",
    period: "USD 10,000",
    copy:
      "Contributed technical documentation and merchant-facing platform work to Orion, which later secured a Builder grant."
  }
];

export const techChoices = [
  {
    title: "Python",
    copy:
      "I use Python when backend logic needs to stay readable, quick to test, and friendly for automation-heavy work."
  },
  {
    title: "TypeScript",
    copy:
      "I use TypeScript for web apps because it catches mistakes early and makes bigger products easier to change safely."
  },
  {
    title: "PostgreSQL",
    copy:
      "I use PostgreSQL when the data matters. Payments, orders, users, and reports need something predictable."
  },
  {
    title: "AWS & Cloud Tools",
    copy:
      "I use cloud platforms when a product needs to be reachable, secure, backed up, and ready to grow past one laptop."
  },
  {
    title: "Redis & Queues",
    copy:
      "I use queues for retries, notifications, background processing, and work that should not slow the user down."
  },
  {
    title: "Docker & CI/CD",
    copy:
      "I use Docker and pipelines so apps behave consistently and releases do not feel like a gamble."
  }
];

export const skillGroups = [
  { title: "Backend Architecture", items: ["Python", "Node.js", "NestJS", "REST APIs", "GraphQL"] },
  { title: "Data Integrity", items: ["PostgreSQL", "Redis", "BullMQ", "SQL", "Audit Trails"] },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD", "Vercel", "GitHub Actions"] },
  { title: "Frontend Product UI", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { title: "Payments & Integrations", items: ["M-Pesa", "Stripe", "Paystack", "Webhooks", "OpenAPI"] }
];

export const recognition = [
  "BSc Computer Science, University of Nairobi",
  "Hedera Hashathon Nairobi, 1st Runner-Up",
  "USD 10,000 Orion Builder grant contribution",
  "English, Swahili, and French working proficiency"
];
