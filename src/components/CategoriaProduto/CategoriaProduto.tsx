import { useState, useEffect } from "react";
import { ICategory, IProduct } from "@/commons/interfaces";
import categoriaService from "@/services/CategoriaService";
import produtoService from "@/services/ProdutoService";
import FiltroCategoria from "../FiltroCategoria/FiltroCategoria";
import ListaProduto from "../ListaProduto/ListaProduto";

const CategoriaProduto = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

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
      setFilteredProducts(response); // puxa todos os produtos quando é carregado
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleCategoryClick = async (categoryId: number) => {
    if (categoryId === 0) {
      setFilteredProducts(allProducts); // puxa todos os produtos
    } else {
      try {
        const response = await produtoService.findbyCategoria(categoryId);
        setFilteredProducts(response);
      } catch (error) {
        console.error("Erro ao buscar produtos por categoria:", error);
      }
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <FiltroCategoria
            categories={categories}
            onCategoryClick={handleCategoryClick}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ListaProduto produtos={filteredProducts} />
        </div>
      </div>
    </>
  );
};

export default CategoriaProduto;
