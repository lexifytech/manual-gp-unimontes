import type { SearchDocument } from "./types";
import { opportunities } from "./opportunities";
import { pathRows } from "./paths";
import { campusPlaces } from "./campus";
import { administrationFaculty, courseCoordination } from "./faculty";
import { curriculumPeriods } from "./curriculum";

function flatten(): SearchDocument[] {
  const docs: SearchDocument[] = [
    {
      id: "home",
      title: "Manual acadêmico Gestão Pública",
      body: "Unimontes oportunidades pesquisa extensão ensino campus coordenação editais WebGiz GEPAD PEAES MEC Livros livros digitais",
      href: "/",
    },
    {
      id: "sobre",
      title: "Sobre o manual como usar ouvidoria",
      body: "apresentação limites levantamento conclusão redes sociais Disque 162 VLibras Libras acessibilidade surdos eMAG alto contraste NVDA leitor de tela atalhos teclado",
      href: "/sobre/",
    },
    {
      id: "diagnostico",
      title: "Pesquisa diagnóstico acadêmicos",
      body: "enquete 27 respondentes gráficos intervenção",
      href: "/diagnostico/",
    },
    {
      id: "curso",
      title: "Apresentação do curso",
      body: "Tecnologia Gestão Pública CCSA vespertino noturno coordenação Françoise PPC TCC Projeto de Intervenção",
      href: "/curso/",
    },
    {
      id: "matriz",
      title: "Matriz curricular",
      body: curriculumPeriods.flatMap((p) => p.disciplines.map((d) => d.name)).join(" "),
      href: "/matriz/",
    },
    {
      id: "vida",
      title: "Vida acadêmica AACC AIEX notas WebGiz",
      body: "AACC 100 horas AIEX 195 PEAES 05/2026 NAE CAE avaliação 70 prova final WebGiz matrícula frequência",
      href: "/vida-academica/",
    },
    {
      id: "ensino",
      title: "Ensino monitoria estágio intercâmbio",
      body: "monitoria estágio sala 8253 intercâmbio convênios empresa júnior 8254 calendário secretaria",
      href: "/ensino/",
    },
    {
      id: "pesquisa",
      title: "Pesquisa PROINIC iniciação científica",
      body: "PRP PROINIC ICV PIBIC PIBIC-AF PIBITI BIC Campi GEPAD CCAP Inemontes FEPEG ética",
      href: "/pesquisa/",
    },
    {
      id: "extensao",
      title: "Extensão PREX CAE",
      body: "extensão comunitária cultural NAE projetos sociais",
      href: "/extensao/",
    },
    {
      id: "mapa-grafico",
      title: "Mapa gráfico campus isométrico",
      body: "ilustração campus sede prédios PDF CCSA biblioteca RU",
      href: "/mapa-grafico/",
    },
    {
      id: "campus",
      title: "Campus mapa prédios",
      body: `${campusPlaces.map((p) => `${p.name} ${p.building ?? ""}`).join(" ")} MEC Livros biblioteca livros digitais`,
      href: "/campus/",
    },
    {
      id: "contatos",
      title: "Contatos secretaria coordenação",
      body: "secretaria.gestaopublica Marly curso.gestaopublica 3229-8265",
      href: "/contatos/",
    },
    {
      id: "acessibilidade",
      title: "Acessibilidade digital eMAG WCAG atalhos contraste",
      body: "leitor de tela NVDA VoiceOver VLibras alto contraste barreira conformidade",
      href: "/acessibilidade/",
    },
    {
      id: "mapa-do-site",
      title: "Mapa do site navegação páginas",
      body: "lista páginas manual menu início sobre busca campus contatos acessibilidade",
      href: "/mapa-do-site/",
    },
    {
      id: "sugestoes",
      title: "Sugestões feedback melhoria manual",
      body: "questionário sugestão erro lacuna navegação campus oportunidades",
      href: "/sugestoes/",
    },
  ];

  for (const o of opportunities) {
    docs.push({
      id: o.id,
      title: o.title,
      body: `${o.summary} ${o.sector} ${o.category}`,
      href: "/oportunidades/",
    });
  }

  for (const p of pathRows) {
    docs.push({
      id: `path-${p.goal.slice(0, 20)}`,
      title: p.goal,
      body: `${p.startAt} ${p.question}`,
      href: "/caminhos/",
    });
  }

  for (const f of [...courseCoordination, ...administrationFaculty]) {
    docs.push({
      id: f.name,
      title: f.name,
      body: `${f.role ?? ""} ${f.email ?? ""} ${f.location ?? ""}`,
      href: "/corpo-docente/",
    });
  }

  return docs;
}

export const searchDocuments = flatten();