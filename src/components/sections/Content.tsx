import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Section from "@/components/ui/Section";
import { jobs, process as steps, profile, projects, skills } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4 text-muted">{profile.about.map((p) => <p key={p}>{p}</p>)}</div>
        <dl className="border-l border-line pl-6">
          <dt className="font-mono text-xs text-muted">Specialization</dt>
          <dd className="mt-1">{profile.specialization}</dd>
        </dl>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((g) => (
          <div key={g.name} className="rounded-lg border border-line bg-bg2 p-6 transition-colors hover:border-cyan">
            <h3 className="font-display text-lg">{g.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">{g.items.map((i) => <li key={i} className="rounded border border-line px-2.5 py-1 font-mono text-xs text-muted">{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-lg border border-line bg-bg2 transition-colors hover:border-violet">
            <Image src={p.image} alt={`${p.title} preview`} width={800} height={500} className="h-auto w-full" />
            <div className="p-6">
              <h3 className="font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-muted">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-3">{p.tags.map((t) => <li key={t} className="font-mono text-xs text-cyan">{t}</li>)}</ul>
              <div className="mt-5 flex gap-5 text-sm">
                {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-cyan"><ExternalLink size={15} />Live demo</a>}
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-cyan"><Github size={15} />Source</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-8 border-l border-line pl-6">
        {jobs.map((j) => (
          <li key={j.role + j.period} className="relative">
            <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full bg-cyan" aria-hidden />
            <p className="font-mono text-xs text-muted">{j.period}</p>
            <h3 className="font-display text-lg">{j.role} <span className="text-muted">at {j.company}</span></h3>
            <p className="mt-1 max-w-prose text-muted">{j.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" title="Development process">
      <ol className="grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.name} className="rounded-lg border border-line p-5">
            <span className="font-mono text-xs text-violet">Step {i + 1}</span>
            <h3 className="mt-2 font-display text-lg">{s.name}</h3>
            <p className="mt-2 text-sm text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
