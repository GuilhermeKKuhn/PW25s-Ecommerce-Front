import { Route, Routes } from "react-router-dom";
import { UserLoginPage } from "@/pages/UserLoginPage";
import { UserSingupPage } from "@/pages/UserSingupPage";
import { HomePage } from "@/pages/HomePage";

export function BaseRoutes() {
  return (
    <Routes>
      {/*rotas publicas*/}
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/signup" element={<UserSingupPage />} />

      {/*rotas privadas*/}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
