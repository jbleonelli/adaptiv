import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import { devicesDefaults, type DevicesPageData } from "@/lib/content/devices";
import { imageSrc, imageAlt } from "@/sanity/imageSrc";

const devicesPageQuery = groq`*[_type == "devicesPage"][0]`;

async function getData(): Promise<DevicesPageData> {
  const remote = await sanityFetch<DevicesPageData>({
    query: devicesPageQuery,
    tags: ["devicesPage"],
  });
  return remote ?? devicesDefaults;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return { title: data.metaTitle, description: data.metaDescription };
}

// Embedded ultra-section sensor icons (decorative — kept in code, keyed by label)
const ULTRA_ICONS: Record<string, React.ReactElement> = {
  Temperature: (
    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
      <rect x="12" y="4" width="8" height="16" rx="4" stroke="#a855f7" strokeWidth="1.3" />
      <circle cx="16" cy="23" r="4" stroke="#a855f7" strokeWidth="1.3" />
      <circle cx="16" cy="23" r="2" fill="#a855f7" opacity="0.4" />
      <line x1="16" y1="21" x2="16" y2="14" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Humidity: (
    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
      <path d="M16 5 Q22 14 22 19 A6 6 0 0 1 10 19 Q10 14 16 5Z" stroke="#a855f7" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M13 21 Q15 18 16 19" stroke="#a855f7" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  "Air Quality": (
    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
      <circle cx="16" cy="16" r="5" stroke="#a855f7" strokeWidth="1.3" />
      <circle cx="8" cy="16" r="3" stroke="#a855f7" strokeWidth="1.1" opacity="0.55" />
      <circle cx="24" cy="16" r="3" stroke="#a855f7" strokeWidth="1.1" opacity="0.55" />
      <circle cx="16" cy="8" r="2.5" stroke="#a855f7" strokeWidth="1" opacity="0.4" />
      <circle cx="16" cy="24" r="2.5" stroke="#a855f7" strokeWidth="1" opacity="0.4" />
      <circle cx="16" cy="16" r="1.5" fill="#a855f7" />
    </svg>
  ),
  "Odor Detection": (
    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
      <path d="M10 22 Q10 14 16 10 Q22 14 22 22" stroke="#a855f7" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M13 17 Q16 12 19 17" stroke="#a855f7" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
      <path d="M8 26 Q16 22 24 26" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M14 6 Q12 4 14 2" stroke="#a855f7" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M18 7 Q16 4 18 2" stroke="#a855f7" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M22 6 Q20 4 22 2" stroke="#a855f7" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
    </svg>
  ),
  "Noise Level": (
    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
      <rect x="10" y="8" width="7" height="12" rx="3.5" stroke="#a855f7" strokeWidth="1.3" />
      <path d="M8 18 A8 8 0 0 0 24 18" stroke="#a855f7" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="16" y1="26" x2="16" y2="22" stroke="#a855f7" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="12" y1="27" x2="20" y2="27" stroke="#a855f7" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M26 14 A4 4 0 0 1 26 20" stroke="#a855f7" strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
      <path d="M28 11 A8 8 0 0 1 28 23" stroke="#a855f7" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  Gateway: (
    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
      <circle cx="16" cy="16" r="4" stroke="#a855f7" strokeWidth="1.3" />
      <circle cx="16" cy="16" r="1.5" fill="#a855f7" />
      <path d="M8 8 A12 12 0 0 0 8 24" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M24 8 A12 12 0 0 1 24 24" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M11 11 A8 8 0 0 0 11 21" stroke="#a855f7" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
      <path d="M21 11 A8 8 0 0 1 21 21" stroke="#a855f7" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
    </svg>
  ),
};

// Sensor ecosystem catalog — decorative SVG-heavy, kept in code (not Sanity-driven)
const SENSOR_CATALOG = [
  {
    category: "Environment & Air Quality",
    color: "#14b8a6",
    sensors: [
      {
        name: "Temperature & Humidity Node",
        specs: "±0.1°C · ±1.5% RH · 5-year battery",
        use: "Meeting rooms, offices, server rooms, cold-chain monitoring",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <rect x="16" y="6" width="8" height="20" rx="4" stroke="#14b8a6" strokeWidth="1.4" />
            <circle cx="20" cy="29" r="5" stroke="#14b8a6" strokeWidth="1.4" />
            <circle cx="20" cy="29" r="2.5" fill="#14b8a6" opacity="0.5" />
            <line x1="20" y1="26" x2="20" y2="18" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
            <path d="M29 10 Q31 7 33 10 Q33 13 31 13 Q29 13 29 10Z" stroke="#14b8a6" strokeWidth="1.1" opacity="0.6" />
            <path d="M29 17 Q30.5 15 32 17 Q32 19 30.5 19 Q29 19 29 17Z" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
          </svg>
        ),
      },
      {
        name: "Air Quality Node",
        specs: "CO₂ · VOC · PM2.5 · PM10 · TVOC",
        use: "Open plan offices, classrooms, health-critical environments",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <circle cx="20" cy="20" r="6" stroke="#14b8a6" strokeWidth="1.4" />
            <circle cx="10" cy="20" r="3.5" stroke="#14b8a6" strokeWidth="1.2" opacity="0.6" />
            <circle cx="30" cy="20" r="3.5" stroke="#14b8a6" strokeWidth="1.2" opacity="0.6" />
            <circle cx="20" cy="10" r="3" stroke="#14b8a6" strokeWidth="1.1" opacity="0.5" />
            <circle cx="20" cy="30" r="3" stroke="#14b8a6" strokeWidth="1.1" opacity="0.5" />
            <circle cx="7" cy="13" r="1.2" fill="#14b8a6" opacity="0.4" />
            <circle cx="33" cy="13" r="1.2" fill="#14b8a6" opacity="0.4" />
            <circle cx="7" cy="27" r="1" fill="#14b8a6" opacity="0.3" />
            <circle cx="20" cy="20" r="2" fill="#14b8a6" />
          </svg>
        ),
      },
      {
        name: "Luminosity & UV Node",
        specs: "0–100,000 lux · UV index · Colour temperature",
        use: "Circadian lighting control, greenhouse, retail displays",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <circle cx="20" cy="20" r="6" stroke="#14b8a6" strokeWidth="1.4" />
            <circle cx="20" cy="20" r="2.5" fill="#14b8a6" opacity="0.4" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const x1 = 20 + 8 * Math.cos(rad);
              const y1 = 20 + 8 * Math.sin(rad);
              const x2 = 20 + 12 * Math.cos(rad);
              const y2 = 20 + 12 * Math.sin(rad);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round" opacity={i % 2 === 0 ? 0.8 : 0.45} />;
            })}
          </svg>
        ),
      },
    ],
  },
  {
    category: "Occupancy & People",
    color: "#FF00B2",
    sensors: [
      {
        name: "Occupancy & Presence Node",
        specs: "Dual PIR + 60 GHz radar · <1 s response · 4-year battery",
        use: "Desk occupancy, meeting rooms, quiet pods — accurate even for still occupants",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <circle cx="20" cy="13" r="5" stroke="#FF00B2" strokeWidth="1.4" />
            <path d="M10 34 C10 26 30 26 30 34" stroke="#FF00B2" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M28 11 A10 10 0 0 1 28 19" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
            <path d="M31 8 A15 15 0 0 1 31 22" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
          </svg>
        ),
      },
      {
        name: "People Counter",
        specs: "Bi-directional IR beam · ±98% accuracy · Doorframe mount",
        use: "Building entrances, retail, corridors — track flow and density in real time",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <circle cx="14" cy="12" r="4" stroke="#FF00B2" strokeWidth="1.3" />
            <path d="M7 30 C7 23 21 23 21 30" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" />
            <circle cx="26" cy="12" r="4" stroke="#FF00B2" strokeWidth="1.3" opacity="0.55" />
            <path d="M19 30 C19 23 33 23 33 30" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
            <path d="M22 8 L26 5 L30 8" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          </svg>
        ),
      },
      {
        name: "Noise Level Node",
        specs: "30–110 dB · A-weighted · No audio recording",
        use: "Open plan offices, libraries, quiet zones, factories — ambient sound levels only",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <rect x="15" y="7" width="10" height="16" rx="5" stroke="#FF00B2" strokeWidth="1.4" />
            <path d="M10 22 A10 10 0 0 0 30 22" stroke="#FF00B2" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="20" y1="32" x2="20" y2="27" stroke="#FF00B2" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="15" y1="33" x2="25" y2="33" stroke="#FF00B2" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M33 16 A5 5 0 0 1 33 24" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
            <path d="M36 13 A9 9 0 0 1 36 27" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Industrial & Predictive Maintenance",
    color: "#6366f1",
    sensors: [
      {
        name: "Vibration & Temperature Node",
        specs: "3-axis MEMS · 0–10 kHz · ±0.1°C · Magnetic mount",
        use: "Motors, pumps, fans, compressors — detect bearing wear and thermal anomalies before failure",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <polyline points="4,20 8,20 10,11 13,29 16,15 19,25 22,20 36,20" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M14 33 Q20 30 26 33" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
            <line x1="14" y1="33" x2="14" y2="37" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
            <line x1="26" y1="33" x2="26" y2="37" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
          </svg>
        ),
      },
      {
        name: "Energy Monitor",
        specs: "Split-core CT · 1–100 A · ±0.5% accuracy · Real-time kW & kWh",
        use: "Circuit-level energy monitoring on panels, machinery, HVAC units — no electrical work required",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <path d="M23 5 L13 21 H20 L17 35 L27 19 H20 L23 5Z" stroke="#6366f1" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M8 18 A14 14 0 0 0 8 26" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
            <path d="M32 18 A14 14 0 0 1 32 26" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
          </svg>
        ),
      },
      {
        name: "Differential Pressure Node",
        specs: "0–500 Pa · Duct / room mount · HVAC-grade accuracy",
        use: "Filter condition monitoring, clean room pressure, airflow balancing across HVAC systems",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <rect x="5" y="14" width="13" height="12" rx="2" stroke="#6366f1" strokeWidth="1.4" />
            <rect x="22" y="14" width="13" height="12" rx="2" stroke="#6366f1" strokeWidth="1.4" />
            <path d="M18 16 Q20 20 18 24" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M22 16 Q20 20 22 24" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="11.5" y1="10" x2="11.5" y2="14" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
            <line x1="28.5" y1="10" x2="28.5" y2="14" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
            <line x1="11.5" y1="26" x2="11.5" y2="30" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
            <line x1="28.5" y1="26" x2="28.5" y2="30" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Safety & Security",
    color: "#f59e0b",
    sensors: [
      {
        name: "Water Leak Detector",
        specs: "Conductive pad · <1 s detection · Floor or under-sink mount",
        use: "Server rooms, plant rooms, bathrooms, kitchens — instant leak alerts before damage occurs",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <path d="M20 7 Q28 18 28 24 A8 8 0 0 1 12 24 Q12 18 20 7Z" stroke="#f59e0b" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M16 26 Q18 23 20 24" stroke="#f59e0b" strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
            <circle cx="30" cy="12" r="5" stroke="#f59e0b" strokeWidth="1.3" opacity="0.7" />
            <line x1="30" y1="10" x2="30" y2="12.5" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
            <circle cx="30" cy="14.5" r="0.9" fill="#f59e0b" opacity="0.7" />
          </svg>
        ),
      },
      {
        name: "Door & Window Contact",
        specs: "Magnetic reed · <5 ms response · Surface or flush mount",
        use: "Access control, security perimeters, refrigeration units, equipment enclosures",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <rect x="8" y="6" width="14" height="28" rx="1.5" stroke="#f59e0b" strokeWidth="1.4" />
            <path d="M22 8 L32 11 L32 32 L22 34" stroke="#f59e0b" strokeWidth="1.3" strokeLinejoin="round" opacity="0.55" />
            <rect x="10" y="19" width="4" height="6" rx="0.8" stroke="#f59e0b" strokeWidth="1.2" />
            <rect x="24" y="19" width="4" height="6" rx="0.8" stroke="#f59e0b" strokeWidth="1.2" opacity="0.5" />
            <line x1="14" y1="22" x2="24" y2="22" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
          </svg>
        ),
      },
      {
        name: "Panic & Call Button",
        specs: "Single-press · Tamper alert · Wall or wearable mount · 5-year battery",
        use: "Lone worker protection, toilet assist, reception call, emergency escalation to Merlin",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <circle cx="20" cy="20" r="13" stroke="#f59e0b" strokeWidth="1.4" />
            <circle cx="20" cy="20" r="8" stroke="#f59e0b" strokeWidth="1.3" opacity="0.55" />
            <circle cx="20" cy="20" r="4" fill="#f59e0b" opacity="0.25" />
            <line x1="20" y1="16" x2="20" y2="20.5" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="20" cy="23" r="1.1" fill="#f59e0b" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Parking & Vehicle Management",
    color: "#3b82f6",
    sensors: [
      {
        name: "Vehicle Presence Sensor",
        specs: "Ultrasonic + IR · per-space · ceiling or ground mount · 5-year battery",
        use: "Detect occupied vs free parking spaces in real time — surface lots, multi-storey, underground. Feeds live availability to Merlin for guidance display and occupancy reporting.",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <rect x="6" y="20" width="28" height="10" rx="2.5" stroke="#3b82f6" strokeWidth="1.4" />
            <path d="M10 20 L13 13 H27 L30 20" stroke="#3b82f6" strokeWidth="1.4" strokeLinejoin="round" />
            <circle cx="13" cy="30" r="3" stroke="#3b82f6" strokeWidth="1.3" />
            <circle cx="27" cy="30" r="3" stroke="#3b82f6" strokeWidth="1.3" />
            <path d="M20 6 L20 11" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
            <path d="M16 7 L18 11" stroke="#3b82f6" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
            <path d="M24 7 L22 11" stroke="#3b82f6" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
            <circle cx="20" cy="5" r="1.5" fill="#3b82f6" opacity="0.7" />
          </svg>
        ),
      },
      {
        name: "Entry / Exit Vehicle Counter",
        specs: "Bi-directional IR beam · ±99% accuracy · Barrier or lane mount",
        use: "Count vehicles in and out of parking areas to maintain real-time capacity. Triggers Merlin automation: update guidance signs, alert when full, open overflow areas.",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <rect x="5" y="18" width="5" height="5" rx="1" stroke="#3b82f6" strokeWidth="1.3" />
            <line x1="10" y1="20.5" x2="32" y2="20.5" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M16 13 L22 13 M20 10 L23 13 L20 16" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 27 L18 27 M20 24 L17 27 L20 30" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: "CO & Air Quality Monitor",
        specs: "CO · CO₂ · NO₂ · PM2.5 · Ventilation trigger output",
        use: "Mandatory in enclosed and underground car parks. Merlin controls ventilation fans automatically based on real-time CO levels — cuts energy waste and meets air quality regulations.",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <path d="M8 28 Q10 22 14 22 Q18 22 18 18 Q18 14 22 14 Q26 14 26 10" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
            <path d="M14 30 Q15 25 18 25 Q21 25 21 21" stroke="#3b82f6" strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
            <circle cx="32" cy="24" r="6" stroke="#3b82f6" strokeWidth="1.3" />
            <circle cx="32" cy="24" r="2.5" fill="#3b82f6" opacity="0.3" />
            <line x1="32" y1="21" x2="32" y2="23" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="32" cy="25" r="0.9" fill="#3b82f6" />
          </svg>
        ),
      },
      {
        name: "Magnetic Ground Sensor",
        specs: "Magnetic anomaly · In-ground or surface · 7-year battery",
        use: "Ultra-reliable per-space detection for outdoor and rooftop car parks. No moving parts, unaffected by weather, snow, or direct sunlight — detects ferrous metal mass of any vehicle.",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <line x1="4" y1="30" x2="36" y2="30" stroke="#3b82f6" strokeWidth="1.2" opacity="0.35" />
            <ellipse cx="20" cy="30" rx="8" ry="3" stroke="#3b82f6" strokeWidth="1.3" opacity="0.6" />
            <path d="M14 28 A8 8 0 0 1 26 28" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M11 24 A12 12 0 0 1 29 24" stroke="#3b82f6" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
            <path d="M8 20 A16 16 0 0 1 32 20" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
            <circle cx="16" cy="22" r="1.2" fill="#3b82f6" opacity="0.5" />
            <circle cx="24" cy="22" r="1.2" fill="#3b82f6" opacity="0.5" />
          </svg>
        ),
      },
      {
        name: "EV Charging Monitor",
        specs: "Split-core CT · 6–80 A · Session start/stop · Energy (kWh)",
        use: "Track EV charger availability, usage, and energy consumption in real time. Merlin surfaces live charger status on Smart Displays and triggers alerts when sessions complete or faults occur.",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <rect x="14" y="8" width="12" height="16" rx="2" stroke="#3b82f6" strokeWidth="1.4" />
            <line x1="20" y1="24" x2="20" y2="30" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M16 30 Q20 33 24 30" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="17" y1="12" x2="17" y2="16" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="23" y1="12" x2="23" y2="16" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 6 L19 10 H21 L18 14" stroke="#3b82f6" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          </svg>
        ),
      },
      {
        name: "Flood & Water Ingress Sensor",
        specs: "Conductive pad + float · Dual detection · Sump or floor mount",
        use: "Critical for underground and basement car parks. Detects water ingress early — Merlin triggers pump activation, raises alerts, and escalates to emergency services if levels rise.",
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <path d="M4 28 Q8 24 12 28 Q16 32 20 28 Q24 24 28 28 Q32 32 36 28" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M4 22 Q8 18 12 22 Q16 26 20 22 Q24 18 28 22 Q32 26 36 22" stroke="#3b82f6" strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
            <path d="M20 5 L20 14" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
            <path d="M17 12 L20 15 L23 12" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          </svg>
        ),
      },
    ],
  },
];

// Sensor ecosystem callout badge icons (decorative)
const CALLOUT_ICONS: React.ReactElement[] = [
  <svg key="bat" viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><circle cx="10" cy="10" r="8" stroke="#FF00B2" strokeWidth="1.3" /><path d="M10 6v4l3 2" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  <svg key="rad" viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><path d="M10 3 Q7 8 10 10 Q13 12 10 17" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" /><circle cx="10" cy="10" r="1.5" fill="#FF00B2" /></svg>,
  <svg key="lock" viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><rect x="3" y="7" width="14" height="9" rx="1.5" stroke="#FF00B2" strokeWidth="1.3" /><path d="M7 7V5a3 3 0 0 1 6 0v2" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  <svg key="hub" viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><rect x="2" y="5" width="16" height="10" rx="1.5" stroke="#FF00B2" strokeWidth="1.3" /><path d="M6 9h8M6 12h5" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" /></svg>,
  <svg key="net" viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><path d="M3 10 Q10 4 17 10 Q10 16 3 10Z" stroke="#FF00B2" strokeWidth="1.3" /><circle cx="10" cy="10" r="2" fill="#FF00B2" /></svg>,
];

export default async function DevicesPage() {
  const data = await getData();
  const {
    hero,
    advantagesSection,
    manufacturingSection,
    specsSection,
    useCasesBySpaceSection,
    deviceRangeSection,
    ultraSection,
    sensorEcosystemSection,
    finalCta,
  } = data;

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge variant="pink" className="mb-6">{hero.eyebrow}</Badge>
              <h1 className="text-display text-[#111827] mb-6 leading-none">
                {hero.titleLines.map((line, i) => (
                  <span key={i}>{line}{i < hero.titleLines.length - 1 && <br />}</span>
                ))}
              </h1>
              <p className="text-body-lg text-[#4b5563] mb-4 leading-relaxed">{hero.body}</p>
              <p className="text-sm text-[#64748b] mb-10">{hero.subBody}</p>
              <div className="flex flex-wrap gap-4">
                <Link href={hero.primaryCta.href} className="px-8 py-4 rounded-full bg-[#FF00B2] text-white font-semibold hover:bg-[#e000a0] shadow-[0_4px_32px_rgba(255,0,178,0.4)] hover:shadow-[0_8px_40px_rgba(255,0,178,0.55)] transition-all active:scale-[0.98]">
                  {hero.primaryCta.label}
                </Link>
                <a href={hero.secondaryCta.href} className="px-8 py-4 rounded-full border border-[rgba(0,0,0,0.15)] text-[#4b5563] font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.04)] transition-all">
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc(hero.image)}
                alt={imageAlt(hero.image, hero.imageAlt)}
                className="w-full rounded-2xl"
                style={{
                  objectFit: "contain",
                  maxWidth: `${hero.imageMaxWidthPx ?? 512}px`,
                  maxHeight: hero.imageMaxHeightPx
                    ? `${hero.imageMaxHeightPx}px`
                    : undefined,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── FOUR ADVANTAGES ─────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-16">
              <div className="lg:w-1/3">
                <span className="section-number block mb-4">{advantagesSection.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{advantagesSection.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827]">
                  {advantagesSection.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < advantagesSection.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="border-t border-[rgba(0,0,0,0.08)]">
            {advantagesSection.advantages.map((a, i) => (
              <Reveal key={a.num} delay={i * 0.06}>
                <div className="flex items-start gap-8 py-8 border-b border-[rgba(0,0,0,0.06)] hover:bg-[rgba(0,0,0,0.01)] transition-colors px-2 -mx-2 rounded-xl">
                  <span className="text-2xl font-bold tabular-nums mt-0.5 w-12 flex-shrink-0" style={{ color: a.color, opacity: 0.4 }}>{a.num}</span>
                  <div className="flex-1 grid md:grid-cols-2 gap-4">
                    <h3 className="text-h4 text-[#111827]">{a.title}</h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">{a.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── MANUFACTURING VIDEO ─────────────────────────────────────────── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div>
                <span className="section-number block mb-4">{manufacturingSection.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-6">{manufacturingSection.eyebrow}</p>
                <h2 className="text-h2 text-[#111827] mb-6">
                  {manufacturingSection.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < manufacturingSection.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-body text-[#64748b] leading-relaxed mb-6">{manufacturingSection.body}</p>
                <p className="text-sm text-[#64748b] leading-relaxed mb-10">{manufacturingSection.subBody}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href={manufacturingSection.ctaHref} className="px-6 py-3 rounded-full border border-[rgba(0,0,0,0.12)] text-[#4b5563] text-sm font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.25)] transition-all">
                    {manufacturingSection.ctaLabel}
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 0 80px rgba(255,0,178,0.08), 0 2px 40px rgba(0,0,0,0.08)" }}>
                <div className="absolute -top-16 -right-16 w-72 h-72 opacity-10 blur-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, #FF00B2, transparent 70%)" }} aria-hidden="true" />
                <video
                  src={manufacturingSection.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-auto block relative z-10"
                  style={{ aspectRatio: "16/9", objectFit: "cover" }}
                />
                <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none z-20"
                  style={{ background: "linear-gradient(to top, rgba(255,255,255,0.75), transparent)" }}
                  aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── SPECS ────────────────────────────────────────────────────────── */}
      <section id="specs" className="py-32 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <Reveal direction="left">
              <div className="sticky top-28">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 opacity-15 blur-3xl pointer-events-none"
                    style={{ background: "radial-gradient(ellipse, #FF00B2, transparent 70%)" }} aria-hidden="true" />
                  <Image
                    src={imageSrc(specsSection.image, { width: 1024, height: 576 })}
                    alt={imageAlt(specsSection.image, specsSection.imageAlt)}
                    width={1024}
                    height={576}
                    className="w-full object-contain relative z-10"
                  />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to right, rgba(0,0,0,0.04) 0%, transparent 12%, transparent 88%, rgba(0,0,0,0.04) 100%), linear-gradient(to bottom, rgba(0,0,0,0.03) 0%, transparent 10%, transparent 75%, rgba(0,0,0,0.06) 100%)" }}
                    aria-hidden="true" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <span className="section-number block mb-4">{specsSection.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-6">{specsSection.eyebrow}</p>
                <h2 className="text-h2 text-[#111827] mb-8">
                  {specsSection.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < specsSection.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <div className="border-t border-[rgba(0,0,0,0.08)]">
                  {specsSection.specs.map((s) => (
                    <div key={s.label} className="flex justify-between gap-8 py-4 border-b border-[rgba(0,0,0,0.06)]">
                      <span className="text-sm text-[#64748b] flex-shrink-0 w-36">{s.label}</span>
                      <span className="text-sm text-[#1f2937] font-medium text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex gap-4">
                  <Link href={specsSection.primaryCta.href} className="px-6 py-3 rounded-full bg-[#FF00B2] text-white text-sm font-semibold hover:bg-[#e000a0] shadow-[0_4px_24px_rgba(255,0,178,0.3)] transition-all">
                    {specsSection.primaryCta.label}
                  </Link>
                  <Link href={specsSection.secondaryCta.href} className="px-6 py-3 rounded-full border border-[rgba(0,0,0,0.12)] text-[#4b5563] text-sm font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.25)] transition-all">
                    {specsSection.secondaryCta.label}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── USE CASES BY SPACE ──────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-16">
              <div className="lg:w-1/3">
                <span className="section-number block mb-4">{useCasesBySpaceSection.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{useCasesBySpaceSection.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827]">
                  {useCasesBySpaceSection.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < useCasesBySpaceSection.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-px bg-[rgba(0,0,0,0.08)]">
            {useCasesBySpaceSection.spaces.map((uc, i) => (
              <Reveal key={uc.space} delay={i * 0.07}>
                <div className="bg-white p-8 hover:bg-[#f8f9fb] transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: uc.color }} />
                    <h3 className="text-h4 text-[#111827]">{uc.space}</h3>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {uc.cases.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-sm text-[#64748b]">
                        <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 opacity-40" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 3-DEVICE GALLERY ─────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-16">
              <div className="lg:w-1/3">
                <span className="section-number block mb-4">{deviceRangeSection.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{deviceRangeSection.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827]">
                  {deviceRangeSection.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < deviceRangeSection.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-body text-[#64748b] mt-4 max-w-lg leading-relaxed">{deviceRangeSection.body}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {deviceRangeSection.devices.map((device, i) => {
              const scale = i === 0 ? "scale-95" : "scale-100";
              const opacity = i === 0 ? 0.85 : 1;
              return (
                <Reveal key={device.name} delay={i * 0.06}>
                  <Card className="flex flex-col overflow-hidden">
                    <div className="relative overflow-hidden bg-[#f3f4f6]">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 opacity-10 blur-3xl pointer-events-none"
                        style={{ background: device.badgeColor }} aria-hidden="true" />
                      <Image
                        src={imageSrc(device.image, { width: 1024, height: 576 })}
                        alt={imageAlt(device.image, device.imageAlt || device.name)}
                        width={1024}
                        height={576}
                        className={`w-full object-contain relative z-10 ${scale} transition-transform`}
                        style={{ opacity }}
                      />
                      <div className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, transparent 20%, transparent 70%, rgba(0,0,0,0.08) 100%)" }}
                        aria-hidden="true" />
                    </div>
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 border"
                          style={{ color: device.badgeColor, borderColor: `${device.badgeColor}40`, background: `${device.badgeColor}12` }}>
                          {device.badge}
                        </span>
                        <h3 className="text-h4 text-[#111827] mb-2">{device.name}</h3>
                        <p className="text-sm text-[#64748b] leading-relaxed">{device.desc}</p>
                      </div>
                      <ul className="flex flex-col gap-1.5 pt-3 border-t border-[rgba(0,0,0,0.06)] mt-auto">
                        {device.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-xs text-[#4b5563]">
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: device.badgeColor }} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── SMART DISPLAY 26 ULTRA ───────────────────────────────────────── */}
      <section className="py-32 bg-[#f8f9fb] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none opacity-[0.07]"
          style={{ background: "radial-gradient(ellipse, #a855f7, transparent 65%)" }}
          aria-hidden="true" />
        <div className="container-site relative z-10">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-16">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">{ultraSection.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{ultraSection.eyebrow}</p>
              </div>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[rgba(168,85,247,0.3)] bg-[rgba(168,85,247,0.08)] text-[#a855f7] mb-5">
                  {ultraSection.subEyebrow}
                </span>
                <h2 className="text-h2 text-[#111827]">
                  {ultraSection.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < ultraSection.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-body text-[#64748b] mt-5 max-w-xl leading-relaxed">{ultraSection.body}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <p className="text-xs font-semibold text-[#a855f7] uppercase tracking-widest mb-6">{ultraSection.sensorsHeading}</p>
              <div className="grid grid-cols-2 gap-4">
                {ultraSection.sensors.map((s) => (
                  <div key={s.label} className="p-5 rounded-2xl border border-[rgba(168,85,247,0.15)] bg-[rgba(168,85,247,0.04)] flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)" }}>
                        {ULTRA_ICONS[s.label] ?? ULTRA_ICONS.Gateway}
                      </div>
                      <span className="text-sm font-semibold text-[#111827]">{s.label}</span>
                    </div>
                    <p className="text-xs text-[#64748b] font-mono leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-5">{ultraSection.compareHeading}</p>
                  <div className="border-t border-[rgba(0,0,0,0.07)]">
                    {ultraSection.compareRows.map((row) => (
                      <div key={row.feature} className="grid grid-cols-4 gap-2 py-3 border-b border-[rgba(0,0,0,0.05)] items-center">
                        <span className="text-xs text-[#64748b] col-span-1">{row.feature}</span>
                        {[
                          { val: row.classic, label: "Classic", color: "#FF00B2" },
                          { val: row.sd26, label: "26", color: "#14b8a6" },
                          { val: row.ultra, label: "Ultra", color: "#a855f7" },
                        ].map((col) => (
                          <div key={col.label} className="flex flex-col items-center gap-0.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: `${col.color}80` }}>{col.label}</span>
                            <span className="text-sm font-semibold" style={{ color: col.val === "✓" ? col.color : "rgba(0,0,0,0.15)" }}>{col.val}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-[rgba(168,85,247,0.2)] bg-[rgba(168,85,247,0.05)]">
                  <p className="text-xs font-semibold text-[#a855f7] uppercase tracking-widest mb-4">{ultraSection.bestForHeading}</p>
                  <ul className="flex flex-col gap-2.5">
                    {ultraSection.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#4b5563] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── SENSOR ECOSYSTEM ─────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f8f9fb] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          aria-hidden="true" />
        <div className="container-site relative z-10">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-6">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">{sensorEcosystemSection.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{sensorEcosystemSection.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827]">
                  {sensorEcosystemSection.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < sensorEcosystemSection.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-body text-[#64748b] mt-4 max-w-xl leading-relaxed">{sensorEcosystemSection.body}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center gap-6 mb-14 p-5 rounded-2xl border border-[rgba(255,0,178,0.15)] bg-[rgba(255,0,178,0.04)]">
              {sensorEcosystemSection.calloutBadges.map((label, i) => (
                <div key={label} className="flex items-center gap-2.5">
                  {CALLOUT_ICONS[i % CALLOUT_ICONS.length]}
                  <span className="text-sm text-[#4b5563] font-medium">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {SENSOR_CATALOG.map((group, gi) => (
            <div key={group.category} className={gi > 0 ? "mt-12" : ""}>
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: group.color }} />
                  <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: group.color }}>{group.category}</p>
                </div>
              </Reveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.sensors.map((sensor, si) => (
                  <Reveal key={sensor.name} delay={si * 0.06}>
                    <div className="p-6 flex flex-col gap-4 h-full rounded-2xl border border-[rgba(0,0,0,0.07)] bg-white hover:border-[rgba(0,0,0,0.12)] transition-all duration-300">
                      <div className="flex items-start justify-between gap-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${group.color}10`, border: `1px solid ${group.color}25` }}>
                          {sensor.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{ color: group.color, background: `${group.color}12`, border: `1px solid ${group.color}25` }}>
                          3+ yr battery
                        </span>
                      </div>
                      <div>
                        <h3 className="text-h4 text-[#111827] mb-1">{sensor.name}</h3>
                        <p className="text-xs font-mono text-[#64748b]">{sensor.specs}</p>
                      </div>
                      <p className="text-sm text-[#64748b] leading-relaxed flex-1">{sensor.use}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          <Reveal delay={0.1}>
            <div className="mt-14 p-6 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[#f8f9fb] flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[rgba(255,0,178,0.08)] border border-[rgba(255,0,178,0.18)]">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M12 3 L19 7 V12 C19 16.5 16 20 12 21 C8 20 5 16.5 5 12 V7 Z" stroke="#FF00B2" strokeWidth="1.3" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#111827] mb-1">{sensorEcosystemSection.footnoteTitle}</p>
                <p className="text-sm text-[#64748b] leading-relaxed">{sensorEcosystemSection.footnoteBody}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-12"
            style={{ background: "radial-gradient(ellipse, #FF00B2, transparent 65%)" }} />
        </div>
        <div className="container-site relative z-10 text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-h1 text-[#111827] mb-5">
              {finalCta.titleLines.map((line, i) => (
                <span key={i}>{line}{i < finalCta.titleLines.length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="text-body text-[#64748b] mb-12 leading-relaxed">{finalCta.body}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={finalCta.primaryCta.href} className="px-8 py-4 rounded-full bg-[#FF00B2] text-white font-semibold hover:bg-[#e000a0] shadow-[0_4px_32px_rgba(255,0,178,0.35)] transition-all">
                {finalCta.primaryCta.label}
              </Link>
              <Link href={finalCta.secondaryCta.href} className="px-8 py-4 rounded-full border border-[rgba(0,0,0,0.12)] text-[#4b5563] font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.25)] transition-all">
                {finalCta.secondaryCta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
