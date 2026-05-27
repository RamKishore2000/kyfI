"use client";

import { DealerShell } from "@/components/dealer-shell";
import { BlacklistBrowserView } from "@/components/views/blacklist-browser-view";
import { useKyfiCopy } from "@/components/locale-provider";

export default function BlacklistPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell title={c.nav.blacklist.label}>
      <BlacklistBrowserView />
    </DealerShell>
  );
}
