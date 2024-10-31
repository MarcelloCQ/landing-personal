import { Show } from "../contacto/page";
import Footer from "../ui/footer/footer";
import Header from "../ui/header/header";
import styles from "@/app/page.module.css";

export default function Staf({ show = true }: Show) {
  return (
    <div className={`${styles.page}`}>
      {show ? <Header /> : <></>}
      <section className="mb-10">
        <h1>Staf</h1>
      </section>
      {show ? <Footer /> : <></>}
    </div>
  );
}
