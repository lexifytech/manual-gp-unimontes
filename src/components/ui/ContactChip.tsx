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
  const ariaLabel =
    type === "phone"
      ? `${label ?? "Telefone"}: ${value}`
      : `${label ?? "E-mail"}: ${value}`;
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="inline-flex items-center gap-2 rounded-full border border-uni-border bg-white px-3 py-1.5 text-sm hover:border-uni-blue hover:text-uni-blue"
    >
      <span className="text-uni-muted text-xs uppercase">{label ?? type}</span>
      <span className="font-medium">{value}</span>
    </a>
  );
}