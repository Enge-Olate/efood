import { Container } from "../../globalStyle";
import { CardProduct, ContainerProduct } from "./style";
import pizza from "../../assets/pizza.png";
import Button from "../Button";
export default function FoodList(){
    return(
        <Container>
            <ContainerProduct>
                <CardProduct>
                    <img src={pizza}alt="Pizza"/>
                    <h4>Pizza Marguerita</h4>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>   
                    <Button
                        title="Adicionar ao carrinho"
                    />
                </CardProduct>
                <CardProduct>
                    <img src={pizza}alt="Pizza"/>
                    <h4>Pizza Marguerita</h4>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>   
                    <Button
                        title="Adicionar ao carrinho"
                    />
                </CardProduct>
                <CardProduct>
                    <img src={pizza}alt="Pizza"/>
                    <h4>Pizza Marguerita</h4>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>   
                    <Button
                        title="Adicionar ao carrinho"
                    />
                </CardProduct>
                <CardProduct>
                    <img src={pizza}alt="Pizza"/>
                    <h4>Pizza Marguerita</h4>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>   
                    <Button
                        title="Adicionar ao carrinho"
                    />
                </CardProduct>
                <CardProduct>
                    <img src={pizza}alt="Pizza"/>
                    <h4>Pizza Marguerita</h4>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>   
                    <Button
                        title="Adicionar ao carrinho"
                    />
                </CardProduct>
                <CardProduct>
                    <img src={pizza}alt="Pizza"/>
                    <h4>Pizza Marguerita</h4>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>   
                    <Button
                        title="Adicionar ao carrinho"
                    />
                </CardProduct>
                <CardProduct>
                    <img src={pizza}alt="Pizza"/>
                    <h4>Pizza Marguerita</h4>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>   
                    <Button
                        title="Adicionar ao carrinho"
                    />
                </CardProduct>
                
            </ContainerProduct>
        </Container>

    );
}