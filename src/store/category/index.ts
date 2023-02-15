import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { ICategoryState } from '@/types';
import { getAllCategoryAsyncThunk } from './getAllCategoryAsyncThunk';


const initialState: ICategoryState = {
    items: [],
    loading: false,
    error: '',
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCategoryAsyncThunk.pending, (state) => {
            state.loading = true;
        }).addCase(getAllCategoryAsyncThunk.fulfilled, (state, action) => {
            action.payload.unshift({ id: 0, name: 'All' });
            state.items = action.payload;
            state.loading = false;
            state.error = '';
        }).addCase(getAllCategoryAsyncThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.error?.message ?? '';
        });
    }
});

export const actions = categorySlice.actions;
export default categorySlice.reducer;
