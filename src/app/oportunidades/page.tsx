import { PageShell } from "@/components/layout/PageShell";
import { OpportunityCard } from "@/components/ui/OpportunityCard";
import { opportunities } from "@/content/opportunities";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Oportunidades");

export default function OportunidadesPage() {
  return (
    <PageShell
      title="Oportunidades"
      lead="Chamadas, programas e caminhos para participação discente. Editais vigentes sempre no portal oficial."
      source={PAGE_SOURCES.oportunidades}
      sourceDate="13/11/2026"
      mutable
    >
      <div className="grid md:grid-cols-2 gap-6 not-prose">
        {opportunities.map((o) => (
          <OpportunityCard key={o.id} opportunity={o} />
        ))}
      </div>
    </PageShell>
  );
}