 "use client";

import { DealerShell } from "@/components/kyfi/dealer-shell";
import { BlacklistBrowserView } from "@/components/kyfi/views/blacklist-browser-view";
import { useKyfiCopy } from "@/components/kyfi/locale-provider";

export default function BlacklistPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell
      title={c.nav.blacklist.label}
      description={c.blacklist.description}
    >
      <BlacklistBrowserView />
    </DealerShell>
  );
}
