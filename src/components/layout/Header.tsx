"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/data/portfolio";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-mono text-sm text-cyan">{`<${profile.initials} />`}</a>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {nav.map(([l, h]) => <a key={h} href={h} className="text-sm text-muted transition-colors hover:text-ink">{l}</a>)}
          {profile.available && <span className="flex items-center gap-2 font-mono text-xs text-muted"><span className="size-2 rounded-full bg-cyan" />Available</span>}
          <a href="#contact" className="rounded border border-cyan px-4 py-1.5 text-sm text-cyan hover:bg-cyan hover:text-bg">Hire me</a>
        </nav>
        <button className="md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-1 border-t border-line bg-bg2 px-5 py-3 md:hidden">
          {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 text-muted hover:text-ink">{l}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} className="py-2 text-cyan">Hire me</a>
        </nav>
      )}
    </header>
  );
}
