import type { Opportunity } from "@/components/ui/OpportunityCard";
import { peaesNotaEdital } from "@/content/manualMeta";

export const opportunities: Opportunity[] = [
  {
    id: "editais",
    title: "Editais Unimontes",
    category: "Central",
    summary:
      "Chamadas de pesquisa, extensão, assistência estudantil, monitoria, eventos e bolsas ao longo do ano.",
    sector: "Portal institucional",
    steps: [
      "Consulte semanalmente a página de editais.",
      "Leia anexos e retificações — a chamada resumida não substitui o edital.",
      "Use a busca do navegador por termos como iniciação científica, extensão, PEAES e monitoria.",
    ],
    links: [{ href: "https://unimontes.br/editais/", label: "unimontes.br/editais" }],
  },
  {
    id: "monitoria",
    title: "Monitoria",
    category: "Ensino",
    summary:
      "Aprofundamento de conteúdos e apoio ao ensino. Oferta e condições dependem de disciplina, departamento e edital.",
    sector: "Pró-Reitoria de Ensino + coordenação/professor da disciplina",
    steps: [
      "Acesse Pró-Reitoria de Ensino → Documentos e Normas → Orientações para Monitoria.",
      "Leia as Normas Gerais e documentos exigidos.",
      "Pergunte à coordenação quais disciplinas abrirão seleção.",
      "Acompanhe editais e comunicados do departamento.",
    ],
    links: [
      { href: "https://unimontes.br/", label: "Portal Unimontes — Pró-Reitoria de Ensino" },
    ],
  },
  {
    id: "estagio",
    title: "Estágio",
    category: "Ensino",
    summary:
      "Estágio curricular não é obrigatório no PPC do curso, mas há Sala de Estágios no Departamento de Ciências da Administração.",
    sector: "Sala de Estágios — Dept. Administração",
    phone: "(38) 3229-8253",
    steps: [
      "Confirme com a coordenação se há reconhecimento de estágio no currículo vigente.",
      "Procure a Sala de Estágios para modelos e procedimentos.",
      "Formalize convênio, plano de atividades e termo antes de iniciar.",
    ],
  },
  {
    id: "iniciacao",
    title: "Iniciação científica (PROINIC)",
    category: "Pesquisa",
    summary:
      "Programa institucional com modalidades como ICV voluntária e linhas com bolsa (PIBIC, PIBITI etc.), conforme edital.",
    sector: "Coordenadoria de Iniciação Científica / PRP",
    steps: [
      "Defina tema relacionado à Gestão Pública.",
      "Identifique docente orientador e leia o edital integral.",
      "Prepare inscrição no formato solicitado e acompanhe resultados.",
    ],
    links: [{ href: "https://unimontes.br/", label: "Pró-Reitoria de Pesquisa" }],
  },
  {
    id: "empresa-junior",
    title: "Empresa Júnior — Departamento de Administração",
    category: "Ensino",
    summary:
      "Contato institucional publicado no catálogo telefônico do Departamento de Ciências da Administração.",
    sector: "Departamento de Ciências da Administração",
    phone: "(38) 3229-8254",
    steps: [
      "Confirme com o departamento ou coordenação se há atividades abertas a estudantes de Gestão Pública.",
    ],
  },
  {
    id: "gepad",
    title: "GEPAD — Grupo de Estudos e Pesquisas em Administração",
    category: "Pesquisa",
    summary:
      "Ponto de entrada para perguntar sobre reuniões, linhas de pesquisa e ingresso de graduandos no departamento.",
    sector: "Departamento de Ciências da Administração",
    phone: "(38) 3229-8255",
    email: "gepad@unimontes.br",
    steps: [
      "Visite o GEPAD (Prédio 1, 3º piso) ou envie e-mail institucional.",
      "Informe nome, período, e-mail, telefone e horário de disponibilidade.",
    ],
    links: [
      { href: "https://www.gepad.unimontes.br/sobre/", label: "Como fazer parte — GEPAD" },
    ],
  },
  {
    id: "extensao-bolsas",
    title: "Extensão e bolsas",
    category: "Extensão",
    summary:
      "Programas, projetos e ações que conectam universidade e sociedade. Ingresso por edital e seleção.",
    sector: "Pró-Reitoria de Extensão (PREX)",
    email: "extensao.comunitaria@unimontes.br",
    phone: "(38) 3229-8409",
    steps: [
      "Acesse a PREX e leia editais e formulários.",
      "Verifique elegibilidade para estudantes de Gestão Pública.",
      "Inscreva-se no canal oficial e guarde comprovante.",
    ],
    links: [{ href: "https://unimontes.br/pro-reitoria-de-extensao/", label: "Pró-Reitoria de Extensão" }],
  },
  {
    id: "peaes",
    title: "PEAES — Assistência estudantil",
    category: "Permanência",
    summary: `Política de permanência conforme critérios socioeconômicos e acadêmicos definidos em edital. ${peaesNotaEdital}`,
    sector: "Programa Estadual de Assistência Estudantil",
    email: "peaes@unimontes.br",
    steps: [
      "Abra o edital vigente no portal — não use valores de edições antigas.",
      "Organize documentos comprobatórios exigidos.",
      "Inscreva-se pelo portal indicado no edital (ex.: peaes.unimontes.br).",
    ],
    links: [{ href: "https://peaes.unimontes.br/", label: "Portal PEAES" }],
  },
  {
    id: "fepeg",
    title: "FEPEG",
    category: "Evento",
    summary:
      "Fórum de Ensino, Pesquisa, Extensão e Gestão — divulgação da produção discente e docente.",
    sector: "Pró-Reitoria de Pesquisa",
    steps: [
      "Acompanhe chamadas de resumo, apresentação e certificação no portal e editais.",
    ],
  },
  {
    id: "cae",
    title: "CAE / NAE — Apoio ao estudante",
    category: "Assistência",
    summary:
      "Esporte, cultura, lazer, apoio didático-pedagógico e saúde dos estudantes.",
    sector: "Coordenadoria de Apoio ao Estudante",
    email: "cae@unimontes.br",
    phone: "(38) 3229-8163",
  },
];