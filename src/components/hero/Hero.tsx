import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.name}>
        <h1 id="hero-title" className={styles.title}>
          <span>Caio</span>
          <span>Laurindo</span>
        </h1>

        <div className={styles.portraitWindow}>
          <Image
            src="/assets/icon.png"
            alt="Retrato de Caio Laurindo"
            width={632}
            height={632}
            priority
            className={styles.portrait}
          />
        </div>
      </div>

      <p className={styles.tagline}>
        Designing <span>human experiences</span> in code.
      </p>
    </section>
  );
}
