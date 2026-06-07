import { cn } from "@/lib/utils";

export function AccentIconBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-lg",
        "bg-accent text-accent-foreground shadow-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
