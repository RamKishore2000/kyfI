"use client";

import type { ReactNode } from "react";
import { KyfiLocaleProvider } from "@/components/kyfi/locale-provider";

export function Providers({ children }: { children: ReactNode }) {
  return <KyfiLocaleProvider>{children}</KyfiLocaleProvider>;
}
