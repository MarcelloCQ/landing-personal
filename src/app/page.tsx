import styles from "./page.module.css";
import Footer from "./ui/footer/footer";
import Header from "./ui/header/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
}
