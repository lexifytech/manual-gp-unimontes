import Link from "next/link";

export function Card({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon?: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-uni-border bg-white p-5 shadow-sm hover:border-uni-blue hover:shadow-md transition-shadow"
    >
      {icon && (
        <span className="text-2xl mb-2 block" aria-hidden>
          {icon}
        </span>
      )}
      <h3 className="font-bold text-uni-blue-dark text-lg">{title}</h3>
      <p className="text-sm text-uni-muted mt-1 leading-relaxed">{description}</p>
    </Link>
  );
}