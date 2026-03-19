import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initialState: cartFoodState = {
    items: [],
    isOpen: false,
    step:"cart"
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
        }
    }
});

export const { close, open, addFoodCart, removeFood, setStep } = CartSlice.actions;
export default CartSlice.reducer;

