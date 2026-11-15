import Link from "next/link";
import { FeedbackForm } from "@/components/feedback/FeedbackForm";
import { PageShell } from "@/components/layout/PageShell";
import { feedbackRecipientEmail } from "@/content/feedbackConfig";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Sugestões e feedback");

export default function SugestoesPage() {
  return (
    <PageShell
      title="Sugestões de melhoria"
      lead="Ajude a evoluir o manual: indique lacunas, erros ou ideias de conteúdo. Leva cerca de 2 minutos."
      source={PAGE_SOURCES.sugestoes}
      sourceDate="2026"
    >
      <h2>Para que serve</h2>
      <p>
        Este questionário complementa a pesquisa inicial com acadêmicos (27 respondentes, 2026). As
        respostas alimentam as próximas revisões do manual digital — sem substituir editais ou
        orientações oficiais da coordenação.
      </p>

      <h2>Formulário</h2>
      <FeedbackForm />

      <p className="text-sm text-uni-muted mt-6">
        Se o envio falhar, escreva para{" "}
        <a href={`mailto:${feedbackRecipientEmail}`} className="text-uni-link underline">
          {feedbackRecipientEmail}
        </a>{" "}
        com o assunto <strong>Sugestão — Manual GP</strong>. O primeiro envio pelo serviço
        FormSubmit pode exigir confirmação no e-mail institucional da coordenação.
      </p>

      <p className="mt-4">
        <Link href="/diagnostico/" className="text-uni-link underline font-medium">
          Ver resultados da pesquisa com acadêmicos
        </Link>
      </p>
    </PageShell>
  );
}