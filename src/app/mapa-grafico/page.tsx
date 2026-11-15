import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { campusPlaces } from "@/content/campus";
import { withBasePath } from "@/lib/basePath";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Mapa gráfico do campus");

export default function MapaGraficoPage() {
  const mapLegend = campusPlaces.filter((p) =>
    ["ccsa", "biblioteca", "ru", "cae"].includes(p.id),
  );

  return (
    <PageShell
      title="Mapa gráfico do campus"
      lead="Ilustração isométrica do Campus Sede — referência visual para localizar prédios e serviços."
      source={PAGE_SOURCES.campus}
      sourceDate="13/11/2026"
      mutable
    >
      <p>
        A enquete com acadêmicos (2026) apontou falta de um mapa claro das unidades físicas no
        campus. Use esta página como atalho para o <strong>mapa gráfico</strong> institucional e
        o PDF para impressão ou consulta offline.
      </p>

      <figure className="not-prose my-8 rounded-xl overflow-hidden border border-uni-border bg-white p-2 shadow-sm">
        <Image
          src={withBasePath("/maps/campus-isometric.jpeg")}
          alt="Mapa isométrico do campus sede da Unimontes com identificação dos prédios"
          width={1200}
          height={900}
          className="w-full h-auto"
          priority
        />
        <figcaption className="text-sm text-uni-muted p-3 border-t border-uni-border">
          Campus Universitário Professor Darcy Ribeiro — Av. Dr. Rui Braga, s/n, Vila Mauricéia.
          O <strong>CCSA</strong> (Gestão Pública) corresponde ao <strong>Prédio 01</strong>, à
          direita na ilustração.
        </figcaption>
      </figure>

      <div className="not-prose flex flex-wrap gap-3 mb-8">
        <a
          href={withBasePath("/maps/mapa-campus.pdf")}
          className="inline-flex items-center rounded-lg bg-uni-blue px-4 py-2 text-sm font-semibold text-white hover:bg-uni-blue-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir mapa em PDF
        </a>
        <Link
          href="/campus/"
          className="inline-flex items-center rounded-lg border border-uni-border bg-white px-4 py-2 text-sm font-semibold text-uni-blue-dark hover:border-uni-blue"
        >
          Campus — lugares e contatos
        </Link>
      </div>

      <h2>Marcações úteis para Gestão Pública</h2>
      <ul className="not-prose grid gap-3 sm:grid-cols-2">
        {mapLegend.map((place) => (
          <li
            key={place.id}
            className="rounded-lg border border-uni-border bg-white p-4 text-sm"
          >
            <p className="font-bold text-uni-blue-dark">{place.name}</p>
            {place.building && (
              <p className="text-uni-muted mt-1">{place.building}</p>
            )}
          </li>
        ))}
      </ul>
    </PageShell>
  );
}