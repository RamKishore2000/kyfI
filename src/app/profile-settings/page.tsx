"use client";

import { DealerShell } from "@/components/dealer-shell";
import { ProfileSettingsView } from "@/components/views/profile-settings-view";
import { useKyfiCopy } from "@/components/locale-provider";

export default function ProfileSettingsPage() {
  const c = useKyfiCopy();
  return (
    <DealerShell title={c.nav.profile.label}>
      <ProfileSettingsView />
    </DealerShell>
  );
}
