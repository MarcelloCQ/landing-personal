import Link from "next/link";
import styles from "./page.module.css";

const links = [
  {
    name: "About me",
    href: "/",
  },
];

export default function NavLinks() {
  return (
    <div className={styles.btnContainer}>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            target="_self"
            className={styles.btnNavbar}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
