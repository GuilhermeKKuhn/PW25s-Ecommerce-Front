import { IPedido } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const createPedido = async (pedido: IPedido) => {
  let response;
  try {
    response = await api.post("/pedido", pedido);
  } catch (error: any) {
    response = error.response;
  }
  return response.data;
};

const findAll = async () => {
  let response;
  try {
    response = await api.get("/pedido/meuspedidos");
  } catch (error: any) {
    response = error.response;
  }
  return response.data;
};

const findById = async (id: number) => {
  let response;
  try {
    response = await api.get(`/pedido/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response.data;
};

const pedidosService = {
  createPedido,
  findAll,
  findById,
};

export default pedidosService;
