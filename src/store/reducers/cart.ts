import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MenuItem } from "../../types";

interface cartFoodState{
    items: MenuItem[],
    isOpen: boolean,
}

const initialState: cartFoodState ={
    items:[],
    isOpen: false,
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        open:(state)=>{
            state.isOpen = true
        },
        close:(state)=>{
            state.isOpen=false;
        },
        addFoodCart:(state, action: PayloadAction<MenuItem>)=>{
            const addProduct=state.items.push(action.payload);
            if(addProduct)alert('Adicionado ao carrinho!');
        },
        removeFood:(state, action: PayloadAction<number>)=>{
            const index = action.payload;
            if(index >= 0 && index < state.items.length){
                state.items.splice(index, 1);
            }
        }
    }
});

export const {close, open, addFoodCart, removeFood} = CartSlice.actions;
export default CartSlice.reducer;

