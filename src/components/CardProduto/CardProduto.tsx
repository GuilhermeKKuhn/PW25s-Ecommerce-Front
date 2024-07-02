//esse card de produto é só pra ser padrao pra todos os cards serem assim, se for alterar vai ser somente o estilo do card nao como eles vao aparecer na pagina,
//isso é no ListaProduto

import { Flex, Box, chakra, Image, Heading } from "@chakra-ui/react";
import { IProduct } from "@/commons/interfaces";
import { NavLink } from "react-router-dom";
import BotaoAddCarrinho from "../BotaoAddCarrinho/BotaoAddCarrinho";

const CardProduto = ({ produto }: { produto: IProduct }) => {
  return (
    <Flex
      bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
      p={4}
      w="100%"
      h="100%"
      alignItems="stretch"
      justifyContent="center"
      
    >
      <NavLink
        to={`/produto/${produto.id}`}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <Flex
          maxW="2xl"
          bg="white"
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          flexDirection={{ base: "column", md: "row" }}
          h="100%"
          _hover={{ cursor: "pointer" }}
          position="relative"
        >
          <Box w={{ base: "100%", md: "50%" }} bgSize="cover">
            <Image
              src={produto.urlImage}
              alt={produto.nome}
              objectFit="cover"
              boxSize="100%"
            />
          </Box>

          <Box
            w={{ base: "100%", md: "50%" }}
            p={4}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <chakra.h2
              fontSize="xl"
              fontWeight="bold"
              color="gray.800"
              mb={2}
              _dark={{
                color: "white",
              }}
            >
              {produto.nome}
            </chakra.h2>

            <chakra.p
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              {produto.descricao}
            </chakra.p>

            <Heading color={"gray.900"} fontSize={"sm"}>
              R$ {produto.preco}
            </Heading>
            <Flex mt={3} justifyContent="center">
              <BotaoAddCarrinho produto={produto} />
            </Flex>
          </Box>
        </Flex>
      </NavLink>
    </Flex>
  );
};

export default CardProduto;
