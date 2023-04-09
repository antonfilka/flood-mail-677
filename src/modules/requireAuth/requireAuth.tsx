import { useLocation, Navigate, Location } from "react-router-dom";
import { APP_ROUTES } from "../../constants";
import { useStore } from "../../store";

export type NavigateState = {
  from: Location;
};

export function RequireAuth({ to }: { to: JSX.Element }) {
  const { isAuthorized } = useStore((state) => state);
  const location = useLocation();

  if (!isAuthorized) {
    // Redirect them to the /sign-in page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate to={APP_ROUTES.SIGN_IN} state={{ from: location }} replace />
    );
  }

  return to;
}
