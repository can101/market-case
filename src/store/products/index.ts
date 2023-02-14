import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { IProductState } from '../../types';
import { getAllProductsAsyncThunk } from './getAllProductsAsyncThunk';


const initialState: IProductState = {
    items: [],
    loading: false,
    error: '',
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProductsAsyncThunk.pending, (state) => {
            state.loading = true;
        }).addCase(getAllProductsAsyncThunk.fulfilled, (state, action) => {
            state.items = action.payload;
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
