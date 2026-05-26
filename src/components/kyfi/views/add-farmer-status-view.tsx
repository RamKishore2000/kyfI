 "use client";

import { Frame, InfoCard } from "./common";
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
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {label}
              </p>
              <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
                Enter value
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Status
          </p>
          <div className="mt-2 grid grid-cols-3 gap-3">
            {["GREEN", "YELLOW", "RED"].map((status) => (
              <div
                key={status}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm"
              >
                {status}
              </div>
            ))}
          </div>
        </div>
      </Frame>

      <Frame eyebrow={c.common.whatThisDoes} title={c.status.rulesTitle}>
        <div className="space-y-3">
          <InfoCard title={c.status.rulesTitle} text={c.status.rules[0]} />
          <InfoCard title="Vote support" text={c.status.rules[1]} />
          <InfoCard title="Admin control" text={c.status.rules[2]} />
          <InfoCard title="Blacklist separate" text={c.status.rules[3]} tone="warning" />
        </div>
      </Frame>
    </div>
  );
}
