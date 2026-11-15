import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { ResearchSurveySection } from "@/components/research/ResearchSurveySection";
import { diagnosticoProjeto } from "@/content/manualMeta";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Pesquisa com acadêmicos");

export default function DiagnosticoPage() {
  return (
    <PageShell
      title="Diagnóstico e pesquisa com acadêmicos"
      lead="Levantamento com 27 respondentes (2026) e motivação do projeto de intervenção."
      source={PAGE_SOURCES.diagnostico}
      sourceDate="2026"
    >
      <h2>Problema identificado no projeto</h2>
      <p>{diagnosticoProjeto}</p>
      <p className="text-sm text-uni-muted">
        Projeto de intervenção organizacional — orientação Profa. June Marize Castro Silva.
      </p>

      <h2>Resultados da enquete (gráficos)</h2>
      <p className="text-sm text-uni-muted mb-4">
        Dados da pesquisa aplicada aos acadêmicos do curso (27 respondentes, 2026), reproduzidos
        fielmente a partir da exportação do formulário. Sem identificação individual.
      </p>
      <ResearchSurveySection />

      <p className="mt-6">
        <Link href="/sobre/" className="text-uni-link underline font-medium">
          Sobre este site e limites da compilação
        </Link>
      </p>
    </PageShell>
  );
}