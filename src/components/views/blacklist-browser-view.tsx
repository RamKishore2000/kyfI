"use client";

import { Badge, FieldPreview, Frame } from "./common";
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
          <FieldPreview label={c.blacklist.mandal} value={c.blacklist.select} />
          <FieldPreview label={c.blacklist.village} value={c.blacklist.select} />
        </div>
      </Frame>

      <Frame eyebrow={c.common.confirmedList} title={c.blacklist.confirmedTitle}>
        <div className="space-y-3">
          {[
            ["Rama Devi", "Reason: unpaid credit from last season"],
            ["Suresh Babu", "Reason: repeated default"],
            ["Anitha Devi", "Reason: partial payment not settled"],
          ].map(([name, reason], index) => (
            <div
              key={name}
              className="rounded-[26px] border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold tracking-tight text-slate-900">{name}</p>
                <Badge label="BLACKLISTED" tone={index === 0 ? "danger" : "warning"} />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{reason}</p>
            </div>
          ))}
        </div>
      </Frame>
    </div>
  );
}
