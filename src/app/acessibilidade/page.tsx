import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { DataTable, Th } from "@/components/ui/DataTable";
import { ExternalLink } from "@/components/ui/ExternalLink";
import {
  acessibilidadeIntro,
  atalhosNavegadorNota,
  atalhosTeclado,
  canalBarreiraAcessibilidade,
  checklistTesteManual,
  conformidadeDeclaracao,
  emagReferencia,
  leitoresDeTela,
  limitacoesConhecidas,
  recursosDoSite,
  redimensionarTexto,
  wcagReferencia,
} from "@/content/accessibilityConfig";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Acessibilidade");

export default function AcessibilidadePage() {
  return (
    <PageShell
      title="Acessibilidade digital"
      lead="Recursos do manual, compatibilidade com leitores de tela, Libras e declaração de conformidade."
      source={PAGE_SOURCES.acessibilidade}
      sourceDate={conformidadeDeclaracao.dataRevisao}
    >
      {acessibilidadeIntro.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
      <p>
        Referências:{" "}
        <ExternalLink href={emagReferencia.href}>{emagReferencia.label}</ExternalLink>
        {" · "}
        <ExternalLink href={wcagReferencia.href}>{wcagReferencia.label}</ExternalLink>
      </p>

      <h2>Recursos deste site</h2>
      <ul>
        {recursosDoSite.map((item) => (
          <li key={item.slice(0, 40)}>{item}</li>
        ))}
      </ul>
      <p>
        <Link href="/mapa-do-site/" className="text-uni-link underline font-medium">
          Mapa do site
        </Link>
      </p>

      <h2>Atalhos de teclado</h2>
      <DataTable caption="Atalhos de teclado padronizados" scrollable={false}>
        <thead className="bg-uni-bg">
          <tr>
            <Th scope="col">Atalho</Th>
            <Th scope="col">Destino</Th>
          </tr>
        </thead>
        <tbody>
          {atalhosTeclado.map((row) => (
            <tr key={row.keys} className="border-t border-uni-border">
              <td className="p-2 font-mono text-xs">{row.keys}</td>
              <td className="p-2">{row.alvo}</td>
            </tr>
          ))}
        </tbody>
      </DataTable>
      <p className="text-sm text-uni-muted">{atalhosNavegadorNota}</p>

      <h2>Redimensionar texto</h2>
      <ul>
        {redimensionarTexto.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Leitores de tela</h2>
      <p>
        Pessoas cegas ou com baixa visão usam leitores de tela no dispositivo — o site não inclui
        leitor embutido; a marcação foi preparada para NVDA, VoiceOver, JAWS e Orca.
      </p>
      <ul>
        {leitoresDeTela.map((item) => (
          <li key={item.href}>
            <ExternalLink href={item.href}>{item.nome}</ExternalLink>
            {" — "}
            {item.desc}
          </li>
        ))}
      </ul>

      <h2 id="libras">Acessibilidade em Libras</h2>
      <p>
        O{" "}
        <ExternalLink href="https://www.vlibras.gov.br/">VLibras</ExternalLink> traduz trechos em
        Libras (botão flutuante à esquerda).{" "}
        <strong>Não substitui intérprete humano</strong> em aulas ou atendimentos presenciais.
      </p>

      <h2>Declaração de conformidade</h2>
      <p>
        <strong>Nível alvo:</strong> {conformidadeDeclaracao.nivelAlvo}.
      </p>
      <p>
        <strong>Última revisão:</strong> {conformidadeDeclaracao.dataRevisao}.
      </p>
      <p>{conformidadeDeclaracao.autodeclaracao}</p>
      <h3>Métodos de verificação</h3>
      <ul>
        {conformidadeDeclaracao.metodos.map((m) => (
          <li key={m.slice(0, 32)}>{m}</li>
        ))}
      </ul>
      <h3>Limitações conhecidas</h3>
      <ul>
        {limitacoesConhecidas.map((m) => (
          <li key={m.slice(0, 32)}>{m}</li>
        ))}
      </ul>

      <h2>Reportar barreira de acessibilidade</h2>
      <p>{canalBarreiraAcessibilidade.texto}</p>
      <p>
        <a
          href={`mailto:${canalBarreiraAcessibilidade.email}`}
          className="text-uni-link underline font-medium"
        >
          {canalBarreiraAcessibilidade.email}
        </a>
        {" · "}
        <Link
          href={canalBarreiraAcessibilidade.sugestoesHref}
          className="text-uni-link underline font-medium"
        >
          Página de sugestões
        </Link>
      </p>

      <h2>Checklist de teste manual (equipe)</h2>
      <ul>
        {checklistTesteManual.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </PageShell>
  );
}