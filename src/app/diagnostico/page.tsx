import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { diagnosticoProjeto, researchImages } from "@/content/manualMeta";
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
        Imagens exportadas da pesquisa aplicada aos acadêmicos do curso. Sem identificação de
        respondentes.
      </p>
      <div className="grid md:grid-cols-2 gap-4 not-prose">
        {researchImages.map((file) => (
          <figure key={file} className="rounded-lg border border-uni-border bg-white p-3">
            <Image
              src={`/research/${file}`}
              alt="Gráfico ou resposta da pesquisa com acadêmicos de Gestão Pública"
              width={800}
              height={600}
              className="w-full h-auto rounded"
            />
          </figure>
        ))}
      </div>

      <p className="mt-6">
        <Link href="/sobre/" className="text-uni-link underline font-medium">
          Sobre este site e limites da compilação
        </Link>
      </p>
    </PageShell>
  );
}