 "use client";

import { Frame } from "./common";
import { useKyfiCopy } from "../locale-provider";

export function DashboardView() {
  const c = useKyfiCopy();
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Frame
          eyebrow={c.dashboard.workspaceLabel}
          title={c.dashboard.title}
          description={c.dashboard.description}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[22px] border border-[#d8d1bf] bg-[#f9fbf5] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#71806c]">
                {c.dashboard.searchCardTitle}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5f6558]">{c.dashboard.searchCardText}</p>
            </div>
            <div className="rounded-[22px] border border-[#d8d1bf] bg-[#fff8e8] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8f6c1d]">
                {c.dashboard.blacklistCardTitle}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5f6558]">{c.dashboard.blacklistCardText}</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              {c.common.whatToDoNext}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {c.dashboard.nextText}
            </p>
          </div>
        </Frame>

      <Frame eyebrow={c.dashboard.warningTitle} title={c.dashboard.warningTitle} description={c.dashboard.warningText}>
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">
                {c.dashboard.warningTitle}
              </span>
              <span className="text-sm font-semibold text-slate-700">{c.dashboard.warningReady}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {c.dashboard.warningText}
            </p>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-medium text-slate-900">{c.dashboard.reasonLabel}</p>
              <p className="mt-1 text-sm text-slate-600">{c.dashboard.reasonText}</p>
            </div>
          </div>
        </Frame>
      </div>
    </div>
  );
}
