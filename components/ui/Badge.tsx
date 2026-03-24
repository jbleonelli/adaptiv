import { cn } from "@/lib/utils";

type BadgeVariant = "pink" | "blue" | "green" | "white" | "dim";
interface BadgeProps { variant?: BadgeVariant; className?: string; children: React.ReactNode; }

const styles: Record<BadgeVariant, string> = {
  pink:  "bg-[rgba(255,0,178,0.08)] text-[#FF00B2] border border-[rgba(255,0,178,0.2)]",
  blue:  "bg-[rgba(59,130,246,0.08)] text-[#3b82f6] border border-[rgba(59,130,246,0.15)]",
  green: "bg-[rgba(20,184,166,0.08)] text-[#0d9488] border border-[rgba(20,184,166,0.15)]",
  white: "bg-[rgba(0,0,0,0.04)] text-[#374151] border border-[rgba(0,0,0,0.08)]",
  dim:   "bg-[rgba(0,0,0,0.03)] text-[#4b5563] border border-[rgba(0,0,0,0.06)]",
};

export function Badge({ variant = "dim", className, children }: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
      styles[variant],
      className
    )}>
      {children}
    </span>
  );
}
