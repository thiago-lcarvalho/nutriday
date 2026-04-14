import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutriday | Alimentação Corporativa em Alagoas",
  description:
    "Há 17 anos levando saúde e sabor para empresas de Alagoas. Refeições corporativas com 4 opções de cardápio por dia, equipe de nutricionistas e estrutura completa.",
  keywords: [
    "restaurante corporativo",
    "alimentação corporativa",
    "refeições empresariais",
    "Alagoas",
    "Maceió",
    "nutricionista",
    "marmitas corporativas",
  ],
  authors: [{ name: "Nutriday" }],
  icons: {
    icon: "/images/N-ICON.png",
    apple: "/images/N-ICON.png",
  },
  openGraph: {
    title: "Nutriday | Alimentação Corporativa em Alagoas",
    description:
      "Há 17 anos levando saúde e sabor para empresas de Alagoas. Refeições corporativas com equipe de nutricionistas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
