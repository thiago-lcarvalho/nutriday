# Page Structure: Nutriday

## Sections

### 1. Navbar
- **Purpose**: Navegação principal e acesso rápido ao CTA
- **Content**: Logo, links (Sobre, Serviços, Diferenciais, Contato), botão CTA
- **Component**: `Navbar`
- **Behavior**: Sticky no scroll, menu mobile hamburger

### 2. Hero
- **Purpose**: Capturar atenção e comunicar proposta de valor
- **Content**: Headline, subheadline, 2 CTAs, foto, stats flutuantes
- **Component**: `Hero`
- **Copy**: "Alimentação corporativa que sua equipe merece"

### 3. Stats
- **Purpose**: Construir credibilidade com números
- **Content**: 4 métricas (17 anos, 4 cardápios, 100% AL, 7 dias)
- **Component**: `Stats`
- **Behavior**: Contadores animados quando visível

### 4. Features (Diferenciais)
- **Purpose**: Destacar vantagens competitivas
- **Content**: 6 cards com ícones
- **Component**: `Features`
- **Copy**: "Por que empresas escolhem a Nutriday"

### 5. How It Works
- **Purpose**: Reduzir fricção mostrando simplicidade
- **Content**: 3 passos numerados com linha conectora
- **Component**: `HowItWorks`
- **Copy**: "Comece em 3 passos simples"

### 6. Services
- **Purpose**: Mostrar versatilidade e preço
- **Content**: 4 cards de indústrias, destaque de preço (R$17)
- **Component**: `Services`
- **Copy**: "Soluções para cada tipo de operação"

### 7. About
- **Purpose**: Humanizar a marca e construir confiança
- **Content**: Foto fundadores, história, timeline
- **Component**: `About`
- **Copy**: "Uma parceria de 17 anos com o sabor"

### 8. Testimonial
- **Purpose**: Prova social
- **Content**: Citação, foto cliente, nome/cargo
- **Component**: `Testimonial`
- **Status**: Placeholder (aguardando conteúdo)

### 9. CTA Section
- **Purpose**: Conversão final
- **Content**: Headline, subheadline, botão WhatsApp grande
- **Component**: `CTASection`
- **Copy**: "Pronto para transformar a alimentação da sua empresa?"

### 10. Footer
- **Purpose**: Informações complementares e navegação
- **Content**: Logo, links, contato, redes sociais, copyright
- **Component**: `Footer`

---

## Visual Flow

```
┌─────────────────────────────────────┐
│           NAVBAR (sticky)           │
├─────────────────────────────────────┤
│                                     │
│              HERO                   │
│    [Headline] [Subhead] [CTAs]      │
│         [Image + Stats]             │
│                                     │
├─────────────────────────────────────┤
│              STATS                  │
│    [17]    [4]    [100%]   [7]     │
├─────────────────────────────────────┤
│           FEATURES (beige)          │
│    [Card] [Card] [Card]             │
│    [Card] [Card] [Card]             │
├─────────────────────────────────────┤
│          HOW IT WORKS               │
│    [1]────────[2]────────[3]        │
├─────────────────────────────────────┤
│          SERVICES (green)           │
│   [Content]  │  [Cards]             │
│   [Price]    │  [Cards]             │
├─────────────────────────────────────┤
│              ABOUT                  │
│   [Photo]    │  [Story]             │
│   [Badge]    │  [Founders]          │
├─────────────────────────────────────┤
│        TESTIMONIAL (beige)          │
│         [Quote Icon]                │
│         [Big Quote]                 │
│         [Author]                    │
├─────────────────────────────────────┤
│          CTA (orange)               │
│         [Headline]                  │
│         [WhatsApp Button]           │
├─────────────────────────────────────┤
│           FOOTER (green)            │
│   [Brand] [Links] [Services] [Contact]
│           [Copyright]               │
└─────────────────────────────────────┘
```
