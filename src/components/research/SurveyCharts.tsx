"use client";

import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatSurveyPercent } from "@/lib/formatSurveyPercent";
import {
  SURVEY_TOTAL_RESPONSES,
  type SurveyHorizontalBarQuestion,
  type SurveyLikertQuestion,
  type SurveyOpenQuestion,
  type SurveyPieQuestion,
  type SurveyQuestion,
} from "@/content/researchSurveyData";
import { SurveyChartCard } from "./SurveyChartCard";

const PIE_COLORS = [
  "#006837",
  "#c9a227",
  "#008f4c",
  "#004d28",
  "#5c8a6f",
  "#2d6a4f",
];

const PIE_LABEL_MIN_PERCENT = 5;
const RADIAN = Math.PI / 180;

/** Percentual ao lado da fatia (como no export do Forms), com margem para não cortar. */
function PieExternalLabel(props: {
  cx?: number;
  cy?: number;
  midAngle?: number;
  outerRadius?: number;
  value?: number;
  payload?: { color?: string };
}) {
  const { cx = 0, cy = 0, midAngle = 0, outerRadius = 0, value, payload } = props;

  if (typeof value !== "number" || value < PIE_LABEL_MIN_PERCENT) {
    return null;
  }

  const labelRadius = outerRadius + 14;
  const x = cx + labelRadius * Math.cos(-midAngle * RADIAN);
  const y = cy + labelRadius * Math.sin(-midAngle * RADIAN);
  const anchor = x > cx + 4 ? "start" : x < cx - 4 ? "end" : "middle";

  return (
    <text
      x={x}
      y={y}
      fill={payload?.color ?? "#5c5c5c"}
      textAnchor={anchor}
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
      style={{ pointerEvents: "none" }}
    >
      {formatSurveyPercent(value)}
    </text>
  );
}

function PieLegend({ options }: { options: SurveyPieQuestion["options"] }) {
  return (
    <ul className="space-y-2 text-xs text-uni-muted">
      {options.map((opt, i) => (
        <li
          key={opt.label}
          className={`flex gap-2 items-start ${opt.percent === 0 ? "opacity-50" : ""}`}
        >
          <span
            className="mt-1 h-2.5 w-2.5 shrink-0 rounded-sm"
            style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }}
            aria-hidden
          />
          <span>
            <span className="font-semibold text-uni-text tabular-nums">
              {formatSurveyPercent(opt.percent)}
            </span>{" "}
            — {opt.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SurveyPie({ data }: { data: SurveyPieQuestion }) {
  const chartData = data.options
    .map((o, colorIndex) => ({ ...o, colorIndex }))
    .filter((o) => o.percent > 0)
    .map((o) => ({
      name: o.label,
      value: o.percent,
      color: PIE_COLORS[o.colorIndex % PIE_COLORS.length],
    }));

  return (
    <SurveyChartCard question={data.question}>
      <div className="grid md:grid-cols-[minmax(0,11rem)_1fr] gap-4 items-center flex-1">
        <div className="h-[11.5rem] w-full min-w-[10.5rem] mx-auto md:mx-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart
              accessibilityLayer
              margin={{ top: 20, right: 36, bottom: 20, left: 36 }}
            >
              <Tooltip
                formatter={(value) => [
                  formatSurveyPercent(typeof value === "number" ? value : 0),
                  "Respostas",
                ]}
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #dde3df",
                  fontSize: 12,
                }}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={58}
                paddingAngle={chartData.length > 1 ? 2 : 0}
                label={PieExternalLabel}
                labelLine={false}
              >
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} stroke="#fff" strokeWidth={2} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <PieLegend options={data.options} />
      </div>
    </SurveyChartCard>
  );
}

function SurveyHorizontalBar({ data }: { data: SurveyHorizontalBarQuestion }) {
  const rows = [...data.options].sort((a, b) => (b.percent ?? 0) - (a.percent ?? 0));

  return (
    <SurveyChartCard question={data.question} note={data.multiSelectNote}>
      <ul className="space-y-4" aria-label={data.question}>
        {rows.map((opt) => (
          <li key={opt.label}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
              <p className="text-xs text-uni-text leading-snug flex-1 min-w-0">{opt.label}</p>
              <p className="text-xs font-semibold text-uni-green-dark tabular-nums shrink-0">
                {opt.count ?? 0} · {formatSurveyPercent(opt.percent)}
              </p>
            </div>
            <div className="h-2.5 w-full rounded-full bg-uni-border overflow-hidden">
              <div
                className="h-full rounded-full bg-uni-green transition-all"
                style={{ width: `${Math.min(opt.percent, 100)}%` }}
                role="meter"
                aria-valuenow={opt.percent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${opt.percent}%`}
              />
            </div>
          </li>
        ))}
      </ul>
    </SurveyChartCard>
  );
}

function SurveyLikert({ data }: { data: SurveyLikertQuestion }) {
  const chartData = data.options.map((o) => ({
    label: o.label,
    count: o.count ?? 0,
    percent: o.percent,
    barLabel: `${o.count ?? 0} (${formatSurveyPercent(o.percent)})`,
  }));

  return (
    <SurveyChartCard
      question={data.question}
      note="Escala de 1 (menor dificuldade) a 5 (maior dificuldade)"
    >
      <div className="h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 24, right: 8, left: 0, bottom: 0 }}
            accessibilityLayer
          >
            <XAxis dataKey="label" fontSize={12} tickLine={false} />
            <YAxis allowDecimals={false} fontSize={11} width={28} tickLine={false} />
            <Tooltip
              formatter={(value, _name, item) => {
                const n = typeof value === "number" ? value : 0;
                const pct =
                  item && typeof item === "object" && "payload" in item &&
                  item.payload &&
                  typeof item.payload === "object" &&
                  "percent" in item.payload &&
                  typeof item.payload.percent === "number"
                    ? item.payload.percent
                    : 0;
                return [`${n} (${formatSurveyPercent(pct)})`, "Respostas"];
              }}
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #dde3df",
                fontSize: 12,
              }}
            />
            <Bar dataKey="count" fill="#006837" radius={[4, 4, 0, 0]} maxBarSize={56}>
              {chartData.map((entry) => (
                <Cell
                  key={entry.label}
                  fill={entry.count === 0 ? "#dde3df" : "#006837"}
                />
              ))}
              <LabelList dataKey="barLabel" position="top" fontSize={11} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SurveyChartCard>
  );
}

function SurveyOpenResponses({ data }: { data: SurveyOpenQuestion }) {
  return (
    <SurveyChartCard question={data.question} note="Respostas abertas (texto literal)">
      <ul className="max-h-72 overflow-y-auto space-y-2 pr-1 text-sm text-uni-text">
        {data.responses.map((text, idx) => (
          <li
            key={`${idx}-${text.slice(0, 24)}`}
            className="rounded-lg border border-uni-border bg-uni-bg/80 px-3 py-2 leading-relaxed"
          >
            {text}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-uni-muted">
        Foram transcritas {data.responses.length} das {SURVEY_TOTAL_RESPONSES} respostas textuais
        a partir das capturas da enquete. Nenhuma resposta identifica o respondente.
      </p>
    </SurveyChartCard>
  );
}

function renderQuestion(q: SurveyQuestion) {
  switch (q.kind) {
    case "pie":
      return <SurveyPie key={q.id} data={q} />;
    case "horizontal-bar":
      return <SurveyHorizontalBar key={q.id} data={q} />;
    case "likert":
      return <SurveyLikert key={q.id} data={q} />;
    case "open":
      return <SurveyOpenResponses key={q.id} data={q} />;
    default:
      return null;
  }
}

type SurveyChartsProps = {
  questions: SurveyQuestion[];
};

function chartSpanClass(q: SurveyQuestion): string | undefined {
  if (q.kind === "open" || q.kind === "horizontal-bar" || q.kind === "likert") {
    return "lg:col-span-2";
  }
  if (q.kind === "pie" && q.options.length >= 5) {
    return "lg:col-span-2";
  }
  return undefined;
}

export function SurveyCharts({ questions }: SurveyChartsProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {questions.map((q) => (
        <div key={q.id} className={chartSpanClass(q)}>
          {renderQuestion(q)}
        </div>
      ))}
    </div>
  );
}