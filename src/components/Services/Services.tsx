"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";

const WHATSAPP_NUMBER = "5582993132265";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de solicitar uma proposta para minha empresa."
);

const services = [
  {
    id: "self-service",
    icon: "🍽️",
    title: "Self-Service",
    badge: "Principal",
    description:
      "Nosso carro-chefe. O colaborador se serve à vontade com duas opções de proteína, acompanhamentos variados e salada livre.",
    details: [
      "2 opções de proteína",
      "Acompanhamentos à vontade",
      "Salada livre",
      "1 sobremesa por pessoa",
      "Bebida 300ml",
    ],
  },
  {
    id: "dieta-do-dia",
    icon: "🥗",
    title: "Dieta do Dia",
    badge: "Leve",
    description:
      "Refeição balanceada voltada ao público administrativo. Porção individual em embalagem compartimentada.",
    details: [
      "Proteína grelhada diária",
      "Arroz, feijão e saladas",
      "Frutas nobres",
      "Porção individual",
    ],
  },
  {
    id: "tentacao-do-dia",
    icon: "🍝",
    title: "Tentação do Dia",
    badge: "Especial",
    description:
      "Uma terceira opção de proteína que entra no cardápio do self-service. Pratos como lasanha, camarão e massas especiais.",
    details: [
      "Massas e pratos especiais",
      "Lasanha, camarão e mais",
      "Integrado ao self-service",
    ],
  },
  {
    id: "sanduiche-gourmet",
    icon: "🍔",
    title: "Sanduíche Gourmet",
    badge: "Prático",
    description:
      "Opção rápida e saborosa. Pão bola com hambúrguer ou queijo e presunto, com escolha de salada.",
    details: [
      "Hambúrguer ou queijo e presunto",
      "Tradicional (alface e tomate)",
      "Ou cebola caramelizada",
    ],
  },
  {
    id: "quentinha",
    icon: "📦",
    title: "Quentinha",
    badge: "Delivery",
    description:
      "Mesmo cardápio do self-service, entregue para equipes que não podem ir ao refeitório. Ideal para vigilantes e equipes em campo.",
    details: [
      "Mesmo cardápio do dia",
      "Entrega no posto de trabalho",
      "Ideal para equipes externas",
    ],
  },
];

const plans = [
  {
    id: "essencial",
    name: "Essencial",
    description: "O básico bem-feito para quem busca custo-benefício.",
    features: [
      "Self-service completo",
      "Saladas variadas",
      "Sobremesa do dia",
      "Bebida inclusa",
    ],
    accent: "verde-claro",
  },
  {
    id: "plus",
    name: "Plus",
    description: "Mais variedade e opções para equipes que merecem um algo a mais.",
    features: [
      "Tudo do Essencial",
      "Maior variedade de saladas",
      "Sobremesas diferenciadas",
      "Tentação do Dia inclusa",
    ],
    accent: "laranja",
    featured: true,
  },
  {
    id: "premio",
    name: "Prêmio",
    description: "A experiência completa. O melhor da Nutriday, todos os dias.",
    features: [
      "Tudo do Plus",
      "8 opções de salada na rampa",
      "Sobremesa elaborada diária",
      "Cardápio premium completo",
    ],
    accent: "verde",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [plansVisible, setPlansVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) setIsVisible(true);
            if (entry.target === plansRef.current) setPlansVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (plansRef.current) observer.observe(plansRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section ${styles.services}`}
      ref={sectionRef}
      id="servicos"
    >
      {/* Decorative shapes */}
      <div className={styles.shapes}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <span className={styles.giantText}>5</span>
      </div>

      <div className="container">
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.eyebrow}>Serviços</span>
          <h2 className={styles.title}>
            Refeições para cada<br />
            <span className={styles.highlight}>necessidade</span>
          </h2>
          <p className={styles.subtitle}>
            Do self-service completo à quentinha no posto de trabalho.
            5 modalidades que se adaptam à rotina da sua equipe.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`${styles.servicesGrid} ${isVisible ? styles.visible : ""}`}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={styles.serviceCard}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <span className={styles.serviceBadge}>{service.badge}</span>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.serviceDetails}>
                {service.details.map((detail) => (
                  <li key={detail}>
                    <span className={styles.checkIcon}>✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Plans Section */}
        <div
          className={`${styles.plansSection} ${plansVisible ? styles.visible : ""}`}
          ref={plansRef}
        >
          <div className={styles.plansHeader}>
            <span className={styles.eyebrow}>Planos</span>
            <h2 className={styles.title}>
              Escolha o plano<br />
              <span className={styles.highlight}>ideal</span>
            </h2>
            <p className={styles.subtitle}>
              Três níveis de serviço para se encaixar no orçamento e nas
              expectativas da sua empresa. Também oferecemos opções para
              café da manhã e jantar.
            </p>
          </div>

          <div className={styles.plansGrid}>
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`${styles.planCard} ${styles[`plan--${plan.accent}`]} ${
                  plan.featured ? styles.planFeatured : ""
                }`}
                style={{ animationDelay: `${0.15 + index * 0.12}s` }}
              >
                {plan.featured && (
                  <span className={styles.planBadge}>Mais popular</span>
                )}
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Olá! Vim pelo site e gostaria de saber mais sobre o plano ${plan.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.planCta}
                >
                  Solicitar proposta
                </a>
              </div>
            ))}
          </div>

          <p className={styles.plansNote}>
            Valores personalizados conforme o número de colaboradores e modalidade.
            <br />
            <strong>Fale conosco</strong> para receber uma proposta sob medida.
          </p>
        </div>
      </div>
    </section>
  );
}
