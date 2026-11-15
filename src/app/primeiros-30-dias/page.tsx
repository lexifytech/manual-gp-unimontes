import { PageShell } from "@/components/layout/PageShell";
import { first30Days } from "@/content/paths";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Primeiros 30 dias");

export default function Primeiros30DiasPage() {
  return (
    <PageShell
      title="Primeiros 30 dias"
      lead="Checklist prático para ingressantes."
      source={PAGE_SOURCES.primeiros30}
      sourceDate="13/11/2026"
    >
      <ol className="space-y-3">
        {first30Days.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-uni-blue text-white font-bold text-sm">
              {i + 1}
            </span>
            <span className="pt-1">{item}</span>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}