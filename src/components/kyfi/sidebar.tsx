"use client";

import Link from "next/link";
import { useKyfiCopy } from "./locale-provider";

export type KyfiSectionKey =
  | "dashboard"
  | "search"
  | "blacklist"
  | "status"
  | "add-blacklist"
  | "records"
  | "profile-settings";

type NavItem = {
  key: KyfiSectionKey;
  label: string;
  note: string;
  icon:
    | "dashboard"
    | "search"
    | "blacklist"
    | "status"
    | "add-blacklist"
    | "records"
    | "profile-settings";
};

export const kyfiNavItems: NavItem[] = [
  { key: "dashboard", label: "Dashboard", note: "Overview", icon: "dashboard" },
  { key: "search", label: "Search Farmer Status", note: "Lookup", icon: "search" },
  { key: "blacklist", label: "Blacklist Browser", note: "Warnings", icon: "blacklist" },
  { key: "status", label: "Add Farmer Status", note: "GREEN / YELLOW / RED", icon: "status" },
  { key: "add-blacklist", label: "Add to Blacklist", note: "Critical", icon: "add-blacklist" },
  { key: "records", label: "My Records", note: "History", icon: "records" },
];

export function navToPath(key: KyfiSectionKey) {
  if (key === "dashboard") return "/dashboard";
  if (key === "search") return "/dashboard/search";
  if (key === "blacklist") return "/dashboard/blacklist";
  if (key === "status") return "/dashboard/status";
  if (key === "add-blacklist") return "/dashboard/add-blacklist";
  if (key === "records") return "/dashboard/records";
  return "/dashboard/profile-settings";
}

function SidebarIcon({ kind }: { kind: NavItem["icon"] }) {
  const className = "h-5 w-5";

  switch (kind) {
    case "search":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M16 16l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "blacklist":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M12 2l8 4.5v6.5c0 4.4-3.1 8.3-8 9.5-4.9-1.2-8-5.1-8-9.5V6.5L12 2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M9 9l6 6M15 9l-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "status":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M4 18h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7 18V11m5 7V6m5 12v-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "add-blacklist":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M12 2l8 4.5v6.5c0 4.4-3.1 8.3-8 9.5-4.9-1.2-8-5.1-8-9.5V6.5L12 2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "records":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M6 4h9l3 3v13H6z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M15 4v4h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 11h8M8 15h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "profile-settings":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="8" r="3.25" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M5.5 19c1.3-3.2 4-5 6.5-5s5.2 1.8 6.5 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M18 4h2M17 5l1.4 1.4M17 9l1.4-1.4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

export function NavIconBadge({ kind }: { kind: NavItem["icon"] }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
      <SidebarIcon kind={kind} />
    </span>
  );
}

export function KyfiSidebar({
  activeSection,
  onSelectSection,
}: {
  activeSection: KyfiSectionKey;
  onSelectSection: (section: KyfiSectionKey) => void;
}) {
  const c = useKyfiCopy();
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-base font-bold text-white">
            K
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
              KYFI
            </p>
            <p className="text-sm font-semibold text-slate-900">{c.app.workspace}</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {c.dashboard.description}
        </p>
      </div>

      <nav className="mt-4 space-y-2">
        {kyfiNavItems.map((item) => {
          const isActive = item.key === activeSection;
          const key = item.key === "add-blacklist" ? "addBlacklist" : item.key;
          const nav = c.nav[key as keyof typeof c.nav];
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onSelectSection(item.key)}
              className={[
                "flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition",
                isActive
                  ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
              ].join(" ")}
            >
              <NavIconBadge kind={item.icon} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">{nav.label}</span>
                <span className="mt-1 block text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  {nav.note}
                </span>
              </span>
              <span
                className={[
                  "h-2.5 w-2.5 rounded-full",
                  isActive ? "bg-emerald-600" : "bg-slate-300",
                ].join(" ")}
              />
            </button>
          );
        })}
      </nav>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          {c.app.today}
        </p>
        <div className="mt-3 space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Pending approvals</span>
            <span className="font-semibold text-slate-900">18</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Blacklist lookups</span>
            <span className="font-semibold text-slate-900">1,246</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">New records</span>
            <span className="font-semibold text-slate-900">93</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function KyfiMobileNavLink({
  item,
  active,
  href,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "flex items-center gap-3 rounded-2xl border px-3 py-3 transition",
        active
          ? "border-emerald-200 bg-emerald-50 text-emerald-900"
          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
      ].join(" ")}
    >
      <NavIconBadge kind={item.icon} />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold">{item.label}</span>
        <span className="mt-1 block text-[11px] uppercase tracking-[0.2em] text-slate-500">
          {item.note}
        </span>
      </span>
    </Link>
  );
}
