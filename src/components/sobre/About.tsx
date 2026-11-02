"use client";

import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section
      id="about"
      className={styles.sectionWrapper}
      aria-labelledby="about-title"
    >
      <div className={styles.stickyScreen}>
        {/* Transição Curvada no Topo (Projeta o card azul curvado sobre o Hero) */}
        <div className={styles.topCurveContainer} aria-hidden="true">
          <svg
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            className={styles.curveSvg}
          >
            <path
              d="M0,90 C360,15 1080,15 1440,90 L1440,90 L0,90 Z"
              className={styles.curveFill}
            />
          </svg>
        </div>

        <div className={styles.container}>
        {/* COLUNA DA ESQUERDA: RETRATO COM BACKDROP AZUL (ESTILO KINGSUK SARKAR) */}
        <div className={styles.imageColumn}>
          <div className={styles.portraitWrapper}>
            {/* Card Azul com Watermark */}
            <div className={styles.backdropCard} aria-hidden="true">
              <span className={styles.watermarkText}>DEV</span>
            </div>

            {/* Foto de Caio */}
            <div className={styles.photoFrame}>
              <Image
                src="/assets/caio-the-people-portrait.jpg"
                alt="Foto de Caio Laurindo"
                width={480}
                height={640}
                priority
                className={styles.photo}
              />
            </div>
          </div>
        </div>

        {/* COLUNA DA DIREITA: APRESENTAÇÃO */}
        <div className={styles.contentColumn}>
          {/* Nome Principal */}
          <h2 id="about-title" className={styles.nameTitle}>
            Caio Laurindo
          </h2>

          {/* Pílula de Cargo com Cursor Interativo */}
          <div className={styles.roleContainer}>
            <div className={styles.rolePill}>
              <span>Desenvolvedor Full-Stack</span>
            </div>
            {/* Ícone de Cursor de Mouse */}
            <svg
              className={styles.mouseCursor}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4.5 3.5L11.5 20.5L14.5 13.5L21.5 10.5L4.5 3.5Z"
                fill="#1761f5"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Biografia Focada e Elegante */}
          <p className={styles.bioText}>
            Estudante de <strong>Sistemas para Internet</strong> na{" "}
            <strong>Universidade Católica de Pernambuco</strong> em parceria com
            o <strong>Porto Digital</strong>. Atualmente atuo como{" "}
            <strong>Desenvolvedor Full-Stack Estagiário</strong> na Perpart
            (Governo de PE), construindo interfaces fluidas e escaláveis com{" "}
            <strong>React</strong>, <strong>Next.js</strong> e{" "}
            <strong>TypeScript</strong>. Instrutor e apaixonado por transformar
            problemas complexos em experiências digitais intuitivas.
          </p>

          {/* Linha de Métricas / Estatísticas */}
          <div className={styles.statsRow}>
            <div className={styles.actionRow}>
              <a href="#projects" className={styles.primaryBtn}>
                <span>Ver Projetos</span>
                <svg
                  className={styles.btnIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>

              <a
                href="/assets/cv-caioLaurindo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.outlineBtn}
              >
                <svg
                  className={styles.btnIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
