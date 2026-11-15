import { PageShell } from "@/components/layout/PageShell";
import { ContactChip } from "@/components/ui/ContactChip";
import { ExternalLink } from "@/components/ui/ExternalLink";
import {
  extensaoTemasGestaoPublica,
  prexPropostaDocumentos,
  prexPropostaPassos,
} from "@/content/manualMeta";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Extensão");

export default function ExtensaoPage() {
  return (
    <PageShell
      title="Extensão"
      lead="Participar de ações existentes ou propor projetos com tramitação institucional."
      source={PAGE_SOURCES.extensao}
      sourceDate="13/11/2026"
    >
      <h2>Onde procurar</h2>
      <ul>
        <li>
          <strong>PREX</strong> —{" "}
          <ExternalLink href="https://unimontes.br/pro-reitoria-de-extensao/">
            Pró-Reitoria de Extensão
          </ExternalLink>
        </li>
        <li>
          Extensão comunitária: extensao.comunitaria@unimontes.br · (38) 3229-8409
        </li>
        <li>Extensão cultural: extensao.cultural@unimontes.br · (38) 3229-8165</li>
        <li>
          CAE: cae@unimontes.br · (38) 3229-8163/8164
        </li>
        <li>NIEEx: sigex@unimontes.br</li>
      </ul>

      <h2>Ingressar em ação existente</h2>
      <ol>
        <li>Acesse unimontes.br/pro-reitoria-de-extensao/ e leia apresentação, editais e formulários.</li>
        <li>
          Na página de Editais, pesquise por bolsista, acadêmicos, extensão, projeto, curso e
          evento.
        </li>
        <li>
          Leia o edital integral (anexos, retificações, critérios, documentos, carga horária,
          vigência, bolsa se houver).
        </li>
        <li>Converse com o coordenador do projeto ou PREX sobre elegibilidade de Gestão Pública.</li>
        <li>Inscreva-se no canal indicado; acompanhe resultado, recurso e convocação.</li>
      </ol>

      <h2>Propor ação própria</h2>
      <p>
        A PREX publica documentos para encaminhamento de ações de extensão, incluindo memorando via
        SEI, ata de aprovação departamental, declaração sobre financiamento/despesas, formulário de
        encaminhamento, compromisso de entrega de relatório e projeto em PDF. A página disponibiliza
        Manual de Extensão, modelo de ação e modelos de relatório. Não basta realizar atividade em
        nome da Universidade sem autorização.
      </p>
      <p className="font-medium">Documentos exigidos no encaminhamento (PREX):</p>
      <ul>
        {prexPropostaDocumentos.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <ol>
        {prexPropostaPassos.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <h2>Temas compatíveis com Gestão Pública</h2>
      <ul>
        {extensaoTemasGestaoPublica.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 not-prose mt-4">
        <ContactChip type="email" value="cae@unimontes.br" />
      </div>
    </PageShell>
  );
}