import { Button, Flex, Heading } from "@chakra-ui/react";
import { FiltroCategoriaProps, ICategory } from "@/commons/interfaces";

const FiltroCategoria = ({
  categories,
  onCategoryClick,
}: FiltroCategoriaProps) => {
  return (
    <Flex justify="center" wrap="wrap" pb={4} bg="transparent" >
      <Button
        bg="white"
        onClick={() => onCategoryClick(0)}
        mr={2}
        style={{ borderColor: "black" }}
        _hover={{
          bgGradient: 'linear(to-r, gray.500, yellow.500)'
        }}
      >
        Todos
      </Button>
      {categories.map((categoria: ICategory) => (
        <Button
          key={categoria.id}
          onClick={() => onCategoryClick(categoria.id)}
          mr={2}
          style={{ borderColor: "black" }}
          _hover={{
            bgGradient: 'linear(to-r, gray.500, yellow.500)'
          }}
        >
          {categoria.categoria}
        </Button>
      ))}
    </Flex>
  );
};

export default FiltroCategoria;
