import { Container } from "../../globalStyle";
import { CardProduct, ContainerProduct } from "./style";
import pizza from "../../assets/pizza.png";
import Button from "../Button";
import FoodModal from "../FoodModal";
import { useState } from "react";
export default function FoodList() {
  const [modalOpen, setModalOpen]= useState(false);

  return (
    <Container>
      <ContainerProduct>
        <CardProduct>
          <img src={pizza} alt="Pizza" />
          <h4>Pizza Marguerita</h4>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <Button type="link" title="Saiba mais" onclick={()=>setModalOpen(true)}/>
        </CardProduct>
        <CardProduct>
          <img src={pizza} alt="Pizza" />
          <h4>Pizza Marguerita</h4>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <Button type="link" title="Saiba mais" onclick={()=>setModalOpen(true)}/>
        </CardProduct>
        <CardProduct>
          <img src={pizza} alt="Pizza" />
          <h4>Pizza Marguerita</h4>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <Button type="link" title="Saiba mais" onclick={()=>setModalOpen(true)}/>
        </CardProduct>
        <CardProduct>
          <img src={pizza} alt="Pizza" />
          <h4>Pizza Marguerita</h4>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <Button type="link" title="Saiba mais" onclick={()=>setModalOpen(true)}/>
        </CardProduct>
        <CardProduct>
          <img src={pizza} alt="Pizza" />
          <h4>Pizza Marguerita</h4>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <Button type="link" title="Saiba mais" onclick={()=>setModalOpen(true)}/>
        </CardProduct>
        <CardProduct>
          <img src={pizza} alt="Pizza" />
          <h4>Pizza Marguerita</h4>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <Button type="link" title="Saiba mais" onclick={()=>setModalOpen(true)}/>
        </CardProduct>
        <CardProduct>
          <img src={pizza} alt="Pizza" />
          <h4>Pizza Marguerita</h4>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <Button type="link" title="Saiba mais" onclick={()=>setModalOpen(true)}/>
        </CardProduct>
      </ContainerProduct>
      <FoodModal isVisible={modalOpen} clolseModal={()=> setModalOpen(false)} />
    </Container>
  );
}
