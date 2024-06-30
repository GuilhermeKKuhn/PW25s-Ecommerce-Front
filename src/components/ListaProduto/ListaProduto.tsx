import { IProduct, IListaProdutosProps } from "@/commons/interfaces";
import CardProduto from "@/components/CardProduto/CardProduto";
import { Flex } from "@chakra-ui/react";

const ListaProdutos = ({ produtos }: IListaProdutosProps) => {
  return (
    <Flex wrap="wrap" justifyContent="flex-start">
      {produtos.map((produto: IProduct) => (
        <CardProduto key={produto.id} produto={produto} />
      ))}
    </Flex>
  );
};
export default ListaProdutos;
