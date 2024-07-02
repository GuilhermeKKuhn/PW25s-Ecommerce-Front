import {
  Flex,
  Box,
  Heading,
  Image,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { IProduct } from "@/commons/interfaces";
import produtoService from "@/services/ProdutoService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BotaoAddCarrinho from "../BotaoAddCarrinho/BotaoAddCarrinho";
import "./style.css";

export function DetalhesProduto() {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<IProduct>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    let response;
    if (!id) {
      console.log("ID do produto não está definido");
      navigate("/");
      return;
    }
    try {
      response = await produtoService.findById(parseInt(id));
      setProduto(response);
    } catch (error: any) {
      response = error.response;
    }
    return response.data;
  };

  if (!produto) {
    return null;
  }

  return (
    <Box pb={40} pt={10} bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
      <Heading textAlign="center" mb={20}>Produto</Heading>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
      >
        <Box w={{ base: '100%', md: '50%' }} bgSize="cover" mb={{ base: 8, md: 0 }} >
          <Image
            src={produto.urlImage}
            alt={produto.nome}
            borderRadius={25}
            objectFit="cover"
            boxSize="500px"
          />
        </Box>
        <Box flexDirection="column" alignItems="center" ml={{ md: 8 }}  boxSize={500} borderRadius={25}>
          <Heading size="lg" textAlign="center" mt={10} mb={10}>
            {produto?.nome}
          </Heading>
          <Box mb={10} textAlign="center">
            <p>{produto?.descricao}</p>
          </Box>
          <Box fontWeight="bold" fontSize="xl" textAlign="center">
            Preço: R$ {produto?.preco}
          </Box>
          <Heading 
          size="sm" 
          fontWeight="none" 
          textAlign="center" 
          mb={4}>
          Em até 10x de R$ {(produto?.preco / 7).toFixed(2)} sem juros no cartão</Heading>

          <form className='pagamento'>
            <FormControl mb={4}>
              <FormLabel htmlFor="tipoPagamento">
                Selecione o Tipo de Pagamento:
              </FormLabel>
              <Select id="tipoPagamento" 
              placeholder="Selecione"  
              color='black'
                fontWeight='bold'
                borderRadius='md'
                style={{ borderColor: "black" }}
                _hover={{
                  bgGradient: 'linear(to-r, gray.500, yellow.500)'}}>
                <option>Cartão de Crédito</option>
                <option>Boleto Bancário</option>
                <option>Pix</option>
                <option>Transferência Bancária</option>
              </Select>
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="tipoFrete">Selecione o Tipo de Frete:</FormLabel>
              <Select id="tipoFrete" 
              placeholder="Selecione" 
              color='black'
              fontWeight='bold'
              borderRadius='md'
              style={{ borderColor: "black" }}
              _hover={{
                bgGradient: 'linear(to-r, gray.500, yellow.500)'}}>
                <option>Frete Normal (5-7 dias úteis)</option>
                <option>Frete Expresso (2-3 dias úteis)</option>
                <option>Retirada na Loja</option>
              </Select>
            </FormControl>

            <Flex justifyContent="center">
              <BotaoAddCarrinho produto={produto} />
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
export default DetalhesProduto;
