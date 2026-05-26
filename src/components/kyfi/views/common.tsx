import type { ReactNode } from "react";

export function InfoCard({
  title,
  text,
  tone = "default",
}: {
  title: string;
  text: string;
  tone?: "default" | "warning" | "success" | "neutral";
}) {
  const styles = {
    default: "border-slate-200 bg-white text-slate-900",
    warning: "border-amber-200 bg-amber-50 text-slate-900",
    success: "border-emerald-200 bg-emerald-50 text-slate-900",
    neutral: "border-slate-200 bg-slate-50 text-slate-900",
  }[tone];

  return (
    <div className={`rounded-2xl border p-4 shadow-sm ${styles}`}>
      <p className="font-medium">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

export function Frame({
  children,
  title,
  eyebrow,
  description,
}: {
  children: ReactNode;
  title: string;
  eyebrow: string;
  description?: string;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700">
        {eyebrow}
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      {description ? <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
