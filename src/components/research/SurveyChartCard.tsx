import type { ReactNode } from "react";
import { SURVEY_TOTAL_RESPONSES } from "@/content/researchSurveyData";

type SurveyChartCardProps = {
  question: string;
  questionId: string;
  children: ReactNode;
  note?: string;
  compact?: boolean;
};

export function SurveyChartCard({
  question,
  questionId,
  children,
  note,
  compact = false,
}: SurveyChartCardProps) {
  return (
    <figure
      aria-labelledby={`survey-q-${questionId}`}
      className={`rounded-xl border border-uni-border bg-white shadow-sm not-prose flex flex-col ${
        compact ? "p-4" : "p-5"
      }`}
    >
      <figcaption className="mb-4">
        <p
          id={`survey-q-${questionId}`}
          className="text-sm md:text-base font-semibold text-uni-text leading-snug"
        >
          {question}
        </p>
        <p className="mt-1 text-xs text-uni-muted">
          {SURVEY_TOTAL_RESPONSES} respostas
          {note ? ` · ${note}` : ""}
        </p>
      </figcaption>
      {children}
    </figure>
  );
}