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
            const idFood = state.items.find((item)=>item.id === action.payload.id);
            if(!idFood){
                state.items.push(action.payload);
            }else{
                alert('Prato já adicionado!');
            }
        },
        removeFood:(state, action: PayloadAction<number>)=>{
            state.items = state.items.filter((item)=> item.id !== action.payload);
        }
    }
});

export const {close, open, addFoodCart, removeFood} = CartSlice.actions;
export default CartSlice.reducer;

