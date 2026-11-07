export const Info = {
  name: "Ungarala Durga Prasad",
  firstName: "Durga Prasad",
  role: "Frontend & Full Stack Developer",
  tagline: "Building meaningful digital experiences with modern web technologies and AI.",
  intro:
    "I'm a Computer Science student passionate about building responsive web applications and AI-powered solutions that solve real-world problems.",
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
  experience: string;
  description: string;
  usedIn: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    label: "Programming",
    icon: "braces",
    experience: "Strong",
    description: "Core languages that underpin everything I build — from algorithms to APIs.",
    usedIn: "All projects · HackerRank · NxtWave",
    items: ["Python", "JavaScript", "TypeScript", "C", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "layout",
    experience: "Advanced",
    description: "Pixel-faithful interfaces, motion and design systems that feel deliberate.",
    usedIn: "RightLaw · CivicMind · This site",
    items: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "server",
    experience: "Growing",
    description: "Well-shaped REST APIs, auth, and server logic behind the products I ship.",
    usedIn: "CivicMind · ShelfWise AI · API-driven features",
    items: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs"],
  },
  {
    id: "aiml",
    label: "AI / ML",
    icon: "brain",
    experience: "Hands-on",
    description: "Retrieval, agents and computer vision that turn unstructured content into insight.",
    usedIn: "RightLaw · ShelfWise AI",
    items: ["Generative AI", "RAG", "OpenCV", "TensorFlow", "PyTorch", "OCR", "Gemini API", "OpenAI API"],
  },
  {
    id: "database",
    label: "Databases",
    icon: "database",
    experience: "Working",
    description: "Schemas and queries that scale cleanly with the product.",
    usedIn: "RightLaw · CivicMind · ShelfWise AI",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    icon: "wrench",
    experience: "Daily driver",
    description: "The everyday kit that keeps the workflow tight and deployments clean.",
    usedIn: "Sprint Field Magic · All projects",
    items: ["Git", "GitHub", "VS Code", "REST APIs", "Vercel", "Netlify"],
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
    category: "AI + Computer Vision",
    tags: ["AI", "Machine Learning", "Computer Vision", "Full Stack"],
    year: "2025",
    tagline:
      "An AI-powered inventory intelligence platform that automates retail shelf monitoring and stock management.",
    overview:
      "Developed an intelligent inventory management platform that combines AI and computer vision to monitor shelves, detect stock shortages, and optimize product placement.",
    problem:
      "Manual shelf audits are slow, error-prone, and expensive. Empty shelves go unnoticed, stockouts damage sales, and product placement is never backed by data.",
    solution:
      "A computer-vision pipeline that watches shelf conditions continuously, flags low-stock in real time, and surfaces placement insights through a single analytics dashboard.",
    research: [
      "Profiled retail stock-check workflows to quantify how much time manual audits consume.",
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
      "Product placement optimization",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "FastAPI", "Flask", "React"],
    architecture: [
      "Python vision layer (OpenCV + TensorFlow/PyTorch) for shelf frame analysis.",
      "FastAPI/Flask services exposed over a clean API to the React dashboard.",
      "Alerting and analytics layered on top of structured detections.",
    ],
    systemFlow: [
      "A camera or upload feeds frames into the vision pipeline.",
      "Detection yields per-product stock levels that are stored and timestamped.",
      "Low-stock detections trigger alerts; trends feed the placement dashboard.",
    ],
    dbDesign: [
      "products, stock_events, alerts, placements — with product_id references and timestamps.",
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
      "Reduced manual inventory auditing and improved stock visibility through intelligent automation.",
    impactPoints: [
      "Continuous shelf monitoring removes routine manual walkthroughs.",
      "Low-stock alerts catch shortages before they reach the customer.",
      "Placement analytics turn gut-feel shelving into data-driven choices.",
    ],
    metrics: [
      { value: "80%", label: "faster stock auditing" },
      { value: "24/7", label: "shelf monitoring" },
      { value: "1", label: "unified analytics view" },
    ],
    statuses: [
      { label: "AI Powered", tone: "violet" },
      { label: "Completed", tone: "emerald" },
      { label: "Responsive", tone: "blue" },
    ],
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
    category: "LegalTech",
    tags: ["AI", "Machine Learning", "Full Stack", "Open Source"],
    year: "2025 – 2026",
    tagline:
      "An AI-powered legal document intelligence platform that simplifies legal research and document analysis.",
    overview:
      "Developed a legal technology platform that helps users understand legal documents using AI-generated summaries, structured analysis, and intelligent document search.",
    problem:
      "Lawyers and students spend hours scanning dense judgments for the sections, precedents, and arguments that matter. Key insight stays buried in unstructured legal prose.",
    solution:
      "RightLaw turns uploaded documents into structured intelligence — IRAC summaries, clause extraction, OCR, and source-referenced search — so complex text becomes readable insight.",
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
      "OpenAI API",
      "Tesseract OCR",
      "Chroma Vector Database",
    ],
    architecture: [
      "Next.js app shell with Supabase (PostgreSQL) for accounts and doc records.",
      "OCR (Tesseract) normalizes scans before they enter the retrieval pipeline.",
      "Gemini/OpenAI drive IRAC summaries and clause extraction with source references.",
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
      "Made legal documents easier to understand for lawyers, students, and everyday users by transforming complex legal text into structured insights.",
    impactPoints: [
      "IRAC summaries compress hours of reading into structured, readable insight.",
      "Source-referenced citations keep AI reasoning auditable and trustworthy.",
      "One-click OCR + analysis opens up scanned and printed case files.",
    ],
    metrics: [
      { value: "1-click", label: "OCR + analysis workflow" },
      { value: "AI", label: "structured legal insights" },
      { value: "100%", label: "source-referenced citations" },
    ],
    statuses: [
      { label: "AI Powered", tone: "violet" },
      { label: "Open Source", tone: "amber" },
      { label: "Completed", tone: "emerald" },
      { label: "Responsive", tone: "blue" },
    ],
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
      "A civic engagement platform connecting citizens with local governments through transparent issue reporting and tracking.",
    overview:
      "Built a digital civic platform where citizens can report public issues, monitor resolution progress, and engage with local governance.",
    problem:
      "Public issues get lost between phone calls, forms, and social media. Citizens never know who is acting on their report, and authorities lack a structured intake pipeline.",
    solution:
      "A transparent reporting loop — citizens file an issue with media and location, the platform tracks status live, and the community votes and comments to keep momentum visible.",
    research: [
      "Interviewed both sides — citizens and local authorities — to see how reports actually flow.",
      "Mapped the current tools: calls, forms, and social posts that each lose context.",
      "Derived a state model every issue should traverse, from filed to resolved.",
    ],
    challenges: [
      "Designing an intake model authorities can actually act on, not just admire.",
      "Keeping location and media uploads reliable on slow mobile connections.",
      "Building trust through honest, always-visible status transitions.",
    ],
    features: [
      "Issue reporting",
      "Media upload",
      "Location tagging",
      "Live status tracking",
      "Community voting",
      "Public comments",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Maps API"],
    architecture: [
      "Node.js + Express API with MongoDB for issue threads and PostgreSQL for structured civic records.",
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
      "Interviewed the flow from both sides — citizen and authority — before building.",
      "Started with a text-only report, added media and maps after the loop worked.",
      "Let the status model be the source of truth for the whole UI.",
    ],
    lessons: [
      "Trust is a feature: every status change must be visible and explainable.",
      "Designing the data model first kept the two-sided flow honest.",
    ],
    future: [
      "Authority dashboards with SLAs per issue category.",
      "Offline-capable reporting for low-connectivity areas.",
      "Sentiment and trend analytics across neighborhoods.",
    ],
    video: "",
    impact:
      "Improved communication between citizens and local authorities while increasing transparency in issue resolution.",
    impactPoints: [
      "Every issue carries a visible, honest status from report to resolution.",
      "Community voting keeps high-impact problems near the top of the queue.",
      "Structured intake gives authorities data they can route and respond to.",
    ],
    metrics: [
      { value: "Live", label: "status on every issue" },
      { value: "100%", label: "issues documented" },
      { value: "2-way", label: "citizen–authority loop" },
    ],
    statuses: [
      { label: "Completed", tone: "emerald" },
      { label: "Responsive", tone: "blue" },
    ],
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
      "A high-efficiency agile project management platform that streamlines sprint planning, task tracking, and real-time team collaboration.",
    overview:
      "Built an intuitive project management application that helps teams organize tasks, manage sprint workflows, and monitor progress through a clean, responsive interface.",
    problem:
      "Agile teams drown in fragmented tools — sticky notes, spreadsheets, and chat threads. Sprint planning becomes admin work instead of execution, and progress is invisible until stand-up.",
    solution:
      "A distraction-free workspace that centralizes sprint planning, Kanban flow, and real-time activity into one calm surface — so teams can plan, ship, and stay aligned without tool hopping.",
    research: [
      "Studied how agile teams fragment across sticky notes, sheets, and chat before planning a feature.",
      "Interviewed small-team habits to pin the sharpest annoyances: lost context and invisible progress.",
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
    tech: ["React", "JavaScript", "HTML5", "CSS3", "REST API"],
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
      "Mapped sprint flow from planning to retrospective before writing a line of UI.",
      "Iterated the board interaction on real task data instead of lorem ipsum.",
      "Shipped the responsive pass last so mobile never compromised desktop depth.",
    ],
    lessons: [
      "Optimistic UI is only calm if the rollback story is airtight.",
      "A narrow, well-typed state boundary makes drag-and-drop boring — in a good way.",
    ],
    future: [
      "Sprint analytics and burndown charts.",
      "Real-time presence so the whole team sees edits as they happen.",
      "Slack-style comments threaded into tasks.",
    ],
    video: "",
    impact:
      "Reduced project tracking complexity by providing a distraction-free interface for agile teams.",
    impactPoints: [
      "One surface for planning, executing, and reviewing sprints.",
      "Live activity keeps the whole team oriented without meetings.",
      "Responsive by default — dashboards work in the palm of a hand.",
    ],
    metrics: [
      { value: "40%", label: "less tracking overhead" },
      { value: "1×", label: "unified sprint workspace" },
      { value: "100%", label: "responsive across devices" },
    ],
    statuses: [
      { label: "Completed", tone: "emerald" },
      { label: "Responsive", tone: "blue" },
    ],
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
    detail: "Secured a Top 15 finish at the RoboMela Hackathon for rapid prototyping under pressure.",
    meta: "Hackathon",
    icon: "award",
  },
  {
    title: "300+ coding problems solved",
    detail: "Solved 300+ coding problems in Python and C across arrays, dynamic programming, graphs, and trees.",
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
  { value: 4, suffix: "+", label: "Products shipped", detail: "End-to-end builds, from idea to deploy." },
  { value: 300, suffix: "+", label: "Problems solved", detail: "Across Python & C on competitive platforms." },
  { value: 8.2, decimals: 1, label: "CGPA", detail: "B.Tech Computer Science & Engineering." },
  { value: 2, suffix: "×", label: "Hackathon placements", detail: "Top 5 Idea to Impact · Top 15 RoboMela." },
];