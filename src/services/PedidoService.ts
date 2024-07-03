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

const pedidosService = {
  createPedido,
};

export default pedidosService;
