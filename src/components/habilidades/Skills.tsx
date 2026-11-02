"use client";

import React from "react";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    category: "FRONT-END",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 & CSS3"
    ]
  },
  {
    category: "BACK-END",
    items: [
      "Node.js",
      "NestJS",
      "Python",
      "Django & Flask",
      "PostgreSQL",
      "MySQL"
    ]
  },
  {
    category: "FERRAMENTAS & DEVOPS",
    items: [
      "Docker",
      "Git & GitHub",
      "SonarQube",
      "Jira & Scrum",
      "Figma",
      "Vercel & CI/CD"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="skills-title" className={styles.title}>
            <span>MINHAS</span>
            <span className={styles.blue}>SKILLS</span>
          </h2>
          <p className={styles.subtitle}>
            Tecnologias e ferramentas que utilizo no dia a dia para desenvolver soluções web completas.
          </p>
        </div>

        <div className={styles.groupsGrid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.groupCol}>
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <ul className={styles.itemsList}>
                {group.items.map((item) => (
                  <li key={item} className={styles.skillItem}>
                    <span className={styles.bullet} aria-hidden="true" />
                    <span className={styles.skillName}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
