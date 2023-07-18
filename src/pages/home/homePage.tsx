import { useQuery } from "@tanstack/react-query";
import { getUserDataQueryFunc } from "../../api/auth";
import { PageSection } from "../../common";
import { UserAccount, AdminAccount } from "../../modules";
import { useStore } from "../../store";

export function HomePage() {
  const isAdmin = useStore((state) => state.isAdmin);
  const access_token = useStore((state) => state.access_token);

  const userData = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUserDataQueryFunc(access_token),
  });

  return (
    <PageSection>
      {isAdmin ? (
        <AdminAccount userData={userData.data} />
      ) : (
        <UserAccount userData={userData.data} />
      )}
    </PageSection>
  );
}
