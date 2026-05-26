"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useKyfiCopy } from "./locale-provider";
import {
  KyfiSidebar,
  KyfiMobileNavLink,
  kyfiNavItems,
  navToPath,
  type KyfiSectionKey,
} from "./sidebar";

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <circle cx="12" cy="8" r="3.25" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5.5 19c1.3-3.2 4-5 6.5-5s5.2 1.8 6.5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function pathToKey(pathname: string): KyfiSectionKey {
  if (pathname === "/dashboard/search") return "search";
  if (pathname === "/dashboard/blacklist") return "blacklist";
  if (pathname === "/dashboard/status") return "status";
  if (pathname === "/dashboard/add-blacklist") return "add-blacklist";
  if (pathname === "/dashboard/records") return "records";
  if (pathname === "/dashboard/profile-settings") return "profile-settings";
  return "dashboard";
}

export function DealerShell({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const c = useKyfiCopy();
  const activeSection = pathToKey(pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-900/35 transition-opacity md:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed bottom-0 left-0 right-0 z-50 rounded-t-[28px] border border-slate-200 bg-white p-4 shadow-[0_-18px_50px_rgba(15,23,42,0.16)] transition-transform md:hidden ${
          mobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
                {c.app.menu}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{c.app.selectSection}</p>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700"
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="grid gap-2">
          {kyfiNavItems.map((item) => {
            const isActive = item.key === activeSection;
            return (
              <KyfiMobileNavLink
                key={item.key}
                item={item}
                active={isActive}
                href={navToPath(item.key)}
                onClick={() => setMobileMenuOpen(false)}
              />
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto min-h-screen max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <div className="flex items-start justify-between gap-3 md:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700">
                {c.app.workspace}
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {c.app.title}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/dashboard/profile-settings"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
                aria-label="Open profile settings"
              >
                <ProfileIcon />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((value) => !value)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        <main className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="hidden xl:block">
            <KyfiSidebar
              activeSection={activeSection}
              onSelectSection={(section) => {
                router.push(navToPath(section));
              }}
            />
          </aside>

          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700">
                {c.app.currentSection}
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                {title}
              </h2>
              {description ? (
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                  {description}
                </p>
              ) : null}
            </div>

            {children}
          </section>
        </main>
      </div>
    </>
  );
}
