/** Exibe percentual da enquete no padrão brasileiro (vírgula decimal). */
export function formatSurveyPercent(value: number): string {
  const rounded = Math.round(value * 10) / 10;
  return rounded % 1 === 0
    ? `${rounded.toLocaleString("pt-BR")}%`
    : `${rounded.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;
}