import { createSlice } from '@reduxjs/toolkit';
import type { IThemeState } from '@/types';

const initialState: IThemeState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;