"use client";
import { forwardRef, isValidElement, cloneElement } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size    = "sm" | "md" | "lg";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:   "bg-[#FF00B2] text-white hover:bg-[#e000a0] shadow-[0_4px_24px_rgba(255,0,178,0.25)] hover:shadow-[0_6px_32px_rgba(255,0,178,0.35)] active:scale-[0.98]",
  secondary: "bg-[rgba(0,0,0,0.05)] text-[#111827] border border-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.08)] hover:border-[rgba(0,0,0,0.15)] active:scale-[0.98]",
  ghost:     "text-[#4b5563] hover:text-[#111827] hover:bg-[rgba(0,0,0,0.04)] active:scale-[0.98]",
  outline:   "border border-[#FF00B2] text-[#FF00B2] hover:bg-[rgba(255,0,178,0.06)] active:scale-[0.98]",
};
const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-3 text-sm rounded-full",
  lg: "px-8 py-4 text-base rounded-full",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, asChild, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer select-none disabled:opacity-40 disabled:pointer-events-none",
      variantStyles[variant],
      sizeStyles[size],
      className
    );
    if (asChild && isValidElement(children)) {
      return cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(classes, (children as React.ReactElement<{ className?: string }>).props.className),
      });
    }
    return <button ref={ref} className={classes} {...props}>{children}</button>;
  }
);
Button.displayName = "Button";
