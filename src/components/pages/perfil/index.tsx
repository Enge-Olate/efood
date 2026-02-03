import Footer from "../../Footer";
import Header from "../../Header";
import logo from "../../../assets/logo.png";
import FoodList from "../../FoodList";
import Banner from "../../Banner";
import apresentacao from "../../../assets/apresentacao.png";
export default function Perfil() {
  return (
    <>
      <Header
        variant="default"
        logo={logo}
        text="Restaurante"
        infoCar="0 produto(s) no carrinho"
      />
      <Banner
        imagem={apresentacao}
        titleGen="Italiana"
        titleBistro="Bella Tavola Italiana"
      />
      <FoodList />
      <Footer />
    </>
  );
}
