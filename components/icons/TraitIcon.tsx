import type { ReactElement } from "react";

type IconRenderer = (color: string) => ReactElement;

const ICONS: Record<string, IconRenderer> = {
  radar: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <circle cx="20" cy="20" r="15" stroke={c} strokeWidth="0.8" strokeOpacity="0.18" />
      <circle cx="20" cy="20" r="10" stroke={c} strokeWidth="0.9" strokeOpacity="0.28" />
      <circle cx="20" cy="20" r="5" stroke={c} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="5" fill={c} fillOpacity="0.1" />
      <line x1="20" y1="20" x2="31" y2="7" stroke={c} strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="31" cy="7" r="2.2" fill={c} fillOpacity="0.65" />
      <circle cx="31" cy="7" r="4" fill={c} fillOpacity="0.1" />
      <circle cx="20" cy="20" r="2" fill={c} />
    </svg>
  ),
  neural: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <circle cx="20" cy="6" r="3" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <circle cx="9" cy="19" r="3" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <circle cx="31" cy="19" r="3" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <circle cx="13" cy="33" r="3" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <circle cx="27" cy="33" r="3" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <line x1="20" y1="9" x2="11" y2="16" stroke={c} strokeWidth="1" strokeOpacity="0.3" />
      <line x1="20" y1="9" x2="29" y2="16" stroke={c} strokeWidth="1" strokeOpacity="0.3" />
      <line x1="11" y1="22" x2="14" y2="30" stroke={c} strokeWidth="1" strokeOpacity="0.3" />
      <line x1="29" y1="22" x2="26" y2="30" stroke={c} strokeWidth="1" strokeOpacity="0.3" />
      <line x1="12" y1="22" x2="25" y2="30" stroke={c} strokeWidth="1" strokeOpacity="0.18" />
      <line x1="28" y1="22" x2="15" y2="30" stroke={c} strokeWidth="1" strokeOpacity="0.18" />
      <circle cx="20" cy="6" r="1.5" fill={c} />
    </svg>
  ),
  cycle: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <path d="M20 5 A15 15 0 1 1 5.5 26" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
      <path d="M3.5 24 L5.5 27 L8.5 25.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="5" r="1.8" fill={c} fillOpacity="0.65" />
      <circle cx="35" cy="20" r="1.8" fill={c} fillOpacity="0.45" />
      <circle cx="28" cy="33" r="1.8" fill={c} fillOpacity="0.3" />
      <circle cx="20" cy="20" r="4" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <circle cx="20" cy="20" r="4" fill={c} fillOpacity="0.08" />
      <circle cx="20" cy="20" r="2" fill={c} />
    </svg>
  ),
  shield: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <path d="M20 4 L34 10 L34 22 C34 30 27.5 36 20 38 C12.5 36 6 30 6 22 L6 10 Z" stroke={c} strokeWidth="1.5" strokeOpacity="0.5" />
      <path d="M20 4 L34 10 L34 22 C34 30 27.5 36 20 38 C12.5 36 6 30 6 22 L6 10 Z" fill={c} fillOpacity="0.07" />
      <circle cx="20" cy="21" r="7" stroke={c} strokeWidth="1.2" strokeOpacity="0.35" />
      <circle cx="20" cy="21" r="3.5" stroke={c} strokeWidth="1.2" strokeOpacity="0.6" />
      <circle cx="20" cy="21" r="3.5" fill={c} fillOpacity="0.12" />
      <circle cx="20" cy="21" r="1.8" fill={c} />
    </svg>
  ),
  action: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <circle cx="8" cy="20" r="4.5" stroke={c} strokeWidth="1.5" />
      <circle cx="8" cy="20" r="4.5" fill={c} fillOpacity="0.1" />
      <circle cx="8" cy="20" r="2" fill={c} />
      <line x1="12.5" y1="18" x2="24" y2="12" stroke={c} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="12.5" y1="20" x2="24" y2="20" stroke={c} strokeWidth="1.2" strokeOpacity="0.55" />
      <line x1="12.5" y1="22" x2="24" y2="28" stroke={c} strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="26" cy="12" r="2.5" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <circle cx="26" cy="20" r="3.5" stroke={c} strokeWidth="1.5" />
      <circle cx="26" cy="20" r="3.5" fill={c} fillOpacity="0.1" />
      <circle cx="26" cy="28" r="2.5" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <line x1="29.5" y1="20" x2="36" y2="20" stroke={c} strokeWidth="1.2" strokeOpacity="0.55" />
      <path d="M34 17 L37 20 L34 23" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  hub: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <circle cx="20" cy="20" r="5" stroke={c} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="5" fill={c} fillOpacity="0.12" />
      <circle cx="8" cy="10" r="3" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <circle cx="32" cy="10" r="3" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <circle cx="20" cy="34" r="3" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <line x1="11" y1="12" x2="16" y2="17" stroke={c} strokeWidth="1" strokeOpacity="0.3" />
      <line x1="29" y1="12" x2="24" y2="17" stroke={c} strokeWidth="1" strokeOpacity="0.3" />
      <line x1="20" y1="25" x2="20" y2="31" stroke={c} strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="20" cy="20" r="2" fill={c} />
    </svg>
  ),
  waveform: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <line x1="4" y1="20" x2="11" y2="20" stroke={c} strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
      <polyline points="11,20 15,10 18,28 21,13 25,20" stroke={c} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <line x1="25" y1="20" x2="36" y2="20" stroke={c} strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
      <circle cx="15" cy="10" r="1.8" fill={c} />
      <circle cx="21" cy="13" r="1.4" fill={c} fillOpacity="0.55" />
      <circle cx="36" cy="20" r="2.2" fill={c} fillOpacity="0.85" />
      <circle cx="36" cy="20" r="4.5" fill={c} fillOpacity="0.1" />
    </svg>
  ),
  workflow: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <rect x="2" y="15" width="10" height="10" rx="2" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <rect x="15" y="13" width="10" height="14" rx="2" stroke={c} strokeWidth="1.5" />
      <rect x="15" y="13" width="10" height="14" rx="2" fill={c} fillOpacity="0.1" />
      <rect x="28" y="15" width="10" height="10" rx="2" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <line x1="12" y1="20" x2="15" y2="20" stroke={c} strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="25" y1="20" x2="28" y2="20" stroke={c} strokeWidth="1.2" strokeOpacity="0.4" />
      <circle cx="7" cy="20" r="1.5" fill={c} fillOpacity="0.4" />
      <circle cx="20" cy="20" r="2" fill={c} />
      <circle cx="33" cy="20" r="1.5" fill={c} fillOpacity="0.4" />
    </svg>
  ),
  studio: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      {[8, 16, 24, 32].flatMap((x) =>
        [8, 16, 24, 32].map((y) => (
          <circle key={`d${x}${y}`} cx={x} cy={y} r="0.7" fill={c} fillOpacity="0.18" />
        ))
      )}
      <circle cx="12" cy="28" r="3.5" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <circle cx="24" cy="14" r="4" stroke={c} strokeWidth="1.5" />
      <circle cx="24" cy="14" r="4" fill={c} fillOpacity="0.12" />
      <circle cx="32" cy="28" r="3.5" stroke={c} strokeWidth="1.2" strokeOpacity="0.45" />
      <line x1="14.5" y1="25.5" x2="21.5" y2="17" stroke={c} strokeWidth="1" strokeOpacity="0.35" />
      <line x1="27" y1="17" x2="30" y2="25.5" stroke={c} strokeWidth="1" strokeOpacity="0.35" />
      <circle cx="24" cy="14" r="2" fill={c} />
    </svg>
  ),
  code: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <path d="M15 12 L9 20 L15 28" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
      <path d="M25 12 L31 20 L25 28" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
      <line x1="22" y1="10" x2="18" y2="30" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="5" cy="20" r="2" fill={c} />
      <circle cx="35" cy="20" r="2" fill={c} />
      <line x1="5" y1="20" x2="9" y2="20" stroke={c} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="31" y1="20" x2="35" y2="20" stroke={c} strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  ),
  audit: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <rect x="8" y="6" width="24" height="28" rx="3" stroke={c} strokeWidth="1.2" strokeOpacity="0.35" />
      <line x1="14" y1="13" x2="14" y2="30" stroke={c} strokeWidth="1" strokeOpacity="0.25" />
      <circle cx="14" cy="13" r="2.2" stroke={c} strokeWidth="1" strokeOpacity="0.5" fill={c} fillOpacity="0.1" />
      <circle cx="14" cy="21" r="2" stroke={c} strokeWidth="1" strokeOpacity="0.5" fill={c} fillOpacity="0.15" />
      <circle cx="14" cy="29" r="2.5" fill={c} />
      <line x1="19" y1="13" x2="27" y2="13" stroke={c} strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="19" y1="17" x2="25" y2="17" stroke={c} strokeWidth="1" strokeOpacity="0.22" />
      <line x1="19" y1="21" x2="27" y2="21" stroke={c} strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="19" y1="25" x2="24" y2="25" stroke={c} strokeWidth="1" strokeOpacity="0.22" />
      <line x1="19" y1="29" x2="27" y2="29" stroke={c} strokeWidth="1.2" strokeOpacity="0.6" />
    </svg>
  ),
  target: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <circle cx="20" cy="20" r="13" stroke={c} strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="20" cy="20" r="8" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
      <circle cx="20" cy="20" r="3.5" stroke={c} strokeWidth="1.2" />
      <circle cx="20" cy="20" r="1.6" fill={c} fillOpacity="0.95" />
    </svg>
  ),
  "circle-filled": (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <circle cx="20" cy="20" r="14" stroke={c} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="14" fill={c} fillOpacity="0.12" />
      <circle cx="20" cy="20" r="6" fill={c} />
    </svg>
  ),
  diamond: (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <path d="M20 4 L36 20 L20 36 L4 20 Z" stroke={c} strokeWidth="1.5" />
      <path d="M20 4 L36 20 L20 36 L4 20 Z" fill={c} fillOpacity="0.1" />
      <circle cx="20" cy="20" r="3" fill={c} />
    </svg>
  ),
  "square-diamond": (c) => (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <rect x="8" y="8" width="24" height="24" rx="3" stroke={c} strokeWidth="1.5" transform="rotate(45 20 20)" />
      <rect x="8" y="8" width="24" height="24" rx="3" fill={c} fillOpacity="0.1" transform="rotate(45 20 20)" />
      <circle cx="20" cy="20" r="3" fill={c} />
    </svg>
  ),
};

export function TraitIcon({ name, color = "#FF00B2" }: { name: string; color?: string }) {
  const renderer = ICONS[name] ?? ICONS["circle-filled"];
  return renderer(color);
}
