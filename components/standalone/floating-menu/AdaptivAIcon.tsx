/**
 * AdaptivAIcon — the Adaptiv "A" mark, inlined as a square SVG with the
 * brand gradient (deep indigo → magenta, diagonally from bottom-left to
 * top-right).
 *
 * Drop straight into FloatingMenu's `icon` prop:
 *
 *   <FloatingMenu items={...} icon={<AdaptivAIcon />} />
 *
 * Because FloatingMenu wraps any ReactNode `icon` with a
 * `clipPath: circle(46% at 50% 50%)`, the square corners are hidden and
 * the gradient + "A" sit centered inside the circular button.
 *
 * Standalone — no peer dependencies beyond React. Uses `useId()` so
 * multiple instances on the same page never collide on the gradient id.
 */
import { useId, type CSSProperties } from "react";

export type AdaptivAIconProps = {
  /** Rendered width/height in px (or any CSS length). Default 128. */
  size?: number | string;
  className?: string;
  style?: CSSProperties;
  /** Accessible label. When set, the icon is announced; otherwise it is hidden from AT. */
  title?: string;
};

export function AdaptivAIcon({
  size = 128,
  className,
  style,
  title,
}: AdaptivAIconProps) {
  const gradientId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      style={style}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient
          id={gradientId}
          x1="11.32"
          y1="116.68"
          x2="114.76"
          y2="13.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#000064" />
          <stop offset="0.37" stopColor="#60006d" />
          <stop offset="0.59" stopColor="#a71992" />
          <stop offset="0.77" stopColor="#d011a0" />
          <stop offset="0.91" stopColor="#ed09ab" />
          <stop offset="1" stopColor="#ff00b2" />
        </linearGradient>
      </defs>
      <rect width="128" height="128" fill={`url(#${gradientId})`} />
      <path
        fill="#fff"
        d="m103.97,90.19l-24.74-64.46c-3-7.81-10.63-13.05-18.99-13.05s-15.99,5.24-18.99,13.05l-17.21,44.84c-4.65,12.11,4.29,25.13,17.27,25.13h0c7.66,0,14.53-4.72,17.27-11.87l1.66-4.32,9.19,23.95c2.73,7.1,9.67,11.87,17.27,11.87,6.09,0,11.79-3,15.25-8.02,3.45-5.02,4.21-11.42,2.02-17.11Zm-17.27,9.92h0c-1.36,0-2.59-.84-3.07-2.11l-23.39-60.93-16.66,43.41h-7.06l18.93-49.31c.76-1.98,2.67-3.29,4.79-3.29h0c2.13,0,4.03,1.31,4.79,3.29l24.74,64.46c.83,2.16-.76,4.47-3.07,4.47Z"
      />
    </svg>
  );
}
