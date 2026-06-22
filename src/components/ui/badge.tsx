import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" &&
          "bg-surface border border-border text-muted",
        variant === "accent" &&
          "bg-accent-soft text-accent border border-accent/20",
        className
      )}
    >
      {children}
    </span>
  );
}
