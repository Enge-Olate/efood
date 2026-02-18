import { Container } from "../../globalStyle";
import pizza from "../../assets/pizza.png";
import fechar from "../../assets/close_1.png";
import Button from "../Button";
import { Modal, ModalContent, ModalInfo } from "./style";
type Props={
  isVisible: boolean;
  clolseModal:()=> void;
}
export default function FoodModal({isVisible, clolseModal}: Props) {
  if(!isVisible)return null;
  
  return (
    <Container onClick={clolseModal}>
      <Modal onClick={(e)=> e.stopPropagation()}>
        <header>
          <img
            src={fechar}
            alt="Clique para fechar"
            onClick={clolseModal}
          />
        </header>
        <ModalContent>
          <img src={pizza} alt="Pizza" />
          <ModalInfo>
            <h3>Pizza Marguerita</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <p>Serve: de 2 a 3 pessoas</p>
            <Button
              title="Adicionar ao carrinho - R$60,90"
              type="button"
              variant="primary"
            />
          </ModalInfo>
        </ModalContent>
      <div className="overlay"></div>
      </Modal>
    </Container>
  );
}
