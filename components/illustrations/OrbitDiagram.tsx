"use client";

// Concentric orbit / layer diagram — shows the stack: Device → Platform → AI
// Used in the "end-to-end" and solutions sections

const LAYERS = [
  { r: 38, label: "Merlin AI",     color: "#FF00B2", dotCount: 5, speed: "20s", dir: 1  },
  { r: 26, label: "Platform",      color: "#3b82f6", dotCount: 4, speed: "14s", dir: -1 },
  { r: 14, label: "Smart Display", color: "#14b8a6", dotCount: 3, speed: "8s",  dir: 1  },
];

export function OrbitDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <filter id="orbit-glow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF00B2" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#FF00B2" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Background glow */}
      <circle cx="50" cy="50" r="42" fill="url(#core-grad)" />

      {/* Orbit rings */}
      {LAYERS.map((l, i) => (
        <circle key={i} cx="50" cy="50" r={l.r}
          fill="none" stroke={l.color}
          strokeWidth="0.3" strokeDasharray="1.5 1" opacity="0.3" />
      ))}

      {/* Orbiting dots */}
      {LAYERS.map((l, li) => (
        Array.from({ length: l.dotCount }).map((_, di) => {
          const angle = (di / l.dotCount) * 360;
          return (
            <g key={`${li}-${di}`}
              style={{
                transformOrigin: "50px 50px",
                animation: `spin${li > 0 ? li : ""} ${l.speed} linear infinite ${l.dir < 0 ? "reverse" : ""}`,
              }}>
              <style>{`
                @keyframes spin { from { transform: rotate(${angle}deg); } to { transform: rotate(${angle + 360}deg); } }
                @keyframes spin1 { from { transform: rotate(${angle}deg); } to { transform: rotate(${angle + 360}deg); } }
                @keyframes spin2 { from { transform: rotate(${angle}deg); } to { transform: rotate(${angle + 360}deg); } }
              `}</style>
              <circle
                cx={50 + l.r}
                cy={50}
                r={di === 0 ? 2 : 1.2}
                fill={l.color}
                opacity={di === 0 ? "0.9" : "0.5"}
                filter={di === 0 ? "url(#orbit-glow)" : undefined}
                style={{
                  transformOrigin: "50px 50px",
                  animation: `spin${li > 0 ? li : ""} ${l.speed} linear infinite ${l.dir < 0 ? "reverse" : ""}`,
                  animationDelay: `${-di * (parseInt(l.speed) / l.dotCount)}s`,
                }}
              />
            </g>
          );
        })
      ))}

      {/* Centre core */}
      <circle cx="50" cy="50" r="6" fill="rgba(255,0,178,0.15)" stroke="#FF00B2" strokeWidth="0.6" filter="url(#orbit-glow)" />
      <circle cx="50" cy="50" r="3" fill="#FF00B2" opacity="0.9" />

      {/* Layer labels */}
      {LAYERS.map((l, i) => (
        <text key={i}
          x={50 + l.r + 2} y={50}
          fontSize="2.5" fill={l.color}
          opacity="0.6" fontFamily="system-ui" dominantBaseline="middle">
          {l.label}
        </text>
      ))}
    </svg>
  );
}
