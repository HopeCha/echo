"use client"

import { useOrganization } from "@clerk/nextjs"
import { AuthLayout } from "@/modeles/auth/ui/layouts/auth-layout"
import { OrgSelectionView } from "@/modeles/auth/ui/views/org-selection-view";

export const OrganizationGuard = ({ children }: { children: React.ReactNode }) => {
  const { organization } = useOrganization();

  if(!organization) {
    return (
      <AuthLayout>
        <OrgSelectionView />
      </AuthLayout>
    )
  }

  return (
    <div>
      {children}
    </div>
  );
};