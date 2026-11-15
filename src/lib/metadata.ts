import type { Metadata } from "next";

const siteName = "Manual acadêmico — Gestão Pública";
const description =
  "Guia prático para acadêmicos do curso de Tecnologia em Gestão Pública da Unimontes: curso, oportunidades, campus e contatos oficiais.";

export const baseMetadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  metadataBase: new URL("https://unimontes.br"),
  openGraph: {
    title: siteName,
    description,
    locale: "pt_BR",
    type: "website",
  },
};

export function pageTitle(title: string): Metadata {
  return { title, description };
}