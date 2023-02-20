import { combineReducers } from '@reduxjs/toolkit';
// imports area for reducers
import ProductReducer from "./products";
import ThemeReducer from "./theme";
import BasketReducer from "./basket";
import DeliveryReducer from "./delivery-info";

const rootReducer = combineReducers({
    products: ProductReducer,
    theme: ThemeReducer,
    basket: BasketReducer,
    delivery: DeliveryReducer,
});

export default rootReducer;
