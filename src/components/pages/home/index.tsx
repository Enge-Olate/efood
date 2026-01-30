import Bistro from "../../Bistro";
import Footer from "../../Footer";
import Header from "../../Header";
import sushi from "../../../assets/sushi.png"
export default function Home(){
    return(
        <>
            <Header/>
            <Bistro
                name="Hioki Sushi "
                image={sushi}
                rating={4.9}
                description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
                tags={["Destaque da semana", "Japonesa"]}
            />
            <Footer/>
        </>
    );
}