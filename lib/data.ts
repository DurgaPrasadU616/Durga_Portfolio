export const Info = {
  name: "Ungarala Durga Prasad",
  firstName: "Durga Prasad",
  role: "Frontend & Full Stack Developer | Exploring Generative AI",
  tagline: "Building responsive web apps with React and Next.js, and AI-powered features with Gemini and RAG.",
  intro:
    "I build responsive web apps with React and Next.js, and AI-powered features with Gemini and RAG.",
  email: "durgaprasadu616@gmail.com",
  phone: "+91-9908537943",
  location: "Andhra Pradesh, India",
  resumeUrl: "/resume",
  githubUser: "DurgaPrasadU616",
  socials: {
    github: "https://github.com/DurgaPrasadU616",
    linkedin: "https://linkedin.com/in/durga-prasad-ungarala-aa0609295",
    hackerrank: "https://www.hackerrank.com/profile/durga_prasad_616",
  },
} as const;

export type SkillGroup = {
  id: string;
  label: string;
  icon: "layout" | "server" | "brain" | "database" | "cloud" | "wrench" | "braces";
  description: string;
  usedIn: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "layout",
    description: "Responsive, accessible interfaces built with React and modern styling frameworks.",
    usedIn: "RightLaw · CivicMind · This site",
    items: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "aiml",
    label: "AI & Machine Learning",
    icon: "brain",
    description: "Generative AI, RAG, embeddings and AI-powered features.",
    usedIn: "RightLaw · ShelfWise AI · CivicMind",
    items: [
      "Generative AI",
      "RAG",
      "Vector Embeddings",
      "pgvector",
      "Gemini API",
      "OpenAI API",
      "OCR",
    ],
  },
  {
    id: "programming",
    label: "Programming",
    icon: "braces",
    description: "Core languages used across my projects, coursework, and competitive programming practice.",
    usedIn: "All projects · HackerRank · NxtWave",
    items: ["Python", "JavaScript", "TypeScript", "C", "SQL"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "server",
    description: "REST APIs, server logic, and authentication behind the applications I build.",
    usedIn: "CivicMind · ShelfWise AI · Sprint Field Magic",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "database",
    label: "Databases",
    icon: "database",
    description: "Relational and NoSQL databases used for storing and querying application data.",
    usedIn: "RightLaw · CivicMind · ShelfWise AI",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    id: "tools",
    label: "Tools",
    icon: "wrench",
    description: "Version control and deployment tools used across every project.",
    usedIn: "Sprint Field Magic · All projects",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"],
  },
];

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectStatus = {
  label: string;
  tone: "blue" | "violet" | "emerald" | "amber" | "slate";
};

export type ProjectLayout = "split" | "half" | "split-flip";

export type Project = {
  id: string;
  slug: string;
  name: string;
  category: string;
  tags: string[];
  year: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  research: string[];
  challenges: string[];
  architecture: string[];
  systemFlow: string[];
  dbDesign: string[];
  process: string[];
  lessons: string[];
  future: string[];
  features: string[];
  tech: string[];
  impact: string;
  impactPoints: string[];
  metrics: ProjectMetric[];
  statuses: ProjectStatus[];
  demo: string;
  github: string;
  contribution?: string;
  video: string;
  accentFrom: string;
  accentTo: string;
  accentSoft: string;
  icon: "kanban" | "vision" | "civic" | "law";
  layout: ProjectLayout;
};

export const projects: Project[] = [
  {
    id: "rightlaw",
    slug: "rightlaw",
    name: "RightLaw",
    category: "Generative AI & LegalTech",
    tags: ["AI", "Machine Learning", "Full Stack", "Open Source"],
    year: "2025 – 2026",
    tagline:
      "AI-powered legal document analysis platform featuring OCR, document summaries, and source-referenced insights.",
    overview:
      "AI-powered legal document analysis platform featuring OCR, document summaries, and source-referenced insights.",
    problem:
      "Legal documents are long and dense. Finding the relevant sections, summaries, and references manually takes a lot of time.",
    solution:
      "RightLaw processes uploaded documents with OCR, generates structured summaries, and returns answers that point back to their source in the original document.",
    research: [
      "Spent time with legal workflows: judgments are long, precedents matter, citations are everything.",
      "Benchmarked summarization vs extraction approaches on real case documents.",
      "Prototyped a retrieval pipeline that keeps every claim traceable to its source paragraph.",
    ],
    challenges: [
      "Making LLM output trustworthy by tying every claim to a source reference.",
      "Handling noisy scanned PDFs with reliable OCR before analysis.",
      "Keeping retrieval fast and accurate over long legal documents.",
    ],
    features: [
      "AI document analysis",
      "OCR support",
      "Legal clause extraction",
      "IRAC summary",
      "Search & filtering",
    ],
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Gemini API",
      "Tesseract OCR",
      "Chroma",
    ],
    architecture: [
      "Next.js app shell with Supabase (PostgreSQL) for accounts and doc records.",
      "OCR (Tesseract) normalizes scans before they enter the retrieval pipeline.",
      "Gemini API drives document summaries and clause extraction with source references.",
      "Chroma vector store powers semantic search and filtering over document chunks.",
    ],
    systemFlow: [
      "User uploads a PDF; Tesseract extracts text when needed.",
      "The doc is chunked and embedded into Chroma with source offsets.",
      "LLM passes produce IRAC summaries and clause extractions, each cited to source.",
      "Semantic search hits the vector index and returns ranked, referenced excerpts.",
    ],
    dbDesign: [
      "users, documents, chunks, citations — chunks reference document + page range.",
      "Vector embeddings in Chroma; relational metadata in PostgreSQL via Supabase.",
    ],
    process: [
      "Started with the retrieval question — source-anchored answers — not the UI.",
      "Prototyped insight generation before polishing the document upload flow.",
      "Iterated on reference fidelity until every summary point traced to a source.",
    ],
    lessons: [
      "LLM output is only as trustworthy as its grounding — citations turned summaries into answers.",
      "OCR quality gates everything downstream; garbage in is garbage out.",
      "A boring, well-refined pipeline beats a clever, unreliable one.",
    ],
    future: [
      "Citation-aware chat dialogue over documents.",
      "Fine-tuned legal summarization and precedent finding.",
      "Team workspaces with role-based access.",
    ],
    video: "",
    impact:
      "Makes legal documents easier to understand by converting them into summaries and source-referenced insights.",
    impactPoints: [
      "Document summaries shorten long judgments into readable points.",
      "Every insight points back to its source in the original document.",
      "OCR support handles scanned and printed case files.",
    ],
    metrics: [],
    statuses: [{ label: "Open Source", tone: "amber" }],
    demo: "",
    github: "",
    accentFrom: "#3b62e6",
    accentTo: "#7aa6ff",
    accentSoft: "#eef3ff",
    icon: "law",
    layout: "split-flip",
  },
  {
    id: "shelfwise",
    slug: "shelfwise-ai",
    name: "ShelfWise AI",
    category: "AI & Retail Tech",
    tags: ["AI", "Machine Learning", "Full Stack", "Retail Tech"],
    year: "2025",
    tagline:
      "Smart inventory and expiry-loss prediction platform that tracks stock, predicts expiry risk, and supports purchase decisions with Gemini-powered recommendations and an OCR invoice pipeline.",
    overview:
      "Smart inventory and expiry-loss prediction platform that tracks stock, predicts expiry risk, and supports purchase decisions with Gemini-powered recommendations and an OCR invoice pipeline.",
    problem:
      "Manual inventory tracking and paper invoices make monitoring expiry dates slow and error-prone, leading to stockouts and avoidable expiry losses.",
    solution:
      "An automated inventory platform combining OCR invoice ingestion, automated expiry-risk prediction, and Gemini-powered recommendations for inventory managers.",
    research: [
      "Profiled retail inventory workflows to identify where manual audits and paper invoices cause delays.",
      "Evaluated Tesseract OCR pipeline accuracy across varied invoice image and PDF layouts.",
      "Designed Gemini prompt strategies with rule-based fallbacks for reliable purchase recommendations.",
    ],
    challenges: [
      "Normalizing unstructured invoice scans and receipts into reliable structured inventory data.",
      "Calculating rolling expiry-loss predictions and priority alerts across diverse product catalogs.",
      "Designing an alert and recommendation loop that remains dependable during API downtime.",
    ],
    features: [
      "Smart inventory tracking",
      "Expiry loss prediction",
      "Gemini business recommendations",
      "OCR invoice pipeline",
      "Automated purchase orders",
      "Inventory analytics dashboard",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Gemini API", "OCR", "Tailwind CSS"],
    architecture: [
      "React 19 single-page dashboard with Tailwind CSS and Recharts for live stock metrics.",
      "Node.js & Express REST API with MongoDB (Mongoose) for inventory and audit logging.",
      "Tesseract.js OCR engine paired with Gemini API for automated invoice data extraction.",
      "Scheduled cron jobs calculating expiry risk and projected value loss.",
    ],
    systemFlow: [
      "Users upload invoices or receipts in PDF or image format to the OCR pipeline.",
      "Tesseract and Gemini parse line items and batch expiration dates into MongoDB.",
      "Background jobs calculate expiry risk scores and prompt restocking recommendations.",
    ],
    dbDesign: [
      "products, inventory, sales, suppliers, audit_logs — with indexed expiry dates in MongoDB.",
      "Analytics and loss projections derived from historical inventory transitions.",
    ],
    process: [
      "Built the core inventory and batch expiration schema before developing OCR ingestion.",
      "Implemented deterministic rule-based fallbacks for AI recommendations.",
      "Optimized invoice parsing workflows to allow review before database commit.",
    ],
    lessons: [
      "Combining LLM recommendations with deterministic fallback rules guarantees system availability even during API downtime.",
      "A structured review step for OCR extractions prevents bad data from corrupting inventory.",
    ],
    future: [
      "Barcode and QR code scanning support for mobile warehouse operations.",
      "Supplier EDI integrations for automated order dispatching.",
      "Predictive demand forecasting based on seasonal sales patterns.",
    ],
    video: "",
    impact:
      "Helps retailers track stock levels, predict expiration risks before losses occur, and streamline restocking decisions.",
    impactPoints: [
      "Invoices are parsed automatically into inventory records using OCR and Gemini.",
      "Automated expiry predictions flag at-risk stock before financial loss occurs.",
      "A central dashboard provides real-time stock levels, trends, and reordering alerts.",
    ],
    metrics: [],
    statuses: [],
    demo: "https://shelf-wise-ai.vercel.app",
    github: "https://github.com/DurgaPrasadU616/ShelfWise-AI",
    accentFrom: "#8b5cf6",
    accentTo: "#c084fc",
    accentSoft: "#f3eaff",
    icon: "vision",
    layout: "split",
  },
  {
    id: "civic",
    slug: "civicmind",
    name: "CivicMind",
    category: "Smart Governance",
    tags: ["Full Stack", "Web App", "Smart Governance", "AI"],
    year: "2025",
    tagline:
      "AI platform that ingests citizen complaints, reports, surveys, and NGO/news data, clusters similar issues with vector embeddings, scores severity, and generates LLM-powered recommended actions in a real-time dashboard.",
    overview:
      "AI platform that ingests citizen complaints, reports, surveys, and NGO/news data, clusters similar issues with vector embeddings, scores severity, and generates LLM-powered recommended actions in a real-time dashboard.",
    problem:
      "Citizen complaints, civic reports, and community signals arrive across scattered channels, causing delayed municipal responses and a lack of clear issue prioritization.",
    solution:
      "A unified civic intelligence platform using Gemini vector embeddings and pgvector clustering to group duplicate reports, score severity, and generate actionable resolution plans.",
    research: [
      "Mapped citizen reporting bottlenecks and response latencies across municipal intake channels.",
      "Benchmarked pgvector cosine distance clustering against traditional keyword matching.",
      "Designed multi-variable severity scoring formulas combining volume, growth rate, and population impact.",
    ],
    challenges: [
      "Clustering semantically similar complaints arriving in varied phrasing into unified issues.",
      "Computing real-time priority scores with urgency decay floors across high volumes of reports.",
      "Providing reliable LLM action recommendations with deterministic rule-based fallbacks.",
    ],
    features: [
      "Multi-channel complaint ingestion",
      "Semantic vector clustering (pgvector)",
      "Deterministic severity scoring",
      "LLM-powered action plans",
      "Municipal analytics dashboard",
      "Lifecycle status tracking",
    ],
    tech: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "Gemini API", "Tailwind CSS"],
    architecture: [
      "Next.js App Router frontend with responsive dashboard views and analytics charts.",
      "Node.js & Express backend API with strict Zod schema validation.",
      "PostgreSQL database with pgvector extension for relational storage and cosine distance search.",
      "Google Gemini text-embedding-004 for embeddings and gemini-2.0-flash for recommended actions.",
    ],
    systemFlow: [
      "Citizen reports and multi-channel signals are normalized and validated upon intake.",
      "Gemini generates vector embeddings matched against active clusters in pgvector.",
      "Issues are scored by severity and urgency decay, triggering automated action plans on the dashboard.",
    ],
    dbDesign: [
      "Relational tables in PostgreSQL: source, complaint, cluster, recommended_action, ingestion_log.",
      "pgvector vector index on complaint.embedding using cosine distance (<=>) search.",
    ],
    process: [
      "Designed the relational and vector schema in PostgreSQL before building intake APIs.",
      "Tuned clustering thresholds to group duplicate complaints accurately without over-merging.",
      "Implemented deterministic rule-based fallbacks for action recommendations during API errors.",
    ],
    lessons: [
      "Embedding vector search directly inside PostgreSQL via pgvector eliminated dual-database synchronization complexity.",
      "Urgency decay floors prevent critical long-standing issues from being buried by newer reports.",
    ],
    future: [
      "Dedicated background worker queues (BullMQ) for continuous priority score recalculation.",
      "Historical trend forecasting for municipal resource and budget planning.",
      "Native mobile reporting application for field workers and citizens.",
    ],
    video: "",
    impact:
      "Transforms unstructured citizen complaints into prioritized, clustered issues with actionable resolution plans for local governance.",
    impactPoints: [
      "Semantic vector clustering groups duplicate complaints into single actionable issues.",
      "Objective severity formulas prioritize urgent civic problems before they escalate.",
      "Gemini generates contextual action steps with deterministic fallback recovery.",
    ],
    metrics: [],
    statuses: [],
    demo: "https://aicivilmind.vercel.app/",
    github: "https://github.com/DurgaPrasadU616/CivicMind",
    accentFrom: "#0ea5e9",
    accentTo: "#67e8f9",
    accentSoft: "#e0f6ff",
    icon: "civic",
    layout: "half",
  },
  {
    id: "sprint",
    slug: "sprint-field-magic",
    name: "Sprint Field Magic",
    category: "Construction Tech",
    tags: ["Full Stack", "Web App", "Construction Tech"],
    year: "2025",
    tagline:
      "Helps construction teams manage projects, tasks, and location-based daily updates in one place.",
    overview:
      "Helps construction teams manage projects, tasks, and location-based daily updates in one place.",
    contribution: "Applied a routine security update to the app's packages.",
    problem:
      "Construction teams often track job-site progress across scattered text messages and paper logs, making task coordination and daily updates difficult to maintain.",
    solution:
      "A centralized construction management platform for organizing job sites, tasks, and location-based daily updates in a single workspace.",
    research: [
      "Cataloged how job-site daily logs and contractor tasks are commonly scattered across messaging and sheets.",
      "Identified primary pain points: lost site context, missing location tags, and delayed updates.",
      "Scoped a unified site dashboard for daily work logs and task progress.",
    ],
    challenges: [
      "Keeping board interactions instant while managing continuous drag-and-drop state.",
      "Designing a workflow model flexible enough for job-site task tracking.",
      "Preserving context on mobile browsers without burying site progress.",
    ],
    features: [
      "Project & site tracking",
      "Interactive task board",
      "Location-based daily updates",
      "Real-time activity tracking",
      "Team collaboration",
      "Mobile responsive UI",
    ],
    tech: ["React", "JavaScript", "HTML", "CSS", "REST APIs"],
    architecture: [
      "Component-driven React UI with a strict state boundary between board and task layer.",
      "REST API for tasks, daily updates, and activity tracking.",
      "Optimistic UI updates with a local queue so updates never feel laggy on site.",
    ],
    systemFlow: [
      "Teams configure projects from site templates or a custom workspace.",
      "Tasks move through interactive stages; every change logs an activity event.",
      "Job-site progress rolls up into a live daily overview without manual status calls.",
    ],
    dbDesign: [
      "users, teams, projects, tasks, daily_updates, activities — with project references.",
      "Activity feed stored append-only so site history is never rewritten.",
    ],
    process: [
      "Mapped the field task workflow from site planning to daily log sign-off before writing UI code.",
      "Iterated the board interaction on realistic task data instead of placeholders.",
      "Shipped responsive mobile support so field workers can update status on site.",
    ],
    lessons: [
      "Optimistic UI needs a reliable rollback path.",
      "A narrow, well-typed state boundary keeps drag-and-drop predictable.",
    ],
    future: [
      "Site photo attachments and geo-verified check-ins.",
      "Offline log syncing for low-connectivity construction zones.",
      "Automated PDF export for daily progress reports.",
    ],
    video: "",
    impact:
      "Keeps project planning, site tasks, and location-based daily updates in a single, accessible interface.",
    impactPoints: [
      "Centralizes construction tasks and daily logs in one workspace.",
      "Tracks field activity and site status in real time.",
      "Works seamlessly across desktop and mobile browsers on site.",
    ],
    metrics: [],
    statuses: [],
    demo: "https://sprint-field-magic.lovable.app/",
    github: "",
    accentFrom: "#4f7cff",
    accentTo: "#8fb4ff",
    accentSoft: "#e8efff",
    icon: "kanban",
    layout: "half",
  },
];

export type Achievement = {
  title: string;
  detail: string;
  meta: string;
  icon: "code" | "award" | "book" | "trophy" | "sparkles" | "medal";
};

export const achievements: Achievement[] = [
  {
    title: "Top 5 — Idea to Impact Hackathon",
    detail: "Ranked in the Top 5 at the NxtWave CCBP 4.0 Academy Idea to Impact Hackathon.",
    meta: "Hackathon",
    icon: "trophy",
  },
  {
    title: "Top 15 — RoboMela Hackathon",
    detail: "Secured a Top 15 finish at the RoboMela Hackathon.",
    meta: "Hackathon",
    icon: "award",
  },
  {
    title: "300+ coding problems solved",
    detail: "Solved 300+ coding problems using Python and C.",
    meta: "Competitive Programming",
    icon: "code",
  },
];

export type Stat = {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  detail: string;
};

export const stats: Stat[] = [
  { value: 8.2, decimals: 1, label: "CGPA", detail: "B.Tech Computer Science & Engineering, 2023–2027." },
  { value: 300, suffix: "+", label: "Problems Solved", detail: "In Python and C across competitive platforms." },
  { value: 2, label: "Hackathon Placements", detail: "Top 5 Idea to Impact · Top 15 RoboMela." },
  { value: 4, label: "Featured Projects", detail: "RightLaw, ShelfWise AI, CivicMind, Sprint Field Magic." },
];