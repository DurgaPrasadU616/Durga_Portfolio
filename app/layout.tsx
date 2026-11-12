import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { SmoothScroll } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { Info } from "@/lib/data";

import "./globals.css";

// Heavy / below-the-fold client components are code-split to protect the initial bundle.
const CursorGlow = dynamic(() => import("@/components/cursor-glow").then((m) => m.CursorGlow));
const CommandPalette = dynamic(() => import("@/components/command-palette").then((m) => m.CommandPalette));
const BackToTop = dynamic(() => import("@/components/back-to-top").then((m) => m.BackToTop));

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://udp.dev"),
  title: {
    default: "Ungarala Durga Prasad | Frontend & Full Stack Developer",
    template: `%s · ${Info.name}`,
  },
  description: "Frontend & Full Stack developer exploring Generative AI. Open to internship opportunities.",
  keywords: [
    "Frontend Developer",
    "Full Stack Developer",
    "Generative AI",
    "RAG",
    "React",
    "Next.js",
    "TypeScript",
    "Internship",
    Info.name,
  ],
  authors: [{ name: Info.name }],
  openGraph: {
    title: "Ungarala Durga Prasad | Frontend & Full Stack Developer",
    description: "Frontend & Full Stack developer exploring Generative AI. Open to internship opportunities.",
    url: "https://udp.dev",
    siteName: "udp.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ungarala Durga Prasad | Frontend & Full Stack Developer",
    description: "Frontend & Full Stack developer exploring Generative AI. Open to internship opportunities.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: Info.name,
  url: "https://udp.dev",
  jobTitle: "Frontend & Full Stack Developer | Exploring Generative AI",
  description: "Frontend & Full Stack developer exploring Generative AI. Open to internship opportunities.",
  email: "mailto:" + Info.email,
  address: { "@type": "PostalAddress", addressRegion: Info.location },
  knowsAbout: [
    "HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap",
    "Generative AI", "RAG", "Gemini API", "OpenAI API", "OpenCV", "TensorFlow", "PyTorch", "OCR",
    "Python", "JavaScript", "TypeScript", "C", "SQL",
    "Node.js", "Express.js", "FastAPI", "Flask", "REST APIs",
    "MySQL", "MongoDB", "PostgreSQL", "Supabase",
    "Git", "GitHub", "VS Code", "Vercel", "Netlify",
  ],
  sameAs: [Info.socials.github, Info.socials.linkedin],
};

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={interTight.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh antialiased">
        <SmoothScroll>
          <ScrollProgress />
          <CursorGlow />
          <Navbar />
          <CommandPalette />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}