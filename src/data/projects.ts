// Project data for the grid. Add, remove, or edit entries here — the grid
// re-renders automatically since <Projects> just maps over this array.
// Projects are marked "wip" until their live demos are deployed; they render dimmed.
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  status: "wip" | "live";
  liveUrl?: string;
  codeUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Wedding & Romance",
    description:
      "Wedding-planning SPA with 7 routes, 11 shared components and a typed data layer. Deployed on Vercel with no backend.",
    tags: ["React", "TypeScript", "Vite", "Vercel"],
    image: "/assets/wedding-and-romance.png",
    status: "live",
    liveUrl: "https://www.weddingandromance.com/",
  },
  {
    title: "Opine",
    description:
      "Conversational survey bot for university clubs, with an LLM-vs-LLM simulator and an automated judge that catches extraction errors.",
    tags: ["Python", "LLM-as-Judge", "Multi-provider LLMs"],
    image: "/assets/placeholder-1.svg",
    status: "wip",
  },
  {
    title: "Jamus Meeting Transcriber",
    description:
      "Local meeting transcriber that logs voice and PC audio. CUDA-accelerated whisper.cpp (14–23x faster than CPU) with Silero VAD to stop hallucinations on silence.",
    tags: ["Python", "whisper.cpp", "CUDA", "Silero VAD"],
    image: "/assets/placeholder-2.svg",
    status: "wip",
    codeUrl: "https://github.com/muhdhayyun/Jamus_Meeting_Transcriber",
  },
  {
    title: "Trade Optimisation Path",
    description:
      "6-service trade-optimisation platform built by a team of 6, with a RAG compliance chatbot that scores source-sentence relevance. CS203 UBS SMU-X Outstanding Award.",
    tags: ["Java", "Microservices", "RAG"],
    image: "/assets/placeholder-3.svg",
    status: "wip",
  },
  {
    title: "ServO",
    description:
      "Multi-stage LLM routing pipeline that picks a model by task complexity, cutting inference costs by up to 80%, with schema-constrained JSON across providers.",
    tags: ["Python", "LLM Routing", "Pydantic"],
    image: "/assets/placeholder-4.svg",
    status: "wip",
  },
  {
    title: "Konkuk Ideathon",
    description:
      "Ideathon project built around a web-scraping bot. Currently being reworked with a more robust scraper.",
    tags: ["TypeScript", "Web Scraping"],
    image: "/assets/placeholder-6.svg",
    status: "wip",
    codeUrl: "https://github.com/muhdhayyun/konkuk-ideathon",
  },
];
