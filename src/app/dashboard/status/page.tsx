 "use client";

import { DealerShell } from "@/components/kyfi/dealer-shell";
import { AddFarmerStatusView } from "@/components/kyfi/views/add-farmer-status-view";
import { useKyfiCopy } from "@/components/kyfi/locale-provider";

export default function StatusPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell
      title={c.nav.status.label}
      description={c.status.description}
    >
      <AddFarmerStatusView />
    </DealerShell>
  );
}
