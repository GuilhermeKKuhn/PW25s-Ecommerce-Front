import React, { useEffect, useState } from "react";
import { Text, Box, Spinner, Image, Flex } from "@chakra-ui/react";
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
    <Box mb={20}>
      <Text fontSize="2xl" mb={4} textAlign="center" fontWeight="bold">
        Itens do Pedido
      </Text>
      <ul  style={{ listStyleType: "none", padding: 0 }}>
        {detalhesPedido.itensPedido.map((item, idx) => (
          <li key={idx}>
            <Flex alignItems="center" mb={4}>
              <Image
                src={item.produto.urlImage}
                alt={`Imagem de ${item.produto.nome}`}
                boxSize="80px"
                objectFit="cover"
                mr={4}
              />
              <Box>
                <Text fontSize="lg" mb={2}>{item.produto.nome}</Text>
                <Text fontSize="md" mb={2}>Valor: R$ {item.produto.preco}</Text>
                <Text>Quantidade: {item.quantidade}</Text>
              </Box>
            </Flex>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default DetalhesPedido;
