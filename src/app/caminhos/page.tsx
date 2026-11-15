import { PageShell } from "@/components/layout/PageShell";
import { pathRows } from "@/content/paths";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Qual setor procurar?");

export default function CaminhosPage() {
  return (
    <PageShell
      title="Mapa de caminhos"
      lead="Se você quer… comece por… e pergunte…"
      source="Manual_Acesso_Oportunidades §8"
      sourceDate="13/11/2026"
    >
      <div className="overflow-x-auto not-prose">
        <table className="w-full text-sm border border-uni-border">
          <thead className="bg-uni-green text-white">
            <tr>
              <th className="p-3 text-left">Se você quer…</th>
              <th className="p-3 text-left">Comece por…</th>
              <th className="p-3 text-left">Pergunta objetiva</th>
            </tr>
          </thead>
          <tbody>
            {pathRows.map((row) => (
              <tr key={row.goal} className="border-t border-uni-border hover:bg-uni-bg">
                <td className="p-3 font-medium">{row.goal}</td>
                <td className="p-3">{row.startAt}</td>
                <td className="p-3 text-uni-muted">{row.question}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}