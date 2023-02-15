import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { IProductState } from '@/types';
import { getAllProductsAsyncThunk } from './getAllProductsAsyncThunk';

const initialState: IProductState = {
    items: [],
    loading: false,
    error: '',
    temp: []
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterProductsCategory: (state: IProductState, action: PayloadAction<{ category: string }>) => {
            const { category } = action.payload;
            if (category === 'All') {
                state.items = state.temp;
                return;
            }
            state.items = state.temp.filter(e => e.category === category);
        },
        sortBy: (state, action) => {

        },
        searchProductName: (state, action) => {
            const regex = new RegExp('s', 'i');
            const res = state.items.filter(e => regex.test(e.name));
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProductsAsyncThunk.pending, (state) => {
            state.loading = true;
        }).addCase(getAllProductsAsyncThunk.fulfilled, (state, action) => {
            state.items = state.temp = action.payload;
            state.loading = false;
            state.error = '';
        }).addCase(getAllProductsAsyncThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.error?.message ?? '';
        });
    }
});

export const actions = productSlice.actions;
export default productSlice.reducer;
