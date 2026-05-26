 "use client";

import { Frame, InfoCard } from "./common";
import { useKyfiCopy } from "../locale-provider";

export function SearchFarmerStatusView() {
  const c = useKyfiCopy();
  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <Frame
        eyebrow={c.search.workspaceLabel}
        title={c.search.title}
        description={c.search.description}
      >
        <div className="space-y-4">
          {[c.search.primary, c.search.mandal, c.search.village].map((label) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {label}
              </p>
              <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
                {c.search.enter}
              </div>
            </div>
          ))}
          <button
            type="button"
            className="w-full rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm"
          >
            {c.search.button}
          </button>
        </div>
      </Frame>

      <Frame eyebrow={c.common.searchResult} title={c.search.resultTitle} description={c.search.resultLocation}>
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
          <p className="text-sm font-semibold text-rose-700">{c.search.blacklisted}</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">{c.search.warning}</p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            [c.search.aadhaar, "XXXX XXXX 2468"],
            [c.search.mobile, "98XX XX12 44"],
            [c.search.votes, "9 dealers"],
            [c.search.date, "22 May 2026"],
          ].map(([label, value]) => (
            <InfoCard key={label} title={label} text={value} tone="neutral" />
          ))}
        </div>
      </Frame>
    </div>
  );
}
