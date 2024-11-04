import Link from "next/link";
import styles from "./page.module.css";
import { Active } from "../props";

const links = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Nosotros",
    href: "/nosotros",
  },
  {
    name: "Servicios",
    href: "/servicios",
  },
  {
    name: "Staf",
    href: "/staf",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
];

export default function NavLinks({ on }: Active) {
  return (
    <div
      className={on ? `${styles.btnContainerActive}` : `${styles.btnContainer}`}
    >
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href} className={styles.btnNavbar}>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
