import Navbar from "@/components/navegacao/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/sobre/About";
import Projects from "@/components/projetos/Projects";
import Experience from "@/components/experiencia/Experience";
import Skills from "@/components/habilidades/Skills";
import ThemeToggle from "@/components/tema/ThemeToggle";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <main id="top">
        {/* Hero e About encapsulados para que Hero seja sticky apenas durante a transição do About */}
        <div style={{ position: "relative" }}>
          <Hero />
          <About />
        </div>
        <Projects />
        <Experience />
        <Skills />
      </main>
    </>
  );
}
