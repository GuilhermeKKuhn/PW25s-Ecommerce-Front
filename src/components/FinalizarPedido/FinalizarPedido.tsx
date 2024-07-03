import { IPedido, IProduct, IitensPedido } from "@/commons/interfaces";
import pedidosService from "@/services/PedidoService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const finalizarPedido = () => {
  const navigate = useNavigate();
  const [pedidoConcluido, setPedidoConcluido] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      enviaPedido();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const getItensCarrinho = async () => {
    const carrinho = localStorage.getItem("itensCarrinho");
    if (carrinho) {
      return JSON.parse(carrinho) as IProduct[];
    }
    return [];
  };

  const enviaPedido = async () => {
    const data = new Date().toISOString();
    const itensCarrinho = await getItensCarrinho();

    if (itensCarrinho.length === 0) {
      throw new Error("Carrinho vazio");
    }

    const itensPedido: IitensPedido[] = itensCarrinho.map((item) => ({
      produto: {
        id: item.id as number,
      },
      quantidade: item.quantidade ? Number(item.quantidade) : 1,
    }));

    const pedido: IPedido = {
      data: data,
      itensPedido: itensPedido,
    };

    await pedidosService.createPedido(pedido);
    setPedidoConcluido(true);
    localStorage.removeItem("itensCarrinho");
  };

  return (
    <div>
      {pedidoConcluido ? (
        <div className="alert alert-success" role="alert">
          Pedido concluído! Você será redirecionado para a página inicial.
        </div>
      ) : (
        <div className="alert alert-info" role="alert">
          Processando pagamento...
        </div>
      )}
    </div>
  );
};

export default finalizarPedido;
