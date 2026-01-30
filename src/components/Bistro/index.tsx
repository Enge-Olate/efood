import { Container } from "../../globalStyle";
import { Card, DivInfos, InfoBistro, TitleBistro } from "./style";
import sushi from "../../assets/sushi.png";
import Button from "../Button";
export default function Bistros() {
    return (

        <Container>
            <Card>
                <img src={sushi} alt="Comida japonesa." />
                <DivInfos>
                    <div>
                    <TitleBistro>Hioki Sushi</TitleBistro>
                    <span>4.9 ⭐</span>
                    </div>
                    <InfoBistro>
                        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                    </InfoBistro>
                    <Button />
                </DivInfos>
            </Card>
        </Container>
    );

}