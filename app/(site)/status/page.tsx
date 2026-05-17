import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "System Status — Adaptiv Systems",
  description:
    "Live operational status of Adaptiv Systems platform components and history of past incidents.",
};

export default function StatusPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-white pt-24 lg:pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[360px] pointer-events-none opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 25%, rgba(34,197,94,0.08) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10 max-w-3xl text-center">
          <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-5">
            // SYSTEM STATUS
          </p>

          {/* Status banner */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[rgba(34,197,94,0.25)] bg-[rgba(34,197,94,0.06)] mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]" />
            </span>
            <span className="text-sm font-semibold text-[#15803d]">
              All Systems Operational
            </span>
          </div>

          <h1 className="text-h1 text-[#111827] leading-tight mb-5">
            Everything is running.
          </h1>
          <p className="text-body-lg text-[#4b5563] leading-relaxed">
            Live operational status of the Adaptiv Systems platform — the device fleet,
            the Merlin engine, the agent library, and the dashboards that wrap them.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Component status */}
      <section className="py-16 lg:py-20 bg-[#f8f9fb]">
        <div className="container-site max-w-3xl">
          <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-6">
            Current component status
          </p>
          <div className="border-t border-[rgba(0,0,0,0.07)]">
            {[
              { name: "Merlin AI engine", note: "All agent decisions running on schedule" },
              { name: "Device fleet & telemetry", note: "Sensor uplink across deployments healthy" },
              { name: "Dashboards & Merlin chat", note: "Web app and chat responsive" },
              { name: "Cloud IIoT platform", note: "Ingestion and storage nominal" },
              { name: "API & integrations", note: "Customer APIs and supplier connectors healthy" },
            ].map((component) => (
              <div
                key={component.name}
                className="grid sm:grid-cols-12 gap-3 py-5 border-b border-[rgba(0,0,0,0.06)] items-center"
              >
                <p className="sm:col-span-5 text-sm font-semibold text-[#111827]">
                  {component.name}
                </p>
                <p className="sm:col-span-5 text-xs text-[#64748b] leading-relaxed">
                  {component.note}
                </p>
                <div className="sm:col-span-2 flex sm:justify-end">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(34,197,94,0.25)] bg-[rgba(34,197,94,0.06)] text-[11px] font-semibold text-[#15803d] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                    Operational
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Past incidents */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-site max-w-3xl">
          <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-6">
            Past incidents
          </p>
          <div className="p-6 rounded-2xl border border-[rgba(0,0,0,0.06)] bg-[#f8f9fb] text-sm text-[#4b5563] leading-relaxed">
            No incidents have been reported since the initial publishing of this page
            on 9 February 2024.
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Footer CTA */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="container-site max-w-2xl text-center">
          <p className="text-sm text-[#64748b] mb-5">
            Spotted something unusual that this page doesn&rsquo;t reflect? Let us know
            and we&rsquo;ll investigate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(0,0,0,0.12)] text-[#111827] text-sm font-medium hover:bg-[rgba(255,0,178,0.05)] hover:border-[rgba(255,0,178,0.3)] transition-all"
          >
            Report an issue
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
