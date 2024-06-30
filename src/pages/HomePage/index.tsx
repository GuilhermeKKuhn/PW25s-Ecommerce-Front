import NavBar from "@/components/NavBar/NavBar";
import Slider from "@/components/Slider/Slider";
import Footer from "@/components/Footer/footer";
import CategoriaProduto from "@/components/CategoriaProduto/CategoriaProduto";

export function HomePage() {
  return (
    <>
      <NavBar />
      <Slider />
      <CategoriaProduto />
      <Footer />
    </>
  );
}
