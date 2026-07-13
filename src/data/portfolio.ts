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
      "It saves teams time by making it easier to see which payment belongs to which customer or invoice, ensuring payments are not missed, mixed up, or followed up wrongly.",
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
    title: "APIs & Integrations",
    icon: "payments",
    description:
      "Custom API development, payment gateways, checkout flows, provider webhooks, and seamless third-party software integrations to securely connect your business systems.",
    tags: ["API Development", "M-Pesa", "Stripe", "Webhooks"]
  },
  {
    title: "Enterprise Software & ERPs",
    icon: "account_tree",
    description:
      "Internal tools, approval flows, inventory management, reporting modules, staff workflows, ERP-style systems and business process engines that cut manual work in half.",
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
    title: "AI Bots & Chatbots",
    icon: "smart_toy",
    description:
      "Conversational AI assistants, customer support bots, internal knowledge bots, and intelligent chatbots that handle questions, bookings, and routine interactions without human effort.",
    tags: ["Chatbots", "AI Assistants", "NLP", "Python"]
  },
  {
    title: "AI Workflows & Integrations",
    icon: "neurology",
    description:
      "Automated pipelines, n8n workflows, Ollama-powered local AI, data processing chains, and agentic integrations that connect your tools and reduce repetitive work.",
    tags: ["n8n", "Ollama", "Agents", "Automation"]
  },
  {
    title: "Business Websites & Portfolios",
    icon: "badge",
    description:
      "Professional websites for founders, consultants, teams, products, and personal brands where trust, clarity, and presentation matter more than flashy gimmicks.",
    tags: ["Portfolio", "Brand", "Landing Pages", "SEO"]
  },
  {
    title: "Mobile-Responsive Applications",
    icon: "smartphone",
    description:
      "Mobile-first web applications, progressive web apps, and responsive interfaces that work seamlessly across phones, tablets, and desktops.",
    tags: ["PWA", "Responsive", "Mobile-First", "Cross-Platform"]
  },
  {
    title: "API Development & Integrations",
    icon: "api",
    description:
      "REST APIs, third-party service integrations, webhook handlers, data synchronization, and middleware that connects your systems together reliably.",
    tags: ["REST", "APIs", "Webhooks", "Middleware"]
  },
  {
    title: "Bug Fixing & Reengineering",
    icon: "build_circle",
    description:
      "Fixing broken features, cleaning up confusing code, improving slow pages, modernizing legacy flows, and making existing software easier to maintain and extend.",
    tags: ["Debugging", "Refactor", "Performance", "Maintenance"]
  },
  {
    title: "Technical Consultation",
    icon: "support_agent",
    description:
      "Not sure what to build first? I can help clarify the scope, pick a practical architecture, plan the MVP, audit existing code, or review your technical direction.",
    tags: ["Planning", "Architecture", "MVP", "Code Review"]
  }
];

export const valueCards = [
  {
    title: "Results you can see",
    icon: "trending_up",
    description:
      "I deliver working software, not promises. Every project ships with real outcomes - near-zero bugs, cleaner data, and a better experience for the people who use it every day.",
    metric: "Real outcomes"
  },
  {
    title: "Clear, honest communication",
    icon: "forum",
    description:
      "You will always know what I am working on, what is next, and if something is blocked. No disappearing for weeks. Just straightforward progress reports.",
    metric: "No surprises"
  },
  {
    title: "Quality that outlasts the project",
    icon: "shield",
    description:
      "Clean code, solid architecture, proper error handling and documentation that makes handover painless. Not a quick fix that breaks next month but software you can build on for years.",
    metric: "Built to last"
  },
  {
    title: "I think like a business owner",
    icon: "lightbulb",
    description:
      "I do not just ask what features you want. I ask why, who uses it, and what would save you or your team the most time. That shift in thinking changes the outcome of every project.",
    metric: "Smarter solutions"
  },
  {
    title: "Trusted by startups and enterprises",
    icon: "verified",
    description:
      "From a five-person fintech team at the NSE Innovation Lab to Swiss ecommerce and Kenyan marketplaces, I adapt to how your team works, no matter the size or industry.",
    metric: "Any scale"
  },
  {
    title: "Reliable after delivery",
    icon: "handshake",
    description:
      "The relationship does not end at launch. I help with fixes, improvements, and new features as your product grows. You get a partner, not a contractor who vanishes.",
    metric: "Long-term partner"
  }
];

export const clientTypes = [
  "Solo Founders",
  "Startups",
  "Small Businesses",
  "Medium Enterprises",
  "Large Organisations",
  "Government & Public Sector",
  "Fintech Teams",
  "Ecommerce Brands",
  "SaaS Companies",
  "Consultants & Agencies",
  "NGOs & Non-Profits",
  "Personal Brands",
  "Remote & Distributed Teams",
  "Individual Professionals"
];

export const references = [
  {
    name: "Roman Njoroge",
    role: "Co-Founder & Software Engineer",
    company: "Orionramp",
    country: "Kenya",
    flag: "🇰🇪",
    initials: "RN",
    quote:
      "Victor was one of the most trusted engineers during our time together at the NSE Innovation Lab. He was reliable, owned features end-to-end, understood complexity and delivered clean work under tight deadlines. Would gladly work with him again."
  },
  {
    name: "Christof Braun",
    role: "Founder",
    company: "Mam Nature",
    country: "Switzerland",
    flag: "🇨🇭",
    initials: "CB",
    quote:
      "Our ecommerce site was built with a great level of care. He understood that customers needed to trust the product before purchase. Working with him and communicating across time zones was smooth."
  },
  {
    name: "Purity Langat",
    role: "Founder / CEO",
    company: "Pureez",
    country: "Kenya",
    flag: "🇰🇪",
    initials: "PL",
    quote:
      "We had a growing WhatsApp community and needed a proper marketplace. His work on our website boosted our sales and improved our business operations. It was a great experience working with him."
  }
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Guild Code",
    period: "Jul 2026 - Present",
    copy: "I recently joined the team. Currently, I'm getting up to speed, meeting the other engineers and getting familiar with the team's engineering practices and business logic. ",
    highlights: [

    ]
  },
  {
    role: "Software Engineering Community Member & Project Contributor",
    company: "Guild Code Community, Nairobi, Kenya",
    period: "Apr 2026 - May 2026",
    copy: "Before joining formally, I was part of the community, focusing on practical learning and building solutions for real business challenges.",
    highlights: [
      "Collaborated with other developers through technical discussions, project feedback and knowledge-sharing while continuing to build experience through independent and freelance software projects."
    ]
  },
  {
    role: "Software Engineer",
    company: "Nairobi Securities Exchange (NSE) PLC, Innovation Lab (Project Orion)",
    period: "Sep 2025 - Mar 2026",
    copy: "This was a deeply innovative and collaborative project. I worked alongside other engineers, including a blockchain engineer, frontend, backend, and fullstack developers - to build digital finance infrastructure from the ground up. It was a great lesson in how different technical disciplines come together.",
    highlights: [
      "Collaborated with a cross-functional engineering team to build fiat to digital asset onramp API and merchant dashboard interfaces.",
      "Learned how to integrate complex systems and communicate effectively.",
      "Helped with technical documentation used in a successful grant application."
    ]
  },
  {
    role: "IT Intern",
    company: "Ministry of ICT",
    period: "Jun 2024 - Sep 2024",
    copy: "Supported eCitizen platform work through workflow mapping, user support, documentation and application testing.",
    highlights: [
      "Supported testing, issue follow-up, change documentation, user guides and training materials.",
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
    meta: "A-"
  }
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS) — Also practicing AWS deployments",
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
      "Contributed technical documentation and merchant-facing platform work to Orion. Project Orion was among the projects to receive this grant."
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
    title: "AI & Agentic Engineering",
    icon: "neurology",
    items: ["GitHub Copilot", "Codex", "Intelligent Tooling", "Prompt Engineering", "n8n (Learning)", "AI Workflows"],
    detail:
      "I use intelligent tooling like GitHub Copilot and Codex to streamline boilerplate and accelerate problem-solving, while maintaining full control over the architecture. I am also building working familiarity with tools like n8n to connect AI models to automated business workflows."
  },
  {
    title: "APIs & Integrations",
    icon: "api",
    items: ["REST APIs", "Webhooks", "OpenAPI", "M-Pesa", "Stripe", "Paystack", "Provider APIs"],
    detail:
      "Through Orionramp and Suluhu-type work, I have built custom APIs and handled complex integrations. Whether it's securely moving data, processing webhooks, or connecting third-party platforms, the focus is always on reliable system communication."
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
  },
];

export const recognition = [
  "BSc Computer Science, University of Nairobi",
  "Hedera Hashathon Nairobi, 1st Runner-Up",
  "USD 10,000 Orion Builder grant contribution",
  "English, Swahili, and French working proficiency"
];
