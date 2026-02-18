import { Container } from "../../globalStyle";
import pizza from "../../assets/pizza.png";
import fechar from "../../assets/close_1.png";
import Button from "../Button";
import { Modal, ModalContent, ModalInfo } from "./style";
type Props = {
  isVisible?: boolean;
  onClose?: () => void;
};
export default function FoodModal({ isVisible }: Props) {
if(isVisible === true)
  return (
    <Container>
      <Modal>
        <header>
          <img src={fechar} alt="Clique para fechar"/>
        </header>
        <ModalContent>
          <img src={pizza} alt="Pizza" />
          <ModalInfo>
            <h3>Pizza marguerita</h3>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião. Serve: de 2 a 3 pessoas
          </p>
          <Button title="Adicionar ao carrinho" type="button" variant="primary" />
          </ModalInfo>
        </ModalContent>
      </Modal>
    </Container>
  );
}
