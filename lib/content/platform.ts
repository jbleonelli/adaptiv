import type { CtaButton } from "./home";

export type PlatformPageData = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
  whatIsSection: {
    eyebrow: string;
    bodyParagraphs: string[];
    equationLabel: string;
  };
  architectureSection: {
    title: string;
    intro: string;
    layers: { label: string; title: string; body: string; color: string }[];
  };
  diagramSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
  };
  ownershipSection: {
    title: string;
    benefits: { title: string; body: string }[];
  };
  securitySection: {
    titleLines: string[];
    items: string[];
  };
  apiSection: {
    titleLines: string[];
    body: string;
    items: string[];
  };
  builtLocalSection: {
    badge: string;
    title: string;
    body: string;
    regions: { title: string; body: string }[];
    closingNote: string;
  };
};

export const platformDefaults: PlatformPageData = {
  metaTitle: "Platform — Physical AI: Intelligence at Every Layer",
  metaDescription: "Adaptiv's platform is the only fully integrated Physical AI stack — designed, built, and owned end to end.",
  hero: {
    eyebrow: "THE ADAPTIV PLATFORM",
    titleLines: ["Physical AI:", "Intelligence at", "Every Layer"],
    body: "Physical AI is what happens when Smart Displays with 7 embedded sensors, wireless sensor constellations, machine vision, radar, smart lighting, and autonomous AI agents converge in the real world. One platform, one AI engine, one data model spanning every device and use case — designed, built, and owned end to end.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "See the Architecture →", href: "#architecture" },
  },
  whatIsSection: {
    eyebrow: "WHAT IS PHYSICAL AI?",
    bodyParagraphs: [
      "Physical AI is intelligence that exists in the real world — not in a cloud dashboard, not on a separate analytics platform, but embedded in the spaces and machines where work actually happens. It sees through air quality, temperature, humidity, lux, and noise sensors. It counts people with radar and machine vision. It acts through devices. It responds in the moment.",
      "Merlin is the AI engine. The Smart Display hub — with its e-ink touchscreen, BLE gateway, and LTE radio — and the constellation of wireless sensors are the body. Every device feeds into the same AI engine through the same secure data pipeline. Together, they make buildings and operations intelligent.",
    ],
    equationLabel: "The Physical AI Equation",
  },
  architectureSection: {
    title: "Three-Layer Architecture",
    intro: "Adaptiv's platform spans three fully integrated layers. Every layer is designed, built, and owned by Adaptiv.",
    layers: [
      {
        label: "Physical AI Layer",
        title: "Merlin — Your Always-On AI Co-Worker",
        body: "Autonomous AI agents that perceive, reason, and act in real time. One AI engine, one data model spanning every device type — Smart Displays, radar, machine vision, smart lighting. Merlin Studio, REST/Python APIs, workflow automation, audit logging.",
        color: "#6D28D9",
      },
      {
        label: "IIoT Software Layer",
        title: "Secure IIoT Software Stack",
        body: "Real-time data pipelines, device management, LTE session orchestration, event streaming, and edge-to-cloud synchronisation. Data signed at device level with cryptographic keys embedded during manufacturing. End-to-end encrypted, SOC 2 Type 2 certified.",
        color: "#FF00B2",
      },
      {
        label: "Physical Device Layer",
        title: "Adaptiv Devices — The Eyes and Ears of Merlin",
        body: "Smart Display hubs with 7 embedded sensors (air quality, temperature, humidity, lux, noise, accelerometer, NFC), e-ink touchscreen, and BLE gateway. Wireless sensor constellation — people counters, dispenser monitors, leak detectors, door/stall sensors, bin level sensors — connected via BLE, no SIM cards or power wiring. Millimeter-wave radar, machine vision, smart lighting. Each device is a fully autonomous LTE node.",
        color: "#14b8a6",
      },
    ],
  },
  diagramSection: {
    sectionNumber: "// 02",
    eyebrow: "Platform Overview",
    titleLines: ["End-to-End", "Platform Architecture"],
    body: "From Smart Display hubs and wireless BLE sensors to millimeter-wave radar, machine vision, smart lighting, and the Merlin AI engine — every component designed, built, and owned by Adaptiv. One platform, one data model, one secure pipeline.",
  },
  ownershipSection: {
    title: "Why Full-Stack Ownership Matters",
    benefits: [
      { title: "No Integration Risk", body: "One company owns every layer. A restroom Smart Display collects VOC from its sensor, aggregates dispenser levels from a BLE sensor, receives a badge tap, and forwards all in a single encrypted LTE burst. No API mismatches, no vendor blame, no fragile integrations." },
      { title: "Faster Time to Value", body: "Devices, software, and AI are pre-integrated. Wireless sensors connect via BLE — no SIM cards, no power wiring. Data never touches the landlord's network, never transits shared Wi-Fi. Merlin starts working the moment the first Smart Display is on the wall." },
      { title: "Continuous Optimisation", body: "Firmware updates that improve Smart Display sensor calibration also improve Merlin data quality. Radar counts vehicles in parking without cameras. Machine vision in nuclear plants processes at the edge. The whole stack moves together." },
      { title: "Complete Network Independence", body: "Each device is a fully autonomous node with its own LTE radio. No single point of failure, no cascading outage risk. One contract, one support team, one product roadmap — complete independence from building infrastructure." },
    ],
  },
  securitySection: {
    titleLines: ["Physical AI,", "Secured End to End"],
    items: [
      "Data signed at device level with cryptographic keys embedded during manufacturing — keys cannot be extracted, copied, or overridden in the field",
      "End-to-end encryption from sensor to cloud: every data point encrypted in transit and at rest, from the Smart Display to the Merlin AI layer",
      "Complete network independence: data never touches the landlord's network, never transits shared Wi-Fi. Each device is a fully autonomous LTE node",
      "No point in the pipeline where third-party firmware could introduce a vulnerability — Adaptiv owns every layer of the stack",
      "SOC 2 Type 2 certified — covers the full data lifecycle from sensor capture to AI processing",
      "No single point of failure, no cascading outage risk: every device operates independently on its own LTE connection",
      "European data centres, GDPR-compliant, EU data residency available",
      "Role-based access control with full activity and agent decision logging, zero-trust device authentication",
    ],
  },
  apiSection: {
    titleLines: ["Build on the", "Physical AI Stack"],
    body: "Full REST and Python APIs for custom integrations and advanced agent logic.",
    items: [
      "Smart Display API: control display content, read sensor gateway data, trigger local agent actions",
      "Merlin REST API: agent management, workflow triggers, decision audit logs, real-time event streams",
      "Python SDK: native library for custom agent logic, building system integrations, and analytics",
      "Webhooks and event streaming: real-time event delivery to BMS, CMMS, ERP, and SCADA systems",
      "Building protocols: BACnet, KNX, Modbus, MQTT, and OPC-UA for integration with existing infrastructure",
      "OpenAPI documentation: interactive, always current",
    ],
  },
  builtLocalSection: {
    badge: "BUILT LOCAL",
    title: "We Build Where You Are",
    body: "Adaptiv is headquartered in the United States. We design every device in-house — and we manufacture locally: in the United States for our North American customers, and in Europe for our European customers. We do not ship hardware across oceans and call it a global business. We build where we sell.",
    regions: [
      { title: "Built in the US — for North America", body: "Adaptiv devices sold in the United States and North America are manufactured domestically. Local supply chain, US compliance standards, American manufacturing quality. For customers in regulated industries and government procurement, domestic manufacturing is not a preference — it is a requirement. We meet it." },
      { title: "Built in Europe — for Europe", body: "Adaptiv devices sold in Europe are manufactured in Europe. EU product regulations, CE marking, GDPR-compliant data infrastructure, and European supply chain traceability. For customers with data sovereignty and supply chain requirements, European manufacturing is the only option. We deliver it." },
    ],
    closingNote: "The devices that run Merlin are embedded in your buildings and operations for years. They should be built to the standards of the country they operate in, supported by teams in your timezone, and sourced from supply chains you can verify. Built Local is not a marketing claim — it is how we think a hardware company should operate.",
  },
};
