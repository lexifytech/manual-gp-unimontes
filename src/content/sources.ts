import type { OfficialSource } from "./types";

export const officialSources: OfficialSource[] = [
  { label: "Portal institucional Unimontes", href: "https://unimontes.br/" },
  { label: "Curso Tecnologia em Gestão Pública", href: "https://unimontes.br/" },
  { label: "Centro de Ciências Sociais Aplicadas (CCSA)", href: "https://unimontes.br/" },
  { label: "Secretaria Geral", href: "https://secretariageral.unimontes.br/" },
  { label: "Fale com a Secretaria — Gestão Pública", href: "https://secretariageral.unimontes.br/fale-com-a-secretaria/" },
  { label: "Catálogo telefônico", href: "https://unimontes.br/catalogo-telefonico/" },
  { label: "Editais", href: "https://unimontes.br/editais/" },
  { label: "Pró-Reitoria de Pesquisa", href: "https://unimontes.br/" },
  { label: "Coordenadoria de Iniciação Científica", href: "https://unimontes.br/" },
  { label: "Pró-Reitoria de Extensão", href: "https://unimontes.br/pro-reitoria-de-extensao/" },
  { label: "PEAES", href: "https://peaes.unimontes.br/" },
  { label: "Restaurante Universitário", href: "https://unimontes.br/" },
  { label: "Biblioteca Universitária", href: "https://unimontes.br/" },
  { label: "GEPAD", href: "https://www.gepad.unimontes.br/" },
  { label: "WebGiz", href: "http://www.webgiz.unimontes.br/" },
  { label: "CEAD — AVA", href: "https://www.cead.unimontes.br/ava/login/index.php" },
  { label: "Normas de Graduação (PDF)", href: "https://unimontes.br/wp-content/uploads/2018/12/Normas_Para_Regulamentao_do_Ensino__04-12-2018.pdf" },
  { label: "Resoluções CEPEX", href: "https://unimontes.br/resolucoes_cepex/" },
  {
    label: "Projeto Pedagógico do Curso — PDF aprovado 2022 (cópia para consulta)",
    href: "/docs/ppc-gestao-publica-2022.pdf",
  },
];

export const emailTemplates = {
  coordination: {
    subject: "Solicitação de informações sobre oportunidades acadêmicas – Gestão Pública",
    body: `Prezados(as),

Sou acadêmico(a) do Curso Superior de Tecnologia em Gestão Pública e gostaria de conhecer as oportunidades atualmente disponíveis para participação discente em projetos de pesquisa, extensão, grupos de estudo, monitoria, eventos e atividades práticas.

Poderiam, por gentileza, informar quais iniciativas estão em andamento, quais admitem estudantes do curso e quais são os procedimentos para manifestar interesse ou participar de futuras seleções?

Agradeço pela atenção e orientação.

Atenciosamente,
[Nome] – [Período] – [Matrícula]`,
  },
  service: {
    subject: "Consulta sobre acesso e funcionamento de serviço universitário",
    body: `Prezados(as),

Sou acadêmico(a) da Unimontes e gostaria de confirmar as condições de acesso ao(à) [nome do serviço/espaço]. Poderiam informar o local de atendimento, horário vigente, necessidade de cadastro ou agendamento, documentos exigidos e eventual regulamento de utilização?

Agradeço desde já.

Atenciosamente,
[Nome] – [Curso] – [Matrícula]`,
  },
};