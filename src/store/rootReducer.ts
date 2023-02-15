import { combineReducers } from '@reduxjs/toolkit';
// imports area for reducers
import ProductReducer from "./products";
import CategoryReducer from "./category";
import ThemeReducer from "./theme";

const rootReducer = combineReducers({
    products: ProductReducer,
    categories: CategoryReducer,
    theme: ThemeReducer
});

export default rootReducer;
