import { IUser } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const getUser = async (user: IUser) => {
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
