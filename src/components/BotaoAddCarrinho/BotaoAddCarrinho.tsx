import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { IProduct } from "@/commons/interfaces";

const BotaoAddCarrinho = ({ produto }: { produto: IProduct }) => {
  const [noCarrinho, setNoCarrinho] = useState(false);

  useEffect(() => {
    const itensCarrinho = localStorage.getItem("itensCarrinho");
    if (itensCarrinho) {
      const parsedCartItems: IProduct[] = JSON.parse(itensCarrinho);
      const found = parsedCartItems.some((item) => item.id === produto.id);
      setNoCarrinho(found);
    }
  }, [produto.id]);

  const addNoCarrinho = () => {
    const itensCarrinho = localStorage.getItem("itensCarrinho");
    let itens: IProduct[] = [];

    if (itensCarrinho) {
      itens = JSON.parse(itensCarrinho);
      const produtoExistente = itens.find((item) => item.id === produto.id);
      if (produtoExistente) {
        return;
      }
    }
    itens.push(produto);
    localStorage.setItem("itensCarrinho", JSON.stringify(itens));
    setNoCarrinho(true);
  };

  const removerDoCarrinho = () => {
    let carrinho: IProduct[] = [];
    const itensCarrinho = localStorage.getItem("itensCarrinho");
    if (itensCarrinho) {
      carrinho = JSON.parse(itensCarrinho);
      const updatedCarrinho = carrinho.filter(
        (item: IProduct) => item.id !== produto.id
      );
      localStorage.setItem("itensCarrinho", JSON.stringify(updatedCarrinho));
      setNoCarrinho(false);
    }
  };

  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        noCarrinho ? removerDoCarrinho() : addNoCarrinho();
      }}
      px={4}
      py={2}
      bg={noCarrinho ? "gray.400" : "yellow.400"}
      fontSize="sm"
      color="gray.900"
      fontWeight="bold"
      borderRadius="lg"
      ml={2}
      _hover={{
        bg: noCarrinho ? "gray.500" : "yellow.500",
      }}
      _focus={{
        bg: noCarrinho ? "gray.600" : "yellow.600",
      }}
      disabled={noCarrinho}
    >
      {noCarrinho ? "Remover do Carrinho" : "Adicionar ao Carrinho"}
    </Button>
  );
};

export default BotaoAddCarrinho;
