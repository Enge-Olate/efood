import { Container } from "../../globalStyle";
import { CardProduct, ContainerProduct } from "./style";
import FoodModal from "../FoodModal";
import Button from "../Button";
import type { MenuItem } from "../../types";
import { useState } from "react";
type Props={
  itens: MenuItem[]
}

export default function FoodList({itens}:Props) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [selectedItem, setselectedItem] = useState<MenuItem| null>(null);
  return (
    <Container>
      <ContainerProduct>
        {itens.map((item) => {
          return (
            <CardProduct key={item.id}>
              <img src={item.foto} alt="" />
              <h4>{item.nome}</h4>
              <p>{item.descricao}</p>
              <Button
                type="link"
                title="Saiba mais"
                onClick={() => {setModalOpen(true); setselectedItem(item);}}
              />
            </CardProduct>
          );
        })}
      </ContainerProduct>
      <FoodModal item={selectedItem} isVisible={modalOpen} closeModal={() => setModalOpen(false)} />
    </Container>
  );
}
