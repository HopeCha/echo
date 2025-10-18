import { AuthGuard } from "@/modeles/auth/ui/components/auth-guard";
import { OrganizationGuard } from "@/modeles/auth/ui/components/organization-guard";
import { SidebarProvider, SidebarTrigger } from "@workspace/ui/components/sidebar";
import { cookies } from "next/headers";
import { DashboardSidebar } from "../components/dashboard-sidebar";
import { SIDEBAR_COOKIE_NAME } from "@workspace/ui/components/sidebar";

export const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get(SIDEBAR_COOKIE_NAME)?.value === "true";

  return (
    <AuthGuard>
      <OrganizationGuard>
        <SidebarProvider defaultOpen={defaultOpen}>
          <DashboardSidebar />
        <main className="flex flex-1 flex-col">
          {children}
        </main>
        </SidebarProvider>
      </OrganizationGuard>
    </AuthGuard>
  )
}