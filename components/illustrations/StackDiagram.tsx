"use client";

// Three-layer Physical AI architecture diagram
// Layer 3 (top): Merlin AI — purple
// Layer 2 (mid): IIoT Platform — pink
// Layer 1 (base): Devices — teal

const LAYERS = [
  {
    label: "Physical AI Layer",
    sublabel: "Merlin — Autonomous Agents",
    color: "#a855f7",
    y: 8,
    nodes: [
      { x: 20, label: "Agent 1" },
      { x: 40, label: "Agent 2" },
      { x: 60, label: "Agent 3" },
      { x: 80, label: "Studio" },
    ],
  },
  {
    label: "IIoT Software Layer",
    sublabel: "Data Pipelines · Edge-Cloud Sync",
    color: "#FF00B2",
    y: 38,
    nodes: [
      { x: 18, label: "Events" },
      { x: 36, label: "Pipelines" },
      { x: 55, label: "APIs" },
      { x: 73, label: "Webhooks" },
      { x: 88, label: "Logs" },
    ],
  },
  {
    label: "Physical Device Layer",
    sublabel: "Smart Displays · Sensors · Cameras",
    color: "#14b8a6",
    y: 68,
    nodes: [
      { x: 15, label: "SD" },
      { x: 30, label: "T°" },
      { x: 45, label: "CO₂" },
      { x: 60, label: "CAM" },
      { x: 75, label: "VIB" },
      { x: 88, label: "LTE" },
    ],
  },
];

export function StackDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 95" className={className} aria-hidden="true">
      <defs>
        <filter id="sd-glow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Vertical connectors between layers */}
      {[25, 50, 75].map((x, i) => (
        <g key={i}>
          {/* Layer 3 → 2 */}
          <line x1={x} y1={20} x2={x} y2={37}
            stroke="rgba(255,255,255,0.08)" strokeWidth="0.4" strokeDasharray="1 0.8" />
          <circle cx={x} cy={28.5} r="0.8" fill="rgba(255,255,255,0.2)">
            <animate attributeName="cy" values="20;37;20" dur={`${2.5 + i * 0.4}s`}
              repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur={`${2.5 + i * 0.4}s`}
              repeatCount="indefinite" />
          </circle>
          {/* Layer 2 → 1 */}
          <line x1={x} y1={50} x2={x} y2={67}
            stroke="rgba(255,255,255,0.08)" strokeWidth="0.4" strokeDasharray="1 0.8" />
          <circle cx={x} cy={58.5} r="0.8" fill="rgba(255,255,255,0.2)">
            <animate attributeName="cy" values="50;67;50" dur={`${2 + i * 0.3}s`}
              repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur={`${2 + i * 0.3}s`}
              repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Layers */}
      {LAYERS.map((layer, li) => (
        <g key={li}>
          {/* Layer band */}
          <rect x={4} y={layer.y} width={92} height={24} rx="2"
            fill={`${layer.color}09`}
            stroke={layer.color} strokeWidth="0.35" strokeOpacity="0.35" />

          {/* Left accent bar */}
          <rect x={4} y={layer.y} width={1.5} height={24} rx="0.5"
            fill={layer.color} opacity="0.7" />

          {/* Layer labels */}
          <text x={9} y={layer.y + 6} fontSize="2.6" fontWeight="600"
            fill={layer.color} opacity="0.9" fontFamily="system-ui">
            {layer.label}
          </text>
          <text x={9} y={layer.y + 11} fontSize="2"
            fill="rgba(255,255,255,0.3)" fontFamily="system-ui">
            {layer.sublabel}
          </text>

          {/* Component nodes within layer */}
          {layer.nodes.map((n, ni) => (
            <g key={ni}>
              <rect x={n.x - 5} y={layer.y + 14} width={12} height={6} rx="1"
                fill={`${layer.color}18`} stroke={layer.color}
                strokeWidth="0.3" strokeOpacity="0.5" />
              <text x={n.x + 1} y={layer.y + 18.5} textAnchor="middle"
                fontSize="1.8" fill={layer.color} opacity="0.65"
                fontFamily="monospace">
                {n.label}
              </text>
            </g>
          ))}

          {/* Subtle horizontal scan line */}
          <line x1={4} y1={layer.y + 12.5} x2={96} y2={layer.y + 12.5}
            stroke={layer.color} strokeWidth="0.15" strokeOpacity="0.2"
            strokeDasharray="2 1" />
        </g>
      ))}

      {/* "End-to-end by Adaptiv" label */}
      <text x={50} y={93} textAnchor="middle" fontSize="2.2"
        fill="rgba(255,255,255,0.2)" fontFamily="system-ui">
        ↕ end-to-end, designed and owned by Adaptiv
      </text>
    </svg>
  );
}
