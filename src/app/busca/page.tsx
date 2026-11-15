import { PageShell } from "@/components/layout/PageShell";
import { SearchClient } from "@/components/SearchClient";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Busca");

export default function BuscaPage() {
  return (
    <PageShell title="Busca" lead="Encontre setores, oportunidades, contatos e disciplinas.">
      <SearchClient />
    </PageShell>
  );
}