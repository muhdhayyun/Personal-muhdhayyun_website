// Personal info shown across the site. Edit this file to update details —
// no component code needs to change.
export interface Experience {
  org: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  about: string;
  education: { school: string; degree: string; period: string; note: string };
  experience: Experience[];
  skills: SkillGroup[];
}

export const PROFILE: Profile = {
  name: "Muhammad Hayyun Bin Azhar",
  initials: "MH",
  title: "Computer Science undergrad building practical AI and full-stack products",
  tagline: "Singapore Management University · AI/ML · Full-stack",
  email: "mhayyun.a.2024@smu.edu.sg",
  github: "https://github.com/muhdhayyun",
  linkedin: "https://www.linkedin.com/in/muhd-hayyun-986118198/",
  about:
    "I'm a Computer Science student at SMU who likes building things that actually ship: " +
    "LLM pipelines that are cheap and reliable, local-first AI tools, and clean web apps. " +
    "This summer I worked as an R&D intern on survey-extraction quality at Opine and as a " +
    "digital transformation intern at Wedding&Romance.",
  education: {
    school: "Singapore Management University",
    degree: "BSc Computer Science",
    period: "Aug 2024 – Jul 2028 (Expected)",
    note: "CS203 UBS SMU-X Outstanding Award",
  },
  experience: [
    {
      org: "Wedding&Romance",
      role: "Digital Transformation Intern",
      period: "Jun 2026 – Present",
      bullets: [
        "Building and maintaining a wedding-planning SPA (React, TypeScript, Vite) with 7 routes and 11 shared components, no backend, auto-deployed on Vercel from a single-source-of-truth typed data layer.",
        "Traced and fixed 7 mobile responsiveness defects (CSS Grid blowout, animation overflow, iOS Safari nav flicker), then rebuilt the carousel with breakpoint-adaptive logic.",
      ],
    },
    {
      org: "Opine",
      role: "R&D Intern",
      period: "Jun 2026 – Aug 2026",
      bullets: [
        "Raised extraction-error detection accuracy from 88.9% to 94.4% over 4 prompt/pipeline revisions, using an automated corruption-testing pipeline to catch regressions.",
        "Cut false-positive flagging on valid short answers from 12.5% to near 0% by diagnosing two root causes in the judge's matching logic.",
      ],
    },
    {
      org: "Business Intelligence & Analytics Club, SMU",
      role: "Data Associates Programme (DAP), Mentee",
      period: "Jan 2026 – May 2026",
      bullets: [
        "Selected for a competitive applied AI programme covering neural networks, LLMs and NLP, ending in a capstone project.",
        "Presented a session on RNNs for NLP to the cohort.",
      ],
    },
  ],
  skills: [
    { label: "Languages", items: ["Python", "Java", "TypeScript"] },
    { label: "AI/ML", items: ["LangChain", "llama.cpp / whisper.cpp", "TensorFlow", "sentence-transformers"] },
    {
      label: "AI Techniques",
      items: ["LLM-as-Judge", "Chain-of-Thought", "Few-shot Prompting", "Structured Outputs", "RAG"],
    },
    { label: "Data & Vector Stores", items: ["ChromaDB", "Pinecone", "Upstash Vector", "Supabase", "Neon", "SQLite"] },
    { label: "Frameworks", items: ["FastAPI", "Pydantic", "React", "Next.js", "Node.js"] },
    { label: "Cloud & DevOps", items: ["Git", "GitHub Actions", "Docker", "Vercel", "Google Cloud Run", "Vertex AI"] },
  ],
};
