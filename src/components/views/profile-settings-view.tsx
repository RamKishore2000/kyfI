"use client";

import { Badge, FieldPreview, Frame, InfoCard } from "./common";
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
            <FieldPreview key={label} label={label} value="Enter value" />
          ))}
        </div>

        <div className="mt-5 rounded-[24px] border border-slate-200 bg-slate-50 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
            {c.profile.language}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
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
              className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
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
          <InfoCard title={c.profile.language} text={c.profile.languageValue} tone="success" />
          <InfoCard title={c.profile.auth} text={c.profile.authValue} tone="info" />
          <InfoCard title={c.profile.access} text={c.profile.accessValue} tone="neutral" />
          <InfoCard title={c.profile.privacy} text={c.profile.privacyValue} tone="warning" />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Badge label="Dealer only" tone="neutral" />
          <Badge label="Masked Aadhaar" tone="warning" />
        </div>
      </Frame>
    </div>
  );
}
