import fechar from "../../assets/close_1.png";
import Button from "../Button";
import { Modal, ModalContent, ModalInfo } from "./style";
import type { MenuItem } from "../../types";
import { useAppDispatch } from "../../hooks/appDispatch";
import { addFoodCart, open } from "../../store/reducers/cart";
type Props = {
  isVisible: boolean;
  closeModal: () => void;
  item: MenuItem | null;
};
export default function FoodModal({ isVisible, closeModal, item }: Props) {
  const dispatch = useAppDispatch();
  const handleOpenCart = ()=>{
    dispatch(open());
    dispatch(addFoodCart(item!));
  };
 
  if (!isVisible || !item) return null;

  return (
    <Modal onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <header>
          <img src={fechar} alt="Clique para fechar" onClick={closeModal} />
        </header>
        <img
          src={item.foto}
          alt={item.nome}/>
        <ModalInfo>
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          <p>{`serve ${item.porcao}`}</p>
          <Button onClick={()=>handleOpenCart()} title={`Adicionar ao carrinho - R$ ${item.preco}`} type="button" variant="primary" />
        </ModalInfo>
      </ModalContent>
    </Modal>
  );
}
