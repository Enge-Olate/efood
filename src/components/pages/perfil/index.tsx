import Footer from "../../Footer";
import Header from "../../Header";
import logo from "../../../assets/logo.png";
export default function Perfil(){
    return(
        <>
        <Header 
        variant="default" 
        logo={logo}
        text="Restaurante"
        infoCar="0 produto(s) no carrinho"
        />
        <Footer />
        </>
    );
}