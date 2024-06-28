import AuthService from "@/services/AuthService";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function AuthenticatedRoutes() {
  const isAuthenticated = AuthService.isAuthenticated();
  const location = useLocation();

  return isAuthenticated ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
