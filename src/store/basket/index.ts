import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IBasketState, IProduct } from "@/types";
import toast from 'react-hot-toast';

const initialState: IBasketState = {
    items: [],
    length: 0
}

interface IMessage {
    cart_increase_msg?: string,
    cart_decrease_msg?: string,
    cart_delete_msg?: string,
    cart_add_msg?: string,
    favorite_add_msg?: string,
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state: IBasketState, action: PayloadAction<{ product: IProduct, message: IMessage }>) => {
            const product = action.payload.product;
            if (!product) return;
            const index = state.items.findIndex(e => e.id === product.id);
            if (index > -1) {
                toast.success(action.payload.message.cart_increase_msg as string);
                state.items[index].count = state.items[index].count as number + 1;
                return;
            }
            toast.success(action.payload.message.cart_add_msg as string);
            state.items.push({
                ...product,
                count: 1,
            });
            state.length = state.items.length;
        },
        deleteBasket(state: IBasketState, action: PayloadAction<{ product: IProduct, message: IMessage }>) {
            const productIndex = state.items.findIndex(e => e.id === action.payload.product.id);
            if (productIndex > -1) {
                toast.success(action.payload.message.cart_delete_msg as string);
                state.items.splice(productIndex, 1);
                state.length = state.items.length;
            }
        },
        updateBasketItemCount(state: IBasketState, action: PayloadAction<{ product: IProduct, num: number, message: IMessage }>) {
            const productIndex = state.items.findIndex(e => e.id === action.payload.product.id);
            if (productIndex > -1) {
                toast.success(action.payload.num == -1 ? action.payload.message.cart_decrease_msg as string : action.payload.message.cart_increase_msg as string);
                state.items[productIndex].count = (state.items[productIndex].count as number) + action.payload.num;
            }
        },
    }
});

export const actions = basketSlice.actions;
export default basketSlice.reducer;
