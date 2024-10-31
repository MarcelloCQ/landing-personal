import Footer from "../ui/footer/footer";
import Header from "../ui/header/header";
import styles from "@/app/page.module.css";

export type Show = {
  show: boolean;
};

export default function Contacto({ show = true }: Show) {
  console.log(show);
  return (
    <div className={`${styles.page}`}>
      {show ? <Header /> : <></>}
      <section className={`mb-10`}>
        <h1>Contacto</h1>
      </section>
      {show ? <Footer /> : <></>}
    </div>
  );
}
