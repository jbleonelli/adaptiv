export type ComponentStatusLevel = "operational" | "degraded" | "down";

export type ComponentStatus = {
  name: string;
  note: string;
  status: ComponentStatusLevel;
};

export type StatusPageData = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    statusLabel: string;
    /**
     * Visual tone of the banner.
     * `operational` = green (default), `degraded` = amber, `incident` = red.
     */
    statusTone: "operational" | "degraded" | "incident";
    title: string;
    body: string;
  };
  componentSection: {
    heading: string;
    components: ComponentStatus[];
  };
  pastIncidentsSection: {
    heading: string;
    /** Markdown/plain-text — rendered inside a soft callout card. */
    note: string;
  };
  reportCta: {
    body: string;
    label: string;
    href: string;
  };
};

export const statusDefaults: StatusPageData = {
  metaTitle: "System Status — Adaptiv Systems",
  metaDescription:
    "Live operational status of the Adaptiv Systems platform components and history of past incidents.",
  hero: {
    eyebrow: "// SYSTEM STATUS",
    statusLabel: "All Systems Operational",
    statusTone: "operational",
    title: "Everything is running.",
    body: "Live operational status of the Adaptiv Systems platform — the device fleet, the Merlin engine, the agent library, and the dashboards that wrap them.",
  },
  componentSection: {
    heading: "Current component status",
    components: [
      {
        name: "Merlin AI engine",
        note: "All agent decisions running on schedule",
        status: "operational",
      },
      {
        name: "Device fleet & telemetry",
        note: "Sensor uplink across deployments healthy",
        status: "operational",
      },
      {
        name: "Dashboards & Merlin chat",
        note: "Web app and chat responsive",
        status: "operational",
      },
      {
        name: "Cloud IIoT platform",
        note: "Ingestion and storage nominal",
        status: "operational",
      },
      {
        name: "API & integrations",
        note: "Customer APIs and supplier connectors healthy",
        status: "operational",
      },
    ],
  },
  pastIncidentsSection: {
    heading: "Past incidents",
    note: "No incidents have been reported since the initial publishing of this page on 9 February 2024.",
  },
  reportCta: {
    body: "Spotted something unusual that this page doesn't reflect? Let us know and we'll investigate.",
    label: "Report an issue",
    href: "/contact",
  },
};
