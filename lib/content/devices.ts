import type { CtaButton, SensorSpec, UseCase } from "./home";

export type DevicesPageData = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    subBody: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
    image: string;
    imageAlt: string;
  };
  advantagesSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    advantages: UseCase[];
  };
  manufacturingSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
    subBody: string;
    ctaLabel: string;
    ctaHref: string;
    videoUrl: string;
  };
  specsSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    image: string;
    imageAlt: string;
    specs: SensorSpec[];
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
  useCasesBySpaceSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    spaces: { space: string; color: string; cases: string[] }[];
  };
  deviceRangeSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
    devices: {
      name: string;
      desc: string;
      badge: string;
      badgeColor: string;
      image: string;
      imageAlt: string;
      highlights: string[];
    }[];
  };
  ultraSection: {
    sectionNumber: string;
    eyebrow: string;
    subEyebrow: string;
    titleLines: string[];
    body: string;
    sensorsHeading: string;
    sensors: { label: string; detail: string }[];
    compareHeading: string;
    compareRows: { feature: string; classic: string; sd26: string; ultra: string }[];
    bestForHeading: string;
    bestFor: string[];
  };
  sensorEcosystemSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
    calloutBadges: string[];
    footnoteTitle: string;
    footnoteBody: string;
  };
  finalCta: {
    titleLines: string[];
    body: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
};

export const devicesDefaults: DevicesPageData = {
  metaTitle: "Smart Display — Adaptiv Devices",
  metaDescription:
    "The Adaptiv Smart Display is how Merlin makes itself visible and accessible. One device. One interface. The entire intelligence of a building.",
  hero: {
    eyebrow: "Adaptiv Smart Display",
    titleLines: ["The Face", "of Merlin."],
    body: "The point where Merlin's invisible intelligence becomes visible and tangible. It shows occupants when their restroom was last cleaned and by whom. It lets them request service with a single tap. It displays the air quality they're breathing. The screen on the wall is the handshake between the building and the people inside it.",
    subBody: "12,000 devices deployed · 6,000+ buildings · LTE built-in · 3-year battery · SOC 2 Type 2 certified",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "View Specs →", href: "#specs" },
    image: "/smart-display-wall.png",
    imageAlt: "Adaptiv Smart Display mounted on wall",
  },
  advantagesSection: {
    sectionNumber: "// 01",
    eyebrow: "Why Smart Display",
    titleLines: ["Designed for", "Real Environments"],
    advantages: [
      { num: "01", title: "Sensor + Gateway + Interface in One", body: "Simultaneously a sensor (7 embedded sensors + NFC badge reader), a gateway (aggregating data from up to 64 BLE peripherals and relaying over LTE), and an interface (showing occupants real-time data and enabling one-tap service requests). No other device in the built environment plays all three roles.", color: "#FF00B2", points: [] },
      { num: "02", title: "Zero-Infrastructure Deployment", body: "No wiring. No Wi-Fi credentials. No firewall rules. No IT coordination. A technician mounts it on a wall, powers it on, and it connects over LTE. Deployment collapses from weeks of cross-departmental coordination to minutes of physical installation. A single field tech can deploy dozens per day.", color: "#14b8a6", points: [] },
      { num: "03", title: "We Manufacture Every Device", body: "Adaptiv designs and builds every Smart Display — the circuit board, sensor selection, firmware, radio stack, encryption layer, and enclosure. Data is signed at the device level with cryptographic keys embedded during manufacturing. No third-party firmware, no unsecured gateways, no unvetted middleware.", color: "#a855f7", points: [] },
      { num: "04", title: "True Portability", body: "Entirely self-contained — battery for power, cellular for connectivity. Move it between rooms, buildings, or cities with zero reconfiguration. When a contract ends, your devices walk out the door. Traditional wired systems leave behind stranded infrastructure.", color: "#3b82f6", points: [] },
    ],
  },
  manufacturingSection: {
    sectionNumber: "// 02",
    eyebrow: "Local Manufacturing",
    titleLines: ["Assembled Where", "You Deploy."],
    body: "Every Smart Display is designed by Adaptiv and assembled locally — in the US for North American customers, in Europe for European customers. Shorter supply chains, faster delivery, and full quality control from board to box.",
    subBody: "We manufacture and assemble in France and Europe. A different approach, using a new method of manufacturing that is responsible, affordable, and built to last.",
    ctaLabel: "About Adaptiv →",
    ctaHref: "/company",
    videoUrl: "https://adaptiv.company/assets/home_why_adaptiv.mp4",
  },
  specsSection: {
    sectionNumber: "// 03",
    eyebrow: "Technical Specifications",
    titleLines: ["Built to Last", "in Any Environment"],
    image: "/brand/smart-display.png",
    imageAlt: "Adaptiv Smart Display — technical specifications",
    specs: [
      { label: "Display", value: "7″ IPS touchscreen, 1024×600" },
      { label: "Connectivity", value: "LTE Cat-M + Wi-Fi 6 + Bluetooth 5.2" },
      { label: "Battery", value: "10,000 mAh · 3-year life" },
      { label: "Sensors built-in", value: "Temperature · Humidity · CO₂ · Light · Motion" },
      { label: "Gateway", value: "Connects up to 64 external sensors via BLE/Zigbee" },
      { label: "Housing", value: "Brushed aluminium, IP52, wall & desk mount" },
      { label: "Processing", value: "ARM Cortex-A72 · 4 GB RAM · Merlin edge runtime" },
      { label: "Operating temp", value: "-10°C to +50°C" },
    ],
    primaryCta: { label: "Request Datasheet", href: "/contact" },
    secondaryCta: { label: "See the Platform →", href: "/platform" },
  },
  useCasesBySpaceSection: {
    sectionNumber: "// 04",
    eyebrow: "Where It Works",
    titleLines: ["Every Space.", "One Device."],
    spaces: [
      { space: "Meeting Rooms & Offices", color: "#FF00B2", cases: ["Real-time room occupancy and booking status", "Air quality monitoring (CO₂, VOC, humidity)", "Auto HVAC adjustment based on occupancy", "Cleaning dispatch trigger", "Noise level monitoring"] },
      { space: "Industrial & Manufacturing", color: "#14b8a6", cases: ["Machine status and uptime monitoring", "Temperature and vibration anomaly alerts", "Shift instructions and quality checklists", "Safety protocol displays", "Predictive maintenance triggers"] },
      { space: "Corridors & Common Areas", color: "#a855f7", cases: ["Wayfinding and facility navigation", "Occupancy flow tracking", "Emergency alerts and evacuation guidance", "Energy zone control", "Visitor welcome and check-in"] },
      { space: "Bathrooms & Amenities", color: "#f59e0b", cases: ["Cleaning schedule and dispatch", "Occupancy-based ventilation", "Consumable monitoring (soap, paper)", "Maintenance request triggers", "Hygiene compliance reporting"] },
    ],
  },
  deviceRangeSection: {
    sectionNumber: "// 05",
    eyebrow: "The Full Range",
    titleLines: ["One Platform.", "Three Form Factors."],
    body: "From the entry-level Classic to the fully sensor-embedded 26 Ultra — every Smart Display runs the full Merlin stack and acts as a gateway for up to 64 external sensors.",
    devices: [
      { name: "Smart Display Classic", desc: "The reliable workhorse. Full Merlin intelligence, LTE built-in, wall or desk mount. Deploy it anywhere to give Merlin eyes, ears, and a presence in any room.", badge: "Available now", badgeColor: "#FF00B2", image: "/brand/smart-display.png", imageAlt: "Smart Display Classic", highlights: ["LTE built-in", "3-year battery", "64-sensor gateway"] },
      { name: "Smart Display 26", desc: "Next-generation hardware platform with a larger display, faster edge processor, and enhanced wireless range. The standard for new enterprise deployments.", badge: "Available now", badgeColor: "#14b8a6", image: "/brand/smart-display.png", imageAlt: "Smart Display 26", highlights: ["Larger display", "Faster edge CPU", "Enhanced BLE/Zigbee range"] },
      { name: "Smart Display 26 Ultra", desc: "Everything in the Smart Display 26 — plus a full suite of embedded environmental sensors. One device that sees, hears, and senses everything in the room.", badge: "Flagship · Available now", badgeColor: "#a855f7", image: "/brand/smart-display.png", imageAlt: "Smart Display 26 Ultra", highlights: ["Temperature & humidity", "Air quality (CO₂ · VOC · PM2.5)", "Odor detection", "Noise level"] },
    ],
  },
  ultraSection: {
    sectionNumber: "// 06",
    eyebrow: "The Sensing Device",
    subEyebrow: "Smart Display 26 Ultra",
    titleLines: ["One Device That", "Senses Everything."],
    body: "The Smart Display 26 Ultra combines everything in the Smart Display 26 with a built-in multi-sensor array — so every room it covers is a fully instrumented environment from day one, with no external sensors required.",
    sensorsHeading: "Embedded Sensor Suite",
    sensors: [
      { label: "Temperature", detail: "±0.1°C accuracy · Range −10 to +60°C" },
      { label: "Humidity", detail: "±1.5% RH · 0–100% range" },
      { label: "Air Quality", detail: "CO₂ · VOC · PM2.5 · PM10" },
      { label: "Odor Detection", detail: "TVOC · Ammonia · Hydrogen sulfide · Ethanol" },
      { label: "Noise Level", detail: "30–110 dB(A) · Ambient monitoring, no recording" },
      { label: "Gateway", detail: "64 external sensors · BLE + Zigbee · LTE uplink" },
    ],
    compareHeading: "How It Compares",
    compareRows: [
      { feature: "Display", classic: "✓", sd26: "✓", ultra: "✓" },
      { feature: "LTE built-in", classic: "✓", sd26: "✓", ultra: "✓" },
      { feature: "3-year battery", classic: "✓", sd26: "✓", ultra: "✓" },
      { feature: "64-sensor gateway", classic: "✓", sd26: "✓", ultra: "✓" },
      { feature: "Merlin edge runtime", classic: "✓", sd26: "✓", ultra: "✓" },
      { feature: "Enhanced display", classic: "—", sd26: "✓", ultra: "✓" },
      { feature: "Faster edge CPU", classic: "—", sd26: "✓", ultra: "✓" },
      { feature: "Temperature & Humidity", classic: "—", sd26: "—", ultra: "✓" },
      { feature: "Air Quality", classic: "—", sd26: "—", ultra: "✓" },
      { feature: "Odor Detection", classic: "—", sd26: "—", ultra: "✓" },
      { feature: "Noise Level", classic: "—", sd26: "—", ultra: "✓" },
    ],
    bestForHeading: "Best for",
    bestFor: [
      "Meeting rooms and offices where air quality directly impacts productivity",
      "Bathrooms, kitchens, and amenity areas — odor and humidity detection without external sensors",
      "Healthcare, education, and hospitality — where ambient environment standards are critical",
      "Any deployment where simplicity matters: one device, full intelligence, zero sensor wiring",
    ],
  },
  sensorEcosystemSection: {
    sectionNumber: "// 07",
    eyebrow: "The Sensor Ecosystem",
    titleLines: ["Every Sensor You Need.", "One Gateway."],
    body: "The Smart Display is not just a display — it is the gateway hub for every Adaptiv sensor in its environment. Sensors connect wirelessly over BLE and Zigbee, route all data through the Smart Display's LTE connection, and are powered by batteries that last 3 years or more. No Wi-Fi. No wiring. No IT infrastructure.",
    calloutBadges: [
      "3+ year battery autonomy",
      "BLE & Zigbee wireless",
      "End-to-end encrypted",
      "Up to 64 sensors per gateway",
      "Zero network infrastructure",
    ],
    footnoteTitle: "All sensors connect through the Smart Display — no separate hub, gateway, or IT infrastructure required.",
    footnoteBody: "Every sensor in the Adaptiv ecosystem connects to the nearest Smart Display over BLE or Zigbee. The Smart Display handles the LTE uplink, edge pre-processing, and data forwarding to Merlin. Sensors are discovered and provisioned automatically via the Merlin platform — no manual pairing or configuration.",
  },
  finalCta: {
    titleLines: ["Ready to deploy", "your first Smart Display?"],
    body: "From a single meeting room to a thousand-device enterprise rollout — we size every deployment around your environment.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Explore the Platform →", href: "/platform" },
  },
};
