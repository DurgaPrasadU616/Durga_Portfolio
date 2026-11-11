export const Info = {
  name: "Ungarala Durga Prasad",
  firstName: "Durga Prasad",
  role: "Frontend Developer | Full Stack Developer | Generative AI Enthusiast",
  tagline: "Building meaningful digital experiences with modern web technologies and AI.",
  intro:
    "I'm a Computer Science Engineering student passionate about building responsive web applications and AI-powered solutions that solve real-world problems.",
  email: "durgaprasadu616@gmail.com",
  phone: "+91-9908537943",
  location: "Andhra Pradesh, India",
  resumeUrl: "/resume",
  githubUser: "DurgaPrasadU616",
  socials: {
    github: "https://github.com/DurgaPrasadU616",
    linkedin: "https://linkedin.com/in/durga-prasad-ungarala-aa0609295",
    hackerrank: "https://www.hackerrank.com/profile/durga_prasad_616",
    leetcode: "https://leetcode.com/",
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
    id: "programming",
    label: "Programming",
    icon: "braces",
    description: "Core languages used across my projects, coursework, and competitive programming practice.",
    usedIn: "All projects · HackerRank · NxtWave",
    items: ["Python", "JavaScript", "TypeScript", "C", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "layout",
    description: "Responsive, accessible interfaces built with React and modern styling frameworks.",
    usedIn: "RightLaw · CivicMind · This site",
    items: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "server",
    description: "REST APIs, server logic, and authentication behind the applications I build.",
    usedIn: "CivicMind · ShelfWise AI · API-driven features",
    items: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs"],
  },
  {
    id: "aiml",
    label: "AI & Machine Learning",
    icon: "brain",
    description: "Generative AI, retrieval pipelines, and computer vision applied to real-world problems.",
    usedIn: "RightLaw · ShelfWise AI",
    items: ["Generative AI", "RAG", "OpenCV", "TensorFlow", "PyTorch", "OCR", "Gemini API", "OpenAI API"],
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
  video: string;
  accentFrom: string;
  accentTo: string;
  accentSoft: string;
  icon: "kanban" | "vision" | "civic" | "law";
  layout: ProjectLayout;
};

export const projects: Project[] = [
  {
    id: "shelfwise",
    slug: "shelfwise-ai",
    name: "ShelfWise AI",
    category: "AI & Computer Vision",
    tags: ["AI", "Machine Learning", "Computer Vision", "Full Stack"],
    year: "2025",
    tagline:
      "AI-powered inventory monitoring system designed to detect shelf issues and support inventory management.",
    overview:
      "AI-powered inventory monitoring system designed to detect shelf issues and support inventory management.",
    problem:
      "Manual shelf checks are slow and inconsistent. Stock issues are often noticed late, and there is no reliable record of shelf conditions over time.",
    solution:
      "A computer-vision pipeline that analyses shelf images, flags stock issues, and presents the results in a simple dashboard for inventory management.",
    research: [
      "Profiled retail stock-check workflows to see where manual audits lose time.",
      "Tested OpenCV detections against real shelf photos with varied lighting and occlusion.",
      "Compared TensorFlow vs PyTorch for a lightweight, deployable detection loop.",
    ],
    challenges: [
      "Tuning vision models for inconsistent lighting, angles, and occlusion.",
      "Balancing prediction latency with a snappy dashboard experience.",
      "Designing an alert pipeline that is helpful, never noisy.",
    ],
    features: [
      "AI shelf detection",
      "Computer vision monitoring",
      "Low-stock alerts",
      "Inventory analytics dashboard",
      "Stock level tracking",
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "PyTorch", "FastAPI", "React"],
    architecture: [
      "Python vision layer (OpenCV + TensorFlow/PyTorch) for shelf frame analysis.",
      "FastAPI services exposed over a clean API to the React dashboard.",
      "Alerting and analytics layered on top of structured detections.",
    ],
    systemFlow: [
      "A camera or upload feeds frames into the vision pipeline.",
      "Detection yields per-product stock levels that are stored and timestamped.",
      "Low-stock detections trigger alerts; trends feed the analytics dashboard.",
    ],
    dbDesign: [
      "products, stock_events, alerts — with product_id references and timestamps.",
      "Analytics derived from the append-only stock_events table.",
    ],
    process: [
      "Prototyped detection on shelf imagery before investing in the dashboard.",
      "Pressed default outputs into a simple API contract first, UI second.",
      "Hardened the model loop with real-world edge cases (lighting, occlusion).",
    ],
    lessons: [
      "Vision models fail quietly — confidence thresholds and fallbacks matter more than accuracy.",
      "A crisp API contract turned a messy ML loop into an upgradeable black box.",
    ],
    future: [
      "Multi-camera fusion for full-aisle coverage.",
      "Stock-level forecasting to catch shortages before they happen.",
      "Retail-specific model fine-tuning for SKU recognition.",
    ],
    video: "",
    impact:
      "Detects shelf issues automatically and presents stock information in one place for easier inventory management.",
    impactPoints: [
      "Shelf images are analysed automatically instead of by manual inspection.",
      "Low-stock alerts flag issues as soon as they appear.",
      "A single dashboard keeps stock levels and shelf status visible.",
    ],
    metrics: [],
    statuses: [],
    demo: "https://shelf-wise-ai.vercel.app",
    github: "",
    accentFrom: "#8b5cf6",
    accentTo: "#c084fc",
    accentSoft: "#f3eaff",
    icon: "vision",
    layout: "split",
  },
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
      "Responsive UI",
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
    github: "https://github.com/DurgaPrasadU616",
    accentFrom: "#3b62e6",
    accentTo: "#7aa6ff",
    accentSoft: "#eef3ff",
    icon: "law",
    layout: "split-flip",
  },
  {
    id: "civic",
    slug: "civicmind",
    name: "CivicMind",
    category: "Smart Governance",
    tags: ["Full Stack", "Web App", "Hackathon"],
    year: "2025",
    tagline:
      "Civic issue reporting platform that helps users submit, track, and discuss local problems.",
    overview:
      "Civic issue reporting platform that helps users submit, track, and discuss local problems.",
    problem:
      "Local issues are usually reported through calls, forms, or social media, where they get lost. Citizens have no way to check the status of a report.",
    solution:
      "A simple reporting loop — users file an issue with media and location, and the platform tracks its status so progress stays visible.",
    research: [
      "Mapped how reports currently flow through calls, forms, and social posts, and where context is lost.",
      "Defined a state model every issue should move through, from filed to resolved.",
      "Listed the fields authorities need to act on a report.",
    ],
    challenges: [
      "Designing an intake model that authorities can act on.",
      "Keeping location and media uploads reliable on slow mobile connections.",
      "Keeping status transitions visible and consistent.",
    ],
    features: [
      "Issue reporting",
      "Media upload",
      "Location tagging",
      "Live status tracking",
      "Community voting",
      "Public comments",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Maps API"],
    architecture: [
      "Node.js + Express API with MongoDB for issue threads and reports.",
      "Maps API powers location tagging and proximity views.",
      "Status machine models every state an issue can move through.",
    ],
    systemFlow: [
      "Citizens file an issue with media, location, and category.",
      "The backend normalizes it into a status machine with a live public state.",
      "Community votes and comments feed the queue; authorities transition states.",
    ],
    dbDesign: [
      "issues, issue_media, votes, comments, status_history — with location geohash for proximity.",
      "Auditable status transitions recorded in status_history.",
    ],
    process: [
      "Mapped the reporting flow before building the interface.",
      "Started with a text-only report, added media and maps after the loop worked.",
      "Let the status model be the source of truth for the UI.",
    ],
    lessons: [
      "Every status change needs to be visible and explainable.",
      "Designing the data model first kept the two-sided flow consistent.",
    ],
    future: [
      "Authority dashboards with SLAs per issue category.",
      "Offline-capable reporting for low-connectivity areas.",
      "Sentiment and trend analytics across neighborhoods.",
    ],
    video: "",
    impact:
      "Gives users one place to submit local problems and track how they are being resolved.",
    impactPoints: [
      "Every issue carries a visible status from report to resolution.",
      "Community voting lets residents highlight important issues.",
      "Structured intake gives maintainers data they can route and respond to.",
    ],
    metrics: [],
    statuses: [],
    demo: "https://aicivilmind.vercel.app/",
    github: "",
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
    category: "Project Management",
    tags: ["Full Stack", "Web App", "Hackathon"],
    year: "2025",
    tagline:
      "Agile project management application for organizing tasks and tracking team progress.",
    overview:
      "Agile project management application for organizing tasks and tracking team progress.",
    problem:
      "Small teams often track work across sticky notes, spreadsheets, and chat threads. Planning becomes administrative work, and progress is hard to see.",
    solution:
      "A single workspace for sprint planning, a Kanban board, and activity tracking — so teams can plan tasks and follow progress without switching tools.",
    research: [
      "Listed how work is typically split across sticky notes, sheets, and chat before planning features.",
      "Noted the common annoyances for small teams: lost context and unclear progress.",
      "Scoped a single 'plan → execute → review' surface instead of ten overlapping tools.",
    ],
    challenges: [
      "Keeping board interactions instant while managing continuous drag-and-drop state.",
      "Designing a workflow model flexible enough for any team's process.",
      "Preserving context on mobile without burying sprint progress.",
    ],
    features: [
      "Agile sprint management",
      "Interactive Kanban board",
      "Custom task workflow",
      "Real-time activity tracking",
      "Team collaboration",
      "Mobile responsive UI",
    ],
    tech: ["React", "JavaScript", "HTML", "CSS", "REST APIs"],
    architecture: [
      "Component-driven React UI with a strict state boundary between board and task layer.",
      "REST API for tasks, sprints, and activity — kept deliberately thin.",
      "Optimistic UI updates with a local queue so drag-and-drop never feels laggy.",
    ],
    systemFlow: [
      "Teams configure a board from sprint templates or a blank canvas.",
      "Tasks move through a Kanban board with drag-and-drop; every move emits an activity event.",
      "Sprint progress rolls up into a live overview without a manual stand-up.",
    ],
    dbDesign: [
      "users, teams, boards, sprints, tasks, activities — with a task -> sprint foreign key.",
      "Activity feed stored append-only so history is never rewritten.",
    ],
    process: [
      "Mapped the sprint flow from planning to retrospective before writing UI code.",
      "Iterated the board interaction on real task data instead of lorem ipsum.",
      "Shipped the responsive pass last so mobile never compromised desktop depth.",
    ],
    lessons: [
      "Optimistic UI needs a reliable rollback path.",
      "A narrow, well-typed state boundary keeps drag-and-drop predictable.",
    ],
    future: [
      "Sprint analytics and burndown charts.",
      "Real-time presence so the whole team sees edits as they happen.",
      "Comments threaded into tasks.",
    ],
    video: "",
    impact:
      "Keeps sprint planning, task tracking, and team progress in a single, easy-to-use interface.",
    impactPoints: [
      "One surface for planning, executing, and reviewing sprints.",
      "Every task move is added to an activity feed.",
      "Works on desktop and mobile browsers.",
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
  { value: 4, suffix: "+", label: "Featured Projects", detail: "ShelfWise AI, RightLaw, CivicMind, Sprint Field Magic." },
  { value: 300, suffix: "+", label: "Coding Problems Solved", detail: "In Python and C across competitive platforms." },
  { value: 8.2, decimals: 1, label: "CGPA", detail: "B.Tech Computer Science & Engineering, 2023–2027." },
  { value: 2, label: "Hackathon Placements", detail: "Top 5 Idea to Impact · Top 15 RoboMela." },
];