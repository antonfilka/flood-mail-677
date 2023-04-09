import { Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "../constants";
import { RedirectForAuthorized, RequireAuth } from "../modules";
import { HomePage, SignInPage } from "../pages";
import { SignUpPage } from "../pages/signUp/signUpPage";

export function MainRouter() {
  return (
    <Routes>
      <Route
        path={APP_ROUTES.SIGN_IN}
        element={<RedirectForAuthorized to={<SignInPage />} />}
      />
      <Route
        path={APP_ROUTES.SIGN_UP}
        element={<RedirectForAuthorized to={<SignUpPage />} />}
      />
      <Route
        path={APP_ROUTES.HOME_PAGE}
        element={<RequireAuth to={<HomePage />} />}
      />
    </Routes>
  );
}
