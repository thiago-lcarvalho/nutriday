"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section ${styles.about}`}
      ref={sectionRef}
      id="sobre"
    >
      <div className="container">
        <div className={styles.layout}>
          {/* Left: Image composition */}
          <div className={`${styles.imageSection} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.mainImage}>
              <Image
                src="/images/fundadores.jpg"
                alt="Adrícia Gusmão e Paulo Sérgio - Fundadores da Nutriday"
                width={500}
                height={600}
                className={styles.founderPhoto}
              />
            </div>

            {/* Floating accent */}
            <div className={styles.accentShape}></div>

            {/* Experience badge */}
            <div className={styles.badge}>
              <span className={styles.badgeNumber}>17</span>
              <span className={styles.badgeLabel}>anos</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
            <span className={styles.eyebrow}>Nossa História</span>
            <h2 className={styles.title}>
              Casados na vida,<br />
              <span className={styles.highlight}>sócios na cozinha</span>
            </h2>

            <div className={styles.story}>
              <p>
                <strong>Paulo Sérgio</strong> e <strong>Adrícia Gusmão</strong> começaram
                a Nutriday em 2009 com uma ideia simples: levar comida de verdade
                pras empresas de Alagoas.
              </p>
              <p>
                Ela cuida da nutrição — são 22 anos de experiência garantindo que
                cada prato seja equilibrado. Ele cuida da estrutura — garante que
                tudo funcione como um relógio.
              </p>
            </div>

            {/* Founders info */}
            <div className={styles.founders}>
              <div className={styles.founder}>
                <div className={styles.founderAvatar}>A</div>
                <div className={styles.founderInfo}>
                  <strong>Adrícia Gusmão</strong>
                  <span>Nutricionista RT · CRN-6: 4013 · 22 anos de exp.</span>
                </div>
              </div>
              <div className={styles.founder}>
                <div className={styles.founderAvatar}>P</div>
                <div className={styles.founderInfo}>
                  <strong>Paulo Sérgio</strong>
                  <span>Diretor de Operações</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className={styles.bgDecor}>
        <div className={styles.dotsGrid}></div>
      </div>
    </section>
  );
}
