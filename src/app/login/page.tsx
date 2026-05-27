"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type LoginMethod = "otp" | "password";

export default function LoginPage() {
  const router = useRouter();
  const [method, setMethod] = useState<LoginMethod>("otp");

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 font-manrope">
      <main className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6">
          <p className="font-manrope text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-emerald-700 sm:text-xs">
            KYFI
          </p>
          <h2 className="font-manrope mt-2 text-[1.55rem] font-[300] tracking-tight text-slate-900 sm:text-[1.8rem]">
            Login
          </h2>
          <p className="font-manrope mt-1 text-[0.92rem] font-normal text-slate-600 sm:text-sm">
            Enter your mobile number to continue.
          </p>
        </div>

        <form
          className="space-y-6"
          onSubmit={(event) => {
            event.preventDefault();
            router.push("/dashboard");
          }}
        >
          <div>
            <label
              htmlFor="mobile"
              className="font-manrope mb-4 block text-[0.93rem] font-light text-slate-700 sm:text-sm"
            >
              Mobile number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              inputMode="numeric"
              defaultValue="9876543210"
              placeholder="Enter mobile number"
              className="font-manrope w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[0.95rem] font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
            />
          </div>

          <div>
            <p className="font-manrope mb-3 text-[0.93rem] font-light text-slate-700 sm:text-sm">
              Login method
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setMethod("otp")}
                className={[
                  "font-manrope rounded-xl border px-4 py-3 text-[0.93rem] font-normal transition sm:text-sm",
                  method === "otp"
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-400",
                ].join(" ")}
              >
                OTP
              </button>
              <button
                type="button"
                onClick={() => setMethod("password")}
                className={[
                  "font-manrope rounded-xl border px-4 py-3 text-[0.93rem] font-normal transition sm:text-sm",
                  method === "password"
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-400",
                ].join(" ")}
              >
                Password
              </button>
            </div>
          </div>

          {method === "otp" ? (
            <div>
              <label
                htmlFor="otp"
                className="font-manrope mb-4 block text-[0.93rem] font-light text-slate-700 sm:text-sm"
              >
                OTP
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                inputMode="numeric"
                defaultValue="123456"
                placeholder="Enter OTP"
                className="font-manrope w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[0.95rem] font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
              />
            </div>
          ) : (
            <div>
              <label
                htmlFor="password"
                className="font-manrope mb-4 block text-[0.93rem] font-light text-slate-700 sm:text-sm"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                className="font-manrope w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[0.95rem] font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
              />
            </div>
          )}

          <button
            type="submit"
            className="font-manrope !font-normal w-full rounded-xl bg-slate-900 px-4 py-3 text-[0.95rem] text-white transition hover:bg-slate-800 sm:text-sm"
          >
            Login
          </button>
        </form>

        <p className="font-manrope mt-5 text-center text-[0.93rem] font-light text-slate-600 sm:text-sm">
          New dealer?{" "}
          <Link href="/register" className="font-normal text-emerald-700 hover:text-emerald-600">
            Register here
          </Link>
        </p>
      </main>
    </div>
  );
}
