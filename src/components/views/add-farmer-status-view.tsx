"use client";

import { FieldPreview, Frame, InfoCard } from "./common";
import { useKyfiCopy } from "../locale-provider";

export function AddFarmerStatusView() {
  const c = useKyfiCopy();
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
      <Frame
        eyebrow={c.status.workspaceLabel}
        title={c.status.title}
        description={`${c.status.description} ${c.status.note}`}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {c.status.fields.map((label) => (
            <FieldPreview
              key={label}
              label={label}
              value="Enter value"
              hint={label === "Aadhaar number" ? "Primary identifier for duplicate checks." : undefined}
            />
          ))}
        </div>
        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
            {c.status.statusLabel}
          </p>
          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {["GREEN", "YELLOW", "RED"].map((status) => (
              <div
                key={status}
                className="rounded-[22px] border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold tracking-tight text-slate-900 shadow-sm"
              >
                {status}
              </div>
            ))}
          </div>
        </div>
      </Frame>

      <Frame eyebrow={c.common.whatThisDoes} title={c.status.rulesTitle}>
        <div className="space-y-3">
          <InfoCard title={c.status.rulesTitle} text={c.status.rules[0]} tone="success" />
          <InfoCard title="Vote support" text={c.status.rules[1]} tone="info" />
          <InfoCard title="Admin control" text={c.status.rules[2]} tone="neutral" />
          <InfoCard title="Blacklist separate" text={c.status.rules[3]} tone="warning" />
        </div>
      </Frame>
    </div>
  );
}
