import Bistro from "../Bistro";
import sushi from "../../assets/sushi.png";
import massa from "../../assets/masssa.png";
import pizza from "../../assets/pizza.png";
import { ContainerListBistro, List } from "./style";
import { Container } from "../../globalStyle";
export default function ListBistro() {
  return (
    <Container>
      <ContainerListBistro>
        <List>
          <Bistro
            name="Hioki Sushi"
            image={sushi}
            rating={4.9}
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            tags={["Destaque da semana", "Japonesa"]}
          />
          <Bistro
            name="La Dolce Vita Trattoria"
            image={massa}
            rating={4.6}
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            tags={["Italiana"]}
          />
          <Bistro
            name="Pizza Nona"
            image={pizza}
            rating={4.7}
            description="Experimente nossas pizzas, o melhor da culinária Italiana com uma pitada brasiliana no conforto da sua casa! Experimente a Italia sem sair do lar com nosso delivery!"
            tags={["Rodízio"]}
          />
        </List>
      </ContainerListBistro>
    </Container>
  );
}
