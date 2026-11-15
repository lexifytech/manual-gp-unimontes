import { PageShell } from "@/components/layout/PageShell";
import { AlertDisclaimer } from "@/components/ui/AlertDisclaimer";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { administrationFaculty, courseCoordination } from "@/content/faculty";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Corpo docente");

export default function CorpoDocentePage() {
  return (
    <PageShell
      title="Coordenação e corpo docente"
      lead="Coordenação do curso e docentes do Departamento de Ciências da Administração (fontes oficiais)."
      source="Manual GP; GEPAD; sites.google.com/unimontes.br/admunimontes"
      sourceDate="nov/2026"
    >
      <AlertDisclaimer>
        A lista de docentes abaixo refere-se ao <strong>Departamento de Ciências da
        Administração</strong>, não exclusivamente a docentes alocados em Gestão Pública. Salas e
        horários de atendimento só constam quando publicados. Para confirmação de quem ministra
        disciplina, consulte a coordenação.
      </AlertDisclaimer>

      <h2>Coordenação e gestão do curso</h2>
      <FacultyTable members={courseCoordination} />

      <h2>Departamento de Ciências da Administração</h2>
      <p className="text-sm text-uni-muted mb-4">
        E-mails institucionais e Currículo Lattes conforme página do curso de Administração
        (Unimontes).
      </p>
      <FacultyTable members={administrationFaculty} showBond />
    </PageShell>
  );
}

function FacultyTable({
  members,
  showBond,
}: {
  members: typeof courseCoordination;
  showBond?: boolean;
}) {
  return (
    <div className="overflow-x-auto not-prose mb-8">
      <table className="w-full text-sm border border-uni-border">
        <thead className="bg-uni-bg">
          <tr>
            <th className="p-2 text-left">Nome</th>
            {showBond && <th className="p-2 text-left">Vínculo</th>}
            <th className="p-2 text-left">Papel / local</th>
            <th className="p-2 text-left">Contato</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.name} className="border-t border-uni-border">
              <td className="p-2 font-medium">{m.name}</td>
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
                {m.lattes && (
                  <ExternalLink href={m.lattes}>Lattes</ExternalLink>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}