import { surveyHighlightIds, surveyQuestions, type SurveyQuestion } from "@/content/researchSurveyData";
import { SurveyCharts } from "./SurveyCharts";

type ResearchSurveySectionProps = {
  /** Se definido, mostra apenas esses gráficos (ordem preservada). */
  includeIds?: readonly string[];
};

function pickQuestions(includeIds?: readonly string[]): SurveyQuestion[] {
  if (!includeIds?.length) return surveyQuestions;
  const byId = new Map(surveyQuestions.map((q) => [q.id, q]));
  return includeIds.flatMap((id) => {
    const q = byId.get(id);
    return q ? [q] : [];
  });
}

export function ResearchSurveySection({ includeIds }: ResearchSurveySectionProps) {
  const questions = pickQuestions(includeIds);
  return (
    <section className="not-prose" aria-label="Resultados da pesquisa com acadêmicos">
      <SurveyCharts questions={questions} />
    </section>
  );
}

export { surveyHighlightIds };