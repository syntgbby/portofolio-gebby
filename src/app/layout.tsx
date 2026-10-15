import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jb = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb" });
const site = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(site ? { metadataBase: new URL(site), alternates: { canonical: "/" } } : {}),
  title: `${profile.name} — ${profile.title}`,
  description: profile.intro,
  icons: { icon: "/icons/icon.svg" },
  openGraph: { title: `${profile.name} — ${profile.title}`, description: profile.intro, type: "website" },
};
export const viewport: Viewport = { themeColor: "#07090D" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable} ${jb.variable}`}>
      <body>{children}</body>
    </html>
  );
}
