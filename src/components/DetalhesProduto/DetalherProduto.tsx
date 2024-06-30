export function DetalhesProduto() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/400x300"
            className="img-fluid"
            alt="Nome do Produto"
          ></img>
        </div>
        <div className="col-md-6">
          <h2>Nome do Produto</h2>
          <p className="lead">Descrição curta do produto aqui.</p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            consectetur, nisi eget fermentum finibus, enim tellus ultricies
            ipsum, id ultrices nulla ipsum et orci.
          </p>
          <p className="font-weight-bold">Preço: R$ 99,99</p>

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
