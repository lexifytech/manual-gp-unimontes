/** Textos da página de acessibilidade (alinhados ao eMAG 3.1). */

export const acessibilidadeIntro = [
  "Este manual segue recomendações do eMAG (Modelo de Acessibilidade em Governo Eletrônico) e das WCAG, com barra de recursos, atalhos de teclado, modo de alto contraste, compatibilidade com leitores de tela e VLibras para tradução em Libras.",
  "A acessibilidade digital depende também do navegador e de tecnologias assistivas instaladas no seu dispositivo. Se encontrar dificuldade, use a página Sugestões ou os canais institucionais da Unimontes.",
];

export const recursosDoSite = [
  "Barra de acessibilidade no topo de todas as páginas: link para a página Acessibilidade (/acessibilidade/), alternância de alto contraste e mapa do site.",
  "Link «Ir para o conteúdo» visível ao teclado (primeiro foco na página).",
  "Alto contraste com fundo preto, texto branco e links amarelos sublinhados (relação de contraste otimizada conforme eMAG). A preferência é lembrada no navegador.",
  "VLibras (botão flutuante à esquerda) para tradução de trechos em Libras — complementar a intérpretes humanos.",
  "Estrutura com títulos, listas e rótulos em formulários de busca e feedback, para uso com leitores de tela.",
];

export const atalhosTeclado = [
  {
    keys: "Alt + 1",
    alvo: "Início do conteúdo principal da página",
    id: "conteudo",
  },
  {
    keys: "Alt + 2",
    alvo: "Menu principal",
    id: "main-nav",
  },
  {
    keys: "Alt + 3",
    alvo: "Campo de busca do manual",
    id: "acesso-busca",
  },
  {
    keys: "Alt + 4",
    alvo: "Rodapé",
    id: "rodape",
  },
] as const;

export const atalhosNavegadorNota =
  "No Firefox, use Alt + Shift + o número. No Opera, use Shift + Esc e depois o número. Em macOS, alguns navegadores usam Ctrl + Alt + o número.";

export const redimensionarTexto = [
  "Ctrl + + (ou Cmd + +): aumentar texto",
  "Ctrl + - (ou Cmd + -): diminuir texto",
  "Ctrl + 0 (ou Cmd + 0): restaurar tamanho padrão",
];

export const leitoresDeTela = [
  {
    nome: "NVDA (Windows, gratuito)",
    href: "https://www.nvaccess.org/download/",
    desc: "Leitor de tela gratuito e amplamente usado no Brasil. Navegue com Tab (links e controles), setas (texto) e a tecla H para títulos.",
  },
  {
    nome: "VoiceOver (macOS e iOS)",
    href: "https://www.apple.com/br/accessibility/voiceover/",
    desc: "Leitor integrado da Apple. Ative nas configurações de acessibilidade do sistema.",
  },
  {
    nome: "JAWS (Windows, comercial)",
    href: "https://www.freedomscientific.com/products/software/jaws/",
    desc: "Leitor de tela profissional para Windows.",
  },
  {
    nome: "Orca (Linux, gratuito)",
    href: "https://orca.gnome.org/",
    desc: "Leitor de tela para ambientes GNOME.",
  },
];

export const emagReferencia = {
  label: "eMAG — Modelo de Acessibilidade em Governo Eletrônico",
  href: "https://emag.governoeletronico.gov.br/",
};

export const wcagReferencia = {
  label: "WCAG 2.1 — Diretrizes de Acessibilidade para Conteúdo Web",
  href: "https://www.w3.org/TR/WCAG21/",
};

export const conformidadeDeclaracao = {
  nivelAlvo: "WCAG 2.1 Nível AA e eMAG 3.1",
  dataRevisao: "23/11/2026",
  metodos: [
    "Revisão de marcação semântica (landmarks, tabelas, formulários, gráficos com equivalente em tabela).",
    "Validação automática pós-build com axe-core (npm run a11y — análise estática; npm run a11y:chrome com Google Chrome instalado).",
    "Verificação manual com teclado (Tab, atalhos Alt+1 a 4) e leitor de tela (NVDA).",
  ],
  autodeclaracao:
    "Esta conformidade é autodeclarada pelo projeto acadêmico do curso de Gestão Pública (UNIMONTES), sem certificação oficial de terceiros.",
};

export const limitacoesConhecidas = [
  "Gráficos interativos (SVG) são complementados por tabelas de dados na página de diagnóstico.",
  "VLibras e outros recursos hospedados em domínios externos dependem de conexão com a internet.",
  "PDFs citados no manual (ex.: PPC) só são acessíveis na medida em que o arquivo fonte o for.",
];

export const canalBarreiraAcessibilidade = {
  email: "curso.gestaopublica@unimontes.br",
  sugestoesHref: "/sugestoes/",
  texto:
    "Se encontrar barreira de acessibilidade, envie sugestão na página Sugestões (tema Acessibilidade ou usabilidade) ou escreva para a coordenação do curso.",
};

export const checklistTesteManual = [
  "Navegar da home até Busca e Sugestões apenas com Tab e Enter.",
  "Acionar Alt+1, Alt+2, Alt+3 e Alt+4 em duas páginas diferentes.",
  "Ativar alto contraste e verificar leitura de links e tabelas.",
  "Com NVDA ou VoiceOver: percorrer menu, uma tabela (Matriz) e um gráfico com tabela associada.",
];