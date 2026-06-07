/* =============================================================================
 *  CONTENT — single source of truth for the whole site.
 *
 *  Everything you see on the website is driven by this file. Edit the text
 *  below and the UI updates automatically. You do NOT need to touch any of the
 *  React/component code to change your content.
 *
 *  👉 Anything marked  [PLACEHOLDER]  is a guess or was not available on your
 *     LinkedIn profile — replace it with the real value when you can.
 * ========================================================================== */

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Users,
  Map,
  Layers,
  Wrench,
  ShieldCheck,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  1. SITE / SEO                                                             */
/* -------------------------------------------------------------------------- */

export const site = {
  /** Used in <title>, Open Graph, and the footer. */
  name: "Miloš Petkov",
  /** Short professional title. */
  role: "Product Manager",
  /** Used for SEO meta description + Open Graph. */
  description:
    "Product Manager. I turn messy problems and data into clear roadmaps, shipped products, and measurable outcomes.",
  /** Production URL — used for SEO, sitemap, and Open Graph. */
  url: "https://milospetkov.com",
  /** Two-letter locale for <html lang> and OG. */
  locale: "en",
} as const;

/* -------------------------------------------------------------------------- */
/*  2. CONTACT / SOCIAL LINKS                                                 */
/* -------------------------------------------------------------------------- */

export const contact = {
  email: "a.milospetkov@gmail.com",
  location: "Niš, Serbia",
  linkedin: "https://www.linkedin.com/in/petko92/",
  github: "https://github.com/mpetko92",
  /** CV file in /public and the filename used when visitors download it. */
  cv: "/Milos Petkov.pdf",
  cvDownloadName: "Milos Petkov.pdf",
} as const;

/* -------------------------------------------------------------------------- */
/*  3. HERO                                                                   */
/* -------------------------------------------------------------------------- */

export const hero = {
  /** Small label above the name. */
  eyebrow: "Product Manager",
  /** Main one-liner that describes you. Keep it punchy. */
  headline:
    "I build products at the intersection of data, delivery, and people.",
  /** Supporting sentence under the headline. */
  subline:
    "Product Manager with 9+ years across product, manufacturing quality, and systems — turning complex problems into roadmaps, shipped features, and measurable results.",
} as const;

/* -------------------------------------------------------------------------- */
/*  4. ABOUT                                                                  */
/* -------------------------------------------------------------------------- */

export const about = {
  /** 2–3 sentences: who you are, what drives you, where you're strong. */
  paragraphs: [
    "I'm a Product Manager who grew up on the operational side of complex, regulated industries — automotive manufacturing and tire production — before moving into digital product. That path taught me to respect process, data, and the people who actually do the work.",
    "I've owned product backlogs and roadmaps for data products, translating stakeholder needs into prioritized, shippable outcomes. I'm strongest where strategy meets delivery: aligning stakeholders, defining KPIs, and making sure the right thing gets built — and measured.",
  ],
  /** A short, human note that shows personality. */
  personalNote:
    "Outside of work I'm a dad of two daughters, husband, a half-marathon finisher, and a believer that personal well-being shows up directly in the quality of your work.",
} as const;

/* -------------------------------------------------------------------------- */
/*  5. SKILLS  (grouped — shown as tag cards, no progress bars)               */
/* -------------------------------------------------------------------------- */

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Product Strategy",
    icon: Map,
    skills: [
      "Product Vision",
      "Roadmapping",
      "Backlog Prioritization",
      "Discovery",
      "Product Features",
      "Market Analysis",
    ],
  },
  {
    title: "Delivery & Program Management",
    icon: Layers,
    skills: [
      "Agile / Scrum",
      "Large-Scale Scrum (LeSS)",
      "Leading Development",
      "Status & Planning",
      "Production Support",
    ],
  },
  {
    title: "Stakeholder Management",
    icon: Users,
    skills: [
      "Stakeholder Alignment",
      "Presenting Ideas",
      "Cross-team Communication",
      "Mentoring",
      "Facilitation",
    ],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: [
      "KPI Definition & Tracking",
      "Data Analysis",
      "Business Intelligence",
      "Tableau",
      "SQL",
      "Reporting",
      "Quality Metrics",
    ],
  },
  {
    title: "Quality & Compliance",
    icon: ShieldCheck,
    skills: [
      "Quality Planning",
      "Standards & Specifications",
      "Corrective Action Plans",
      "Verification",
      "Information Security",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Jira",
      "Confluence",
      "JellyFish",
      "Cursor",
      "GitHub",
      "AWS",
      "MES / LEPS",
      "Pact (Contract Testing)",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  6. EXPERIENCE  (timeline)                                                 */
/* -------------------------------------------------------------------------- */

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  /** Wrap key terms in **double asterisks** to emphasize them on the page. */
  points: string[];
  url?: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Better Collective",
    role: "Product Manager",
    period: "May 2025 — May 2026",
    location: "Hybrid",
    url: "https://www.linkedin.com/company/better-collective",
    points: [
      "Directed a complete **system overhaul** and **architectural transition** for **data scraping**, ensuring enhanced **modularity** and long-term maintainability.",
      "Orchestrated an **8× increase** in scraping speed by implementing high-performance methodologies, including **cURL** and direct **API integrations**.",
      "Led the development of a **highly scalable infrastructure** designed to support unlimited account expansion and rapid company growth.",
      "Built **API integrations** with business applications — including **Salesforce** — connecting the **data platform** to internal tools and establishing a **unified ecosystem** for company-wide development.",
      "Managed **cross-functional integrations** across teams and systems, ensuring seamless **data flow** and alignment with strategic **scalability** goals.",
      "Supervised the full **project lifecycle** of a modern **scraping engine**, aligning technical execution with strategic business scalability goals.",
    ],
  },
  {
    company: "Better Collective",
    role: "Product Owner — Data",
    period: "Oct 2022 — May 2025",
    location: "Hybrid",
    url: "https://www.linkedin.com/company/better-collective",
    points: [
      "Owned the **product backlog**, **roadmap**, and **vision** for **data products** — prioritizing work against **business value** and aligning **stakeholders** on strategic direction.",
      "Served as the primary **liaison** between **engineering**, **analytics**, and **business teams**, leading the development process from **discovery through delivery**.",
      "Translated **customer and stakeholder needs** into well-defined **product features**, presenting ideas and progress through regular status meetings and stakeholder updates.",
      "Identified improvement areas across the **data product portfolio** and drove initiatives to strengthen **delivery**, usability, and cross-team collaboration.",
      "Defined and tracked **KPIs** to measure product success, inform **backlog prioritization**, and demonstrate measurable impact to leadership.",
    ],
  },
  {
    company: "Michelin",
    role: "Process Quality Engineer",
    period: "Mar 2021 — Oct 2022",
    location: "Full-time",
    url: "https://www.linkedin.com/company/michelin",
    points: [
      "Owned **quality planning** for products, materials, processes, and methods — analyzing **production data** to raise standards and drive **continuous improvement**.",
      "Led **industrialization** of new products, establishing and implementing **obtention standards**, **verification plans**, and process parameters aligned with central and local **Michelin referentials**.",
      "Ensured **compliance** with obtention and verification standards across the floor — coordinating training updates and **customer/supplier specifications** with associated **quality indicators**.",
      "Implemented **quality tools** and methodologies (**problem resolution**, **uniformity**, **BPC**, **MTP**) advocated by MMW and the oversight entity.",
      "Analyzed **market quality results** — complaints, **nonconformities**, and pre/post-curing defects — to identify root causes and guide **corrective action plans** through implementation.",
      "Mentored **operators** and quality correspondents on **manufacturing standards**, improving consistency and enabling faster, more effective reactions to deviations.",
    ],
  },
  {
    company: "LEONI",
    role: "Senior MES Administrator",
    period: "Oct 2019 — Mar 2021",
    location: "Niš",
    url: "https://www.linkedin.com/company/leoni",
    points: [
      "Developed and continuously improved **LEPS production systems** based on client requirements — implementing, configuring, and maintaining the platform that powered **shop-floor operations**.",
      "Led and contributed to **LEPS projects** end to end, creating **IT solutions** that optimized **production throughput** and built reports on **productivity**, **efficiency**, and **first-time-right (RFT)** performance.",
      "Trained and supported junior **LEPS Administrators** and users — mentoring teams on system usage, **troubleshooting**, and day-to-day **production support**.",
      "Administered **user policies**, accounts, e-mail, and storage quotas — coordinating **IT resource access** and ensuring policies, procedures, and **work instructions** were understood and followed on the floor.",
      "Managed **database administration** and general IT troubleshooting, resolving issues quickly to minimize **production downtime**.",
    ],
  },
  {
    company: "LEONI",
    role: "MES Administrator",
    period: "Jun 2017 — Oct 2019",
    location: "Serbia",
    url: "https://www.linkedin.com/company/leoni",
    points: [
      "Administered the **LEONI Production System (LEPS)** — maintaining **servers**, client PCs, **databases**, and **WAN/LAN** network connections to keep **shop-floor operations** running without interruption.",
      "Monitored **system health** through regular checks and supervised **data backups**, preventing overload blockings and protecting **production-critical information**.",
      "Provided **1st-level support** for LEPS users on the shop floor and in the office — coordinating with process experts, LEONI 2nd level, MAR, and **external equipment suppliers** to resolve issues quickly.",
      "Analyzed and tested **local IT solutions** before production rollout, reporting findings to IM and preparing **purchasing orders** to keep IT equipment stocks current.",
      "Supported **full production operations** — monitoring processes and planning based on **client order characteristics** to align IT systems with **manufacturing demand**.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  7. PROJECTS / CASE STUDIES                                                */
/*                                                                            */
/*  Each project has a `slug` and gets its own page at /work/<slug>.          */
/*  The case study uses the Problem → Discovery → Solution → Impact →         */
/*  Learnings structure. Fill in real metrics where you see [PLACEHOLDER].    */
/* -------------------------------------------------------------------------- */

export interface CaseStudySection {
  heading: string;
  /** Each string becomes a paragraph or bullet. */
  body: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** One-line summary shown on the card. */
  summary: string;
  /** Company / context. */
  context: string;
  period: string;
  /** Short tags shown on the card. */
  tags: string[];
  /** Headline metrics shown on the case study page. */
  metrics?: { label: string; value: string }[];
  /** The structured case study. */
  problem: string[];
  discovery: string[];
  solution: string[];
  impact: string[];
  /** Trade-offs: what you chose NOT to do and why. */
  tradeoffs: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    slug: "metrify",
    title: "Metrify — Next-Generation Affiliate Data Scraping",
    summary:
      "Led product delivery of a next-generation scraping system to collect, process, and store affiliate account data at scale — replacing a slower, less reliable legacy setup.",
    context: "Better Collective",
    period: "May 2024 — May 2026",
    tags: ["Product Delivery", "Data Platform", "AWS", "Scalability"],
    metrics: [
      { label: "Scraping speed", value: "8× faster" },
      { label: "Data quality", value: "Significantly improved" },
      { label: "Architecture", value: "Modular & scalable" },
    ],
    problem: [
      "The business relied on a legacy scraping setup to collect affiliate account data — but it was slower, less reliable, and struggling to keep pace with growing data needs and partner complexity.",
      "Reporting, decision-making, and onboarding new affiliate sources all depended on data that was hard to trust and expensive to maintain operationally.",
    ],
    discovery: [
      "Mapped pain points across stakeholders: slow scrape cycles blocking timely reporting, data quality issues eroding confidence, and high manual effort when partners or requirements changed.",
      "Evaluated what the legacy architecture could not fix without a fundamental rethink — reliability, throughput, and adaptability all required a new approach.",
      "Aligned on success criteria: faster performance, better data accuracy, scalable storage, and a modular design that could onboard new affiliate sources quickly.",
    ],
    solution: [
      "Led the product delivery of Metrify — a next-generation scraping system designed to collect, process, and store affiliate account data at scale.",
      "Built on cURL-based requests and REST APIs for reliable data extraction, with RabbitMQ workers handling asynchronous, distributed processing.",
      "Used AWS S3 for scalable, durable data storage and designed a modular architecture so new affiliate sources could be onboarded fast as the business evolved.",
    ],
    impact: [
      "Delivered 8× faster scraping performance compared to the previous solution.",
      "Significantly improved data accuracy and data quality across affiliate account datasets.",
      "Created a highly scalable, easily adaptable platform that responds quickly to new business requirements and partner changes.",
      "Reduced operational overhead through automation and resilient processing — strengthening the data foundation for faster reporting, better decision-making, and a setup that scales with the business.",
    ],
    tradeoffs: [
      "Instead of patching the legacy scraping system, I chose a full rebuild — incremental fixes could not deliver 8× performance or the data quality the business needed.",
      "Instead of shipping the fastest possible MVP, I prioritized modular architecture and data accuracy first — so onboarding new affiliate partners would not require rework later.",
      "Instead of a simple monolithic setup, I invested in RabbitMQ and AWS S3 — accepting more complexity upfront in exchange for async processing, durability, and long-term scale.",
    ],
    learnings: [
      "Data infrastructure is a product decision — the architecture you ship directly determines how fast the business can report, decide, and adapt.",
      "Modularity is a competitive advantage when partners and requirements change frequently; designing for onboarding speed pays off quickly.",
      "Measurable impact (8× performance, improved quality, lower ops overhead) is what turns a technical migration into a business story stakeholders remember.",
    ],
  },
  {
    slug: "starcross-6",
    title: "Starcross 6 — New Tire Line Launch",
    summary:
      "Introduced a brand-new off-road motorcycle tire line into production, coordinating new compounds across quality and operations.",
    context: "Michelin",
    period: "May 2021 — Sep 2022",
    tags: ["Product Launch", "Quality", "Cross-functional"],
    metrics: [
      { label: "New product line", value: "Starcross 6" },
      { label: "Scope", value: "New compounds" },
      { label: "Defect rate", value: "< 2%" },
    ],
    problem: [
      "Michelin needed to bring a new off-road motorcycle tire line (Starcross 6) into production, built on entirely new rubber compounds.",
      "New compounds mean new failure modes: quality standards, verification plans and operator know-how all had to be defined before ramp-up.",
    ],
    discovery: [
      "Reviewed central and local quality referentials to understand which obtention standards applied to the new compounds.",
      "Analyzed early production samples (before and after curing) to identify the most likely defect categories.",
      "Worked with operators and process experts to surface where the new line differed from existing products.",
    ],
    solution: [
      "Established obtention standards, verification plans and local process parameters specific to the new compounds.",
      "Set up quality controls and corrective-action playbooks so deviations could be caught and resolved early.",
      "Mentored operators on the new manufacturing standards and the correct reaction when a deviation appears.",
    ],
    impact: [
      "The line reached stable production with quality standards defined and verified from day one.",
      "Maintained a defect rate under 2% through ramp-up and steady-state production — validating that the new compound standards and verification plans held under real volume.",
    ],
    tradeoffs: [
      "Prioritized getting verification plans right over maximizing early throughput — a slower ramp in exchange for fewer escaped defects.",
      "Chose to standardize and document operator procedures rather than rely on tribal knowledge, accepting more up-front effort for long-term consistency.",
    ],
    learnings: [
      "Quality is a product decision: the standards you define up front determine what customers experience later.",
      "Clear, written standards beat heroics — they scale across shifts and people in a way verbal instructions never do.",
    ],
  },
  {
    slug: "frontend-bmw-relocation",
    title: "Frontend — BMW Line Relocation & Ramp-up",
    summary:
      "Relocated a BMW front-bumper cable project across countries — three production lines moved, reconfigured, fully tested, and brought to full capacity.",
    context: "LEONI",
    period: "Jul 2018 — Sep 2020",
    tags: ["Program Delivery", "Systems", "Manufacturing"],
    metrics: [
      { label: "Lines relocated", value: "3" },
      { label: "Transfer downtime", value: "1 week" },
      { label: "Ramp-up to full capacity", value: "2 weeks" },
    ],
    problem: [
      "A BMW front-bumper (Frontend) project had to be relocated from Bistrița, Romania to the plant in Niš, Serbia.",
      "Three production lines needed to be moved, set up, and verified — without disrupting the customer's supply.",
    ],
    discovery: [
      "As part of the core team, mapped the process flow and every system dependency: applications, scanners, printers and configurations.",
      "Identified what had to be replicated exactly vs. what could be improved during the move.",
    ],
    solution: [
      "Owned process flow, application settings and device configuration (scanners, printers) for the relocated lines.",
      "Relocated all three lines, set them up in Niš, configured the systems and fully tested everything before start of production.",
    ],
    impact: [
      "All three lines went live and the project now runs at full capacity.",
      "Completed the transfer with one week of downtime, followed by a two-week ramp-up before reaching full production capacity.",
    ],
    tradeoffs: [
      "Invested heavily in full testing before go-live instead of a fast switch-over, trading speed for a clean, low-risk launch.",
      "Standardized device configuration across lines rather than per-line tweaks, accepting less local flexibility for easier maintenance.",
    ],
    learnings: [
      "A 'move' is really a re-launch: treating it as a project with clear acceptance criteria avoided nasty surprises at ramp-up.",
      "The boring details — scanner and printer configs — are exactly where production stoppages hide.",
    ],
  },
  {
    slug: "g2x-z4-supra",
    title: "G2X — BMW Z4 & Toyota Supra New Project",
    summary:
      "Stood up systems for a major new automotive program from day one: positioning lines, installing and configuring all production IT.",
    context: "LEONI",
    period: "Nov 2017 — Sep 2020",
    tags: ["0→1 Setup", "Systems", "Manufacturing"],
    metrics: [
      { label: "Customers", value: "BMW · Toyota" },
      { label: "Daily production", value: "300 harnesses" },
      { label: "Equivalent output", value: "~300 cars/day" },
    ],
    problem: [
      "G2X was a large new program (BMW Z4 and Toyota Supra) launching in the Niš plant with no existing setup to build on.",
      "Everything — line positioning, computers, printers, scanners — had to be installed and configured from scratch.",
    ],
    discovery: [
      "Joined from the very first day to understand the program's layout and system requirements.",
      "Worked through how the new lines would integrate with the LEPS production system.",
    ],
    solution: [
      "Positioned lines and installed & configured the full production IT stack (computers, printers, scanners).",
      "Iterated day to day as the project developed and grew, keeping systems stable as scope expanded.",
    ],
    impact: [
      "The project developed from an empty floor into a growing, scaled-up program.",
      "Reached steady-state daily production of 300 harnesses — equivalent to outfitting roughly 300 vehicles per day at full scale.",
    ],
    tradeoffs: [
      "Built for growth from the start (configurable, documented setup) rather than the quickest possible first install.",
      "Focused on system stability over chasing every optimization while scope was still expanding.",
    ],
    learnings: [
      "Being there from day one builds the context that makes every later decision faster and better.",
      "0→1 work rewards setting strong foundations: the structure you create early compounds as the program scales.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  8. ACHIEVEMENTS                                                           */
/* -------------------------------------------------------------------------- */

export interface Achievement {
  title: string;
  detail: string;
  /** Optional big stat shown in accent. */
  stat?: string;
}

export const achievements: Achievement[] = [
  {
    stat: "M.Sc.",
    title: "Master's Degree, Electrical & Electronics Engineering",
    detail:
      "Completed a Master's at the Faculty of Electronic Engineering, University of Niš — while raising a young family.",
  },
  {
    stat: "Fun fact",
    title: "All Three LOTR Extended Editions in One Day",
    detail:
      "Watched all three Lord of the Rings extended editions back-to-back in a single day.",
  },
  {
    stat: "Patent",
    title: "CIP Patent — Systematic Quality Fix (RS 1)",
    detail:
      "Designed a systematic improvement on the Frontend project that eliminated recurring cable complaints and saved the company significant cost.",
  },
  {
    stat: "21 km",
    title: "Half-Marathon Finisher",
    detail:
      "Set a personal bucket-list goal and finished a 21 km half marathon — a reminder that consistency beats intensity.",
  },
];

/* -------------------------------------------------------------------------- */
/*  9. NAVIGATION (section anchors)                                           */
/* -------------------------------------------------------------------------- */

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Achievements", href: "#achievements" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Contact", href: "#contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  10. RECOMMENDATIONS / TESTIMONIALS                                        */
/*                                                                            */
/*  Paste quotes from your recommendation letters below. Each entry is one    */
/*  card on the site. Keep quotes concise (2–4 sentences reads best).        */
/*  Remove any entry you don't use, or add more by copying the shape.         */
/*  With 2+ entries, quotes use a multi-column slider (same grid look as       */
/*  before: 1 / 2 / 3 cards). Arrows appear when more cards than fit.         */
/* -------------------------------------------------------------------------- */

export interface Recommendation {
  /** The recommendation quote (from their letter or LinkedIn). */
  quote: string;
  /** Who wrote it — full name. */
  author: string;
  /** Their job title when they worked with you. */
  role: string;
  /** Company / organization. */
  company: string;
  /** Optional context, e.g. "Former manager at Better Collective". */
  context?: string;
  /** Optional link to LinkedIn recommendation (not the PDF). */
  linkedinUrl?: string;
}

export const recommendations: Recommendation[] = [
  {
    quote:
      "Milos consistently demonstrated exceptional work, dedication, and performance as a Product Manager on a complex data product critical to monitoring revenue and driving business decisions. He is direct, easy-going, and communicates easily and effectively with everyone across the board — an ideal Product Manager for such a key project.",
    author: "Daniel Zahra",
    role: "Director of Delivery",
    company: "Better Collective",
    context: "Direct supervisor · Oct 2022 onward",
  },
  {
    quote:
      "Milos is one of the absolute best Product Owners I have ever partnered with — a dream collaborator with a keen sense of business context who grasps complex commercial goals almost instantly. He bridges the gap between business vision and execution with a rare ability to understand the development team's technical context deeply enough to propose constructive, viable technical solutions himself.",
    author: "Jacek Kubicki",
    role: "Head of Engineering",
    company: "Better Collective",
    context: "Engineering partner · Product Owner role",
  },
  {
    quote:
      "During his time at Better Collective, Milos consistently demonstrated exceptional performance, independence, and a proactive, solution-oriented mindset. He navigates complex product delivery life cycles with precision, acts as a positive force in the workplace, and is supportive, collaborative, and committed to delivering outstanding results.",
    author: "Human Resources",
    role: "HR Department",
    company: "Better Collective",
    context: "Official reference letter · Oct 2022 onward",
  },
];
