import { Button, Flex, Heading } from "@chakra-ui/react";
import { FiltroCategoriaProps, ICategory } from "@/commons/interfaces";

const FiltroCategoria = ({
  categories,
  onCategoryClick,
}: FiltroCategoriaProps) => {
  return (
    <Flex justify="center" wrap="wrap" mb={4} bg="white" >
      <Button
        bg="white"
        onClick={() => onCategoryClick(0)}
        mr={2}
        _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
      >
      Todos
      </Button>
      {categories.map((categoria: ICategory) => (
        <Button
          key={categoria.id}
          onClick={() => onCategoryClick(categoria.id)}
          mr={2}
        >
          {categoria.categoria}
        </Button>
      ))}
    </Flex>
  );
};

export default FiltroCategoria;
