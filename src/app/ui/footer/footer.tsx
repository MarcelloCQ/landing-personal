import Image from "next/image";
import styles from "./page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            giosuemc@gmail.com
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            +51 910352745
          </a>
        </div>

        <div className={styles.footerBot}>
          <p>
            © 2024 Crescimbeni Cruz Bendezú Lima Perú. Todos los derechos
            reservados.
          </p>

          <p>20612656054 - Crescimbeni Cruz Bendezú Associates sac</p>
        </div>
      </div>
    </footer>
  );
}
