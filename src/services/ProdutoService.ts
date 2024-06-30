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

const findbyCategoria = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`/produto/categoriaId/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response.data;
};

const findById = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`/produto/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response.data;
};

const produtoService = {
  findAll,
  findbyCategoria,
  findById,
};

export default produtoService;
