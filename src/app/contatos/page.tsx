import { PageShell } from "@/components/layout/PageShell";
import { AlertDisclaimer } from "@/components/ui/AlertDisclaimer";
import { ContactChip } from "@/components/ui/ContactChip";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { campusPlaces } from "@/content/campus";
import { contactUnits } from "@/content/manualMeta";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Contatos");

export default function ContatosPage() {
  const core = campusPlaces.filter((p) =>
    ["coord-gp", "secretaria", "ccsa", "dept-adm", "gepad", "cae"].includes(p.id),
  );

  return (
    <PageShell
      title="Contatos"
      lead="Coordenação, secretaria, departamento e apoio estudantil."
      source="Secretaria Geral; Catálogo Telefônico; Manual Gestão Pública"
      sourceDate="nov/2026"
      mutable
    >
      <h2>Unidades do manual (§1.1)</h2>
      <div className="overflow-x-auto not-prose mb-6">
        <table className="w-full text-sm border border-uni-border">
          <thead className="bg-uni-bg">
            <tr>
              <th className="p-2 text-left">Unidade</th>
              <th className="p-2 text-left">Informação publicada</th>
              <th className="p-2 text-left">Como utilizar</th>
            </tr>
          </thead>
          <tbody>
            {contactUnits.map((row) => (
              <tr key={row.unit} className="border-t border-uni-border">
                <td className="p-2 font-medium">{row.unit}</td>
                <td className="p-2">{row.info}</td>
                <td className="p-2 text-uni-muted">{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Gestão Pública — registro acadêmico</h2>
      <ul>
        <li>Responsável na Secretaria: Marly</li>
        <li>secretaria.gestaopublica@unimontes.br</li>
        <li>Seg/Ter/Qui 13h–19h · Qua/Sex 7h–13h</li>
      </ul>

      <div className="flex flex-wrap gap-2 not-prose my-4">
        <ContactChip type="email" value="curso.gestaopublica@unimontes.br" label="Coordenação" />
        <ContactChip type="phone" value="(38) 3229-8265" />
      </div>

      <AlertDisclaimer title="Modelo de e-mail institucional">
        Identifique-se: Nome completo, nº de matrícula, curso e campi/cidade.
      </AlertDisclaimer>

      <h2>Bloco principal</h2>
      <div className="grid md:grid-cols-2 gap-4 not-prose">
        {core.map((p) => (
          <article key={p.id} className="border border-uni-border rounded-lg p-4 bg-white">
            <h3 className="font-semibold text-uni-green-dark">{p.name}</h3>
            {p.building && <p className="text-sm text-uni-muted">{p.building}</p>}
            <div className="mt-2 flex flex-wrap gap-2">
              {p.phone && <ContactChip type="phone" value={p.phone} />}
              {p.email && <ContactChip type="email" value={p.email} />}
            </div>
          </article>
        ))}
      </div>

      <h2>Catálogo completo</h2>
      <p>
        <ExternalLink href="https://unimontes.br/catalogo-telefonico/">
          Catálogo telefônico Unimontes
        </ExternalLink>
      </p>
    </PageShell>
  );
}