import StafSection from "./components/sections/staf-section";
import Inicio from "./inicio";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Inicio />
        {/* Renderiza aquí todos los componentes con la información de las secciones, no las páginas */}
        <StafSection />
      </main>
    </div>
  );
}
