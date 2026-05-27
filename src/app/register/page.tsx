"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 font-manrope">
      <main className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6">
          <p className="font-manrope text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-emerald-700 sm:text-xs">
            KYFI
          </p>
          <h2 className="font-manrope mt-2 text-[1.55rem] font-[300] tracking-tight text-slate-900 sm:text-[1.8rem]">
            Register
          </h2>
          <p className="font-manrope mt-1 text-[0.92rem] font-normal text-slate-600 sm:text-sm">
            Enter dealer details and send the request for approval.
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Shop name" defaultValue="Sri Lakshmi Pesticides" />
            <Field label="Owner name" defaultValue="Ramesh Kumar" />
            <Field label="Mobile number" type="tel" defaultValue="9876543210" />
            <Field label="District" defaultValue="Guntur" />
            <Field label="Mandal" defaultValue="Guntur East" />
            <Field label="Village" defaultValue="Kondapalli" />
          </div>

          <Field
            label="Aadhaar or GST number"
            placeholder="Enter Aadhaar or GST number"
          />

          <button
            type="submit"
            className="font-manrope !font-normal w-full rounded-xl bg-slate-900 px-4 py-3 text-[0.95rem] text-white transition hover:bg-slate-800 sm:text-sm"
          >
            Submit registration
          </button>
        </form>

        {submitted ? (
          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
            <p className="font-manrope text-[0.93rem] font-light text-amber-800 sm:text-sm">
              Registration sent. Admin approval is required before login.
            </p>
          </div>
        ) : null}

        <p className="font-manrope mt-5 text-center text-[0.93rem] font-light text-slate-600 sm:text-sm">
          Already registered?{" "}
          <Link href="/login" className="font-normal text-emerald-700 hover:text-emerald-600">
            Login here
          </Link>
        </p>
      </main>
    </div>
  );
}

function Field({
  label,
  defaultValue,
  placeholder,
  type = "text",
}: {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label
        className="font-manrope mb-4 block text-[0.93rem] font-light text-slate-700 sm:text-sm"
      >
        {label}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="font-manrope w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[0.95rem] font-light text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
      />
    </div>
  );
}
