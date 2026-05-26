 "use client";

import { useKyfiCopy } from "../locale-provider";

export function MyRecordsView() {
  const c = useKyfiCopy();
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700">
        {c.records.workspaceLabel}
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">{c.records.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{c.records.description}</p>

      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
        <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
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
            <span>{name}</span>
            <span>{status}</span>
            <span>{votes}</span>
            <span>{date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
