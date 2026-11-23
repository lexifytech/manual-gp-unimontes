import type { ReactNode } from "react";

type DataTableProps = {
  caption: string;
  captionClassName?: string;
  scrollable?: boolean;
  children: ReactNode;
  className?: string;
};

export function DataTable({
  caption,
  captionClassName = "",
  scrollable = true,
  children,
  className = "w-full text-sm border border-uni-border",
}: DataTableProps) {
  const table = (
    <table className={className}>
      <caption className={captionClassName || "text-left text-sm font-semibold text-uni-blue-dark mb-2"}>
        {caption}
      </caption>
      {children}
    </table>
  );

  if (!scrollable) {
    return <div className="not-prose">{table}</div>;
  }

  return (
    <div className="overflow-x-auto not-prose">
      {table}
    </div>
  );
}

type ThProps = {
  scope: "col" | "row";
  children: ReactNode;
  className?: string;
};

export function Th({ scope, children, className = "p-2 text-left" }: ThProps) {
  return (
    <th scope={scope} className={className}>
      {children}
    </th>
  );
}