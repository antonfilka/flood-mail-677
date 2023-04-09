import React from "react";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants";
import { useStore } from "../../store";

export function RedirectForAuthorized({ to }: { to: JSX.Element }) {
  const { isAuthorized } = useStore((state) => state);

  if (isAuthorized) {
    return <Navigate to={APP_ROUTES.HOME_PAGE} replace />;
  }

  return to;
}
