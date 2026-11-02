"use client";

import React from "react";
import styles from "./Experience.module.css";

interface TimelineItem {
  id: string;
  year: string;
  org: string;
  role: string;
  desc: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "infinity-base",
    year: "2024 — 2025",
    org: "Infinity School",
    role: "DESENVOLVIMENTO FULL STACK COM IA",
    desc: "Comecei do zero e evoluí muito, aprendendo Python com Django e Flask, front-end com HTML, CSS e JavaScript, banco de dados e UI/UX. Esse curso foi o ponto de virada que me fez realmente me apaixonar por tecnologia e decidir seguir essa carreira."
  },
  {
    id: "unicap-porto",
    year: "03/2025 — ATUAL",
    org: "Unicap",
    role: "SISTEMAS PARA INTERNET — PARCERIA PORTO DIGITAL",
    desc: "Ingresso na Universidade Católica de Pernambuco para me aprofundar ainda mais na área. O curso é realizado em parceria com o Porto Digital, proporcionando residência tecnológica com contato com empresas e desafios reais do mercado."
  },
  {
    id: "infinity-instructor",
    year: "12/2025 — 05/2026",
    org: "Infinity School",
    role: "INSTRUTOR DE PROGRAMAÇÃO",
    desc: "Atuei como instrutor de programação, com mais de 150 aulas ministradas em desenvolvimento Full-Stack com IA. Auxilio alunos no aprendizado de fundamentos técnicos, boas práticas de código e resolução de problemas reais do desenvolvimento."
  },
  {
    id: "porto-digital-monitor",
    year: "02/2026 — 05/2026",
    org: "Porto Digital",
    role: "MONITOR LABORATÓRIO DO PORTO DIGITAL",
    desc: "Atuei como monitor do Laboratório de Inovação do Porto Digital, apoiando atividades da Residência Tecnológica, eventos e o suporte técnico aos laboratórios. A monitoria contribui para a organização das ações do semestre e para o fortalecimento do ecossistema de inovação."
  },
  {
    id: "perpart-gov",
    year: "06/2026 — ATUAL",
    org: "Perpart - Gov Pe",
    role: "DESENVOLVEDOR FULL-STACK ESTAGIÁRIO",
    desc: "Atuo como Desenvolvedor Full-Stack Estagiário na Perpart (Governo de Pernambuco), desenvolvendo aplicações com Node.js, NestJS e Next.js. Utilizo metodologias ágeis, Jira e boas práticas de arquitetura, Design Patterns e Clean Code para criar soluções escaláveis, seguras e de fácil manutenção, com apoio de Docker, SonarQube e testes."
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-title">
      <div className={styles.container}>
        {/* Título Empilhado: MINHA / JORNADA */}
        <h2 id="experience-title" className={styles.title}>
          <span>MINHA</span>
          <span className={styles.blue}>JORNADA</span>
        </h2>

        {/* Linha do Tempo Horizontal Contínua com Pontos Azuis */}
        <div className={styles.timelineWrapper}>
          <div className={styles.trackLine} aria-hidden="true" />

          <div className={styles.timeline}>
            {timelineData.map((item) => (
              <article key={item.id} className={styles.timelineItem}>
                {/* Ponto / Nó Azul com Brilho sobre a Linha */}
                <div className={styles.dot} aria-hidden="true" />

                {/* Ano / Período */}
                <div className={styles.year}>{item.year}</div>

                {/* Instituição / Organização */}
                <h3 className={styles.org}>{item.org}</h3>

                {/* Cargo / Subtítulo */}
                <div className={styles.role}>{item.role}</div>

                {/* Descrição */}
                <p className={styles.desc}>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

