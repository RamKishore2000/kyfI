"use client";

import { Badge, FieldPreview, StatCard } from "./common";
import { useKyfiCopy } from "../locale-provider";

export function SearchFarmerStatusView() {
  const c = useKyfiCopy();
  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
        <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-5 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-700">
            {c.search.workspaceLabel}
          </p>
          <h3 className="mt-3 text-xl font-medium tracking-tight text-slate-900 sm:text-[1.45rem]">
            {c.search.title}
          </h3>
        </div>

        <div className="px-5 py-5 sm:px-6">
          <div className="space-y-4">
            <FieldPreview label={c.search.primary} value={c.search.enter} />
          <div className="grid gap-4 sm:grid-cols-2">
            <FieldPreview label={c.search.mandal} value={c.search.enter} />
            <FieldPreview label={c.search.village} value={c.search.enter} />
          </div>
          <button
            type="button"
            className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              {c.search.button}
            </button>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
        <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-5 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-700">
            {c.common.searchResult}
          </p>
          <h3 className="mt-3 text-xl font-medium tracking-tight text-slate-900 sm:text-[1.45rem]">
            {c.search.resultTitle}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{c.search.resultLocation}</p>
        </div>

        <div className="px-5 py-5 sm:px-6">
          <div className="rounded-[26px] border border-rose-200 bg-rose-50 p-5 shadow-sm ring-1 ring-rose-100">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge label={c.search.blacklisted} tone="danger" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-700">
                Alert
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">{c.search.warning}</p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              [c.search.aadhaar, "XXXX XXXX 2468"],
              [c.search.mobile, "98XX XX12 44"],
              [c.search.votes, "9 dealers"],
              [c.search.date, "22 May 2026"],
            ].map(([label, value], index) => (
              <StatCard
                key={label}
                label={label}
                value={value}
                tone={index === 0 ? "neutral" : index === 1 ? "info" : index === 2 ? "success" : "warning"}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
