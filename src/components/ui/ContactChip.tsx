export function ContactChip({
  type,
  value,
  label,
}: {
  type: "phone" | "email";
  value: string;
  label?: string;
}) {
  const href = type === "phone" ? `tel:${value.replace(/\D/g, "")}` : `mailto:${value}`;
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-uni-border bg-white px-3 py-1.5 text-sm hover:border-uni-green hover:text-uni-green"
    >
      <span className="text-uni-muted text-xs uppercase">{label ?? type}</span>
      <span className="font-medium">{value}</span>
    </a>
  );
}