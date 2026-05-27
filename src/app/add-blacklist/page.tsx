"use client";

import { DealerShell } from "@/components/dealer-shell";
import { AddToBlacklistView } from "@/components/views/add-to-blacklist-view";
import { useKyfiCopy } from "@/components/locale-provider";

export default function AddBlacklistPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell title={c.nav.addBlacklist.label}>
      <AddToBlacklistView />
    </DealerShell>
  );
}
