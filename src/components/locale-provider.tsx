"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { kyfiCopy, type KyfiLocale } from "@/lib/kyfi-copy";

type KyfiLocaleContextValue = {
  locale: KyfiLocale;
  setLocale: (locale: KyfiLocale) => void;
};

const KyfiLocaleContext = createContext<KyfiLocaleContextValue | null>(null);

function getLocaleSnapshot(): KyfiLocale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("kyfi-locale");
  if (stored === "te" || stored === "en") return stored;
  return window.navigator.language.toLowerCase().startsWith("te") ? "te" : "en";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("kyfi-locale-change", callback as EventListener);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("kyfi-locale-change", callback as EventListener);
  };
}

export function KyfiLocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    getLocaleSnapshot,
    () => "en",
  ) as KyfiLocale;

  const setLocaleState = (nextLocale: KyfiLocale) => {
    window.localStorage.setItem("kyfi-locale", nextLocale);
    document.documentElement.lang = nextLocale === "te" ? "te" : "en";
    window.dispatchEvent(new Event("kyfi-locale-change"));
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
    }),
    [locale],
  );

  return <KyfiLocaleContext.Provider value={value}>{children}</KyfiLocaleContext.Provider>;
}

export function useKyfiLocale() {
  const value = useContext(KyfiLocaleContext);
  if (!value) {
    throw new Error("useKyfiLocale must be used within KyfiLocaleProvider");
  }
  return value;
}

export function useKyfiCopy() {
  const { locale } = useKyfiLocale();
  return kyfiCopy[locale];
}
