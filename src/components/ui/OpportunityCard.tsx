import { ContactChip } from "./ContactChip";
import { ExternalLink } from "./ExternalLink";

export type Opportunity = {
  id: string;
  title: string;
  category: string;
  summary: string;
  sector: string;
  steps?: string[];
  phone?: string;
  email?: string;
  links?: { href: string; label: string }[];
};

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <article className="rounded-xl border border-uni-border bg-white shadow-sm overflow-hidden">
      <div className="bg-uni-green px-4 py-2 flex justify-between items-center gap-2">
        <span className="text-white font-semibold">{opportunity.title}</span>
        <span className="text-xs bg-white/20 text-white rounded px-2 py-0.5">
          {opportunity.category}
        </span>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <p>{opportunity.summary}</p>
        <p>
          <strong>Setor:</strong> {opportunity.sector}
        </p>
        {opportunity.steps && (
          <ol className="list-decimal pl-5 space-y-1">
            {opportunity.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        )}
        <div className="flex flex-wrap gap-2">
          {opportunity.phone && (
            <ContactChip type="phone" value={opportunity.phone} label="Tel." />
          )}
          {opportunity.email && (
            <ContactChip type="email" value={opportunity.email} />
          )}
        </div>
        {opportunity.links?.map((l) => (
          <p key={l.href}>
            <ExternalLink href={l.href}>{l.label}</ExternalLink>
          </p>
        ))}
      </div>
    </article>
  );
}