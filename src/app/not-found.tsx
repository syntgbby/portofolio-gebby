import Link from "next/link";
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-content-center gap-4 text-center">
      <p className="font-mono text-cyan">404</p>
      <h1 className="font-display text-3xl">This page does not exist.</h1>
      <Link href="/" className="text-cyan underline">Back to the portfolio</Link>
    </main>
  );
}
