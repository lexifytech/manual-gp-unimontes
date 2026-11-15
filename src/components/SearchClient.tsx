"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import MiniSearch from "minisearch";
import { searchDocuments } from "@/content/searchIndex";

const mini = new MiniSearch({
  fields: ["title", "body"],
  storeFields: ["title", "href"],
  searchOptions: { boost: { title: 2 }, prefix: true, fuzzy: 0.2 },
});

mini.addAll(searchDocuments);

export function SearchClient() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    if (!q.trim()) return [];
    return mini.search(q).slice(0, 20);
  }, [q]);

  return (
    <div className="not-prose max-w-xl">
      <label htmlFor="site-search" className="sr-only">
        Buscar no manual
      </label>
      <input
        id="site-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Ex.: GEPAD, PEAES, Prédio 1, monitoria…"
        className="w-full rounded-lg border border-uni-border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-uni-green"
        autoComplete="off"
      />
      <ul className="mt-4 space-y-2">
        {results.map((r) => (
          <li key={r.id}>
            <Link
              href={String(r.href)}
              className="block rounded-lg border border-uni-border bg-white px-4 py-3 hover:border-uni-green"
            >
              <span className="font-semibold text-uni-green-dark">{String(r.title)}</span>
            </Link>
          </li>
        ))}
        {q.trim() && results.length === 0 && (
          <p className="text-sm text-uni-muted">Nenhum resultado. Tente outro termo.</p>
        )}
      </ul>
    </div>
  );
}