import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styles from "@/app/page.module.css";
import { ToShow } from "../props";

export default function Contacto({ isShow = true }: ToShow) {
  return (
    <div className={`${styles.page}`}>
      {isShow ? <Header /> : <></>}
      <section className={`mb-10`}>
        <h1>Contacto</h1>
      </section>
      {isShow ? <Footer /> : <></>}
    </div>
  );
}
