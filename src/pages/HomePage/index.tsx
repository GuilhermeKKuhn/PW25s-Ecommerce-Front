import CardProduto from "@/components/Cards/Card";
import NavBar from "@/components/NavBar/NavBar";
import Slider from "@/components/Slider/Slider";

export function HomePage() {
  return (
    <>
      <NavBar />
      <Slider />
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
