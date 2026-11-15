#!/usr/bin/env node
/**
 * Referência de ingestão: os manuais em docs/ foram curados manualmente em src/content/.
 * Para reextrair texto bruto dos DOCX (macOS):
 *   textutil -convert txt -stdout "docs/Manual_Gestao_Publica_Unimontes.docx"
 * Não sobrescreve JSON automaticamente — revisão humana obrigatória (conteúdo institucional).
 */
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const files = [
  "Manual_Gestao_Publica_Unimontes.docx",
  "Manual_Acesso_Oportunidades_Unimontes_Gestao_Publica.docx",
];

for (const f of files) {
  const path = join(root, "docs", f);
  if (!existsSync(path)) {
    console.warn("Ausente:", f);
    continue;
  }
  const txt = execSync(`textutil -convert txt -stdout "${path}"`, { encoding: "utf8" });
  console.log(`\n=== ${f} (${txt.length} chars) ===\n`);
  console.log(txt.slice(0, 500), "...\n");
}

console.log("Conteúdo publicado em src/content/*.ts — atualize lá após revisar o texto.");