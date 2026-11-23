import { PageShell } from "@/components/layout/PageShell";
import { DataTable, Th } from "@/components/ui/DataTable";
import { AlertDisclaimer } from "@/components/ui/AlertDisclaimer";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ContactChip } from "@/components/ui/ContactChip";
import { aaccActivities } from "@/content/aacc";
import { naeOrientacoes, peaesNotaEdital, peaesRoteiro } from "@/content/manualMeta";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Vida Acadêmica");

export default function VidaAcademicaPage() {
  return (
    <PageShell
      title="Vida acadêmica"
      lead="AACC, extensão (AIEX), avaliação, sistemas e situações de vínculo."
      source={PAGE_SOURCES.vidaAcademica}
      sourceDate="nov/2026"
    >
      <h2>WebGiz (WebAluno)</h2>
      <p>
        Consulte frequência, notas, matrícula, coeficiente e renovação semestral.
      </p>
      <p>
        <ExternalLink href="http://www.webgiz.unimontes.br/">webgiz.unimontes.br</ExternalLink>
      </p>

      <h2>AACC — 100 horas</h2>
      <p>Atividades acadêmico-científico-culturais comprovadas, exigência no 4º período.</p>
      <DataTable
        caption="Atividades AACC — códigos, descrições e limites"
        className="w-full text-xs md:text-sm border border-uni-border"
      >
        <thead className="bg-uni-bg">
          <tr>
            <Th scope="col" className="p-2 text-center">
              Cód.
            </Th>
            <Th scope="col">Atividade</Th>
            <Th scope="col">Limite</Th>
          </tr>
        </thead>
        <tbody>
          {aaccActivities.map((a) => (
            <tr key={a.code} className="border-t border-uni-border">
              <td className="p-2 text-center">{a.code}</td>
              <th scope="row" className="p-2 text-left font-normal">
                {a.activity}
              </th>
              <td className="p-2">{a.limit}</td>
            </tr>
          ))}
        </tbody>
      </DataTable>
      <p className="text-sm text-uni-muted mt-2">
        Descrições incompletas nesta página devem ser conferidas no PPC integral.
      </p>

      <h2>AIEX — 195 horas</h2>
      <p>
        Atividades de extensão distribuídas nos quatro semestres, incluindo horas nas disciplinas
        Projeto de Intervenção I e II. Detalhamento completo no PPC.
      </p>

      <h2>Avaliação (Arts. 98–101, Normas de Graduação)</h2>
      <ul>
        <li>≥ 70 pontos: aprovação</li>
        <li>50 a 69: prova final</li>
        <li>&lt; 50: reprovação (dependência)</li>
      </ul>
      <p>
        Nota final com prova: <strong>NF = (TPSL × 1 + TPPF × 2) ÷ 3</strong> — aprovação com NF ≥
        70.
      </p>

      <h2>Trancamento, desistência e aproveitamento</h2>
      <AlertDisclaimer
        link={{
          href: "https://unimontes.br/wp-content/uploads/2018/12/Normas_Para_Regulamentao_do_Ensino__04-12-2018.pdf",
          label: "Normas de Graduação (PDF)",
        }}
      >
        Utilize as Normas de Graduação e a orientação da Secretaria Geral para trancamento,
        desistência e aproveitamento.
      </AlertDisclaimer>

      <h2>PEAES — Assistência estudantil</h2>
      <p>
        O PEAES é divulgado pela Unimontes como política de permanência para estudantes que atendam
        aos critérios socioeconômicos e acadêmicos definidos em edital. Modalidades, valores,
        documentos e prazos variam entre editais. Não utilize valores de editais antigos como
        permanentes.
      </p>
      <p>{peaesNotaEdital}</p>
      <ol>
        {peaesRoteiro.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-2 not-prose">
        <ContactChip type="email" value="peaes@unimontes.br" />
      </div>

      <h2>NAE — Apoio, saúde e acessibilidade</h2>
      <ul>
        {naeOrientacoes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </PageShell>
  );
}