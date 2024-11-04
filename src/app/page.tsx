import Contacto from "./contacto/page";
import Nosotros from "./nosotros/page";
import styles from "./page.module.css";
import Servicios from "./servicios/page";
import Staf from "./staf/page";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Contacto isShow={false} />
        <Nosotros isShow={false} />
        <Servicios isShow={false} />
        <Staf isShow={false} />
      </main>
      <Footer />
    </div>
  );
}
