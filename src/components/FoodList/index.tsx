import { Container } from "../../globalStyle";
import { CardProduct, ContainerProduct } from "./style";
import FoodModal from "../FoodModal";
import Button from "../Button";
import { useState } from "react";
import type { MenuItem } from "../../types";
type Props = {
  items: MenuItem[];
};

export default function FoodList({ items }: Props) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  return (
    <Container>
      <ContainerProduct>
        {items.map((item) => {
          return (
            <CardProduct key={item.id}>
              <img src={item.foto} alt="" />
              <h4>{item.nome}</h4>
              <p>{item.descricao}</p>
              <Button
                type="link"
                title="Saiba mais"
                onClick={() => {
                  setModalOpen(true);
                  setSelectedItem(item);
                }}
              />
            </CardProduct>
          );
        })}
      </ContainerProduct>
      <FoodModal
        item={selectedItem}
        isVisible={modalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </Container>
  );
}
