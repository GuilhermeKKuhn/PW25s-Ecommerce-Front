import { IProduct, IListaProdutosProps } from "@/commons/interfaces";
import CardProduto from "@/components/CardProduto/CardProduto";
import { Flex } from "@chakra-ui/react";
import produtoService from "@/services/ProdutoService";

const ListaProdutos = ({ produtos }: IListaProdutosProps) => {
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
