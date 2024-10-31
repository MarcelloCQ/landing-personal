import Contacto from "./contacto/page";
import Nosotros from "./nosotros/page";
import styles from "./page.module.css";
import Servicios from "./servicios/page";
import Staf from "./staf/page";
import Footer from "./ui/footer/footer";
import Header from "./ui/header/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Contacto show={false} />
        <Nosotros show={false} />
        <Servicios show={false} />
        <Staf show={false} />
      </main>
      <Footer />
    </div>
  );
}
