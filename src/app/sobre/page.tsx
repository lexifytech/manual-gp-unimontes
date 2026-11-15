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
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Sobre o manual");

export default function SobrePage() {
  return (
    <PageShell
      title="Sobre este manual"
      lead="Apresentação, modo de uso, canais institucionais e limites do levantamento."
      source="Manual_Acesso_Oportunidades; Manual_Gestao_Publica_Unimontes"
      sourceDate="13/11/2026"
    >
      <h2>Origem</h2>
      <p>{introducaoManualGP}</p>
      <p>
        O levantamento ampliado de oportunidades e serviços consta no arquivo{" "}
        <em>Manual_Acesso_Oportunidades_Unimontes_Gestao_Publica.docx</em> (referência 13/11/2026).
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

      <h2>Ouvidoria e transparência</h2>
      <p>{ouvidoriaTexto}</p>

      <h2>Redes sociais</h2>
      <p>{redesSociaisAviso}</p>

      <h2>Limites do levantamento</h2>
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