import Navbar from "@/components/navegacao/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projetos/Projects";
import ThemeToggle from "@/components/tema/ThemeToggle";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <main id="top">
        <Hero />
        <Projects />
      </main>
    </>
  );
}
