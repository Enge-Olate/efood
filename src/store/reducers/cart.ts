import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {type DeliveryFormData } from "../../deliveryFormSchema";
import type { cartFoodState, CheckoutStep, MenuItem } from "../../types";


const initialState: cartFoodState = {
    items: [],
    isOpen: false,
    step:"cart",
<<<<<<< HEAD
=======
    orderId: undefined,
>>>>>>> 691ae7d583aea266f4b1461e913bd18f1ed6b450
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setStep:(state, action: PayloadAction<CheckoutStep>)=>{
            state.step = action.payload;
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false;
            state.step="cart";
        },
        addFoodCart: (state, action: PayloadAction<MenuItem>) => {
            state.items.push(action.payload);
        },
        removeFood: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            if (index >= 0 && index < state.items.length) {
                state.items.splice(index, 1);
            }
        },
        setDelivery:(state, action: PayloadAction<DeliveryFormData["delivery"]>)=>{
            state.delivery = action.payload;
            state.step="payment"
        },
        clearCart:(state)=>{
            state.items =[];
            state.delivery=undefined;
            state.step="cart";
        },
<<<<<<< HEAD
    }
});

export const { close, open, addFoodCart, removeFood, setStep, setDelivery, clearCart } = CartSlice.actions;
=======
        setOrderId:(state, action: PayloadAction<string>)=>{
            state.orderId = action.payload;
        }
    }
});

export const { close, open, addFoodCart, removeFood, setStep, setDelivery, clearCart, setOrderId } = CartSlice.actions;
>>>>>>> 691ae7d583aea266f4b1461e913bd18f1ed6b450
export default CartSlice.reducer;

