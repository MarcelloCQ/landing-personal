import { useEffect } from "react";
import NavLinks from "./nav-links";
import styles from "./page.module.css";
import Image from "next/image";
import { ChildComponentProps } from "../props";

export default function Sidebar({ on, closeModal }: ChildComponentProps) {
  useEffect(() => {}, [on]);
  return (
    <div
      className={
        on ? `${styles.active} ${styles.modalMenu}` : `${styles.modalMenu}`
      }
    >
      <button onClick={closeModal} className={styles.btnCloseContainer}>
        <Image
          src={"icon-btn-cerrar.svg"}
          width={30}
          height={30}
          alt="Button close icon"
          className={`${styles.btnCloseImg}`}
        />
      </button>
      <NavLinks on={on} />
    </div>
  );
}
