"use client";
import { useState } from "react";
import Section from "@/components/ui/Section";
import { profile } from "@/data/portfolio";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
const field = "w-full rounded border border-line bg-bg2 px-3 py-2 focus:border-cyan";

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const message = String(f.get("message") ?? "").trim();
    const errs: Errors = {};
    if (name.length < 2) errs.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email address.";
    if (message.length < 10) errs.message = "Write at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length) { setStatus("Fix the highlighted fields and send again."); return; }
    // No backend is configured: this opens the visitor's email app. It does not send anything itself.
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${body}`;
    setStatus("Your email app should open with the message ready. Press send there to deliver it.");
  }

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-3 text-muted">
          <p><a className="text-cyan" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          {profile.socials.map((s) => <p key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">{s.label}</a></p>)}
        </div>
        <form onSubmit={onSubmit} noValidate className="space-y-4">
          {(["name", "email", "message"] as const).map((k) => (
            <div key={k}>
              <label htmlFor={k} className="mb-1 block text-sm capitalize">{k}</label>
              {k === "message"
                ? <textarea id={k} name={k} rows={5} className={field} aria-invalid={!!errors[k]} aria-describedby={`${k}-e`} />
                : <input id={k} name={k} type={k === "email" ? "email" : "text"} className={field} aria-invalid={!!errors[k]} aria-describedby={`${k}-e`} />}
              <p id={`${k}-e`} className="mt-1 text-sm text-red-400">{errors[k]}</p>
            </div>
          ))}
          <button className="rounded bg-cyan px-5 py-2.5 font-medium text-bg hover:opacity-90">Send message</button>
          <p role="status" className="text-sm text-muted">{status}</p>
        </form>
      </div>
    </Section>
  );
}
