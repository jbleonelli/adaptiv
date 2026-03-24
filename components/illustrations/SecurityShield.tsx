"use client";

// Concentric security rings with lock at centre — used on Platform security section

const RINGS = [
  { r: 42, label: "Zero-Trust Network",  color: "#14b8a6", dash: "2 1.5" },
  { r: 32, label: "E2E Encryption",      color: "#3b82f6", dash: "1.5 1" },
  { r: 22, label: "Device Auth",         color: "#a855f7", dash: "1 0.8" },
  { r: 12, label: "Secure Boot",         color: "#FF00B2", dash: "none" },
];

const RING_NODES = [
  { ring: 0, angle: 30,  color: "#14b8a6", label: "LTE" },
  { ring: 0, angle: 150, color: "#14b8a6", label: "TLS" },
  { ring: 0, angle: 270, color: "#14b8a6", label: "VPN" },
  { ring: 1, angle: 60,  color: "#3b82f6", label: "AES" },
  { ring: 1, angle: 200, color: "#3b82f6", label: "PKI" },
  { ring: 2, angle: 90,  color: "#a855f7", label: "x509" },
  { ring: 2, angle: 300, color: "#a855f7", label: "HSM" },
];

export function SecurityShield({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <filter id="ss-glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="ss-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background fill */}
      <circle cx="50" cy="50" r="48" fill="url(#ss-bg)" />

      {/* Concentric rings */}
      {RINGS.map((ring, i) => (
        <g key={i}>
          <circle cx="50" cy="50" r={ring.r}
            fill={`${ring.color}06`}
            stroke={ring.color} strokeWidth="0.4" strokeOpacity="0.35"
            strokeDasharray={ring.dash === "none" ? undefined : ring.dash} />
          {/* Ring pulse animation for outermost */}
          {i === 0 && (
            <circle cx="50" cy="50" r={ring.r}
              fill="none" stroke={ring.color} strokeWidth="0.2" opacity="0.1">
              <animate attributeName="r" values={`${ring.r};${ring.r + 4};${ring.r}`}
                dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.1;0.02;0.1"
                dur="4s" repeatCount="indefinite" />
            </circle>
          )}
          {/* Ring label */}
          <text
            x={50 + ring.r * Math.cos(-0.4)}
            y={50 + ring.r * Math.sin(-0.4) - 1.5}
            fontSize="2" fill={ring.color} opacity="0.5" fontFamily="system-ui">
            {ring.label}
          </text>
        </g>
      ))}

      {/* Ring nodes */}
      {RING_NODES.map((n, i) => {
        const ring = RINGS[n.ring];
        const rad = (n.angle * Math.PI) / 180;
        const x = 50 + ring.r * Math.cos(rad);
        const y = 50 + ring.r * Math.sin(rad);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="3.5"
              fill={`${n.color}15`} stroke={n.color} strokeWidth="0.4" strokeOpacity="0.7" />
            <circle cx={x} cy={y} r="1.2" fill={n.color} opacity="0.8" />
            <text x={x} y={y + 6} textAnchor="middle" fontSize="1.8"
              fill={n.color} opacity="0.5" fontFamily="monospace">
              {n.label}
            </text>
          </g>
        );
      })}

      {/* Centre lock icon */}
      <g filter="url(#ss-glow)">
        {/* Lock body */}
        <rect x="44" y="53" width="12" height="9" rx="1.5"
          fill="rgba(255,0,178,0.15)" stroke="#FF00B2" strokeWidth="0.6" />
        {/* Lock shackle */}
        <path d="M 46.5 53 L 46.5 49.5 A 3.5 3.5 0 0 1 53.5 49.5 L 53.5 53"
          fill="none" stroke="#FF00B2" strokeWidth="0.6" strokeLinecap="round" />
        {/* Keyhole */}
        <circle cx="50" cy="57.5" r="1.5" fill="#FF00B2" opacity="0.8" />
        <rect x="49.3" y="57.5" width="1.4" height="2.5" rx="0.5" fill="#FF00B2" opacity="0.8" />
      </g>
    </svg>
  );
}
