/** Destinatário do formulário de sugestões (FormSubmit.co). Sobrescreva com NEXT_PUBLIC_FEEDBACK_EMAIL no deploy. */

export const feedbackRecipientEmail =
  process.env.NEXT_PUBLIC_FEEDBACK_EMAIL ?? "curso.gestaopublica@unimontes.br";

export const feedbackCategories = [
  { value: "conteudo", label: "Conteúdo do manual (texto, links, dados)" },
  { value: "navegacao", label: "Navegação e organização do site" },
  { value: "mapa-campus", label: "Mapa do campus / localização" },
  { value: "oportunidades", label: "Oportunidades (bolsas, editais, extensão)" },
  { value: "acessibilidade", label: "Acessibilidade ou usabilidade" },
  { value: "outro", label: "Outro assunto" },
] as const;

export type FeedbackCategory = (typeof feedbackCategories)[number]["value"];

export const feedbackPeriodOptions = [
  { value: "", label: "Prefiro não informar" },
  { value: "ingressante", label: "Ingressante / 1º período" },
  { value: "2-4", label: "2º ao 4º período" },
  { value: "5-8", label: "5º ao 8º período" },
  { value: "concluinte", label: "Concluinte ou egresso" },
] as const;