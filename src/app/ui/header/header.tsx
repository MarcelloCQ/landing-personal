"use client";
import Image from "next/image";
import NavLinks from "./nav-links";
import styles from "./page.module.css";
import Sidebar from "./sidebar";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const activeSideBar = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={`${styles.header} mb-2`}>
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
        <button
          onClick={() => activeSideBar()}
          className={styles.btnOpenMenu}
          type={"button"}
        >
          <Image
            aria-hidden
            src="/icon-btn-menu.svg"
            alt="Button menu icon"
            width={60}
            height={40}
          />
        </button>
        <Sidebar on={isActive} closeModal={activeSideBar} />
        <NavLinks on={false} />
      </div>
    </header>
  );
}
