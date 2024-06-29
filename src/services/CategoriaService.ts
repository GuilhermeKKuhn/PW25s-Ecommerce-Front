import { api } from "@/lib/axios";

const findAll = async (): Promise<any> => {
  let response;
  try {
    response = await api.get("/categoria");
  } catch (error: any) {
    response = error.response;
  }
  return response.data;
};

const categoriaService = {
  findAll,
};

export default categoriaService;
