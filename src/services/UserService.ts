import { api } from "@/lib/axios";

const getUser = async () => {
  let response;
  try {
    response = await api.get("/usuario/me");
  } catch (error: any) {
    response = error.response;
  }
  return response.data;
};

const UserService = {
  getUser,
};

export default UserService;
