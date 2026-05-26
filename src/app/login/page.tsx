"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useKyfiCopy } from "@/components/kyfi/locale-provider";

export default function LoginPage() {
  const router = useRouter();
  const c = useKyfiCopy();

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
        <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="h-2 rounded-t-3xl bg-emerald-600" />
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-base font-bold text-white">
                K
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
                  {c.auth.workspaceLabel}
                </p>
                <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                  {c.auth.loginTitle}
                </h1>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              {c.auth.loginSubtitle}
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                router.push("/dashboard");
              }}
            >
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {c.auth.mobile}
                </label>
                <input
                  type="tel"
                  defaultValue="9876543210"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {c.auth.otp}
                </label>
                <input
                  type="text"
                  defaultValue="123456"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                {c.auth.loginButton}
              </button>
            </form>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  {c.auth.newDealer}
                </p>
                <p className="mt-1 text-sm text-slate-600">{c.auth.registerHint}</p>
              </div>
              <Link
                href="/register"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
              >
                {c.auth.registerButton}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
