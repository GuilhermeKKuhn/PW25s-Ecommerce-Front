import { useState, useEffect } from "react";
import { ICategory, IProduct } from "@/commons/interfaces";
import categoriaService from "@/services/CategoriaService";
import produtoService from "@/services/ProdutoService";
import FiltroCategoria from "../FiltroCategoria/FiltroCategoria";
import ListaProduto from "../ListaProduto/ListaProduto";
import { Heading, Box, Flex, Button} from "@chakra-ui/react";

const CategoriaProduto = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; 

  useEffect(() => {
    fetchCategories();
    fetchAllProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await categoriaService.findAll();
      setCategories(response);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  const fetchAllProducts = async () => {
    try {
      const response = await produtoService.findAll();
      setAllProducts(response);
      setFilteredProducts(response); 
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleCategoryClick = async (categoryId: number) => {
    if (categoryId === 0) {
      setFilteredProducts(allProducts);
    } else {
      try {
        const response = await produtoService.findbyCategoria(categoryId);
        setFilteredProducts(response);
      } catch (error) {
        console.error("Erro ao buscar produtos por categoria:", error);
      }
    }
    setCurrentPage(1); 
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredProducts.length);

  const hasNextPage = filteredProducts.length > endIndex;

  return (
    <>
      <Box pt={20} bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
        <Heading mb={10} textAlign="center">
          Produtos
        </Heading>
        <Flex justifyContent="center" mb={4}>
          <FiltroCategoria
            categories={categories}
            onCategoryClick={handleCategoryClick}
          />
        </Flex>
        <Flex justifyContent="center">
          <Box w="full" maxW="95%">
            <ListaProduto
              produtos={filteredProducts}
              currentPage={currentPage}
              pageSize={pageSize}
            />
          </Box>
        </Flex>
        <Flex justifyContent="center" mt={4} pb={10}>
          <Button
            onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
          <Button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            ml={2}
            disabled={!hasNextPage}
          >
            Próxima
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default CategoriaProduto;
