 "use client";

import { DealerShell } from "@/components/kyfi/dealer-shell";
import { DashboardView } from "@/components/kyfi/views/dashboard-view";
import { useKyfiCopy } from "@/components/kyfi/locale-provider";

export default function DashboardPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell
      title={c.dashboard.title}
      description={c.dashboard.description}
    >
      <DashboardView />
    </DealerShell>
  );
}
