import { Route, Routes } from "react-router-dom";
import { UserLoginPage } from "@/pages/UserLoginPage";
import { UserSingupPage } from "@/pages/UserSingupPage";
import { HomePage } from "@/pages/HomePage";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";

export function BaseRoutes() {
  return (
    <Routes>
      {/*rotas publicas*/}
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/signup" element={<UserSingupPage />} />

      {/*rotas privadas*/}
      <Route element={<AuthenticatedRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
