import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { ContactChip } from "@/components/ui/ContactChip";
import { AlertDisclaimer } from "@/components/ui/AlertDisclaimer";
import { campusPlaces } from "@/content/campus";
import {
  bibliotecaContatoManualGP,
  bibliotecaContatoOportunidades,
  bibliotecaPassos,
  laboratoriosCchAviso,
  ruManualGP,
  ruManualOportunidades,
} from "@/content/manualMeta";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Campus");

export default function CampusPage() {
  return (
    <PageShell
      title="Campus e mapas"
      lead="Campus Universitário Professor Darcy Ribeiro — Av. Dr. Rui Braga, s/n, Vila Mauricéia."
      source="Manual_Acesso_Oportunidades §5; mapa UniOpen"
      sourceDate="13/11/2026"
      mutable
    >
      <figure className="not-prose mb-8 rounded-xl overflow-hidden border border-uni-border bg-white p-2">
        <Image
          src="/maps/campus-isometric.jpeg"
          alt="Mapa isométrico do campus sede da Unimontes com identificação dos prédios"
          width={1200}
          height={900}
          className="w-full h-auto"
          priority
        />
        <figcaption className="text-sm text-uni-muted p-2">
          Mapa do Campus Sede — CCSA é o <strong>Prédio 01</strong> (extrema direita na ilustração).
        </figcaption>
      </figure>

      <p className="not-prose mb-6">
        <a
          href="/maps/mapa-campus.pdf"
          className="text-uni-link font-semibold underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baixar mapa em PDF
        </a>
      </p>

      <h2>Lugares essenciais para Gestão Pública</h2>
      <div className="grid gap-4 not-prose">
        {campusPlaces.map((place) => (
          <article
            key={place.id}
            className="rounded-lg border border-uni-border bg-white p-4"
          >
            <h3 className="font-bold text-uni-green-dark">{place.name}</h3>
            {place.building && (
              <p className="text-sm text-uni-muted mt-1">{place.building}</p>
            )}
            {place.hours && <p className="text-sm mt-2">Horário: {place.hours}</p>}
            {place.note && <p className="text-sm mt-2">{place.note}</p>}
            <div className="flex flex-wrap gap-2 mt-3">
              {place.phone && <ContactChip type="phone" value={place.phone} />}
              {place.email && <ContactChip type="email" value={place.email} />}
            </div>
          </article>
        ))}
      </div>

      <h2 id="biblioteca">Biblioteca: como começar</h2>
      <ol>
        {bibliotecaPassos.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p>
        Manual de oportunidades (consulta 13/11/2026): {bibliotecaContatoOportunidades.phone},{" "}
        {bibliotecaContatoOportunidades.email}, {bibliotecaContatoOportunidades.building},{" "}
        {bibliotecaContatoOportunidades.hours}.
      </p>
      <p>
        Manual do curso: direção {bibliotecaContatoManualGP.director}; telefone publicado{" "}
        {bibliotecaContatoManualGP.phone}; cadastro: {bibliotecaContatoManualGP.cadastro}.
      </p>
      <AlertDisclaimer title="Telefone da biblioteca">
        Dois ramais aparecem nos manuais ({bibliotecaContatoOportunidades.phone} e{" "}
        {bibliotecaContatoManualGP.phone}). Confirme o contato vigente antes do deslocamento.
      </AlertDisclaimer>

      <h2>Restaurante Universitário — detalhes dos manuais</h2>
      <p>{ruManualOportunidades.descricao}</p>
      <p>{ruManualOportunidades.valor}</p>
      <p>{ruManualOportunidades.cadastro}</p>
      <p>Manual do curso: {ruManualGP.marmitas}. {ruManualGP.cadastro}</p>

      <h2>Laboratórios, salas e CCH</h2>
      <ul>
        {laboratoriosCchAviso.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </PageShell>
  );
}