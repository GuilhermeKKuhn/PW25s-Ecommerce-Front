import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { IpedidoHistorico } from "@/commons/interfaces";
import pedidosService from "@/services/PedidoService";
import DetalhesPedido from "../DetalhesPedido/DetalhesPedido";

const HistPedidos = () => {
  const [pedidos, setPedidos] = useState<IpedidoHistorico[]>([]);
  const [pedidoSelecionado, setPedidoSelecionado] = useState<number | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPedidos();
  }, []);

  const fetchPedidos = async () => {
    try {
      const response = await pedidosService.findAll();
      setPedidos(response);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
    }
  };

  const buscarDetalhe = async (id: number) => {
    setLoading(true);
    try {
      await pedidosService.findById(id); // Aqui você pode fazer algo com o detalhe se precisar
      setPedidoSelecionado(id);
    } catch (error) {
      console.error("Erro ao buscar detalhes do pedido:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxW="800px" mx="auto" mt="4">
      <Text fontSize="2xl" textAlign="center" mb="4">
        Histórico de Pedidos
      </Text>
      <Accordion allowToggle>
        {pedidos.map((pedido, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton
                onClick={() => pedido.id && buscarDetalhe(pedido.id)}
              >
                <Box flex="1" textAlign="left">
                  Número do Pedido: {pedido.id}
                </Box>
                <Badge variant="solid" colorScheme="blue">
                  {new Date(pedido.data).toLocaleDateString()}
                </Badge>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {loading ? (
                <Spinner />
              ) : pedidoSelecionado === pedido.id ? (
                <DetalhesPedido pedidoId={pedido.id} /> // Renderiza o componente de detalhes do pedido
              ) : (
                <Text>
                  Clique no botão acima para ver os detalhes do pedido.
                </Text>
              )}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default HistPedidos;
