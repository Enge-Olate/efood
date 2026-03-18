import { useNavigate } from "react-router-dom";
import { CartContainer, CartProduct, Overlay, Sidebar } from "./style";
import dump from "../../assets/dump.png";
import Button from "../Button";
import { useAppSelector } from "../../hooks/appSelector";
import type { RootState } from "../../store";
import { useAppDispatch } from "../../hooks/appDispatch";
import { close, removeFood } from "../../store/reducers/cart";
import { formatPrices } from "../../utils";
export default function CartFood() {
  const { isOpen, items } = useAppSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const closeCart = () => {
    dispatch(close());
  };
  const removeItemCart = (id: number) => {
    dispatch(removeFood(id));
  };
  const total = () => {
    return items.reduce((acc, item) => (acc += item.preco), 0);
  };
  const goTo = () => {
    navigate("/checkout");
  };
  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item, index) => (
                <CartProduct key={index}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>{formatPrices(item.preco)}</p>
                  </div>
                  <img
                    onClick={() => removeItemCart(index)}
                    src={dump}
                    alt="Lixeira"
                  />
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
              onClick={goTo}
            />
          </>
        ) : (
          <>
            <p className="emptyCart">Sua sacola está vazia... por enquanto!😏</p>
            <Button to={"/"} onClick={closeCart} type="link" title="Veja os restaurantes" variant="primary"/>
          </>
        )}
      </Sidebar>
    </CartContainer>
  );
}
