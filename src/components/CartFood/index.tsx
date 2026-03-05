import { CartContainer, CartProduct, Overlay, Sidebar } from "./style";
import pizza from "../../assets/pizza.png";
import dump from "../../assets/dump.png";
import Button from "../Button";
export default function CartFood() {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartProduct>
            <img src={pizza} alt="" />
            <div>
              <h4>Name</h4>
              <p>preço</p>
            </div>
              <img src={dump} alt="" />
          </CartProduct>
          <CartProduct>
            <img src={pizza} alt="" />
            <div>
              <h4>Name</h4>
              <p>preço</p>
            </div>
              <img src={dump} alt="" />
          </CartProduct>
          <CartProduct>
            <img src={pizza} alt="" />
            <div>
              <h4>Name</h4>
              <p>preço</p>
            </div>
              <img src={dump} alt="" />
          </CartProduct>
        </ul>
        <div>
            <p>Valor total</p>
            <p>R$ 145,90</p>
        </div>
        <Button variant="primary" title="Continuar com a entrega"type="button"/>
      </Sidebar>
    </CartContainer>
  );
}
