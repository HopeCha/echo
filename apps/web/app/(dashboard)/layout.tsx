import { AuthGuard } from "@/modeles/auth/ui/components/auth-guard";
import { OrganizationGuard } from "@/modeles/auth/ui/components/organization-guard";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard>
      <OrganizationGuard>
        {children}
      </OrganizationGuard>
    </AuthGuard>
  );
};

export default Layout;