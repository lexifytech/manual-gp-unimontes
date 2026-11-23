import { DataTable, Th } from "@/components/ui/DataTable";
import { formatSurveyPercent } from "@/lib/formatSurveyPercent";

type Row = {
  label: string;
  percent: number;
  count?: number;
};

export function SurveyDataTable({ caption, rows }: { caption: string; rows: Row[] }) {
  const hasCount = rows.some((r) => typeof r.count === "number");

  return (
    <DataTable caption={caption} scrollable={false} className="w-full text-xs border border-uni-border mt-4">
      <thead className="bg-uni-bg">
        <tr>
          <Th scope="col">Opção</Th>
          {hasCount && (
            <Th scope="col" className="p-2 text-right">
              Respostas
            </Th>
          )}
          <Th scope="col" className="p-2 text-right">
            Percentual
          </Th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="border-t border-uni-border">
            <th scope="row" className="p-2 text-left font-normal">
              {row.label}
            </th>
            {hasCount && (
              <td className="p-2 text-right tabular-nums">{row.count ?? 0}</td>
            )}
            <td className="p-2 text-right tabular-nums">{formatSurveyPercent(row.percent)}</td>
          </tr>
        ))}
      </tbody>
    </DataTable>
  );
}