import toast from "react-hot-toast";
import fechar from "../../assets/close_1.png";
import Button from "../Button";
import { Modal, ModalContent, ModalInfo } from "./style";
import { useAppDispatch } from "../../hooks/appDispatch";
import { addFoodCart } from "../../store/reducers/cart";
import { formatPrices } from "../../utils";
import { colors } from "../../globalStyle";
export default function FoodModal({ isVisible, closeModal, item }: ModalProps) {
  const dispatch = useAppDispatch();
  const handleCart = () => {
    dispatch(addFoodCart(item!));
    notityToast();
    closeModal();
  };

  const notityToast=()=>{
    toast.success(`${item?.nome} adicionado ao carrinho!`, {
      duration: 4000,
      icon:"🥘",
      style:{
        color:`${colors.colorFontTomato}`,
        backgroundColor: `${colors.orangePale}`,
      }
    })
  };

  if (!isVisible || !item) return null;

  return (
    <Modal onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <header>
          <img src={fechar} alt="Clique para fechar" onClick={closeModal} />
        </header>
        <img src={item.foto} alt={item.nome} />
        <ModalInfo>
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          <p>{`serve ${item.porcao}`}</p>
          <Button
            onClick={() => handleCart()}
            title={`Adicionar ao carrinho - ${formatPrices(item.preco)}`}
            type="button"
            variant="primary"
          />
        </ModalInfo>
      </ModalContent>
    </Modal>
  );
}
