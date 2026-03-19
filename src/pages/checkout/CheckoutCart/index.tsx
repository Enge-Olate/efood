import { CartProduct, InfoValue } from "./style";
import dump from "../../../assets/dump.png";
import Button from "../../../components/Button";
import { useAppSelector } from "../../../hooks/appSelector";
import type { RootState } from "../../../store";
import { useAppDispatch } from "../../../hooks/appDispatch";
import { close, removeFood, setStep } from "../../../store/reducers/cart";
import { formatPrices } from "../../../utils";
import { CheckoutLayout } from "../../../components/CheckoutLayout";
export default function CheckoutCart() {
  const { isOpen, items } = useAppSelector((state: RootState) => state.cart);
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
    dispatch(setStep("delivery"));
  };

  return (
    <CheckoutLayout isOpen={isOpen} onClose={closeCart}>
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
                  alt="Remover item"
                  title="Remover do carrinho"
                />
              </CartProduct>
            ))}
          </ul>
          <InfoValue>
            <p>Valor total</p>
            <p>{formatPrices(total())}</p>
          </InfoValue>
          <Button
            variant="primary"
            title="Continuar com a entrega"
            type="button"
            onClick={goTo}
          />
        </>
      ) : (
        <>
          <p className="emptyCart">Sua sacola está vazia... por enquanto! 😏</p>
          <Button
            to={"/"}
            onClick={closeCart}
            type="link"
            title="Veja os restaurantes"
            variant="primary"
          />
        </>
      )}
    </CheckoutLayout>
  );
}
