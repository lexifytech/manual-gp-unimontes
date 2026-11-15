import { PageShell } from "@/components/layout/PageShell";
import { AlertDisclaimer } from "@/components/ui/AlertDisclaimer";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { curriculumPeriods, workloadSummary } from "@/content/curriculum";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Matriz Curricular");

export default function MatrizPage() {
  return (
    <PageShell
      title="Matriz curricular"
      lead="Organização em quatro períodos. Disciplinas EAD usam o ambiente do CEAD."
      source={PAGE_SOURCES.matriz}
      sourceDate="nov/2026"
    >
      <AlertDisclaimer>
        Confira horários e disciplinas EAD no AVA:{" "}
        <ExternalLink href="https://www.cead.unimontes.br/ava/login/index.php">
          CEAD — login AVA
        </ExternalLink>
        . Acesso usual: CPF ou e-mail e senha fornecida pelo curso (alterável após o primeiro
        acesso).
      </AlertDisclaimer>

      {curriculumPeriods.map((period) => (
        <section key={period.period}>
          <h2>{period.period}º período</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-uni-border mb-8">
              <thead className="bg-uni-blue text-white">
                <tr>
                  <th className="p-2 text-left">Disciplina</th>
                  <th className="p-2">T</th>
                  <th className="p-2">P</th>
                  <th className="p-2">AS</th>
                  <th className="p-2">H/A</th>
                </tr>
              </thead>
              <tbody>
                {period.disciplines.map((d) => (
                  <tr key={d.name} className="border-t border-uni-border">
                    <td className="p-2">
                      {d.name}
                      {d.note && (
                        <span className="block text-xs text-uni-muted">{d.note}</span>
                      )}
                    </td>
                    <td className="p-2 text-center">{d.theoretical}</td>
                    <td className="p-2 text-center">{d.practical}</td>
                    <td className="p-2 text-center">{d.weeklyClasses}</td>
                    <td className="p-2 text-center">{d.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <h2>Composição da carga horária total</h2>
      <table className="w-full text-sm border border-uni-border max-w-md">
        <tbody>
          {[
            ["Atividades teóricas", workloadSummary.theoretical],
            ["Atividades práticas", workloadSummary.practical],
            ["AACC", workloadSummary.aacc],
            ["AIEX", workloadSummary.aiex],
            ["Total", workloadSummary.total],
          ].map(([k, v]) => (
            <tr key={String(k)} className="border-b border-uni-border">
              <th className="text-left p-2 bg-uni-bg">{k}</th>
              <td className="p-2 font-medium">{v} h</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageShell>
  );
}