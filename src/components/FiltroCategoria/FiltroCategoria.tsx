import React, { useState, useEffect } from "react";
import { ICategory } from "@/commons/interfaces";
import categoriaService from "@/services/CategoriaService";

const FiltroCategoria = () => {
  const [data, setData] = useState<ICategory[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await categoriaService.findAll();
      setData(response);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  return (
    <div>
      <div className="category-buttons">
        {data.map((categoria: ICategory) => (
          <button key={categoria.id}>{categoria.categoria}</button>
        ))}
      </div>

      <div className="items">
        {data.map((categoria: ICategory) => (
          <div key={categoria.id} className="item">
            {categoria.categoria}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltroCategoria;
