import AuthService from "@/services/AuthService";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BotaoComprar = () => {
  const navigate = useNavigate();

  const verificarLogin = () => {
    if (AuthService.isAuthenticated()) {
    } else {
      navigate("/login");
    }
  };

  return (
    <Button
      onClick={verificarLogin}
      px={4}
      py={2}
      color='black'
      fontWeight='bold'
      bg="green.200"
      borderRadius='md'
      style={{ borderColor: "black" }}
      _hover={{
        bgGradient: 'linear(to-r, green.500, yellow.500)'
      }}>
      Finalizar Pedido
    </Button>
  );
};

export default BotaoComprar;
