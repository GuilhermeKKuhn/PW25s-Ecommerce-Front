//esse card de produto é só pra ser padrao pra todos os cards serem assim, se for alterar vai ser somente o estilo do card nao como eles vao aparecer na pagina,
//isso é no ListaProduto

import { Flex, Box, chakra, Image, Heading, Button } from "@chakra-ui/react";
import { IProduct } from "@/commons/interfaces";

const CardProduto = ({ produto }: { produto: IProduct }) => {
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
          w={2 / 3}
          p={{
            base: 4,
            md: 4,
          }}
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
            {produto.preco}.
          </Heading>

          <Flex mt={3} justifyContent="flex-end">
            <Button
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
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CardProduto;
