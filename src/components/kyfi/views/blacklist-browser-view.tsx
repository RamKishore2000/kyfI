 "use client";

import { Frame, InfoCard } from "./common";
import { useKyfiCopy } from "../locale-provider";

export function BlacklistBrowserView() {
  const c = useKyfiCopy();
  return (
    <div className="grid gap-6 xl:grid-cols-[0.65fr_1.35fr]">
      <Frame
        eyebrow={c.blacklist.workspaceLabel}
        title={c.blacklist.title}
        description={c.blacklist.description}
      >
        <div className="space-y-4">
          {[c.blacklist.mandal, c.blacklist.village].map((label) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {label}
              </p>
              <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
                {c.blacklist.select}
              </div>
            </div>
          ))}
        </div>
      </Frame>

      <Frame eyebrow={c.common.confirmedList} title={c.blacklist.confirmedTitle}>
        <div className="space-y-3">
          {[
            ["Rama Devi", "Reason: unpaid credit from last season"],
            ["Suresh Babu", "Reason: repeated default"],
            ["Anitha Devi", "Reason: partial payment not settled"],
          ].map(([name, reason]) => (
            <InfoCard key={name} title={name} text={reason} tone="warning" />
          ))}
        </div>
      </Frame>
    </div>
  );
}
