"use client";

// Abstract building floor-plan schematic with sensor nodes and data flow lines
// Used in the Physical AI / device showcase sections

export function BuildingSchematic({ className = "" }: { className?: string }) {
  const rooms = [
    { x: 4,  y: 4,  w: 38, h: 28, label: "Office Floor" },
    { x: 46, y: 4,  w: 50, h: 28, label: "Meeting Rooms" },
    { x: 4,  y: 36, w: 24, h: 30, label: "Server Room" },
    { x: 32, y: 36, w: 32, h: 30, label: "Production" },
    { x: 68, y: 36, w: 28, h: 30, label: "Warehouse" },
    { x: 4,  y: 70, w: 92, h: 24, label: "Ground Floor" },
  ];

  const sensors = [
    { x: 18, y: 16, color: "#FF00B2",  type: "SD" },
    { x: 62, y: 16, color: "#FF00B2",  type: "SD" },
    { x: 12, y: 50, color: "#14b8a6",  type: "T°" },
    { x: 44, y: 50, color: "#a855f7",  type: "CO₂" },
    { x: 78, y: 50, color: "#3b82f6",  type: "V" },
    { x: 25, y: 80, color: "#14b8a6",  type: "T°" },
    { x: 55, y: 80, color: "#FF00B2",  type: "SD" },
    { x: 85, y: 80, color: "#a855f7",  type: "CO₂" },
  ];

  return (
    <svg viewBox="0 0 100 98" className={className} aria-hidden="true">
      <defs>
        <filter id="bp-glow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Floor plan rooms */}
      {rooms.map((r, i) => (
        <g key={i}>
          <rect x={r.x} y={r.y} width={r.w} height={r.h}
            fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.4" rx="0.5" />
          <text x={r.x + r.w / 2} y={r.y + 5.5}
            textAnchor="middle" fontSize="2.2"
            fill="rgba(255,255,255,0.2)" fontFamily="system-ui">
            {r.label}
          </text>
        </g>
      ))}

      {/* Data flow lines connecting SDs to Merlin */}
      {sensors.filter(s => s.type === "SD").map((s, i) => (
        <line key={`flow-${i}`}
          x1={s.x} y1={s.y} x2={50} y2={-4}
          stroke="#FF00B2" strokeWidth="0.3" strokeDasharray="1.2 0.8" opacity="0.3">
          <animate attributeName="stroke-dashoffset"
            from="4" to="0" dur={`${2 + i * 0.6}s`} repeatCount="indefinite" />
        </line>
      ))}

      {/* Sensor-to-SD connection lines */}
      {sensors.filter(s => s.type !== "SD").map((s, i) => {
        const nearestSD = sensors.filter(sd => sd.type === "SD")
          .sort((a, b) => Math.hypot(a.x - s.x, a.y - s.y) - Math.hypot(b.x - s.x, b.y - s.y))[0];
        return (
          <line key={`conn-${i}`}
            x1={s.x} y1={s.y} x2={nearestSD.x} y2={nearestSD.y}
            stroke={s.color} strokeWidth="0.25" strokeDasharray="0.8 0.6" opacity="0.35">
            <animate attributeName="stroke-dashoffset"
              from="3" to="0" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
          </line>
        );
      })}

      {/* Sensor nodes */}
      {sensors.map((s, i) => (
        <g key={`sensor-${i}`} filter={s.type === "SD" ? "url(#bp-glow)" : undefined}>
          <circle cx={s.x} cy={s.y} r={s.type === "SD" ? 4 : 2.5}
            fill={`${s.color}15`} stroke={s.color}
            strokeWidth={s.type === "SD" ? "0.6" : "0.4"} />
          <circle cx={s.x} cy={s.y} r={s.type === "SD" ? 1.8 : 1}
            fill={s.color} opacity="0.85" />
          {s.type === "SD" && (
            <circle cx={s.x} cy={s.y} r={7} fill="none"
              stroke={s.color} strokeWidth="0.25" opacity="0.2">
              <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.04;0.2" dur="3s" repeatCount="indefinite" />
            </circle>
          )}
          <text x={s.x} y={s.y + (s.type === "SD" ? 7 : 5.5)}
            textAnchor="middle" fontSize="1.8"
            fill={s.color} opacity={0.5} fontFamily="monospace">
            {s.type}
          </text>
        </g>
      ))}

      {/* Merlin label at top */}
      <text x={50} y={-1} textAnchor="middle" fontSize="2.5"
        fill="#FF00B2" opacity="0.6" fontFamily="system-ui" fontWeight="600">
        ↑ Merlin AI
      </text>
    </svg>
  );
}
