"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { withBasePath } from "@/lib/basePath";

const STORAGE_KEY = "manual-gp-high-contrast";

type AccessibilityContextValue = {
  highContrast: boolean;
  toggleContrast: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) {
    throw new Error("useAccessibility deve ser usado dentro de AccessibilityProvider");
  }
  return ctx;
}

function focusById(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  if (!el.hasAttribute("tabindex")) {
    el.setAttribute("tabindex", "-1");
  }
  el.focus({ preventScroll: false });
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
  return true;
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [highContrast, setHighContrast] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHighContrast(localStorage.getItem(STORAGE_KEY) === "1");
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.classList.toggle("high-contrast", highContrast);
    localStorage.setItem(STORAGE_KEY, highContrast ? "1" : "0");
  }, [highContrast, hydrated]);

  const toggleContrast = useCallback(() => {
    setHighContrast((prev) => !prev);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.altKey || e.ctrlKey || e.metaKey) return;
      const key = e.key;
      if (!["1", "2", "3", "4"].includes(key)) return;

      e.preventDefault();

      if (key === "1") {
        focusById("conteudo");
        return;
      }
      if (key === "2") {
        focusById("main-nav");
        return;
      }
      if (key === "4") {
        focusById("rodape");
        return;
      }
      if (key === "3") {
        if (focusById("acesso-busca")) return;
        router.push(`${withBasePath("/busca/")}#acesso-busca`);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return (
    <AccessibilityContext.Provider value={{ highContrast, toggleContrast }}>
      {children}
    </AccessibilityContext.Provider>
  );
}