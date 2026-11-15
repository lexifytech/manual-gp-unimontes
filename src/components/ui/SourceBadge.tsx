export function SourceBadge({
  source,
  date,
  mutable,
}: {
  source?: string;
  date?: string;
  mutable?: boolean;
}) {
  return (
    <p className="text-sm text-uni-muted flex flex-wrap gap-2 items-center">
      {source && (
        <span className="inline-flex items-center gap-1 bg-white border border-uni-border rounded px-2 py-1">
          Fonte: {source}
        </span>
      )}
      {date && (
        <span className="inline-flex items-center gap-1 bg-white border border-uni-border rounded px-2 py-1">
          Referência: {date}
        </span>
      )}
      {mutable && (
        <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 rounded px-2 py-1">
          Dado mutável — confirme no portal oficial
        </span>
      )}
    </p>
  );
}