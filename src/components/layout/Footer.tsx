import { ArrowUp } from "lucide-react";
import { nav, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg2">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-lg">{profile.name}</p>
          <p className="text-sm text-muted">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm text-muted">
          {nav.map(([l, h]) => <a key={h} href={h} className="hover:text-ink">{l}</a>)}
          {profile.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">{s.label}</a>)}
        </nav>
        <a href="#top" className="inline-flex items-center gap-2 text-sm text-cyan"><ArrowUp size={16} />Back to top</a>
      </div>
    </footer>
  );
}
