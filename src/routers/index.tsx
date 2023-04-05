import { Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "../constants";
import { HomePage, SignInPage } from "../pages";

export function MainRouter() {
  return (
    <Routes>
      <Route path={APP_ROUTES.SIGN_IN} element={<SignInPage />} />
      <Route path={APP_ROUTES.HOME_PAGE} element={<HomePage />} />
    </Routes>
  );
}
