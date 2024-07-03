import { IProduct } from "@/commons/interfaces";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import BotaoComprar from "../BotaoComprar/Botaocomprar";

const Cart = () => {
  const [carrinho, setCarrinho] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);
  const frete = 10; // deixei um frete fixo só pra ficar bonitinho

  useEffect(() => {
    const itensCarrinho = localStorage.getItem("itensCarrinho");
    if (itensCarrinho) {
      const parsedCartItems: IProduct[] = JSON.parse(itensCarrinho);
      setCarrinho(parsedCartItems);
      calcularTotal(parsedCartItems);
    }
  }, []);

  const calcularTotal = (produtos: IProduct[]) => {
    const totalCalculado = produtos.reduce(
      (acc, item) => acc + Number(item.preco) * Number(item.quantidade ?? 1),
      0
    );
    setTotal(totalCalculado);
  };

  const incrementarQuantidade = (id: number) => {
    const novoCarrinho = carrinho.map((item) =>
      item.id === id
        ? { ...item, quantidade: Number(item.quantidade ?? 0) + 1 }
        : item
    );
    setCarrinho(novoCarrinho);
    localStorage.setItem("itensCarrinho", JSON.stringify(novoCarrinho));
    calcularTotal(novoCarrinho);
  };

  const decrementarQuantidade = (id: number) => {
    const novoCarrinho = carrinho.map((item) => {
      if (item.id === id && item.quantidade && Number(item.quantidade) > 1) {
        return { ...item, quantidade: Number(item.quantidade) - 1 };
      } else {
        return item;
      }
    });
    setCarrinho(novoCarrinho);
    localStorage.setItem("itensCarrinho", JSON.stringify(novoCarrinho));
    calcularTotal(novoCarrinho);
  };
  const removerDoCarrinho = (id: number) => {
    const atualizarCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(atualizarCarrinho);
    localStorage.setItem("itensCarrinho", JSON.stringify(atualizarCarrinho));
    calcularTotal(atualizarCarrinho);
  };

  return (
    <Box
      pt={10}
      px={4}
      bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
    >
      <Heading textAlign="center" mb={10}>
        Carrinho
      </Heading>
      {carrinho.length === 0 ? (
        <Text textAlign="center">Seu carrinho está vazio</Text>
      ) : (
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={8}>
          <Box>
            {carrinho.map((produto) => (
              <Box
                key={produto.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                borderColor="gray.400"
                bg="white"
                mb={4}
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  bg="white"
                  p={4}
                >
                  <Text fontWeight="bold">{produto.nome}</Text>
                  <Button
                    fontWeight="bold"
                    borderRadius="md"
                    style={{ borderColor: "black" }}
                    bg="red.500"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, gray.400)",
                    }}
                    onClick={() => removerDoCarrinho(Number(produto.id))}
                  >
                    Remover
                  </Button>
                </Flex>
                <Flex p={4} alignItems="center">
                  <Image
                    src={produto.urlImage}
                    alt={produto.nome}
                    boxSize="150px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                  <Box ml={4}>
                    <Text>{produto.descricao}</Text>
                    <Text fontWeight="bold">R$ {produto.preco}</Text>
                    <Flex mt={2} alignItems="center">
                      <Button
                        size="sm"
                        bg="transparent"
                        _hover={{
                          bgGradient: "linear(to-r, red.500, gray.400)",
                        }}
                        onClick={() =>
                          decrementarQuantidade(Number(produto.id))
                        }
                      >
                        -
                      </Button>
                      <Input
                        value={produto.quantidade || 1}
                        readOnly
                        size="sm"
                        width="50px"
                        border="none"
                        fontWeight="bold"
                        textAlign="center"
                      />
                      <Button
                        size="sm"
                        onClick={() =>
                          incrementarQuantidade(Number(produto.id))
                        }
                        bg="transparent"
                        _hover={{
                          bgGradient: "linear(to-r, green.500, gray.200)",
                        }}
                      >
                        +
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Box>
          <Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
              <Box bg="white" p={4} fontWeight="bold" textAlign="center">
                Resumo
              </Box>
              <Box p={4} bg="white" textAlign="center">
                <Text>
                  Valor dos Produtos:{" "}
                  <Text as="span" fontWeight="bold">
                    R$ {total.toFixed(2)}
                  </Text>
                </Text>
                <Text>
                  Frete:{" "}
                  <Text as="span" fontWeight="bold">
                    R$ {frete.toFixed(2)}
                  </Text>
                </Text>
                <Text>
                  Valor à vista no Pix:{" "}
                  <Text as="span" fontWeight="bold">
                    R$ {(total * 0.9).toFixed(2)}
                  </Text>
                </Text>
                <Text>
                  Total:{" "}
                  <Text as="span" fontWeight="bold">
                    R$ {(total + frete).toFixed(2)}{" "}
                  </Text>
                </Text>
                <Flex justifyContent="center" mt={4}>
                  <BotaoComprar />
                </Flex>
                <NavLink to="/">
                  <Button
                    color="black"
                    fontWeight="bold"
                    borderRadius="md"
                    bg="yellow.200"
                    mt={2}
                    style={{ borderColor: "black" }}
                    _hover={{
                      bgGradient: "linear(to-r, yellow.500, orange.500)",
                    }}
                  >
                    Continuar comprando
                  </Button>
                </NavLink>
              </Box>
            </Box>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              mb="120px"
            >
              <Box bg="white" p={4} fontWeight="bold" textAlign="center">
                Entrega
              </Box>
              <Box p={4} bg="white">
                <Flex mb={3}>
                  <Input placeholder="CEP" />
                  <Button
                    ml={2}
                    fontWeight="bold"
                    borderRadius="md"
                    bg="blue.200"
                    style={{ borderColor: "black" }}
                    _hover={{
                      bgGradient: "linear(to-r, purple.500, blue.500)",
                    }}
                  >
                    OK
                  </Button>
                </Flex>
                <Text>
                  <NavLink to="#">Não lembro meu CEP</NavLink>
                </Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      )}
    </Box>
  );
};

export default Cart;
