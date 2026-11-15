import { PageShell } from "@/components/layout/PageShell";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { officialSources } from "@/content/sources";
import { limitesLevantamento } from "@/content/manualMeta";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

const fontesManualOportunidades = [
  "Portal institucional Unimontes",
  "Curso de Tecnologia em Gestão Pública – descrição, contato, duração e estrutura curricular",
  "Centro de Ciências Sociais Aplicadas – CCSA",
  "Secretaria Geral – solicitações e acesso ao WebGiz",
  "Fale com a Secretaria – contato específico de Gestão Pública",
  "Catálogo Telefônico institucional",
  "Editais Unimontes",
  "Pró-Reitoria de Ensino",
  "Documentos e Normas da Pró-Reitoria de Ensino – monitoria e normas",
  "Pró-Reitoria de Pesquisa",
  "Coordenadoria de Iniciação Científica",
  "Coordenadorias da Pró-Reitoria de Pesquisa",
  "Pró-Reitoria de Extensão – formulários e ações de extensão",
  "Núcleo de Assuntos Estudantis – NAE",
  "Programa Estadual de Assistência Estudantil – PEAES",
  "Edital PEAES 05/2026",
  "Restaurante Universitário",
  "Biblioteca Universitária",
  "Centro de Ciências Humanas – estrutura e laboratórios listados",
  "Campus Universitário",
  "Mapa do Site",
];

export const metadata = pageTitle("Fontes oficiais");

export default function FontesPage() {
  return (
    <PageShell
      title="Fontes consultadas"
      lead="Links primários para conferência e atualização. Referência da compilação: 13/11/2026."
      source={PAGE_SOURCES.fontes}
      sourceDate="13/11/2026"
    >
      <ul className="space-y-2">
        {officialSources.map((s) => (
          <li key={s.href}>
            {s.href.startsWith("http") || s.href.startsWith("/") ? (
              <ExternalLink href={s.href}>{s.label}</ExternalLink>
            ) : (
              s.label
            )}
          </li>
        ))}
      </ul>
      <h2>Outras páginas e setores consultados</h2>
      <p className="text-sm text-uni-muted">
        Itens verificados no portal institucional. Use os links acima para a URL vigente de cada um.
      </p>
      <ul>
        {fontesManualOportunidades.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Limites da compilação</h2>
      <ul>
        {limitesLevantamento.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </PageShell>
  );
}