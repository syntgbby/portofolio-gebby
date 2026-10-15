import type { Job, Project, SkillGroup } from "@/types";

// EDIT THIS FILE. All values below are placeholders — replace them with your real details.
export const profile = {
  name: "Your Name",
  initials: "YN",
  title: "Web Developer",
  email: "you@example.com",
  location: "Your City, Country",
  available: true,
  headline: "I build fast, accessible web products.",
  intro: "Experienced web developer focused on maintainable front-end architecture and reliable delivery. Replace this paragraph with your own introduction.",
  about: ["Write two or three sentences about your background and the kind of work you do.", "Describe your working philosophy: how you make decisions, review code and ship."],
  specialization: "Your specialization (e.g. Next.js, design systems, performance)",
  socials: [
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
  ],
};

export const skills: SkillGroup[] = [
  { name: "Front end", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Accessibility"] },
  { name: "Back end", items: ["Node.js", "REST APIs", "PostgreSQL"] },
  { name: "Tooling", items: ["Git", "Vercel", "CI/CD", "Testing"] },
];

export const projects: Project[] = [
  { title: "Project name", description: "One sentence on the problem, your role and the outcome.", tags: ["Next.js", "TypeScript"], image: "/images/project-placeholder.svg", live: "https://example.com", github: "https://github.com/your-handle/project" },
  { title: "Second project", description: "Describe what you built and why it mattered.", tags: ["React", "Node.js"], image: "/images/project-placeholder.svg", github: "https://github.com/your-handle/project-2" },
];

export const jobs: Job[] = [
  { role: "Your role", company: "Company name", period: "Start – End", summary: "What you owned and delivered. Use real details." },
  { role: "Previous role", company: "Company name", period: "Start – End", summary: "What you owned and delivered." },
];

export const process = [
  { name: "Discover", text: "Clarify goals, users and constraints before any code." },
  { name: "Architect", text: "Choose structure, data flow and tooling that stay maintainable." },
  { name: "Build", text: "Ship in small, reviewed increments with typed, tested code." },
  { name: "Refine & Ship", text: "Tune performance and accessibility, then deploy and monitor." },
];

export const nav = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Experience", "#experience"], ["Process", "#process"], ["Contact", "#contact"]] as const;
