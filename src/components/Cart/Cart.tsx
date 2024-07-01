const Cart = () => {
  return (
    <div className="container">
      <h1 className="my-4">Carrinho de Compras</h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Produto</th>
              <th scope="col">Preço Unitário</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Produto 1</td>
              <td>R$ 50,00</td>
              <td>2</td>
              <td>R$ 100,00</td>
            </tr>
            <tr>
              <td>Produto 2</td>
              <td>R$ 30,00</td>
              <td>1</td>
              <td>R$ 30,00</td>
            </tr>
            <tr>
              <td colSpan={3} className="text-right subtotal">
                Total
              </td>
              <td className="subtotal">R$ 130,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <a href="#" className="btn btn-primary">
        Finalizar Compra
      </a>
    </div>
  );
};

export default Cart;
