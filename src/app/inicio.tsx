"use client";
import styles from "@/app/page.module.css";
// import DemoSlider from "./components/SliderIcons";
// import dataSlider from "@/app/data/slider-data.json";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";

export default function Inicio() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className={styles.sectionLarge}>
          <h1 className={styles.textCenter}>
            Soluciones a la Medida para Desafíos Únicos
          </h1>
          <p className={styles.textCenter}>
            Desde la idea hasta la implementación, te acompañamos en cada paso
            hacia la solución ideal
          </p>

          <div className={`${styles.genericContainer} mb-2`}>
            <a
              href="https://example.com"
              target="_bank"
              className={styles.ctaButton}
            >
              Contáctanos
            </a>
          </div>
          <div className={`${styles.genericContainer}`}>
            <div className={styles.inicioIconsContentContainer}>
              {/* <DemoSlider data={dataSlider} /> */}

              {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className={styles.inicioIconContainer}>
                    <Image
                      src={"/icono-1.png"}
                      alt="Ícono de cerebro y gráfico de barras"
                      width={100}
                      height={100}
                    />

                    <p>Consultoría Tecnológica</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.inicioIconContainer}>
                    <Image
                      src={"/icono-1.png"}
                      alt="Ícono de cerebro y gráfico de barras"
                      width={100}
                      height={100}
                    />
                    <p>Desarrollo de Software a la Medida</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.inicioIconContainer}>
                    <Image
                      src={"/icono-1.png"}
                      alt="Ícono de cerebro y gráfico de barras"
                      width={100}
                      height={100}
                    />
                    <p>Integración de Sistemas</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.inicioIconContainer}>
                    <Image
                      src={"/icono-1.png"}
                      alt="Ícono de cerebro y gráfico de barras"
                      width={100}
                      height={100}
                    />
                    <p>Soporte y Mantenimiento</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.inicioIconContainer}>
                    <Image
                      src={"/icono-1.png"}
                      alt="Ícono de cerebro y gráfico de barras"
                      width={100}
                      height={100}
                    />
                    <p>Automatización e IoT</p>
                  </div>
                </SwiperSlide>
              </Swiper> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
