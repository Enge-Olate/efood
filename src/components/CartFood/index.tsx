import { CartContainer, CartProduct, Overlay, Sidebar } from "./style";
import dump from "../../assets/dump.png";
import Button from "../Button";
import { useAppSelector } from "../../hooks/appSelector";
import type { RootState } from "../../store";
import { useAppDispatch } from "../../hooks/appDispatch";
import { close, removeFood } from "../../store/reducers/cart";
import type { MenuItem } from "../../types";
import { formatPrices } from "../../utils";
export default function CartFood() {
  const { isOpen, items } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const closeCart = () => {
    dispatch(close());
  };
  const removeItemCart =(id: number)=>{
    dispatch(removeFood(id));
  };
  const total=()=>{
    return items.reduce((amount, valueCurrent)=>{
      return amount += valueCurrent.preco
    }, 0);
  };
  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item: MenuItem) => (
            <CartProduct key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h4>{item.nome}</h4>
                <p>{formatPrices(item.preco)}</p>
              </div>
              <img onClick={()=> removeItemCart(item.id)} src={dump} alt="" />
            </CartProduct>
          ))}
        </ul>
        <div>
          <p>Valor total</p>
          <p>{formatPrices(total())}</p>
        </div>
        <Button
          variant="primary"
          title="Continuar com a entrega"
          type="button"
        />
      </Sidebar>
    </CartContainer>
  );
}
