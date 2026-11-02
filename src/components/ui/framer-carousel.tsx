'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';
import styles from './FramerCarousel.module.css';

export interface ProjectItem {
  id: number | string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const defaultProjects: ProjectItem[] = [
  {
    id: 1,
    title: 'E-Commerce Full Stack',
    description: 'Plataforma completa de comércio eletrônico com carrinho em tempo real, pagamentos via Stripe e painel administrativo.',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma'],
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Analytics & BI Dashboard',
    description: 'Dashboard analítico corporativo com métricas em tempo real, visualização de dados com gráficos interativos e exportação de relatórios.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'AI Task Assistant',
    description: 'Aplicativo de produtividade impulsionado por IA para automatização de tarefas, resumo de documentos e gestão inteligente de fluxos de trabalho.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Design System & UI Library',
    description: 'Biblioteca de componentes acessíveis, responsivos e documentados com Storybook, com foco em alta performance e escalabilidade.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'CSS Modules'],
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
];

interface FramerCarouselProps {
  projects?: ProjectItem[];
}

export function FramerCarousel({ projects = defaultProjects }: FramerCarouselProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth || 1;
        x.set(-index * containerWidth);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [index, x]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselViewport} ref={containerRef}>
        <motion.div className={styles.track} style={{ x }}>
          {projects.map((project) => (
            <div key={project.id} className={styles.slide}>
              {/* Imagem de Fundo do Projeto */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className={styles.image}
                draggable={false}
              />

              {/* Overlay Escuro com Gradiente Suave */}
              <div className={styles.overlay} />

              {/* Informações Sobrepostas no Card */}
              <div className={styles.content}>
                <span className={styles.badge}>
                  Projeto {project.id} de {projects.length}
                </span>

                <h3 className={styles.title}>{project.title}</h3>

                <p className={styles.description}>{project.description}</p>

                {/* Tecnologias */}
                <div className={styles.techList}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botões de Ação */}
                <div className={styles.actions}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primaryButton}
                    >
                      <span>Ver Projeto</span>
                      <svg
                        className={styles.icon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondaryButton}
                    >
                      <svg
                        className={styles.icon}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      <span>Código</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Botão Anterior */}
        <button
          type="button"
          disabled={index === 0}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          aria-label="Projeto anterior"
          className={`${styles.navButton} ${styles.prevButton}`}
        >
          <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Botão Próximo */}
        <button
          type="button"
          disabled={index === projects.length - 1}
          onClick={() => setIndex((i) => Math.min(projects.length - 1, i + 1))}
          aria-label="Próximo projeto"
          className={`${styles.navButton} ${styles.nextButton}`}
        >
          <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Paginação por Bullets */}
        <div className={styles.pagination}>
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir para o projeto ${i + 1}`}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FramerCarousel;
