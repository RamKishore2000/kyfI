"use client";

import { DealerShell } from "@/components/dealer-shell";
import { SearchFarmerStatusView } from "@/components/views/search-farmer-status-view";
import { useKyfiCopy } from "@/components/locale-provider";

export default function SearchPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell title={c.nav.search.label}>
      <SearchFarmerStatusView />
    </DealerShell>
  );
}
