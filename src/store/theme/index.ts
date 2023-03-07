import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IThemeState } from '@/types';
import { toast } from 'react-hot-toast';

const initialState: IThemeState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<{ theme: string, message: string }>) {
            state.theme = action.payload.theme;
            toast.success(action.payload.message);
        },
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;