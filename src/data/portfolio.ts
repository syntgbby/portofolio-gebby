import type { Job, Certification, Project, SkillGroup } from "@/types";

// EDIT THIS FILE. All values below are placeholders — replace them with your real details.
export const profile = {
  name: "Gebby Syntia",
  initials: "Gebby",
  title: " Full Stack Developer",
  email: "biesyntia@gmail.com",
  location: "Jakarta, Indonesia",
  available: true,
  headline: "I build fast, accessible web products.",
  intro:
    "Experienced web developer focused on maintainable front-end architecture and reliable delivery.",
  about: [
    "Full Stack Developer with 2+ years of experience in enterprise web application development and API integration for mobile applications. Skilled in frontend and backend development, performance optimization, and delivering scalable, high-quality software solutions.",
    // "Describe your working philosophy: how you make decisions, review code and ship.",
  ],
  specialization: "Laravel, Next.js, Nest.js",
  socials: [
    { label: "GitHub", href: "https://github.com/syntgbby" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gebby-syntia/" },
  ],
};

export const skills: SkillGroup[] = [
  {
    name: "Front end",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Laravel", "HTML", "CSS", "Bootstrap"],
  },
  { name: "Back end", items: ["Node.js", "Nest.js", "REST APIs", "SQL Server", "MySQL"] },
  { name: "Tooling", items: ["Git", "Vercel", "Testing", "Docker", "Postman", "Termius"] },
];

export const certifications: Certification[] = [
  {
    title: "TOEIC® Listening & Reading (2024)",
    description: "Score: 790 / 990",
    tags: ["Issued by ETS, LP3I"],
    image: "/images/sertif/toeic.png",
    // live: "https://example.com",
    // github: "https://github.com/your-handle/project",
  },
  {
    title: "Software Development (2024) ",
    description: "Competent",
    tags: [ "Issued by Badan Nasional Sertifikasi Profesi (BNSP), Indonesia's National Professional Certification Authority"],
    image: "/images/sertif/comp-da.png",
    // github: "https://github.com/your-handle/project-2",
  },
  {
    title: "Computer Operator (2023)",
    description: "Competent",
    tags: [ "Issued by Badan Nasional Sertifikasi Profesi (BNSP), Indonesia's National Professional Certification Authority"],
    image: "/images/sertif/comp-op.png",
    // github: "https://github.com/your-handle/project-2",
  },
  {
    title: "Computer Programming (2022)",
    description: "Competent",
    tags: [ "Issued by Badan Nasional Sertifikasi Profesi (BNSP), Indonesia's National Professional Certification Authority"],
    image: "/images/sertif/comp-pro.png",
    // github: "https://github.com/your-handle/project-2",
  },
];

export const projects: Project[] = [
  {
    title: "Property Management Admin System",
    description: "Developed an internal web-based administration system to streamline property management operations and improve data management efficiency.",
    tags: ["Laravel", "HTML", "Bootstrap", "Javascript", "MySQL / SQL Server", "Git"],
    image: "/images/projects/kemvil-dash.png",
    // live: "https://example.com",
    // github: "https://github.com/your-handle/project",
  },
  {
    title: "Invoice Approval & Reminder System",
    description: "Developed a web application to automate invoice approval workflows and send timely reminders, improving the efficiency of the approval process.",
    tags: [ "Laravel / NextJs", "NestJs", "MySQL / SQL Server", "Git"],
    image: "/images/projects/wrc-dash.png",
    // github: "https://github.com/your-handle/project-2",
  },
  {
    title: "Blasting & Document Stamping System",
    description: "Developed a web-based system for message blasting and automated document stamping to support internal business processes.",
    tags: [ "Laravel / NextJs", "NestJs", "MySQL / SQL Server", "Git"],
    image: "/images/projects/gntu-dash.png",
    // github: "https://github.com/your-handle/project-2",
  },
  {
    title: "Mobile REST API",
    description: "Developed a web-based system for message blasting and automated document stamping to support internal business processes.",
    tags: [ "Laravel / NestJs", "MySQL / SQL Server", "Postman", "Git"],
    image: "/images/projects/swagger-dash.png",
    // github: "https://github.com/your-handle/project-2",
  },
];

export const jobs: Job[] = [
  {
    role: "Full Stack Developer",
    company: "IFCA Software",
    period: "Mar 2024 - Present",
    summary: "Developed and maintained enterprise web applications and RESTful APIs, implemented features and fixed issues, optimized application and database performance, and collaborated with cross-functional teams on testing, deployment, code reviews, and system maintenance.",
  },
  {
    role: "Customer Care Assistant",
    company: "Telkom Indonesia",
    period: "Aug 2022 - Nov 2022",
    summary: "Confirmed customer receipt of orders and satisfaction, reminded customers of payment due dates, upsold additional products by phone, and maintained accurate customer records.",
  },
];

export const process = [
  {
    name: "Discover",
    text: "Clarify goals, users and constraints before any code.",
  },
  {
    name: "Architect",
    text: "Choose structure, data flow and tooling that stay maintainable.",
  },
  {
    name: "Build",
    text: "Ship in small, reviewed increments with typed, tested code.",
  },
  {
    name: "Refine & Ship",
    text: "Tune performance and accessibility, then deploy and monitor.",
  },
];

export const nav = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Process", "#process"],
  ["Contact", "#contact"],
] as const;
