import { ToShow } from "../props";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styles from "@/app/page.module.css";

export default function Nosotros({ isShow = true }: ToShow) {
  return (
    <div className={`${styles.page}`}>
      {isShow ? <Header /> : <></>}
      <section className="mb-10">
        <h1>Nosotros</h1>
      </section>
      {isShow ? <Footer /> : <></>}
    </div>
  );
}
