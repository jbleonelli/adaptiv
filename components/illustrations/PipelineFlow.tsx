"use client";

// Integration pipeline diagram — external systems flowing into/out of Adaptiv platform
// Inspired by Palantir Foundry-style data topology graphics

const EXTERNAL = [
  { x: 8,  y: 18, label: "BMS",    color: "#3b82f6" },
  { x: 8,  y: 34, label: "CMMS",   color: "#a855f7" },
  { x: 8,  y: 50, label: "SCADA",  color: "#14b8a6" },
  { x: 8,  y: 66, label: "ERP",    color: "#f59e0b" },
  { x: 8,  y: 82, label: "MES",    color: "#FF00B2" },
];

const OUTPUTS = [
  { x: 92, y: 22, label: "Merlin",  color: "#a855f7" },
  { x: 92, y: 38, label: "Alerts",  color: "#FF00B2" },
  { x: 92, y: 54, label: "Actions", color: "#14b8a6" },
  { x: 92, y: 70, label: "Logs",    color: "#3b82f6" },
  { x: 92, y: 86, label: "APIs",    color: "#f59e0b" },
];

export function PipelineFlow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <filter id="pf-glow">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Gradient for input lines */}
        {EXTERNAL.map((ext, i) => (
          <linearGradient key={i} id={`in-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={ext.color} stopOpacity="0.5" />
            <stop offset="100%" stopColor={ext.color} stopOpacity="0.1" />
          </linearGradient>
        ))}

        {/* Gradient for output lines */}
        {OUTPUTS.map((out, i) => (
          <linearGradient key={i} id={`out-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={out.color} stopOpacity="0.1" />
            <stop offset="100%" stopColor={out.color} stopOpacity="0.5" />
          </linearGradient>
        ))}
      </defs>

      {/* ── Central hub ── */}
      <rect x={36} y={18} width={28} height={64} rx="3"
        fill="rgba(255,0,178,0.06)" stroke="rgba(255,0,178,0.25)" strokeWidth="0.5" />
      {/* Hub glow */}
      <rect x={36} y={18} width={28} height={64} rx="3"
        fill="none" stroke="#FF00B2" strokeWidth="0.2" opacity="0.15" filter="url(#pf-glow)" />
      {/* Hub label */}
      <text x={50} y={44} textAnchor="middle" fontSize="3" fontWeight="700"
        fill="#FF00B2" opacity="0.85" fontFamily="system-ui">
        Adaptiv
      </text>
      <text x={50} y={50} textAnchor="middle" fontSize="2.2"
        fill="rgba(255,255,255,0.3)" fontFamily="system-ui">
        Platform
      </text>
      {/* Hub inner nodes */}
      {[28, 38, 48, 58, 68, 78].map((y, i) => (
        <circle key={i} cx={50} cy={y - 10} r="1"
          fill="#FF00B2" opacity={0.2 + (i % 3) * 0.15} />
      ))}

      {/* ── Input connections (left → hub) ── */}
      {EXTERNAL.map((ext, i) => {
        const midY = 18 + (i / (EXTERNAL.length - 1)) * 64;
        return (
          <g key={i}>
            {/* Node box */}
            <rect x={1} y={ext.y - 4} width={13} height={8} rx="1.5"
              fill={`${ext.color}15`} stroke={ext.color} strokeWidth="0.4" strokeOpacity="0.6" />
            <text x={7.5} y={ext.y + 1} textAnchor="middle" fontSize="2.2"
              fill={ext.color} fontFamily="monospace" opacity="0.8">
              {ext.label}
            </text>

            {/* Connection line with curve */}
            <path d={`M 14 ${ext.y} C 26 ${ext.y} 28 ${midY} 36 ${midY}`}
              fill="none" stroke={`url(#in-grad-${i})`} strokeWidth="0.35" />

            {/* Flowing particle */}
            <circle r="0.9" fill={ext.color} opacity="0.8">
              <animateMotion
                path={`M 14 ${ext.y} C 26 ${ext.y} 28 ${midY} 36 ${midY}`}
                dur={`${2.8 + i * 0.5}s`}
                repeatCount="indefinite"
                begin={`${-i * 0.6}s`}
              />
              <animate attributeName="opacity" values="0;0.9;0.9;0"
                dur={`${2.8 + i * 0.5}s`} repeatCount="indefinite"
                begin={`${-i * 0.6}s`} />
            </circle>
          </g>
        );
      })}

      {/* ── Output connections (hub → right) ── */}
      {OUTPUTS.map((out, i) => {
        const midY = 18 + (i / (OUTPUTS.length - 1)) * 64;
        return (
          <g key={i}>
            {/* Node box */}
            <rect x={86} y={out.y - 4} width={13} height={8} rx="1.5"
              fill={`${out.color}15`} stroke={out.color} strokeWidth="0.4" strokeOpacity="0.6" />
            <text x={92.5} y={out.y + 1} textAnchor="middle" fontSize="2.2"
              fill={out.color} fontFamily="monospace" opacity="0.8">
              {out.label}
            </text>

            {/* Connection line with curve */}
            <path d={`M 64 ${midY} C 72 ${midY} 74 ${out.y} 86 ${out.y}`}
              fill="none" stroke={`url(#out-grad-${i})`} strokeWidth="0.35" />

            {/* Flowing particle */}
            <circle r="0.9" fill={out.color} opacity="0.8">
              <animateMotion
                path={`M 64 ${midY} C 72 ${midY} 74 ${out.y} 86 ${out.y}`}
                dur={`${3 + i * 0.4}s`}
                repeatCount="indefinite"
                begin={`${-i * 0.7}s`}
              />
              <animate attributeName="opacity" values="0;0.9;0.9;0"
                dur={`${3 + i * 0.4}s`} repeatCount="indefinite"
                begin={`${-i * 0.7}s`} />
            </circle>
          </g>
        );
      })}

      {/* Column labels */}
      <text x={7.5} y={10} textAnchor="middle" fontSize="2"
        fill="rgba(255,255,255,0.2)" fontFamily="system-ui">
        Inputs
      </text>
      <text x={92.5} y={10} textAnchor="middle" fontSize="2"
        fill="rgba(255,255,255,0.2)" fontFamily="system-ui">
        Outputs
      </text>
    </svg>
  );
}
