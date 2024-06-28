import CardProduto from "@/components/Cards/Card";
import NavBar from "@/components/NavBar/NavBar";
import Slider from "@/components/Slider/Slider";
import Footer from "@/components/Footer/footer";

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
      <Footer />
    </>
  );
}
