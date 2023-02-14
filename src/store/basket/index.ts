import {createSlice} from '@reduxjs/toolkit';
import type {IBasketState} from "../../types";

const initialState: IBasketState = {
    items: [],
    total: 0,
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: () => {
            // item props check if item exists in basket
        },
        deleteBasket() {
            // props item
        },
        updateBasketItemCount() {
            // props number
        },
    }
});

export const actions = basketSlice.actions;
export default basketSlice.reducer;
