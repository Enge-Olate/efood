import { useAppDispatch } from "../../hooks/appDispatch";
import { useAppSelector } from "../../hooks/appSelector"
import CheckoutCart from "../../pages/checkout/CheckoutCart";
import CheckoutDelivery from "../../pages/checkout/CheckoutDelivery";
import CheckoutFinal from "../../pages/checkout/CheckoutFinal";
import CheckoutPayment from "../../pages/checkout/checkoutPayment";
import { close } from "../../store/reducers/cart";
import { CheckoutLayout } from "../CheckoutLayout";

export default function CheckoutSidebar(){
    const {isOpen, step}= useAppSelector((state)=> state.cart);
    const dispatch = useAppDispatch();
    const handleClose=()=>{
        dispatch(close());
    };
    return(
        <CheckoutLayout isOpen={isOpen} onClose={handleClose}>
            {step === "cart" && <CheckoutCart/>}
            {step === "delivery" && <CheckoutDelivery/>}
            {step === "payment" && <CheckoutPayment/>}
            {step === "confirmation" && <CheckoutFinal/>}
        </CheckoutLayout>
    )
}