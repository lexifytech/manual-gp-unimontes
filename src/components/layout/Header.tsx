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
      <div className="bg-uni-green-dark text-white text-sm py-1.5 px-4 text-center">
        Universidade Estadual de Montes Claros — Projeto acadêmico Gestão Pública
      </div>
      <div className="bg-uni-green border-b-4 border-uni-gold">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <span
              className="flex h-11 w-11 items-center justify-center rounded bg-white text-uni-green font-bold text-lg"
              aria-hidden
            >
              U
            </span>
            <div className="text-white leading-tight">
              <span className="block font-bold text-lg group-hover:underline">
                Manual Gestão Pública
              </span>
              <span className="text-white/85 text-xs">Unimontes · Campus Sede</span>
            </div>
          </Link>
          <Link
            href="https://unimontes.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-sm text-white/90 hover:text-white underline"
          >
            Portal unimontes.br
          </Link>
          <button
            type="button"
            className="md:hidden text-white p-2 rounded border border-white/30"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="main-nav"
          >
            Menu
          </button>
        </div>
        <nav
          id="main-nav"
          className={`${open ? "block" : "hidden"} md:block border-t border-white/15 bg-uni-green-dark`}
        >
          <ul className="max-w-6xl mx-auto px-2 py-2 flex flex-col md:flex-row md:flex-wrap gap-0.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 text-sm rounded transition-colors ${
                    isActive(item.href)
                      ? "bg-white text-uni-green-dark font-semibold"
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