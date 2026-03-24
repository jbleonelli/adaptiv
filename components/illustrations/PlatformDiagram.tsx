"use client";

// Reinterpretation of the Adaptiv Platform Architecture diagram
// Three phases: ACQUIRE → ANALYZE → ACT
// Style: dark-theme, thin pink lines, node-graph aesthetic

const P = "#FF00B2";   // brand pink
const B = "#3b82f6";   // blue
const T = "#14b8a6";   // teal
const V = "#a855f7";   // purple

export function PlatformDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 172"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id="plat-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.8" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="plat-glow-sm" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* PCB substrate grid, clipped to board outline */}
        <clipPath id="pcb-clip">
          <rect x="13" y="34" width="64" height="84" rx="3" />
        </clipPath>
        <pattern id="pcb-grid" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M6 0 L0 0 0 6" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.4" />
        </pattern>
      </defs>

      {/* ── DOT GRID ──────────────────────────────────────────────── */}
      {Array.from({ length: 15 }, (_, c) =>
        Array.from({ length: 9 }, (_, r) => (
          <circle key={`dg${c}${r}`} cx={c * 20 + 4} cy={r * 20 + 4}
            r="0.45" fill="rgba(255,255,255,0.1)" />
        ))
      )}

      {/* ── COLUMN DIVIDERS ───────────────────────────────────────── */}
      <line x1="95"  y1="4"  x2="95"  y2="150" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1="185" y1="4"  x2="185" y2="150" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" strokeDasharray="3 3" />

      {/* ── PHASE HEADERS ─────────────────────────────────────────── */}
      {[
        { label: "ACQUIRE", sub: "Adaptiv Core",  cx: 48  },
        { label: "ANALYZE", sub: "AI Platform",   cx: 140 },
        { label: "ACT",     sub: "Adaptiv Apps",  cx: 234 },
      ].map(h => (
        <g key={h.label}>
          <text x={h.cx} y="11" textAnchor="middle" fontSize="5.5" fontWeight="700"
            fill={P} fontFamily="system-ui, sans-serif" filter="url(#plat-glow-sm)">{h.label}</text>
          <text x={h.cx} y="18" textAnchor="middle" fontSize="2.8"
            fill="rgba(255,255,255,0.38)" fontFamily="system-ui, sans-serif">{h.sub}</text>
        </g>
      ))}

      {/* ══════════════════════════════════════════════════════════════
          COLUMN 1 — ACQUIRE  (Adaptiv Core — electronic PCB)
          Board centered at x=45, y=76  (matches ANALYZE / ACT columns)
      ══════════════════════════════════════════════════════════════ */}

      {/* PCB substrate grid */}
      <rect x="13" y="34" width="64" height="84" rx="3" fill="url(#pcb-grid)" clipPath="url(#pcb-clip)" />

      {/* PCB board outline  x:13–77  y:34–118 */}
      <rect x="13" y="34" width="64" height="84" rx="3"
        stroke={P} strokeWidth="0.65" strokeOpacity="0.65" fill={`${P}04`} />

      {/* Corner mounting holes */}
      {([[18,39],[71,39],[18,113],[71,113]] as [number,number][]).map(([cx,cy]) => (
        <circle key={`mh${cx}${cy}`} cx={cx} cy={cy} r="1.8"
          stroke={P} strokeWidth="0.4" strokeOpacity="0.28" fill="none" />
      ))}

      {/* ── MCU chip  x:18–40  y:48–66 ── */}
      <rect x="18" y="48" width="22" height="18" rx="1"
        stroke={P} strokeWidth="0.55" fill={`${P}10`} />
      <text x="29" y="58.5" textAnchor="middle" fontSize="3.5" fontWeight="700"
        fill={P} fillOpacity="0.85" fontFamily="system-ui, sans-serif">MCU</text>
      {/* pads top  (y=45.8) */}
      {[21,25,29,33,37].map(x => <rect key={`mt${x}`} x={x-1} y={45.8} width="2" height="2.2" rx="0.3" fill={P} fillOpacity="0.38" />)}
      {/* pads bottom  (y=66) */}
      {[21,25,29,33,37].map(x => <rect key={`mb${x}`} x={x-1} y={66}   width="2" height="2.2" rx="0.3" fill={P} fillOpacity="0.38" />)}
      {/* pads left  (x=15.8) */}
      {[53,58].map(y => <rect key={`ml${y}`} x={15.8} y={y-1} width="2.2" height="2" rx="0.3" fill={P} fillOpacity="0.38" />)}
      {/* pads right  (x=40) */}
      {[53,58].map(y => <rect key={`mr${y}`} x={40}   y={y-1} width="2.2" height="2" rx="0.3" fill={P} fillOpacity="0.38" />)}

      {/* ── LTE / RF module  x:46–68  y:55–73 ── */}
      <rect x="46" y="55" width="22" height="18" rx="1"
        stroke={T} strokeWidth="0.55" fill={`${T}08`} />
      <text x="57" y="65.5" textAnchor="middle" fontSize="3.5" fontWeight="700"
        fill={T} fillOpacity="0.78" fontFamily="system-ui, sans-serif">LTE</text>
      {/* pads bottom  (y=73) */}
      {[49,53,57,61,65].map(x => <rect key={`lt${x}`} x={x-1} y={73} width="2" height="2.2" rx="0.3" fill={T} fillOpacity="0.38" />)}
      {/* Antenna — meander inside board above LTE chip  y:43–55 */}
      <path d="M48 55 V47 H52 V43 H58 V47 H64 V55"
        stroke={T} strokeWidth="0.45" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" />

      {/* ── Sensor IC  x:16–32  y:80–93 ── */}
      <rect x="16" y="80" width="16" height="13" rx="0.8"
        stroke={B} strokeWidth="0.5" fill={`${B}08`} />
      <text x="24" y="88" textAnchor="middle" fontSize="3.2" fontWeight="700"
        fill={B} fillOpacity="0.75" fontFamily="system-ui, sans-serif">SEN</text>
      {/* pads top  (y=78) */}
      {[19,24,29].map(x => <rect key={`st${x}`} x={x-0.9} y={78} width="1.8" height="2" rx="0.3" fill={B} fillOpacity="0.35" />)}

      {/* ── Power / BMS IC  x:47–63  y:80–93 ── */}
      <rect x="47" y="80" width="16" height="13" rx="0.8"
        stroke={V} strokeWidth="0.5" fill={`${V}08`} />
      <text x="55" y="88" textAnchor="middle" fontSize="3.2" fontWeight="700"
        fill={V} fillOpacity="0.75" fontFamily="system-ui, sans-serif">PWR</text>

      {/* ── Decoupling caps — SMD pair in the gap (x:41–45) ── */}
      <rect x="42" y="54" width="3" height="1.8" rx="0.4" stroke={P} strokeWidth="0.35" strokeOpacity="0.38" fill={`${P}06`} />
      <rect x="42" y="57" width="3" height="1.8" rx="0.4" stroke={P} strokeWidth="0.35" strokeOpacity="0.38" fill={`${P}06`} />

      {/* ── PCB traces (L-routes, colour-coded by destination) ── */}
      {/* MCU right → LTE left */}
      <path d="M42 56 H44 V64 H46"
        stroke={T} strokeWidth="0.45" strokeOpacity="0.38" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* MCU left → SEN top */}
      <path d="M18 56 H15 V80"
        stroke={B} strokeWidth="0.45" strokeOpacity="0.38" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* MCU bottom → PWR top */}
      <path d="M29 68 V76 H55 V80"
        stroke={V} strokeWidth="0.45" strokeOpacity="0.38" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* ── Via dots at trace junctions ── */}
      {([[44,56],[44,64],[15,56],[15,80],[29,76],[55,76]] as [number,number][]).map(([cx,cy]) => (
        <circle key={`via${cx}${cy}`} cx={cx} cy={cy} r="0.9"
          stroke={P} strokeWidth="0.35" fill={`${P}18`} />
      ))}

      {/* ── Bottom connector header  y:101–108 (inside board) ── */}
      {[18,24,30,36,42,48,54,60,66,72].map((x, i) => (
        <g key={`cp${x}`}>
          <rect x={x-1.4} y={101} width="2.8" height="3.5" rx="0.4"
            stroke={i % 2 === 0 ? P : "rgba(255,255,255,0.18)"}
            strokeWidth="0.35" fill={i % 2 === 0 ? `${P}10` : "rgba(255,255,255,0.03)"} />
          <line x1={x} y1="104.5" x2={x} y2="108"
            stroke={i % 2 === 0 ? P : "rgba(255,255,255,0.15)"}
            strokeWidth="0.35" strokeOpacity="0.4" />
        </g>
      ))}

      {/* Pin labels */}
      {([
        { label: "VCC", x: 18, c: P  },
        { label: "GND", x: 30, c: "rgba(255,255,255,0.38)" },
        { label: "DAT", x: 48, c: B  },
        { label: "LTE", x: 60, c: T  },
        { label: "OUT", x: 72, c: V  },
      ] as const).map(s => (
        <text key={s.label} x={s.x} y="114" textAnchor="middle" fontSize="2.2"
          fill={s.c} fontFamily="system-ui, sans-serif">{s.label}</text>
      ))}

      {/* LTE signal arcs — RF out from board right edge at y=64 */}
      <circle cx="77" cy="64" r="1.1" fill={T} filter="url(#plat-glow-sm)" />
      <path d="M80 60 A 5 5 0 0 1 80 68"   stroke={T} strokeWidth="0.45" strokeLinecap="round" />
      <path d="M83 57 A 8 8 0 0 1 83 71"   stroke={T} strokeWidth="0.38" strokeLinecap="round" strokeOpacity="0.48" />
      <path d="M86 54 A 11 11 0 0 1 86 74" stroke={T} strokeWidth="0.3"  strokeLinecap="round" strokeOpacity="0.25" />

      {/* Animated data particle — LTE out to arrow */}
      <circle r="1" fill={T} opacity="0">
        <animate attributeName="cx" values="77;100;77" dur="3.4s" repeatCount="indefinite" />
        <animate attributeName="cy" values="64;64;64" dur="3.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.1;0.85;1" dur="3.4s" repeatCount="indefinite" />
      </circle>

      {/* ── INTER-COLUMN ARROW 1: ACQUIRE → ANALYZE ─────────────── */}
      <line x1="89" y1="64" x2="100" y2="64"
        stroke={P} strokeWidth="0.6" strokeOpacity="0.4" strokeDasharray="2 1.5" />
      <path d="M99 61.5 L102 64 L99 66.5"
        stroke={P} strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="94.5" y="60.5" textAnchor="middle" fontSize="2.2"
        fill="rgba(255,255,255,0.32)" fontFamily="system-ui">LTE/LTE-M</text>

      {/* ══════════════════════════════════════════════════════════════
          COLUMN 2 — ANALYZE  (Merlin AI concentric rings)
      ══════════════════════════════════════════════════════════════ */}

      {/* Concentric orbital rings — center (140, 76) */}
      <circle cx="140" cy="76" r="46" stroke={B} strokeWidth="0.4" strokeOpacity="0.12" />
      <circle cx="140" cy="76" r="36" stroke={B} strokeWidth="0.5" strokeOpacity="0.18" />
      <circle cx="140" cy="76" r="25" stroke={B} strokeWidth="0.7" strokeOpacity="0.28" />
      <circle cx="140" cy="76" r="14" stroke={P} strokeWidth="1"   strokeOpacity="0.45" fill={`${P}05`} />

      {/* Core hub */}
      <circle cx="140" cy="76" r="6"  stroke={P} strokeWidth="1.3" fill={`${P}15`} filter="url(#plat-glow)" />
      <circle cx="140" cy="76" r="2.8" fill={P} opacity="0.95" />

      {/* Pulse ring animation */}
      <circle cx="140" cy="76" r="6" stroke={P} strokeWidth="0.4" opacity="0.3">
        <animate attributeName="r"       values="6;16;6"        dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3"     dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Merlin AI label */}
      <text x="140" y="88" textAnchor="middle" fontSize="3.2" fontWeight="600"
        fill={P} fillOpacity="0.9" fontFamily="system-ui">Merlin AI</text>

      {/* Outer-ring orbiting nodes (on r=36) */}
      {[
        { cx: 140,    cy: 40,  label: "Sensor Data", ldy:  -3.5, ldx:  0    },
        { cx: 176,    cy: 76,  label: "Rules",       ldy:   0,   ldx:  4.5  },
        { cx: 140,    cy: 112, label: "Triggers",    ldy:   4.5, ldx:  0    },
        { cx: 104,    cy: 76,  label: "Models",      ldy:   0,   ldx: -4.5  },
      ].map(n => (
        <g key={n.label} filter="url(#plat-glow-sm)">
          <circle cx={n.cx} cy={n.cy} r="3" stroke={B} strokeWidth="0.8" fill={`${B}12`} />
          <circle cx={n.cx} cy={n.cy} r="1.2" fill={B} opacity="0.8" />
          <text x={n.cx + (n.ldx > 0 ? 5.5 : n.ldx < 0 ? -5.5 : 0)}
                y={n.cy + (n.ldy > 0 ? 5 : n.ldy < 0 ? -4.5 : 0.8)}
                textAnchor={n.ldx > 0 ? "start" : n.ldx < 0 ? "end" : "middle"}
                fontSize="2.3" fill={B} fillOpacity="0.6" fontFamily="system-ui">
            {n.label}
          </text>
        </g>
      ))}

      {/* Mid-ring nodes (on r=25, diagonal) */}
      {[
        { cx: 158, cy: 58, c: T },
        { cx: 158, cy: 94, c: T },
        { cx: 122, cy: 58, c: T },
        { cx: 122, cy: 94, c: T },
      ].map((n, i) => (
        <circle key={`mr${i}`} cx={n.cx} cy={n.cy} r="1.8"
          stroke={n.c} strokeWidth="0.7" fill={`${n.c}12`} />
      ))}

      {/* Animated particles orbiting */}
      <circle r="1.1" fill={B} opacity="0">
        <animateMotion dur="6s" repeatCount="indefinite"
          path="M 140 40 A 36 36 0 1 1 139.9 40" />
        <animate attributeName="opacity" values="0;0.8;0.8;0" keyTimes="0;0.05;0.9;1" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle r="1.1" fill={T} opacity="0">
        <animateMotion dur="9s" repeatCount="indefinite"
          path="M 140 51 A 25 25 0 1 0 139.9 51" />
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.05;0.9;1" dur="9s" repeatCount="indefinite" />
      </circle>

      {/* ── INTER-COLUMN ARROW 2: ANALYZE → ACT ─────────────────── */}
      <line x1="180" y1="66" x2="194" y2="66"
        stroke={P} strokeWidth="0.9" strokeOpacity="0.45" strokeDasharray="2 1.5" />
      <path d="M193 63.5 L196 66 L193 68.5"
        stroke={P} strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />

      {/* Animated particle — analyze to act */}
      <circle r="1.1" fill={P} opacity="0">
        <animate attributeName="cx" values="180;196;180" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="cy" values="66;66;66"    dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.1;0.85;1" dur="2.8s" repeatCount="indefinite" />
      </circle>

      {/* ══════════════════════════════════════════════════════════════
          COLUMN 3 — ACT  (output boxes)
      ══════════════════════════════════════════════════════════════ */}

      {([
        { label: "Operations", sub: "Automations · Workflows",  c: P,  y: 28  },
        { label: "API",        sub: "REST · Python SDK",        c: B,  y: 63  },
        { label: "Apps",       sub: "Digital Twin · Reports",   c: V,  y: 98  },
      ] as const).map(box => (
        <g key={box.label} filter="url(#plat-glow-sm)">
          <rect x="198" y={box.y} width="68" height="26" rx="3"
            stroke={box.c} strokeWidth="1" fill={`${box.c}08`} />
          {/* Left connector dot */}
          <circle cx="198" cy={box.y + 13} r="2" fill={box.c} opacity="0.7" />
          <text x="232" y={box.y + 11} textAnchor="middle" fontSize="4.2" fontWeight="700"
            fill={box.c} fontFamily="system-ui">{box.label}</text>
          <text x="232" y={box.y + 19} textAnchor="middle" fontSize="2.3"
            fill="rgba(255,255,255,0.3)" fontFamily="system-ui">{box.sub}</text>
        </g>
      ))}

      {/* AI Agent vertical badge */}
      <line x1="271" y1="26" x2="271" y2="126" stroke={P} strokeWidth="0.7" strokeOpacity="0.25" />
      <text x="278" y="76" textAnchor="middle" fontSize="2.9" fontWeight="600"
        fill={P} fillOpacity="0.5" fontFamily="system-ui"
        transform="rotate(90, 278, 76)">AI AGENT</text>

      {/* ── BOTTOM STRIP ──────────────────────────────────────────── */}
      <line x1="6" y1="147" x2="274" y2="147" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
      {[
        { label: "HARDWARE", cx: 48  },
        { label: "CLOUD",    cx: 140 },
        { label: "SOFTWARE", cx: 234 },
      ].map(b => (
        <text key={b.label} x={b.cx} y="155" textAnchor="middle" fontSize="3.2" fontWeight="600"
          fill={P} fillOpacity="0.4" fontFamily="system-ui">{b.label}</text>
      ))}

      <text x="140" y="165" textAnchor="middle" fontSize="2.4"
        fill="rgba(255,255,255,0.18)" fontFamily="system-ui">
        Wireless · LTE · Battery-powered · Real-time · Easy Maintenance
      </text>
    </svg>
  );
}
