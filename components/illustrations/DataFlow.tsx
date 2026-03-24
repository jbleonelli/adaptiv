"use client";

// Abstract data pipeline / stream visualisation
// Horizontal channels with flowing particles — used in Merlin sections

const CHANNELS = [
  { y: 20, color: "#FF00B2", label: "Sensor data",    speed: 4,   width: 85 },
  { y: 35, color: "#3b82f6", label: "Video stream",   speed: 6,   width: 70 },
  { y: 50, color: "#14b8a6", label: "HVAC telemetry", speed: 3.5, width: 90 },
  { y: 65, color: "#a855f7", label: "Energy metrics", speed: 5,   width: 75 },
  { y: 80, color: "#FF00B2", label: "Alerts",         speed: 2.5, width: 60 },
];

const PARTICLES_PER_CHANNEL = 4;

export function DataFlow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <filter id="df-glow">
          <feGaussianBlur stdDeviation="1.2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Merlin processing box on the right */}
      <rect x={88} y={12} width={10} height={76} rx="1"
        fill="rgba(255,0,178,0.06)" stroke="rgba(255,0,178,0.3)" strokeWidth="0.4" />
      <text x={93} y={52} textAnchor="middle" fontSize="2.5"
        fill="#FF00B2" opacity="0.7" fontFamily="system-ui"
        transform="rotate(-90 93 52)">
        Merlin
      </text>

      {/* Source box on the left */}
      <rect x={2} y={12} width={10} height={76} rx="1"
        fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.4" />
      <text x={7} y={52} textAnchor="middle" fontSize="2.2"
        fill="rgba(255,255,255,0.25)" fontFamily="system-ui"
        transform="rotate(-90 7 52)">
        Sensors
      </text>

      {CHANNELS.map((ch, ci) => (
        <g key={ci}>
          {/* Channel track */}
          <line x1={13} y1={ch.y} x2={87} y2={ch.y}
            stroke={ch.color} strokeWidth="0.25" opacity="0.18" />
          {/* Channel label */}
          <text x={14} y={ch.y - 2} fontSize="2" fill={ch.color}
            opacity="0.4" fontFamily="monospace">
            {ch.label}
          </text>

          {/* Flowing packets */}
          {Array.from({ length: PARTICLES_PER_CHANNEL }).map((_, pi) => {
            const delay = -(pi * (ch.speed / PARTICLES_PER_CHANNEL));
            const size = 1.2 + (pi % 2) * 0.6;
            return (
              <g key={pi}>
                <rect
                  y={ch.y - size / 2}
                  width={size * 2} height={size}
                  rx="0.3" fill={ch.color} opacity="0.75"
                  filter="url(#df-glow)">
                  <animate
                    attributeName="x"
                    values={`13;${ch.width};13`}
                    dur={`${ch.speed}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.75;0.75;0"
                    dur={`${ch.speed}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </rect>
                {/* Trailing glow */}
                <rect
                  y={ch.y - 0.5}
                  width={size * 4} height={1}
                  rx="0.5" fill={ch.color} opacity="0.2">
                  <animate
                    attributeName="x"
                    values={`9;${ch.width - 4};9`}
                    dur={`${ch.speed}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.2;0.2;0"
                    dur={`${ch.speed}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
}
