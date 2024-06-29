import NavBar from "@/components/NavBar/NavBar";
import Slider from "@/components/Slider/Slider";
import Footer from "@/components/Footer/footer";
import ListaProduto from "@/components/ListaProduto/ListaProduto";

export function HomePage() {
  return (
    <>
      <NavBar />
      <Slider />
      <ListaProduto />
      <Footer />
    </>
  );
}
