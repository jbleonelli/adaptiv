import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Solutions — Merlin Works in Every Building. Every Operation.",
  description: "From smart offices and building management to industrial manufacturing and energy infrastructure — Merlin brings Physical AI to the real world.",
};

const personas = [
  {
    role: "Building Owner",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="14" width="24" height="20" rx="1.5" stroke="#FF00B2" strokeWidth="1.5"/>
        <path d="M4 14L20 4l16 10" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="16" y="24" width="8" height="10" rx="1" stroke="#FF00B2" strokeWidth="1.3"/>
        <line x1="12" y1="19" x2="12" y2="22" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="20" y1="19" x2="20" y2="22" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="28" y1="19" x2="28" y2="22" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    color: "#FF00B2",
    pain: "30\u201340% of booked meeting rooms go unused. Energy runs on fixed schedules, not actual occupancy. Cleaning crews follow routes whether a space was used or not. You have no visibility into how your assets are actually performing \u2014 just cost lines going up.",
    value: "Merlin turns your buildings into self-optimising assets. Recovering just 20% of ghost-booked rooms in a 200-person office with 30 rooms is equivalent to adding 6 rooms \u2014 saving $150K\u2013$250K in avoided lease expansion. Energy savings of 10\u201330% on lighting and HVAC. Cleaning labor costs cut 40\u201355% through demand-driven dispatch. Every gain is measurable and provable to tenants.",
    benefits: ["$150K\u2013$250K saved in avoided lease expansion", "10\u201330% energy cost reduction", "40\u201355% cleaning labor savings", "Predictive maintenance \u2014 issues flagged before failure"],
  },
  {
    role: "Facility Manager",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="13" stroke="#14b8a6" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="4" stroke="#14b8a6" strokeWidth="1.5"/>
        <line x1="20" y1="7" x2="20" y2="12" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="28" x2="20" y2="33" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7" y1="20" x2="12" y2="20" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="28" y1="20" x2="33" y2="20" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="26" y1="26" x2="29.5" y2="29.5" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="29.5" y1="10.5" x2="26" y2="14" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="14" y1="26" x2="10.5" y2="29.5" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    color: "#14b8a6",
    pain: "Your day is a constant stream of reactive requests \u2014 stockout complaints from bathrooms, ghost-booked meeting rooms no one released, HVAC running full blast in empty floors. 30\u201340% of rooms sit vacant after booking. Cleaning follows fixed schedules, not actual demand.",
    value: "Merlin replaces fixed schedules with demand-driven operations. VOC levels, visit counts, feedback trends, and dispenser levels drive cleaning dispatch \u2014 cutting labor costs 40\u201355% while improving occupant satisfaction 15\u201320%. Ghost bookings are detected within minutes and rooms released automatically. CO\u2082-flat rooms with lights on are flagged as energy waste in real time.",
    benefits: ["Near-elimination of stockout complaints", "Ghost bookings detected and released in minutes", "Room-level energy waste detection", "Automated compliance and service proof"],
  },
  {
    role: "Factory Manager",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="20" width="28" height="14" rx="1.5" stroke="#6366f1" strokeWidth="1.5"/>
        <path d="M6 20l7-10h4l-4 10" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M17 20l7-10h4l-4 10" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M28 20l6-10v10" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="11" y="25" width="5" height="9" rx="0.5" stroke="#6366f1" strokeWidth="1.2"/>
        <rect x="24" y="25" width="5" height="9" rx="0.5" stroke="#6366f1" strokeWidth="1.2"/>
        <circle cx="20" cy="27" r="2" stroke="#6366f1" strokeWidth="1.2"/>
      </svg>
    ),
    color: "#6366f1",
    pain: "Unplanned downtime destroys your throughput targets. You find out about equipment failures when lines stop, not before. Quality deviations are caught too late. Your operators react — they can't anticipate.",
    value: "Merlin monitors your machines continuously, not periodically. Vibration patterns, thermal signatures, and cycle anomalies are detected before failure. Smart Displays on the floor give operators real-time KPIs and Merlin-driven alerts — so your team acts before the line stops.",
    benefits: ["Fewer unplanned stoppages", "Condition-based maintenance", "Automated quality checks", "OEE visibility in real time"],
  },
  {
    role: "Sustainability Officer",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 32C20 32 8 25 8 16a12 12 0 0 1 24 0c0 9-12 16-12 16z" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M20 16v8M16 20l4-4 4 4" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 14c1.5-3 4-5 6-6" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    color: "#22c55e",
    pain: "ESG reporting is manual and retrospective. Your BMS operates at the mechanical level \u2014 you can't see room-level waste. An empty room with lights on and HVAC running but CO\u2082 flat? Your current systems can't even detect that.",
    value: "Merlin delivers 10\u201330% energy savings by detecting room-level waste that traditional BMS misses entirely. CO\u2082 and occupancy data identify empty rooms still consuming energy. Automated reports align with BREEAM, LEED, and regulatory frameworks. When you reduce consumption, you can show exactly where, when, and by how much.",
    benefits: ["10\u201330% energy savings on lighting and HVAC", "Room-level waste detection vs mechanical-level BMS", "Automated BREEAM / LEED evidence", "CO\u2082-flat empty rooms flagged automatically"],
  },
  {
    role: "Head of Security",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 6l12 5v10c0 7-5.5 12.5-12 14C13.5 33.5 8 28 8 21V11l12-5z" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M15 20l3.5 3.5 6.5-6" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#f59e0b",
    pain: "Your access control, cameras, and alarm systems are disconnected. Patrol logs are paper-based and unverifiable. A lighting failure in a stairwell or parking garage goes unnoticed until someone reports it. Unusual activity at 2 AM in a hotel corridor? No one knows until morning.",
    value: "Merlin provides NFC badge-verified patrol logs with timestamped proof of presence. Lux sensors detect lighting failures in stairwells and parking areas automatically. Accelerometers detect tamper and vandalism events. Noise sensors flag unusual activity patterns \u2014 like a hotel corridor at 2 AM \u2014 and escalate in real time.",
    benefits: ["NFC badge-verified patrol logs", "Lux sensors detect lighting failures automatically", "Accelerometer tamper/vandalism detection", "Noise-based anomaly alerts (e.g. 2 AM corridor activity)"],
  },
  {
    role: "IT & OT Manager",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="10" width="24" height="16" rx="2" stroke="#a855f7" strokeWidth="1.5"/>
        <line x1="8" y1="22" x2="32" y2="22" stroke="#a855f7" strokeWidth="1.2"/>
        <circle cx="12" cy="26" r="1" stroke="#a855f7" strokeWidth="1.2"/>
        <circle cx="20" cy="26" r="1" stroke="#a855f7" strokeWidth="1.2"/>
        <circle cx="28" cy="26" r="1" stroke="#a855f7" strokeWidth="1.2"/>
        <path d="M14 30h12M20 26v4" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="15" cy="16" r="2" stroke="#a855f7" strokeWidth="1.2"/>
        <path d="M19 14h6M19 17h4" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    color: "#a855f7",
    pain: "You manage a patchwork of legacy systems, proprietary protocols, and vendor lock-in. Adding AI means adding another integration project. Security is a concern every time a new IoT device touches your network.",
    value: "Adaptiv devices are built with security from the silicon up. Merlin integrates with your existing SCADA, BMS, ERP, and CMMS systems via secure APIs. No protocol patchwork — one platform that talks to everything, with enterprise-grade security and on-premise deployment options.",
    benefits: ["Secure by design — chip to cloud", "Open API & SCADA / BMS integration", "On-premise deployment available", "Single platform, no protocol sprawl"],
  },
];

const solutions = [
  {
    id: "building",
    badge: "BUILDING INTELLIGENCE",
    title: "The Intelligent Building That Runs Itself",
    challenge: "Buildings are full of systems \u2014 HVAC, lighting, security, cleaning, access control, meeting rooms \u2014 that operate in silos and respond to schedules rather than reality. 30\u201340% of booked meeting rooms go unused. Cleaning crews follow fixed routes whether a bathroom was visited 5 times or 500. Empty rooms run lights and HVAC while CO\u2082 stays flat. Facilities teams spend their days reacting to problems that should never have happened.",
    solution: "Merlin + Smart Displays + Sensors create a building that senses, thinks, and responds in real time. CO\u2082 and noise provide definitive occupancy detection without cameras. VOC levels, visit counts, and dispenser levels drive cleaning dispatch automatically. Ghost bookings are detected within minutes and rooms released. Energy waste is flagged at the room level, not the mechanical level. The result: 40\u201355% cleaning labor reduction, 10\u201330% energy savings, and 15\u201320% occupant satisfaction improvement.",
    capabilities: [
      "Offices: CO\u2082 and noise-based occupancy detection (no cameras), demand-driven HVAC and lighting, 10\u201330% energy savings",
      "Meeting rooms: Ghost booking detection within minutes, automatic room release \u2014 recovering 20% of rooms in a 200-person office = 6 added rooms, $150K\u2013$250K saved in avoided lease expansion",
      "Bathrooms: VOC, visit count, and dispenser-level-driven cleaning dispatch \u2014 40\u201355% labor cost reduction, near-elimination of stockout complaints",
      "Corridors and access: NFC badge-verified patrol logs, lux sensors detect lighting failures, accelerometer tamper detection, noise-based anomaly alerts",
      "Building-wide: Room-level energy waste detection (CO\u2082-flat room with lights on = flagged), predictive maintenance, automated BREEAM/LEED reporting",
    ],
    outcomes: ["40\u201355% cleaning labor cost reduction", "10\u201330% energy savings on lighting and HVAC", "15\u201320% occupant satisfaction improvement", "$150K\u2013$250K saved in avoided lease expansion", "Near-elimination of stockout complaints"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Building body */}
        <rect x="8" y="18" width="32" height="26" rx="2" stroke="#FF00B2" strokeWidth="1.5"/>
        {/* Roof */}
        <path d="M4 18L24 5l20 13" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Door */}
        <rect x="20" y="32" width="8" height="12" rx="1" stroke="#FF00B2" strokeWidth="1.3"/>
        {/* Windows */}
        <rect x="12" y="23" width="6" height="5" rx="0.8" stroke="#FF00B2" strokeWidth="1.2"/>
        <rect x="30" y="23" width="6" height="5" rx="0.8" stroke="#FF00B2" strokeWidth="1.2"/>
        {/* Wireless signal arcs */}
        <path d="M37 12a6 6 0 0 1 0 8" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" opacity="0.7"/>
        <path d="M39.5 9.5a10 10 0 0 1 0 13" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.4"/>
        <circle cx="35.5" cy="16" r="1.2" fill="#FF00B2"/>
      </svg>
    ),
    color: "#FF00B2",
  },
  {
    id: "manufacturing",
    badge: "MANUFACTURING",
    title: "Keep Your Lines Running. Automatically.",
    challenge: "Unplanned downtime costs manufacturers millions per hour. Manual quality inspection is slow, inconsistent, and expensive. Production data sits in silos — visible only to operators who have to act on it.",
    solution: "Adaptiv vibration and temperature sensors monitor critical machinery. Industrial cameras inspect production quality in real time. Smart Displays on the factory floor give operators live production KPIs and Merlin agent status. Merlin agents detect anomalies, trigger maintenance workflows, halt lines when quality deviates, and optimise scheduling automatically.",
    capabilities: [
      "Predictive maintenance — detect bearing wear, thermal anomalies, and vibration patterns before failure",
      "Real-time quality assurance — cameras and sensors enforce quality standards automatically",
      "OEE optimisation — continuous visibility into availability, performance, and quality metrics",
      "Production scheduling — Merlin adjusts plans based on real-time asset status",
      "Compliance logging — automated production records for quality certifications",
    ],
    outcomes: ["Reduced unplanned downtime", "Lower maintenance costs", "Improved quality yield", "Automated compliance documentation"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Large gear */}
        <circle cx="20" cy="26" r="9" stroke="#14b8a6" strokeWidth="1.5"/>
        <circle cx="20" cy="26" r="3.5" stroke="#14b8a6" strokeWidth="1.3"/>
        {/* Gear teeth */}
        <rect x="18.5" y="14" width="3" height="4" rx="0.8" fill="none" stroke="#14b8a6" strokeWidth="1.2"/>
        <rect x="18.5" y="34" width="3" height="4" rx="0.8" fill="none" stroke="#14b8a6" strokeWidth="1.2"/>
        <rect x="8" y="24.5" width="4" height="3" rx="0.8" fill="none" stroke="#14b8a6" strokeWidth="1.2"/>
        <rect x="28" y="24.5" width="4" height="3" rx="0.8" fill="none" stroke="#14b8a6" strokeWidth="1.2"/>
        <rect x="10.5" y="17" width="3.5" height="3.5" rx="0.8" transform="rotate(-45 10.5 17)" fill="none" stroke="#14b8a6" strokeWidth="1.1"/>
        <rect x="26.5" y="33" width="3.5" height="3.5" rx="0.8" transform="rotate(-45 26.5 33)" fill="none" stroke="#14b8a6" strokeWidth="1.1"/>
        <rect x="26.5" y="17" width="3.5" height="3.5" rx="0.8" transform="rotate(45 26.5 17)" fill="none" stroke="#14b8a6" strokeWidth="1.1"/>
        <rect x="10.5" y="33" width="3.5" height="3.5" rx="0.8" transform="rotate(45 10.5 33)" fill="none" stroke="#14b8a6" strokeWidth="1.1"/>
        {/* Small gear */}
        <circle cx="33" cy="15" r="5.5" stroke="#14b8a6" strokeWidth="1.3"/>
        <circle cx="33" cy="15" r="2" stroke="#14b8a6" strokeWidth="1.1"/>
        <rect x="31.8" y="8" width="2.4" height="3" rx="0.5" fill="none" stroke="#14b8a6" strokeWidth="1"/>
        <rect x="31.8" y="19" width="2.4" height="3" rx="0.5" fill="none" stroke="#14b8a6" strokeWidth="1"/>
        <rect x="26.5" y="13.8" width="3" height="2.4" rx="0.5" fill="none" stroke="#14b8a6" strokeWidth="1"/>
        <rect x="37" y="13.8" width="3" height="2.4" rx="0.5" fill="none" stroke="#14b8a6" strokeWidth="1"/>
        {/* Pulse signal */}
        <path d="M36 24h2l1.5-4 2 8 1.5-4H45" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#14b8a6",
  },
  {
    id: "energy",
    badge: "ENERGY & UTILITIES",
    title: "Operate Your Grid Smarter. In Real Time.",
    challenge: "Energy infrastructure is monitored by legacy BMS systems that operate at the mechanical level \u2014 they can't see room-level waste. An empty room with lights on and HVAC running but CO\u2082 flat? Traditional systems can't detect that. Maintenance schedules are calendar-based, not condition-based. CO and CO\u2082 levels in enclosed parking garages go unmonitored until incidents occur.",
    solution: "Adaptiv sensors deliver 10\u201330% energy savings by detecting room-level waste that traditional BMS misses entirely. CO\u2082-flat rooms with active lighting and HVAC are flagged automatically. CO and CO\u2082 safety monitoring in enclosed garages prevents dangerous accumulation. Merlin agents monitor conditions, adjust loads, schedule preventive maintenance, and escalate developing issues before they cascade.",
    capabilities: [
      "Room-level waste detection \u2014 CO\u2082-flat room with lights on and HVAC running = waste flagged instantly, vs traditional mechanical-level BMS",
      "10\u201330% energy savings on lighting and HVAC through occupancy-driven optimization",
      "CO and CO\u2082 safety monitoring in enclosed parking garages \u2014 $5K+ avoided per emergency repair incident",
      "Predictive maintenance \u2014 condition-based scheduling replaces calendar-based maintenance",
      "Automated regulatory compliance reporting and BREEAM/LEED documentation",
    ],
    outcomes: ["10\u201330% energy savings on lighting and HVAC", "Room-level waste detection (vs mechanical-level BMS)", "CO/CO\u2082 safety compliance in enclosed garages", "Automated compliance and sustainability reporting"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Pylon tower */}
        <path d="M24 6v36" stroke="#6D28D9" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M14 14h20M12 22h24" stroke="#6D28D9" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M18 14l-6 8M30 14l6 8" stroke="#6D28D9" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Wires */}
        <path d="M12 22 Q6 28 4 26" stroke="#6D28D9" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
        <path d="M36 22 Q42 28 44 26" stroke="#6D28D9" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
        {/* Lightning bolt */}
        <path d="M26 8l-5 9h5l-5 9" stroke="#6D28D9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        {/* Ground nodes */}
        <circle cx="12" cy="22" r="2" stroke="#6D28D9" strokeWidth="1.2"/>
        <circle cx="36" cy="22" r="2" stroke="#6D28D9" strokeWidth="1.2"/>
        <circle cx="24" cy="42" r="2" stroke="#6D28D9" strokeWidth="1.2"/>
      </svg>
    ),
    color: "#6D28D9",
  },
  {
    id: "logistics",
    badge: "LOGISTICS & SUPPLY CHAIN",
    title: "Orchestrate Without Manual Intervention.",
    challenge: "Warehouses and logistics facilities rely on manual processes, periodic counts, and reactive exception handling. Operational visibility is retrospective. Cleaning and maintenance in large structures like parking garages follows fixed schedules regardless of actual usage. Exceptions consume disproportionate management time.",
    solution: "Smart Displays in warehouse zones provide real-time workflow instructions and KPIs to operators. Environmental and occupancy sensors monitor conditions, asset flows, and usage patterns. In parking structures, Merlin delivers ~1.5 FTE savings in cleaning labor per 2,000-space facility ($45K/year) and $5K+ avoided per emergency repair through predictive maintenance. Merlin automates inventory management, exception escalation, and workflow coordination across WMS and ERP systems.",
    capabilities: [
      "Inventory automation \u2014 real-time stock visibility and automatic replenishment triggers via predictive supply management",
      "Workflow orchestration \u2014 Merlin coordinates picking, packing, and dispatch workflows across systems",
      "Exception management \u2014 anomalies escalated automatically, before they compound",
      "Facility maintenance \u2014 demand-driven cleaning dispatch, CO/CO\u2082 safety monitoring in enclosed spaces, $5K+ avoided per emergency repair",
    ],
    outcomes: ["Reduced manual handling errors", "~1.5 FTE cleaning savings per 2,000-space facility", "Improved inventory accuracy through predictive supply management", "CO/CO\u2082 safety compliance in enclosed structures"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Warehouse building */}
        <path d="M4 20l20-12 20 12v22H4V20z" stroke="#FF00B2" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 20h40" stroke="#FF00B2" strokeWidth="1.2" opacity="0.4"/>
        {/* Loading door */}
        <rect x="18" y="30" width="12" height="12" rx="1" stroke="#FF00B2" strokeWidth="1.3"/>
        <line x1="24" y1="30" x2="24" y2="42" stroke="#FF00B2" strokeWidth="1" opacity="0.5"/>
        {/* Flow arrows */}
        <path d="M6 28h7M6 33h7" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M10 26l3 2-3 2" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M35 28h7M35 33h7" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M39 26l3 2-3 2" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Roof ridge */}
        <line x1="24" y1="8" x2="24" y2="20" stroke="#FF00B2" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
    color: "#FF00B2",
  },
  {
    id: "cities",
    badge: "SMART CITIES & INFRASTRUCTURE",
    title: "Protect the Infrastructure Your Communities Depend On.",
    challenge: "Critical infrastructure \u2014 airports, hospitals, parking structures, public spaces \u2014 is monitored intermittently or not at all. Airport cleaning teams are dispatched on fixed schedules, not correlated to actual flight arrivals. Hospital sanitization logs are paper-based and unverifiable. Parking garages lack CO/CO\u2082 monitoring. PRM wheelchairs go missing, wasting staff time searching.",
    solution: "Adaptiv sensors and Merlin agents bring intelligence to every infrastructure type. At airports: flight-correlated pre-positioning of cleaning teams achieves 50\u201370% reduction in SLA breaches and avoids $50K\u2013$200K in annual contract penalties. PRM wheelchair tracking delivered 78% reduction in search time at CDG Airport. In healthcare: verified sanitization logs with environmental sensor confirmation save 80% of documentation time and $140K\u2013$450K per prevented hospital-acquired infection. In parking: ~1.5 FTE savings per 2,000-space structure ($45K/year) with CO/CO\u2082 safety monitoring.",
    capabilities: [
      "Airports \u2014 flight-correlated cleaning team pre-positioning, 50\u201370% reduction in SLA breaches, $50K\u2013$200K avoided in annual contract penalties",
      "Airports \u2014 PRM wheelchair tracking with 78% reduction in search time (proven at CDG Airport)",
      "Healthcare \u2014 verified sanitization logs with environmental sensor confirmation, 80% reduction in documentation time, $140K\u2013$450K saved per prevented HAI",
      "Parking \u2014 ~1.5 FTE cleaning labor savings per 2,000-space structure ($45K/year), $5K+ avoided per emergency repair, CO/CO\u2082 safety monitoring in enclosed garages",
    ],
    outcomes: ["50\u201370% reduction in airport SLA breaches", "78% reduction in PRM wheelchair search time", "$140K\u2013$450K saved per prevented hospital-acquired infection", "~1.5 FTE savings per 2,000-space parking structure"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Skyline buildings */}
        <rect x="4" y="24" width="8" height="18" rx="1" stroke="#14b8a6" strokeWidth="1.3"/>
        <rect x="14" y="18" width="7" height="24" rx="1" stroke="#14b8a6" strokeWidth="1.3"/>
        <rect x="23" y="12" width="9" height="30" rx="1" stroke="#14b8a6" strokeWidth="1.5"/>
        <rect x="34" y="20" width="7" height="22" rx="1" stroke="#14b8a6" strokeWidth="1.3"/>
        {/* Antenna on tallest */}
        <line x1="27.5" y1="12" x2="27.5" y2="7" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="27.5" cy="6" r="1.2" fill="#14b8a6"/>
        {/* Network connection arcs */}
        <path d="M8 22 Q16 14 17.5 18" stroke="#14b8a6" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" strokeDasharray="2 2"/>
        <path d="M37 18 Q34 10 27.5 12" stroke="#14b8a6" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" strokeDasharray="2 2"/>
        {/* Node dots */}
        <circle cx="8" cy="22" r="1.5" stroke="#14b8a6" strokeWidth="1.1"/>
        <circle cx="37" cy="18" r="1.5" stroke="#14b8a6" strokeWidth="1.1"/>
        {/* Ground line */}
        <line x1="3" y1="42" x2="45" y2="42" stroke="#14b8a6" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
    color: "#14b8a6",
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-16">
      {/* 5.1 Hero */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-15" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(26,111,212,0.15) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="container-site relative z-10 text-center max-w-3xl mx-auto">
          <Badge variant="dim" className="mb-6">SOLUTIONS</Badge>
          <h1 className="text-display text-[#111827] mb-5">Merlin Works in Every Building.<br />Every Operation.</h1>
          <p className="text-body-lg text-[#4b5563]">
            From smart offices and building management to industrial manufacturing and energy infrastructure —
            Merlin and Adaptiv devices bring Physical AI to the real-world environments where it matters most.
          </p>
        </div>
      </section>

      {/* ── WHO MERLIN WORKS FOR ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-4">Built for the People Who Run Real Operations</p>
              <h2 className="text-h1 text-[#111827] mb-5">Who Physical AI Is For</h2>
              <p className="text-body-lg text-[#64748b] max-w-2xl mx-auto">
                Merlin is not a dashboard for analysts. It is an AI co-worker for the people responsible for
                buildings, factories, and operations — who need intelligence that acts, not just reports.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {personas.map((p, i) => (
              <Reveal key={p.role} delay={i * 0.06}>
                <div className="group flex flex-col gap-5 p-6 rounded-2xl border border-[rgba(0,0,0,0.07)] bg-white hover:border-[rgba(0,0,0,0.13)] transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}>
                      {p.icon}
                    </div>
                    <h3 className="text-h4 text-[#111827]">{p.role}</h3>
                  </div>

                  {/* Pain point */}
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#64748b] mb-2">The challenge</p>
                    <p className="text-sm text-[#64748b] leading-relaxed">{p.pain}</p>
                  </div>

                  {/* Value prop */}
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: p.color }}>How Merlin helps</p>
                    <p className="text-sm text-[#4b5563] leading-relaxed">{p.value}</p>
                  </div>

                  {/* Benefits */}
                  <ul className="flex flex-col gap-1.5 pt-3 border-t border-[rgba(0,0,0,0.06)]">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs font-medium text-[#4b5563]">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <div className="bg-[#f8f9fb]">
        {solutions.map((sol, idx) => (
          <section key={sol.id} id={sol.id} className={`py-24 ${idx % 2 === 1 ? "bg-white" : "bg-[#f8f9fb]"} border-t border-[rgba(0,0,0,0.07)]`}>
            <div className="container-site">
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${sol.color}10`, border: `1px solid ${sol.color}28` }}>
                    {sol.icon}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border" style={{ background: `${sol.color}12`, color: sol.color, borderColor: `${sol.color}30` }}>{sol.badge}</span>
                </div>
                <h2 className="text-h1 text-[#111827] mb-10">{sol.title}</h2>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <Reveal>
                  <div>
                    <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-3">The Challenge</p>
                    <p className="text-[#4b5563] leading-relaxed">{sol.challenge}</p>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <div>
                    <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-3">The Adaptiv Solution</p>
                    <p className="text-[#4b5563] leading-relaxed">{sol.solution}</p>
                  </div>
                </Reveal>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Reveal delay={0.1}>
                  <div className="p-6 rounded-2xl bg-[#f8f9fb] border border-[rgba(0,0,0,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: sol.color }}>Key capabilities</p>
                    <ul className="flex flex-col gap-2.5">
                      {sol.capabilities.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-[#4b5563]">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8l3.5 3.5 6.5-7" stroke={sol.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="p-6 rounded-2xl border" style={{ background: `${sol.color}06`, borderColor: `${sol.color}20` }}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: sol.color }}>Key outcomes</p>
                    <ul className="flex flex-col gap-2.5">
                      {sol.outcomes.map((o) => (
                        <li key={o} className="flex items-center gap-2 text-sm font-medium text-[#111827]">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: sol.color }} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 5.7 CTA */}
      <section className="py-20 bg-white">
        <div className="container-site text-center">
          <Reveal>
            <h2 className="text-h2 text-[#111827] mb-4">Every environment is different. Merlin adapts.</h2>
            <p className="text-body text-[#4b5563] max-w-lg mx-auto mb-8">
              Tell us about your building or operation and we'll show you exactly how Merlin and Adaptiv devices work in your context.
            </p>
            <Button size="lg" asChild><Link href="/contact">Talk to Our Solutions Team</Link></Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
