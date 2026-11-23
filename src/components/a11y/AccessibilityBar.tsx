"use client";

import Link from "next/link";
import { useAccessibility } from "@/components/a11y/AccessibilityProvider";

export function AccessibilityBar() {
  const { highContrast, toggleContrast } = useAccessibility();

  return (
    <div
      className="accessibility-bar bg-black text-white text-xs border-b border-white/20"
      role="region"
      aria-label="Barra de acessibilidade"
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-semibold text-white/95 hidden sm:inline sm:mr-1">Acessibilidade:</span>
        <Link href="/acessibilidade/" className="accessibility-bar-link">
          Acessibilidade
        </Link>
        <span className="hidden sm:inline text-white/40" aria-hidden>
          |
        </span>
        <button
          type="button"
          className="accessibility-bar-link text-left"
          onClick={toggleContrast}
          aria-pressed={highContrast}
        >
          {highContrast ? "Desativar alto contraste" : "Alto contraste"}
        </button>
        <span className="hidden sm:inline text-white/40" aria-hidden>
          |
        </span>
        <Link href="/mapa-do-site/" className="accessibility-bar-link">
          Mapa do site
        </Link>
        <span className="hidden md:inline text-white/40 ml-auto" aria-hidden>
          |
        </span>
        <span className="hidden md:inline text-white/75">
          Atalhos: Alt+1 conteúdo · Alt+2 menu · Alt+3 busca · Alt+4 rodapé
        </span>
      </div>
    </div>
  );
}