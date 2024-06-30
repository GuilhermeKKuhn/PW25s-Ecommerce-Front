import { IProduct } from "@/commons/interfaces";
import { useEffect, useState } from "react";
import CardProduto from "@/components/CardProduto/CardProduto";
import produtoService from "@/services/ProdutoService";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Box,
} from "@chakra-ui/react";

const ListaProdutos = () => {
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await produtoService.findAll();
      setData(response);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  return (
    <>
  <Box bg="white" py={10} >
      <Heading mt={10} textAlign="center">
        Produtos
      </Heading>
      <Flex justify="center" mt={10}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={6}
          w="100%"
          maxW="95%"
          px={4}
          bg="white"
          borderRadius="md"
          p={4}
        >
          {data.map((produto: IProduct) => (
            <GridItem key={produto.id}>
              <CardProduto produto={produto} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
    </>
  );
};
export default ListaProdutos;
