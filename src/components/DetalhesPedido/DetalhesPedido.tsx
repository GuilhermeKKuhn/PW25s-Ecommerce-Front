import React, { useEffect, useState } from "react";
import { Text, Box, Spinner, Image } from "@chakra-ui/react";
import pedidoService from "@/services/PedidoService";
import { IDetalhesHistorico } from "@/commons/interfaces";

interface Props {
  pedidoId: number;
}

const DetalhesPedido: React.FC<Props> = ({ pedidoId }) => {
  const [detalhesPedido, setDetalhesPedido] =
    useState<IDetalhesHistorico | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDetalhesPedido();
  }, [pedidoId]);

  const fetchDetalhesPedido = async () => {
    setLoading(true);
    try {
      const response = await pedidoService.findById(pedidoId);
      setDetalhesPedido(response);
    } catch (error) {
      console.error("Erro ao buscar detalhes do pedido:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (!detalhesPedido) {
    return <Text>Falha ao carregar detalhes do pedido.</Text>;
  }

  return (
    <Box>
      <Text fontSize="xl" mb={2}>
        Itens do Pedido:
      </Text>
      <ul>
        {detalhesPedido.itensPedido.map((item, idx) => (
          <li key={idx}>
            <Box display="flex" alignItems="center" mb={2}>
              <Image
                src={item.produto.urlImage}
                alt={`Imagem de ${item.produto.nome}`}
                boxSize="50px"
                objectFit="cover"
                mr={4}
              />
              <Box>
                <Text fontSize="lg">{item.produto.nome}</Text>
                <Text fontSize="sm">Valor: R$ {item.produto.preco}</Text>
                <Text>Quantidade: {item.quantidade}</Text>
              </Box>
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default DetalhesPedido;
