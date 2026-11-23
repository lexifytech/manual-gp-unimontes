import { PageShell } from "@/components/layout/PageShell";
import { DataTable, Th } from "@/components/ui/DataTable";
import { pathRows } from "@/content/paths";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Qual setor procurar?");

export default function CaminhosPage() {
  return (
    <PageShell
      title="Mapa de caminhos"
      lead="Se você quer… comece por… e pergunte…"
      source={PAGE_SOURCES.caminhos}
      sourceDate="13/11/2026"
    >
      <DataTable caption="Mapa de caminhos — objetivo, ponto de partida e pergunta" className="w-full text-sm border border-uni-border">
        <thead className="bg-uni-blue text-white">
          <tr>
            <Th scope="col" className="p-3 text-left">
              Se você quer…
            </Th>
            <Th scope="col" className="p-3 text-left">
              Comece por…
            </Th>
            <Th scope="col" className="p-3 text-left">
              Pergunta objetiva
            </Th>
          </tr>
        </thead>
        <tbody>
          {pathRows.map((row) => (
            <tr key={row.goal} className="border-t border-uni-border hover:bg-uni-bg">
              <th scope="row" className="p-3 font-medium text-left">
                {row.goal}
              </th>
              <td className="p-3">{row.startAt}</td>
              <td className="p-3 text-uni-muted">{row.question}</td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </PageShell>
  );
}