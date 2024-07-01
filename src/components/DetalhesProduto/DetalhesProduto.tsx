import { IProduct } from "@/commons/interfaces";
import produtoService from "@/services/ProdutoService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
      navigate("/"); // Redireciona para a página inicial
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

  console.log(produto);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={produto?.urlImage}
            className="img-fluid"
            alt={produto?.nome}
          ></img>
        </div>
        <div className="col-md-6">
          <h2>{produto?.nome}</h2>
          <p className="lead">{produto?.descricao}</p>
          <p className="font-weight-bold">Preço: R$ {produto?.preco}</p>
          <form>
            <div className="form-group">
              <label htmlFor="tipoPagamento">
                Selecione o Tipo de Pagamento:
              </label>
              <select className="form-control" id="tipoPagamento">
                <option>Cartão de Crédito</option>
                <option>Boleto Bancário</option>
                <option>Pix</option>
                <option>Transferência Bancária</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="tipoFrete">Selecione o Tipo de Frete:</label>
              <select className="form-control" id="tipoFrete">
                <option>Frete Normal (5-7 dias úteis)</option>
                <option>Frete Expresso (2-3 dias úteis)</option>
                <option>Retirada na Loja</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Adicionar ao Carrinho
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DetalhesProduto;
