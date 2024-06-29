//esse card de produto é só pra ser padrao pra todos os cards serem assim, se for alterar vai ser somente o estilo do card nao como eles vao aparecer na pagina,
//isso é no ListaProduto

import { Flex, Box, chakra, Image, HStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { IProduct } from "@/commons/interfaces";

const CardProduto = ({ produto }: { produto: IProduct }) => {
  console.log("Produto recebido pelo CardProduto:", produto);
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={10}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="3xl"
        mx="auto"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        shadow="xl"
        rounded="lg"
        overflow="hidden"
        flexDirection={{ base: "column", md: "row" }}
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
          p={6}
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

          <HStack spacing={1} mt={2}>
            <StarIcon
              color="gray.700"
              _dark={{
                color: "gray.300",
              }}
            />
            <StarIcon
              color="gray.700"
              _dark={{
                color: "gray.300",
              }}
            />
            <StarIcon
              color="gray.700"
              _dark={{
                color: "gray.300",
              }}
            />
            <StarIcon color="gray.500" />
            <StarIcon color="gray.500" />
          </HStack>

          <Flex mt={3} justifyContent="flex-end">
            <chakra.h3 color="white" fontWeight="bold" fontSize="lg">
              {produto.preco}
            </chakra.h3>
            <chakra.button
              px={4}
              py={2}
              bg="yellow.400"
              fontSize="sm"
              color="gray.900"
              fontWeight="bold"
              borderRadius="lg"
              ml={2}
              _hover={{
                bg: "yellow.500",
              }}
              _focus={{
                bg: "yellow.600",
              }}
            >
              Adicionar no carrinho
            </chakra.button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CardProduto;
