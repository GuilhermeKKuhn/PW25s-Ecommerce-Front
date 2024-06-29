import { IProduct } from "@/commons/interfaces";
import { useEffect, useState } from "react";
import CardProduto from "@/components/CardProduto/CardProduto";
import { Flex } from "@chakra-ui/react";
import produtoService from "@/services/ProdutoService";

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
      {/*ajusta aqui para deixar os cards da maniera correta 
      mas somente essa parte do flex tem que ser alterada o data é oque tras os dados dos cards*/}
      <Flex wrap="wrap" justifyContent="center">
        {data.map((produto: IProduct) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </Flex>
    </>
  );
};
export default ListaProdutos;
