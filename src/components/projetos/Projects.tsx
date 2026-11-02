"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import styles from "./Projects.module.css";

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  liveUrl: string;
}

const projects: ProjectItem[] = [
  {
    id: "aure-studio",
    name: "Auré Studio",
    category: "Photography • Art Direction",
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85",
    liveUrl: "https://github.com",
  },
  {
    id: "veloce",
    name: "Veloce",
    category: "Automotive • Brand Experience",
    imageUrl:
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
    liveUrl: "https://github.com",
  },
  {
    id: "grain-studio",
    name: "Grain Studio",
    category: "Fashion • Creative Direction",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=85",
    liveUrl: "https://github.com",
  },
  {
    id: "aether",
    name: "Aether",
    category: "Architecture • Digital Identity",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    liveUrl: "https://github.com",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Monitora o scroll contínuo e sincroniza a posição com os slides
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Cada card subsequente desliza de baixo para cima (100% -> 0%) sobrepondo o anterior
  const y1 = useTransform(scrollYProgress, [0.12, 0.35], ["100%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0.45, 0.68], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.76, 0.97], ["100%", "0%"]);

  // Linha de progresso da timeline sem salto, fluida com a rolagem
  const timelineHeight = useTransform(scrollYProgress, [0, 0.95], ["0%", "82%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clamped = Math.max(0, Math.min(1, latest));

    // Determina o projeto ativo conforme os limites de sobreposição
    let currentIdx = 0;
    if (clamped >= 0.76) {
      currentIdx = 3;
    } else if (clamped >= 0.45) {
      currentIdx = 2;
    } else if (clamped >= 0.12) {
      currentIdx = 1;
    } else {
      currentIdx = 0;
    }

    if (currentIdx !== activeIndex) {
      setActiveIndex(currentIdx);
    }
  });

  function handleSelect(index: number) {
    setActiveIndex(index);
    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const totalScrollable =
      wrapperRef.current.offsetHeight - window.innerHeight;

    if (totalScrollable > 0) {
      const scrollPoints = [0.05, 0.38, 0.7, 0.98];
      const targetScroll =
        scrollTop + rect.top + scrollPoints[index] * totalScrollable;

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  }

  // Posições dos cards empilhados: Card 0 é base, os seguintes deslizam por cima
  const cardTransforms = [
    undefined, // Card 0 fica fixo na base
    y1,        // Card 1 desliza por cima do 0
    y2,        // Card 2 desliza por cima do 1
    y3,        // Card 3 desliza por cima do 2
  ];

  return (
    <section id="projects" className={styles.sectionWrapper} ref={wrapperRef}>
      <div className={styles.stickyContainer}>
        {/* Título Livre no Topo */}
        <div className={styles.headerTop}>
          <h2 className={styles.title}>Projetos em destaque</h2>
        </div>

        {/* Grade com Timeline à Esquerda e Empilhamento Slide-Over à Direita */}
        <div className={styles.contentGrid}>
          {/* Timeline Vertical Limpa */}
          <div
            className={styles.timeline}
            role="tablist"
            aria-label="Lista de projetos premiados"
          >
            <div className={styles.timelineTrack} />
            <motion.div
              className={styles.timelineFill}
              style={{ height: timelineHeight }}
            />

            {projects.map((project, idx) => {
              const isActive = idx === activeIndex;
              const isPast = idx <= activeIndex;

              return (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleSelect(idx)}
                  className={styles.timelineItem}
                >
                  <span
                    className={`${styles.timelineDot} ${
                      isPast ? styles.timelineDotActive : ""
                    }`}
                  />
                  <span
                    className={`${styles.itemTitle} ${
                      isActive ? styles.itemTitleActive : ""
                    }`}
                  >
                    {project.name}
                  </span>
                  <span
                    className={`${styles.itemCategory} ${
                      isActive ? styles.itemCategoryActive : ""
                    }`}
                  >
                    {project.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Cards Sobrepostos (Slide-Over Vertical) */}
          <div className={styles.previewWrapper}>
            {projects.map((project, idx) => {
              const isBaseCard = idx === 0;
              const transformStyle = cardTransforms[idx];

              return (
                <motion.div
                  key={project.id}
                  className={styles.slideCard}
                  style={{
                    zIndex: idx + 1,
                    y: isBaseCard ? "0%" : transformStyle,
                  }}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.slideLink}
                    aria-label={`Ver projeto ${project.name}`}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className={styles.projectImage}
                      draggable={false}
                    />

                    <span className={styles.viewBadge}>
                      <span>Ver projeto</span>
                      <svg
                        className={styles.badgeIcon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
