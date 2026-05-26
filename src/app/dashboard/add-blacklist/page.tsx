 "use client";

import { DealerShell } from "@/components/kyfi/dealer-shell";
import { AddToBlacklistView } from "@/components/kyfi/views/add-to-blacklist-view";
import { useKyfiCopy } from "@/components/kyfi/locale-provider";

export default function AddBlacklistPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell
      title={c.nav.addBlacklist.label}
      description={c.addBlacklist.description}
    >
      <AddToBlacklistView />
    </DealerShell>
  );
}
