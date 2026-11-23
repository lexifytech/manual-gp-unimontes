import fs from "node:fs";
import path from "node:path";
import { JSDOM } from "jsdom";

const root = process.cwd();
const pages = [
  "out/index.html",
  "out/acessibilidade/index.html",
  "out/busca/index.html",
  "out/matriz/index.html",
  "out/diagnostico/index.html",
  "out/sugestoes/index.html",
];

const axeSource = fs.readFileSync(
  path.join(root, "node_modules/axe-core/axe.js"),
  "utf8",
);

async function auditFile(relPath) {
  const filePath = path.join(root, relPath);
  if (!fs.existsSync(filePath)) {
    console.warn(`Skip missing: ${relPath}`);
    return { relPath, violations: [] };
  }
  const html = fs.readFileSync(filePath, "utf8");
  const dom = new JSDOM(html, {
    url: "http://localhost/",
    runScripts: "outside-only",
    pretendToBeVisual: true,
  });
  dom.window.eval(axeSource);
  const results = await dom.window.axe.run(dom.window.document, {
    runOnly: {
      type: "tag",
      values: ["wcag2a", "wcag2aa", "wcag21aa", "best-practice"],
    },
  });
  return { relPath, violations: results.violations };
}

let exitCode = 0;
for (const page of pages) {
  const { relPath, violations } = await auditFile(page);
  console.log(`\n## ${relPath}`);
  if (violations.length === 0) {
    console.log("OK — nenhuma violação WCAG detectada (análise estática).");
    continue;
  }
  exitCode = 1;
  for (const v of violations) {
    console.log(`\n[${v.impact}] ${v.id}: ${v.help}`);
    console.log(v.helpUrl);
    for (const node of v.nodes.slice(0, 5)) {
      console.log(`  • ${node.html.replace(/\s+/g, " ").slice(0, 150)}`);
    }
    if (v.nodes.length > 5) {
      console.log(`  … +${v.nodes.length - 5} nós`);
    }
  }
}

if (exitCode === 1) {
  console.error("\nFalha: corrija as violações acima.");
}
process.exit(exitCode);