import { PageSection } from "../../common";
import { UserAccount, AdminAccount } from "../../modules";
import { useStore } from "../../store";

export function HomePage() {
  const isAdmin = useStore((state) => state.isAdmin);

  return (
    <PageSection>{isAdmin ? <AdminAccount /> : <UserAccount />}</PageSection>
  );
}
