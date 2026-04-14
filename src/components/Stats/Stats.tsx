"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

const stats = [
  {
    number: 17,
    suffix: "",
    label: "Anos de experiência",
    description: "Desde 2009 cuidando da alimentação corporativa",
  },
  {
    number: 4,
    suffix: "",
    label: "Cardápios por dia",
    description: "Variedade para todos os gostos",
  },
  {
    number: 100,
    suffix: "%",
    label: "Cobertura em Alagoas",
    description: "Atendemos todo o estado",
  },
  {
    number: 7,
    suffix: "",
    label: "Dias por semana",
    description: "Disponíveis de domingo a domingo",
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function StatCard({
  stat,
  isVisible,
  delay,
}: {
  stat: (typeof stats)[0];
  isVisible: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.number, 2000, isVisible);

  return (
    <div
      className={styles.statCard}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.numberWrapper}>
        <span className={styles.number}>
          {count}
          {stat.suffix}
        </span>
      </div>
      <h3 className={styles.label}>{stat.label}</h3>
      <p className={styles.description}>{stat.description}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
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
    <section className={styles.stats} ref={sectionRef}>
      <div className="container">
        <div className={`${styles.grid} ${isVisible ? styles.visible : ""}`}>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              isVisible={isVisible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
