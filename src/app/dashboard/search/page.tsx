 "use client";

import { DealerShell } from "@/components/kyfi/dealer-shell";
import { SearchFarmerStatusView } from "@/components/kyfi/views/search-farmer-status-view";
import { useKyfiCopy } from "@/components/kyfi/locale-provider";

export default function SearchPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell
      title={c.nav.search.label}
      description={c.search.description}
    >
      <SearchFarmerStatusView />
    </DealerShell>
  );
}
