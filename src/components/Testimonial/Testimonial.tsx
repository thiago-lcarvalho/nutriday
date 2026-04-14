"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Testimonial.module.css";

export default function Testimonial() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section section--beige ${styles.testimonial}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}>
          {/* Quote icon */}
          <div className={styles.quoteIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <blockquote className={styles.quote}>
            <p>
              A Nutriday transformou completamente a alimentação na nossa
              empresa. Os colaboradores estão mais satisfeitos e produtivos.
              A qualidade das refeições e o profissionalismo da equipe são
              incomparáveis.
            </p>
          </blockquote>

          <div className={styles.author}>
            <div className={styles.authorImage}>
              {/* Placeholder para foto do cliente */}
              <span>?</span>
            </div>
            <div className={styles.authorInfo}>
              <cite className={styles.authorName}>Nome do Cliente</cite>
              <span className={styles.authorRole}>
                Cargo - Nome da Empresa
              </span>
            </div>
          </div>

          <p className={styles.placeholder}>
            * Depoimento ilustrativo - solicitar ao cliente
          </p>
        </div>
      </div>
    </section>
  );
}
