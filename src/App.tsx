import { Image } from "@chakra-ui/react";
import  HomePage from "./pages/HomePage/homePage";
import { Slider, SliderProps, Slide} from './components/Slider'

import "./App.css";
import CardProduto from "./components/Cards/Card";
import { UserSingupPage } from "./pages/UserSingupPage";
import { UserLoginPage } from "./pages/UserLoginPage";

function App() {

  return (
    <>

      {<HomePage />}

      {<Slider></Slider>}

      <div className="container">
        <div>
          {<CardProduto/>}
        </div>
        <div>
          {<CardProduto/>}
        </div>
        <div>
          {<CardProduto/>}
        </div>
        <div>
          {<CardProduto/>}
        </div>
        <div>
          {<CardProduto/>}
        </div>
        <div>
          {<CardProduto/>}
        </div>
      </div>
    </>
  );
}
export default App;
