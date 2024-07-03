import { Route, Routes } from "react-router-dom";
import { UserLoginPage } from "@/pages/UserLoginPage";
import { UserSingupPage } from "@/pages/UserSingupPage";
import { HomePage } from "@/pages/HomePage";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { ProductPage } from "@/pages/ProductPage";
import { PaginaInternaProduto } from "@/pages/PaginaInternaProduto";
import { Carrinho } from "@/pages/Carrinho";
import FinalizarPedido from "@/components/FinalizarPedido/FinalizarPedido";
import { HistoricoPedidos } from "@/pages/HistoricoPedidos";

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
      <Route path="/carrinho" element={<Carrinho />} />

      {/*rotas privadas*/}
      <Route element={<AuthenticatedRoutes />}>
        <Route path="/FinalizarPedido" element={<FinalizarPedido />} />
        <Route path="/HistoricoPedidos" element={<HistoricoPedidos />} />
      </Route>
    </Routes>
  );
}
