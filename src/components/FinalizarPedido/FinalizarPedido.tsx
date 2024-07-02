import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [pedidoConcluido, setPedidoConcluido] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPedidoConcluido(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      {pedidoConcluido ? (
        <div className="alert alert-success" role="alert">
          Pedido concluído! Você será redirecionado para a página inicial.
        </div>
      ) : (
        <div className="alert alert-info" role="alert">
          Processando pagamento...
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
