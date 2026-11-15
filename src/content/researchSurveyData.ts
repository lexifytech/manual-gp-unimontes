export const SURVEY_TOTAL_RESPONSES = 27;

export type SurveySlice = {
  label: string;
  percent: number;
  count?: number;
};

export type SurveyPieQuestion = {
  id: string;
  kind: "pie";
  question: string;
  options: SurveySlice[];
};

export type SurveyHorizontalBarQuestion = {
  id: string;
  kind: "horizontal-bar";
  question: string;
  multiSelectNote?: string;
  options: SurveySlice[];
};

export type SurveyLikertQuestion = {
  id: string;
  kind: "likert";
  question: string;
  options: SurveySlice[];
};

export type SurveyOpenQuestion = {
  id: string;
  kind: "open";
  question: string;
  responses: string[];
};

export type SurveyQuestion =
  | SurveyPieQuestion
  | SurveyHorizontalBarQuestion
  | SurveyLikertQuestion
  | SurveyOpenQuestion;

/** Dados extraídos dos gráficos da enquete (Google Forms, 27 respondentes, 2026). */
export const surveyQuestions: SurveyQuestion[] = [
  {
    id: "estrutura-fisica",
    kind: "pie",
    question:
      "Como você avalia o acesso às informações sobre a estrutura física da universidade, como salas de aula, biblioteca, laboratórios, acessibilidade e espaços de convivência?",
    options: [
      { label: "Tenho acesso, mas as informações são incompletas.", percent: 63 },
      { label: "Tenho dificuldade para obter essas informações.", percent: 18.5 },
      { label: "Tenho acesso fácil e suficiente a essas informações.", percent: 18.5 },
      { label: "Nunca procurei ou não conheço essas informações.", percent: 0 },
    ],
  },
  {
    id: "funcionamento-ensino",
    kind: "pie",
    question:
      "As informações sobre o funcionamento do ensino, como metodologias das disciplinas, critérios de avaliação, atividades acadêmicas e orientações dos professores, chegam a você de forma clara e suficiente?",
    options: [
      { label: "Na maioria das vezes.", percent: 48.1 },
      { label: "Raramente.", percent: 44.4 },
      { label: "Sempre ou quase sempre.", percent: 7.4 },
      { label: "Nunca ou quase nunca.", percent: 0 },
    ],
  },
  {
    id: "oportunidades-pesquisa",
    kind: "pie",
    question:
      "Você recebe informações sobre oportunidades de pesquisa, iniciação científica, grupos de estudo, eventos acadêmicos e produção científica no curso ou na universidade?",
    options: [
      { label: "Raramente recebo essas informações.", percent: 37 },
      { label: "Nunca recebi ou não tenho conhecimento dessas oportunidades.", percent: 29.6 },
      { label: "Sim, mas de forma limitada ou incompleta.", percent: 29.6 },
      { label: "Sim, com frequência e de forma clara.", percent: 3.7 },
    ],
  },
  {
    id: "divulgacao-extensao",
    kind: "pie",
    question:
      "Como você avalia a divulgação das oportunidades de extensão, como projetos sociais, cursos, eventos, ações comunitárias e participação em atividades junto à sociedade?",
    options: [
      { label: "Existe divulgação, mas poderia ser mais ampla.", percent: 63 },
      { label: "A divulgação é insuficiente e pouco acessível.", percent: 33.3 },
      { label: "Não tenho conhecimento dessas oportunidades.", percent: 3.7 },
      { label: "A divulgação é suficiente e acessível.", percent: 0 },
    ],
  },
  {
    id: "servicos-institucionais",
    kind: "pie",
    question:
      "Além das informações acadêmicas, como você avalia a divulgação de orientações sobre assistência estudantil, apoio ao estudante, acessibilidade, direitos e deveres, representação discente e demais serviços institucionais?",
    options: [
      { label: "Tenho pouco conhecimento sobre esses assuntos.", percent: 51.9 },
      { label: "Consigo encontrar algumas informações, mas há lacunas.", percent: 44.4 },
      { label: "Não tenho acesso ou não sei onde encontrar essas informações.", percent: 3.7 },
      { label: "As informações são claras, completas e fáceis de encontrar.", percent: 0 },
    ],
  },
  {
    id: "maior-dificuldade",
    kind: "pie",
    question:
      "Qual é sua maior dificuldade ao procurar informações relacionadas ao curso de Gestão Pública e à universidade?",
    options: [
      {
        label:
          "Encontrar informações sobre estágios, oportunidades e atuação profissional.",
        percent: 59.3,
      },
      {
        label:
          "Saber onde encontrar informações sobre serviços e setores da universidade.",
        percent: 25.9,
      },
      { label: "Tenho outras dificuldades.", percent: 7.4 },
      {
        label:
          "Encontrar informações sobre disciplinas, grade curricular e pré-requisitos.",
        percent: 7.4,
      },
      {
        label:
          "Encontrar informações sobre horários, calendário acadêmico e prazos.",
        percent: 0,
      },
      {
        label: "Não tenho dificuldades para encontrar informações.",
        percent: 0,
      },
    ],
  },
  {
    id: "como-busca-informacao",
    kind: "pie",
    question:
      "Quando você precisa resolver uma dúvida ou um problema acadêmico, como costuma encontrar as informações necessárias?",
    options: [
      { label: "Pergunto aos professores ou à coordenação do curso.", percent: 55.6 },
      { label: "Tenho dificuldade para saber onde procurar ou a quem recorrer.", percent: 22.2 },
      { label: "Procuro nos sites e plataformas oficiais da universidade.", percent: 11.1 },
      { label: "Procuro em grupos de WhatsApp ou outras redes sociais.", percent: 7.4 },
      {
        label:
          "Pergunto aos colegas de turma ou a alunos de períodos mais avançados.",
        percent: 3.7,
      },
    ],
  },
  {
    id: "marque-aplicam",
    kind: "horizontal-bar",
    question: "Marque as que se aplicam",
    multiSelectNote:
      "Pergunta de múltipla escolha — os percentuais podem somar mais de 100%.",
    options: [
      {
        label:
          "Sinto falta de uma forma fácil de acesso das informações sobre o curso e da faculdade",
        count: 21,
        percent: 77.8,
      },
      {
        label: "As informações enviadas por canais oficiais raramente me atendem",
        count: 4,
        percent: 14.8,
      },
      {
        label:
          "Muitas vezes preciso ir até a coordenação do curso para pedir informações básicas",
        count: 13,
        percent: 48.1,
      },
      { label: "Nenhuma se aplica.", count: 0, percent: 0 },
    ],
  },
  {
    id: "manual-facilitador",
    kind: "pie",
    question:
      "Você diria que um documento disponibilizado via PDF em canais oficiais e no site da Unimontes ou terceiros confiáveis (GITHUB) que reunisse das informações mais essenciais e básicas tanto da faculdade quanto do curso até pontos mais específicos seria um facilitador em seus estudos?",
    options: [
      { label: "Ajudaria durante toda a trajetória.", percent: 51.9 },
      {
        label: "Ajudaria, mas acho que há métodos melhores de reunir informações.",
        percent: 48.1,
      },
      { label: "Não, está tudo bem como está atualmente.", percent: 0 },
      { label: "Ajudaria, mas somente nos primeiros períodos.", percent: 0 },
    ],
  },
  {
    id: "nivel-dificuldade",
    kind: "likert",
    question:
      "Qual o seu nível de dificuldade médio em encontrar informações sobre os locais da faculdade e sobre os conteúdos e oportunidades no curso de Gestão Pública?",
    options: [
      { label: "1", count: 1, percent: 3.7 },
      { label: "2", count: 2, percent: 7.4 },
      { label: "3", count: 13, percent: 48.1 },
      { label: "4", count: 8, percent: 29.6 },
      { label: "5", count: 3, percent: 11.1 },
    ],
  },
  {
    id: "sugestoes-documento",
    kind: "open",
    question:
      "Você teria alguma sugestão do que deve conter nesse documento além de: Informações sobre o curso básicas e oportunidades de estágio; Informações básicas do que a Unimontes pode oferecer; Relatório de mudanças que afetam o ambiente acadêmico/curso? Caso não tenha, coloque um ponto final na resposta (.)",
    responses: [
      ".",
      "Por ora não",
      "no momento não tenho",
      "Sugiro incluir mais informações sobre o mercado de trabalho na área de Gestão Pública, apresentando os principais locais onde o profissional pode atuar, tanto no setor público quanto no privado. Também seria interessante informar onde os estudantes podem procurar oportunidades de estágio, quais plataformas divulgam vagas, quais órgãos e instituições costumam receber estagiários e como funciona o estágio obrigatório do curso, incluindo carga horária, período adequado para realizá-lo e procedimentos necessários. Acredito que essas informações ajudariam bastante os acadêmicos a se prepararem para a vida profissional e a identificarem oportunidades ainda durante a graduação.",
      "No início da graduação já poderia ser apresentado como ter acesso a estágio, iniciação científica, projetos entre outros.",
      "Um Site que reuna todas as informações.",
      "Não",
      "Divulgação de bolsas e comunicação sobre cursos e palestras para cumprir o exigido sobre AACC e AIEX",
      "Um manual imprimível seria ótimo. Mesmo que não tivesse as informações completas, poderia direcionar o acadêmico para um caminho mais rápido e seguro. Informação é tudo no universo universitário.",
      "Um mapa sobre onde encontrar as unidades físicas, tipo biblioteca, quadra etc...",
      "Melhorar diálogo",
    ],
  },
];

export const surveyHighlightIds = [
  "maior-dificuldade",
  "estrutura-fisica",
  "manual-facilitador",
] as const;