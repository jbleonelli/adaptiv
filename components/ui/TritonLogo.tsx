/* eslint-disable @next/next/no-img-element */
interface Props {
  className?: string;
  size?: number;
  dark?: boolean;
}

export function TritonLogo({ className = "", size = 28 }: Props) {
  return (
    <img
      src="/brand/adaptiv-logo-full.png"
      alt="Adaptiv AI Technologies"
      className={className}
      style={{ height: size * 1.4, width: "auto" }}
      draggable={false}
    />
  );
}
