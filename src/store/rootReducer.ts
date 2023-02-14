import {combineReducers} from '@reduxjs/toolkit';
// imports area for reducers
import ProductReducer from "./products";
import CategoryReducer from "./category";

const rootReducer = combineReducers({
    products: ProductReducer,
    categories: CategoryReducer
});

export default rootReducer;
