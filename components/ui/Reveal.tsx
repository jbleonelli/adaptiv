"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initial = {
    up:    "translate-y-8 opacity-0",
    left:  "-translate-x-8 opacity-0",
    right: "translate-x-8 opacity-0",
    none:  "opacity-0",
  }[direction];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "translate-x-0 translate-y-0 opacity-100" : initial,
        className
      )}
    >
      {children}
    </div>
  );
}
