import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IFavoriteState } from '@_types/index';

const initialState: IFavoriteState = {
    items: [],
    length: 0,
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavoriteItem: (state: IFavoriteState, action: PayloadAction<{ product: IProduct }>) => {
            const { product } = action.payload;
            console.log(product);
            
            const exist = state.items.findIndex((item) => item.id === product.id);
            if (exist === -1) {
                state.items.push({...product});
                state.length++;
            }
        },
        deleteFavoriteItem(state: IFavoriteState, action: PayloadAction<{ product: IProduct }>) {
            const { product } = action.payload;
            const index = state.items.findIndex((item) => item.id === product.id);
            if (index !== -1) {
                state.items.splice(index, 1);
                state.length--;
            }
        },
        checkProductExistFavorite(state: IFavoriteState, action: PayloadAction<{ product: IProduct }>) {
            const { product } = action.payload;
            const exist = state.items.findIndex((item) => item.id === product.id);
        },
    }
});

export const { addFavoriteItem, checkProductExistFavorite, deleteFavoriteItem } = favoritesSlice.actions;
export default favoritesSlice.reducer;
