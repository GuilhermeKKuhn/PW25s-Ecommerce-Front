import { IProduct } from "@/commons/interfaces";
import { chakra } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BotaoComprar from "../BotaoComprar/Botaocomprar";

const Cart = () => {
  const [carrinho, setCarrinho] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);
  const frete = 10; // deixei um frete fixo só pra ficar bonitinho
  const navigation = useNavigate();

  useEffect(() => {
    const itensCarrinho = localStorage.getItem("itensCarrinho");
    if (itensCarrinho) {
      const parsedCartItems: IProduct[] = JSON.parse(itensCarrinho);
      setCarrinho(parsedCartItems);
      calcularTotal(parsedCartItems);
    }
  }, []);

  const calcularTotal = (produtos: IProduct[]) => {
    const totalCalculado = produtos.reduce(
      (acc, item) => acc + (item.preco * item.quantidade || 0),
      0
    );
    setTotal(totalCalculado);
  };

  const incrementarQuantidade = (id: number) => {
    const novoCarrinho = carrinho.map((item) =>
      item.id === id
        ? { ...item, quantidade: (item.quantidade || 0) + 1 }
        : item
    );
    setCarrinho(novoCarrinho);
    localStorage.setItem("itensCarrinho", JSON.stringify(novoCarrinho));
    calcularTotal(novoCarrinho);
  };

  const decrementarQuantidade = (id: number) => {
    const novoCarrinho = carrinho.map((item) =>
      item.id === id && item.quantidade && item.quantidade > 1
        ? { ...item, quantidade: item.quantidade - 1 }
        : item
    );
    setCarrinho(novoCarrinho);
    localStorage.setItem("itensCarrinho", JSON.stringify(novoCarrinho));
    calcularTotal(novoCarrinho);
  };

  const removerDoCarrinho = (id: number) => {
    const atualizarCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(atualizarCarrinho);
    localStorage.setItem("itensCarrinho", JSON.stringify(atualizarCarrinho));
    calcularTotal(atualizarCarrinho);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Carrinho</h2>
      {carrinho.length === 0 ? (
        <chakra.p textAlign="center">Seu carrinho está vazio</chakra.p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {carrinho.map((produto) => (
              <div className="card mb-3" key={produto.id}>
                <div className="card-header d-flex justify-content-between align-items-center">
                  <span>{produto.nome}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removerDoCarrinho(produto.id)}
                  >
                    Remover
                  </button>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <img
                      src={produto.urlImage}
                      alt={produto.nome}
                      className="img-thumbnail"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    ></img>
                    <div className="ml-3">
                      <p>{produto.descricao}</p>
                      <p>R$ {produto.preco}</p>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => decrementarQuantidade(produto.id)}
                          >
                            -
                          </button>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          value={produto.quantidade || 1}
                          onChange={() => {}}
                          min="1"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => incrementarQuantidade(produto.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Resumo</div>
              <div className="card-body">
                <p>Valor dos Produtos: R$ {total.toFixed(2)}</p>
                <p>Frete: R$ {frete.toFixed(2)}</p>
                <p>Total a prazo: R$ {(total + frete).toFixed(2)}</p>
                <p>Valor à vista no Pix: R$ {(total * 0.9).toFixed(2)}</p>
                <BotaoComprar></BotaoComprar>
                <NavLink to={"/"}>
                  <button className="btn btn-secondary btn-block">
                    Continuar comprando
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-header">Entrega</div>
              <div className="card-body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CEP"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                      OK
                    </button>
                  </div>
                </div>
                <p>
                  <a href="#">Não lembro meu CEP</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
