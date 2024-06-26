import CardProduto from "@/components/Cards/Card";
import NavBar from "@/components/NavBar/NavBar";
import { Slider } from "@chakra-ui/react";

export function HomePage() {
  return (
    <>
      <Slider />
      <NavBar />
      <div className="container">
        <div>{<CardProduto />}</div>
        <div>{<CardProduto />}</div>
        <div>{<CardProduto />}</div>
        <div>{<CardProduto />}</div>
        <div>{<CardProduto />}</div>
        <div>{<CardProduto />}</div>
      </div>
    </>
  );
}
