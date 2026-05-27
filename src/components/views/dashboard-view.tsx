"use client";

import { Badge, StatCard } from "./common";
import { useKyfiCopy } from "../locale-provider";

export function DashboardView() {
  const c = useKyfiCopy();
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Approved dealers" value="1,284" tone="success" />
        <StatCard label="Pending approvals" value="18" tone="warning" />
        <StatCard label="Blacklist lookups" value="1,246" tone="info" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-5 sm:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-700">
              {c.dashboard.workspaceLabel}
            </p>
            <h3 className="mt-3 text-xl font-medium tracking-tight text-slate-900 sm:text-[1.45rem]">
              {c.dashboard.title}
            </h3>
          </div>

          <div className="px-5 py-5 sm:px-6">
            <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] border border-emerald-200 bg-emerald-50/80 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
                {c.dashboard.searchCardTitle}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{c.dashboard.searchCardText}</p>
              <div className="mt-4">
                <Badge label="Search first" tone="success" />
              </div>
            </div>
            <div className="rounded-[24px] border border-amber-200 bg-amber-50/80 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
                {c.dashboard.blacklistCardTitle}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{c.dashboard.blacklistCardText}</p>
              <div className="mt-4">
                <Badge label="Always visible" tone="warning" />
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-5 sm:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-rose-700">
              {c.dashboard.warningTitle}
            </p>
            <h3 className="mt-3 text-xl font-medium tracking-tight text-slate-900 sm:text-[1.45rem]">
              {c.dashboard.warningTitle}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{c.dashboard.warningText}</p>
          </div>

          <div className="px-5 py-5 sm:px-6">
            <div className="rounded-[26px] border border-rose-200 bg-rose-50/80 p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge label={c.dashboard.warningTitle} tone="danger" />
                <span className="text-sm font-semibold text-slate-700">{c.dashboard.warningReady}</span>
              </div>
              <div className="mt-4 rounded-[22px] border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium text-slate-900">{c.dashboard.reasonLabel}</p>
                <p className="mt-1 text-sm text-slate-600">{c.dashboard.reasonText}</p>
              </div>
              <div className="mt-4 rounded-[22px] border border-rose-100 bg-rose-50 p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">
                    Search result
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  BLACKLISTED warnings should stay visible above the status cards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
