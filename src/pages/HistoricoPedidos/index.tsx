import Footer from "@/components/Footer/footer";
import HistPedidos from "@/components/HistPedidos/HistPedidos";
import NavBar from "@/components/NavBar/NavBar";
import { Box, Flex } from "@chakra-ui/react";

export function HistoricoPedidos() {
  return (
    <>
      <Flex direction="column" minHeight="100vh" bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
      <NavBar />
      <Box flex="1">
        <HistPedidos />
      </Box>
      <Footer />
    </Flex>
    </>
  );
}
