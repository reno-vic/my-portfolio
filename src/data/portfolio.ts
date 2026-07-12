export const contact = {
  email: "vicreno08@gmail.com",
  phone: "+254 768 945 358",
  address: "44 Muthithi Road, Westlands, Nairobi",
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
  link?: string;
  actions?: {
    label: string;
    href?: string;
    tone?: "primary" | "muted" | "github";
  }[];
  status: "Live" | "Public" | "Private" | "In development" | "Under Maintenance";
  logoSrc?: string;
  logoAlt?: string;
  logoShape?: "square" | "wide";
  logoTone?: "neutral" | "coral" | "lime" | "ink" | "gold" | "stone" | "transparent";
  logoText?: string;
};

export const projects: Project[] = [
  {
    title: "Orionramp",
    eyebrow: "Fiat-to-Crypto On-Ramp API",
    description:
      "An on-ramp API that helps wallets, businesses and institutions move users from local money, like KES via M-Pesa, into supported digital assets on Hedera such as stablecoins.",
    value:
      "The point is access; as stablecoins and digital wallets become more useful, moving from fiat currencies to digital assets should feel simple and less intimidating. It was built at the NSE Innovation Lab by a team of five engineers, me included.",
    tech: ["Hedera", "Paystack", "Merchant Dashboard", "Fintech"],
    link: "https://orionramp.com/",
    actions: [{ label: "View", href: "https://orionramp.com/" }],
    status: "Live",
    logoSrc: "/project-logos/orionramp-logo.png",
    logoAlt: "Orionramp logo",
    logoTone: "ink"
  },
  {
    title: "Mam Nature",
    eyebrow: "Swiss ecommerce",
    description:
      "A Switzerland-based ecommerce platform for whole-house water filtration products.",
    value:
      "The project needed commerce flows that could explain technical filtration benefits, support product confidence and make buying feel credible.",
    tech: ["Ecommerce", "International", "Operations"],
    link: "https://mam-nature.com/",
    status: "Live",
    logoSrc: "/project-logos/mam-nature-logo.svg",
    logoAlt: "Mam Nature logo",
    logoShape: "wide",
    logoTone: "stone"
  },
  {
    title: "Careerswolf",
    eyebrow: "Cloud-native career platform",
    description:
      "Careerswolf helps people turn career information into better resumes, portfolio websites, and an AI assistant for job matching and interview preparation.",
    value:
      "It aims to build trust in remote workers by helping them present their skills clearly online, while keeping their professional profiles in one place.",
    tech: ["AWS", "AI Assistant", "Portfolio Builder", "WhatsApp"],
    actions: [{ label: "Careerswolf.com", tone: "muted" }],
    status: "In development",
    logoSrc: "/project-logos/careerswolf-logo.png",
    logoAlt: "Careerswolf logo",
    logoTone: "transparent"
  },
  {
    title: "Pureez",
    eyebrow: "Kenyan marketplace",
    description:
      "A Kenyan marketplace for approved household items, land, vehicles and other listings.",
    value:
      "It moved a growing WhatsApp community into a safer web and mobile marketplace with approved listings and better discovery.",
    tech: ["Marketplace", "SEO", "Mobile App", "Trust Flows"],
    link: "https://pureez.co.ke/",
    actions: [{ label: "View", href: "https://pureez.co.ke/" }],
    status: "Under Maintenance",
    logoSrc: "/project-logos/pureez-logo.png",
    logoAlt: "Pureez logo",
    logoTone: "lime"
  },
  {
    title: "Suluhu",
    eyebrow: "SME collections and reconciliation",
    description:
      "Suluhu helps businesses see all their incoming payments in one place, whether money came through M-Pesa, bank, Airtel Money, cards, cash or another provider.",
    value:
      "It saves teams time by making it easier to see which payment belongs to which customer or invoice, so fewer payments are missed, mixed up, or followed up wrongly.",
    tech: ["M-Pesa", "Banks", "Airtel Money", "Reconciliation"],
    actions: [{ label: "Private / link pending", tone: "muted" }],
    status: "Private",
    logoSrc: "/project-logos/suluhu-logo.png",
    logoAlt: "Suluhu logo",
    logoTone: "transparent"
  },
  {
    title: "BitSpam",
    eyebrow: "Pull request quality triage",
    description:
      "BitSpam helps repository owners spot low-quality or suspicious code contributions before wasting time on them.",
    value:
      "Connect the GitHub App, let it watch new pull requests, then get a quick analysis and ranking on potentially useful and/or spammy code changes.",
    tech: ["GitHub App", "PR Analysis", "Hackathon", "AI Signals"],
    link: "https://bitspam.vercel.app/",
    actions: [
      { label: "View", href: "https://bitspam.vercel.app/" },
      { label: "GitHub App", href: "https://github.com/apps/bitspam", tone: "github" }
    ],
    status: "Live",
    logoSrc: "/project-logos/bitspam-mark.svg",
    logoAlt: "BitSpam logo",
    logoTone: "neutral"
  },
  {
    title: "Certify",
    eyebrow: "Blockchain certificate issuance",
    description:
      "Certify helps institutions issue certificates that are easier to verify and harder to forge. Built during my final year in Uni.",
    value:
      "Instead of trusting screenshots or chasing paperwork, someone can quickly verify a certificate record on the blockchain.",
    tech: ["Blockchain", "Verification", "Academic Records"],
    link: "https://certify-sandy.vercel.app/",
    actions: [
      { label: "GitHub", href: "https://github.com/reno-vic/certify", tone: "github" },
      { label: "View", href: "https://certify-sandy.vercel.app/" }
    ],
    status: "Public",
    logoSrc: "/project-logos/certify-logo.png",
    logoAlt: "Certify logo",
    logoTone: "gold"
  }
];

export const services = [
  {
    title: "Web Apps & SaaS Products",
    icon: "web",
    description:
      "Customer portals, dashboards, booking tools, subscription products, admin panels and full web platforms built around the way your business actually works.",
    tags: ["Next.js", "React", "SaaS", "Dashboards"]
  },
  {
    title: "Payments & PaaS",
    icon: "payments",
    description:
      "Payment APIs, checkout flows, wallet integrations, provider webhooks, transaction dashboards and payment-as-a-service ideas for teams moving money.",
    tags: ["M-Pesa", "Paystack", "Stripe", "Webhooks"]
  },
  {
    title: "Business Systems & ERPs",
    icon: "account_tree",
    description:
      "Internal tools, approval flows, inventory screens, reporting tools, staff workflows, ERP-style modules and systems that reduce manual work.",
    tags: ["ERP", "Workflows", "Reports", "Automation"]
  },
  {
    title: "CRMs & Operations Tools",
    icon: "groups",
    description:
      "Tools for tracking customers, leads, tasks, follow-ups, support requests, and everyday operations that should not live forever in spreadsheets.",
    tags: ["CRM", "Support", "Tracking", "Teams"]
  },
  {
    title: "Ecommerce & Marketplaces",
    icon: "shopping_cart",
    description:
      "Online stores, product catalogs, vendor marketplaces, listing platforms, checkout flows, and search-friendly pages that help people buy with confidence.",
    tags: ["Catalogs", "Checkout", "SEO", "Listings"]
  },
  {
    title: "AI Bots & Workflows",
    icon: "smart_toy",
    description:
      "Chatbots, AI assistants, internal automations, n8n-style workflows, data helpers, and Python-powered integrations that reduce repetitive work.",
    tags: ["Python", "n8n", "Ollama", "Automation"]
  },
  {
    title: "Portfolios & Business Websites",
    icon: "badge",
    description:
      "Professional websites for founders, consultants, teams, products, and personal brands where trust, clarity, and presentation matter.",
    tags: ["Portfolio", "Brand", "Landing Pages", "SEO"]
  },
  {
    title: "Bug Fixing & Reengineering",
    icon: "build_circle",
    description:
      "Fixing broken features, cleaning up confusing code, improving slow pages, modernizing old flows, and making existing software easier to maintain.",
    tags: ["Debugging", "Refactor", "Performance", "Maintenance"]
  },
  {
    title: "Technical Consultation",
    icon: "support_agent",
    description:
      "If you are not sure what to build first, I can help clarify the scope, pick a practical architecture, plan the MVP, or review the technical direction.",
    tags: ["Planning", "Architecture", "MVP", "Review"]
  }
];

export const valueCards = [
  {
    title: "Clear communication",
    icon: "bolt",
    description:
      "I keep the work understandable. You should know what is being built, why it matters, what is blocked, and what the next step is.",
    metric: "Less guesswork"
  },
  {
    title: "Quality that lasts",
    icon: "shield",
    description:
      "I care about the boring parts too: validation, readable code, clean data flow, error handling, and systems that are easier to maintain.",
    metric: "Better handover"
  },
  {
    title: "Business-minded delivery",
    icon: "trending_up",
    description:
      "I do not just ask what screen you want. I ask what problem the business is solving, who uses it, and what would make the work easier.",
    metric: "Useful outcomes"
  },
  {
    title: "Trusted across teams",
    icon: "verified",
    description:
      "I have worked around startups, ecommerce businesses, public-sector systems, fintech ideas, and enterprise-style internal tools.",
    metric: "Small to large"
  },
  {
    title: "Practical approach",
    icon: "route",
    description:
      "I can start with a messy idea, clarify the workflow, build the first usable version, then improve it without overcomplicating the product.",
    metric: "From idea to app"
  },
  {
    title: "Reliable support",
    icon: "handshake",
    description:
      "After delivery, I can help fix issues, improve flows, add features, and keep the product moving as your needs become clearer.",
    metric: "Ongoing help"
  }
];

export const clientTypes = [
  "Founders",
  "SMEs",
  "Startups",
  "Ecommerce brands",
  "Fintech teams",
  "Enterprise teams",
  "Public-sector workflows",
  "Consultants",
  "Personal brands",
  "Remote teams"
];

export const references = [
  {
    name: "Roman Njoroge",
    role: "Co-Founder & Software Engineer",
    company: "Orionramp",
    country: "Kenya",
    initials: "RN",
    note:
      "Worked together on Orionramp at the NSE Innovation Lab, collaborating on fintech product work with a five-engineer team."
  },
  {
    name: "Christof Braun",
    role: "Founder",
    company: "Mam Nature",
    country: "Switzerland",
    initials: "CB",
    note:
      "Reference for ecommerce work around Mam Nature, where clear product presentation and trust mattered before checkout."
  },
  {
    name: "Purity Langat",
    role: "Founder / CEO",
    company: "Pureez",
    country: "Kenya",
    initials: "PL",
    note:
      "Reference for marketplace work around Pureez, moving a growing commerce community toward a stronger web and mobile product."
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
      "I use Python for backend logic, automation, and data-heavy workflows because it lets me move fast without making the code unreadable. It has been useful in coursework, scripts, APIs, and product logic where clarity matters."
  },
  {
    title: "TypeScript",
    copy:
      "I use TypeScript for Next.js, React, and Node work because it catches many mistakes before they reach users. It is especially useful when a project grows from a few screens into a real product with shared data and moving parts."
  },
  {
    title: "PostgreSQL",
    copy:
      "I use PostgreSQL when records need structure and trust: users, payments, orders, reports, and audit trails. It gives me a solid base for systems where the answer cannot be 'we lost track of it.'"
  },
  {
    title: "AWS & Cloud Tools",
    copy:
      "I am using AWS Lambda and serverless functions for cloud-native app work, especially where deployment should be lighter and easier to scale. I am also practicing Azure and studying foundational cloud certifications so I can choose cloud tools with better judgment."
  },
  {
    title: "Redis & Queues",
    copy:
      "I use Redis and queues for work that should not block the user: retries, notifications, background checks, and processing tasks. In payment and workflow systems, this helps the app stay responsive even when other services are slow."
  },
  {
    title: "Docker & CI/CD",
    copy:
      "I use Docker and CI/CD to reduce the 'it works on my machine' problem. The aim is predictable setup, cleaner deployments, and fewer surprises when changes move from local development to production."
  }
];

export const skillGroups = [
  {
    title: "Backend Architecture",
    icon: "code_blocks",
    items: ["Python", "Node.js", "NestJS", "REST APIs", "GraphQL", "Auth", "Webhooks"],
    detail:
      "This is where I spend a lot of my time: designing APIs, writing business logic, handling authentication, and connecting systems together. I have done this in products like Orionramp, Suluhu, and internal business tools."
  },
  {
    title: "Data & Integrity",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "Redis", "BullMQ", "SQL", "Audit Trails", "Data Models"],
    detail:
      "I work with relational data because business systems need clear records. For payments, orders, users, and reconciliation workflows, I think about how data is stored, matched, traced, and corrected when something goes wrong."
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    items: ["AWS", "AWS Lambda", "Serverless", "Azure", "Docker", "CI/CD", "Vercel", "GitHub Actions"],
    detail:
      "I currently use AWS Lambda and serverless functions in cloud-native app work, and I deploy frontend products with platforms like Vercel. Azure is a learning track for me right now, alongside foundational cloud certification study."
  },
  {
    title: "Frontend & Fullstack",
    icon: "web",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Forms", "Dashboards", "Responsive UI"],
    detail:
      "I build web interfaces for dashboards, forms, marketplaces, and portfolio-style products. My focus is on clear flows, responsive layouts and screens that help users complete the task without needing a manual."
  },
  {
    title: "System Design",
    icon: "architecture",
    items: ["API Design", "Database Design", "Queues", "Caching", "Reliability", "Security Basics", "Documentation"],
    detail:
      "I try to understand the moving parts before coding: users, data, integrations, money flows, and failure cases. This helps me build a first version that is practical now and not impossible to improve later."
  },
  {
    title: "Payments & Integrations",
    icon: "payments",
    items: ["M-Pesa", "Paystack", "Stripe", "Webhooks", "OpenAPI", "Reconciliation", "Provider APIs"],
    detail:
      "Through Orionramp and Suluhu-type work, I have dealt with payment flows where status, callbacks, transaction visibility, and matching records matter. The goal is simple: help teams know what happened to the money."
  },
  {
    title: "Debugging & Maintenance",
    icon: "bug_report",
    items: ["Bug Fixing", "Logs", "Testing", "Refactoring", "Performance", "Support Handover"],
    detail:
      "A lot of real engineering is careful maintenance. I can trace bugs, read logs, fix broken flows, simplify confusing code, and leave notes or handover material so the next person is not guessing."
  },
  {
    title: "Collaboration",
    icon: "groups",
    items: ["Requirements", "Git", "Pull Requests", "Technical Writing", "Client Communication", "Team Delivery"],
    detail:
      "I have worked in teams where product, technical, and business context all mattered. I can ask for requirements, break work into smaller steps, use Git and pull requests, and explain progress without hiding behind jargon."
  }
];

export const recognition = [
  "BSc Computer Science, University of Nairobi",
  "Hedera Hashathon Nairobi, 1st Runner-Up",
  "USD 10,000 Orion Builder grant contribution",
  "English, Swahili, and French working proficiency"
];
