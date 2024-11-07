import Contacto from "./contacto/page";
import Nosotros from "./nosotros/page";
import styles from "./page.module.css";
import Servicios from "./servicios/page";
import Staf from "./staf/page";
import Inicio from "./inicio";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Inicio />
        <Nosotros />
        <Servicios />
        <Staf />
        <Contacto />
      </main>
    </div>
  );
}
