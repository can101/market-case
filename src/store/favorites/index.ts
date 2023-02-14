import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: [],
    },
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

export const actions = favoritesSlice.actions;
export default favoritesSlice.reducer;
