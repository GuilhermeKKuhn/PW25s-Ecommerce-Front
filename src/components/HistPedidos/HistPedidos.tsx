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
      await pedidosService.findById(id); 
      setPedidoSelecionado(id);
    } catch (error) {
      console.error("Erro ao buscar detalhes do pedido:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxW="800px" mx="auto" mt="4" bg="white" borderRadius={25}>
    <Text fontWeight="bold" textAlign="center" mb="25px">
      Histórico de Pedidos
    </Text>
    <Accordion allowToggle>
      {pedidos.map((pedido, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton
              onClick={() => pedido.id && buscarDetalhe(pedido.id)}
            >
              <Box flex="1" 
              textAlign="left" 
              color='black'
                fontWeight='bold'
                borderRadius='md'
                h="100%"
                p={2}
                style={{ borderColor: "black" }}
                _hover={{
                  bgGradient: 'linear(to-r, gray.500, yellow.500)'
                }}>
                Número do Pedido: {pedido.id}
              </Box>
              <Badge bg="gray.300">
                {new Date(pedido.data).toLocaleDateString()}
              </Badge>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {loading ? (
              <Spinner />
            ) : pedidoSelecionado === pedido.id ? (
              <DetalhesPedido pedidoId={pedido.id} />
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
