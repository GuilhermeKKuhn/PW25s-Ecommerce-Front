import { api } from "@/lib/axios";

const createPedido = async () => {
  let response;
  try {
    response = await api.post("/pedidos");
  } catch (error: any) {
    response = error.response;
  }
  return response.data;
};

const pedidosService = {
  createPedido,
};

export default pedidosService;
