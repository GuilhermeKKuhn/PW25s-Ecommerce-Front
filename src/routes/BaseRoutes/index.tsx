import { Route, Routes } from "react-router-dom";
import { UserLoginPage } from "@/pages/UserLoginPage";
import { UserSingupPage } from "@/pages/UserSingupPage";
import { HomePage } from "@/pages/HomePage";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { ProductPage } from "@/pages/ProductPage";
import { PaginaInternaProduto } from "@/pages/PaginaInternaProduto";

export function BaseRoutes() {
  return (
    <Routes>
      {/*rotas publicas*/}
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/signup" element={<UserSingupPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/produto" element={<ProductPage />} />
      <Route path="/produto/:id" element={<PaginaInternaProduto />} />

      {/*rotas privadas*/}
      <Route element={<AuthenticatedRoutes />}></Route>
    </Routes>
  );
}
