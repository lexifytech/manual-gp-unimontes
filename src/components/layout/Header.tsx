"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav } from "@/lib/navigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-uni-blue-dark text-uni-on-blue text-sm py-1.5 px-4 text-center">
        Universidade Estadual de Montes Claros — Projeto acadêmico Gestão Pública
      </div>
      <div className="bg-uni-blue border-b-4 border-uni-blue-dark">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <span
              className="flex h-11 w-11 items-center justify-center rounded bg-white text-uni-blue font-bold text-lg"
              aria-hidden
            >
              U
            </span>
            <div className="text-white leading-tight">
              <span className="block font-bold text-lg group-hover:underline">
                Manual Gestão Pública
              </span>
              <span className="text-uni-on-blue-muted text-xs">Unimontes · Campus Sede</span>
            </div>
          </Link>
          <Link
            href="https://unimontes.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-sm text-uni-on-blue hover:text-white underline"
          >
            Portal unimontes.br
            <span className="sr-only"> (abre em nova aba)</span>
          </Link>
          <button
            type="button"
            className="md:hidden text-white p-2 rounded border border-white/30"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? "Fechar menu principal" : "Abrir menu principal"}
          >
            Menu
          </button>
        </div>
        <nav
          id="main-nav"
          aria-label="Menu principal"
          tabIndex={-1}
          className={`${open ? "block" : "hidden"} md:block border-t border-white/15 bg-uni-blue-dark outline-none`}
        >
          <ul className="max-w-6xl mx-auto px-2 py-2 flex flex-col md:flex-row md:flex-wrap gap-0.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 text-sm rounded transition-colors ${
                    isActive(item.href)
                      ? "bg-white text-uni-blue-dark font-semibold"
                      : "text-white/95 hover:bg-white/15"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}