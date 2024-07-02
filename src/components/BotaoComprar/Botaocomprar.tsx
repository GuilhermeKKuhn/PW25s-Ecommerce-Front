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
      bg="blue.500"
      color="white"
      fontWeight="bold"
      borderRadius="lg"
      _hover={{ bg: "blue.600" }}
      _focus={{ bg: "blue.700" }}
    >
      Finalizar Pedido
    </Button>
  );
};

export default BotaoComprar;
