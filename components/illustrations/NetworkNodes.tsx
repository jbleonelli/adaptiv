"use client";

// Animated sensor-network graph — hub + satellite nodes, data particles, captions under every node

const NODES = [
  { id: "hub",   x: 50,  y: 50,  r: 7,  color: "#FF00B2", pulse: true,  label: "Merlin AI"     },
  { id: "cloud", x: 50,  y: 12,  r: 5,  color: "#FF00B2", pulse: true,  label: "Smart Display" },
  { id: "s1",    x: 18,  y: 25,  r: 4,  color: "#14b8a6", pulse: false, label: "Temperature"   },
  { id: "s2",    x: 80,  y: 21,  r: 4,  color: "#3b82f6", pulse: false, label: "CO₂"           },
  { id: "s3",    x: 85,  y: 63,  r: 4,  color: "#a855f7", pulse: false, label: "Motion"        },
  { id: "s4",    x: 14,  y: 71,  r: 4,  color: "#14b8a6", pulse: false, label: "Light"         },
  { id: "s5",    x: 58,  y: 86,  r: 3.5,color: "#3b82f6", pulse: false, label: "Vibration"     },
  { id: "s6",    x: 33,  y: 8,   r: 3,  color: "#FF00B2", pulse: false, label: "Camera"        },
  { id: "s7",    x: 89,  y: 40,  r: 3,  color: "#a855f7", pulse: false, label: "Energy"        },
  { id: "s8",    x: 8,   y: 47,  r: 3,  color: "#14b8a6", pulse: false, label: "Air Quality"   },
];

const EDGES = [
  ["hub", "s1"], ["hub", "s2"], ["hub", "s3"], ["hub", "s4"],
  ["hub", "s5"], ["hub", "s6"], ["hub", "s7"], ["hub", "s8"],
  ["hub", "cloud"],
  ["s1",  "s6"], ["s2", "s7"], ["s3", "s5"], ["s4", "s8"],
];

function getNode(id: string) {
  return NODES.find(n => n.id === id)!;
}

export function NetworkNodes({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id="glow-pink" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glow-node" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        {EDGES.map(([a, b], i) => {
          const na = getNode(a); const nb = getNode(b);
          return (
            <linearGradient key={i} id={`eg-${i}`}
              x1={`${na.x}%`} y1={`${na.y}%`}
              x2={`${nb.x}%`} y2={`${nb.y}%`}
              gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor={na.color} stopOpacity="0.55" />
              <stop offset="100%" stopColor={nb.color} stopOpacity="0.2"  />
            </linearGradient>
          );
        })}
      </defs>

      {/* Subtle dot-grid background */}
      <pattern id="nn-grid" width="8" height="8" patternUnits="userSpaceOnUse">
        <circle cx="4" cy="4" r="0.35" fill="rgba(255,255,255,0.045)" />
      </pattern>
      <rect width="100" height="100" fill="url(#nn-grid)" />

      {/* ── Edges ───────────────────────────────────────────────────── */}
      {EDGES.map(([a, b], i) => {
        const na = getNode(a); const nb = getNode(b);
        return (
          <line key={i}
            x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
            stroke={`url(#eg-${i})`}
            strokeWidth="0.45"
            strokeDasharray="1.8 1.2"
          >
            <animate attributeName="stroke-dashoffset"
              from="6" to="0"
              dur={`${1.8 + (i % 4) * 0.6}s`}
              repeatCount="indefinite" />
          </line>
        );
      })}

      {/* ── Data particles ──────────────────────────────────────────── */}
      {EDGES.slice(0, 7).map(([a, b], i) => {
        const na = getNode(a); const nb = getNode(b);
        const dur = `${2.8 + i * 0.45}s`;
        return (
          <circle key={`p-${i}`} r="0.9" fill={na.color} opacity="0">
            <animate attributeName="cx" values={`${na.x};${nb.x};${na.x}`} dur={dur} repeatCount="indefinite" />
            <animate attributeName="cy" values={`${na.y};${nb.y};${na.y}`} dur={dur} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.95;0.95;0" keyTimes="0;0.1;0.85;1" dur={dur} repeatCount="indefinite" />
          </circle>
        );
      })}

      {/* ── Sensor nodes (non-pulsing) ──────────────────────────────── */}
      {NODES.filter(n => !n.pulse).map(n => (
        <g key={n.id} filter="url(#glow-node)">
          {/* Outer halo */}
          <circle cx={n.x} cy={n.y} r={n.r + 2.8} fill="none"
            stroke={n.color} strokeWidth="0.3" opacity="0.22" />
          {/* Body */}
          <circle cx={n.x} cy={n.y} r={n.r}
            fill={`${n.color}20`} stroke={n.color} strokeWidth="0.55" />
          {/* Core dot */}
          <circle cx={n.x} cy={n.y} r={n.r * 0.42} fill={n.color} opacity="0.85" />
          {/* Caption */}
          <text
            x={n.x} y={n.y + n.r + 3.8}
            textAnchor="middle"
            fontSize="3"
            fontFamily="system-ui, sans-serif"
            fontWeight="500"
            fill={n.color}
            fillOpacity="0.7"
            letterSpacing="0.01"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* ── Hub — Smart Display (pulsing pink) ──────────────────────── */}
      <g filter="url(#glow-pink)">
        {/* Pulse rings */}
        <circle cx={50} cy={50} r={16} fill="none" stroke="#FF00B2" strokeWidth="0.3" opacity="0.12">
          <animate attributeName="r"       values="16;21;16"       dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.12;0.02;0.12" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx={50} cy={50} r={11} fill="none" stroke="#FF00B2" strokeWidth="0.3" opacity="0.22">
          <animate attributeName="r"       values="11;14;11"       dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.22;0.06;0.22" dur="3.2s" repeatCount="indefinite" />
        </circle>
        {/* Body */}
        <circle cx={50} cy={50} r={7} fill="rgba(255,0,178,0.18)" stroke="#FF00B2" strokeWidth="0.65" />
        {/* Core */}
        <circle cx={50} cy={50} r={3.5} fill="#FF00B2" opacity="0.95" />
        {/* Caption */}
        <text x={50} y={61}
          textAnchor="middle" fontSize="3.1"
          fontFamily="system-ui, sans-serif" fontWeight="600"
          fill="#FF00B2" fillOpacity="0.85"
        >
          Merlin AI
        </text>
      </g>

      {/* ── Merlin AI node (pulsing pink, top) ──────────────────────── */}
      <g filter="url(#glow-pink)">
        <circle cx={50} cy={12} r={10} fill="none" stroke="#FF00B2" strokeWidth="0.3" opacity="0.18">
          <animate attributeName="r"       values="10;14;10"       dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.18;0.04;0.18" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx={50} cy={12} r={5} fill="rgba(255,0,178,0.14)" stroke="#FF00B2" strokeWidth="0.65" />
        <circle cx={50} cy={12} r={2.5} fill="#FF00B2" opacity="0.95" />
        <text x={50} y={20.5}
          textAnchor="middle" fontSize="3.1"
          fontFamily="system-ui, sans-serif" fontWeight="600"
          fill="#FF00B2" fillOpacity="0.85"
        >
          Smart Display
        </text>
      </g>
    </svg>
  );
}
