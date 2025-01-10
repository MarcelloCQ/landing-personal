import Staf from "./components/sections/staf";
import Inicio from "./inicio";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Inicio />
        {/* Renderiza aquí todos los componentes con la información de las secciones, no las páginas */}
        <Staf />
      </main>
    </div>
  );
}
