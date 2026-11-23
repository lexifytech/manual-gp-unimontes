import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { mainNav, quickLinks } from "@/lib/navigation";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Mapa do site");

export default function MapaDoSitePage() {
  return (
    <PageShell
      title="Mapa do site"
      lead="Lista de páginas do manual e links externos de acesso rápido."
      source={PAGE_SOURCES.mapaDoSite}
      sourceDate="nov/2026"
    >
      <p>
        Use esta página para localizar seções do manual. Para recursos de acessibilidade, consulte{" "}
        <Link href="/acessibilidade/" className="text-uni-link underline">
          Acessibilidade digital
        </Link>
        .
      </p>
      <h2>Páginas do manual</h2>
      <ul>
        {mainNav.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-uni-link underline font-medium">
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/mapa-do-site/" className="text-uni-link underline font-medium">
            Mapa do site
          </Link>
        </li>
        <li>
          <Link href="/primeiros-30-dias/" className="text-uni-link underline font-medium">
            Primeiros 30 dias
          </Link>
        </li>
        <li>
          <Link href="/modelos/" className="text-uni-link underline font-medium">
            Modelos de mensagem
          </Link>
        </li>
      </ul>
      <h2>Links de acesso rápido</h2>
      <ul>
        {quickLinks.map((item) =>
          item.href.startsWith("http") ? (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-uni-link underline font-medium"
              >
                {item.label}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          ) : (
            <li key={item.href}>
              <Link href={item.href} className="text-uni-link underline font-medium">
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </PageShell>
  );
}