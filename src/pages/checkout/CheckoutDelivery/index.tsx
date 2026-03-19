import { CheckoutLayout } from "../../../components/CheckoutLayout";
import { useAppDispatch } from "../../../hooks/appDispatch";
import { useAppSelector } from "../../../hooks/appSelector"
import { close } from "../../../store/reducers/cart";

export default function CheckoutDelivery(){
    const {isOpen}=useAppSelector((state)=>state.cart);
    const dispatch = useAppDispatch();
    const closeCart=()=>{
        dispatch(close())
    }

    return(
        <CheckoutLayout isOpen={isOpen} onClose={closeCart}>
            <h4>Entrega</h4>
        </CheckoutLayout>
    )
}