 "use client";

import { DealerShell } from "@/components/kyfi/dealer-shell";
import { MyRecordsView } from "@/components/kyfi/views/my-records-view";
import { useKyfiCopy } from "@/components/kyfi/locale-provider";

export default function RecordsPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell
      title={c.nav.records.label}
      description={c.records.description}
    >
      <MyRecordsView />
    </DealerShell>
  );
}
