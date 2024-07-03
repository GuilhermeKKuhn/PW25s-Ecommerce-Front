import { IProduct } from "@/commons/interfaces";
import CardProduto from "@/components/CardProduto/CardProduto";
import { Flex, Grid, GridItem, Box } from "@chakra-ui/react";

interface ListaProdutosProps {
  produtos: IProduct[];
  currentPage: number;
  pageSize: number;
}

const ListaProdutos = ({
  produtos,
  currentPage,
  pageSize,
}: ListaProdutosProps) => {

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, produtos.length);

  const produtosPaginados = produtos.slice(startIndex, endIndex);

  return (
    <>
      <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' py={10}>
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
            {produtosPaginados.map((produto: IProduct) => (
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
