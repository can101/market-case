import { combineReducers } from '@reduxjs/toolkit';
// imports area for reducers
import ProductReducer from "./products";
import CategoryReducer from "./category";
import ThemeReducer from "./theme";
import BasketReducer from "./basket";
import FavoriteReducer from "./favorites";

const rootReducer = combineReducers({
    products: ProductReducer,
    categories: CategoryReducer,
    theme: ThemeReducer,
    basket: BasketReducer,
    favorites: FavoriteReducer,
});

export default rootReducer;
