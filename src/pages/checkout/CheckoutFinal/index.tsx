import Button from "../../../components/Button";
import { CheckoutLayout } from "../../../components/CheckoutLayout";
import { useAppDispatch } from "../../../hooks/appDispatch";
import { useAppSelector } from "../../../hooks/appSelector";
import type { RootState } from "../../../store";
import { close } from "../../../store/reducers/cart";
import { Confirmation, GladConfirmation, Header } from "./style";

export default function CheckoutFinal() {
  const { isOpen } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const closeCart = () => {
    dispatch(close());
  };


  return (
    <CheckoutLayout isOpen={isOpen} onClose={closeCart}>
      <Header>
        <h4>Pedido realizado - orderId</h4>
      </Header>
      <GladConfirmation>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
          <br></br>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
          <br></br>

        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
          <br></br>

        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
      </GladConfirmation>
      <Confirmation>
        <Button title="Concluir" type="link" variant="primary" onClick={closeCart} to={"/"}/>
      </Confirmation>
    </CheckoutLayout>
  );
}
