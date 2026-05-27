"use client";

import { DealerShell } from "@/components/dealer-shell";
import { MyRecordsView } from "@/components/views/my-records-view";
import { useKyfiCopy } from "@/components/locale-provider";

export default function RecordsPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell title={c.nav.records.label}>
      <MyRecordsView />
    </DealerShell>
  );
}
