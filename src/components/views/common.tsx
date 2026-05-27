import type { ReactNode } from "react";

const toneClasses = {
  default: {
    shell: "border-slate-200 bg-white",
    eyebrow: "text-slate-500",
    accent: "bg-slate-900",
  },
  warning: {
    shell: "border-amber-200 bg-amber-50/80",
    eyebrow: "text-amber-700",
    accent: "bg-amber-500",
  },
  success: {
    shell: "border-emerald-200 bg-emerald-50/80",
    eyebrow: "text-emerald-700",
    accent: "bg-emerald-500",
  },
  neutral: {
    shell: "border-slate-200 bg-slate-50/80",
    eyebrow: "text-slate-500",
    accent: "bg-slate-400",
  },
  danger: {
    shell: "border-rose-200 bg-rose-50/80",
    eyebrow: "text-rose-700",
    accent: "bg-rose-500",
  },
  info: {
    shell: "border-sky-200 bg-sky-50/80",
    eyebrow: "text-sky-700",
    accent: "bg-sky-500",
  },
} as const;

export function InfoCard({
  title,
  text,
  tone = "default",
}: {
  title: string;
  text: string;
  tone?: "default" | "warning" | "success" | "neutral" | "danger" | "info";
}) {
  const styles = toneClasses[tone];

  return (
    <div className={`rounded-[22px] border p-4 shadow-sm ${styles.shell}`}>
      <div className="flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${styles.accent}`} />
        <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${styles.eyebrow}`}>
          {title}
        </p>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
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
    <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
      <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-5 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-700">
          {eyebrow}
        </p>
        <h3 className="mt-2 text-xl font-medium tracking-tight text-slate-900 sm:text-[1.45rem]">
          {title}
        </h3>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
        ) : null}
      </div>
      <div className="px-5 py-5 sm:px-6">{children}</div>
    </section>
  );
}

export function FieldPreview({
  label,
  value = "Enter value",
  hint,
}: {
  label: string;
  value?: string;
  hint?: string;
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
        {label}
      </p>
      <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-500 shadow-inner shadow-white/70">
        <span className="block truncate">{value}</span>
      </div>
      {hint ? <p className="mt-2 text-xs leading-5 text-slate-500">{hint}</p> : null}
    </div>
  );
}

export function StatCard({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "warning" | "success" | "neutral" | "danger" | "info";
}) {
  const styles = toneClasses[tone];
  return (
    <div className={`rounded-[22px] border p-4 shadow-sm ${styles.shell}`}>
      <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${styles.eyebrow}`}>
        {label}
      </p>
      <p className="mt-3 text-lg font-medium tracking-tight text-slate-900">{value}</p>
    </div>
  );
}

export function Badge({
  label,
  tone = "default",
}: {
  label: string;
  tone?: "default" | "warning" | "success" | "neutral" | "danger" | "info";
}) {
  const styles = toneClasses[tone];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${styles.shell} ${styles.eyebrow}`}
    >
      {label}
    </span>
  );
}

export function FormHint({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
      {children}
    </div>
  );
}
