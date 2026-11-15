import { SourceBadge } from "@/components/ui/SourceBadge";

type PageShellProps = {
  title: string;
  lead?: string;
  source?: string;
  sourceDate?: string;
  mutable?: boolean;
  children: React.ReactNode;
};

export function PageShell({
  title,
  lead,
  source,
  sourceDate,
  mutable,
  children,
}: PageShellProps) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-uni-green-dark border-b-4 border-uni-gold pb-2">
          {title}
        </h1>
        {lead && <p className="mt-3 text-uni-muted text-lg max-w-3xl">{lead}</p>}
        {(source || sourceDate) && (
          <div className="mt-4">
            <SourceBadge
              source={source}
              date={sourceDate}
              mutable={mutable}
            />
          </div>
        )}
      </header>
      <div className="prose-uni">{children}</div>
    </main>
  );
}