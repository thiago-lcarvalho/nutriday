"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Features.module.css";

const features = [
  {
    id: "estrutura",
    title: "Estrutura Completa",
    description: "Levamos tudo: cozinha, equipamentos e equipe. Você só precisa do espaço.",
    size: "large",
    accent: "verde",
  },
  {
    id: "quebra-rotina",
    title: "Quebra de Rotina",
    description: "Toda sexta-feira, proteínas especiais: feijoada, churrasco e mais. Porque sexta merece!",
    size: "medium",
    accent: "laranja",
  },
  {
    id: "aniversariantes",
    title: "Torta dos Aniversariantes",
    description: "Na última quinta de cada mês, a sobremesa vira bolo para celebrar os aniversariantes.",
    size: "medium",
    accent: "verde-claro",
  },
  {
    id: "cardapio-especial",
    title: "Cardápio Temático",
    description: "Semana Santa, Natal, São João — cardápios especiais que respeitam cada época do ano.",
    size: "small",
    accent: "laranja",
  },
  {
    id: "decoracao",
    title: "Decoração Comemorativa",
    description: "Ambientação temática no restaurante em datas especiais. Acolhimento que faz diferença.",
    size: "small",
    accent: "verde",
  },
  {
    id: "campanhas",
    title: "Campanhas Mensais",
    description: "Novembro Azul, Janeiro Branco, Carnaval... Ações de cuidado e engajamento o ano inteiro.",
    size: "small",
    accent: "amarelo",
  },
  {
    id: "pat",
    title: "Cadastro no PAT",
    description: "Nutricionistas garantem o equilíbrio. Refeições dentro das normas do Programa de Alimentação ao Trabalhador.",
    size: "small",
    accent: "verde-claro",
  },
];

export default function Features() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section ${styles.features}`}
      ref={sectionRef}
      id="diferenciais"
    >
      {/* Background decorations */}
      <div className={styles.bgDecor}>
        <div className={styles.blob}></div>
        <span className={styles.giantText}>+</span>
      </div>

      <div className="container">
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.eyebrow}>Diferenciais</span>
          <h2 className={styles.title}>
            Por que escolher a<br />
            <span className={styles.highlight}>Nutriday?</span>
          </h2>
        </div>

        <div className={`${styles.bentoGrid} ${isVisible ? styles.visible : ""}`}>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`${styles.card} ${styles[`card--${feature.size}`]} ${styles[`accent--${feature.accent}`]}`}
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
              <div className={styles.cardDecor}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
