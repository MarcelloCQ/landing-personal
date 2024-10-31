import Image from "next/image";
import NavLinks from "./nav-links";
import styles from "./page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.imgContainer}>
          <Image
            aria-hidden
            src="/icon-point-white.svg"
            alt="Point white icon"
            width={10}
            height={10}
          />
          <Image
            aria-hidden
            src="/icon-point-white.svg"
            alt="Point white icon"
            width={10}
            height={10}
          />
          <Image
            aria-hidden
            src="/icon-point-white.svg"
            alt="Point white icon"
            width={10}
            height={10}
          />
          <Image
            aria-hidden
            src="/icon-point-white.svg"
            alt="Point white icon"
            width={10}
            height={10}
          />
        </div>
        <button className={styles.btnOpenMenu}>
          <Image
            aria-hidden
            src="/icon-btn-menu.svg"
            alt="Button menu icon"
            width={60}
            height={40}
          />
        </button>
        <NavLinks />
      </div>
    </header>
  );
}
