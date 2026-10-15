export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl border-t border-line px-5 py-20 md:px-8">
      <h2 id={`${id}-h`} className="mb-10 font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {children}
    </section>
  );
}
