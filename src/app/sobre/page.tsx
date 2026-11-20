import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { ExternalLink } from "@/components/ui/ExternalLink";
import {
  comoUsarManual,
  conclusaoManual,
  introducaoManualGP,
  limitesLevantamento,
  ouvidoriaTexto,
  portalSteps,
  presentationOportunidades,
  redesSociaisAviso,
} from "@/content/manualMeta";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Sobre o manual");

export default function SobrePage() {
  return (
    <PageShell
      title="Sobre este manual"
      lead="Apresentação, modo de uso, canais institucionais e limites da compilação."
      source={PAGE_SOURCES.sobre}
      sourceDate="13/11/2026"
    >
      <h2>Origem</h2>
      <p>{introducaoManualGP}</p>
      <p>
        O mapa de oportunidades e serviços foi elaborado a partir do portal institucional, editais
        publicados e páginas dos setores responsáveis (referência 13/11/2026). Confira a lista de
        links em{" "}
        <ExternalLink href="https://unimontes.br/">unimontes.br</ExternalLink> e na página{" "}
        <Link href="/fontes/" className="text-uni-link underline">
          Fontes
        </Link>
        .
      </p>

      <h2>Apresentação</h2>
      {presentationOportunidades.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}

      <h2>Como usar</h2>
      <ol>
        {comoUsarManual.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <h2>Encontrar o curso no portal</h2>
      <ol>
        {portalSteps.map((step) => (
          <li key={step}>
            {step.startsWith("http") ? (
              <ExternalLink href="https://unimontes.br/">{step}</ExternalLink>
            ) : (
              step
            )}
          </li>
        ))}
      </ol>

      <h2 id="acessibilidade-libras">Acessibilidade em Libras</h2>
      <p>
        Este manual integra o{" "}
        <ExternalLink href="https://www.vlibras.gov.br/">VLibras</ExternalLink>, ferramenta
        federal que traduz conteúdos em português para Libras. Use o botão flutuante no canto
        esquerdo da tela em qualquer página. O VLibras é um recurso complementar e{" "}
        <strong>não substitui um intérprete de Libras</strong> em atendimentos presenciais,
        aulas ou situações que exijam mediação humana.
      </p>

      <h2>Ouvidoria e transparência</h2>
      <p>{ouvidoriaTexto}</p>

      <h2>Redes sociais</h2>
      <p>{redesSociaisAviso}</p>

      <h2>Limites da compilação</h2>
      <ul>
        {limitesLevantamento.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Conclusão</h2>
      {conclusaoManual.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
    </PageShell>
  );
}