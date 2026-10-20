import Image from "next/image";
import styles from "./Navbar.module.css";

const links = [
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJETOS" },
  { href: "#contact", label: "CONTATO" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Navegação principal">
      <ul className={styles.links}>
        <li>
          <a href={links[0].href}>{links[0].label}</a>
        </li>
        <li>
          <a href={links[1].href}>{links[1].label}</a>
        </li>
        <li className={styles.logoItem}>
          <a href="#top" aria-label="Voltar ao início">
            <Image
              src="/assets/caio-logo-off-white.png"
              alt="Caio Laurindo"
              width={100}
              height={100}
              className={styles.logo}
              priority
            />
          </a>
        </li>
        <li>
          <a href={links[2].href}>{links[2].label}</a>
        </li>
        <li>
          <a href={links[3].href}>{links[3].label}</a>
        </li>
      </ul>
    </nav>
  );
}
