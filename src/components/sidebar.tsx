"use client";

import Link from "next/link";

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
  { key: "dashboard", label: "Dashboard", icon: "dashboard" },
  { key: "search", label: "Search Farmer Status", icon: "search" },
  { key: "blacklist", label: "Blacklist Browser", icon: "blacklist" },
  { key: "status", label: "Add Farmer Status", icon: "status" },
  { key: "add-blacklist", label: "Add to Blacklist", icon: "add-blacklist" },
  { key: "records", label: "My Records", icon: "records" },
];

export function navToPath(key: KyfiSectionKey) {
  if (key === "dashboard") return "/dashboard";
  if (key === "search") return "/search";
  if (key === "blacklist") return "/blacklist";
  if (key === "status") return "/status";
  if (key === "add-blacklist") return "/add-blacklist";
  if (key === "records") return "/records";
  return "/profile-settings";
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

export function NavIconBadge({
  kind,
  active = false,
}: {
  kind: NavItem["icon"];
  active?: boolean;
}) {
  return (
    <span
      className={[
        "flex h-10 w-10 items-center justify-center rounded-2xl ring-1 shadow-sm",
        active
          ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
          : "bg-slate-50 text-slate-500 ring-slate-200",
      ].join(" ")}
    >
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
  return (
    <aside className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
      <nav className="space-y-2">
        {kyfiNavItems.map((item) => {
          const isActive = item.key === activeSection;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onSelectSection(item.key)}
              className={[
                "flex w-full items-center gap-3 rounded-[22px] border px-3 py-3 text-left transition",
                isActive
                  ? "border-emerald-200 bg-emerald-50/90 text-emerald-900 shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
              ].join(" ")}
            >
              <NavIconBadge kind={item.icon} active={isActive} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold tracking-tight">{item.label}</span>
              </span>
              <span
                className={[
                  "h-2.5 w-2.5 rounded-full ring-4 ring-transparent",
                  isActive ? "bg-emerald-600" : "bg-slate-300",
                ].join(" ")}
              />
            </button>
          );
        })}
      </nav>

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
        "flex items-center gap-3 rounded-[22px] border px-3 py-3 transition",
        active
          ? "border-emerald-200 bg-emerald-50/90 text-emerald-900 shadow-sm"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
      ].join(" ")}
    >
      <NavIconBadge kind={item.icon} active={active} />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold tracking-tight">{item.label}</span>
        </span>
      </Link>
  );
}
