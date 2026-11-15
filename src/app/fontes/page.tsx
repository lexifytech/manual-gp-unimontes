import { PageShell } from "@/components/layout/PageShell";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { officialSources } from "@/content/sources";
import { limitesLevantamento } from "@/content/manualMeta";
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
      lead="Links primários para conferência e atualização. Data de levantamento do manual de oportunidades: 13/11/2026."
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
      <h2>Referências do levantamento (manual §11)</h2>
      <p className="text-sm text-uni-muted">
        Lista reproduzida do manual de oportunidades. Use os links acima ou o portal para a URL
        vigente de cada item.
      </p>
      <ul>
        {fontesManualOportunidades.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Limites do levantamento (manual §12)</h2>
      <ul>
        {limitesLevantamento.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Documentos locais (docs/)</h2>
      <ul>
        <li>Manual_Acesso_Oportunidades_Unimontes_Gestao_Publica.docx</li>
        <li>Manual_Gestao_Publica_Unimontes.docx</li>
        <li>PPC Tecnologia em gestão pública — aprovado 2022.pdf</li>
        <li>Projeto de intervenção (DOC-20260628-WA0016..docx)</li>
      </ul>
    </PageShell>
  );
}