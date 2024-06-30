import { Button } from "@chakra-ui/react";
import { FiltroCategoriaProps, ICategory } from "@/commons/interfaces";

const FiltroCategoria = ({
  categories,
  onCategoryClick,
}: FiltroCategoriaProps) => {
  return (
    <div className="d-flex justify-content-center">
      <Button
        onClick={() => onCategoryClick(0)}
        className="btn me-2 mb-2 btn-secondary"
      >
        Todos
      </Button>
      {categories.map((categoria: ICategory) => (
        <Button
          key={categoria.id}
          onClick={() => onCategoryClick(categoria.id)}
          className="btn me-2 mb-2 btn-secondary"
        >
          {categoria.categoria}
        </Button>
      ))}
    </div>
  );
};

export default FiltroCategoria;
