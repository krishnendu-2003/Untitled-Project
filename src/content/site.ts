// All editable copy, prices and links live here.
// Prices are placeholders: replace every `price` value with the real amount.

export const site = {
  name: "Untitled Project",
  tagline: "Send the docs and context files your team already has. We turn them into finished videos.",
  email: "hello@untitledproject.studio",
  // Paste your Calendly event link here to swap the built-in scheduler for your live Calendly.
  // Example: "https://calendly.com/untitled-project/discovery-call"
  bookingUrl: "",
  currency: "₹",
};

// Built-in scheduler shown until `site.bookingUrl` is set.
export const booking = {
  host: "Untitled Project",
  title: "Discovery call",
  durationMinutes: 30,
  location: "Google Meet link sent after booking",
  description: "Walk us through the project and share any context files. We will recommend a plan and send a fixed quote.",
  timezone: "India Standard Time (IST)",
  daysAhead: 30,
  // 0 = Sunday ... 6 = Saturday
  workDays: [1, 2, 3, 4, 5],
  slots: ["10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"],
};

export const nav = [
  { label: "Why us", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// The core pitch: you own the context, we own the production.
export const whyUs = {
  yourself: [
    "Your team learns video tools and prompting",
    "Your tokens burn on retries and failed generations",
    "Your hours go into editing, fixing and re-rendering",
    "Your roadmap slows while people babysit video",
  ],
  withUs: [
    "You hand over the context file you already have",
    "We carry the token cost and the retries",
    "We do the manual work: scripting, editing, fixing",
    "You get a finished video to approve",
  ],
  points: [
    { title: "Save tokens", body: "Generating video yourself means paying for every draft and dead end. With us, that cost is ours." },
    { title: "Save time", body: "No prompt engineering, no tool learning curve. Your team keeps building the product." },
    { title: "Skip the labor", body: "Scripts, edits, re-renders and fixes happen on our side. You review the result." },
  ],
};

export type Service = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  tone: "lavender" | "sage" | "peach";
};

export const services: Service[] = [
  {
    id: "agentic",
    kicker: "01 · AI-native",
    title: "Agentic video creation",
    body: "Send us your project docs and context files. Our agents turn them into finished videos, and a human editor signs off every frame. You never write a prompt.",
    points: [
      "Script and hook variations generated per platform",
      "AI avatars, voiceovers and b-roll on demand",
      "Batch output for Reels, Shorts and ads",
      "Human QA and brand-safety review on every cut",
    ],
    tone: "lavender",
  },
  {
    id: "shoot",
    kicker: "02 · On set",
    title: "In-person video shoots",
    body: "A lean crew at your office, store or location, capturing founders, products and teams the way they actually look and sound.",
    points: [
      "Pre-production, shot lists and location scouting",
      "Director, camera, lighting and sound",
      "Founder and talking-head interviews",
      "Product, event and behind-the-scenes coverage",
    ],
    tone: "sage",
  },
  {
    id: "production",
    kicker: "03 · Post",
    title: "Video production",
    body: "End-to-end post-production that turns raw footage into finished pieces: edited, graded, captioned and ready to publish.",
    points: [
      "Editing, colour grading and sound design",
      "Motion graphics and captions",
      "Cut-downs for every platform and aspect ratio",
      "Brand films, launches and explainers",
    ],
    tone: "peach",
  },
];

export type Reference = {
  category: "Agentic video" | "In-person shoot" | "Production";
  title: string;
  client: string;
  // Replace with a YouTube / Vimeo / Instagram link or a path under /public.
  href: string;
  tone: "lavender" | "sage" | "peach" | "ink";
};

// Placeholder references. Swap in real projects, links and thumbnails.
export const references: Reference[] = [
  { category: "Agentic video", title: "30 ad variants in 48 hours", client: "Client name", href: "#", tone: "lavender" },
  { category: "In-person shoot", title: "Founder story, shot on location", client: "Client name", href: "#", tone: "sage" },
  { category: "Production", title: "Product launch film", client: "Client name", href: "#", tone: "peach" },
  { category: "Agentic video", title: "AI avatar explainer series", client: "Client name", href: "#", tone: "ink" },
  { category: "In-person shoot", title: "Team culture day", client: "Client name", href: "#", tone: "peach" },
  { category: "Production", title: "Podcast to Shorts pipeline", client: "Client name", href: "#", tone: "lavender" },
];

export const process = [
  { step: "01", title: "Hand over context", body: "Book a call and share your project docs, context files or brief. That is all we need." },
  { step: "02", title: "Plan", body: "We send a treatment, script direction and a fixed quote with your revision allowance." },
  { step: "03", title: "Create", body: "Agents, crew or both get to work. You see a first cut, not a status update." },
  { step: "04", title: "Revise and ship", body: "Use your revision rounds, approve, and get every export you need." },
];

export type Plan = {
  name: string;
  price: string; // placeholder, edit manually
  cadence: string;
  blurb: string;
  revisions: string; // number of revision rounds
  changesPerRevision: string; // changes allowed inside each round
  features: string[];
  featured?: boolean;
};

// Pricing is driven by revisions: each plan includes N revision rounds,
// and each round covers up to X individual changes.
export const plans: Plan[] = [
  {
    name: "Draft",
    price: "XX,XXX",
    cadence: "per video",
    blurb: "One focused piece with room for a round of polish.",
    revisions: "1",
    changesPerRevision: "5",
    features: ["Up to 60 second video", "One format and aspect ratio", "Captions included", "Delivery in 7 working days"],
  },
  {
    name: "Studio",
    price: "XX,XXX",
    cadence: "per video",
    blurb: "Our most booked plan for launches and campaigns.",
    revisions: "3",
    changesPerRevision: "10",
    features: ["Up to 3 minute video", "3 platform cut-downs", "Motion graphics and grade", "Delivery in 10 working days"],
    featured: true,
  },
  {
    name: "Signature",
    price: "X,XX,XXX",
    cadence: "per project",
    blurb: "Shoot plus production plus agentic variants, end to end.",
    revisions: "5",
    changesPerRevision: "15",
    features: ["Half-day in-person shoot", "Hero film plus 10 short-form cuts", "AI-generated ad variants", "Dedicated producer"],
  },
];

export const extraRevision = {
  price: "X,XXX",
  note: "Need more? Each additional revision round is billed separately.",
};

export const faqs = [
  {
    q: "What counts as a revision?",
    a: "A revision is one round of consolidated feedback on a cut. Each round covers the number of individual changes listed in your plan, such as a text edit, a trim, a music swap or a colour tweak.",
  },
  {
    q: "What counts as a change?",
    a: "One discrete edit to the video. Rewriting the script or re-shooting after approval is scoped as new work, not a change.",
  },
  {
    q: "Is agentic video fully AI?",
    a: "No. Agents handle scripting, generation and first cuts at speed, and a human editor reviews and finishes every piece before it reaches you.",
  },
  {
    q: "Where do you shoot?",
    a: "Anywhere you need us. Travel outside the city is quoted separately.",
  },
  {
    q: "How do I get started?",
    a: "Book a call below. We will scope the project, recommend a plan and send a fixed quote.",
  },
];
