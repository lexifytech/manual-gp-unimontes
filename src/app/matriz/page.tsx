import { PageShell } from "@/components/layout/PageShell";
import { DataTable, Th } from "@/components/ui/DataTable";
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
          <DataTable
            caption={`Disciplinas do ${period.period}º período`}
            className="w-full text-sm border border-uni-border mb-8"
          >
            <thead className="bg-uni-blue text-white">
              <tr>
                <Th scope="col">Disciplina</Th>
                <Th scope="col" className="p-2 text-center">
                  T
                </Th>
                <Th scope="col" className="p-2 text-center">
                  P
                </Th>
                <Th scope="col" className="p-2 text-center">
                  AS
                </Th>
                <Th scope="col" className="p-2 text-center">
                  H/A
                </Th>
              </tr>
            </thead>
            <tbody>
              {period.disciplines.map((d) => (
                <tr key={d.name} className="border-t border-uni-border">
                  <th scope="row" className="p-2 text-left font-normal">
                    {d.name}
                    {d.note && (
                      <span className="block text-xs text-uni-muted font-normal">{d.note}</span>
                    )}
                  </th>
                  <td className="p-2 text-center">{d.theoretical}</td>
                  <td className="p-2 text-center">{d.practical}</td>
                  <td className="p-2 text-center">{d.weeklyClasses}</td>
                  <td className="p-2 text-center">{d.hours}</td>
                </tr>
              ))}
            </tbody>
          </DataTable>
        </section>
      ))}

      <h2>Composição da carga horária total</h2>
      <DataTable
        caption="Composição da carga horária total"
        scrollable={false}
        className="w-full text-sm border border-uni-border max-w-md"
      >
        <tbody>
          {[
            ["Atividades teóricas", workloadSummary.theoretical],
            ["Atividades práticas", workloadSummary.practical],
            ["AACC", workloadSummary.aacc],
            ["AIEX", workloadSummary.aiex],
            ["Total", workloadSummary.total],
          ].map(([k, v]) => (
            <tr key={String(k)} className="border-b border-uni-border">
              <th scope="row" className="text-left p-2 bg-uni-bg">
                {k}
              </th>
              <td className="p-2 font-medium">{v} h</td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </PageShell>
  );
}