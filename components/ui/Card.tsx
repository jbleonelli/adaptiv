import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ className, children, hover = true, glow = false }: CardProps) {
  return (
    <div className={cn(
      "relative rounded-2xl bg-white border border-[rgba(0,0,0,0.07)] overflow-hidden",
      hover && "transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(0,0,0,0.12)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
      glow && "shadow-[0_0_40px_rgba(255,0,178,0.06)] hover:shadow-[0_0_60px_rgba(255,0,178,0.1)]",
      className
    )}>
      {children}
    </div>
  );
}
