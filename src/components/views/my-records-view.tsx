"use client";

import { Badge } from "./common";
import { useKyfiCopy } from "../locale-provider";

export function MyRecordsView() {
  const c = useKyfiCopy();
  return (
    <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
      <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-5 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700">
          {c.records.workspaceLabel}
        </p>
        <h3 className="mt-2 text-xl font-medium tracking-tight text-slate-900">{c.records.title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{c.records.description}</p>
      </div>

      <div className="overflow-x-auto px-5 py-5 sm:px-6">
        <div className="min-w-[640px] overflow-hidden rounded-[26px] border border-slate-200">
          <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {c.records.columns.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>
          {[
            ["Rama Devi", "GREEN", "9", "22 May 2026"],
            ["Suresh Babu", "RED", "7", "20 May 2026"],
            ["Anitha Devi", "YELLOW", "4", "18 May 2026"],
          ].map(([name, status, votes, date]) => (
            <div
              key={name}
              className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700"
            >
              <span className="font-medium text-slate-900">{name}</span>
              <span>
                <Badge
                  label={status}
                  tone={status === "GREEN" ? "success" : status === "RED" ? "danger" : "warning"}
                />
              </span>
              <span className="font-semibold text-slate-900">{votes}</span>
              <span>{date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
