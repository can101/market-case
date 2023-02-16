import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IBasketState, IProduct } from "@/types";

const initialState: IBasketState = {
    items: [],
    total: 0,
    length: 0
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state: IBasketState, action: PayloadAction<{ product: IProduct }>) => {
            const product = action.payload.product;
            if (!product) return;
            const index = state.items.findIndex(e => e.id === product.id);
            const num = state.items.reduce((a, b) => a + (b.price * (b.count as number)), 0);
            state.total = (num as number).toFixed(2) as unknown as number;
            if (index > -1) {
                state.items[index].count = state.items[index].count as number + 1;
                console.log('index', index, state.items[index]);
                return;
            }
            state.items.push({
                ...product,
                count: 1,
            });
            state.length = state.items.length;
        },
        deleteBasket(state: IBasketState, action: PayloadAction<{ product: IProduct }>) {
            const productIndex = state.items.findIndex(e => e.id === action.payload.product.id);
            if (productIndex > -1) {
                state.items.splice(productIndex, 1);
                state.length = state.items.length;
            }
        },
        updateBasketItemCount(state: IBasketState, action: PayloadAction<{ product: IProduct, num: number }>) {
            const productIndex = state.items.findIndex(e => e.id === action.payload.product.id);
            if (productIndex > -1) {
                state.items[productIndex].count = (state.items[productIndex].count as number) + action.payload.num;
            }
            const num = state.items.reduce((a, b) => a + (b.price * (b.count as number)), 0);
            state.total = (num as number).toFixed(2) as unknown as number;
        },
    }
});

export const actions = basketSlice.actions;
export default basketSlice.reducer;
