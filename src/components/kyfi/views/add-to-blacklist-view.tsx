 "use client";

import { Frame, InfoCard } from "./common";
import { useKyfiCopy } from "../locale-provider";

export function AddToBlacklistView() {
  const c = useKyfiCopy();
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
      <Frame
        eyebrow={c.addBlacklist.workspaceLabel}
        title={c.addBlacklist.title}
        description={c.addBlacklist.description}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {c.addBlacklist.fields.map((label) => (
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
        <button
          type="button"
          className="mt-5 rounded-2xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm"
        >
          {c.addBlacklist.button}
        </button>
      </Frame>

      <Frame eyebrow={c.common.rules} title={c.addBlacklist.rulesTitle}>
        <div className="space-y-3">
          <InfoCard title="Confirmed dues" text={c.addBlacklist.rules[0]} />
          <InfoCard title="Visible warning" text={c.addBlacklist.rules[1]} />
          <InfoCard title="Admin only removal" text={c.addBlacklist.rules[2]} />
          <InfoCard title="No confusion" text={c.addBlacklist.rules[3]} />
        </div>
      </Frame>
    </div>
  );
}
