import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type IProduct } from "@/types";

export const getAllProductsAsyncThunk = createAsyncThunk(
    'products/get',
    async () => {
        const { data: { products } } = await axios.get("/data/db.json");
        const newProductList: IProduct[] = products.map((item: IProduct) => ({ ...item, isFavorite: false }))
        return newProductList;
    }
);
