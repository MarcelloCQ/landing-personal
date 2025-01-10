import styles from "@/app/page.module.css";
import StafSection from "../components/sections/staf-section";

export default function Staf() {
  return (
    <div className={`${styles.page}`}>
      <section className="mb-10">
        <StafSection />
      </section>
    </div>
  );
}
