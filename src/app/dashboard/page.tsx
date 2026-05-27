"use client";

import { DealerShell } from "@/components/dealer-shell";
import { DashboardView } from "@/components/views/dashboard-view";
import { useKyfiCopy } from "@/components/locale-provider";

export default function DashboardPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell title={c.dashboard.title}>
      <DashboardView />
    </DealerShell>
  );
}
