"use client";

import { DealerShell } from "@/components/dealer-shell";
import { AddFarmerStatusView } from "@/components/views/add-farmer-status-view";
import { useKyfiCopy } from "@/components/locale-provider";

export default function StatusPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell title={c.nav.status.label}>
      <AddFarmerStatusView />
    </DealerShell>
  );
}
