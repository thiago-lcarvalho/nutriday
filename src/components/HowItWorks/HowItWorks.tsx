"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Chama no Zap",
    description: "Conta pra gente quantas pessoas, onde fica e o que sua empresa precisa.",
  },
  {
    number: "02",
    title: "Recebe a proposta",
    description: "A gente monta um plano sob medida pro seu bolso e pra sua operação.",
  },
  {
    number: "03",
    title: "Começa a servir",
    description: "Montamos tudo e sua equipe já começa a comer bem no dia combinado.",
  },
];

export default function HowItWorks() {
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
      className={`section ${styles.howItWorks}`}
      ref={sectionRef}
      id="como-funciona"
    >
      <div className="container">
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.eyebrow}>Como funciona</span>
          <h2 className={styles.title}>
            Simples assim
          </h2>
        </div>

        <div className={`${styles.timeline} ${isVisible ? styles.visible : ""}`}>
          {/* Connection line */}
          <div className={styles.line}>
            <div className={styles.lineProgress}></div>
          </div>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={styles.step}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className={styles.stepNumber}>
                <span>{step.number}</span>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className={styles.bgDecor}>
        <span className={styles.giantArrow}></span>
      </div>
    </section>
  );
}
