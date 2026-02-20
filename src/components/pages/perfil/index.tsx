import Footer from "../../Footer";
import Header from "../../Header";
import logo from "../../../assets/logo.png";
import FoodList from "../../FoodList";
import Banner from "../../Banner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../../../types";
import { getIdBistro } from "../../../services/getIdBistro";
import { Container } from "../../../globalStyle";
export default function Perfil() {
  const { id } = useParams();
  const [bistro, setBistro] = useState<Product | null>(null);
  useEffect(() => {
    getIdBistro(Number(id))
    .then(setBistro)
    .catch((Error)=>console.log("Erro: ", Error));
  }, [id]);
  if (!bistro) {
    return (
      <>
        <Header
          variant="default"
          logo={logo}
          text="Restaurante"
          infoCar="0 produto(s) no carrinho"
        />
        <Container>
          <h3>Carregando cardapio...</h3>
        </Container>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header
        variant="default"
        logo={logo}
        text="Restaurante"
        infoCar="0 produto(s) no carrinho"
      />
      <Banner
        imagem={bistro.capa}
        titleGen={bistro.tipo}
        titleBistro={bistro.titulo}
      />
      <FoodList itens={bistro.cardapio} />
      <Footer />
    </>
  );
}
