import CardProduto from "@/components/Cards/Card";
import NavBar from "@/components/NavBar/NavBar";
import Slider from "@/components/Slider/Slider";
import Footer from "@/components/Footer/footer";

import { Center, Heading, SimpleGrid } from "@chakra-ui/react";

export function HomePage() {
  return (
    <>
      <NavBar />
      <Slider />
      <Heading mt={20} textAlign="center" mb={5}>Produtos</Heading>
      <div className="container">
        <SimpleGrid columns={{ base: 1, md: 3}} >
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
        </SimpleGrid>
      </div>
      <Footer />
    </>
  );
}
