import { PageShell } from "@/components/layout/PageShell";
import { DataTable, Th } from "@/components/ui/DataTable";
import { AlertDisclaimer } from "@/components/ui/AlertDisclaimer";
import { ContactChip } from "@/components/ui/ContactChip";
import { ExternalLink } from "@/components/ui/ExternalLink";
import Link from "next/link";
import { contactUnits, cursoIdentificacao, portalSteps } from "@/content/manualMeta";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("O Curso");

export default function CursoPage() {
  return (
    <PageShell
      title="Tecnologia em Gestão Pública"
      lead="Curso presencial no CCSA, campus-sede de Montes Claros."
      source={PAGE_SOURCES.curso}
      sourceDate="nov/2026"
    >
      <h2>Perfil do curso</h2>
      <p>{cursoIdentificacao.profile}</p>
      <p className="text-sm text-uni-muted">{cursoIdentificacao.vagasNota}</p>

      <h2>Coordenação</h2>
      <ul>
        <li>Profa. Françoise de Fátima Barbosa</li>
        <li>Local: Prédio 1 — sala 214, 2º andar</li>
        <li>
          Instagram:{" "}
          <ExternalLink href="https://www.instagram.com/gestaopublica.unimontes/">
            gestaopublica.unimontes
          </ExternalLink>
        </li>
      </ul>
      <div className="flex flex-wrap gap-2 my-4 not-prose">
        <ContactChip type="phone" value="(38) 3229-8265" />
        <ContactChip type="email" value="curso.gestaopublica@unimontes.br" />
      </div>

      <AlertDisclaimer title="E-mails da coordenação">
        Páginas institucionais divergem entre <code>curso.gestaopublica@unimontes.br</code> e{" "}
        <code>coord.gestaopublica@unimontes.br</code>. Confirme pelo telefone da coordenação antes
        de enviar documentos.
      </AlertDisclaimer>

      <h2>Características gerais</h2>
      <DataTable
        caption="Características gerais do curso"
        scrollable={false}
        className="w-full text-sm border border-uni-border my-4"
      >
        <tbody>
          {[
            ["Duração", "4 semestres"],
            ["Turnos", "Vespertino e noturno"],
            ["Carga horária total", "1.951 horas-aula (informativo do curso)"],
            ["Estágio curricular", "Não obrigatório (PPC)"],
            ["TCC", "Projeto de Intervenção I e II"],
            ["AACC", "100 h comprovadas (4º período)"],
            ["AIEX", "195 h ao longo dos 4 semestres"],
          ].map(([k, v]) => (
            <tr key={k} className="border-b border-uni-border">
              <th scope="row" className="text-left p-2 bg-uni-bg font-semibold w-1/3">
                {k}
              </th>
              <td className="p-2">{v}</td>
            </tr>
          ))}
        </tbody>
      </DataTable>

      <h2>Onde fica e a quem procurar</h2>
      <DataTable caption="Onde fica e a quem procurar" className="w-full text-sm border border-uni-border mb-6">
        <thead className="bg-uni-bg">
          <tr>
            <Th scope="col">Unidade</Th>
            <Th scope="col">Informação publicada</Th>
            <Th scope="col">Como utilizar</Th>
          </tr>
        </thead>
        <tbody>
          {contactUnits.map((row) => (
            <tr key={row.unit} className="border-t border-uni-border">
              <th scope="row" className="p-2 font-medium text-left">
                {row.unit}
              </th>
              <td className="p-2">{row.info}</td>
              <td className="p-2 text-uni-muted">{row.use}</td>
            </tr>
          ))}
        </tbody>
      </DataTable>

      <h2>No portal da Unimontes</h2>
      <ol>
        {portalSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p>
        <Link href="/sobre/" className="text-uni-link underline">
          Ouvidoria, redes sociais e limites da compilação
        </Link>
      </p>

      <h2>Secretaria do curso</h2>
      <p>
        Ramal publicado na Secretaria Geral / portal: Controle acadêmico CCSA{" "}
        <strong>(38) 3229-8048</strong> (via Secretaria Geral — Gestão Pública).
      </p>
      <p>
        Responsável pelo registro acadêmico: <strong>Marly</strong>
      </p>
      <ul>
        <li>E-mail: secretaria.gestaopublica@unimontes.br</li>
        <li>Segunda, terça e quinta: 13h às 19h</li>
        <li>Quarta e sexta: 7h às 13h</li>
      </ul>
      <p>
        <ExternalLink href="https://secretariageral.unimontes.br/fale-com-a-secretaria/">
          Fale com a Secretaria — Gestão Pública
        </ExternalLink>
      </p>

      <h2>Documentos</h2>
      <ul>
        <li>
          <ExternalLink href="/docs/ppc-gestao-publica-2022.pdf">
            Projeto Pedagógico do Curso (PDF aprovado 2022)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://unimontes.br/wp-content/uploads/2018/12/Normas_Para_Regulamentao_do_Ensino__04-12-2018.pdf">
            Normas de Graduação
          </ExternalLink>
        </li>
      </ul>

      <AlertDisclaimer
        title="Calendário acadêmico"
        link={{
          href: "https://unimontes.br/resolucoes_cepex/",
          label: "Resoluções CEPEX — calendário vigente",
        }}
      >
        Consulte a resolução CEPEx mais recente publicada no portal para calendário e datas do
        semestre.
      </AlertDisclaimer>
    </PageShell>
  );
}