import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
// import { type IProduct } from "../../types";
// import axios from "axios";

export const getAllCategoryAsyncThunk = createAsyncThunk(
    'category/get',
    async () => {
        console.log("getAllCategoryAsyncThunk");
        const {data: {products, categories}, status} = await axios.post("/data/db.json");
        // console.log('====================================');
        console.log('response', status, categories, products);
        // console.log('====================================');
        // const data: IProduct[] = await response.json();
        return categories;
    }
);
