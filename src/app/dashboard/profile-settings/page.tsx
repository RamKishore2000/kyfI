 "use client";

import { DealerShell } from "@/components/kyfi/dealer-shell";
import { ProfileSettingsView } from "@/components/kyfi/views/profile-settings-view";
import { useKyfiCopy } from "@/components/kyfi/locale-provider";

export default function ProfileSettingsPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell
      title={c.nav.profile.label}
      description={c.profile.description}
    >
      <ProfileSettingsView />
    </DealerShell>
  );
}
