"use client";

import { FieldPreview, Frame, InfoCard } from "./common";
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
            <FieldPreview key={label} label={label} value="Enter value" />
          ))}
        </div>
        <button
          type="button"
          className="mt-5 rounded-2xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700"
        >
          {c.addBlacklist.button}
        </button>
      </Frame>

      <Frame eyebrow={c.common.rules} title={c.addBlacklist.rulesTitle}>
        <div className="space-y-3">
          <InfoCard title="Confirmed dues" text={c.addBlacklist.rules[0]} tone="danger" />
          <InfoCard title="Visible warning" text={c.addBlacklist.rules[1]} tone="warning" />
          <InfoCard title="Admin only removal" text={c.addBlacklist.rules[2]} tone="neutral" />
          <InfoCard title="No confusion" text={c.addBlacklist.rules[3]} tone="info" />
        </div>
      </Frame>
    </div>
  );
}
