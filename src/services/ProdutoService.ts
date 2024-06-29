import { api } from "@/lib/axios";

const findAll = async (): Promise<any> => {
  let response;
  try {
    response = await api.get("/produto");
  } catch (error: any) {
    response = error.response;
  }
  return response.data;
};

const produtoService = {
  findAll,
};

export default produtoService;
