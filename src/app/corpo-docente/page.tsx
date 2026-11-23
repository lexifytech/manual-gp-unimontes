import { PageShell } from "@/components/layout/PageShell";
import { DataTable, Th } from "@/components/ui/DataTable";
import { AlertDisclaimer } from "@/components/ui/AlertDisclaimer";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { administrationFaculty, courseCoordination } from "@/content/faculty";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Corpo docente");

export default function CorpoDocentePage() {
  return (
    <PageShell
      title="Coordenação e corpo docente"
      lead="Coordenação do curso e docentes do Departamento de Ciências da Administração (fontes oficiais)."
      source={PAGE_SOURCES.corpoDocente}
      sourceDate="nov/2026"
    >
      <AlertDisclaimer>
        A lista de docentes abaixo refere-se ao <strong>Departamento de Ciências da
        Administração</strong>, não exclusivamente a docentes alocados em Gestão Pública. Salas e
        horários de atendimento só constam quando publicados. Para confirmação de quem ministra
        disciplina, consulte a coordenação.
      </AlertDisclaimer>

      <h2>Coordenação e gestão do curso</h2>
      <FacultyTable caption="Coordenação e gestão do curso" members={courseCoordination} />

      <h2>Departamento de Ciências da Administração</h2>
      <p className="text-sm text-uni-muted mb-4">
        E-mails institucionais e Currículo Lattes conforme página do curso de Administração
        (Unimontes).
      </p>
      <FacultyTable
        caption="Docentes do Departamento de Ciências da Administração"
        members={administrationFaculty}
        showBond
      />
    </PageShell>
  );
}

function FacultyTable({
  caption,
  members,
  showBond,
}: {
  caption: string;
  members: typeof courseCoordination;
  showBond?: boolean;
}) {
  return (
    <DataTable caption={caption} className="w-full text-sm border border-uni-border mb-8">
      <thead className="bg-uni-bg">
        <tr>
          <Th scope="col">Nome</Th>
          {showBond && <Th scope="col">Vínculo</Th>}
          <Th scope="col">Papel / local</Th>
          <Th scope="col">Contato</Th>
        </tr>
      </thead>
      <tbody>
        {members.map((m) => (
          <tr key={m.name} className="border-t border-uni-border">
            <th scope="row" className="p-2 font-medium text-left">
              {m.name}
            </th>
            {showBond && <td className="p-2">{m.bond ?? "—"}</td>}
            <td className="p-2 text-uni-muted">
              {[m.role, m.location, m.notes].filter(Boolean).join(" · ") || "—"}
            </td>
            <td className="p-2">
              {m.email && (
                <a href={`mailto:${m.email}`} className="text-uni-link underline block">
                  {m.email}
                </a>
              )}
              {m.lattes && <ExternalLink href={m.lattes}>Lattes</ExternalLink>}
            </td>
          </tr>
        ))}
      </tbody>
    </DataTable>
  );
}