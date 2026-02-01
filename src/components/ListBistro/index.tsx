import Bistro from "../Bistro";
import sushi from "../../assets/sushi.png";
import { ContainerListBistro, List } from "./style";
import { Container } from "../../globalStyle";
export default function ListBistro() {
  return (
    <Container>
      <ContainerListBistro>
        <List>
          <Bistro
            name="Hioki Sushi "
            image={sushi}
            rating={4.9}
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            tags={["Destaque da semana", "Japonesa"]}
          />
          <Bistro
            name="Hioki Sushi "
            image={sushi}
            rating={4.9}
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            tags={["Destaque da semana", "Japonesa"]}
          />
          <Bistro
            name="Hioki Sushi "
            image={sushi}
            rating={4.9}
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            tags={["Destaque da semana", "Japonesa"]}
          />
          <Bistro
            name="Hioki Sushi "
            image={sushi}
            rating={4.9}
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            tags={["Destaque da semana", "Japonesa"]}
          />
        </List>
      </ContainerListBistro>
    </Container>
  );
}
