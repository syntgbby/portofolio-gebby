import { profile } from "@/data/portfolio";

const code = [
  ["const", " dev = {"],
  ["  name", `: "${profile.name}",`],
  ["  role", `: "${profile.title}",`],
  ["  ships", ": [\"fast\", \"accessible\", \"typed\"],"],
  ["  status", `: "${profile.available ? "open to work" : "booked"}",`],
  ["", "};"],
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <div>
          <p className="mb-4 font-mono text-sm text-cyan">{profile.title} · {profile.location}</p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">{profile.headline}</h1>
          <p className="mt-6 max-w-prose text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded bg-cyan px-5 py-2.5 font-medium text-bg hover:opacity-90">View projects</a>
            <a href="#contact" className="rounded border border-line px-5 py-2.5 hover:border-violet">Get in touch</a>
          </div>
        </div>
        <div className="rounded-lg border border-line bg-bg2 shadow-[0_0_60px_-20px_var(--color-violet)]" aria-hidden>
          <div className="flex gap-1.5 border-b border-line px-4 py-3"><i className="size-2.5 rounded-full bg-line" /><i className="size-2.5 rounded-full bg-line" /><i className="size-2.5 rounded-full bg-violet" /></div>
          <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
            {code.map(([k, v], i) => (
              <div key={i} className="boot-line" style={{ animationDelay: `${i * 0.25}s` }}>
                <span className={k === "const" ? "text-violet" : "text-cyan"}>{k}</span><span className="text-muted">{v}</span>
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}
