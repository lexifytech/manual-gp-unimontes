import { PageShell } from "@/components/layout/PageShell";
import { emailTemplates } from "@/content/sources";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Modelos de mensagem");

export default function ModelosPage() {
  return (
    <PageShell
      title="Modelos de mensagem"
      lead="Modelos de e-mail para contato com coordenação e serviços."
      source={PAGE_SOURCES.modelos}
      sourceDate="13/11/2026"
    >
      {Object.entries(emailTemplates).map(([key, tpl]) => (
        <section key={key} className="mb-8">
          <h2>{key === "coordination" ? "Coordenação / departamento" : "Serviço do campus"}</h2>
          <p className="text-sm text-uni-muted">Assunto: {tpl.subject}</p>
          <pre className="mt-3 p-4 bg-white border border-uni-border rounded-lg text-sm whitespace-pre-wrap overflow-x-auto">
            {tpl.body}
          </pre>
        </section>
      ))}
    </PageShell>
  );
}