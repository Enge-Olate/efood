import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import logo from "../../assets/logo.png";
import FoodList from "../../components/FoodList";
import Banner from "../../components/Banner";
import { getIdBistro } from "../../services/getIdBistro";
import { useAppSelector } from "../../hooks/appSelector";
import { useAppDispatch } from "../../hooks/appDispatch";
import { open } from "../../store/reducers/cart";
import Loader from "../../components/Loader";
export default function Perfil() {
  const { id } = useParams();
  const [bistro, setBistro] = useState<Product | null>(null);
  const {items} = useAppSelector((state)=> state.cart);
  const dispatch = useAppDispatch();
  const openCart = ()=>{
    dispatch(open());
  }
  useEffect(() => {
    getIdBistro(Number(id))
    .then((data)=> setBistro(data))
    .catch((Error)=>console.log("Erro: ", Error));
  }, [id]);
  if (!bistro) {
    return (
      <>
        <Header
          variant="default"
          logo={logo}
          text="Restaurante"
          infoCar={`${items.length} produto(s) no carrinho`}
          Click={()=> openCart()}
        />
        <Loader title="Carregando cardápio do restaurante"/>
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
        infoCar={`${items.length} produto(s) no carrinho`}
        Click={()=> openCart()}
      />
      <Banner
        imagem={bistro.capa}
        titleGen={bistro.tipo}
        titleBistro={bistro.titulo}
      />
      <FoodList itens={bistro.cardapio} />
      <Footer />
      <Toaster position="top-center"/>
    </>
  );
}
