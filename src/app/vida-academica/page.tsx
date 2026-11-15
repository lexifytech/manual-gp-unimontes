import { PageShell } from "@/components/layout/PageShell";
import { AlertDisclaimer } from "@/components/ui/AlertDisclaimer";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ContactChip } from "@/components/ui/ContactChip";
import { aaccActivities } from "@/content/aacc";
import { naeOrientacoes, peaesNotaEdital, peaesRoteiro } from "@/content/manualMeta";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Vida Acadêmica");

export default function VidaAcademicaPage() {
  return (
    <PageShell
      title="Vida acadêmica"
      lead="AACC, extensão (AIEX), avaliação, sistemas e situações de vínculo."
      source="Manual_Gestao_Publica_Unimontes.docx"
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
      <div className="overflow-x-auto">
        <table className="w-full text-xs md:text-sm border border-uni-border">
          <thead className="bg-uni-bg">
            <tr>
              <th className="p-2">Cód.</th>
              <th className="p-2 text-left">Atividade</th>
              <th className="p-2 text-left">Limite</th>
            </tr>
          </thead>
          <tbody>
            {aaccActivities.map((a) => (
              <tr key={a.code} className="border-t border-uni-border">
                <td className="p-2">{a.code}</td>
                <td className="p-2">{a.activity}</td>
                <td className="p-2">{a.limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-uni-muted mt-2">
        Descrições com reticências no manual devem ser conferidas no PPC integral.
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
        O manual do curso ainda não incorpora o texto dessas seções. Utilize as Normas de Graduação
        e orientação da Secretaria Geral.
      </AlertDisclaimer>

      <h2>PEAES — Assistência estudantil (manual de oportunidades §6.1)</h2>
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

      <h2>NAE — Apoio, saúde e acessibilidade (§6.2)</h2>
      <ul>
        {naeOrientacoes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </PageShell>
  );
}