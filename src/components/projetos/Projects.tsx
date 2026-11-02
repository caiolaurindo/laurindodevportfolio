import FramerCarousel from "@/components/ui/framer-carousel";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="projects-title" className={styles.title}>
            Projetos em Destaque
          </h2>
          <p className={styles.description}>
            Explore alguns dos projetos mais recentes desenvolvidos com foco em performance, experiência do usuário e arquitetura moderna.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <FramerCarousel />
        </div>
      </div>
    </section>
  );
}
