export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-uni-link underline font-medium hover:text-uni-green"
    >
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}