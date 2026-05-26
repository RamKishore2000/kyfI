"use client";

import { Frame, InfoCard } from "./common";
import { useKyfiCopy, useKyfiLocale } from "../locale-provider";

export function ProfileSettingsView() {
  const c = useKyfiCopy();
  const { locale, setLocale } = useKyfiLocale();

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
      <Frame
        eyebrow={c.profile.workspaceLabel}
        title={c.profile.title}
        description={c.profile.description}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {c.profile.fields.map((label) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {label}
              </p>
              <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
                Enter value
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            {c.profile.language}
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-2xl border px-4 py-2 text-sm font-semibold ${
                locale === "en"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLocale("te")}
              className={`rounded-2xl border px-4 py-2 text-sm font-semibold ${
                locale === "te"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              తెలుగు
            </button>
          </div>
          <p className="mt-3 text-sm text-slate-600">{c.profile.languageValue}</p>
        </div>
      </Frame>

      <Frame eyebrow={c.profile.settingsTitle} title={c.profile.settingsTitle}>
        <div className="space-y-3">
          <InfoCard title={c.profile.language} text={c.profile.languageValue} />
          <InfoCard title={c.profile.auth} text={c.profile.authValue} />
          <InfoCard title={c.profile.access} text={c.profile.accessValue} />
          <InfoCard title={c.profile.privacy} text={c.profile.privacyValue} tone="warning" />
        </div>
      </Frame>
    </div>
  );
}
