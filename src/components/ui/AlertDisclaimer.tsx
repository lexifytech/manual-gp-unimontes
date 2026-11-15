import { ExternalLink } from "./ExternalLink";

type AlertDisclaimerProps = {
  title?: string;
  children: React.ReactNode;
  link?: { href: string; label: string };
};

export function AlertDisclaimer({ title = "Atenção", children, link }: AlertDisclaimerProps) {
  return (
    <aside
      className="rounded-lg border-l-4 border-amber-500 bg-amber-50 px-4 py-3 my-6 text-amber-950"
      role="note"
    >
      <p className="font-semibold mb-1">{title}</p>
      <div className="text-sm leading-relaxed">{children}</div>
      {link && (
        <p className="mt-2 text-sm">
          <ExternalLink href={link.href}>{link.label}</ExternalLink>
        </p>
      )}
    </aside>
  );
}