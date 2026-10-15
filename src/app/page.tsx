import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { About, Skills, Certifications, Projects, Experience, Process } from "@/components/sections/Content";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero /><About /><Skills /><Certifications /><Projects /><Experience /><Process /><Contact />
      </main>
      <Footer />
    </>
  );
}
