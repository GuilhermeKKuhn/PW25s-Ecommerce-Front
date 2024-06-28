import { IUserLogin, IUserSignup } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const signup = async (user: IUserSignup) => {
  let response;
  try {
    response = await api.post("/usuario", user);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const login = async (user: IUserLogin) => {
  let response;
  try {
    response = await api.post("/login", user);
    localStorage.setItem("token", JSON.stringify(response.data.token)); //salva o token na localStorage
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
      token
    )}`;
  } else {
    return false;
  }
  return token ? true : false;
};

const logout = () => {
  localStorage.removeItem("token");
  api.defaults.headers.common["Authorization"] = "";
};
const AuthService = {
  signup,
  login,
  isAuthenticated,
  logout,
};

export default AuthService;
